const SAVE_KEY = "lostLittleGirlPaths.v2";
const MAX_STAT = 8;

const places = [
  ["start", "Mom"],
  ["church", "Jeremy"],
  ["woods", "Nicholas"],
  ["playground", "Michael"],
  ["station", "Michaela"],
  ["hospital", "Trent"],
  ["river", "Haley"],
  ["market", "Chase"],
];

const endingNames = [
  "Ringing Home",
  "Bell Tower Signal",
  "The Last Pew",
  "Streetlight Fence",
  "Lantern Riddle",
  "Lantern Smile",
  "Slide Chalk Door",
  "Chalk Tunnel",
  "Mirror Window",
  "Station Guard",
  "Radio Behind Glass",
  "Last Carriage",
  "Security Desk",
  "Extension Light",
  "Ward Thirteen",
  "Riverside Rescue",
  "Marker on the Rail",
  "Black Water Echo",
  "Kind Shopkeeper",
  "Block Twelve Intercom",
  "Red Door Loop",
];

const family = [
  {
    name: "Mom",
    place: "start",
    role: "Home anchor",
    description: "Brown-haired white mom, the voice Michaela is trying to get back to.",
  },
  {
    name: "Jeremy",
    place: "church",
    role: "Bell road",
    description: "Biracial boy with brown hair and brown or hazel eyes; steady and protective.",
  },
  {
    name: "Nicholas",
    place: "woods",
    role: "Woods trail",
    description: "Biracial boy with brown hair and brown or hazel eyes; observant and brave.",
  },
  {
    name: "Michael",
    place: "playground",
    role: "Chalk path",
    description: "White boy with brown hair and brown or hazel eyes; puzzle-minded and quick.",
  },
  {
    name: "Michaela",
    place: "station",
    role: "Lost girl",
    description: "White girl with blondish brown hair; the little girl choosing her way home.",
  },
  {
    name: "Trent",
    place: "hospital",
    role: "Mercy gate",
    description: "White boy with brown hair and brown or hazel eyes; calm under pressure.",
  },
  {
    name: "Haley",
    place: "river",
    role: "River steps",
    description: "White girl with blondish brown hair; gentle, bright, and good at noticing signs.",
  },
  {
    name: "Chase",
    place: "market",
    role: "Market lights",
    description: "Biracial boy with brown hair and brown or hazel eyes; fast, funny, and bold.",
  },
];

