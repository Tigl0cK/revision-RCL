const QUESTIONS_PARTIE_B1 = [

  // =====================================================
  // B 10.01 — CLASSEMENT DES TRAINS
  // =====================================================

  {
    id: "B1Q001",
    theme: 1,
    type: "qcm",
    source: "B 10.01",
    question: "Un train ne comporte aucun véhicule autre que plusieurs machines. Quelles règles lui sont applicables ?",
    choices: [
      "Celles correspondant à sa composition : HLP ou train de machines.",
      "Systématiquement celles des trains de machines dès qu'il comporte plusieurs machines."
    ],
    correct: 0
  },

  {
    id: "B1Q002",
    theme: 1,
    type: "qcm",
    source: "B 10.01",
    question: "Un train composé de matériel du parc ordinaire est caractérisé, du point de vue composition, freinage et vitesse limite, par :",
    choices: [
      "Un code de composition.",
      "Un indice de composition."
    ],
    correct: 1
  },

  {
    id: "B1Q003",
    theme: 1,
    type: "qcm",
    source: "B 10.01",
    question: "Un train international soumis à des instructions particulières peut-il recevoir un indice de composition différent des indices usuels ?",
    choices: [
      "Oui, si cet indice est défini par ces instructions particulières.",
      "Non, seuls ME 100, ME 120, MA 80, MA 90 et MA 100 peuvent constituer un indice."
    ],
    correct: 0
  },

  {
    id: "B1Q004",
    theme: 1,
    type: "qcm",
    source: "B 10.01",
    question: "L'indice de composition d'un train peut-il changer entre sa gare origine et son terminus ?",
    choices: [
      "Oui, après un remaniement modifiant suffisamment sa composition.",
      "Non, un train ne peut comporter qu'un seul indice de composition de l'origine au terminus."
    ],
    correct: 1
  },

  {
    id: "B1Q005",
    theme: 1,
    type: "qcm",
    source: "B 10.01",
    question: "Les trains de secours, machines HLP et trains de machines sont assimilés, pour leur classement, à quelle catégorie ?",
    choices: [
      "Aux trains de messageries.",
      "Aux trains de marchandises."
    ],
    correct: 0
  },

  {
    id: "B1Q006",
    theme: 1,
    type: "qcm",
    source: "B 10.01",
    question: "Quel code de composition est attribué aux mouvements de manœuvre non guidés ?",
    choices: [
      "HLP.",
      "EVO."
    ],
    correct: 1
  },


  // =====================================================
  // B 10.02 — INFORMATIONS DONNÉES AU CONDUCTEUR
  // =====================================================

  {
    id: "B1Q007",
    theme: 1,
    type: "qcm",
    source: "B 10.02",
    question: "Un mouvement de manœuvre non guidé est normalement renseigné sur ses caractéristiques au moyen :",
    choices: [
      "D'un bulletin de freinage.",
      "D'un avis verbal complété par la fiche-train."
    ],
    correct: 0
  },

  {
    id: "B1Q008",
    theme: 1,
    type: "qcm",
    source: "B 10.02",
    question: "Exceptionnellement, les renseignements d'un mouvement de manœuvre non guidé sont transmis par avis écrit. Quelles informations doivent au minimum y figurer ?",
    choices: [
      "Longueur, masse totale et nombre de véhicules.",
      "Longueur, masse remorquée et masse freinée remorquée des véhicules."
    ],
    correct: 1
  },

  {
    id: "B1Q009",
    theme: 1,
    type: "qcm",
    source: "B 10.02",
    question: "Les règles normales de composition ou de freinage n'ont pas pu être satisfaites. Comment le conducteur en est-il informé ?",
    choices: [
      "Verbalement par l'agent-formation, avec mention des conditions de circulation sur le bulletin de freinage, bulletin d'ordre ou avis écrit.",
      "Uniquement par une mention écrite, sans information verbale nécessaire."
    ],
    correct: 0
  },

  {
    id: "B1Q010",
    theme: 1,
    type: "qcm",
    source: "B 10.02",
    question: "Un HLP ne remorque aucun véhicule mais comporte un locotracteur. Un bulletin de freinage est-il nécessaire ?",
    choices: [
      "Non, puisqu'aucun véhicule n'est remorqué.",
      "Oui."
    ],
    correct: 1
  },

  {
    id: "B1Q011",
    theme: 1,
    type: "qcm",
    source: "B 10.02",
    question: "Un mouvement de manœuvre non guidé composé d'une ou deux machines ou d'une UM, sans véhicule remorqué, nécessite-t-il normalement un bulletin de freinage ?",
    choices: [
      "Non, sauf présence d'un locotracteur.",
      "Oui, tout mouvement de manœuvre non guidé doit en posséder un."
    ],
    correct: 0
  },

  {
    id: "B1Q012",
    theme: 1,
    type: "qcm",
    source: "B 10.02",
    question: "Pour bénéficier de la dispense particulière de bulletin de freinage prévue pour certains mouvements de manœuvre non guidés, leur parcours maximal est de :",
    choices: [
      "10 km.",
      "15 km."
    ],
    correct: 1
  },

  {
    id: "B1Q013",
    theme: 1,
    type: "qcm",
    source: "B 10.02",
    question: "Un mouvement de manœuvre non guidé bénéficiant de la disposition particulière des parcours de 15 km est freiné au régime M ou G. Chaque véhicule doit présenter au minimum le pourcentage de freinage nécessaire :",
    choices: [
      "Aux trains MA 80.",
      "Aux trains ME 100."
    ],
    correct: 0
  },

  {
    id: "B1Q014",
    theme: 1,
    type: "qcm",
    source: "B 10.02",
    question: "Le même mouvement de manœuvre non guidé est entièrement freiné au régime V ou P. Chaque véhicule doit présenter au minimum le pourcentage nécessaire :",
    choices: [
      "Aux trains MA 80.",
      "Aux trains ME 100."
    ],
    correct: 1
  },

  {
    id: "B1Q015",
    theme: 1,
    type: "qcm",
    source: "B 10.02",
    question: "Dans le cas particulier permettant de considérer un mouvement de manœuvre non guidé comme MA 80 ou ME 100, tous ses véhicules doivent-ils être freinés ?",
    choices: [
      "Oui.",
      "Non, le respect de la masse freinée globale suffit."
    ],
    correct: 0
  },

  {
    id: "B1Q016",
    theme: 1,
    type: "qcm",
    source: "B 10.02",
    question: "Les conditions permettant d'appliquer à un mouvement de manœuvre non guidé la disposition simplifiée MA 80 ou ME 100 ne peuvent pas être respectées. Quelle règle s'applique ?",
    choices: [
      "Il est limité à 30 km/h sans autre calcul.",
      "Il doit être freiné à la masse et le conducteur renseigné au moyen d'un bulletin de freinage."
    ],
    correct: 1
  },

  {
    id: "B1Q017",
    theme: 1,
    type: "qcm",
    source: "B 10.02",
    question: "Un train prévu en traction thermique est finalement assuré en traction électrique. Le conducteur doit :",
    choices: [
      "Aviser le COGC.",
      "Aviser uniquement l'agent-formation."
    ],
    correct: 0
  },


  // =====================================================
  // B 10.03 — REMORQUE DES TRAINS
  // =====================================================

  {
    id: "B1Q018",
    theme: 1,
    type: "qcm",
    source: "B 10.03",
    question: "Hors dérogation prévue aux documents de service, combien de machines en service au maximum peuvent être placées en tête d'un train ?",
    choices: [
      "Trois en traction thermique, deux en traction électrique.",
      "Deux, en DT ou en UM."
    ],
    correct: 1
  },

  {
    id: "B1Q019",
    theme: 1,
    type: "qcm",
    source: "B 10.03",
    question: "Deux machines participent à la pousse d'un même train. Quelle disposition est obligatoire entre elles ?",
    choices: [
      "Elles doivent être attelées entre elles.",
      "Elles peuvent rester non attelées si aucune n'est attelée au train."
    ],
    correct: 0
  },

  {
    id: "B1Q020",
    theme: 1,
    type: "qcm",
    source: "B 10.03",
    question: "Une machine pousse un train sur quelques centaines de mètres uniquement pour l'aider à redémarrer. Doit-elle nécessairement être attelée au train ?",
    choices: [
      "Oui, dès lors qu'elle exerce un effort de pousse.",
      "Non."
    ],
    correct: 1
  },

  {
    id: "B1Q021",
    theme: 1,
    type: "qcm",
    source: "B 10.03",
    question: "Une machine qui ne figure pas aux livrets de lignes doit exceptionnellement être engagée sur une section de ligne. Que doit recevoir le conducteur ?",
    choices: [
      "Les conditions de circulation de cette machine, par écrit ou par dépêche.",
      "Une autorisation verbale de l'organisme de commande suffit."
    ],
    correct: 0
  },

  {
    id: "B1Q022",
    theme: 1,
    type: "qcm",
    source: "B 10.03",
    question: "Une machine non prévue aux livrets de lignes est engagée exceptionnellement et les renseignements nécessaires à sa circulation n'ont pas été communiqués. Le conducteur doit :",
    choices: [
      "Appliquer la vitesse de la machine la plus restrictive qu'il connaît.",
      "Solliciter des instructions."
    ],
    correct: 1
  },

  {
    id: "B1Q023",
    theme: 1,
    type: "qcm",
    source: "B 10.03",
    question: "En traction thermique, des machines peuvent-elles être intercalées dans le corps du train ?",
    choices: [
      "Oui, certains trains peuvent comporter en plus une ou deux machines intercalées.",
      "Non, les machines en service sont obligatoirement en tête ou en pousse."
    ],
    correct: 0
  },

  {
    id: "B1Q024",
    theme: 1,
    type: "qcm",
    source: "B 10.03",
    question: "En traction électrique, lors d'un secours ou d'un détournement, le nombre maximal de machines en tête dépasse celui prescrit. Pour déterminer la vitesse, quelle référence est utilisée en premier lieu ?",
    choices: [
      "L'indice immédiatement inférieur, dans tous les cas.",
      "La vitesse indiquée au livret de lignes pour l'indice ou le code autorisant ce nombre de machines."
    ],
    correct: 1
  },

  {
    id: "B1Q025",
    theme: 1,
    type: "qcm",
    source: "B 10.03",
    question: "En traction électrique, le nombre de machines en tête dépasse celui prescrit et aucune vitesse correspondant à ce nombre n'est prévue pour l'indice ou le code considéré. Quelle référence retenir ?",
    choices: [
      "L'indice ou le code de composition inférieur le plus proche.",
      "La vitesse de l'engin moteur le plus restrictif, sans autre disposition."
    ],
    correct: 0
  },

  {
    id: "B1Q026",
    theme: 1,
    type: "qcm",
    source: "B 10.03",
    question: "Le dépassement du nombre prescrit de machines en traction entraîne-t-il cette limitation de vitesse pour un train de marchandises ?",
    choices: [
      "Oui, comme pour les autres trains.",
      "Non, mais le nombre de machines en traction dans le train doit être mentionné sur le bulletin de freinage."
    ],
    correct: 1
  },

  {
    id: "B1Q027",
    theme: 1,
    type: "qcm",
    source: "B 10.03",
    question: "En traction thermique, en cas de nécessité, le nombre total d'US ou d'UM dans le train ne doit pas dépasser :",
    choices: [
      "3.",
      "2."
    ],
    correct: 0
  },


  // =====================================================
  // B 10.04 — FREINAGE DES TRAINS
  // =====================================================

  {
    id: "B1Q028",
    theme: 1,
    type: "qcm",
    source: "B 10.04",
    question: "La conduite principale existe sur le train. Quelle disposition s'applique ?",
    choices: [
      "Elle n'est alimentée que si des véhicules l'exigent.",
      "Elle doit être alimentée depuis la machine."
    ],
    correct: 1
  },

  {
    id: "B1Q029",
    theme: 1,
    type: "qcm",
    source: "B 10.04",
    question: "Un équipement de commande électropneumatique du frein est présent. Doit-il être utilisé ?",
    choices: [
      "Oui, il doit être en service chaque fois que l'équipement est présent.",
      "Seulement lorsque la vitesse du train dépasse 100 km/h."
    ],
    correct: 0
  },

  {
    id: "B1Q030",
    theme: 1,
    type: "qcm",
    source: "B 10.04",
    question: "Un train de marchandises peut-il être entièrement freiné au régime voyageurs ?",
    choices: [
      "Non, au moins les cinq premiers véhicules doivent rester au régime marchandises.",
      "Oui."
    ],
    correct: 1
  },

  {
    id: "B1Q031",
    theme: 1,
    type: "qcm",
    source: "B 10.04",
    question: "Pour un ME 100 ou ME 120 de 800 tonnes exactement, sur quelle position est placé le changement de régime de frein de la machine de remorque ?",
    choices: [
      "V.",
      "M."
    ],
    correct: 0
  },

  {
    id: "B1Q032",
    theme: 1,
    type: "qcm",
    source: "B 10.04",
    question: "Un ME 120 présente une masse remorquée de 801 tonnes. Quel régime de frein doit être utilisé sur la machine de remorque ?",
    choices: [
      "V, jusqu'à 1 200 tonnes.",
      "M."
    ],
    correct: 1
  },

  {
    id: "B1Q033",
    theme: 1,
    type: "qcm",
    source: "B 10.04",
    question: "Pour qu'un freinage normal soit réalisé, le fonctionnement du frein continu est notamment exigé :",
    choices: [
      "Sur le premier et le dernier véhicule.",
      "Sur le premier véhicule seulement, la masse freinée globale couvrant le reste."
    ],
    correct: 0
  },

  {
    id: "B1Q034",
    theme: 1,
    type: "qcm",
    source: "B 10.04",
    question: "Le conducteur constate une discordance entre la tare ou la masse freinée de la machine et les valeurs portées au bulletin de freinage. Quelle action est prévue ?",
    choices: [
      "Il rectifie lui-même le bulletin avant le départ.",
      "Il avise l'agent-formation, qui modifie le bulletin de freinage."
    ],
    correct: 1
  },

  {
    id: "B1Q035",
    theme: 1,
    type: "qcm",
    source: "B 10.04",
    question: "Un train de marchandises est composé et freiné dans les conditions d'un train de messageries. Quelle vitesse limite conserve-t-il ?",
    choices: [
      "Celle des trains de marchandises.",
      "Celle des trains de messageries correspondant au freinage réalisé."
    ],
    correct: 0
  },

  {
    id: "B1Q036",
    theme: 1,
    type: "qcm",
    source: "B 10.04",
    question: "Dans un train de marchandises, la somme des masses freinées des véhicules au frein continu voyageurs peut atteindre, sans disposition supplémentaire :",
    choices: [
      "150 tonnes.",
      "200 tonnes."
    ],
    correct: 1
  },

  {
    id: "B1Q037",
    theme: 1,
    type: "qcm",
    source: "B 10.04",
    question: "Dans un train de marchandises, la masse freinée au frein continu voyageurs dépasse 200 tonnes. Que faire des véhicules supplémentaires ne comportant que ce régime ?",
    choices: [
      "Isoler leur frein et les étiqueter en conséquence.",
      "Les maintenir freinés et limiter le train à la vitesse des MA 80."
    ],
    correct: 0
  },

  {
    id: "B1Q038",
    theme: 1,
    type: "qcm",
    source: "B 10.04",
    question: "Sur une ligne désignée à fortes pentes, comment est traitée la masse freinée d'une machine non équipée du FAMAD ?",
    choices: [
      "Elle est prise en compte uniquement pour le freinage d'arrêt.",
      "Elle n'est pas prise en compte pour déterminer la masse freinée totale du train."
    ],
    correct: 1
  },

  {
    id: "B1Q039",
    theme: 1,
    type: "qcm",
    source: "B 10.04",
    question: "Pour déterminer la masse freinée de dérive d'une machine seule ou d'une UM, le frein électrique est-il pris en compte ?",
    choices: [
      "Non.",
      "Oui, s'il est disponible et en service."
    ],
    correct: 0
  },


  // =====================================================
  // LOCOMOTIVE LONGUE
  // =====================================================

  {
    id: "B1Q040",
    theme: 1,
    type: "qcm",
    source: "B 10.04",
    question: "Dans un train de messageries freiné suivant le principe de la Locomotive Longue, quel régime est appliqué à la ou aux machines de remorque ?",
    choices: [
      "Voyageurs.",
      "Marchandises."
    ],
    correct: 1
  },

  {
    id: "B1Q041",
    theme: 1,
    type: "qcm",
    source: "B 10.04",
    question: "Dans le principe de la Locomotive Longue, combien de premiers véhicules remorqués derrière la ou les machines de remorque doivent être freinés au régime marchandises ?",
    choices: [
      "5, machines en véhicule comprises.",
      "5, sans compter les machines en véhicule."
    ],
    correct: 0
  },

  {
    id: "B1Q042",
    theme: 1,
    type: "qcm",
    source: "B 10.04",
    question: "Parmi les cinq premiers véhicules d'un train freiné suivant le principe de la Locomotive Longue, l'un d'eux ne peut pas être freiné au régime marchandises. Quelle disposition est prévue ?",
    choices: [
      "Il est maintenu au régime voyageurs et le véhicule suivant est placé au régime marchandises.",
      "Son frein est isolé."
    ],
    correct: 1
  },

  {
    id: "B1Q043",
    theme: 1,
    type: "qcm",
    source: "B 10.04",
    question: "Le quatrième des cinq premiers véhicules d'une Locomotive Longue ne peut être freiné au régime marchandises et son frein est isolé. Faut-il reporter le régime marchandises sur le sixième véhicule ?",
    choices: [
      "Non.",
      "Oui, afin de conserver cinq véhicules effectivement freinés au régime marchandises."
    ],
    correct: 0
  },

  {
    id: "B1Q044",
    theme: 1,
    type: "qcm",
    source: "B 10.04",
    question: "Un wagon à deux plateaux articulés non sécables est placé parmi les cinq premiers véhicules d'une Locomotive Longue. Pour combien de véhicules compte-t-il ?",
    choices: [
      "Un seul s'il ne comporte qu'un distributeur.",
      "Deux, qu'il comporte un ou deux distributeurs."
    ],
    correct: 1
  },

  {
    id: "B1Q045",
    theme: 1,
    type: "qcm",
    source: "B 10.04",
    question: "Le cinquième véhicule d'une Locomotive Longue est un wagon double. Combien de véhicules sont finalement freinés au régime marchandises ?",
    choices: [
      "6.",
      "5, le second plateau étant considéré hors des cinq premiers."
    ],
    correct: 0
  },

  {
    id: "B1Q046",
    theme: 1,
    type: "qcm",
    source: "B 10.04",
    question: "Quelle mention doit figurer sur le bulletin de freinage d'un train freiné suivant le principe de la Locomotive Longue ?",
    choices: [
      "\"Train freiné au frein continu marchandises\".",
      "\"Train freiné LL\"."
    ],
    correct: 1
  },


  // =====================================================
  // B 10.05 — MASSE FREINÉE
  // =====================================================

  {
    id: "B1Q047",
    theme: 1,
    type: "qcm",
    source: "B 10.05",
    question: "Aucune indication spécifique de masse freinée n'est présente sur un véhicule. Quelle valeur est retenue ?",
    choices: [
      "Sa tare.",
      "Sa masse sur rails."
    ],
    correct: 0
  },

  {
    id: "B1Q048",
    theme: 1,
    type: "qcm",
    source: "B 10.05",
    question: "La valeur V+E inscrite sur une locomotive peut-elle être utilisée pour calculer son freinage de dérive ?",
    choices: [
      "Oui, si le frein rhéostatique d'urgence est disponible.",
      "Non."
    ],
    correct: 1
  },

  {
    id: "B1Q049",
    theme: 1,
    type: "qcm",
    source: "B 10.05",
    question: "Un wagon possède un frein auto variable et progressif. Sa masse sur rails est inférieure à la masse freinée maximale inscrite. Quelle masse freinée retenir ?",
    choices: [
      "Sa masse sur rails.",
      "La masse freinée maximale inscrite."
    ],
    correct: 0
  },

  {
    id: "B1Q050",
    theme: 1,
    type: "qcm",
    source: "B 10.05",
    question: "Un wagon à frein auto variable et progressif a une masse sur rails supérieure à la valeur maximale de masse freinée inscrite. Quelle valeur retenir ?",
    choices: [
      "La masse sur rails.",
      "La masse freinée maximale inscrite."
    ],
    correct: 1
  },

  {
    id: "B1Q051",
    theme: 1,
    type: "qcm",
    source: "B 10.05",
    question: "Pour un wagon équipé d'un dispositif vide-chargé manuel à deux ou trois positions, la masse freinée à retenir dépend :",
    choices: [
      "De la valeur inscrite correspondant à la position du levier.",
      "Directement de la masse réelle sur rails, plafonnée à la valeur chargée."
    ],
    correct: 0
  },

  {
    id: "B1Q052",
    theme: 1,
    type: "qcm",
    source: "B 10.05",
    question: "Un wagon ne comporte qu'une masse freinée invariable. Sa masse sur rails varie fortement. La masse freinée retenue :",
    choices: [
      "Varie dans la même proportion que sa masse sur rails.",
      "Reste la valeur inscrite correspondant au type ou régime de frein."
    ],
    correct: 1
  },

  {
    id: "B1Q053",
    theme: 1,
    type: "qcm",
    source: "B 10.05",
    question: "Sur un wagon à dispositif vide-chargé automatique, la masse sur rails est exactement égale à la masse seuil inscrite pour le changement automatique. Quelle valeur de masse freinée retenir ?",
    choices: [
      "La valeur correspondant à la tranche égale ou supérieure au seuil.",
      "La valeur correspondant à la tranche inférieure au seuil."
    ],
    correct: 0
  },

  {
    id: "B1Q054",
    theme: 1,
    type: "qcm",
    source: "B 10.05",
    question: "Pour un dispositif vide-chargé automatique particulier de type NOVATRANS, la masse exacte du wagon n'existe pas dans le tableau. Quelle ligne utiliser ?",
    choices: [
      "La valeur immédiatement supérieure.",
      "La valeur directement inférieure."
    ],
    correct: 1
  },

  {
    id: "B1Q055",
    theme: 1,
    type: "qcm",
    source: "B 10.05",
    question: "Un wagon porte-autos à deux équipements de frein possède deux robinets d'isolement. L'isolement d'un seul robinet entraîne-t-il nécessairement l'isolement de tous les essieux ?",
    choices: [
      "Non.",
      "Oui."
    ],
    correct: 0
  },

  {
    id: "B1Q056",
    theme: 1,
    type: "qcm",
    source: "B 10.05",
    question: "Sur le wagon porte-autos décrit au référentiel, un des deux robinets est isolé. La valeur de masse freinée à déduire est déterminée :",
    choices: [
      "En divisant systématiquement la masse freinée totale par deux.",
      "Par la valeur inscrite au-dessus du robinet."
    ],
    correct: 1
  },

  {
    id: "B1Q057",
    theme: 1,
    type: "qcm",
    source: "B 10.05",
    question: "Le wagon porte-autos à deux équipements décrit au référentiel est placé en queue et un de ses deux robinets de frein est isolé. Est-il considéré comme freiné ?",
    choices: [
      "Oui.",
      "Non, un wagon de queue doit disposer de la totalité de son frein."
    ],
    correct: 0
  },


  // =====================================================
  // B 10.06 — CARACTÉRISTIQUES DU TRAIN
  // =====================================================

  {
    id: "B1Q058",
    theme: 1,
    type: "qcm",
    source: "B 10.06",
    question: "La destination portée au bulletin de freinage diffère de celle de la fiche-train. Est-ce nécessairement une anomalie ?",
    choices: [
      "Oui, les deux destinations doivent obligatoirement être identiques.",
      "Non, la destination du bulletin correspond à la destination réelle du train."
    ],
    correct: 1
  },

  {
    id: "B1Q059",
    theme: 1,
    type: "qcm",
    source: "B 10.06",
    question: "L'indice ou le code de composition porté au bulletin de freinage peut-il différer de celui de la fiche-train ?",
    choices: [
      "Non, il doit être identique.",
      "Oui, s'il correspond mieux à la composition réellement réalisée."
    ],
    correct: 0
  },

  {
    id: "B1Q060",
    theme: 1,
    type: "qcm",
    source: "B 10.06",
    question: "La catégorie statistique portée dans la case « Type Convoi Trafic » diffère de celle de la fiche-train. Est-ce admis ?",
    choices: [
      "Non, elle doit toujours être identique.",
      "Oui ; elle sert notamment à identifier le client et le produit et doit être reportée sur le bulletin de sécurité."
    ],
    correct: 1
  },

  {
    id: "B1Q061",
    theme: 1,
    type: "qcm",
    source: "B 10.06",
    question: "Une annotation du cadre « observations » ou « communications » cesse d'être applicable. Peut-elle simplement être rayée sur le bulletin ?",
    choices: [
      "Non, un nouveau bulletin doit être établi.",
      "Oui, à condition que la correction soit signée par le conducteur."
    ],
    correct: 0
  },

  {
    id: "B1Q062",
    theme: 1,
    type: "qcm",
    source: "B 10.06",
    question: "Au départ d'une gare, une restriction de vitesse inscrite au bulletin doit être annulée, modifiée ou remplacée. Quelle disposition s'applique ?",
    choices: [
      "Le conducteur rectifie la mention dans la colonne libre.",
      "Un nouveau bulletin doit être établi."
    ],
    correct: 1
  },

  {
    id: "B1Q063",
    theme: 1,
    type: "qcm",
    source: "B 10.06",
    question: "À quoi sert notamment la colonne laissée libre sur le bulletin de freinage ?",
    choices: [
      "À permettre au conducteur d'inscrire de nouvelles informations de composition et de freinage après un incident en ligne.",
      "À permettre à l'agent-formation de corriger une mention devenue sans objet sans refaire le bulletin."
    ],
    correct: 0
  },

  {
    id: "B1Q064",
    theme: 1,
    type: "qcm",
    source: "B 10.06",
    question: "Que certifie la signature de l'agent-formation sur le bulletin de freinage ?",
    choices: [
      "Uniquement l'exactitude des masses portées au document.",
      "La conformité du train aux règles de composition et de freinage définies pour sa catégorie."
    ],
    correct: 1
  },

  {
    id: "B1Q065",
    theme: 1,
    type: "qcm",
    source: "B 10.06",
    question: "Le conducteur n'a réalisé aucune intervention sur le train pendant son étape. Que certifie sa signature lors de la restitution du bulletin ?",
    choices: [
      "Que le train est restitué conforme à son état initial.",
      "Que le train reste conforme à la fiche-train jusqu'à son terminus."
    ],
    correct: 0
  },

  {
    id: "B1Q066",
    theme: 1,
    type: "qcm",
    source: "B 10.06",
    question: "Après un incident en pleine voie modifiant la composition ou le freinage, qui rectifie le bulletin lorsqu'aucun agent habilité à la fonction d'agent-formation n'est présent ?",
    choices: [
      "L'agent-formation de la prochaine gare, le bulletin restant inchangé jusque-là.",
      "Le conducteur."
    ],
    correct: 1
  },

  {
    id: "B1Q067",
    theme: 1,
    type: "qcm",
    source: "B 10.06",
    question: "Un rebroussement avec deux engins moteurs de séries différentes intervient dans un établissement sans agent-formation. Le bulletin de freinage doit-il être rectifié par le conducteur ?",
    choices: [
      "Oui.",
      "Non, si aucune masse freinée n'a changé."
    ],
    correct: 0
  },


  // =====================================================
  // B 10.07 — BULLETIN DE FREINAGE
  // =====================================================

  {
    id: "B1Q068",
    theme: 1,
    type: "qcm",
    source: "B 10.07",
    question: "Le bulletin de freinage multi-sillons peut être utilisé lorsque plusieurs sillons se succèdent au cours de l'acheminement, à condition notamment :",
    choices: [
      "Que chaque changement de sillon soit accompagné de l'établissement d'un nouveau bulletin.",
      "Qu'aucune modification des conditions de composition, de freinage ou de remorque ne soit prévue."
    ],
    correct: 1
  },

  {
    id: "B1Q069",
    theme: 1,
    type: "qcm",
    source: "B 10.07",
    question: "Avec un bulletin multi-sillons, un aléa conduit à utiliser un numéro de sillon qui n'avait pas été inscrit à l'origine. Quelle disposition est prévue ?",
    choices: [
      "Le conducteur peut inscrire le nouveau numéro de sillon sur le bulletin multi-sillons.",
      "Le bulletin multi-sillons devient obligatoirement caduc."
    ],
    correct: 0
  },

  {
    id: "B1Q070",
    theme: 1,
    type: "qcm",
    source: "B 10.07",
    question: "En cas d'aléa, le conducteur ajoute un nouveau sillon au bulletin multi-sillons. Quelles autres informations doit-il renseigner avec ce numéro ?",
    choices: [
      "La masse remorquée, le freinage et la longueur.",
      "L'origine, la date et la destination."
    ],
    correct: 1
  },

  {
    id: "B1Q071",
    theme: 1,
    type: "qcm",
    source: "B 10.07",
    question: "Le conducteur reçoit un bulletin multi-sillons établi à l'origine. Quel contrôle doit-il effectuer avec sa fiche-train ?",
    choices: [
      "S'assurer que le numéro de sillon de sa fiche-train figure parmi les numéros inscrits dans le cadre supérieur du bulletin.",
      "S'assurer uniquement que la destination et l'indice de composition sont identiques."
    ],
    correct: 0
  },

  {
    id: "B1Q072",
    theme: 1,
    type: "qcm",
    source: "B 10.07",
    question: "Après un incident de frein sur un train de marchandises ou de messageries, le conducteur rectifie le bulletin. Quelle partie utilise-t-il pour reporter les nouvelles valeurs de composition et de freinage ?",
    choices: [
      "Le cadre observations uniquement.",
      "Une colonne restée libre."
    ],
    correct: 1
  },

  {
    id: "B1Q073",
    theme: 1,
    type: "qcm",
    source: "B 10.07",
    question: "Après un incident de frein, le conducteur complète une colonne libre du bulletin. Quelle masse freinée nécessaire doit-il y reporter ?",
    choices: [
      "La masse freinée totale nécessaire.",
      "Uniquement la différence entre masse freinée nécessaire et réalisée."
    ],
    correct: 0
  },

  {
    id: "B1Q074",
    theme: 1,
    type: "qcm",
    source: "B 10.07",
    question: "Un bogie d'une machine de remorque ou d'une machine en véhicule est isolé. Quelle masse freinée est prise en compte pour cette machine dans le nouveau calcul ?",
    choices: [
      "La masse freinée totale est supprimée.",
      "La moitié de la masse freinée au régime V ou M applicable."
    ],
    correct: 1
  },

  {
    id: "B1Q075",
    theme: 1,
    type: "qcm",
    source: "B 10.07",
    question: "Après isolement d'un bogie d'une machine sur un train FRET MA ou ME, quelle référence peut être utilisée pour déterminer la masse freinée à prendre en compte ?",
    choices: [
      "Le tableau des caractéristiques des engins moteurs par séries de l'annexe aux référentiels NAVILAND CARGO.",
      "Uniquement l'inscription portée physiquement sur la caisse de la machine."
    ],
    correct: 0
  },

  {
    id: "B1Q076",
    theme: 1,
    type: "qcm",
    source: "B 10.07",
    question: "Après rectification du bulletin à la suite d'un non-fonctionnement du frein, suffit-il de compléter la colonne libre ?",
    choices: [
      "Oui, la nouvelle masse freinée réalisée suffit.",
      "Non, le cadre « observations - cas exceptionnels - incidents » doit également être annoté."
    ],
    correct: 1
  },

  {
    id: "B1Q077",
    theme: 1,
    type: "qcm",
    source: "B 10.07",
    question: "À la fin du parcours, quelle action le conducteur effectue-t-il sur le bulletin de freinage avant sa remise ?",
    choices: [
      "Il le signe dans la case prévue à cet effet.",
      "Il le remet sans signature, celle-ci n'étant requise qu'en cas de modification en ligne."
    ],
    correct: 0
  }

];
