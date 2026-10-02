// =====================================================
// CHAPITRES ET THÈMES
// =====================================================

const CHAPTERS = {
  A: {
    name: "Signalisation / Règles d'exploitation",
    themes: [
      { id: 1, name: "Signalisation au sol" },
      { id: 2, name: "Circulation à contresens ou à contre-voie" },
      { id: 3, name: "Mouvements de manœuvre guidés" },
      { id: 4, name: "Mouvements de manœuvre non guidés" },
      { id: 5, name: "Dispositions à appliquer sur certaines lignes" },
      { id: 6, name: "Principes complémentaires" }
    ]
  },

  B: {
    name: "Composition – Freinage – Vitesse limite des trains",
    themes: [
      { id: 1, name: "Généralités" }
    ]
  }
};


// =====================================================
// BANQUES DE QUESTIONS
// =====================================================

const QUESTION_BANKS = {

  A: {
    1:
      typeof QUESTIONS_PARTIE_1 !== "undefined"
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

    4:
      typeof QUESTIONS_PARTIE_4 !== "undefined"
        ? QUESTIONS_PARTIE_4
        : [],

    5:
      typeof QUESTIONS_PARTIE_5 !== "undefined"
        ? QUESTIONS_PARTIE_5
        : [],

    6:
      typeof QUESTIONS_PARTIE_6 !== "undefined"
        ? QUESTIONS_PARTIE_6
        : []
  },

  B: {
    1:
      typeof QUESTIONS_PARTIE_B1 !== "undefined"
        ? QUESTIONS_PARTIE_B1
        : []

    2:
      typeof QUESTIONS_PARTIE_B2 !== "undefined"
        ? QUESTIONS_PARTIE_B2
        : []

    3:
      typeof QUESTIONS_PARTIE_B3 !== "undefined"
        ? QUESTIONS_PARTIE_B3
        : []

    4:
      typeof QUESTIONS_PARTIE_B4 !== "undefined"
        ? QUESTIONS_PARTIE_B4
        : []

    5:
      typeof QUESTIONS_PARTIE_B5 !== "undefined"
        ? QUESTIONS_PARTIE_B5
        : []

    6:
      typeof QUESTIONS_PARTIE_B6 !== "undefined"
        ? QUESTIONS_PARTIE_B6
        : []
  }
};


// =====================================================
// TOUTES LES QUESTIONS
// =====================================================

const QUESTIONS = [

  ...QUESTION_BANKS.A[1],
  ...QUESTION_BANKS.A[2],
  ...QUESTION_BANKS.A[3],
  ...QUESTION_BANKS.A[4],
  ...QUESTION_BANKS.A[5],
  ...QUESTION_BANKS.A[6],

  ...QUESTION_BANKS.B[1],
  ...QUESTION_BANKS.B[2],
  ...QUESTION_BANKS.B[3],
  ...QUESTION_BANKS.B[4],
  ...QUESTION_BANKS.B[5],
  ...QUESTION_BANKS.B[6]

];


const STORAGE_KEY = "revisionRCL_v1";

let state = loadState();

let currentChapter = "A";

let session = {
  mode: null,
  chapter: "A",
  theme: null,
  pool: [],
  current: null,
  answeredInSession: 0,
  locked: false
};

let revisionToDelete = null;


const $ = id =>
  document.getElementById(id);


const views = {
  home: $("homeView"),
  quiz: $("quizView"),
  revisions: $("revisionsView"),
  empty: $("emptyView")
};


// =====================================================
// SAUVEGARDE
// =====================================================

function defaultState() {

  return {
    seen: {},
    errors: {},
    revisions: {},
    totalAnswers: 0,
    correctAnswers: 0
  };

}