const scenes = {
  start: {
    title: "The Street With No Sound",
    location: "Midnight crossing",
    place: "start",
    label: "Seven Roads",
    text:
      "Michaela stands under a broken street clock with a yellow raincoat, a tiny flashlight, and a worn stuffed rabbit. Mom is somewhere past the dark blocks, and seven family-marked paths wait ahead: Jeremy, Nicholas, Michael, Michaela, Trent, Haley, and Chase.",
    choices: [
      {
        title: "Jeremy's bell road",
        detail: "A phone booth blinks beside open church doors.",
        to: "church",
        effects: { courage: 1, signal: 1 },
        item: "Jeremy's matchbook",
      },
      {
        title: "Nicholas's woods trail",
        detail: "Branches lift and lower like sleeping ribs.",
        to: "woods",
        effects: { courage: 2, shadow: 1 },
        clue: "Nicholas's tire marks",
      },
      {
        title: "Michael's chalk path",
        detail: "A swing moves without wind.",
        to: "playground",
        effects: { courage: 1, shadow: 1 },
        item: "Michael's chalk stub",
      },
      {
        title: "Michaela's station signal",
        detail: "A platform light flashes in groups of three.",
        to: "station",
        effects: { signal: 1 },
        clue: "Michaela's station code",
      },
      {
        title: "Trent's hospital gate",
        detail: "The security office is lit, but the ward hall is dark.",
        to: "hospital",
        effects: { signal: 1, shadow: 1 },
        item: "Trent's visitor badge",
      },
      {
        title: "Haley's riverside steps",
        detail: "A rescue phone hangs above black water.",
        to: "river",
        effects: { courage: 1, signal: 1 },
        clue: "Haley's bridge number",
      },
      {
        title: "Chase's market lights",
        detail: "Closed shutters glow with red neon.",
        to: "market",
        effects: { signal: 1 },
        item: "Chase's receipt scrap",
      },
    ],
  },

  church: {
    title: "Bells at Midnight",
    location: "Old church road",
    place: "church",
    label: "Bells",
    text:
      "Jeremy's name is scratched into the phone booth shelf beside a tiny matchbook. Michaela remembers his steady voice and protective look: brown hair, brown or hazel eyes, never panicking first.",
    choices: [
      {
        title: "Use the phone booth",
        detail: "Read the emergency sticker and call for help.",
        to: "safe_call",
        effects: { signal: 3, shadow: -1 },
        clue: "Jeremy's phone booth address",
      },
      {
        title: "Ring the bell three times",
        detail: "Send a signal across the sleeping blocks.",
        to: "safe_bell",
        effects: { courage: 2, signal: 2 },
        requires: { item: "Jeremy's matchbook" },
      },
      {
        title: "Enter the last pew",
        detail: "A whisper repeats Michaela's name from the dark.",
        to: "shadow_pew",
        effects: { shadow: 3 },
      },
    ],
  },

  woods: {
    title: "The Breathing Trees",
    location: "North woods trail",
    place: "woods",
    label: "Trees",
    text:
      "Nicholas's trail is marked by bent grass and tire tracks. Michaela imagines him checking every detail with brown hair falling into brown or hazel eyes, brave enough to notice what others miss.",
    choices: [
      {
        title: "Follow the tire marks",
        detail: "Keep the flashlight low and move toward the road.",
        to: "safe_fence",
        effects: { signal: 2, shadow: -1 },
        requires: { clue: "Nicholas's tire marks" },
      },
      {
        title: "Ask the lantern a question",
        detail: "The lantern holder only answers in riddles.",
        to: "lantern_riddle",
        effects: { courage: 2, shadow: 1 },
        clue: "Nicholas's north riddle",
      },
      {
        title: "Step off the trail",
        detail: "The trees close behind Michaela like a curtain.",
        to: "lantern_man",
        effects: { shadow: 3 },
      },
    ],
  },

  playground: {
    title: "Swings That Move Alone",
    location: "Schoolyard playground",
    place: "playground",
    label: "Swings",
    text:
      "Michael's chalk marks circle the empty playground. Michaela can almost see him there with brown hair, brown or hazel eyes, and a puzzle already half-solved before anyone else sees it.",
    choices: [
      {
        title: "Draw an arrow back",
        detail: "Use chalk to mark the way out before entering.",
        to: "tunnel_safe",
        effects: { courage: 1, signal: 1 },
        requires: { item: "Michael's chalk stub" },
      },
      {
        title: "Follow the tunnel",
        detail: "The crawlspace hums with old playground songs.",
        to: "tunnel",
        effects: { courage: 1, shadow: 2 },
      },
      {
        title: "Look into the window",
        detail: "Michaela's own kitchen light is on inside the glass.",
        to: "cat_path",
        effects: { shadow: 2 },
      },
    ],
  },

  station: {
    title: "Foggy Platform",
    location: "Station 313",
    place: "station",
    label: "Platform",
    text:
      "This is Michaela's own path. Her blondish brown hair is damp from rain, her flashlight shakes in her hand, and the timetable is blank except for the station code she already found: 3:13.",
    choices: [
      {
        title: "Signal the guard",
        detail: "Flash the light in groups of three.",
        to: "safe_guard",
        effects: { signal: 3, shadow: -1 },
        requires: { clue: "Michaela's station code" },
      },
      {
        title: "Check the station office",
        detail: "A radio crackles behind scratched glass.",
        to: "station_office",
        effects: { signal: 2 },
        item: "Michaela's station whistle",
      },
      {
        title: "Board the empty train",
        detail: "The doors are open, but there is no conductor.",
        to: "ghost_train",
        effects: { shadow: 3 },
      },
    ],
  },

  hospital: {
    title: "Broken Hospital Gate",
    location: "Mercy hospital gate",
    place: "hospital",
    label: "Mercy",
    text:
      "Trent's gate has a visitor badge hooked to the fence. Michaela thinks of Trent's calm face, brown hair, and brown or hazel eyes, and chooses the lit security window over the dark hall.",
    choices: [
      {
        title: "Show the visitor badge",
        detail: "Stay in the light and knock on the office glass.",
        to: "safe_security",
        effects: { signal: 3, shadow: -1 },
        requires: { item: "Trent's visitor badge" },
      },
      {
        title: "Use the lobby phone",
        detail: "Dial the number written on the reception pad.",
        to: "hospital_phone",
        effects: { signal: 2, courage: 1 },
        clue: "Trent's dispatch extension",
      },
      {
        title: "Walk the ward hallway",
        detail: "Room thirteen has Michaela's name on the chart.",
        to: "ward_13",
        effects: { shadow: 3 },
      },
    ],
  },

  river: {
    title: "Riverside Steps",
    location: "Bridge number 9",
    place: "river",
    label: "Water",
    text:
      "Haley's river steps shine with rain. Michaela remembers Haley's blondish brown hair and gentle way of spotting tiny signs, then sees the bridge number painted near the rescue phone.",
    choices: [
      {
        title: "Use the rescue phone",
        detail: "Give the bridge number and stay near the pole.",
        to: "safe_rescue",
        effects: { signal: 3, shadow: -1 },
        requires: { clue: "Haley's bridge number" },
      },
      {
        title: "Tie the rabbit to the rail",
        detail: "Leave a marker where rescuers can see it.",
        to: "river_marker",
        effects: { courage: 2, signal: 1 },
        item: "Haley's rail marker",
      },
      {
        title: "Follow the waterline",
        detail: "Another set of footsteps appears beside hers.",
        to: "drowned_path",
        effects: { shadow: 3 },
      },
    ],
  },

  market: {
    title: "Neon Market Alley",
    location: "Market row",
    place: "market",
    label: "Neon",
    text:
      "Chase's market path flashes fast and bright. Michaela pictures his brown hair, brown or hazel eyes, and bold grin as the OPEN sign flickers beside the red alley.",
    choices: [
      {
        title: "Knock at the open shop",
        detail: "Slide the receipt scrap under the door first.",
        to: "safe_shop",
        effects: { signal: 3, shadow: -1 },
        requires: { item: "Chase's receipt scrap" },
      },
      {
        title: "Read the delivery board",
        detail: "Find the block number and a working intercom.",
        to: "market_intercom",
        effects: { signal: 2 },
        clue: "Chase's market block",
      },
      {
        title: "Take the red alley",
        detail: "The same red door waits at every turn.",
        to: "red_alley",
        effects: { shadow: 3 },
      },
    ],
  },

  station_office: {
    title: "Radio Behind Glass",
    location: "Station office",
    place: "station",
    label: "Radio",
    text:
      "The radio is old, but it works. Michaela presses the side button and speaks slowly until the guard answers from the far platform.",
    ending: "Radio Behind Glass",
    endingType: "safe",
  },

  hospital_phone: {
    title: "Extension Light",
    location: "Hospital lobby",
    place: "hospital",
    label: "Lobby",
    text:
      "The dispatcher asks Michaela to stay where the lobby cameras can see her. A security guard arrives with a blanket and a careful voice.",
    ending: "Extension Light",
    endingType: "safe",
  },

  river_marker: {
    title: "Marker on the Rail",
    location: "Bridge number 9",
    place: "river",
    label: "Rail",
    text:
      "The stuffed rabbit flutters from the rail like a tiny flag. The rescue crew sees it before Michaela sees them, and the bridge fills with warm lights.",
    ending: "Marker on the Rail",
    endingType: "safe",
  },

  market_intercom: {
    title: "Block Twelve Intercom",
    location: "Market row",
    place: "market",
    label: "Intercom",
    text:
      "The intercom buzzes awake. A shopkeeper recognizes the delivery code, unlocks the front door, and calls Michaela's family from the counter.",
    ending: "Block Twelve Intercom",
    endingType: "safe",
  },

  safe_call: {
    title: "Ringing Home",
    location: "Phone booth",
    place: "church",
    label: "Home",
    text:
      "Michaela reads the address from the booth sticker. Mom stays on the line until headlights turn the corner and the church bell stops.",
    ending: "Ringing Home",
    endingType: "safe",
  },

  safe_bell: {
    title: "Bell Tower Signal",
    location: "Old church road",
    place: "church",
    label: "Signal",
    text:
      "Three clear rings roll over the rooftops. A neighbor opens a curtain, then a door, then walks Michaela to the porch light.",
    ending: "Bell Tower Signal",
    endingType: "safe",
  },

  safe_fence: {
    title: "Streetlight Fence",
    location: "North woods edge",
    place: "woods",
    label: "Fence",
    text:
      "The tire marks lead to a maintenance gate and a road striped with streetlights. Michaela waits under the brightest one until help arrives.",
    ending: "Streetlight Fence",
    endingType: "safe",
  },

  lantern_riddle: {
    title: "Lantern Riddle",
    location: "North woods trail",
    place: "woods",
    label: "North",
    text:
      "Michaela answers north, and the lantern turns into a road sign. The way home is strange, but it is real enough to follow.",
    ending: "Lantern Riddle",
    endingType: "strange",
  },

  tunnel_safe: {
    title: "Slide Chalk Door",
    location: "Schoolyard tunnel",
    place: "playground",
    label: "Chalk",
    text:
      "The chalk arrow glows behind Michaela each time the tunnel turns. At the last bend, the slide opens onto a familiar sidewalk.",
    ending: "Slide Chalk Door",
    endingType: "strange",
  },

  tunnel: {
    title: "Chalk Tunnel",
    location: "Schoolyard tunnel",
    place: "playground",
    label: "Tunnel",
    text:
      "A drawing on the wall shows Michaela entering the tunnel before she arrived. The next drawing shows her still inside it.",
    ending: "Chalk Tunnel",
    endingType: "strange",
  },

  cat_path: {
    title: "Mirror Window",
    location: "School windows",
    place: "playground",
    label: "Mirror",
    text:
      "Michaela sees herself already inside her kitchen, dripping rainwater on the floor. The girl in the glass raises a finger for silence.",
    ending: "Mirror Window",
    endingType: "dark",
  },

  safe_guard: {
    title: "Station Guard",
    location: "Station 313",
    place: "station",
    label: "Guard",
    text:
      "The guard counts the flashes correctly and radios the police. Michaela waits in the ticket office with hot chocolate and a dry towel.",
    ending: "Station Guard",
    endingType: "safe",
  },

  ghost_train: {
    title: "Last Carriage",
    location: "Empty train",
    place: "station",
    label: "Carriage",
    text:
      "The train doors close without a sound. Each stop outside the window is the same station, and every clock reads 3:13.",
    ending: "Last Carriage",
    endingType: "dark",
  },

  safe_security: {
    title: "Security Desk",
    location: "Mercy hospital gate",
    place: "hospital",
    label: "Desk",
    text:
      "The guard checks Michaela's name, calls her family, and keeps the hallway door locked until the police arrive.",
    ending: "Security Desk",
    endingType: "safe",
  },

  ward_13: {
    title: "Ward Thirteen",
    location: "Mercy hospital ward",
    place: "hospital",
    label: "Ward",
    text:
      "Every room is empty except one. The chart on the bed has Michaela's name, and the date is tomorrow.",
    ending: "Ward Thirteen",
    endingType: "dark",
  },

  safe_rescue: {
    title: "Riverside Rescue",
    location: "Bridge number 9",
    place: "river",
    label: "Rescue",
    text:
      "Michaela gives the bridge number, keeps away from the steps, and watches rescue lights ripple across the water.",
    ending: "Riverside Rescue",
    endingType: "safe",
  },

  drowned_path: {
    title: "Black Water Echo",
    location: "Under the bridge",
    place: "river",
    label: "Echo",
    text:
      "Footprints appear beside Michaela's, filling with water. When she turns back, the rescue phone is too far away to hear.",
    ending: "Black Water Echo",
    endingType: "dark",
  },

  safe_shop: {
    title: "Kind Shopkeeper",
    location: "Open market shop",
    place: "market",
    label: "Open",
    text:
      "The shopkeeper unlocks the door, wraps Michaela in a clean coat, and calls the number printed on Chase's receipt scrap.",
    ending: "Kind Shopkeeper",
    endingType: "safe",
  },

  red_alley: {
    title: "Red Door Loop",
    location: "Market side alley",
    place: "market",
    label: "Loop",
    text:
      "The alley turns left, then left, then left again. The same red door waits each time, warmer than before.",
    ending: "Red Door Loop",
    endingType: "dark",
  },

  shadow_pew: {
    title: "The Last Pew",
    location: "Old church nave",
    place: "church",
    label: "Pew",
    text:
      "A whisper says Michaela's name from the dark behind her. The phone booth outside rings and rings, but no one answers it.",
    ending: "The Last Pew",
    endingType: "dark",
  },

  lantern_man: {
    title: "Lantern Smile",
    location: "North woods trail",
    place: "woods",
    label: "Lantern",
    text:
      "The lantern holder turns. There is no face behind the light, only the shape of a smile where the road should be.",
    ending: "Lantern Smile",
    endingType: "dark",
  },
};

