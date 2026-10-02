const QUESTIONS_PARTIE_D1 = [

  // =====================================================
  // D 10.01 — GÉNÉRALITÉS
  // =====================================================

  {
    id: "D1Q001", theme: 1, type: "qcm", source: "D 10.01",
    question: "Sur une ligne à voie unique, les renseignements complétant la désignation d'un train à marche indéterminée doivent être donnés au conducteur. Sous quelle forme ?",
    choices: [
      "Sur le bulletin de freinage ou, à défaut, par un avis écrit.",
      "Ils peuvent être donnés verbalement comme sur les autres lignes."
    ],
    correct: 0
  },

  {
    id: "D1Q002", theme: 1, type: "qcm", source: "D 10.01",
    question: "Un train à marche indéterminée peut-il recevoir un horaire ?",
    choices: [
      "Non, aucune indication horaire ne peut lui être attribuée.",
      "Oui, un horaire approximatif peut lui être indiqué en cas de besoin."
    ],
    correct: 1
  },


  // =====================================================
  // D 11.01 — VOIES DE SERVICE
  // =====================================================

  {
    id: "D1Q003", theme: 1, type: "qcm", source: "D 11.01",
    question: "Un train rencontre un tableau G avant d'être dirigé sur une voie de service. À partir de quel point le conducteur doit-il observer la marche en manœuvre ?",
    choices: [
      "Dès le franchissement du tableau G.",
      "Depuis l'aiguille donnant accès à la voie de service."
    ],
    correct: 1
  },

  {
    id: "D1Q004", theme: 1, type: "qcm", source: "D 11.01",
    question: "Sur une voie de service, une consigne d'établissement impose des dispositions plus restrictives que la marche en manœuvre. Quelle règle prévaut ?",
    choices: [
      "Les dispositions plus restrictives.",
      "La marche en manœuvre, qui constitue la règle maximale applicable sur voie de service."
    ],
    correct: 0
  },


  // =====================================================
  // D 11.02 — RESPECT DE L'HORAIRE
  // =====================================================

  {
    id: "D1Q005", theme: 1, type: "qcm", source: "D 11.02",
    question: "En cas général, un conducteur prévoit une perte de temps en aval entre deux points d'arrêt. Jusqu'à quelle avance peut-il prendre de lui-même pour la compenser ?",
    choices: [
      "3 minutes.",
      "5 minutes."
    ],
    correct: 0
  },

  {
    id: "D1Q006", theme: 1, type: "qcm", source: "D 11.02",
    question: "Une perte de temps est prévue entre deux points d'arrêt et un point d'horaire obligé se trouve avant la zone concernée. À partir d'où l'avance destinée à compenser cette perte peut-elle être prise ?",
    choices: [
      "Dès le dernier point d'arrêt précédant la zone.",
      "Seulement à partir du point d'horaire obligé."
    ],
    correct: 1
  },

  {
    id: "D1Q007", theme: 1, type: "qcm", source: "D 11.02",
    question: "Sur une ligne à circulation en avance, un train ne transportant pas de voyageurs reçoit l'ordre de circuler en avance. Jusqu'où cette avance sur ordre peut-elle normalement être prescrite ?",
    choices: [
      "Jusqu'à une gare où un arrêt régulier est prévu.",
      "Jusqu'au terminus de la marche tracée."
    ],
    correct: 0
  },

  {
    id: "D1Q008", theme: 1, type: "qcm", source: "D 11.02",
    question: "Sur une ligne à double voie, régulée et à circulation en avance, l'arrêt régulier d'un train ne transportant pas de voyageurs est supprimé. Que devient l'avance ainsi acquise ?",
    choices: [
      "Elle nécessite systématiquement un ordre de circuler en avance.",
      "Elle peut être conservée sans formalité jusqu'à la prochaine gare d'arrêt régulier."
    ],
    correct: 1
  },

  {
    id: "D1Q009", theme: 1, type: "qcm", source: "D 11.02",
    question: "Sur une ligne à double voie, régulée et à circulation en avance, un train ne transportant pas de voyageurs n'a finalement pas à observer un arrêt [S]. L'avance ainsi acquise peut-elle être conservée sans formalité ?",
    choices: [
      "Oui, jusqu'à la prochaine gare d'arrêt régulier.",
      "Non, contrairement à la suppression d'un arrêt régulier."
    ],
    correct: 0
  },

  {
    id: "D1Q010", theme: 1, type: "qcm", source: "D 11.02",
    question: "Dans les mêmes conditions, la durée d'un arrêt [C] est seulement réduite, sans être supprimée. L'avance acquise peut-elle être conservée sans formalité ?",
    choices: [
      "Non, cette possibilité ne concerne que les arrêts totalement supprimés.",
      "Oui."
    ],
    correct: 1
  },

  {
    id: "D1Q011", theme: 1, type: "qcm", source: "D 11.02",
    question: "Sur une ligne à circulation en avance, une perte de temps prévue en aval a fait l'objet d'un avis-signalisation. Où l'avance compensatrice peut-elle être prise ?",
    choices: [
      "Entre la dernière gare d'arrêt précédant la zone de limitation et cette zone.",
      "À n'importe quel point du parcours précédant la limitation."
    ],
    correct: 0
  },

  {
    id: "D1Q012", theme: 1, type: "qcm", source: "D 11.02",
    question: "Une ligne autorise les trains à prendre d'eux-mêmes une avance atteignant 10 minutes. Le train concerné a une vitesse limite supérieure à 160 km/h sur la section. Peut-il utiliser cette possibilité jusqu'à 10 minutes ?",
    choices: [
      "Oui, la mention portée au livret de lignes suffit.",
      "Non."
    ],
    correct: 1
  },

  {
    id: "D1Q013", theme: 1, type: "qcm", source: "D 11.02",
    question: "Un train arrive en avance d'une ligne à double voie dans une gare de jonction puis doit poursuivre sur une ligne à voie unique à circulation en avance. Peut-il conserver automatiquement l'avance acquise ?",
    choices: [
      "Non, cette conservation sur voie unique doit être autorisée par le service chargé de la gestion des circulations.",
      "Oui, puisque la voie unique est elle-même à circulation en avance."
    ],
    correct: 0
  },

  {
    id: "D1Q014", theme: 1, type: "qcm", source: "D 11.02",
    question: "Lorsqu'une avance acquise doit être autorisée pour être conservée sur voie unique, le service chargé de la gestion des circulations peut-il faire arrêter le train avant de donner l'ordre correspondant ?",
    choices: [
      "Non, l'ordre doit nécessairement être transmis en marche.",
      "Oui, s'il y a lieu."
    ],
    correct: 1
  },

  {
    id: "D1Q015", theme: 1, type: "qcm", source: "D 11.02",
    question: "Le régulateur demande au conducteur s'il peut prendre de l'avance afin d'arriver à un point précis à une heure donnée. Quelle est la première responsabilité du conducteur ?",
    choices: [
      "Déterminer si cela est possible compte tenu notamment de l'engin moteur, de la masse remorquée et de sa position sur la ligne.",
      "Prendre immédiatement l'avance demandée, le régulateur ayant déjà vérifié sa faisabilité."
    ],
    correct: 0
  },


  // =====================================================
  // D 11.03 — OBSERVATION DE LA DIRECTION
  // =====================================================

  {
    id: "D1Q016", theme: 1, type: "qcm", source: "D 11.03",
    question: "Le conducteur reçoit l'autorisation de franchir fermé un carré donnant accès à plusieurs directions. Aucune signalisation au sol ne renseigne sur la direction. Quelle information doit-il obtenir ?",
    choices: [
      "Une confirmation de l'ouverture de l'itinéraire uniquement.",
      "La direction donnée, verbalement par l'aiguilleur."
    ],
    correct: 1
  },

  {
    id: "D1Q017", theme: 1, type: "qcm", source: "D 11.03",
    question: "À l'approche d'une bifurcation sans signalisation au sol donnant la direction, le conducteur peut distinguer la position de l'aiguille. Le référentiel lui demande-t-il d'utiliser cette information ?",
    choices: [
      "Oui, si possible, pour s'assurer que la direction correspond à l'itinéraire prévu.",
      "Non, la position visible de l'aiguille ne doit jamais être utilisée pour cette vérification."
    ],
    correct: 0
  },


  // =====================================================
  // D 11.04 / D 11.05 — AVERTISSEUR / SABLIÈRES
  // =====================================================

  {
    id: "D1Q018", theme: 1, type: "qcm", source: "D 11.04",
    question: "De nuit, le conducteur rencontre une pancarte S accompagnée d'une pancarte J. En l'absence d'autre motif imposant l'usage de l'avertisseur, doit-il obligatoirement l'utiliser ?",
    choices: [
      "Oui, la pancarte J modifie seulement la durée du signal sonore.",
      "Non, l'obligation n'est pas imposée entre 20 h et 7 h."
    ],
    correct: 1
  },

  {
    id: "D1Q019", theme: 1, type: "qcm", source: "D 11.04",
    question: "De jour, hors zone de restriction, à quel moment le conducteur fait-il usage de l'avertisseur à la sortie d'un tunnel ?",
    choices: [
      "Avant d'atteindre la sortie.",
      "Une fois la tête du train sortie du tunnel."
    ],
    correct: 0
  },

  {
    id: "D1Q020", theme: 1, type: "qcm", source: "D 11.04",
    question: "L'avertisseur de l'engin comporte deux tons. Pour émettre un signal conventionnel, quelle règle s'applique ?",
    choices: [
      "Les deux tons sont employés alternativement.",
      "Un seul des deux tons est employé."
    ],
    correct: 1
  },

  {
    id: "D1Q021", theme: 1, type: "qcm", source: "D 11.05",
    question: "Une locomotive circule seule et une situation d'urgence nécessite un sablage. L'interdiction d'utiliser les sablières avec une locomotive seule s'applique-t-elle encore ?",
    choices: [
      "Non, l'interdiction est prévue sauf en cas d'urgence.",
      "Oui, elle est absolue avec une locomotive seule."
    ],
    correct: 0
  },

  {
    id: "D1Q022", theme: 1, type: "qcm", source: "D 11.05",
    question: "Pourquoi un sablage continu et important à l'arrêt ou à basse vitesse présente-t-il un risque particulier ?",
    choices: [
      "Il peut provoquer uniquement un enrayage des essieux non moteurs.",
      "Il peut entraîner un déshuntage des circuits de voie."
    ],
    correct: 1
  },


  // =====================================================
  // D 12.01 — ARRÊTS DES TRAINS
  // =====================================================

  {
    id: "D1Q023", theme: 1, type: "qcm", source: "D 12.01",
    question: "Un arrêt [C] figure à l'horaire. Les signaux permettant la poursuite de la marche restent ouverts et aucune autre situation n'impose l'arrêt. Quelle conduite adopter ?",
    choices: [
      "Passer sans arrêt, sous réserve de ne pas créer une circulation en avance non autorisée.",
      "S'arrêter systématiquement puisque l'arrêt figure à l'horaire."
    ],
    correct: 0
  },

  {
    id: "D1Q024", theme: 1, type: "qcm", source: "D 12.01",
    question: "Un arrêt [C] est confirmé par la fermeture des signaux. Après s'être arrêté, quand le conducteur doit-il normalement se faire reconnaître ?",
    choices: [
      "Immédiatement après l'arrêt.",
      "À l'heure de départ, sauf VAT clignotant ou appel par un autre moyen."
    ],
    correct: 1
  },

  {
    id: "D1Q025", theme: 1, type: "qcm", source: "D 12.01",
    question: "Un arrêt [C] est imposé par une situation du référentiel, par exemple une réception sur voie de service. Après l'arrêt, le conducteur doit-il normalement se faire reconnaître immédiatement ?",
    choices: [
      "Non, normalement seulement à l'heure de départ, sauf VAT clignotant ou appel par un autre moyen.",
      "Oui, car l'arrêt n'a pas été provoqué par la fermeture des signaux."
    ],
    correct: 0
  },

  {
    id: "D1Q026", theme: 1, type: "qcm", source: "D 12.01",
    question: "Un arrêt facultatif [S] a été confirmé au conducteur par une gare précédente. À l'arrivée, les signaux sont ouverts. Doit-il s'arrêter ?",
    choices: [
      "Non, l'ouverture des signaux annule la nécessité de l'arrêt [S].",
      "Oui."
    ],
    correct: 1
  },

  {
    id: "D1Q027", theme: 1, type: "qcm", source: "D 12.01",
    question: "En voie unique, une particularité d'arrêt est prévue à la fiche-train. Le conducteur doit-il seulement effectuer son arrêt en gare ?",
    choices: [
      "Non, il doit également marquer l'arrêt à l'aiguille d'entrée ou, en signalisation simplifiée, au repère d'entrée.",
      "Oui, sauf si un arrêt [C] est également prévu."
    ],
    correct: 0
  },

  {
    id: "D1Q028", theme: 1, type: "qcm", source: "D 12.01",
    question: "Un arrêt est ordonné par l'entreprise ferroviaire du train concerné. Celle-ci peut-elle le prescrire indépendamment du service chargé de la gestion des circulations ?",
    choices: [
      "Oui, puisqu'il s'agit d'un arrêt relevant de l'entreprise ferroviaire.",
      "Non, elle obtient préalablement son accord."
    ],
    correct: 1
  },


  // =====================================================
  // D 12.02 — SUPPRESSION D'UN ARRÊT RÉGULIER
  // =====================================================

  {
    id: "D1Q029", theme: 1, type: "qcm", source: "D 12.02",
    question: "Un arrêt régulier doit être supprimé dans une gare de voie unique. Le conducteur a été avisé verbalement à l'avance. Peut-il considérer cette information comme suffisante pour traverser la gare sans autre condition particulière ?",
    choices: [
      "Non, il doit notamment percevoir le signal à main d'AuM pour passer sans arrêt.",
      "Oui, l'avis préalable suffit dès lors que les signaux sont ouverts."
    ],
    correct: 0
  },

  {
    id: "D1Q030", theme: 1, type: "qcm", source: "D 12.02",
    question: "Dans une gare de voie unique, le conducteur avisé de la suppression de son arrêt régulier ne perçoit pas le signal à main d'AuM. Quelle conduite est prescrite ?",
    choices: [
      "Poursuivre si le signal de sortie est ouvert.",
      "S'arrêter."
    ],
    correct: 1
  },

  {
    id: "D1Q031", theme: 1, type: "qcm", source: "D 12.02",
    question: "Le conducteur n'a pas été informé à l'avance de la suppression de son arrêt régulier. À son arrivée en gare, le signal à main d'AuM lui est présenté. Que signifie cette présentation dans ce cas ?",
    choices: [
      "Elle peut permettre la suppression de l'arrêt ; le conducteur accuse réception et passe sans arrêt si rien ne s'y oppose.",
      "Elle ne peut être prise en compte qu'après que le train a marqué son arrêt régulier."
    ],
    correct: 0
  },

  {
    id: "D1Q032", theme: 1, type: "qcm", source: "D 12.02",
    question: "Un train est autorisé à passer sans arrêt dans un établissement PL et le conducteur en a été avisé. Une formalité supplémentaire est-elle normalement requise au passage ?",
    choices: [
      "Oui, une confirmation par signal à main d'AuM.",
      "Non."
    ],
    correct: 1
  },


  // =====================================================
  // D 12.03 / D 12.04 — POINTS D'ARRÊT SUR VP
  // =====================================================

  {
    id: "D1Q033", theme: 1, type: "qcm", source: "D 12.03",
    question: "Un train doit exceptionnellement être arrêté à 40 mètres en amont de son point d'arrêt habituel. En l'absence de repérage particulier, le conducteur doit-il obligatoirement avoir été prévenu de cette modification ?",
    choices: [
      "Non, l'obligation spécifique d'information concerne un arrêt à plus de 50 mètres en amont.",
      "Oui, toute modification du point d'arrêt impose un avis préalable."
    ],
    correct: 0
  },

  {
    id: "D1Q034", theme: 1, type: "qcm", source: "D 12.03",
    question: "Le train doit exceptionnellement être arrêté à plus de 50 mètres en amont du point habituel, mais son entrée en gare s'effectue en marche à vue. L'avis préalable du conducteur reste-t-il nécessaire ?",
    choices: [
      "Oui, sans exception.",
      "Non."
    ],
    correct: 1
  },

  {
    id: "D1Q035", theme: 1, type: "qcm", source: "D 12.03",
    question: "Le point d'arrêt exceptionnel doit être situé en aval du point d'arrêt habituel. Quelle disposition particulière est prévue ?",
    choices: [
      "Le conducteur reçoit en temps utile, avant l'arrêt, des ordres de manœuvre.",
      "Le conducteur dépasse de lui-même son point habituel en marche à vue jusqu'au point indiqué."
    ],
    correct: 0
  },

  {
    id: "D1Q036", theme: 1, type: "qcm", source: "D 12.03",
    question: "Dans une gare de voie unique, quel impératif complète la détermination habituelle du point d'arrêt sur voie principale ?",
    choices: [
      "Arrêter systématiquement la locomotive à l'extrémité du quai.",
      "S'arrêter avant le chevron pointe en haut ou, à défaut, avant le croisement de l'aiguille de sortie."
    ],
    correct: 1
  },

  {
    id: "D1Q037", theme: 1, type: "qcm", source: "D 12.04",
    question: "Un train sans arrêt normal est reçu sur une voie désignée d'arrêt général. Le signal de sortie est ouvert. Quelle règle s'applique ?",
    choices: [
      "Le conducteur s'arrête avant le signal de sortie, sauf cas prévu de passage sans arrêt.",
      "Le train peut poursuivre puisqu'il n'a pas d'arrêt normal et que le signal est ouvert."
    ],
    correct: 0
  },

  {
    id: "D1Q038", theme: 1, type: "qcm", source: "D 12.04",
    question: "Le livret de lignes prévoit la réception en marche à vue dans une gare d'arrêt général. D'où cette marche à vue peut-elle être imposée ?",
    choices: [
      "Uniquement depuis le signal d'entrée de la gare.",
      "Depuis l'origine du quai ou depuis un point désigné, notamment une pancarte MV."
    ],
    correct: 1
  },


  // =====================================================
  // D 12.05 — VOIE DE SERVICE
  // =====================================================

  {
    id: "D1Q039", theme: 1, type: "qcm", source: "D 12.05",
    question: "Un train est reçu sur une voie de service à entrée directe dont le signal de sortie est propre à cette seule voie. Le signal est ouvert. En l'absence d'ordres de manœuvre, doit-il s'arrêter ?",
    choices: [
      "Oui, au signal.",
      "Non, l'ouverture du signal dispense de l'arrêt."
    ],
    correct: 0
  },

  {
    id: "D1Q040", theme: 1, type: "qcm", source: "D 12.05",
    question: "Même situation, mais la voie de service est désignée « voie de circulation » et le signal propre à cette voie autorise la poursuite du mouvement. L'arrêt reste-t-il imposé ?",
    choices: [
      "Oui, la notion de voie de circulation ne modifie pas le point d'arrêt.",
      "Non."
    ],
    correct: 1
  },

  {
    id: "D1Q041", theme: 1, type: "qcm", source: "D 12.05",
    question: "À l'extrémité d'un groupe de voies de service convergentes, le signal de sortie s'adresse à plusieurs voies. Où le conducteur doit-il normalement arrêter son train ?",
    choices: [
      "De manière à ne pas engager le premier croisement du groupe d'aiguilles de sortie.",
      "Au droit du signal de groupe, même si cela engage le premier croisement."
    ],
    correct: 0
  },

  {
    id: "D1Q042", theme: 1, type: "qcm", source: "D 12.05",
    question: "La queue du train risque d'engager les aiguilles d'accès à la voie de service après l'arrêt. Le conducteur reçoit en temps utile l'ordre de dépasser son point d'arrêt habituel. Doit-il d'abord marquer l'arrêt à ce point ?",
    choices: [
      "Oui, puis reprendre en mouvement de manœuvre.",
      "Non, il s'avance sans marquer l'arrêt en obéissant aux ordres de manœuvre."
    ],
    correct: 1
  },

  {
    id: "D1Q043", theme: 1, type: "qcm", source: "D 12.05",
    question: "En double voie, un train doit être reçu par refoulement sur voie de service. Le conducteur a été préalablement avisé conformément au référentiel. Que fait-il au point d'arrêt habituel ?",
    choices: [
      "Il le dépasse sans marquer l'arrêt, en marche en manœuvre, jusqu'au point prévu.",
      "Il doit obligatoirement y marquer l'arrêt avant de commencer le refoulement."
    ],
    correct: 0
  },

  {
    id: "D1Q044", theme: 1, type: "qcm", source: "D 12.05",
    question: "Une voie de service comporte des « repères de garage ». Leur seule présence suffit-elle à déterminer celui auquel le conducteur doit s'arrêter ?",
    choices: [
      "Oui, le conducteur choisit celui correspondant à la longueur de son train.",
      "Non, il doit avoir été préalablement avisé par l'exploitant ferroviaire du repère à respecter."
    ],
    correct: 1
  },


  // =====================================================
  // D 12.06 — RÉCEPTION SUR VOIE OCCUPÉE
  // =====================================================

  {
    id: "D1Q045", theme: 1, type: "qcm", source: "D 12.06",
    question: "Dans le cas normal, une réception sur voie occupée est-elle admise pour un train qui n'a aucun arrêt normal dans l'établissement ?",
    choices: [
      "Non ; cela relève d'un cas exceptionnel soumis à des dispositions particulières.",
      "Oui, dès lors que le conducteur en est avisé."
    ],
    correct: 0
  },

  {
    id: "D1Q046", theme: 1, type: "qcm", source: "D 12.06",
    question: "Un train ayant un arrêt normal est reçu sur voie occupée. La signalisation présentée n'impose pas la marche à vue. Quelle attitude est néanmoins demandée au conducteur ?",
    choices: [
      "Conserver sa marche normale jusqu'à perception du véhicule occupant la voie.",
      "Se mettre en mesure de s'arrêter sur une distance réduite."
    ],
    correct: 1
  },

  {
    id: "D1Q047", theme: 1, type: "qcm", source: "D 12.06",
    question: "Un train sans arrêt normal doit exceptionnellement être reçu sur voie occupée en l'absence de signalisation convenable. À quel moment le conducteur est-il avisé verbalement ?",
    choices: [
      "Après arrêt au signal commandant l'accès à l'itinéraire correspondant.",
      "En marche, avant le signal, afin d'éviter un arrêt inutile."
    ],
    correct: 0
  },

  {
    id: "D1Q048", theme: 1, type: "qcm", source: "D 12.06",
    question: "Dans ce cas exceptionnel de réception sur voie occupée sans arrêt normal et sans signalisation convenable, à partir d'où le conducteur est-il guidé par ordres de manœuvre ?",
    choices: [
      "Depuis le signal commandant l'accès à l'itinéraire.",
      "Depuis l'origine du quai ou de la voie jusqu'au point où l'arrêt doit être obtenu."
    ],
    correct: 1
  },

  {
    id: "D1Q049", theme: 1, type: "qcm", source: "D 12.06",
    question: "Sur voie principale, de nuit dans une zone non éclairée, les véhicules stationnant sur la voie de réception ne sont pas repérés par un feu rouge ni par une signalisation d'arrière. Quelle mesure est prévue ?",
    choices: [
      "Le conducteur reçu sur cette voie est guidé par des ordres de manœuvre.",
      "La réception sur cette voie devient systématiquement interdite."
    ],
    correct: 0
  },

  {
    id: "D1Q050", theme: 1, type: "qcm", source: "D 12.06",
    question: "Lors d'une réception sur voie occupée, la règle prévoit si possible un arrêt à environ 20 mètres du train précédent. Une signalisation particulière matérialise cependant un autre point d'arrêt. Quelle indication prévaut ?",
    choices: [
      "La distance d'environ 20 mètres.",
      "La signalisation particulière ou les signaux de manœuvre."
    ],
    correct: 1
  },


  // =====================================================
  // D 13.01 à D 13.03 — PROCESSUS DE DÉPART / PPE / ST
  // =====================================================

  {
    id: "D1Q051", theme: 1, type: "qcm", source: "D 13.01",
    question: "Après un arrêt prévu dans un établissement où la composition du train n'a pas été remaniée, le conducteur doit-il refaire systématiquement l'assemblage PPE + ST + AuM + heure de départ ?",
    choices: [
      "Non : le PPE n'est requis dans ce processus qu'à l'origine ou lorsque la composition a été remaniée.",
      "Oui : les quatre parties sont systématiquement requises après tout arrêt prévu."
    ],
    correct: 0
  },

  {
    id: "D1Q052", theme: 1, type: "qcm", source: "D 13.02",
    question: "L'essai de frein vient d'être déclaré « terminé ». Le conducteur peut-il en déduire que le PPE sol est terminé ?",
    choices: [
      "Oui, lorsque l'essai de frein était prévu.",
      "Non, le résultat satisfaisant de l'essai de frein ne constitue pas à lui seul le « PPE terminé »."
    ],
    correct: 1
  },

  {
    id: "D1Q053", theme: 1, type: "qcm", source: "D 13.02",
    question: "Un agent est intervenu dans une opération relative à la préparation du train. Quelle conséquence cela entraîne-t-il pour le PPE ?",
    choices: [
      "Un PPE sol doit être transmis au conducteur.",
      "Le conducteur peut valider lui-même le PPE sol après contrôle visuel."
    ],
    correct: 0
  },

  {
    id: "D1Q054", theme: 1, type: "qcm", source: "D 13.02",
    question: "Le conducteur a obtenu « PPE sol terminé ». Son paramétrage KVB n'est pas encore réalisé. Peut-il considérer le train prêt pour expédition ?",
    choices: [
      "Oui, le paramétrage KVB appartient au processus de conduite et non au PPE.",
      "Non, le paramétrage bord appartient au PPE bord."
    ],
    correct: 1
  },

  {
    id: "D1Q055", theme: 1, type: "qcm", source: "D 13.02",
    question: "Le PPE sol et le PPE bord sont terminés. Cela suffit-il, à lui seul, à autoriser le départ du train ?",
    choices: [
      "Non.",
      "Oui, sous réserve que le signal de sortie ne soit pas fermé."
    ],
    correct: 0
  },

  {
    id: "D1Q056", theme: 1, type: "qcm", source: "D 13.03",
    question: "Le conducteur vient de recevoir « ST terminé ». Peut-il se mettre en mouvement sur cette seule assurance ?",
    choices: [
      "Oui, le ST constitue l'étape finale du processus de départ.",
      "Non."
    ],
    correct: 1
  },


  // =====================================================
  // D 13.04 — AUTORISATION DE MOUVEMENT
  // =====================================================

  {
    id: "D1Q057", theme: 1, type: "qcm", source: "D 13.04",
    question: "Après un arrêt prescrit en dehors d'un établissement, une nouvelle AuM est-elle requise pour reprendre la marche ?",
    choices: [
      "Non.",
      "Oui, comme après tout arrêt prévu."
    ],
    correct: 0
  },

  {
    id: "D1Q058", theme: 1, type: "qcm", source: "D 13.04",
    question: "Après réception sur voie de service, le conducteur doit-il obtenir une AuM avant de se remettre en mouvement, même si l'arrêt n'était pas prévu à l'horaire ?",
    choices: [
      "Non, seulement après un arrêt prévu.",
      "Oui, dans tous les cas."
    ],
    correct: 1
  },

  {
    id: "D1Q059", theme: 1, type: "qcm", source: "D 13.04",
    question: "À l'établissement origine, le signal de sortie est visible et ouvert. Il s'agit d'un signal de groupe avec TIP. Quelle condition permet au conducteur de considérer cette ouverture comme son AuM ?",
    choices: [
      "Le TIP doit indiquer le numéro de la voie sur laquelle se trouve le train.",
      "L'ouverture du signal de groupe suffit, quel que soit le numéro présenté au TIP."
    ],
    correct: 0
  },

  {
    id: "D1Q060", theme: 1, type: "qcm", source: "D 13.04",
    question: "À l'origine, le signal de sortie n'est pas visible. En règle générale, que doit faire le conducteur si aucune disposition particulière ne l'autorise à s'avancer ?",
    choices: [
      "S'avancer en marche à vue jusqu'à voir le signal.",
      "Solliciter et recevoir l'AuM auprès du SGC."
    ],
    correct: 1
  },

  {
    id: "D1Q061", theme: 1, type: "qcm", source: "D 13.04",
    question: "Le livret de lignes autorise, lorsque le signal de sortie n'est pas visible, à s'avancer en marche à vue jusqu'à pouvoir l'observer. Le conducteur peut-il commencer ce mouvement avant l'heure de départ ?",
    choices: [
      "Non, les autres conditions du processus de départ, dont l'heure, doivent être réunies.",
      "Oui, puisqu'il ne s'agit pas encore du départ effectif du train."
    ],
    correct: 0
  },

  {
    id: "D1Q062", theme: 1, type: "qcm", source: "D 13.04",
    question: "À l'origine, le signal de sortie n'est pas visible, mais en BAL un panneau à plaque F est visible entre le point de stationnement et ce signal. Lorsque les autres conditions de départ sont réunies, le conducteur peut-il s'avancer vers le signal ?",
    choices: [
      "Non, seule une mention spécifique du livret de lignes le permet.",
      "Oui."
    ],
    correct: 1
  },

  {
    id: "D1Q063", theme: 1, type: "qcm", source: "D 13.04",
    question: "Après un arrêt prévu dans un établissement PL, aucune disposition particulière ni avis contraire du SGC n'existe. Qu'est-ce qui constitue l'AuM ?",
    choices: [
      "La mention PL portée aux documents horaires.",
      "Uniquement l'ouverture du signal de sortie."
    ],
    correct: 0
  },

  {
    id: "D1Q064", theme: 1, type: "qcm", source: "D 13.04",
    question: "Après un arrêt prévu sur voie de service, le signal de groupe est ouvert mais aucun TIP ou TLC ne permet d'identifier la voie concernée. Quelle disposition est requise ?",
    choices: [
      "Le conducteur peut partir si le signal de groupe ne présente aucune indication restrictive.",
      "Un échange doit permettre d'identifier le numéro du train et la voie sur laquelle il se situe."
    ],
    correct: 1
  },

  {
    id: "D1Q065", theme: 1, type: "qcm", source: "D 13.04",
    question: "Un formulaire de franchissement d'un signal d'arrêt est délivré au conducteur pour le départ du train. Quelle valeur a-t-il vis-à-vis de l'AuM ?",
    choices: [
      "Sa délivrance constitue l'AuM.",
      "Il ne constitue jamais une AuM."
    ],
    correct: 0
  },

  {
    id: "D1Q066", theme: 1, type: "qcm", source: "D 13.04",
    question: "Un formulaire de franchissement est remis pour effectuer un mouvement précédant le départ proprement dit du train. Constitue-t-il déjà l'AuM du départ ?",
    choices: [
      "Oui, puisqu'il autorise un mouvement.",
      "Non."
    ],
    correct: 1
  },

  {
    id: "D1Q067", theme: 1, type: "qcm", source: "D 13.04",
    question: "Après un arrêt prévu de plus de 3 minutes, le conducteur se remet en mouvement. Quelle règle générale s'applique jusqu'au signal commandant l'entrée du canton suivant ?",
    choices: [
      "Observer la marche à vue.",
      "Se mettre seulement en mesure de respecter le signal annoncé."
    ],
    correct: 0
  },

  {
    id: "D1Q068", theme: 1, type: "qcm", source: "D 13.04",
    question: "Après un arrêt prévu de plus de 3 minutes, le conducteur n'a toujours pas atteint la fin du canton après avoir parcouru 3 km. Dans les cas où cette limite est prévue, peut-il reprendre la marche normale si rien ne s'y oppose ?",
    choices: [
      "Non, la marche à vue est impérative jusqu'à la fin effective du canton.",
      "Oui."
    ],
    correct: 1
  },

  {
    id: "D1Q069", theme: 1, type: "qcm", source: "D 13.04",
    question: "L'arrêt prévu ne dépasse pas 3 minutes et se situe entre le signal d'annonce et le signal d'arrêt correspondant. Le signal d'annonce avait été franchi fermé. Quelle conduite est prescrite à la reprise ?",
    choices: [
      "Se mettre en mesure de respecter les indications du signal annoncé.",
      "Observer systématiquement la marche à vue jusqu'au canton suivant."
    ],
    correct: 0
  },

  {
    id: "D1Q070", theme: 1, type: "qcm", source: "D 13.04",
    question: "Même situation, mais le signal d'annonce avait été franchi ouvert et l'arrêt ne dépasse pas 3 minutes. Quelle reprise est prévue ?",
    choices: [
      "Marche à vue jusqu'au signal annoncé.",
      "Marche normale."
    ],
    correct: 1
  },

  {
    id: "D1Q071", theme: 1, type: "qcm", source: "D 13.04",
    question: "En BM, le train a son origine dans un établissement PL situé entre le signal d'annonce et le signal d'arrêt correspondant. Comment le conducteur doit-il se comporter ?",
    choices: [
      "Comme si le signal d'annonce avait été rencontré fermé, sauf indication contraire de l'agent de desserte.",
      "Comme si le signal d'annonce avait été rencontré ouvert, sauf indication contraire."
    ],
    correct: 0
  },

  {
    id: "D1Q072", theme: 1, type: "qcm", source: "D 13.04",
    question: "Le conducteur se met en mouvement en BA depuis une voie dont la sortie est commandée par un feu blanc. Jusqu'où doit-il observer la marche à vue ?",
    choices: [
      "Jusqu'au dégagement des appareils de voie.",
      "Jusqu'au signal commandant l'entrée du canton suivant."
    ],
    correct: 1
  },

  {
    id: "D1Q073", theme: 1, type: "qcm", source: "D 13.04",
    question: "Dans ce même cas en BA, quelle règle supplémentaire concerne les appareils de voie de la zone correspondante ?",
    choices: [
      "Ne pas dépasser 30 km/h.",
      "La marche à vue suffit ; aucun taux particulier n'est prévu."
    ],
    correct: 0
  },

  {
    id: "D1Q074", theme: 1, type: "qcm", source: "D 13.04",
    question: "En BM, le conducteur part d'une voie de service sans signal de sortie. Aucun sémaphore ni carré n'existe avant la sortie de la gare. Jusqu'où observe-t-il la marche à vue ?",
    choices: [
      "Jusqu'au premier signal rencontré après la gare.",
      "Dans toute la zone du poste."
    ],
    correct: 1
  },

  {
    id: "D1Q075", theme: 1, type: "qcm", source: "D 13.04",
    question: "Au départ d'une voie principale vers une autre voie principale, aucune information ne renseigne sur la vitesse limite des appareils de voie. Après les avoir franchis à 30 km/h au plus, quand la vitesse normale peut-elle être reprise ?",
    choices: [
      "Lorsque le dernier véhicule a franchi l'aiguille ou la dernière aiguille concernée.",
      "Dès que l'engin moteur a franchi la dernière aiguille."
    ],
    correct: 0
  },

  {
    id: "D1Q076", theme: 1, type: "qcm", source: "D 13.04",
    question: "Au départ d'une voie de service, jusqu'à quand la vitesse est-elle limitée à 30 km/h en l'absence d'indication autorisant un taux supérieur ?",
    choices: [
      "Jusqu'au franchissement de la dernière aiguille par l'engin moteur.",
      "Jusqu'à ce que le train soit parvenu en entier sur la voie principale."
    ],
    correct: 1
  },


  // =====================================================
  // D 13.05 / D 13.06 — REPRISE APRÈS ARRÊT
  // =====================================================

  {
    id: "D1Q077", theme: 1, type: "qcm", source: "D 13.05",
    question: "Après un arrêt accidentel sur une ligne à signalisation au sol, le conducteur n'a pas atteint la fin du canton après 3 km de marche à vue. Peut-il reprendre la marche normale si rien ne s'y oppose ?",
    choices: [
      "Oui.",
      "Non, il doit obligatoirement atteindre le signal commandant l'entrée du canton suivant."
    ],
    correct: 0
  },

  {
    id: "D1Q078", theme: 1, type: "qcm", source: "D 13.05",
    question: "À la suite d'un arrêt accidentel dans un établissement, des agents sédentaires sont intervenus sur le train. Quelle assurance supplémentaire doit être obtenue avant la reprise ?",
    choices: [
      "Une nouvelle AuM dans tous les cas.",
      "L'assurance que le service du train est terminé."
    ],
    correct: 1
  },

  {
    id: "D1Q079", theme: 1, type: "qcm", source: "D 13.06",
    question: "Après le départ, un signal d'arrêt à main impose l'arrêt d'urgence du train. Une fois la situation traitée, comment cet arrêt doit-il être considéré pour la reprise de marche ?",
    choices: [
      "Comme un arrêt accidentel.",
      "Comme un arrêt prescrit."
    ],
    correct: 0
  },


  // =====================================================
  // D 13.07 — POUSSE
  // =====================================================

  {
    id: "D1Q080", theme: 1, type: "qcm", source: "D 13.07",
    question: "Une machine de pousse non attelée perd le contact avec le train poussé. Quelle conduite est prescrite ?",
    choices: [
      "Rattraper le train en marche à vue afin de reprendre la pousse dès que possible.",
      "Ne pas chercher à le rattraper, se mettre aussitôt que possible en marche à vue et le suivre à une distance suffisante."
    ],
    correct: 1
  },

  {
    id: "D1Q081", theme: 1, type: "qcm", source: "D 13.07",
    question: "Le train poussé s'arrête avant d'atteindre le point limite du parcours de pousse. Le conducteur de la machine de pousse peut-il reprendre spontanément la pousse lorsque le train redémarre ?",
    choices: [
      "Non, il doit avoir reçu la demande du conducteur de tête.",
      "Oui, dès qu'il constate la remise en mouvement du train."
    ],
    correct: 0
  },

  {
    id: "D1Q082", theme: 1, type: "qcm", source: "D 13.07",
    question: "Une machine de pousse non attelée a perdu le contact avec le train. Jusqu'où peut-elle poursuivre après s'être mise en marche à vue ?",
    choices: [
      "Jusqu'à avoir repris contact avec le train, sans dépasser le canton suivant.",
      "Au plus tard jusqu'au point limite de pousse."
    ],
    correct: 1
  },

  {
    id: "D1Q083", theme: 1, type: "qcm", source: "D 13.07",
    question: "Le parcours de pousse comporte au moins un canton entier de BM. La machine de pousse s'arrête alors que le train a poursuivi sa marche. Comment doit-elle être considérée ?",
    choices: [
      "Elle doit être protégée comme un obstacle.",
      "Elle peut poursuivre en marche à vue jusqu'au point limite de pousse sans autre mesure."
    ],
    correct: 0
  },

  {
    id: "D1Q084", theme: 1, type: "qcm", source: "D 13.07",
    question: "Dans la situation précédente, la machine de pousse est arrêtée sur une ligne à voie unique. Dans quel sens la protection doit-elle être réalisée ?",
    choices: [
      "Uniquement du côté d'où peut provenir le train suivant.",
      "Dans les deux sens."
    ],
    correct: 1
  }

];
