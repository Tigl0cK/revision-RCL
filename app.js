const THEMES = [
  { id: 1, name: "Signalisation au sol" },
  { id: 2, name: "Circulation à contresens ou à contre-voie" },
  { id: 3, name: "Mouvements de manœuvre guidés" },
  { id: 4, name: "Mouvements de manœuvre non guidés" },
  { id: 5, name: "Dispositions à appliquer sur certaines lignes" },
  { id: 6, name: "Principes complémentaires" }
];

// Questions de démonstration uniquement. La banque définitive remplacera ce tableau.
const QUESTIONS = [
  { id:"DEMO-001", theme:1, type:"qcm", question:"Après arrêt devant un carré fermé, l'autorisation reçue permet-elle de franchir automatiquement un autre carré fermé rencontré ensuite ?", options:["Oui, si les deux signaux dépendent du même poste", "Oui, si le second carré est à moins de 500 m", "Non, une autorisation est nécessaire pour chaque signal fermé", "Oui, si la marche est effectuée à vitesse réduite"], correct:2, article:"A 11.08" },
  { id:"DEMO-002", theme:1, type:"qcm", question:"Dans la procédure prévue avant le franchissement d'un signal fermé, dans quelle situation l'action sur le bouton FC est-elle réalisée ?", options:["En marche, dès la perception du signal", "À l'arrêt à moins de 100 m du signal et dans le délai prévu", "Après avoir franchi le signal", "Uniquement lorsque le signal ne possède pas de plaque"], correct:1, article:"A 11.08" },
  { id:"DEMO-003", theme:1, type:"qcm", question:"Un avertissement est présenté en amont d'une indication imposant une réduction ou un arrêt. Quelle est l'attitude attendue du conducteur ?", options:["Maintenir la vitesse jusqu'au signal suivant", "Adapter sa marche pour être en mesure de respecter l'indication annoncée", "S'arrêter systématiquement au droit de l'avertissement", "Considérer l'avertissement comme annulé si la voie paraît libre"], correct:1, article:"A 12.01" },
  { id:"DEMO-004", theme:2, type:"qcm", question:"Lors d'une circulation à contresens, les prescriptions remises au conducteur ont notamment pour rôle de préciser les conditions particulières de circulation. Quelle attitude convient ?", options:["Appliquer uniquement la signalisation rencontrée", "Respecter les prescriptions remises en complément de la signalisation applicable", "Ignorer les prescriptions dès que le premier signal est franchi", "Appliquer les règles de voie normale sans adaptation"], correct:1, article:"A 21.04" },
  { id:"DEMO-005", theme:2, type:"qcm", question:"À la sortie d'une circulation à contresens, le conducteur doit identifier la fin du régime particulier et reprendre les règles correspondant à la voie sur laquelle il est dirigé.", options:["Vrai", "Faux"], correct:0, article:"A 21.05" },
  { id:"DEMO-006", theme:3, type:"qcm", question:"Dans un mouvement de manœuvre guidé, les ordres transmis au conducteur doivent être interprétés dans le cadre des règles propres à la manœuvre.", options:["Vrai", "Faux"], correct:0, article:"A 32.01" },
  { id:"DEMO-007", theme:3, type:"qcm", question:"Avant le début d'un mouvement de manœuvre guidé, certaines opérations doivent être réalisées avant la mise en mouvement.", options:["Vrai", "Faux"], correct:0, article:"A 33.02" },
  { id:"DEMO-008", theme:4, type:"qcm", question:"Dans un mouvement de manœuvre non guidé, les règles de circulation restent liées à la position du conducteur, à l'observation et à la signalisation applicable.", options:["Vrai", "Faux"], correct:0, article:"A 42.03" },
  { id:"DEMO-009", theme:4, type:"qcm", question:"Une anomalie concernant le frein au cours d'un mouvement non guidé relève de dispositions spécifiques du référentiel.", options:["Vrai", "Faux"], correct:0, article:"A 43.01" },
  { id:"DEMO-010", theme:5, type:"qcm", question:"Sur certaines lignes, des dispositions particulières peuvent imposer une modération de vitesse dans des déclivités importantes.", options:["Vrai", "Faux"], correct:0, article:"A 50.02" },
  { id:"DEMO-011", theme:5, type:"qcm", question:"La présence d'un panneau « POSTE » fait l'objet de dispositions identifiées dans le chapitre consacré à certaines lignes.", options:["Vrai", "Faux"], correct:0, article:"A 51.01" },
  { id:"DEMO-012", theme:6, type:"qcm", question:"Le shuntage des circuits de voie fait l'objet d'un principe complémentaire spécifique dans le chapitre A.", options:["Vrai", "Faux"], correct:0, article:"A 60.01" }
];

