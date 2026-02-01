

// === Seasonality (Out-of-Season) Support ===
// Define which months each fish is IN season for. Months are 1-12.
// If a fish is not listed here, it's treated as in-season by default.
// Example:
//   const FISH_SEASONALITY = {
//     "bluefish": { inSeasonMonths: [1,2,3,4] }, // Jan-Apr
//     "bonefish": { inSeasonMonths: [5,6,7,8] }  // May-Aug
//   };
const FISH_SEASONALITY = {
  "albacore": { inSeasonMonths: [4, 5, 6, 7, 8, 9, 10, 11, 12] },
  "aligator gar": { inSeasonMonths: [5, 6, 7, 8, 9] },
  "american eel": { inSeasonMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12] },
  "arctic char": { inSeasonMonths: [5, 6, 7, 8, 9, 10, 11] },
  "arctic greyling": { inSeasonMonths: [3, 4, 5, 6, 7, 8, 9] },
  "arowana": { inSeasonMonths: [4, 5, 6, 7, 8, 9, 10] },
  "barramundi": { inSeasonMonths: [2, 3, 4, 5] },
  "tucunare": { inSeasonMonths: [1, 8, 9, 10, 11, 12] },
  "bicuda": { inSeasonMonths: [3, 4, 5, 6, 7, 8, 9] },
  "black ear catfish": { inSeasonMonths: [2, 3, 4, 5, 6, 7, 8] },
  "black marlin": { inSeasonMonths: [7, 8, 9, 10] },
  "blue lingcod": { inSeasonMonths: [3, 4, 5, 6, 7, 8, 9, 10] },
  "blue marlin": { inSeasonMonths: [4, 5, 6, 7, 8, 9, 10, 11] },
  "brook trout": { inSeasonMonths: [3, 4, 5, 6, 7, 8, 9] },
  "brown trout": { inSeasonMonths: [4, 5, 6, 7, 8, 9, 10, 11] },
  "bull shark": { inSeasonMonths: [6, 7, 8, 9] },
  "burbot": { inSeasonMonths: [1, 2, 3, 9, 10, 11, 12] },
  "chinook salmon": { inSeasonMonths: [3, 4, 5, 6, 7, 8, 9, 10] },
  "chub": { inSeasonMonths: [1, 2, 3, 4, 9, 10, 11, 12] },
  "chum salmon": { inSeasonMonths: [5, 6, 7, 8, 9, 10, 11] },
  "coalfish": { inSeasonMonths: [3, 4, 5, 6, 7, 8, 9, 10] },
  "coho salmon": { inSeasonMonths: [6, 7, 8, 9, 10, 11] },
  "common stargazer": { inSeasonMonths: [5, 6, 7, 8, 9] },
  "coral trout": { inSeasonMonths: [5, 6, 7, 8, 9, 10, 11] },
  "corvina": { inSeasonMonths: [3, 4, 5, 6, 7, 8, 9] },
  "cubera snapper": { inSeasonMonths: [6, 7, 8, 9, 10, 11] },
  "curimbata": { inSeasonMonths: [1, 2, 3, 10, 11, 12] },
  "dace": { inSeasonMonths: [2, 3, 4, 5, 6] },
  "dusky flathead": { inSeasonMonths: [1, 2, 3, 4, 10, 11, 12] },
  "electric eel": { inSeasonMonths: [1, 2, 3, 11, 12] },
  "european eel": { inSeasonMonths: [6, 7, 8, 9] },
  "european grayling": { inSeasonMonths: [9, 10, 11, 12] },
  "flathead catfish": { inSeasonMonths: [4, 5, 6, 7, 8, 9, 10] },
  "flatwhiskered catfish": { inSeasonMonths: [1, 2, 3, 4, 11, 12] },
  "freshwater bream": { inSeasonMonths: [3, 4, 5, 6, 7, 8, 9] },
  "giant pangasius": { inSeasonMonths: [2, 3, 4, 5, 6, 7] },
  "golden trevally": { inSeasonMonths: [3, 4, 5, 6, 7, 8, 9, 10] },
  "great snakehead": { inSeasonMonths: [2, 3, 4, 5, 6, 7] },
  "grey trout": { inSeasonMonths: [1, 7, 8, 9, 10, 11, 12] },
  "humpback salmon": { inSeasonMonths: [2, 3, 4, 5, 6, 7, 8, 9, 10] },
  "jack crevalle": { inSeasonMonths: [3, 4, 5, 6, 7, 8, 9, 10] },
  "juliens golden prize carp": { inSeasonMonths: [2, 3, 4, 5, 6, 7, 8] },
  "king salmon": { inSeasonMonths: [3, 4, 5, 6, 7, 8, 9, 10] },
  "lake sturgeon": { inSeasonMonths: [3, 4, 5, 6, 7, 8] },
  "lake trout": { inSeasonMonths: [1, 8, 9, 10, 11, 12] },
  "largemouth bass": { inSeasonMonths: [1, 3, 4, 5, 6, 7, 9, 10, 12] },
  "luderick": { inSeasonMonths: [6, 7, 8, 9, 10, 11] },
  "manta ray": { inSeasonMonths: [1, 2, 3, 10, 11, 12] },
  "muskie": { inSeasonMonths: [2, 3, 4, 5, 6, 7, 8] },
  "northern pike": { inSeasonMonths: [3, 4, 5, 6, 7, 8, 9, 10] },
  "pacific herring": { inSeasonMonths: [1, 2, 3, 4, 9, 10, 11, 12] },
  "pacu": { inSeasonMonths: [1, 2, 9, 10, 11, 12] },
  "pink salmon": { inSeasonMonths: [3, 4, 5, 6, 7, 8, 9] },
  "pla kad thong": { inSeasonMonths: [5, 6, 7, 8, 9, 10, 11] },
  "port jackson shark": { inSeasonMonths: [5, 6, 7, 8, 9, 10] },
  "queensland grouper": { inSeasonMonths: [1, 2, 3, 12] },
  "rainbow trout": { inSeasonMonths: [1, 2, 3, 4, 9, 10, 11, 12] },
  "red piranha": { inSeasonMonths: [2, 3, 4, 5, 6, 10, 11, 12] },
  "redear sunfish": { inSeasonMonths: [1, 2, 3, 4, 11, 12] },
  "redeye piranha": { inSeasonMonths: [1, 2, 3, 11, 12] },
  "round whitefish": { inSeasonMonths: [4, 5, 6, 7, 8, 9, 10] },
  "scottish salmon": { inSeasonMonths: [4, 5, 6, 7, 8, 9, 10] },
  "sea trout": { inSeasonMonths: [4, 5, 6, 7, 8, 9, 10, 11] },
  "silver salmon": { inSeasonMonths: [4, 5, 6, 7, 8, 9, 10, 11] },
  "smallmouth bass": { inSeasonMonths: [4, 5, 6, 7, 8, 9, 10] },
  "smooth oreo dory": { inSeasonMonths: [1, 2, 3, 4, 10, 11, 12] },
  "snook": { inSeasonMonths: [5, 6, 7, 8, 9] },
  "sockeye salmon": { inSeasonMonths: [4, 5, 6, 7, 8, 9, 10, 11] },
  "spanish mackarel": { inSeasonMonths: [4, 5, 6, 7, 8, 9, 10, 11] },
  "speckled pavon": { inSeasonMonths: [1, 8, 9, 10, 11, 12] },
  "steelhead": { inSeasonMonths: [1, 2, 3, 4, 9, 10, 11, 12] },
  "ocean sunfish": { inSeasonMonths: [4, 5, 6, 7, 8, 9, 10, 11] },
  "tailor": { inSeasonMonths: [2, 3, 4, 5, 6] },
  "tench": { inSeasonMonths: [4, 5, 6, 7, 8, 9] },
  "tripletail": { inSeasonMonths: [5, 6, 7, 8, 9] },
  "unicorn leatherjacket": { inSeasonMonths: [1, 2, 10, 11, 12] },
  "walleye": { inSeasonMonths: [3, 4, 5, 6, 7, 8, 9, 10] },
  "whale shark": { inSeasonMonths: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
  "white bass": { inSeasonMonths: [2, 3, 4, 5, 6, 8, 9, 10, 11] },
  "yellow perch": { inSeasonMonths: [3, 4, 5, 6, 7, 8, 9, 10, 11] },
  "zungaro": { inSeasonMonths: [5, 6, 7, 8, 9, 10, 11] },
};

const OOS_MAX_POINTS = { Common:357, Rare:476, Epic:596 };

// Aliases to map correct fish names -> seasonality keys (keeps seasonality table as-is).
// Use this only for seasonality lookup.
const FISH_SEASONALITY_ALIASES = {
  "spanish mackerel": "spanish mackarel",
  "arctic grayling": "arctic greyling",
  "alligator gar": "aligator gar"
};

// Canonical fish-name aliases (used for stored log records + backup restore).
// Keys are normalized (lowercase, single-spaced). Values MUST match the canonical *stored key*
// format used in LOCATIONS (lowercase fish names). UI display uses toTitleCase separately.
// This prevents legacy/misspelled production records from being dropped after a release.
const FISH_CANONICAL_NAME_ALIASES = {
  "arctic grayling": "arctic greyling",
  "spanish mackarel": "spanish mackerel",
  // Production used title-case "Alligator Gar"; LOCATIONS uses lowercase "alligator gar".
  "alligator gar": "alligator gar"
};

function canonicalizeFishName(name){
  const key = _normFishName(name);
  // Return canonical stored key (lowercase), not display name.
  return (FISH_CANONICAL_NAME_ALIASES && FISH_CANONICAL_NAME_ALIASES[key]) ? FISH_CANONICAL_NAME_ALIASES[key] : key;
}

// Merge two stored weight values (strings). Prefer an existing non-empty value; otherwise take incoming.
function mergeStoredWeight(existing, incoming){
  const a = (existing == null) ? "" : String(existing).trim();
  const b = (incoming == null) ? "" : String(incoming).trim();
  if(a) return a;
  if(b) return b;
  return "";
}

// Canonicalize + merge duplicate/alias fish keys inside a recordsByLocation object.
function canonicalizeRecordsByLocation(obj){
  const out = {};
  try{
    for(const loc of Object.keys(obj || {})){
      const rec = obj[loc] || {};
      const merged = {};
      for(const fishName of Object.keys(rec)){
        const val = rec[fishName];
        const canonName = canonicalizeFishName(fishName);
        const prev = merged[canonName];
        const next = mergeStoredWeight(prev, val);
        if(next !== ""){
          merged[canonName] = next;
        }else{
          // keep empty only if there isn't any non-empty (usually we drop empties)
          if(prev == null && (val === "" || val == null)) {
            // ignore
          }
        }
      }
      out[loc] = merged;
    }
  }catch(_){ }
  return out;
}

function _normFishName(name){
  return String(name||'').trim().toLowerCase().replace(/\s+/g,' ');
}

// Internal helper used in a few backup/validation paths.
// Kept for backward compatibility with earlier builds that used _canonKey().
function _canonKey(name){
  return _normFishName(name);
}

function isFishInSeason(fishName, d=new Date()){
  const key0 = _normFishName(fishName);
  const key = (FISH_SEASONALITY_ALIASES && FISH_SEASONALITY_ALIASES[key0]) ? FISH_SEASONALITY_ALIASES[key0] : key0;
  let entry = FISH_SEASONALITY[key];
  if(!entry){
    // UK/US spelling fallback for *greyling/grayling* (only for seasonality lookup)
    const alt = key.includes("grayling") ? key.replace(/\bgrayling\b/g,"greyling") : (key.includes("greyling") ? key.replace(/\bgreyling\b/g,"grayling") : null);
    if(alt && FISH_SEASONALITY[alt]) entry = FISH_SEASONALITY[alt];
  }
  if(!entry || !Array.isArray(entry.inSeasonMonths) || entry.inSeasonMonths.length===0){
    return true; // default: in-season
  }
  const m = (d.getMonth()+1); // 1-12
  return entry.inSeasonMonths.includes(m);
}

function oosPointCapForFish(fish){
  try{
    if(!fish) return null;
    if(String(fish.category).toLowerCase()==='legendary') return null; // legendary always in-season
    return OOS_MAX_POINTS[fish.category] ?? null;
  }catch(_){ return null; }
}

const CATEGORY_MIN_POINTS = { Common:300, Rare:400, Epic:500, Legendary:5000 };

const CATEGORY_ORDER = ["Common","Rare","Epic","Legendary"];
const CATEGORY_RANK = Object.fromEntries(CATEGORY_ORDER.map((c,i)=>[c,i]));

// Location display/order list (used across dropdowns and dashboard buttons)
// Backups/restores are keyed by location name (not index-based), so adding new locations
// is backwards compatible with older backups.
const LOCATION_ORDER = ["Marina","Paradise Island","Great Lakes","Costa Rica","Alaska","Australia","Scotland","Thailand","Amazon"];
const LOCATION_RANK = Object.fromEntries(LOCATION_ORDER.map((l,i)=>[l,i]));

