const THEMES = [
  { id: 1, name: "Signalisation au sol" },
  { id: 2, name: "Circulation à contresens ou à contre-voie" },
  { id: 3, name: "Mouvements de manœuvre guidés" },
  { id: 4, name: "Mouvements de manœuvre non guidés" },
  { id: 5, name: "Dispositions à appliquer sur certaines lignes" },
  { id: 6, name: "Principes complémentaires" }
];


/*
=========================================================
BANQUES DE QUESTIONS
=========================================================

Chaque partie possède sa propre banque.

A1 → questions-A1.js
A2 → questions-A2.js
A3 → questions-A3.js
A4 → questions-A4.js
A5 → questions-A5.js
A6 → questions-A6.js

Pour l'instant, seule A2 est disponible.
*/

const QUESTION_BANKS = {

  1: typeof QUESTIONS_PARTIE_1 !== "undefined"
      ? QUESTIONS_PARTIE_1
      : [],

  2:
    typeof QUESTIONS_PARTIE_2 !== "undefined"
      ? QUESTIONS_PARTIE_2
      : [],

  3:
    typeof QUESTIONS_PARTIE_3 !== "undefined"
      ? QUESTIONS_PARTIE_3
      : [],

  4: typeof QUESTIONS_PARTIE_4 !== "undefined"
      ? QUESTIONS_PARTIE_4
      : [],

  5: typeof QUESTIONS_PARTIE_5 !== "undefined"
      ? QUESTIONS_PARTIE_5
      : [],

  6: typeof QUESTIONS_PARTIE_6 !== "undefined"
      ? QUESTIONS_PARTIE_6
      : []

};


/*
Toutes les questions actuellement disponibles.

Cette liste sera automatiquement complétée
quand nous ajouterons A1, A3, A4, etc.
*/

const QUESTIONS = [
  ...QUESTION_BANKS[1],
  ...QUESTION_BANKS[2],
  ...QUESTION_BANKS[3],
  ...QUESTION_BANKS[4],
  ...QUESTION_BANKS[5],
  ...QUESTION_BANKS[6]
];


const STORAGE_KEY = "revisionRCL_v1";
let state = loadState();

let session = {
  mode: null,
  theme: null,
  pool: [],
  current: null,
  answeredInSession: 0,
  locked: false
};


const $ = id => document.getElementById(id);

const views = {
  home: $("homeView"),
  quiz: $("quizView"),
  empty: $("emptyView")
};


// =====================================================
// SAUVEGARDE
// =====================================================

function defaultState() {
  return {
    seen: {},
    errors: {},
    totalAnswers: 0,
    correctAnswers: 0
  };
}


function loadState() {

  try {

    return {
      ...defaultState(),
      ...JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "{}"
      )
    };

  } catch {

    return defaultState();

  }

}


function saveState() {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(state)
  );

}


// =====================================================
// NAVIGATION
// =====================================================

