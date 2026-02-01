import re
from pathlib import Path

js_path = Path('/mnt/data/season_points_fix/app.js')
css_path = Path('/mnt/data/season_points_fix/style.css')

js = js_path.read_text(encoding='utf-8')
css = css_path.read_text(encoding='utf-8')

# ---------------- CSS: success inline message ----------------
if '.inline-error.success' not in css:
    css = css.replace(
        '.inline-error.show{display:block}',
        '.inline-error.show{display:block}\n.inline-error.success{color:#b7f5b0}'
    )

# ---------------- JS: add season records store ----------------
# 1) Bump IDB version to 2
js = re.sub(r'(const IDB_DB_VERSION = )\d+;', r'\g<1>2;', js)

# 2) Add season store constant
js = re.sub(r'(const IDB_STORE = "location_records";\n)', r'\1const IDB_STORE_SEASON = "season_location_records";\n', js, count=1)

# 3) Add season cache variable
if 'let seasonRecordsByLocation' not in js:
    js = js.replace(
        'let recordsByLocation = {}; // in-memory cache, persisted to IndexedDB\n',
        'let recordsByLocation = {}; // in-memory cache, persisted to IndexedDB\n\nlet seasonRecordsByLocation = {}; // season-only cache, persisted to IndexedDB\n'
    )

# 4) Ensure openIdb creates the season store on upgrade
if 'IDB_STORE_SEASON' in js and 'season_location_records' in js:
    # insert createObjectStore block after the existing store creation block
    pattern = r'if \(!db\.objectStoreNames\.contains\(IDB_STORE\)\) \{\s*db\.createObjectStore\(IDB_STORE, \{ keyPath: "location" \}\);\s*\}\s*'
    m = re.search(pattern, js)
    if m and 'IDB_STORE_SEASON' not in js[m.end():m.end()+250]:
        insert = (
            'if (!db.objectStoreNames.contains(IDB_STORE_SEASON)) {\n'
            '        db.createObjectStore(IDB_STORE_SEASON, { keyPath: "location" });\n'
            '      }\n'
        )
        js = js[:m.end()] + insert + js[m.end():]

# 5) Add season load/save helpers (if not present)
if 'async function idbLoadAllSeasonRecords' not in js:
    anchor = 'async function idbSaveAllRecords(records){'
    idx = js.find(anchor)
    if idx != -1:
        # place season functions just before idbSaveAllRecords
        insert = '''async function idbLoadAllSeasonRecords(){
  const db = await openIdb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE_SEASON, "readonly");
    const store = tx.objectStore(IDB_STORE_SEASON);
    const req = store.getAll();
    req.onsuccess = () => {
      const out = {};
      (req.result || []).forEach(row => { out[row.location] = row.records || {}; });
      resolve(out);
    };
    req.onerror = () => reject(req.error);
  });
}

async function idbSaveAllSeasonRecords(records){
  const db = await openIdb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE_SEASON, "readwrite");
    const store = tx.objectStore(IDB_STORE_SEASON);
    const clearReq = store.clear();
    clearReq.onerror = () => reject(clearReq.error);
    clearReq.onsuccess = () => {
      const entries = Object.entries(records || {});
      if (entries.length === 0) { resolve(); return; }
      let pending = entries.length;
      entries.forEach(([location, rec]) => {
        const putReq = store.put({ location, records: rec || {} });
        putReq.onerror = () => reject(putReq.error);
        putReq.onsuccess = () => {
          pending -= 1;
          if (pending === 0) resolve();
        };
      });
    };
    tx.onabort = () => reject(tx.error);
  });
}

'''
        js = js[:idx] + insert + js[idx:]

if 'async function loadSeasonRecords' not in js:
    # add after loadRecords
    insert = '''\n\n// Season records are stored separately so Season mode starts blank.
async function loadSeasonRecords(){
  let existing = {};
  try { existing = await idbLoadAllSeasonRecords(); } catch { existing = {}; }
  if (existing && Object.keys(existing).length) return existing;

  // legacy fallback (if any)
  let legacy = {};
  try { legacy = JSON.parse(localStorage.getItem('fishmetrics_season_records_v1') || "{}"); } catch { legacy = {}; }
  if (legacy && Object.keys(legacy).length){
    try { await idbSaveAllSeasonRecords(legacy); } catch {}
    return legacy;
  }
  return {};
}

function saveSeasonRecords(records){
  idbSaveAllSeasonRecords(records).catch(()=>{});
}
'''
    # place right after loadRecords function end (return {};)
    # find the end of loadRecords by locating 'return {};' last in that function.
    loc = js.find('async function loadRecords')
    if loc != -1:
        # naive: insert after the first occurrence of "return {};" that follows loadRecords
        after = js.find('return {};', loc)
        after = js.find('}\n', after)  # end brace line
        if after != -1:
            js = js[:after+2] + insert + js[after+2:]

