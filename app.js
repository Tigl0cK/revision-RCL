/* revision-RCL — logique de l'application
   Les banques de questions sont chargées dans des fichiers séparés.
*/

(() => {
  "use strict";

  // Banque actuellement disponible : Référentiel A — Partie 2
  const BANK =
    typeof QUESTIONS_PARTIE_2 !== "undefined" &&
    Array.isArray(QUESTIONS_PARTIE_2)
      ? QUESTIONS_PARTIE_2
      : [];

  const STORAGE_KEY = "revisionRCL_state_v2";
  const AUTO_NEXT_MS = 1500;

  const THEMES = {
    2: "Circulation à contresens ou à contre-voie"
  };

  let mode = "theme";
  let currentTheme = 2;
  let currentQuestion = null;
  let locked = false;

  let state = loadState();

  // =========================
  // SAUVEGARDE LOCALE
  // =========================

  function loadState() {
    try {
      const saved = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "{}"
      );

      return {
        seen: saved.seen || {},
        errors: saved.errors || {},
        history: saved.history || {}
      };
    } catch {
      return {
        seen: {},
        errors: {},
        history: {}
      };
    }
  }

  function saveState() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state)
    );
  }

  // =========================
  // QUESTIONS
  // =========================

  function qById(id) {
    return BANK.find(q => q.id === id);
  }

  function questionsForTheme(theme) {
    return BANK.filter(
      q => Number(q.theme) === Number(theme)
    );
  }

  function nextFromPool(pool) {
    if (!pool.length) return null;

    // Tant que toutes les questions n'ont pas été vues,
    // priorité aux questions jamais rencontrées.
    const unseen = pool.filter(
      q => !state.seen[q.id]
    );

    const source =
      unseen.length > 0 ? unseen : pool;

    // Évite si possible de reproposer immédiatement
    // la même question.
    const candidates =
      currentQuestion && source.length > 1
        ? source.filter(
            q => q.id !== currentQuestion.id
          )
        : source;

    return candidates[
      Math.floor(Math.random() * candidates.length)
    ];
  }

  function nextQuestion() {
    locked = false;

    if (mode === "errors") {
      const errorQuestions =
        Object.keys(state.errors)
          .filter(id =>
            state.errors[id] &&
            state.errors[id].mastery < 2
          )
          .map(qById)
          .filter(Boolean);

      currentQuestion =
        nextFromPool(errorQuestions);
    } else {
      currentQuestion =
        nextFromPool(
          questionsForTheme(currentTheme)
        );
    }

    render();
  }

  // =========================
  // ENREGISTREMENT RÉPONSES
  // =========================

  function recordAnswer(question, isCorrect) {
    state.seen[question.id] = true;

    if (!state.history[question.id]) {
      state.history[question.id] = {
        correct: 0,
        wrong: 0
      };
    }

    if (isCorrect) {
      state.history[question.id].correct++;

      // Dans "Mes erreurs" :
      // deux bonnes réponses consécutives
      // permettent de retirer la question.
      if (
        mode === "errors" &&
        state.errors[question.id]
      ) {
        state.errors[question.id].mastery =
          Math.min(
            2,
            (state.errors[question.id].mastery || 0) + 1
          );
      }
    } else {
      state.history[question.id].wrong++;

      // Première erreur :
      // entrée dans "Mes erreurs" à 0/2.
      if (!state.errors[question.id]) {
        state.errors[question.id] = {
          mastery: 0,
          firstWrongAt: Date.now(),
          wrongCount: 1
        };
      } else {
        // Nouvelle erreur :
        // retour à 0/2.
        state.errors[question.id].mastery = 0;

        state.errors[question.id].wrongCount =
          (state.errors[question.id].wrongCount || 0) + 1;
      }
    }

    saveState();
  }

  // =========================
  // PROGRESSION
  // =========================

  function progress(theme) {
    const pool =
      questionsForTheme(theme);

    if (!pool.length) return 0;

    const seen =
      pool.filter(
        q => state.seen[q.id]
      ).length;

    return Math.round(
      (seen / pool.length) * 100
    );
  }

  function activeErrorsCount() {
    return Object.values(state.errors)
      .filter(
        error =>
          error &&
          error.mastery < 2
      ).length;
  }

  // =========================
  // INTERFACE
  // =========================

  function ensureRoot() {
    let root =
      document.getElementById("app");

    if (!root) {
      root =
        document.createElement("main");

      root.id = "app";

      document.body.innerHTML = "";
      document.body.appendChild(root);
    }

    return root;
  }

  function render() {
    const root = ensureRoot();

    if (!BANK.length) {
      root.innerHTML = `
        <section class="app-card">
          <h1>Révision RCL</h1>

          <p class="error-message">
            La banque de questions A2
            n'a pas été chargée.
          </p>

          <p>
            Vérifie que
            <strong>questions-A2.js</strong>
            est chargé avant
            <strong>app.js</strong>
            dans index.html.
          </p>
        </section>
      `;

      return;
    }

    if (!currentQuestion) {
      renderHome(root);
      return;
    }

    renderQuestion(root);
  }

  // =========================
  // ACCUEIL
  // =========================

  function renderHome(root) {
    const pct = progress(2);
    const errors =
      activeErrorsCount();

    root.innerHTML = `
      <section class="app-card home-card">

        <div class="eyebrow">
          Référentiel métier des conducteurs
        </div>

        <h1>Chapitre A</h1>

        <p class="subtitle">
          Signalisation / Règles d'exploitation
        </p>

        <div
          class="theme-card"
          id="start-theme-2"
          role="button"
          tabindex="0"
        >

          <div class="theme-card-top">

            <div>
              <div class="theme-number">
                Partie 2
              </div>

              <h2>
                ${THEMES[2]}
              </h2>
            </div>

            <strong>
              ${pct}%
            </strong>

          </div>

          <div class="progress-track">
            <div
              class="progress-fill"
              style="width:${pct}%"
            ></div>
          </div>

          <div class="theme-meta">
            ${BANK.length} questions
          </div>

        </div>

        <button
          class="secondary-button"
          id="start-errors"
          ${errors ? "" : "disabled"}
        >
          Mes erreurs (${errors})
        </button>

      </section>
    `;

    const theme =
      document.getElementById(
        "start-theme-2"
      );

    theme.addEventListener(
      "click",
      startTheme
    );

    theme.addEventListener(
      "keydown",
      event => {
        if (
          event.key === "Enter" ||
          event.key === " "
        ) {
          startTheme();
        }
      }
    );

    document
      .getElementById("start-errors")
      .addEventListener(
        "click",
        () => {
          if (!activeErrorsCount()) {
            return;
          }

          mode = "errors";
          currentQuestion = null;
          nextQuestion();
        }
      );
  }

  function startTheme() {
    mode = "theme";
    currentTheme = 2;
    currentQuestion = null;

    nextQuestion();
  }

  // =========================
  // AFFICHAGE QUESTION
  // =========================

  function renderQuestion(root) {
    const q =
      currentQuestion;

    const pct =
      progress(2);

    const mastery =
      state.errors[q.id]?.mastery ?? 0;

    root.innerHTML = `
      <section class="app-card question-card">

        <div class="question-header">

          <button
            class="back-button"
            id="back-home"
            aria-label="Retour"
          >
            ←
          </button>

          <div class="question-context">
            ${
              mode === "errors"
                ? "Mes erreurs"
                : THEMES[2]
            }
          </div>

          <div class="question-id">
            ${escapeHtml(q.id)}
          </div>

        </div>

        ${
          mode === "errors"
            ? `
              <div class="mastery">
                Maîtrise :
                ${mastery}/2
              </div>
            `
            : `
              <div class="progress-track compact">
                <div
                  class="progress-fill"
                  style="width:${pct}%"
                ></div>
              </div>
            `
        }

        <h2 class="question-text">
          ${escapeHtml(q.question)}
        </h2>

        <div class="answers">

          ${q.choices
            .map(
              (choice, index) => `
                <button
                  class="answer-button"
                  data-index="${index}"
                >

                  <span class="answer-letter">
                    ${String.fromCharCode(
                      65 + index
                    )}
                  </span>

                  <span>
                    ${escapeHtml(choice)}
                  </span>

                </button>
              `
            )
            .join("")}

        </div>

        <div id="feedback"></div>

      </section>
    `;

    document
      .getElementById("back-home")
      .addEventListener(
        "click",
        () => {
          currentQuestion = null;
          locked = false;
          render();
        }
      );

    document
      .querySelectorAll(
        ".answer-button"
      )
      .forEach(button => {
        button.addEventListener(
          "click",
          () => {
            answer(
              Number(
                button.dataset.index
              )
            );
          }
        );
      });
  }

  // =========================
  // VALIDATION RÉPONSE
  // =========================

  function answer(selectedIndex) {
    if (
      locked ||
      !currentQuestion
    ) {
      return;
    }

    locked = true;

    const q =
      currentQuestion;

    const correctIndex =
      Number(q.correct);

    const isCorrect =
      selectedIndex === correctIndex;

    recordAnswer(
      q,
      isCorrect
    );

    const buttons = [
      ...document.querySelectorAll(
        ".answer-button"
      )
    ];

    buttons.forEach(
      (button, index) => {
        button.disabled = true;

        if (
          index === correctIndex
        ) {
          button.classList.add(
            "correct"
          );
        }

        if (
          !isCorrect &&
          index === selectedIndex
        ) {
          button.classList.add(
            "wrong"
          );
        }
      }
    );

    const feedback =
      document.getElementById(
        "feedback"
      );

    // BONNE RÉPONSE
    if (isCorrect) {
      feedback.innerHTML = `
        <div
          class="feedback correct-feedback"
        >
          Bonne réponse
        </div>
      `;

      setTimeout(
        () => {
          currentQuestion = null;

          if (
            mode === "errors" &&
            activeErrorsCount() === 0
          ) {
            render();
          } else {
            nextQuestion();
          }
        },
        AUTO_NEXT_MS
      );

      return;
    }

    // MAUVAISE RÉPONSE
    feedback.innerHTML = `
      <div
        class="feedback wrong-feedback"
      >
        <strong>
          À consulter :
          article ${escapeHtml(q.source)}
        </strong>
      </div>

      <button
        class="primary-button"
        id="next-question"
      >
        Question suivante
      </button>
    `;

    document
      .getElementById(
        "next-question"
      )
      .addEventListener(
        "click",
        () => {
          currentQuestion = null;
          nextQuestion();
        }
      );
  }

  // =========================
  // SÉCURITÉ AFFICHAGE
  // =========================

  function escapeHtml(value) {
    return String(
      value ?? ""
    )
      .replaceAll(
        "&",
        "&amp;"
      )
      .replaceAll(
        "<",
        "&lt;"
      )
      .replaceAll(
        ">",
        "&gt;"
      )
      .replaceAll(
        '"',
        "&quot;"
      )
      .replaceAll(
        "'",
        "&#039;"
      );
  }

  // =========================
  // DÉMARRAGE
  // =========================

  document.addEventListener(
    "DOMContentLoaded",
    render
  );
})();
