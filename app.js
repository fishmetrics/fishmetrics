
const CATEGORY_MIN_POINTS = { Common:300, Rare:400, Epic:500, Legendary:5000 };

const CATEGORY_ORDER = ["Common","Rare","Epic","Legendary"];
const CATEGORY_RANK = Object.fromEntries(CATEGORY_ORDER.map((c,i)=>[c,i]));

const LOCATION_ORDER = ["Paradise Island","Great Lakes","Costa Rica","Alaska","Australia","Scotland","Thailand","Amazon"];
const LOCATION_RANK = Object.fromEntries(LOCATION_ORDER.map((l,i)=>[l,i]));

const LOCATIONS = {
 "Paradise Island": [
  { name:"bluefish", category:"Common", min:6.61, max:31.75 },
  { name:"largetooth flounder", category:"Common", min:2.2, max:6.61 },
  { name:"blue trevally", category:"Common", min:4.41, max:17.64 },
  { name:"bonefish", category:"Common", min:2.2, max:22.05 },
  { name:"longtail tuna", category:"Common", min:11.02, max:79.15 },
  { name:"clownfish", category:"Common", min:0.02, max:0.11 },
  { name:"white tuna", category:"Rare", min:88.18, max:288.81 },
  { name:"humphead parrotfish", category:"Rare", min:4.41, max:94.8 },
  { name:"pelagic stingray", category:"Epic", min:8.82, max:108.03 },
  { name:"pacific footballfish", category:"Epic", min:2.2, max:4.41 },
  { name:"shredder", category:"Legendary", min:330.69, max:440.92 },
  { name:"spotfin porcupinefish", category:"Common", min:2.2, max:6.17 },
  { name:"snubnose pompano", category:"Common", min:2.2, max:19.84 }
 ],
 "Great Lakes": [
  { name:"alewife", category:"Common", min:0.22, max:0.44 },
  { name:"brook trout", category:"Common", min:4.41, max:17.64 },
  { name:"brown trout", category:"Common", min:8.82, max:110.23 },
  { name:"largemouth bass", category:"Common", min:4.41, max:22.05 },
  { name:"yellow perch", category:"Common", min:1.1, max:4.19 },
  { name:"white crappie", category:"Common", min:2.2, max:5.29 },
  { name:"white bass", category:"Common", min:2.2, max:7.05 },
  { name:"walleye", category:"Common", min:4.41, max:24.91 },
  { name:"sea lamprey", category:"Common", min:1.1, max:5.51 },
  { name:"pink salmon", category:"Common", min:4.41, max:15.43 },
  { name:"smallmouth bass", category:"Common", min:2.2, max:11.9 },
  { name:"round whitefish", category:"Common", min:2.2, max:5.95 },
  { name:"redear sunfish", category:"Common", min:0.22, max:6.61 },
  { name:"channel catfish", category:"Common", min:11.02, max:57.32 },
  { name:"bloater", category:"Common", min:0.22, max:1.1 },
  { name:"coho salmon", category:"Common", min:2.2, max:33.07 },
  { name:"chinook salmon", category:"Rare", min:11.02, max:134.48 },
  { name:"muskie", category:"Rare", min:4.41, max:68.34 },
  { name:"flathead catfish", category:"Rare", min:11.02, max:121.25 },
  { name:"lake trout", category:"Rare", min:11.02, max:70.55 },
  { name:"longnose gar", category:"Epic", min:11.02, max:48.5 },
  { name:"american eel", category:"Epic", min:4.41, max:16.09 },
  { name:"goldfish", category:"Epic", min:0.22, max:1.54 },
  { name:"lake sturgeon", category:"Epic", min:11.02, max:275.58 },
  { name:"bessie", category:"Legendary", min:440.92, max:1102.31 }
 ],
 "Costa Rica": [
  { name:"barracuda", category:"Common", min:6.61, max:110.23 },
  { name:"roosterfish", category:"Common", min:11.02, max:112.44 },
  { name:"dorado", category:"Common", min:11.02, max:88.18 },
  { name:"pompano", category:"Common", min:2.2, max:19.84 },
  { name:"wahoo", category:"Common", min:11.02, max:551.16 },
  { name:"tripletail", category:"Common", min:2.2, max:41.89 },
  { name:"tarpon", category:"Common", min:22.05, max:354.94 },
  { name:"yellowfin tuna", category:"Common", min:22.05, max:440.92 },
  { name:"sierra mackerel", category:"Common", min:4.41, max:19.62 },
  { name:"pacific sailfish", category:"Common", min:22.05, max:220.46 },
  { name:"jack crevalle", category:"Common", min:11.02, max:70.55 },
  { name:"cubera snapper", category:"Common", min:22.05, max:125.66 },
  { name:"broomtail grouper", category:"Common", min:22.05, max:200.62 },
  { name:"snook", category:"Common", min:4.41, max:52.91 },
  { name:"blue marlin", category:"Rare", min:110.23, max:1402.14 },
  { name:"striped marlin", category:"Rare", min:110.23, max:970.03 },
  { name:"nurse shark", category:"Rare", min:44.09, max:240.3 },
  { name:"black marlin", category:"Rare", min:110.23, max:1653.47 },
  { name:"bull shark", category:"Epic", min:22.05, max:696.66 },
  { name:"hammerhead shark", category:"Epic", min:44.09, max:335.1 },
  { name:"whale shark", category:"Epic", min:440.92, max:7495.72 },
  { name:"whitetip shark", category:"Epic", min:44.09, max:368.19 },
  { name:"don pedro", category:"Legendary", min:1873.93, max:3086.47 }
 ],
 "Alaska": [
  { name:"arctic char", category:"Common", min:6.61, max:33.07 },
  { name:"atka mackerel", category:"Common", min:2.2, max:4.41 },
  { name:"yellow irish lord", category:"Common", min:2.2, max:6.61 },
  { name:"lancetfish", category:"Common", min:2.2, max:19.84 },
  { name:"steelhead", category:"Common", min:6.61, max:55.12 },
  { name:"silver salmon", category:"Common", min:2.2, max:33.07 },
  { name:"rougheye rockfish", category:"Common", min:4.41, max:15.43 },
  { name:"pacific herring", category:"Common", min:0.22, max:0.66 },
  { name:"sockeye salmon", category:"Common", min:4.41, max:17.64 },
  { name:"dolly varden", category:"Common", min:6.61, max:39.68 },
  { name:"coalfish", category:"Common", min:11.02, max:68.34 },
  { name:"chum salmon", category:"Common", min:4.41, max:35.27 },
  { name:"capelin", category:"Common", min:0.02, max:0.22 },
  { name:"burbot", category:"Common", min:11.02, max:74.96 },
  { name:"bigmouth sculpin", category:"Common", min:1.1, max:6.61 },
  { name:"arctic grayling", category:"Common", min:4.41, max:8.82 },
  { name:"humpback salmon", category:"Common", min:4.41, max:15.43 },
  { name:"halibut", category:"Rare", min:44.09, max:800.28 },
  { name:"blue lingcod", category:"Rare", min:11.02, max:130.07 },
  { name:"spiny skate", category:"Rare", min:2.2, max:132.28 },
  { name:"wolf eel", category:"Rare", min:6.61, max:39.68 },
  { name:"king salmon", category:"Epic", min:11.02, max:134.48 },
  { name:"salmon shark", category:"Epic", min:88.18, max:385.81 },
  { name:"pacific sleeper shark", category:"Epic", min:22.05, max:800.28 },
  { name:"ocean sunfish", category:"Epic", min:220.46, max:5291.09 },
  { name:"kraken", category:"Legendary", min:440.92, max:1102.31 }
 ],
 "Australia": [
  { name:"black bream", category:"Common", min:2.2, max:8.82 },
  { name:"dusky flathead", category:"Common", min:6.62, max:33.07 },
  { name:"red emperor snapper", category:"Common", min:26.46, max:70.55 },
  { name:"shortfin mako shark", category:"Common", min:251.33, max:1113.33 },
  { name:"carpet shark", category:"Common", min:33.07, max:154.32 },
  { name:"port jackson shark", category:"Common", min:11.02, max:35.27 },
  { name:"spanish mackerel", category:"Common", min:44.09, max:154.32 },
  { name:"albacore", category:"Common", min:26.46, max:132.28 },
  { name:"barramundi", category:"Common", min:26.46, max:132.28 },
  { name:"unicorn leatherjacket", category:"Common", min:1.1, max:5.95 },
  { name:"tailor", category:"Common", min:6.61, max:31.75 },
  { name:"leafy seadragon", category:"Common", min:0.11, max:0.22 },
  { name:"rock flagtail", category:"Common", min:2.2, max:5.29 },
  { name:"black saddled coral grouper", category:"Common", min:17.64, max:52.91 },
  { name:"common stargazer", category:"Common", min:4.41, max:19.84 },
  { name:"skipjack tuna", category:"Common", min:22.05, max:88.18 },
  { name:"fingermark", category:"Common", min:4.41, max:22.05 },
  { name:"coral trout", category:"Common", min:22.05, max:50.71 },
  { name:"john dory", category:"Common", min:4.41, max:17.64 },
  { name:"luderick", category:"Common", min:2.2, max:8.82 },
  { name:"mangrove jack", category:"Common", min:6.61, max:19.18 },
  { name:"golden trevally", category:"Common", min:8.82, max:33.07 },
  { name:"queensland grouper", category:"Rare", min:440.92, max:1322.77 },
  { name:"smooth oreo dory", category:"Rare", min:4.41, max:11.02 },
  { name:"swordfish", category:"Rare", min:330.69, max:1433.01 },
  { name:"spotted handfish", category:"Rare", min:0.44, max:1.32 },
  { name:"giant trevally", category:"Rare", min:46.3, max:176.37 },
  { name:"tiger shark", category:"Epic", min:661.39, max:1779.13 },
  { name:"manta ray", category:"Epic", min:881.85, max:6613.87 },
  { name:"hoodwinker sunfish", category:"Epic", min:661.39, max:4409.25 },
  { name:"bunyip", category:"Legendary", min:165.35, max:440.92 }
 ],
 "Scotland": [
  { name:"carp", category:"Common", min:4.41, max:88.18 },
  { name:"sea trout", category:"Common", min:33.07, max:110.23 },
  { name:"grey trout", category:"Common", min:22.05, max:70.55 },
  { name:"twaite shad", category:"Common", min:0.66, max:3.31 },
  { name:"powan", category:"Common", min:8.82, max:24.25 },
  { name:"freshwater bream", category:"Common", min:2.2, max:13.23 },
  { name:"three spined stickleback", category:"Common", min:0.22, max:0.66 },
  { name:"chub", category:"Common", min:2.2, max:17.64 },
  { name:"tench", category:"Common", min:4.41, max:16.53 },
  { name:"allis shad", category:"Common", min:2.2, max:8.82 },
  { name:"northern pike", category:"Common", min:19.84, max:61.73 },
  { name:"rainbow trout", category:"Common", min:19.84, max:55.12 },
  { name:"gudgeon", category:"Common", min:0.22, max:0.44 },
  { name:"vendace", category:"Common", min:0.44, max:2.2 },
  { name:"roach", category:"Common", min:0.44, max:3.97 },
  { name:"rudd", category:"Common", min:0.88, max:2.65 },
  { name:"lamprey", category:"Common", min:1.1, max:5.51 },
  { name:"european perch", category:"Common", min:2.2, max:10.58 },
  { name:"dace", category:"Common", min:0.44, max:2.2 },
  { name:"european smelt", category:"Common", min:0.22, max:0.37 },
  { name:"european eel", category:"Rare", min:4.41, max:19.84 },
  { name:"european grayling", category:"Rare", min:2.2, max:14.77 },
  { name:"european whitefish", category:"Rare", min:2.2, max:22.05 },
  { name:"bull trout", category:"Epic", min:8.82, max:31.97 },
  { name:"scottish salmon", category:"Epic", min:26.46, max:101.41 },
  { name:"common sturgeon", category:"Epic", min:246.92, max:881.85 },
  { name:"nessie", category:"Legendary", min:551.0, max:771.62 }
 ],
"Thailand": [
  { name:"pla kad thong", category:"Common", min:0.22, max:1.1 },
  { name:"rice eel", category:"Common", min:0.22, max:1.1 },
  { name:"bighead carp", category:"Common", min:11.02, max:101.41 },
  { name:"alligator gar", category:"Common", min:22.05, max:302.03 },
  { name:"spotted sorubim", category:"Common", min:22.05, max:220.46 },
  { name:"marbled sand goby", category:"Common", min:1.1, max:6.61 },
  { name:"tapah", category:"Common", min:22.05, max:189.6 },
  { name:"red tail tiger catfish", category:"Common", min:22.05, max:176.37 },
  { name:"giant devil catfish", category:"Common", min:74.96, max:198.42 },
  { name:"empurau", category:"Common", min:6.61, max:44.09 },
  { name:"great snakehead", category:"Common", min:11.02, max:66.14 },
  { name:"yellow mystus", category:"Common", min:0.22, max:1.1 },
  { name:"wallago", category:"Common", min:48.5, max:99.21 },
  { name:"black ear catfish", category:"Common", min:2.2, max:9.48 },
  { name:"rohu", category:"Common", min:11.02, max:99.21 },
  { name:"ripsaw catfish", category:"Common", min:4.41, max:24.25 },
  { name:"malayan leaffish", category:"Common", min:0.44, max:1.1 },
  { name:"bambusa", category:"Common", min:8.82, max:114.64 },
  { name:"fire eel", category:"Common", min:1.1, max:4.41 },
  { name:"giant freshwater whipray", category:"Rare", min:319.67, max:1322.77 },
  { name:"striped catfish", category:"Rare", min:46.3, max:97.0 },
  { name:"giant pangasius", category:"Rare", min:220.46, max:661.39 },
  { name:"mekong giant catfish", category:"Epic", min:264.55, max:771.62 },
  { name:"juliens golden prize carp", category:"Epic", min:22.05, max:154.32 },
  { name:"giant siamese", category:"Epic", min:44.09, max:661.39 },
  { name:"naga", category:"Legendary", min:2204.62, max:6613.86 }
 ],
 "Amazon": [
  { name:"amazon pellona", category:"Common", min:2.2, max:15.65 },
  { name:"tucunare", category:"Common", min:2.2, max:19.84 },
  { name:"curimbata", category:"Common", min:2.2, max:15.43 },
  { name:"corvina", category:"Common", min:2.2, max:9.62 },
  { name:"jatuarana", category:"Common", min:1.1, max:9.7 },
  { name:"redtail catfish", category:"Common", min:22.05, max:97 },
  { name:"tiger sorubim", category:"Common", min:4.41, max:37.48 },
  { name:"redhook myleus", category:"Common", min:2.2, max:5.51 },
  { name:"peacock bass", category:"Common", min:2.2, max:14.99 },
  { name:"lambari", category:"Common", min:0.22, max:0.66 },
  { name:"zungaro", category:"Common", min:11.02, max:110.23 },
  { name:"pacu", category:"Common", min:6.61, max:44.09 },
  { name:"giant trahira", category:"Common", min:2.2, max:28.66 },
  { name:"redeye piranha", category:"Common", min:1.1, max:6.61 },
  { name:"red piranha", category:"Common", min:1.1, max:8.6 },
  { name:"speckled pavon", category:"Common", min:4.41, max:26.46 },
  { name:"freshwater barracuda", category:"Common", min:0.22, max:0.66 },
  { name:"bicuda", category:"Common", min:4.41, max:13.23 },
  { name:"arowana", category:"Common", min:8.82, max:13.23 },
  { name:"amazon puffer", category:"Common", min:0.22, max:0.44 },
  { name:"pirapitinga", category:"Common", min:6.61, max:55.12 },
  { name:"electric eel", category:"Rare", min:4.41, max:44.09 },
  { name:"flatwhiskered catfish", category:"Rare", min:2.2, max:16.98 },
  { name:"lau lau", category:"Rare", min:0.66, max:2.87 },
  { name:"rock bacu", category:"Rare", min:6.61, max:33.07 },
  { name:"cachama", category:"Epic", min:11.02, max:88.18 },
  { name:"arapaima", category:"Epic", min:44.09, max:440.92 },
  { name:"payara", category:"Epic", min:6.61, max:37.48 },
  { name:"boiuna", category:"Legendary", min:2204.62, max:6613.86 }
 ]
};


