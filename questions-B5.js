const QUESTIONS_PARTIE_B5 = [

  // =====================================================
  // B 50.01 — HLP : DISPOSITIONS GÉNÉRALES
  // =====================================================

  {
    id: "B5Q001", theme: 5, type: "qcm", source: "B 50.01",
    question: "Un groupe de deux machines, dont l'une est acheminée en véhicule, relève-t-il encore de la catégorie HLP ?",
    choices: [
      "Oui.",
      "Non, la présence d'une machine en véhicule impose le classement en train de machines."
    ],
    correct: 0
  },

  {
    id: "B5Q002", theme: 5, type: "qcm", source: "B 50.01",
    question: "Une troisième machine est ajoutée à un groupe de deux machines HLP. Quelle conséquence cela entraîne-t-il sur son classement ?",
    choices: [
      "Il reste HLP si la troisième machine est acheminée en véhicule.",
      "Il relève des règles des trains de machines."
    ],
    correct: 1
  },

  {
    id: "B5Q003", theme: 5, type: "qcm", source: "B 50.01",
    question: "Un HLP peut-il remorquer deux véhicules sans perdre sa qualité de HLP ?",
    choices: [
      "Oui.",
      "Non, l'adjonction du deuxième véhicule entraîne son classement en train de messageries."
    ],
    correct: 0
  },

  {
    id: "B5Q004", theme: 5, type: "qcm", source: "B 50.01",
    question: "Une machine HLP remorque un ou plusieurs éléments automoteurs. Cette composition est-elle prévue par B 50.01 ?",
    choices: [
      "Non, seuls un ou deux véhicules ordinaires peuvent être remorqués par un HLP.",
      "Oui."
    ],
    correct: 1
  },

  {
    id: "B5Q005", theme: 5, type: "qcm", source: "B 50.01",
    question: "Un groupe de deux machines HLP ne remorque aucun véhicule. Un bulletin de freinage doit-il normalement être établi ?",
    choices: [
      "Non.",
      "Oui, dès qu'un HLP est constitué de deux machines."
    ],
    correct: 0
  },

  {
    id: "B5Q006", theme: 5, type: "qcm", source: "B 50.01",
    question: "Un véhicule est ajouté à un HLP. Quelle conséquence cela entraîne-t-il concernant le bulletin de freinage ?",
    choices: [
      "Un bulletin de freinage doit être remis au conducteur avec les informations nécessaires à la détermination de la vitesse limite.",
      "Le bulletin de freinage reste inutile tant que le HLP ne remorque pas plus de deux véhicules."
    ],
    correct: 0
  },

  {
    id: "B5Q007", theme: 5, type: "qcm", source: "B 50.01",
    question: "Un HLP sans véhicule remorqué achemine un locotracteur en véhicule. L'absence habituelle de bulletin de freinage pour un HLP sans véhicule remorqué s'applique-t-elle ?",
    choices: [
      "Oui, puisqu'un locotracteur est un engin moteur et non un véhicule remorqué.",
      "Non, un bulletin de freinage est établi."
    ],
    correct: 1
  },

  {
    id: "B5Q008", theme: 5, type: "qcm", source: "B 50.01",
    question: "Un locotracteur est acheminé en véhicule dans un HLP. Quelle information particulière doit figurer au bulletin de freinage si elle est inférieure à 100 km/h ?",
    choices: [
      "La vitesse limite à ne pas dépasser.",
      "La vitesse maximale de la machine de remorque uniquement."
    ],
    correct: 0
  },

  {
    id: "B5Q009", theme: 5, type: "qcm", source: "B 50.01",
    question: "Pour l'application des règles de freinage d'un HLP, comment un locotracteur est-il considéré ?",
    choices: [
      "Comme équipé du frein continu marchandises.",
      "Comme équipé du frein continu voyageurs."
    ],
    correct: 1
  },

  {
    id: "B5Q010", theme: 5, type: "qcm", source: "B 50.01",
    question: "Un HLP ne remorquant aucun véhicule est normalement freiné selon quelles règles ?",
    choices: [
      "Dans les mêmes conditions que les ME 100.",
      "Dans les mêmes conditions que les MA 100."
    ],
    correct: 0
  },

  {
    id: "B5Q011", theme: 5, type: "qcm", source: "B 50.01",
    question: "Le freinage d'une machine HLP ne permet pas de satisfaire aux règles des ME 100. Quelle conséquence en tire-t-on ?",
    choices: [
      "La circulation HLP est interdite.",
      "Sa vitesse est limitée à celle correspondant à l'indice de composition pour lequel les règles de freinage sont satisfaites."
    ],
    correct: 1
  },

  {
    id: "B5Q012", theme: 5, type: "qcm", source: "B 50.01",
    question: "Sur une ligne à fortes pentes, une machine HLP n'est pas équipée du FAMAD. Sa circulation est-elle admise en ne prenant simplement pas sa masse freinée en compte ?",
    choices: [
      "Non, la circulation d'une machine HLP non équipée du FAMAD y est interdite.",
      "Oui, à condition de satisfaire par ailleurs aux conditions de freinage."
    ],
    correct: 0
  },

  {
    id: "B5Q013", theme: 5, type: "qcm", source: "B 50.01",
    question: "Un HLP remorque un véhicule ne possédant que le frein continu marchandises. Ce frein peut-il être utilisé pour réaliser le freinage normal du HLP ?",
    choices: [
      "Non, tous les véhicules remorqués par un HLP doivent obligatoirement être freinés au frein continu voyageurs.",
      "Oui."
    ],
    correct: 1
  },

  {
    id: "B5Q014", theme: 5, type: "qcm", source: "B 50.01",
    question: "Un HLP remorquant un ou deux véhicules satisfait normalement aux règles de freinage. Sur quelle position place-t-on le changement de régime de frein de la ou des machines ?",
    choices: ["V.", "M."],
    correct: 0
  },

  {
    id: "B5Q015", theme: 5, type: "qcm", source: "B 50.01",
    question: "Un HLP sans véhicule remorqué circule sans bulletin de freinage. Quelle inscription de masse freinée doit être vérifiée selon le cas pour la ou les machines ?",
    choices: [
      "V+E ou V.",
      "M uniquement."
    ],
    correct: 0
  },

  {
    id: "B5Q016", theme: 5, type: "qcm", source: "B 50.01",
    question: "Pour un HLP sans véhicule remorqué et correctement freiné, le code HLP ne figure pas au §3 du livret de lignes. Quelle référence est alors utilisée pour la vitesse ?",
    choices: [
      "ME 100 ou, à défaut, l'indice de composition inférieur le plus proche.",
      "MA 100 dans tous les cas."
    ],
    correct: 0
  },

  {
    id: "B5Q017", theme: 5, type: "qcm", source: "B 50.01",
    question: "Un HLP remorque un ou deux véhicules pouvant entrer dans la composition des ME 100 et est correctement freiné. Quelle référence détermine sa vitesse ?",
    choices: [
      "Le code HLP dans tous les cas.",
      "L'indice de composition inscrit sur le bulletin de freinage, complété le cas échéant par une restriction figurant dans les observations."
    ],
    correct: 1
  },


  // =====================================================
  // B 50.02 — HLP : CAS EXCEPTIONNELS ET INCIDENTS
  // =====================================================

  {
    id: "B5Q018", theme: 5, type: "qcm", source: "B 50.02",
    question: "Un véhicule ajouté à un HLP est limité à une vitesse inférieure à celle de la machine. Comment cette particularité est-elle traitée ?",
    choices: [
      "Une restriction de vitesse est portée au bulletin de freinage.",
      "Le HLP est automatiquement reclassé MA 100."
    ],
    correct: 0
  },

  {
    id: "B5Q019", theme: 5, type: "qcm", source: "B 50.02",
    question: "L'isolement du seul freinage électrique d'une machine HLP peut-il conduire à considérer que les règles normales de freinage ne sont plus satisfaites ?",
    choices: [
      "Oui.",
      "Non, seul l'isolement du frein pneumatique est pris en compte."
    ],
    correct: 0
  },

  {
    id: "B5Q020", theme: 5, type: "qcm", source: "B 50.02",
    question: "À la suite d'un incident, le freinage d'un HLP ne satisfait plus aux conditions de B 50.01. Selon quelle logique sa vitesse est-elle redéterminée ?",
    choices: [
      "Il est freiné comme un MA 100, MA 90 ou MA 80 selon les conditions de freinage réalisées.",
      "Il est systématiquement freiné comme un MA 80."
    ],
    correct: 0
  },

  {
    id: "B5Q021", theme: 5, type: "qcm", source: "B 50.02",
    question: "Après isolement partiel du frein d'un engin moteur d'un HLP, quelle masse freinée de cet engin est prise en compte ?",
    choices: [
      "La moitié de sa masse freinée sur V.",
      "La totalité de sa masse freinée sur M."
    ],
    correct: 0
  },

  {
    id: "B5Q022", theme: 5, type: "qcm", source: "B 50.02",
    question: "Le freinage électrique d'un engin moteur d'un HLP est isolé. Quelle masse freinée de cet engin doit être retenue pour la vérification après incident ?",
    choices: [
      "Sa masse freinée V+E.",
      "Sa masse freinée V."
    ],
    correct: 1
  },

  {
    id: "B5Q023", theme: 5, type: "qcm", source: "B 50.02",
    question: "Après un incident de frein sur un HLP, la masse freinée restante demeure au moins égale à la masse freinée nécessaire. Quelle vitesse doit être respectée ?",
    choices: [
      "La vitesse déterminée avant l'incident.",
      "La vitesse des MA 100."
    ],
    correct: 0
  },

  {
    id: "B5Q024", theme: 5, type: "qcm", source: "B 50.02",
    question: "Après un incident de frein sur un HLP, la masse freinée restante est insuffisante pour conserver les conditions initiales. Quelle démarche est prévue ?",
    choices: [
      "Déterminer la vitesse correspondant au freinage effectivement réalisé en recherchant la catégorie dont les règles sont satisfaites.",
      "Appliquer directement une limitation à 20 km/h."
    ],
    correct: 0
  },

  {
    id: "B5Q025", theme: 5, type: "qcm", source: "B 50.02",
    question: "Un HLP abandonne une partie de son train et le frein ne fonctionne plus sur au moins un véhicule restant. Quelle vérification doit être reprise ?",
    choices: [
      "La détermination de la vitesse limite après incident de frein.",
      "Uniquement la détermination de la nouvelle longueur du train."
    ],
    correct: 0
  },


  // =====================================================
  // B 51.01 — TRAIN DE MACHINES : DISPOSITIONS GÉNÉRALES
  // =====================================================

  {
    id: "B5Q026", theme: 5, type: "qcm", source: "B 51.01",
    question: "À partir de combien de machines un groupe est-il désigné « train de machines » ?",
    choices: [
      "À partir de trois machines.",
      "À partir de deux machines."
    ],
    correct: 0
  },

  {
    id: "B5Q027", theme: 5, type: "qcm", source: "B 51.01",
    question: "Sauf disposition plus restrictive du livret de lignes, combien de machines peut comporter au maximum un train de machines ?",
    choices: ["13.", "12."],
    correct: 0
  },

  {
    id: "B5Q028", theme: 5, type: "qcm", source: "B 51.01",
    question: "Un train de machines comporte 13 machines. Cette composition est-elle admise en l'absence de disposition plus restrictive au livret de lignes ?",
    choices: ["Oui.", "Non, la limite est de 12 machines."],
    correct: 0
  },

  {
    id: "B5Q029", theme: 5, type: "qcm", source: "B 51.01",
    question: "Combien de locotracteurs en véhicule peuvent être incorporés dans un train de machines ?",
    choices: [
      "Jusqu'à 6.",
      "Jusqu'à 2."
    ],
    correct: 0
  },

  {
    id: "B5Q030", theme: 5, type: "qcm", source: "B 51.01",
    question: "Un train de machines achemine plusieurs locotracteurs en véhicule. Quelle conséquence cela entraîne-t-il concernant le bulletin de freinage ?",
    choices: [
      "Le numéro du ou des locotracteurs y est indiqué ainsi que leur éventuelle vitesse limite inférieure à 100 km/h.",
      "Aucune mention particulière n'est nécessaire tant que le maximum de six locotracteurs est respecté."
    ],
    correct: 0
  },

  {
    id: "B5Q031", theme: 5, type: "qcm", source: "B 51.01",
    question: "Un train de machines peut-il remorquer un ou plusieurs éléments automoteurs en queue ?",
    choices: [
      "Oui.",
      "Non, un train de machines ne peut comporter que des engins moteurs isolés."
    ],
    correct: 0
  },

  {
    id: "B5Q032", theme: 5, type: "qcm", source: "B 51.01",
    question: "Un train de machines peut-il remorquer en queue un ou plusieurs autorails, avec ou sans remorques ?",
    choices: ["Oui.", "Non."],
    correct: 0
  },

  {
    id: "B5Q033", theme: 5, type: "qcm", source: "B 51.01",
    question: "Selon quelles conditions un train de machines est-il normalement freiné ?",
    choices: [
      "Selon les conditions des ME 100.",
      "Selon les conditions des MA 100."
    ],
    correct: 0
  },

  {
    id: "B5Q034", theme: 5, type: "qcm", source: "B 51.01",
    question: "Une machine d'un train de machines ne permet pas de respecter les règles de freinage des ME 100. Quelle conséquence est prévue ?",
    choices: [
      "La vitesse du train doit être limitée à celle correspondant à l'indice pour lequel les règles de freinage sont satisfaites.",
      "Le train de machines doit obligatoirement être supprimé et les machines acheminées séparément."
    ],
    correct: 0
  },

  {
    id: "B5Q035", theme: 5, type: "qcm", source: "B 51.01",
    question: "Sur une ligne à fortes pentes, comment est traitée la masse freinée d'une machine non équipée du FAMAD incorporée dans un train de machines ?",
    choices: [
      "Elle n'est pas prise en compte dans la masse freinée totale.",
      "Elle est prise en compte sur M uniquement."
    ],
    correct: 0
  },

  {
    id: "B5Q036", theme: 5, type: "qcm", source: "B 51.01",
    question: "Une machine non équipée du FAMAD est incorporée à un train de machines sur une ligne à fortes pentes. La règle est-elle identique à celle d'une machine HLP seule non équipée du FAMAD ?",
    choices: [
      "Non : pour le train de machines sa masse freinée n'est pas prise en compte, tandis que la circulation d'une machine HLP non équipée du FAMAD est interdite sur une ligne à fortes pentes.",
      "Oui : dans les deux cas la circulation est interdite."
    ],
    correct: 0
  },

  {
    id: "B5Q037", theme: 5, type: "qcm", source: "B 51.01",
    question: "Un train de machines est composé de six machines. Quelle catégorie sert de référence à sa vitesse limite ?",
    choices: [
      "ME 100.",
      "MA 90."
    ],
    correct: 0
  },

  {
    id: "B5Q038", theme: 5, type: "qcm", source: "B 51.01",
    question: "Une septième machine est ajoutée à un train de machines qui en comportait six. Quelle conséquence cela entraîne-t-il sur la référence utilisée pour déterminer sa vitesse limite ?",
    choices: [
      "La référence passe de ME 100 à MA 90.",
      "La référence reste ME 100 jusqu'à 13 machines."
    ],
    correct: 0
  },

  {
    id: "B5Q039", theme: 5, type: "qcm", source: "B 51.01",
    question: "Un train de machines comporte 13 machines. Quelle catégorie sert de référence à sa vitesse limite ?",
    choices: [
      "MA 90.",
      "MA 100."
    ],
    correct: 0
  },

  {
    id: "B5Q040", theme: 5, type: "qcm", source: "B 51.01",
    question: "Pour un train de machines de 3 à 6 machines, le livret de lignes n'indique aucune vitesse correspondant à l'indice ME 100. Quelle référence doit être utilisée ?",
    choices: [
      "L'indice de composition inférieur le plus proche.",
      "L'indice MA 90 dans tous les cas."
    ],
    correct: 0
  },

  {
    id: "B5Q041", theme: 5, type: "qcm", source: "B 51.01",
    question: "Pour un train de machines de 7 à 13 machines, le livret de lignes ne donne pas de vitesse correspondant au MA 90. Quelle référence doit être recherchée ?",
    choices: [
      "L'indice de composition inférieur le plus proche.",
      "La vitesse du MA 100."
    ],
    correct: 0
  },


  // =====================================================
  // B 51.02 — TRAIN DE MACHINES :
  // CAS EXCEPTIONNELS ET INCIDENTS
  // =====================================================

  {
    id: "B5Q042", theme: 5, type: "qcm", source: "B 51.02",
    question: "Une ou plusieurs machines d'un train de machines sont freinées au frein continu marchandises. Cette situation peut-elle conduire à considérer que les règles normales de freinage du train de machines ne sont plus satisfaites ?",
    choices: [
      "Oui.",
      "Non, dès lors que tous les essieux restent freinés."
    ],
    correct: 0
  },

  {
    id: "B5Q043", theme: 5, type: "qcm", source: "B 51.02",
    question: "Le freinage d'un train de machines ne peut plus être réalisé dans les conditions de B 51.01. Selon quelles catégories peut-il alors être freiné ?",
    choices: [
      "MA 100, MA 90 ou MA 80.",
      "ME 100 ou ME 120 uniquement."
    ],
    correct: 0
  },

  {
    id: "B5Q044", theme: 5, type: "qcm", source: "B 51.02",
    question: "Après un incident de frein sur un train de machines, comment est déterminée la vitesse limite à retenir ?",
    choices: [
      "En fonction de la catégorie de train pour laquelle les règles de freinage sont satisfaites.",
      "Uniquement en fonction du nombre de machines restant freinées."
    ],
    correct: 0
  },

  {
    id: "B5Q045", theme: 5, type: "qcm", source: "B 51.02",
    question: "Après isolement partiel du frein d'un engin moteur d'un train de machines, quelle part de sa masse freinée est prise en compte ?",
    choices: [
      "La moitié.",
      "Aucune : tout isolement partiel impose de considérer l'engin totalement non freiné."
    ],
    correct: 0
  },

  {
    id: "B5Q046", theme: 5, type: "qcm", source: "B 51.02",
    question: "Après un incident, la masse freinée totale réalisée d'un train de machines reste au moins égale à la masse freinée nécessaire. Quelle vitesse doit être respectée ?",
    choices: [
      "La vitesse déterminée avant l'incident.",
      "La vitesse des MA 100."
    ],
    correct: 0
  },

  {
    id: "B5Q047", theme: 5, type: "qcm", source: "B 51.02",
    question: "Après un incident, la masse freinée d'un train de machines devient insuffisante pour ses conditions initiales. Quelle catégorie est utilisée comme première base pour rechercher une vitesse correspondant au freinage réalisé ?",
    choices: [
      "MA 100.",
      "MA 80."
    ],
    correct: 0
  },

  {
    id: "B5Q048", theme: 5, type: "qcm", source: "B 51.02",
    question: "Après dégradation du freinage d'un train de machines, les conditions du MA 100 ne sont elles-mêmes pas satisfaites. La recherche de la vitesse s'arrête-t-elle nécessairement ?",
    choices: [
      "Non, les dispositions MA 100 permettent ensuite de rechercher les conditions correspondant aux catégories inférieures.",
      "Oui, le train doit immédiatement demander le secours."
    ],
    correct: 0
  },

  {
    id: "B5Q049", theme: 5, type: "qcm", source: "B 51.02",
    question: "Sur une ligne à freinage forfaitaire, les règles normales du train de machines ne sont plus satisfaites. À quelles dispositions renvoie B 51.02 pour déterminer la vitesse après recherche du freinage correspondant ?",
    choices: [
      "À la situation correspondante du MA 100 prévue à B 40.22.",
      "Aux seules règles HLP de B 50.02."
    ],
    correct: 0
  },

  {
    id: "B5Q050", theme: 5, type: "qcm", source: "B 51.02",
    question: "Sur une ligne à freinage d'arrêt et de dérive, les règles normales du train de machines ne sont plus satisfaites. Quelle logique est utilisée pour déterminer la vitesse compatible avec le freinage restant ?",
    choices: [
      "Les dispositions correspondantes du MA 100 prévues à B 40.22 sont appliquées.",
      "Le train est automatiquement limité à la vitesse des MA 80 sans autre vérification."
    ],
    correct: 0
  },

  {
    id: "B5Q051", theme: 5, type: "qcm", source: "B 51.02",
    question: "Un train de machines abandonne une partie de son train. Si le frein ne fonctionne plus sur au moins un véhicule restant, quelle démarche doit être reprise ?",
    choices: [
      "La détermination de la vitesse limite du train de machines après incident de frein.",
      "La vitesse déterminée avant l'abandon reste applicable sans nouvelle vérification."
    ],
    correct: 0
  },

  // =====================================================
  // QUESTIONS CROISÉES HLP / TM
  // =====================================================

  {
    id: "B5Q052", theme: 5, type: "qcm", source: "B 50.01 / B 51.01",
    question: "Deux machines dont une est en véhicule circulent ensemble sans autre véhicule. Une troisième machine est ajoutée. Quelle modification réglementaire essentielle intervient ?",
    choices: [
      "Le groupe passe de HLP à train de machines.",
      "Il reste HLP mais sa vitesse est limitée à celle des MA 90."
    ],
    correct: 0
  },

  {
    id: "B5Q053", theme: 5, type: "qcm", source: "B 50.01 / B 51.01",
    question: "Quelle différence le référentiel établit-il sur ligne à fortes pentes entre une machine HLP non équipée du FAMAD et une machine non équipée du FAMAD incorporée à un train de machines ?",
    choices: [
      "La première ne peut pas y circuler ; pour la seconde, sa masse freinée n'est pas prise en compte dans la masse freinée totale.",
      "Dans les deux cas, seule la masse freinée de la machine est écartée du calcul."
    ],
    correct: 0
  },

  {
    id: "B5Q054", theme: 5, type: "qcm", source: "B 50.01 / B 51.01",
    question: "Un groupe passe de deux à trois machines. Si les règles normales de freinage sont satisfaites, quelle référence de vitesse devient applicable du seul fait de ce changement de composition ?",
    choices: [
      "La référence ME 100 applicable aux trains de machines de 3 à 6 machines.",
      "La référence MA 90 applicable à tous les trains de machines."
    ],
    correct: 0
  },

  {
    id: "B5Q055", theme: 5, type: "qcm", source: "B 51.01",
    question: "Un train de machines passe de six à sept machines sans autre modification. Quelle règle de vitesse change ?",
    choices: [
      "La référence passe des ME 100 aux MA 90.",
      "La référence reste celle des ME 100 ; le passage aux MA 90 n'intervient qu'au-delà de 10 machines."
    ],
    correct: 0
  },

  {
    id: "B5Q056", theme: 5, type: "qcm", source: "B 50.02 / B 51.02",
    question: "Après dégradation du freinage, HLP et train de machines ont-ils en commun la possibilité d'être traités selon les conditions de freinage MA 100, MA 90 ou MA 80 ?",
    choices: [
      "Oui.",
      "Non, cette possibilité est réservée aux trains de machines."
    ],
    correct: 0
  }

];