const nodes = {
  sceneTitle: document.getElementById("sceneTitle"),
  sceneText: document.getElementById("sceneText"),
  sceneLocation: document.getElementById("sceneLocation"),
  sceneCount: document.getElementById("sceneCount"),
  sceneArt: document.getElementById("sceneArt"),
  choiceList: document.getElementById("choiceList"),
  pathLog: document.getElementById("pathLog"),
  routeMap: document.getElementById("routeMap"),
  familyCast: document.getElementById("familyCast"),
  familyCount: document.getElementById("familyCount"),
  inventoryList: document.getElementById("inventoryList"),
  clueList: document.getElementById("clueList"),
  itemCount: document.getElementById("itemCount"),
  clueCount: document.getElementById("clueCount"),
  visitedCount: document.getElementById("visitedCount"),
  endingArchive: document.getElementById("endingArchive"),
  endingCount: document.getElementById("endingCount"),
  courageValue: document.getElementById("courageValue"),
  signalValue: document.getElementById("signalValue"),
  shadowValue: document.getElementById("shadowValue"),
  courageBar: document.getElementById("courageBar"),
  signalBar: document.getElementById("signalBar"),
  shadowBar: document.getElementById("shadowBar"),
  saveState: document.getElementById("saveState"),
  restartBtn: document.getElementById("restartBtn"),
  clearLogBtn: document.getElementById("clearLogBtn"),
  narrateBtn: document.getElementById("narrateBtn"),
  soundBtn: document.getElementById("soundBtn"),
  toast: document.getElementById("toast"),
};