function setupShareButton(){
  const btn = document.getElementById('menuBtn'); // repurposed as Share button
  const dropdown = document.getElementById('shareDropdown');
  if(!btn) return;
  // avoid double-binding
  if(btn.dataset && btn.dataset.shareBound === '1') return;
  if(btn.dataset) btn.dataset.shareBound = '1';

  function closeMenu(){
    if(!dropdown) return;
    dropdown.classList.remove('open');
    btn.setAttribute('aria-expanded','false');
  }

  function toggleMenu(){
    if(!dropdown) {
      // fallback (no menu found)
      try{ downloadShareImage(); }catch(err){
        console.error('Share failed', err);
        alert('Could not generate share image.');
      }
      return;
    }
    const open = dropdown.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  btn.setAttribute('aria-haspopup','menu');
  btn.setAttribute('aria-expanded','false');

  btn.addEventListener('click', (e)=>{
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  });

  document.addEventListener('click', (e)=>{
    // close if clicking outside
    if(!dropdown || !dropdown.classList.contains('open')) return;
    const t = e.target;
    if(t === btn || dropdown.contains(t)) return;
    closeMenu();
  });

  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') closeMenu();
  });

  if(dropdown && !dropdown.dataset.bound){
    dropdown.dataset.bound = '1';
    dropdown.querySelectorAll('button.menu-item[data-share]').forEach(el=>{
      el.addEventListener('click', (e)=>{
        e.preventDefault();
        e.stopPropagation();
        closeMenu();
        const mode = el.getAttribute('data-share');
        const loc = el.getAttribute('data-loc') || '';
        try{
          if(mode === 'backup'){
            downloadBackupJSON();
            return;
          }
          if(mode === 'location' && loc) downloadShareImage({ location: loc });
          else downloadShareImage();
        }catch(err){
          console.error('Share failed', err);
          alert('Could not complete that action.');
        }
      });
    });
  }
}

function calculatePoints(w,f){
 if(!w||w<f.min||w>f.max) return 0;
 return Math.round(CATEGORY_MIN_POINTS[f.category]*(1+(w-f.min)/(f.max-f.min)));
}

function calculateStars(cat,p){
 if(!p) return 0;
 if(cat==="Common") return p<359?1:p<420?2:p<480?3:p<540?4:5;
 if(cat==="Rare") return p<480?1:p<560?2:p<640?3:p<720?4:5;
 if(cat==="Epic") return p<600?1:p<700?2:p<800?3:p<900?4:5;
 if(cat==="Legendary") return p<6000?1:p<7000?2:p<8000?3:p<9000?4:5;
 return 0;
}

const tbody=document.querySelector("tbody");

/* === Golden_v12 FINAL: Inject colgroup for records table at runtime === */
(function(){
  function getLocationSelect(){
    const selects = Array.from(document.querySelectorAll('select'));
    const locationHints = [/all locations/i, /paradise/i, /great lakes/i, /costa rica/i, /alaska/i, /australia/i, /scotland/i, /thailand/i, /amazon/i];
    for(const sel of selects){
      const opts = Array.from(sel.options || []).map(o => (o.textContent||'').trim());
      const joined = opts.join(' | ');
      if(locationHints.some(rx => rx.test(joined))) return sel;
    }
    return null;
  }

  function getSelectedLocationLabel(locSelect){
    if(!locSelect || !locSelect.options) return '';
    const idx = locSelect.selectedIndex;
    if(idx < 0) return '';
    let t = (locSelect.options[idx].textContent || '').trim();
    t = t.replace(/\s*\(\d+\)\s*$/, '');
    if(/all locations/i.test(t)) return '';
    return t;
  }

  function ensure(){
    try{
      const table = document.querySelector('.records-table') || document.querySelector('#recordsTable') || document.querySelector('table');
      if(!table) return;

      const thead = table.querySelector('thead');
      const tbody = table.querySelector('tbody');
      if(!thead || !tbody) return;

      const locSelect = getLocationSelect();
      const selectedLoc = getSelectedLocationLabel(locSelect);

      const ths = Array.from(thead.querySelectorAll('th'));
      const hasLocationHeader = ths.some(th => (th.textContent||'').trim().toLowerCase() === 'location');

      if(selectedLoc && !hasLocationHeader){
        const headerRow = thead.querySelector('tr');
        if(headerRow){
          const th = document.createElement('th');
          th.textContent = 'Location';
          headerRow.insertBefore(th, headerRow.firstChild);
        }
        const rows = Array.from(tbody.querySelectorAll('tr'));
        rows.forEach(tr => {
          const firstCell = tr.querySelector('td');
          const firstText = firstCell ? (firstCell.textContent||'').trim() : '';
          if(firstText && firstText === selectedLoc) return;
          const td = document.createElement('td');
          td.textContent = selectedLoc;
          tr.insertBefore(td, tr.firstChild);
        });
      }

      const headerCount = thead.querySelectorAll('th').length || 0;
      if(!headerCount) return;

      const existing = table.querySelector('colgroup');
      if(existing) existing.remove();

      const cg = document.createElement('colgroup');
      let widths;
      if(headerCount === 6){
        widths = ['22%','14%','22%','17%','15%','10%'];
      } else if(headerCount === 5){
        widths = ['16%','26%','17%','25%','16%'];
      } else {
        widths = Array.from({length: headerCount}, () => (100/headerCount).toFixed(2) + '%');
      }
      widths.forEach(w=>{
        const c = document.createElement('col');
        c.style.width = w;
        cg.appendChild(c);
      });
      table.prepend(cg);
      table.style.tableLayout = 'fixed';
    }catch(e){}
  }

  ensure();

  const locSelect = getLocationSelect();
  if(locSelect){
    locSelect.addEventListener('change', () => setTimeout(ensure, 0));
  }

  const root = document.querySelector('#logRecords') || document.querySelector('.log-records') || document.body;
  const obs = new MutationObserver(() => {
    clearTimeout(window.__fmEnsureTimer);
    window.__fmEnsureTimer = setTimeout(ensure, 0);
  });
  obs.observe(root, {childList: true, subtree: true});
})();
/* === End Golden_v12 FINAL === */


const locationSelect=document.getElementById("locationSelect");
const theadRow = document.querySelector("thead tr");

const totalFishCountEl = document.getElementById("totalFishCount");
const totalFishCountAllEl = document.getElementById("totalFishCountAll");

// Dashboard elements
const locationButtonsEl = document.getElementById("locationButtons");
const bestiaryProgressEl = document.getElementById("bestiaryProgress");
const donutEl = document.querySelector(".donut");

const avgStarsEl = document.getElementById("avgStars");
const totalPointsEl = document.getElementById("totalPoints");
const pct4El = document.getElementById("pct4");
const pct5El = document.getElementById("pct5");
const bestMapEl = document.getElementById("bestMap");



function initIncludeLegendaryToggle(){
  const el = document.getElementById("includeLegendaryToggle");
  if(!el) return;
  el.checked = !!includeLegendaryDashboard;
  el.addEventListener("change", ()=>{
    includeLegendaryDashboard = el.checked;
    localStorage.setItem("includeLegendaryDashboard", JSON.stringify(includeLegendaryDashboard));
    updateDashboard();
  });
}

// ---- Dashboard slicers (left panel) ----
// These slicers affect ONLY the Dashboard charts (not other tabs, not the records table).
let dashboardLocation = "__ALL__"; // "__ALL__" or a specific location
// Dashboard-only: include/exclude Legendary in KPIs + dashboard charts
let includeLegendaryDashboard = JSON.parse(localStorage.getItem("includeLegendaryDashboard") ?? "true");
let dashboardCategories = new Set(CATEGORY_ORDER); // multi-select

function updateScoreRangesLocation(){
  const el = document.getElementById('scoreRangesLocation');
  if(!el) return;
  el.textContent = (dashboardLocation && dashboardLocation !== '__ALL__') ? dashboardLocation : 'All Locations';
}

// (Global error banner removed; we now use inline errors next to inputs.)
function showError(){ /* no-op */ }

function populateLocationOptions(){
  // Build dropdown from LOCATIONS and include fish counts in the label
  locationSelect.innerHTML = "";

  // Combined view
  const allCount = Object.values(LOCATIONS).reduce((sum,arr)=>sum+arr.length,0);
  const allOpt = document.createElement("option");
  allOpt.value = "__ALL__";
  allOpt.textContent = `All Locations (${allCount})`;
  locationSelect.appendChild(allOpt);

  getLocationList().forEach(loc=>{
    const opt=document.createElement("option");
    opt.value=loc;
    opt.textContent = `${loc} (${LOCATIONS[loc].length})`;
    locationSelect.appendChild(opt);
  });

  // Total fish across all locations
  if(totalFishCountAllEl){
    totalFishCountAllEl.textContent = allCount;
  }
}
populateLocationOptions();

function buildLocationButtons(){
  if(!locationButtonsEl) return;
  locationButtonsEl.innerHTML = "";

  // Mirror the dropdown order
  const allBtn = document.createElement("button");
  allBtn.type = "button";
  allBtn.className = "loc-btn";
  allBtn.dataset.value = "__ALL__";
  allBtn.textContent = "All Locations";
  locationButtonsEl.appendChild(allBtn);

  getLocationList().forEach((loc, i)=>{
    const b = document.createElement("button");
    b.type = "button";
    b.className = "loc-btn";
    b.dataset.value = loc;
    b.textContent = `${i+1}. ${loc}`;
    locationButtonsEl.appendChild(b);
  });

  locationButtonsEl.addEventListener("click", (e)=>{
    const btn = e.target.closest("button.loc-btn");
    if(!btn) return;
    dashboardLocation = btn.dataset.value || "__ALL__";
    updateScoreRangesLocation();
    // Only Dashboard charts respond to slicers; keep Record Entry dropdown independent.
    try{ updateDashboard(); }catch(_){ }
  });
}

function setupRaritySlicers(){
  const items = Array.from(document.querySelectorAll('.rarity-legend .legend-item'));
  if(!items.length) return;

  function inferCategory(el){
    const sw = el.querySelector('.swatch');
    if(sw && sw.classList.contains('common')) return 'Common';
    if(sw && sw.classList.contains('rare')) return 'Rare';
    if(sw && sw.classList.contains('epic')) return 'Epic';
    if(sw && sw.classList.contains('legendary')) return 'Legendary';
    const txt = (el.textContent || '').trim().split(/\s+/)[0] || '';
    return txt ? (txt[0].toUpperCase() + txt.slice(1).toLowerCase()) : '';
  }

  function refreshUI(){
    items.forEach(el=>{
      const cat = el.dataset.category;
      el.classList.toggle('active', dashboardCategories.has(cat));
    });
  }

  items.forEach(el=>{
    const cat = inferCategory(el);
    if(!cat) return;
    el.dataset.category = cat;
    el.classList.add('slicer');
    el.addEventListener('click', ()=>{
      if(dashboardCategories.has(cat)) dashboardCategories.delete(cat);
      else dashboardCategories.add(cat);

      // Never allow an empty selection; empty means "All".
      if(dashboardCategories.size === 0){
        dashboardCategories = new Set(CATEGORY_ORDER);
      }
      refreshUI();
      try{ updateDashboard(); }catch(_){ }
    });
  });

  refreshUI();
}

function toTitleCase(str){
  return String(str)
    .toLowerCase()
    .replace(/\b([a-z])/g, (m)=>m.toUpperCase());
}


// --- Broken x-axis mapping for "Points Range by Type" chart (compress 1000–5000) ---
// Epic points top out around ~1000, and Legendary points begin around ~5000,
// so we place the break between these ranges.
const TYPE_RANGE_BREAK_LO = 1500;
const TYPE_RANGE_BREAK_HI = 4500;
// visual width (in axis units) reserved for the "break" zone
const TYPE_RANGE_BREAK_GAP = 400;

function mapTypeRangeX(x){
  const v = Number(x);
  if(!isFinite(v)) return v;
  if(v <= TYPE_RANGE_BREAK_LO) return v;

  // compress the mid-band into a small gap
  if(v < TYPE_RANGE_BREAK_HI){
    const t = (v - TYPE_RANGE_BREAK_LO) / (TYPE_RANGE_BREAK_HI - TYPE_RANGE_BREAK_LO);
    return TYPE_RANGE_BREAK_LO + t * TYPE_RANGE_BREAK_GAP;
  }

  // shift the high band left by the removed width (minus the gap)
  const shift = (TYPE_RANGE_BREAK_HI - TYPE_RANGE_BREAK_LO) - TYPE_RANGE_BREAK_GAP;
  return v - shift;
}

function unmapTypeRangeX(mapped){
  const v = Number(mapped);
  if(!isFinite(v)) return v;
  if(v <= TYPE_RANGE_BREAK_LO) return v;

  const hiBandStart = TYPE_RANGE_BREAK_LO + TYPE_RANGE_BREAK_GAP;
  if(v < hiBandStart){
    // inverse of the compressed mid-band
    const t = (v - TYPE_RANGE_BREAK_LO) / TYPE_RANGE_BREAK_GAP;
    return TYPE_RANGE_BREAK_LO + t * (TYPE_RANGE_BREAK_HI - TYPE_RANGE_BREAK_LO);
  }

  const shift = (TYPE_RANGE_BREAK_HI - TYPE_RANGE_BREAK_LO) - TYPE_RANGE_BREAK_GAP;
  return v + shift;
}


function tooltipTitleJoinSpaces(items){
  const it = items && items[0];
  if(!it) return '';
  const rawLbl = it.chart?.data?.labels?.[it.dataIndex];
  if(Array.isArray(rawLbl)) return rawLbl.join(' ');
  const lbl = rawLbl != null ? String(rawLbl) : (it.label != null ? String(it.label) : '');
  return lbl.replace(/,/g,' ');
}
  // Wrap labels on word boundaries for Fearsome Four (Chart.js supports array labels for multi-line)
  function __wrapWordsFearsome(label, maxLen=10){
    const words = String(label).trim().split(/\s+/).filter(Boolean);
    if(words.length <= 1) return label;

    // If it's exactly 2 words, always split 1/1 to reduce width.
    if(words.length === 2){
      return [words[0], words[1]];
    }

    // Greedy wrap by maxLen, but if it still ends up 1 line, force a balanced split.
    const lines = [];
    let line = "";
    for(const w of words){
      if(!line){ line = w; continue; }
      if((line + " " + w).length <= maxLen){
        line = line + " " + w;
      }else{
        lines.push(line);
        line = w;
      }
    }
    if(line) lines.push(line);

    if(lines.length <= 1){
      const mid = Math.ceil(words.length/2);
      return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
    }
    return lines;
  }

