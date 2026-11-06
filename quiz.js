const LETTERS = ["A", "B", "C", "D"];

const QUESTIONS = [
  {
    id: 1,
    part: 1,
    prompt: "Which word sounds most like you?",
    options: [
      { letter: "A", text: "Bold" },
      { letter: "B", text: "Thoughtful" },
      { letter: "C", text: "Easygoing" },
      { letter: "D", text: "Spontaneous" },
    ],
  },
  {
    id: 2,
    part: 1,
    prompt: "Which word sounds most like you?",
    options: [
      { letter: "A", text: "Driven" },
      { letter: "B", text: "Sincere" },
      { letter: "C", text: "Content" },
      { letter: "D", text: "Lively" },
    ],
  },
  {
    id: 3,
    part: 1,
    prompt: "Which word sounds most like you?",
    options: [
      { letter: "A", text: "Direct" },
      { letter: "B", text: "Detail-oriented" },
      { letter: "C", text: "Adaptable" },
      { letter: "D", text: "Charismatic" },
    ],
  },
  {
    id: 4,
    part: 1,
    prompt: "Which word sounds most like you?",
    options: [
      { letter: "A", text: "Decisive" },
      { letter: "B", text: "Loyal" },
      { letter: "C", text: "Patient" },
      { letter: "D", text: "Playful" },
    ],
  },
  {
    id: 5,
    part: 1,
    prompt: "Which word sounds most like you?",
    options: [
      { letter: "A", text: "Ambitious" },
      { letter: "B", text: "Empathetic" },
      { letter: "C", text: "Calm" },
      { letter: "D", text: "Enthusiastic" },
    ],
  },
  {
    id: 6,
    part: 1,
    prompt: "Which word sounds most like you?",
    options: [
      { letter: "A", text: "Independent" },
      { letter: "B", text: "Reliable" },
      { letter: "C", text: "Peaceful" },
      { letter: "D", text: "Expressive" },
    ],
  },
  {
    id: 7,
    part: 1,
    prompt: "Which word sounds most like you?",
    options: [
      { letter: "A", text: "Competitive" },
      { letter: "B", text: "Conscientious" },
      { letter: "C", text: "Low-maintenance" },
      { letter: "D", text: "Carefree" },
    ],
  },
  {
    id: 8,
    part: 1,
    prompt: "Which word sounds most like you?",
    options: [
      { letter: "A", text: "Efficient" },
      { letter: "B", text: "Devoted" },
      { letter: "C", text: "Gentle" },
      { letter: "D", text: "Fun-loving" },
    ],
  },
  {
    id: 9,
    part: 1,
    prompt: "Which word sounds most like you?",
    options: [
      { letter: "A", text: "Confident" },
      { letter: "B", text: "Purposeful" },
      { letter: "C", text: "Tolerant" },
      { letter: "D", text: "Magnetic" },
    ],
  },
  {
    id: 10,
    part: 1,
    prompt: "Which word sounds most like you?",
    options: [
      { letter: "A", text: "Productive" },
      { letter: "B", text: "Meaningful" },
      { letter: "C", text: "Balanced" },
      { letter: "D", text: "Cheerful" },
    ],
  },
  {
    id: 11,
    part: 2,
    prompt: "Your group is planning a weekend getaway. What is your role in the group chat?",
    options: [
      { letter: "A", text: "Creating the master itinerary, reserving equipment, and making sure everyone has lift passes booked before prices surge." },
      { letter: "B", text: "Researching the best boutique cabin with an authentic stone fireplace, curated grocery lists, and a warm communal vibe." },
      { letter: "C", text: "Muting the thread notifications and saying, “Whatever works for everyone works for me—just tell me when to show up.”" },
      { letter: "D", text: "Dropping hype memes, 15 Spotify playlist options, and asking, “Wait, which day is the terrace DJ starting?”" },
    ],
  },
  {
    id: 12,
    part: 2,
    prompt: "A sudden whiteout blizzard closes the mountain early. How do you respond?",
    options: [
      { letter: "A", text: "Check the weather radar immediately and map out alternate indoor workouts, strategy, or high-intensity tasks to conquer the afternoon." },
      { letter: "B", text: "Gather everyone inside, stoke the fire, whip up hot spiced drinks, and ask meaningful conversation-starter questions." },
      { letter: "C", text: "Grab a thick wool blanket and a book, exhale deeply, and relish the unexpected gift of total stillness." },
      { letter: "D", text: "Declare the storm an official excuse for an early happy hour and challenge the room to table games or an impromptu dance party." },
    ],
  },
  {
    id: 13,
    part: 2,
    prompt: "When choosing your outfit or gear, your top priority is:",
    options: [
      { letter: "A", text: "Maximum performance, aerodynamic cut, technical ratings, and high durability." },
      { letter: "B", text: "Timeless heritage style, premium quality materials, and feeling deeply comfortable." },
      { letter: "C", text: "Whatever is already in the closet, comfortable, functional, and hassle-free." },
      { letter: "D", text: "Vibrant neon colors, retro one-pieces, mirrored sunglasses, and stand-out flair." },
    ],
  },
  {
    id: 14,
    part: 2,
    prompt: "What frustrates you most during a group day out?",
    options: [
      { letter: "A", text: "People lagging behind, moving inefficiently, or wasting precious daylight indecisively." },
      { letter: "B", text: "Flaky behavior, superficial chatter, or feeling like someone in the group is being excluded." },
      { letter: "C", text: "High drama, loud arguments, rigid schedules, or someone forcing you to rush." },
      { letter: "D", text: "Boring environments, rigid rules, strict silence, or killjoys killing the buzz." },
    ],
  },
  {
    id: 15,
    part: 2,
    prompt: "At a crowded lodge dinner, you are most likely found:",
    options: [
      { letter: "A", text: "Debating bold predictions, closing deals on your phone, or orchestrating tomorrow’s kickoff time." },
      { letter: "B", text: "Having a deep one-on-one conversation at the quiet end of the wooden table with a vintage red wine." },
      { letter: "C", text: "Happily observing the banter, savoring your warm bowl of soup, completely relaxed without needing to perform." },
      { letter: "D", text: "Moving between three different tables, making friends with the staff, and initiating a group toast." },
    ],
  },
  {
    id: 16,
    part: 2,
    prompt: "How do you recharge after an intense week?",
    options: [
      { letter: "A", text: "By crushing a hard personal goal, hitting a personal record, or organizing my life." },
      { letter: "B", text: "By spending intimate, quality time with my favorite person or close-knit inner circle." },
      { letter: "C", text: "Pure solitude, uninterrupted sleep, and having zero expectations placed on me." },
      { letter: "D", text: "Being around vibrant energy, great music, laughter, and high-spirited friends." },
    ],
  },
  {
    id: 17,
    part: 2,
    prompt: "In the middle of an argument, your natural reflex is to:",
    options: [
      { letter: "A", text: "Win with logic, direct facts, and strong conviction." },
      { letter: "B", text: "Protect mutual trust, examine underlying emotions, and seek sincere resolution." },
      { letter: "C", text: "Step back quietly to defuse tension and let things cool off naturally." },
      { letter: "D", text: "Deflect with humor, lighten the mood, or change the subject to something fun." },
    ],
  },
  {
    id: 18,
    part: 2,
    prompt: "What is your definition of a truly successful vacation day?",
    options: [
      { letter: "A", text: "We conquered everything we set out to do and left nothing on the table." },
      { letter: "B", text: "We created authentic, lasting memories and connected deeply as a crew." },
      { letter: "C", text: "Nobody stressed out, no alarms went off, and my nervous system completely reset." },
      { letter: "D", text: "It was an absolute riot, full of spontaneous adventures and belly laughs." },
    ],
  },
];

