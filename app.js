const QUESTIONS = [
  {
    "id": "Q0001",
    "theme": 1,
    "type": "qcm",
    "question": "Un conducteur est arrêté devant un carré fermé. Il reçoit une autorisation de franchissement. Peu après son franchissement, il rencontre un second carré fermé. Que doit-il faire?",
    "options": [
      "Le franchir si aucune aiguille n’est rencontrée entre les deux carrés",
      "S’arrêter et obtenir une nouvelle autorisation pour ce second carré",
      "Le franchir également, l’autorisation restant valable jusqu’au prochain signal ouvert",
      "Le franchir en marche à vue si les deux carrés dépendent du même poste"
    ],
    "correct": 1,
    "article": "A 11.08"
  },
  {
    "id": "Q0002",
    "theme": 1,
    "type": "qcm",
    "question": "Après avoir été autorisé à franchir un signal fermé, dans quelles conditions le conducteur doit-il actionner le bouton FC?",
    "options": [
      "Dès réception de l’autorisation, même s’il est encore à plus de 100 m du signal",
      "À l’arrêt, à moins de 100 m du signal, dans les 60 secondes précédant son franchissement",
      "En marche, au moment précis du franchissement du signal",
      "À l’arrêt, à moins de 200 m du signal, sans contrainte de délai"
    ],
    "correct": 1,
    "article": "A 11.08"
  },
  {
    "id": "Q0003",
    "theme": 1,
    "type": "qcm",
    "question": "Un conducteur est arrêté devant un sémaphore de BAL fermé. Avant qu’il ne le franchisse, le sémaphore s’ouvre. Quelle règle s’applique?",
    "options": [
      "Il doit attendre trois minutes avant de reprendre sa marche",
      "Il peut reprendre sa marche en respectant l’indication désormais présentée par le signal",
      "Il doit attendre l’autorisation du régulateur avant de repartir",
      "Il doit tout de même appliquer les règles de franchissement du sémaphore fermé"
    ],
    "correct": 1,
    "article": "A 11.10"
  },
  {
    "id": "Q0004",
    "theme": 1,
    "type": "qcm",
    "question": "Plusieurs trains sont successivement arrêtés devant un sémaphore de BAPR fermé. Le signal s’ouvre après le passage du premier train. Quelle situation doit notamment envisager le conducteur du train suivant?",
    "options": [
      "Le signal doit obligatoirement se refermer avant son départ",
      "Le BAPR interdit que plusieurs trains soient arrêtés successivement devant le même sémaphore",
      "L’ouverture peut avoir été provoquée par le dégagement du canton par le train précédent",
      "Le signal ne peut s’être ouvert que pour son propre train"
    ],
    "correct": 2,
    "article": "A 11.11"
  },
  {
    "id": "Q0005",
    "theme": 1,
    "type": "qcm",
    "question": "Après s’être arrêté devant un signal à plaque de repérage Nf fermé, le conducteur doit effectuer une reconnaissance. Il ne parvient pas immédiatement à entrer en communication. Quelle est, en principe, la conduite prévue?",
    "options": [
      "Attendre dix minutes dans tous les cas",
      "Franchir le signal après deux minutes en marche à vue",
      "Attendre cinq minutes avant de renouveler sa tentative, sauf nécessité urgente de communiquer",
      "Repartir dès lors que le signal ne présente pas deux feux rouges"
    ],
    "correct": 2,
    "article": "A 11.05"
  },
  {
    "id": "Q0006",
    "theme": 1,
    "type": "qcm",
    "question": "Lors d’une vérification demandée avant le franchissement d’un signal fermé, le conducteur doit s’assurer de la position correcte d’une aiguille ou d’un cœur d’aiguille mobile. Quel est l’objectif de cette vérification?",
    "options": [
      "Vérifier uniquement la présence d’un dispositif de verrouillage",
      "S’assurer de sa position et de son application pour l’itinéraire à parcourir",
      "Vérifier uniquement que l’aiguille n’est pas talonnable",
      "Déterminer si l’aiguille est commandée depuis un poste ou localement"
    ],
    "correct": 1,
    "article": "A 11.07"
  },
  {
    "id": "Q0007",
    "theme": 1,
    "type": "qcm",
    "question": "Un conducteur rencontre un feu jaune clignotant précédant un ralentissement 60 fermé. Quelle information supplémentaire apporte le caractère clignotant par rapport à l’avertissement?",
    "options": [
      "La distance disponible permet de différer la mise en œuvre du freinage",
      "Le signal suivant peut être franchi sans tenir compte de son indication",
      "Le ralentissement 60 est obligatoirement ouvert",
      "La vitesse doit immédiatement être réduite à 60 km/h"
    ],
    "correct": 0,
    "article": "A 12.02"
  },
  {
    "id": "Q0008",
    "theme": 1,
    "type": "qcm",
    "question": "Un conducteur rencontre une bande lumineuse jaune horizontale. Quelle situation doit-il particulièrement prendre en compte?",
    "options": [
      "Il est dirigé vers une voie à quai particulièrement courte",
      "Il va circuler à contresens",
      "Il va obligatoirement rencontrer un TIV 30",
      "Il est dirigé vers une voie dont la distance disponible jusqu’au signal d’arrêt est réduite"
    ],
    "correct": 3,
    "article": "A 12.03"
  },
  {
    "id": "Q0009",
    "theme": 1,
    "type": "qcm",
    "question": "Un TIV fixe à distance de type ordinaire porte deux nombres correspondant à deux catégories de trains. Sur quoi le conducteur doit-il se baser pour déterminer la vitesse applicable?",
    "options": [
      "Sur la vitesse maximale de la ligne uniquement",
      "Sur la catégorie de son train et l’indication correspondante du tableau",
      "Toujours sur le nombre le plus faible",
      "Toujours sur le nombre placé en partie supérieure du tableau"
    ],
    "correct": 1,
    "article": "A 14.05"
  },
  {
    "id": "Q0010",
    "theme": 1,
    "type": "qcm",
    "question": "Après avoir rencontré un TIV à distance, à partir de quel point la limitation annoncée doit-elle être effectivement respectée?",
    "options": [
      "À partir du signal ou repère marquant le point où commence la limitation",
      "Uniquement après avoir rencontré un rappel 30 ou 60",
      "100 mètres après le TIV à distance",
      "Dès le franchissement du TIV à distance"
    ],
    "correct": 0,
    "article": "A 14.04"
  },
  {
    "id": "Q0011",
    "theme": 1,
    "type": "qcm",
    "question": "Un conducteur rencontre un TIDD annonçant une direction différente de celle qu’il doit normalement emprunter. Quelle doit être sa réaction?",
    "options": [
      "Prendre les dispositions nécessaires en vue de l’arrêt et appliquer les règles prévues face à cette discordance",
      "Attendre l’indicateur de direction suivant avant d’agir",
      "Considérer l’indication comme sans valeur puisque le TIDD n’est qu’un signal d’annonce",
      "Poursuivre normalement si le signal de protection de la bifurcation est ouvert"
    ],
    "correct": 0,
    "article": "A 15.02"
  },
  {
    "id": "Q0012",
    "theme": 1,
    "type": "qcm",
    "question": "Le train est prêt au départ et le signal correspondant est ouvert. Une plaque DD est présente. Quand le conducteur doit-il demander l’autorisation de mouvement?",
    "options": [
      "Lorsque le train est prêt et le signal ouvert, ou une minute avant l’heure prévue selon les conditions prévues",
      "Uniquement après l’heure théorique de départ",
      "Dès son arrivée en cabine, indépendamment de l’état du train",
      "Seulement lorsque le signal est fermé"
    ],
    "correct": 0,
    "article": "A 16.03"
  },
  {
    "id": "Q0013",
    "theme": 1,
    "type": "qcm",
    "question": "Quelle présentation correspond au signal lumineux d’autorisation de mouvement?",
    "options": [
      "Un signal lumineux mi-blanc, mi-vert clignotant",
      "Un feu vert clignotant",
      "Un feu blanc fixe",
      "Deux feux blancs disposés horizontalement"
    ],
    "correct": 0,
    "article": "A 16.02"
  },
  {
    "id": "Q0014",
    "theme": 1,
    "type": "qcm",
    "question": "Quel principe de base est utilisé pour assurer l’espacement des trains par cantonnement?",
    "options": [
      "Le cantonnement ne s’applique qu’aux lignes à voie unique",
      "Plusieurs trains peuvent occuper un même canton dès lors qu’ils circulent dans le même sens",
      "Chaque canton doit obligatoirement être délimité par deux gares",
      "La ligne est divisée en cantons et un seul train est normalement admis dans chaque canton"
    ],
    "correct": 3,
    "article": "A 10.02"
  },
  {
    "id": "Q0015",
    "theme": 1,
    "type": "qcm",
    "question": "En BAL, quelle longueur maximale de canton est indiquée comme principe général dans le référentiel?",
    "options": [
      "3 000 m dans tous les cas, sans exception",
      "2 800 m, avec possibilité d’atteindre exceptionnellement 3 000 m",
      "1 500 m, avec possibilité d’atteindre exceptionnellement 2 000 m",
      "Environ 6 km, comme en BAPR"
    ],
    "correct": 1,
    "article": "A 10.02"
  },
  {
    "id": "Q0016",
    "theme": 1,
    "type": "qcm",
    "question": "Sur une section où la circulation se fait normalement à gauche, où un signal à demeure est-il normalement implanté par rapport à la voie à laquelle il s’adresse?",
    "options": [
      "Indifféremment à gauche ou à droite sans repérage particulier",
      "À gauche de la voie ou au-dessus de celle-ci",
      "Toujours dans l’entrevoie, au ras du sol",
      "À droite de la voie uniquement"
    ],
    "correct": 1,
    "article": "A 10.04"
  },
  {
    "id": "Q0017",
    "theme": 1,
    "type": "qcm",
    "question": "Un signal est exceptionnellement implanté du côté opposé à son implantation normale en raison de circonstances locales. Quel dispositif permet d’identifier la voie concernée?",
    "options": [
      "Une flèche oblique blanche orientée vers la voie intéressée",
      "Une flèche verticale noire sur fond blanc",
      "Une plaque DD orientée vers la voie intéressée",
      "Un damier rouge et blanc placé sous le signal"
    ],
    "correct": 0,
    "article": "A 10.04"
  },
  {
    "id": "Q0018",
    "theme": 1,
    "type": "qcm",
    "question": "Qu’est-ce qui caractérise un signal « mobile » au sens du référentiel?",
    "options": [
      "Il peut présenter au moins deux aspects correspondant notamment aux positions ouvert et fermé",
      "Il change physiquement d’emplacement selon l’itinéraire tracé",
      "Il ne présente qu’un seul aspect, mais celui-ci peut clignoter",
      "Il est nécessairement mécanique et ne peut pas être lumineux"
    ],
    "correct": 0,
    "article": "A 10.05"
  },
  {
    "id": "Q0019",
    "theme": 1,
    "type": "qcm",
    "question": "Quelle association entre plaque de repérage et type de signal est correcte?",
    "options": [
      "La lettre GA identifie un sémaphore de BAPR",
      "La lettre F précède toujours le repérage d’un carré et PR celui d’un guidon d’arrêt",
      "La lettre C ou Cv précède le repérage d’un carré ou carré violet, et GA celui d’un guidon d’arrêt",
      "Les lettres C, Cv et GA sont des plaques de cantonnement et non de repérage"
    ],
    "correct": 2,
    "article": "A 10.06"
  },
  {
    "id": "Q0020",
    "theme": 1,
    "type": "qcm",
    "question": "Quelle plaque d’identification correspond à un panneau dont l’indication la plus impérative est un sémaphore de BAPR?",
    "options": [
      "Nf",
      "PR",
      "F",
      "BM"
    ],
    "correct": 1,
    "article": "A 10.07"
  },
  {
    "id": "Q0021",
    "theme": 1,
    "type": "qcm",
    "question": "Dans quel but certains carrés à plaque Nf portent-ils en plus une plaque de cantonnement?",
    "options": [
      "Pour permettre au conducteur de déterminer le mode de cantonnement vers lequel le signal est ouvert",
      "Pour indiquer la vitesse maximale autorisée dans le canton",
      "Pour identifier le numéro kilométrique du signal",
      "Pour remplacer la plaque d’identification lorsque le carré est ouvert"
    ],
    "correct": 0,
    "article": "A 10.08"
  },
  {
    "id": "Q0022",
    "theme": 1,
    "type": "qcm",
    "question": "Comment est normalement repérée l’approche d’un signal installé à demeure dont la visibilité est réduite?",
    "options": [
      "Par un feu blanc clignotant",
      "Par une pancarte DD",
      "Par des mirlitons",
      "Par un tableau REF"
    ],
    "correct": 2,
    "article": "A 10.09"
  },
  {
    "id": "Q0023",
    "theme": 1,
    "type": "qcm",
    "question": "Un signal lumineux annulé et non en service est rencontré. Quelle présentation est normalement utilisée?",
    "options": [
      "Une croix de Saint-André blanche, le signal n’étant normalement pas éclairé",
      "Une bande lumineuse jaune horizontale",
      "Un feu blanc fixe accompagné d’une plaque BM",
      "Un feu rouge clignotant avec plaque Nf"
    ],
    "correct": 0,
    "article": "A 10.10"
  },
  {
    "id": "Q0024",
    "theme": 1,
    "type": "qcm",
    "question": "La répétition en cabine d’un signal ne fonctionne pas. Quelle conséquence cela a-t-il sur l’obligation d’observer le signal au sol?",
    "options": [
      "Le conducteur doit s’arrêter systématiquement avant chaque signal jusqu’au rétablissement",
      "Le conducteur peut considérer le signal comme ouvert si aucune alarme n’est reçue",
      "La répétition en cabine prime sur l’observation du signal au sol",
      "Aucune : la sécurité repose essentiellement sur l’observation directe du signal"
    ],
    "correct": 3,
    "article": "A 10.11"
  },
  {
    "id": "Q0025",
    "theme": 1,
    "type": "qcm",
    "question": "Une signalisation temporaire improvisée de limitation de vitesse peut être abordée à plus de 40 km/h. Quelle disposition est prévue?",
    "options": [
      "Elle est précédée d’un repère d’approche",
      "Elle est obligatoirement précédée d’un feu rouge clignotant",
      "Elle ne nécessite aucun repérage si le conducteur a été avisé oralement",
      "Elle est précédée uniquement d’une pancarte POSTE"
    ],
    "correct": 0,
    "article": "A 10.12"
  },
  {
    "id": "Q0026",
    "theme": 1,
    "type": "qcm",
    "question": "Un panneau présente un seul feu rouge fixe. Quelle vérification le conducteur doit-il effectuer?",
    "options": [
      "Considérer systématiquement qu’il s’agit d’un sémaphore de BAL",
      "Considérer systématiquement qu’il s’agit d’un carré et effectuer une reconnaissance",
      "Déterminer s’il s’agit d’un sémaphore ou d’un carré dont un feu serait éteint",
      "Franchir le signal à 15 km/h sans autre vérification"
    ],
    "correct": 2,
    "article": "A 11.14"
  },
  {
    "id": "Q0027",
    "theme": 1,
    "type": "qcm",
    "question": "Quelle conduite est associée au franchissement d’un feu rouge clignotant?",
    "options": [
      "Poursuivre en marche normale jusqu’au signal suivant",
      "Marquer obligatoirement l’arrêt puis repartir à 30 km/h maximum",
      "S’avancer en marche en manœuvre sans dépasser 30 km/h",
      "S’avancer en marche à vue sans marquer l’arrêt, sans dépasser 15 km/h au franchissement du signal"
    ],
    "correct": 3,
    "article": "A 11.15"
  },
  {
    "id": "Q0028",
    "theme": 1,
    "type": "qcm",
    "question": "Après un TIV à distance de chantier, le conducteur est dirigé sur une branche non concernée par la LTV et rencontre un tableau blanc à flèche noire verticale. Quelle est sa signification pratique?",
    "options": [
      "Il impose l’arrêt avant l’aiguille suivante",
      "Il permet de reprendre la vitesse normale du train, sous réserve des autres restrictions applicables",
      "Il annonce une nouvelle limitation temporaire plus restrictive",
      "Il impose de maintenir la limitation annoncée jusqu’au prochain TIV d’exécution"
    ],
    "correct": 1,
    "article": "A 14.09"
  },
  {
    "id": "Q0029",
    "theme": 1,
    "type": "qcm",
    "question": "Sur un indicateur de direction lumineux, à quoi correspond habituellement le nombre de feux blancs présentés?",
    "options": [
      "Au numéro de voie de destination, compté à partir de la droite",
      "Au nombre d’aiguilles à franchir avant la bifurcation",
      "Au numéro d’ordre de la direction donnée, compté à partir de la gauche",
      "À la vitesse maximale autorisée sur l’itinéraire"
    ],
    "correct": 2,
    "article": "A 15.01"
  },
  {
    "id": "Q0030",
    "theme": 1,
    "type": "qcm",
    "question": "Un TIP présente le numéro de la voie sur laquelle se trouve le mouvement. Que peut faire le conducteur si rien ne s’y oppose par ailleurs?",
    "options": [
      "Franchir le chevron pointe en haut et effectuer le mouvement vers le signal de groupe, même si celui-ci est fermé",
      "Poursuivre jusqu’à la voie principale sans tenir compte du chevron",
      "Considérer que le signal de groupe est nécessairement ouvert pour sa voie",
      "Franchir automatiquement le signal de groupe fermé sans autre disposition"
    ],
    "correct": 0,
    "article": "A 18.03"
  },
  {
    "id": "Q0031",
    "theme": 1,
    "type": "qcm",
    "question": "Une zone doit être franchie pantographes abaissés. Quel signal repère l’origine de cette zone?",
    "options": [
      "Le signal « coupez courant » de fin de section",
      "Le tableau complémentaire d’indication de tension uniquement",
      "Le signal de fin de parcours « baissez panto »",
      "Le signal d’exécution « baissez panto »"
    ],
    "correct": 3,
    "article": "A 19.04"
  },
  {
    "id": "Q0032",
    "theme": 1,
    "type": "qcm",
    "question": "Quel est l’objectif principal de la signalisation « coupez courant »?",
    "options": [
      "Faire franchir certaines parties de caténaire sans consommation électrique du train, et le cas échéant sans freinage par récupération",
      "Autoriser le maintien de la traction à puissance réduite dans la section",
      "Imposer l’abaissement systématique de tous les pantographes sur la zone",
      "Signaler uniquement un changement de tension sans action sur la traction"
    ],
    "correct": 0,
    "article": "A 19.05"
  },
  {
    "id": "Q0033",
    "theme": 2,
    "type": "qcm",
    "question": "Un train va être engagé à contre-voie. Une autorisation de franchissement d’un signal d’arrêt lui a été donnée pendant le mouvement de manœuvre précédant son expédition. Cette autorisation vaut-elle autorisation de mouvement pour le départ à contre-voie?",
    "options": [
      "Oui, dans tous les cas",
      "Non, une autorisation de mouvement doit être délivrée séparément au moyen du signal prévu à cet effet",
      "Oui, si le signal franchi protège l’origine du parcours à contre-voie",
      "Non, sauf lorsque le mouvement est effectué en marche à vue"
    ],
    "correct": 1,
    "article": "A 24.02"
  },
  {
    "id": "Q0034",
    "theme": 2,
    "type": "qcm",
    "question": "Un conducteur circule à contre-voie et se trouve en tête du mouvement. Quelle règle de marche doit-il observer sur le parcours effectué à contre-voie?",
    "options": [
      "La marche à vue uniquement lorsque la vitesse dépasse 30 km/h",
      "La marche à vue sur tout le parcours",
      "La marche prudente",
      "La marche à vue uniquement à l’approche des PN"
    ],
    "correct": 1,
    "article": "A 24.03"
  },
  {
    "id": "Q0035",
    "theme": 2,
    "type": "qcm",
    "question": "Pendant une circulation à contre-voie, le dispositif de répétition réagit au franchissement d’un signal rencontré à revers. Que doit faire le conducteur?",
    "options": [
      "Ne pas acquitter afin de conserver l’information jusqu’à la sortie du parcours",
      "S’arrêter immédiatement et demander des instructions",
      "Acquitter et ne pas tenir compte de l’indication donnée par le dispositif",
      "Appliquer l’indication donnée par la répétition comme si le signal s’adressait à lui"
    ],
    "correct": 2,
    "article": "A 24.03"
  },
  {
    "id": "Q0036",
    "theme": 2,
    "type": "qcm",
    "question": "Lors d’une circulation à contre-voie, le conducteur n’est pas en tête du mouvement. Comment la circulation doit-elle être réalisée?",
    "options": [
      "Guidée par des signaux de manœuvre",
      "À 30 km/h maximum sans autre disposition",
      "Uniquement après fermeture de tous les PN du parcours",
      "En marche à vue sous la seule responsabilité du conducteur"
    ],
    "correct": 0,
    "article": "A 24.03"
  },
  {
    "id": "Q0037",
    "theme": 2,
    "type": "qcm",
    "question": "À la sortie d’un parcours à contre-voie, quelle condition est nécessaire pour sortir du parcours?",
    "options": [
      "Recevoir une autorisation de mouvement (AuM)",
      "Observer la marche à vue pendant cinq kilomètres supplémentaires",
      "Recevoir obligatoirement un ordre écrit",
      "Attendre obligatoirement l’ouverture d’un carré implanté à gauche"
    ],
    "correct": 0,
    "article": "A 24.04"
  },
  {
    "id": "Q0038",
    "theme": 2,
    "type": "qcm",
    "question": "Sur une IPCS, comment le conducteur est-il normalement préavisé qu’il va circuler à contresens?",
    "options": [
      "Par une dépêche systématique du régulateur, même si la signalisation est présentée",
      "Par la signalisation, sans autre préavis nécessaire",
      "Uniquement par les informations liées aux changements d’infrastructure",
      "Par un ordre écrit remis obligatoirement avant chaque entrée à contresens"
    ],
    "correct": 1,
    "article": "A 21.01"
  },
  {
    "id": "Q0039",
    "theme": 2,
    "type": "qcm",
    "question": "Une ITCS est annoncée dans les informations liées aux changements d’infrastructure. Entre les dates extrêmes indiquées, comment le conducteur constate-t-il sa mise en service effective?",
    "options": [
      "Par une autorisation verbale systématique de l’agent-circulation",
      "Uniquement par l’heure exacte mentionnée dans l’avis",
      "Par la présence d’un agent au sol à l’entrée de l’ITCS",
      "Par l’aspect de la signalisation présentée, les heures indiquées n’étant qu’indicatives"
    ],
    "correct": 3,
    "article": "A 21.02"
  },
  {
    "id": "Q0040",
    "theme": 2,
    "type": "qcm",
    "question": "Le TECS est présenté à l’entrée d’une ICS. Quelle information donne-t-il notamment au conducteur?",
    "options": [
      "Le parcours à contresens est terminé et les signaux reprennent leur implantation normale",
      "Le train est autorisé à s’engager à contresens et le côté d’implantation des signaux à observer change à partir du tableau",
      "Le train doit obligatoirement emprunter une aiguille en déviation",
      "Le conducteur doit s’arrêter avant de s’engager à contresens"
    ],
    "correct": 1,
    "article": "A 21.03"
  },
  {
    "id": "Q0041",
    "theme": 2,
    "type": "qcm",
    "question": "Sur une ITCS, quelle règle s’applique à la vitesse limite du train?",
    "options": [
      "Appliquer systématiquement la vitesse de la voie normalement utilisée par le train",
      "Prendre la plus basse des vitesses limites prévues pour le train sur l’une ou l’autre voie, sans dépasser 100 km/h",
      "Ne jamais dépasser 70 km/h, quelle que soit la section",
      "Appliquer la vitesse de la voie parcourue dans le sens normal, sans autre plafond"
    ],
    "correct": 1,
    "article": "A 21.04"
  },
  {
    "id": "Q0042",
    "theme": 2,
    "type": "qcm",
    "question": "À la sortie d’un parcours à contresens sur ICS, le TSCS n’est pas présenté. Comment le conducteur est-il informé de la fin du parcours?",
    "options": [
      "Par l’extinction du dernier sémaphore de contresens",
      "Verbalement",
      "Par la répétition en cabine du premier signal rencontré à gauche",
      "Par un ordre écrit obligatoire"
    ],
    "correct": 1,
    "article": "A 21.05"
  },
  {
    "id": "Q0043",
    "theme": 3,
    "type": "qcm",
    "question": "Qu’est-ce qu’un mouvement de manœuvre guidé au sens du référentiel?",
    "options": [
      "Un mouvement effectué sans intervention d’un chef de la manœuvre dès lors que l’engin est seul",
      "Tout déplacement d’un engin moteur effectué uniquement sur voie de service",
      "Un déplacement guidé par signaux de manœuvre, radio, etc., d’un ou plusieurs engins moteurs avec ou sans véhicules, sur une zone géographique limitée",
      "Un train circulant à vitesse réduite entre deux gares sans signal de manœuvre"
    ],
    "correct": 2,
    "article": "A 30.01"
  },
  {
    "id": "Q0044",
    "theme": 3,
    "type": "qcm",
    "question": "Sous l’autorité de qui un conducteur peut-il exécuter un mouvement de manœuvre guidé?",
    "options": [
      "Du conducteur lui-même dès lors qu’il observe directement la voie",
      "De l’aiguilleur uniquement, quel que soit le lieu du mouvement",
      "Du régulateur, qui devient automatiquement chef de la manœuvre",
      "D’un agent responsable désigné chef de la manœuvre"
    ],
    "correct": 3,
    "article": "A 31.01"
  },
  {
    "id": "Q0045",
    "theme": 3,
    "type": "qcm",
    "question": "Lors de mouvements de manœuvre guidés successifs sans changement de poste de conduite, quelle règle particulière s’applique à l’utilisation des pantographes?",
    "options": [
      "Utiliser systématiquement les deux pantographes pendant les refoulements",
      "Changer de pantographe à chaque inversion du sens de déplacement",
      "Abaisser tous les pantographes avant chaque changement de sens",
      "Utiliser le même pantographe quel que soit le sens du déplacement"
    ],
    "correct": 3,
    "article": "A 31.03"
  },
  {
    "id": "Q0046",
    "theme": 3,
    "type": "qcm",
    "question": "Un mouvement de manœuvre guidé emprunte une voie principale. Quelle règle de freinage s’applique?",
    "options": [
      "Le mouvement doit être freiné au frein continu",
      "Le frein continu n’est requis que si la rame comporte plus de cinq véhicules",
      "Le frein continu est interdit afin de conserver une réponse plus rapide au freinage",
      "Le seul frein de l’engin moteur est toujours suffisant sur voie principale"
    ],
    "correct": 0,
    "article": "A 31.04"
  },
  {
    "id": "Q0047",
    "theme": 3,
    "type": "qcm",
    "question": "Qui donne normalement les ordres de manœuvre au conducteur?",
    "options": [
      "Uniquement l’aiguilleur du poste dont dépend la zone",
      "Le conducteur choisit lui-même l’ordre adapté à la situation",
      "Le chef de la manœuvre ou l’agent qu’il a désigné",
      "Tout agent présent sur le chantier, sans désignation préalable"
    ],
    "correct": 2,
    "article": "A 32.01"
  },
  {
    "id": "Q0048",
    "theme": 3,
    "type": "qcm",
    "question": "Pendant un mouvement de manœuvre guidé effectué à la radio, peut-on utiliser la liaison radio « sol-trains » pour transmettre les ordres de manœuvre?",
    "options": [
      "Oui, dès lors que la liaison interphonique reste disponible",
      "Oui, elle est prioritaire sur la fréquence de manœuvre",
      "Oui, mais uniquement pour les ordres de refoulement",
      "Non, elle ne doit pas être utilisée pour l’exécution du mouvement de manœuvre guidé"
    ],
    "correct": 3,
    "article": "A 32.03"
  },
  {
    "id": "Q0049",
    "theme": 3,
    "type": "qcm",
    "question": "Quelle règle de marche s’applique à un mouvement de manœuvre guidé?",
    "options": [
      "La marche normale dès lors que le conducteur est en tête du mouvement",
      "Une vitesse maximale de 40 km/h, sans autre règle particulière",
      "La marche à vue, sans dépasser 50 km/h",
      "La marche en manœuvre, sans dépasser 30 km/h et en restant prêt à obéir aux signaux"
    ],
    "correct": 3,
    "article": "A 33.05"
  },
  {
    "id": "Q0050",
    "theme": 3,
    "type": "qcm",
    "question": "L’engin moteur est en tête d’un mouvement de manœuvre guidé. À qui incombe l’observation de la signalisation et des signaux de manœuvre?",
    "options": [
      "À l’agent placé en queue de rame",
      "À l’aiguilleur uniquement",
      "Au conducteur",
      "Au chef de la manœuvre dans tous les cas"
    ],
    "correct": 2,
    "article": "A 33.06"
  },
  {
    "id": "Q0051",
    "theme": 3,
    "type": "qcm",
    "question": "L’engin moteur refoule plusieurs véhicules lors d’un mouvement de manœuvre guidé. À qui incombe l’observation de la signalisation?",
    "options": [
      "Au chef de la manœuvre, ou à l’agent désigné selon les dispositions prévues",
      "Au conducteur, même s’il ne peut pas observer la voie",
      "Au régulateur par l’intermédiaire de la radio sol-trains",
      "À l’aiguilleur, quelle que soit la zone où se déroule le mouvement"
    ],
    "correct": 0,
    "article": "A 33.07"
  },
  {
    "id": "Q0052",
    "theme": 3,
    "type": "qcm",
    "question": "Le conducteur constate ou présume un fonctionnement défectueux de la liaison radio pendant une manœuvre. Quelle est sa première réaction?",
    "options": [
      "Attendre la reprise de la radio sans modifier le mouvement",
      "Poursuivre jusqu’au point prévu en réduisant la vitesse à 10 km/h",
      "S’arrêter immédiatement et solliciter les instructions du chef de la manœuvre",
      "Terminer systématiquement le refoulement en utilisant uniquement les rétroviseurs"
    ],
    "correct": 2,
    "article": "A 35.01"
  },
  {
    "id": "Q0053",
    "theme": 3,
    "type": "qcm",
    "question": "Au cours d’un mouvement de manœuvre guidé électrique, le conducteur constate une mise hors tension de la caténaire. Que doit-il faire?",
    "options": [
      "S’arrêter d’urgence, quels que soient les signaux de manœuvre qu’il pourrait percevoir",
      "Poursuivre jusqu’au prochain signal si celui-ci autorise le mouvement",
      "Attendre quelques secondes pour vérifier si la tension revient avant de freiner",
      "Abaisser le pantographe tout en poursuivant jusqu’au point initialement prévu"
    ],
    "correct": 0,
    "article": "A 35.03"
  },
  {
    "id": "Q0054",
    "theme": 4,
    "type": "qcm",
    "question": "Quelle caractéristique distingue les mouvements de manœuvre non guidés décrits dans le référentiel?",
    "options": [
      "Ce sont des circulations de parcours limités qui ne peuvent être assimilées ni aux mouvements de manœuvre guidés ni aux trains",
      "Ce sont des trains réguliers dont la vitesse est limitée à 30 km/h",
      "Ce sont uniquement des locomotives seules circulant sur voie de service",
      "Ce sont des mouvements obligatoirement guidés par radio mais sans chef de la manœuvre"
    ],
    "correct": 0,
    "article": "A 40.01"
  },
  {
    "id": "Q0055",
    "theme": 4,
    "type": "qcm",
    "question": "Quelles règles s’appliquent à la mise en marche d’un mouvement de manœuvre non guidé?",
    "options": [
      "Aucune autorisation n’est nécessaire dès lors que le conducteur est prêt",
      "Une autorisation verbale du chef de la manœuvre est toujours exigée",
      "Les règles des mouvements de manœuvre guidés, avec ordre « Tirez » obligatoire",
      "Les mêmes règles de mise en marche que celles des trains, selon les prescriptions visées par l’article"
    ],
    "correct": 3,
    "article": "A 42.02"
  },
  {
    "id": "Q0056",
    "theme": 4,
    "type": "qcm",
    "question": "Un mouvement de manœuvre non guidé refoule plus d’un véhicule. Quelle disposition s’applique concernant l’observation de la voie et de la signalisation?",
    "options": [
      "Il doit être guidé comme un mouvement de manœuvre guidé de refoulement",
      "Le conducteur peut utiliser les rétroviseurs quelle que soit la locomotive",
      "Le conducteur reste seul responsable depuis la cabine arrière, sans autre disposition",
      "Un agent d’accompagnement n’est nécessaire qu’au-delà de 30 km/h"
    ],
    "correct": 0,
    "article": "A 42.03"
  },
  {
    "id": "Q0057",
    "theme": 4,
    "type": "qcm",
    "question": "Un mouvement de manœuvre non guidé sur voie principale est freiné au frein continu marchandises. Quelle vitesse doit-il observer?",
    "options": [
      "La vitesse limite des trains MA 80 sans dépasser 50 km/h",
      "La vitesse limite des trains ME 100 sans dépasser 70 km/h",
      "La vitesse des MA 100 sans dépasser 80 km/h",
      "30 km/h dans tous les cas, même lorsque le conducteur est en tête"
    ],
    "correct": 0,
    "article": "A 42.04"
  },
  {
    "id": "Q0058",
    "theme": 4,
    "type": "qcm",
    "question": "Après un incident de frein, en pleine voie, la masse freinée restante d’un mouvement de manœuvre non guidé est au moins égale au freinage de dérive nécessaire. Quelle reprise de marche est prévue?",
    "options": [
      "Reprendre sans dépasser 20 km/h jusqu’à la première gare, avec les précautions prévues et adaptation des paramètres KVB",
      "Reprendre à la vitesse normale du train dès lors que le freinage de dérive est atteint",
      "Demander obligatoirement le secours même si le freinage de dérive reste assuré",
      "Reprendre à 30 km/h jusqu’à destination sans modifier les paramètres KVB"
    ],
    "correct": 0,
    "article": "A 43.01"
  },
  {
    "id": "Q0059",
    "theme": 5,
    "type": "qcm",
    "question": "Après avoir rencontré une pancarte « POSTE », aucun signal d’arrêt n’est présenté au repère d’entrée. Quelle conduite doit adopter le conducteur?",
    "options": [
      "Franchir le poste à la vitesse de la ligne si le signal de sortie est visible",
      "S’arrêter systématiquement au repère d’entrée",
      "Observer la marche à vue depuis le repère d’entrée et s’avancer jusqu’à pouvoir observer le signal de sortie",
      "Limiter sa vitesse à 30 km/h dès la pancarte POSTE et jusqu’à la gare suivante"
    ],
    "correct": 2,
    "article": "A 51.01"
  },
  {
    "id": "Q0060",
    "theme": 5,
    "type": "qcm",
    "question": "Après une pancarte « POSTE », le conducteur a acquis l’assurance que le signal de sortie est ouvert. Quelle règle reste applicable?",
    "options": [
      "S’arrêter au poste avant de poursuivre",
      "Reprendre immédiatement la vitesse de ligne",
      "Poursuivre à 30 km/h jusqu’au prochain signal de cantonnement",
      "Poursuivre en marche à vue jusqu’au franchissement du signal de sortie et ne pas dépasser 30 km/h sur l’aiguille de sortie"
    ],
    "correct": 3,
    "article": "A 51.01"
  },
  {
    "id": "Q0061",
    "theme": 6,
    "type": "qcm",
    "question": "Un circuit de voie est libre puis une circulation y engage ses essieux. Quel est le principe électrique utilisé pour détecter l’occupation?",
    "options": [
      "Les essieux shuntent les deux files de rails, le récepteur n’est plus alimenté et le relais de voie n’est plus excité",
      "Le conducteur déclenche manuellement l’occupation du circuit de voie depuis la cabine",
      "Le circuit de voie ne détecte l’occupation qu’après le franchissement du signal de sortie du canton",
      "Les essieux augmentent le courant reçu, ce qui excite davantage le relais de voie"
    ],
    "correct": 0,
    "article": "A 60.01"
  }
];