function showView(name) {

  Object.values(views).forEach(
    view => view.classList.remove("active")
  );

  views[name].classList.add("active");

  $("homeBtn").classList.toggle(
    "hidden",
    name === "home"
  );

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// =====================================================
// PROGRESSION
// =====================================================

function progressColor(pct) {

  const hue = Math.round(
    (
      Math.max(
        0,
        Math.min(100, pct)
      ) / 100
    ) * 120
  );

  return `hsl(${hue} 72% 42%)`;

}


function themeQuestions(themeId) {

  return QUESTION_BANKS[themeId] || [];

}


function seenCount(list) {

  return list.filter(
    question =>
      state.seen[question.id]
  ).length;

}


function percentage(list) {

  return list.length
    ? Math.round(
        (
          seenCount(list) /
          list.length
        ) * 100
      )
    : 0;

}


// =====================================================
// PAGE D'ACCUEIL
// =====================================================

function renderHome() {

  const list = $("themeList");

  list.innerHTML = "";


  THEMES.forEach(theme => {

    const qs =
      themeQuestions(theme.id);

    const pct =
      percentage(qs);

    const color =
      progressColor(pct);

    const btn =
      document.createElement("button");

    btn.className =
      "theme-card";

    btn.type =
      "button";

    btn.dataset.theme =
      theme.id;


    btn.innerHTML = `

      <div class="theme-top">

        <span class="theme-number">
          ${theme.id}
        </span>

        <span class="theme-name">
          ${theme.name}
        </span>

        <span
          class="theme-percent"
          style="color:${color}"
        >
          ${pct} %
        </span>

      </div>

      <div class="progress-track">

        <div
          class="progress-fill"
          style="
            width:${pct}%;
            background:${color}
          "
        ></div>

      </div>

    `;


    btn.addEventListener(
      "click",
      () =>
        startSession(
          "theme",
          theme.id
        )
    );


    list.appendChild(btn);

  });


  const allPct =
    percentage(QUESTIONS);


  $("allPercent").textContent =
    `${allPct} %`;


  $("allPercent").style.color =
    progressColor(allPct);


  $("globalProgress").textContent =
    `${allPct} % parcouru`;


  const activeErrors =
    Object.keys(state.errors)
      .filter(
        id =>
          QUESTIONS.some(
            question =>
              question.id === id
          )
      );


  $("errorCount").textContent =
    activeErrors.length;


  $("errorSubtitle").textContent =
    activeErrors.length
      ? `${activeErrors.length} question${
          activeErrors.length > 1
            ? "s"
            : ""
        } à retravailler`
      : "Aucune question à retravailler";


  $("answeredStat").textContent =
    state.totalAnswers;


  $("successStat").textContent =
    state.totalAnswers
      ? `${Math.round(
          state.correctAnswers /
          state.totalAnswers *
          100
        )} %`
      : "—";

}


// =====================================================
// DÉMARRAGE D'UNE SESSION
// =====================================================

function shuffled(arr) {

  return [...arr]
    .sort(
      () =>
        Math.random() - 0.5
    );

}


function startSession(
  mode,
  themeId = null
) {

  let pool;


  if (mode === "theme") {

    pool =
      themeQuestions(themeId);

  }

  else if (mode === "all") {

    pool =
      QUESTIONS;

  }

  else {

    pool =
      QUESTIONS.filter(
        question =>
          state.errors[
            question.id
          ]
      );

  }


  if (!pool.length) {

    $("emptyTitle").textContent =
      mode === "errors"
        ? "Aucune erreur à retravailler"
        : "Aucune question disponible";


    $("emptyText").textContent =
      mode === "errors"
        ? "Les questions auxquelles tu répondras mal apparaîtront ici jusqu'à deux bonnes réponses consécutives."
        : "Cette partie ne contient pas encore de questions.";


    showView("empty");

    return;

  }


  session = {

    mode: mode,

    theme: themeId,

    pool: shuffled(pool),

    current: null,

    answeredInSession: 0,

    locked: false

  };


  const label =

    mode === "theme"

      ? THEMES.find(
          theme =>
            theme.id === themeId
        ).name

      : mode === "all"

        ? "Tous les thèmes"

        : "Mes erreurs";


  $("quizTheme").textContent =
    label;


  showView("quiz");

  nextQuestion();

}


// =====================================================
// CHOIX DE LA QUESTION
// =====================================================

function chooseNext(pool) {

  if (
    session.mode !== "errors"
  ) {

    const unseen =
      pool.filter(
        question =>
          !state.seen[
            question.id
          ] &&
          question.id !==
          session.current?.id
      );


    if (unseen.length) {

      return unseen[
        Math.floor(
          Math.random() *
          unseen.length
        )
      ];

    }

  }


  const candidates =
    pool.filter(
      question =>
        question.id !==
        session.current?.id
    );


  const source =
    candidates.length
      ? candidates
      : pool;


  return source[
    Math.floor(
      Math.random() *
      source.length
    )
  ];

}


// =====================================================
// QUESTION SUIVANTE
// =====================================================

function nextQuestion() {

  if (
    session.mode === "errors"
  ) {

    session.pool =
      QUESTIONS.filter(
        question =>
          state.errors[
            question.id
          ]
      );


    if (
      !session.pool.length
    ) {

      $("emptyTitle").textContent =
        "Toutes les erreurs sont acquises";


      $("emptyText").textContent =
        "Tu as obtenu deux bonnes réponses consécutives sur toutes les questions à retravailler.";


      showView("empty");

      renderHome();

      return;

    }

  }


  session.current =
    chooseNext(
      session.pool
    );


  session.locked =
    false;


  session.answeredInSession++;


  renderQuestion();

}


// =====================================================
// AFFICHAGE QUESTION
// =====================================================

function renderQuestion() {

  const q =
    session.current;


  $("questionProgress").textContent =
    `Question ${q.id}`;


  $("questionText").textContent =
    q.question;


  $("feedback").className =
    "feedback hidden";


  $("feedback").innerHTML =
    "";


  $("nextBtn")
    .classList
    .add("hidden");


  const mastery =
    $("errorMastery");


  if (
    session.mode === "errors" &&
    state.errors[q.id]
  ) {

    mastery.textContent =
      `Acquisition ${
        state.errors[q.id].streak || 0
      }/2`;


    mastery.classList.remove(
      "hidden"
    );

  }

  else {

    mastery.classList.add(
      "hidden"
    );

  }


  const answers =
    $("answers");


  answers.innerHTML =
    "";


  /*
  La nouvelle banque utilise "choices".
  L'ancienne banque utilisait "options".

  On accepte les deux formats.
  */

  const options =
    q.choices || q.options || [];


  options.forEach(
    (option, index) => {

      const btn =
        document.createElement(
          "button"
        );


      btn.className =
        "answer-btn";


      btn.type =
        "button";


      btn.innerHTML = `

        <span class="answer-letter">
          ${String.fromCharCode(
            65 + index
          )}
        </span>

        <span>
          ${option}
        </span>

      `;


      btn.addEventListener(
        "click",
        () =>
          answer(index)
      );


      answers.appendChild(btn);

    }
  );

}


// =====================================================
// RÉPONSE
// =====================================================

function answer(index) {

  if (session.locked) {
    return;
  }


  session.locked =
    true;


  const q =
    session.current;


  const options =
    q.choices ||
    q.options ||
    [];


  const correct =
    index === q.correct;


  state.totalAnswers++;


  if (correct) {

    state.correctAnswers++;

  }


  state.seen[q.id] =
    true;


  const buttons =
    [
      ...$("answers").children
    ];


  buttons.forEach(
    (btn, i) => {

      btn.disabled =
        true;


      if (
        i === q.correct
      ) {

        btn.classList.add(
          "correct"
        );

      }


      if (
        i === index &&
        !correct
      ) {

        btn.classList.add(
          "wrong"
        );

      }

    }
  );


  // ===================================================
  // BONNE RÉPONSE
  // ===================================================

  if (correct) {


    if (
      session.mode === "errors" &&
      state.errors[q.id]
    ) {

      state.errors[q.id].streak =
        (
          state.errors[q.id].streak ||
          0
        ) + 1;


      if (
        state.errors[q.id].streak >= 2
      ) {

        delete state.errors[q.id];

      }

    }


    saveState();

    renderHome();


    const fb =
      $("feedback");


    fb.className =
      "feedback success";


    const article =
  q.source ||
  q.article ||
  "";


fb.innerHTML = `

  <strong>
    Bonne réponse
  </strong>

  <div class="article">
    article ${article}
  </div>

`;


    $("nextBtn")
      .classList
      .remove("hidden");

  }


  // ===================================================
  // MAUVAISE RÉPONSE
  // ===================================================

  else {


    if (
      !state.errors[q.id]
    ) {

      state.errors[q.id] = {
        streak: 0,
        misses: 0
      };

    }


    state.errors[q.id].streak =
      0;


    state.errors[q.id].misses =
      (
        state.errors[q.id].misses ||
        0
      ) + 1;


    saveState();

    renderHome();


    const fb =
      $("feedback");


    fb.className =
      "feedback error";


    /*
    Pour une erreur :
    - mauvaise réponse en rouge
    - bonne réponse en vert
    - article à consulter
    - pas de passage automatique
    */


    const article =
      q.source ||
      q.article ||
      "";


    fb.innerHTML = `

      <strong>
        Mauvaise réponse
      </strong>

      La bonne réponse est :

      <b>
        ${options[q.correct]}
      </b>

      <div class="article">
        À consulter :
        article ${article}
      </div>

    `;


    $("nextBtn")
      .classList
      .remove("hidden");

  }

}


// =====================================================
// BOUTONS DE NAVIGATION
// =====================================================

$("backBtn")
  .addEventListener(
    "click",
    () => {

      renderHome();

      showView("home");

    }
  );


$("homeBtn")
  .addEventListener(
    "click",
    () => {

      renderHome();

      showView("home");

    }
  );


$("emptyHomeBtn")
  .addEventListener(
    "click",
    () => {

      renderHome();

      showView("home");

    }
  );


$("nextBtn")
  .addEventListener(
    "click",
    nextQuestion
  );


document
  .querySelector(
    '[data-mode="all"]'
  )
  .addEventListener(
    "click",
    () =>
      startSession("all")
  );


document
  .querySelector(
    '[data-mode="errors"]'
  )
  .addEventListener(
    "click",
    () =>
      startSession("errors")
  );


// =====================================================
// INITIALISATION
// =====================================================

renderHome();