const LOCATIONS = {
 "Marina": [
  { name:"anchovy", category:"Common", min:0.02, max:0.22 },
  { name:"sardine", category:"Common", min:0.22, max:0.66 },
  { name:"brisling", category:"Common", min:0.02, max:0.22 },
  { name:"gilt-head bream", category:"Common", min:2.2, max:4.41 },
  { name:"striped red mullet", category:"Common", min:1.1, max:2.2 },
  { name:"mudskipper", category:"Common", min:0.02, max:0.11 },
  { name:"hardyhead silverside", category:"Common", min:0.22, max:0.77 },
  { name:"blobfish", category:"Epic", min:2.2, max:4.41 }
],
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
  { name:"arctic greyling", category:"Common", min:4.41, max:8.82 },
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

function calculatePointsRaw(w,f){
 if(!f || !f.category) return 0;
 return CATEGORY_MIN_POINTS[f.category]*(1+(w-f.min)/(f.max-f.min));
}

function calculatePoints(w,f){
 if(!w||w<f.min||w>f.max) return 0;
 return Math.round(CATEGORY_MIN_POINTS[f.category]*(1+(w-f.min)/(f.max-f.min)));
}

// --- Season mode helpers (points -> weight) ---
const _LBS_PER_KG = 2.2046226218;

function _minMaxPointsForFish(f){
  const base = CATEGORY_MIN_POINTS[f.category] || 0;
  return { minP: base, maxP: base * 2 };
}

function _parsePointsInt(raw){
  const s = String(raw ?? '').trim();
  if(!s) return NaN;
  if(!/^\d+$/.test(s)) return NaN;
  return Number.parseInt(s, 10);
}

function _lbsToDisplayUnit(lbs){
  return (weightUnit === 'kgs') ? (lbs / _LBS_PER_KG) : lbs;
}
function _displayUnitToLbs(u){
  return (weightUnit === 'kgs') ? (u * _LBS_PER_KG) : u;
}

// Find a stored weight string (2dp in current unit) that reproduces targetPts.
function storedWeightStringForPoints(targetPts, fish){
  // Season mode: user enters *points*. We store a derived weight string only so the rest of the app
  // (which is weight-based) can reuse existing logic. The previous 2dp-only approach couldn't
  // represent some valid point totals (e.g., 447) and would "snap" to the nearest representable
  // points (e.g., 450) after tab switches.
  //
  // New approach: compute a weight interval that maps to targetPts (given Math.round in calculatePoints),
  // then choose a value inside that interval and emit the *minimum* decimals (2-4) needed to reproduce
  // targetPts exactly when parsed back through calculatePoints.

  if(!fish) return "";
  const { minP, maxP } = _minMaxPointsForFish(fish);
  if(!Number.isFinite(targetPts) || targetPts < minP || targetPts > maxP) return "";

  const base = CATEGORY_MIN_POINTS[fish.category] || 0;
  if(!base) return "";

  const range = (fish.max - fish.min);
  if(!Number.isFinite(range) || range <= 0) return "";

  // Convert the rounding condition into a continuous v-interval, then to a w-interval (lbs).
  const vLo = (targetPts - 0.5);
  const vHi = (targetPts + 0.5);

  let wLo = fish.min + range * ((vLo / base) - 1);
  let wHi = fish.min + range * ((vHi / base) - 1);

  // Ensure ordered
  if(wLo > wHi){ const tmp = wLo; wLo = wHi; wHi = tmp; }

  // Clamp to fish bounds
  wLo = Math.max(fish.min, wLo);
  wHi = Math.min(fish.max, wHi);

  if(!(wHi >= wLo)) return "";

  // Start from the continuous inverse estimate (same as before) but clamp into the valid interval.
  const t = ((targetPts / base) - 1);
  const ratio = Math.max(0, Math.min(1, t));
  const estLbs = fish.min + ratio * range;
  const chosenLbs = Math.min(wHi, Math.max(wLo, estLbs));

  // Convert to display unit
  const chosenUnit = _lbsToDisplayUnit(chosenLbs);

  // Helper: format with N decimals then trim trailing zeros (keeps input neat).
  function fmtTrim(x, n){
    let s = Number(x).toFixed(n);
    // Trim trailing zeros + trailing dot
    s = s.replace(/\.0+$/,'').replace(/(\.\d*?)0+$/,'$1').replace(/\.$/,'');
    return s;
  }

  // Try 2..4 decimals to find the minimal representation that round-trips to targetPts.
  for(let dec=2; dec<=4; dec++){
    const s = fmtTrim(chosenUnit, dec);
    const u = Number.parseFloat(s);
    if(!Number.isFinite(u) || u <= 0) continue;
    const lbs = _displayUnitToLbs(u);
    if(lbs < fish.min - 1e-9 || lbs > fish.max + 1e-9) continue;
    const pts = calculatePoints(lbs, fish);
    if(pts === targetPts) return s;
  }

  // As a fallback, pick midpoint of the valid interval and emit 4 decimals.
  const midLbs = (wLo + wHi) / 2;
  const midUnit = _lbsToDisplayUnit(midLbs);
  return fmtTrim(midUnit, 4);
}


function _displayDerivedWeight2(raw){
  const s = String(raw ?? '').trim();
  if(!s) return '';
  const n = Number.parseFloat(s);
  if(!Number.isFinite(n)) return s;
  return n.toFixed(2);
}

function calculateStarsStrict(cat,p){
 p = Number(p)||0;
 if(!p) return 0;
 if(cat==="Common") return p<359?1:p<420?2:p<480?3:p<540?4:5;
 if(cat==="Rare") return p<480?1:p<560?2:p<640?3:p<720?4:5;
 if(cat==="Epic") return p<600?1:p<700?2:p<800?3:p<900?4:5;
 if(cat==="Legendary") return p<6000?1:p<7000?2:p<8000?3:p<9000?4:5;
 return 0;
}

function calculateStars(cat,p){
 p = Number(p)||0;
 // Stars are based on the *unrounded* points (float), while the UI displays rounded points.
 // Add a tiny epsilon to avoid floating precision edge cases (e.g., 539.999999999 -> 540).
 const pRaw = Math.max(0, p + 1e-9);
 if(!pRaw) return 0;
 if(cat==="Common") return pRaw<359?1:pRaw<420?2:pRaw<480?3:pRaw<540?4:5;
 if(cat==="Rare") return pRaw<480?1:pRaw<560?2:pRaw<640?3:pRaw<720?4:5;
 if(cat==="Epic") return pRaw<600?1:pRaw<700?2:pRaw<800?3:pRaw<900?4:5;
 if(cat==="Legendary") return pRaw<6000?1:pRaw<7000?2:pRaw<8000?3:pRaw<9000?4:5;
 return 0;
}

// Focus soft-cap ratio (applies to 5★ target gap).
// Change this value to tune the “soft cap” ceiling across all categories.
const SOFT_CAP_RATIO = 0.945;

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
    try{ updateSeasonProgress(); }catch(_){}
    try{ updateSeasonUncaughtCount(); }catch(_){}
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
    try{ updateDashboard();
    try{ updateSeasonProgress(); }catch(_){}
    try{ updateSeasonUncaughtCount(); }catch(_){} }catch(_){ }
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
      try{ updateDashboard();
    try{ updateSeasonProgress(); }catch(_){}
    try{ updateSeasonUncaughtCount(); }catch(_){} }catch(_){ }
    });
  });

  refreshUI();
}