const defaultState = {
  current: "start",
  stats: { courage: 2, signal: 2, shadow: 0 },
  inventory: [],
  clues: [],
  log: [],
  visited: ["start"],
  endingsFound: [],
  sceneVisits: 1,
};

let state = loadState();
let audio = {
  enabled: false,
  context: null,
  nodes: [],
};

function cloneDefaultState() {
  return JSON.parse(JSON.stringify(defaultState));
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (!saved || !saved.current || !scenes[saved.current]) return cloneDefaultState();
    return {
      ...cloneDefaultState(),
      ...saved,
      stats: { ...cloneDefaultState().stats, ...(saved.stats || {}) },
      inventory: Array.isArray(saved.inventory) ? saved.inventory : [],
      clues: Array.isArray(saved.clues) ? saved.clues : [],
      log: Array.isArray(saved.log) ? saved.log : [],
      visited: Array.isArray(saved.visited) ? saved.visited : ["start"],
      endingsFound: Array.isArray(saved.endingsFound) ? saved.endingsFound : [],
    };
  } catch {
    return cloneDefaultState();
  }
}

function saveState(label = "Saved") {
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  nodes.saveState.textContent = label;
}

function clamp(value, min = 0, max = MAX_STAT) {
  return Math.max(min, Math.min(max, value));
}