function renderPersonalBests(allFish){
  const wrap = document.getElementById('personalBestsGrid');
  if(!wrap) return;

  const locOrder = getLocationList();
  const locIndex = new Map(locOrder.map((l,i)=>[l,i]));
  const rarityOrder = ['Common','Rare','Epic','Legendary'];

  function pickBest(rarity){
    const candidates = (allFish || []).filter(f=>f.category === rarity);
    if(!candidates.length) return null;
    return candidates.reduce((best, cur)=>{
      if(!best) return cur;
      if(cur.points > best.points) return cur;
      if(cur.points < best.points) return best;
      if((cur.stars||0) > (best.stars||0)) return cur;
      if((cur.stars||0) < (best.stars||0)) return best;
      const ci = locIndex.has(cur.location) ? locIndex.get(cur.location) : 999;
      const bi = locIndex.has(best.location) ? locIndex.get(best.location) : 999;
      if(ci < bi) return cur;
      return best;
    }, null);
  }

  const tiles = rarityOrder.map(rarity=>{
    const best = pickBest(rarity);
    if(!best){
      return `
        <div class="best-tile" data-rarity="${rarity}">
          <div class="best-top">
            <div class="best-rarity">${rarity}</div>
            <div class="best-points">—</div>
          </div>
          <div class="best-fish">No record yet</div>
          <div class="best-meta">
            <span class="pill">⭐ —</span>
            <span class="pill">📍 —</span>
          </div>
        </div>
      `;
    }
    return `
      <div class="best-tile" data-rarity="${rarity}">
        <div class="best-top">
          <div class="best-rarity">${rarity}</div>
          <div class="best-points">${Math.round(best.points || 0)}</div>
        </div>
        <div class="best-fish">${toTitleCase(best.name)}</div>
        <div class="best-meta">
          <span class="pill">⭐ ${best.stars ?? 0}</span>
          <span class="pill">📍 ${best.location || '—'}</span>
        </div>
      </div>
    `;
  }).join('');

  wrap.innerHTML = tiles;
}


function getLocationList(){
  // Preserve desired location order even if object key order changes
  return LOCATION_ORDER.filter(l=>Object.prototype.hasOwnProperty.call(LOCATIONS,l));
}

// Persisted records per location (and in the combined view)
const STORAGE_KEY = "fishmetrics_records_v1"; // legacy (localStorage) key used only for one-time migration
const IDB_DB_NAME = "fishmetrics";
const IDB_DB_VERSION = 1;
const IDB_STORE = "location_records";

let recordsByLocation = {}; // in-memory cache, persisted to IndexedDB

function openIdb(){
  if (openIdb._p) return openIdb._p;
  openIdb._p = new Promise((resolve, reject) => {
    const req = indexedDB.open(IDB_DB_NAME, IDB_DB_VERSION);
    req.onupgradeneeded = (e) => {
      const db = req.result;
      if (!db.objectStoreNames.contains(IDB_STORE)) {
        db.createObjectStore(IDB_STORE, { keyPath: "location" });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return openIdb._p;
}

async function idbLoadAllRecords(){
  const db = await openIdb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, "readonly");
    const store = tx.objectStore(IDB_STORE);
    const req = store.getAll();
    req.onsuccess = () => {
      const out = {};
      (req.result || []).forEach(row => { out[row.location] = row.records || {}; });
      resolve(out);
    };
    req.onerror = () => reject(req.error);
  });
}

async function idbSaveAllRecords(records){
  const db = await openIdb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, "readwrite");
    const store = tx.objectStore(IDB_STORE);
    // Clear + re-add keeps behavior identical to previous single-key localStorage save
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

// One-time migration from localStorage (older builds) to IndexedDB
async function loadRecords(){
  let existing = {};
  try { existing = await idbLoadAllRecords(); } catch { existing = {}; }

  if (existing && Object.keys(existing).length) return existing;

  // If IDB is empty, try migrating legacy localStorage data (if present)
  let legacy = {};
  try { legacy = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch { legacy = {}; }

  if (legacy && Object.keys(legacy).length){
    try { await idbSaveAllRecords(legacy); } catch {}
    // keep localStorage as a fallback backup, but IndexedDB becomes source of truth
    return legacy;
  }
  return {};
}

// Save is "fire-and-forget" to keep the rest of the app logic synchronous
function saveRecords(records){
  idbSaveAllRecords(records).catch(()=>{});
}


let currentFish=[];

// -----------------------------
// Dashboard (Chart.js)
// -----------------------------
let pointsByRarityChart, starsByRarityChart, starCatchesChart, pointsByMapChart, legendaryChart, fearsomeChart, eliteEpicsChart, shortLivedEpicsChart, invisiblesChart;
// Map analytics dumbbell charts (declare to avoid ReferenceError if a chart is absent)
let typeDumbbellChart, commonDumbbellChart, rareDumbbellChart, epicDumbbellChart;

const LBS_PER_KG = 2.2046226218;
let weightUnit = (localStorage.getItem('weightUnit') || 'lbs'); // default lbs

function toLbs(v){ return (Number(v) || 0) * LBS_PER_KG; }
function fromLbs(v){ return (Number(v) || 0) / LBS_PER_KG; }
function fmtWeightDisplay(lbsVal){
  if(weightUnit === 'kgs'){
    const kg = fromLbs(lbsVal);
    return kg.toLocaleString(undefined, { maximumFractionDigits: 2 });
  }
  return (Number(lbsVal) || 0).toLocaleString(undefined, { maximumFractionDigits: 2 });
}

function tinyFishKgAcceptsDisplayed(rawKg, fish){
  if(!fish || typeof fish.max !== 'number') return false;
  if(weightUnit !== 'kgs') return false;

  const kgVal = parseFloat(rawKg);
  if(Number.isNaN(kgVal)) return false;

  // Treat as "tiny" for boundary purposes if the max is under ~1.00 kg (2dp UI),
  // or under ~5 lb. This avoids false max-boundary errors from kg<->lb rounding.
  const maxKg = fromLbs(fish.max);
  if(!(maxKg < 1.0 || fish.max < 5)) return false;

  const userCents = Math.round(kgVal * 100);
  const minCents  = Math.round(fromLbs(fish.min) * 100);
  const maxCents  = Math.round(maxKg * 100);

  // Allow +1 cent tolerance to match what users can reasonably enter at 2dp.
  return userCents >= minCents && userCents <= (maxCents + 1);
}

function parseAndClampRecordLbs(rawStr, fish){
  const s = String(rawStr ?? '').trim();
  if(!s) return NaN;
  let w = parseUserWeightToLbs(s);
  if(Number.isNaN(w) || !fish) return w;
  if(weightUnit === 'kgs' && tinyFishKgAcceptsDisplayed(s, fish)){
    if(w < fish.min) w = fish.min;
    if(w > fish.max) w = fish.max;
  }
  return w;
}


function parseUserWeightToLbs(raw){
  const v = Number.parseFloat(raw);
  if(raw === "" || Number.isNaN(v) || v <= 0) return NaN;
  return (weightUnit === 'kgs') ? toLbs(v) : v;
}
function displayWeightFromStored(raw){
  const v = Number.parseFloat(raw);
  if(raw === "" || Number.isNaN(v) || v <= 0) return raw;
  if(weightUnit === 'kgs'){
    return fromLbs(v).toLocaleString(undefined, { maximumFractionDigits: 2 });
  }
  return String(v);
}

function fmtNumber(n){
  const x = Number(n) || 0;
  return x.toLocaleString(undefined, { maximumFractionDigits: 2 });
}

function dumbbellTooltipLabel(context){
  const dsLabel = context?.dataset?.label || "";
  // Chart.js uses parsed.x for horizontal charts and parsed.y for vertical charts.
  // The dashboard mixes both, so pick the numeric value robustly.
  const val = (() => {
    const p = context?.parsed;
    if(p && typeof p.y !== 'undefined' && Number.isFinite(Number(p.y))) return p.y;
    if(p && typeof p.x !== 'undefined' && Number.isFinite(Number(p.x))) return p.x;
    const r = context?.raw;
    if(r && typeof r === 'number') return r;
    if(r && typeof r.y !== 'undefined' && Number.isFinite(Number(r.y))) return r.y;
    if(r && typeof r.x !== 'undefined' && Number.isFinite(Number(r.x))) return r.x;
    return 0;
  })();
  const fishName = context?.raw?.fishName;
  if((dsLabel === "Lowest" || dsLabel === "Highest") && fishName){
    return `${dsLabel}: ${val}, ${typeof toTitleCase==='function' ? toTitleCase(fishName) : fishName}`;
  }
  return dsLabel ? `${dsLabel}: ${val}` : `${val}`;
}


function clamp01(v){ return Math.max(0, Math.min(1, v)); }

function setDonutProgress(pct){
  if(!donutEl || !bestiaryProgressEl) return;
  const p = clamp01((Number(pct) || 0) / 100);
  const deg = Math.round(360 * p);
  donutEl.style.background = `conic-gradient(#9ad54d 0deg, #9ad54d ${deg}deg, rgba(255,255,255,.14) ${deg}deg)`;
  bestiaryProgressEl.textContent = `${(p * 100).toFixed(1)}%`;
}

function setTableHeaders(isAll){
  if(!theadRow) return;
  if(isAll){
    theadRow.innerHTML = `
      <th>Location</th>
      <th>Category</th>
      <th>Fish</th>
      <th>Your Record (<span id="recordsUnitLabel">${weightUnit}</span>)</th>
      <th>Points</th>
      <th>Stars</th>
    `;
  }else{
    theadRow.innerHTML = `
      <th>Category</th>
      <th>Fish</th>
      <th>Your Record (<span id="recordsUnitLabel">${weightUnit}</span>)</th>
      <th>Points</th>
      <th>Stars</th>
    `;
  }
}

function getStoredWeight(loc, fishName){
  return recordsByLocation?.[loc]?.[fishName] ?? "";
}

function setStoredWeight(loc, fishName, value){
  if(!recordsByLocation[loc]) recordsByLocation[loc] = {};
  if(value === "" || value == null){
    delete recordsByLocation[loc][fishName];
  }else{
    recordsByLocation[loc][fishName] = value;
  }
  saveRecords(recordsByLocation);
  try{ updateDashboard(); }catch(_e){}
}

function recomputeFromDOM(){
  document.querySelectorAll("tbody tr").forEach((row)=>{
    const idx = Number(row.dataset.idx);
    const fish = currentFish[idx];
    const inp = row.querySelector("input");
    const pointsCell = row.querySelector(".points");
    const starsCell = row.querySelector(".stars");

    // Reset
    inp.className = "";
    if(pointsCell) pointsCell.textContent = "";
    if(starsCell) starsCell.textContent = "";

    // Validation
    if(!/^(\d*(\.\d{0,2})?)?$/.test(inp.value)){
      inp.classList.add("invalid");
      return;
    }
    const rawStr = String(inp.value ?? '').trim();
    const w0 = parseUserWeightToLbs(rawStr);
    if(Number.isNaN(w0) || w0 <= 0){
      return;
    }
    let w = w0;
    if((w < fish.min || w > fish.max) && !(weightUnit === 'kgs' && tinyFishKgAcceptsDisplayed(rawStr, fish))){
      inp.classList.add("outofrange");
      return;
    }

    if(weightUnit === 'kgs' && tinyFishKgAcceptsDisplayed(rawStr, fish)){
      if(w < fish.min) w = fish.min;
      if(w > fish.max) w = fish.max;
    }

    const pts = calculatePoints(w, fish);
    const stars = calculateStars(fish.category, pts);

    if(pointsCell) pointsCell.textContent = pts;
    if(starsCell) starsCell.textContent = "⭐".repeat(stars);

  });

  updateDashboard();
}

function renderTable(){
 tbody.innerHTML="";
 showError("");

 const selected = locationSelect.value;
 const isAll = selected === "__ALL__";
 setTableHeaders(isAll);

 if(isAll){
  currentFish = getLocationList().flatMap(loc=>
    LOCATIONS[loc].map(f=>({ ...f, location: loc }))
  ).sort((a,b)=>{
    const ra=CATEGORY_RANK[a.category] ?? 999;
    const rb=CATEGORY_RANK[b.category] ?? 999;
    if(ra!==rb) return ra-rb;
    const la = (LOCATION_RANK[a.location] ?? 999) - (LOCATION_RANK[b.location] ?? 999);
    if(la!==0) return la;
    return a.name.localeCompare(b.name);
  });
 }else{
  currentFish=[...LOCATIONS[selected]].map(f=>({ ...f, location: selected })).sort((a,b)=>{
    const ra=CATEGORY_RANK[a.category] ?? 999;
    const rb=CATEGORY_RANK[b.category] ?? 999;
    if(ra!==rb) return ra-rb;
    return a.name.localeCompare(b.name);
  });
 }

 if(totalFishCountEl) totalFishCountEl.textContent = currentFish.length;

 currentFish.forEach((f, idx)=>{
  const r=document.createElement("tr");
  r.classList.add(f.category.toLowerCase());
  r.dataset.idx = String(idx);

  const rangeTip = `Min: ${fmtWeightDisplay(f.min)} ${(weightUnit === 'kgs') ? 'kgs' : 'lbs'}  •  Max: ${fmtWeightDisplay(f.max)} ${(weightUnit === 'kgs') ? 'kgs' : 'lbs'}`;
  const fishLabel = `<span class="fish-name" title="${rangeTip}">${toTitleCase(f.name)}</span>`;
  if(isAll){
    r.innerHTML=`<td class="location-cell">${f.location}</td><td class="category-cell">${f.category}</td><td>${fishLabel}</td>`;
  }else{
    r.innerHTML=`<td class="category-cell">${f.category}</td><td>${fishLabel}</td>`;
  }

  const i=document.createElement("input");
  // Numeric input: allow up to 2 decimal places
  i.type = "number";
  i.step = "0.01";
  i.min = "0";
  i.setAttribute("inputmode", "decimal");

  // Prevent scientific notation / non-decimal characters that some browsers allow in number inputs
  i.addEventListener("keydown", (e)=>{
    if(["e","E","+","-"] .includes(e.key)){
      e.preventDefault();
    }
  });

  function clampTwoDecimals(v){
    const s = String(v ?? "");
    if(s === "") return "";
    if(!s.includes(".")) return s;
    const parts = s.split(".");
    const intPart = parts[0] ?? "";
    const decPart = (parts[1] ?? "").slice(0, 2);
    // Keep trailing dot while typing (e.g., "12.")
    if(parts.length === 2 && parts[1] === "") return `${intPart}.`;
    return decPart === "" ? intPart : `${intPart}.${decPart}`;
  }
  const p=document.createElement("td");
  const s=document.createElement("td");

  p.classList.add("points");
  s.classList.add("stars");

  // Prefill persisted record for this location+fish
  i.value = getStoredWeight(f.location, f.name);

  // Highlight fish name while the user is entering a value
  i.addEventListener('focus', ()=>{
    r.classList.add('editing');
  });

  
  let suppress = false;

  // Inline error message (shown next to this input)
  const inlineErr = document.createElement("div");
  inlineErr.classList.add("inline-error");

  function setInlineError(msg){
    if(!msg){
      inlineErr.textContent = "";
      inlineErr.classList.remove("show");
      i.classList.remove("outofrange");
      return;
    }
    inlineErr.textContent = msg;
    inlineErr.classList.add("show");
    i.classList.add("outofrange");
  }

function commitInput(){
    if(suppress) return;

    // Enforce at most 2 decimal places on commit
    const raw = clampTwoDecimals(String(i.value ?? "").trim());
    if(i.value !== raw){
      suppress = true;
      i.value = raw;
      suppress = false;
    }
    const num = parseFloat(raw);

    // Empty or 0 clears stored record + clears points/stars
    if(raw === "" || raw === "0" || (!Number.isNaN(num) && num === 0)){
      suppress = true;
      i.value = "";
      suppress = false;
      setStoredWeight(f.location, f.name, "");
      setInlineError("");
      recomputeFromDOM();
      return;
    }

    // Only validate when we have a numeric value
    if(Number.isNaN(num)){
      // Leave the value as-is; recompute will mark invalid formats if needed
      recomputeFromDOM();
      return;
    }

    // Range check on commit
    // Fish min/max weights are stored in lbs in the dataset.

    // When the UI is set to kgs, the user's entry must be converted to lbs before validation.
    let enteredLbs = parseUserWeightToLbs(raw);

    // Tiny-fish kg boundary: allow values that match the displayed (2dp) kg min/max.
    if(weightUnit === 'kgs' && tinyFishKgAcceptsDisplayed(raw, f)){
      if(enteredLbs < f.min) enteredLbs = f.min;
      if(enteredLbs > f.max) enteredLbs = f.max;
    }

    if(!Number.isNaN(enteredLbs) && (enteredLbs < f.min || enteredLbs > f.max)){
      const unitLabel = (weightUnit === 'kgs') ? 'kgs' : 'lbs';
      const minDisp = (weightUnit === 'kgs')
        ? fromLbs(f.min).toLocaleString(undefined, { maximumFractionDigits: 2 })
        : Number(f.min).toLocaleString(undefined, { maximumFractionDigits: 2 });
      const maxDisp = (weightUnit === 'kgs')
        ? fromLbs(f.max).toLocaleString(undefined, { maximumFractionDigits: 2 })
        : Number(f.max).toLocaleString(undefined, { maximumFractionDigits: 2 });
      setInlineError(`Must be between ${minDisp} and ${maxDisp} ${unitLabel}`);
      suppress = true;
      i.value = "";
      suppress = false;
      setStoredWeight(f.location, f.name, "");
      recomputeFromDOM();
      return;
    }

    setInlineError("");
    setStoredWeight(f.location, f.name, raw);
    recomputeFromDOM();
  }

  i.addEventListener("blur", commitInput);
  i.addEventListener('blur', ()=>{
    // End highlight when leaving the field
    r.classList.remove('editing');
  });
  i.addEventListener('blur', ()=>{
    r.classList.remove('editing');
  });
  // Live recompute so KPIs/donut update while typing (does not persist until Enter/blur)
  i.addEventListener("input", ()=>{
    if(suppress) return;
    const clamped = clampTwoDecimals(i.value);
    if(i.value !== clamped){
      suppress = true;
      i.value = clamped;
      suppress = false;
    }
    recomputeFromDOM();
  });
  i.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
      e.preventDefault();
      i.blur(); // triggers commitInput()
    }
  });

  const ic = document.createElement("td");
  ic.classList.add("input-cell");
  ic.appendChild(i);
  ic.appendChild(inlineErr);
r.append(ic,p,s);

  // Mobile responsive table: add header labels to each cell for stacked layout
  const headers = Array.from(theadRow.querySelectorAll("th")).map(th=>th.textContent.trim());
  Array.from(r.children).forEach((td, i2)=>{
    if(td && headers[i2]) td.setAttribute("data-label", headers[i2]);
  });

  tbody.appendChild(r);
 });

 // Compute totals/points/stars from any persisted values
 recomputeFromDOM();
}