const PERSONAS = {
  A: {
    letter: "A",
    name: "The Black Diamond Charger",
    subtitle: "The Driven Achiever",
    quote: "First chair at dawn, last run at dusk, and zero time wasted.",
    motive: "Achievement, mastery, and direction.",
    vibe: "Determined, sharp, competitive, and results-driven.",
    element: "Carving crisp lines down the steepest summit, tracking stats on a GPS watch, and taking the wheel when a decision needs to be made.",
    style: "A brisk craft espresso or an ice-cold pilsner, a quick review of the day’s accomplishments, then tomorrow’s plan.",
    superpower: "Gets big things done without second-guessing, and rallies everyone into action.",
    blindSpot: "Can forget that relaxing is an actual activity, and may get impatient when others move at an easy pace.",
    drink: "Double espresso or an Old Fashioned.",
    motto: "If you’re not pushing your edge, why are you on the mountain?",
  },
  B: {
    letter: "B",
    name: "The Fireside Connoisseur",
    subtitle: "The Soulful Traditionalist",
    quote: "The snow is great, but the warmth between people is why we’re really here.",
    motive: "Connection, authenticity, and quality.",
    vibe: "Warm, sincere, dependable, and deeply thoughtful.",
    element: "Securing the cozy corner booth by the timber fireplace, preparing artisanal raclette or fondue, and making sure everyone feels safe, appreciated, and heard.",
    style: "Heavy knit sweaters, mulled spiced cider, vintage vinyl, and two-hour conversations that unravel the mysteries of life.",
    superpower: "The emotional anchor of any group. Makes every experience feel meaningful and personal.",
    blindSpot: "Can take group disharmony too personally, or worry too much about whether everyone is having a good time.",
    drink: "Glühwein, mulled wine, or hot spiced cider with cinnamon.",
    motto: "Life is measured in shared stories by the fire.",
  },
  C: {
    letter: "C",
    name: "The Zen Cruiser",
    subtitle: "The Peaceful Naturalist",
    quote: "No rush, no stress. Just smooth turns and mountain air.",
    motive: "Peace, harmony, and independence.",
    vibe: "Grounded, patient, low-drama, and unshakeable.",
    element: "Gliding down scenic tree trails, taking in a summit view, or sipping cocoa while snow piles up outside the window.",
    style: "A deep leather armchair or an outdoor thermal bath, unbothered by schedules, dress codes, or hype.",
    superpower: "Keeps everyone grounded, and brings a calm perspective when the stakes feel high.",
    blindSpot: "Can go quietly stubborn under pressure, or be so accommodating that their own voice gets sidelined.",
    drink: "Rich hot chocolate with whipped cream, or herbal mountain mint tea.",
    motto: "Go with the flow; the mountain isn’t going anywhere.",
  },
  D: {
    letter: "D",
    name: "The Après-Ski Legend",
    subtitle: "The Social Firecracker",
    quote: "Technically, you don’t even need to go outside to win at winter.",
    motive: "Fun, spontaneity, and celebration.",
    vibe: "Radiant, charismatic, humorous, and delightfully contagious.",
    element: "Dancing on the outdoor deck in snow boots at 3:00 PM, singing with the band, and making a crowd of new friends before sunset.",
    style: "Mirrored retro shades, a neon jacket unzipped, the front of the conga line, and the whole lodge as a personal stage.",
    superpower: "Turns an ordinary gathering into a celebration, and dissolves awkwardness in seconds.",
    blindSpot: "May lose track of gear, keys, or time, and gets bored by logistics and detailed planning.",
    drink: "Aperol Spritz, or schnapps with a cinnamon rim.",
    motto: "Work hard, play harder, dance in your ski boots.",
  },
};

