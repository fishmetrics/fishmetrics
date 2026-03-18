

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
  "coho salmon": { inSeasonMonths: [5, 6, 7, 8, 9, 10, 11] },
  "common stargazer": { inSeasonMonths: [5, 6, 7, 8, 9] },
  "coral trout": { inSeasonMonths: [5, 6, 7, 8, 9, 10, 11] },
  "corvina": { inSeasonMonths: [3, 4, 5, 6, 7, 8, 9] },
  "cubera snapper": { inSeasonMonths: [6, 7, 8, 9, 10, 11] },
  "curimbata": { inSeasonMonths: [1, 2, 3, 10, 11, 12] },
  "dace": { inSeasonMonths: [2, 3, 4, 5, 6] },
  "dusky flathead": { inSeasonMonths: [1, 2, 3, 4, 10, 11, 12] },
  "electric eel": { inSeasonMonths: [1, 2, 3, 4, 10, 11, 12] },
  "bambusa": { inSeasonMonths: [1, 2, 3, 9, 10, 11, 12] },
  
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
  "redeye piranha": { inSeasonMonths: [1, 2, 3, 4, 10, 11, 12] },
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

// NOTE: OOS caps are independent of the global SOFT_CAP_RATIO.
// Epic cap is 595 (not 596).
const OOS_MAX_POINTS = { Common:357, Rare:476, Epic:595 };

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
  // Support legacy misspelling used in some UI/game lists.
  "aligator gar": "alligator gar",
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


// === VIP Locations & Fish Catalog (v1.5.0) ===
// VIP has NO overlap with Main locations/fish.
const VIP_LOCATION_ORDER = [
  "Chemical Plant",
  "Nuclear Plant"
];

// Weights are canonical lbs. Points formula is shared.
const LOCATIONS_VIP = {
  "Chemical Plant": [
    { name:"glowfish", category:"Common", min:33.07, max:66.14 },
    { name:"raspberryfish", category:"Common", min:44.09, max:94.8 },
    { name:"wicked carp", category:"Common", min:17.64, max:35.27 },
    { name:"crystal fin", category:"Common", min:13.23, max:26.46 },
    { name:"zombifin", category:"Common", min:50.71, max:101.41 },
    { name:"flatjaw", category:"Common", min:26.46, max:55.12 },
    { name:"spotted windchaser", category:"Common", min:13.23, max:26.46 },
    { name:"glow puffball", category:"Common", min:30.86, max:61.73 },
    { name:"cthulhu carp", category:"Common", min:110.23, max:220.46 },
    { name:"nylonfish", category:"Common", min:8.82, max:17.64 },
    { name:"luminator", category:"Common", min:55.12, max:121.25 },
    { name:"telebass", category:"Common", min:22.05, max:55.12 },
    { name:"long sparker", category:"Common", min:15.43, max:33.07 },
    { name:"rotting deadfish", category:"Common", min:57.32, max:114.64 },
    { name:"phosphorite", category:"Common", min:35.27, max:77.16 },
    { name:"fireborn scales", category:"Common", min:55.12, max:127.87 },
    { name:"burned potfish", category:"Common", min:8.82, max:17.64 },
    { name:"bubblefin", category:"Common", min:22.05, max:55.12 },
    { name:"silvered amelinium", category:"Common", min:66.14, max:143.3 },
    { name:"fish-eye", category:"Common", min:6.61, max:13.23 },
    { name:"teapotfish", category:"Common", min:22.05, max:44.09 },
    { name:"anvilfish", category:"Common", min:77.16, max:165.35 },
    { name:"chupakabrafish", category:"Common", min:6.61, max:15.43 },
    { name:"slimesnail", category:"Common", min:13.23, max:30.86 },
    { name:"wheelreef", category:"Common", min:11.02, max:551.15 },
    { name:"barreltail", category:"Common", min:33.1, max:110.23 },
    { name:"toxic salmon", category:"Common", min:55.11, max:110.23 },
    { name:"anchorscale", category:"Common", min:44.09, max:99.21 },
    { name:"bottlegill", category:"Common", min:11.02, max:22.05 },
    { name:"cantrout", category:"Common", min:8.82, max:17.64 },
    { name:"uranium eel", category:"Common", min:59.52, max:114.64 },
    { name:"bootfish", category:"Common", min:15.43, max:33.07 },
    { name:"flipper sneaker", category:"Common", min:4.41, max:11.02 },
    { name:"graterfin", category:"Common", min:48.5, max:92.59 },
    { name:"mailfish", category:"Common", min:15.43, max:30.86 },
    { name:"toxic puffer", category:"Common", min:33.07, max:81.57 },
    { name:"plant waterer", category:"Common", min:35.27, max:57.32 },
    { name:"gnawfish", category:"Common", min:17.64, max:39.68 },
    { name:"rusty mutang", category:"Common", min:90.39, max:180.78 },
    { name:"biterfish", category:"Common", min:26.45, max:59.52 },
    { name:"zombie genius", category:"Common", min:72.25, max:163.14 },
    { name:"stale deadfish", category:"Rare", min:63.93, max:132.28 },
    { name:"stringed guitarfish", category:"Rare", min:48.5, max:90.39 },
    { name:"banjoplayer", category:"Rare", min:35.27, max:74.96 },
    { name:"cuddlyfish", category:"Rare", min:74.96, max:171.96 },
    { name:"bomberfish", category:"Rare", min:171.96, max:330.69 },
    { name:"soccerfish", category:"Rare", min:33.07, max:66.14 },
    { name:"brainfish", category:"Rare", min:24.25, max:55.12 },
    { name:"sawfish", category:"Rare", min:37.48, max:90.39 },
    { name:"bonebite", category:"Rare", min:46.3, max:94.8 },
    { name:"gasmist swimmer", category:"Rare", min:28.66, max:79.36 },
    { name:"guitarfin", category:"Rare", min:37.48, max:83.78 },
    { name:"swagfish", category:"Rare", min:130.07, max:264.55 },
    { name:"fingered glovefish", category:"Rare", min:6.61, max:15.43 },
    { name:"round tubefish", category:"Epic", min:174.16, max:385.81 },
    { name:"polish spudfish", category:"Epic", min:233.69, max:467.38 },
    { name:"seahorse abomination", category:"Epic", min:48.5, max:101.41 },
    { name:"ribbed bonefish", category:"Epic", min:187.39, max:396.83 },
    { name:"nightmary", category:"Legendary", min:440.92, max:1102.31 }
  ],
  "Nuclear Plant": [
    { name:"Applegill", category:"Common", min:0.44, max:4.41 },
    { name:"Bat-eel", category:"Common", min:2.2, max:8.82 },
    { name:"Bottlefin", category:"Common", min:2.2, max:6.61 },
    { name:"Bread'N'Butterjaw", category:"Common", min:4.41, max:8.82 },
    { name:"Bulpgill", category:"Common", min:0.22, max:4.41 },
    { name:"Carrotfin", category:"Common", min:3.3, max:11.02 },
    { name:"Double Troutot", category:"Common", min:4.41, max:15.34 },
    { name:"Forknose", category:"Common", min:2.2, max:13.22 },
    { name:"Geigerfin", category:"Common", min:17.64, max:37.48 },
    { name:"Irradiatedcutfin", category:"Common", min:11.02, max:22.04 },
    { name:"Knifetail", category:"Common", min:2.2, max:6.61 },
    { name:"Oniongill", category:"Common", min:1.1, max:8.82 },
    { name:"Potatofin", category:"Common", min:4.41, max:13.63 },
    { name:"Rock'N'Rollkingjaw", category:"Common", min:4.41, max:19.84 },
    { name:"Rug-ball-swimmer", category:"Common", min:2.2, max:11.02 },
    { name:"Sausagetail", category:"Common", min:4.41, max:15.43 },
    { name:"Trianglegill", category:"Common", min:1.1, max:6.61 },
    { name:"Footsalmon", category:"Rare", min:11.02, max:26.46 },
    { name:"Magnetfin", category:"Rare", min:6.61, max:44.09 },
    { name:"Yellowsubmarinecod", category:"Rare", min:33.07, max:198.42 },
    { name:"Devil Mutanoid", category:"Epic", min:11.02, max:33.07 },
    { name:"Giantbusbass", category:"Epic", min:220.46, max:661.39 }
  ]
};
// Season Log Records should follow the in-game ordering (UI-only).
// All-time/career remains alphabetical for quick scanning.
// Keys are fish "name" strings as used in LOCATIONS / backups.
const SEASON_GAME_ORDER = {
  "marina": ["anchovy", "sardine", "brisling", "gilt-head bream", "striped red mullet", "hardyhead silverside", "mudskipper", "blobfish"],
  "paradise island": ["bluefish", "spotfin porcupinefish", "snubnose pompano", "largetooth flounder", "blue trevally", "bonefish", "longtail tuna", "clownfish", "humphead parrotfish", "white tuna", "pacific footballfish", "pelagic stingray", "shredder"],
  "great lakes": ["alewife", "pink salmon", "largemouth bass", "brook trout", "channel catfish", "yellow perch", "brown trout", "white crappie", "walleye", "smallmouth bass", "sea lamprey", "round whitefish", "redear sunfish", "bloater", "white bass", "coho salmon", "lake trout", "muskie", "flathead catfish", "chinook salmon", "longnose gar", "goldfish", "american eel", "lake sturgeon", "bessie"],
  "costa rica": ["barracuda", "wahoo", "broomtail grouper", "pacific sailfish", "roosterfish", "yellowfin tuna", "pompano", "dorado", "tarpon", "snook", "sierra mackerel", "jack crevalle", "cubera snapper", "tripletail", "blue marlin", "black marlin", "nurse shark", "striped marlin", "whitetip shark", "hammerhead shark", "bull shark", "whale shark", "don pedro"],
  "alaska": ["capelin", "rougheye rockfish", "lancetfish", "arctic char", "arctic greyling", "burbot", "silver salmon", "sockeye salmon", "steelhead", "chum salmon", "bigmouth sculpin", "coalfish", "humpback salmon", "atka mackerel", "yellow irish lord", "pacific herring", "dolly varden", "wolf eel", "halibut", "spiny skate", "blue lingcod", "king salmon", "pacific sleeper shark", "salmon shark", "ocean sunfish", "kraken"],
  "australia": ["black bream", "skipjack tuna", "dusky flathead", "red emperor snapper", "shortfin mako shark", "black saddled coral grouper", "coral trout", "carpet shark", "spanish mackerel", "albacore", "leafy seadragon", "port jackson shark", "barramundi", "unicorn leatherjacket", "common stargazer", "tailor", "rock flagtail", "mangrove jack", "luderick", "golden trevally", "fingermark", "john dory", "giant trevally", "smooth oreo dory", "swordfish", "queensland grouper", "spotted handfish", "tiger shark", "manta ray", "hoodwinker sunfish", "bunyip"],
  "scotland": ["european smelt", "grey trout", "powan", "chub", "twaite shad", "freshwater bream", "northern pike", "sea trout", "allis shad", "rainbow trout", "tench", "gudgeon", "three spined stickleback", "vendace", "roach", "rudd", "lamprey", "european perch", "dace", "carp", "european whitefish", "european grayling", "european eel", "common sturgeon", "bull trout", "scottish salmon", "nessie"],
  "thailand": ["pla kad thong", "bighead carp", "aligator gar", "spotted sorubim", "empurau", "rice eel", "red tail tiger catfish", "giant devil catfish", "bambusa", "tapah", "great snakehead", "yellow mystus", "wallago", "black ear catfish", "rohu", "ripsaw catfish", "malayan leaffish", "marbled sand goby", "fire eel", "giant freshwater whipray", "striped catfish", "giant pangasius", "mekong giant catfish", "juliens golden prize carp", "giant siamese", "naga"],
  "amazon": ["amazon pellona", "peacock bass", "tucunare", "corvina", "jatuarana", "redtail catfish", "tiger sorubim", "redhook myleus", "pacu", "zungaro", "curimbata", "lambari", "giant trahira", "redeye piranha", "red piranha", "speckled pavon", "freshwater barracuda", "bicuda", "arowana", "amazon puffer", "pirapitinga", "electric eel", "flatwhiskered catfish", "lau lau", "rock bacu", "payara", "cachama", "arapaima", "boiuna"]
,
  "chemical plant": ["glowfish", "raspberryfish", "wicked carp", "crystal fin", "zombifin", "flatjaw", "spotted windchaser", "glow puffball", "cthulhu carp", "nylonfish", "luminator", "telebass", "long sparker", "rotting deadfish", "phosphorite", "fireborn scales", "burned potfish", "bubblefin", "silvered amelinium", "fish-eye", "teapotfish", "anvilfish", "chupakabrafish", "slimesnail", "wheelreef", "barreltail", "toxic salmon", "anchorscale", "bottlegill", "cantrout", "uranium eel", "bootfish", "flipper sneaker", "graterfin", "mailfish", "toxic puffer", "plant waterer", "gnawfish", "rusty mutang", "biterfish", "zombie genius", "stale deadfish", "stringed guitarfish", "banjoplayer", "cuddlyfish", "bomberfish", "soccerfish", "brainfish", "sawfish", "bonebite", "gasmist swimmer", "guitarfin", "swagfish", "fingered glovefish", "round tubefish", "polish spudfish", "seahorse abomination", "ribbed bonefish", "nightmary"],
  "nuclear plant": ["Oniongill", "Rock'N'Rollkingjaw", "Rug-ball-swimmer", "Irradiatedcutfin", "Geigerfin", "Forknose", "Double Troutot", "Carrotfin", "Knifetail", "Trianglegill", "Bat-eel", "Applegill", "Sausagetail", "Bread'N'Butterjaw", "Bottlefin", "Potatofin", "Bulpgill", "Footsalmon", "Magnetfin", "Yellowsubmarinecod", "Giantbusbass", "Devil Mutanoid"]
};


function __seasonGameOrderListForLocation(locName){
  try{
    const key = String(locName||'').trim().toLowerCase();
    return SEASON_GAME_ORDER[key] || null;
  }catch(_){ return null; }
}

function __buildSeasonOrderedFishList(locName){
  const loc = String(locName||'').trim();
  const fishDefs = (getLocationsData() && getLocationsData()[loc]) ? getLocationsData()[loc] : [];
  const byName = new Map((fishDefs||[]).map(f=>[String(f.name||'').toLowerCase(), f]));

  const orderedNames = __seasonGameOrderListForLocation(loc) || [];
  const used = new Set();
  const out = [];

  // 1) In-game order list
  for(const rawName of orderedNames){
    const nm = String(rawName||'').trim();
    const hit = byName.get(canonicalizeFishName(nm));
    if(!hit){
      console.warn('[FishMetrics] Season game order fish not found in LOCATIONS', { location: loc, fish: nm });
      continue;
    }
    used.add(hit.name);
    out.push({ ...hit, location: loc });
  }

  // 2) Fallback: any fish not listed (future-proof) — append alphabetical
  const leftovers = (fishDefs||[])
    .filter(f=>f && !used.has(f.name))
    .map(f=>({ ...f, location: loc }))
    .sort((a,b)=> String(a.name).localeCompare(String(b.name)));

  return out.concat(leftovers);
}


function setupHomeButton(){
  const btn = document.getElementById('homeBtn');
  if(!btn) return;
  // avoid double-binding
  if(btn.dataset && btn.dataset.homeBound === '1') return;
  if(btn.dataset) btn.dataset.homeBound = '1';
  btn.addEventListener('click', () => {
    // Go back to landing page
    window.location.href = 'index.html';
  });
}

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
      try{ clampGuidePanelIntoView(panel); }catch(_){}
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

    // Event delegation so dynamically generated location items work (VIP/Main)
    dropdown.addEventListener('click', (e)=>{
      const btnEl = e.target && e.target.closest ? e.target.closest('button.menu-item[data-share]') : null;
      if(!btnEl || !dropdown.contains(btnEl)) return;

      e.preventDefault();
      e.stopPropagation();
      closeMenu();

      const mode = btnEl.getAttribute('data-share');
      const loc = btnEl.getAttribute('data-loc') || '';
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
  // Season mode: user enters *points*. We store a derived weight string (CANONICAL lbs) so the rest of the app
  // (which is weight-based) can reuse existing logic.
  //
  // Approach: compute a weight interval that maps to targetPts (given Math.round in calculatePoints),
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

  if(wLo > wHi){ const tmp = wLo; wLo = wHi; wHi = tmp; }

  // Clamp to fish bounds
  wLo = Math.max(fish.min, wLo);
  wHi = Math.min(fish.max, wHi);

  if(!(wHi >= wLo)) return "";

  // Start from the continuous inverse estimate but clamp into the valid interval.
  const t = ((targetPts / base) - 1);
  const ratio = Math.max(0, Math.min(1, t));
  const estLbs = fish.min + ratio * range;
  const chosenLbs = Math.min(wHi, Math.max(wLo, estLbs));

  // Helper: format with N decimals then trim trailing zeros (keeps storage neat).
  function fmtTrim(x, n){
    let s = Number(x).toFixed(n);
    s = s.replace(/\.0+$/,'').replace(/(\.\d*?)0+$/,'$1').replace(/\.$/,'');
    return s;
  }

  // Try 2..4 decimals to find the minimal representation that round-trips to targetPts.
  for(let dec=2; dec<=4; dec++){
    const s = fmtTrim(chosenLbs, dec);
    const lbs = Number.parseFloat(s);
    if(!Number.isFinite(lbs) || lbs <= 0) continue;
    if(lbs < fish.min - 1e-9 || lbs > fish.max + 1e-9) continue;
    const pts = calculatePoints(lbs, fish);
    if(pts === targetPts) return s;
  }

  // Fallback: midpoint of the valid interval, 4 decimals.
  const midLbs = (wLo + wHi) / 2;
  return fmtTrim(midLbs, 4);
}



function _displayDerivedWeight2(raw){
  // raw is stored CANONICAL lbs; show 2dp in the currently selected UI unit.
  const s = String(raw ?? '').trim();
  if(!s) return '';
  const lbs = parseStoredWeightLbs(s);
  if(!Number.isFinite(lbs)) return s;
  const v = (weightUnit === 'kgs') ? fromLbs(lbs) : lbs;
  return Number(v).toFixed(2);
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





function renderStarDistributionBar(totalCaught, star1, star2, star3, star4, star5, oos1=0, oos2=0, oos3=0, oos4=0, oos5=0){
  const bar = document.getElementById('starDistributionBar');
  const legend = document.getElementById('starDistributionLegend');
  if(!bar) return;

  const season = (typeof isSeasonMode === 'function') ? isSeasonMode() : false;

  const rangeEl = document.getElementById('starDistRange');
  if(rangeEl) rangeEl.textContent = season ? '1–5★' : '2–5★';


  // In Season mode, show 1–5★ because 1★ represents OOS fish and is meaningful there.
  // In All-time, keep a cleaner progression view by showing 2–5★ only.
  const counts = season
    ? [
        { stars: 1, count: star1||0, oos: oos1||0, cls: 'star-1' },
        { stars: 2, count: star2||0, oos: oos2||0, cls: 'star-2' },
        { stars: 3, count: star3||0, oos: oos3||0, cls: 'star-3' },
        { stars: 4, count: star4||0, oos: oos4||0, cls: 'star-4' },
        { stars: 5, count: star5||0, oos: oos5||0, cls: 'star-5' },
      ]
    : [
        { stars: 2, count: star2||0, oos: 0, cls: 'star-2' },
        { stars: 3, count: star3||0, oos: 0, cls: 'star-3' },
        { stars: 4, count: star4||0, oos: 0, cls: 'star-4' },
        { stars: 5, count: star5||0, oos: 0, cls: 'star-5' },
      ];

  const totalShown = counts.reduce((s,x)=>s+(x.count||0),0);
  if(!totalShown){
    bar.innerHTML = '';
    if(legend) legend.textContent = '';
    return;
  }

  // Denominator:
  // - Season: all fish (1–5★) so bar % aligns with KPIs.
  // - All-time: normalize within 2–5★ so the bar fills and reads as progression.
  const denom = season
    ? ((totalCaught && totalCaught > 0) ? totalCaught : totalShown)
    : totalShown;

  bar.innerHTML = '';

  // Visual helpers: minimum width (so small segments remain visible) + separators.
  const MIN_PX = 4;
  const barWidth = bar.getBoundingClientRect().width || 0;

  const nonZero = counts.filter(c=>c.count>0);
  const pctRaw = nonZero.map(c => (c.count / denom) * 100);

  // Convert to px widths, enforce a minimum px, then renormalize back to % for CSS widths.
  const pxRaw = pctRaw.map(p => (p/100) * barWidth);
  const pxAdj = pxRaw.map(px => Math.max(px, MIN_PX));
  const pxTotal = pxAdj.reduce((s,x)=>s+x,0) || 1;

  nonZero.forEach((c, i)=>{
    const el = document.createElement('div');
    el.className = `star-seg ${c.cls}` + (i ? ' with-sep' : '');
    const pctAdj = (pxAdj[i] / pxTotal) * 100;
    el.style.width = `${pctAdj}%`;
    const pctForLabel = (c.count / denom) * 100;
    const oosPart = (season && (c.oos||0)>0) ? ` • OOS: ${c.oos}` : '';
    el.title = `${c.stars}★: ${pctForLabel.toFixed(1)}% (${c.count})${oosPart}`;
    bar.appendChild(el);
  });

  if(legend){
    const rangeLabel = season ? '1–5★' : '2–5★';
    const basis = season
      ? `Based on ${denom} fish (${rangeLabel})`
      : `Based on ${totalShown} fish (${rangeLabel})`;
    legend.textContent = `${basis} • ` + counts.map(c=>{
      const pct = (c.count / denom) * 100;
      return `${c.stars}★ ${pct.toFixed(1)}% (${c.count})`;
    }).join(' • ');
  }
}
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
function initIncludeOOSDashboardToggle(){
  const el = document.getElementById("includeOOSDashboardToggle");
  if(!el) return;
  el.checked = !!includeOOSSeasonDashboard;
  el.addEventListener("change", ()=>{
    includeOOSSeasonDashboard = !!el.checked;
    try{ localStorage.setItem("includeOOSSeasonDashboard", JSON.stringify(includeOOSSeasonDashboard)); }catch(_){}
    try{ updateDashboard(); }catch(_){}
  });
}


// ---- Dashboard slicers (left panel) ----
// These slicers affect ONLY the Dashboard charts (not other tabs, not the records table).
let dashboardLocation = "__ALL__"; // "__ALL__" or a specific location
// Dashboard-only: include/exclude Legendary in KPIs + dashboard charts
let includeLegendaryDashboard = JSON.parse(localStorage.getItem("includeLegendaryDashboard") ?? "true");
let includeOOSSeasonDashboard = JSON.parse(localStorage.getItem("includeOOSSeasonDashboard") ?? "true"); // default include all

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
  const allCount = Object.values(getLocationsData() || {}).reduce((sum,arr)=>sum + (Array.isArray(arr) ? arr.length : 0),0);
  const allOpt = document.createElement("option");
  allOpt.value = "__ALL__";
  allOpt.textContent = `All Locations (${allCount})`;
  locationSelect.appendChild(allOpt);

  getLocationList().forEach(loc=>{
    const opt=document.createElement("option");
    opt.value=loc;
    opt.textContent = `${loc} (${getLocationsData()[loc].length})`;
    locationSelect.appendChild(opt);
  });

  // Total fish across all locations
  if(totalFishCountAllEl){
    totalFishCountAllEl.textContent = allCount;
  }
}
syncModeFromUrlOrStorage();
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
  const data = getLocationsData();
  const order = getLocationOrder();
  return order.filter(l=>Object.prototype.hasOwnProperty.call(data,l));
}