function makeCharts(){
  // Create charts defensively: a missing canvas (or a config error) should not break KPI updates.
  function safeChart(id, cfg){
    const el = document.getElementById(id);
    if(!el) return null;
    try{ return new Chart(el, cfg); }catch(e){
      console.error(`Chart init failed for #${id}`, e);
      return null;
    }
  }

  const common = getComputedStyle(document.documentElement).getPropertyValue('--common').trim();
  const rare = getComputedStyle(document.documentElement).getPropertyValue('--rare').trim();
  const epic = getComputedStyle(document.documentElement).getPropertyValue('--epic').trim();
  const legendary = getComputedStyle(document.documentElement).getPropertyValue('--legendary').trim();

  const baseOpts = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { dumbbellEndpointOverlay: { radius: 8 },
      legend: { labels: { color: 'rgba(255,255,255,.85)' } },
      tooltip: { enabled: true, callbacks: { label: dumbbellTooltipLabel } }
    },
    scales: {
      x: { ticks: { color: 'rgba(255,255,255,.75)' }, grid: { color: 'rgba(255,255,255,.08)' } },
      y: { ticks: { color: 'rgba(255,255,255,.75)' }, grid: { color: 'rgba(255,255,255,.08)' } }
    }
  };


// Draw dumbbell endpoints on top of connector stroke (prevents line end from showing)
const dumbbellEndpointOverlay = {
  id: 'dumbbellEndpointOverlay',
  afterDatasetsDraw(chart, args, pluginOptions){
    try{
      // Only apply to our dumbbell charts (those with Lowest/Highest datasets)
      const ds = chart.data?.datasets || [];
      const lowIdx = ds.findIndex(d => d && d.label === "Lowest");
      const highIdx = ds.findIndex(d => d && d.label === "Highest");
      if(lowIdx === -1 || highIdx === -1) return;

      const ctx = chart.ctx;
      const r = (pluginOptions && pluginOptions.radius) ? pluginOptions.radius : 8;

      const drawPoints = (idx) => {
        const meta = chart.getDatasetMeta(idx);
        if(!meta || meta.hidden) return;
        const dataset = chart.data.datasets[idx];
        const color = dataset.pointBackgroundColor || dataset.backgroundColor || "#ffffff";
        meta.data.forEach((el) => {
          if(!el || typeof el.x !== "number" || typeof el.y !== "number") return;
          ctx.save();
          ctx.beginPath();
          ctx.fillStyle = color;
          ctx.arc(el.x, el.y, r, 0, Math.PI*2);
          ctx.fill();
          ctx.restore();
        });
      };

      // Draw endpoints last, on top of everything
      drawPoints(lowIdx);
      drawPoints(highIdx);
    }catch(e){
      // never break app
    }
  }
};
if(typeof Chart !== "undefined" && Chart?.register){
  

const dimFishInsightsBars = {
  id: 'dimFishInsightsBars',
  beforeDatasetsDraw(chart){
    if(!chart || !chart.canvas) return;
    const id = chart.canvas.id || '';
    if(!['fearsomeChart','eliteEpicsChart','shortLivedEpicsChart','invisiblesChart','legendaryChart']
        .some(k => id.includes(k))) return;

    chart.data.datasets.forEach(ds => {
      if(!ds.backgroundColor) return;

      const applyAlpha = (c, a) => {
        if(typeof c !== 'string') return c;
        if(c.startsWith('rgba')) return c.replace(/rgba\(([^,]+),([^,]+),([^,]+),[^\)]+\)/, `rgba($1,$2,$3,${a})`);
        if(c.startsWith('rgb')) return c.replace(/rgb\(([^,]+),([^,]+),([^\)]+)\)/, `rgba($1,$2,$3,${a})`);
        if(c.startsWith('#')){
          const hex = c.replace('#','');
          const v = parseInt(hex.length===3 ? hex.split('').map(x=>x+x).join('') : hex, 16);
          const r=(v>>16)&255, g=(v>>8)&255, b=v&255;
          return `rgba(${r},${g},${b},${a})`;
        }
        return c;
      };

      const c = ds.backgroundColor;
      // Detect yellow-ish bars and dim them more
      const isYellow = typeof c === 'string' && (
        c.includes('#f') && c.includes('f') || c.toLowerCase().includes('yellow')
      );

      ds.backgroundColor = applyAlpha(c, isYellow ? 0.55 : 0.75);
    });
  }
};




