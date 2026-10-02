const QUESTIONS_PARTIE_C2 = [

  // =====================================================
  // C 20.01 à C 20.04 — RADIO SOL-TRAINS
  // =====================================================

  {
    id: "C2Q001", theme: 2, type: "qcm", source: "C 20.01",
    question: "Le poste de conduite est isolé. Sur un engin équipé d'un commutateur « secours-radio », la radio peut-elle néanmoins être utilisée ?",
    choices: [
      "Oui, le commutateur secours-radio permet cette utilisation.",
      "Non, l'isolement du poste interdit toute utilisation de la radio."
    ],
    correct: 0
  },

  {
    id: "C2Q002", theme: 2, type: "qcm", source: "C 20.01",
    question: "Le verrouillage de la boîte à leviers met l'appareil radio hors service. Qu'en est-il de l'interphonie et de la sonorisation ?",
    choices: [
      "Elles sont également mises hors service.",
      "Elles restent disponibles."
    ],
    correct: 1
  },

  {
    id: "C2Q003", theme: 2, type: "qcm", source: "C 20.01",
    question: "Un poste portatif GSM-R peut-il être utilisé pour pallier un dérangement de la radio sol-trains de bord ?",
    choices: [
      "Oui.",
      "Non, son emploi est limité aux opérations nécessitant de quitter le poste de conduite."
    ],
    correct: 0
  },

  {
    id: "C2Q004", theme: 2, type: "qcm", source: "C 20.01",
    question: "En GSM-R, le conducteur appuie sur l'alternat alors que le canal est occupé par un correspondant. Quelle indication reçoit-il ?",
    choices: [
      "« Parlez » accompagné de deux tops sonores.",
      "« Canal occupé » accompagné de tops sonores continus."
    ],
    correct: 1
  },

  {
    id: "C2Q005", theme: 2, type: "qcm", source: "C 20.02",
    question: "Lors de la mise sous tension du poste GSM-R, peut-on appuyer immédiatement sur « Marche/Arrêt » après déverrouillage de la boîte à leviers ?",
    choices: [
      "Non, il faut attendre l'affichage du label de réglage permettant l'initialisation.",
      "Oui, l'initialisation commence précisément avec l'appui sur Marche/Arrêt."
    ],
    correct: 0
  },

  {
    id: "C2Q006", theme: 2, type: "qcm", source: "C 20.02",
    question: "La section de ligne n'est pas équipée de radio sol-trains. Quel canal doit être sélectionné lors de la mise en service ?",
    choices: [
      "Aucun canal.",
      "Le canal 1."
    ],
    correct: 1
  },

  {
    id: "C2Q007", theme: 2, type: "qcm", source: "C 20.03",
    question: "La préparation courante est réalisée sur une section de ligne non équipée de radio sol-trains. L'essai radio doit-il néanmoins être effectué ?",
    choices: [
      "Oui.",
      "Non, l'essai n'est requis que sur une section équipée."
    ],
    correct: 0
  },

  {
    id: "C2Q008", theme: 2, type: "qcm", source: "C 20.03",
    question: "L'essai radio fait apparaître « TEST SOL DEFAUT ». Quelle action est prévue ?",
    choices: [
      "Appliquer directement les documents techniques du matériel.",
      "Aviser le régulateur, ou le PÔLE TRAIN dans un établissement."
    ],
    correct: 1
  },

  {
    id: "C2Q009", theme: 2, type: "qcm", source: "C 20.03",
    question: "L'essai radio fait apparaître « TEST INTERNE DEFAUT ». Quelle action est prévue ?",
    choices: [
      "Appliquer les documents techniques.",
      "Aviser systématiquement le régulateur avant toute autre action."
    ],
    correct: 0
  },

  {
    id: "C2Q010", theme: 2, type: "qcm", source: "C 20.04",
    question: "Lors d'un échange d'engin moteur, quelle opération concernant le NUTRA doit être effectuée sur l'engin cédant ?",
    choices: [
      "Le conserver enregistré jusqu'à l'indexation sur le nouvel engin.",
      "Le désenregistrer."
    ],
    correct: 1
  },

  {
    id: "C2Q011", theme: 2, type: "qcm", source: "C 20.04",
    question: "Un changement de parité intervient en cours de mission. Quand le nouveau numéro de train doit-il être indexé ?",
    choices: [
      "Au point de transition.",
      "À la première gare d'arrêt suivant le changement."
    ],
    correct: 0
  },

  {
    id: "C2Q012", theme: 2, type: "qcm", source: "C 20.04",
    question: "Lors de l'enregistrement du NUTRA, le message « NUTRA DEJA UTILISE » apparaît. Quelle est la première action du conducteur ?",
    choices: [
      "Demander immédiatement au régulateur l'autorisation d'écraser l'enregistrement.",
      "Vérifier le numéro de train qu'il a saisi."
    ],
    correct: 1
  },

  {
    id: "C2Q013", theme: 2, type: "qcm", source: "C 20.04",
    question: "Après vérification, le NUTRA saisi est conforme mais le message « NUTRA DEJA UTILISE » apparaît de nouveau. Quelle suite est prévue ?",
    choices: [
      "Aviser le régulateur et se conformer à ses instructions.",
      "Valider directement l'écrasement du NUTRA précédent."
    ],
    correct: 0
  },

  {
    id: "C2Q014", theme: 2, type: "qcm", source: "C 20.04",
    question: "Une alerte radio est en cours lorsque le conducteur met en service son poste dans la ZDA. Peut-il immédiatement saisir le canal et le NUTRA ?",
    choices: [
      "Oui, avant d'appliquer les mesures liées à l'alerte.",
      "Non, il les saisit lorsque l'IHM le permet de nouveau, après clôture de l'alerte ou sortie de la ZDA."
    ],
    correct: 1
  },

  {
    id: "C2Q015", theme: 2, type: "qcm", source: "C 20.04",
    question: "Le conducteur vient lui-même d'émettre une alerte radio et son train sort de la ZDA sans qu'il ait préalablement arrêté l'alerte. Que se passe-t-il sur son poste émetteur ?",
    choices: [
      "Les indications d'alerte disparaissent et le menu de base réapparaît.",
      "L'alerte reste affichée jusqu'à son arrêt manuel ou celui du régulateur."
    ],
    correct: 0
  },

  {
    id: "C2Q016", theme: 2, type: "qcm", source: "C 20.04",
    question: "Le train émetteur quitte la ZDA alors que l'alerte n'a pas été arrêtée. Que se passe-t-il pour les conducteurs récepteurs restant dans cette ZDA ?",
    choices: [
      "Leurs postes reviennent immédiatement au menu de base.",
      "Ils continuent à recevoir les indications correspondant à l'alerte."
    ],
    correct: 1
  },

  {
    id: "C2Q017", theme: 2, type: "qcm", source: "C 20.04",
    question: "Le conducteur qui a déclenché une alerte radio souhaite isoler son poste alors qu'il se trouve encore dans la ZDA. Quelle particularité doit-il prendre en compte ?",
    choices: [
      "Le verrouillage de la boîte à leviers ou la mise hors service de la radio clôture l'alerte ; il doit donc obtenir l'autorisation du SGC avant l'opération.",
      "L'isolement du poste n'a aucun effet sur l'alerte, qui reste active jusqu'à son arrêt par le régulateur."
    ],
    correct: 0
  },

  {
    id: "C2Q018", theme: 2, type: "qcm", source: "C 20.04",
    question: "Après émission d'une alerte radio, l'émetteur commence à parler immédiatement en appuyant sur l'alternat, sans attendre le bip spécifique. Quel risque est indiqué ?",
    choices: [
      "La communication est automatiquement annulée.",
      "Le début de son message peut ne pas être entendu par les correspondants."
    ],
    correct: 1
  },

  {
    id: "C2Q019", theme: 2, type: "qcm", source: "C 20.04",
    question: "Dans l'appel de groupe constitué par une alerte radio, l'émetteur dispose-t-il durablement de l'exclusivité de la parole ?",
    choices: [
      "Non, il bénéficie d'une priorité d'environ 15 secondes, puis les autres correspondants peuvent techniquement prendre la parole.",
      "Oui, jusqu'à ce qu'il mette lui-même fin à l'alerte."
    ],
    correct: 0
  },


  // =====================================================
  // C 21.01 — PANTOGRAPHES
  // =====================================================

  {
    id: "C2Q020", theme: 2, type: "qcm", source: "C 21.01",
    question: "Un engin moteur électrique est acheminé en véhicule dans une circulation non électrique. Sa mise sous tension est-elle librement réalisable par le conducteur ?",
    choices: [
      "Oui, dès lors que la caténaire est compatible.",
      "Non, elle n'est autorisée qu'après accord du RSS ou de l'agent E."
    ],
    correct: 1
  },

  {
    id: "C2Q021", theme: 2, type: "qcm", source: "C 21.01",
    question: "Un engin moteur hors tension se trouve sous une caténaire compatible. Avant de commander la montée du pantographe, quelle assurance est exigée concernant le ou les disjoncteurs ?",
    choices: [
      "Ils doivent être ouverts.",
      "Ils peuvent rester fermés si le manipulateur de traction est à zéro."
    ],
    correct: 0
  },

  {
    id: "C2Q022", theme: 2, type: "qcm", source: "C 21.01",
    question: "En marche sur une voie de service, le conducteur souhaite lever un pantographe. Quelle règle s'applique ?",
    choices: [
      "La manœuvre est admise à faible vitesse.",
      "La montée d'un pantographe en marche y est interdite."
    ],
    correct: 1
  },

  {
    id: "C2Q023", theme: 2, type: "qcm", source: "C 21.01",
    question: "En marche sur voie principale, la montée d'un pantographe doit être réalisée à proximité d'un sectionnement à lame d'air. Le référentiel l'interdit-il formellement ?",
    choices: [
      "Non, mais il prescrit d'éviter cette manœuvre dans les zones présentant un risque d'enchevêtrement.",
      "Oui, toute montée de pantographe en marche est interdite au franchissement d'un sectionnement."
    ],
    correct: 0
  },

  {
    id: "C2Q024", theme: 2, type: "qcm", source: "C 21.01",
    question: "Après la montée d'un pantographe, peut-on fermer immédiatement le disjoncteur dès que l'archet touche la caténaire ?",
    choices: [
      "Oui, si la tension ligne est correcte.",
      "Non, il faut attendre la fin des rebondissements du ou des pantographes."
    ],
    correct: 1
  },

  {
    id: "C2Q025", theme: 2, type: "qcm", source: "C 21.01",
    question: "Sur un engin déjà sous tension, la montée du deuxième pantographe est commandée à l'arrêt. Quelles conditions sont prévues ?",
    choices: [
      "Manipulateur de traction à zéro et, si le conducteur en dispose, commande d'ouverture des circuits auxiliaires.",
      "Manipulateur à zéro uniquement ; les auxiliaires doivent impérativement rester alimentés."
    ],
    correct: 0
  },

  {
    id: "C2Q026", theme: 2, type: "qcm", source: "C 21.01",
    question: "Sur un engin déjà sous tension, la montée du deuxième pantographe est commandée en marche. Quelle différence existe par rapport à la manœuvre à l'arrêt ?",
    choices: [
      "Les auxiliaires doivent obligatoirement être ouverts en marche.",
      "Le référentiel impose de ramener le manipulateur à zéro mais ne reprend pas l'ouverture des auxiliaires dans cette situation."
    ],
    correct: 1
  },

  {
    id: "C2Q027", theme: 2, type: "qcm", source: "C 21.01",
    question: "Une locomotive monocourant à deux pantographes remorque immédiatement un wagon porte-autos chargé de véhicules. Quel pantographe doit être utilisé ?",
    choices: [
      "Le pantographe avant.",
      "Le pantographe arrière, comme dans le cas général."
    ],
    correct: 0
  },

  {
    id: "C2Q028", theme: 2, type: "qcm", source: "C 21.01",
    question: "La locomotive est polycourant et le véhicule immédiatement derrière transporte des automobiles. La règle du pantographe avant applicable à certaines locomotives monocourant s'applique-t-elle ?",
    choices: [
      "Oui, pour éviter les projections sur les véhicules transportés.",
      "Non, le pantographe Normal adapté à la tension reste utilisé."
    ],
    correct: 1
  },

  {
    id: "C2Q029", theme: 2, type: "qcm", source: "C 21.01",
    question: "Le pantographe Secours d'un engin polycourant peut-il remplacer seul le pantographe Normal sur la seule initiative du conducteur ?",
    choices: [
      "Non, son utilisation seule relève du manuel de conduite ou du guide de dépannage.",
      "Oui, dès lors qu'il est compatible avec la tension d'alimentation."
    ],
    correct: 0
  },

  {
    id: "C2Q030", theme: 2, type: "qcm", source: "C 21.01",
    question: "Sous 1500 V, une locomotive équipée d'un rhéostat de démarrage effectue un décollage difficile. Quelle utilisation des pantographes est prévue ?",
    choices: [
      "Maintenir uniquement le pantographe normalement utilisé.",
      "Utiliser les deux pantographes puis abaisser le deuxième dès le décollage du train."
    ],
    correct: 1
  },

  {
    id: "C2Q031", theme: 2, type: "qcm", source: "C 21.01",
    question: "Sous 1500 V, deux locomotives sont en DT et des tampons doivent être comprimés pour effectuer l'attelage. La règle des deux pantographes concerne-t-elle les deux conducteurs ?",
    choices: [
      "Non, elle ne concerne que le conducteur de la locomotive qui assure l'appui sur le train.",
      "Oui, les deux locomotives doivent systématiquement utiliser leurs deux pantographes."
    ],
    correct: 0
  },

  {
    id: "C2Q032", theme: 2, type: "qcm", source: "C 21.01",
    question: "En DT sous 25 kV, peut-on utiliser simultanément les deux pantographes d'une même locomotive pendant la marche ?",
    choices: [
      "Oui, si l'autre locomotive n'utilise qu'un pantographe.",
      "Non."
    ],
    correct: 1
  },

  {
    id: "C2Q033", theme: 2, type: "qcm", source: "C 21.01",
    question: "Sous 25 kV, une DT comprend une locomotive monocourant à deux pantographes et une locomotive polycourant. Comment sont choisis les pantographes ?",
    choices: [
      "Pantographe Normal sur la polycourant et, sur la monocourant, pantographe le plus éloigné de celui en service sur l'autre locomotive.",
      "Pantographe arrière sur chacune des deux locomotives."
    ],
    correct: 0
  },

  {
    id: "C2Q034", theme: 2, type: "qcm", source: "C 21.01",
    question: "En DT, combien de locomotives contiguës peuvent normalement être maintenues sous tension ?",
    choices: [
      "Trois, dès lors qu'un seul pantographe est levé par locomotive.",
      "Deux au maximum, sauf particularités prévues au livret de lignes."
    ],
    correct: 1
  },

  {
    id: "C2Q035", theme: 2, type: "qcm", source: "C 21.01",
    question: "Pour mettre hors tension un engin moteur hors situation d'urgence, dans quel ordre général s'effectuent les opérations avant la mise à zéro du sélecteur de pantographes ?",
    choices: [
      "Traction à zéro, ouverture des circuits auxiliaires, ouverture du ou des disjoncteurs.",
      "Ouverture du disjoncteur, abaissement du pantographe, puis traction à zéro."
    ],
    correct: 0
  },

  {
    id: "C2Q036", theme: 2, type: "qcm", source: "C 21.01",
    question: "Une locomotive circule en US avec son pantographe AV. C 21.01 impose-t-il systématiquement une restriction de vitesse du seul fait de cette position ?",
    choices: [
      "Oui.",
      "Non."
    ],
    correct: 1
  },

  {
    id: "C2Q037", theme: 2, type: "qcm", source: "C 21.01",
    question: "Des locomotives circulent en DT ou UM sous 1500 V. Quelle limitation générale est prévue, sous réserve d'une disposition différente au livret de lignes ?",
    choices: [
      "Ne pas dépasser 120 km/h.",
      "La même absence de restriction qu'en US."
    ],
    correct: 0
  },


  // =====================================================
  // C 22.01 / C 22.02 — OPÉRATIONS TECHNIQUES
  // =====================================================

  {
    id: "C2Q038", theme: 2, type: "qcm", source: "C 22.01",
    question: "Lors des opérations avant départ, un système de sécurité doit être isolé conformément aux documents techniques. Si l'engin ne peut pas être remplacé immédiatement, peut-il poursuivre son utilisation ?",
    choices: [
      "Non, son remplacement est nécessaire avant tout mouvement.",
      "Il peut exceptionnellement terminer la mission en cours."
    ],
    correct: 1
  },

  {
    id: "C2Q039", theme: 2, type: "qcm", source: "C 22.01",
    question: "Dans le cas exceptionnel où un engin avec système de sécurité isolé termine sa mission, que comprend la notion de « mission » ?",
    choices: [
      "Le train en cours ainsi que les mouvements de manœuvre non guidés entre gares et lieux de stationnement.",
      "Uniquement le train en cours jusqu'à sa gare terminus."
    ],
    correct: 0
  },

  {
    id: "C2Q040", theme: 2, type: "qcm", source: "C 22.01",
    question: "Après sa mission, l'engin avarié doit être acheminé vers un centre de maintenance. Peut-il exceptionnellement être utilisé en service pour cet acheminement ?",
    choices: [
      "Non, il doit obligatoirement être acheminé en véhicule.",
      "Oui, le PÔLE TRAIN peut l'autoriser selon le système concerné et les conditions d'exploitation."
    ],
    correct: 1
  },

  {
    id: "C2Q041", theme: 2, type: "qcm", source: "C 22.01",
    question: "Pour l'acheminement vers la maintenance d'un engin autorisé à rester en service, le système isolé affecte le KVB, le DAAT ou l'ENR. Quelle particularité est prévue ?",
    choices: [
      "Le conducteur doit recevoir des instructions transmises par écrit, par dépêche ou par fax.",
      "Une autorisation verbale du PÔLE TRAIN suffit dans tous les cas."
    ],
    correct: 0
  },

  {
    id: "C2Q042", theme: 2, type: "qcm", source: "C 22.01",
    question: "Lors des opérations avant départ, un appareil est trouvé déplombé mais correctement positionné. Hors cas particulier de l'enregistreur, quelle action est prévue ?",
    choices: [
      "Appliquer systématiquement le guide de dépannage.",
      "Annoter le carnet de bord."
    ],
    correct: 1
  },

  {
    id: "C2Q043", theme: 2, type: "qcm", source: "C 22.01",
    question: "Un appareil est trouvé en mauvaise position sans aucune annotation correspondante au carnet de bord. Quelle conduite est prévue ?",
    choices: [
      "Appliquer le guide de dépannage.",
      "Le remettre en bonne position et annoter simplement le carnet de bord."
    ],
    correct: 0
  },

  {
    id: "C2Q044", theme: 2, type: "qcm", source: "C 22.01",
    question: "Lors de l'essai du signal d'alerte lumineux, le clignotement automatique ne fonctionne pas. Cette seule anomalie entraîne-t-elle une restriction ?",
    choices: [
      "Oui.",
      "Non."
    ],
    correct: 1
  },

  {
    id: "C2Q045", theme: 2, type: "qcm", source: "C 22.01",
    question: "Sur un moteur diesel, le niveau d'huile se situe sous le minimum. Un complément avec la réserve embarquée ne permet toujours pas d'atteindre le minimum. Quelle suite est prévue ?",
    choices: [
      "Demander le remplacement de l'engin moteur au PÔLE TRAIN.",
      "Poursuivre la mission en annotant le carnet de bord."
    ],
    correct: 0
  },

  {
    id: "C2Q046", theme: 2, type: "qcm", source: "C 22.01",
    question: "Le niveau d'eau d'un engin diesel est inférieur au minimum et aucun complément ne peut être effectué. Quelle conduite est prévue ?",
    choices: [
      "Demander systématiquement le remplacement immédiat sans autre procédure.",
      "Appliquer le guide de dépannage et annoter le carnet de bord."
    ],
    correct: 1
  },

  {
    id: "C2Q047", theme: 2, type: "qcm", source: "C 22.01",
    question: "Lors du lancement d'un moteur diesel équipé d'un démarreur électrique, un sifflement du démarreur est perçu. Quelle séquence est prévue avant de recommencer le lancement ?",
    choices: [
      "Cesser la commande, isoler le pupitre ou tableau d'essai, virer légèrement le moteur puis recommencer.",
      "Maintenir la commande jusqu'à 30 secondes afin de tenter l'allumage."
    ],
    correct: 0
  },

  {
    id: "C2Q048", theme: 2, type: "qcm", source: "C 22.01",
    question: "Lors de lancements successifs d'un moteur diesel, quel délai doit séparer deux tentatives ?",
    choices: [
      "Le nouveau lancement peut être immédiat si le moteur n'a pas été entraîné.",
      "30 secondes."
    ],
    correct: 1
  },

  {
    id: "C2Q049", theme: 2, type: "qcm", source: "C 22.01",
    question: "À la PC ou à la RS, la locomotive ne possède qu'une seule lanterne de queue de bord. Quelle conduite est prévue par le référentiel fourni ?",
    choices: [
      "Demander la lanterne manquante à l'Agent formation de VSX ou HDE ; à défaut, annoter le carnet de bord.",
      "Une seule lanterne de secours est suffisante tant que la locomotive n'est pas utilisée en queue."
    ],
    correct: 0
  },

  {
    id: "C2Q050", theme: 2, type: "qcm", source: "C 22.01",
    question: "Une lanterne de bord a été remise à l'Agent formation au départ. Que doit rechercher le conducteur au point de relais ?",
    choices: [
      "Uniquement la restitution de la même lanterne.",
      "La restitution de l'équivalent de l'équipement laissé sur place afin que la locomotive retrouve deux lanternes."
    ],
    correct: 1
  },

  {
    id: "C2Q051", theme: 2, type: "qcm", source: "C 22.02",
    question: "Après les opérations techniques d'arrivée, quelle est la règle générale de stationnement de l'engin moteur ?",
    choices: [
      "Pantographes baissés et/ou moteurs diesel arrêtés, avec CG maintenue à l'atmosphère en tête de faisceau.",
      "Engin maintenu sous tension si le stationnement est inférieur à une heure."
    ],
    correct: 0
  },

  {
    id: "C2Q052", theme: 2, type: "qcm", source: "C 22.02",
    question: "La règle de maintien de la CG à l'atmosphère en tête de faisceau dépend-elle du fait que l'engin soit seul ou attelé à d'autres véhicules ?",
    choices: [
      "Oui, elle ne concerne que l'engin seul.",
      "Non, elle s'applique dans les deux situations."
    ],
    correct: 1
  },

  {
    id: "C2Q053", theme: 2, type: "qcm", source: "C 22.02",
    question: "Après l'arrivée, une consigne locale liée à une demande de l'Activité prévoit des dispositions particulières de stationnement. Peuvent-elles déroger à la règle générale ?",
    choices: [
      "Oui.",
      "Non, seule une demande écrite du PÔLE TRAIN peut y déroger."
    ],
    correct: 0
  },


  // =====================================================
  // C 23.01 — MESURES AU COURS DES ARRÊTS
  // =====================================================

  {
    id: "C2Q054", theme: 2, type: "qcm", source: "C 23.01",
    question: "Lors d'un arrêt permettant la visite de l'engin, la température extérieure est inférieure à 0 °C. Quelle particularité concerne la purge des circuits d'air ?",
    choices: [
      "Elle est supprimée pour éviter le givrage des purges.",
      "Les circuits d'air doivent être purgés plus longuement."
    ],
    correct: 1
  },

  {
    id: "C2Q055", theme: 2, type: "qcm", source: "C 23.01",
    question: "Lors d'un arrêt en traction électrique, les ventilateurs doivent normalement être arrêtés. L'arrêt n'a toutefois pas été précédé d'une marche sur l'erre d'au moins 5 minutes. Quelle conduite est prévue ?",
    choices: [
      "Maintenir les ventilateurs en service pendant le temps complémentaire nécessaire.",
      "Les arrêter immédiatement dès l'immobilisation."
    ],
    correct: 0
  },

  {
    id: "C2Q056", theme: 2, type: "qcm", source: "C 23.01",
    question: "Sur un engin dont la charge batterie dépend du fonctionnement des ventilateurs, la tension batterie n'atteint pas 60 V pendant l'arrêt. Faut-il arrêter les ventilateurs ?",
    choices: [
      "Oui, dès lors que l'arrêt est suffisamment long.",
      "Non, cette situation constitue une exception à leur arrêt."
    ],
    correct: 1
  },

  {
    id: "C2Q057", theme: 2, type: "qcm", source: "C 23.01",
    question: "Un engin thermique s'arrête pour 15 minutes. La température d'eau est de 45 °C. Le moteur diesel doit-il être arrêté au titre de la règle des arrêts supérieurs à 10 minutes ?",
    choices: [
      "Non, une température d'eau inférieure à 50 °C constitue une exception.",
      "Oui, la durée supérieure à 10 minutes prime sur la température d'eau."
    ],
    correct: 0
  },

  {
    id: "C2Q058", theme: 2, type: "qcm", source: "C 23.01",
    question: "Un moteur diesel vient d'être utilisé à sa puissance maximale juste avant un arrêt supérieur à 10 minutes. Quelle particularité est prévue avant son arrêt ?",
    choices: [
      "Il doit être arrêté immédiatement afin d'éviter tout échauffement supplémentaire.",
      "Il doit être laissé tourner au ralenti quelques minutes."
    ],
    correct: 1
  },

  {
    id: "C2Q059", theme: 2, type: "qcm", source: "C 23.01",
    question: "Après avoir arrêté un moteur diesel au cours d'un arrêt prolongé, quand doit-il être relancé au plus tard ?",
    choices: [
      "3 minutes avant la remise en marche prévue.",
      "Au moment exact où le départ est donné."
    ],
    correct: 0
  },


  // =====================================================
  // C 24.01 — ENREGISTREMENTS
  // =====================================================

  {
    id: "C2Q060", theme: 2, type: "qcm", source: "C 24.01",
    question: "L'identification de l'enregistreur est-elle limitée aux trains circulant en ligne ?",
    choices: [
      "Oui, les mouvements de manœuvre sont exclus.",
      "Non, elle est étendue à chaque circulation, mouvements de manœuvre guidés et non guidés compris."
    ],
    correct: 1
  },

  {
    id: "C2Q061", theme: 2, type: "qcm", source: "C 24.01",
    question: "Pour une même circulation, un changement d'engin moteur intervient en UM. Une nouvelle identification de l'enregistreur est-elle nécessaire ?",
    choices: [
      "Oui.",
      "Non, puisque le numéro de circulation reste identique."
    ],
    correct: 0
  },

  {
    id: "C2Q062", theme: 2, type: "qcm", source: "C 24.01",
    question: "Sur un engin équipé d'un ENR, jusqu'à quel moment au plus tard l'identification doit-elle être réalisée après déverrouillage de la BL ou du Z-MES ?",
    choices: [
      "Avant la sortie de l'établissement.",
      "Avant tout premier déplacement."
    ],
    correct: 1
  },

  {
    id: "C2Q063", theme: 2, type: "qcm", source: "C 24.01",
    question: "Lors d'une PC ou d'une RS, le conducteur constate que la capacité d'enregistrement disponible est insuffisante. Comment l'enregistreur doit-il être considéré ?",
    choices: [
      "Comme étant en dérangement.",
      "Comme utilisable jusqu'à saturation effective."
    ],
    correct: 0
  },

  {
    id: "C2Q064", theme: 2, type: "qcm", source: "C 24.01",
    question: "Après un relais, la vérification de la quantité de bande graphique restante doit-elle nécessairement être faite immédiatement ?",
    choices: [
      "Oui, avant toute remise en mouvement.",
      "Non, elle est effectuée à la première occasion favorable."
    ],
    correct: 1
  },

  {
    id: "C2Q065", theme: 2, type: "qcm", source: "C 24.01",
    question: "Le conducteur constate uniquement que le délai concernant la fiche suiveuse ou la fiche de repérage est dépassé. Quand doit-il aviser le PÔLE TRAIN ?",
    choices: [
      "À la première occasion favorable.",
      "Obligatoirement avant tout déplacement."
    ],
    correct: 0
  },

  {
    id: "C2Q066", theme: 2, type: "qcm", source: "C 24.01",
    question: "Une anomalie affectant l'enregistreur de vitesse est constatée. Outre l'application de la procédure correspondante, quelles traces doivent être établies ?",
    choices: [
      "Le carnet de bord uniquement.",
      "Le carnet de bord et le bulletin de sécurité."
    ],
    correct: 1
  },


  // =====================================================
  // C 25.01 / C 25.02 — ATTELAGE / DÉTELAGE
  // =====================================================

  {
    id: "C2Q067", theme: 2, type: "qcm", source: "C 25.01",
    question: "Un engin ou véhicule possède une CG bifurquée avec deux accouplements à chaque extrémité. Faut-il raccorder les deux accouplements ?",
    choices: [
      "Non, un seul est raccordé et seuls les robinets correspondants sont ouverts.",
      "Oui, afin de garantir la continuité de la CG."
    ],
    correct: 0
  },

  {
    id: "C2Q068", theme: 2, type: "qcm", source: "C 25.01",
    question: "La conduite principale existe sur les deux véhicules à accoupler mais elle n'est pas nécessaire au freinage de la rame considérée. Doit-elle néanmoins être raccordée ?",
    choices: [
      "Non, elle n'est raccordée que si elle est utilisée par le frein.",
      "Oui, la CP doit être raccordée chaque fois qu'elle existe."
    ],
    correct: 1
  },

  {
    id: "C2Q069", theme: 2, type: "qcm", source: "C 25.02",
    question: "Deux engins moteurs comportent chacun un conducteur. Lequel effectue normalement leur attelage ?",
    choices: [
      "Le conducteur de l'engin qui reste immobile.",
      "Le conducteur de l'engin qui s'est déplacé pour réaliser l'accostage."
    ],
    correct: 0
  },

  {
    id: "C2Q070", theme: 2, type: "qcm", source: "C 25.02",
    question: "Deux engins moteurs comportent chacun un conducteur. Lequel effectue normalement leur dételage ?",
    choices: [
      "Le conducteur de l'engin qui restera immobile.",
      "Le conducteur de l'engin qui se mettra en mouvement le premier."
    ],
    correct: 1
  },

  {
    id: "C2Q071", theme: 2, type: "qcm", source: "C 25.02",
    question: "Lors de l'attelage UIC, quel tendeur doit être utilisé sauf impossibilité matérielle ?",
    choices: [
      "Celui du véhicule remorqué.",
      "Celui de l'engin moteur."
    ],
    correct: 0
  },

  {
    id: "C2Q072", theme: 2, type: "qcm", source: "C 25.02",
    question: "Lors de l'accouplement des conduites pneumatiques, dans quel ordre les robinets peuvent-ils être ouverts ?",
    choices: [
      "Obligatoirement en commençant par celui côté engin moteur.",
      "Simultanément ou en commençant par celui situé du côté opposé à l'engin moteur de remorque."
    ],
    correct: 1
  },

  {
    id: "C2Q073", theme: 2, type: "qcm", source: "C 25.02",
    question: "Lors du dételage, par quel côté commence-t-on au contraire la fermeture des robinets CG et CP ?",
    choices: [
      "Par celui ou ceux situés du côté de l'engin moteur.",
      "Par celui ou ceux situés du côté opposé à l'engin moteur."
    ],
    correct: 0
  },

  {
    id: "C2Q074", theme: 2, type: "qcm", source: "C 25.02",
    question: "Lors d'un secours, après arrivée de l'engin moteur de secours, deux engins comportent chacun leur conducteur. Les règles déterminant lequel des conducteurs réalise l'attelage cessent-elles de s'appliquer ?",
    choices: [
      "Oui, l'attelage est alors nécessairement effectué par le conducteur secourant.",
      "Non, les mêmes dispositions sont explicitement applicables."
    ],
    correct: 1
  },


  // =====================================================
  // C 26.01 — FROID / GEL / NEIGE / REDOUX
  // =====================================================

  {
    id: "C2Q075", theme: 2, type: "qcm", source: "C 26.01",
    question: "À partir de quelle situation les mesures préventives communes contre le froid sont-elles mises en œuvre à l'initiative du conducteur ?",
    choices: [
      "Dès que la température extérieure est égale ou inférieure à 0 °C.",
      "Uniquement lorsque du gel ou de la neige est effectivement constaté."
    ],
    correct: 0
  },

  {
    id: "C2Q076", theme: 2, type: "qcm", source: "C 26.01",
    question: "Le conducteur est commandé pour appliquer les mesures de protection contre le gel, mais le manuel de conduite ne comporte pas d'annexe 3. Quelle conduite est prévue ?",
    choices: [
      "Attendre des instructions particulières du PÔLE TRAIN.",
      "Appliquer les dispositions prévues par C 26.01 pour les opérations avant départ ou lors des arrêts."
    ],
    correct: 1
  },

  {
    id: "C2Q077", theme: 2, type: "qcm", source: "C 26.01",
    question: "Pendant une période de redoux, quelle mesure doit précéder la mise sous tension des moteurs de traction ?",
    choices: [
      "Mettre leurs ventilateurs en service pendant une dizaine de minutes.",
      "Maintenir les ventilateurs arrêtés jusqu'à la première mise en traction."
    ],
    correct: 0
  },

  {
    id: "C2Q078", theme: 2, type: "qcm", source: "C 26.01",
    question: "Les mesures de ventilation des moteurs de traction en période de redoux concernent-elles également l'essai de traction réalisé lors des opérations avant départ ?",
    choices: [
      "Non, elles ne concernent que la circulation en ligne.",
      "Oui."
    ],
    correct: 1
  },

  {
    id: "C2Q079", theme: 2, type: "qcm", source: "C 26.01",
    question: "En période de redoux, comment doit être réalisée la phase de décollage et de mise en vitesse ?",
    choices: [
      "Sans chercher à atteindre les intensités maximales.",
      "Avec une montée rapide aux intensités maximales afin de sécher les moteurs de traction."
    ],
    correct: 0
  },

  {
    id: "C2Q080", theme: 2, type: "qcm", source: "C 26.01",
    question: "En période de redoux, une disjonction vient de se produire. Quelle précaution particulière est prescrite lors de la reprise de traction ?",
    choices: [
      "Reprendre immédiatement l'intensité maximale si le disjoncteur tient.",
      "Ne pas tractionner au maximum possible."
    ],
    correct: 1
  }

];