// Persisted records per location (and in the combined view)
const STORAGE_KEY = "fishmetrics_records_v1"; // legacy (localStorage) key used only for one-time migration
const IDB_DB_NAME = "fishmetrics";
const IDB_DB_VERSION = 3;
const IDB_STORE = "location_records";
const IDB_STORE_SEASON = "season_location_records";

const IDB_STORE_VIP = "location_records_vip";
const IDB_STORE_SEASON_VIP = "season_location_records_vip";

function isVipModeActive(){
  try { return document.documentElement.classList.contains('vip-mode'); } catch(_) { return false; }
}


function applyVipSeasonFishInsightsVisibility(){
  try{
    const hide = (typeof isVipModeActive === 'function' && isVipModeActive()) &&
                 (typeof isSeasonMode === 'function' && isSeasonMode());
    const legPanel = document.getElementById('legendaryChart')?.closest('.panel');
    const fearPanel = document.getElementById('fearsomeChart')?.closest('.panel');
    if(legPanel) legPanel.style.display = hide ? 'none' : '';
    if(fearPanel) fearPanel.style.display = hide ? 'none' : '';
  }catch(_){}
}

// Store router (Option 1: keep Main stores as-is, add VIP stores)
function getAllTimeStoreName(){
  return isVipModeActive() ? IDB_STORE_VIP : IDB_STORE;
}
function getSeasonStoreName(){
  return isVipModeActive() ? IDB_STORE_SEASON_VIP : IDB_STORE_SEASON;
}


function getLocationsData(){
  return isVipModeActive() ? LOCATIONS_VIP : LOCATIONS;
}
function getLocationOrder(){
  return isVipModeActive() ? VIP_LOCATION_ORDER : LOCATION_ORDER;
}




function syncActiveCachesToMode(){
  if (isVipModeActive()){
    recordsByLocation = recordsByLocation_vip;
    seasonRecordsByLocation = seasonRecordsByLocation_vip;
  } else {
    recordsByLocation = recordsByLocation_main;
    seasonRecordsByLocation = seasonRecordsByLocation_main;
  }
}
let recordsByLocation_main = {};
let recordsByLocation_vip = {};
let recordsByLocation = recordsByLocation_main; // active cache (points/weight truth depends on view)
// persisted to IndexedDB

let seasonRecordsByLocation_main = {};
let seasonRecordsByLocation_vip = {};
let seasonRecordsByLocation = seasonRecordsByLocation_main; // active cache
// persisted to IndexedDB

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
      // VIP stores (added in v1.5.0). Keep Main stores unchanged; VIP stores start empty.
      if (!db.objectStoreNames.contains(IDB_STORE_VIP)) {
        db.createObjectStore(IDB_STORE_VIP, { keyPath: "location" });
      }
      if (!db.objectStoreNames.contains(IDB_STORE_SEASON_VIP)) {
        db.createObjectStore(IDB_STORE_SEASON_VIP, { keyPath: "location" });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return openIdb._p;
}


async function idbReadAll(storeName){
  return new Promise((resolve, reject) => {
    try{
      const req = indexedDB.open(IDB_DB_NAME, IDB_DB_VERSION);
      req.onsuccess = () => {
        const db = req.result;
        try{
          const tx = db.transaction(storeName, "readonly");
          const store = tx.objectStore(storeName);
          const out = {};
          const cursorReq = store.openCursor();
          cursorReq.onsuccess = (e) => {
            const cursor = e.target.result;
            if(cursor){
              out[cursor.key] = cursor.value;
              cursor.continue();
            }else{
              try{ db.close(); }catch(_){}
              resolve(out);
            }
          };
          cursorReq.onerror = () => { try{db.close();}catch(_){} reject(cursorReq.error); };
        }catch(e){ try{db.close();}catch(_){} reject(e); }
      };
      req.onerror = () => reject(req.error);
    }catch(e){ reject(e); }
  });
}

async function idbReadAllRecordsOnly(storeName){
  const raw = await idbReadAll(storeName);
  const out = {};
  try{
    Object.keys(raw || {}).forEach((loc)=>{
      const v = raw[loc];
      if(v && typeof v === "object" && Object.prototype.hasOwnProperty.call(v, "records")){
        out[loc] = v.records || {};
      }else{
        // already unwrapped
        out[loc] = v || {};
      }
    });
  }catch(_){}
  return out;
}