const STORAGE_KEY = "revisionRCL_v1";
let state = loadState();
let session = { mode:null, theme:null, pool:[], current:null, answeredInSession:0, locked:false };

const $ = id => document.getElementById(id);
const views = { home: $("homeView"), quiz: $("quizView"), empty: $("emptyView") };

function defaultState() { return { seen:{}, errors:{}, totalAnswers:0, correctAnswers:0 }; }
function loadState() {
  try { return { ...defaultState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") }; }
  catch { return defaultState(); }
}
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function showView(name) {
  Object.values(views).forEach(v => v.classList.remove("active"));
  views[name].classList.add("active");
  $("homeBtn").classList.toggle("hidden", name === "home");
  window.scrollTo({ top:0, behavior:"smooth" });
}
function progressColor(pct) {
  const hue = Math.round((Math.max(0, Math.min(100, pct)) / 100) * 120);
  return `hsl(${hue} 72% 42%)`;
}
function themeQuestions(themeId) { return QUESTIONS.filter(q => q.theme === themeId); }
function seenCount(list) { return list.filter(q => state.seen[q.id]).length; }
function percentage(list) { return list.length ? Math.round((seenCount(list) / list.length) * 100) : 0; }

function renderHome() {
  const list = $("themeList");
  list.innerHTML = "";
  THEMES.forEach(theme => {
    const qs = themeQuestions(theme.id);
    const pct = percentage(qs);
    const color = progressColor(pct);
    const btn = document.createElement("button");
    btn.className = "theme-card";
    btn.type = "button";
    btn.dataset.theme = theme.id;
    btn.innerHTML = `<div class="theme-top"><span class="theme-number">${theme.id}</span><span class="theme-name">${theme.name}</span><span class="theme-percent" style="color:${color}">${pct} %</span></div><div class="progress-track"><div class="progress-fill" style="width:${pct}%;background:${color}"></div></div>`;
    btn.addEventListener("click", () => startSession("theme", theme.id));
    list.appendChild(btn);
  });

  const allPct = percentage(QUESTIONS);
  $("allPercent").textContent = `${allPct} %`;
  $("allPercent").style.color = progressColor(allPct);
  $("globalProgress").textContent = `${allPct} % parcouru`;

  const activeErrors = Object.keys(state.errors).filter(id => QUESTIONS.some(q => q.id === id));
  $("errorCount").textContent = activeErrors.length;
  $("errorSubtitle").textContent = activeErrors.length ? `${activeErrors.length} question${activeErrors.length > 1 ? "s" : ""} à retravailler` : "Aucune question à retravailler";
  $("answeredStat").textContent = state.totalAnswers;
  $("successStat").textContent = state.totalAnswers ? `${Math.round(state.correctAnswers / state.totalAnswers * 100)} %` : "—";
}

function shuffled(arr) { return [...arr].sort(() => Math.random() - .5); }
function startSession(mode, themeId = null) {
  let pool;
  if (mode === "theme") pool = themeQuestions(themeId);
  else if (mode === "all") pool = QUESTIONS;
  else pool = QUESTIONS.filter(q => state.errors[q.id]);

  if (!pool.length) {
    $("emptyTitle").textContent = mode === "errors" ? "Aucune erreur à retravailler" : "Aucune question disponible";
    $("emptyText").textContent = mode === "errors" ? "Les questions auxquelles tu répondras mal apparaîtront ici jusqu'à deux bonnes réponses consécutives." : "Cette section sera alimentée lors de l'intégration de la banque complète.";
    showView("empty");
    return;
  }

  session = { mode, theme:themeId, pool:shuffled(pool), current:null, answeredInSession:0, locked:false };
  const label = mode === "theme" ? THEMES.find(t => t.id === themeId).name : mode === "all" ? "Tous les thèmes" : "Mes erreurs";
  $("quizTheme").textContent = label;
  showView("quiz");
  nextQuestion();
}

function chooseNext(pool) {
  if (session.mode !== "errors") {
    const unseen = pool.filter(q => !state.seen[q.id] && q.id !== session.current?.id);
    if (unseen.length) return unseen[Math.floor(Math.random() * unseen.length)];
  }
  const candidates = pool.filter(q => q.id !== session.current?.id);
  const source = candidates.length ? candidates : pool;
  return source[Math.floor(Math.random() * source.length)];
}

function nextQuestion() {
  if (session.mode === "errors") {
    session.pool = QUESTIONS.filter(q => state.errors[q.id]);
    if (!session.pool.length) {
      $("emptyTitle").textContent = "Toutes les erreurs sont acquises";
      $("emptyText").textContent = "Tu as obtenu deux bonnes réponses consécutives sur toutes les questions à retravailler.";
      showView("empty"); renderHome(); return;
    }
  }
  session.current = chooseNext(session.pool);
  session.locked = false;
  session.answeredInSession++;
  renderQuestion();
}

function renderQuestion() {
  const q = session.current;
  $("questionProgress").textContent = `Question ${session.answeredInSession}`;
  $("questionText").textContent = q.question;
  $("feedback").className = "feedback hidden";
  $("feedback").innerHTML = "";
  $("nextBtn").classList.add("hidden");
  const mastery = $("errorMastery");
  if (session.mode === "errors" && state.errors[q.id]) {
    mastery.textContent = `Acquisition ${state.errors[q.id].streak || 0}/2`;
    mastery.classList.remove("hidden");
  } else mastery.classList.add("hidden");

  const answers = $("answers");
  answers.innerHTML = "";
  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.type = "button";
    btn.innerHTML = `<span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span>`;
    btn.addEventListener("click", () => answer(index));
    answers.appendChild(btn);
  });
}

