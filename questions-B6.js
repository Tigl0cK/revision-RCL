const QUESTIONS_PARTIE_B6 = [

  // =====================================================
  // B 60.01 — MACHINES EN VÉHICULE
  // =====================================================

  {
    id: "B6Q001", theme: 6, type: "qcm", source: "B 60.01",
    question: "Hors secours ou détournement et à l'exception des trains de machines, combien de machines au maximum peuvent être acheminées en tête d'un train ?",
    choices: ["6.", "3."],
    correct: 0
  },

  {
    id: "B6Q002", theme: 6, type: "qcm", source: "B 60.01",
    question: "Une machine doit être acheminée en véhicule en tête mais ne figure pas au §4 du livret de lignes de la section. Quelle conduite tenir ?",
    choices: [
      "Solliciter des instructions auprès du PÔLE TRAIN et être renseigné par écrit ou par dépêche sur ses conditions de circulation.",
      "L'acheminement est interdit dans tous les cas."
    ],
    correct: 0
  },

  {
    id: "B6Q003", theme: 6, type: "qcm", source: "B 60.01",
    question: "En cas de nécessité telle que secours ou détournement, combien de machines peuvent être acheminées en véhicule en queue d'un train sur instruction du PÔLE TRAIN ?",
    choices: ["Une ou deux.", "Une seule."],
    correct: 0
  },

  {
    id: "B6Q004", theme: 6, type: "qcm", source: "B 60.01",
    question: "Une machine est acheminée en véhicule en queue d'un train dont la vitesse de catégorie est supérieure à celle des ME 100. Aucune limitation propre plus restrictive ne s'applique à cette machine. Quelle restriction est portée au bulletin de freinage ?",
    choices: [
      "Ne pas dépasser la vitesse des ME 100.",
      "Conserver la vitesse de la catégorie du train."
    ],
    correct: 0
  },

  {
    id: "B6Q005", theme: 6, type: "qcm", source: "B 60.01",
    question: "Une machine acheminée en véhicule en queue est limitée à une vitesse inférieure à celle des ME 100. Quelle limitation prévaut ?",
    choices: [
      "La vitesse propre plus restrictive indiquée au bulletin de freinage.",
      "La vitesse des ME 100."
    ],
    correct: 0
  },

  {
    id: "B6Q006", theme: 6, type: "qcm", source: "B 60.01",
    question: "Quel principe s'applique normalement au régime de frein d'une machine acheminée en véhicule ?",
    choices: [
      "Son frein continu est en action au même régime que celui du train.",
      "Une machine en véhicule est toujours freinée au régime M."
    ],
    correct: 0
  },

  {
    id: "B6Q007", theme: 6, type: "qcm", source: "B 60.01",
    question: "Quelle exception existe au principe selon lequel une machine en véhicule est freinée au même régime que le train ?",
    choices: [
      "Les trains de messageries freinés suivant le principe de la « Locomotive Longue ».",
      "Tous les trains de marchandises entièrement freinés au frein continu voyageurs."
    ],
    correct: 0
  },

  {
    id: "B6Q008", theme: 6, type: "qcm", source: "B 60.01",
    question: "Dans un train de messageries freiné suivant le principe de la « Locomotive Longue », à quel régime doivent être freinées les machines en véhicule placées derrière la ou les machines de remorque ?",
    choices: ["M.", "V."],
    correct: 0
  },

  {
    id: "B6Q009", theme: 6, type: "qcm", source: "B 60.01",
    question: "Pour un train de marchandises ou de messageries, la tare et la masse freinée d'une machine en véhicule interviennent-elles dans la détermination du freinage du train ?",
    choices: [
      "Oui, avec sa masse freinée au régime V ou M.",
      "Non, seule la masse freinée des véhicules remorqués est comptabilisée."
    ],
    correct: 0
  },

  {
    id: "B6Q010", theme: 6, type: "qcm", source: "B 60.01",
    question: "Le conducteur a l'assurance que les mesures concernant la mise en véhicule d'une machine placée en tête ont déjà été effectuées. Doit-il les reprendre systématiquement ?",
    choices: [
      "Non, il en est dispensé.",
      "Oui, elles doivent obligatoirement être reprises par le conducteur."
    ],
    correct: 0
  },

  {
    id: "B6Q011", theme: 6, type: "qcm", source: "B 60.01",
    question: "Pour une machine en véhicule placée en tête, quelle vérification au carnet de bord est notamment prévue ?",
    choices: [
      "Vérifier que les mesures techniques de mise en véhicule ont été prises et qu'aucune restriction d'utilisation ne s'oppose à l'acheminement.",
      "Vérifier uniquement la dernière opération de maintenance."
    ],
    correct: 0
  },

  {
    id: "B6Q012", theme: 6, type: "qcm", source: "B 60.01",
    question: "Une machine est acheminée en véhicule en queue. Pour déterminer la vitesse, quelle combinaison de limites doit être respectée ?",
    choices: [
      "La vitesse de la catégorie du train, sans dépasser celle des ME 100 ni l'éventuelle vitesse plus restrictive portée au bulletin de freinage.",
      "Uniquement la vitesse propre de la machine acheminée."
    ],
    correct: 0
  },


  // =====================================================
  // B 60.02 — UNITÉ MULTIPLE
  // =====================================================

  {
    id: "B6Q013", theme: 6, type: "qcm", source: "B 60.02",
    question: "Hors dérogation prévue aux documents de service, combien de machines en UM peuvent se trouver en tête d'un train ?",
    choices: ["Deux au maximum.", "Trois au maximum."],
    correct: 0
  },

  {
    id: "B6Q014", theme: 6, type: "qcm", source: "B 60.02",
    question: "Deux machines électriques fonctionnent en UM en tête et une autre UM électrique serait ajoutée ailleurs dans le corps du train. Est-ce normalement admis ?",
    choices: [
      "Non, le nombre de machines électriques fonctionnant en UM est limité à deux quelle que soit leur place dans le corps du train, sauf indication contraire au livret de lignes.",
      "Oui, la limite de deux ne concerne que les machines placées en tête."
    ],
    correct: 0
  },

  {
    id: "B6Q015", theme: 6, type: "qcm", source: "B 60.02",
    question: "Sur les machines fonctionnant en UM, quel régime de frein continu doit être utilisé ?",
    choices: [
      "Celui déterminé en fonction de la catégorie du train.",
      "Toujours le régime V."
    ],
    correct: 0
  },

  {
    id: "B6Q016", theme: 6, type: "qcm", source: "B 60.02",
    question: "Pour un train remorqué en UM, la vitesse de la machine menée peut-elle être ignorée si la machine menante est apte à la vitesse du train ?",
    choices: [
      "Non, la vitesse propre de chacune des machines intervient dans la détermination de la limite.",
      "Oui, seule la vitesse propre de la machine menante est prise en compte."
    ],
    correct: 0
  },

  {
    id: "B6Q017", theme: 6, type: "qcm", source: "B 60.02",
    question: "Outre les limites déjà applicables en simple traction, quelle autre contrainte peut réduire la vitesse d'un train remorqué en UM électrique ?",
    choices: [
      "Les règles relatives à l'utilisation des pantographes.",
      "Uniquement la masse remorquée."
    ],
    correct: 0
  },


  // =====================================================
  // B 60.03 — DOUBLE TRACTION
  // =====================================================

  {
    id: "B6Q018", theme: 6, type: "qcm", source: "B 60.03",
    question: "Hors dérogation prévue aux documents de service, combien de machines en double traction peuvent se trouver en tête d'un train ?",
    choices: ["Deux au maximum.", "Trois au maximum."],
    correct: 0
  },

  {
    id: "B6Q019", theme: 6, type: "qcm", source: "B 60.03",
    question: "La limitation à deux machines électriques fonctionnant en DT concerne-t-elle uniquement les machines placées en tête ?",
    choices: [
      "Non, elle s'applique quelle que soit leur place dans le corps du train, sauf indication contraire au livret de lignes.",
      "Oui."
    ],
    correct: 0
  },

  {
    id: "B6Q020", theme: 6, type: "qcm", source: "B 60.03",
    question: "Quel régime de frein continu doit être appliqué aux machines fonctionnant en DT ?",
    choices: [
      "Le régime déterminé en fonction de la catégorie du train.",
      "Toujours M, contrairement à l'UM."
    ],
    correct: 0
  },

  {
    id: "B6Q021", theme: 6, type: "qcm", source: "B 60.02 / B 60.03",
    question: "Concernant les critères de détermination de la vitesse limite, le référentiel établit-il une différence entre UM et DT ?",
    choices: [
      "Non : dans les deux cas interviennent notamment la vitesse propre de chaque machine, la composition du train et les règles relatives aux pantographes.",
      "Oui : les règles relatives aux pantographes ne concernent que l'UM."
    ],
    correct: 0
  },


  // =====================================================
  // B 60.04 — PLUSIEURS MACHINES :
  // DÉTERMINATION DE LA VITESSE LIMITE
  // =====================================================

  {
    id: "B6Q022", theme: 6, type: "qcm", source: "B 60.04",
    question: "Hors secours ou détournement, combien de machines au maximum peuvent se trouver en tête d'un train de marchandises ?",
    choices: ["6.", "3."],
    correct: 0
  },

  {
    id: "B6Q023", theme: 6, type: "qcm", source: "B 60.04",
    question: "Hors secours ou détournement, combien de machines au maximum peuvent se trouver en tête d'un train de messageries ?",
    choices: ["6.", "3."],
    correct: 1
  },

  {
    id: "B6Q024", theme: 6, type: "qcm", source: "B 60.04",
    question: "En traction thermique et en cas de nécessité, combien d'US ou d'UM peuvent être admises en traction dans le train ?",
    choices: ["3.", "2."],
    correct: 0
  },

  {
    id: "B6Q025", theme: 6, type: "qcm", source: "B 60.04",
    question: "Un train de marchandises comporte, en traction thermique et en cas de nécessité, trois US ou UM en traction. Ce seul fait entraîne-t-il une restriction de vitesse ?",
    choices: [
      "Non, mais une mention relative au nombre de machines en traction est portée au bulletin de freinage.",
      "Oui, il doit être limité à la vitesse des ME 100."
    ],
    correct: 0
  },

  {
    id: "B6Q026", theme: 6, type: "qcm", source: "B 60.04",
    question: "Un locotracteur est acheminé en véhicule en tête d'un train. Quelle restriction particulière s'applique ?",
    choices: [
      "Ne pas dépasser la vitesse des ME 100, sans dépasser l'éventuelle vitesse plus restrictive indiquée au bulletin de freinage.",
      "Ne pas dépasser systématiquement la vitesse des MA 90."
    ],
    correct: 0
  },

  {
    id: "B6Q027", theme: 6, type: "qcm", source: "B 60.04",
    question: "Un ME 120 comporte deux machines en tête. Du seul fait de leur nombre, sa vitesse doit-elle être réduite ?",
    choices: [
      "Non, la vitesse limite de sa catégorie reste applicable.",
      "Oui, il est limité à la vitesse des ME 100."
    ],
    correct: 0
  },

  {
    id: "B6Q028", theme: 6, type: "qcm", source: "B 60.04",
    question: "Un ME 120 comporte trois machines en tête. Quelle limitation résulte du nombre de machines ?",
    choices: [
      "Ne pas dépasser la vitesse des ME 100.",
      "La vitesse ME 120 reste applicable."
    ],
    correct: 0
  },

  {
    id: "B6Q029", theme: 6, type: "qcm", source: "B 60.04",
    question: "Un ME 120 comporte plus de trois machines en tête dans une situation où cette composition est admise. Quelle limitation liée au nombre de machines s'applique ?",
    choices: [
      "Ne pas dépasser la vitesse des ME 100.",
      "Ne pas dépasser la vitesse des MA 100."
    ],
    correct: 0
  },

  {
    id: "B6Q030", theme: 6, type: "qcm", source: "B 60.04",
    question: "Un ME 100 comporte trois machines en tête. Du seul fait de leur nombre, quelle vitesse peut-il conserver ?",
    choices: [
      "La vitesse des ME 100.",
      "Il doit être limité à la vitesse des MA 100."
    ],
    correct: 0
  },

  {
    id: "B6Q031", theme: 6, type: "qcm", source: "B 60.04",
    question: "Pour les indices MA 100, MA 90 et MA 80, le nombre de locomotives en tête entraîne-t-il à lui seul une réduction par rapport à la vitesse limite de la catégorie dans le tableau de B 60.04 ?",
    choices: [
      "Non.",
      "Oui, dès la troisième machine."
    ],
    correct: 0
  },

  {
    id: "B6Q032", theme: 6, type: "qcm", source: "B 60.04",
    question: "Pour déterminer la vitesse d'un train comportant plusieurs machines en tête, quelle règle générale s'applique aux différentes limitations rencontrées ?",
    choices: [
      "Retenir la plus basse des vitesses limites applicables.",
      "La limitation liée à la composition prime toujours sur les limitations propres aux machines."
    ],
    correct: 0
  },

  {
    id: "B6Q033", theme: 6, type: "qcm", source: "B 60.04",
    question: "Deux machines en tête sont chacune aptes à la vitesse de la catégorie du train, mais les règles relatives aux pantographes imposent une vitesse inférieure. Quelle vitesse doit être retenue ?",
    choices: [
      "La vitesse imposée par les règles relatives aux pantographes.",
      "La vitesse de la catégorie puisque les deux machines y sont aptes."
    ],
    correct: 0
  },


  // =====================================================
  // B 60.05 — POUSSE PAR UNE OU DEUX MACHINES
  // =====================================================

  {
    id: "B6Q034", theme: 6, type: "qcm", source: "B 60.05",
    question: "Deux machines participent à la pousse d'un même train. Peuvent-elles être non attelées entre elles ?",
    choices: [
      "Non, elles doivent être attelées entre elles.",
      "Oui, si la pousse elle-même est non attelée au train."
    ],
    correct: 0
  },

  {
    id: "B6Q035", theme: 6, type: "qcm", source: "B 60.05",
    question: "Une pousse prévue est mise en œuvre. Comment le conducteur de pousse en est-il avisé ?",
    choices: [
      "Par le tracé de service.",
      "Obligatoirement par écrit ou par dépêche."
    ],
    correct: 0
  },

  {
    id: "B6Q036", theme: 6, type: "qcm", source: "B 60.05",
    question: "Une pousse non prévue est mise en œuvre. Comment le conducteur de pousse doit-il en être avisé ?",
    choices: [
      "Par écrit ou par dépêche.",
      "Par le seul tracé de service."
    ],
    correct: 0
  },

  {
    id: "B6Q037", theme: 6, type: "qcm", source: "B 60.05",
    question: "Lorsque la pousse est attelée, quel régime doit être appliqué au frein continu des machines de pousse ?",
    choices: [
      "Le régime du train.",
      "Toujours le régime M."
    ],
    correct: 0
  },

  {
    id: "B6Q038", theme: 6, type: "qcm", source: "B 60.05",
    question: "Un train composé de matériel du parc ordinaire est en pousse attelée. Le conducteur de tête a la commande normale du frein et une liaison radio en phonie existe entre les conducteurs de tête et de queue. Quelle vitesse liée à la pousse ne doit pas être dépassée ?",
    choices: ["100 km/h.", "80 km/h."],
    correct: 0
  },

  {
    id: "B6Q039", theme: 6, type: "qcm", source: "B 60.05",
    question: "Dans la même situation de pousse attelée, la liaison radio en phonie entre tête et queue est absente. Quelle vitesse liée à la pousse ne doit pas être dépassée ?",
    choices: ["100 km/h.", "80 km/h."],
    correct: 1
  },

  {
    id: "B6Q040", theme: 6, type: "qcm", source: "B 60.05",
    question: "En pousse attelée, le conducteur de tête n'a pas la commande normale du frein. Comment le mouvement doit-il être guidé ?",
    choices: [
      "Comme un mouvement de manœuvre guidé de refoulement.",
      "Comme un train en pousse non attelée."
    ],
    correct: 0
  },

  {
    id: "B6Q041", theme: 6, type: "qcm", source: "B 60.05",
    question: "En pousse attelée sans commande normale du frein par le conducteur de tête, quelle vitesse maximale est prévue, hors restriction plus sévère des documents techniques ?",
    choices: ["30 km/h.", "60 km/h."],
    correct: 0
  },

  {
    id: "B6Q042", theme: 6, type: "qcm", source: "B 60.05",
    question: "En pousse attelée sans commande normale du frein, les signaux de l'agent placé en tête ne sont plus perçus. À quelle condition peut-on continuer à pousser les véhicules à la vitesse d'un homme au pas ?",
    choices: [
      "L'agent de tête doit disposer d'un robinet d'urgence.",
      "Une liaison radio en phonie doit obligatoirement rester disponible."
    ],
    correct: 0
  },

  {
    id: "B6Q043", theme: 6, type: "qcm", source: "B 60.05",
    question: "Un train composé de matériel du parc ordinaire est poussé par une ou deux machines en pousse non attelée. Quelle vitesse liée à la pousse ne doit pas être dépassée ?",
    choices: ["60 km/h.", "80 km/h."],
    correct: 0
  },

  {
    id: "B6Q044", theme: 6, type: "qcm", source: "B 60.05",
    question: "Une pousse attelée dispose d'une liaison radio en phonie et autoriserait 100 km/h selon la seule règle de pousse, mais la machine de pousse est limitée à 90 km/h. Quelle vitesse maximale peut résulter de ces deux contraintes ?",
    choices: ["90 km/h.", "100 km/h."],
    correct: 0
  },

  {
    id: "B6Q045", theme: 6, type: "qcm", source: "B 60.05",
    question: "Une pousse attelée sans liaison radio en phonie est réalisée avec une machine apte à 100 km/h. La seule aptitude de la machine permet-elle de circuler à 100 km/h ?",
    choices: [
      "Non, la limitation liée à l'absence de liaison radio reste applicable.",
      "Oui, la vitesse propre de la machine prime sur la règle de pousse."
    ],
    correct: 0
  },


  // =====================================================
  // B 60.06 — POUSSE PAR UN AUTRE TRAIN
  // =====================================================

  {
    id: "B6Q046", theme: 6, type: "qcm", source: "B 60.06",
    question: "Lorsqu'un train en détresse est poussé par un autre train pour dégager les voies principales, les deux trains doivent-ils normalement être attelés ?",
    choices: [
      "Oui.",
      "Non, une pousse par un autre train est normalement non attelée."
    ],
    correct: 0
  },

  {
    id: "B6Q047", theme: 6, type: "qcm", source: "B 60.06",
    question: "Dans quel cas la règle imposant l'attelage entre le train secouru et le train qui pousse peut-elle ne pas être appliquée ?",
    choices: [
      "Lorsqu'il s'agit simplement d'aider au démarrage.",
      "Dès lors que le parcours de pousse reste inférieur à un kilomètre."
    ],
    correct: 0
  },

  {
    id: "B6Q048", theme: 6, type: "qcm", source: "B 60.06",
    question: "L'aide au démarrage sans attelage dispense-t-elle les conducteurs des prescriptions réglementaires de demande et de fourniture du secours ?",
    choices: [
      "Non.",
      "Oui, puisqu'il ne s'agit pas d'un secours avec attelage."
    ],
    correct: 0
  },

  {
    id: "B6Q049", theme: 6, type: "qcm", source: "B 60.06",
    question: "Jusqu'où peut se poursuivre l'aide au démarrage par un autre train ?",
    choices: [
      "Jusqu'au point où le train secouru peut se dispenser de l'assistance, sur un parcours limité à quelques centaines de mètres.",
      "Jusqu'à la première gare, à condition de ne pas dépasser 30 km/h."
    ],
    correct: 0
  },

  {
    id: "B6Q050", theme: 6, type: "qcm", source: "B 60.06",
    question: "Lorsqu'un autre train assure la pousse, comment le conducteur de pousse en est-il avisé ?",
    choices: [
      "Par écrit ou par dépêche.",
      "Par le tracé de service s'il s'agit d'un secours prévu."
    ],
    correct: 0
  },

  {
    id: "B6Q051", theme: 6, type: "qcm", source: "B 60.06",
    question: "Lorsqu'un train en détresse est poussé par un autre train, quel principe s'applique au frein continu des deux trains ?",
    choices: [
      "Il reste en action sur les deux trains au régime de freinage déterminé avant l'incident.",
      "Le train assurant la pousse doit être placé au même régime que le train secouru."
    ],
    correct: 0
  },

  {
    id: "B6Q052", theme: 6, type: "qcm", source: "B 60.06",
    question: "Un train est poussé, attelé, par un autre train. Le conducteur de tête dispose de la commande normale du frein et la composition ne relève pas du cas particulier autocoupleur central intégral / attelage ordinaire. Quelle vitesse liée à cette pousse ne doit pas être dépassée ?",
    choices: ["30 km/h.", "60 km/h."],
    correct: 0
  },

  {
    id: "B6Q053", theme: 6, type: "qcm", source: "B 60.06",
    question: "Un train automoteur équipé d'un autocoupleur central intégral est en pousse attelée avec un matériel muni de l'attelage ordinaire. Le conducteur de tête a la commande normale du frein. La limitation forfaitaire à 30 km/h de B 60.06 s'applique-t-elle directement ?",
    choices: [
      "Non, il faut appliquer B 20.02.",
      "Oui, comme pour toute pousse attelée par un autre train."
    ],
    correct: 0
  },

  {
    id: "B6Q054", theme: 6, type: "qcm", source: "B 60.06",
    question: "Un train est poussé par un autre train et le conducteur de tête n'a pas la commande normale du frein. Comment le mouvement doit-il être guidé ?",
    choices: [
      "Comme un mouvement de manœuvre guidé de refoulement.",
      "Comme une pousse non attelée ordinaire."
    ],
    correct: 0
  },

  {
    id: "B6Q055", theme: 6, type: "qcm", source: "B 60.06",
    question: "Dans une pousse par un autre train, le conducteur de tête n'a pas la commande normale du frein. Quelle vitesse ne doit pas être dépassée, hors restrictions plus sévères prévues aux documents techniques ?",
    choices: ["30 km/h.", "20 km/h."],
    correct: 0
  },

  {
    id: "B6Q056", theme: 6, type: "qcm", source: "B 60.06",
    question: "Dans cette même situation, les signaux faits par l'agent placé en tête ne sont plus perçus. Quelle condition permet de pousser les véhicules à la vitesse d'un homme au pas ?",
    choices: [
      "L'agent de tête dispose d'un robinet d'urgence.",
      "Les deux trains restent attelés."
    ],
    correct: 0
  },

  {
    id: "B6Q057", theme: 6, type: "qcm", source: "B 60.06",
    question: "Un autre train assure une pousse non attelée. Quelle vitesse maximale liée à cette situation est prévue ?",
    choices: ["30 km/h.", "60 km/h."],
    correct: 0
  },


  // =====================================================
  // QUESTIONS CROISÉES — DIFFÉRENCES FINES
  // =====================================================

  {
    id: "B6Q058", theme: 6, type: "qcm", source: "B 60.05 / B 60.06",
    question: "Quelle différence de vitesse existe, pour du matériel du parc ordinaire, entre une pousse non attelée par une ou deux machines de pousse et une pousse non attelée par un autre train ?",
    choices: [
      "60 km/h dans le premier cas, 30 km/h dans le second.",
      "30 km/h dans les deux cas."
    ],
    correct: 0
  },

  {
    id: "B6Q059", theme: 6, type: "qcm", source: "B 60.05 / B 60.06",
    question: "Une pousse attelée par une machine de pousse et une pousse attelée par un autre train sont-elles soumises à la même limite lorsque le conducteur de tête dispose de la commande normale du frein ?",
    choices: [
      "Non : les règles de vitesse diffèrent selon qu'il s'agit d'une machine de pousse ou d'un autre train.",
      "Oui : toute pousse attelée est limitée à 30 km/h."
    ],
    correct: 0
  },

  {
    id: "B6Q060", theme: 6, type: "qcm", source: "B 60.05",
    question: "Avec commande normale du frein par le conducteur de tête, quel élément fait passer la limite liée à une pousse attelée de matériel du parc ordinaire de 100 km/h à 80 km/h ?",
    choices: [
      "L'absence de liaison radio en phonie entre les conducteurs de tête et de queue.",
      "La présence de deux machines de pousse au lieu d'une."
    ],
    correct: 0
  },

  {
    id: "B6Q061", theme: 6, type: "qcm", source: "B 60.01 / B 60.04",
    question: "Un train comporte plusieurs machines en véhicule en tête. Pour déterminer la restriction résultant de leur nombre et de la composition, quel article doit être appliqué ?",
    choices: [
      "B 60.04.",
      "B 60.05."
    ],
    correct: 0
  },

  {
    id: "B6Q062", theme: 6, type: "qcm", source: "B 60.01",
    question: "Une machine est acheminée en véhicule en queue d'un train. La limitation résultant de sa position est-elle déterminée par le même mécanisme que pour plusieurs machines en tête ?",
    choices: [
      "Non : en queue, la vitesse de la catégorie ne doit notamment pas dépasser celle des ME 100 ni l'éventuelle restriction portée au bulletin.",
      "Oui : B 60.04 s'applique de la même manière quelle que soit la position de la machine."
    ],
    correct: 0
  },

  {
    id: "B6Q063", theme: 6, type: "qcm", source: "B 60.02 / B 60.03",
    question: "Concernant le freinage, une machine en UM et une machine en DT sont-elles soumises à des principes différents ?",
    choices: [
      "Non, dans les deux cas le frein continu est en action au régime déterminé selon la catégorie du train.",
      "Oui, l'UM est au régime V tandis que la DT est au régime du train."
    ],
    correct: 0
  },

  {
    id: "B6Q064", theme: 6, type: "qcm", source: "B 60.05 / B 60.06",
    question: "Dans quel cas le référentiel prévoit explicitement qu'une pousse peut ne pas être attelée sur seulement quelques centaines de mètres afin d'aider un train à démarrer ?",
    choices: [
      "Lorsqu'un autre train participe au décollage et à la mise en vitesse du train secouru.",
      "Uniquement lorsqu'une machine de pousse prévue au tracé de service assure la pousse."
    ],
    correct: 0
  },

  {
    id: "B6Q065", theme: 6, type: "qcm", source: "B 60.04",
    question: "Un ME 120 passe de deux à trois machines en tête. Toutes les machines sont individuellement aptes à 120 km/h. Quelle conséquence peut malgré tout résulter de ce seul changement de composition ?",
    choices: [
      "La vitesse est limitée à celle des ME 100.",
      "Aucune : l'aptitude individuelle des machines permet de conserver la vitesse ME 120."
    ],
    correct: 0
  },

  {
    id: "B6Q066", theme: 6, type: "qcm", source: "B 60.04",
    question: "Un MA 100 passe de deux à trois machines en tête. Toutes les autres conditions sont satisfaites. Le même abaissement de catégorie que pour un ME 120 à trois machines s'applique-t-il ?",
    choices: [
      "Non, le tableau B 60.04 maintient la vitesse limite de la catégorie MA 100 quel que soit le nombre de locomotives en tête.",
      "Oui, il doit être limité à la vitesse des MA 90."
    ],
    correct: 0
  }

];