// Draw a visual "//" break on the x-axis for the Type Range dumbbell chart.
const brokenXAxisBreak = {
  id: 'brokenXAxisBreak',
  afterDraw(chart, args, opts){
  try{
    if(!opts || !opts.enabled) return;
    const xScale = chart.scales?.x;
    if(!xScale) return;

    const ctx = chart.ctx;

    const x1 = xScale.getPixelForValue(TYPE_RANGE_BREAK_LO);
    const x2 = xScale.getPixelForValue(TYPE_RANGE_BREAK_LO + TYPE_RANGE_BREAK_GAP);

    // Clip a clean "gap" over gridlines so the break is obvious
    const top = chart.chartArea.top;
    const bottom = chart.chartArea.bottom;

    ctx.save();
    // Slightly dark panel-colored overlay (transparent) to mute gridlines in the gap
    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    ctx.fillRect(x1, top, Math.max(0, x2 - x1), bottom - top);

    // Draw thin boundary lines on either side of the gap
    ctx.strokeStyle = 'rgba(255,255,255,0.22)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x1, top);
    ctx.lineTo(x1, bottom);
    ctx.moveTo(x2, top);
    ctx.lineTo(x2, bottom);
    ctx.stroke();

    // Draw large "//" on the axis line
    const y = xScale.bottom + 2;
    const mid = (x1 + x2) / 2;
    const size = 10;

    ctx.strokeStyle = 'rgba(255,255,255,.75)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(mid - size, y - size);
    ctx.lineTo(mid - 2, y - 2);
    ctx.moveTo(mid + 2, y - size);
    ctx.lineTo(mid + size, y - 2);
    ctx.stroke();

    ctx.restore();
  }catch(_){}
}
};
Chart.register(dimFishInsightsBars,
dumbbellEndpointOverlay,
brokenXAxisBreak);
}


  pointsByRarityChart = safeChart("pointsByRarityChart", {
    type: "bar",
    data: { labels: [], datasets: [
      { label: "Common", data: [], backgroundColor: common },
      { label: "Rare", data: [], backgroundColor: rare },
      { label: "Epic", data: [], backgroundColor: epic },
      { label: "Legendary", data: [], backgroundColor: legendary },
    ]},
    options: {scales: { ...baseOpts.scales, x: { ...baseOpts.scales.x, ticks: { ...baseOpts.scales.x.ticks, padding: 2, autoSkip: false, maxRotation: 45, minRotation: 45 } } },
      layout:{ padding:{ bottom: 0 } },
      
      ...baseOpts,
      
      plugins: {
        ...baseOpts.plugins,
        legend: { display: false },
        tooltip: {
          ...baseOpts.plugins.tooltip,
          callbacks: {
            label: (ctx) => {
              const value = (ctx.chart.options.indexAxis === 'y') ? ctx.parsed.x : ctx.parsed.y;
              return `Points: ${value}`;
            }
          }
        }
      },
    }
  });

  starsByRarityChart = safeChart("starsByRarityChart", {
    type: "bar",
    data: { labels: [], datasets: [
      { label: "Common", data: [], backgroundColor: common },
      { label: "Rare", data: [], backgroundColor: rare },
      { label: "Epic", data: [], backgroundColor: epic },
      { label: "Legendary", data: [], backgroundColor: legendary },
    ]},
    options: { ...baseOpts, plugins: { ...baseOpts.plugins, legend: { display: false } } }
  });

  starCatchesChart = safeChart("starCatchesChart", {
    type: "bar",
    data: { labels: [], datasets: [
      { label: "1★", data: [], backgroundColor: getComputedStyle(document.documentElement).getPropertyValue("--red1").trim() || "rgba(255,80,80,.85)" },
      { label: "2★", data: [], backgroundColor: getComputedStyle(document.documentElement).getPropertyValue("--red2").trim() || "rgba(255,60,60,.85)" },
      { label: "3★", data: [], backgroundColor: getComputedStyle(document.documentElement).getPropertyValue("--red3").trim() || "rgba(255,40,40,.85)" },
      { label: "4★", data: [], backgroundColor: getComputedStyle(document.documentElement).getPropertyValue("--red4").trim() || "rgba(255,20,20,.85)" },
      { label: "5★", data: [], backgroundColor: getComputedStyle(document.documentElement).getPropertyValue("--red5").trim() || "rgba(200,0,0,.90)" },
    ]},
    options: {layout:{ padding:{ bottom: 0 } },
      
      ...baseOpts,
      plugins: { ...baseOpts.plugins, legend: { position: 'right', labels: baseOpts.plugins.legend.labels } },
      // Star Catches should be a regular (grouped) column chart, not stacked.
      scales: { ...baseOpts.scales, x: { ...baseOpts.scales.x, stacked: false }, y: { ...baseOpts.scales.y, stacked: false } }
    }
  });

  pointsByMapChart = safeChart("pointsByMapChart", {
    type: "bar",
    data: { labels: [], datasets: [{ label: "Points", data: [], backgroundColor: rare, barPercentage: 0.5, categoryPercentage: 0.5 }] },
    options: {
      ...baseOpts,
      plugins: { ...baseOpts.plugins, legend: { display: false } },
    }
  });

  typeDumbbellChart = safeChart("typeDumbbellChart", {
    type: "line",
    data: { labels: ["Common","Rare","Epic","Legendary"], datasets:[
      // Use scatter controller with showLine=true for stability on iOS Safari
      {label: "Range", type: "line", data:[], pointRadius:0, order:1, borderCapStyle:"butt", borderWidth:2, parsing:false, spanGaps:false},
      {label:"Lowest", type:"scatter", data:[], pointRadius:8, pointBorderWidth:0, order:10, pointBackgroundColor:"#e53935", pointBorderColor:"#e53935", pointHoverBackgroundColor:"#e53935", pointHoverBorderColor:"#e53935", backgroundColor:"#e53935", borderColor:"#e53935"},
      {label:"Highest", type:"scatter", data:[], pointRadius:8, pointBorderWidth:0, order:10, pointBackgroundColor:"#00e676", pointBorderColor:"#00e676", pointHoverBackgroundColor:"#00e676", pointHoverBorderColor:"#00e676", backgroundColor:"#00e676", borderColor:"#00e676"},
    ]},
    options:{
      ...baseOpts,
      interaction: { mode: 'y', axis: 'y', intersect: false },
      hover: { mode: 'y', axis: 'y', intersect: false },
      indexAxis:'y',
      scales: {
        x: {
          ...baseOpts.scales.x,
          ticks: {
            ...baseOpts.scales.x.ticks,
            callback: (val) => {
              const v = unmapTypeRangeX(val);
              // hide tick labels inside the break zone for cleanliness
              if(val > TYPE_RANGE_BREAK_LO && val < (TYPE_RANGE_BREAK_LO + TYPE_RANGE_BREAK_GAP)) return '';
              if(!isFinite(v)) return '';
              return Math.round(v).toString();
            }
          },
          grid: {
            ...baseOpts.scales.x.grid,
            color: (ctx) => {
              const v = ctx?.tick?.value;
              if(typeof v === 'number' && v > TYPE_RANGE_BREAK_LO && v < (TYPE_RANGE_BREAK_LO + TYPE_RANGE_BREAK_GAP)){
                return 'rgba(255,255,255,0)'; // no gridlines through the break
              }
              return baseOpts.scales.x.grid.color;
            }
          }
        },
        y: { ...baseOpts.scales.y }
      },

      plugins: {
  ...baseOpts.plugins,
  brokenXAxisBreak: { enabled: true },
  legend: { display: false },
  tooltip: {
    ...baseOpts.plugins.tooltip,
    // Range-only tooltip to avoid flicker between endpoints
    filter: (item) => {
      const dsLabel = item?.dataset?.label || "";
      if(dsLabel === "Range") return false;
      if(dsLabel === "Highest") return true;
      const chart = item.chart;
      const y = item.raw?.y;
      const hasHighest = (chart?.data?.datasets || []).some(ds =>
        ds?.label === "Highest" && (ds.data || []).some(p => p && p.y === y)
      );
      return !hasHighest;
    },
    callbacks: {
      title: (items) => {
        const it = items && items[0];
        if(!it) return "";
        const y = it.raw?.y;
        const labels = it.chart?.data?.labels || [];
        return (typeof y !== "undefined" && labels[y]) ? labels[y] : "";
      },
      label: (ctx) => {
        const chart = ctx.chart;
        const y = ctx.raw?.y;
        if(typeof y === "undefined") return "";
        const dsets = chart?.data?.datasets || [];
        const lowDs = dsets.find(d => d && d.label === "Lowest");
        const highDs = dsets.find(d => d && d.label === "Highest");

        const lowPt = lowDs ? (lowDs.data || []).find(p => p && p.y === y) : undefined;
        const highPt = highDs ? (highDs.data || []).find(p => p && p.y === y) : undefined;

        const fmt = (n) => (typeof n === 'number' && isFinite(n)) ? Math.round(n) : n;

        const low = fmt((typeof lowPt?.xRaw === 'number') ? lowPt.xRaw : lowPt?.x);
        const high = fmt((typeof highPt?.xRaw === 'number') ? highPt.xRaw : highPt?.x);
        const lowName = toTitleCase((lowPt?.fishName || '').toString().trim());
        const highName = toTitleCase((highPt?.fishName || '').toString().trim());

        const hasLow = typeof low === "number";
        const hasHigh = typeof high === "number";

        if(hasLow && hasHigh){
          // If it's effectively a single point, show a single informative line.
          if(low === high && (lowName || '') === (highName || '')){
            return `Points: ${low}${lowName ? ` — ${lowName}` : ""}`;
          }
          // Otherwise show both endpoints with fish names.
          const lines = [];
          lines.push(`Lowest: ${low}${lowName ? ` — ${lowName}` : ""}`);
          lines.push(`Highest: ${high}${highName ? ` — ${highName}` : ""}`);
          return lines;
        }

        const singlePt = hasHigh ? highPt : (hasLow ? lowPt : undefined);
        const single = fmt((typeof singlePt?.xRaw === 'number') ? singlePt.xRaw : singlePt?.x);
        const singleName = toTitleCase((singlePt?.fishName || '').toString().trim());
        return (typeof single === "number") ? `Points: ${single}${singleName ? ` — ${singleName}` : ""}` : "";
      }
    }
  }
},
      parsing:false,
      animation:false,
      scales:{
        x:{ ...baseOpts.scales.x, type:'linear' },
        y: { ...baseOpts.scales.y, type: 'category', offset: true }
      }
    }
  });

  commonDumbbellChart = safeChart("commonDumbbellChart", {
    type: "line",
    data: {
      labels: [],
      datasets: [
        { label: "Range", type: "line", data: [], pointRadius: 0, borderWidth: 3, parsing:false, spanGaps:false },
        { label: "Lowest", type: "scatter", data: [], pointRadius: 5, pointHitRadius: 12, pointBackgroundColor:"#e53935", pointBorderColor:"#e53935", pointHoverBackgroundColor:"#e53935", pointHoverBorderColor:"#e53935", backgroundColor:"#e53935", borderColor:"#e53935"},
        { label: "Highest", type: "scatter", data: [], pointRadius: 5, pointHitRadius: 12, pointBackgroundColor:"#00e676", pointBorderColor:"#00e676", pointHoverBackgroundColor:"#00e676", pointHoverBorderColor:"#00e676", backgroundColor:"#00e676", borderColor:"#00e676"},
      ]
    },
    options: {
      ...baseOpts,
      indexAxis: 'y',
      plugins: { ...baseOpts.plugins, legend: { display: false } },
      parsing:false,
      animation:false,
      scales: {
        x: { ...baseOpts.scales.x, type: 'linear' },
        y: { ...baseOpts.scales.y, type: 'category', offset: true }
      }
    }
  });

  rareDumbbellChart = safeChart("rareDumbbellChart", {
    type: "line",
    data: {
      labels: [],
      datasets: [
        { label: "Range", type: "line", data: [], pointRadius: 0, borderWidth: 3, parsing:false, spanGaps:false },
        { label: "Lowest", type: "scatter", data: [], pointRadius: 5, pointHitRadius: 12, pointBackgroundColor:"#e53935", pointBorderColor:"#e53935", pointHoverBackgroundColor:"#e53935", pointHoverBorderColor:"#e53935", backgroundColor:"#e53935", borderColor:"#e53935"},
        { label: "Highest", type: "scatter", data: [], pointRadius: 5, pointHitRadius: 12, pointBackgroundColor:"#00e676", pointBorderColor:"#00e676", pointHoverBackgroundColor:"#00e676", pointHoverBorderColor:"#00e676", backgroundColor:"#00e676", borderColor:"#00e676"},
      ]
    },
    options: {
      ...baseOpts,
      indexAxis: 'y',
      plugins: { ...baseOpts.plugins, legend: { display: false } },
      parsing:false,
      animation:false,
      scales: {
        x: { ...baseOpts.scales.x, type: 'linear' },
        y: { ...baseOpts.scales.y, type: 'category', offset: true }
      }
    }
  });

  epicDumbbellChart = safeChart("epicDumbbellChart", {
    type: "line",
    data: {
      labels: [],
      datasets: [
        { label: "Range", type: "line", data: [], pointRadius: 0, borderWidth: 3, parsing:false, spanGaps:false },
        { label: "Lowest", type: "scatter", data: [], pointRadius: 5, pointHitRadius: 12, pointBackgroundColor:"#e53935", pointBorderColor:"#e53935", pointHoverBackgroundColor:"#e53935", pointHoverBorderColor:"#e53935", backgroundColor:"#e53935", borderColor:"#e53935"},
        { label: "Highest", type: "scatter", data: [], pointRadius: 5, pointHitRadius: 12, pointBackgroundColor:"#00e676", pointBorderColor:"#00e676", pointHoverBackgroundColor:"#00e676", pointHoverBorderColor:"#00e676", backgroundColor:"#00e676", borderColor:"#00e676"},
      ]
    },
    options: {
      ...baseOpts,
      indexAxis: 'y',
      plugins: { ...baseOpts.plugins, legend: { display: false } },
      parsing:false,
      animation:false,
      scales: {
        x: { ...baseOpts.scales.x, type: 'linear' },
        y: { ...baseOpts.scales.y, type: 'category', offset: true }
      }
    }
  });

  legendaryChart = safeChart("legendaryChart", {
    type: "bar",
    data: { labels: [], datasets: [{ label: "Legendary Points", data: [], backgroundColor: legendary }] },
    options: {layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
       scales:{y:{
          afterFit: (scale) => { scale.width = 260; },ticks:{
            align: "start",
            padding: 6,autoSkip:false}}}, barThickness: 18, categoryPercentage: 0.8,
      ...baseOpts,
      indexAxis: 'y',
      plugins: {
        ...baseOpts.plugins,
        legend: { display: false },
        tooltip: {
          ...baseOpts.plugins.tooltip,
          callbacks: {
            label: (ctx) => {
              const value = (ctx.chart.options.indexAxis === 'y') ? ctx.parsed.x : ctx.parsed.y;
              return `Points: ${value}`;
            }
          }
        }
      },
    }
  });

  // Note: avoid duplicate keys inside `scales` (can hide config issues).
  fearsomeChart = safeChart("fearsomeChart", {
    type: "bar",
    data: { labels: [], datasets: [{ label: "Epic Points", data: [], backgroundColor: epic }] },
    options: {layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
       scales: { y: {
          afterFit: (scale) => { scale.width = 260; }, ticks: {
            align: "start",
            padding: 6, autoSkip:false, callback: function(value){ const l = this.getLabelForValue(value); return String(l).split(" "); } } } }, barThickness: 18, categoryPercentage: 0.8,
      ...baseOpts,
      indexAxis: 'y',
      plugins: {
        ...baseOpts.plugins,
        legend: { display: false },
        tooltip: {
          ...baseOpts.plugins.tooltip,
          callbacks: {
            title: (items)=>tooltipTitleJoinSpaces(items),
            label: (ctx) => {
              const value = (ctx.chart.options.indexAxis === 'y') ? ctx.parsed.x : ctx.parsed.y;
              return `Points: ${value}`;
            }
          }
        }
      },
    }
  });

  eliteEpicsChart = safeChart("eliteEpicsChart", {
    type: "bar",
    data: { labels: [], datasets: [{ label: "Epic Points", data: [], backgroundColor: epic }] },
    options: {layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
       scales: { 
          x: { ...baseOpts.scales.x },
          y: {
            ...baseOpts.scales.y,
            afterFit: (scale) => { scale.width = 260; },
            ticks: {
              ...baseOpts.scales.y.ticks,
              align: "start",
              padding: 6,
              autoSkip: false,
              callback: function(value){
                const label = this.getLabelForValue(value);
                if(typeof label !== "string") return label;
                const max = 16;
                if(label.length <= max) return label;
                // smart wrap without breaking midword
                const words = label.split(" ");
                const lines = [];
                let line = "";
                for(const w of words){
                  const test = line ? (line + " " + w) : w;
                  if(test.length <= max) line = test;
                  else { if(line) lines.push(line); line = w; }
                }
                if(line) lines.push(line);
                return lines;
              }
            }
          }
       },
       barThickness: 18, categoryPercentage: 0.8,
      ...baseOpts,
      indexAxis: 'y',
      plugins: {
        ...baseOpts.plugins,
        legend: { display: false },
        tooltip: {
          ...baseOpts.plugins.tooltip,
          callbacks: {
            title: (items)=>tooltipTitleJoinSpaces(items),
            label: (ctx) => {
              const value = (ctx.chart.options.indexAxis === 'y') ? ctx.parsed.x : ctx.parsed.y;
              return `Points: ${value}`;
            }
          }
        }
      },
    }
  });

  shortLivedEpicsChart = safeChart("shortLivedEpicsChart", {
    type: "bar",
    data: { labels: [], datasets: [{ label: "Epic Points", data: [], backgroundColor: epic }] },
    options: {
      layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
      scales: {
        x: { ...baseOpts.scales.x },
        y: {
          ...baseOpts.scales.y,
          afterFit: (scale) => { scale.width = 260; },
          ticks: {
            ...baseOpts.scales.y.ticks,
            align: "start",
            padding: 6,
            autoSkip: false,
            callback: function(value){
              const label = this.getLabelForValue(value);
              if(typeof label !== "string") return label;
              return __wrapWordsFearsome(label, 10);
            }
          }
        }
      },
      barThickness: 18,
      categoryPercentage: 0.8,
      ...baseOpts,
      indexAxis: 'y',
      plugins: {
        ...baseOpts.plugins,
        legend: { display: false },
        tooltip: {
          ...baseOpts.plugins.tooltip,
          callbacks: {
            title: (items)=>tooltipTitleJoinSpaces(items),
            label: (ctx) => {
              const value = (ctx.chart.options.indexAxis === 'y') ? ctx.parsed.x : ctx.parsed.y;
              return `Points: ${value}`;
            }
          }
        }
      },
    }
  });

  invisiblesChart = safeChart("invisiblesChart", {
    type: "bar",
    data: { labels: [], datasets: [{ label: "Points", data: [], backgroundColor: common }] },
    options: {layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
       scales: { 
          x: { ...baseOpts.scales.x },
          y: {
            ...baseOpts.scales.y,
            afterFit: (scale) => { scale.width = 260; },
            ticks: {
              ...baseOpts.scales.y.ticks,
              align: "start",
              padding: 6,
              autoSkip: false,
              callback: function(value){
                const label = this.getLabelForValue(value);
                if(typeof label !== "string") return label;
                const max = 16;
                if(label.length <= max) return label;
                // smart wrap without breaking midword
                const words = label.split(" ");
                const lines = [];
                let line = "";
                for(const w of words){
                  const test = line ? (line + " " + w) : w;
                  if(test.length <= max) line = test;
                  else { if(line) lines.push(line); line = w; }
                }
                if(line) lines.push(line);
                return lines;
              }
            }
          }
       },
       barThickness: 18, categoryPercentage: 0.8,
      ...baseOpts,
      indexAxis: 'y',
      plugins: {
        ...baseOpts.plugins,
        legend: { display: false },
        tooltip: {
          ...baseOpts.plugins.tooltip,
          callbacks: {
            title: (items)=>tooltipTitleJoinSpaces(items),
            label: (ctx) => {
              const value = (ctx.chart.options.indexAxis === 'y') ? ctx.parsed.x : ctx.parsed.y;
              return `Points: ${value}`;
            }
          }
        }
      },
    }
  });
}

function computeAggregates(records, opts = {}){
  const { includeLegendary = true } = opts;
  const recs = records || recordsByLocation || {};

  const byLoc = {};
  const allFish = [];
  getLocationList().forEach(loc=>{
    byLoc[loc] = {
      pointsByCat: { Common:0, Rare:0, Epic:0, Legendary:0 },
      countsByCat: { Common:0, Rare:0, Epic:0, Legendary:0 },
      starsByCat: { Common:0, Rare:0, Epic:0, Legendary:0 },
      starCounts: [0,0,0,0,0],
      totalPoints: 0,
      totalStars: 0,
      caught: 0,
    };

    for (const fish of LOCATIONS[loc]){
      if(!includeLegendary && fish.category === 'Legendary') continue;
      const raw = recs?.[loc]?.[fish.name];
      const w = parseAndClampRecordLbs(raw, fish);
      const valid = raw !== "" && !Number.isNaN(w) && w > 0 && w >= fish.min && w <= fish.max;
      if(!valid) continue;
      const pts = calculatePoints(w, fish);
      const stars = calculateStars(fish.category, pts);
      byLoc[loc].pointsByCat[fish.category] += pts;
      byLoc[loc].countsByCat[fish.category] += 1;
      byLoc[loc].starsByCat[fish.category] += stars;
      if(stars>=1 && stars<=5) byLoc[loc].starCounts[stars-1] += 1;
      byLoc[loc].totalPoints += pts;
      byLoc[loc].totalStars += stars;
      byLoc[loc].caught += 1;
      allFish.push({ ...fish, location: loc, points: pts, stars });
    }
  });
  return { byLoc, allFish };
}