const PART_LABELS = {
  1: "Quick instincts",
  2: "Mountain situation",
};

function shuffle(items) {
  const copy = items.slice();
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    const current = copy[index];
    copy[index] = copy[swapIndex];
    copy[swapIndex] = current;
  }
  return copy;
}

function buildDeck() {
  const partOne = shuffle(QUESTIONS.filter((question) => question.part === 1));
  const partTwo = shuffle(QUESTIONS.filter((question) => question.part === 2));
  return [...partOne, ...partTwo].map((question) => ({
    id: question.id,
    part: question.part,
    prompt: question.prompt,
    options: shuffle(question.options.map((option) => ({ ...option }))),
  }));
}

function scoreQuiz(deck, answers) {
  const parts = {
    1: { A: 0, B: 0, C: 0, D: 0 },
    2: { A: 0, B: 0, C: 0, D: 0 },
  };

  deck.forEach((question) => {
    const letter = answers[question.id];
    if (!LETTERS.includes(letter)) return;
    parts[question.part][letter] += 1;
  });

  const sheet = LETTERS.map((letter) => ({
    letter,
    persona: PERSONAS[letter],
    part1: parts[1][letter],
    part2: parts[2][letter],
    total: parts[1][letter] + parts[2][letter],
  }));
  const top = Math.max(...sheet.map((row) => row.total));
  const winner = sheet.find((row) => row.total === top);

  return { sheet, winner };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

const state = {
  screen: "welcome",
  deck: [],
  index: 0,
  answers: {},
  focus: null,
};

const app = typeof document !== "undefined" ? document.querySelector("#app") : null;
const live = typeof document !== "undefined" ? document.querySelector("#live") : null;

function render() {
  if (!app) return;
  const shouldAnnounce = state.focus === "heading" || (state.screen === "welcome" && state.focus == null);
  document.body.classList.toggle("is-quiz", state.screen === "quiz");
  if (state.screen === "welcome") app.innerHTML = renderWelcome();
  if (state.screen === "quiz") app.innerHTML = renderQuiz();
  if (state.screen === "results") app.innerHTML = renderResults();
  restoreFocus();
  if (shouldAnnounce) announce();
}

function renderWelcome() {
  return `
    <section class="welcome stack">
      <p class="eyebrow">From first chair to last call</p>
      <h1 id="screen-title" tabindex="-1">The Après-Ski Personality Profile</h1>
      <p class="lede">Whether you come to the Alps or the Rockies for high-octane speed, cozy fondue by the hearth, peaceful tree glades, or dancing on picnic tables in ski boots before the sun even dips below the ridge—everyone has a core mountain energy.</p>
      <p class="lede">You don’t need any skiing experience. This looks at how you navigate decisions, energy, socializing, and downtime.</p>
      <ol class="steps">
        <li class="step">
          <p class="eyebrow">01</p>
          <h2>Quick instincts</h2>
          <p>Pick the one word that sounds most naturally like you.</p>
        </li>
        <li class="step">
          <p class="eyebrow">02</p>
          <h2>Mountain situations</h2>
          <p>Choose the reaction that matches your gut, not your best-day self.</p>
        </li>
        <li class="step">
          <p class="eyebrow">03</p>
          <h2>Your archetype</h2>
          <p>Your highest letter reveals your primary après-ski persona.</p>
        </li>
      </ol>
      <div class="actions">
        <button class="button" type="button" data-action="start">Start the quiz</button>
      </div>
    </section>
  `;
}

function renderQuiz() {
  const question = state.deck[state.index];
  const selected = state.answers[question.id];
  const total = state.deck.length;
  const position = state.index + 1;
  const wordClass = question.part === 1 ? " words" : "";
  const choices = question.options.map((option) => `
    <button
      class="choice${question.part === 1 ? " word" : ""}"
      type="button"
      data-letter="${option.letter}"
      aria-pressed="${selected === option.letter ? "true" : "false"}"
    >${escapeHtml(option.text)}</button>
  `).join("");

  return `
    <section class="quiz">
      <div class="quiz-top">
        <p class="chip">${position} of ${total}</p>
        <div class="progress" role="progressbar" aria-valuemin="1" aria-valuemax="${total}" aria-valuenow="${position}" aria-valuetext="Question ${position} of ${total}">
          <span style="width: ${(position / total) * 100}%"></span>
        </div>
      </div>
      <div class="quiz-copy">
        <p class="part-label">${PART_LABELS[question.part]}</p>
        <h2 class="prompt" id="screen-title" tabindex="-1">${escapeHtml(question.prompt)}</h2>
      </div>
      <div class="choices${wordClass}" role="group" aria-labelledby="screen-title">
        ${choices}
      </div>
      <div class="quiz-nav">
        <button class="button secondary back" type="button" data-action="back" ${state.index === 0 ? "disabled" : ""}>Back</button>
      </div>
    </section>
  `;
}

function personaIcon(letter, className = "") {
  const persona = PERSONAS[letter];
  const classes = className ? `persona-icon ${className}` : "persona-icon";
  return `<img class="${classes}" src="img/${letter}.png" alt="" width="160" height="160">`;
}

function renderPersona(persona) {
  return `
    <article class="persona-block">
      <p class="quote">“${escapeHtml(persona.quote)}”</p>
            <br>
      <div class="profile-grid">
        ${field("Core motive", persona.motive)}
        ${field("Vibe", persona.vibe)}
        ${field("In their element", persona.element)}
        ${field("Après-ski style", persona.style)}
        ${field("Superpower", persona.superpower)}
        ${field("Blind spot", persona.blindSpot)}
        ${field("Signature drink", persona.drink, true)}
        ${field("Mountain motto", persona.motto, true)}
      </div>
    </article>
  `;
}

function field(label, text, wide) {
  return `
    <div class="field${wide ? " wide" : ""}">
      <span class="field-label">${escapeHtml(label)}</span>
      <p>${escapeHtml(text)}</p>
    </div>
  `;
}

function renderResults() {
  const result = scoreQuiz(state.deck, state.answers);
  const primary = result.winner.persona;
  const maxScore = state.deck.length || 1;
  const scores = result.sheet.map((row) => {
    const isWinner = row.letter === result.winner.letter;
    return `
      <article class="score-row ${isWinner ? "is-leader" : ""}">
        <header>
          <p class="eyebrow score-identity">${personaIcon(row.letter, "tiny")}<span>${row.letter} · ${escapeHtml(row.persona.name)}</span></p>
          <p class="score-meta">Part one ${row.part1} · Part two ${row.part2} · Total ${row.total}${isWinner ? " · Primary" : ""}</p>
        </header>
        <div class="bar" aria-hidden="true"><span style="width: ${(row.total / maxScore) * 100}%"></span></div>
      </article>
    `;
  }).join("");

  return `
    <section class="stack results">
      <div class="result-hero">
        ${personaIcon(primary.letter)}
        <div>
          <p class="eyebrow"><span class="swatch ${primary.letter.toLowerCase()}" aria-hidden="true"></span>${escapeHtml(primary.subtitle)}</p>
          <h1 id="screen-title" tabindex="-1">${escapeHtml(primary.name)}</h1>
          <p class="lede">Your highest score is your archetype.</p>
        </div>
      </div>
      ${renderPersona(primary)}
<!--      <section class="stack">
        <h2 class="section-title">Score sheet</h2>
        <div class="scores">${scores}</div>
      </section>-->
      <div class="actions">
        <button class="button secondary" type="button" data-action="back">Back</button>
        <button class="button" type="button" data-action="retake">Retake</button>
      </div>
    </section>
  `;
}

function restoreFocus() {
  if (!state.focus || !app) return;
  if (state.focus === "heading") {
    const heading = app.querySelector("#screen-title");
    if (heading) heading.focus({ preventScroll: true });
  }
  if (state.focus.letter) {
    const choice = app.querySelector(`[data-letter="${state.focus.letter}"]`);
    if (choice) choice.focus();
  }
  state.focus = null;
}

function announce() {
  if (!live) return;
  if (state.screen === "welcome") {
    live.textContent = "The Après-Ski Personality Profile. Start the quiz when you are ready.";
    return;
  }
  if (state.screen === "results") {
    const title = app.querySelector("#screen-title");
    live.textContent = title ? `Your result: ${title.textContent}` : "Your result is ready.";
    return;
  }
  const question = state.deck[state.index];
  live.textContent = `Question ${state.index + 1} of ${state.deck.length}. ${PART_LABELS[question.part]}. ${question.prompt}`;
}

function startQuiz() {
  state.deck = buildDeck();
  state.answers = {};
  state.index = 0;
  state.screen = "quiz";
  state.focus = "heading";
  render();
}

function showWelcome() {
  state.screen = "welcome";
  state.answers = {};
  state.index = 0;
  state.deck = [];
  state.focus = "heading";
  render();
}

function choose(letter) {
  const question = state.deck[state.index];
  state.answers[question.id] = letter;
  if (state.index === state.deck.length - 1) {
    state.screen = "results";
    state.focus = "heading";
    render();
    return;
  }
  state.index += 1;
  state.focus = "heading";
  render();
}

function goBack() {
  if (state.screen === "results") {
    state.screen = "quiz";
    state.index = state.deck.length - 1;
    state.focus = "heading";
    render();
    return;
  }
  if (state.index === 0) return;
  state.index -= 1;
  state.focus = "heading";
  render();
}

function onClick(event) {
  const action = event.target.closest("[data-action]");
  const choice = event.target.closest("[data-letter]");
  if (action) {
    if (action.dataset.action === "start") startQuiz();
    if (action.dataset.action === "back") goBack();
    if (action.dataset.action === "retake") showWelcome();
    return;
  }
  if (choice && state.screen === "quiz") choose(choice.dataset.letter);
}

const SNOW_GLYPHS = ["❄", "❅", "✻"];

function mountSnow() {
  const layer = document.querySelector("#snow");
  if (!layer || layer.dataset.ready) return;
  layer.dataset.ready = "true";
  for (let index = 0; index < 28; index += 1) {
    const flake = document.createElement("span");
    flake.className = "flake";
    flake.textContent = SNOW_GLYPHS[index % SNOW_GLYPHS.length];
    const drift = Math.round(Math.random() * 90 - 45);
    flake.style.left = `${Math.random() * 100}%`;
    flake.style.fontSize = `${0.55 + Math.random() * 1.1}rem`;
    flake.style.setProperty("--drift", `${drift}px`);
    flake.style.setProperty("--spin", `${Math.random() > 0.5 ? 220 : -220}deg`);
    flake.style.setProperty("--rest", `${Math.random() * 92}%`);
    flake.style.animationDuration = `${8 + Math.random() * 14}s`;
    flake.style.animationDelay = `${-Math.random() * 18}s`;
    flake.style.opacity = `${0.35 + Math.random() * 0.45}`;
    layer.appendChild(flake);
  }
}

if (typeof document !== "undefined") {
  document.addEventListener("click", onClick);
  mountSnow();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
}

globalThis.ApresSki = {
  QUESTIONS,
  PERSONAS,
  shuffle,
  buildDeck,
  scoreQuiz,
};
