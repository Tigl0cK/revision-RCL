const QUESTIONS_PARTIE_F6 = [

  // ============================================================
  // F60.01 — DÉTECTION D'UNE BOÎTE CHAUDE
  // ============================================================

  {
    id: "F6Q001",
    theme: 6,
    question: "Une alarme simple DBC est déclenchée sur un train de marchandises. Quelle conduite s'applique jusqu'au point de garage désigné ?",
    choices: [
      "Rejoindre le point désigné sans dépasser 40 km/h.",
      "Provoquer immédiatement l'arrêt du train, sans utiliser le freinage d'urgence."
    ],
    correct: 0,
    source: "F 60.01"
  },
  {
    id: "F6Q002",
    theme: 6,
    question: "Une alarme danger DBC est signalée. Quelle particularité s'applique à la manière de provoquer l'arrêt ?",
    choices: [
      "Utiliser le freinage d'urgence afin de réduire au maximum la distance d'arrêt.",
      "Provoquer l'arrêt immédiat sans utiliser la fonction « freinage d'urgence »."
    ],
    correct: 1,
    source: "F 60.01"
  },
  {
    id: "F6Q003",
    theme: 6,
    question: "Pourquoi le freinage d'urgence ne doit-il pas être utilisé à la suite d'une alarme danger DBC ?",
    choices: [
      "Pour limiter les contraintes appliquées au freinage et réduire le risque de déraillement lié à une boîte fragilisée.",
      "Pour éviter une élévation de pression susceptible de masquer la localisation de la boîte."
    ],
    correct: 0,
    source: "F 60.01"
  },
  {
    id: "F6Q004",
    theme: 6,
    question: "Après une alarme danger DBC, il existe une présomption d'engagement d'une voie voisine. Quelle mesure précède la visite ?",
    choices: [
      "Demander systématiquement l'arrêt des circulations voisines par dépêche.",
      "Protéger le train comme un obstacle."
    ],
    correct: 1,
    source: "F 60.01"
  },
  {
    id: "F6Q005",
    theme: 6,
    question: "Lors du traitement d'une alarme DBC, comment la conduite générale doit-elle être alimentée avant la visite ?",
    choices: [
      "Sans utiliser la fonction « SURCHARGE ».",
      "En utilisant la fonction « SURCHARGE » afin d'obtenir le desserrage complet."
    ],
    correct: 0,
    source: "F 60.01"
  },
  {
    id: "F6Q006",
    theme: 6,
    question: "Lors de la visite après une alarme DBC, comment la température de la boîte désignée est-elle appréciée ?",
    choices: [
      "Uniquement par recherche de fumée ou de traces d'écoulement de graisse.",
      "En la comparant à la température d'une autre boîte du véhicule."
    ],
    correct: 1,
    source: "F 60.01"
  },
  {
    id: "F6Q007",
    theme: 6,
    question: "La boîte désignée par le DBC n'est pas anormalement chaude. Quelle vérification doit être effectuée avant de rechercher une anomalie sur les véhicules encadrants ?",
    choices: [
      "Vérifier toutes les boîtes du véhicule incriminé.",
      "Visiter directement les deux véhicules encadrants."
    ],
    correct: 0,
    source: "F 60.01"
  },
  {
    id: "F6Q008",
    theme: 6,
    question: "La boîte désignée n'est pas chaude et toutes les autres boîtes du même véhicule sont normales. Quelle est l'étape suivante ?",
    choices: [
      "Reprendre immédiatement la marche sous surveillance.",
      "Visiter le véhicule incriminé pour rechercher une autre anomalie ayant pu provoquer la détection."
    ],
    correct: 1,
    source: "F 60.01"
  },
  {
    id: "F6Q009",
    theme: 6,
    question: "Après une alarme DBC, aucune boîte du véhicule incriminé n'est chaude et aucune autre anomalie n'y est découverte. Que doit faire le conducteur avant de conclure à l'absence d'anomalie ?",
    choices: [
      "Visiter les deux véhicules encadrants.",
      "Effectuer une seconde comparaison de température après quelques minutes."
    ],
    correct: 0,
    source: "F 60.01"
  },
  {
    id: "F6Q010",
    theme: 6,
    question: "Après visite du véhicule désigné et des deux véhicules encadrants, aucune anomalie n'est découverte. L'un de ces trois véhicules possède au moins un essieu à roues bandagées. Quelle conduite s'applique ?",
    choices: [
      "La marche peut reprendre sous simple surveillance puisque le chauffage n'est pas confirmé.",
      "Appliquer les dispositions correspondant à l'acheminement d'un véhicule comportant une boîte chaude."
    ],
    correct: 1,
    source: "F 60.01"
  },
  {
    id: "F6Q011",
    theme: 6,
    question: "Après une détection DBC, aucune anomalie n'est constatée et aucun des trois véhicules visités ne relève du cas particulier des roues bandagées. Quelle identification doit néanmoins être mise en place ?",
    choices: [
      "Une étiquette IN plastifiée à proximité de la boîte incriminée.",
      "Une étiquette IN uniquement sur le véhicule encadrant côté détection."
    ],
    correct: 0,
    source: "F 60.01"
  },
  {
    id: "F6Q012",
    theme: 6,
    question: "Après une détection DBC sans anomalie constatée, le conducteur ne peut pas surveiller le train en marche. Quelle mesure particulière s'applique ?",
    choices: [
      "La marche est limitée à 40 km/h jusqu'au terminus.",
      "Un point d'arrêt à environ 20 km est déterminé avec le régulateur ou l'agent-circulation afin de revisiter la boîte."
    ],
    correct: 1,
    source: "F 60.01"
  },
  {
    id: "F6Q013",
    theme: 6,
    question: "Aucune anomalie n'a été constatée après une détection DBC et la surveillance du train en marche est possible. Sur quoi porte particulièrement cette surveillance ?",
    choices: [
      "Tout dégagement de fumée, d'étincelles ou indice analogue.",
      "Uniquement sur une éventuelle nouvelle alarme DBC."
    ],
    correct: 0,
    source: "F 60.01"
  },
  {
    id: "F6Q014",
    theme: 6,
    question: "Un chauffage de boîte est confirmé. Quelle vérification conditionne directement la possibilité d'acheminer le véhicule ?",
    choices: [
      "La présence éventuelle de roues bandagées.",
      "L'état de la fusée de l'essieu."
    ],
    correct: 1,
    source: "F 60.01"
  },
  {
    id: "F6Q015",
    theme: 6,
    question: "Un chauffage de boîte est confirmé et un doute subsiste sur l'état de la fusée. Quelle conduite s'impose ?",
    choices: [
      "Demander le secours en précisant « wagon de secours nécessaire ».",
      "Isoler le frein et tenter l'acheminement jusqu'au premier établissement PL."
    ],
    correct: 0,
    source: "F 60.01"
  },
  {
    id: "F6Q016",
    theme: 6,
    question: "La fusée de l'essieu chauffé n'est ni rompue ni sur le point de se rompre. Quelle mesure technique doit précéder l'acheminement du véhicule ?",
    choices: [
      "Maintenir le frein en service pour contrôler l'essieu pendant l'acheminement.",
      "Isoler le frein du véhicule avarié."
    ],
    correct: 1,
    source: "F 60.01"
  },
  {
    id: "F6Q017",
    theme: 6,
    question: "Pourquoi le frein du véhicule comportant une boîte chaude doit-il être isolé lorsque son acheminement est possible ?",
    choices: [
      "Pour éviter que le freinage n'accroisse la température et l'effort de torsion sur la fusée.",
      "Uniquement pour éviter un nouveau déclenchement du DBC."
    ],
    correct: 0,
    source: "F 60.01"
  },
  {
    id: "F6Q018",
    theme: 6,
    question: "Une boîte chaude est confirmée sur un véhicule remorqué et la fusée permet l'acheminement. Jusqu'où le conducteur tente-t-il de remorquer le véhicule ?",
    choices: [
      "Jusqu'au terminus prévu du train.",
      "Jusqu'à la première gare ou au premier établissement PL où son retrait est possible."
    ],
    correct: 1,
    source: "F 60.01"
  },
  {
    id: "F6Q019",
    theme: 6,
    question: "Une boîte a été détectée chaude mais la visite conduit finalement à des constatations rassurantes. Peut-on renoncer à son repérage pour maintenance ?",
    choices: [
      "Non, toute boîte détectée chaude doit être repérée par une étiquette IN plastifiée.",
      "Oui, si aucun échauffement n'est confirmé lors de la seconde visite."
    ],
    correct: 0,
    source: "F 60.01"
  },
  {
    id: "F6Q020",
    theme: 6,
    question: "Pourquoi le repérage précis d'une boîte détectée chaude est-il particulièrement important ?",
    choices: [
      "Parce qu'en son absence le véhicule ne peut plus être déplacé.",
      "Parce qu'un défaut de repérage impose aux agents du matériel le remplacement de tous les essieux du véhicule."
    ],
    correct: 1,
    source: "F 60.01"
  },

  // ============================================================
  // F60.02 — ACHEMINEMENT D'UNE BOÎTE CHAUDE
  // ============================================================

  {
    id: "F6Q021",
    theme: 6,
    question: "Qui définit le lieu où sera retiré un véhicule comportant une boîte chaude ?",
    choices: [
      "Un agent sédentaire d'une gare ou d'un poste, ou le régulateur.",
      "Le conducteur en fonction du premier établissement qu'il estime accessible."
    ],
    correct: 0,
    source: "F 60.02"
  },
  {
    id: "F6Q022",
    theme: 6,
    question: "Un véhicule comportant une boîte chaude doit être acheminé sur une ligne à signalisation au sol comportant une voie contiguë. Quelle condition concerne les circulations susceptibles de le croiser ou de le dépasser ?",
    choices: [
      "Elles peuvent être maintenues à vitesse réduite.",
      "Elles doivent être arrêtées et retenues."
    ],
    correct: 1,
    source: "F 60.02"
  },
  {
    id: "F6Q023",
    theme: 6,
    question: "Le conducteur a pu se mettre en relation avec un agent sédentaire avant l'acheminement d'une boîte chaude. Quelle formalité autorise la remise en marche ?",
    choices: [
      "La réception d'une dépêche.",
      "Un simple accord verbal dès que les voies contiguës sont dégagées."
    ],
    correct: 0,
    source: "F 60.02"
  },
  {
    id: "F6Q024",
    theme: 6,
    question: "Après réception de l'autorisation d'acheminer un véhicule avec boîte chaude, quelle vitesse maximale générale s'applique jusqu'au point désigné, hors mesure spécifique du guide ?",
    choices: [
      "30 km/h.",
      "20 km/h."
    ],
    correct: 1,
    source: "F 60.02"
  },
  {
    id: "F6Q025",
    theme: 6,
    question: "Pendant l'acheminement autorisé d'un véhicule comportant une boîte chaude, quelle surveillance complète la limitation de vitesse ?",
    choices: [
      "Surveiller ou faire surveiller la tenue du véhicule.",
      "Contrôler uniquement l'absence d'une nouvelle alarme DBC."
    ],
    correct: 0,
    source: "F 60.02"
  },
  {
    id: "F6Q026",
    theme: 6,
    question: "L'incident concerne une boîte chaude sur un engin moteur ou un élément automoteur. Qu'est-ce qui peut modifier les conditions générales d'acheminement ?",
    choices: [
      "Uniquement une décision de l'agent-circulation.",
      "Les prescriptions de l'annexe 4 ou du chapitre correspondant du guide de dépannage."
    ],
    correct: 1,
    source: "F 60.02"
  },
  {
    id: "F6Q027",
    theme: 6,
    question: "Le conducteur ne peut joindre aucun agent sédentaire. Le véhicule à acheminer ne possède pas de boîte à une seule joue de guidage et ne transporte pas de marchandises dangereuses. Que peut-il faire ?",
    choices: [
      "Reprendre à la vitesse d'un homme au pas jusqu'au premier téléphone ou à un point permettant d'utiliser la téléphonie de pleine voie dématérialisée.",
      "Rester obligatoirement sur place jusqu'à établissement d'une communication."
    ],
    correct: 0,
    source: "F 60.02"
  },
  {
    id: "F6Q028",
    theme: 6,
    question: "Le conducteur ne peut joindre un agent sédentaire et le véhicule avec boîte chaude transporte des marchandises dangereuses. Dans quel cas peut-il néanmoins déplacer le train jusqu'à un moyen de communication ?",
    choices: [
      "Dès lors qu'il ne dépasse pas 20 km/h.",
      "Si l'acheminement sans croisement ni dépassement par un autre train est assuré."
    ],
    correct: 1,
    source: "F 60.02"
  },
  {
    id: "F6Q029",
    theme: 6,
    question: "Dans le cas précédent, à quelle allure s'effectue ce déplacement jusqu'au moyen de communication ?",
    choices: [
      "Sans dépasser la vitesse d'un homme au pas, compte tenu de l'état de la boîte chauffée.",
      "À 20 km/h maximum, comme après réception de la dépêche."
    ],
    correct: 0,
    source: "F 60.02"
  },
  {
    id: "F6Q030",
    theme: 6,
    question: "Le véhicule avec boîte chaude comporte des boîtes à une seule joue de guidage et le conducteur ne peut joindre un agent sédentaire. Un croisement ou dépassement par un autre train ne peut être exclu. Quelle conduite s'applique ?",
    choices: [
      "Acheminer le train à la vitesse d'un homme au pas jusqu'au téléphone.",
      "Laisser le train sur place et se rendre à pied jusqu'à un moyen permettant de joindre un agent sédentaire."
    ],
    correct: 1,
    source: "F 60.02"
  },
  {
    id: "F6Q031",
    theme: 6,
    question: "Quelle particularité commune justifie des précautions supplémentaires pour un véhicule comportant des boîtes à une seule joue de guidage ou transportant des marchandises dangereuses ?",
    choices: [
      "Dans le premier cas le risque de déraillement est accru ; dans le second, les conséquences d'un déraillement sont plus importantes.",
      "Dans les deux cas, le risque de rupture de fusée est nécessairement plus élevé."
    ],
    correct: 0,
    source: "F 60.02"
  },
  {
    id: "F6Q032",
    theme: 6,
    question: "Un véhicule avec boîte chaude comporte des boîtes à une seule joue de guidage. Aucun croisement ni dépassement n'est possible jusqu'au premier téléphone. Le conducteur est sans communication. Doit-il laisser le train sur place ?",
    choices: [
      "Oui, la présence d'une boîte à une seule joue interdit tout déplacement sans dépêche.",
      "Non, il peut rejoindre le moyen de communication à la vitesse d'un homme au pas."
    ],
    correct: 1,
    source: "F 60.02"
  },

  // ============================================================
  // F60.03 — AUTRES INCIDENTS AU VÉHICULE / CHARGEMENT
  // ============================================================

  {
    id: "F6Q033",
    theme: 6,
    question: "Un incident autre qu'un blocage ou une boîte chaude est signalé sur un véhicule. Avant la visite, une voie voisine paraît susceptible d'être engagée. Quelle mesure s'applique ?",
    choices: [
      "Protéger le train comme un obstacle.",
      "Effectuer d'abord la visite pour confirmer l'engagement."
    ],
    correct: 0,
    source: "F 60.03"
  },
  {
    id: "F6Q034",
    theme: 6,
    question: "Un véhicule est signalé instable. Parmi les contrôles prescrits, quelle association est correcte ?",
    choices: [
      "Uniquement l'état des ressorts et des boîtes d'essieu.",
      "Lames maîtresses et supports de suspension, robinets d'isolement de suspension pneumatique, plats importants et chargement déplacé."
    ],
    correct: 1,
    source: "F 60.03"
  },
  {
    id: "F6Q035",
    theme: 6,
    question: "Des bruits anormaux sont signalés sur un véhicule. Un crissement aigu est entendu. Vers quelle anomalie cet indice oriente-t-il particulièrement ?",
    choices: [
      "Une boîte chaude.",
      "Une tringlerie pendante."
    ],
    correct: 0,
    source: "F 60.03"
  },
  {
    id: "F6Q036",
    theme: 6,
    question: "La visite nécessite une intervention sur une partie du véhicule située à une hauteur supérieure ou égale à 3 mètres. Quelle conduite est prévue ?",
    choices: [
      "Intervenir après immobilisation réglementaire du train.",
      "Solliciter des instructions."
    ],
    correct: 1,
    source: "F 60.03"
  },
  {
    id: "F6Q037",
    theme: 6,
    question: "Une anomalie est constatée sur le véhicule et le conducteur parvient à y remédier. Quelle suite est prévue ?",
    choices: [
      "Aviser le régulateur ou, à défaut, une gare puis reprendre la marche.",
      "Acheminer obligatoirement le véhicule jusqu'au premier établissement où il pourra être différé."
    ],
    correct: 0,
    source: "F 60.03"
  },
  {
    id: "F6Q038",
    theme: 6,
    question: "Une anomalie constatée sur un véhicule persiste après tentative d'y remédier. Quelle question doit alors être tranchée avant la reprise éventuelle ?",
    choices: [
      "Si le train peut conserver son horaire.",
      "Si le véhicule peut continuer à circuler."
    ],
    correct: 1,
    source: "F 60.03"
  },
  {
    id: "F6Q039",
    theme: 6,
    question: "Le véhicule désigné après signalement d'un incident ne présente finalement aucune anomalie. Quelle vérification supplémentaire est requise ?",
    choices: [
      "Visiter les deux véhicules qui l'encadrent.",
      "Visiter uniquement le véhicule qui le précède dans le sens de marche."
    ],
    correct: 0,
    source: "F 60.03"
  },
  {
    id: "F6Q040",
    theme: 6,
    question: "Ni le véhicule désigné ni les deux véhicules encadrants ne présentent d'anomalie. L'incident peut-il simplement être considéré comme sans suite ?",
    choices: [
      "Oui, si aucun bruit anormal n'est plus perceptible.",
      "Non, l'incident est signalé sur le véhicule désigné au moyen du carnet d'étiquettes IN avant application des dispositions de reprise."
    ],
    correct: 1,
    source: "F 60.03"
  },
  {
    id: "F6Q041",
    theme: 6,
    question: "Une anomalie du véhicule s'oppose à tout acheminement. Quelle précision accompagne la demande de secours ?",
    choices: [
      "« Wagon de secours nécessaire ».",
      "« Véhicule à différer »."
    ],
    correct: 0,
    source: "F 60.03"
  },
  {
    id: "F6Q042",
    theme: 6,
    question: "L'anomalie n'est pas réparable mais ne s'oppose pas à l'acheminement du véhicule. Qui détermine la vitesse d'acheminement ?",
    choices: [
      "Le régulateur à partir de la nature du véhicule.",
      "Le conducteur, qui transmet ensuite les conditions de circulation au régulateur ou à défaut à une gare."
    ],
    correct: 1,
    source: "F 60.03"
  },
  {
    id: "F6Q043",
    theme: 6,
    question: "Un véhicule présentant une anomalie non réparable peut être acheminé, mais sa circulation risque de présenter un danger pour les trains croiseurs ou dépasseurs. À quelles mesures le conducteur se réfère-t-il ?",
    choices: [
      "Aux mesures prévues lors de l'acheminement d'un véhicule comportant une boîte chaude.",
      "Aux seules mesures de protection d'un obstacle."
    ],
    correct: 0,
    source: "F 60.03"
  },
  {
    id: "F6Q044",
    theme: 6,
    question: "Un wagon a été signalé pour instabilité. Après visite du wagon et des véhicules encadrants, aucune anomalie n'est constatée. Quelle restriction subsiste ?",
    choices: [
      "Aucune : la marche normale peut reprendre.",
      "Ne pas dépasser 60 km/h jusqu'au premier établissement où ce wagon peut être différé."
    ],
    correct: 1,
    source: "F 60.03"
  },
  {
    id: "F6Q045",
    theme: 6,
    question: "Un véhicule a été signalé pour une anomalie autre qu'une instabilité. La visite du véhicule et des deux véhicules encadrants ne révèle rien. Quelle différence avec le cas du wagon signalé instable ?",
    choices: [
      "La marche peut reprendre sans la limitation particulière à 60 km/h prévue pour l'instabilité.",
      "La même limitation à 60 km/h s'applique à toute anomalie non retrouvée."
    ],
    correct: 0,
    source: "F 60.03"
  },
  {
    id: "F6Q046",
    theme: 6,
    question: "Un wagon signalé instable ne présente aucune anomalie à la visite. La limitation à 60 km/h est-elle appliquée jusqu'au terminus du train ?",
    choices: [
      "Oui, sauf autorisation contraire du régulateur.",
      "Non, jusqu'au premier établissement où le wagon peut être différé."
    ],
    correct: 1,
    source: "F 60.03"
  },

  // ============================================================
  // F60.04 — DACE
  // ============================================================

  {
    id: "F6Q047",
    theme: 6,
    question: "Une alarme DACE est déclenchée. Le conducteur doit-il provoquer immédiatement l'arrêt de lui-même comme lors d'une alarme danger DBC ?",
    choices: [
      "Non, il s'arrête au point désigné par l'agent du SGC.",
      "Oui, en évitant toutefois le freinage d'urgence."
    ],
    correct: 0,
    source: "F 60.04"
  },
  {
    id: "F6Q048",
    theme: 6,
    question: "Après l'arrêt consécutif à une alarme DACE, quel document précise notamment le côté et le rang de l'essieu alarmé ?",
    choices: [
      "Une étiquette IN.",
      "Un avis ANOT (IN 32)."
    ],
    correct: 1,
    source: "F 60.04"
  },
  {
    id: "F6Q049",
    theme: 6,
    question: "Lorsqu'un rang d'essieu est communiqué à la suite d'une alarme DACE, les essieux des machines de remorque sont-ils exclus du comptage ?",
    choices: [
      "Non, le rang de l'alarme prend également en compte les essieux de la ou des machines de remorque ou en véhicule.",
      "Oui, le premier essieu compté est toujours celui du premier véhicule remorqué."
    ],
    correct: 0,
    source: "F 60.04"
  },
  {
    id: "F6Q050",
    theme: 6,
    question: "Avant de procéder à la visite après une alarme DACE, quelle précaution relative à sa propre intervention incombe au conducteur s'il la juge nécessaire ?",
    choices: [
      "Mettre lui-même en place une protection d'obstacle.",
      "Obtenir l'assurance que sa protection est réalisée."
    ],
    correct: 1,
    source: "F 60.04"
  },
  {
    id: "F6Q051",
    theme: 6,
    question: "Sur les essieux désignés par une alarme DACE, la visite ne se limite pas à rechercher un défaut visible de roue. Que doit également vérifier le conducteur ?",
    choices: [
      "L'état des suspensions et l'absence de chargement déplacé.",
      "Uniquement la température des boîtes d'essieu."
    ],
    correct: 0,
    source: "F 60.04"
  },
  {
    id: "F6Q052",
    theme: 6,
    question: "Une anomalie est effectivement constatée après une alarme DACE. Après détermination des conditions de circulation, à qui le conducteur rend-il compte ?",
    choices: [
      "Uniquement au correspondant de l'EF.",
      "À l'agent du SGC, notamment en utilisant la partie correspondante de l'avis ANOT."
    ],
    correct: 1,
    source: "F 60.04"
  },
  {
    id: "F6Q053",
    theme: 6,
    question: "Après une alarme DACE, une anomalie est constatée sur un véhicule remorqué. Comment l'incident est-il signalé sur ce véhicule ?",
    choices: [
      "Au moyen du carnet d'étiquettes IN.",
      "Uniquement par annotation de l'avis ANOT."
    ],
    correct: 0,
    source: "F 60.04"
  },
  {
    id: "F6Q054",
    theme: 6,
    question: "L'anomalie DACE concerne finalement un engin moteur. Quelle différence de signalement est prévue ?",
    choices: [
      "Une étiquette IN plastifiée est obligatoirement fixée sur l'essieu.",
      "L'incident peut être signalé par annotation du carnet de bord."
    ],
    correct: 1,
    source: "F 60.04"
  },
  {
    id: "F6Q055",
    theme: 6,
    question: "Aucune anomalie n'est trouvée sur le ou les essieux désignés par le DACE. La marche peut-elle être reprise immédiatement ?",
    choices: [
      "Non, les deux véhicules encadrants doivent être visités.",
      "Oui, après compte rendu négatif au SGC."
    ],
    correct: 0,
    source: "F 60.04"
  },
  {
    id: "F6Q056",
    theme: 6,
    question: "La visite des essieux désignés par le DACE ne révèle rien, mais une anomalie est découverte sur l'un des véhicules encadrants. Quelle procédure s'applique ?",
    choices: [
      "La marche reprend car l'essieu alarmé lui-même est normal.",
      "Appliquer les dispositions prévues lorsqu'une anomalie est constatée."
    ],
    correct: 1,
    source: "F 60.04"
  },
  {
    id: "F6Q057",
    theme: 6,
    question: "Après une alarme DACE, aucune anomalie n'est constatée ni sur les essieux désignés ni sur les deux véhicules encadrants. Quelle suite est prévue ?",
    choices: [
      "Aviser le SGC en utilisant l'avis ANOT puis reprendre la marche.",
      "Limiter la vitesse à 60 km/h jusqu'au premier établissement."
    ],
    correct: 0,
    source: "F 60.04"
  },

  // ============================================================
  // QUESTIONS CROISÉES — DIFFÉRENCES ENTRE PROCÉDURES
  // ============================================================

  {
    id: "F6Q058",
    theme: 6,
    question: "Quelle différence fondamentale existe entre une alarme simple DBC sur un train de marchandises et une alarme danger DBC ?",
    choices: [
      "Dans les deux cas l'arrêt est immédiat, mais seule l'alarme danger impose une visite.",
      "L'alarme simple permet de rejoindre à 40 km/h maximum le point de garage désigné, tandis que l'alarme danger impose l'arrêt immédiat sans freinage d'urgence."
    ],
    correct: 1,
    source: "F 60.01"
  },
  {
    id: "F6Q059",
    theme: 6,
    question: "Après une alarme DBC, aucune anomalie n'est trouvée sur trois véhicules visités, mais l'un possède des roues bandagées. En quoi la suite diffère-t-elle du cas où aucun des trois n'en possède ?",
    choices: [
      "Le cas avec roues bandagées est traité comme un chauffage de boîte permettant l'acheminement, malgré l'absence d'anomalie constatée.",
      "Il impose seulement une seconde visite à environ 20 km."
    ],
    correct: 0,
    source: "F 60.01"
  },
  {
    id: "F6Q060",
    theme: 6,
    question: "Une boîte chaude est confirmée. Quelle constatation fait basculer la situation d'un acheminement possible vers une demande de wagon de secours ?",
    choices: [
      "La présence d'un essieu à roues bandagées.",
      "Une fusée rompue ou un doute sur son état."
    ],
    correct: 1,
    source: "F 60.01"
  },
  {
    id: "F6Q061",
    theme: 6,
    question: "Lors de l'acheminement d'une boîte chaude, le conducteur est sans communication. Quel élément peut transformer un déplacement à la vitesse d'un homme au pas en obligation de laisser le train sur place ?",
    choices: [
      "Pour un véhicule à boîte à une seule joue de guidage ou transportant des marchandises dangereuses, l'impossibilité de garantir l'absence de croisement ou de dépassement.",
      "La présence de n'importe quelle voie contiguë, même sans circulation possible."
    ],
    correct: 0,
    source: "F 60.02"
  },
  {
    id: "F6Q062",
    theme: 6,
    question: "Un véhicule signalé instable ne présente finalement aucune anomalie. Pourquoi n'est-il pas traité exactement comme un autre véhicule signalé dont la visite est négative ?",
    choices: [
      "Parce qu'il doit obligatoirement être retiré sur place.",
      "Parce qu'une limitation à 60 km/h subsiste jusqu'au premier établissement où il peut être différé."
    ],
    correct: 1,
    source: "F 60.03"
  },
  {
    id: "F6Q063",
    theme: 6,
    question: "Quelle différence de logique existe entre une alarme danger DBC et une alarme DACE quant au lieu de l'arrêt ?",
    choices: [
      "L'alarme danger DBC impose l'arrêt immédiat, tandis qu'après une alarme DACE le train est arrêté au point désigné par le SGC.",
      "Les deux imposent au conducteur un arrêt immédiat dès réception de l'information."
    ],
    correct: 0,
    source: "F 60.01 / F 60.04"
  },
  {
    id: "F6Q064",
    theme: 6,
    question: "Après une alarme DBC comme après une alarme DACE, l'élément initialement désigné ne présente aucune anomalie. Quel principe de recherche est commun aux deux procédures ?",
    choices: [
      "La recherche s'arrête puisque le détecteur a nécessairement produit une fausse alarme.",
      "La recherche est élargie, notamment aux véhicules encadrants selon la procédure applicable."
    ],
    correct: 1,
    source: "F 60.01 / F 60.04"
  },
  {
    id: "F6Q065",
    theme: 6,
    question: "Un véhicule présente une anomalie non réparable mais reste acheminable. Le risque qu'il représente concerne également les trains croiseurs ou dépasseurs. Quelle logique du sous-chapitre 6 est alors réutilisée ?",
    choices: [
      "Les mesures prévues pour l'acheminement après chauffage de boîte, notamment vis-à-vis des circulations voisines.",
      "Les dispositions propres au DACE, avec émission d'un nouvel avis ANOT."
    ],
    correct: 0,
    source: "F 60.03"
  }

];