# 6) Add helper to determine mode
if 'function isSeasonMode()' not in js:
    js = js.replace(
        'function getStoredWeight(loc, fishName){\n',
        'function isSeasonMode(){\n  return document.body.classList.contains(\'season-active\');\n}\n\nfunction getStoredWeight(loc, fishName){\n'
    )

# 7) Modify getStoredWeight/setStoredWeight to use correct store and allow updating career
js = re.sub(
    r'function getStoredWeight\(loc, fishName\)\{\n\s*return recordsByLocation\?\.\[loc\]\?\.\[fishName\] \?\? "";\n\}\n\nfunction setStoredWeight\(loc, fishName, value\)\{',
    'function getStoredWeight(loc, fishName){\n  const store = isSeasonMode() ? seasonRecordsByLocation : recordsByLocation;\n  return store?.[loc]?.[fishName] ?? "";\n}\n\nfunction setCareerStoredWeight(loc, fishName, value){\n  if(!recordsByLocation[loc]) recordsByLocation[loc] = {};\n  if(value === "" || value == null){\n    delete recordsByLocation[loc][fishName];\n  }else{\n    recordsByLocation[loc][fishName] = value;\n  }\n  saveRecordsToStorage();\n}\n\nfunction setStoredWeight(loc, fishName, value){',
    js,
    flags=re.M
)

# Patch setStoredWeight body to write to season or career store
# Find existing setStoredWeight and replace its internal target object and save call.
set_sw_pat = r'function setStoredWeight\(loc, fishName, value\)\{([\s\S]*?)\n\}'
msw = re.search(set_sw_pat, js)
if msw:
    body = msw.group(1)
    # replace references to recordsByLocation with store variable
    new_body = body
    if 'recordsByLocation' in new_body:
        new_body = re.sub(r'if\(!recordsByLocation\[loc\]\) recordsByLocation\[loc\] = \{\};',
                          'const store = isSeasonMode() ? seasonRecordsByLocation : recordsByLocation;\n  if(!store[loc]) store[loc] = {};', new_body)
        new_body = new_body.replace('delete recordsByLocation[loc][fishName];', 'delete store[loc][fishName];')
        new_body = new_body.replace('recordsByLocation[loc][fishName] = value;', 'store[loc][fishName] = value;')
    # ensure save uses correct store
    # Replace saveRecords(recordsByLocation) call patterns by saveSeasonRecords or saveRecords based on mode via saveRecordsToStorage later.
    new_body = re.sub(r'saveRecords\(recordsByLocation\);', 'if(isSeasonMode()) saveSeasonRecords(seasonRecordsByLocation || {}); else saveRecords(recordsByLocation || {});', new_body)
    # keep updateDashboard call
    js = js[:msw.start(1)] + new_body + js[msw.end(1):]

# 8) Update saveRecordsToStorage to also persist season records
if 'fishmetrics_season_records_v1' not in js[js.find('function saveRecordsToStorage'):js.find('function convertAllStoredRecords')]:
    js = js.replace(
        "    localStorage.setItem(STORAGE_KEY, JSON.stringify(recordsByLocation || {}));\n    localStorage.setItem('recordsUnit', weightUnit || 'lbs');",
        "    localStorage.setItem(STORAGE_KEY, JSON.stringify(recordsByLocation || {}));\n    localStorage.setItem('recordsUnit', weightUnit || 'lbs');\n    // Season records backup\n    localStorage.setItem('fishmetrics_season_records_v1', JSON.stringify(seasonRecordsByLocation || {}));"
    )
    # Also persist season to IDB
    js = js.replace(
        "    if(typeof saveRecords === 'function') saveRecords(recordsByLocation || {});",
        "    if(typeof saveRecords === 'function') saveRecords(recordsByLocation || {});\n    if(typeof saveSeasonRecords === 'function') saveSeasonRecords(seasonRecordsByLocation || {});"
    )

