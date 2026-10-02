const QUESTIONS_PARTIE_D2 = [

  // =====================================================
  // D 20.01 / D 20.02 — SIGNALISATION DU TRAIN
  // =====================================================

  {
    id: "D2Q001", theme: 2, type: "qcm", source: "D 20.01",
    question: "Le feu supérieur de la signalisation d'avant ne fonctionne plus, mais les deux feux horizontaux fonctionnent normalement. Quelle disposition s'applique ?",
    choices: [
      "Appliquer les prescriptions relatives à une anomalie de la signalisation d'avant.",
      "Annoter uniquement le carnet de bord."
    ],
    correct: 1
  },

  {
    id: "D2Q002", theme: 2, type: "qcm", source: "D 20.01",
    question: "Un engin dispose des régimes « projecteur », « fanal » et « projecteur réduit ». De nuit, la voie longe une chaussée routière. Quel régime doit être utilisé ?",
    choices: [
      "Le régime « projecteur réduit ».",
      "Le régime « fanal » dans tous les cas."
    ],
    correct: 0
  },

  {
    id: "D2Q003", theme: 2, type: "qcm", source: "D 20.01",
    question: "Lors d'un croisement susceptible de provoquer un éblouissement, quel principe régit le choix du régime d'éclairage de la signalisation d'avant ?",
    choices: [
      "Le régime projecteur reste obligatoire en ligne.",
      "Utiliser le régime le mieux adapté en tenant compte du risque d'éblouissement."
    ],
    correct: 1
  },

  {
    id: "D2Q004", theme: 2, type: "qcm", source: "D 20.02",
    question: "Une locomotive circule en machine seule de jour. Qui doit assurer sa signalisation d'arrière ?",
    choices: [
      "Le conducteur, en allumant deux feux rouges.",
      "Un agent au sol, la signalisation d'arrière n'incombant au conducteur que de nuit."
    ],
    correct: 0
  },

  {
    id: "D2Q005", theme: 2, type: "qcm", source: "D 20.02",
    question: "Une locomotive assure une pousse. La signalisation d'arrière de l'engin relève-t-elle du conducteur de pousse ?",
    choices: [
      "Non, uniquement pour une machine seule ou un groupe de machines.",
      "Oui."
    ],
    correct: 1
  },


  // =====================================================
  // D 21.01 — ACCOSTAGE / ATTELAGE
  // =====================================================

  {
    id: "D2Q006", theme: 2, type: "qcm", source: "D 21.01",
    question: "Lors de l'accostage avec une locomotive seule, quel frein doit obligatoirement être utilisé ?",
    choices: [
      "Le frein direct.",
      "Le frein automatique."
    ],
    correct: 0
  },

  {
    id: "D2Q007", theme: 2, type: "qcm", source: "D 21.01",
    question: "Après accostage, le conducteur doit comprimer les tampons. Jusqu'à quel niveau ?",
    choices: [
      "Jusqu'à compression complète afin de supprimer tout jeu avant l'attelage.",
      "Modérément, sans jamais les comprimer à fond."
    ],
    correct: 1
  },

  {
    id: "D2Q008", theme: 2, type: "qcm", source: "D 21.01",
    question: "Après compression des tampons, le conducteur n'est plus en locomotive seule. Quel frein utilise-t-il pour immobiliser l'ensemble avant de ramener la traction à zéro et de commander « NEUTRE » ?",
    choices: [
      "Le frein automatique.",
      "Le frein direct."
    ],
    correct: 0
  },


  // =====================================================
  // D 21.02 — VÉRIFICATIONS AVANT DÉPART
  // =====================================================

  {
    id: "D2Q009", theme: 2, type: "qcm", source: "D 21.02",
    question: "Après attelage, à quel moment le conducteur peut-il utilement vérifier les liaisons mécaniques et pneumatiques et rechercher une éventuelle fuite ?",
    choices: [
      "Uniquement après l'essai de frein.",
      "Pendant le remplissage de la conduite générale."
    ],
    correct: 1
  },

  {
    id: "D2Q010", theme: 2, type: "qcm", source: "D 21.02",
    question: "Le régime de freinage du premier véhicule n'est pas cohérent avec le bulletin de freinage. Quelle disposition est prévue ?",
    choices: [
      "Aviser l'agent-formation.",
      "Corriger le régime puis modifier soi-même le bulletin de freinage."
    ],
    correct: 0
  },

  {
    id: "D2Q011", theme: 2, type: "qcm", source: "D 21.02",
    question: "Sur un train entier MA, quelle vérification spécifique incombe au conducteur sur le premier véhicule freiné lorsqu'il est équipé d'un dispositif « vide-chargé » ?",
    choices: [
      "Vérifier uniquement que le dispositif n'est pas isolé.",
      "Vérifier la cohérence de sa position avec la masse du véhicule."
    ],
    correct: 1
  },

  {
    id: "D2Q012", theme: 2, type: "qcm", source: "D 21.02",
    question: "Un train est freiné suivant le principe de la « Locomotive Longue ». Quelle vérification particulière doit être faite sur le premier véhicule freiné ?",
    choices: [
      "Le levier de changement de régime de frein doit être sur « M ».",
      "Le dispositif vide-chargé doit obligatoirement être en position « chargé »."
    ],
    correct: 0
  },

  {
    id: "D2Q013", theme: 2, type: "qcm", source: "D 21.02",
    question: "Une liste des marchandises dangereuses est jointe au bulletin de freinage. Lors de la vérification du premier véhicule, quelle correspondance doit être contrôlée ?",
    choices: [
      "Uniquement la correspondance avec le véhicule de rang 1 du bulletin de freinage.",
      "La correspondance avec le rang 1 ou avec le dernier véhicule de la liste des matières dangereuses."
    ],
    correct: 1
  },

  {
    id: "D2Q014", theme: 2, type: "qcm", source: "D 21.02",
    question: "Le conducteur constate une incohérence entre le bulletin de freinage, l'étiquette de chargement du premier véhicule et l'état de sa suspension. Peut-il se limiter au bulletin de freinage ?",
    choices: [
      "Non, la cohérence entre ces éléments doit être vérifiée.",
      "Oui, le bulletin de freinage fait foi pour cette vérification."
    ],
    correct: 0
  },


  // =====================================================
  // D 21.03 — MASSE REMORQUABLE
  // =====================================================

  {
    id: "D2Q015", theme: 2, type: "qcm", source: "D 21.03",
    question: "Un train est remorqué par deux engins moteurs en tête. Sauf particularité, comment est déterminée leur masse admissible globale ?",
    choices: [
      "Elle est limitée à celle du plus puissant des deux engins.",
      "Elle peut atteindre la somme des masses admissibles des deux engins, sans dépasser la limite de résistance des attelages."
    ],
    correct: 1
  },

  {
    id: "D2Q016", theme: 2, type: "qcm", source: "D 21.03",
    question: "L'adjonction d'une machine de pousse permet-elle de considérer uniquement la somme des masses admissibles de tous les engins moteurs ?",
    choices: [
      "Non, la masse totale remorquée reste limitée par la plus faible des limites prévues.",
      "Oui, la présence de la pousse neutralise la limite liée à la résistance des attelages."
    ],
    correct: 0
  },

  {
    id: "D2Q017", theme: 2, type: "qcm", source: "D 21.03",
    question: "Avec une pousse, comment intervient la limite de résistance des attelages dans la détermination de la masse remorquable ?",
    choices: [
      "Elle reste inchangée quelle que soit la pousse.",
      "Elle est augmentée de la masse admissible du ou des engins moteurs de pousse."
    ],
    correct: 1
  },

  {
    id: "D2Q018", theme: 2, type: "qcm", source: "D 21.03",
    question: "Après application du guide de dépannage, un ou plusieurs moteurs de traction sont isolés. Aucune limite maximale « Messageries et marchandises » n'est indiquée. Quelle valeur utiliser pour déterminer la masse remorquable ?",
    choices: [
      "La limite maximale « Voyageurs ».",
      "La masse admissible normale avant isolement."
    ],
    correct: 0
  },

  {
    id: "D2Q019", theme: 2, type: "qcm", source: "D 21.03",
    question: "Lors d'une demande de secours, la masse de la circulation dépasse la limite maximale remorquable ou la limite de résistance des attelages ainsi déterminée. Quelle conclusion doit transmettre le conducteur ?",
    choices: [
      "Le secours reste possible avec une limitation de vitesse.",
      "Le secours est impossible."
    ],
    correct: 1
  },


  // =====================================================
  // D 21.04 — VITESSE LIMITE
  // =====================================================

  {
    id: "D2Q020", theme: 2, type: "qcm", source: "D 21.04",
    question: "Plusieurs vitesses limites résultent simultanément du train, des engins moteurs, de la ligne et des conditions propres au conducteur. Laquelle doit être respectée ?",
    choices: [
      "La plus basse.",
      "Celle correspondant à l'indice de composition, les autres n'étant que des restrictions ponctuelles."
    ],
    correct: 0
  },

  {
    id: "D2Q021", theme: 2, type: "qcm", source: "D 21.04",
    question: "Les livrets de lignes ne donnent aucune vitesse correspondant exactement à l'indice de composition du train. Quelle vitesse retenir ?",
    choices: [
      "La vitesse de l'indice supérieur le plus proche en appliquant une marge.",
      "La vitesse correspondant à l'indice inférieur le plus proche."
    ],
    correct: 1
  },

  {
    id: "D2Q022", theme: 2, type: "qcm", source: "D 21.04",
    question: "L'indice porté sur la fiche-train diffère de celui porté sur le bulletin de freinage. Le conducteur peut-il retenir simplement le plus restrictif des deux ?",
    choices: [
      "Non, les indices ou codes doivent être identiques.",
      "Oui, retenir le plus restrictif suffit à garantir la sécurité."
    ],
    correct: 0
  },

  {
    id: "D2Q023", theme: 2, type: "qcm", source: "D 21.04",
    question: "Un engin moteur ne figure pas aux livrets de lignes et le conducteur ne dispose pas des renseignements nécessaires à sa circulation. Quelle disposition doit-il prendre ?",
    choices: [
      "Appliquer la vitesse de l'engin moteur le plus proche techniquement.",
      "Solliciter des instructions par écrit ou par dépêche du PÔLE TRAIN."
    ],
    correct: 1
  },

  {
    id: "D2Q024", theme: 2, type: "qcm", source: "D 21.04",
    question: "Un train prévu dans une marche donnée ne comporte finalement aucun véhicule remorqué et est seulement constitué de machines. Pour déterminer sa vitesse, comment doit-il être considéré ?",
    choices: [
      "Comme un HLP ou un TM selon le cas.",
      "Il conserve nécessairement l'indice prévu par la marche."
    ],
    correct: 0
  },


  // =====================================================
  // D 21.05 — TÊTE-À-QUEUE AGENT SEUL
  // =====================================================

  {
    id: "D2Q025", theme: 2, type: "qcm", source: "D 21.05",
    question: "Un tête-à-queue doit être réalisé sans agent au sol sur un train freiné suivant le principe « Locomotive Longue ». Le conducteur peut-il appliquer la procédure de tête-à-queue agent seul ?",
    choices: [
      "Oui, si la déclivité du faisceau est compatible.",
      "Non."
    ],
    correct: 1
  },

  {
    id: "D2Q026", theme: 2, type: "qcm", source: "D 21.05",
    question: "Un tête-à-queue agent seul doit exceptionnellement être réalisé sur un faisceau dont la déclivité est supérieure à 5 mm/m. Est-il admis avec les seuls moyens d'immobilisation de l'engin moteur ?",
    choices: [
      "Non.",
      "Oui, en ajoutant deux cales antidérive."
    ],
    correct: 0
  },

  {
    id: "D2Q027", theme: 2, type: "qcm", source: "D 21.05",
    question: "Après avoir manœuvré l'engin moteur vers l'autre extrémité de la rame lors d'un tête-à-queue agent seul, quelle vérification précède notamment la récupération des lanternes et la mise en tête ?",
    choices: [
      "Vérifier le desserrage complet du premier véhicule.",
      "Vérifier le serrage du premier véhicule."
    ],
    correct: 1
  },

  {
    id: "D2Q028", theme: 2, type: "qcm", source: "D 21.05",
    question: "Après un tête-à-queue, l'engin moteur qui était acheminé en véhicule est utilisable et compatible avec la masse remorquée. Peut-il assurer la remorque du train ?",
    choices: [
      "Oui.",
      "Non, un engin initialement acheminé en véhicule ne peut pas devenir engin de remorque sans nouveau bulletin de freinage."
    ],
    correct: 0
  },

  {
    id: "D2Q029", theme: 2, type: "qcm", source: "D 21.05",
    question: "Après un tête-à-queue, l'engin assurant désormais la remorque est d'une série différente de celle indiquée sur le bulletin de freinage d'origine. Que prévoit le référentiel ?",
    choices: [
      "Le bulletin d'origine doit obligatoirement être remplacé.",
      "Le conducteur le modifie manuellement dans la colonne prévue en précisant le lieu du changement de composition."
    ],
    correct: 1
  },

  {
    id: "D2Q030", theme: 2, type: "qcm", source: "D 21.05",
    question: "Lors de l'essai de raccordement effectué seul après un tête-à-queue, où le conducteur vérifie-t-il le serrage puis le desserrage ?",
    choices: [
      "Sur le premier véhicule freiné situé en arrière du point de raccordement par rapport à la cabine de conduite.",
      "Sur le dernier véhicule du train."
    ],
    correct: 0
  },


  // =====================================================
  // D 22.01 — PLACE DU CONDUCTEUR
  // =====================================================

  {
    id: "D2Q031", theme: 2, type: "qcm", source: "D 22.01",
    question: "Un engin monoc cabine possède deux postes, mais un seul est équipé du robinet de frein automatique. Quel poste doit occuper le conducteur ?",
    choices: [
      "Le poste du côté normal d'implantation de la signalisation.",
      "Le poste équipé du robinet de frein automatique, qu'il soit à droite ou à gauche."
    ],
    correct: 1
  },

  {
    id: "D2Q032", theme: 2, type: "qcm", source: "D 22.01",
    question: "Un engin monoc cabine possède deux postes tous deux équipés du robinet de frein automatique. Sur une ligne où la circulation se fait à gauche, quel poste est normalement utilisé ?",
    choices: [
      "Le poste côté gauche dans le sens de la marche.",
      "Indifféremment l'un ou l'autre."
    ],
    correct: 0
  },

  {
    id: "D2Q033", theme: 2, type: "qcm", source: "D 22.01",
    question: "Le côté d'implantation de la signalisation change en cours de parcours. Quand le conducteur d'un engin monoc cabine à deux postes doit-il changer de poste ?",
    choices: [
      "Immédiatement au point exact où change le côté d'implantation.",
      "Au plus proche arrêt précédant ou suivant ce point."
    ],
    correct: 1
  },

  {
    id: "D2Q034", theme: 2, type: "qcm", source: "D 22.01",
    question: "En marche, un danger imminent de collision impose au conducteur de quitter son poste. Quelle action doit-il s'efforcer d'effectuer auparavant ?",
    choices: [
      "Provoquer l'arrêt d'urgence.",
      "Commander uniquement une dépression maximale de service."
    ],
    correct: 0
  },


  // =====================================================
  // D 22.02 / D 22.03 — DÉMARRAGE
  // =====================================================

  {
    id: "D2Q035", theme: 2, type: "qcm", source: "D 22.02",
    question: "Lorsqu'un train comporte une machine de pousse, qui doit normalement tenter le décollage ?",
    choices: [
      "Le conducteur de tête.",
      "Le conducteur de pousse."
    ],
    correct: 1
  },

  {
    id: "D2Q036", theme: 2, type: "qcm", source: "D 22.02",
    question: "En double traction, qui réalise le décollage du train ?",
    choices: [
      "Le conducteur de tête, après s'être assuré que le conducteur en deuxième position est prêt.",
      "Le conducteur situé en deuxième position, comme dans le cas d'une pousse."
    ],
    correct: 0
  },

  {
    id: "D2Q037", theme: 2, type: "qcm", source: "D 22.02",
    question: "Avec une pousse, le conducteur de tête constate que le train vient d'être décollé par la pousse. Quand participe-t-il à la traction ?",
    choices: [
      "Uniquement après réception d'un avis radio du conducteur de pousse.",
      "Dès constatation du décollage ; à défaut, dès réception de l'avis prévu."
    ],
    correct: 1
  },

  {
    id: "D2Q038", theme: 2, type: "qcm", source: "D 22.02",
    question: "En double traction, le conducteur de tête a transmis l'AuM au conducteur en deuxième position. Peut-il commencer le décollage immédiatement ?",
    choices: [
      "Non, il attend son accusé de réception.",
      "Oui, la transmission de l'AuM suffit."
    ],
    correct: 0
  },

  {
    id: "D2Q039", theme: 2, type: "qcm", source: "D 22.03",
    question: "Pour un démarrage en rampe, comment doit être traité un train freiné suivant le principe de la « Locomotive Longue » ?",
    choices: [
      "Comme un train freiné au frein continu voyageurs.",
      "Comme un train entièrement freiné au frein continu marchandises."
    ],
    correct: 1
  },

  {
    id: "D2Q040", theme: 2, type: "qcm", source: "D 22.03",
    question: "Lors d'un démarrage en rampe, une première tentative échoue. Quelle disposition précède une nouvelle tentative ?",
    choices: [
      "Immobiliser le train au frein automatique et ramener le manipulateur de traction à zéro.",
      "Maintenir l'effort de traction et augmenter progressivement le frein direct."
    ],
    correct: 0
  },

  {
    id: "D2Q041", theme: 2, type: "qcm", source: "D 22.03",
    question: "Lors d'un démarrage en rampe avec pousse d'un train freiné au frein continu marchandises, à quel moment le conducteur de tête donne-t-il l'ordre de démarrer au conducteur de pousse ?",
    choices: [
      "Dès la commande du desserrage.",
      "30 secondes après la commande du desserrage."
    ],
    correct: 1
  },

  {
    id: "D2Q042", theme: 2, type: "qcm", source: "D 22.03",
    question: "Lors d'un démarrage en rampe avec pousse d'un train qui n'est pas freiné au frein continu marchandises, quel délai est prévu avant que le conducteur de tête donne l'ordre de démarrer ?",
    choices: [
      "5 secondes après la commande du desserrage.",
      "30 secondes après la commande du desserrage."
    ],
    correct: 0
  },


  // =====================================================
  // D 22.04 — ADHÉRENCE DÉGRADÉE
  // =====================================================

  {
    id: "D2Q043", theme: 2, type: "qcm", source: "D 22.04",
    question: "Un antipatinage automatique fonctionne, mais son action devient insuffisante ou trop fréquente. Quelle conduite adopter ?",
    choices: [
      "Le laisser agir sans intervention afin de ne pas perturber son fonctionnement.",
      "Agir comme si l'engin moteur n'en était pas équipé."
    ],
    correct: 1
  },

  {
    id: "D2Q044", theme: 2, type: "qcm", source: "D 22.04",
    question: "Un sablage automatique se déclenche lors d'un patinage alors que l'engin se trouve dans une zone d'aiguilles. Quelle action est prévue ?",
    choices: [
      "Agir sur le dispositif d'annulation du sablage automatique.",
      "Laisser le sablage automatique agir, l'interdiction ne concernant que le sablage manuel."
    ],
    correct: 0
  },

  {
    id: "D2Q045", theme: 2, type: "qcm", source: "D 22.04",
    question: "L'engin n'est pas équipé d'antipatinage et un patinage est constaté hors zone d'aiguilles. Comment l'effort de traction doit-il être modifié ?",
    choices: [
      "Annulé complètement jusqu'à disparition du patinage.",
      "Réduit sans être annulé complètement."
    ],
    correct: 1
  },

  {
    id: "D2Q046", theme: 2, type: "qcm", source: "D 22.04",
    question: "Pendant une période sensible, un patinage simple survient sur une zone connue comme favorable aux patinages. Doit-il être signalé ?",
    choices: [
      "Oui, avec indication précise du lieu et de sa nature.",
      "Non, seuls les patinages importants doivent être signalés."
    ],
    correct: 0
  },

  {
    id: "D2Q047", theme: 2, type: "qcm", source: "D 22.04",
    question: "Le conducteur constate un enrayage alors qu'un arrêt ou une limitation de vitesse s'impose. Doit-il desserrer les freins pour tenter de récupérer l'adhérence ?",
    choices: [
      "Oui, avant de refaire un freinage adapté.",
      "Non."
    ],
    correct: 1
  },

  {
    id: "D2Q048", theme: 2, type: "qcm", source: "D 22.04",
    question: "Un enrayage survient mais aucune prescription d'arrêt ou de limitation ne s'impose. L'engin n'est pas équipé d'anti-enrayage. Quelle action peut être réalisée ?",
    choices: [
      "Réduire, si possible, l'effort de retenue.",
      "Maintenir impérativement l'effort de retenue initial."
    ],
    correct: 0
  },

  {
    id: "D2Q049", theme: 2, type: "qcm", source: "D 22.04",
    question: "Toutes les mesures préventives et curatives contre l'enrayage ont été appliquées, mais le train parvient malgré tout à respecter le point d'arrêt prévu. Comment l'enrayage doit-il être qualifié ?",
    choices: [
      "Important, puisque toutes les mesures ont dû être employées.",
      "Simple."
    ],
    correct: 1
  },

  {
    id: "D2Q050", theme: 2, type: "qcm", source: "D 22.04",
    question: "Le train dépasse son point d'arrêt à la suite d'un enrayage, mais toutes les mesures préventives et curatives prévues n'avaient pas été prises. Peut-il être qualifié d'enrayage important selon la définition du référentiel ?",
    choices: [
      "Non, les deux conditions doivent être simultanément remplies.",
      "Oui, tout dépassement d'objectif suffit."
    ],
    correct: 0
  },

  {
    id: "D2Q051", theme: 2, type: "qcm", source: "D 22.04",
    question: "Quelle différence de transmission existe entre le signalement d'un enrayage simple et celui d'un enrayage important ?",
    choices: [
      "Aucune : tous deux doivent être signalés immédiatement.",
      "L'enrayage important doit être signalé immédiatement par radio ; à défaut, après arrêt au premier téléphone, à la première gare ou au premier poste."
    ],
    correct: 1
  },

  {
    id: "D2Q052", theme: 2, type: "qcm", source: "D 22.04",
    question: "Le conducteur reçoit un avis AVEN. La vitesse des MA80 sur la section est supérieure à 50 km/h et aucune vitesse inférieure n'est prescrite par le SGC. Quel plafond applique-t-il sur la zone concernée ?",
    choices: [
      "50 km/h.",
      "La vitesse des MA80 sans autre plafond."
    ],
    correct: 0
  },

  {
    id: "D2Q053", theme: 2, type: "qcm", source: "D 22.04",
    question: "Le conducteur reçoit un avis AVEN prescrivant explicitement 40 km/h alors que la vitesse des MA80 est supérieure. Quelle vitesse maximale applique-t-il ?",
    choices: [
      "50 km/h, qui constitue le taux réglementaire de l'avis d'enrayage.",
      "40 km/h."
    ],
    correct: 1
  },

  {
    id: "D2Q054", theme: 2, type: "qcm", source: "D 22.04",
    question: "Sur une zone sensible à l'adhérence dégradée, certains matériels conduisent à privilégier quel type de freinage ?",
    choices: [
      "Le freinage pneumatique, afin de répartir l'effort de retenue sur l'ensemble des essieux.",
      "Le frein électrique seul, afin d'éviter l'enrayage des véhicules remorqués."
    ],
    correct: 0
  },

  {
    id: "D2Q055", theme: 2, type: "qcm", source: "D 22.04",
    question: "Sur un engin équipé d'un anti-enrayage automatique, est-il recommandé de couper momentanément l'effort de freinage pour aider le dispositif à retrouver l'adhérence ?",
    choices: [
      "Oui, cette action facilite la redéfinition de la vitesse de référence.",
      "Non, une coupure de l'effort de freinage peut perturber les calculs du dispositif."
    ],
    correct: 1
  },

  {
    id: "D2Q056", theme: 2, type: "qcm", source: "D 22.04",
    question: "À titre préventif contre l'enrayage, le sablage reste-t-il interdit sur une zone d'aiguilles ?",
    choices: [
      "Oui, sauf en cas d'enrayage avéré.",
      "Non, l'interdiction ne concerne que le patinage."
    ],
    correct: 0
  },


  // =====================================================
  // D 22.05 — SURVEILLANCE EN COURS DE ROUTE
  // =====================================================

  {
    id: "D2Q057", theme: 2, type: "qcm", source: "D 22.05",
    question: "Au départ d'un établissement origine avec du matériel tracté, quelle vérification complète la surveillance habituelle lors de la mise en marche ?",
    choices: [
      "Un nouvel essai complet du frein.",
      "Un essai de roulage."
    ],
    correct: 1
  },

  {
    id: "D2Q058", theme: 2, type: "qcm", source: "D 22.05",
    question: "L'essai de roulage est-il également prévu après un échange de machine ou un remaniement du train ?",
    choices: [
      "Oui.",
      "Non, uniquement au départ de l'établissement origine."
    ],
    correct: 0
  },

  {
    id: "D2Q059", theme: 2, type: "qcm", source: "D 22.05",
    question: "En dehors d'une dépression provoquée par le conducteur, quelle association d'indications est normalement attendue pour la CG et les cylindres de frein ?",
    choices: [
      "CG à la pression de régime et cylindres légèrement alimentés.",
      "CG à 5 bars et manomètre des cylindres de frein à zéro."
    ],
    correct: 1
  },

  {
    id: "D2Q060", theme: 2, type: "qcm", source: "D 22.05",
    question: "En marche, une dépression CG non provoquée ou un accroissement anormal de la résistance à l'avancement est constaté. Comment le référentiel considère-t-il ces indices ?",
    choices: [
      "Comme pouvant révéler un incident affectant le train.",
      "Comme des variations normales ne nécessitant une réaction qu'en présence d'une alarme."
    ],
    correct: 0
  },


  // =====================================================
  // D 22.06 / D 22.07 — CONDUITE ÉCONOMIQUE
  // =====================================================

  {
    id: "D2Q061", theme: 2, type: "qcm", source: "D 22.06",
    question: "La fiche-train prévoit des vitesses de référence et des marches sur l'erre, mais le train circule en retard. Doivent-elles être appliquées avec la même exigence ?",
    choices: [
      "Oui, elles constituent des vitesses réglementaires indépendantes de l'horaire.",
      "Non, elles sont à respecter dans la mesure où la circulation n'est pas en retard et où les conditions correspondantes sont réunies."
    ],
    correct: 1
  },

  {
    id: "D2Q062", theme: 2, type: "qcm", source: "D 22.06",
    question: "En conduite économique, comment convient-il d'aborder une pente lorsque les conditions le permettent ?",
    choices: [
      "À vitesse réduite afin d'éviter ou de retarder les freinages.",
      "À la vitesse maximale autorisée afin d'éviter toute reprise de traction."
    ],
    correct: 0
  },

  {
    id: "D2Q063", theme: 2, type: "qcm", source: "D 22.06",
    question: "En traction électrique, le shuntage doit-il être utilisé dès qu'il permet d'augmenter la puissance disponible ?",
    choices: [
      "Oui, car il améliore le rendement de la traction.",
      "Non, seulement dans les cas strictement nécessaires après obtention de la tension maximale aux bornes des moteurs."
    ],
    correct: 1
  },

  {
    id: "D2Q064", theme: 2, type: "qcm", source: "D 22.06",
    question: "En traction thermique, un ou plusieurs moteurs diesel peuvent-ils être arrêtés en cours de service lorsque leur puissance n'est pas nécessaire ?",
    choices: [
      "Oui, si les conditions prévues permettent notamment de respecter l'horaire, les fonctions nécessaires et les contrôles de fonctionnement.",
      "Non, tous les moteurs disponibles doivent rester en service pendant la marche."
    ],
    correct: 0
  },

  {
    id: "D2Q065", theme: 2, type: "qcm", source: "D 22.07",
    question: "Pendant une période particulière d'économie d'énergie, un train de marchandises a pris du retard. Le conducteur doit-il chercher à le rattraper si les vitesses limites le permettent ?",
    choices: [
      "Oui, le respect de l'horaire reste prioritaire.",
      "Non, il ne doit pas chercher à gagner du temps ni à rattraper le temps perdu."
    ],
    correct: 1
  },

  {
    id: "D2Q066", theme: 2, type: "qcm", source: "D 22.07",
    question: "Pendant une période particulière d'économie d'énergie, le train peut techniquement circuler en avance. Quelle disposition s'applique ?",
    choices: [
      "Ne pas circuler en avance.",
      "L'avance reste admise si elle permet de réduire ensuite la traction."
    ],
    correct: 0
  },


  // =====================================================
  // D 22.08 / D 22.09 — ABANDON MOMENTANÉ / TRAINS FRET
  // =====================================================

  {
    id: "D2Q067", theme: 2, type: "qcm", source: "D 22.08",
    question: "Lors d'un arrêt, le conducteur doit quitter momentanément son poste pour effectuer une opération sur le terrain. Sur quoi doivent être fondées les mesures d'immobilisation ?",
    choices: [
      "Uniquement sur la durée prévue de l'absence.",
      "Sur les circonstances de l'arrêt, notamment sa nature, la déclivité et la composition du train."
    ],
    correct: 1
  },

  {
    id: "D2Q068", theme: 2, type: "qcm", source: "D 22.09",
    question: "Sur un long train FRET freiné au régime M, un desserrage vient d'être commandé mais la rame n'est pas encore complètement desserrée. Hors urgence, peut-on commander un nouveau serrage ?",
    choices: [
      "Non.",
      "Oui, à condition que la nouvelle dépression soit faible."
    ],
    correct: 0
  },

  {
    id: "D2Q069", theme: 2, type: "qcm", source: "D 22.09",
    question: "Après un desserrage en cours de route d'un train FRET, pourquoi une reprise de traction anticipée doit-elle être évitée ?",
    choices: [
      "Parce qu'elle risque principalement de provoquer un patinage de la locomotive.",
      "Parce que les véhicules de tête peuvent être desserrés alors que ceux de queue sont encore freinés, générant d'importantes réactions longitudinales."
    ],
    correct: 1
  },

  {
    id: "D2Q070", theme: 2, type: "qcm", source: "D 22.09",
    question: "Le frein électrique seul vient d'être utilisé pour maintenir la vitesse d'un train FRET dans une pente. Peut-on reprendre immédiatement la traction dès sa cessation ?",
    choices: [
      "Non, il faut attendre la stabilisation de la rame puis reprendre progressivement l'effort.",
      "Oui, puisque le frein pneumatique n'a pas été utilisé."
    ],
    correct: 0
  },

  {
    id: "D2Q071", theme: 2, type: "qcm", source: "D 22.09",
    question: "Le frein électrique seul peut-il être utilisé pour freiner un train de marchandises sur une zone d'aiguilles limitée à 30 km/h ?",
    choices: [
      "Oui, à condition de ne pas utiliser simultanément le frein pneumatique.",
      "Non."
    ],
    correct: 1
  },

  {
    id: "D2Q072", theme: 2, type: "qcm", source: "D 22.09",
    question: "La même interdiction d'utilisation du frein électrique seul s'applique-t-elle sur une zone d'aiguilles dont la vitesse limite est inférieure à 30 km/h ?",
    choices: [
      "Oui.",
      "Non, elle ne concerne que les zones limitées exactement à 30 km/h."
    ],
    correct: 0
  },

  {
    id: "D2Q073", theme: 2, type: "qcm", source: "D 22.09",
    question: "Un train FRET a une masse remorquée exactement égale à 2000 tonnes. Les temps minima spécifiques de variation de l'effort de traction prévus pour les trains lourds s'appliquent-ils ?",
    choices: [
      "Oui, à partir de 2000 tonnes incluses.",
      "Non, ils concernent les masses remorquées supérieures à 2000 tonnes."
    ],
    correct: 1
  },

  {
    id: "D2Q074", theme: 2, type: "qcm", source: "D 22.09",
    question: "Un train de 2100 tonnes est remorqué en UM. Quel principe particulier s'applique lors d'une reprise de traction allant d'un effort nul à l'effort maximal ?",
    choices: [
      "La variation doit être lente et progressive en respectant le temps minimal prévu pour l'UM ou la DT.",
      "La règle particulière ne concerne que le décollage initial du train."
    ],
    correct: 0
  },


  // =====================================================
  // D 23.01 / D 23.02 — RELAIS DE CONDUCTEUR
  // =====================================================

  {
    id: "D2Q075", theme: 2, type: "qcm", source: "D 23.01",
    question: "Lors d'un relais, à quelle pression le conducteur cédant laisse-t-il la CG si elle n'y est pas déjà ?",
    choices: [
      "5 bars.",
      "4 bars."
    ],
    correct: 1
  },

  {
    id: "D2Q076", theme: 2, type: "qcm", source: "D 23.01",
    question: "Des ordres ou avis intéressant la relève restent applicables. Quelle trace le conducteur cédant doit-il laisser ?",
    choices: [
      "Leurs références et une mention succincte des prescriptions appliquées sur le bulletin de sécurité.",
      "Uniquement les références sur le bulletin de freinage."
    ],
    correct: 0
  },

  {
    id: "D2Q077", theme: 2, type: "qcm", source: "D 23.01",
    question: "Le conducteur prenant est absent et la relève a lieu en dehors d'un établissement traction. Qui le conducteur cédant avise-t-il ?",
    choices: [
      "Le GR.",
      "Le PÔLE TRAIN."
    ],
    correct: 1
  },

  {
    id: "D2Q078", theme: 2, type: "qcm", source: "D 23.01",
    question: "Le conducteur prenant est absent, l'engin moteur reste attelé au train et le conducteur cédant doit partir. Que fait-il des documents, ordres et avis ?",
    choices: [
      "Il les laisse en évidence sur le pupitre avant d'appliquer les mesures d'abandon de cabine.",
      "Il les remet systématiquement à l'agent du SGC."
    ],
    correct: 0
  },

  {
    id: "D2Q079", theme: 2, type: "qcm", source: "D 23.02",
    question: "Lors d'un relais sur une locomotive, quelle disposition s'applique au desserrage des freins concernant la fonction « SURCHARGE » ?",
    choices: [
      "Elle n'est utilisée que si sa lampe clignote.",
      "Elle est commandée."
    ],
    correct: 1
  },

  {
    id: "D2Q080", theme: 2, type: "qcm", source: "D 23.02",
    question: "Lors d'un relais sur un matériel autre qu'une locomotive, quand le conducteur prenant commande-t-il la fonction « SURCHARGE » ?",
    choices: [
      "Lorsque la lampe « SURCHARGE » clignote.",
      "Systématiquement, comme sur une locomotive."
    ],
    correct: 0
  },

  {
    id: "D2Q081", theme: 2, type: "qcm", source: "D 23.02",
    question: "La relève intervient à la suite d'un accident de personne. Quelle condition supplémentaire précède la remise en marche ?",
    choices: [
      "Une nouvelle autorisation de mouvement écrite du SGC.",
      "L'autorisation du dirigeant astreinte NAVILAND CARGO."
    ],
    correct: 1
  },

  {
    id: "D2Q082", theme: 2, type: "qcm", source: "D 23.02",
    question: "Lors d'un relais, le conducteur prenant doit-il consulter le carnet de bord avant toute remise en marche ?",
    choices: [
      "Pas nécessairement : sa consultation s'effectue à la première occasion favorable.",
      "Oui, obligatoirement avant le desserrage des freins."
    ],
    correct: 0
  },

  {
    id: "D2Q083", theme: 2, type: "qcm", source: "D 23.02",
    question: "Après une relève, quelle vérification particulière est effectuée lors du démarrage ?",
    choices: [
      "Un essai en marche du frein automatique.",
      "Un essai en marche de la VA."
    ],
    correct: 1
  },


  // =====================================================
  // D 24.01 à D 24.04 — APRÈS ARRIVÉE
  // =====================================================

  {
    id: "D2Q084", theme: 2, type: "qcm", source: "D 24.01",
    question: "À l'arrivée, l'engin moteur reste attelé et la relève est immédiate. À qui le bulletin de freinage et ses documents joints sont-ils remis ?",
    choices: [
      "Au conducteur prenant.",
      "À l'agent de la gare dans tous les cas."
    ],
    correct: 0
  },

  {
    id: "D2Q085", theme: 2, type: "qcm", source: "D 24.01",
    question: "L'engin reste attelé mais la relève n'est pas effectuée immédiatement. Que devient le bulletin de freinage ?",
    choices: [
      "Le conducteur le conserve sur lui jusqu'à l'arrivée du conducteur prenant.",
      "Il est laissé, avec ses documents joints, en évidence sur le pupitre."
    ],
    correct: 1
  },

  {
    id: "D2Q086", theme: 2, type: "qcm", source: "D 24.02",
    question: "Avant dételage, l'agent demande une vidange complète de la CG. L'engin de remorque réalise cette vidange dans la cabine sans atténuateur de bruit. Que fait le conducteur ?",
    choices: [
      "Il ne procède pas à la vidange demandée et en informe l'agent chargé du dételage.",
      "Il effectue néanmoins la vidange complète, la demande de l'agent étant prioritaire."
    ],
    correct: 0
  },

  {
    id: "D2Q087", theme: 2, type: "qcm", source: "D 24.02",
    question: "Lors d'un dételage en US, ou en UM lorsque la commande de défreinage est active sur les deux locomotives, comment le conducteur procède-t-il avant de comprimer les tampons ?",
    choices: [
      "Il réalimente d'abord systématiquement la CG à 5 bars.",
      "Il actionne le dispositif de défreinage de la locomotive."
    ],
    correct: 1
  },

  {
    id: "D2Q088", theme: 2, type: "qcm", source: "D 24.03",
    question: "Après dételage, le dispositif de défreinage de la locomotive a été utilisé. Le conducteur peut-il commencer immédiatement le mouvement vers le remisage dès que la CG atteint 5 bars ?",
    choices: [
      "Non, il doit s'assurer du remplissage complet des équipements de frein et effectuer un essai de fonctionnement du frein automatique.",
      "Oui, la pression de 5 bars constitue l'assurance suffisante du remplissage."
    ],
    correct: 0
  },

  {
    id: "D2Q089", theme: 2, type: "qcm", source: "D 24.04",
    question: "Une locomotive disposée en CV doit être abandonnée sans surveillance. Il est impossible de serrer un frein à vis sur l'engin moteur de tête. Quelle mesure complémentaire est prévue ?",
    choices: [
      "Fermer le robinet d'arrêt CG de la locomotive de tête après vidange.",
      "Maintenir ouvert le robinet d'arrêt CG de la locomotive de tête pendant toute la durée du stationnement."
    ],
    correct: 1
  },

  {
    id: "D2Q090", theme: 2, type: "qcm", source: "D 24.04",
    question: "Un engin moteur attelé à un train est abandonné temporairement dans un établissement sans surveillance du service de conduite. Le conducteur doit-il normalement prévenir l'agent-formation ou le chef de service avant de s'absenter ?",
    choices: [
      "Oui, sauf dispositions contraires prévues aux livrets de lignes.",
      "Non, dès lors que les mesures d'immobilisation de l'engin sont prises."
    ],
    correct: 0
  }

];
