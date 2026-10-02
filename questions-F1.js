const QUESTIONS_PARTIE_F1 = [
  // ============================================================
  // F10.01 — Résistance à l'avancement avec ou sans fuite CG
  // ============================================================

  {
    id: "F1Q001",
    theme: 1,
    question: "Une résistance anormale à l'avancement est constatée. Quelle action permet de rechercher immédiatement si elle est liée à une fuite de la CG ?",
    choices: [
      "Ramener la traction à zéro, commander NEUTRE et observer le manomètre CG.",
      "Ramener la traction à zéro, commander MARCHE et réalimenter immédiatement la CG."
    ],
    correct: 0,
    source: "F 10.01"
  },
  {
    id: "F1Q002",
    theme: 1,
    question: "Lors du sondage effectué à la suite d'une résistance anormale à l'avancement, une fuite CG est constatée. Quelle procédure devient applicable ?",
    choices: [
      "La procédure de visite complète prévue en F10.01 est poursuivie avant toute autre action.",
      "Les mesures immédiates prévues en F21.02 pour une chute de pression dans la CG sont appliquées."
    ],
    correct: 1,
    source: "F 10.01"
  },
  {
    id: "F1Q003",
    theme: 1,
    question: "Après constatation d'une résistance anormale à l'avancement, aucune fuite CG n'est détectée. Quelle est l'étape suivante ?",
    choices: [
      "Commander MARCHE et observer le train.",
      "Maintenir NEUTRE et effectuer immédiatement la visite complète du train."
    ],
    correct: 0,
    source: "F 10.01"
  },
  {
    id: "F1Q004",
    theme: 1,
    question: "Après une résistance anormale à l'avancement sans fuite CG, l'observation du train fait apparaître une présomption de déraillement. Quelle différence essentielle cela entraîne-t-il par rapport au cas où aucun déraillement n'est présumé ?",
    choices: [
      "Le conducteur s'arrête normalement puis effectue la visite jusqu'à la signalisation d'arrière.",
      "Le conducteur s'arrête d'urgence et applique les dispositions relatives au train déraillé en pleine voie."
    ],
    correct: 1,
    source: "F 10.01"
  },
  {
    id: "F1Q005",
    theme: 1,
    question: "Une résistance anormale a été constatée, sans fuite CG ni présomption de déraillement. Avant la visite complète du train, comment la CG doit-elle être réalimentée ?",
    choices: [
      "Sans utiliser la fonction SURCHARGE.",
      "En utilisant la fonction SURCHARGE afin de faciliter la recherche d'un frein restant serré."
    ],
    correct: 0,
    source: "F 10.01"
  },
  {
    id: "F1Q006",
    theme: 1,
    question: "À la suite d'une résistance anormale sans fuite CG ni présomption de déraillement, jusqu'où doit porter la visite du conducteur ?",
    choices: [
      "Jusqu'au premier véhicule sur lequel aucune anomalie n'est constatée.",
      "Jusqu'au véhicule porteur de la signalisation d'arrière."
    ],
    correct: 1,
    source: "F 10.01"
  },
  {
    id: "F1Q007",
    theme: 1,
    question: "Pour la visite faisant suite à une résistance anormale sans fuite CG, plusieurs voies contiguës existent. Quel équipement supplémentaire le conducteur doit-il emporter ?",
    choices: [
      "Les agrès de couverture ; il n'est en revanche pas tenu d'emporter la barre de court-circuit.",
      "La barre de court-circuit obligatoirement, les agrès de couverture n'étant nécessaires qu'en cas de déraillement confirmé."
    ],
    correct: 0,
    source: "F 10.01"
  },
  {
    id: "F1Q008",
    theme: 1,
    question: "La visite complète consécutive à une résistance anormale ne révèle aucune anomalie. Quelle conduite prévoit F10.01 ?",
    choices: [
      "Demander systématiquement l'autorisation du SGC avant toute remise en mouvement.",
      "Reprendre la marche en surveillant le train."
    ],
    correct: 1,
    source: "F 10.01"
  },

  // ============================================================
  // F10.02 — Choc, mouvement anormal, présomption de danger
  // ============================================================

  {
    id: "F1Q009",
    theme: 1,
    question: "Sur ligne conventionnelle, un choc ou mouvement anormal paraît provenir de la caténaire. F10.02 constitue-t-il à lui seul la procédure à appliquer ?",
    choices: [
      "Non. Les dispositions relatives à l'avarie à la caténaire ou au choc à la toiture doivent être appliquées.",
      "Oui. L'origine caténaire ne modifie pas la procédure tant qu'aucun dommage n'est visible."
    ],
    correct: 0,
    source: "F 10.02"
  },
  {
    id: "F1Q010",
    theme: 1,
    question: "Le conducteur ressent un choc résultant apparemment d'un engagement de gabarit lors du croisement d'un autre train. Quelle particularité s'applique ?",
    choices: [
      "Seules les mesures de F10.02 sont applicables jusqu'à identification certaine de l'origine.",
      "Outre les mesures de F10.02, les dispositions relatives au train circulant dans des conditions dangereuses doivent également être appliquées."
    ],
    correct: 1,
    source: "F 10.02"
  },
  {
    id: "F1Q011",
    theme: 1,
    question: "À la suite d'un choc ou mouvement anormal, dans quel cas le point dangereux doit-il notamment être protégé comme un obstacle ?",
    choices: [
      "Lorsque le train engage le gabarit d'une voie principale voisine.",
      "Dès qu'une anomalie quelconque est présumée sur la seule voie parcourue."
    ],
    correct: 0,
    source: "F 10.02"
  },
  {
    id: "F1Q012",
    theme: 1,
    question: "Une voie principale voisine présente un danger provenant d'un heurt. Quelle mesure prévoit F10.02 ?",
    choices: [
      "Attendre l'assurance du SGC avant de prendre toute mesure de protection.",
      "Protéger le point dangereux comme un obstacle."
    ],
    correct: 1,
    source: "F 10.02"
  },
  {
    id: "F1Q013",
    theme: 1,
    question: "Après un choc ou mouvement anormal, la préparation de la visite impose-t-elle systématiquement une demande PERS ?",
    choices: [
      "Non. La demande de protection du personnel PERS est réalisée si nécessaire en fonction de la situation rencontrée.",
      "Oui, dès lors que le conducteur doit descendre de son engin moteur en pleine voie."
    ],
    correct: 0,
    source: "F 10.02"
  },
  {
    id: "F1Q014",
    theme: 1,
    question: "À la suite d'un choc ou mouvement anormal, le conducteur prépare une visite alors que plusieurs voies contiguës existent. Quelle disposition est prévue concernant la barre de court-circuit ?",
    choices: [
      "Elle doit obligatoirement être emportée avec les agrès de couverture.",
      "Il doit se munir des agrès de couverture mais n'est pas tenu d'emporter la barre de court-circuit."
    ],
    correct: 1,
    source: "F 10.02"
  },
  {
    id: "F1Q015",
    theme: 1,
    question: "L'anomalie constatée après un choc paraît provenir de la voie et a également affecté le matériel roulant. Quelle logique doit être appliquée ?",
    choices: [
      "Appliquer le cas correspondant au mode de cantonnement pour la voie et également les dispositions prévues lorsque le matériel est affecté.",
      "Traiter uniquement l'anomalie du matériel, celle-ci devenant prioritaire sur l'anomalie de voie."
    ],
    correct: 0,
    source: "F 10.02"
  },
  {
    id: "F1Q016",
    theme: 1,
    question: "Une anomalie de voie est décelée en BA avec compteurs d'essieux. Quelle particularité distingue ce cas d'un BA sans compteur d'essieux où la barre de court-circuit est opérante ?",
    choices: [
      "Une barre de court-circuit doit être placée en complément de la protection comme obstacle.",
      "La barre de court-circuit n'est pas utilisée ; le point dangereux est protégé comme un obstacle si le SGC n'assure pas déjà sa protection."
    ],
    correct: 1,
    source: "F 10.02"
  },
  {
    id: "F1Q017",
    theme: 1,
    question: "En BA sans compteur d'essieux, sur une section où la barre de court-circuit est opérante, une anomalie provenant de la voie est décelée. Quelle mesure spécifique est prévue ?",
    choices: [
      "Placer une barre de court-circuit sur la voie parcourue dans le canton où la défectuosité a été décelée.",
      "Protéger systématiquement le point comme un obstacle sans utiliser de barre de court-circuit."
    ],
    correct: 0,
    source: "F 10.02"
  },
  {
    id: "F1Q018",
    theme: 1,
    question: "En BA sans compteur d'essieux, la barre de court-circuit est déclarée inopérante sur la section concernée. Quel traitement faut-il retenir pour une anomalie de voie ?",
    choices: [
      "Celui du BA sans compteur d'essieux ordinaire, la barre restant réglementairement obligatoire.",
      "Celui prévu pour le BA avec compteurs d'essieux, notamment pour la protection du point dangereux."
    ],
    correct: 1,
    source: "F 10.02"
  },
  {
    id: "F1Q019",
    theme: 1,
    question: "En BA sans compteur d'essieux avec barre de court-circuit opérante, la défectuosité de voie n'est pas visible mais présente un risque de déraillement. Quelle mesure complémentaire est prévue ?",
    choices: [
      "Repérer le point dangereux avec un signal d'arrêt à main.",
      "Maintenir obligatoirement le train à l'arrêt jusqu'à l'arrivée d'un agent de maintenance."
    ],
    correct: 0,
    source: "F 10.02"
  },
  {
    id: "F1Q020",
    theme: 1,
    question: "En BA avec compteurs d'essieux, une défectuosité de voie n'est pas visible et présente un risque de déraillement. La protection comme obstacle dispense-t-elle de repérer le point dangereux ?",
    choices: [
      "Oui, les deux mesures sont exclusives.",
      "Non. Le point dangereux doit également être repéré avec un signal d'arrêt à main."
    ],
    correct: 1,
    source: "F 10.02"
  },
  {
    id: "F1Q021",
    theme: 1,
    question: "En BA avec compteurs d'essieux, le SGC donne l'assurance que la protection du point dangereux est déjà assurée. Le conducteur doit-il néanmoins réaliser lui-même la protection comme un obstacle ?",
    choices: [
      "Non. Cette protection par le conducteur est requise en l'absence d'assurance du SGC qu'elle est déjà assurée.",
      "Oui. L'assurance du SGC ne dispense jamais le conducteur de protéger lui-même le point."
    ],
    correct: 0,
    source: "F 10.02"
  },
  {
    id: "F1Q022",
    theme: 1,
    question: "Après une anomalie de voie en BA, le conducteur doit aviser à la première gare ou au premier poste rencontré et un signal d'entrée existe. Où doit-il s'arrêter ?",
    choices: [
      "Après le signal d'entrée s'il est ouvert, afin de dégager les installations.",
      "Au signal d'entrée, même s'il est ouvert."
    ],
    correct: 1,
    source: "F 10.02"
  },
  {
    id: "F1Q023",
    theme: 1,
    question: "Sur une ligne à voie banalisée en BA avec compteurs d'essieux, aucun signal d'entrée n'existe à l'endroit où le conducteur doit aviser. Quel point d'arrêt est explicitement prévu ?",
    choices: [
      "L'aiguille d'entrée.",
      "Le premier signal de sortie."
    ],
    correct: 0,
    source: "F 10.02"
  },
  {
    id: "F1Q024",
    theme: 1,
    question: "À la suite d'une anomalie de voie en BA, le train circule en ICS. Quel impératif particulier concerne l'avis à l'agent sédentaire ?",
    choices: [
      "L'avis peut être différé jusqu'au retour effectif sur la voie normale.",
      "L'avis doit être donné avant de franchir la première sortie possible à contresens."
    ],
    correct: 1,
    source: "F 10.02"
  },
  {
    id: "F1Q025",
    theme: 1,
    question: "Une anomalie provenant de la voie est constatée en BM, hors circulation à contresens sur VUT ou à contre-voie. Après reprise de marche, qui doit être avisé ?",
    choices: [
      "Le garde du premier poste de cantonnement ouvert au service.",
      "Exclusivement le régulateur, sans arrêt intermédiaire."
    ],
    correct: 0,
    source: "F 10.02"
  },
  {
    id: "F1Q026",
    theme: 1,
    question: "En BM, hors contresens sur VUT ou contre-voie, aucun signal d'entrée n'existe au premier poste de cantonnement rencontré sur voie unique. Où le conducteur s'arrête-t-il pour aviser le garde ?",
    choices: [
      "Au droit du poste de cantonnement.",
      "À l'aiguille d'entrée."
    ],
    correct: 1,
    source: "F 10.02"
  },
  {
    id: "F1Q027",
    theme: 1,
    question: "L'anomalie de voie est constatée alors que le train circule à contresens sur VUT ou à contre-voie en BM. Quand le conducteur doit-il s'arrêter pour aviser le garde du premier poste de cantonnement ?",
    choices: [
      "Avant de regagner la voie normale.",
      "Immédiatement au point où l'anomalie a été constatée, dans tous les cas."
    ],
    correct: 0,
    source: "F 10.02"
  },
  {
    id: "F1Q028",
    theme: 1,
    question: "Après un choc, l'anomalie provient du matériel ou l'a affecté. En l'absence d'un agent du matériel qualifié, à qui revient la détermination des conditions ultérieures de circulation du matériel après visite ?",
    choices: [
      "Exclusivement au SGC.",
      "Au conducteur."
    ],
    correct: 1,
    source: "F 10.02"
  },
  {
    id: "F1Q029",
    theme: 1,
    question: "Une anomalie ayant affecté le matériel doit être signalée. Quel support F10.02 prévoit-il selon la nature du matériel concerné ?",
    choices: [
      "Le carnet d'étiquettes IN, ou le carnet de bord lorsqu'il s'agit d'un engin moteur.",
      "Uniquement le bulletin de service, quelle que soit la nature du matériel."
    ],
    correct: 0,
    source: "F 10.02"
  },
  {
    id: "F1Q030",
    theme: 1,
    question: "Après un incident ayant affecté le matériel, la radio sol-trains ne fonctionne pas. À quel moment l'anomalie doit-elle être signalée ?",
    choices: [
      "Le train doit obligatoirement être arrêté immédiatement jusqu'à établissement d'une communication.",
      "À la première gare d'arrêt ou lors d'un arrêt par les signaux d'un poste."
    ],
    correct: 1,
    source: "F 10.02"
  },

  // ============================================================
  // F10.03 — Immobilisation en pleine voie
  // ============================================================

  {
    id: "F1Q031",
    theme: 1,
    question: "Pour un arrêt de courte durée, le conducteur reste en cabine ou ne s'éloigne pas. Quelle immobilisation est prévue ?",
    choices: [
      "Traction coupée, inverseur à zéro et dépression de 1,5 bar à la CG ; NEUTRE en cas d'abandon momentané du poste.",
      "Vidange complète de la CG et mise en place systématique des cales antidérive."
    ],
    correct: 0,
    source: "F 10.03"
  },
  {
    id: "F1Q032",
    theme: 1,
    question: "Lors d'un arrêt de courte durée, le conducteur s'éloigne à moins de 100 mètres pour une opération sur le terrain. Quelle mesure distingue notamment cette situation du cas où il ne s'éloigne pas ?",
    choices: [
      "La CG reste uniquement en dépression de 1,5 bar afin de pouvoir repartir rapidement.",
      "Après la dépression de 1,5 bar et la commande NEUTRE, il enfonce le bouton-poussoir d'urgence ou vidange complètement la CG."
    ],
    correct: 1,
    source: "F 10.03"
  },
  {
    id: "F1Q033",
    theme: 1,
    question: "Le conducteur reste sur le train et peut alimenter la CG, hors cas d'insuffisance de freinage. Quelle mesure d'immobilisation est prévue ?",
    choices: [
      "Effectuer une dépression de 1,5 bar à la CG et surveiller le maintien du serrage.",
      "Vidanger complètement la CG et serrer obligatoirement les freins d'immobilisation des véhicules."
    ],
    correct: 0,
    source: "F 10.03"
  },
  {
    id: "F1Q034",
    theme: 1,
    question: "Le conducteur doit abandonner son train pour un stationnement important. Peut-il se limiter au frein automatique avec une dépression de 1,5 bar ?",
    choices: [
      "Oui, à condition de vérifier périodiquement le maintien du serrage.",
      "Non. Des mesures supplémentaires d'immobilisation sont prévues, notamment vidange complète de la CG, frein direct, freins d'immobilisation et cales antidérive."
    ],
    correct: 1,
    source: "F 10.03"
  },
  {
    id: "F1Q035",
    theme: 1,
    question: "En cas d'impossibilité d'alimenter le frein automatique ou d'insuffisance de freinage, quelle logique d'immobilisation s'applique ?",
    choices: [
      "La situation est traitée comme un abandon pour stationnement important avec recours aux moyens complémentaires d'immobilisation.",
      "Une dépression de 1,5 bar à la CG reste suffisante dès lors que le conducteur reste à proximité."
    ],
    correct: 0,
    source: "F 10.03"
  },
  {
    id: "F1Q036",
    theme: 1,
    question: "Plusieurs cales antidérive sont utilisées pour immobiliser un train. Comment doivent-elles être disposées ?",
    choices: [
      "De part et d'autre du véhicule afin de neutraliser les deux sens possibles de déplacement.",
      "Du même côté, afin que leur enlèvement avant la remise en mouvement puisse être aisément vérifié."
    ],
    correct: 1,
    source: "F 10.03"
  },
  {
    id: "F1Q037",
    theme: 1,
    question: "Sur une voie en déclivité, comment les cales antidérive doivent-elles être orientées ?",
    choices: [
      "De façon à s'opposer à la mise en mouvement dans le sens de la déclivité.",
      "Toujours vers l'engin moteur, indépendamment du sens de la déclivité."
    ],
    correct: 0,
    source: "F 10.03"
  },
  {
    id: "F1Q038",
    theme: 1,
    question: "Lorsqu'un train doit être abandonné en pleine voie sans engin moteur de remorque, dans quel cas F10.03 interdit-il d'abandonner une partie du train ?",
    choices: [
      "Lorsque le train comporte des véhicules freinés au régime marchandises.",
      "Lorsque le secours a été demandé pour insuffisance de freinage."
    ],
    correct: 1,
    source: "F 10.03"
  },
  {
    id: "F1Q039",
    theme: 1,
    question: "Lorsqu'un fractionnement est envisagé avant l'abandon d'une partie du train en pleine voie, quelle condition doit guider ce fractionnement ?",
    choices: [
      "Chaque partie doit pouvoir circuler, du point de vue du freinage, sans l'assistance d'un engin moteur de secours.",
      "La partie abandonnée doit obligatoirement comporter au moins la moitié de la masse freinée initiale."
    ],
    correct: 0,
    source: "F 10.03"
  },
  {
    id: "F1Q040",
    theme: 1,
    question: "Pourquoi la procédure d'immobilisation pour la visite après fuite CG, signalement d'un blocage ou boîte chaude diffère-t-elle de l'immobilisation ordinaire par frein automatique ?",
    choices: [
      "Parce que le frein automatique doit obligatoirement être totalement isolé pendant ces visites.",
      "Parce que, selon le cas, la CG doit pouvoir être maintenue ou réalimentée à la pression requise pour rechercher l'anomalie."
    ],
    correct: 1,
    source: "F 10.03"
  },
  {
    id: "F1Q041",
    theme: 1,
    question: "Pour une visite après fuite CG, blocage ou boîte chaude, la pression CG doit être alimentée. Quelle précaution est explicitement prévue ?",
    choices: [
      "Ne pas utiliser la fonction SURCHARGE.",
      "Utiliser la fonction SURCHARGE uniquement pendant la mise en place des cales."
    ],
    correct: 0,
    source: "F 10.03"
  },
  {
    id: "F1Q042",
    theme: 1,
    question: "Lors d'une visite après fuite CG, blocage ou boîte chaude nécessitant le maintien de la CG alimentée, comment le train est-il notamment immobilisé ?",
    choices: [
      "Uniquement par le frein automatique, la pression CG étant suffisante pour assurer le serrage.",
      "Par le frein direct, complété selon le besoin par frein à main, freins d'immobilisation et cales antidérive."
    ],
    correct: 1,
    source: "F 10.03"
  },
  {
    id: "F1Q043",
    theme: 1,
    question: "Lors d'une visite après fuite CG, la CG n'a pas à être alimentée à la pression de régime et l'engin dispose d'un FIL. Dans quel cadre le FIL peut-il être utilisé selon F10.03 ?",
    choices: [
      "Seulement pour effectuer la visite du train à la suite d'une fuite CG.",
      "Pour toute visite consécutive à une fuite CG, un blocage ou une boîte chaude."
    ],
    correct: 0,
    source: "F 10.03"
  },
  {
    id: "F1Q044",
    theme: 1,
    question: "La CG n'a pas à être alimentée à la pression de régime lors d'une visite et le cas ne relève pas de l'utilisation du FIL. Quelle pression doit être maintenue au réservoir égalisateur ?",
    choices: [
      "1,5 bar.",
      "3 bars."
    ],
    correct: 1,
    source: "F 10.03"
  },
  {
    id: "F1Q045",
    theme: 1,
    question: "Des dispositions particulières d'immobilisation peuvent-elles compléter celles de F10.03 sur certaines lignes ?",
    choices: [
      "Oui. Des mesures particulières peuvent être prévues au paragraphe 5 des livrets de lignes.",
      "Non. Les règles de F10.03 sont exhaustives et ne peuvent être complétées localement."
    ],
    correct: 0,
    source: "F 10.03"
  }
];