function computeDashboardAggregates(records, opts = {}){
  const { includeLegendary = true } = opts;
  const recs = records || recordsByLocation || {};
  const locsAll = getLocationList();
  const locs = (dashboardLocation && dashboardLocation !== '__ALL__' && LOCATIONS[dashboardLocation])
    ? [dashboardLocation]
    : locsAll;

  const byLoc = {};
  locs.forEach(loc=>{
    byLoc[loc] = {
      pointsByCat: { Common:0, Rare:0, Epic:0, Legendary:0 },
      countsByCat: { Common:0, Rare:0, Epic:0, Legendary:0 },
      starsByCat: { Common:0, Rare:0, Epic:0, Legendary:0 },
      starCounts: [0,0,0,0,0],
      totalPoints: 0,
      totalStars: 0,
      caught: 0,
    };

    for (const fish of (LOCATIONS[loc] || [])){
      if(!dashboardCategories.has(fish.category)) continue;
      if(!includeLegendary && fish.category === 'Legendary') continue;
      const raw = recs?.[loc]?.[fish.name];
      let w = parseUserWeightToLbs(raw);
      if(weightUnit === 'kgs' && tinyFishKgAcceptsDisplayed(raw, fish)){
        if(w < fish.min) w = fish.min;
        if(w > fish.max) w = fish.max;
      }
      const valid = raw !== "" && !Number.isNaN(w) && w > 0 && w >= fish.min && w <= fish.max;
      if(!valid) continue;
      const pts = calculatePoints(w, fish);
      const stars = calculateStars(fish.category, pts);
      byLoc[loc].pointsByCat[fish.category] += pts;
      byLoc[loc].countsByCat[fish.category] += 1;
      byLoc[loc].starsByCat[fish.category] += stars;
      if(stars>=1 && stars<=5) byLoc[loc].starCounts[stars-1] += 1;
      byLoc[loc].totalPoints += pts;
      byLoc[loc].totalStars += stars;
      byLoc[loc].caught += 1;
    }
  });

  return { byLoc, locs };
}

// Use live inputs in Record Entry tab (even before Enter/blur saves) so charts like dumbbells update immediately.
function getEffectiveRecords(){
  const base = recordsByLocation || {};
  const activeView = document.querySelector('.tab-view.active')?.id;
  if(activeView !== 'recordsView') return base;
  const loc = locationSelect?.value;
  if(!loc || loc === '__ALL__') return base;

  // Clone only the active location map so we don't mutate stored records
  const merged = { ...base, [loc]: { ...(base[loc] || {}) } };

  // Overlay current visible inputs (valid + in-range only)
  const rows = document.querySelectorAll('tbody tr');
  rows.forEach(row=>{
    const idx = Number(row.dataset.idx);
    const fish = currentFish[idx];
    if(!fish) return;
    const inp = row.querySelector('input');
    if(!inp) return;
    const raw = String(inp.value ?? '').trim();
    if(raw === '') return;
    if(!/^\d*(?:\.\d{0,2})?$/.test(raw)) return;
    const w = parseUserWeightToLbs(raw);
    if(!Number.isFinite(w)) return;
    if(w < fish.min || w > fish.max) return;
    merged[loc][fish.name] = raw;
  });

  return merged;
}

function updateDashboard(){
  const effectiveRecords = getEffectiveRecords();
  const activeView = document.querySelector('.tab-view.active')?.id;
  const { byLoc: byLocAll, allFish } = computeAggregates(effectiveRecords);
  const { byLoc: byLocKPI } = computeAggregates(effectiveRecords, { includeLegendary: includeLegendaryDashboard });
  const locs = getLocationList();
  const byLoc = byLocAll;

  // Dashboard charts use slicers (location + rarity). Other tabs ignore slicers.
  const { byLoc: dashByLoc, locs: dashLocs } = computeDashboardAggregates(effectiveRecords, { includeLegendary: includeLegendaryDashboard });

  // Precompute commonly used arrays (Dashboard charts)
  const pointsCommon = dashLocs.map(l=>dashByLoc[l].pointsByCat.Common);
  const pointsRare = dashLocs.map(l=>dashByLoc[l].pointsByCat.Rare);
  const pointsEpic = dashLocs.map(l=>dashByLoc[l].pointsByCat.Epic);
  const pointsLegendary = dashLocs.map(l=>dashByLoc[l].pointsByCat.Legendary);

  const starsCommon = dashLocs.map(l=>dashByLoc[l].starsByCat.Common);
  const starsRare = dashLocs.map(l=>dashByLoc[l].starsByCat.Rare);
  const starsEpic = dashLocs.map(l=>dashByLoc[l].starsByCat.Epic);
  const starsLegendary = dashLocs.map(l=>dashByLoc[l].starsByCat.Legendary);

  // Points per map (sorted) - Dashboard slicers apply
  const locSorted = [...dashLocs].sort((a,b)=>dashByLoc[b].totalPoints - dashByLoc[a].totalPoints);

  // ---- KPIs FIRST (so a chart error can't block them) ----
  const totalPoints = locs.reduce((s,l)=>s+(byLocKPI[l]?.totalPoints||0),0);
  const totalStars = locs.reduce((s,l)=>s+(byLocKPI[l]?.totalStars||0),0);
  const totalCaught = locs.reduce((s,l)=>s+(byLocKPI[l]?.caught||0),0);
  const star4 = locs.reduce((s,l)=>s+((byLocKPI[l]?.starCounts||[0,0,0,0,0])[3]||0),0);
  const star5 = locs.reduce((s,l)=>s+((byLocKPI[l]?.starCounts||[0,0,0,0,0])[4]||0),0);

  if(totalPointsEl) totalPointsEl.textContent = fmtNumber(totalPoints);

  const avg = totalCaught ? (totalStars / totalCaught) : 0;
  if(avgStarsEl){
    const rounded = Math.ceil(avg);
    const full = Math.min(rounded,5);
    const half = false;
    const starsTxt = '★'.repeat(full) + (half ? '☆' : '') + '☆'.repeat(Math.max(0, 5 - full - (half?1:0)));
    avgStarsEl.textContent = starsTxt;
  }
  if(pct4El) pct4El.textContent = totalCaught ? `${(100*star4/totalCaught).toFixed(1)}%` : '0.0%';
  if(pct5El) pct5El.textContent = totalCaught ? `${(100*star5/totalCaught).toFixed(1)}%` : '0.0%';

  // Best map: best average points (avg of caught fish points) per map; blank if nothing caught yet
  let bestMap = '';
  let bestScore = -Infinity;
  let anyCaught = false;
  const rarities = ['Common','Rare','Epic','Legendary'];
  locs.forEach(l=>{
    const data = byLoc[l];
    if(!data) return;
    const totalCaught = Object.values(data.countsByCat || {}).reduce((a,b)=>a+b,0);
    if(totalCaught>0) anyCaught = true;
    let sum = 0;
    rarities.forEach(r=>{
      const c = data.countsByCat[r] || 0;
      const avg = c ? (data.pointsByCat[r] / c) : 0;
      sum += avg;
    });
    const score = sum / 4;
    if(score > bestScore){
      bestScore = score;
      bestMap = l;
    }
  });
  if(bestMapEl) bestMapEl.textContent = anyCaught ? bestMap : '-' ;

  // Bestiary progress = how many unique fish have a stored (valid) record
  const totalFish = Object.values(LOCATIONS).reduce((sum,arr)=>sum+arr.length,0);
  const caughtUnique = new Set(allFish.map(f=>`${f.location}|${f.name}`)).size;
  const pct = totalFish ? (100 * caughtUnique / totalFish) : 0;
  try{ setDonutProgress(pct); }catch(e){ console.error('Donut update failed', e); }

  // Sidebar active button
  if(locationButtonsEl){
    [...locationButtonsEl.querySelectorAll('button.loc-btn')].forEach(b=>{
      b.classList.toggle('active', b.dataset.value === dashboardLocation);
    });
  }

  // ---- Charts (all guarded) ----
  function isChartVisible(chart){
    try{
      const c = chart?.canvas;
      if(!c) return false;
      // offsetParent is null when display:none (common in tabbed UIs)
      if(c.offsetParent === null) return false;
      return c.clientWidth > 0 && c.clientHeight > 0;
    }catch(_){
      return false;
    }
  }

  function safeUpdate(chart, { requireVisible = false } = {}){
    if(!chart) return;
    if(requireVisible && !isChartVisible(chart)) return;
    try{ chart.update(); }catch(e){ console.error('Chart update failed', e); }
  }

  if(pointsByRarityChart){
    pointsByRarityChart.data.labels = dashLocs;
    pointsByRarityChart.data.datasets[0].data = pointsCommon;
    pointsByRarityChart.data.datasets[1].data = pointsRare;
    pointsByRarityChart.data.datasets[2].data = pointsEpic;
    pointsByRarityChart.data.datasets[3].data = pointsLegendary;
    // Hide datasets that are not selected in the rarity slicer
    pointsByRarityChart.data.datasets[0].hidden = !dashboardCategories.has('Common');
    pointsByRarityChart.data.datasets[1].hidden = !dashboardCategories.has('Rare');
    pointsByRarityChart.data.datasets[2].hidden = !dashboardCategories.has('Epic');
    pointsByRarityChart.data.datasets[3].hidden = (!includeLegendaryDashboard) || !dashboardCategories.has('Legendary');
    safeUpdate(pointsByRarityChart);
  }

  if(starsByRarityChart){
    starsByRarityChart.data.labels = dashLocs;
    starsByRarityChart.data.datasets[0].data = starsCommon;
    starsByRarityChart.data.datasets[1].data = starsRare;
    starsByRarityChart.data.datasets[2].data = starsEpic;
    starsByRarityChart.data.datasets[3].data = starsLegendary;
    starsByRarityChart.data.datasets[0].hidden = !dashboardCategories.has('Common');
    starsByRarityChart.data.datasets[1].hidden = !dashboardCategories.has('Rare');
    starsByRarityChart.data.datasets[2].hidden = !dashboardCategories.has('Epic');
    starsByRarityChart.data.datasets[3].hidden = (!includeLegendaryDashboard) || !dashboardCategories.has('Legendary');
    safeUpdate(starsByRarityChart);
  }

  // Star catches (stacked)
  if(starCatchesChart){
    starCatchesChart.data.labels = dashLocs;
    for(let s=1;s<=5;s++){
      starCatchesChart.data.datasets[s-1].data = dashLocs.map(l=>dashByLoc[l].starCounts[s-1]);
    }
    safeUpdate(starCatchesChart);
  }

  if(pointsByMapChart){
    pointsByMapChart.data.labels = locSorted;
    pointsByMapChart.data.datasets[0].data = locSorted.map(l=>dashByLoc[l].totalPoints);
    safeUpdate(pointsByMapChart);
  }

  // Dumbbell by type (all maps combined)
  if(activeView === 'mapView'){
  try{
    const cats = ['Common','Rare','Epic','Legendary'];
    const mins = {}, maxs = {};
    const minFishNames = {}, maxFishNames = {};
    cats.forEach(c=>{ mins[c]=Infinity; maxs[c]=-Infinity; minFishNames[c]=''; maxFishNames[c]=''; });

    getLocationList().forEach(loc=>{
      (LOCATIONS[loc]||[]).forEach(f=>{
        const raw = effectiveRecords?.[loc]?.[f.name];
        const w = parseUserWeightToLbs(raw);
        if(!Number.isFinite(w)) return;
        const pts = calculatePoints(w,f);
        if(!pts) return;
        if(pts < mins[f.category]){ mins[f.category]=pts; minFishNames[f.category]=f.name; }
        if(pts > maxs[f.category]){ maxs[f.category]=pts; maxFishNames[f.category]=f.name; }
      });
    });

    if(typeDumbbellChart){
      const rangeSets = [];
      const lows = [];
      const highs = [];
      cats.forEach(c=>{
        if(mins[c]!==Infinity){
          rangeSets.push({
            label: c + ' range',
            type: 'scatter',
            showLine: true,
            data: [{x: mapTypeRangeX(mins[c]), xRaw: mins[c], y: c}, {x: mapTypeRangeX(maxs[c]), xRaw: maxs[c], y: c}],
            pointRadius: 0,
            borderWidth: 3,
          borderColor: (getComputedStyle(document.documentElement).getPropertyValue('--rare').trim() || '#3b82f6'),
          backgroundColor: (getComputedStyle(document.documentElement).getPropertyValue('--rare').trim() || '#3b82f6'),
            parsing: false
          });
          // If only one record (min==max), show a single GREEN endpoint (Highest) to match prior behavior
          if(mins[c] === maxs[c] && (minFishNames[c] || '') === (maxFishNames[c] || '')){
            highs.push({x: mapTypeRangeX(maxs[c]), xRaw: maxs[c], y: c, fishName: maxFishNames[c]});
          }else{
            lows.push({x: mapTypeRangeX(mins[c]), xRaw: mins[c], y: c, fishName: minFishNames[c]});
            highs.push({x: mapTypeRangeX(maxs[c]), xRaw: maxs[c], y: c, fishName: maxFishNames[c]});
          }
        }
      });

      typeDumbbellChart.data.labels = cats;
      // Build datasets without null separators (more stable across browsers).
      typeDumbbellChart.data.datasets = [
        ...rangeSets,
        { label: 'Lowest', type: 'scatter', data: lows, pointRadius: 5, pointHitRadius: 12, parsing: false, pointBackgroundColor: '#e53935', pointBorderColor: '#e53935', backgroundColor: '#e53935', borderColor: '#e53935', pointHoverBackgroundColor: '#e53935', pointHoverBorderColor: '#e53935' },
        { label: 'Highest', type: 'scatter', data: highs, pointRadius: 5, pointHitRadius: 12, parsing: false, pointBackgroundColor: '#00e676', pointBorderColor: '#00e676', backgroundColor: '#00e676', borderColor: '#00e676', pointHoverBackgroundColor: '#00e676', pointHoverBorderColor: '#00e676' },
      ];

      // Ensure broken-scale tick labels always reflect raw point values (not mapped units)
      try{
        if(typeDumbbellChart.options && typeDumbbellChart.options.scales && typeDumbbellChart.options.scales.x){
          const xTicks = (typeDumbbellChart.options.scales.x.ticks || {});
          typeDumbbellChart.options.scales.x.ticks = {
            ...xTicks,
            callback: (val) => {
              const v = unmapTypeRangeX(val);
              if(typeof val === 'number' && val > TYPE_RANGE_BREAK_LO && val < (TYPE_RANGE_BREAK_LO + TYPE_RANGE_BREAK_GAP)) return '';
              if(!isFinite(v)) return '';
              return String(Math.round(v));
            }
          };
        }
      }catch(e){}
      safeUpdate(typeDumbbellChart, { requireVisible: true });
    }

    function updateDumbbellForCategory(category, chart){
      if(!chart) return;
      if(!isChartVisible(chart)) return;

      const mins = [];
      const maxs = [];
      const minNames = [];
      const maxNames = [];
      const locOrder = getLocationList();
      locOrder.forEach(loc=>{
        let minP = Infinity;
        let maxP = -Infinity;
        let minName = '';
        let maxName = '';
        for (const fish of (LOCATIONS[loc] || [])){
          if(fish.category !== category) continue;
          // Use effective (live) records so dumbbells update even before Enter/blur commits
          const raw = effectiveRecords?.[loc]?.[fish.name];
          let w = parseUserWeightToLbs(raw);
          if(!Number.isFinite(w)) continue;

          // Tiny-fish kg boundary: if the displayed kg value is acceptable, clamp lbs into [min,max]
          // so the range charts don't drop the record due to rounding pushing w slightly over max.
          if(weightUnit === 'kgs' && tinyFishKgAcceptsDisplayed(raw, fish)){
            if(w < fish.min) w = fish.min;
            if(w > fish.max) w = fish.max;
          }

          const pts = calculatePoints(w, fish);
          if(!pts) continue;
          if(pts < minP){ minP = pts; minName = (fish.name || fish.fishName || fish.fish || ''); }
          if(pts > maxP){ maxP = pts; maxName = (fish.name || fish.fishName || fish.fish || ''); }
        }
        mins.push(minP === Infinity ? null : minP);
        maxs.push(maxP === -Infinity ? null : maxP);
        minNames.push(minP === Infinity ? '' : minName);
        maxNames.push(maxP === -Infinity ? '' : maxName);
      });

      chart.data.labels = locOrder;

      const rangeSets = [];
      const minPts = [];
      const maxPts = [];
      for(let i=0;i<locOrder.length;i++){
        const loc = locOrder[i];
        const lo = mins[i];
        const hi = maxs[i];
        if(lo == null || hi == null) continue;
        rangeSets.push({
          label: loc + ' range',
          type: 'scatter',
          showLine: true,
          data: [{ x: lo, y: loc }, { x: hi, y: loc }],
          pointRadius: 0,
          borderWidth: 3,
          borderColor: (getComputedStyle(document.documentElement).getPropertyValue('--rare').trim() || '#3b82f6'),
          backgroundColor: (getComputedStyle(document.documentElement).getPropertyValue('--rare').trim() || '#3b82f6'),
          parsing: false
        });
        // If only one record (lo==hi), show a single GREEN endpoint (Highest) to match prior behavior
        if(lo === hi && (minNames[i] || '') === (maxNames[i] || '')){
          maxPts.push({ x: hi, y: loc, fishName: maxNames[i] });
        }else{
          minPts.push({ x: lo, y: loc, fishName: minNames[i] });
          maxPts.push({ x: hi, y: loc, fishName: maxNames[i] });
        }
      }

      // Datasets without null separators (prevents occasional full-blank renders).
      chart.data.datasets = [
        ...rangeSets,
        { label: 'Lowest', type: 'scatter', data: minPts, pointRadius: 5, pointHitRadius: 12, parsing: false, pointBackgroundColor: '#e53935', pointBorderColor: '#e53935', backgroundColor: '#e53935', borderColor: '#e53935', pointHoverBackgroundColor: '#e53935', pointHoverBorderColor: '#e53935' },
        { label: 'Highest', type: 'scatter', data: maxPts, pointRadius: 5, pointHitRadius: 12, parsing: false, pointBackgroundColor: '#00e676', pointBorderColor: '#00e676', backgroundColor: '#00e676', borderColor: '#00e676', pointHoverBackgroundColor: '#00e676', pointHoverBorderColor: '#00e676' },
      ];
      safeUpdate(chart, { requireVisible: true });
    }

    updateDumbbellForCategory('Common', commonDumbbellChart);
    updateDumbbellForCategory('Rare', rareDumbbellChart);
    updateDumbbellForCategory('Epic', epicDumbbellChart);
  }catch(e){
    console.error('Dumbbell update failed', e);
  }

  }

  // Legendary (all Legendary fish, arranged by location order)
  try{
    const pointsByFish = new Map(allFish.map(f=>[`${f.location}|${f.name}`, {points:f.points, stars:f.stars}]));
    const legendaryList = [];
    getLocationList().forEach(loc=>{
      const legFish = (LOCATIONS[loc] || []).filter(f=>f.category === 'Legendary');
      legFish.forEach(f=>{
        const rec = pointsByFish.get(`${loc}|${f.name}`);
        const pts = rec ? rec.points : 0;
        legendaryList.push({ name: f.name, value: pts });
      });
    });

    if(legendaryChart){
      legendaryChart.data.labels = legendaryList.map(f=>toTitleCase(f.name));
      legendaryChart.data.datasets[0].data = legendaryList.map(f=>f.value);
      safeUpdate(legendaryChart);
    }
  }catch(e){
    console.error('Legendary chart update failed', e);
  }

  // Fearsome four (fixed list)
  try{
    const fearsomeNames = ['whale shark','ocean sunfish','hoodwinker sunfish','manta ray'];
    const fearMap = new Map(allFish.map(f=>[f.name.toLowerCase(), {points:f.points, stars:f.stars}]));
    const fearList = fearsomeNames.map(n=>{
      const rec = fearMap.get(n);
      const val = rec ? rec.points : 0;
      return { name: n, value: val };
    });
    if(fearsomeChart){
      fearsomeChart.data.labels = fearList.map(f => __wrapWordsFearsome(toTitleCase(f.name), 10));
      fearsomeChart.data.datasets[0].data = fearList.map(f=>f.value);
      safeUpdate(fearsomeChart);
    }
  }catch(e){
    console.error('Fearsome chart update failed', e);
  }
  // The Elite Epics (fixed list)
  try{
    const eliteNames = ['goldfish','bull shark','king salmon','tiger shark','bull trout','scottish salmon'];
    const eliteMap = new Map(allFish.map(f=>[f.name.toLowerCase(), {points:f.points, stars:f.stars}]));
    const eliteList = eliteNames.map(n=>{
      const rec = eliteMap.get(n);
      const val = rec ? rec.points : 0;
      return { name: n, value: val };
    });
    if(eliteEpicsChart){
      eliteEpicsChart.data.labels = eliteList.map(f => __wrapWordsFearsome(toTitleCase(f.name), 10));
      eliteEpicsChart.data.datasets[0].data = eliteList.map(f=>f.value);
      safeUpdate(eliteEpicsChart);
    }
  }catch(e){
    console.error('The Elite Epics chart update failed', e);
  }

  // The Short-Lived Specials (fixed list)
  try{
    const shortNames = ['black marlin','bull shark','queensland grouper','european eel','european grayling'];
    const shortMap = new Map(allFish.map(f=>[f.name.toLowerCase(), {points:f.points, stars:f.stars}]));
    const shortList = shortNames.map(n=>{
      const rec = shortMap.get(n);
      const val = rec ? rec.points : 0;
      return { name: n, value: val };
    });
    if(shortLivedEpicsChart){
      shortLivedEpicsChart.data.labels = shortList.map(f => __wrapWordsFearsome(toTitleCase(f.name), 10));
      shortLivedEpicsChart.data.datasets[0].data = shortList.map(f=>f.value);
      safeUpdate(shortLivedEpicsChart);
    }
  }catch(e){
    console.error('The Short-Lived Specials chart update failed', e);
  }

  // The Invisibles (fixed list)
  try{
    const invNames = ['capelin','leafy seadragon','rice eel','malayan leaffish','yellow mystus'];
    const invMap = new Map(allFish.map(f=>[f.name.toLowerCase(), {points:f.points, stars:f.stars}]));
    const invList = invNames.map(n=>{
      const rec = invMap.get(n);
      const val = rec ? rec.points : 0;
      return { name: n, value: val };
    });
    if(invisiblesChart){
      invisiblesChart.data.labels = invList.map(f => __wrapWordsFearsome(toTitleCase(f.name), 10));
      invisiblesChart.data.datasets[0].data = invList.map(f=>f.value);
      safeUpdate(invisiblesChart);
    }
  }catch(e){
    console.error('Invisibles chart update failed', e);
  }

  // Personal Bests (leaderboard tiles)
  try{ renderPersonalBests(allFish); }catch(e){ console.error('Personal bests render failed', e); }

}


