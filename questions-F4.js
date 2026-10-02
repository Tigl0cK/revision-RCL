const QUESTIONS_PARTIE_F4 = [

  // ============================================================
  // F40 — INSTALLATIONS DE TRACTION ÉLECTRIQUE
  // ============================================================

  {
    id: "F4Q001",
    theme: 4,
    question: "Après un arrêt sous une zone « baissez panto » ou « coupez courant », qui peut autoriser la remise en marche ?",
    choices: [
      "Le régulateur sous-station.",
      "Le régulateur ou l'agent-circulation après vérification de l'itinéraire."
    ],
    correct: 0,
    source: "F 40.01"
  },
  {
    id: "F4Q002",
    theme: 4,
    question: "Un engin est immobilisé sous une zone « baissez panto ». Pour se dégager, un mouvement de faible amplitude en sens inverse de celui prescrit paraît suffisant. Est-il admis ?",
    choices: [
      "Oui, après accord du régulateur sous-station.",
      "Non, aucun mouvement, même de faible amplitude, ne doit être effectué dans ce sens."
    ],
    correct: 1,
    source: "F 40.01"
  },
  {
    id: "F4Q003",
    theme: 4,
    question: "Un train est arrêté sous une zone « coupez courant » et la réalimentation de la caténaire est impossible. Quelle suite est prévue ?",
    choices: [
      "Demander le secours.",
      "Se dégager sur l'erre après accord du régulateur."
    ],
    correct: 0,
    source: "F 40.01"
  },
  {
    id: "F4Q004",
    theme: 4,
    question: "Une absence de tension caténaire survient en marche sur une ligne à fortes pentes. Quelle particularité s'applique ?",
    choices: [
      "Maintenir la marche sur l'erre pendant le délai normal de réenclenchement.",
      "Freiner sans délai afin de limiter la distance parcourue."
    ],
    correct: 1,
    source: "F 40.02"
  },
  {
    id: "F4Q005",
    theme: 4,
    question: "Une mise hors tension survient en marche à moins de 160 km/h, hors ligne à fortes pentes. Aucune anomalie n'est décelée. Quelle première conduite est prévue ?",
    choices: [
      "Poursuivre sur l'erre en surveillant la voie, la caténaire et le train.",
      "S'arrêter immédiatement pour examiner les pantographes depuis le sol."
    ],
    correct: 0,
    source: "F 40.02"
  },
  {
    id: "F4Q006",
    theme: 4,
    question: "Après une mise hors tension en marche, aucune anomalie n'est décelée mais la tension n'est toujours pas rétablie 20 secondes après sa détection. Que doit faire le conducteur ?",
    choices: [
      "Poursuivre sur l'erre jusqu'à l'arrêt naturel du train.",
      "S'arrêter d'urgence."
    ],
    correct: 1,
    source: "F 40.02"
  },
  {
    id: "F4Q007",
    theme: 4,
    question: "Une absence de tension est accompagnée d'une dépression inopinée dans la conduite générale. Quelle hypothèse particulière le référentiel attire-t-il l'attention du conducteur ?",
    choices: [
      "Un déraillement du train.",
      "Une simple disjonction provoquée par le freinage."
    ],
    correct: 0,
    source: "F 40.02"
  },
  {
    id: "F4Q008",
    theme: 4,
    question: "Le train s'est arrêté à la suite d'une mise hors tension de la caténaire. Quelle vérification doit notamment être effectuée depuis le sol ?",
    choices: [
      "Uniquement l'absence d'objet sur la toiture.",
      "Le contact du ou des pantographes utilisés avec la caténaire et leur état apparent."
    ],
    correct: 1,
    source: "F 40.02"
  },
  {
    id: "F4Q009",
    theme: 4,
    question: "Après arrêt pour absence de tension, aucune anomalie n'est constatée ou présumée et la tension est rétablie. Quelle conduite s'applique ?",
    choices: [
      "Reprendre la marche.",
      "Attendre obligatoirement les instructions du régulateur sous-station."
    ],
    correct: 0,
    source: "F 40.02"
  },
  {
    id: "F4Q010",
    theme: 4,
    question: "Après arrêt pour absence de tension, le régulateur sous-station affirme que la caténaire est sous tension. Quelle procédure le conducteur applique-t-il ?",
    choices: [
      "Une visite complète du train.",
      "Le guide de dépannage."
    ],
    correct: 1,
    source: "F 40.02"
  },
  {
    id: "F4Q011",
    theme: 4,
    question: "Le train est arrêté pour absence de tension et il est impossible de recevoir des instructions du régulateur sous-station. Lors de la visite du train, le conducteur doit-il emporter la barre de court-circuit ?",
    choices: [
      "Non.",
      "Oui, dès qu'il existe une voie contiguë."
    ],
    correct: 0,
    source: "F 40.02"
  },
  {
    id: "F4Q012",
    theme: 4,
    question: "Dans cette même situation, il existe une ou plusieurs voies contiguës. De quoi le conducteur doit-il se munir pour la visite du train ?",
    choices: [
      "De la barre de court-circuit uniquement.",
      "Des agrès de couverture, en plus de l'outillage et des carnets d'étiquettes."
    ],
    correct: 1,
    source: "F 40.02"
  },
  {
    id: "F4Q013",
    theme: 4,
    question: "Après une absence de tension sans possibilité de joindre le régulateur sous-station, la visite complète du train ne révèle aucune anomalie. Que peut faire le conducteur lorsque la tension revient ?",
    choices: [
      "Remettre les engins moteurs en état de marche et reprendre la marche.",
      "Attendre dans tous les cas l'intervention d'un agent de l'infrastructure."
    ],
    correct: 0,
    source: "F 40.02"
  },
  {
    id: "F4Q014",
    theme: 4,
    question: "En 1500 V continu, après reprise consécutive à une absence de tension, quelle précaution particulière concerne le démarrage ?",
    choices: [
      "Utiliser immédiatement l'intensité maximale autorisée pour dégager rapidement la zone.",
      "Limiter l'intensité absorbée à celle nécessaire à la mise en marche du train."
    ],
    correct: 1,
    source: "F 40.02"
  },
  {
    id: "F4Q015",
    theme: 4,
    question: "En 1500 V continu, la tension descend dans la zone où l'effort de traction doit être limité. Quelle action sur le shuntage est prévue pour maintenir une tension acceptable ?",
    choices: [
      "Diminuer les crans de shuntage et, au besoin, ne plus shunter.",
      "Augmenter le shuntage afin de diminuer la durée de l'appel de courant."
    ],
    correct: 0,
    source: "F 40.03"
  },
  {
    id: "F4Q016",
    theme: 4,
    question: "En 1500 V continu, la tension devient inférieure à la valeur minimale acceptable applicable à la section. Quelle conduite s'applique ?",
    choices: [
      "Maintenir un faible effort de traction pour éviter l'arrêt.",
      "Supprimer l'effort de traction et poursuivre sur l'erre jusqu'au retour d'une tension suffisante."
    ],
    correct: 1,
    source: "F 40.03"
  },
  {
    id: "F4Q017",
    theme: 4,
    question: "En 25 kV, malgré la suppression de l'effort de traction et la marche sur l'erre, la tension reste inférieure à la valeur minimale acceptable. Quelle suite est prévue ?",
    choices: [
      "Solliciter des instructions du régulateur sous-station.",
      "Abaisser immédiatement les pantographes et demander le secours."
    ],
    correct: 0,
    source: "F 40.03"
  },
  {
    id: "F4Q018",
    theme: 4,
    question: "Une avarie de caténaire est constatée sur une voie voisine. Quelle mesure le conducteur doit-il prendre ?",
    choices: [
      "Émettre uniquement le signal d'alerte lumineux.",
      "Protéger le point dangereux comme un obstacle."
    ],
    correct: 1,
    source: "F 40.04"
  },
  {
    id: "F4Q019",
    theme: 4,
    question: "Le conducteur présume une avarie de caténaire sur sa voie après un choc au niveau de la toiture. Quelle est l'une des toutes premières mesures ?",
    choices: [
      "Provoquer d'urgence l'abaissement du ou des pantographes.",
      "Maintenir le pantographe levé afin de permettre son examen depuis le sol."
    ],
    correct: 0,
    source: "F 40.04"
  },
  {
    id: "F4Q020",
    theme: 4,
    question: "Après un choc à la toiture, le conducteur ne peut obtenir l'assurance qu'aucune voie voisine n'est engagée. Comment doit-il traiter la situation ?",
    choices: [
      "Comme une simple avarie d'engin moteur.",
      "Selon les dispositions relatives à l'obstacle ou au danger pour les trains."
    ],
    correct: 1,
    source: "F 40.04"
  },
  {
    id: "F4Q021",
    theme: 4,
    question: "Une avarie de caténaire sur la voie du train présente un risque pour les personnes ou le matériel. Quelle mesure électrique est prévue ?",
    choices: [
      "Ordonner la coupure d'urgence.",
      "Attendre que le régulateur sous-station décide lui-même d'une coupure."
    ],
    correct: 0,
    source: "F 40.04"
  },
  {
    id: "F4Q022",
    theme: 4,
    question: "Après une avarie de caténaire sur une ligne équipée en BA avec compteur d'essieux, quelle différence essentielle existe par rapport au BA sans compteur d'essieux ?",
    choices: [
      "La barre de court-circuit ne doit jamais être posée.",
      "En plus de la barre de court-circuit, le point dangereux doit être protégé comme un obstacle."
    ],
    correct: 1,
    source: "F 40.04"
  },
  {
    id: "F4Q023",
    theme: 4,
    question: "Après une avarie de caténaire en BA sans compteur d'essieux, le conducteur doit aviser à la première gare faute d'autre moyen. Où doit-il s'arrêter s'il existe un signal d'entrée ?",
    choices: [
      "Obligatoirement au signal d'entrée, même s'il est ouvert.",
      "Au premier point d'arrêt normal dans la gare."
    ],
    correct: 0,
    source: "F 40.04"
  },
  {
    id: "F4Q024",
    theme: 4,
    question: "Après une avarie de caténaire en BM, le train circule à contresens sur VUT ou à contre-voie. Où le conducteur doit-il s'arrêter pour aviser le garde ?",
    choices: [
      "Au premier signal d'entrée rencontré.",
      "Avant de regagner la voie normale."
    ],
    correct: 1,
    source: "F 40.04"
  },
  {
    id: "F4Q025",
    theme: 4,
    question: "Un agent sédentaire avise le conducteur d'une anomalie caténaire ayant pu endommager les pantographes. Aucun dommage n'est visible sur une locomotive monocourant à deux pantographes reliés électriquement, dont un seul était levé. Quelle particularité s'applique ?",
    choices: [
      "Abaisser le pantographe utilisé et employer l'autre après contrôle visuel de sa montée et de sa descente.",
      "Continuer obligatoirement avec le pantographe qui était utilisé lors de l'incident."
    ],
    correct: 0,
    source: "F 40.04"
  },

  // ============================================================
  // F41 — CONDITIONS ATMOSPHÉRIQUES
  // ============================================================

  {
    id: "F4Q026",
    theme: 4,
    question: "Le conducteur constate des projections de neige glacée ou poudreuse, alors même que la plate-forme locale n'est pas enneigée. Cette situation doit-elle être signalée ?",
    choices: [
      "Non, uniquement si la voie elle-même est enneigée.",
      "Oui, au régulateur par radio si possible, à défaut au premier arrêt."
    ],
    correct: 1,
    source: "F 41.01"
  },
  {
    id: "F4Q027",
    theme: 4,
    question: "Des projections de neige sont constatées et le conducteur reçoit des restrictions de vitesse. Sur quoi leur application repose-t-elle ?",
    choices: [
      "Sur les ordres reçus et le motif indiqué.",
      "Sur une limitation unique applicable à tout matériel roulant."
    ],
    correct: 0,
    source: "F 41.01"
  },
  {
    id: "F4Q028",
    theme: 4,
    question: "Sous 1500 V, un mauvais captage dû à une forte chaleur ou à un vent violent est constaté sur un engin ne relevant pas du cas particulier prévu par le référentiel. Quelle adaptation est effectuée ?",
    choices: [
      "Lever systématiquement les deux pantographes.",
      "Abaisser la vitesse jusqu'à retrouver un captage satisfaisant."
    ],
    correct: 1,
    source: "F 41.02"
  },
  {
    id: "F4Q029",
    theme: 4,
    question: "Après avoir réduit sa vitesse pour mauvais captage sous 1500 V, comment le conducteur vérifie-t-il périodiquement si la situation s'est améliorée ?",
    choices: [
      "En augmentant la vitesse du train pour apprécier la qualité du captage.",
      "En s'arrêtant pour examiner systématiquement le pantographe depuis le sol."
    ],
    correct: 0,
    source: "F 41.02"
  },
  {
    id: "F4Q030",
    theme: 4,
    question: "Après un mauvais captage sous 1500 V dû à une forte chaleur ou au vent, quelle vérification est prévue à la rentrée dans un établissement disposant d'une passerelle ?",
    choices: [
      "Uniquement une vérification du carnet de bord.",
      "Une visite systématique de la toiture de l'engin moteur."
    ],
    correct: 1,
    source: "F 41.02"
  },

  // ============================================================
  // F42 — ÉQUIPEMENTS FIXES
  // ============================================================

  {
    id: "F4Q031",
    theme: 4,
    question: "Un train comportant un engin produisant des gaz d'échappement est immobilisé dans un tunnel à mauvaise aération non précédé de la pancarte autorisant le refoulement d'office. Le conducteur peut-il refouler de sa propre initiative ?",
    choices: [
      "Non.",
      "Oui, dès qu'une gêne respiratoire apparaît."
    ],
    correct: 0,
    source: "F 42.01"
  },
  {
    id: "F4Q032",
    theme: 4,
    question: "Dans un tunnel à mauvaise aération non repéré par la pancarte permettant le refoulement d'office, un retour vers la gare en arrière devient nécessaire. Quelle condition est prévue ?",
    choices: [
      "Une autorisation verbale du régulateur suffit.",
      "Recevoir par dépêche de la gare en arrière l'autorisation de revenir, le train étant guidé par signaux de manœuvre."
    ],
    correct: 1,
    source: "F 42.01"
  },
  {
    id: "F4Q033",
    theme: 4,
    question: "Un train s'arrête dans un tunnel à mauvaise aération précédé de la pancarte autorisant le refoulement d'office. Aucune demande de secours n'a été rédigée et la marche en avant est impossible. Quelle possibilité existe ?",
    choices: [
      "Refouler d'office le train à l'air libre.",
      "Attendre obligatoirement une autorisation de remise en marche."
    ],
    correct: 0,
    source: "F 42.01"
  },
  {
    id: "F4Q034",
    theme: 4,
    question: "Dans ce refoulement d'office hors d'un tunnel à mauvaise aération, un agent doit-il obligatoirement être placé à l'avant du mouvement ?",
    choices: [
      "Oui.",
      "Non, le train peut être refoulé sans agent à l'avant du mouvement."
    ],
    correct: 1,
    source: "F 42.01"
  },
  {
    id: "F4Q035",
    theme: 4,
    question: "Dans un tunnel repéré par la pancarte autorisant normalement le refoulement d'office, une demande de secours a déjà été rédigée. Le conducteur peut-il encore refouler de sa propre initiative ?",
    choices: [
      "Non, il immobilise le train et attend le secours ou une autorisation de remise en marche.",
      "Oui, tant que le secours n'est pas annoncé à proximité."
    ],
    correct: 0,
    source: "F 42.01"
  },
  {
    id: "F4Q036",
    theme: 4,
    question: "Sur double voie, un PN à SAL est indûment ouvert. Si les barrières sont finalement remplacées par un dispositif de secours, que devient l'émission des signaux d'alerte ?",
    choices: [
      "Elle est maintenue jusqu'à l'arrêt du train à la DCO.",
      "Le conducteur cesse le SAR et le SAL et poursuit la marche."
    ],
    correct: 1,
    source: "F 42.02"
  },
  {
    id: "F4Q037",
    theme: 4,
    question: "Sur double voie, après constatation d'un PN à SAL indûment ouvert, le conducteur s'arrête à la DCO et n'obtient pas l'assurance que le PN est protégé. Quelle mesure est notamment prévue ?",
    choices: [
      "Maintenir SAR et SAL et poser des pétards à la DCO sur la ou les voies de sens contraire.",
      "Cesser les alertes dès l'arrêt et protéger uniquement sa propre voie."
    ],
    correct: 0,
    source: "F 42.02"
  },
  {
    id: "F4Q038",
    theme: 4,
    question: "Sur voie unique, le conducteur constate un PN à SAL indûment ouvert. Quelle différence essentielle existe avec la procédure de double voie ?",
    choices: [
      "Il doit systématiquement s'arrêter immédiatement après le PN.",
      "Il poursuit jusqu'à l'entrée de la première gare ou au premier poste de cantonnement pour s'arrêter et aviser."
    ],
    correct: 1,
    source: "F 42.02"
  },
  {
    id: "F4Q039",
    theme: 4,
    question: "Sur une ligne à une voie banalisée, un PN à SAL est indûment ouvert. Quelle conduite est prévue après son franchissement si l'arrêt n'a pu être obtenu avant ?",
    choices: [
      "S'arrêter dès que possible et signaler l'incident par les moyens les plus rapides.",
      "Poursuivre jusqu'à la première gare comme sur voie unique."
    ],
    correct: 0,
    source: "F 42.02"
  },
  {
    id: "F4Q040",
    theme: 4,
    question: "Un PN gardé est indûment ouvert et le conducteur estime ne pas pouvoir s'arrêter avant celui-ci. Comment doit-il opérer ?",
    choices: [
      "Comme pour un simple arrêt accidentel.",
      "Comme s'il s'agissait d'un PN à SAL, selon le cas prévu par le référentiel."
    ],
    correct: 1,
    source: "F 42.03"
  },
  {
    id: "F4Q041",
    theme: 4,
    question: "Sur double voie, le conducteur a pu s'arrêter avant un PN gardé indûment ouvert. Le garde est absent et les barrières ne peuvent pas être fermées. Quelle mesure spécifique s'impose ?",
    choices: [
      "Protéger le PN comme un obstacle.",
      "Franchir immédiatement le PN puis aviser."
    ],
    correct: 0,
    source: "F 42.03"
  },
  {
    id: "F4Q042",
    theme: 4,
    question: "Sur voie unique, le conducteur a pu s'arrêter avant un PN gardé ouvert mais ne parvient pas à fermer les barrières. Doit-il protéger le PN comme un obstacle avant de repartir ?",
    choices: [
      "Oui, comme en double voie.",
      "Non ; il signale l'incident puis franchit avec la plus grande prudence après usage prolongé de l'avertisseur."
    ],
    correct: 1,
    source: "F 42.03"
  },
  {
    id: "F4Q043",
    theme: 4,
    question: "Sur voie unique, l'arrêt n'a pas pu être obtenu avant un PN gardé indûment ouvert. Où l'arrêt est-il reporté ?",
    choices: [
      "À l'entrée de la première gare ou au premier poste de cantonnement.",
      "À la DCO du PN."
    ],
    correct: 0,
    source: "F 42.03"
  },
  {
    id: "F4Q044",
    theme: 4,
    question: "Sur une voie banalisée, l'arrêt n'a pas pu être obtenu avant un PN gardé indûment ouvert. Quelle différence avec la voie unique est prévue ?",
    choices: [
      "Le conducteur poursuit jusqu'au premier poste de cantonnement.",
      "Le conducteur s'arrête et signale l'incident par les moyens les plus rapides."
    ],
    correct: 1,
    source: "F 42.03"
  },
  {
    id: "F4Q045",
    theme: 4,
    question: "À la suite d'un gardiennage provisoire d'un PN à SAL, à quel moment le conducteur peut-il reprendre la marche normale si rien ne s'y oppose ?",
    choices: [
      "Dès que la tête du train a franchi le PN.",
      "Lorsque l'ensemble du train a dégagé le PN."
    ],
    correct: 0,
    source: "F 42.04"
  },
  {
    id: "F4Q046",
    theme: 4,
    question: "Après un arrêt aux abords d'un PN à SAL non repéré par une pancarte PN 000 avec bandeau blanc, quelle règle s'applique à la reprise ?",
    choices: [
      "Le franchissement est possible en marche prudente même si le PN reste ouvert.",
      "S'approcher avec la plus grande prudence et ne franchir le PN qu'après sa fermeture."
    ],
    correct: 1,
    source: "F 42.05"
  },

  // ============================================================
  // F43.01 — OBSTACLE OU DANGER
  // ============================================================

  {
    id: "F4Q047",
    theme: 4,
    question: "Sur voie de service, le conducteur constate un obstacle. Doit-il appliquer la procédure complète de couverture d'obstacle prévue pour la voie principale ?",
    choices: [
      "Non, il signale la présence de l'obstacle à l'agent sédentaire afin que celui-ci prenne les mesures utiles.",
      "Oui, dans les mêmes conditions que sur voie principale."
    ],
    correct: 0,
    source: "F 43.01"
  },
  {
    id: "F4Q048",
    theme: 4,
    question: "Un conducteur disposant de la liaison radio sol-train constate un obstacle ou un danger. Quelle mesure radio est prévue immédiatement ?",
    choices: [
      "Donner uniquement un avis en phonie au régulateur.",
      "Déclencher le signal d'alerte radio."
    ],
    correct: 1,
    source: "F 43.01"
  },
  {
    id: "F4Q049",
    theme: 4,
    question: "Une torche à flamme rouge a été allumée pour protéger un obstacle. Son utilisation dispense-t-elle des autres mesures de protection d'urgence ?",
    choices: [
      "Non, tant que l'agent n'a pas la certitude que la protection est assurée par les signaux d'une gare ou d'un poste.",
      "Oui, dès lors qu'elle est visible dans les deux directions."
    ],
    correct: 0,
    source: "F 43.01"
  },
  {
    id: "F4Q050",
    theme: 4,
    question: "L'exécution immédiate d'une coupure d'urgence risque d'aggraver le danger, par exemple en immobilisant un train en feu dans un tunnel. Peut-elle être différée ?",
    choices: [
      "Non, une coupure d'urgence doit toujours être exécutée immédiatement.",
      "Oui."
    ],
    correct: 1,
    source: "F 43.01"
  },
  {
    id: "F4Q051",
    theme: 4,
    question: "En se portant à la couverture d'un obstacle, le couvreur rencontre une aiguille d'où des circulations peuvent être dirigées vers l'obstacle. Quelle mesure prend-il ?",
    choices: [
      "Il pose un pétard devant la pointe de l'aiguille puis poursuit la couverture.",
      "Il s'arrête à l'aiguille et y établit définitivement la couverture."
    ],
    correct: 0,
    source: "F 43.01"
  },
  {
    id: "F4Q052",
    theme: 4,
    question: "Le couvreur rencontre des aiguilles successives proches permettant de diriger des circulations vers l'obstacle. Où le pétard est-il placé ?",
    choices: [
      "Devant la dernière aiguille donnant directement accès à l'obstacle.",
      "Devant la pointe de la première aiguille."
    ],
    correct: 1,
    source: "F 43.01"
  },
  {
    id: "F4Q053",
    theme: 4,
    question: "En cours de couverture, le couvreur doit momentanément s'écarter de la voie pour téléphoner. Quelle précaution est prévue ?",
    choices: [
      "Poser des pétards sur la voie, puis les enlever s'il poursuit ensuite la couverture.",
      "Laisser uniquement son signal d'arrêt à main sur la voie."
    ],
    correct: 0,
    source: "F 43.01"
  },
  {
    id: "F4Q054",
    theme: 4,
    question: "Le couvreur rencontre un autre agent et doit lui-même revenir vers l'obstacle. Peut-il lui confier la poursuite de la couverture ?",
    choices: [
      "Non, seul l'agent ayant commencé la couverture peut l'achever.",
      "Oui, en lui fournissant si nécessaire les moyens et en lui indiquant la distance restant à parcourir."
    ],
    correct: 1,
    source: "F 43.01"
  },
  {
    id: "F4Q055",
    theme: 4,
    question: "En BA sans compteur d'essieux, une barre de court-circuit opérante est utilisée pour la couverture. Où doit-elle être placée par rapport au signal d'entrée du canton concerné ?",
    choices: [
      "À au moins 30 mètres en aval de ce signal.",
      "À au moins 30 mètres en amont de ce signal."
    ],
    correct: 0,
    source: "F 43.01"
  },
  {
    id: "F4Q056",
    theme: 4,
    question: "En BA sans compteur d'essieux, une barre de court-circuit opérante est posée en amont de l'obstacle, du côté du train attendu, dans le même canton. Dans quel cas la réduction de la couverture à 400 m ne s'applique-t-elle notamment pas ?",
    choices: [
      "En BAL ordinaire.",
      "En BAPR."
    ],
    correct: 1,
    source: "F 43.01"
  },
  {
    id: "F4Q057",
    theme: 4,
    question: "Sur ICS, vis-à-vis d'un train circulant à contresens, l'utilisation d'une barre de court-circuit permet-elle de réduire la couverture à 400 m ?",
    choices: [
      "Non, la couverture reste effectuée à la DCO.",
      "Oui, si la barre et l'obstacle sont dans le même canton."
    ],
    correct: 0,
    source: "F 43.01"
  },
  {
    id: "F4Q058",
    theme: 4,
    question: "En se portant vers un train attendu, le conducteur rencontre un panneau équipé d'un commutateur de blocage situé en amont de l'obstacle. Quelle conséquence peut avoir sa manœuvre ?",
    choices: [
      "Elle dispense toujours de toute couverture complémentaire.",
      "La couverture peut être limitée à 400 m en amont du commutateur pour le sens normal, sous réserve des exceptions prévues."
    ],
    correct: 1,
    source: "F 43.01"
  },
  {
    id: "F4Q059",
    theme: 4,
    question: "Le conducteur couvre un obstacle et rencontre un téléphone ou un poste ouvert au service. Son interlocuteur ne lui donne pas l'assurance que la protection est assurée. Que fait-il ?",
    choices: [
      "Il poursuit la couverture.",
      "Il reste au téléphone jusqu'à obtention de cette assurance."
    ],
    correct: 0,
    source: "F 43.01"
  },
  {
    id: "F4Q060",
    theme: 4,
    question: "L'agent-circulation donne au conducteur l'assurance que la protection de l'obstacle sur la voie voisine est assurée. Que devient la couverture entreprise par le conducteur ?",
    choices: [
      "Elle doit malgré tout être menée jusqu'à la DCO.",
      "Elle est interrompue."
    ],
    correct: 1,
    source: "F 43.01"
  },

  // ============================================================
  // F43.03 / F43.04 — PÉTARDS ET PROTECTION ARRIÈRE
  // ============================================================

  {
    id: "F4Q061",
    theme: 4,
    question: "Le conducteur perçoit la détonation d'un ou plusieurs pétards isolés. Quelle réaction immédiate est prévue ?",
    choices: [
      "S'arrêter d'urgence et se tenir prêt à abaisser le ou les pantographes.",
      "Se mettre en marche à vue sans provoquer l'arrêt."
    ],
    correct: 0,
    source: "F 43.03"
  },
  {
    id: "F4Q062",
    theme: 4,
    question: "Lors du freinage provoqué par des pétards isolés, un signal commandant l'arrêt a été franchi. Les prescriptions relatives à ce signal suffisent-elles ?",
    choices: [
      "Oui.",
      "Non, elles s'ajoutent aux prescriptions prévues après la détonation des pétards."
    ],
    correct: 1,
    source: "F 43.03"
  },
  {
    id: "F4Q063",
    theme: 4,
    question: "Après détonation de pétards isolés, aucun signal commandant l'arrêt n'a été franchi pendant le freinage. Quelle reprise est prévue ?",
    choices: [
      "Repartir en marche à vue sur au moins la DCO à partir du point d'arrêt, en respectant la règle de l'arrêt accidentel.",
      "Repartir en marche prudente jusqu'au prochain signal."
    ],
    correct: 0,
    source: "F 43.03"
  },
  {
    id: "F4Q064",
    theme: 4,
    question: "Un train à protection arrière effectue un arrêt normal dans un établissement de pleine ligne. Faut-il assurer la protection arrière ?",
    choices: [
      "Oui si l'arrêt dépasse 5 minutes.",
      "Non."
    ],
    correct: 1,
    source: "F 43.04"
  },
  {
    id: "F4Q065",
    theme: 4,
    question: "Un train à protection arrière effectue un arrêt prescrit en pleine voie dont la durée dépasse 5 minutes. Quelle règle s'applique ?",
    choices: [
      "Assurer la protection arrière.",
      "Ne protéger que si le train est en BM."
    ],
    correct: 0,
    source: "F 43.04"
  },
  {
    id: "F4Q066",
    theme: 4,
    question: "Un train à protection arrière est arrêté accidentellement en pleine voie et l'arrêt risque de dépasser 5 minutes. Il circule à contre-voie. Faut-il assurer la protection arrière ?",
    choices: [
      "Oui, car le seuil de 5 minutes prime.",
      "Non, le cas de circulation à contresens ou à contre-voie est excepté."
    ],
    correct: 1,
    source: "F 43.04"
  },
  {
    id: "F4Q067",
    theme: 4,
    question: "Un train à protection arrière est arrêté par les signaux d'un poste et ne repart pas immédiatement. Dans quel cas la protection arrière est-elle notamment assurée ?",
    choices: [
      "Lorsque la reconnaissance est impossible ou lorsque l'aiguilleur en donne l'ordre.",
      "Uniquement lorsque l'arrêt dépasse 5 minutes."
    ],
    correct: 0,
    source: "F 43.04"
  },
  {
    id: "F4Q068",
    theme: 4,
    question: "Le conducteur assure la protection arrière et rencontre avant le point prévu un poste de cantonnement ouvert au service. Quelle conduite s'applique ?",
    choices: [
      "Il poursuit obligatoirement jusqu'au point de protection.",
      "Il avise le garde de l'arrêt du train en pleine voie puis revient au train."
    ],
    correct: 1,
    source: "F 43.04"
  },
  {
    id: "F4Q069",
    theme: 4,
    question: "Lors de la protection arrière, le conducteur rencontre un autre agent muni des agrès nécessaires. Que peut-il faire ?",
    choices: [
      "Le charger d'assurer la protection en lui précisant la distance restant à parcourir, puis revenir au train.",
      "Lui demander seulement de surveiller l'arrière du train pendant qu'il poursuit lui-même."
    ],
    correct: 0,
    source: "F 43.04"
  },
  {
    id: "F4Q070",
    theme: 4,
    question: "L'arrière d'un train à protéger est arrêté sous un tunnel ou à moins de 100 m en aval de sa sortie. Quelle mesure complémentaire est prévue ?",
    choices: [
      "Placer un signal d'arrêt à main à la sortie du tunnel.",
      "Poser en plus un pétard à 200 m de l'arrière du train."
    ],
    correct: 1,
    source: "F 43.04"
  },

  // ============================================================
  // F43.05 / F43.06 — CONDITIONS DANGEREUSES ET DÉRIVE
  // ============================================================

  {
    id: "F4Q071",
    theme: 4,
    question: "Un train circule dans des conditions dangereuses, mais son arrêt immédiat dans la zone où il se trouve risquerait d'aggraver le danger. Le référentiel permet-il de différer l'arrêt ?",
    choices: [
      "Oui.",
      "Non, l'arrêt doit toujours être immédiat."
    ],
    correct: 0,
    source: "F 43.05"
  },
  {
    id: "F4Q072",
    theme: 4,
    question: "Lorsque la situation permet de choisir le lieu d'arrêt d'un train circulant dans des conditions dangereuses, quelle priorité vient avant la limitation des dégâts matériels ?",
    choices: [
      "Maintenir le train à proximité d'un poste de cantonnement.",
      "Favoriser notamment l'évacuation des voyageurs dans un lieu protégé et l'intervention des secours."
    ],
    correct: 1,
    source: "F 43.05"
  },
  {
    id: "F4Q073",
    theme: 4,
    question: "L'anomalie affectant un train risque également de compromettre la sécurité des circulations sur une voie voisine. Quelle mesure s'ajoute à l'arrêt du train concerné ?",
    choices: [
      "Arrêter ou faire arrêter les circulations susceptibles d'être concernées.",
      "Attendre l'avis du régulateur avant toute action envers les autres circulations."
    ],
    correct: 0,
    source: "F 43.05"
  },
  {
    id: "F4Q074",
    theme: 4,
    question: "Le conducteur constate que son propre train part en dérive. La radio sol-trains fonctionne. Doit-il émettre le signal d'alerte radio ?",
    choices: [
      "Oui, systématiquement en cas de dérive.",
      "Non ; il avise en phonie les agents sédentaires dotés de la radio."
    ],
    correct: 1,
    source: "F 43.06"
  },
  {
    id: "F4Q075",
    theme: 4,
    question: "Lors d'une dérive de son train, l'engin moteur dispose d'un frein électrique en état de fonctionnement. Quelle utilisation en est prévue ?",
    choices: [
      "Commander l'effort de retenue maximum.",
      "Ne pas l'utiliser afin de réserver exclusivement le freinage pneumatique."
    ],
    correct: 0,
    source: "F 43.06"
  },
  {
    id: "F4Q076",
    theme: 4,
    question: "Après arrêt d'une dérive résultant d'une absence ou d'une insuffisance de freinage, quelle anomalie doit ensuite être considérée ?",
    choices: [
      "Une rupture d'attelage.",
      "Une anomalie dans le fonctionnement du frein."
    ],
    correct: 1,
    source: "F 43.06"
  },
  {
    id: "F4Q077",
    theme: 4,
    question: "Après l'arrêt d'une dérive, le conducteur n'a pas l'assurance que le train est protégé. Quelle mesure prend-il ?",
    choices: [
      "Le couvrir comme un obstacle.",
      "Assurer uniquement une protection arrière."
    ],
    correct: 0,
    source: "F 43.06"
  },
  {
    id: "F4Q078",
    theme: 4,
    question: "Le conducteur est avisé d'une dérive et reçoit l'ordre de circuler en avance sur une ligne où cette possibilité n'est normalement pas admise. Doit-il appliquer cet ordre ?",
    choices: [
      "Non, la circulation en avance reste interdite.",
      "Oui, en faisant notamment usage longuement de l'avertisseur sonore sur le parcours effectué dans ces conditions."
    ],
    correct: 1,
    source: "F 43.06"
  },

  // ============================================================
  // F43.07 / F43.08 — RUPTURE D'ATTELAGE / DÉRAILLEMENT
  // ============================================================

  {
    id: "F4Q079",
    theme: 4,
    question: "Après une rupture d'attelage présumée, le conducteur ne peut obtenir rapidement l'assurance que la seconde partie n'engage pas une voie voisine. Quelle mesure prend-il ?",
    choices: [
      "Protéger le train comme un obstacle.",
      "Commencer par rechercher la seconde partie avant toute protection."
    ],
    correct: 0,
    source: "F 43.07"
  },
  {
    id: "F4Q080",
    theme: 4,
    question: "Lors de la visite consécutive à une rupture d'attelage, le conducteur doit-il emporter la barre de court-circuit lorsqu'il existe une voie contiguë ?",
    choices: [
      "Oui.",
      "Non ; il se munit en revanche des agrès de couverture."
    ],
    correct: 1,
    source: "F 43.07"
  },
  {
    id: "F4Q081",
    theme: 4,
    question: "Une rupture d'attelage peut être reconstituée. À quelle vitesse le conducteur recule-t-il vers la seconde partie ?",
    choices: [
      "Avec prudence, sans dépasser la vitesse d'un homme au pas.",
      "En marche à vue sans autre restriction."
    ],
    correct: 0,
    source: "F 43.07"
  },
  {
    id: "F4Q082",
    theme: 4,
    question: "Après reconstitution de l'attelage, la conduite principale ne peut pas être raccordée mais la conduite générale l'est. Quelle analyse doit être effectuée ?",
    choices: [
      "La circulation est automatiquement interdite.",
      "Examiner les conséquences de l'absence d'alimentation de la conduite principale sur la circulation du train."
    ],
    correct: 1,
    source: "F 43.07"
  },
  {
    id: "F4Q083",
    theme: 4,
    question: "Après reconstitution de l'attelage, la conduite générale ne peut pas être raccordée. Faut-il procéder à la vérification du fonctionnement du frein normalement prévue après l'opération ?",
    choices: [
      "Non ; les mesures correspondant à une fuite CG avant le robinet d'isolement sont appliquées.",
      "Oui, dans tous les cas."
    ],
    correct: 0,
    source: "F 43.07"
  },
  {
    id: "F4Q084",
    theme: 4,
    question: "Une rupture d'attelage ne peut pas être reconstituée. Pour quelle partie le secours est-il demandé ?",
    choices: [
      "Pour la première partie du train.",
      "Pour la deuxième partie du train."
    ],
    correct: 1,
    source: "F 43.07"
  },
  {
    id: "F4Q085",
    theme: 4,
    question: "Une dépression CG non provoquée survient alors que le train franchit ou vient de franchir une zone signalée par TIV à 50 km/h ou moins. Quelle situation le conducteur doit-il présumer ?",
    choices: [
      "Un déraillement.",
      "Une simple rupture d'attelage."
    ],
    correct: 0,
    source: "F 43.08"
  },
  {
    id: "F4Q086",
    theme: 4,
    question: "En traction électrique, une dépression CG non provoquée se produit simultanément à une mise hors tension de la caténaire. Quelle présomption particulière s'applique ?",
    choices: [
      "Une avarie de pantographe uniquement.",
      "Un déraillement du train."
    ],
    correct: 1,
    source: "F 43.08"
  },
  {
    id: "F4Q087",
    theme: 4,
    question: "Après déraillement en BA ou BMCV, il reste au moins un véhicule sur les rails dans le canton. Quelle mesure est prévue à l'arrière du train ?",
    choices: [
      "Repérer dès que possible la queue par un pétard placé à 200 m en arrière du dernier véhicule.",
      "Assurer systématiquement la couverture complète de l'arrière à la DCO."
    ],
    correct: 0,
    source: "F 43.08"
  },
  {
    id: "F4Q088",
    theme: 4,
    question: "En BA ou BMCV, après déraillement, aucun véhicule ne reste sur les rails dans le canton. Quelle conduite s'applique ?",
    choices: [
      "Le repérage de la queue par un pétard à 200 m suffit.",
      "Protéger le train comme un obstacle et demander le secours en précisant « wagon de secours nécessaire »."
    ],
    correct: 1,
    source: "F 43.08"
  },
  {
    id: "F4Q089",
    theme: 4,
    question: "En BM hors BMCV, un train déraillé n'est pas un train à protection arrière. Quelle mesure est prévue à l'arrière ?",
    choices: [
      "Repérer dès que possible la queue par un pétard à 200 m derrière le dernier véhicule.",
      "Assurer systématiquement la protection arrière à 1000 m."
    ],
    correct: 0,
    source: "F 43.08"
  },

  // ============================================================
  // F43.09 à F43.13
  // ============================================================

  {
    id: "F4Q090",
    theme: 4,
    question: "Après un tamponnement, aucun indice anormal n'est constaté sur l'engin moteur. Une visite reste-t-elle nécessaire ?",
    choices: [
      "Non, si les essais de frein sont satisfaisants.",
      "Oui, le ou les engins moteurs et le train doivent être visités."
    ],
    correct: 1,
    source: "F 43.09"
  },
  {
    id: "F4Q091",
    theme: 4,
    question: "Après tamponnement, aucune anomalie importante n'est constatée sur l'engin moteur. Quelle disposition est néanmoins prévue ?",
    choices: [
      "Demander son remplacement au premier endroit favorable afin qu'une visite approfondie soit effectuée.",
      "Maintenir normalement l'engin jusqu'à son prochain entretien programmé."
    ],
    correct: 0,
    source: "F 43.09"
  },
  {
    id: "F4Q092",
    theme: 4,
    question: "Après un tamponnement, aucun agent du matériel qualifié n'est présent. Qui est compétent pour effectuer la visite du train ?",
    choices: [
      "Le conducteur ne peut pas effectuer cette visite seul.",
      "Le conducteur."
    ],
    correct: 1,
    source: "F 43.09"
  },
  {
    id: "F4Q093",
    theme: 4,
    question: "Des bestiaux sont présents aux abords de la voie mais ne constituent pas un obstacle pour les circulations. Quelle conduite s'applique ?",
    choices: [
      "Aviser un agent sédentaire en indiquant notamment le kilomètre.",
      "Les protéger systématiquement comme un obstacle."
    ],
    correct: 0,
    source: "F 43.10"
  },
  {
    id: "F4Q094",
    theme: 4,
    question: "Le conducteur reçoit un ordre de marche prudente motivé par des bestiaux. Quelle obligation accompagne l'observation de cette marche ?",
    choices: [
      "S'arrêter systématiquement au centre de la zone prescrite.",
      "Faire part de ses constatations selon les moyens prévus."
    ],
    correct: 1,
    source: "F 43.10"
  },
  {
    id: "F4Q095",
    theme: 4,
    question: "De jour par bonne visibilité, la signalisation d'avant du train est totalement éteinte. Après impossibilité de rallumer au moins un feu blanc, quelle vitesse maximale s'applique jusqu'au point désigné par le régulateur ?",
    choices: [
      "30 km/h.",
      "La marche à vue sans limitation chiffrée spécifique."
    ],
    correct: 0,
    source: "F 43.11"
  },
  {
    id: "F4Q096",
    theme: 4,
    question: "De nuit, la signalisation d'avant est totalement éteinte et aucun feu blanc ne peut être rallumé. Quelle mesure supplémentaire est prévue avant la reprise ?",
    choices: [
      "Allumer le troisième feu supérieur, même seul.",
      "Placer à l'avant une lanterne de bord présentant un feu blanc."
    ],
    correct: 1,
    source: "F 43.11"
  },
  {
    id: "F4Q097",
    theme: 4,
    question: "La signalisation d'arrière est totalement absente mais le conducteur acquiert malgré tout l'assurance que le train est complet. Comment rétablit-il prioritairement cette signalisation ?",
    choices: [
      "Avec les lanternes de queue de la locomotive, à défaut avec le feu rouge des lanternes de bord.",
      "Uniquement avec une plaque réfléchissante de remplacement."
    ],
    correct: 0,
    source: "F 43.11"
  },
  {
    id: "F4Q098",
    theme: 4,
    question: "La signalisation d'arrière est absente et le conducteur n'a pas l'assurance que son train est complet. Quelle situation doit-il notamment envisager si le ou les véhicules non reliés à la CG sont absents ?",
    choices: [
      "Une simple extinction de signalisation.",
      "Une dérive."
    ],
    correct: 1,
    source: "F 43.11"
  },
  {
    id: "F4Q099",
    theme: 4,
    question: "Un train dont la signalisation d'avant est totalement éteinte est arrêté devant un sémaphore de BAL qui reste fermé. Quelle condition supplémentaire précède son franchissement de lui-même ?",
    choices: [
      "Obtenir par écrit du SGC la confirmation que le canton est effectivement libre.",
      "Attendre uniquement l'écoulement du délai réglementaire applicable au BAL."
    ],
    correct: 0,
    source: "F 43.13"
  },
  {
    id: "F4Q100",
    theme: 4,
    question: "Un train dont la signalisation d'avant est totalement éteinte rencontre un feu rouge clignotant qui reste présenté après l'arrêt. Après confirmation écrite du SGC que le canton est libre, comment peut-il franchir ?",
    choices: [
      "En marche à vue à 30 km/h au maximum jusqu'au signal suivant.",
      "En marche à vue sans dépasser 15 km/h, jusqu'à la fin du canton qui suit ce signal."
    ],
    correct: 1,
    source: "F 43.13"
  }

];