function hasRequirement(requirement) {
  if (!requirement) return true;
  if (requirement.item && !state.inventory.includes(requirement.item)) return false;
  if (requirement.clue && !state.clues.includes(requirement.clue)) return false;
  return true;
}

function requirementText(requirement) {
  if (!requirement) return "";
  if (requirement.item) return `Needs ${requirement.item}`;
  if (requirement.clue) return `Needs ${requirement.clue}`;
  return "";
}

function applyChoice(choice) {
  const effects = choice.effects || {};
  state.stats.courage = clamp(state.stats.courage + (effects.courage || 0));
  state.stats.signal = clamp(state.stats.signal + (effects.signal || 0));
  state.stats.shadow = clamp(state.stats.shadow + (effects.shadow || 0));

  if (choice.item && !state.inventory.includes(choice.item)) state.inventory.push(choice.item);
  if (choice.clue && !state.clues.includes(choice.clue)) state.clues.push(choice.clue);

  state.current = choice.to;
  state.sceneVisits += 1;
  if (!state.visited.includes(scenes[choice.to].place)) state.visited.push(scenes[choice.to].place);
  state.log.push(choice.title);

  const nextScene = scenes[choice.to];
  if (nextScene.ending && !state.endingsFound.includes(nextScene.ending)) {
    state.endingsFound.push(nextScene.ending);
  }

  saveState("Saved");
  render();
  speakCurrentScene(false);
}