function loadState() {

  try {

    const saved =
      JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "{}"
      );


    return {
      ...defaultState(),
      ...saved,
      seen: saved.seen || {},
      errors: saved.errors || {},
      revisions: saved.revisions || {}
    };

  }

  catch {

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
    view =>
      view.classList.remove("active")
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
// CHAPITRE ACTUEL
// =====================================================

function chapterThemes(chapter = currentChapter) {

  return CHAPTERS[chapter]?.themes || [];

}


function chapterQuestions(chapter = currentChapter) {

  const banks =
    QUESTION_BANKS[chapter] || {};


  return Object.values(banks)
    .flat();

}


function themeQuestions(
  themeId,
  chapter = currentChapter
) {

  return (
    QUESTION_BANKS[chapter]?.[themeId] ||
    []
  );

}


// =====================================================
// PROGRESSION
// =====================================================

function progressColor(pct) {

  const hue =
    Math.round(
      (
        Math.max(
          0,
          Math.min(100, pct)
        ) / 100
      ) * 120
    );


  return `hsl(${hue} 72% 42%)`;

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
// MES RÉVISIONS
// =====================================================

function revisionQuestions() {

  return QUESTIONS.filter(
    question =>
      state.revisions[question.id]
  );

}


function revisionCategory(question) {

  /*
    A1Q001 → A1
    A2Q050 → A2
    B1Q010 → B1
    B3Q010 → B3
  */

  const match =
    question.id.match(
      /^([A-Z]+\d+)Q/i
    );


  if (match) {
    return match[1].toUpperCase();
  }


  return "Autres";

}


function questionNumber(question) {

  const match =
    question.id.match(
      /Q(\d+)$/i
    );


  return match
    ? Number(match[1])
    : 0;

}


function categoryName(category) {

  const match =
    category.match(
      /^([A-Z]+)(\d+)$/
    );


  if (!match) {
    return "";
  }


  const chapter =
    match[1].toUpperCase();


  const themeId =
    Number(match[2]);


  const theme =
    CHAPTERS[chapter]?.themes.find(
      item =>
        item.id === themeId
    );


  return theme
    ? theme.name
    : "";

}


function renderRevisions() {

  const list =
    $("revisionsList");


  list.innerHTML = "";


  const questions =
    revisionQuestions();


  $("revisionsDescription").textContent =
    questions.length

      ? `${questions.length} question${
          questions.length > 1
            ? "s"
            : ""
        } enregistrée${
          questions.length > 1
            ? "s"
            : ""
        }`

      : "Aucune question enregistrée";


  if (!questions.length) {

    list.innerHTML = `

      <div class="revisions-empty">
        Aucune question dans tes révisions.
      </div>

    `;

    return;

  }


  const groups = {};


  questions.forEach(
    question => {

      const category =
        revisionCategory(question);


      if (!groups[category]) {

        groups[category] = [];

      }


      groups[category].push(
        question
      );

    }
  );


  const categories =
    Object.keys(groups)
      .sort(
        (a, b) =>
          a.localeCompare(
            b,
            undefined,
            {
              numeric: true,
              sensitivity: "base"
            }
          )
      );


  categories.forEach(
    category => {

      const group =
        document.createElement("div");


      group.className =
        "revision-group";


      const title =
        document.createElement("div");


      title.className =
        "revision-group-title";


      const name =
        categoryName(category);


      title.innerHTML = `

        <span class="revision-group-number">
          ${category}
        </span>

        ${
          name
            ? `<strong>${name}</strong>`
            : ""
        }

      `;


      group.appendChild(title);


      groups[category]
        .sort(
          (a, b) =>
            questionNumber(a) -
            questionNumber(b)
        )
        .forEach(
          question => {

            const article =
              question.source ||
              question.article ||
              "";


            const btn =
              document.createElement(
                "button"
              );


            btn.type =
              "button";


            btn.className =
              "revision-item";


            btn.innerHTML = `

              <span class="revision-item-top">

                <span class="revision-question-id">
                  ${question.id}
                </span>

                <span class="revision-article">
                  Article ${article}
                </span>

              </span>

              <span class="revision-question-text">
                ${question.question}
              </span>

            `;


            btn.addEventListener(
              "click",
              () =>
                openDeleteModal(
                  question.id
                )
            );


            group.appendChild(btn);

          }
        );


      list.appendChild(group);

    }
  );

}


function addCurrentQuestionToRevisions() {

  const q =
    session.current;


  if (!q) {
    return;
  }


  state.revisions[q.id] =
    true;


  saveState();

  renderHome();


  const btn =
    $("addRevisionBtn");


  btn.textContent =
    "✓ Ajouté à mes révisions";


  btn.classList.add(
    "added"
  );


  btn.disabled =
    true;

}


// =====================================================
// POP-UP SUPPRESSION
// =====================================================

function openDeleteModal(questionId) {

  revisionToDelete =
    questionId;


  $("deleteModal")
    .classList
    .remove("hidden");

}


function closeDeleteModal() {

  revisionToDelete =
    null;


  $("deleteModal")
    .classList
    .add("hidden");

}


function confirmDeleteRevision() {

  if (!revisionToDelete) {
    return;
  }


  delete state.revisions[
    revisionToDelete
  ];


  saveState();

  closeDeleteModal();

  renderRevisions();

  renderHome();

}


// =====================================================
// PAGE D'ACCUEIL
// =====================================================

function renderHome() {

  const list =
    $("themeList");


  list.innerHTML = "";


  const themes =
    chapterThemes();


  themes.forEach(
    theme => {

      const qs =
        themeQuestions(
          theme.id
        );


      const pct =
        percentage(qs);


      const color =
        progressColor(pct);


      const btn =
        document.createElement(
          "button"
        );


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

    }
  );


  const currentQuestions =
    chapterQuestions();


  const allPct =
    percentage(
      currentQuestions
    );


  $("allPercent").textContent =
    `${allPct} %`;


  $("allPercent").style.color =
    progressColor(
      allPct
    );


  $("globalProgress").textContent =
    `${allPct} % parcouru`;


  const activeErrors =
    Object.keys(
      state.errors
    )
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


  const revisions =
    revisionQuestions();


  $("revisionCount").textContent =
    revisions.length;


  $("revisionSubtitle").textContent =
    revisions.length

      ? `${revisions.length} question${
          revisions.length > 1
            ? "s"
            : ""
        } enregistrée${
          revisions.length > 1
            ? "s"
            : ""
        }`

      : "Aucune question enregistrée";


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
      themeQuestions(
        themeId
      );

  }

  else if (mode === "all") {

    pool =
      chapterQuestions();

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


    showView(
      "empty"
    );

    return;

  }


  session = {

    mode: mode,

    chapter: currentChapter,

    theme: themeId,

    pool: shuffled(
      pool
    ),

    current: null,

    answeredInSession: 0,

    locked: false

  };


  let label;


  if (mode === "theme") {

    const theme =
      chapterThemes()
        .find(
          item =>
            item.id === themeId
        );


    label =
      theme
        ? theme.name
        : "";

  }

  else if (mode === "all") {

    label =
      `Chapitre ${currentChapter} — Tous les thèmes`;

  }

  else {

    label =
      "Mes erreurs";

  }


  $("quizTheme").textContent =
    label;


  showView(
    "quiz"
  );


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


    if (
      unseen.length
    ) {

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


      showView(
        "empty"
      );


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


  /*
    Le bouton "Ajouter à mes révisions"
    est caché tant que la réponse n'est pas correcte.
  */

  $("addRevisionBtn").style.display =
    "none";


  $("addRevisionBtn")
    .classList
    .remove("added");


  $("addRevisionBtn").disabled =
    false;


  $("addRevisionBtn").textContent =
    "★ Ajouter à mes révisions";


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


  const options =
    q.choices ||
    q.options ||
    [];


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


      answers.appendChild(
        btn
      );

    }
  );

}