function toTitleCase(str){
  const raw = String(str);
  const k = raw.trim().toLowerCase().replace(/\s+/g,' ');
  // Display-only fix for a known game typo
  if(k === "alligator gar") return "Aligator Gar";
  return raw
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

function tooltipYAxisLabel(items){
  const it = items && items[0];
  if(!it) return '';
  const chart = it.chart;
  const yScale = chart && chart.scales ? chart.scales.y : null;
  const py = it.parsed && typeof it.parsed.y !== 'undefined' ? it.parsed.y : undefined;
  if(yScale && typeof py === 'number' && isFinite(py) && typeof yScale.getLabelForValue === 'function'){
    const lbl = yScale.getLabelForValue(py);
    if(lbl != null) return String(lbl);
  }
  const ry = it.raw && typeof it.raw.y !== 'undefined' ? it.raw.y : undefined;
  if(typeof ry === 'string') return ry;
  if(typeof it.label === 'string') return it.label;
  return '';
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

  const seasonMode = document.body.classList.contains('season-active');

  function eligibleForSeasonHighlights(f){
    if(!seasonMode) return true;

    // Keep existing behavior: Legendary is always eligible in season mode
    if(((f && f.category) || '').toLowerCase() === 'legendary') return true;

    const n = (f && (f.name || f.fish || f.canonicalName)) || '';
    return isFishInSeason(n, new Date());
  }


  // Update the panel title safely (no HTML changes required)
  try{
    const panel = wrap.closest('.panel');
    const titleEl = panel ? panel.querySelector('.panel-title') : null;
    if(titleEl){
      titleEl.textContent = seasonMode ? '✨ Highlights' : '👑 Personal Bests';
    }
  }catch(_){ }

  const locOrder = getLocationList();
  const locIndex = new Map(locOrder.map((l,i)=>[l,i]));
  const rarityOrder = ['Common','Rare','Epic','Legendary'];

  function bestOf(rarity){
    const candidates = (allFish || [])
      .filter(f => f.category === rarity && (f.points||0) > 0)
      .filter(eligibleForSeasonHighlights);
    if(!candidates.length) return null;
    return candidates.reduce((best, cur)=>{
      if(!best) return cur;
      if(cur.points > best.points) return cur;
      if(cur.points < best.points) return best;
      if((cur.stars||0) > (best.stars||0)) return cur;
      if((cur.stars||0) < (best.stars||0)) return best;
      const ci = locIndex.has(cur.location) ? locIndex.get(cur.location) : 999;
      const bi = locIndex.has(best.location) ? locIndex.get(best.location) : 999;
      return (ci < bi) ? cur : best;
    }, null);
  }

  function worstOf(rarity){
    const candidates = (allFish || [])
      .filter(f => f.category === rarity && (f.points||0) > 0)
      .filter(eligibleForSeasonHighlights);
    if(!candidates.length) return null;
    return candidates.reduce((worst, cur)=>{
      if(!worst) return cur;
      if(cur.points < worst.points) return cur;
      if(cur.points > worst.points) return worst;
      if((cur.stars||0) < (worst.stars||0)) return cur;
      if((cur.stars||0) > (worst.stars||0)) return worst;
      const ci = locIndex.has(cur.location) ? locIndex.get(cur.location) : 999;
      const wi = locIndex.has(worst.location) ? locIndex.get(worst.location) : 999;
      return (ci < wi) ? cur : worst;
    }, null);
  }

  function tile(rarity, label, rec){
    if(!rec){
      return `
        <div class="best-tile" data-rarity="${rarity}">
          <div class="best-top">
            <div class="best-rarity">${rarity} ${label}</div>
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
          <div class="best-rarity">${rarity} ${label}</div>
          <div class="best-points">${Math.round(rec.points || 0)}</div>
        </div>
        <div class="best-fish">${toTitleCase(rec.name)}</div>
        <div class="best-meta">
          <span class="pill">⭐ ${rec.stars ?? 0}</span>
          <span class="pill">📍 ${rec.location || '—'}</span>
        </div>
      </div>
    `;
  }

  let tiles = '';
  if(seasonMode){
    // Sequence: Common lowest, Common highest, Rare lowest, Rare highest, Epic lowest, Epic highest, Legendary lowest, Legendary highest
    tiles = rarityOrder.map(r => tile(r, 'Lowest', worstOf(r)) + tile(r, 'Highest', bestOf(r))).join('');
  } else {
    // Career mode: original behavior (highest only)
    tiles = rarityOrder.map(rarity => {
      const best = bestOf(rarity);
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
  }

  wrap.innerHTML = tiles;
}


function __seasonWrapLines(label, maxLen=14){
  if(typeof label !== "string") return label;
  const words = label.split(" ");
  const lines = [];
  let current = "";
  for(const w of words){
    const test = current ? (current + " " + w) : w;
    if(test.length > maxLen){
      if(current) lines.push(current);
      current = w;
    } else {
      current = test;
    }
  }
  if(current) lines.push(current);
  return lines;
}

const __improvementCROriginals = {};

// Season-only styling for Commons + Rares Improvement Targets (keeps all-time untouched)
function applySeasonCommonsRaresImprovementStyling(){
  const season = document.body.classList.contains("season-active");

  const charts = [
    { key:"eliteEpicsChart", obj: eliteEpicsChart },        // Commons improvements
    { key:"shortLivedEpicsChart", obj: shortLivedEpicsChart } // Rares improvements
  ];

  charts.forEach(({key, obj})=>{
    if(!obj || !obj.options || !obj.options.scales || !obj.options.scales.y) return;

    // snapshot originals once
    if(!__improvementCROriginals[key]){
      const y = obj.options.scales.y;
      const ticks = y.ticks || {};
      __improvementCROriginals[key] = {
        afterFit: y.afterFit,
        ticks_autoSkip: ticks.autoSkip,
        ticks_padding: ticks.padding,
        ticks_align: ticks.align,
        ticks_callback: ticks.callback
      };
    }

    const y = obj.options.scales.y;
    y.ticks = y.ticks || {};

    if(season){
      y.ticks.autoSkip = false;
      y.ticks.padding = 1;
      y.ticks.align = "end";
      y.ticks.callback = function(value){
        const label = this.getLabelForValue(value);
        return __seasonWrapLines(label, 14);
      };
      y.afterFit = (scale) => { scale.width = 90; };
    }else{
      const o = __improvementCROriginals[key];
      y.afterFit = o.afterFit;
      y.ticks.autoSkip = o.ticks_autoSkip;
      y.ticks.padding = o.ticks_padding;
      y.ticks.align = o.ticks_align;
      y.ticks.callback = o.ticks_callback;
    }

    obj.update("none");
  });
}



function getLocationList(){
  // Preserve desired location order even if object key order changes
  return LOCATION_ORDER.filter(l=>Object.prototype.hasOwnProperty.call(LOCATIONS,l));
}

// Persisted records per location (and in the combined view)
const STORAGE_KEY = "fishmetrics_records_v1"; // legacy (localStorage) key used only for one-time migration
const IDB_DB_NAME = "fishmetrics";
const IDB_DB_VERSION = 2;
const IDB_STORE = "location_records";
const IDB_STORE_SEASON = "season_location_records";

let recordsByLocation = {}; // in-memory cache, persisted to IndexedDB

let seasonRecordsByLocation = {}; // season-only cache, persisted to IndexedDB

function openIdb(){
  if (openIdb._p) return openIdb._p;
  openIdb._p = new Promise((resolve, reject) => {
    const req = indexedDB.open(IDB_DB_NAME, IDB_DB_VERSION);
    req.onupgradeneeded = (e) => {
      const db = req.result;
      if (!db.objectStoreNames.contains(IDB_STORE)) {
        db.createObjectStore(IDB_STORE, { keyPath: "location" });
      }
    if (!db.objectStoreNames.contains(IDB_STORE_SEASON)) {
        db.createObjectStore(IDB_STORE_SEASON, { keyPath: "location" });
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

async function idbLoadAllSeasonRecords(){
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

  if (existing && Object.keys(existing).length){
    // Seamless alias migration: canonicalize legacy fish keys before any validation/totals run.
    try{
      const canon = canonicalizeRecordsByLocation(existing);
      // Persist only if something actually changed (avoid unnecessary IDB writes).
      if(JSON.stringify(canon) !== JSON.stringify(existing)){
        try { await idbSaveAllRecords(canon); } catch {}
        return canon;
      }
    }catch(_){ }
    return existing;
  }

  // If IDB is empty, try migrating legacy localStorage data (if present)
  let legacy = {};
  try { legacy = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch { legacy = {}; }

  if (legacy && Object.keys(legacy).length){
    // Canonicalize before migrating so legacy misspellings don't get "lost".
    let canonLegacy = legacy;
    try{ canonLegacy = canonicalizeRecordsByLocation(legacy); }catch(_){ canonLegacy = legacy; }
    try { await idbSaveAllRecords(canonLegacy); } catch {}
    // keep localStorage as a fallback backup, but IndexedDB becomes source of truth
    return canonLegacy;
  }
  return {};
}


// Season records are stored separately so Season mode starts blank.
async function loadSeasonRecords(){
  let existing = {};
  try { existing = await idbLoadAllSeasonRecords(); } catch { existing = {}; }
  if (existing && Object.keys(existing).length){
    try{
      const canon = canonicalizeRecordsByLocation(existing);
      if(JSON.stringify(canon) !== JSON.stringify(existing)){
        try { await idbSaveAllSeasonRecords(canon); } catch {}
        return canon;
      }
    }catch(_){ }
    return existing;
  }

  // legacy fallback (if any)
  let legacy = {};
  try { legacy = JSON.parse(localStorage.getItem('fishmetrics_season_records_v1') || "{}"); } catch { legacy = {}; }
  if (legacy && Object.keys(legacy).length){
    let canonLegacy = legacy;
    try{ canonLegacy = canonicalizeRecordsByLocation(legacy); }catch(_){ canonLegacy = legacy; }
    try { await idbSaveAllSeasonRecords(canonLegacy); } catch {}
    return canonLegacy;
  }
  return {};
}

function saveSeasonRecords(records){
  idbSaveAllSeasonRecords(records).catch(()=>{});
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
  const seasonMode = document.body.classList.contains('season-active');
  const weightHdr = seasonMode ? `Weight (auto) (<span id="recordsUnitLabel">${weightUnit}</span>)` : `Your Record (<span id="recordsUnitLabel">${weightUnit}</span>)`;
  const pointsHdr = seasonMode ? 'Season Points' : 'Points';

  // Always show a Location column (in single-location view, it will be locked to the selected location).
  theadRow.innerHTML = `
      <th>Location</th>
      <th>Category</th>
      <th>Fish</th>
      <th>${weightHdr}</th>
      <th>${pointsHdr}</th>
      <th>Stars</th>
    `;
}



function confirmCareerPbUpdate(opts){
  // opts: {fishName, location, oldPts, newPts, unit, onYes, onNo}
  try{
    const pref = localStorage.getItem('fm_auto_update_pb_from_season');
    if(pref === "true"){
      opts && opts.onYes && opts.onYes();
      return;
    }
  }catch(_){}

  const backdrop = document.getElementById('pbConfirmBackdrop');
  const body = document.getElementById('pbConfirmBody');
  const yes = document.getElementById('pbConfirmYes');
  const no = document.getElementById('pbConfirmNo');
  const always = document.getElementById('pbConfirmAlways');
  if(!backdrop || !body || !yes || !no || !always){
    // Fallback
    if(confirm("New All-time PB detected. Update All-time PB?")){
      opts && opts.onYes && opts.onYes();
    }else{
      opts && opts.onNo && opts.onNo();
    }
    return;
  }

  const fishName = opts?.fishName || "this fish";
  const loc = opts?.location ? ` at ${opts.location}` : "";
  const oldPts = Number(opts?.oldPts || 0);
  const newPts = Number(opts?.newPts || 0);
  const unit = opts?.unit ? ` (${opts.unit})` : "";

  body.textContent = `${fishName}${loc} is a new All-time PB. Update All-time PB with this season catch? (New: ${newPts} pts, Old: ${oldPts} pts)${unit}`;

  function cleanup(){
    backdrop.classList.remove('show');
    backdrop.setAttribute('aria-hidden','true');
    yes.onclick = null;
    no.onclick = null;
  }

  backdrop.classList.add('show');
  backdrop.setAttribute('aria-hidden','false');

  yes.onclick = () => {
    try{
      if(always.checked) localStorage.setItem('fm_auto_update_pb_from_season', "true");
    }catch(_){}
    cleanup();
    opts && opts.onYes && opts.onYes();
  };
  no.onclick = () => {
    cleanup();
    opts && opts.onNo && opts.onNo();
  };
}

function isSeasonMode(){
  return document.body.classList.contains('season-active');
}

function getStoredWeight(loc, fishName){
  const store = isSeasonMode() ? seasonRecordsByLocation : recordsByLocation;
  return store?.[loc]?.[fishName] ?? "";
}

function setCareerStoredWeight(loc, fishName, value){
  if(!recordsByLocation[loc]) recordsByLocation[loc] = {};
  if(value === "" || value == null){
    delete recordsByLocation[loc][fishName];
  }else{
    recordsByLocation[loc][fishName] = value;
  }
  saveRecordsToStorage();
}

function setStoredWeight(loc, fishName, value){
  const store = isSeasonMode() ? seasonRecordsByLocation : recordsByLocation;
  if(!store[loc]) store[loc] = {};
  if(value === "" || value == null){
    delete store[loc][fishName];
  }else{
    store[loc][fishName] = value;
  }
  if(isSeasonMode()) saveSeasonRecords(seasonRecordsByLocation || {}); else saveRecords(recordsByLocation || {});
  try{ updateDashboard();
    try{ updateSeasonProgress(); }catch(_){}
    try{ updateSeasonUncaughtCount(); }catch(_){} }catch(_e){}
}

function recomputeFromDOM(){
  document.querySelectorAll("tbody tr").forEach((row)=>{
    const idx = Number(row.dataset.idx);
    const fish = currentFish[idx];
    const weightInp = row.querySelector("input.weight-input");
    const pointsInp = row.querySelector("input.points-input");
    const pointsCell = row.querySelector(".points");
    const starsCell = row.querySelector(".stars");

    // Reset
    if(weightInp) weightInp.className = "weight-input" + (weightInp.disabled ? " disabled" : "");
    if(pointsInp) pointsInp.className = "points-input";
    if(pointsCell && !pointsInp) pointsCell.textContent = "";
    if(starsCell) starsCell.textContent = "";

    // --- Season mode (points entry) ---
    if(pointsInp){
      const rawPts = String(pointsInp.value ?? '').trim();
      if(rawPts === "" || rawPts === "0"){
        if(weightInp) weightInp.value = "";
        return;
      }
      let pts = _parsePointsInt(rawPts);
      if(Number.isNaN(pts)){
        pointsInp.classList.add("invalid");
        pointsInp.classList.remove("outofseason");
        if(weightInp) weightInp.value = "";
        return;
      }

      const mm = _minMaxPointsForFish(fish);
      // Season mode: apply Out-of-Season caps (Common/Rare/Epic only). Legendary always in-season.
      if(isSeasonMode && isSeasonMode()){
        const inSeason = isFishInSeason(fish?.name || fish?.fish || fish, new Date());
        const cap = oosPointCapForFish(fish);
        if(!inSeason && cap != null && pts > cap){
          // Clamp to the max allowed points for out-of-season fish
          pointsInp.classList.add("outofseason");
          pointsInp.value = String(cap);
          pts = cap;
        }else{
          pointsInp.classList.remove("outofseason");
        }
      }
      if(pts < mm.minP || pts > mm.maxP){
        pointsInp.classList.add("outofrange");
        pointsInp.classList.remove("outofseason");
        if(weightInp) weightInp.value = "";
        return;
      }

      const wStr = storedWeightStringForPoints(pts, fish);
      if(weightInp) weightInp.value = _displayDerivedWeight2(wStr);
      // When user enters integer points directly, the underlying raw points that round to `pts`
      // live in [pts-0.5, pts+0.5). Use the lower edge to avoid accidentally promoting a star tier.
      const stars = calculateStars(fish.category, pts - 0.5);
      if(starsCell) starsCell.textContent = "⭐".repeat(stars);
      // If this row also has a points cell (non-input), keep it consistent
      if(pointsCell && !pointsInp) pointsCell.textContent = String(pts);
      return;
    }

    // Validation
    const inp = weightInp || row.querySelector("input");
    if(!inp) return;
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

    const pts = calculatePoints(w, fish); // integer (display)
    const rawPts = calculatePointsRaw(w, fish); // float (star tiers)
    const stars = calculateStars(fish.category, rawPts);

    if(pointsCell){
      pointsCell.textContent = pts;
      // Tooltip: if we are exactly on a boundary due to rounding-up, show raw points
      try{
        const strictStars = calculateStarsStrict(fish.category, pts);
        if(strictStars !== stars){
          pointsCell.title = `Raw: ${Number(rawPts).toFixed(2)}`;
        }else{
          pointsCell.title = '';
        }
      }catch(_){ }
    }
    if(starsCell) starsCell.textContent = "⭐".repeat(stars);

  });

  updateDashboard();
	  try{ updateSeasonProgress(); }catch(_){}
	  try{ updateSeasonUncaughtCount(); }catch(_){}
	  try{ if(typeof renderCareerTargets === 'function') renderCareerTargets(); }catch(_){}
}

function renderTable(){
 tbody.innerHTML="";
 showError("");

 const seasonMode = document.body.classList.contains('season-active');

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

  let rangeTip = `Min: ${fmtWeightDisplay(f.min)} ${(weightUnit === 'kgs') ? 'kgs' : 'lbs'}  •  Max: ${fmtWeightDisplay(f.max)} ${(weightUnit === 'kgs') ? 'kgs' : 'lbs'}`;
      if(seasonMode){ rangeTip = pointsRangeTipForFish(f) || rangeTip; }
  const inSeasonNow = (!seasonMode) ? true : isFishInSeason(f.name, new Date());
  if(seasonMode && !inSeasonNow){ r.classList.add('oos-row'); }
  const oosBadge = (seasonMode && !inSeasonNow) ? ' <span class="oos-badge" title="Out of season" aria-label="Out of season"></span>' : '';
  const fishLabel = `<span class="fish-name${(seasonMode && !inSeasonNow) ? ' oos' : ''}" title="${rangeTip}" data-tip="${rangeTip}">${toTitleCase(f.name)}</span>${oosBadge}`;
  // Always show a Location column. In single-location view, lock it to the selected location.
  const locText = isAll ? f.location : selected;
  r.innerHTML=`<td class="location-cell">${locText}</td><td class="category-cell">${f.category}</td><td>${fishLabel}</td>`;

  const weightTd = document.createElement("td");
  const pointsTd = document.createElement("td");
  const starsTd = document.createElement("td");
  pointsTd.classList.add("points");
  starsTd.classList.add("stars");

  let suppress = false;

  // Inline error message (shown next to the editable field)
  const inlineErr = document.createElement("div");
  inlineErr.classList.add("inline-error");

  function setInlineError(targetInput, msg){
    if(!msg){
      inlineErr.textContent = "";
      inlineErr.classList.remove("show");
      if(targetInput) targetInput.classList.remove("outofrange");
      return;
    }
    inlineErr.textContent = msg;
    inlineErr.classList.add("show");
    if(targetInput) targetInput.classList.add("outofrange");
  }

  if(seasonMode){
    // --- Season mode: user enters points, we derive weight based on selected unit ---
    const wInp = document.createElement("input");
    wInp.type = "number";
    wInp.step = "0.01";
    wInp.min = "0";
    wInp.disabled = true;
    wInp.classList.add("weight-input");
    wInp.classList.add("disabled");
    wInp.setAttribute("inputmode", "decimal");

    const pInp = document.createElement("input");
    pInp.type = "number";
    pInp.step = "1";
    pInp.min = "0";
    pInp.classList.add("points-input");
    pInp.setAttribute("inputmode", "numeric");

    // Prevent scientific notation etc.
    pInp.addEventListener("keydown", (e)=>{
      if(["e","E","+","-"] .includes(e.key)) e.preventDefault();
    });

    // Prefill from stored weight (if any)
    const storedW = getStoredWeight(f.location, f.name);
    wInp.value = _displayDerivedWeight2(storedW);
    if(String(storedW||'').trim() !== ""){
      const lbs = parseUserWeightToLbs(String(storedW));
      if(!Number.isNaN(lbs)){
        const pts = calculatePoints(lbs, f);
        pInp.value = pts ? String(pts) : "";
      }
    }

    pInp.addEventListener('focus', ()=>{ r.classList.add('editing'); });

    function commitPoints(){
      if(suppress) return;
      const raw = String(pInp.value ?? '').trim();

      if(raw === "" || raw === "0"){
        suppress = true;
        pInp.value = "";
        wInp.value = "";
        suppress = false;
        setStoredWeight(f.location, f.name, "");
        setInlineError(pInp, "");
        recomputeFromDOM();
        return;
      }

      const pts = _parsePointsInt(raw);
      if(Number.isNaN(pts)){
        setInlineError(pInp, "Enter whole-number points");
        suppress = true;
        pInp.value = "";
        wInp.value = "";
        suppress = false;
        setStoredWeight(f.location, f.name, "");
        recomputeFromDOM();
        return;
      }

      const mm = _minMaxPointsForFish(f);
      if(pts < mm.minP || pts > mm.maxP){
        setInlineError(pInp, `Must be between ${mm.minP} and ${mm.maxP} points`);
        suppress = true;
        pInp.value = "";
        wInp.value = "";
        suppress = false;
        setStoredWeight(f.location, f.name, "");
        recomputeFromDOM();
        return;
      }

      setInlineError(pInp, "");
      const wStr = storedWeightStringForPoints(pts, f);
      suppress = true;
      wInp.value = _displayDerivedWeight2(wStr);
      suppress = false;
      setStoredWeight(f.location, f.name, wStr);

      // If this season entry beats the career record, optionally update career too (with confirmation)
      try{
        const careerRaw = (recordsByLocation?.[f.location]?.[f.name] ?? "");
        const careerLbs = parseUserWeightToLbs(String(careerRaw||""));
        const careerPts = (!Number.isNaN(careerLbs) && careerLbs>0) ? calculatePoints(careerLbs, f) : 0;
        if(pts > (careerPts||0)) {
          confirmCareerPbUpdate({
            fishName: toTitleCase(f.name),
            location: f.location,
            oldPts: careerPts||0,
            newPts: pts,
            unit: (typeof weightUnit !== 'undefined') ? weightUnit : "",
            onYes: () => {
              // Store in the currently selected unit so Career matches the unit label
              setCareerStoredWeight(f.location, f.name, wStr);
              inlineErr.textContent = "All-time PB! Updated.";
              inlineErr.classList.add("show","success");
              setTimeout(()=>{ inlineErr.classList.remove("success"); if(inlineErr.textContent === "All-time PB! Updated."){ inlineErr.textContent=""; inlineErr.classList.remove("show"); } }, 1800);
            },
            onNo: () => {
              inlineErr.textContent = "All-time PB available (not updated).";
              inlineErr.classList.add("show");
              setTimeout(()=>{ if(inlineErr.textContent === "All-time PB available (not updated)."){ inlineErr.textContent=""; inlineErr.classList.remove("show"); } }, 1800);
            }
          });
        }
      }catch(_e){}


      recomputeFromDOM();
    }

    pInp.addEventListener("blur", commitPoints);
    pInp.addEventListener("input", ()=>{ if(!suppress) recomputeFromDOM(); });
    pInp.addEventListener("keydown", (e)=>{
      if(e.key === "Enter"){ e.preventDefault(); pInp.blur(); }
    });
    pInp.addEventListener('blur', ()=>{ r.classList.remove('editing'); });

    weightTd.classList.add("weight-plain");
    pointsTd.classList.add("input-cell");
    weightTd.appendChild(wInp);
    pointsTd.appendChild(pInp);
    pointsTd.appendChild(inlineErr);

    r.append(weightTd, pointsTd, starsTd);
  }else{
    // --- Career mode: user enters weight ---
    const i=document.createElement("input");
    i.type = "number";
    i.step = "0.01";
    i.min = "0";
    i.classList.add("weight-input");
    i.setAttribute("inputmode", "decimal");

    i.addEventListener("keydown", (e)=>{
      if(["e","E","+","-"] .includes(e.key)) e.preventDefault();
    });

    function clampTwoDecimals(v){
      const s = String(v ?? "");
      if(s === "") return "";
      if(!s.includes(".")) return s;
      const parts = s.split(".");
      const intPart = parts[0] ?? "";
      const decPart = (parts[1] ?? "").slice(0, 2);
      if(parts.length === 2 && parts[1] === "") return `${intPart}.`;
      return decPart === "" ? intPart : `${intPart}.${decPart}`;
    }

    i.value = getStoredWeight(f.location, f.name);
    i.addEventListener('focus', ()=>{ r.classList.add('editing'); });

    function commitWeight(){
      if(suppress) return;
      const raw = clampTwoDecimals(String(i.value ?? "").trim());
      if(i.value !== raw){
        suppress = true;
        i.value = raw;
        suppress = false;
      }
      const num = parseFloat(raw);
      if(raw === "" || raw === "0" || (!Number.isNaN(num) && num === 0)){
        suppress = true;
        i.value = "";
        suppress = false;
        setStoredWeight(f.location, f.name, "");
        setInlineError(i, "");
        recomputeFromDOM();
        return;
      }
      if(Number.isNaN(num)){
        recomputeFromDOM();
        return;
      }
      let enteredLbs = parseUserWeightToLbs(raw);
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
        setInlineError(i, `Must be between ${minDisp} and ${maxDisp} ${unitLabel}`);
        suppress = true;
        i.value = "";
        suppress = false;
        setStoredWeight(f.location, f.name, "");
        recomputeFromDOM();
        return;
      }

      setInlineError(i, "");
      setStoredWeight(f.location, f.name, raw);
      recomputeFromDOM();
    }

    i.addEventListener("blur", commitWeight);
    i.addEventListener('blur', ()=>{ r.classList.remove('editing'); });
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
      if(e.key === "Enter"){ e.preventDefault(); i.blur(); }
    });

    const ic = document.createElement("td");
    ic.classList.add("input-cell");
    ic.appendChild(i);
    ic.appendChild(inlineErr);
    r.append(ic, pointsTd, starsTd);
  }

  // Mobile responsive table: add header labels to each cell for stacked layout
  const headers = Array.from(theadRow.querySelectorAll("th")).map(th=>th.textContent.trim());
  Array.from(r.children).forEach((td, i2)=>{
    if(td && headers[i2]) td.setAttribute("data-label", headers[i2]);
  });

  tbody.appendChild(r);
      // tooltips (season mode)
      try{ attachFishTooltips(r); }catch(_){ }
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
      plugins: { ...baseOpts.plugins, legend: { position: 'right', labels: { ...baseOpts.plugins.legend.labels, boxWidth: 8, boxHeight: 8, padding: 6 } } },
      // Star Catches should be a regular (grouped) column chart, not stacked.
      scales: { ...baseOpts.scales, x: { ...baseOpts.scales.x, stacked: false }, y: { ...baseOpts.scales.y, stacked: false } }
    }
  });

  pointsByMapChart = safeChart("pointsByMapChart", {
    type: "bar",
    data: { labels: [], datasets: [{ label: "Points", data: [], backgroundColor: rare, barPercentage: 0.5, categoryPercentage: 0.5 }] },
    options: {
      ...baseOpts,
      plugins: { 
        ...baseOpts.plugins, 
        legend: { display: false },
        tooltip: {
          ...baseOpts.plugins.tooltip,
          callbacks: {
            ...baseOpts.plugins.tooltip.callbacks,
            title: (items) => tooltipYAxisLabel(items),
            label: dumbbellTooltipLabel
          }
        }
      },
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
        return tooltipYAxisLabel(items);
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
      plugins: { 
        ...baseOpts.plugins, 
        legend: { display: false },
        tooltip: {
          ...baseOpts.plugins.tooltip,
          callbacks: {
            ...baseOpts.plugins.tooltip.callbacks,
            title: (items) => tooltipYAxisLabel(items),
            label: dumbbellTooltipLabel
          }
        }
      },
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
      plugins: { 
        ...baseOpts.plugins, 
        legend: { display: false },
        tooltip: {
          ...baseOpts.plugins.tooltip,
          callbacks: {
            ...baseOpts.plugins.tooltip.callbacks,
            title: (items) => tooltipYAxisLabel(items),
            label: dumbbellTooltipLabel
          }
        }
      },
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
      plugins: { 
        ...baseOpts.plugins, 
        legend: { display: false },
        tooltip: {
          ...baseOpts.plugins.tooltip,
          callbacks: {
            ...baseOpts.plugins.tooltip.callbacks,
            title: (items) => tooltipYAxisLabel(items),
            label: dumbbellTooltipLabel
          }
        }
      },
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
            padding: 6,autoSkip:false}}}, barThickness: 12, categoryPercentage: 0.6,
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
            padding: 6, autoSkip:false, callback: function(value){ const l = this.getLabelForValue(value); return String(l).split(" "); } } } }, barThickness: 12, categoryPercentage: 0.6,
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
       barThickness: 12, categoryPercentage: 0.6,
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
      barThickness: 12,
      categoryPercentage: 0.6,
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
    options: {scales: { 
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
       barThickness: 12, categoryPercentage: 0.6,
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
      const pts = calculatePoints(w, fish); // integer (display)
      const rawPts = calculatePointsRaw(w, fish); // float (star tiers)
      const stars = calculateStars(fish.category, rawPts);
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
      const pts = calculatePoints(w, fish); // integer (display)
      const rawPts = calculatePointsRaw(w, fish); // float (star tiers)
      const stars = calculateStars(fish.category, rawPts);
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
  const base = (isSeasonMode && isSeasonMode()) ? (seasonRecordsByLocation || {}) : (recordsByLocation || {});
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


function updateSeasonUncaughtCount(){
  try{
    if(!(typeof isSeasonMode === 'function' && isSeasonMode())) return;
    const el = document.getElementById('seasonUncaughtCount');
    if(!el) return;

    const total = Object.values(LOCATIONS || {}).reduce((sum, arr)=>sum + (arr ? arr.length : 0), 0) || 200;

    // Count caught fish entries this season (by location + fish)
    const caught = new Set();
    for(const loc of Object.keys(seasonRecordsByLocation || {})){
      const recs = seasonRecordsByLocation[loc] || {};
      const fishLookup = new Map((LOCATIONS?.[loc] || []).map(f=>[String(f.name).toLowerCase(), f]));
      for(const fishName of Object.keys(recs)){
        const f = fishLookup.get(String(fishName).toLowerCase());
        if(!f) continue;
        const w = parseUserWeightToLbs(recs[fishName]);
        if(!Number.isFinite(w) || w < f.min || w > f.max) continue;
        caught.add(`${loc}|${String(fishName).toLowerCase()}`);
      }
    }

    const uncaught = Math.max(0, total - caught.size);
    el.textContent = `Uncaught fish: ${uncaught}/${total}`;
  }catch(_){}
}


function updateSeasonProgress(){
  try{
    if(!(typeof isSeasonMode === 'function' && isSeasonMode())) return;
    const label = document.getElementById('seasonProgressLabel');
    const fill = document.getElementById('seasonProgressFill');
    const wrap = document.getElementById('seasonProgress');
    if(!label || !fill || !wrap) return;

    const total = Object.values(LOCATIONS || {}).reduce((sum, arr)=>sum + (arr ? arr.length : 0), 0) || 200;

    // Count caught fish entries this season (by location + fish)
    const caught = new Set();
    for(const loc of Object.keys(seasonRecordsByLocation || {})){
      const recs = seasonRecordsByLocation[loc] || {};
      const fishLookup = new Map((LOCATIONS?.[loc] || []).map(f=>[String(f.name).toLowerCase(), f]));
      for(const fishName of Object.keys(recs)){
        const f = fishLookup.get(String(fishName).toLowerCase());
        if(!f) continue;
        const w = parseUserWeightToLbs(recs[fishName]);
        if(!Number.isFinite(w) || w < f.min || w > f.max) continue;
        caught.add(`${loc}|${String(fishName).toLowerCase()}`);
      }
    }

    const caughtCount = Math.min(total, caught.size);
    const pct = total > 0 ? (caughtCount / total) * 100 : 0;

    label.textContent = `${caughtCount}/${total}`;
    fill.style.width = `${pct}%`;
  }catch(_){}
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
    const seasonNow = (typeof isSeasonMode === 'function' && isSeasonMode());
    const cats = ['Common','Rare','Epic','Legendary'];
    const mins = {}, maxs = {};
    const minFishNames = {}, maxFishNames = {};
    cats.forEach(c=>{ mins[c]=Infinity; maxs[c]=-Infinity; minFishNames[c]=''; maxFishNames[c]=''; });

    getLocationList().forEach(loc=>{
      (LOCATIONS[loc]||[]).forEach(f=>{
        if(seasonNow && f.category !== 'Legendary' && !isFishInSeason(f.name, new Date())) return;
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
          if(seasonNow && fish.category !== 'Legendary' && !isFishInSeason(fish.name, new Date())) continue;
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
  
function getSeasonImprovementTargets(allFish, category, limit=10){
  try{
    const cat = String(category||'').trim();
    const list = (allFish||[]).filter(f=>{
      if(!f) return false;
      if(String(f.category) !== cat) return false;
      // exclude OOS in season mode
      if(!(isFishInSeason(f.name, new Date()))) return false;
      const pts = Number(f.points);
      if(!Number.isFinite(pts)) return false;
      if(pts <= 0) return false; // ignore blanks/zero entries
      return true;
    }).map(f=>({name: f.name, value: Number(f.points)}));
    list.sort((a,b)=> a.value - b.value);
    return list.slice(0, Math.max(0, limit|0));
  }catch(_){
    return [];
  }
}

// The Elite Epics (Career) / Common – Improvement Targets (Season)
  try{
    const seasonNow = (typeof isSeasonMode === 'function' && isSeasonMode());
    if(seasonNow){
      const list = getSeasonImprovementTargets(allFish, 'Common', 10);
      if(eliteEpicsChart){
        // Season mode: ensure Chart.js does not auto-skip category labels.
        try{
          const y = eliteEpicsChart.options?.scales?.y;
          if(y && y.ticks){
            y.ticks.autoSkip = false;
            y.ticks.maxTicksLimit = 1000;
          }
        }catch(_){ }
        eliteEpicsChart.data.labels = list.map(f => __wrapWordsFearsome(toTitleCase(f.name), 10));
        eliteEpicsChart.data.datasets[0].data = list.map(f=>f.value);
        safeUpdate(eliteEpicsChart);
      }
    }else{
      const eliteNames = ['goldfish','bull shark','king salmon','tiger shark','bull trout','scottish salmon'];
      const eliteMap = new Map(allFish.map(f=>[f.name.toLowerCase(), {points:f.points, stars:f.stars}]));
      const eliteList = eliteNames.map(n=>{
        const rec = eliteMap.get(n);
        const val = rec ? rec.points : 0;
        return { name: n, value: val };
      });
      if(eliteEpicsChart){
        // Career mode: restore default auto-skip behavior.
        try{
          const y = eliteEpicsChart.options?.scales?.y;
          if(y && y.ticks){
            y.ticks.autoSkip = true;
          }
        }catch(_){ }
        eliteEpicsChart.data.labels = eliteList.map(f => __wrapWordsFearsome(toTitleCase(f.name), 10));
        eliteEpicsChart.data.datasets[0].data = eliteList.map(f=>f.value);
        safeUpdate(eliteEpicsChart);
      }
    }
  }catch(e){
    console.error('The Elite Epics chart update failed', e);
  }
// The Short-Lived Specials (Career) / Rare – Improvement Targets (Season)
  try{
    const seasonNow = (typeof isSeasonMode === 'function' && isSeasonMode());
    if(seasonNow){
      const list = getSeasonImprovementTargets(allFish, 'Rare', 10);
      if(shortLivedEpicsChart){
        // Season mode: ensure Chart.js does not auto-skip category labels.
        try{
          const y = shortLivedEpicsChart.options?.scales?.y;
          if(y && y.ticks){
            y.ticks.autoSkip = false;
            y.ticks.maxTicksLimit = 1000;
          }
        }catch(_){ }
        shortLivedEpicsChart.data.labels = list.map(f => __wrapWordsFearsome(toTitleCase(f.name), 10));
        shortLivedEpicsChart.data.datasets[0].data = list.map(f=>f.value);
        safeUpdate(shortLivedEpicsChart);
      }
    }else{
      const shortNames = ['black marlin','bull shark','queensland grouper','european eel','european grayling'];
      const shortMap = new Map(allFish.map(f=>[f.name.toLowerCase(), {points:f.points, stars:f.stars}]));
      const shortList = shortNames.map(n=>{
        const rec = shortMap.get(n);
        const val = rec ? rec.points : 0;
        return { name: n, value: val };
      });
      if(shortLivedEpicsChart){
        // Career mode: restore default auto-skip behavior.
        try{
          const y = shortLivedEpicsChart.options?.scales?.y;
          if(y && y.ticks){
            y.ticks.autoSkip = true;
          }
        }catch(_){ }
        shortLivedEpicsChart.data.labels = shortList.map(f => __wrapWordsFearsome(toTitleCase(f.name), 10));
        shortLivedEpicsChart.data.datasets[0].data = shortList.map(f=>f.value);
        safeUpdate(shortLivedEpicsChart);
      }
    }
  }catch(e){
    console.error('The Short-Lived Specials chart update failed', e);
  }
// The Invisibles (Career) / Epic – Improvement Targets (Season)
  try{
    const seasonNow = (typeof isSeasonMode === 'function' && isSeasonMode());
    if(seasonNow){
      const list = getSeasonImprovementTargets(allFish, 'Epic', 10);
      if(invisiblesChart){
        invisiblesChart.data.labels = list.map(f => __wrapWordsFearsome(toTitleCase(f.name), 10));
        invisiblesChart.data.datasets[0].data = list.map(f=>f.value);
        safeUpdate(invisiblesChart);
      }
    }else{
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
    }
  }catch(e){
    console.error('The Invisibles chart update failed', e);
  }
// Personal Bests (leaderboard tiles)
  try{ renderPersonalBests(allFish); }catch(e){ console.error('Personal bests render failed', e); }

}




function setupSeasonMode(){
  const careerBtn = document.getElementById('modeCareerBtn');
  const seasonBtn = document.getElementById('modeSeasonBtn');
  const banner = document.getElementById('seasonBanner');
  const titleEl = document.getElementById('seasonBannerTitle');

  if(!careerBtn || !seasonBtn) return;

  const fmt = new Intl.DateTimeFormat('en-US', { month: "long", year: "numeric" });
  function currentSeasonLabel(){
    try{ return fmt.format(new Date()); }catch(_){ return "This Month"; }
  }

  function applyMode(mode){
    const m = (mode === "season") ? "season" : "career";
    localStorage.setItem('fm_mode', m);

    careerBtn.classList.toggle('active', m === "career");
    seasonBtn.classList.toggle('active', m === "season");
    document.body.classList.toggle('season-active', m === "season");
    try{ updateSeasonProgress(); }catch(_){}
    try{ updateSeasonProgress(); }catch(_){}
    try{ updateSeasonUncaughtCount(); }catch(_){}

    // Initialize first Season when user enters Season mode for the first time
    try{
      if(m === "season"){
        const cur = localStorage.getItem('fm_active_season_id');
        if(!cur){
          _startNewSeasonNow();
        }
      }
    }catch(_){}


    // Season-mode chart title swaps
    try{
      const eliteT = document.getElementById('eliteEpicsTitle');
      const shortT = document.getElementById('shortLivedTitle');
      const invT = document.getElementById('invisiblesTitle');
      if(m === "season"){
        if(eliteT) eliteT.innerHTML = 'Commons – Key Targets<span class="panel-subtitle">Lowest-scoring in-season commons</span>';
        if(shortT) shortT.innerHTML = 'Rares – Key Targets<span class="panel-subtitle">Lowest-scoring in-season rares</span>';
        if(invT) invT.innerHTML = 'Epics – Key Targets<span class="panel-subtitle">Lowest-scoring in-season epics</span>';
      }else{
        if(eliteT) eliteT.textContent = "The Elite Epics";
        if(shortT) shortT.textContent = "The Short-Lived Specials";
        if(invT) invT.textContent = "The Invisibles";
      }
    }catch(_){}


    if(banner){
      banner.classList.toggle('hidden', m !== "season");
      if(m === "season" && titleEl){
        titleEl.textContent = `Season Active — ${currentSeasonLabel()}`;
      }
    }

    // Rebuild the Log Records table so inputs switch between weight-entry and points-entry.
    try{ if(typeof renderTable === 'function') renderTable(); }catch(_){ }
    try{ updateDashboard();
    try{ updateSeasonProgress(); }catch(_){}
    try{ updateSeasonUncaughtCount(); }catch(_){} }catch(_){ }
  }

  careerBtn.addEventListener('click', ()=>applyMode('career'));
  seasonBtn.addEventListener('click', ()=>applyMode('season'));

  // Banner actions
  const archBtn = document.getElementById('seasonArchiveBtn');
  if(archBtn) archBtn.addEventListener('click', ()=>{ try{ archiveSeasonSnapshot(); }catch(_){ } });
applyMode(localStorage.getItem('fm_mode') || "career");
}



function getCurrentSeasonLabel(){
  try{
    const fmt = new Intl.DateTimeFormat('en-US', { month: "long", year: "numeric" });
    return fmt.format(new Date());
  }catch(_){ return "This Month"; }
}


function pointsRangeTipForFish(f){
  try{
    let catRaw = (f && f.category) ? String(f.category) : '';
    catRaw = catRaw.trim().toLowerCase();
    const cat = catRaw ? (catRaw.charAt(0).toUpperCase() + catRaw.slice(1)) : '';
    if(!cat) return '';
    // Explicit CotD point limits
    const IS = {
      Common: { min:300, max:600 },
      Rare: { min:400, max:800 },
      Epic: { min:500, max:1000 },
      Legendary: { min:5000, max:10000 }
    };
    const OOS = {
      Common: { min:300, max:357 },
      Rare: { min:400, max:476 },
      Epic: { min:500, max:595 }
    };
    if(cat === 'Legendary'){
      const lim = IS.Legendary;
      return `Min: ${lim.min} pts | Max: ${lim.max} pts`;
    }
    const inSeason = isFishInSeason((f && f.name) ? f.name : '', new Date());
    const lim = inSeason ? IS[cat] : (OOS[cat] || IS[cat]);
    if(!lim) return '';
    return inSeason ? `Min: ${lim.min} pts | Max: ${lim.max} pts`
                    : `Min: ${lim.min} pts | Cap: ${lim.max} pts`;
  }catch(_){ return ''; }
}

function ensureFmTooltip(){
  let tip = document.getElementById('fmTooltip');
  if(tip) return tip;
  tip = document.createElement('div');
  tip.id = 'fmTooltip';
  tip.className = 'fm-tooltip';
  tip.style.display = 'none';
  document.body.appendChild(tip);
  return tip;
}

function showFmTooltip(text, anchorEl){
  if(!text) return;
  const tip = ensureFmTooltip();
  tip.textContent = text;
  tip.style.display = 'block';
  const r = anchorEl.getBoundingClientRect();
  const pad = 10;
  // position below by default, clamp to viewport
  let left = r.left + window.scrollX;
  let top = r.bottom + window.scrollY + 10;
  // if too low, place above
  const tipRect = tip.getBoundingClientRect();
  if(top + tipRect.height > window.scrollY + window.innerHeight - 8){
    top = r.top + window.scrollY - tipRect.height - 10;
  }
  if(left + tipRect.width > window.scrollX + window.innerWidth - 8){
    left = window.scrollX + window.innerWidth - tipRect.width - 8;
  }
  if(left < window.scrollX + 8) left = window.scrollX + 8;
  tip.style.left = left + 'px';
  tip.style.top = top + 'px';
}

function hideFmTooltip(){
  const tip = document.getElementById('fmTooltip');
  if(tip) tip.style.display = 'none';
}

function attachFishTooltips(rootEl){
  try{
    if(!(typeof isSeasonMode === 'function' && isSeasonMode())) return;
    const spans = (rootEl || document).querySelectorAll('.fish-name');
    spans.forEach(sp => {
      // avoid double-binding
      if(sp.dataset.fmTipBound === '1') return;
      sp.dataset.fmTipBound = '1';
      sp.addEventListener('mouseenter', () => {
        const txt = sp.getAttribute('data-tip') || sp.getAttribute('title') || '';
        showFmTooltip(txt, sp);
      });
      sp.addEventListener('mouseleave', hideFmTooltip);
    });
  }catch(_){}
}

function getCurrentSeasonId(){
  try{
    const active = localStorage.getItem('fm_active_season_id');
    if(active) return active;
  }catch(_){}
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2,'0');
  return `${y}-${m}`;
}


function _startNewSeasonNow(){
  try{
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2,'0');
    const id = `${y}-${m}`;
    localStorage.setItem('fm_active_season_id', id);
    localStorage.setItem('fm_season_month', id);
  }catch(_){}
}

async function autoRollSeasonMonthly(){
  // Calendar-locked seasons: exactly one season per month (YYYY-MM)
  const d = new Date();
  const y = d.getFullYear();
  const mth = String(d.getMonth() + 1).padStart(2,'0');
  const currentMonth = `${y}-${mth}`;

  let storedMonth = null;
  try{ storedMonth = localStorage.getItem('fm_season_month'); }catch(_){ storedMonth = null; }
  if(!storedMonth){
    try{ localStorage.setItem('fm_season_month', currentMonth); }catch(_){}
    try{ localStorage.setItem('fm_active_season_id', currentMonth); }catch(_){}
    return;
  }

  // If month changed, auto-archive the prior month (if there is any season data), then reset season records.
  if(storedMonth !== currentMonth){
    try{
      const hadData = _countBackupRecords(seasonRecordsByLocation || {}) > 0;
      // Temporarily set active season id to storedMonth so snapshot is labeled correctly
      try{ localStorage.setItem('fm_active_season_id', storedMonth); }catch(_){}
      if(hadData){
        try{ archiveSeasonSnapshot(); }catch(_){}
      }
    }catch(_){}

    // Reset season records for the new month
    seasonRecordsByLocation = {};
    try{ await saveSeasonRecords(seasonRecordsByLocation || {}); }catch(_){}
    try{ localStorage.setItem('fishmetrics_season_records_v1', JSON.stringify(seasonRecordsByLocation || {})); }catch(_){}

    // Set new month markers
    try{ localStorage.setItem('fm_season_month', currentMonth); }catch(_){}
    try{ localStorage.setItem('fm_active_season_id', currentMonth); }catch(_){}

    // Refresh UI if needed
    try{ if(typeof renderTable === 'function') renderTable(); }catch(_){}
    try{ updateDashboard(); }catch(_){}
    try{ updateSeasonProgress(); }catch(_){}
    try{ updateSeasonUncaughtCount(); }catch(_){}
  }else{
    // Ensure active season id matches current month
    try{ localStorage.setItem('fm_active_season_id', currentMonth); }catch(_){}
  }
}



function _downloadJson(filename, obj){
  const blob = new Blob([JSON.stringify(obj, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>{ try{ URL.revokeObjectURL(url); }catch(_){ } }, 0);
}

function _computeSeasonKpis(seasonRecords){
  // Season-only KPIs (lightweight, stable)
  const out = {
    totalSeasonPoints: 0,
    counts: { Common:0, Rare:0, Epic:0, Legendary:0 },
    bestByCategory: { Common: null, Rare: null, Epic: null, Legendary: null }
  };
  try{
    for(const loc of Object.keys(seasonRecords || {})){
      const arr = seasonRecords[loc] || [];
      for(const r of arr){
        const pts = Number(r && r.points);
        if(!Number.isFinite(pts) || pts<=0) continue;
        out.totalSeasonPoints += pts;
        const cat = (r && r.category) ? String(r.category) : '';
        if(out.counts[cat] !== undefined) out.counts[cat]++;
        // best by category
        if(cat && out.bestByCategory[cat] !== undefined){
          const prev = out.bestByCategory[cat];
          if(!prev || pts > prev.points){
            out.bestByCategory[cat] = { name: r.name, points: pts, location: loc };
          }
        }
      }
    }
  }catch(_){}
  return out;
}

function _buildSeasonArchiveSnapshot(){
  const now = new Date();
  const seasonId = getCurrentSeasonId(); // YYYY-MM (calendar-locked)
  const month = (localStorage.getItem('fm_season_month') || seasonId);
  // Ensure startedAt is never null: first day of the month (local)
  const startedAt = `${month}-01`;

  // Build fishPoints ONLY for fish with a season entry (no 0 / null placeholders)
  const fishPoints = [];
  const seasonRecordsFiltered = {};
  // Also store season entries with BOTH weight + points (for archive review)
  const seasonEntriesFiltered = {};
  const counts = { Common:0, Rare:0, Epic:0, Legendary:0 };
  let totalSeasonPoints = 0;
  const bestByCategory = { Common:null, Rare:null, Epic:null, Legendary:null };
  const lowestByCategory = { Common:null, Rare:null, Epic:null, Legendary:null };

  try{
    for(const loc of Object.keys(seasonRecordsByLocation || {})){
      const recs = seasonRecordsByLocation[loc] || {};
      const fishLookup = new Map((LOCATIONS?.[loc] || []).map(f=>[String(f.name).toLowerCase(), f]));
      for(const fishName of Object.keys(recs)){
        const rawStr = recs[fishName];
        if(rawStr === "" || rawStr == null) continue;

        const f = fishLookup.get(String(fishName).toLowerCase());
        if(!f) continue;

        const w = parseUserWeightToLbs(rawStr);
        if(!Number.isFinite(w) || w < f.min || w > f.max) continue;

        // Compute points/stars
        const pts = calculatePoints(w, f); // integer (display)
        const rawPts = (typeof calculatePointsRaw === 'function') ? calculatePointsRaw(w, f) : pts;
        const stars = calculateStars(f.category, rawPts);

        fishPoints.push({
          name: f.name,
          location: loc,
          category: f.category,
          weight: String(rawStr),
          points: pts,
          rawPoints: Number(rawPts),
          stars
        });

        // filtered records
        if(!seasonRecordsFiltered[loc]) seasonRecordsFiltered[loc] = {};
        seasonRecordsFiltered[loc][f.name] = String(rawStr);

        // filtered entries (weight + points)
        if(!seasonEntriesFiltered[loc]) seasonEntriesFiltered[loc] = {};
        seasonEntriesFiltered[loc][f.name] = { weight: String(rawStr), points: pts, rawPoints: Number(rawPts), stars };

        // KPIs (only meaningful values; no 0/null placeholders in output later)
        totalSeasonPoints += pts;
        if(counts[f.category] !== undefined) counts[f.category] += 1;
        const prev = bestByCategory[f.category];
        if(!prev || pts > prev.points){
          bestByCategory[f.category] = { name: f.name, points: pts, location: loc };
        }
        const low = lowestByCategory[f.category];
        if(!low || pts < low.points){
          lowestByCategory[f.category] = { name: f.name, points: pts, location: loc };
        }
      }
    }
  }catch(_){}

  // Sort by biggest gap opportunity (points desc) is not needed; keep stable
  try{
    fishPoints.sort((a,b)=> (b.points - a.points) || a.name.localeCompare(b.name));
  }catch(_){}

  // Build KPI object WITHOUT zeros/nulls
  const kpis = {};
  if(Number.isFinite(totalSeasonPoints) && totalSeasonPoints > 0) kpis.totalSeasonPoints = totalSeasonPoints;

  const countsOut = {};
  for(const k of Object.keys(counts)){
    if(counts[k] > 0) countsOut[k] = counts[k];
  }
  if(Object.keys(countsOut).length) kpis.counts = countsOut;

  const bestOut = {};
  for(const k of Object.keys(bestByCategory)){
    if(bestByCategory[k]) bestOut[k] = bestByCategory[k];
  }
  if(Object.keys(bestOut).length) kpis.bestByCategory = bestOut;

  const lowestOut = {};
  for(const k of Object.keys(lowestByCategory)){
    if(lowestByCategory[k]) lowestOut[k] = lowestByCategory[k];
  }
  if(Object.keys(lowestOut).length) kpis.lowestByCategory = lowestOut;

  return {
    schemaVersion: "season-archive-v2",
    exportedAt: now.toISOString(),
    app: { name: "FishMetrics", version: "v1.4.4" },
    season: { seasonId, startedAt, month },
    rules: {
      oosCaps: { Common: 357, Rare: 476, Epic: 595 },
      legendaryAlwaysInSeason: true,
      oosExcludedFromRanges: true,
      oosExcludedFromImprovementTargets: true,
      starTierNoRoundUpPromotion: true
    },
    kpis,
    fishPoints,
    // Back-compat: weights-only map (legacy)
    seasonRecordsByLocation: seasonRecordsFiltered,
    // Preferred: entries with weight + points
    seasonEntriesByLocation: seasonEntriesFiltered
  };
}


async function archiveSeasonSnapshot(){
  try{
    const snapshot = _buildSeasonArchiveSnapshot();
    // persist archive locally (list)
    const listKey = "fishmetrics_season_archives_v1";
    let list = [];
    try{ list = JSON.parse(localStorage.getItem(listKey) || "[]"); }catch(_){ list = []; }
    list.unshift({ seasonId: snapshot.season.seasonId, exportedAt: snapshot.exportedAt });
    try{ localStorage.setItem(listKey, JSON.stringify(list)); }catch(_){}
    try{ localStorage.setItem(`fishmetrics_season_archive_${snapshot.season.seasonId}`, JSON.stringify(snapshot)); }catch(_){}

    const safeId = String(snapshot.season.seasonId).replace(/[^0-9A-Za-z\-_.]/g,'_');
    _downloadJson(`FishMetrics_SeasonArchive_${safeId}.json`, snapshot);
    alert("Season archived ✅");
  }catch(e){
    console.error("Season archive failed", e);
    alert("Could not archive season.");
  }
}


async function initApp(){
  recordsByLocation = await loadRecords();
  seasonRecordsByLocation = await loadSeasonRecords();
  try{ await autoRollSeasonMonthly(); }catch(_){ }
  setupTabs();
  setupShareButton();
  setupHeaderMenu();
  setupWeightUnitToggle();
  setupBackupRestoreUI();
  setupSeasonMode();

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
  try{ updateDashboard();
    try{ updateSeasonProgress(); }catch(_){}
    try{ updateSeasonUncaughtCount(); }catch(_){} }catch(_){}
	  try{ if(typeof renderCareerTargets === 'function') renderCareerTargets(); }catch(_){}
}
initApp();

function setupTabs(){
  const buttons = Array.from(document.querySelectorAll('.top-tabs .tab-btn[data-view]'));
  if(!buttons.length) return;

  const views = Array.from(document.querySelectorAll('.tab-view'));
  function setActive(viewId){
    buttons.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-view') === viewId));
    views.forEach(v => v.classList.toggle('active', v.id === viewId));
    document.body.classList.toggle('no-sidebar', (viewId === 'recordsView' || viewId === 'instructionsView' || viewId === 'fishView' || viewId === 'mapView' || viewId === 'careerTargetsView' || viewId === 'focusView'));
	    try{ if(viewId === 'careerTargetsView' && typeof renderCareerTargets === 'function') renderCareerTargets(); }catch(_){}

    // Chart.js doesn't always recalc size when a canvas goes from display:none -> block.
    setTimeout(()=>{
      try{
        [pointsByRarityChart, starsByRarityChart, starCatchesChart, pointsByMapChart, legendaryChart, fearsomeChart, eliteEpicsChart, shortLivedEpicsChart, invisiblesChart, commonDumbbellChart, rareDumbbellChart, epicDumbbellChart, typeDumbbellChart]
          .forEach(c=>{ try{ c && c.resize(); }catch(_){} });
      }catch(_){}
    }, 50);

    // Re-render charts when entering a view whose canvases may have been hidden.
    if(viewId === 'mapView' || viewId === 'fishView' || viewId === 'dashboardView'){
      try{ updateDashboard();
    try{ updateSeasonProgress(); }catch(_){}
    try{ updateSeasonUncaughtCount(); }catch(_){} }catch(_e){}
    }

    if(viewId === 'recordsView'){
      try{ renderTable(); }catch(_){}
      try{ updateRecordsUnitLabel(); }catch(_){}
    }

    if(viewId === 'focusView'){
      try{ window.refreshFocusTab && window.refreshFocusTab(); }catch(_){ }
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
    try{ updateDashboard();
    try{ updateSeasonProgress(); }catch(_){}
    try{ updateSeasonUncaughtCount(); }catch(_){} }catch(_){ }
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
    try{ updateDashboard();
    try{ updateSeasonProgress(); }catch(_){}
    try{ updateSeasonUncaughtCount(); }catch(_){} }catch(_){ }
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
  const mode = (isSeasonMode && isSeasonMode()) ? 'season' : 'career';
  const recs = (mode === 'season') ? (seasonRecordsByLocation || {}) : (recordsByLocation || {});
  const seasonLabel = (mode === 'season') ? getCurrentSeasonLabel() : '';
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

      const pts = calculatePoints(w, fish); // integer (display)
      const rawPts = calculatePointsRaw(w, fish); // float (star tiers)
      const stars = calculateStars(fish.category, rawPts);

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
    mode,
    seasonLabel,
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
  let sub;
  if(k.mode === 'season'){
    const tag = (k.seasonLabel ? (k.seasonLabel + ' Season') : 'Season');
    sub = k.location ? (`${tag} • ${k.location} • ${dateStr}`) : (`${tag} • ${dateStr}`);
  }else{
    sub = k.location ? ('All-time Share Card • ' + k.location + ' • ' + dateStr) : ('All-time Share Card • ' + dateStr);
  }
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
    const isSeason = (isSeasonMode && isSeasonMode());
    const prefix = isSeason ? 'FishMetrics_Season_' : 'FishMetrics_AllTime_';
    a.download = safeLoc ? (prefix + safeLoc + '_Share.png') : (prefix + 'Share.png');
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
    if(typeof saveSeasonRecords === 'function') saveSeasonRecords(seasonRecordsByLocation || {});
  }catch(_){}
  try{
    // LocalStorage backup (legacy key)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recordsByLocation || {}));
    localStorage.setItem('recordsUnit', weightUnit || 'lbs');
    // Season records backup
    localStorage.setItem('fishmetrics_season_records_v1', JSON.stringify(seasonRecordsByLocation || {}));
  }catch(_){}
}


function convertAllStoredRecords(fromUnit, toUnit){
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



function _buildFullAllTimeRecordsTemplate(){
  // Always export every fish key for every location, even if empty ("")
  // This makes backups future-proof and restores predictable.
  const out = {};
  try{
    const src = recordsByLocation || {};
    const locs = (typeof LOCATION_ORDER !== 'undefined' && LOCATION_ORDER.length) ? LOCATION_ORDER : Object.keys(LOCATIONS || {});
    for(const loc of locs){
      const list = (LOCATIONS && LOCATIONS[loc]) ? LOCATIONS[loc] : [];
      const dstRec = {};
      const srcRec = src[loc] || {};
      for(const f of list){
        const key = String(f.name); // stored keys are canonical lowercase fish names
        const v = (srcRec && Object.prototype.hasOwnProperty.call(srcRec, key)) ? srcRec[key] : "";
        dstRec[key] = (v == null) ? "" : String(v);
      }
      out[loc] = dstRec;
    }
  }catch(_){ }
  return out;
}

function _buildFullSeasonRecordsTemplate(){
  const out = {};
  try{
    for(const loc of Object.keys(LOCATIONS || {})){
      const fishArr = LOCATIONS[loc] || [];
      const merged = {};
      for(const f of fishArr){
        const n = canonicalizeFishName(f && f.name ? f.name : "");
        if(!n) continue;
        // Season backups store POINTS (truth) rather than derived weight.
        // Template exports empty strings for every fish key.
        if(merged[n] == null) merged[n] = "";
      }
      out[loc] = merged;
    }
  }catch(_){ }
  return out;
}

function _seasonPointsByLocationFromStoredWeights(){
  // Convert the in-app season storage (derived weight strings) into exported points strings.
  const tmpl = _buildFullSeasonRecordsTemplate();
  const cur = seasonRecordsByLocation || {};
  try{
    for(const loc of Object.keys(cur)){
      const recs = cur[loc] || {};
      const fishLookup = new Map((LOCATIONS?.[loc] || []).map(f=>[String(f.name).toLowerCase(), f]));
      for(const fishName of Object.keys(recs)){
        const f = fishLookup.get(String(fishName).toLowerCase());
        if(!f) continue;
        const rawW = recs[fishName];
        const wLbs = parseUserWeightToLbs(String(rawW||""));
        if(!Number.isFinite(wLbs) || wLbs <= 0) continue;
        const pts = calculatePoints(wLbs, f);
        if(!pts) continue;
        if(!tmpl[loc]) tmpl[loc] = {};
        tmpl[loc][canonicalizeFishName(f.name)] = String(pts);
      }
    }
  }catch(_){ }
  return tmpl;
}

function _seasonStoredWeightsFromPointsBackup(pointsByLoc){
  // Convert a season backup payload (points strings) into in-app stored weight strings.
  const out = {};
  try{
    for(const loc of Object.keys(pointsByLoc || {})){
      const recs = pointsByLoc[loc] || {};
      const fishLookup = new Map((LOCATIONS?.[loc] || []).map(f=>[String(f.name).toLowerCase(), f]));
      for(const fishName of Object.keys(recs)){
        const rawPts = String(recs[fishName] ?? '').trim();
        if(!rawPts) continue;
        const f = fishLookup.get(String(canonicalizeFishName(fishName)).toLowerCase()) || fishLookup.get(String(fishName).toLowerCase());
        if(!f) continue;
        const pts = _parsePointsInt(rawPts);
        if(Number.isNaN(pts) || pts <= 0) continue;
        const wStr = storedWeightStringForPoints(pts, f);
        if(!wStr) continue;
        if(!out[loc]) out[loc] = {};
        out[loc][canonicalizeFishName(f.name)] = String(wStr);
      }
    }
  }catch(_){ }
  return out;
}


// -----------------------------
// Backup / Restore (JSON)
// -----------------------------

function buildBackupPayload(){
  const now = new Date();
  const payload = {
    meta: {
      app: 'FishMetrics',
      version: 'Season_v1',
      exportedAt: now.toISOString()
    },
    settings: {
      weightUnit: (weightUnit === 'kgs') ? 'kgs' : 'lbs'
    },
    recordsByLocation: _buildFullAllTimeRecordsTemplate(),
    // Season backups should store POINTS (user input truth). Weight is derived.
    seasonRecordsByLocation: _seasonPointsByLocationFromStoredWeights()
  };

  // Always include seasonMeta so even empty exports are self-describing.
  try{
    payload.seasonMeta = {
      seasonId: getCurrentSeasonId(),
      exportedAt: now.toISOString()
    };
  }catch(_){ }

  return payload;
}

async function downloadBackupJSON(){
  try{
    const payload = buildBackupPayload();
    // If all all-time records are empty, warn before exporting an empty template.
    try{
      const nAll = _countBackupRecords(payload.recordsByLocation || {});
      if(nAll === 0){
        const ok = await showRestoreConfirmModal('All records empty, do you still want to proceed?');
        if(!ok) return;
      }
    }catch(_){ }
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const date = (function(){const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');})();
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

function _countBackupUniqueCanonicalFish(obj){
  // Count the number of unique fish that would actually be restored.
  // This should match applyRestoredState(), which canonicalizes keys and drops empties,
  // rather than relying on LOCATIONS membership (which can drift across releases).
  const seen = new Set();
  try{
    const canon = (typeof canonicalizeRecordsByLocation === 'function')
      ? canonicalizeRecordsByLocation(obj || {})
      : (obj || {});
    for(const loc of Object.keys(canon || {})){
      const rec = canon[loc] || {};
      for(const fishName of Object.keys(rec || {})){
        const v = rec[fishName];
        if(v == null) continue;
        const s = String(v).trim();
        if(!s) continue; // don't count empty entries
        const key0=_canonKey(fishName);
        const COUNT_ONLY_ALIASES={
          "sunfish":"ocean sunfish",
          "bass tunacare":"tucunare",
          "rock flatgal":"rock flagtail",
          "saddled coral grouper":"black saddled coral grouper",
          "whitetooth shark":"whitetip shark",
          "arctic grayling":"arctic greyling"
        };
        const key=(COUNT_ONLY_ALIASES[key0])?COUNT_ONLY_ALIASES[key0]:key0;
        seen.add(key);
      }
    }
  }catch(_){}
  return seen.size;
}

function _normalizeBackupObject(parsed){
  if(!parsed || typeof parsed !== 'object') return null;
  const records = parsed.recordsByLocation || parsed.records || parsed.data || null;
  if(!records || typeof records !== 'object') return null;
  const unit = parsed?.settings?.weightUnit || parsed?.settings?.unit || parsed?.weightUnit || null;
  const exportedAt = parsed?.meta?.exportedAt || parsed?.exportedAt || null;
  const version = parsed?.meta?.version || parsed?.version || null;
  const season = parsed.seasonRecordsByLocation || parsed.seasonRecords || null;
  const seasonMeta = (parsed && typeof parsed.seasonMeta === 'object') ? parsed.seasonMeta : null;
  return { recordsByLocation: records, seasonRecordsByLocation: (season && typeof season === 'object') ? season : null, seasonMeta, weightUnit: unit, exportedAt, version };
}

function applyRestoredState(restored){
  // Canonicalize + merge alias fish keys so old backups don't wipe data
  recordsByLocation = canonicalizeRecordsByLocation(restored.recordsByLocation || {});
  // Only restore season records if the backup explicitly includes them AND the season matches.
  // This prevents importing an old month (e.g., January) into the current season (e.g., February).
  const curSeasonId = (typeof getCurrentSeasonId === 'function') ? getCurrentSeasonId() : null;
  const backupSeasonId = (restored && restored.seasonMeta && restored.seasonMeta.seasonId) ? String(restored.seasonMeta.seasonId) : null;
  const seasonMatches = (!!curSeasonId && !!backupSeasonId && curSeasonId === backupSeasonId);
  if(restored && seasonMatches && restored.seasonRecordsByLocation && typeof restored.seasonRecordsByLocation === 'object'){
    // Backups store season as points; convert to stored derived weights for in-app use.
    seasonRecordsByLocation = canonicalizeRecordsByLocation(_seasonStoredWeightsFromPointsBackup(restored.seasonRecordsByLocation || {}));
    try{ if(typeof saveSeasonRecords === 'function') saveSeasonRecords(seasonRecordsByLocation || {}); }catch(_){ }
    try{ localStorage.setItem('fishmetrics_season_records_v1', JSON.stringify(seasonRecordsByLocation || {})); }catch(_){ }
  }
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
  try{ updateDashboard();
    try{ updateSeasonProgress(); }catch(_){}
    try{ updateSeasonUncaughtCount(); }catch(_){} }catch(_){ }
}

function setBackupMsg(msg){
  const el = document.getElementById('backupMsg');
  if(!el) return;
  el.textContent = msg || '';
}

async function restoreFromFile(file){
  if(!file) return;
  const reader = new FileReader();
  reader.onerror = () => {
    setBackupMsg('❌ Could not read that file.');
  };
  reader.onload = async () => {
    try{
      const parsed = JSON.parse(String(reader.result || ''));
      const norm = _normalizeBackupObject(parsed);
      if(!norm){
        setBackupMsg('❌ This doesn\'t look like a FishMetrics backup.');
        return;
      }

      // Safety gate: only apply season data if the backup season matches the active season.
      // If seasonMeta is missing or mismatched, we ignore seasonRecordsByLocation entirely.
      let seasonMsg = '';
      let seasonApplied = false;
      // If we skip season restore, keep a reason so we can show a clear message after restore.
      let seasonNotAppliedReason = '';
      let _curSeasonIdForMsg = '';
      let _backupSeasonIdForMsg = '';
      try{
        const curSeasonId = (typeof getCurrentSeasonId === 'function') ? getCurrentSeasonId() : null;
        const backupSeasonId = (norm && norm.seasonMeta && norm.seasonMeta.seasonId) ? String(norm.seasonMeta.seasonId) : null;
        _curSeasonIdForMsg = curSeasonId ? String(curSeasonId) : '';
        _backupSeasonIdForMsg = backupSeasonId ? String(backupSeasonId) : '';
        const hasSeasonPayload = !!(norm && norm.seasonRecordsByLocation && typeof norm.seasonRecordsByLocation === 'object');
        if(hasSeasonPayload){
          if(curSeasonId && backupSeasonId && curSeasonId === backupSeasonId){
            seasonMsg = `• Season data: ${backupSeasonId}<br>`;
            seasonApplied = true;
          }else{
            // Ignore season restore (fail closed)
            norm.seasonRecordsByLocation = null;
            seasonMsg = (backupSeasonId && curSeasonId)
              ? `• Season data: ${backupSeasonId} (not applied to current ${curSeasonId})<br>`
              : '• Season data: not applied<br>';
            seasonNotAppliedReason = (backupSeasonId && curSeasonId)
              ? `Season data from ${backupSeasonId} was not applied to the current season (${curSeasonId}).`
              : 'Season data was not applied.';
          }
        }
      }catch(_){ }

      const locCount = Object.keys(norm.recordsByLocation || {}).length;
      const recCount = _countBackupUniqueCanonicalFish(norm.recordsByLocation || {});
      const unit = (norm.weightUnit === 'kgs') ? 'kgs' : 'lbs';
      const when = norm.exportedAt ? new Date(norm.exportedAt).toLocaleString() : 'Unknown date';

      
const confirmHtml =
  `• ${recCount} fish<br>` +
  `• ${locCount} locations<br>` +
  `• Units: ${unit}<br>` +
  `• Exported: ${when}<br>` +
  `${seasonMsg}` +
  `<br>` +
  `Restoring will replace your current Fish Tank. Continue?`;

const ok = await showRestoreConfirmModal(confirmHtml);
if(!ok){
  setBackupMsg('Restore cancelled.');
  return;
}

      applyRestoredState(norm);
      if(seasonApplied){
        setBackupMsg('🎉 Fish Tank successfully restored (including Season data).');
      }else if(parsed && parsed.seasonRecordsByLocation){
        const bid = (parsed && parsed.seasonMeta && parsed.seasonMeta.seasonId) ? String(parsed.seasonMeta.seasonId) : 'an earlier season';
        setBackupMsg(`🎉 Fish Tank successfully restored. Season data from ${bid} was not applied.`);
        // Make this hard to miss: some users restore from the Share menu and may not be looking at the
        // Instructions tab where the backup message lives.
        if(seasonNotAppliedReason){
          try{ alert(`Imported all-time data. ${seasonNotAppliedReason}`); }catch(_){ }
        }
      }else{
        setBackupMsg('🎉 Fish Tank successfully restored.');
      }
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

function showClearConfirmation() {
  const msg = document.createElement('div');
  msg.textContent = 'All local data cleared';
  msg.className = 'privacy-clear-confirmation';
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 2000);
}

function showClearDataConfirm() {
  return new Promise((resolve) => {
    const backdrop = document.getElementById('clearConfirmBackdrop');
    const body = document.getElementById('clearConfirmBody');
    const okBtn = document.getElementById('clearConfirmOk');
    const cancelBtn = document.getElementById('clearConfirmCancel');

    if (!backdrop || !body || !okBtn || !cancelBtn) {
      // Fallback (shouldn't happen): behave like cancel.
      resolve(false);
      return;
    }

    body.textContent = "This will permanently delete all FishMetrics data on this device (Career + Season records, archives, and settings). Continue?";

    const cleanup = () => {
      backdrop.setAttribute('aria-hidden', 'true');
      backdrop.classList.remove('show');
      okBtn.removeEventListener('click', onOk);
      cancelBtn.removeEventListener('click', onCancel);
      backdrop.removeEventListener('click', onBackdrop);
      document.removeEventListener('keydown', onKey);
    };

    const onOk = (e) => { e.preventDefault(); cleanup(); resolve(true); };
    const onCancel = (e) => { e.preventDefault(); cleanup(); resolve(false); };
    const onBackdrop = (e) => { if (e.target === backdrop) { cleanup(); resolve(false); } };
    const onKey = (e) => { if (e.key === 'Escape') { cleanup(); resolve(false); } };

    okBtn.addEventListener('click', onOk);
    cancelBtn.addEventListener('click', onCancel);
    backdrop.addEventListener('click', onBackdrop);
    document.addEventListener('keydown', onKey);

    backdrop.setAttribute('aria-hidden', 'false');
    backdrop.classList.add('show');
  });
}

async function clearFishMetricsData() {
  const ok = await showClearDataConfirm();
  if (!ok) return;

  // 1) Clear web storage
  try { localStorage.clear(); } catch (_) {}
  try { sessionStorage.clear(); } catch (_) {}

  // 2) Clear IndexedDB (FishMetrics uses IndexedDB as the source of truth)
  try {
    // Close any open connection first
    try {
      const db = await (typeof openIdb === 'function' ? openIdb() : Promise.resolve(null));
      if (db && typeof db.close === 'function') db.close();
    } catch (_) {}

    // Reset cached promise so a fresh DB is created after reload
    try { if (typeof openIdb === 'function') openIdb._p = null; } catch (_) {}

    await new Promise((resolve) => {
      const req = indexedDB.deleteDatabase(typeof IDB_DB_NAME !== 'undefined' ? IDB_DB_NAME : 'fishmetrics');
      req.onsuccess = () => resolve();
      req.onerror = () => resolve();
      req.onblocked = () => resolve();
    });
  } catch (_) {}

  // 3) Clear in-memory caches (defensive; reload is the main reset)
  try { recordsByLocation = {}; } catch (_) {}
  try { seasonRecordsByLocation = {}; } catch (_) {}
  try { window.careerRecords = []; } catch (_) {}
  try { window.seasonRecords = []; } catch (_) {}

  // 4) Reload
  try { sessionStorage.setItem('fm_showClearToast','1'); } catch(e) {}
      location.reload();}


// Privacy modal handlers
function openPrivacyNotice() {
  document.getElementById("privacyModal").style.display = "flex";
}

function closePrivacyNotice() {
  document.getElementById("privacyModal").style.display = "none";
}

// Release notes modal handlers
function openReleaseNotes() {
  const el = document.getElementById("releaseNotesModal");
  if (el) el.style.display = "flex";
}

function closeReleaseNotes() {
  const el = document.getElementById("releaseNotesModal");
  if (el) el.style.display = "none";
}



/* === Season-safe Import / Export Logic === */

function normalizeImportedRecords(records){
    return records.map(r => {
        if (r.seasonId || r.isSeason === true) {
            return { ...r, isSeason: true };
        }
        return { ...r, isSeason: false };
    });
}

function applyImportedRecords(records){
    const normalized = normalizeImportedRecords(records);

    const careerOnly = normalized.filter(r => !r.isSeason);
    const seasonOnly = normalized.filter(r => r.isSeason);

    if (careerOnly.length) {
        window.careerRecords = careerOnly;
    }

    if (seasonOnly.length) {
        window.seasonRecords = seasonOnly;
    }

    refreshAllViews();
}

function exportAllRecords(){
    const career = (window.careerRecords || []).map(r => ({ ...r }));
    const season = (window.seasonRecords || []).map(r => ({ ...r, isSeason: true }));
    return [...career, ...season];
}

/* hook existing export if present */
window.exportRecordsWithSeasonFlag = exportAllRecords;

// Season mode: ensure Include Legendary toggle is hidden
function hideLegendaryToggleSeason(){
  try{
    if(!(typeof isSeasonMode === 'function' && isSeasonMode())) return;
    const el = document.querySelector('.legendary-toggle, .include-legendary, .legendary-switch');
    if(el) el.style.display = 'none';
  }catch(_){}
}
document.addEventListener('DOMContentLoaded', hideLegendaryToggleSeason);

// Season mode: force Legendary included and hide toggle
function forceLegendaryIncludedSeason(){
  try{
    if(!(typeof isSeasonMode === 'function' && isSeasonMode())) return;
    const t = document.getElementById('includeLegendaryToggle');
    if(t){
      t.checked = true;
      t.disabled = true;
      const wrapper = t.closest('.dash-controls');
      if(wrapper) wrapper.style.display = 'none';
    }
  }catch(_){}
}
document.addEventListener('DOMContentLoaded', forceLegendaryIncludedSeason);

// --- Alias-safe helpers ---
// Note: canonicalizeFishName(...) and canonicalizeRecordsByLocation(...) are defined near the
// seasonality alias tables so they are available during init/load migrations.
// --- end helpers ---


// === Career Targets (All-time): Real data ===
let careerTargetStarGoal = 4;
let careerTargetSortMode = "closest";
let careerTargetPrimary = '3'; // \"3\"|\"4\"|\"5\"|\"oos1\"|\"oos3\"

function _allFishFlatList(){
  const out = [];
  try{
    for(const loc of Object.keys(LOCATIONS || {})){
      for(const f of (LOCATIONS[loc] || [])){
        if(!f || !f.name) continue;
        out.push({
          location: loc,
          name: f.name,
          category: f.category,
          min: f.min,
          max: f.max
        });
      }
    }
  }catch(_){ }
  return out;
}

function _bestScoreForFishRecord(fish){
  // Returns { points, stars } for the user's all-time best record of this fish on this map.
  // If no record, returns { points: 0, stars: 0 }.
  try{
    const raw = (recordsByLocation?.[fish.location]?.[fish.name] ?? "");
    if(String(raw||"").trim()==="") return { points: 0, stars: 0 };
    const lbs = parseUserWeightToLbs(String(raw));
    if(Number.isNaN(lbs) || lbs <= 0) return { points: 0, stars: 0 };
    const pts = calculatePoints(lbs, fish); // integer (display)
    const rawPts = calculatePointsRaw(lbs, fish); // float (star tiers)
    const stars = calculateStars(fish.category, rawPts);
    return { points: pts || 0, stars: stars || 0 };
  }catch(_){
    return { points: 0, stars: 0 };
  }
}

function _setCareerTargetButtonsActive(){
  const btns = Array.from(document.querySelectorAll('.ct-target-btn'));
  btns.forEach(b=>{
    const t = String(b.getAttribute('data-ct-target') || '');
    if(t && t === String(careerTargetPrimary || '')) b.classList.add('active');
    else b.classList.remove('active');
  });
}

function _setCareerSortButtonsActive(){
  const toggle = document.getElementById('ctSortToggle');
  if(toggle) toggle.checked = (careerTargetSortMode === 'climb');

  const labels = Array.from(document.querySelectorAll('.ct-sort-label'));
  labels.forEach(l=>{
    const mode = String(l.getAttribute('data-mode')||'');
    if(mode === careerTargetSortMode) l.classList.add('active'); else l.classList.remove('active');
  });
}
function renderCareerTargets(){
  try{
    const view = document.getElementById('careerTargetsView');
    const panelsRoot = document.getElementById('careerTargetsPanels');
    if(!view || !panelsRoot) return;

    // Tab only exists/visible in All-time mode, but keep safe.
    if(typeof isSeasonMode === 'function' && isSeasonMode()){
      panelsRoot.innerHTML = '';
      return;
    }

    // Update sort label + button states
    const sortLabelEl = document.getElementById("careerTargetsSortLabel");
    const subLabelEl = document.getElementById("careerTargetsSubLabel");
    if(subLabelEl){
      const targetMode = String(careerTargetPrimary || '3');
      subLabelEl.textContent = (targetMode==='oos1') ? 'In season now • OOS next month' : (targetMode==='oos3') ? 'In season now • OOS within 3 months' : 'All-time best stars • In-season this month';    }
    if(sortLabelEl) sortLabelEl.textContent = (careerTargetSortMode === "climb") ? "biggest climb" : "closest to target";
    _setCareerTargetButtonsActive();
        _setCareerSortButtonsActive();

    const now = new Date();
    const fishAll = _allFishFlatList();
    const byCat = { Common: [], Rare: [], Epic: [], Legendary: [] };
    const totalsInSeason = { Common: 0, Rare: 0, Epic: 0, Legendary: 0 };

    
const targetMode = String(careerTargetPrimary || '3'); // "3"|"4"|"5"|"oos1"|"oos3"
const starGoal = (targetMode === '3' || targetMode === '4' || targetMode === '5') ? Number(targetMode) : 5; // urgency uses 5★ baseline
const isUrgency = (targetMode === 'oos1' || targetMode === 'oos3');

for(const f of fishAll){
  const inSeasonNow = isFishInSeason(f.name, now);
  if(!inSeasonNow) continue;

  if(totalsInSeason[f.category] != null) totalsInSeason[f.category] += 1;

  const best = _bestScoreForFishRecord(f);
  const bestStars = best.stars;
  const bestPoints = best.points;

  // Primary target include logic
  let include = true;

  if(isUrgency){
    // Urgency targets: show all currently in-season fish that are <5★
    if(bestStars >= 5) include = false;

    if(include && targetMode === 'oos1'){
      const d1 = _addMonths(now, 1);
      include = !isFishInSeason(f.name, d1);
    }else if(include && targetMode === 'oos3'){
      include = false;
      for(let k=1;k<=3;k++){
        const dk = _addMonths(now, k);
        if(!isFishInSeason(f.name, dk)) { include = true; break; }
      }
    }
  }else{
    // Star targets
    include = (bestStars < starGoal);
  }

  if(!include) continue;

  const gap = Math.max(0, starGoal - bestStars);

  const row = {
    ...f,
    bestStars,
    bestPoints,
    gap
  };
  (byCat[f.category] || (byCat[f.category] = [])).push(row);
}

    // Sort per toggle:
    // Closest to target:
    //   1) gap asc (closest first)
    //   2) bestPoints desc (higher points first)  <-- refinement
    // Biggest climb:
    //   1) gap desc (largest gap first)
    //   2) bestPoints asc (lower points first)   <-- refinement
    for(const cat of Object.keys(byCat)){
      byCat[cat].sort((a,b)=>{
        if(careerTargetSortMode === "climb"){
          if(a.gap !== b.gap) return b.gap - a.gap;
          if(a.bestPoints !== b.bestPoints) return a.bestPoints - b.bestPoints;
          return String(a.name).localeCompare(String(b.name));
        }
        // default: closest
        if(a.gap !== b.gap) return a.gap - b.gap;
        if(a.bestPoints !== b.bestPoints) return b.bestPoints - a.bestPoints;
        return String(a.name).localeCompare(String(b.name));
      });
    }

    const panelOrder = ['Common','Rare','Epic','Legendary'];
    const frag = document.createDocumentFragment();

    for(const cat of panelOrder){
      const remaining = byCat[cat] || [];
      const total = totalsInSeason[cat] || 0;
      const panel = document.createElement('div');
      panel.className = 'ct-rarity-panel';

      const header = document.createElement('div');
      header.className = 'ct-rarity-header';
      // rarity accent class (for header styling)
      header.classList.add('ct-' + String(cat).toLowerCase());
      const nameEl = document.createElement('div');
      nameEl.className = 'ct-rarity-name';
      nameEl.textContent = cat.toUpperCase();
      const countEl = document.createElement('div');
      countEl.className = 'ct-rarity-count';
      countEl.textContent = `${remaining.length} / ${total} remaining`;
      header.appendChild(nameEl);
      header.appendChild(countEl);
      panel.appendChild(header);

      const list = document.createElement('div');
      list.className = 'ct-list';

      if(remaining.length === 0){
        const empty = document.createElement('div');
        empty.className = 'ct-empty';
        empty.textContent = 'All set for this category.';
        list.appendChild(empty);
      }else{
        for(const r of remaining){
          const row = document.createElement('div');
          row.className = 'ct-row';

          const fishEl = document.createElement('div');
          fishEl.className = 'ct-fish';
          fishEl.textContent = toTitleCase(r.name);

          const mapEl = document.createElement('div');
          mapEl.className = 'ct-map';
          mapEl.textContent = r.location;

          const starsEl = document.createElement('div');
          starsEl.className = 'ct-stars';
          starsEl.textContent = r.bestStars ? ('⭐'.repeat(r.bestStars)) : '—';

          row.appendChild(fishEl);
          row.appendChild(mapEl);
          row.appendChild(starsEl);
          list.appendChild(row);
        }
      }

      panel.appendChild(list);
      frag.appendChild(panel);
    }

    panelsRoot.innerHTML = '';
    panelsRoot.appendChild(frag);
    _setCareerTargetButtonsActive();
        _setCareerSortButtonsActive();
  }catch(_){ }
}

(function initCareerTargetsUI(){
  function wire(){
    const btns = Array.from(document.querySelectorAll('.ct-target-btn'));
    if(btns.length === 0) return;
    btns.forEach(b=>{
      if(b.__ctWired) return;
      b.__ctWired = true;
      b.addEventListener('click', ()=>{
        const t = b.getAttribute('data-ct-target');
        if(!t) return;
        careerTargetPrimary = String(t);
        // keep legacy var in sync for 3★/4★/5★ buttons
        const n = Number(t);
        if(n) careerTargetStarGoal = n;
        renderCareerTargets();
      });
    });
    const sortToggle = document.getElementById('ctSortToggle');
    if(sortToggle && !sortToggle.__ctSortWired){
      sortToggle.__ctSortWired = true;
      sortToggle.addEventListener('change', ()=>{
        careerTargetSortMode = sortToggle.checked ? 'climb' : 'closest';
        renderCareerTargets();
      });
    }
    const sortLabels = Array.from(document.querySelectorAll('.ct-sort-label'));
    sortLabels.forEach(l=>{
      if(l.__ctSortLabelWired) return;
      l.__ctSortLabelWired = true;
      const activate = ()=>{
        const mode = String(l.getAttribute('data-mode')||'');
        if(mode !== 'closest' && mode !== 'climb') return;
        careerTargetSortMode = mode;
        renderCareerTargets();
      };
      l.addEventListener('click', activate);
      l.addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }});
    });
_setCareerTargetButtonsActive();
        _setCareerSortButtonsActive();
    // Default render (safe even if records not loaded yet)
    renderCareerTargets();
  }

  document.addEventListener('DOMContentLoaded', ()=>{
  try {
    if (sessionStorage.getItem('fm_showClearToast') === '1') {
      sessionStorage.removeItem('fm_showClearToast');
      // Delay a tick to ensure layout is ready
      setTimeout(showClearConfirmation, 50);
    }
  } catch (e) {}
 setTimeout(wire, 0); });
  setTimeout(wire, 200);
})();



// === Career Targets: force hide in Season mode ===
(function(){
  function updateCareerTargetsVisibility(){
    const btn = document.getElementById('tabCareerTargets');
    if(!btn) return;

    const seasonActive =
      document.body.classList.contains('season-active') ||
      document.documentElement.classList.contains('season-active') ||
      document.querySelector('.season-banner:not(.hidden)');

    btn.style.display = seasonActive ? 'none' : '';
  }

  document.addEventListener('click', (e) => {
    if(e.target && (e.target.id === 'modeSeasonBtn' || e.target.id === 'modeCareerBtn')){
      setTimeout(updateCareerTargetsVisibility, 0);
    }
  });

  document.addEventListener('DOMContentLoaded', updateCareerTargetsVisibility);
  setTimeout(updateCareerTargetsVisibility, 200);
})();



// === Enforce valid tab on mode switch (Career Targets) ===
(function(){
  function enforceValidTabForMode(){
    const isSeason = document.body.classList.contains('season-active');
    const careerView = document.getElementById('careerTargetsView');
    const focusView = document.getElementById('focusView');
    if(isSeason && ((careerView && careerView.classList.contains('active')) || (focusView && focusView.classList.contains('active')))){
      const dash = document.getElementById('tabOverview');
      dash && dash.click();
    }
  }

  document.getElementById('modeSeasonBtn')?.addEventListener('click', () => {
    setTimeout(enforceValidTabForMode, 0);
  });

  document.addEventListener('DOMContentLoaded', enforceValidTabForMode);
})();

function showRestoreConfirmModal(linesText){
  return new Promise((resolve)=>{
    const backdrop = document.getElementById('restoreConfirmBackdrop');
    const body = document.getElementById('restoreConfirmBody');
    const ok = document.getElementById('restoreConfirmOk');
    const cancel = document.getElementById('restoreConfirmCancel');

    if(!backdrop || !body || !ok || !cancel){
      // Fallback to browser confirm if modal not present
      resolve(confirm(linesText.replace(/<[^>]*>/g,'')));
      return;
    }

    // render as bullet-like lines
    body.innerHTML = linesText;

    backdrop.classList.add('show');
    backdrop.setAttribute('aria-hidden','false');

    const cleanup = (val)=>{
      backdrop.classList.remove('show');
      backdrop.setAttribute('aria-hidden','true');
      ok.onclick = null;
      cancel.onclick = null;
      resolve(val);
    };

    cancel.onclick = ()=>cleanup(false);
    ok.onclick = ()=>cleanup(true);
  });
}


function _addMonths(date, months){
  const d = new Date(date.getTime());
  const day = d.getDate();
  d.setMonth(d.getMonth() + months);
  // normalize if month roll causes date shift
  if(d.getDate() !== day){
    d.setDate(0);
  }
  return d;
}




// === Focus Tab: Cascading Fish Picker (All-time only) ===
(function initFocusTab(){
  const locSel = document.getElementById('focusLocationSelect');
  const catSel = document.getElementById('focusCategorySelect');
  const fishSel = document.getElementById('focusFishSelect');
  const hintEl = document.getElementById('focusHint');
  const addBtn = document.getElementById('focusAddBtn');
  const listEl = document.getElementById('focusList');
  const emptyEl = document.getElementById('focusListEmpty');


  let gapPanel = document.getElementById('focusGapPanel');

  // Create the gap panel if it isn't present in the HTML (keeps this feature robust)
  if(!gapPanel && listEl){
    gapPanel = document.createElement('div');
    gapPanel.id = 'focusGapPanel';
    gapPanel.className = 'focus-gap-panel';
    gapPanel.style.marginTop = '14px';
    listEl.insertAdjacentElement('afterend', gapPanel);
  }


  const focusItems = []; // { key, loc, name }
  const MAX_FOCUS_ITEMS = 10;

  const FOCUS_LS_KEY = "focusItemsAlltime";
  function saveFocusItems(){
    try{
      const payload = focusItems.map(x => ({ loc: x.loc, name: x.name }));
      localStorage.setItem(FOCUS_LS_KEY, JSON.stringify(payload));
    }catch(_){}
  }
  function loadFocusItems(){
    try{
      const raw = localStorage.getItem(FOCUS_LS_KEY) ?? "[]";
      const arr = JSON.parse(raw);
      if(!Array.isArray(arr)) return;
      const seen = new Set();
      for(const it of arr){
        if(!it || typeof it.loc !== "string" || typeof it.name !== "string") continue;
        const loc = it.loc;
        const name = it.name;
        if(typeof isFishInSeason === "function" && !isFishInSeason(name)) continue; // keep list "in-season" only
        const key = `${loc}||${name}`;
        if(seen.has(key)) continue;
        if(focusItems.length >= MAX_FOCUS_ITEMS) break;
        focusItems.push({ key, loc, name });
        seen.add(key);
      }
    }catch(_){}
  }

  // Restore last selection on load (All-time only).
  loadFocusItems();


  // Point limits (hard caps) by category. Used for the 5★ soft-cap target.
  const HARD_LIMIT_BY_CATEGORY = { Common: 600, Rare: 800, Epic: 1000, Legendary: 10000 };
  const MIN_POINTS_BY_CATEGORY = { Common: 300, Rare: 400, Epic: 500, Legendary: 5000 };

  // Minimum points required to *reach* each star level (index = star level).
  // e.g. STAR_MIN.Common[3] = min points for 3★ Common.
  const STAR_MIN = {
    Common: [0, MIN_POINTS_BY_CATEGORY.Common, 359, 420, 480, 540],
    Rare:   [0, MIN_POINTS_BY_CATEGORY.Rare,   480, 560, 640, 720],
    Epic:   [0, MIN_POINTS_BY_CATEGORY.Epic,   600, 700, 800, 900],
    Legendary:[0, MIN_POINTS_BY_CATEGORY.Legendary, 6000, 7000, 8000, 9000],
  };

  function getFishObj(loc, fishName){
    const list = (LOCATIONS && LOCATIONS[loc]) ? LOCATIONS[loc] : [];
    return list.find(f => String(f.name) === String(fishName)) || null;
  }

  function getAllTimePoints(loc, fishName){
    try{
      const f = getFishObj(loc, fishName);
      if(!f) return 0;
      const storedW = getStoredWeight(loc, fishName);
      if(String(storedW ?? '').trim() === '') return 0;
      const lbs = parseUserWeightToLbs(String(storedW));
      if(!Number.isFinite(lbs)) return 0;
      const pts = calculatePoints(lbs, f);
      return Number.isFinite(pts) ? pts : 0;
    }catch(_){ return 0; }
  }

  function esc(s){
    return String(s ?? '')
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#39;');
  }

  function softCapForCategory(cat){
    const hard = HARD_LIMIT_BY_CATEGORY[cat] ?? 0;
    // use rounding to avoid float artifacts
    return Math.round(hard * (typeof SOFT_CAP_RATIO === 'number' ? SOFT_CAP_RATIO : 0.945));
  }

  function nextTargetPoints(cat, currentPts){
    const pts = Number(currentPts) || 0;
    if(pts <= 0) return MIN_POINTS_BY_CATEGORY[cat] ?? 0;

    const stars = (typeof calculateStars === 'function') ? calculateStars(cat, pts) : 0;
    if(stars >= 5) return softCapForCategory(cat);

    const nextStar = Math.min(5, Math.max(1, stars + 1));
    const arr = STAR_MIN[cat] || [];
    return arr[nextStar] ?? 0;
  }

  
  function clamp01(x){ return x < 0 ? 0 : (x > 1 ? 1 : x); }

  function progressToNext(cat, pts){
    const p = Number(pts) || 0;

    // No points yet: progress toward 1★ minimum.
    if(p <= 0){
      const target = STAR_MIN[cat]?.[1] ?? (MIN_POINTS_BY_CATEGORY[cat] ?? 0);
      return { pct: target ? clamp01(p / target) : 0, label: '0%' };
    }

    const stars = (typeof calculateStars === 'function') ? calculateStars(cat, p) : 0;

    // 5★: progress toward soft cap.
    if(stars >= 5){
      const cap = softCapForCategory(cat);
      const pct = cap ? clamp01(p / cap) : 0;
      return { pct, label: `${Math.round(pct * 100)}%` };
    }

    const curStar = Math.max(1, stars);
    const curMin = STAR_MIN[cat]?.[curStar] ?? 0;
    const nextMin = STAR_MIN[cat]?.[curStar + 1] ?? nextTargetPoints(cat, p);
    const denom = (nextMin - curMin) || 1;
    const pct = clamp01((p - curMin) / denom);
    return { pct, label: `${Math.round(pct * 100)}%` };
  }

  function renderGaps(){
    if(!gapPanel) return;

    if(focusItems.length === 0){
      gapPanel.innerHTML = '';
      return;
    }

    const rows = focusItems.map(item=>{
      const f = getFishObj(item.loc, item.name);
      const cat = f && f.category ? String(f.category) : '';
      const catTitle = cat || 'Unknown';
      const pts = getAllTimePoints(item.loc, item.name);
      const stars = (typeof calculateStars === 'function') ? calculateStars(catTitle, pts) : 0;
      const target = nextTargetPoints(catTitle, pts);
      const gap = Math.max(0, (target || 0) - (pts || 0));

      let targetLabel = '';
      if((pts || 0) <= 0){
        targetLabel = `to 1★`;
      }else if(stars >= 5){
        targetLabel = `to soft cap`;
      }else{
        targetLabel = `to ${Math.min(5, stars + 1)}★`;
      }

      const fishLabel = (typeof toTitleCase === 'function') ? toTitleCase(item.name) : String(item.name);

      return {
        fishLabel,
        loc: item.loc,
        cat: catTitle,
        pts,
        stars,
        target,
        gap,
        targetLabel,
        progress: progressToNext(catTitle, pts)
      };
    });

    const header = `<div class="focus-gap-title">Points gap to next level</div>`;
    const tableHead = `<div class="focus-gap-row focus-gap-head">
        <div>Fish</div><div>Pts</div><div>Stars</div><div>Next</div><div>Gap</div>
      </div>`;

    const body = rows.map(r=>{
      const starsTxt = r.stars ? `${r.stars}★` : '—';
      const nextTxt = (r.target && r.targetLabel) ? `${r.target} (${r.targetLabel})` : '—';
      const ptsTxt = r.pts ? String(r.pts) : '0';
      const gapTxt = String(r.gap || 0);
      return `<div class="focus-gap-row">
        <div class="focus-gap-fish">${esc(r.fishLabel)} <span class="focus-gap-sub">— ${esc(r.loc)}</span><div class="focus-progress" aria-hidden="true"><div class="fill" style="width:${Math.round((r.progress?.pct||0)*100)}%"></div></div><div class="focus-progress-meta"><span>${Math.round((r.progress?.pct||0)*100)}% toward ${r.targetLabel === "to soft cap" ? "soft cap" : "next level"}</span></div></div>
        <div>${ptsTxt}</div>
        <div>${starsTxt}</div>
        <div>${nextTxt}</div>
        <div class="focus-gap-gap">${gapTxt}</div>
      </div>`;
    }).join('');

    gapPanel.innerHTML = `<div class="focus-gap-wrap">${header}${tableHead}${body}</div>`;
  }


  // Refresh hook: recompute gaps/progress using latest stored records
  window.refreshFocusTab = function(){
    try{ renderGaps(); }catch(_){ }
  };



  function setAddVisible(visible){
    if(!addBtn) return;
    addBtn.style.display = visible ? 'inline-flex' : 'none';
  }

  function setAddEnabled(enabled){
    if(!addBtn) return;
    addBtn.disabled = !enabled;
  }

  function updateAddState(){
    const hasFish = !!(fishSel && fishSel.value);
    const underLimit = focusItems.length < MAX_FOCUS_ITEMS;
    const atLimit = !underLimit;

    // When at max, lock the selectors as well (user can still remove items from the list)
    if(locSel && catSel && fishSel){
      if(atLimit){
        locSel.disabled = true;
        catSel.disabled = true;
        fishSel.disabled = true;
        setHint(`You have reached a maximum of 10 selectable fish. Remove one to add another.`);
      }else{
        locSel.disabled = false;
        // restore normal cascading enable/disable
        catSel.disabled = !locSel.value;
        fishSel.disabled = !(locSel.value && catSel.value);
        // if we were previously at limit, refresh the hint based on current selection state
        if(locSel.value && catSel.value){
          const count = Math.max(0, (fishSel.options ? fishSel.options.length - 1 : 0));
          setHint(`${count} matching In Season fish in ${locSel.value}. Now pick one.`);
        }
      }
    }

    setAddVisible(hasFish);
    setAddEnabled(hasFish && underLimit);
    if(addBtn){
      addBtn.title = underLimit ? '' : `You have reached a maximum of 10 selectable fish.`;
    }
  }

  function renderList(){
    if(!listEl) return;
    listEl.innerHTML = '';
    const hasItems = focusItems.length > 0;
    if(emptyEl) emptyEl.style.display = hasItems ? 'none' : 'block';
    if(!hasItems){ renderGaps(); return; }

    focusItems.forEach((item)=>{
      const chip = document.createElement('div');
      chip.className = 'focus-chip';

      const label = document.createElement('span');
      const fishLabel = (typeof toTitleCase === 'function') ? toTitleCase(item.name) : String(item.name);
      label.textContent = `${fishLabel} — ${item.loc}`;

      const x = document.createElement('button');
      x.type = 'button';
      x.className = 'x';
      x.setAttribute('aria-label', 'Remove');
      x.textContent = '×';
      x.addEventListener('click', ()=>{
        const idx = focusItems.findIndex(f => f.key === item.key);
        if(idx >= 0) focusItems.splice(idx, 1);
        saveFocusItems();
        renderList();
        updateAddState();
      });

      chip.appendChild(label);
      chip.appendChild(x);
      listEl.appendChild(chip);
    });
    renderGaps();
  }


  if(!locSel || !catSel || !fishSel) return;

  setAddVisible(false);
  setAddEnabled(false);
  renderList();
  updateAddState();

  function setHint(msg){
    if(hintEl) hintEl.textContent = msg;
  }

  function opt(value, label){
    const o = document.createElement('option');
    o.value = value;
    o.textContent = label;
    return o;
  }

  function resetSelect(sel, placeholder){
    sel.innerHTML = '';
    sel.appendChild(opt('', placeholder));
    sel.value = '';
  }

  function getCategoriesForLocation(loc){
    const list = (LOCATIONS && LOCATIONS[loc]) ? LOCATIONS[loc] : [];
    const cats = Array.from(new Set(list.map(f => f.category).filter(Boolean)));
    cats.sort((a,b)=>{
      const ra = (typeof CATEGORY_RANK === 'object' && CATEGORY_RANK) ? (CATEGORY_RANK[a] ?? 999) : 999;
      const rb = (typeof CATEGORY_RANK === 'object' && CATEGORY_RANK) ? (CATEGORY_RANK[b] ?? 999) : 999;
      if(ra !== rb) return ra - rb;
      return String(a).localeCompare(String(b));
    });
    return cats;
  }

  function getFishForLocationAndCategory(loc, cat){
    const list = (LOCATIONS && LOCATIONS[loc]) ? LOCATIONS[loc] : [];
    // Exclude out-of-season fish for the *current* month/season
    const fish = list
      .filter(f => String(f.category) === String(cat))
      .filter(f => (typeof isFishInSeason === 'function') ? isFishInSeason(f.name, new Date()) : true);
    fish.sort((a,b)=>String(a.name).localeCompare(String(b.name)));
    return fish;
  }

  // Populate location options (use the same order as elsewhere)
  resetSelect(locSel, 'Select…');
  (typeof LOCATION_ORDER !== 'undefined' ? LOCATION_ORDER : Object.keys(LOCATIONS || {})).forEach((loc)=>{
    if(!loc) return;
    locSel.appendChild(opt(loc, loc));
  });

  resetSelect(catSel, 'Select…');
  resetSelect(fishSel, 'Select…');
  catSel.disabled = true;
  fishSel.disabled = true;

  setHint('Pick a location to begin.');

  locSel.addEventListener('change', ()=>{
    const loc = locSel.value;
    resetSelect(catSel, 'Select…');
    resetSelect(fishSel, 'Select…');
    setAddVisible(false);
    setAddEnabled(false);
    
    fishSel.disabled = true;

    if(!loc){
      catSel.disabled = true;
      setHint('Pick a location to begin.');
      return;
    }

    const cats = getCategoriesForLocation(loc);
    cats.forEach(c => catSel.appendChild(opt(c, c)));
    catSel.disabled = false;
    setHint('Now pick a category.');
  });

  catSel.addEventListener('change', ()=>{
    const loc = locSel.value;
    const cat = catSel.value;

    resetSelect(fishSel, 'Select…');

    if(!loc || !cat){
      fishSel.disabled = true;
      setHint(!loc ? 'Pick a location to begin.' : 'Now pick a category.');
      updateAddState();
      return;
    }

    const fish = getFishForLocationAndCategory(loc, cat);
    fish.forEach(f=>{
      const label = (typeof toTitleCase === 'function') ? toTitleCase(f.name) : String(f.name);
      fishSel.appendChild(opt(String(f.name), label));
    });
    fishSel.disabled = false;
    setHint(`${fish.length} matching In Season fish in ${loc}. Now pick one.`);
    updateAddState();
  });

  fishSel.addEventListener('change', ()=>{
    // If they've picked something already in the list, nudge them immediately
    const loc = locSel.value;
    const fishName = fishSel.value;
    const key = (loc && fishName) ? `${loc}||${fishName}` : '';
    const isDup = !!(key && focusItems.some(x => x.key === key));

    // If we're at max, updateAddState will lock everything and set the max message
    if(focusItems.length >= MAX_FOCUS_ITEMS){
      updateAddState();
      return;
    }

    if(isDup){
      setAddVisible(true);
      setAddEnabled(false);
      setHint('Fish already in selection. Please pick something else.');
      return;
    }

    updateAddState();
  });

  if(addBtn){
    addBtn.addEventListener('click', ()=>{
      const loc = locSel.value;
      const fishName = fishSel.value;
      if(!loc || !fishName) return;

      const key = `${loc}||${fishName}`;

      if(focusItems.length >= MAX_FOCUS_ITEMS){
        setHint(`You have reached a maximum of 10 selectable fish. Remove one to add another.`);
        updateAddState();
        return;
      }

      if(focusItems.some(x => x.key === key)){
        setHint('Fish already in selection. Please pick something else.');
        setAddVisible(true);
        setAddEnabled(false);
        return;
      }

      focusItems.push({ key, loc, name: fishName });
      saveFocusItems();
      renderList();

      // After adding, reset fish select to encourage picking another
      if(fishSel){
        fishSel.value = '';
      }

      updateAddState();
    });
  }
})();


/*__MOBILE_CLAMP_SHARE_DROPDOWN_STRONG__*/
(function () {
  const PAD = 8;

  function isVisible(el) {
    const cs = getComputedStyle(el);
    if (!cs) return false;
    if (cs.display === 'none' || cs.visibility === 'hidden' || cs.opacity === '0') return false;
    const r = el.getBoundingClientRect();
    return r.width > 40 && r.height > 40;
  }

  function clampMenu(el) {
    try {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      if (vw > 520) return; // mobile only
      if (!isVisible(el)) return;

      const r = el.getBoundingClientRect();
      if (r.right <= vw - PAD && r.left >= PAD) return; // already in bounds

      // Force fixed positioning so it can't overflow off-screen
      const top = Math.min(Math.max(PAD, r.top), vh - PAD - Math.min(r.height, vh - PAD*2));
      el.style.position = 'fixed';
      el.style.top = top + 'px';
      el.style.right = PAD + 'px';
      el.style.left = 'auto';
      el.style.transform = 'none';
      el.style.maxWidth = 'calc(100vw - ' + (PAD*2) + 'px)';
      el.style.boxSizing = 'border-box';
      el.style.overflowX = 'hidden';
      el.style.zIndex = '9999';
    } catch (e) {}
  }

  function findAndClamp() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    if (vw > 520) return;

    // Heuristics: likely floating panels
    const nodes = [];
    document.querySelectorAll('[id*="share" i], [class*="share" i], [class*="dropdown" i], [class*="menu" i], [role="menu"], [aria-haspopup="menu"]').forEach(el => nodes.push(el));

    // Also clamp any element that is currently overflowing right edge and looks like a panel
    document.querySelectorAll('body *').forEach(el => {
      try {
        const cs = getComputedStyle(el);
        if (!cs) return;
        if (cs.position !== 'absolute' && cs.position !== 'fixed') return;
        if (cs.zIndex === 'auto') return;
        const r = el.getBoundingClientRect();
        if (r.width < 140 || r.height < 120) return;
        if (r.right > vw - PAD) nodes.push(el);
      } catch (e) {}
    });

    const uniq = Array.from(new Set(nodes));
    uniq.forEach(clampMenu);
  }

  document.addEventListener('click', () => setTimeout(findAndClamp, 0), true);
  document.addEventListener('touchend', () => setTimeout(findAndClamp, 0), true);
  window.addEventListener('resize', () => setTimeout(findAndClamp, 0));
  window.addEventListener('orientationchange', () => setTimeout(findAndClamp, 50));
})();