function render() {
  const scene = scenes[state.current];
  nodes.sceneTitle.textContent = scene.title;
  nodes.sceneText.textContent = scene.text;
  nodes.sceneLocation.textContent = scene.location;
  nodes.sceneCount.textContent = `Scene ${state.sceneVisits}`;
  nodes.sceneArt.dataset.place = scene.place;
  nodes.sceneArt.dataset.label = scene.label || scene.place;

  renderChoices(scene);
  renderStats();
  renderFamilyCast(scene.place);
  renderCollections();
  renderMap(scene.place);
  renderLog();
  renderArchive();
}

function renderChoices(scene) {
  nodes.choiceList.innerHTML = "";

  if (scene.ending) {
    const summary = document.createElement("div");
    summary.className = "choice-btn";
    summary.innerHTML = `
      <span class="choice-mark">${endingMarker(scene.endingType)}</span>
      <span class="choice-main">
        <strong>${escapeHtml(scene.ending)}</strong>
        <span>${endingLine(scene.endingType)}</span>
      </span>
      <span class="choice-tags"><span class="tag ${endingTagClass(scene.endingType)}">${scene.endingType}</span></span>
    `;
    nodes.choiceList.append(summary);

    const restart = document.createElement("button");
    restart.type = "button";
    restart.className = "choice-btn";
    restart.innerHTML = `
      <span class="choice-mark">R</span>
      <span class="choice-main">
        <strong>Start another route</strong>
        <span>Keep the archive and try a different path.</span>
      </span>
      <span class="choice-tags"><span class="tag good">Archive kept</span></span>
    `;
    restart.addEventListener("click", () => restartRun({ keepArchive: true }));
    nodes.choiceList.append(restart);
    return;
  }

  scene.choices.forEach((choice, index) => {
    const allowed = hasRequirement(choice.requires);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-btn";
    button.disabled = !allowed;

    const tags = tagsForChoice(choice, allowed)
      .map((tag) => `<span class="tag ${tag.kind}">${escapeHtml(tag.text)}</span>`)
      .join("");

    button.innerHTML = `
      <span class="choice-mark">${index + 1}</span>
      <span class="choice-main">
        <strong>${escapeHtml(choice.title)}</strong>
        <span>${escapeHtml(allowed ? choice.detail : requirementText(choice.requires))}</span>
      </span>
      <span class="choice-tags">${tags}</span>
    `;
    button.addEventListener("click", () => applyChoice(choice));
    nodes.choiceList.append(button);
  });
}