function answer(index) {
  if (session.locked) return;
  session.locked = true;
  const q = session.current;
  const correct = index === q.correct;
  state.totalAnswers++;
  if (correct) state.correctAnswers++;
  state.seen[q.id] = true;

  const buttons = [...$("answers").children];
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add("correct");
    if (i === index && !correct) btn.classList.add("wrong");
  });

  if (correct) {
    if (session.mode === "errors" && state.errors[q.id]) {
      state.errors[q.id].streak = (state.errors[q.id].streak || 0) + 1;
      if (state.errors[q.id].streak >= 2) delete state.errors[q.id];
    }
    saveState(); renderHome();
    const fb = $("feedback");
    fb.className = "feedback success";
    fb.innerHTML = "<strong>Bonne réponse</strong>Passage à la question suivante…";
    setTimeout(nextQuestion, 1500);
  } else {
    if (!state.errors[q.id]) state.errors[q.id] = { streak:0, misses:0 };
    state.errors[q.id].streak = 0;
    state.errors[q.id].misses = (state.errors[q.id].misses || 0) + 1;
    saveState(); renderHome();
    const fb = $("feedback");
    fb.className = "feedback error";
    fb.innerHTML = `<strong>Mauvaise réponse</strong>La bonne réponse est : <b>${q.options[q.correct]}</b><div class="article">À consulter : article ${q.article}</div>`;
    $("nextBtn").classList.remove("hidden");
  }
}

$("backBtn").addEventListener("click", () => { renderHome(); showView("home"); });
$("homeBtn").addEventListener("click", () => { renderHome(); showView("home"); });
$("emptyHomeBtn").addEventListener("click", () => { renderHome(); showView("home"); });
$("nextBtn").addEventListener("click", nextQuestion);
document.querySelector('[data-mode="all"]').addEventListener("click", () => startSession("all"));
document.querySelector('[data-mode="errors"]').addEventListener("click", () => startSession("errors"));

renderHome();