async function initApp(){
  recordsByLocation = await loadRecords();
  setupTabs();
  setupShareButton();
  setupHeaderMenu();
  setupWeightUnitToggle();
  setupBackupRestoreUI();

  // Normalize stored record values to the currently selected unit on load
  try{
    const storedUnit = localStorage.getItem('recordsUnit') || 'lbs';
    if(storedUnit !== (weightUnit || 'lbs')){
      convertAllStoredRecords(storedUnit, (weightUnit || 'lbs'));
    }
  }catch(_){}

  updateRecordsUnitLabel();
  buildLocationButtons();
  setupRaritySlicers();
  initIncludeLegendaryToggle();
  makeCharts();
  locationSelect.onchange = renderTable;
  renderTable();
  try{ updateDashboard(); }catch(_){}
}
initApp();

function setupTabs(){
  const buttons = Array.from(document.querySelectorAll('.top-tabs .tab-btn[data-view]'));
  if(!buttons.length) return;

  const views = Array.from(document.querySelectorAll('.tab-view'));
  function setActive(viewId){
    buttons.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-view') === viewId));
    views.forEach(v => v.classList.toggle('active', v.id === viewId));
    document.body.classList.toggle('no-sidebar', (viewId === 'recordsView' || viewId === 'instructionsView' || viewId === 'fishView' || viewId === 'mapView'));

    // Chart.js doesn't always recalc size when a canvas goes from display:none -> block.
    setTimeout(()=>{
      try{
        [pointsByRarityChart, starsByRarityChart, starCatchesChart, pointsByMapChart, legendaryChart, fearsomeChart, eliteEpicsChart, shortLivedEpicsChart, invisiblesChart, commonDumbbellChart, rareDumbbellChart, epicDumbbellChart, typeDumbbellChart]
          .forEach(c=>{ try{ c && c.resize(); }catch(_){} });
      }catch(_){}
    }, 50);

    // Re-render charts when entering a view whose canvases may have been hidden.
    if(viewId === 'mapView' || viewId === 'fishView' || viewId === 'dashboardView'){
      try{ updateDashboard(); }catch(_e){}
    }

    if(viewId === 'recordsView'){
      try{ renderTable(); }catch(_){}
      try{ updateRecordsUnitLabel(); }catch(_){}
    }
  }

  buttons.forEach(btn => btn.addEventListener('click', ()=>setActive(btn.getAttribute('data-view'))));

  // Default: Overview
  setActive('dashboardView');
}


function setupWeightUnitToggle(){
  const lbsBtn = document.getElementById('unitLbs');
  const kgsBtn = document.getElementById('unitKgs');
  if(!lbsBtn || !kgsBtn) return;

  function applyActive(){
    lbsBtn.classList.toggle('active', weightUnit === 'lbs');
    kgsBtn.classList.toggle('active', weightUnit === 'kgs');
  }
  applyActive();

    updateRecordsUnitLabel();
  lbsBtn.addEventListener('click', ()=>{
    if(weightUnit === 'lbs') return;
    const prevUnit = weightUnit;
    weightUnit = 'lbs';
    localStorage.setItem('weightUnit', weightUnit);
    convertAllStoredRecords(prevUnit, weightUnit);
    applyActive();
    updateRecordsUnitLabel();
    try{ updateDashboard(); }catch(_){ }
    try{ updateScoreRangesLocation(); }catch(_){ }
    if(typeof renderTable === 'function') renderTable();
    if(typeof renderTable === 'function') renderTable();
    if(typeof renderRecords === 'function') renderRecords();
    if(typeof buildRecordsTable === 'function') buildRecordsTable();
  });

  kgsBtn.addEventListener('click', ()=>{
    if(weightUnit === 'kgs') return;
    const prevUnit = weightUnit;
    weightUnit = 'kgs';
    localStorage.setItem('weightUnit', weightUnit);
    convertAllStoredRecords(prevUnit, weightUnit);
    applyActive();
    updateRecordsUnitLabel();
    try{ updateDashboard(); }catch(_){ }
    try{ updateScoreRangesLocation(); }catch(_){ }
    if(typeof renderTable === 'function') renderTable();
    if(typeof renderTable === 'function') renderTable();
    if(typeof renderRecords === 'function') renderRecords();
    if(typeof buildRecordsTable === 'function') buildRecordsTable();
  });
}


function updateRecordsUnitLabel(){
  const el = document.getElementById('recordsUnitLabel');
  if(!el) return;
  el.textContent = (weightUnit === 'kgs') ? 'kgs' : 'lbs';
}


function _shareSafeNumber(n){
  if(n == null || Number.isNaN(Number(n))) return 0;
  return Number(n);
}

function buildShareKPIs(opts){
  const location = (opts && opts.location) ? String(opts.location) : '';
  const recs = recordsByLocation || {};
  let totalCaught = 0;
  let star4 = 0;
  let star5 = 0;

  let totalPoints = 0;

  const byMap = {};
  const topByRarity = { Common:null, Rare:null, Epic:null, Legendary:null };

  const locs = location ? [location] : getLocationList();
  for(const loc of locs){
    byMap[loc] = {sum:0, cnt:0};
    const fishList = LOCATIONS[loc] || [];
    for(const fish of fishList){
      const raw = recs?.[loc]?.[fish.name];
      // weights stored in lbs; user input may be kg depending on current unit
      let w = parseUserWeightToLbs(raw);
      if(weightUnit === 'kgs' && tinyFishKgAcceptsDisplayed(raw, fish)){
        if(w < fish.min) w = fish.min;
        if(w > fish.max) w = fish.max;
      }
      const valid = raw !== "" && !Number.isNaN(w) && w > 0 && w >= fish.min && w <= fish.max;
      if(!valid) continue;

      const pts = calculatePoints(w, fish); // points-only
      const stars = calculateStars(fish.category, pts);

      totalCaught += 1;
      totalPoints += pts;
      byMap[loc].sum += pts;
      byMap[loc].cnt += 1;

      if(stars === 4) star4 += 1;
      if(stars === 5) star5 += 1;

      const cat = fish.category;
      const cur = topByRarity[cat];
      const curPts = cur ? cur.points : -1;
      const curStars = cur ? (cur.stars ?? 0) : -1;
      if(!cur || pts > curPts || (pts === curPts && stars > curStars)){
        topByRarity[cat] = { name: fish.name, points: pts, stars, location: loc };
      }
    }
  }

  let bestMap = "";
  let bestAvg = 0;
  if(location){
    const cnt = byMap[location]?.cnt || 0;
    bestMap = location;
    bestAvg = cnt ? (byMap[location].sum / cnt) : 0;
  }else{
    for(const loc of Object.keys(byMap)){
      const cnt = byMap[loc].cnt;
      const avg = cnt ? (byMap[loc].sum / cnt) : 0;
      if(avg > bestAvg){
        bestAvg = avg;
        bestMap = loc;
      }
    }
  }

  const pct4 = totalCaught ? (star4 / totalCaught * 100) : 0;
  const pct5 = totalCaught ? (star5 / totalCaught * 100) : 0;

  return {
    location,
    totalPoints: _shareSafeNumber(totalPoints),
    totalCaught: _shareSafeNumber(totalCaught),
    bestMap,
    bestAvg: _shareSafeNumber(bestAvg),
    pct4: _shareSafeNumber(pct4),
    pct5: _shareSafeNumber(pct5),
    topByRarity
  };
}