// =====================================================
// RÉPONSE
// =====================================================

function answer(index) {

  if (
    session.locked
  ) {
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
    index ===
    q.correct;


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

        delete state.errors[
          q.id
        ];

      }

    }


    saveState();

    renderHome();


    const fb =
      $("feedback");


    const article =
      q.source ||
      q.article ||
      "";


    fb.className =
      "feedback success";


    fb.innerHTML = `

      <strong>
        Bonne réponse
      </strong>

      <div class="article">
        Article ${article}
      </div>

    `;


    const revisionBtn =
      $("addRevisionBtn");


    /*
      Affichage forcé du bouton.
      Cette méthode évite le problème rencontré
      précédemment sur iPhone.
    */

    revisionBtn.style.display =
      "block";


    if (
      state.revisions[q.id]
    ) {

      revisionBtn.textContent =
        "✓ Ajouté à mes révisions";


      revisionBtn.classList.add(
        "added"
      );


      revisionBtn.disabled =
        true;

    }


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
// SÉLECTEUR DE CHAPITRE
// =====================================================

function setupChapterSelect() {

  const select =
    $("chapterSelect");


  if (!select) {
    return;
  }


  /*
    On recrée les options ici.
    Il n'est donc pas nécessaire de modifier
    le <select> dans index.html.
  */

  select.innerHTML = "";


  Object.entries(CHAPTERS)
    .forEach(
      ([chapter, data]) => {

        const option =
          document.createElement(
            "option"
          );


        option.value =
          chapter;


        option.textContent =
          `${chapter} — ${data.name}`;


        select.appendChild(
          option
        );

      }
    );


  select.value =
    currentChapter;


  select.addEventListener(
    "change",
    () => {

      currentChapter =
        select.value;


      renderHome();

    }
  );

}


// =====================================================
// BOUTONS DE NAVIGATION
// =====================================================

$("backBtn")
  .addEventListener(
    "click",
    () => {

      renderHome();

      showView(
        "home"
      );

    }
  );


$("homeBtn")
  .addEventListener(
    "click",
    () => {

      closeDeleteModal();

      renderHome();

      showView(
        "home"
      );

    }
  );


$("emptyHomeBtn")
  .addEventListener(
    "click",
    () => {

      renderHome();

      showView(
        "home"
      );

    }
  );


$("nextBtn")
  .addEventListener(
    "click",
    nextQuestion
  );


$("addRevisionBtn")
  .addEventListener(
    "click",
    addCurrentQuestionToRevisions
  );


$("revisionsBtn")
  .addEventListener(
    "click",
    () => {

      renderRevisions();

      showView(
        "revisions"
      );

    }
  );


$("revisionsBackBtn")
  .addEventListener(
    "click",
    () => {

      renderHome();

      showView(
        "home"
      );

    }
  );


$("confirmDeleteBtn")
  .addEventListener(
    "click",
    confirmDeleteRevision
  );


$("cancelDeleteBtn")
  .addEventListener(
    "click",
    closeDeleteModal
  );


$("deleteModal")
  .addEventListener(
    "click",
    event => {

      if (
        event.target ===
        $("deleteModal")
      ) {

        closeDeleteModal();

      }

    }
  );


document
  .querySelector(
    '[data-mode="all"]'
  )
  .addEventListener(
    "click",
    () =>
      startSession(
        "all"
      )
  );


document
  .querySelector(
    '[data-mode="errors"]'
  )
  .addEventListener(
    "click",
    () =>
      startSession(
        "errors"
      )
  );


// =====================================================
// INITIALISATION
// =====================================================

setupChapterSelect();

renderHome();