async function idbLoadAllRecords(){
  const db = await openIdb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(getAllTimeStoreName(), "readonly");
    const store = tx.objectStore(getAllTimeStoreName());
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
    const tx = db.transaction(getSeasonStoreName(), "readonly");
    const store = tx.objectStore(getSeasonStoreName());
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
    const tx = db.transaction(getSeasonStoreName(), "readwrite");
    const store = tx.objectStore(getSeasonStoreName());
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
    const tx = db.transaction(getAllTimeStoreName(), "readwrite");
    const store = tx.objectStore(getAllTimeStoreName());
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
// Save records to a specific store (used by unified restore). Does NOT depend on current mode.
async function idbSaveAllRecordsToStore(storeName, records){
  const db = await openIdb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);
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

async function idbSaveAllSeasonRecordsToStore(storeName, records){
  const db = await openIdb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);
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
  // VIP hard-isolation: never auto-import legacy (Main) localStorage into VIP.
  if (isVipModeActive()) {
    return {};
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
  // VIP hard-isolation: never auto-import legacy (Main) localStorage into VIP.
  if (isVipModeActive()) {
    return {};
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
  // STORED weights are canonical lbs strings.
  const s = String(rawStr ?? '').trim();
  if(!s) return NaN;
  let w = parseStoredWeightLbs(s);
  if(Number.isNaN(w) || !fish) return w;
  // Clamp for safety (should already be within bounds).
  if(w < fish.min) w = fish.min;
  if(w > fish.max) w = fish.max;
  return w;
}


function parseUserWeightToLbs(raw){
  // USER INPUT parser: interpret in the currently selected UI unit and return lbs.
  const v = Number.parseFloat(raw);
  if(raw === "" || Number.isNaN(v) || v <= 0) return NaN;
  return (weightUnit === 'kgs') ? toLbs(v) : v;
}

function parseStoredWeightLbs(raw){
  // STORED VALUE parser: stored weights are ALWAYS lbs.
  const v = Number.parseFloat(raw);
  if(raw === "" || Number.isNaN(v) || v <= 0) return NaN;
  return v;
}

// Trim trailing zeros/dot while keeping a reasonable max precision.
function _fmtTrimFixed(x, n){
  let s = Number(x).toFixed(n);
  s = s.replace(/\.0+$/,'').replace(/(\.\d*?)0+$/,'$1').replace(/\.$/,'');
  return s;
}

// Display helper for text (may include locale formatting).
function displayWeightFromStored(raw){
  const lbs = parseStoredWeightLbs(raw);
  if(!Number.isFinite(lbs)) return raw;
  if(weightUnit === 'kgs'){
    return fromLbs(lbs).toLocaleString(undefined, { maximumFractionDigits: 2 });
  }
  return String(lbs);
}

// Display helper specifically for <input type="number"> values (no commas).
function displayWeightFromStoredForInput(raw, opts = {}){
  const lbs = parseStoredWeightLbs(raw);
  if(!Number.isFinite(lbs)) return String(raw ?? "");
  const dec = (opts && Number.isFinite(opts.decimals)) ? opts.decimals : 2;
  const v = (weightUnit === 'kgs') ? fromLbs(lbs) : lbs;
  return _fmtTrimFixed(v, dec);
}

function formatLbsForStorage(lbs, opts = {}){
  const dec = (opts && Number.isFinite(opts.decimals)) ? opts.decimals : 2;
  if(!Number.isFinite(Number(lbs)) || Number(lbs) <= 0) return "";
  return _fmtTrimFixed(Number(lbs), dec);
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



/* === PB update policy (Season -> All-time) ===
   localStorage key: fm_pb_update_policy = 'always' | 'never' | (unset => ask each time)
*/
function getPbUpdatePolicy(){
  try{
    const p = localStorage.getItem('fm_pb_update_policy');
    return (p === 'always' || p === 'never') ? p : null;
  }catch(_){ return null; }
}
function setPbUpdatePolicy(policy){
  try{
    if(policy === 'always' || policy === 'never'){
      localStorage.setItem('fm_pb_update_policy', policy);
    }else{
      localStorage.removeItem('fm_pb_update_policy');
    }
  }catch(_){}
}

/* === Season-imported PB precision handling (All-time) ===
   Fix rare cases where Season-derived PBs produce weights with >2 decimals
   (e.g., 0.375). All-time manual entry remains 2dp, but Season-imported
   PBs can retain 3dp so points/stars match the Season-derived PB.

   Storage: fish-level flags in localStorage (fish names are globally unique
   per game). Badge shows only when the flag is true AND the stored PB has 3dp.
*/

const FM_PB_IMPORTED_KEY = 'fm_pb_imported_from_season_fish';

function _loadPbImportedMap(){
  try{
    const raw = localStorage.getItem(FM_PB_IMPORTED_KEY);
    const obj = raw ? JSON.parse(raw) : null;
    return (obj && typeof obj === 'object') ? obj : {};
  }catch(_){ return {}; }
}

function _savePbImportedMap(map){
  try{ localStorage.setItem(FM_PB_IMPORTED_KEY, JSON.stringify(map || {})); }catch(_){ }
}

function isPbImportedFromSeason(fishName){
  const m = _loadPbImportedMap();
  return !!m?.[fishName];
}

function setPbImportedFromSeason(fishName, value){
  try{
    const m = _loadPbImportedMap();
    if(value) m[fishName] = true;
    else delete m[fishName];
    _savePbImportedMap(m);
  }catch(_){ }
}

function _decimalPlaces(str){
  const s = String(str ?? '').trim();
  const i = s.indexOf('.');
  return (i === -1) ? 0 : Math.max(0, s.length - i - 1);
}

function _isSmallFishByDisplayWeight(weightStr){
  const n = parseFloat(String(weightStr ?? '').trim());
  if(Number.isNaN(n)) return false;
  return n > 0 && n < 1;
}

function _shouldFlagSeasonImportedPb(fish, derivedWeightStr){
  // Flag if the Season-derived weight has >2 decimals. (Manual All-time entry remains 2dp.)
  const dp = _decimalPlaces(derivedWeightStr);
  return dp > 2;
}

function _hasThreeDp(str){
  // Historically named for 3dp; now means "has >2 decimals" for Season-imported PB precision.
  return _decimalPlaces(str) > 2;
}

function syncPbPolicyUI(){
  const policy = getPbUpdatePolicy(); // 'always' | 'never' | null (ask)

  const prefAsk = document.getElementById('prefPbAsk');
  const prefAlways = document.getElementById('prefPbAlways');
  const prefNever  = document.getElementById('prefPbNever');

  const modalAsk = document.getElementById('pbModalAsk');
  const modalAlways = document.getElementById('pbModalAlways');
  const modalNever  = document.getElementById('pbModalNever');

  if(prefAsk && prefAlways && prefNever){
    prefAsk.checked = !policy;
    prefAlways.checked = policy === 'always';
    prefNever.checked  = policy === 'never';
  }
  if(modalAsk && modalAlways && modalNever){
    modalAsk.checked = !policy;
    modalAlways.checked = policy === 'always';
    modalNever.checked  = policy === 'never';
  }
}
function initPbPolicyPreferences(){
  const prefAsk    = document.getElementById('prefPbAsk');
  const prefAlways = document.getElementById('prefPbAlways');
  const prefNever  = document.getElementById('prefPbNever');
  if(!prefAsk || !prefAlways || !prefNever) return;

  // initial sync
  syncPbPolicyUI();

  // radio change => persist + sync everywhere
  [prefAsk, prefAlways, prefNever].forEach(r=>{
    r.addEventListener('change', ()=>{
      if(prefAsk && prefAsk.checked) setPbUpdatePolicy(null);
      else if(prefAlways.checked) setPbUpdatePolicy('always');
      else if(prefNever.checked) setPbUpdatePolicy('never');
      else setPbUpdatePolicy(null);
      syncPbPolicyUI();
    });
  });
}
document.addEventListener('DOMContentLoaded', initPbPolicyPreferences);

function confirmCareerPbUpdate(opts){
  // opts: {fishName, location, oldPts, newPts, unit, onYes, onNo}
  const policy = getPbUpdatePolicy();
  if(policy === 'always'){
    opts && opts.onYes && opts.onYes();
    return;
  }
  if(policy === 'never'){
    opts && opts.onNo && opts.onNo();
    return;
  }
const backdrop = document.getElementById('pbConfirmBackdrop');
  const body = document.getElementById('pbConfirmBody');
  const yes = document.getElementById('pbConfirmYes');
  const no = document.getElementById('pbConfirmNo');
  const always = document.getElementById('pbModalAlways');
  const never = document.getElementById('pbModalNever');

function updatePbModalActionState(){
  try{
    // If "Never update PB" is selected, disable the Update PB action.
    // If "Always update PB" is selected, disable the "Keep season only" action.
    const alwaysEl = document.getElementById('pbModalAlways');
    const neverEl = document.getElementById('pbModalNever');
    const updateBtn = document.getElementById('pbConfirmYes');
    const keepBtn = document.getElementById('pbConfirmNo');

    if(!updateBtn || !keepBtn) return;

    const neverSelected = !!(neverEl && neverEl.checked);
    const alwaysSelected = !!(alwaysEl && alwaysEl.checked);

    updateBtn.disabled = neverSelected;
    keepBtn.disabled = alwaysSelected;

    updateBtn.classList.toggle('disabled', neverSelected);
    keepBtn.classList.toggle('disabled', alwaysSelected);

    if(neverSelected){
      updateBtn.title = "Disabled because 'Never update PB' is selected.";
    }else{
      updateBtn.title = "";
    }
    if(alwaysSelected){
      keepBtn.title = "Disabled because 'Always update PB' is selected.";
    }else{
      keepBtn.title = "";
    }

    if(updateBtn.disabled && document.activeElement === updateBtn){
      keepBtn.focus();
    }
    if(keepBtn.disabled && document.activeElement === keepBtn){
      if(!updateBtn.disabled) updateBtn.focus();
    }
  }catch(_){}
}

// Wire modal radio changes to keep the action button in sync.
try{
  const askEl = document.getElementById('pbModalAsk');
  const alwaysEl = document.getElementById('pbModalAlways');
  const neverEl = document.getElementById('pbModalNever');
  [askEl, alwaysEl, neverEl].forEach(el=>{
    if(el) el.addEventListener('change', updatePbModalActionState);
  });
}catch(_){}

// Initial state when modal opens
updatePbModalActionState();

  if(!backdrop || !body || !yes || !no || !always || !never){
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

  // Sync modal radios to stored preference
  syncPbPolicyUI();

  yes.onclick = () => {
    if(yes && yes.disabled) return;

    try{
      const ask = document.getElementById('pbModalAsk');
      if(ask && ask.checked) setPbUpdatePolicy(null);
      else if(always.checked) setPbUpdatePolicy('always');
      else if(never.checked) setPbUpdatePolicy('never');
      else setPbUpdatePolicy(null);
      syncPbPolicyUI();
    }catch(_){ }

    try{
      if(always.checked){
        localStorage.setItem('fm_auto_update_pb_from_season', "true");
        // If Preferences toggle exists, sync it immediately
        const prefCb = document.getElementById('prefPbAlways');
        if(prefCb) prefCb.checked = true;
      }
    }catch(_){ }
    // In case the Preferences UI mounts later, ensure it syncs
    try{ if(typeof initPreferences === 'function') initPreferences(); }catch(_){ }
    cleanup();
    opts && opts.onYes && opts.onYes();
  };
  no.onclick = () => {
    if(no && no.disabled) return;

    try{
      const ask = document.getElementById('pbModalAsk');
      if(ask && ask.checked) setPbUpdatePolicy(null);
      else if(never.checked) setPbUpdatePolicy('never');
      else if(always.checked) setPbUpdatePolicy('always');
      else setPbUpdatePolicy(null);
      syncPbPolicyUI();
    }catch(_){ }

    cleanup();
    opts && opts.onNo && opts.onNo();
  };
}

function isSeasonMode(){
  return document.body.classList.contains('season-active');
}

function getStoredWeight(loc, fishName){
  const store = isSeasonMode() ? seasonRecordsByLocation : recordsByLocation;
  const key = canonicalizeFishName(fishName);
  return store?.[loc]?.[key] ?? "";
}

function setCareerStoredWeight(loc, fishName, value){
  const key = canonicalizeFishName(fishName);
  if(!recordsByLocation[loc]) recordsByLocation[loc] = {};
  if(value === "" || value == null){
    delete recordsByLocation[loc][key];
  }else{
    recordsByLocation[loc][key] = value;
  }
  saveRecordsToStorage();
}

function setStoredWeight(loc, fishName, value){
  const store = isSeasonMode() ? seasonRecordsByLocation : recordsByLocation;
  const key = canonicalizeFishName(fishName);
  if(!store[loc]) store[loc] = {};
  if(value === "" || value == null){
    delete store[loc][key];
  }else{
    store[loc][key] = value;
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

    // Validation / parse weight
    const inp = weightInp || row.querySelector("input");
    if(!inp) return;

    // Important: records are stored canonically in lbs.
    // When the user is NOT actively editing, compute points/stars from the stored lbs value
    // (not from the displayed unit string), so toggling lbs/kgs never changes points.
    const isEditing = row.classList.contains('editing') || (document.activeElement === inp);

    let w = NaN;

    if(!isEditing){
      const storedRaw = getStoredWeight(fish.location, fish.name);
      const storedLbs = parseStoredWeightLbs(String(storedRaw ?? ''));
      if(Number.isNaN(storedLbs) || storedLbs <= 0) return;
      w = storedLbs;
    }else{
      // All-time: normally allow up to 2dp. For rare Season-imported PBs, allow up to 3dp+
      // so points/stars can be computed from the precise derived weight.
      let allow3dpHere = false;
      try{
        allow3dpHere = (!isSeasonMode || !isSeasonMode()) && isPbImportedFromSeason(fish?.name) && _decimalPlaces(inp.value) > 2;
      }catch(_){ allow3dpHere = false; }
      const rx = allow3dpHere ? /^(\d*(\.\d{0,4})?)?$/ : /^(\d*(\.\d{0,2})?)?$/;
      if(!rx.test(inp.value)){
        inp.classList.add("invalid");
        return;
      }
      const rawStr = String(inp.value ?? '').trim();
      const w0 = parseUserWeightToLbs(rawStr);
      if(Number.isNaN(w0) || w0 <= 0){
        return;
      }
      w = w0;

      if((w < fish.min || w > fish.max) && !(weightUnit === 'kgs' && tinyFishKgAcceptsDisplayed(rawStr, fish))){
        inp.classList.add("outofrange");
        return;
      }

      if(weightUnit === 'kgs' && tinyFishKgAcceptsDisplayed(rawStr, fish)){
        if(w < fish.min) w = fish.min;
        if(w > fish.max) w = fish.max;
      }
    }

    // Ensure stored lbs stays within bounds
    if(!Number.isFinite(w) || w < fish.min || w > fish.max) return;

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

	 // Listing order is UI-only.
	 // - Career/all-time: alphabetical within category (fast scanning)
	 // - Season: in-game order (per location), with safe fallbacks
	 if(seasonMode){
	  if(isAll){
	    currentFish = [];
	    getLocationList().forEach(loc=>{
	      currentFish = currentFish.concat(__buildSeasonOrderedFishList(loc));
	    });
	  }else{
	    currentFish = __buildSeasonOrderedFishList(selected);
	  }
	 }else{
	  if(isAll){
	   currentFish = getLocationList().flatMap(loc=>
	     getLocationsData()[loc].map(f=>({ ...f, location: loc }))
	   ).sort((a,b)=>{
	     const ra=CATEGORY_RANK[a.category] ?? 999;
	     const rb=CATEGORY_RANK[b.category] ?? 999;
	     if(ra!==rb) return ra-rb;
	     const la = (LOCATION_RANK[a.location] ?? 999) - (LOCATION_RANK[b.location] ?? 999);
	     if(la!==0) return la;
	     return a.name.localeCompare(b.name);
	   });
	  }else{
	   currentFish=[...getLocationsData()[selected]].map(f=>({ ...f, location: selected })).sort((a,b)=>{
	     const ra=CATEGORY_RANK[a.category] ?? 999;
	     const rb=CATEGORY_RANK[b.category] ?? 999;
	     if(ra!==rb) return ra-rb;
	     return a.name.localeCompare(b.name);
	   });
	  }
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
      const lbs = parseStoredWeightLbs(String(storedW));
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
        const careerKey = canonicalizeFishName(f.name);
        const careerRaw = (recordsByLocation?.[f.location]?.[careerKey] ?? "");
        const careerLbs = parseStoredWeightLbs(String(careerRaw||""));
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
              try{
                if(_shouldFlagSeasonImportedPb(f, wStr)){
                  setPbImportedFromSeason(f.name, true);
                }
              }catch(_){ }
              setCareerStoredWeight(f.location, f.name, wStr);
              try{ if(typeof refreshUI === 'function') refreshUI(); }catch(_){ }
              inlineErr.textContent = "All-time PB! Updated.";
              inlineErr.classList.add("show","success");
              setTimeout(()=>{ inlineErr.classList.remove("success"); if(inlineErr.textContent === "All-time PB! Updated."){ inlineErr.textContent=""; inlineErr.classList.remove("show"); } }, 1800);
            },
            onNo: () => {
              inlineErr.textContent = "All time PB not updated!";
              inlineErr.classList.add("show");
              setTimeout(()=>{ if(inlineErr.textContent === "All time PB not updated!"){ inlineErr.textContent=""; inlineErr.classList.remove("show"); } }, 1800);
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

    // Allow 3dp display + correct recompute only for Season-imported PBs (rare small fish edge case).
    const storedCareerW = getStoredWeight(f.location, f.name);
    let allow3dp = false;
    try{
      allow3dp = (!seasonMode) && isPbImportedFromSeason(f.name) && _hasThreeDp(storedCareerW);
    }catch(_){ allow3dp = false; }

    // Set step to match allowed precision (purely UX)
    i.step = allow3dp ? (_decimalPlaces(storedCareerW) >= 4 ? "0.0001" : "0.001") : "0.01";
    i.value = allow3dp
      ? displayWeightFromStoredForInput(storedCareerW ?? "", { decimals: 3 })
      : clampTwoDecimals(displayWeightFromStoredForInput(storedCareerW ?? "", { decimals: 2 }));

    // Add a badge next to the fish name in All-time view for these special PBs
    try{
      if(allow3dp){
        const fishTd = r.children && r.children[2];
        if(fishTd){
          const b = document.createElement('span');
          b.className = 'pb-import-badge';
          b.textContent = 'Imported from Season';
          fishTd.appendChild(b);
        }
      }
    }catch(_){ }

    const _initialCareerW = String(i.value ?? "");
    let _pendingClearPbImportFlag = false;
    i.addEventListener('focus', ()=>{ r.classList.add('editing'); });

    function commitWeight(){
      if(suppress) return;
      let rawStr = String(i.value ?? "").trim();

      // If this is a Season-imported 3dp PB and the user hasn't actually changed it,
      // keep the 3dp value (do NOT clamp down).
      const keep3dp = !!(allow3dp && rawStr === _initialCareerW && _hasThreeDp(rawStr));
      const raw = keep3dp ? rawStr : clampTwoDecimals(rawStr);
      if(!keep3dp && i.value !== raw){
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
      // Store canonically in lbs
      if(keep3dp){
        setStoredWeight(f.location, f.name, String(storedCareerW ?? raw));
      }else{
        const storedLbsStr = formatLbsForStorage(enteredLbs, { decimals: 2 });
        setStoredWeight(f.location, f.name, storedLbsStr);
      }

      // Clear the Season-import badge/flag ONLY after a successful edit or when the PB becomes 2dp.
      try{
        if(_pendingClearPbImportFlag || (_decimalPlaces(raw) <= 2)){
          if(isPbImportedFromSeason(f.name)) setPbImportedFromSeason(f.name, false);
        }
      }catch(_){ }
      recomputeFromDOM();
    }

    i.addEventListener("blur", commitWeight);
    i.addEventListener('blur', ()=>{ r.classList.remove('editing'); });
    i.addEventListener("input", ()=>{
      if(suppress) return;
      // If this is an imported 3dp PB, allow it to sit unchanged without clamping.
      // As soon as the user edits it, revert to 2dp behavior (matching the game) and clear flag on save.
      if(allow3dp && String(i.value ?? '') === _initialCareerW){
        recomputeFromDOM();
        return;
      }
      if(allow3dp){
        allow3dp = false;
        _pendingClearPbImportFlag = true;
        // Also remove badge immediately for clarity
        try{
          const bd = r.querySelector('.pb-import-badge');
          if(bd) bd.remove();
        }catch(_){ }
      }
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
  const { includeLegendary = true, includeOOS = true } = opts;
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

    for (const fish of getLocationsData()[loc]){
      if(!includeLegendary && fish.category === 'Legendary') continue;
      if((typeof isSeasonMode === 'function' && isSeasonMode()) && !includeOOS && !isFishInSeason(fish.name)) continue;
      const raw = recs?.[loc]?.[canonicalizeFishName(fish.name)];
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
  const { includeLegendary = true, includeOOS = true } = opts;
  const recs = records || recordsByLocation || {};
  const locsAll = getLocationList();
  const locs = (dashboardLocation && dashboardLocation !== '__ALL__' && getLocationsData()[dashboardLocation])
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

    for (const fish of (getLocationsData()[loc] || [])){
      if(!dashboardCategories.has(fish.category)) continue;
      if(!includeLegendary && fish.category === 'Legendary') continue;
      if((typeof isSeasonMode === 'function' && isSeasonMode()) && !includeOOS && !isFishInSeason(fish.name)) continue;
      const raw = recs?.[loc]?.[canonicalizeFishName(fish.name)];
      let w = parseStoredWeightLbs(raw);
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
    // effectiveRecords should remain canonical lbs like storage
    merged[loc][canonicalizeFishName(fish.name)] = formatLbsForStorage(w, { decimals: 2 });
  });

  return merged;
}


function updateSeasonUncaughtCount(){
  try{
    if(!(typeof isSeasonMode === 'function' && isSeasonMode())) return;
    const el = document.getElementById('seasonUncaughtCount');
    if(!el) return;

    // Use active dataset (Main vs VIP) for totals + validation.
    const activeLocs = (typeof getLocationsData === 'function') ? getLocationsData() : (LOCATIONS || {});
    const total = Object.values(activeLocs || {}).reduce((sum, arr)=>sum + (arr ? arr.length : 0), 0) || 200;

    // Count caught fish entries this season (by location + fish)
    const caught = new Set();
    for(const loc of Object.keys(seasonRecordsByLocation || {})){
      const recs = seasonRecordsByLocation[loc] || {};
      const fishLookup = new Map(((activeLocs && activeLocs[loc]) ? activeLocs[loc] : []).map(f=>[String(f.name).toLowerCase(), f]));
      for(const fishName of Object.keys(recs)){
        const f = fishLookup.get(String(fishName).toLowerCase());
        if(!f) continue;
        const w = parseStoredWeightLbs(recs[fishName]);
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

    // Use active dataset (Main vs VIP) for totals + validation.
    const activeLocs = (typeof getLocationsData === 'function') ? getLocationsData() : (LOCATIONS || {});
    const total = Object.values(activeLocs || {}).reduce((sum, arr)=>sum + (arr ? arr.length : 0), 0) || 200;

    // Count caught fish entries this season (by location + fish)
    const caught = new Set();
    for(const loc of Object.keys(seasonRecordsByLocation || {})){
      const recs = seasonRecordsByLocation[loc] || {};
      const fishLookup = new Map(((activeLocs && activeLocs[loc]) ? activeLocs[loc] : []).map(f=>[String(f.name).toLowerCase(), f]));
      for(const fishName of Object.keys(recs)){
        const f = fishLookup.get(String(fishName).toLowerCase());
        if(!f) continue;
        const w = parseStoredWeightLbs(recs[fishName]);
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

function updateSeasonBannerHeader(){
  try{
    const banner = document.getElementById('seasonBanner');
    const titleEl = document.getElementById('seasonBannerTitle');
    if(!banner || !titleEl) return;

    // Title: "Season Active — Month YYYY" (always)
    let monthLabel = "";
    try{
      monthLabel = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date());
    }catch(_){ monthLabel = ""; }
    titleEl.textContent = monthLabel ? `Season Active — ${monthLabel}` : "Season Active";

    // Subtitle: distinguish VIP vs Main (only)
    const subEl = banner.querySelector('.season-banner-sub');
    if(subEl){
      const usingVipDataset = (typeof getLocationsData === 'function') && (getLocationsData() === LOCATIONS_VIP);
      subEl.textContent = usingVipDataset
        ? "Monthly CotD VIP Season • All-time stats unaffected"
        : "Monthly CotD Season • All-time stats unaffected";
    }
  }catch(_){}
}

function updateDashboard(){
  const effectiveRecords = getEffectiveRecords();
  const activeView = document.querySelector('.tab-view.active')?.id;
  const { byLoc: byLocAll, allFish } = computeAggregates(effectiveRecords, { includeOOS: includeOOSSeasonDashboard });
  const { byLoc: byLocKPI } = computeAggregates(effectiveRecords, { includeLegendary: includeLegendaryDashboard, includeOOS: includeOOSSeasonDashboard });
  const locs = getLocationList();
  const byLoc = byLocAll;

  // Dashboard charts use slicers (location + rarity). Other tabs ignore slicers.
  const { byLoc: dashByLoc, locs: dashLocs } = computeDashboardAggregates(effectiveRecords, { includeLegendary: includeLegendaryDashboard, includeOOS: includeOOSSeasonDashboard });

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
  const star1 = locs.reduce((s,l)=>s+((byLocKPI[l]?.starCounts||[0,0,0,0,0])[0]||0),0);
  const star2 = locs.reduce((s,l)=>s+((byLocKPI[l]?.starCounts||[0,0,0,0,0])[1]||0),0);
  const star3 = locs.reduce((s,l)=>s+((byLocKPI[l]?.starCounts||[0,0,0,0,0])[2]||0),0);
  const star4 = locs.reduce((s,l)=>s+((byLocKPI[l]?.starCounts||[0,0,0,0,0])[3]||0),0);
  const star5 = locs.reduce((s,l)=>s+((byLocKPI[l]?.starCounts||[0,0,0,0,0])[4]||0),0);

// OOS breakdown for Star Distribution tooltips (Season view only).
let oosStar1 = 0, oosStar2 = 0, oosStar3 = 0, oosStar4 = 0, oosStar5 = 0;
try{
  if(typeof isSeasonMode === 'function' && isSeasonMode() && includeOOSSeasonDashboard){
    for(const loc of (locs || [])){
      const recs = (seasonRecordsByLocation && seasonRecordsByLocation[loc]) ? seasonRecordsByLocation[loc] : null;
      if(!recs) continue;
      for(const fishName of Object.keys(recs)){
        if(isFishInSeason(fishName)) continue;
        const f = getFishObj(loc, fishName);
        if(!f) continue;
        if(!includeLegendaryDashboard && f.category === 'Legendary') continue;
        const raw = String(recs[fishName] ?? '').trim();
        if(!raw) continue;
        const lbs = parseStoredWeightLbs(raw);
        if(!Number.isFinite(lbs)) continue;
        const rawPts = calculatePointsRaw(lbs, f);
        const st = calculateStars(f.category, rawPts);
        if(st===1) oosStar1++;
        else if(st===2) oosStar2++;
        else if(st===3) oosStar3++;
        else if(st===4) oosStar4++;
        else if(st===5) oosStar5++;
      }
    }
  }
}catch(_){/*no-op*/}


  if(totalPointsEl) totalPointsEl.textContent = fmtNumber(totalPoints);

  const avg = totalCaught ? (totalStars / totalCaught) : 0;
  if(avgStarsEl){
    const rounded = Math.ceil(avg);
    const full = Math.min(rounded,5);
    const half = false;
    const starsTxt = '★'.repeat(full) + (half ? '☆' : '') + '☆'.repeat(Math.max(0, 5 - full - (half?1:0)));
    avgStarsEl.textContent = starsTxt;
  }
  if(pct4El) pct4El.textContent = totalCaught ? `${(100*(star4)/totalCaught).toFixed(1)}%` : '0.0%';
  if(pct5El) pct5El.textContent = totalCaught ? `${(100*star5/totalCaught).toFixed(1)}%` : '0.0%';

  try{ renderKpiBadges({ totalPoints, pct4: (totalCaught ? (100*(star4)/totalCaught) : 0), pct5: (totalCaught ? (100*star5/totalCaught) : 0) }); }catch(_){}


  // Star distribution (exact 2★–5★, normalized within 2–5★)
  try{
    renderStarDistributionBar(totalCaught, star1, star2, star3, star4, star5, oosStar1, oosStar2, oosStar3, oosStar4, oosStar5);
  }catch(_){/* no-op */}

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
  const locationsDataForBestiary = (typeof getLocationsData === 'function')
    ? getLocationsData()
    : (isVipModeActive && isVipModeActive() && (typeof LOCATIONS_VIP !== 'undefined') ? LOCATIONS_VIP : (typeof LOCATIONS !== 'undefined' ? LOCATIONS : {}));

  const totalFish = Object.values(locationsDataForBestiary || {}).reduce((sum,arr)=>sum+(Array.isArray(arr)?arr.length:0),0);

  // Count only fish that exist in the active bestiary (Main vs VIP) to avoid drift across releases.
  const allowedKeys = new Set();
  try{
    for(const loc of Object.keys(locationsDataForBestiary || {})){
      const arr = locationsDataForBestiary[loc] || [];
      for(const f of (Array.isArray(arr)?arr:[])){
        const nm = (f && f.name != null) ? String(f.name) : '';
        if(!nm) continue;
        allowedKeys.add(`${loc}|${canonicalizeFishName(nm)}`);
      }
    }
  }catch(_){}

  const caughtUnique = new Set(
    (allFish || [])
      .map(f=>`${f.location}|${canonicalizeFishName(f.name)}`)
      .filter(k=>allowedKeys.size ? allowedKeys.has(k) : true)
  ).size;

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
      (getLocationsData()[loc]||[]).forEach(f=>{
        if(seasonNow && f.category !== 'Legendary' && !isFishInSeason(f.name, new Date())) return;
        const raw = effectiveRecords?.[loc]?.[f.name];
        const w = parseStoredWeightLbs(raw);
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
        for (const fish of (getLocationsData()[loc] || [])){
          if(fish.category !== category) continue;
          if(seasonNow && fish.category !== 'Legendary' && !isFishInSeason(fish.name, new Date())) continue;
          // Use effective (live) records so dumbbells update even before Enter/blur commits
          const raw = effectiveRecords?.[loc]?.[canonicalizeFishName(fish.name)];
          let w = parseStoredWeightLbs(raw);
          if(!Number.isFinite(w)) continue;

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
      const legFish = (getLocationsData()[loc] || []).filter(f=>f.category === 'Legendary');
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
    const __isVipFI = (typeof isVipModeActive==='function') ? isVipModeActive() : false;
    const __isVipAlltimeFI = __isVipFI && !document.body.classList.contains('season-active');
    const fearsomeNames = __isVipAlltimeFI
      ? ['devil mutanoid','giant busbass','polish spudfish','ribbed bonefish','round tubefish','seahorse abomination']
      : ['whale shark','ocean sunfish','hoodwinker sunfish','manta ray'];
    const fearMap = new Map(allFish.map(f=>[f.name.toLowerCase(), {points:f.points, stars:f.stars}]));
    const fearList = fearsomeNames.map(n=>{
      const rec = fearMap.get(n);
      const val = rec ? rec.points : 0;
      return { name: n, value: val };
    });
    if(fearsomeChart){
      try{
        const __t = document.getElementById('fearsomeChart')?.closest('.panel')?.querySelector('.panel-title');
        if(__t) __t.textContent = (__isVipAlltimeFI ? 'The Epics' : 'The Fearsome Four');
      }catch(_){ }

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
        try{
          const __t = document.getElementById('eliteEpicsChart')?.closest('.panel')?.querySelector('.panel-title');
          if(__t) __t.textContent = (__isVipAlltimeFI ? 'The Top Rares' : 'The Elite Epics');
        }catch(_){ }
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
      const __isVipFI = (typeof isVipModeActive==='function') ? isVipModeActive() : false;
      const __isVipAlltimeFI = __isVipFI && !document.body.classList.contains('season-active');
      const eliteNames = __isVipAlltimeFI
        ? ['magnetfin','yellow submarinecod','stringed guitarfish','fingered glovefish','stale deadfish','bomberfish']
        : ['goldfish','bull shark','king salmon','tiger shark','bull trout','scottish salmon'];
      const eliteMap = new Map(allFish.map(f=>[f.name.toLowerCase(), {points:f.points, stars:f.stars}]));
      const eliteList = eliteNames.map(n=>{
        const rec = eliteMap.get(n);
        const val = rec ? rec.points : 0;
        return { name: n, value: val };
      });
      if(eliteEpicsChart){
        try{
          const __t = document.getElementById('eliteEpicsChart')?.closest('.panel')?.querySelector('.panel-title');
          if(__t) __t.textContent = (__isVipAlltimeFI ? 'The Top Rares' : 'The Elite Epics');
        }catch(_){ }
        // Career mode: restore default auto-skip behavior.
        try{
          const y = eliteEpicsChart.options?.scales?.y;
          if(y && y.ticks){
            y.ticks.autoSkip = true;
          }
        }catch(_){ }
        eliteEpicsChart.data.labels = eliteList.map(f => {
          const nm = String(f.name||'');
          const label = (__isVipAlltimeFI && nm.toLowerCase()==='fingered glovefish') ? 'Fingered Glovefish' : toTitleCase(nm);
          return __wrapWordsFearsome(label, 10);
        });
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





// Preserve independent scroll positions for Log Records between Career(All-time) and Season modes (UI-only).
let __FM_SCROLL_POS = { career: 0, season: 0 };
function __fmGetRecordsScrollEl(){
  try{ return document.querySelector('#recordsView .table-scroll'); }catch(_){ return null; }
}
function __fmSaveRecordsScrollPos(mode){
  try{
    const el = __fmGetRecordsScrollEl();
    if(!el) return;
    const m = (mode === 'season') ? 'season' : 'career';
    __FM_SCROLL_POS[m] = el.scrollTop || 0;
  }catch(_){}
}
function __fmRestoreRecordsScrollPos(mode){
  try{
    const el = __fmGetRecordsScrollEl();
    if(!el) return;
    const m = (mode === 'season') ? 'season' : 'career';
    const top = __FM_SCROLL_POS[m] || 0;
    // Delay to allow table rebuild/layout.
    requestAnimationFrame(()=>requestAnimationFrame(()=>{ try{ el.scrollTop = top; }catch(_){ } }));
  }catch(_){}
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
    // Save Log Records scroll position for the mode we're leaving.
    const __prevMode = document.body.classList.contains('season-active') ? 'season' : 'career';
    __fmSaveRecordsScrollPos(__prevMode);
    const m = (mode === "season") ? "season" : "career";
    localStorage.setItem('fm_mode', m);

    careerBtn.classList.toggle('active', m === "career");
    seasonBtn.classList.toggle('active', m === "season");
    document.body.classList.toggle('season-active', m === "season");
    try{ applyVipSeasonFishInsightsVisibility(); }catch(_){ }
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
        if(eliteT) eliteT.innerHTML = 'Commons – Key Targets<span class="panel-subtitle">Lowest-scoring commons</span>';
        if(shortT) shortT.innerHTML = 'Rares – Key Targets<span class="panel-subtitle">Lowest-scoring rares</span>';
        if(invT) invT.innerHTML = 'Epics – Key Targets<span class="panel-subtitle">Lowest-scoring epics</span>';
      }else{
        if(eliteT) eliteT.textContent = "The Elite Epics";
        if(shortT) shortT.textContent = "The Short-Lived Specials";
        if(invT) invT.textContent = "The Invisibles";
      }
    }catch(_){}


    if(banner){
      banner.classList.toggle('hidden', m !== "season");
      if(m === "season" && titleEl){
        // Keep banner heading consistent; include month/year in the heading.
        let monthLabel = "";
        try{
          const sid = (typeof getCurrentSeasonId === 'function') ? getCurrentSeasonId() : null;
          const stored = (function(){ try{ return localStorage.getItem('fm_season_month'); }catch(_){ return null; } })();
          const ym = String(stored || sid || "");
          const parts = ym.split('-');
          if(parts.length>=2){
            const yy = Number(parts[0]);
            const mm = Number(parts[1]);
            if(Number.isFinite(yy) && Number.isFinite(mm)){
              const dt = new Date(yy, Math.max(0, mm-1), 1);
              monthLabel = dt.toLocaleString(undefined, { month: 'long', year: 'numeric' });
            }
          }
        }catch(_){ monthLabel = ""; }

        titleEl.textContent = monthLabel ? `Season Active — ${monthLabel}` : "Season Active";
        try{
          const subEl = banner.querySelector(".season-banner-sub");
          if(subEl){
            const usingVipDataset = getLocationsData() === LOCATIONS_VIP;
            subEl.textContent = usingVipDataset
              ? "Monthly CotD VIP Season • All-time stats unaffected"
              : "Monthly CotD Season • All-time stats unaffected";
          }
        }catch(_){ }
      }
    }

    // Rebuild the Log Records table so inputs switch between weight-entry and points-entry.
    try{ if(typeof renderTable === 'function') renderTable(); }catch(_){ }
    // Restore independent Log Records scroll position for the mode we entered.
    __fmRestoreRecordsScrollPos(m);
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

  // If month changed, archive BOTH Main + VIP season stores (if they have any data), then reset BOTH.
  // This avoids mode-order bugs (opening Main first would otherwise prevent VIP rollover, and vice-versa).
  if(storedMonth !== currentMonth){
    let mainSnap = null;
    let vipSnap = null;
    try{
      const mainSeason = await idbReadAllRecordsOnly(IDB_STORE_SEASON);
      const vipSeason  = await idbReadAllRecordsOnly(IDB_STORE_SEASON_VIP);
      const hadMain = _countBackupRecords(mainSeason || {}) > 0;
      const hadVip  = _countBackupRecords(vipSeason  || {}) > 0;

      if(hadMain){
        try{ mainSnap = _buildSeasonArchiveSnapshotFrom(mainSeason, LOCATIONS, 'MAIN', storedMonth); }catch(_){ mainSnap = null; }
      }
      if(hadVip){
        try{ vipSnap = _buildSeasonArchiveSnapshotFrom(vipSeason, LOCATIONS_VIP, 'VIP', storedMonth); }catch(_){ vipSnap = null; }
      }

      if(mainSnap || vipSnap){
        const listKey = "fishmetrics_season_archives_v1";
        let list = [];
        try{ list = JSON.parse(localStorage.getItem(listKey) || "[]"); }catch(_){ list = []; }
        if(mainSnap){
          list.unshift({ seasonId: mainSnap.season.seasonId, exportedAt: mainSnap.exportedAt });
          try{ localStorage.setItem(`fishmetrics_season_archive_${mainSnap.season.seasonId}`, JSON.stringify(mainSnap)); }catch(_){}
        }
        if(vipSnap){
          list.unshift({ seasonId: vipSnap.season.seasonId, exportedAt: vipSnap.exportedAt });
          try{ localStorage.setItem(`fishmetrics_season_archive_${vipSnap.season.seasonId}`, JSON.stringify(vipSnap)); }catch(_){}
        }
        try{ localStorage.setItem(listKey, JSON.stringify(list)); }catch(_){}

        const bundle = {
          schemaVersion: "season-archive-bundle-v1",
          exportedAt: (mainSnap && mainSnap.exportedAt) || (vipSnap && vipSnap.exportedAt) || new Date().toISOString(),
          app: { name: "FishMetrics", version: "v1.5" },
          month: storedMonth,
          main: mainSnap,
          vip: vipSnap
        };
        try{ _downloadJson(`FishMetrics_SeasonArchive_${storedMonth}.json`, bundle); }catch(_){}
        try{ alert("Season archived ✅"); }catch(_){}
      }
    }catch(_){}

    try{ await idbSaveAllSeasonRecordsToStore(IDB_STORE_SEASON, {}); }catch(_){}
    try{ await idbSaveAllSeasonRecordsToStore(IDB_STORE_SEASON_VIP, {}); }catch(_){}

    seasonRecordsByLocation_main = {};
    seasonRecordsByLocation_vip = {};
    syncActiveCachesToMode();

    // If Focus Mode is currently open, refresh immediately so the UI does not
    // show chips/rows from the other mode.
    try{
      const fv = document.getElementById('focusView');
      if(fv && fv.classList.contains('active') && typeof window.refreshFocusTab === 'function'){
        window.refreshFocusTab();
      }
    }catch(_){ }
    try{ localStorage.setItem('fishmetrics_season_records_v1', JSON.stringify({})); }catch(_){}

    try{ localStorage.setItem('fm_season_month', currentMonth); }catch(_){}
    try{ localStorage.setItem('fm_active_season_id', currentMonth); }catch(_){}

    try{ if(typeof renderTable === 'function') renderTable(); }catch(_){}
    try{ updateDashboard(); }catch(_){}
    try{ updateSeasonProgress(); }catch(_){}
    try{ updateSeasonUncaughtCount(); }catch(_){}
  }else{
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

        const w = parseStoredWeightLbs(rawStr);
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
    app: { name: "FishMetrics", version: "v1.5" },
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

// Build a season archive snapshot for an explicit mode + record set.
// Used by monthly auto-rollover so Main + VIP can be archived/reset together.
function _buildSeasonArchiveSnapshotFrom(seasonRecordsInput, locationsData, modePrefix, month){
  const now = new Date();
  const safeMonth = String(month || '').slice(0,7);
  const seasonId = `${String(modePrefix || 'MAIN').toUpperCase()}-${safeMonth}`;
  const startedAt = `${safeMonth}-01`;

  const fishPoints = [];
  const seasonRecordsFiltered = {};
  const seasonEntriesFiltered = {};
  const counts = { Common:0, Rare:0, Epic:0, Legendary:0 };
  let totalSeasonPoints = 0;
  const bestByCategory = { Common:null, Rare:null, Epic:null, Legendary:null };
  const lowestByCategory = { Common:null, Rare:null, Epic:null, Legendary:null };

  try{
    for(const loc of Object.keys(seasonRecordsInput || {})){
      const recs = seasonRecordsInput[loc] || {};
      const fishLookup = new Map(((locationsData && locationsData[loc]) ? locationsData[loc] : []).map(f=>[String(f.name).toLowerCase(), f]));
      for(const fishName of Object.keys(recs)){
        const rawStr = recs[fishName];
        if(rawStr === "" || rawStr == null) continue;

        const f = fishLookup.get(String(fishName).toLowerCase());
        if(!f) continue;

        const w = parseStoredWeightLbs(rawStr);
        if(!Number.isFinite(w) || w < f.min || w > f.max) continue;

        // Compute points/stars (same as standard season archive)
        const pts = calculatePoints(w, f);
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

        // filtered records: preserve canonical season record shape (name -> weight string)
        if(!seasonRecordsFiltered[loc]) seasonRecordsFiltered[loc] = {};
        seasonRecordsFiltered[loc][f.name] = String(rawStr);

        // filtered entries: include weight + points for review
        if(!seasonEntriesFiltered[loc]) seasonEntriesFiltered[loc] = {};
        seasonEntriesFiltered[loc][f.name] = { weight: String(rawStr), points: pts, rawPoints: Number(rawPts), stars };

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
  }catch(_){ }

  // stable sort (optional)
  try{ fishPoints.sort((a,b)=> (b.points - a.points) || a.name.localeCompare(b.name)); }catch(_){}

  // build KPI object without zeros/nulls
  const kpis = {};
  if(Number.isFinite(totalSeasonPoints) && totalSeasonPoints > 0) kpis.totalSeasonPoints = totalSeasonPoints;

  const countsOut = {};
  for(const k of Object.keys(counts)){ if(counts[k] > 0) countsOut[k] = counts[k]; }
  if(Object.keys(countsOut).length) kpis.counts = countsOut;

  const bestOut = {};
  for(const k of Object.keys(bestByCategory)){ if(bestByCategory[k]) bestOut[k] = bestByCategory[k]; }
  if(Object.keys(bestOut).length) kpis.bestByCategory = bestOut;

  const lowestOut = {};
  for(const k of Object.keys(lowestByCategory)){ if(lowestByCategory[k]) lowestOut[k] = lowestByCategory[k]; }
  if(Object.keys(lowestOut).length) kpis.lowestByCategory = lowestOut;

  return {
    schemaVersion: "season-archive-v2",
    exportedAt: now.toISOString(),
    app: { name: "FishMetrics", version: "v1.5" },
    season: { seasonId, startedAt, month: safeMonth },
    rules: {
      oosCaps: { Common: 357, Rare: 476, Epic: 595 },
      legendaryAlwaysInSeason: true,
      oosExcludedFromRanges: true,
      oosExcludedFromImprovementTargets: true,
      starTierNoRoundUpPromotion: true
    },
    kpis,
    fishPoints,
    seasonRecordsByLocation: seasonRecordsFiltered,
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



async function reloadActiveModeFromIdb(){
  try{
    const loadedCareer = await loadRecords();
    const loadedSeason = await loadSeasonRecords();
    if (isVipModeActive()) {
      recordsByLocation_vip = loadedCareer;
      seasonRecordsByLocation_vip = loadedSeason;
    } else {
      recordsByLocation_main = loadedCareer;
      seasonRecordsByLocation_main = loadedSeason;
    }
    syncActiveCachesToMode();
    try{ applyVipSeasonFishInsightsVisibility(); }catch(_){ }
  }catch(e){
    console.error("Reload failed", e);
  }
}

async function initApp(){
  // Load records into the active mode's caches (Main vs VIP are isolated)
  const loadedCareer = await loadRecords();
  const loadedSeason = await loadSeasonRecords();
  if (isVipModeActive()) {
    recordsByLocation_vip = loadedCareer;
    seasonRecordsByLocation_vip = loadedSeason;
  } else {
    recordsByLocation_main = loadedCareer;
    seasonRecordsByLocation_main = loadedSeason;
  }
  syncActiveCachesToMode();
  try{ await autoRollSeasonMonthly(); }catch(_){ }
  setupTabs();
  setupShareButton();
  setupHomeButton();
  setupHeaderMenu();
  setupWeightUnitToggle();
  setupBackupRestoreUI();
  setupSeasonMode();
  // One-time migration: older builds may have stored weights in kgs.
  // We always store canonically in lbs and only change display when toggling units.
  try{
    const storedUnit = localStorage.getItem('recordsUnit') || 'lbs';
    if(storedUnit === 'kgs'){
      convertStoredRecordsToCanonicalLbs();
      try{ localStorage.setItem('recordsUnit','lbs'); }catch(_){}
    }
  }catch(_){}
  updateRecordsUnitLabel();
  buildLocationButtons();
  setupRaritySlicers();
  initIncludeLegendaryToggle();
  initIncludeOOSDashboardToggle();
  makeCharts();
  locationSelect.onchange = renderTable;
  renderTable();
  try{ updateDashboard();
    try{ updateSeasonProgress(); }catch(_){}
    try{ updateSeasonUncaughtCount(); }catch(_){} }catch(_){}
	  try{ if(typeof renderCareerTargets === 'function') renderCareerTargets(); }catch(_){}
}

// --- VIP mode (visual-only) -------------------------------------------------
// VIP mode is signaled via URL hash: app.html#vip
// This is intentionally visual-only for now (no data/points/backup logic changes).
function getVipFlagFromUrl(){
  try{
    const h = (window.location.hash || '').toLowerCase();
    // Treat any #vip* as VIP (e.g., #vip, #vip-season, #vip/anything)
    return h.includes('vip');
  }catch(_){ return false; }
}

function applyModeUI(mode){
  try{
    const isVip = (mode === 'vip');
    document.documentElement.classList.toggle('vip-mode', isVip);

    
    try{ rebuildShareLocations(); }catch(_){}
const mainBtn = document.getElementById('modeMainBtn');
    const vipBtn  = document.getElementById('modeVipBtn');
    if(mainBtn) mainBtn.classList.toggle('active', !isVip);
    if(vipBtn)  vipBtn.classList.toggle('active',  isVip);
  }catch(_){}
}

function syncModeFromUrlOrStorage(){
  try{
    applyModeUI(getVipFlagFromUrl() ? 'vip' : 'main');
  }catch(_){
    applyModeUI(getVipFlagFromUrl() ? 'vip' : 'main');
  }
}

function setMode(mode){
  try{
    const MODE_KEY = 'FM_MODE';
    const m = (mode || 'main').toLowerCase() === 'vip' ? 'vip' : 'main';
    localStorage.setItem(MODE_KEY, m);
    applyModeUI(m);
    try{ rebuildShareLocations(); }catch(_){}
    syncActiveCachesToMode();
    
    try{ populateLocationOptions(); }catch(_){}
    try{ buildLocationButtons(); }catch(_){}
// Reload data for the newly selected mode (hard isolation)
    reloadActiveModeFromIdb().then(()=>{
      try{ if(typeof updateDashboard==='function') updateDashboard(); }catch(_){ }
      try{ if(typeof updateSeasonProgress==='function') updateSeasonProgress(); }catch(_){ }
      try{ if(typeof updateSeasonBannerHeader==='function') updateSeasonBannerHeader(); }catch(_){ }

      // If Focus Mode is currently open, refresh it so the chip list and gap table
      // re-render from the correct (Main vs VIP) focus list.
      try{
        const fv = document.getElementById('focusView');
        if(fv && fv.classList.contains('active') && typeof window.refreshFocusTab === 'function'){
          window.refreshFocusTab();
        }
      }catch(_){ }

      try{ if(typeof renderAll==='function') renderAll(); }catch(_){ }
    });
// URL: hash is only used as an override flag.
    if(m === 'vip'){
      if(!getVipFlagFromUrl()) window.location.hash = 'vip';
    }else{
      if(window.location.hash){
        try{ history.replaceState(null, '', window.location.pathname + window.location.search); }
        catch(_){ window.location.hash = ''; }
      }
    }
  }catch(_){}
}

// Wire mode buttons (top of left panel)
try{
  document.getElementById('modeMainBtn')?.addEventListener('click', () => setMode('main'));
  document.getElementById('modeVipBtn')?.addEventListener('click',  () => setMode('vip'));
}catch(_){}

syncModeFromUrlOrStorage();
window.addEventListener('hashchange', syncModeFromUrlOrStorage);
// ---------------------------------------------------------------------------

syncModeFromUrlOrStorage();
  syncActiveCachesToMode();
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

    try{ applyVipSeasonFishInsightsVisibility(); }catch(_){ }
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
    weightUnit = 'lbs';
    localStorage.setItem('weightUnit', weightUnit);
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
    weightUnit = 'kgs';
    localStorage.setItem('weightUnit', weightUnit);
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
    byMap[loc] = {sum:0, cnt:0, pointsByCat:{Common:0,Rare:0,Epic:0,Legendary:0}, countsByCat:{Common:0,Rare:0,Epic:0,Legendary:0}};
    const fishList = getLocationsData()[loc] || [];
    for(const fish of fishList){
      const raw = recs?.[loc]?.[canonicalizeFishName(fish.name)];
      // weights stored in lbs; user input may be kg depending on current unit
      let w = parseStoredWeightLbs(raw);
      const valid = raw !== "" && !Number.isNaN(w) && w > 0 && w >= fish.min && w <= fish.max;
      if(!valid) continue;

      const pts = calculatePoints(w, fish); // integer (display)
      const rawPts = calculatePointsRaw(w, fish); // float (star tiers)
      const stars = calculateStars(fish.category, rawPts);

      totalCaught += 1;
      totalPoints += pts;
      byMap[loc].sum += pts;
      byMap[loc].cnt += 1;
      byMap[loc].pointsByCat[fish.category] += pts;
      byMap[loc].countsByCat[fish.category] += 1;

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
  let bestMapScore = -Infinity;
  let bestMapPoints = 0;
  const _rarities = ['Common','Rare','Epic','Legendary'];
  if(location){
    bestMap = location;
    bestMapPoints = byMap[location]?.sum || 0;
  }else{
    for(const loc of Object.keys(byMap)){
      const bm = byMap[loc];
      if(!bm || (bm.cnt||0) <= 0) continue;
      let sumAvg = 0;
      for(const r of _rarities){
        const c = bm.countsByCat?.[r] || 0;
        const avg = c ? ((bm.pointsByCat?.[r] || 0) / c) : 0;
        sumAvg += avg;
      }
      const score = sumAvg / _rarities.length;
      const points = bm.sum || 0;
      if(score > bestMapScore || (score === bestMapScore && points > bestMapPoints)){
        bestMapScore = score;
        bestMap = loc;
        bestMapPoints = points;
      }
    }
  }

  const pct4 = totalCaught ? ((star4) / totalCaught * 100) : 0;
  const pct5 = totalCaught ? (star5 / totalCaught * 100) : 0;

  return {
    mode,
    seasonLabel,
    location,
    totalPoints: _shareSafeNumber(totalPoints),
    totalCaught: _shareSafeNumber(totalCaught),
    bestMap,
    bestMapPoints: _shareSafeNumber(bestMapPoints),
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
  const drawNote = (txt, x, y) => {
    ctx.fillStyle='rgba(255,255,255,.55)';
    ctx.font='600 16px system-ui, -apple-system, Segoe UI, Roboto, Arial';
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
    // compact note on the same header line (right-aligned) to avoid tall KPI cards
    const noteTxt = 'Balanced across rarities';
    ctx.fillStyle='rgba(255,255,255,.58)';
    ctx.font=`700 16px system-ui, -apple-system, Segoe UI, Roboto, Arial`;
    const noteW = ctx.measureText(noteTxt).width;
    ctx.fillText(noteTxt, pad+colW-26-noteW, topY+labelYOff);
    drawValue(k.bestMap || '—', pad+26, topY+valueYOff, 800, 40);
  }

  // 2) Total points
  card(pad+colW+gap, topY, colW, rowH);
  drawLabel('Total points', pad+colW+gap+26, topY+labelYOff);
  drawValue((k.totalPoints ? k.totalPoints.toFixed(0) : '0'), pad+colW+gap+26, topY+valueYOff, 900, 52);

  // 3) % 4★+ catches
  card(pad, y2, colW, rowH);
  drawLabel('% 4★+ catches', pad+26, y2+labelYOff);
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

    // Distinguish VIP overall cards from Main overall cards (location cards already include the map name)
    const isVip = !!(document && document.documentElement && document.documentElement.classList.contains('vip-mode'));
    a.download = safeLoc
      ? (prefix + safeLoc + '_Share.png')
      : (prefix + (isVip ? 'VIP_' : '') + 'Share.png');

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
    localStorage.setItem('recordsUnit', 'lbs');
    // Season records backup
    localStorage.setItem('fishmetrics_season_records_v1', JSON.stringify(seasonRecordsByLocation || {}));
  }catch(_){}
}



function convertStoredRecordsToCanonicalLbs(){
  // Convert any stored weight strings that are in kgs into lbs once (migration helper).
  const factor = 2.2046226218; // lbs per kg
  function convertObj(obj){
    if(!obj) return;
    for(const loc of Object.keys(obj || {})){
      const locObj = obj[loc];
      if(!locObj) continue;
      for(const fishName of Object.keys(locObj || {})){
        const raw = locObj[fishName];
        if(raw == null) continue;
        const s = String(raw).trim();
        if(s === '') continue;
        const n = Number.parseFloat(s);
        if(!Number.isFinite(n)) continue;
        const lbs = n * factor;
        // Keep up to 4dp, trimmed.
        locObj[fishName] = _fmtTrimFixed(lbs, 4);
      }
    }
  }
  convertObj(recordsByLocation);
  convertObj(seasonRecordsByLocation);
  try{ saveRecordsToStorage(); }catch(_){}
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
      const list = (getLocationsData() && getLocationsData()[loc]) ? getLocationsData()[loc] : [];
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
    const __locData = (typeof getLocationsData==='function' ? getLocationsData() : (LOCATIONS||{})) || {};
    for(const loc of Object.keys(__locData)){
      const fishArr = getLocationsData()[loc] || [];
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
        const wLbs = parseStoredWeightLbs(String(rawW||""));
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

function _seasonStoredWeightsFromPointsBackup(pointsByLoc, locationsObj){
  // Convert a season backup payload (points strings) into in-app stored weight strings.
  const out = {};
  try{
    const locs = locationsObj || (typeof LOCATIONS !== 'undefined' ? LOCATIONS : {});
    for(const loc of Object.keys(pointsByLoc || {})){
      const recs = pointsByLoc[loc] || {};
      const fishLookup = new Map((locs?.[loc] || []).map(f=>[String(f.name).toLowerCase(), f]));
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

  // Include Season-imported PB precision flags (additive; safe for older builds to ignore).
  // Only export flags that still correspond to an actual 3dp stored PB, so we don't carry stale flags.
  let pbImportedFromSeasonFish = {};
  try{
    const m = _loadPbImportedMap();
    const out = {};
    for(const fishName of Object.keys(m || {})){
      if(!m[fishName]) continue;
      // Scan CAREER records directly (do not depend on current mode).
      // Fish names are unique per game, so we can scan locations.
      let wStr = '';
      try{
        const srcRec = recordsByLocation || {};
        for(const loc of Object.keys(srcRec || {})){
          const w2 = (srcRec[loc] || {})[fishName];
          if(w2 != null && String(w2).trim() !== ''){ wStr = String(w2); break; }
        }
      }catch(_){ }
      if(_hasThreeDp(wStr)) out[fishName] = true;
    }
    pbImportedFromSeasonFish = out;
  }catch(_){ pbImportedFromSeasonFish = {}; }

  const payload = {
    meta: {
      app: 'FishMetrics',
      version: 'Season_v1',
      exportedAt: now.toISOString()
    },
    settings: {
      // Display preference (no conversion on toggle)
      weightUnit: (weightUnit === 'kgs') ? 'kgs' : 'lbs',
      // Canonical storage unit for all saved weights
      storageUnit: 'lbs'
    },
    pbImportedFromSeasonFish,
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



function seasonPointsFromStoredWeightsObj(seasonRecordsObj, locationsObj){
  // Convert stored season values (weights) into exported points strings.
  const out = {};
  const cur = seasonRecordsObj || {};
  const locs = locationsObj || {};
  try{
    for(const loc of Object.keys(cur)){
      const recs = cur[loc] || {};
      const fishLookup = new Map(((locs[loc] || [])).map(f=>[String(f.name).toLowerCase(), f]));
      for(const fishName of Object.keys(recs)){
        const f = fishLookup.get(String(fishName).toLowerCase());
        if(!f) continue;
        const rawW = recs[fishName];
        const wLbs = parseStoredWeightLbs(String(rawW||""));
        if(!Number.isFinite(wLbs) || wLbs <= 0) continue;
        const pts = calculatePoints(wLbs, f);
        if(!pts) continue;
        if(!out[loc]) out[loc] = {};
        out[loc][canonicalizeFishName(f.name)] = String(pts);
      }
    }
  }catch(_){}
  return out;
}

function orderLocationsForBackup(recordsObj, locationList){
  const src = recordsObj || {};
  const ordered = {};
  const seen = new Set();
  (locationList || []).forEach((loc)=>{
    if(!loc) return;
    if(Object.prototype.hasOwnProperty.call(src, loc)){
      ordered[loc] = src[loc];
    }else{
      // keep empty location blocks if desired; for backups we omit truly empty locations
    }
    seen.add(loc);
  });
  // Append any extra keys not in the location list (future-proof)
  Object.keys(src).forEach((loc)=>{
    if(!seen.has(loc)){
      ordered[loc] = src[loc];
    }
  });
  return ordered;
}

function getVipLocationListForBackup(){
  // If VIP has its own location ordering in the future, use it.
  try{
    if (typeof VIP_LOCATION_ORDER !== 'undefined' && Array.isArray(VIP_LOCATION_ORDER) && VIP_LOCATION_ORDER.length){
      return VIP_LOCATION_ORDER.slice();
    }
  }catch(_){}
  try{
    if (typeof getVipLocationList === 'function'){
      const v = getVipLocationList();
      if (Array.isArray(v) && v.length) return v.slice();
    }
  }catch(_){}
  // Fallback: use main ordering for now.
  try{
    if (typeof getLocationList === 'function'){
      const m = getLocationList();
      if (Array.isArray(m) && m.length) return m.slice();
    }
  }catch(_){}
  return [];
}

async function downloadBackupJSON(){
  try{
    // Unified backup: always export all 4 sections regardless of current view.
    // All-time data is stored canonically in lbs. Season data uses points as the source of truth.
    const mainAllTime = await idbReadAllRecordsOnly(IDB_STORE);               // location_records
    const mainSeasonRaw  = await idbReadAllRecordsOnly(IDB_STORE_SEASON);        // season_location_records
    const mainSeasonPts = seasonPointsFromStoredWeightsObj(mainSeasonRaw, (typeof LOCATIONS !== 'undefined') ? LOCATIONS : {});
    const vipAllTime  = await idbReadAllRecordsOnly(IDB_STORE_VIP);           // location_records_vip
    const vipSeasonRaw   = await idbReadAllRecordsOnly(IDB_STORE_SEASON_VIP);
    const vipLocations = (typeof LOCATIONS_VIP !== 'undefined') ? LOCATIONS_VIP : LOCATIONS;
    const vipSeasonPts = seasonPointsFromStoredWeightsObj(vipSeasonRaw, vipLocations);
    // season_location_records_vip

    const mainLocOrder = (typeof getLocationList === 'function') ? getLocationList() : (typeof LOCATION_ORDER !== 'undefined' ? LOCATION_ORDER : []);
    const vipLocOrder = getVipLocationListForBackup();

    const payload = {
      schema: "fm_unified_backup_v1",
      version: (typeof APP_VERSION !== "undefined" ? APP_VERSION : "1.5.0"),
      createdAt: new Date().toISOString(),
      seasonMeta: (function(){ try{ const sid = (typeof getCurrentSeasonId === 'function') ? getCurrentSeasonId() : null; return sid ? { seasonId: String(sid) } : null; }catch(_){ return null; } })(),
      main: {
        allTime: { recordsByLocation: orderLocationsForBackup(mainAllTime || {}, mainLocOrder), meta: { canonicalWeightUnit: "lbs", sourceOfTruth: "weight" } },
        season:  { recordsByLocation: orderLocationsForBackup(mainSeasonPts || {}, mainLocOrder), meta: { sourceOfTruth: "points" } }
      },
      vip: {
        allTime: { recordsByLocation: orderLocationsForBackup(vipAllTime || {}, vipLocOrder), meta: { canonicalWeightUnit: "lbs", sourceOfTruth: "weight" } },
        season:  { recordsByLocation: orderLocationsForBackup(vipSeasonPts || {}, vipLocOrder), meta: { sourceOfTruth: "points" } }
      }
    };

    // Warn only if all 4 sections are empty.
    try{
      const n = _countBackupRecords(payload.main.allTime.recordsByLocation) +
                _countBackupRecords(payload.main.season.recordsByLocation) +
                _countBackupRecords(payload.vip.allTime.recordsByLocation) +
                _countBackupRecords(payload.vip.season.recordsByLocation);
      if(n === 0){
        const ok = confirm("Export an empty unified backup template?");
        if(!ok) return;
      }
    }catch(_){}

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const date = (function(){const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');})();
    a.href = url;
    a.download = `fishmetrics_backup_${date}_unified.json`;
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

  // Unified backups (v1.5.0+): always export all 4 sections
  try{
    if(String(parsed.schema || '') === 'fm_unified_backup_v1'){
      const mainAT = parsed?.main?.allTime?.recordsByLocation;
      const mainS  = parsed?.main?.season?.recordsByLocation;
      const vipAT  = parsed?.vip?.allTime?.recordsByLocation;
      const vipS   = parsed?.vip?.season?.recordsByLocation;

      const pbImported = (parsed && typeof parsed.pbImportedFromSeasonFish === 'object') ? parsed.pbImportedFromSeasonFish : null;
      const unit = parsed?.settings?.weightUnit || parsed?.settings?.unit || null;
      const storageUnit = parsed?.settings?.storageUnit || parsed?.settings?.recordsUnit || null;

      const exportedAt = parsed?.createdAt || parsed?.meta?.exportedAt || parsed?.exportedAt || null;
      const version = parsed?.version || parsed?.meta?.version || null;
      const seasonMeta = (parsed && typeof parsed.seasonMeta === 'object') ? parsed.seasonMeta : null;

      // At least one section must be an object.
      const hasAny = (mainAT && typeof mainAT === 'object') || (mainS && typeof mainS === 'object') ||
                     (vipAT && typeof vipAT === 'object') || (vipS && typeof vipS === 'object');
      if(!hasAny) return null;

      return {
        schemaType: 'unified',
        mainAllTime: (mainAT && typeof mainAT === 'object') ? mainAT : null,
        mainSeason:  (mainS  && typeof mainS  === 'object') ? mainS  : null,
        vipAllTime:  (vipAT  && typeof vipAT  === 'object') ? vipAT  : null,
        vipSeason:   (vipS   && typeof vipS   === 'object') ? vipS   : null,
        seasonMeta,
        pbImportedFromSeasonFish: pbImported,
        weightUnit: unit,
        storageUnit,
        exportedAt,
        version
      };
    }
  }catch(_){}

  // Legacy backups (pre-unified): only Main sections exist.
  const records = parsed.recordsByLocation || parsed.records || parsed.data || null;
  if(!records || typeof records !== 'object') return null;
  const pbImported = (parsed && typeof parsed.pbImportedFromSeasonFish === 'object') ? parsed.pbImportedFromSeasonFish : null;
  const unit = parsed?.settings?.weightUnit || parsed?.settings?.unit || parsed?.weightUnit || null;
  const storageUnit = parsed?.settings?.storageUnit || parsed?.settings?.recordsUnit || parsed?.meta?.recordsUnit || null;
  const exportedAt = parsed?.meta?.exportedAt || parsed?.exportedAt || null;
  const version = parsed?.meta?.version || parsed?.version || null;
  const season = parsed.seasonRecordsByLocation || parsed.seasonRecords || null;
  const seasonMeta = (parsed && typeof parsed.seasonMeta === 'object') ? parsed.seasonMeta : null;

  return {
    schemaType: 'legacy',
    mainAllTime: records,
    mainSeason: (season && typeof season === 'object') ? season : null,
    vipAllTime: null,
    vipSeason: null,
    seasonMeta,
    pbImportedFromSeasonFish: pbImported,
    weightUnit: unit,
    storageUnit,
    exportedAt,
    version
  };
}

function applyRestoredState(restored){
  // Unified restore model:
  // - Write ONLY the sections that exist in the backup.
  // - Preserve any store not present in the backup (do not clear it).
  // - Main/VIP are isolated (no mirroring).
  // - Season restore is gated by seasonMeta.seasonId matching current season (fail closed).

  const hasMainAT = !!(restored && restored.mainAllTime && typeof restored.mainAllTime === 'object');
  const hasVipAT  = !!(restored && restored.vipAllTime  && typeof restored.vipAllTime  === 'object');
  const hasMainS  = !!(restored && restored.mainSeason  && typeof restored.mainSeason  === 'object');
  const hasVipS   = !!(restored && restored.vipSeason   && typeof restored.vipSeason   === 'object');

  // Canonicalize + merge alias fish keys so old backups don't wipe data
  const restoredMainCareer = hasMainAT ? canonicalizeRecordsByLocation(restored.mainAllTime || {}) : null;
  const restoredVipCareer  = hasVipAT  ? canonicalizeRecordsByLocation(restored.vipAllTime  || {}) : null;

  // Older backups may have stored weights in the preferred display unit (e.g., kgs).
  // Convert restored weights to canonical lbs for internal storage.
  function _convertCareerObjToLbsIfNeeded(careerObj){
    try{
      const su = (restored && restored.storageUnit) ? String(restored.storageUnit) : '';
      const fromUnit = (su === 'lbs' || su === 'kgs') ? su : ((restored && restored.weightUnit === 'kgs') ? 'kgs' : 'lbs');
      if(fromUnit !== 'kgs') return;
      const factor = 2.2046226218; // lbs per kg
      for(const loc of Object.keys(careerObj || {})){
        const locObj = careerObj[loc] || {};
        for(const fishName of Object.keys(locObj || {})){
          const raw = locObj[fishName];
          const s = String(raw ?? '').trim();
          if(!s) continue;
          const n = Number.parseFloat(s);
          if(!Number.isFinite(n)) continue;
          locObj[fishName] = _fmtTrimFixed(n * factor, 4);
        }
      }
    }catch(_){}
  }
  if(restoredMainCareer) _convertCareerObjToLbsIfNeeded(restoredMainCareer);
  if(restoredVipCareer)  _convertCareerObjToLbsIfNeeded(restoredVipCareer);

  // Apply in-memory caches (preserve caches that aren't restored)
  if(restoredMainCareer) recordsByLocation_main = restoredMainCareer;
  if(restoredVipCareer)  recordsByLocation_vip  = restoredVipCareer;

  // Season gating
  const curSeasonId = (typeof getCurrentSeasonId === 'function') ? getCurrentSeasonId() : null;
  const backupSeasonId = (restored && restored.seasonMeta && restored.seasonMeta.seasonId) ? String(restored.seasonMeta.seasonId) : null;
  const seasonMatches = (!!curSeasonId && !!backupSeasonId && String(curSeasonId) === String(backupSeasonId));

  let restoredMainSeasonStored = null;
  let restoredVipSeasonStored = null;

  if(seasonMatches && hasMainS){
    try{
      restoredMainSeasonStored = canonicalizeRecordsByLocation(
        _seasonStoredWeightsFromPointsBackup(restored.mainSeason || {}, (typeof LOCATIONS !== 'undefined' ? LOCATIONS : {}))
      );
    }catch(_){ restoredMainSeasonStored = null; }
  }
  if(seasonMatches && hasVipS){
    try{
      const vipLocs = (typeof LOCATIONS_VIP !== 'undefined') ? LOCATIONS_VIP : (typeof LOCATIONS !== 'undefined' ? LOCATIONS : {});
      restoredVipSeasonStored = canonicalizeRecordsByLocation(
        _seasonStoredWeightsFromPointsBackup(restored.vipSeason || {}, vipLocs)
      );
    }catch(_){ restoredVipSeasonStored = null; }
  }

  if(restoredMainSeasonStored) seasonRecordsByLocation_main = restoredMainSeasonStored;
  if(restoredVipSeasonStored)  seasonRecordsByLocation_vip  = restoredVipSeasonStored;

  // Persist ONLY the stores present in the backup (preserve others).
  try{
    if(restoredMainCareer){
      idbSaveAllRecordsToStore(IDB_STORE, restoredMainCareer).catch(()=>{});
    }
    if(restoredVipCareer){
      idbSaveAllRecordsToStore(IDB_STORE_VIP, restoredVipCareer).catch(()=>{});
    }
    if(restoredMainSeasonStored){
      idbSaveAllSeasonRecordsToStore(IDB_STORE_SEASON, restoredMainSeasonStored).catch(()=>{});
    }
    if(restoredVipSeasonStored){
      idbSaveAllSeasonRecordsToStore(IDB_STORE_SEASON_VIP, restoredVipSeasonStored).catch(()=>{});
    }
  }catch(_){}

  // Restore unit preference only if explicitly provided (unified exports may omit it)
  if(restored && (restored.weightUnit === 'lbs' || restored.weightUnit === 'kgs')){
    weightUnit = restored.weightUnit;
    try{ localStorage.setItem('weightUnit', weightUnit); }catch(_){ }
  }

  // Storage unit is always canonical lbs
  try{ localStorage.setItem('recordsUnit', 'lbs'); }catch(_){ }

  // Restore Season-imported PB precision flags (Main only). This is additive and safe for older backups.
  // Only apply if the backup includes the map AND we restored Main all-time.
  if(restoredMainCareer){
    try{
      const pbIn = (restored && typeof restored.pbImportedFromSeasonFish === 'object') ? restored.pbImportedFromSeasonFish : null;
      const out = {};
      if(pbIn){
        for(const fishName of Object.keys(pbIn || {})){
          if(!pbIn[fishName]) continue;
          let wStr = '';
          try{
            for(const loc of Object.keys(restoredMainCareer || {})){
              const rec = (restoredMainCareer || {})[loc] || {};
              const v = rec[fishName];
              if(v != null && String(v).trim() !== ''){ wStr = String(v); break; }
            }
          }catch(_){ }
          if(_hasThreeDp(wStr)) out[fishName] = true;
        }
      }
      _savePbImportedMap(out);
    }catch(_){ }
  }

  // Re-bind active caches to the current mode and refresh UI
  syncActiveCachesToMode();

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


      // Detect which sections are present in the backup (before any season gating).
      const _sectionInfo = (obj)=>({
        locs: obj && typeof obj === 'object' ? Object.keys(obj || {}).length : 0,
        fish: obj && typeof obj === 'object' ? _countBackupUniqueCanonicalFish(obj || {}) : 0
      });
      const detected = {
        mainAllTime: _sectionInfo(norm.mainAllTime),
        mainSeason:  _sectionInfo(norm.mainSeason),
        vipAllTime:  _sectionInfo(norm.vipAllTime),
        vipSeason:   _sectionInfo(norm.vipSeason)
      };
      const hasDetected = {
        mainAllTime: (detected.mainAllTime.locs || detected.mainAllTime.fish),
        mainSeason:  (detected.mainSeason.locs  || detected.mainSeason.fish),
        vipAllTime:  (detected.vipAllTime.locs  || detected.vipAllTime.fish),
        vipSeason:   (detected.vipSeason.locs   || detected.vipSeason.fish)
      };
      // Safety gate: only apply season data if the backup season matches the active season.
      // If seasonMeta is missing or mismatched, we ignore season payloads entirely (fail closed).
      let seasonMsg = '';
      let seasonApplied = false;
      let seasonNotAppliedReason = '';
      let _curSeasonIdForMsg = '';
      let _backupSeasonIdForMsg = '';
      try{
        const curSeasonId = (typeof getCurrentSeasonId === 'function') ? getCurrentSeasonId() : null;
        const backupSeasonId = (norm && norm.seasonMeta && norm.seasonMeta.seasonId) ? String(norm.seasonMeta.seasonId) : null;
        _curSeasonIdForMsg = curSeasonId ? String(curSeasonId) : '';
        _backupSeasonIdForMsg = backupSeasonId ? String(backupSeasonId) : '';
        const hasAnySeasonPayload = !!(
          (norm && norm.mainSeason && typeof norm.mainSeason === 'object') ||
          (norm && norm.vipSeason  && typeof norm.vipSeason  === 'object')
        );
        if(hasAnySeasonPayload){
          if(curSeasonId && backupSeasonId && String(curSeasonId) === String(backupSeasonId)){
            seasonMsg = `• Season data: ${backupSeasonId}<br>`;
            seasonApplied = true;
          }else{
            // Ignore all season sections
            norm.mainSeason = null;
            norm.vipSeason = null;
            seasonMsg = (backupSeasonId && curSeasonId)
              ? `• Season data: ${backupSeasonId} (not applied to current ${curSeasonId})<br>`
              : '• Season data: not applied<br>';
            seasonNotAppliedReason = (backupSeasonId && curSeasonId)
              ? `Season data from ${backupSeasonId} was not applied to the current season (${curSeasonId}).`
              : 'Season data was not applied.';
          }
        }
      }catch(_){ }

      const unit = (norm.weightUnit === 'kgs') ? 'kgs' : 'lbs';
      const when = norm.exportedAt ? new Date(norm.exportedAt).toLocaleString() : 'Unknown date';
      // Sections detected (from the backup file)
      const detectedLines = [];
      if(hasDetected.mainAllTime) detectedLines.push(`• Main all-time: ${detected.mainAllTime.fish} fish / ${detected.mainAllTime.locs} locations<br>`);
      if(hasDetected.mainSeason){
        const note = seasonApplied ? '' : ' (not applied)';
        detectedLines.push(`• Main season: ${detected.mainSeason.fish} fish / ${detected.mainSeason.locs} locations${note}<br>`);
      }
      if(hasDetected.vipAllTime)  detectedLines.push(`• VIP all-time: ${detected.vipAllTime.fish} fish / ${detected.vipAllTime.locs} locations<br>`);
      if(hasDetected.vipSeason){
        const note = seasonApplied ? '' : ' (not applied)';
        detectedLines.push(`• VIP season: ${detected.vipSeason.fish} fish / ${detected.vipSeason.locs} locations${note}<br>`);
      }
      if(!detectedLines.length){
        detectedLines.push('• No recognizable sections found<br>');
      }

      // Totals (all-time only)
      const totalAllTimeFish = detected.mainAllTime.fish + detected.vipAllTime.fish;
      const totalAllTimeLocs = detected.mainAllTime.locs + detected.vipAllTime.locs;

      const confirmHtml =
        `<b>Detected in backup:</b><br>` +
        detectedLines.join('') +
        `<br>` +
        `<b>Summary:</b><br>` +
        `• Total all-time: ${totalAllTimeFish} fish / ${totalAllTimeLocs} locations<br>` +
        `• Units: ${unit}<br>` +
        `• Exported: ${when}<br>` +
        `${seasonMsg}` +
        `<br>` +
        `Restoring will replace only the sections present in the backup. Other sections will be preserved. Continue?`;


      const ok = await showRestoreConfirmModal(confirmHtml);
      if(!ok){
        setBackupMsg('Restore cancelled.');
        return;
      }

      applyRestoredState(norm);
      try{ showRestoreConfirmation(); }catch(_){}
      // Small pause so user perceives restore + toast, then jump to Dashboard and scroll to top.
      try{
        const btn = document.querySelector('.top-tabs .tab-btn[data-view="dashboardView"]');
        if(btn){
          setTimeout(()=>{
            try{ btn.click(); }catch(_){ }
            try{ setTimeout(()=>{ try{ anchorToStarsRarity(); }catch(_){ } }, 120); }catch(_){ }
            // Dashboard render can be async; force scroll-to-top a few times during first paint.
            try{
              const forceTop = ()=>{
                try{ window.scrollTo(0,0); }catch(_){}
                try{ document.documentElement.scrollTop = 0; }catch(_){}
                try{ document.body.scrollTop = 0; }catch(_){}
                try{
                  const scrollers = document.querySelectorAll('.content, .main-content, .app, .app-container, .panel, .tab-view, .tab-content');
                  scrollers.forEach(el=>{ try{ el.scrollTop = 0; }catch(_){ } });
                }catch(_){}
              };
              forceTop();
              let n=0;
              const t = setInterval(()=>{ forceTop(); if(++n>=10) clearInterval(t); }, 60);
            }catch(_){}
          }, 1200);
        }
      }catch(_){}

      if(seasonApplied){
        setBackupMsg('🎉 Fish Tank successfully restored (including Season data).');
      }else if((parsed && parsed.seasonRecordsByLocation) || (parsed && parsed?.main?.season) || (parsed && parsed?.vip?.season)){
        const bid = (norm && norm.seasonMeta && norm.seasonMeta.seasonId) ? String(norm.seasonMeta.seasonId) : 'an earlier season';
        setBackupMsg(`🎉 Fish Tank successfully restored. Season data from ${bid} was not applied.`);
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

function showRestoreConfirmation() {
  const msg = document.createElement('div');
  msg.textContent = 'Backup restored';
  msg.className = 'privacy-clear-confirmation fm-restore-confirmation';
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
let careerTargetSecondarySort = 'stars'; // 'stars' | 'oos'

let careerTargetPrimary = '3'; // \"3\"|\"4\"|\"5\"|\"oos1\"|\"oos3\"

function _allFishFlatList(){
  const out = [];
  try{
    const __locData = (typeof getLocationsData==='function' ? getLocationsData() : (LOCATIONS||{})) || {};
    for(const loc of Object.keys(__locData)){
      for(const f of (__locData[loc] || [])){
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
    const raw = (recordsByLocation?.[fish.location]?.[canonicalizeFishName(fish.name)] ?? "");
    if(String(raw||"").trim()==="") return { points: 0, stars: 0 };
    const lbs = parseStoredWeightLbs(String(raw));
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

function _setCareerSecondarySortUI(targetMode){
  try{
    const wrap = document.getElementById('ctSecondarySortWrap');
    const sel = document.getElementById('ctSecondarySortSelect');
    if(!wrap || !sel) return;
    const show = (String(targetMode) === 'oos3');
    wrap.style.display = show ? 'flex' : 'none';
    // Keep value synced
    sel.value = careerTargetSecondarySort || 'stars';
  }catch(_){}
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
    try{ _setCareerSecondarySortUI(targetMode); }catch(_){ }
      const __isVip = (typeof isVipModeActive==='function') ? isVipModeActive() : false;
      subLabelEl.textContent = (targetMode==='oos1') ? 'In season now • OOS next month' :
        (targetMode==='oos3') ? 'In season now • OOS within 3 months' :
        (__isVip ? 'All-time best stars' : 'All-time best stars • In-season this month');    }
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
  const __isVip = (typeof isVipModeActive==='function') ? isVipModeActive() : false;
  const inSeasonNow = __isVip ? true : isFishInSeason(f.name, now);
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

    // Secondary sort metric (only used for OOS ≤ 3 months)
  let oosDist = 999;
  if(targetMode === 'oos3'){
    for(let k=1;k<=3;k++){
      const dk = _addMonths(now, k);
      if(!isFishInSeason(f.name, dk)) { oosDist = k; break; }
    }
  }

const row = {
    ...f,
    bestStars,
    bestPoints,
    oosDist,
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
        // Secondary sort for urgency (OOS ≤ 3 months): bring fish that go OOS sooner to the top.
        if(targetMode === 'oos3' && careerTargetSecondarySort === 'oos'){
          const da = (a.oosDist == null) ? 999 : a.oosDist;
          const db = (b.oosDist == null) ? 999 : b.oosDist;
          if(da !== db) return da - db;
        }

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

  // Sync modal radios to stored preference
  syncPbPolicyUI();

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
  // Persist focus selections separately for Main vs VIP to prevent cross-mode bleed.
  function _focusModeKey(){
    try{
      return (typeof isVipModeActive === 'function' && isVipModeActive()) ? 'vip' : 'main';
    }catch(_){
      return 'main';
    }
  }
  function _focusLsKey(){
    return `focusItemsAlltime_${_focusModeKey()}`;
  }
  let _focusLastMode = _focusModeKey();

  function saveFocusItems(){
    try{
      const payload = focusItems.map(x => ({ loc: x.loc, name: x.name }));
      localStorage.setItem(_focusLsKey(), JSON.stringify(payload));
    }catch(_){}
  }
  function loadFocusItems(){
    try{
      const raw = localStorage.getItem(_focusLsKey()) ?? "[]";
      const arr = JSON.parse(raw);
      if(!Array.isArray(arr)) return;
      const seen = new Set();
      for(const it of arr){
        if(!it || typeof it.loc !== "string" || typeof it.name !== "string") continue;
        const loc = it.loc;
        const name = it.name;
        if(typeof isFishInSeason === "function" && !isFishInSeason(name)) continue; // keep list "in-season" only
        // Ensure fish exists in the active mode dataset (Main vs VIP).
        try{
          const ld = (typeof getLocationsData === "function") ? getLocationsData() : null;
          const list = (ld && ld[loc]) ? ld[loc] : [];
          if(!list || !list.some(f => String(f.name) === String(name))) continue;
        }catch(_){ }
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
    const list = (getLocationsData() && getLocationsData()[loc]) ? getLocationsData()[loc] : [];
    return list.find(f => String(f.name) === String(fishName)) || null;
  }

  function getAllTimePoints(loc, fishName){
    try{
      const f = getFishObj(loc, fishName);
      if(!f) return 0;
      const storedW = getStoredWeight(loc, fishName);
      if(String(storedW ?? '').trim() === '') return 0;
      const lbs = parseStoredWeightLbs(String(storedW));
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
    // If user toggled Main/VIP while Focus mode is active, swap list.
    const m = _focusModeKey();
    if(m !== _focusLastMode){
      _focusLastMode = m;
      focusItems.splice(0, focusItems.length);
      try{ loadFocusItems(); }catch(_){ }
      // Render the chips list for the newly active mode.
      try{ renderList(); }catch(_){ }

      // Also hard-reset the picker UI so we don't show stale "matching fish in ..." hints
      // from the previous mode (some locations exist in both modes).
      try{
        if(locSel){
          // Clear selection before repopulateFocusLocations() so it can't restore a shared location.
          locSel.value = '';
          locSel.selectedIndex = 0;
        }
        if(typeof resetSelect === 'function'){
          resetSelect(catSel, 'Select…');
          resetSelect(fishSel, 'Select…');
        }else{
          // Fallback: minimal reset
          if(catSel){ catSel.value = ''; }
          if(fishSel){ fishSel.value = ''; }
        }
        if(catSel) catSel.disabled = true;
        if(fishSel) fishSel.disabled = true;
        setAddVisible(false);
        setAddEnabled(false);
        setHint('Pick a location to begin.');
      }catch(_){ }
    }
    try{ repopulateFocusLocations(); }catch(_){ }
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
          setHint(`${count} matching ${((typeof isVipModeActive==='function' && isVipModeActive()) ? '' : 'In Season ')}fish in ${locSel.value}. Now pick one.`);
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
    const list = (getLocationsData() && getLocationsData()[loc]) ? getLocationsData()[loc] : [];
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
    const list = (getLocationsData() && getLocationsData()[loc]) ? getLocationsData()[loc] : [];
    // Exclude out-of-season fish for the *current* month/season
    const fish = list
      .filter(f => String(f.category) === String(cat))
      .filter(f => (typeof isFishInSeason === 'function') ? isFishInSeason(f.name, new Date()) : true);
    fish.sort((a,b)=>String(a.name).localeCompare(String(b.name)));
    return fish;
  }

  function repopulateFocusLocations(){
    if(!locSel) return;
    const prev = locSel.value || "";
    resetSelect(locSel, 'Select…');
    const __isVip = (typeof isVipModeActive === 'function') ? isVipModeActive() : false;
    const __order = __isVip
      ? (typeof VIP_LOCATION_ORDER !== 'undefined' ? VIP_LOCATION_ORDER : Object.keys(LOCATIONS_VIP || {}))
      : (typeof LOCATION_ORDER !== 'undefined' ? LOCATION_ORDER : Object.keys(LOCATIONS || {}));
    __order.forEach((loc)=>{
      if(!loc) return;
      locSel.appendChild(opt(loc, loc));
    });
    // restore previous selection if still valid
    if(prev && [...locSel.options].some(o=>o.value===prev)) locSel.value = prev;
  }

  // Populate location options (VIP mode should show VIP locations only)
  repopulateFocusLocations();

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
    setHint(`${fish.length} matching ${((typeof isVipModeActive==='function' && isVipModeActive()) ? '' : 'In Season ')}fish in ${loc}. Now pick one.`);
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


// Preferences: allow toggling PB auto-update after opting in
function initPreferences(){
  const cb = document.getElementById('prefPbAlways');
  if(!cb){
    // Preferences UI may mount after initial load (tab-render). Retry briefly.
    try{
      window.__fmPrefRetryCount = (window.__fmPrefRetryCount || 0) + 1;
      if(window.__fmPrefRetryCount < 40) setTimeout(initPreferences, 250);
    }catch(_){ }
    return;
  }

  let enabled = false;
  try{
    enabled = localStorage.getItem('fm_auto_update_pb_from_season') === "true";
  }catch(_){ }
  cb.checked = enabled;

  // Avoid adding multiple listeners if initPreferences runs more than once
  if(cb.dataset && cb.dataset.wired === "1") return;
  if(cb.dataset) cb.dataset.wired = "1";

  cb.addEventListener('change', () => {
    try{
      if(cb.checked){
        localStorage.setItem('fm_auto_update_pb_from_season', "true");
      }else{
        localStorage.removeItem('fm_auto_update_pb_from_season');
      }
    }catch(_){ }
  });
}
document.addEventListener('DOMContentLoaded', initPreferences);


/* ---------- Fish search filter (UI-only, safe) ---------- */
let __fmFishSearchState = { career: "", season: "", lastMode: null };

function __fmCurrentModeKey(){
  try{ return document.body.classList.contains('season-active') ? 'season' : 'career'; }catch(_){ return 'career'; }
}

function __fmApplyFishFilterV2(){
  try{
    const input = document.getElementById('fishSearchInput');
    if(!input) return;
    const q = String(input.value || '').trim().toLowerCase();

    const rows = document.querySelectorAll('#recordsView tbody tr');
    for(const row of rows){
      const tds = row.querySelectorAll('td');
      if(!tds || tds.length < 2) continue;

      // All Locations view has 6 columns: Location, Category, Fish, Record, Points, Stars
      // Single-location view has 5 columns: Rarity, Fish, Record, Points, Stars
      const fishTd = (tds.length >= 6) ? tds[2] : tds[1];
      const nm = String(fishTd ? fishTd.textContent : '').trim().toLowerCase();
      row.style.display = (!q || nm.indexOf(q) !== -1) ? '' : 'none';
    }
  }catch(_){}
}

function __fmSaveSearchQuery(){
  try{
    const input = document.getElementById('fishSearchInput');
    if(!input) return;
    const key = __fmCurrentModeKey();
    __fmFishSearchState[key] = String(input.value || '');
  }catch(_){}
}

function __fmRestoreSearchQueryIfModeChanged(){
  try{
    const input = document.getElementById('fishSearchInput');
    if(!input) return;
    const key = __fmCurrentModeKey();
    if(__fmFishSearchState.lastMode === null){
      __fmFishSearchState.lastMode = key;
      return;
    }
    if(__fmFishSearchState.lastMode !== key){
      // Switch detected: restore query for this mode
      input.value = __fmFishSearchState[key] || "";
      __fmFishSearchState.lastMode = key;
    }
  }catch(_){}
}

function __fmFishSearchInitV2(){
  try{
    const input = document.getElementById('fishSearchInput');
    if(input && !input.__fmBound){
      input.__fmBound = true;
      input.addEventListener('input', ()=>{
        __fmSaveSearchQuery();
        __fmApplyFishFilterV2();
      });
    }

    // Wrap renderTable once so:
    // - filter persists after rebuilds
    // - search query is independent per mode (career vs season)
    if(typeof renderTable === 'function' && !renderTable.__fmWrapped){
      const _rt = renderTable;
      const wrapped = function(){
        // Before rebuild, detect mode switch and restore query for that mode
        try{ __fmRestoreSearchQueryIfModeChanged(); }catch(_){}
        const r = _rt.apply(this, arguments);
        // After rebuild, apply filter
        try{ __fmApplyFishFilterV2(); }catch(_){}
        return r;
      };
      wrapped.__fmWrapped = true;
      renderTable = wrapped;
    }
  }catch(_){}
}

// Initialize after DOM is ready
try{
  document.addEventListener('DOMContentLoaded', ()=>{ __fmFishSearchInitV2(); });
  setTimeout(()=>{ __fmFishSearchInitV2(); }, 300);
}catch(_){}
/* ------------------------------------------------------- */


function __fmInitCareerSecondarySort(){
  try{
    const sel = document.getElementById('ctSecondarySortSelect');
    if(!sel || sel.__fmBound) return;
    sel.__fmBound = true;
    sel.addEventListener('change', ()=>{
      careerTargetSecondarySort = String(sel.value || 'stars');
      try{ renderCareerTargets(); }catch(_){}
    });
  }catch(_){}
}
try{
  document.addEventListener('DOMContentLoaded', ()=>{ __fmInitCareerSecondarySort(); });
  setTimeout(()=>{ __fmInitCareerSecondarySort(); }, 400);
}catch(_){}


(function(){
  function bindFishSearchClearBtn(){
    const input = document.getElementById('fishSearchInput');
    const btn = document.getElementById('fishSearchClearBtn');
    if(!input || !btn || btn.__fmBound) return;
    btn.__fmBound = true;

    function sync(){
      try{ btn.style.visibility = (String(input.value||'').length ? 'visible' : 'hidden'); }catch(_){}
    }

    btn.addEventListener('click', ()=>{
      input.value = '';
      try{ input.dispatchEvent(new Event('input')); }catch(_){}
      try{ input.focus(); }catch(_){}
      sync();
    });

    input.addEventListener('input', sync);
    sync();
  }

  document.addEventListener('DOMContentLoaded', bindFishSearchClearBtn);
  setTimeout(bindFishSearchClearBtn, 350);
})();

function alignHeaderIconsToTabs(){
  try{
    const homeBtn = document.getElementById('homeBtn');
    const menuWrap = document.querySelector('.header-menu-wrap');
    const tabLeft = document.getElementById('tabOverview');
    const tabRight = document.getElementById('tabInstructions');
    if(!homeBtn || !menuWrap || !tabLeft || !tabRight) return;

    const leftRect = tabLeft.getBoundingClientRect();
    const rightRect = tabRight.getBoundingClientRect();

    // Only apply when the tabs row is visible (desktop/tablet layouts)
    if(leftRect.width === 0 || rightRect.width === 0) return;

    // Align home with left edge of Dashboard pill, share with right edge of Instructions pill
    document.documentElement.style.setProperty('--hdr-left', Math.round(leftRect.left) + 'px');
    document.documentElement.style.setProperty('--hdr-right', Math.max(0, Math.round(window.innerWidth - rightRect.right)) + 'px');
  }catch(_){}
}




// Header icon alignment to top tabs (keeps Home/Share tethered to Dashboard/Instructions pills)
try{
  window.addEventListener('resize', ()=>{ alignHeaderIconsToTabs(); });
}catch(_){}


try{
  setTimeout(()=>{ alignHeaderIconsToTabs(); }, 0);
  setTimeout(()=>{ alignHeaderIconsToTabs(); }, 200);
}catch(_){}







/* Companion Panel Logic (collapsible + dismissible + draggable) */
(function(){
  const panel = document.getElementById('companionPanel');
  if (!panel) return;

  const header = document.getElementById('companionHeader');
  const body = document.getElementById('companionBody');
  const rows = document.getElementById('companionRows');
  const welcome = document.getElementById('companionWelcome');
  const chevron = document.getElementById('companionChevron');
  const dismiss = document.getElementById('companionDismiss');
  const resetBtn = document.getElementById('companionReset');

  const dismissed = localStorage.getItem('fm_companion_dismissed') === '1';
  const collapsed = localStorage.getItem('fm_companion_collapsed') === '1';

  if (dismissed) {
    panel.style.display = 'none';
    return;
  }

  function applyCollapsed(state){
    if (state) {
      body.style.display = 'none';
      chevron.textContent = '▸';
    } else {
      body.style.display = '';
      chevron.textContent = '▾';
    }
  }

  function hasAnyData(){
    let blob = {};
    try { blob = JSON.parse(localStorage.getItem('fishmetrics_season_records_v1') || "{}"); } catch { blob = {}; }
    if (!blob || typeof blob !== 'object') return false;
    const stack = [blob];
    while (stack.length){
      const v = stack.pop();
      if (Array.isArray(v)){
        if (v.length) return true;
      } else if (v && typeof v === 'object'){
        const keys = Object.keys(v);
        if (keys.length) {
          for (const k of keys) stack.push(v[k]);
        }
      }
    }
    return false;
  }

  function applyEmptyState(){
    const empty = !hasAnyData();
    if (welcome) welcome.classList.toggle('hidden', !empty);
    if (rows) rows.classList.toggle('hidden', empty);
  }

  function loadPos(){
    try { return JSON.parse(localStorage.getItem('fm_companion_pos') || "null"); } catch { return null; }
  }
  function savePos(pos){
    localStorage.setItem('fm_companion_pos', JSON.stringify(pos));
  }
  function clearPos(){
    localStorage.removeItem('fm_companion_pos');
  }
  function applyPos(pos){
    if (!pos) return;
    panel.style.left = pos.left + 'px';
    panel.style.top = pos.top + 'px';
    panel.style.right = 'auto';
  }

  applyEmptyState();
  applyCollapsed(collapsed);
  applyPos(loadPos());

  function clampPanelIntoView(){
    try{
      const panel = document.getElementById('companionPanel');
      if(!panel) return;

      // Mobile: keep the companion panel fully within the viewport.
      // Transform-based nudges (and saved drag positions) can still leave it spilling off-screen
      // during responsive relayout, so clamp using left/right gutters.
      if (window.innerWidth <= 820){
        panel.style.transform = 'none';
        panel.style.left = '12px';
        panel.style.right = '12px';
        panel.style.width = 'auto';
        panel.style.maxWidth = 'calc(100vw - 24px)';
        panel.style.boxSizing = 'border-box';
        return;
      }
      const rect = panel.getBoundingClientRect();
      const pad = 10;

      let dx = 0, dy = 0;
      if(rect.right > window.innerWidth - pad) dx = (window.innerWidth - pad) - rect.right;
      if(rect.left < pad) dx = pad - rect.left;
      if(rect.bottom > window.innerHeight - pad) dy = (window.innerHeight - pad) - rect.bottom;
      if(rect.top < pad) dy = pad - rect.top;

      // Only adjust via transform to avoid re-anchoring (prevents "jump" after import).
      if(dx || dy){
        panel.style.transform = `translate(${dx}px, ${dy}px)`;
      } else {
        panel.style.transform = 'translate(0px, 0px)';
      }
    }catch(_){
    }
  }

  setTimeout(clampPanelIntoView, 0);
  window.addEventListener('resize', clampPanelIntoView);

  // Default placement: if user hasn't dragged it yet, anchor above the "Total Stars / Rarity" chart.
  
  function anchorToStarsRarity(){

        // Only meaningful when fixed (desktop)
    const cs = window.getComputedStyle(panel);
    if (cs.position !== 'fixed') return;

    const titles = Array.from(document.querySelectorAll('.panel-title'));
    const targetTitle = titles.find(t => (t.textContent || '').trim() === 'Total Stars / Rarity');
    if (!targetTitle) return;

    // Try to position panel above the chart container that owns this title.
    const chartPanel = targetTitle.closest('.panel') || targetTitle.parentElement;
    if (!chartPanel) return;

    const rect = chartPanel.getBoundingClientRect();

    // Ensure panel has a measurable size
    panel.style.transform = 'translate(0px, 0px)';
    panel.style.right = 'auto';
    panel.style.left = '0px';
    panel.style.top = '0px';
    const w = panel.offsetWidth || 300;
    const h = panel.offsetHeight || 200;

    let left = rect.right - w;
    let top  = rect.top; // align with top of Total Stars / Rarity chart

    // If panel would go offscreen (very small view), clamp later; no special 'above' behavior.

    // Clamp
    const pad = 8;
    left = Math.max(pad, Math.min(left, window.innerWidth - w - pad));
    top  = Math.max(pad, Math.min(top, window.innerHeight - h - pad));

    panel.style.left = left + 'px';
    panel.style.top = top + 'px';
    panel.style.right = 'auto';
  
  }
  // Anchor once on load, and also whenever Dashboard becomes active.
  anchorToStarsRarity();
  try{
    const dashBtn = document.querySelector('.top-tabs .tab-btn[data-view="dashboardView"]');
    if(dashBtn){ dashBtn.addEventListener('click', ()=>{ setTimeout(anchorToStarsRarity, 50); }); }
  }catch(_){ }


  // Drag handling with threshold to prevent accidental collapse toggle.
  let isPointerDown = false;
  let isDragging = false;
  let justDragged = false;
  let start = null;
  const DRAG_THRESHOLD = 5;

  header.addEventListener('mousedown', (e) => {
    if (e.target === dismiss || e.target === resetBtn) return;

    isPointerDown = true;
    isDragging = false;
    justDragged = false;

    const rect = panel.getBoundingClientRect();
    start = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      rect,
    };

    // Ensure left/top mode while interacting
    panel.style.right = 'auto';
    panel.style.left = rect.left + 'px';
    panel.style.top = rect.top + 'px';

    e.preventDefault();
  });

  window.addEventListener('mousemove', (e) => {
    if (!isPointerDown || !start) return;

    const dx = e.clientX - start.mouseX;
    const dy = e.clientY - start.mouseY;

    if (!isDragging && (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD)) {
      isDragging = true;
    }
    if (!isDragging) return;

    let left = start.rect.left + dx;
    let top  = start.rect.top + dy;

    const pad = 8;
    const w = panel.offsetWidth || 300;
    const h = panel.offsetHeight || 200;
    left = Math.max(pad, Math.min(left, window.innerWidth - w - pad));
    top  = Math.max(pad, Math.min(top, window.innerHeight - h - pad));

    panel.style.left = left + 'px';
    panel.style.top = top + 'px';

    savePos({left, top});
  });

  window.addEventListener('mouseup', () => {
    if (!isPointerDown) return;

    // If we actually dragged, suppress the next click toggle.
    if (isDragging) {
      justDragged = true;
      setTimeout(() => { justDragged = false; }, 250);
    }

    isPointerDown = false;
    isDragging = false;
    start = null;
  });

  header.addEventListener('click', (e) => {
    if (e.target === dismiss || e.target === resetBtn) return;
    if (justDragged) return;

    const isCollapsed = body.style.display === 'none';
    localStorage.setItem('fm_companion_collapsed', isCollapsed ? '0' : '1');
    applyCollapsed(!isCollapsed);
  });

  dismiss.addEventListener('click', (e) => {
    e.stopPropagation();
    localStorage.setItem('fm_companion_dismissed', '1');
    panel.style.display = 'none';
  });

  if (resetBtn){
    resetBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      clearPos();
      panel.style.left = '';
      panel.style.top = '';
      panel.style.right = '22px';
    });
  }

  // Re-check after restore/import flows that may run post-load.
  setTimeout(applyEmptyState, 500);
})();





/* Restore logic for Fishing Guide (robust overlay) */
(function(){
  function init(){
    const panel = document.getElementById('companionPanel');
    const restoreBox = document.getElementById('companionRestore');
    const restoreLink = document.getElementById('restoreGuide');
    const dismissBtn = document.getElementById('companionDismiss');
    if (!panel || !restoreBox || !restoreLink) return;

    function sync(){
      const dismissed = localStorage.getItem('fm_companion_dismissed') === '1';
      if (dismissed){
        panel.style.display = 'none';
        restoreBox.style.display = 'block';
      } else {
        restoreBox.style.display = 'none';
      }
    }

    // Initial sync (after other UI code runs)
    sync();
    setTimeout(sync, 300);

    // Make restore appear immediately after dismiss (no reload needed)
    if (dismissBtn){
      dismissBtn.addEventListener('click', () => { setTimeout(sync, 0); });
    }
    window.addEventListener('storage', sync);

    restoreLink.addEventListener('click', () => {
      localStorage.removeItem('fm_companion_dismissed');
      panel.style.display = '';
      restoreBox.style.display = 'none';
    });

    // In case other view toggles re-render, re-sync occasionally (lightweight)
    window.addEventListener('focus', sync);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


/* Fishing Guide Opportunity Logic */
(function(){
  function norm(name){ return String(name||'').trim().toLowerCase().replace(/\s+/g,' '); }
  function normCat(cat){
    const c = String(cat||'').toLowerCase();
    if(c.includes('legend')) return 'Legendary';
    if(c.includes('epic')) return 'Epic';
    if(c.includes('rare')) return 'Rare';
    return 'Common';
  }

  // Build fish lookup (canonical name -> {category,min,max,location})
  const __fmFishIndexCache = { key:null, idx:{} };
  function __fmGetFishIndex(){
    try{
      const modeKey = (typeof isVipModeActive === 'function' && isVipModeActive()) ? 'vip' : 'main';
      if (__fmFishIndexCache.key === modeKey && __fmFishIndexCache.idx && Object.keys(__fmFishIndexCache.idx).length) return __fmFishIndexCache.idx;

      const locationsObj = (typeof getLocations === 'function') ? getLocations() : (modeKey === 'vip' ? (typeof LOCATIONS_VIP !== 'undefined' ? LOCATIONS_VIP : {}) : (typeof LOCATIONS !== 'undefined' ? LOCATIONS : {}));
      const idx = {};
      Object.keys(locationsObj || {}).forEach(loc=>{
        (locationsObj[loc] || []).forEach(f=>{
          const key = norm(f.name);
          if(!idx[key]) idx[key] = { ...f, location: loc };
        });
      });

      __fmFishIndexCache.key = modeKey;
      __fmFishIndexCache.idx = idx;
      return idx;
    }catch(_){
      return __fmFishIndexCache.idx || {};
    }
  }


  function toTitle(s){
    try{ return (typeof toTitleCase === 'function') ? toTitleCase(s) : String(s||''); }catch(_){ return String(s||''); }
  }

  function getStoredRecords(){
    // IMPORTANT: In Season dashboards, only use the SEASON dataset (not all-time).
    // In All-time dashboards, use the all-time dataset.
    try{
      const seasonOn = (typeof isSeasonMode === 'function') ? !!isSeasonMode() : document.body.classList.contains('season-active');
      const base = seasonOn ? (seasonRecordsByLocation || {}) : (recordsByLocation || {});
      return base || {};
    }catch(_){}
    return {};
  }

  function getFishMeta(fishName){
    const key = norm(fishName);
    const idx = __fmGetFishIndex();
    return idx[key] || null;
  }

  function fishPointsFromWeight(w, meta){
    try{
      if(typeof calculatePoints !== 'function') return 0;
      const m = meta ? ({...meta, category: normCat(meta.category)}) : meta;
      return calculatePoints(Number(w), m);
    }catch(_){ return 0; }
  }

  function fishMaxPoints(meta){
    try{
      if(typeof calculatePoints !== 'function') return 0;
      const m = meta ? ({...meta, category: normCat(meta.category)}) : meta;
      return calculatePoints(Number(m.max), m);
    }catch(_){ return 0; }
  }

  function nextStarTarget(cat, pts){
    // Robust: prefer FM helper, but fall back to scanning target arrays if helper fails/mismatched category.
    let next = 0;
    try{
      if(typeof nextTargetPoints === 'function') next = Number(nextTargetPoints(cat, pts)) || 0;
    }catch(_){}
    if(next && next > pts) return next;

    const pools = [];
    try{ if(typeof TARGETS !== 'undefined') pools.push(TARGETS); }catch(_){}
    try{ if(typeof STAR_TARGETS !== 'undefined') pools.push(STAR_TARGETS); }catch(_){}
    for(const pool of pools){
      try{
        const arr = pool && pool[cat];
        if(!Array.isArray(arr)) continue;
        const sorted = arr.map(Number).filter(n=>Number.isFinite(n)).sort((a,b)=>a-b);
        for(const t of sorted){
          if(t > pts) return t;
        }
      }catch(_){}
    }
    /* FINAL_FALLBACK */
    try{
      if(typeof STAR_MIN !== 'undefined' && STAR_MIN[cat]){
        const arr = STAR_MIN[cat].map(Number).filter(n=>Number.isFinite(n) && n>0).sort((a,b)=>a-b);
        for(const t of arr){
          if(t > pts) return t;
        }
      }
    }catch(_){}
    return 0;
  }

  function rarityBonus(cat){
    const c = normCat(cat);
    if(c === 'Legendary') return 30;
    if(c === 'Epic') return 18;
    if(c === 'Rare') return 8;
    return 0;
  }

  function isCatchable(meta, key){
    try{
      const n = (meta && meta.name) ? meta.name : key;
      return (typeof isFishInSeason === 'function') ? !!isFishInSeason(n) : true;
    }catch(_){ return true; }
  }

  function isInSeasonFish(name){
    try{ return (typeof isFishInSeason === 'function') ? !!isFishInSeason(name) : true; }catch(_){ return true; }
  }

  function isSeasonModeActive(){
    try{ return (typeof isSeasonMode === 'function') ? !!isSeasonMode() : document.body.classList.contains('season-active'); }catch(_){ return document.body.classList.contains('season-active'); }
  }

  
  function clampPanelIntoViewAfterGuide(){
    try{
      const panel = document.getElementById('companionPanel');
      if(!panel) return;

      // Mobile: force within viewport gutters.
      if (window.innerWidth <= 820){
        panel.style.transform = 'none';
        panel.style.left = '12px';
        panel.style.right = '12px';
        panel.style.width = 'auto';
        panel.style.maxWidth = 'calc(100vw - 24px)';
        panel.style.boxSizing = 'border-box';
        return;
      }
      const rect = panel.getBoundingClientRect();
      const pad = 10;

      let dx = 0, dy = 0;
      if(rect.right > window.innerWidth - pad) dx = (window.innerWidth - pad) - rect.right;
      if(rect.left < pad) dx = pad - rect.left;
      if(rect.bottom > window.innerHeight - pad) dy = (window.innerHeight - pad) - rect.bottom;
      if(rect.top < pad) dy = pad - rect.top;

      // Only adjust via transform to avoid re-anchoring (prevents "jump" after import).
      if(dx || dy){
        panel.style.transform = `translate(${dx}px, ${dy}px)`;
      } else {
        panel.style.transform = 'translate(0px, 0px)';
      }
    }catch(_){
    }
  }

  function setRow(i, label, value){
    const rows = document.querySelectorAll('#companionRows .companion-row');
    if(!rows || !rows[i]) return;
    const l = rows[i].querySelector('.label');
    const v = rows[i].querySelector('.value');
    if(l) l.textContent = label;
    if(v) v.textContent = value;
  }

  function setBestOpportunity(name, upgradePts){
    setRow(0, 'High Value Target', `${toTitle(name)} → Next upgrade +${upgradePts} pts`);
  }

  function setNearTerm(name, dist){
    setRow(1, 'Closest Upgrade', `${toTitle(name)} → Nearest to next star (needs ${dist} pts`);
  }

  function setSeasonal(count){
    setRow(2, 'Worth Catching This Season', `${count} rare fish active`);
  }

  function setUnclaimed(fishName, pts){
    if(fishName){
      setRow(3, 'Missing Fish', `${toTitle(fishName)} → +${pts} pts`);
    } else {
      setRow(3, 'Missing Fish', 'No fish uncaught. Bestiary 100%');
    }
  }

  function clampGuidePanelIntoView(panel){
    try{
      const rect = panel.getBoundingClientRect();
      const pad = 16;
      let dx = 0, dy = 0;
      if(rect.right > window.innerWidth - pad) dx = (window.innerWidth - pad) - rect.right;
      if(rect.left < pad) dx = pad - rect.left;
      if(rect.bottom > window.innerHeight - pad) dy = (window.innerHeight - pad) - rect.bottom;
      if(rect.top < pad) dy = pad - rect.top;
      if(dx || dy){
        const left = (panel.style.left ? parseFloat(panel.style.left) : rect.left) || rect.left;
        const top  = (panel.style.top ? parseFloat(panel.style.top) : rect.top) || rect.top;
        panel.style.left = (left + dx) + 'px';
        panel.style.top  = (top + dy) + 'px';
        panel.style.right = 'auto';
      }
    }catch(_){}
  }

  function updateFishingGuide(){
    const panel = document.getElementById('companionPanel');
    if(!panel) return;

    // If dismissed, nothing to update.
    try{
      if(localStorage.getItem('fm_companion_dismissed') === '1') return;
    }catch(_){}

    const records = getStoredRecords();

    // Location order map for deterministic tie-breaks
    const __fmLocOrderMap = (function(){
      const map = {};
      try{
        const order = (typeof getLocationOrder === 'function') ? getLocationOrder() : [];
        (order||[]).forEach((loc,i)=>{ map[loc]=i; });
      }catch(_){ }
      return map;
    })();
    const isSeason = isSeasonModeActive();

    // Flatten current recorded fish (weight-based). records: {loc:{fishKey: weightStr}}
    const caught = new Map(); // fishKey -> bestWeight
    Object.keys(records || {}).forEach(loc=>{
      const m = records[loc] || {};
      Object.keys(m).forEach(fishKey=>{
        const w = Number(m[fishKey]);
        if(!w) return;
        const k = norm(fishKey);
        const prev = caught.get(k);
        if(!prev || w > prev) caught.set(k, w);
      });
    });

    const caughtKeys = Array.from(caught.keys());
    const anyData = caughtKeys.length > 0;

    // Toggle empty/welcome already handled elsewhere, but keep rows sensible.
    if(!anyData){
      setRow(0,'High Value Target','—');
      setRow(1,'Closest Upgrade','—');
      setRow(2,'Worth Catching This Season','—');
      setRow(3,'Missing Fish','—');
      return;
    }

    // Candidates
    const candidates = [];
    caughtKeys.forEach(key=>{
      const meta = getFishMeta(key);
      if(!meta) return;
      if(!isCatchable(meta, key)) return;

      // Respect OOS toggle used in dashboard, if present.
      try{
        if(typeof includeOOSSeasonDashboard !== 'undefined' && !includeOOSSeasonDashboard){
          if(!isInSeasonFish(meta.name || key)) return;
        }
      }catch(_){}

      // Respect legendary toggle if present.
      try{
        if(typeof includeLegendaryDashboard !== 'undefined' && !includeLegendaryDashboard){
          if(meta.category === 'Legendary') return;
        }
      }catch(_){}

      const w = caught.get(key);
      const pts = fishPointsFromWeight(w, meta);
      const maxPts = fishMaxPoints(meta) * (typeof SOFT_CAP_RATIO !== 'undefined' ? SOFT_CAP_RATIO : 1);
      const gain = Math.max(0, maxPts - pts);

      const next = nextStarTarget(normCat(meta.category), pts);
      const dist = Math.max(0, (Number(next)||0) - pts);
      const upgradeGain = dist; // points gained/needed at next upgrade step

      // Star proximity boost (C) only when reasonably near
      const PROX_ZONE = 60;
      const proxBoost = (dist > 0 && dist <= PROX_ZONE) ? (PROX_ZONE - dist) : 0;

      // Main score: gain + proxBoost + rarity bonus
      const score = proxBoost + rarityBonus(meta.category) + Math.min(gain, 200);

      candidates.push({ key, meta, pts, maxPts, gain, dist, upgradeGain, score });
    });

    if(!candidates.length){
      // Fallback: attempt uncaught-based suggestion (important for VIP / sparse modes)
      try{
        const anyFish = Object.keys(__fmGetFishIndex() || {});
        if(anyFish.length){
          const k = anyFish[0];
          setRow(0,'High Value Target', toTitle(k));
        }
      }catch(_){}

      // If filters removed everything, fallback to showing something neutral.
      setRow(0,'High Value Target','—');
      setRow(1,'Closest Upgrade','—');
      setRow(2,'Worth Catching This Season','—');
      setRow(3,'Missing Fish','—');
      return;
    }

    // High Value Target: highest rarity caught fish; within that tier, closest upgrade; then A→Z.
    (function(){
      const rank = (cat)=>{
        const c = normCat(cat);
        if(c === 'Legendary') return 3;
        if(c === 'Epic') return 2;
        if(c === 'Rare') return 1;
        return 0;
      };

      const pool0 = candidates.filter(c=>Number(c.dist||0) > 0);
      const pool = pool0.length ? pool0 : candidates.slice();

      pool.sort((a,b)=>{
        const ra = rank(a.meta && a.meta.category);
        const rb = rank(b.meta && b.meta.category);
        if(rb !== ra) return rb - ra;   // highest rarity first
        const da = Number(a.dist||0);
        const db = Number(b.dist||0);
        if(da !== db) return da - db;   // closest upgrade first
        return String(a.key).localeCompare(String(b.key)); // stable
      });

      const best = pool[0];
      if(!best){
        setRow(0,'High Value Target','—');
        return;
      }

      const d = Number(best.dist||0);
      if(d > 0){
        setRow(0,'High Value Target', `${toTitle(best.key)} → Nearest to next star (needs ${d} pts`);
      } else {
        setRow(0,'High Value Target', `${toTitle(best.key)} → Nearest to next star`);
      }
    })();

// Easy Catch:
    // If ANY fish uncaught (in-season), pick an uncaught fish from the easiest tier (Common→Rare→Epic→Legendary).
    // Tie-break: lower-level map first, then A→Z.
    // If NO fish uncaught (Bestiary 100% for this dataset), pick an easy upgrade target:
    // start at Common and find the caught fish with the LOWEST current points that is still below effective max (SOFT_CAP_RATIO).
    // If all fish in tier are maxed, move up to Rare→Epic→Legendary.
    (function(){
      const idx = __fmGetFishIndex();

      // Location order map for tie-breaks (lower-level map first)
      const locOrder = {};
      try{
        const locationsObj = (typeof getLocations === 'function') ? getLocations() :
          ((typeof isVipModeActive === 'function' && isVipModeActive()) ? (typeof LOCATIONS_VIP !== 'undefined' ? LOCATIONS_VIP : {}) : (typeof LOCATIONS !== 'undefined' ? LOCATIONS : {}));
        Object.keys(locationsObj || {}).forEach((loc,i)=>{ locOrder[loc]=i; });
      }catch(_){}

      const tiers = ['Common','Rare','Epic','Legendary'];
      const effRatio = (typeof SOFT_CAP_RATIO !== 'undefined' ? SOFT_CAP_RATIO : 0.945);

      // Phase 1: any uncaught fish?
      const uncaughtByTier = { Common:[], Rare:[], Epic:[], Legendary:[] };
      Object.keys(idx || {}).forEach(k=>{
        const meta = idx[k];
        if(!meta) return;
        if(!isCatchable(meta, k)) return;

        try{
          if(typeof includeLegendaryDashboard !== 'undefined' && !includeLegendaryDashboard){
            if(normCat(meta.category) === 'Legendary') return;
          }
        }catch(_){}

        if(caught.has(k)) return;
        const t = normCat(meta.category);
        if(!(t in uncaughtByTier)) return;

        const loc = meta.location || '';
        const lr = (loc in locOrder) ? locOrder[loc] : 9999;
        uncaughtByTier[t].push({k, lr});
      });

      const anyUncaught = tiers.some(t => (uncaughtByTier[t] || []).length > 0);

      if(anyUncaught){
        for(const t of tiers){
          const list = uncaughtByTier[t];
          if(!list || !list.length) continue;
          list.sort((a,b)=> (a.lr - b.lr) || String(a.k).localeCompare(String(b.k)));
          const pick = list[0];
          setRow(1,'Easy Catch', `${toTitle(pick.k)} → Not yet caught`);
          return;
        }
      }

      // Phase 2: bestiary 100% -> easy upgrade
      for(const t of tiers){
        const pool = [];
        caughtKeys.forEach(k=>{
          const meta = getFishMeta(k);
          if(!meta) return;
          if(!isCatchable(meta, k)) return;
          if(normCat(meta.category) !== t) return;

          const w = caught.get(k);
          const pts = w ? fishPointsFromWeight(w, meta) : 0;
          const effMax = fishMaxPoints(meta) * effRatio;

          const gap = effMax - pts;
          if(!(gap > 0)) return;

          const loc = meta.location || '';
          const lr = (loc in locOrder) ? locOrder[loc] : 9999;
          pool.push({k, pts, lr});
        });

        if(!pool.length) continue;

        pool.sort((a,b)=> (a.pts - b.pts) || (a.lr - b.lr) || String(a.k).localeCompare(String(b.k)));
        const pick = pool[0];
        setRow(1,'Easy Catch', `${toTitle(pick.k)} → Easy upgrade`);
        return;
      }

      setRow(1,'Easy Catch', 'No easy catches right now');
    })();

// Seasonal advantage: rare+ fish in season and uncaught
    // Build uncaught list from catalog
    const uncaughtRareActive = [];
    try{
      Object.keys(__fmGetFishIndex()).forEach(k=>{
        if(caught.has(k)) return;
        const meta = __fmGetFishIndex()[k];
        if(!meta) return;
        if(!isCatchable(meta, k)) return;
        if(meta.category === 'Common') return;
        try{
          if(typeof includeLegendaryDashboard !== 'undefined' && !includeLegendaryDashboard){
            if(meta.category === 'Legendary') return;
          }
        }catch(_){}
        if(!isInSeasonFish(meta.name || k)) return;
        uncaughtRareActive.push(k);
      });
    }catch(_){}
    if(!isSeason){
      setRow(2,'Seasonal Targets','Switch to Season view');
    } else {
      setSeasonal(uncaughtRareActive.length);
    }

    // Unclaimed points: top 3 uncaught by max points (filtered by season if dashboard excludes OOS)
    const uncaught = [];
    try{
      Object.keys(__fmGetFishIndex()).forEach(k=>{
        if(caught.has(k)) return;
        const meta = __fmGetFishIndex()[k];
        if(!meta) return;
        if(!isCatchable(meta, k)) return;

        try{
          if(typeof includeOOSSeasonDashboard !== 'undefined' && !includeOOSSeasonDashboard){
            if(!isInSeasonFish(meta.name || k)) return;
          }
        }catch(_){}

        try{
          if(typeof includeLegendaryDashboard !== 'undefined' && !includeLegendaryDashboard){
            if(meta.category === 'Legendary') return;
          }
        }catch(_){}

        const maxPts = fishMaxPoints(meta) * (typeof SOFT_CAP_RATIO !== 'undefined' ? SOFT_CAP_RATIO : 1);
        if(maxPts <= 0) return;
        uncaught.push({k, maxPts});
      });
    }catch(_){}
    uncaught.sort((a,b)=>{
      const ra = (function(){ const c=normCat((__fmGetFishIndex()[a.k]||{}).category); return c==='Legendary'?3:c==='Epic'?2:c==='Rare'?1:0; })();
      const rb = (function(){ const c=normCat((__fmGetFishIndex()[b.k]||{}).category); return c==='Legendary'?3:c==='Epic'?2:c==='Rare'?1:0; })();
      if(rb!==ra) return rb-ra; // higher rarity first
      if(b.maxPts!==a.maxPts) return b.maxPts-a.maxPts;
      const la = __fmLocOrderMap[(__fmGetFishIndex()[a.k]||{}).location] ?? 9999;
      const lb = __fmLocOrderMap[(__fmGetFishIndex()[b.k]||{}).location] ?? 9999;
      if(la!==lb) return la-lb; // lower-level map first
      return String(a.k).localeCompare(String(b.k));
    });
    const bestU = uncaught[0];
    if(bestU){
      setUnclaimed(bestU.k, bestU.maxPts);
    setTimeout(clampPanelIntoViewAfterGuide, 0);
    } else {
      setUnclaimed(null, 0);
    setTimeout(clampPanelIntoViewAfterGuide, 0);
    }

        try{ clampGuidePanelIntoView(panel); }catch(_){}

// Ensure guide rows visible when data exists
    try{
      const welcome = document.getElementById('companionWelcome');
      const rowsEl = document.getElementById('companionRows');
      if(welcome) welcome.classList.add('hidden');
      if(rowsEl) rowsEl.classList.remove('hidden');
    }catch(_){}
  }

  // Expose for debugging / manual refresh
  window.__fmUpdateFishingGuide = updateFishingGuide;

  // Wrap updateDashboard so any existing update triggers refresh the guide.
  // This fixes imports/restores and any toggle changes automatically.
  function wrapUpdateDashboard(){
    try{
      if(typeof updateDashboard !== 'function') return;
      if(updateDashboard.__fm_wrapped) return;

      const orig = updateDashboard;
      const wrapped = function(){
        const r = orig.apply(this, arguments);
        try{ updateFishingGuide(); }catch(_){}
        return r;
      };
      wrapped.__fm_wrapped = true;
      updateDashboard = wrapped;
    }catch(_){}
  }

  // Init: wrap and run once after load + after possible async restores
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ()=>{
      wrapUpdateDashboard();
      setTimeout(()=>{ try{ updateFishingGuide(); }catch(_){} }, 350);
      setTimeout(()=>{ try{ updateFishingGuide(); }catch(_){} }, 900);
    });
  }else{
    wrapUpdateDashboard();
    setTimeout(()=>{ try{ updateFishingGuide(); }catch(_){} }, 350);
    setTimeout(()=>{ try{ updateFishingGuide(); }catch(_){} }, 900);
  }
})();
 /* End Fishing Guide Opportunity Logic */




function rebuildShareLocations(){
  const container = document.getElementById('dynamicShareLocations');
  if(!container || typeof getLocationsData !== 'function') return;

  container.innerHTML = '';

  const locations = Object.keys(getLocationsData() || {});

  locations.forEach(loc => {
    const btn = document.createElement('button');
    btn.className = 'menu-item';
    btn.type = 'button';
    btn.setAttribute('role','menuitem');
    btn.setAttribute('data-share','location');
    btn.setAttribute('data-loc', loc);
    btn.textContent = loc;
    container.appendChild(btn);
  });
}

document.addEventListener('DOMContentLoaded', rebuildShareLocations);



function _fmBadgeTier(val, t1, t2, t3){
  if(val >= t3) return 3;
  if(val >= t2) return 2;
  if(val >= t1) return 1;
  return 0;
}

function _fmCrownSvg(tier){
  // tier 1 = outline; tier 2 = filled; tier 3 = filled + dots on tips
  const fill = (tier >= 2) ? 'currentColor' : 'none';
  const fillOpacity = (tier >= 2) ? '0.22' : '0';
  const dots = (tier >= 3) ? `
    <circle cx="6.6" cy="6.2" r="1.3" fill="currentColor" opacity="0.95"/>
    <circle cx="12" cy="4.2" r="1.3" fill="currentColor" opacity="0.95"/>
    <circle cx="17.4" cy="6.2" r="1.3" fill="currentColor" opacity="0.95"/>
  ` : '';
  return `
  <svg class="crown" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3.5 9.8L7.2 6.7L12 3.7L16.8 7.1L20.5 9.1L19.2 19.2H4.8L3.5 9.8Z"
          stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" />
    <path d="M4.8 18.7H19.2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M3.5 9.8L7.2 6.7L12 3.7L16.8 7.1L20.5 9.1"
          fill="${fill}" fill-opacity="${fillOpacity}"/>
    ${dots}
  </svg>`;
}

function renderKpiBadges(kpis){
  try{
    // Show in all views (Main/VIP, Season/All-time).
    const isVip = (typeof isVipModeActive==='function') ? isVipModeActive() : false;
    const isSeason = (typeof isSeasonMode==='function') ? isSeasonMode() : document.body.classList.contains('season-active');
    const sPoints = document.getElementById('badgeStampPoints');
    const s4 = document.getElementById('badgeStamp4');
    const s5 = document.getElementById('badgeStamp5');
    if(!sPoints || !s4 || !s5) return;

    // Respect dashboard KPI toggles (so crowns match what's shown).
    const includeLegendary = (typeof includeLegendaryDashboard !== 'undefined') ? !!includeLegendaryDashboard : true;
    const includeOOS = (typeof includeOOSSeasonDashboard !== 'undefined') ? !!includeOOSSeasonDashboard : true;

    const totalPoints = Number(kpis?.totalPoints || 0);
    const pct4 = Number(kpis?.pct4 || 0);
    const pct5 = Number(kpis?.pct5 || 0);

    function fmtInt(n){
      try{ return Number(n||0).toLocaleString(undefined, { maximumFractionDigits: 0 }); }catch(_){ return String(Math.round(Number(n||0)||0)); }
    }

    function normCat2(cat){
      const c = String(cat||'').toLowerCase();
      if(c.includes('legend')) return 'Legendary';
      if(c.includes('epic')) return 'Epic';
      if(c.includes('rare')) return 'Rare';
      return 'Common';
    }

    function _maxPointsForMeta(meta, now){
      try{
        const cat = normCat2(meta && meta.category);
        if(!includeLegendary && cat === 'Legendary') return 0;

        const soft = (typeof SOFT_CAP_RATIO === 'number') ? SOFT_CAP_RATIO : 0.945;
        // IMPORTANT: crowns should use the same *category* max model as the rest of the app
        // (CATEGORY_MIN_POINTS * 2), not any per-fish variance. This also avoids any timing/
        // helper-availability issues.
        const baseMin = (typeof CATEGORY_MIN_POINTS !== 'undefined' && CATEGORY_MIN_POINTS)
          ? (CATEGORY_MIN_POINTS[cat] || 0)
          : 0;
        const baseMax = baseMin * 2;
        if(cat === 'Legendary'){
          return Math.round(baseMax * soft);
        }

        // Season view: optionally exclude OOS fish entirely.
        if(isSeason && !includeOOS){
          const inSeason = isVip ? true : (typeof isFishInSeason === 'function' ? isFishInSeason(meta && meta.name, now) : true);
          if(!inSeason) return 0;
          return Math.round(baseMax * soft);
        }

        // Season view with OOS included: cap OOS fish by type.
        if(isSeason && includeOOS){
          const inSeason = isVip ? true : (typeof isFishInSeason === 'function' ? isFishInSeason(meta && meta.name, now) : true);
          if(inSeason) return Math.round(baseMax * soft);
          const cap = (typeof OOS_MAX_POINTS !== 'undefined') ? (OOS_MAX_POINTS[cat] ?? null) : null;
          return Number(cap || 0);
        }

        // All-time: always soft-capped.
        return Math.round(baseMax * soft);
      }catch(_){ return 0; }
    }

    function computeMaxPointsForView(){
      const now = new Date();
      let sum = 0;
      try{
        const locationsObj = (typeof getLocations === 'function')
          ? getLocations()
          : (isVip ? (typeof LOCATIONS_VIP !== 'undefined' ? LOCATIONS_VIP : {}) : (typeof LOCATIONS !== 'undefined' ? LOCATIONS : {}));
        Object.keys(locationsObj || {}).forEach(loc=>{
          (locationsObj[loc] || []).forEach(f=>{
            if(!f) return;
            // Ensure location exists on meta (some helpers expect it).
            const meta = (f && typeof f === 'object') ? ({...f, location: loc}) : f;
            sum += _maxPointsForMeta(meta, now);
          });
        });
      }catch(_){ sum = 0; }
      return sum;
    }

    const maxPoints = computeMaxPointsForView();
    const pctPoints = maxPoints > 0 ? (totalPoints / maxPoints) * 100 : 0;

    // Thresholds (percent-based)
    const THR = isSeason ? {
      points: [60,75,85],
      pct4: [25,50,70],
      pct5: [10,20,35]
    } : {
      points: [75,85,90],
      pct4: [45,65,75],
      pct5: [15,25,35]
    };

    const tPoints = _fmBadgeTier(pctPoints, THR.points[0], THR.points[1], THR.points[2]);
    const t4 = _fmBadgeTier((pct4 + pct5), THR.pct4[0], THR.pct4[1], THR.pct4[2]);
    const t5 = _fmBadgeTier(pct5, THR.pct5[0], THR.pct5[1], THR.pct5[2]);

    const setStamp = (el, cls, tier, kind) => {
      if(!tier){
        el.style.display = 'none';
        el.innerHTML = '';
        el.removeAttribute('title');
        return;
      }
      el.className = 'kpi-stamp ' + cls;
      el.innerHTML = _fmCrownSvg(tier);
      el.style.display = 'inline-flex';

      let currPct = 0, nextPct = null, label = '', metricLabel = '', ptsThr = 0, currentVal = 0;
      const scope = isSeason ? 'Season' : 'All-time';
      const fmtPctGap = (n) => {
        const v = Math.max(0, Number(n || 0));
        return (Math.round(v * 10) / 10).toFixed(1).replace(/\.0$/, '');
      };
      if(kind === 'points'){
        currPct = tier===1 ? THR.points[0] : (tier===2 ? THR.points[1] : THR.points[2]);
        nextPct = tier===1 ? THR.points[1] : (tier===2 ? THR.points[2] : null);
        label = 'Points Crown';
        metricLabel = `${scope} Max`;
        currentVal = pctPoints;
      }else if(kind === 'pct4'){
        currPct = tier===1 ? THR.pct4[0] : (tier===2 ? THR.pct4[1] : THR.pct4[2]);
        nextPct = tier===1 ? THR.pct4[1] : (tier===2 ? THR.pct4[2] : null);
        label = '4★ Crown';
        metricLabel = `${scope} 4*+ catches`;
        currentVal = pct4;
      }else if(kind === 'pct5'){
        currPct = tier===1 ? THR.pct5[0] : (tier===2 ? THR.pct5[1] : THR.pct5[2]);
        nextPct = tier===1 ? THR.pct5[1] : (tier===2 ? THR.pct5[2] : null);
        label = '5★ Crown';
        metricLabel = `${scope} 5* catches`;
        currentVal = pct5;
      }

      let t = '';
      if(nextPct != null){
        const pctGap = fmtPctGap(nextPct - currentVal);
        if(kind === 'points'){
          ptsThr = maxPoints > 0 ? Math.ceil(maxPoints * (nextPct/100)) : 0;
          const ptsGap = Math.max(0, ptsThr - Math.round(totalPoints));
          t = `${label} — Tier ${tier} unlocked.
Next: Tier ${tier+1} at ${nextPct}% ${metricLabel} (${fmtInt(ptsThr)} pts).
${pctGap}% / ${fmtInt(ptsGap)} pts to go.`;
        }else{
          t = `${label} — Tier ${tier} unlocked.
Next: Tier ${tier+1} at ${nextPct}% ${metricLabel}.
${pctGap}% to go.`;
        }
      }else{
        if(kind === 'points'){
          ptsThr = maxPoints > 0 ? Math.ceil(maxPoints * (currPct/100)) : 0;
          t = `${label} — Tier ${tier} unlocked.
Top tier achieved.
Requirement: ${currPct}% ${metricLabel} (${fmtInt(ptsThr)} pts).`;
        }else{
          t = `${label} — Tier ${tier} unlocked.
Top tier achieved.
Requirement: ${currPct}% ${metricLabel}.`;
        }
      }
      if(t) el.title = t;
    };

    setStamp(sPoints, 'gold', tPoints, 'points');
    setStamp(s4, 'blue', t4, 'pct4');
    setStamp(s5, 'purple', t5, 'pct5');
  }catch(_){}
}



/* --- PNG Crown Tier Override (safe) --- */
(function(){
  function tierSrc(tier){
    if(tier === 1) return 'crown_t1.png';
    if(tier === 2) return 'crown_t2.png';
    if(tier === 3) return 'crown_t3.png';
    return 'crown_t1.png';
  }
  window._fmCrownSvg = function(tier){
    return '<img class="crown-img" src="' + tierSrc(tier) + '" alt="" />';
  };
})();