function generateShareImage(opts){
  const k = buildShareKPIs(opts || {});
  const size = 1080;
  const c = document.createElement('canvas');
  c.width = size; c.height = size;
  const ctx = c.getContext('2d');

  ctx.fillStyle = '#0b1220';
  ctx.fillRect(0,0,size,size);

  const g = ctx.createLinearGradient(0,0,size,size);
  g.addColorStop(0,'rgba(255,255,255,.06)');
  g.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0,0,size,size);

  ctx.fillStyle = 'rgba(255,255,255,.92)';
  ctx.font = '800 56px system-ui, -apple-system, Segoe UI, Roboto, Arial';
  ctx.fillText('FishMetrics', 70, 120);

  ctx.fillStyle = 'rgba(255,255,255,.65)';
  ctx.font = '600 26px system-ui, -apple-system, Segoe UI, Roboto, Arial';
  const dateStr = new Date().toLocaleDateString(undefined, { year:'numeric', month:'short', day:'numeric' });
  const sub = k.location ? ('Share Card • ' + k.location + ' • ' + dateStr) : ('Share Card • ' + dateStr);
  ctx.fillText(sub, 70, 160);

  function card(x,y,w,h){
    ctx.fillStyle = 'rgba(255,255,255,.06)';
    ctx.strokeStyle = 'rgba(255,255,255,.10)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    const r = 22;
    ctx.moveTo(x+r,y);
    ctx.arcTo(x+w,y,x+w,y+h,r);
    ctx.arcTo(x+w,y+h,x,y+h,r);
    ctx.arcTo(x,y+h,x,y,r);
    ctx.arcTo(x,y,x+w,y,r);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  const pad=70, gap=22;
  const sectionGap = 26;
  const colW = (size - pad*2 - gap)/2;
  const rowH = 118;
  const labelYOff = Math.round(rowH * 0.38);
  const valueYOff = Math.round(rowH * 0.80);
  const topY = 210;
  const y2 = topY + rowH + gap;

  const drawLabel = (txt, x, y) => {
    ctx.fillStyle='rgba(255,255,255,.70)';
    ctx.font='700 22px system-ui, -apple-system, Segoe UI, Roboto, Arial';
    ctx.fillText(txt, x, y);
  };
  const drawValue = (txt, x, y, weight=900, px=48) => {
    ctx.fillStyle='rgba(255,255,255,.92)';
    ctx.font=`${weight} ${px}px system-ui, -apple-system, Segoe UI, Roboto, Arial`;
    ctx.fillText(txt, x, y);
  };

  // KPI cards (2x2) — each KPI gets its own container
  // 1) Best map (overall) / Location (per-location)
  card(pad, topY, colW, rowH);
  if(k.location){
    drawLabel('Location', pad+26, topY+labelYOff);
    drawValue(k.location || '—', pad+26, topY+valueYOff, 800, 40);
  }else{
    drawLabel('Best map', pad+26, topY+labelYOff);
    drawValue(k.bestMap || '—', pad+26, topY+valueYOff, 800, 40);
  }

  // 2) Total points (per-location) / Average fish score (overall)
  card(pad+colW+gap, topY, colW, rowH);
  if(k.location){
    drawLabel('Total points', pad+colW+gap+26, topY+labelYOff);
    drawValue((k.totalPoints ? k.totalPoints.toFixed(0) : '0'), pad+colW+gap+26, topY+valueYOff, 900, 52);
  }else{
    drawLabel('Average fish score', pad+colW+gap+26, topY+labelYOff);
    drawValue((k.bestAvg ? k.bestAvg.toFixed(0) : '0'), pad+colW+gap+26, topY+valueYOff, 900, 52);
  }

  // 3) % 4★ catches
  card(pad, y2, colW, rowH);
  drawLabel('% 4★ catches', pad+26, y2+labelYOff);
  drawValue(k.pct4.toFixed(1) + '%', pad+26, y2+valueYOff, 900, 56);

  // 4) % 5★ catches
  card(pad+colW+gap, y2, colW, rowH);
  drawLabel('% 5★ catches', pad+colW+gap+26, y2+labelYOff);
  drawValue(k.pct5.toFixed(1) + '%', pad+colW+gap+26, y2+valueYOff, 900, 56);

  // Rarity section anchor (below KPI grid)
  const rarityTopY = y2 + rowH + sectionGap;

  card(pad, rarityTopY, size - pad*2, size - rarityTopY - 80);

  ctx.fillStyle='rgba(255,255,255,.92)';
  ctx.font='800 28px system-ui, -apple-system, Segoe UI, Roboto, Arial';
  ctx.fillText('Highest scoring fish by rarity', pad+26, rarityTopY+58);

  const rarities = ['Common','Rare','Epic','Legendary'];
  const startX = pad+26;
  const startY = rarityTopY+92;
  const lineH = 94;

  rarities.forEach((key,i)=>{
    const y = startY + i*lineH;
    ctx.fillStyle='rgba(255,255,255,.75)';
    ctx.font='800 16px system-ui, -apple-system, Segoe UI, Roboto, Arial';
    const rk = String(key||'').toUpperCase();
    ctx.fillText(rk, startX, y);
    const tw = ctx.measureText(rk).width;
    ctx.strokeStyle = 'rgba(255,255,255,.45)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(startX, y+7);
    ctx.lineTo(startX+tw, y+7);
    ctx.stroke();

    const item = k.topByRarity[key];
    const name = item ? toTitleCase(item.name) : '—';
    const pts = item ? item.points : 0;

    ctx.fillStyle='rgba(255,255,255,.92)';
    ctx.font='800 23px system-ui, -apple-system, Segoe UI, Roboto, Arial';
    ctx.fillText(name, startX, y+38);

    // extra info (stars + location)
    ctx.fillStyle='rgba(255,255,255,.62)';
    ctx.font='600 15px system-ui, -apple-system, Segoe UI, Roboto, Arial';
    const stars = item ? (item.stars ?? 0) : 0;
    const loc = item ? (item.location ?? '') : '';
    if(item){
      const meta = `★ ${stars}  •  ${loc}`;
      ctx.fillText(meta, startX, y+70);
    }

    ctx.fillStyle='rgba(255,255,255,.70)';
    ctx.font='800 21px system-ui, -apple-system, Segoe UI, Roboto, Arial';
    ctx.fillText(String(pts) + ' pts', size - pad - 200, y+40);
  });

  ctx.fillStyle='rgba(255,255,255,.50)';
  ctx.font='700 18px system-ui, -apple-system, Segoe UI, Roboto, Arial';
  ctx.fillText('fishmetrics • share card', pad, size-40);

  return c;
}

function downloadShareImage(opts){
  try{
    const c = generateShareImage(opts || {});
    const loc = (opts && opts.location) ? String(opts.location) : '';
    const safeLoc = loc ? loc.replace(/[^a-z0-9]+/gi,'_').replace(/^_+|_+$/g,'') : '';
    const a = document.createElement('a');
    a.href = c.toDataURL('image/png');
    a.download = safeLoc ? ('FishMetrics_' + safeLoc + '_Share.png') : 'FishMetrics_Share.png';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }catch(e){
    console.error('Share failed', e);
    alert('Could not generate share image.');
  }
}


function saveRecordsToStorage(){
  try{
    // IndexedDB is source of truth
    if(typeof saveRecords === 'function') saveRecords(recordsByLocation || {});
  }catch(_){}
  try{
    // LocalStorage backup (legacy key)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recordsByLocation || {}));
    localStorage.setItem('recordsUnit', weightUnit || 'lbs');
  }catch(_){}
}


function convertAllStoredRecords(fromUnit, toUnit){
  if(!recordsByLocation) return;
  if(fromUnit === toUnit) return;
  const factor = 2.2046226218; // lbs per kg
  for(const loc of Object.keys(recordsByLocation)){
    const locObj = recordsByLocation[loc];
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
  saveRecordsToStorage();
}


function setupHeaderMenu(){
  const btn = document.getElementById('menuBtn');
  const dd = document.getElementById('menuDropdown');
  const share = document.getElementById('shareMenuItem');
  if(!btn || !dd) return;

  function closeMenu(){
    dd.classList.remove('open');
    dd.setAttribute('aria-hidden','true');
  }
  function toggleMenu(){
    const open = dd.classList.toggle('open');
    dd.setAttribute('aria-hidden', open ? 'false' : 'true');
  }

  btn.addEventListener('click', (e)=>{
    e.stopPropagation();
    toggleMenu();
  });

  document.addEventListener('click', ()=> closeMenu());
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeMenu(); });

  if(share){
    share.addEventListener('click', ()=>{
      closeMenu();
      downloadShareImage();
    });
  }
}


// -----------------------------
// Backup / Restore (JSON)
// -----------------------------

function buildBackupPayload(){
  const now = new Date();
  return {
    meta: {
      app: 'FishMetrics',
      version: '1.2',
      exportedAt: now.toISOString()
    },
    settings: {
      weightUnit: (weightUnit === 'kgs') ? 'kgs' : 'lbs'
    },
    recordsByLocation: recordsByLocation || {}
  };
}

function downloadBackupJSON(){
  try{
    const payload = buildBackupPayload();
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const date = (payload?.meta?.exportedAt || '').slice(0,10) || (new Date()).toISOString().slice(0,10);
    a.href = url;
    a.download = `fishmetrics_backup_${date}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(()=>{ try{ URL.revokeObjectURL(url); }catch(_){ } }, 0);
    try{ setBackupMsg('✅ Fish Tank backed up.'); }catch(_){ }
  }catch(err){
    console.error('Backup export failed', err);
    alert('Could not export backup.');
  }
}

function _countBackupRecords(obj){
  let n = 0;
  try{
    for(const loc of Object.keys(obj || {})){
      const rec = obj[loc] || {};
      for(const k of Object.keys(rec)){
        const v = rec[k];
        if(v == null) continue;
        const s = String(v).trim();
        if(s) n += 1;
      }
    }
  }catch(_){ }
  return n;
}

function _normalizeBackupObject(parsed){
  if(!parsed || typeof parsed !== 'object') return null;
  const records = parsed.recordsByLocation || parsed.records || parsed.data || null;
  if(!records || typeof records !== 'object') return null;
  const unit = parsed?.settings?.weightUnit || parsed?.settings?.unit || parsed?.weightUnit || null;
  const exportedAt = parsed?.meta?.exportedAt || parsed?.exportedAt || null;
  const version = parsed?.meta?.version || parsed?.version || null;
  return { recordsByLocation: records, weightUnit: unit, exportedAt, version };
}

function applyRestoredState(restored){
  recordsByLocation = restored.recordsByLocation || {};
  const u = (restored.weightUnit === 'kgs') ? 'kgs' : 'lbs';
  weightUnit = u;
  try{ localStorage.setItem('weightUnit', weightUnit); }catch(_){ }
  try{ localStorage.setItem('recordsUnit', weightUnit); }catch(_){ }
  try{ saveRecordsToStorage(); }catch(_){ }

  // Update unit toggle UI
  try{
    const lbsBtn = document.getElementById('unitLbs');
    const kgsBtn = document.getElementById('unitKgs');
    if(lbsBtn && kgsBtn){
      lbsBtn.classList.toggle('active', weightUnit === 'lbs');
      kgsBtn.classList.toggle('active', weightUnit === 'kgs');
    }
  }catch(_){ }

  try{ updateRecordsUnitLabel(); }catch(_){ }
  try{ renderTable(); }catch(_){ }
  try{ updateDashboard(); }catch(_){ }
}

function setBackupMsg(msg){
  const el = document.getElementById('backupMsg');
  if(!el) return;
  el.textContent = msg || '';
}

function restoreFromFile(file){
  if(!file) return;
  const reader = new FileReader();
  reader.onerror = () => {
    setBackupMsg('❌ Could not read that file.');
  };
  reader.onload = () => {
    try{
      const parsed = JSON.parse(String(reader.result || ''));
      const norm = _normalizeBackupObject(parsed);
      if(!norm){
        setBackupMsg('❌ This doesn\'t look like a FishMetrics backup.');
        return;
      }

      const locCount = Object.keys(norm.recordsByLocation || {}).length;
      const recCount = _countBackupRecords(norm.recordsByLocation || {});
      const unit = (norm.weightUnit === 'kgs') ? 'kgs' : 'lbs';
      const when = norm.exportedAt ? new Date(norm.exportedAt).toLocaleString() : 'Unknown date';

      const ok = confirm(
        `Backup detected:\n\n• ${recCount} fish records\n• ${locCount} locations\n• Units: ${unit}\n• Exported: ${when}\n\nRestoring will replace your current pond. Continue?`
      );
      if(!ok){
        setBackupMsg('Restore cancelled.');
        return;
      }

      applyRestoredState(norm);
      setBackupMsg('🎉 Fish Tank successfully restored.');
    }catch(err){
      console.error('Restore failed', err);
      setBackupMsg('❌ That file could not be restored (invalid JSON).');
    }
  };
  reader.readAsText(file);
}

function setupBackupRestoreUI(){
  const exportBtn = document.getElementById('backupExportBtn');
  const drop = document.getElementById('restoreDrop');
  const fileInput = document.getElementById('restoreFile');

  if(exportBtn){
    exportBtn.addEventListener('click', (e)=>{
      e.preventDefault();
      downloadBackupJSON();
    });
  }

  function openPicker(){
    if(fileInput) fileInput.click();
  }

  if(drop){
    drop.addEventListener('click', openPicker);
    drop.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        openPicker();
      }
    });

    drop.addEventListener('dragover', (e)=>{
      e.preventDefault();
      drop.classList.add('dragover');
    });
    drop.addEventListener('dragleave', ()=> drop.classList.remove('dragover'));
    drop.addEventListener('drop', (e)=>{
      e.preventDefault();
      drop.classList.remove('dragover');
      const file = e.dataTransfer?.files?.[0];
      if(!file) return;
      restoreFromFile(file);
    });
  }

  if(fileInput){
    fileInput.addEventListener('change', ()=>{
      const file = fileInput.files?.[0];
      // allow restoring same file twice
      fileInput.value = '';
      if(!file) return;
      restoreFromFile(file);
    });
  }
}


// GDPR: Clear all local FishMetrics data
function clearFishMetricsData() {
  if (confirm("This will permanently delete all FishMetrics data on this device. Continue?")) {
    localStorage.clear();
    location.reload();
  }
}


// Privacy modal handlers
function openPrivacyNotice() {
  document.getElementById("privacyModal").style.display = "flex";
}

function closePrivacyNotice() {
  document.getElementById("privacyModal").style.display = "none";
}