function tagsForChoice(choice, allowed) {
  if (!allowed) return [{ text: "locked", kind: "bad" }];
  const tags = [];
  const effects = choice.effects || {};
  if (effects.signal > 0) tags.push({ text: `signal +${effects.signal}`, kind: "good" });
  if (effects.courage > 0) tags.push({ text: `courage +${effects.courage}`, kind: "warn" });
  if (effects.shadow > 0) tags.push({ text: `shadow +${effects.shadow}`, kind: "bad" });
  if (choice.item) tags.push({ text: "item", kind: "good" });
  if (choice.clue) tags.push({ text: "clue", kind: "warn" });
  return tags.slice(0, 3);
}

function renderStats() {
  const { courage, signal, shadow } = state.stats;
  nodes.courageValue.textContent = courage;
  nodes.signalValue.textContent = signal;
  nodes.shadowValue.textContent = shadow;
  nodes.courageBar.style.width = `${(courage / MAX_STAT) * 100}%`;
  nodes.signalBar.style.width = `${(signal / MAX_STAT) * 100}%`;
  nodes.shadowBar.style.width = `${(shadow / MAX_STAT) * 100}%`;
}

function renderCollections() {
  renderChipList(nodes.inventoryList, state.inventory, "None yet");
  renderChipList(nodes.clueList, state.clues, "No clues found");
  nodes.itemCount.textContent = String(state.inventory.length);
  nodes.clueCount.textContent = String(state.clues.length);
}

function renderFamilyCast(currentPlace) {
  nodes.familyCast.innerHTML = "";
  nodes.familyCount.textContent = "7 kids + Mom";
  family.forEach((member) => {
    const card = document.createElement("article");
    card.className = `family-card${member.place === currentPlace ? " active" : ""}`;
    card.innerHTML = `
      <strong>${escapeHtml(member.name)}</strong>
      <span>${escapeHtml(member.role)}</span>
      <p>${escapeHtml(member.description)}</p>
    `;
    nodes.familyCast.append(card);
  });
}

function renderChipList(container, items, emptyText) {
  container.innerHTML = "";
  container.classList.toggle("empty", items.length === 0);
  if (items.length === 0) {
    container.textContent = emptyText;
    return;
  }
  items.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = item;
    container.append(chip);
  });
}

function renderMap(currentPlace) {
  nodes.routeMap.innerHTML = "";
  places.forEach(([id, label]) => {
    const node = document.createElement("div");
    node.className = "map-node";
    if (state.visited.includes(id)) node.classList.add("visited");
    if (currentPlace === id) node.classList.add("current");
    node.textContent = label;
    nodes.routeMap.append(node);
  });
  nodes.visitedCount.textContent = `${state.visited.length} visited`;
}

function renderLog() {
  nodes.pathLog.innerHTML = "";
  if (state.log.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No picks made yet.";
    nodes.pathLog.append(li);
    return;
  }
  state.log.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = entry;
    nodes.pathLog.append(li);
  });
}

function renderArchive() {
  nodes.endingArchive.innerHTML = "";
  endingNames.forEach((ending, index) => {
    const found = state.endingsFound.includes(ending);
    const card = document.createElement("div");
    card.className = `ending-card${found ? " found" : ""}`;
    card.innerHTML = `
      <strong>${found ? escapeHtml(ending) : `Ending ${index + 1}`}</strong>
      <span>${found ? archiveHint(ending) : "Undiscovered"}</span>
    `;
    nodes.endingArchive.append(card);
  });
  nodes.endingCount.textContent = `${state.endingsFound.length} of ${endingNames.length}`;
}