# 9) Convert unit conversion to include season records too
conv_pat = r'function convertAllStoredRecords\(fromUnit, toUnit\)\{([\s\S]*?)\n\}'
mconv = re.search(conv_pat, js)
if mconv and 'seasonRecordsByLocation' not in mconv.group(1):
    # replace function with one that converts both stores
    def repl(match):
        return '''function convertAllStoredRecords(fromUnit, toUnit){
  function convertObj(obj){
    if(!obj) return;
    if(fromUnit === toUnit) return;
    const factor = 2.2046226218; // lbs per kg
    for(const loc of Object.keys(obj)){
      const locObj = obj[loc];
      if(!locObj) continue;
      for(const fishName of Object.keys(locObj)){
        const raw = locObj[fishName];
        if(raw == null) continue;
        const s = String(raw).trim();
        if(s === '') continue;
        const n = parseFloat(s);
        if(Number.isNaN(n)) continue;

        let converted = n;
        if(fromUnit === 'lbs' && toUnit === 'kgs') converted = n / factor;
        if(fromUnit === 'kgs' && toUnit === 'lbs') converted = n * factor;

        locObj[fishName] = converted.toFixed(2);
      }
    }
  }

  if(fromUnit === toUnit) return;
  convertObj(recordsByLocation);
  convertObj(seasonRecordsByLocation);
  saveRecordsToStorage();
}
'''
    js = js[:mconv.start()] + repl(mconv) + js[mconv.end():]

# 10) Ensure backup payload includes season records (non-breaking)
if 'seasonRecordsByLocation' not in js[js.find('function buildBackupPayload'):js.find('function setupHeaderMenu')]:
    js = js.replace(
        '    recordsByLocation: recordsByLocation || {}\n  };',
        '    recordsByLocation: recordsByLocation || {},\n    seasonRecordsByLocation: seasonRecordsByLocation || {}\n  };'
    )

# 11) Ensure restore logic (if present) restores season records too
if 'seasonRecordsByLocation' in js:
    # Look for restore handler where it sets recordsByLocation from payload
    js = re.sub(
        r'(recordsByLocation\s*=\s*payload\.recordsByLocation\s*\|\|\s*\{\};)',
        r'\1\n    seasonRecordsByLocation = payload.seasonRecordsByLocation || {};',
        js
    )

# 12) Load season records in initApp
if 'seasonRecordsByLocation = await loadSeasonRecords();' not in js:
    js = js.replace(
        '  recordsByLocation = await loadRecords();',
        '  recordsByLocation = await loadRecords();\n  seasonRecordsByLocation = await loadSeasonRecords();'
    )

# 13) Season mode: when committing points, if it beats career, update career record too
# Insert after setStoredWeight(...) call in commitPoints
if 'Career PB!' not in js:
    js = js.replace(
        '      setStoredWeight(f.location, f.name, wStr);\n      recomputeFromDOM();',
        '      setStoredWeight(f.location, f.name, wStr);\n\n      // If this season entry beats the career record, update career too\n      try{\n        const careerRaw = (recordsByLocation?.[f.location]?.[f.name] ?? "");\n        const careerLbs = parseUserWeightToLbs(String(careerRaw||""));\n        const careerPts = (!Number.isNaN(careerLbs) && careerLbs>0) ? calculatePoints(careerLbs, f) : 0;\n        if(pts > (careerPts||0)) {\n          setCareerStoredWeight(f.location, f.name, wStr);\n          inlineErr.textContent = "Career PB! Updated.";\n          inlineErr.classList.add("show","success");\n          setTimeout(()=>{ inlineErr.classList.remove("success"); if(!inlineErr.textContent.startsWith("Must") && !inlineErr.textContent.startsWith("Enter")) { inlineErr.textContent=""; inlineErr.classList.remove("show"); } }, 1800);\n        }\n      }catch(_e){}\n\n      recomputeFromDOM();'
    )

# 14) Season mode points should start empty: since season store is separate, no further change needed.

js_path.write_text(js, encoding='utf-8')
css_path.write_text(css, encoding='utf-8')
print('Patched app.js and style.css')