function archiveHint(ending) {
  const scene = Object.values(scenes).find((item) => item.ending === ending);
  if (!scene) return "Found";
  const type = scene.endingType;
  if (type === "safe") return "Safe route recorded";
  if (type === "strange") return "Strange route recorded";
  return "Dark route recorded";
}

function endingMarker(type) {
  if (type === "safe") return "S";
  if (type === "strange") return "?";
  return "D";
}

function endingLine(type) {
  if (type === "safe") return "Michaela found a real adult, a real address, or a real signal.";
  if (type === "strange") return "Michaela reached an answer, but the city kept one secret.";
  return "The route closed around Michaela before help could reach her.";
}

function endingTagClass(type) {
  if (type === "safe") return "good";
  if (type === "strange") return "warn";
  return "bad";
}

function restartRun({ keepArchive }) {
  const endingsFound = keepArchive ? [...state.endingsFound] : [];
  state = cloneDefaultState();
  state.endingsFound = endingsFound;
  stopSpeaking();
  saveState("New run");
  render();
}

function clearRunOnly() {
  restartRun({ keepArchive: true });
  showToast("Current run cleared. Ending archive kept.");
}

function speakCurrentScene(force = true) {
  if (!("speechSynthesis" in window)) {
    showToast("Narration is not available in this browser.");
    return;
  }

  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
    nodes.narrateBtn.setAttribute("aria-pressed", "false");
    if (!force) return;
  }

  const scene = scenes[state.current];
  const utterance = new SpeechSynthesisUtterance(`${scene.title}. ${scene.text}`);
  utterance.rate = 0.92;
  utterance.pitch = 0.9;
  utterance.onend = () => nodes.narrateBtn.setAttribute("aria-pressed", "false");
  nodes.narrateBtn.setAttribute("aria-pressed", "true");
  speechSynthesis.speak(utterance);
}

function stopSpeaking() {
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  nodes.narrateBtn.setAttribute("aria-pressed", "false");
}

function toggleSound() {
  if (audio.enabled) {
    stopSound();
    return;
  }
  startSound();
}

function startSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) {
      showToast("Ambient sound is not available in this browser.");
      return;
    }

    const context = new AudioContext();
    const master = context.createGain();
    master.gain.value = 0.045;
    master.connect(context.destination);

    const low = context.createOscillator();
    low.type = "sine";
    low.frequency.value = 78;
    const lowGain = context.createGain();
    lowGain.gain.value = 0.18;
    low.connect(lowGain);
    lowGain.connect(master);

    const pulse = context.createOscillator();
    pulse.type = "triangle";
    pulse.frequency.value = 0.18;
    const pulseGain = context.createGain();
    pulseGain.gain.value = 0.02;
    pulse.connect(pulseGain);
    pulseGain.connect(master.gain);

    low.start();
    pulse.start();
    audio = { enabled: true, context, nodes: [low, pulse] };
    nodes.soundBtn.setAttribute("aria-pressed", "true");
  } catch {
    showToast("Ambient sound could not start.");
  }
}

function stopSound() {
  audio.nodes.forEach((node) => {
    try {
      node.stop();
    } catch {
      // Already stopped.
    }
  });
  if (audio.context) audio.context.close();
  audio = { enabled: false, context: null, nodes: [] };
  nodes.soundBtn.setAttribute("aria-pressed", "false");
}

function showToast(message) {
  nodes.toast.textContent = message;
  nodes.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => nodes.toast.classList.remove("show"), 2400);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

nodes.restartBtn.addEventListener("click", () => {
  const keepArchive = true;
  restartRun({ keepArchive });
  showToast("Restarted. Ending archive kept.");
});

nodes.clearLogBtn.addEventListener("click", clearRunOnly);
nodes.narrateBtn.addEventListener("click", () => speakCurrentScene(true));
nodes.soundBtn.addEventListener("click", toggleSound);

window.addEventListener("beforeunload", () => {
  stopSpeaking();
  stopSound();
});

render();
saveState("Ready");
