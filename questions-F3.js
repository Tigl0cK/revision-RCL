const QUESTIONS_PARTIE_F3 = [

  // ============================================================
  // F30.01 — Extinction, aspect anormal, position douteuse
  // ============================================================

  {
    id: "F3Q001",
    theme: 3,
    question: "De nuit, un signal mécanique est éteint mais le conducteur reconnaît avec certitude sa cocarde, son aile ou son tableau en position d'ouverture. Comment doit-il le considérer ?",
    choices: [
      "Comme fermé, l'extinction primant sur la position mécanique.",
      "Comme ouvert, tout en signalant l'anomalie."
    ],
    correct: 1,
    source: "F 30.01"
  },
  {
    id: "F3Q002",
    theme: 3,
    question: "De nuit, un signal mécanique est éteint et le conducteur ne peut pas reconnaître avec certitude la position de sa cocarde, de son aile ou de son tableau. Quelle règle s'applique ?",
    choices: [
      "Le considérer comme fermé.",
      "Le considérer comme ouvert si aucun signal à distance ne l'annonçait fermé."
    ],
    correct: 0,
    source: "F 30.01"
  },
  {
    id: "F3Q003",
    theme: 3,
    question: "Un panneau de forme non circulaire est éteint. Le conducteur peut obtenir l'arrêt avant ce panneau. Quelle indication doit-il appliquer ?",
    choices: [
      "Celle d'un sémaphore fermé.",
      "Celle d'un panneau présentant un feu rouge fixe."
    ],
    correct: 1,
    source: "F 30.01"
  },
  {
    id: "F3Q004",
    theme: 3,
    question: "Un panneau de forme non circulaire est éteint et l'arrêt ne peut pas être obtenu avant celui-ci. Quelle mesure s'ajoute à l'arrêt d'urgence ?",
    choices: [
      "Baisser d'urgence le ou les pantographes.",
      "Déclencher immédiatement le signal d'alerte radio."
    ],
    correct: 0,
    source: "F 30.01"
  },
  {
    id: "F3Q005",
    theme: 3,
    question: "Un panneau de forme circulaire est éteint. Le conducteur reconnaît avec certitude une plaque A. À quelle indication doit-il se conformer ?",
    choices: [
      "À celle d'un disque fermé.",
      "À celle d'un avertissement fermé."
    ],
    correct: 1,
    source: "F 30.01"
  },
  {
    id: "F3Q006",
    theme: 3,
    question: "Un panneau de forme circulaire est éteint et le conducteur reconnaît avec certitude une plaque D. Comment doit-il se comporter ?",
    choices: [
      "Comme en présence d'un disque fermé.",
      "Comme en présence d'un avertissement fermé."
    ],
    correct: 0,
    source: "F 30.01"
  },
  {
    id: "F3Q007",
    theme: 3,
    question: "Au passage d'un panneau circulaire éteint, sa plaque d'identification n'a pas pu être reconnue. Quelle indication doit être retenue ?",
    choices: [
      "L'avertissement fermé, par défaut.",
      "Le disque fermé."
    ],
    correct: 1,
    source: "F 30.01"
  },
  {
    id: "F3Q008",
    theme: 3,
    question: "Un tableau lumineux normalement susceptible d'être présenté est rencontré éteint. Quelle règle générale s'applique ?",
    choices: [
      "Le considérer comme fermé.",
      "Le considérer comme non présenté."
    ],
    correct: 0,
    source: "F 30.01"
  },
  {
    id: "F3Q009",
    theme: 3,
    question: "Un TIV à distance lumineux est rencontré éteint sur une ligne à signalisation au sol. Quelle procédure spécifique doit être appliquée ?",
    choices: [
      "La procédure relative au panneau non circulaire éteint.",
      "La procédure de non-reconnaissance de l'indication donnée par un TIV à distance."
    ],
    correct: 1,
    source: "F 30.01"
  },
  {
    id: "F3Q010",
    theme: 3,
    question: "Un panneau présente un aspect anormal. Comment cette situation est-elle traitée ?",
    choices: [
      "Comme la rencontre d'un panneau éteint.",
      "Comme un feu rouge fixe dans tous les cas."
    ],
    correct: 0,
    source: "F 30.01"
  },
  {
    id: "F3Q011",
    theme: 3,
    question: "Un signal mécanique est en position douteuse, ni franchement ouvert ni franchement fermé. Comment doit-il être considéré ?",
    choices: [
      "Comme un signal éteint dont il faut rechercher la plaque d'identification.",
      "Comme fermé."
    ],
    correct: 1,
    source: "F 30.01"
  },
  {
    id: "F3Q012",
    theme: 3,
    question: "Une cascade de feux est aperçue sur un panneau mais elle ne se produit plus et ne subsiste pas lors du franchissement. Quelle indication doit finalement être appliquée ?",
    choices: [
      "Celle effectivement présentée par le signal au franchissement.",
      "L'indication la plus impérative susceptible d'avoir été présentée pendant la cascade."
    ],
    correct: 0,
    source: "F 30.01"
  },

  // ============================================================
  // F30.02 / F30.03 — Signalement et signal annulé éclairé
  // ============================================================

  {
    id: "F3Q013",
    theme: 3,
    question: "Une anomalie de signalisation imposant l'arrêt doit être signalée alors que la radio fonctionne. Quel support de communication est prévu ?",
    choices: [
      "Le bulletin de communication ANSI (BC 59).",
      "Uniquement une communication verbale par radio."
    ],
    correct: 0,
    source: "F 30.02"
  },
  {
    id: "F3Q014",
    theme: 3,
    question: "La radio ne permet pas de signaler une anomalie de signalisation. Quelle conduite est prévue ?",
    choices: [
      "Poursuivre jusqu'à la gare d'arrêt prévue au BF.",
      "S'arrêter au premier téléphone de voie, à la première gare ou au premier poste ouvert au service."
    ],
    correct: 1,
    source: "F 30.02"
  },
  {
    id: "F3Q015",
    theme: 3,
    question: "Après le signalement opérationnel d'une anomalie de signalisation, quelle formalité complémentaire est prévue vis-à-vis du PÔLE TRAIN ?",
    choices: [
      "Rendre compte de l'incident et annoter le bulletin de sécurité.",
      "Annoter uniquement le carnet de bord de l'engin moteur."
    ],
    correct: 0,
    source: "F 30.02"
  },
  {
    id: "F3Q016",
    theme: 3,
    question: "Le conducteur, qui n'en a pas été avisé, rencontre un panneau annulé par croix de Saint-André mais néanmoins éclairé. Comment doit-il le traiter ?",
    choices: [
      "Comme un signal annulé, l'annulation restant prioritaire.",
      "Comme un panneau en service et éteint."
    ],
    correct: 1,
    source: "F 30.03"
  },
  {
    id: "F3Q017",
    theme: 3,
    question: "Le conducteur non avisé rencontre un signal mécanique annulé mais éclairé. Quelle conduite s'applique ?",
    choices: [
      "Le considérer comme en service et fermé.",
      "Ne pas en tenir compte puisque la croix de Saint-André reste visible."
    ],
    correct: 0,
    source: "F 30.03"
  },

  // ============================================================
  // F30.04 / F30.05 — Franchissement intempestif carré
  // ============================================================

  {
    id: "F3Q018",
    theme: 3,
    question: "Le conducteur craint de dépasser intempestivement un carré fermé. À quel moment l'abaissement des pantographes doit-il être entrepris ?",
    choices: [
      "Seulement après avoir effectivement dépassé le signal.",
      "Dès qu'il craint de dépasser intempestivement le signal."
    ],
    correct: 1,
    source: "F 30.04"
  },
  {
    id: "F3Q019",
    theme: 3,
    question: "Après franchissement intempestif d'un carré fermé, le point protégé est engagé ou présumé engagé. Quelle mesure s'impose ?",
    choices: [
      "Protéger le train comme un obstacle.",
      "Attendre les instructions de l'aiguilleur avant toute protection."
    ],
    correct: 0,
    source: "F 30.04"
  },
  {
    id: "F3Q020",
    theme: 3,
    question: "Après franchissement intempestif d'un carré, le point protégé est présumé engagé sur une ligne à voie unique. Quelle protection est prioritaire ?",
    choices: [
      "La protection arrière du train.",
      "La protection vis-à-vis des circulations de sens contraire."
    ],
    correct: 1,
    source: "F 30.04"
  },
  {
    id: "F3Q021",
    theme: 3,
    question: "Après franchissement intempestif d'un carré, l'engin moteur a été mis hors état de marche. Peut-il être remis en état avant réception de l'autorisation de franchissement ?",
    choices: [
      "Oui, si nécessaire pour assurer des fonctions utiles comme la production d'air ou la charge batterie.",
      "Non, aucune remise en état n'est admise avant réception de l'autorisation."
    ],
    correct: 0,
    source: "F 30.04"
  },
  {
    id: "F3Q022",
    theme: 3,
    question: "Après franchissement intempestif d'un carré, le conducteur a identifié avec certitude son numéro grâce au livret de ligne. Doit-il néanmoins retourner au pied du signal ?",
    choices: [
      "Oui, la lecture directe de la plaque est obligatoire.",
      "Non, il en est dispensé s'il a l'assurance du numéro du signal."
    ],
    correct: 1,
    source: "F 30.04"
  },
  {
    id: "F3Q023",
    theme: 3,
    question: "Après franchissement intempestif d'un carré, le conducteur n'a pas l'assurance du numéro du signal concerné. Que doit-il faire ?",
    choices: [
      "Se rendre au pied du signal franchi pour observer sa plaque de repérage.",
      "Demander systématiquement ce numéro au régulateur sans quitter la cabine."
    ],
    correct: 0,
    source: "F 30.04"
  },
  {
    id: "F3Q024",
    theme: 3,
    question: "Lors de la reprise après franchissement intempestif d'un carré, l'indication FC clignote. Quelle action est prévue ?",
    choices: [
      "Réarmer uniquement après remise en mouvement.",
      "Appuyer sur le ou les boutons FC avant d'appliquer les prescriptions de l'autorisation reçue."
    ],
    correct: 1,
    source: "F 30.04"
  },
  {
    id: "F3Q025",
    theme: 3,
    question: "Le conducteur franchit un carré qu'il a vu ouvert mais perçoit au franchissement l'explosion de pétards ou de détonateurs. Comment doit-il interpréter la situation ?",
    choices: [
      "Comme s'il avait franchi intempestivement le carré fermé.",
      "Comme une anomalie isolée des pétards, puisque le carré a été vu ouvert."
    ],
    correct: 0,
    source: "F 30.05"
  },
  {
    id: "F3Q026",
    theme: 3,
    question: "Après explosion de pétards au franchissement d'un carré vu ouvert, comment l'autorisation ultérieure est-elle délivrée ?",
    choices: [
      "Comme une simple autorisation de remise en marche après arrêt accidentel.",
      "Comme si le train était arrêté devant le signal fermé."
    ],
    correct: 1,
    source: "F 30.05"
  },

  // ============================================================
  // F30.06 à F30.08 — Sémaphores BM / BAL / BAPR
  // ============================================================

  {
    id: "F3Q027",
    theme: 3,
    question: "Un sémaphore de BM fermé est franchi intempestivement à la sortie d'une gare d'une ligne à voie unique. Quelle mesure s'ajoute à l'arrêt d'urgence et à la baisse des pantographes ?",
    choices: [
      "Protéger le train comme un obstacle vis-à-vis des circulations de sens contraire.",
      "Repartir immédiatement en marche à vue jusqu'au signal suivant."
    ],
    correct: 0,
    source: "F 30.06"
  },
  {
    id: "F3Q028",
    theme: 3,
    question: "Pour reprendre la marche après franchissement intempestif d'un sémaphore de BM fermé, quelle condition est requise ?",
    choices: [
      "Attendre 15 minutes puis pénétrer en canton occupé.",
      "Se faire reconnaître et recevoir l'autorisation de franchissement appropriée."
    ],
    correct: 1,
    source: "F 30.06"
  },
  {
    id: "F3Q029",
    theme: 3,
    question: "Après franchissement intempestif d'un sémaphore de BAL fermé, le conducteur l'a reconnu avec certitude comme tel au passage. Quelle reprise est prévue ?",
    choices: [
      "Repartir en marche à vue jusqu'à la fin du canton qui suit ce signal.",
      "Attendre obligatoirement une autorisation de franchissement."
    ],
    correct: 0,
    source: "F 30.07"
  },
  {
    id: "F3Q030",
    theme: 3,
    question: "Après franchissement intempestif d'un signal fermé en BAL, le conducteur n'a pas reconnu avec certitude au passage qu'il s'agissait d'un sémaphore. Peut-il appliquer directement la reprise en marche à vue ?",
    choices: [
      "Oui, dès lors que le panneau est identifié comme appartenant au BAL.",
      "Non, il doit se rendre au pied du panneau pour en observer les indications."
    ],
    correct: 1,
    source: "F 30.07"
  },
  {
    id: "F3Q031",
    theme: 3,
    question: "Après franchissement intempestif d'un sémaphore de BAPR fermé, quelle autorisation permet la reprise ?",
    choices: [
      "Un ordre verbal de pénétrer en canton occupé.",
      "Une autorisation écrite de franchissement de type C."
    ],
    correct: 0,
    source: "F 30.08"
  },
  {
    id: "F3Q032",
    theme: 3,
    question: "Après franchissement intempestif d'un sémaphore de BAPR fermé, quelle marche doit être observée après autorisation ?",
    choices: [
      "La marche à vue jusqu'au premier signal rencontré.",
      "La marche à vue jusqu'à la fin du canton qui suit ce signal."
    ],
    correct: 1,
    source: "F 30.08"
  },

  // ============================================================
  // F30.09 à F30.12 — Signal d'arrêt / impossibilité de reconnaître
  // ============================================================

  {
    id: "F3Q033",
    theme: 3,
    question: "Le conducteur est arrêté devant un sémaphore de BAPR fermé et ne peut se faire reconnaître. Une consigne est affichée près du téléphone ou du signal. Quelle règle prime ?",
    choices: [
      "Appliquer les prescriptions de cette consigne.",
      "Attendre systématiquement 15 minutes avant tout franchissement."
    ],
    correct: 0,
    source: "F 30.12"
  },
  {
    id: "F3Q034",
    theme: 3,
    question: "Devant un sémaphore de BAPR fermé, le conducteur ne peut se faire reconnaître et aucune consigne n'est affichée. À partir de quel instant est décomptée l'attente réglementaire ?",
    choices: [
      "À partir de la première tentative de communication.",
      "À partir de l'arrêt."
    ],
    correct: 1,
    source: "F 30.12"
  },
  {
    id: "F3Q035",
    theme: 3,
    question: "Après l'attente prévue devant un sémaphore de BAPR fermé sans possibilité de se faire reconnaître, quelle action précède son franchissement ?",
    choices: [
      "Appuyer sur le ou les boutons FC.",
      "Réarmer systématiquement la répétition des signaux."
    ],
    correct: 0,
    source: "F 30.12"
  },
  {
    id: "F3Q036",
    theme: 3,
    question: "Après franchissement d'un sémaphore de BAPR fermé dans l'impossibilité de se faire reconnaître, un panneau circulaire rencontré ensuite présente une indication permettant normalement une marche moins restrictive. Peut-on cesser la marche à vue ?",
    choices: [
      "Oui, si ce panneau est ouvert.",
      "Non, le franchissement d'un panneau circulaire n'autorise jamais à cesser la marche à vue imposée dans cette situation."
    ],
    correct: 1,
    source: "F 30.12"
  },
  {
    id: "F3Q037",
    theme: 3,
    question: "Après franchissement d'un sémaphore de BAPR fermé sans avoir pu se faire reconnaître, jusqu'où la marche à vue est-elle observée ?",
    choices: [
      "Jusqu'à la fin du canton qui suit ce sémaphore.",
      "Uniquement jusqu'au premier panneau rencontré."
    ],
    correct: 0,
    source: "F 30.12"
  },
  {
    id: "F3Q038",
    theme: 3,
    question: "Après avoir franchi un sémaphore de BAPR dans l'impossibilité de se faire reconnaître, le conducteur atteint le signal d'entrée du canton suivant. Quelle particularité s'applique ?",
    choices: [
      "Il poursuit sans arrêt si le signal est ouvert.",
      "Il s'arrête à ce signal et tente de se faire reconnaître."
    ],
    correct: 1,
    source: "F 30.12"
  },
  {
    id: "F3Q039",
    theme: 3,
    question: "Au signal d'entrée du canton suivant, le conducteur reste dans l'impossibilité de se faire reconnaître après avoir appliqué la procédure BAPR. Quelle suite est prévue ?",
    choices: [
      "Reprendre la marche et rendre compte à la première gare d'arrêt normal ou accidentel.",
      "Rester arrêté jusqu'à établissement d'une communication."
    ],
    correct: 0,
    source: "F 30.12"
  },

  // ============================================================
  // F30.15 — TIV à distance non reconnu
  // ============================================================

  {
    id: "F3Q040",
    theme: 3,
    question: "Le conducteur n'a pas pu reconnaître le taux présenté par un TIV à distance. Quelle mesure doit-il prendre sans attendre d'atteindre le TIV d'exécution ?",
    choices: [
      "Maintenir la vitesse précédente jusqu'à identification du TIV d'exécution.",
      "Se mettre aussitôt que possible en marche à vue."
    ],
    correct: 1,
    source: "F 30.15"
  },
  {
    id: "F3Q041",
    theme: 3,
    question: "À partir de quel point est comptée la distance minimale de marche à vue imposée après non-reconnaissance d'un TIV à distance ?",
    choices: [
      "À partir du TIV à distance.",
      "À partir du point où le conducteur commence effectivement à observer la marche à vue."
    ],
    correct: 0,
    source: "F 30.15"
  },
  {
    id: "F3Q042",
    theme: 3,
    question: "Après avoir parcouru une distance au moins égale à la DCO depuis un TIV à distance non reconnu, le taux de vitesse reste inconnu. Peut-on cesser la marche à vue ?",
    choices: [
      "Oui, la DCO parcourue suffit à lever la prescription.",
      "Non, la marche à vue est poursuivie jusqu'à ce que le taux puisse être déterminé avec certitude."
    ],
    correct: 1,
    source: "F 30.15"
  },
  {
    id: "F3Q043",
    theme: 3,
    question: "Après la DCO, le taux du TIV initialement non reconnu est finalement déterminé avec certitude grâce à la documentation de ligne. Quelle conduite est prévue ?",
    choices: [
      "Cesser la marche à vue et respecter le taux déterminé.",
      "Maintenir la marche à vue jusqu'au TIV d'exécution, quelle que soit l'information obtenue."
    ],
    correct: 0,
    source: "F 30.15"
  },

  // ============================================================
  // F31.01 — KVB : FU + FC
  // ============================================================

  {
    id: "F3Q044",
    theme: 3,
    question: "À la sortie d'une gare donnant accès à une ligne à voie unique, le KVB provoque un freinage d'urgence avec clignotement de FC. Quelle mesure de protection s'impose ?",
    choices: [
      "Protéger uniquement l'arrière du train.",
      "Protéger le train comme un obstacle vis-à-vis des circulations de sens contraire."
    ],
    correct: 1,
    source: "F 31.01"
  },
  {
    id: "F3Q045",
    theme: 3,
    question: "Après prise en charge KVB avec FC à la sortie d'une gare donnant accès à une voie unique, la gare comporte un signal de sortie. Comment celui-ci doit-il être considéré ?",
    choices: [
      "Comme fermé, en appliquant les prescriptions correspondantes.",
      "Selon l'indication réellement observée avant la prise en charge."
    ],
    correct: 0,
    source: "F 31.01"
  },
  {
    id: "F3Q046",
    theme: 3,
    question: "Dans la même situation, la gare ne comporte aucun signal de sortie. Quelle condition est requise pour repartir ?",
    choices: [
      "Un ordre verbal de pénétrer en canton occupé.",
      "Recevoir l'AuM d'un agent du SGC puis reprendre en respectant la règle de l'arrêt accidentel."
    ],
    correct: 1,
    source: "F 31.01"
  },
  {
    id: "F3Q047",
    theme: 3,
    question: "Sur ligne à double voie, un freinage d'urgence avec FC survient au franchissement d'un signal vu ouvert. Quelle interprétation réglementaire doit être retenue ?",
    choices: [
      "Considérer le signal comme fermé et appliquer ses prescriptions.",
      "Considérer immédiatement le KVB en dérangement."
    ],
    correct: 0,
    source: "F 31.01"
  },
  {
    id: "F3Q048",
    theme: 3,
    question: "Sur ligne à double voie, le freinage d'urgence avec FC survient en dehors de tout signal. Quelle orientation s'applique ?",
    choices: [
      "Considérer le dernier signal franchi comme fermé.",
      "Appliquer le guide de dépannage et aviser."
    ],
    correct: 1,
    source: "F 31.01"
  },

  // ============================================================
  // F31.02 — DAAT / KV0
  // ============================================================

  {
    id: "F3Q049",
    theme: 3,
    question: "Une prise en charge DAAT avec clignotement de FC se produit sur une ligne à une seule voie. Quelle mesure est prise vis-à-vis des circulations de sens contraire ?",
    choices: [
      "Protéger le train comme un obstacle.",
      "Attendre que l'agent-circulation confirme l'existence d'une circulation adverse."
    ],
    correct: 0,
    source: "F 31.02"
  },
  {
    id: "F3Q050",
    theme: 3,
    question: "Le point d'information DAAT ayant provoqué la prise en charge comporte un signal. Quelle particularité concerne l'autorisation de franchissement reçue ?",
    choices: [
      "Elle doit être complétée séparément par une AuM.",
      "Elle vaut également AuM."
    ],
    correct: 1,
    source: "F 31.02"
  },
  {
    id: "F3Q051",
    theme: 3,
    question: "Après prise en charge DAAT à un point comportant un signal, quelle séquence fait partie de la remise en état avant reprise ?",
    choices: [
      "Appuyer sur FC puis réarmer la répétition des signaux.",
      "Réarmer la répétition sans agir sur FC."
    ],
    correct: 0,
    source: "F 31.02"
  },
  {
    id: "F3Q052",
    theme: 3,
    question: "Une prise en charge DAAT survient à un point d'information ne comportant pas de signal. Sous quelle forme l'AuM doit-elle être reçue ?",
    choices: [
      "Elle résulte automatiquement du réarmement du DAAT.",
      "Directement d'un agent du SGC, par écrit ou par dépêche."
    ],
    correct: 1,
    source: "F 31.02"
  },
  {
    id: "F3Q053",
    theme: 3,
    question: "Après prise en charge DAAT à un point ne comportant pas de signal et réception de l'AuM, quelle règle de reprise s'applique ?",
    choices: [
      "La règle de l'arrêt accidentel.",
      "La marche à vue jusqu'à la fin du canton suivant dans tous les cas."
    ],
    correct: 0,
    source: "F 31.02"
  },
  {
    id: "F3Q054",
    theme: 3,
    question: "Une prise en charge DAAT se produit pendant un mouvement de manœuvre guidé au voisinage d'un signal. Le conducteur n'est pas en tête du mouvement. Doit-il personnellement recevoir l'autorisation de franchissement ?",
    choices: [
      "Oui, dans tous les cas.",
      "Non, cette prescription vise le conducteur lorsqu'il est en tête."
    ],
    correct: 1,
    source: "F 31.02"
  },
  {
    id: "F3Q055",
    theme: 3,
    question: "Après une prise en charge DAAT pendant un mouvement de manœuvre guidé au voisinage d'un signal, quelle condition reste nécessaire avant la remise en marche ?",
    choices: [
      "Recevoir l'ordre du chef de manœuvre.",
      "Recevoir systématiquement une nouvelle AuM."
    ],
    correct: 0,
    source: "F 31.02"
  },
  {
    id: "F3Q056",
    theme: 3,
    question: "Une prise en charge DAAT survient pendant un mouvement de manœuvre guidé en dehors de tout signal. Quelle autorisation conditionne la remise en marche ?",
    choices: [
      "Une autorisation de franchissement du SGC.",
      "L'ordre du chef de manœuvre."
    ],
    correct: 1,
    source: "F 31.02"
  },

  // ============================================================
  // F31.03 — Anomalies KVB
  // ============================================================

  {
    id: "F3Q057",
    theme: 3,
    question: "Une indication KVB paraît anormale. Le conducteur peut-il conclure immédiatement à un dérangement du KVB ?",
    choices: [
      "Non, l'origine peut notamment être une fermeture intempestive d'un signal.",
      "Oui, dès lors que l'indication ne correspond pas à la situation attendue."
    ],
    correct: 0,
    source: "F 31.03"
  },
  {
    id: "F3Q058",
    theme: 3,
    question: "L'indication « 00 », « 00 » ou « 000 » apparaît inopinément. Quelle conduite générale est imposée ?",
    choices: [
      "S'arrêter immédiatement et appliquer le guide de dépannage.",
      "Se mettre aussitôt que possible en marche à vue jusqu'au franchissement du signal d'entrée du canton suivant."
    ],
    correct: 1,
    source: "F 31.03"
  },
  {
    id: "F3Q059",
    theme: 3,
    question: "Lors d'une présentation inopinée de « 000 », quelle contrainte particulière s'ajoute à la marche à vue à l'approche ou au franchissement du signal ?",
    choices: [
      "Ne pas dépasser 10 km/h.",
      "Marquer obligatoirement l'arrêt."
    ],
    correct: 0,
    source: "F 31.03"
  },
  {
    id: "F3Q060",
    theme: 3,
    question: "L'indication « L » apparaît inopinément. Jusqu'à quel événement la marche à vue doit-elle être observée ?",
    choices: [
      "Jusqu'au prochain signal de cantonnement uniquement.",
      "Jusqu'à la rencontre d'un TIV de chantier ou jusqu'à l'extinction de L."
    ],
    correct: 1,
    source: "F 31.03"
  },
  {
    id: "F3Q061",
    theme: 3,
    question: "Après apparition inopinée de L, un TIV de chantier est rencontré. Quelle reprise est prévue ?",
    choices: [
      "Reprendre la marche normale sans dépasser la vitesse indiquée par le TIV.",
      "Maintenir la marche à vue jusqu'à extinction de L."
    ],
    correct: 0,
    source: "F 31.03"
  },
  {
    id: "F3Q062",
    theme: 3,
    question: "Après apparition inopinée de L, aucun TIV de chantier n'est rencontré et L ne s'éteint pas après 4500 m. Quelle contrainte s'applique ?",
    choices: [
      "Continuer jusqu'au terminus en respectant la marche à vue.",
      "S'arrêter au plus tard 80 km après constatation de l'anomalie et appliquer le guide de dépannage."
    ],
    correct: 1,
    source: "F 31.03"
  },
  {
    id: "F3Q063",
    theme: 3,
    question: "Après dégagement d'une LTV, l'indication L reste anormalement présentée mais s'éteint avant 4500 m à partir du tableau blanc. Quelle conduite est prévue ?",
    choices: [
      "Reprendre la vitesse normale, si rien ne s'y oppose, dès l'extinction de L et signaler l'anomalie.",
      "Maintenir le taux de la LTV jusqu'au prochain arrêt."
    ],
    correct: 0,
    source: "F 31.03"
  },
  {
    id: "F3Q064",
    theme: 3,
    question: "Après dégagement d'une LTV, l'indication L reste présente au-delà d'au moins 4500 m à partir du tableau blanc. Quelle suite s'applique ?",
    choices: [
      "Maintenir uniquement le taux de la LTV jusqu'à extinction.",
      "S'arrêter au plus tard 80 km après constatation de l'anomalie et appliquer le guide de dépannage."
    ],
    correct: 1,
    source: "F 31.03"
  },
  {
    id: "F3Q065",
    theme: 3,
    question: "L'indication « Panne engin » apparaît pendant 10 secondes puis disparaît. Quelle conduite est prévue ?",
    choices: [
      "Poursuivre la marche et annoter le carnet de bord.",
      "S'arrêter au premier point possible et appliquer le guide de dépannage."
    ],
    correct: 0,
    source: "F 31.03"
  },
  {
    id: "F3Q066",
    theme: 3,
    question: "L'indication « Panne engin » devient permanente. Comment faut-il traiter les autres indications KVB ?",
    choices: [
      "Continuer à les appliquer jusqu'à l'arrêt prévu pour dépannage.",
      "Ne plus en tenir compte."
    ],
    correct: 1,
    source: "F 31.03"
  },
  {
    id: "F3Q067",
    theme: 3,
    question: "Avec une indication permanente « Panne engin », quelle échéance maximale est fixée pour l'arrêt destiné à appliquer le guide de dépannage ?",
    choices: [
      "Au plus tard 80 km après constatation de l'anomalie.",
      "Au plus tard à la première gare d'arrêt normal."
    ],
    correct: 0,
    source: "F 31.03"
  },
  {
    id: "F3Q068",
    theme: 3,
    question: "Avant de franchir un signal vu ouvert, l'indication TC disparaît anormalement. Quelle conduite est prévue ?",
    choices: [
      "Considérer le signal comme fermé.",
      "Ne pas tenir compte de cette disparition et signaler l'anomalie."
    ],
    correct: 1,
    source: "F 31.03"
  },
  {
    id: "F3Q069",
    theme: 3,
    question: "Le conducteur constate que le contrôle KVB est moins restrictif que la signalisation réellement rencontrée. Quelle prescription spécifique est donnée ?",
    choices: [
      "Signaler l'anomalie.",
      "Isoler immédiatement le KVB."
    ],
    correct: 0,
    source: "F 31.03"
  },
  {
    id: "F3Q070",
    theme: 3,
    question: "Une anomalie KVB sans apparition de FC provoque l'arrêt. Quelle action immédiate est prévue sur le freinage ?",
    choices: [
      "Supprimer le freinage d'urgence dès que la vitesse devient faible.",
      "Confirmer le freinage d'urgence."
    ],
    correct: 1,
    source: "F 31.03"
  },
  {
    id: "F3Q071",
    theme: 3,
    question: "Une prise en charge KVB sans FC a provoqué l'arrêt et n'est pas consécutive à un excès de vitesse ni à une décélération insuffisante. Quelle vérification doit notamment être effectuée ?",
    choices: [
      "Contrôler les paramètres affichés.",
      "Contrôler uniquement la signalisation d'arrière du train."
    ],
    correct: 0,
    source: "F 31.03"
  },
  {
    id: "F3Q072",
    theme: 3,
    question: "Après une prise en charge KVB sans FC ayant provoqué l'arrêt, les paramètres affichés sont incorrects. Quelle action est prévue ?",
    choices: [
      "Appliquer obligatoirement le guide de dépannage avant toute correction.",
      "Afficher les valeurs correctes."
    ],
    correct: 1,
    source: "F 31.03"
  },
  {
    id: "F3Q073",
    theme: 3,
    question: "Une anomalie KVB sans FC n'a pas provoqué l'arrêt. Quelle règle d'arrêt s'applique ?",
    choices: [
      "S'arrêter au plus tard 80 km après constatation de l'anomalie puis appliquer le guide de dépannage.",
      "Poursuivre jusqu'à la première gare d'arrêt normal, quelle que soit sa distance."
    ],
    correct: 0,
    source: "F 31.03"
  },

  // ============================================================
  // F31.04 — Signalement KVB / DAAT
  // ============================================================

  {
    id: "F3Q074",
    theme: 3,
    question: "Une anomalie DAAT doit être signalée alors que la radio sol-trains ne fonctionne pas. Quelle particularité distingue le DAAT ?",
    choices: [
      "Le signalement peut attendre la fin de service.",
      "Le signalement doit être immédiat."
    ],
    correct: 1,
    source: "F 31.04"
  },
  {
    id: "F3Q075",
    theme: 3,
    question: "Lors du signalement d'une anomalie KVB ou DAAT, quelles précisions opérationnelles doivent notamment être fournies ?",
    choices: [
      "La nature de l'anomalie, le lieu, la voie et le numéro de l'engin moteur.",
      "Uniquement le code erreur et le numéro du train."
    ],
    correct: 0,
    source: "F 31.04"
  },
  {
    id: "F3Q076",
    theme: 3,
    question: "Une anomalie KVB est identifiée comme un dérangement des installations au sol. Faut-il annoter le carnet de bord au titre de F31.04 ?",
    choices: [
      "Oui, toute anomalie KVB doit être inscrite au carnet de bord.",
      "Non, le carnet de bord n'est pas annoté en cas de dérangement des installations au sol."
    ],
    correct: 1,
    source: "F 31.04"
  },
  {
    id: "F3Q077",
    theme: 3,
    question: "Une anomalie KVB « sol » n'a exceptionnellement pas pu être signalée en ligne. Quelle suite est prévue ?",
    choices: [
      "La signaler au COGC, éventuellement par l'intermédiaire d'une gare, et la signaler également au PÔLE TRAIN.",
      "La signaler uniquement au PÔLE TRAIN."
    ],
    correct: 0,
    source: "F 31.04"
  },
  {
    id: "F3Q078",
    theme: 3,
    question: "Une anomalie KVB « bord » n'a pas pu être signalée en ligne. À qui le signalement ultérieur est-il adressé ?",
    choices: [
      "Uniquement au COGC.",
      "Au PÔLE TRAIN."
    ],
    correct: 1,
    source: "F 31.04"
  },

  // ============================================================
  // F32.01 — Répétition des signaux
  // ============================================================

  {
    id: "F3Q079",
    theme: 3,
    question: "Une répétition « signal fermé » se produit au franchissement d'un signal pris à revers lors d'une circulation à contresens sur VUT. Doit-elle être considérée comme une anomalie de répétition ?",
    choices: [
      "Non.",
      "Oui, systématiquement."
    ],
    correct: 0,
    source: "F 32.01"
  },
  {
    id: "F3Q080",
    theme: 3,
    question: "Le conducteur a reçu par écrit l'ordre de ne pas tenir compte des indications du dispositif de répétition des signaux pris à revers. Une répétition « signal fermé » se produit sur l'un d'eux. Quelle conduite est prévue ?",
    choices: [
      "Traiter la répétition comme une première anomalie isolée.",
      "Ne pas tenir compte de l'indication, mais acquitter après franchissement du signal répété fermé."
    ],
    correct: 1,
    source: "F 32.01"
  },
  {
    id: "F3Q081",
    theme: 3,
    question: "Une indication sonore « signal fermé » se déclenche inopinément en l'absence de tout signal susceptible d'être répété. Quelle est la première mesure ?",
    choices: [
      "S'arrêter d'urgence.",
      "Redoubler d'attention sans modifier la marche."
    ],
    correct: 0,
    source: "F 32.01"
  },
  {
    id: "F3Q082",
    theme: 3,
    question: "Une répétition intempestive « signal fermé » se produit à la sortie d'une gare donnant accès à une ligne à voie unique. Quelle mesure particulière s'ajoute à l'arrêt d'urgence ?",
    choices: [
      "Appliquer immédiatement le guide de dépannage avant tout avis.",
      "Protéger le train comme un obstacle vis-à-vis des circulations de sens contraire."
    ],
    correct: 1,
    source: "F 32.01"
  },
  {
    id: "F3Q083",
    theme: 3,
    question: "Après une répétition intempestive « signal fermé » à la sortie d'une gare de VU comportant un signal de sortie, quelle autorisation permet la reprise ?",
    choices: [
      "Une autorisation de franchissement, qui constitue l'AuM.",
      "Une AuM distincte de l'autorisation de franchissement."
    ],
    correct: 0,
    source: "F 32.01"
  },
  {
    id: "F3Q084",
    theme: 3,
    question: "La même anomalie survient à la sortie d'une gare de VU ne comportant pas de signal de sortie. Comment l'AuM est-elle reçue ?",
    choices: [
      "Elle est réputée acquise après signalement de l'anomalie.",
      "Directement sous forme manuelle, par écrit ou par dépêche."
    ],
    correct: 1,
    source: "F 32.01"
  },
  {
    id: "F3Q085",
    theme: 3,
    question: "Une anomalie isolée de répétition imposant l'arrêt d'urgence se produit hors du cas particulier d'une sortie de gare vers VU ou voie banalisée. Quelle reprise est prévue ?",
    choices: [
      "Repartir en marche à vue sur au moins la DCO à partir du point d'arrêt, puis respecter la règle de l'arrêt accidentel.",
      "Repartir en marche à vue jusqu'au prochain signal de cantonnement uniquement."
    ],
    correct: 0,
    source: "F 32.01"
  },
  {
    id: "F3Q086",
    theme: 3,
    question: "Au franchissement d'un signal normalement répété fermé, aucune répétition « signal fermé » n'est obtenue. Quelle action spécifique est prévue ?",
    choices: [
      "Ne pas acquitter puisque la répétition n'a pas fonctionné.",
      "Appuyer sur BP (AC) SF."
    ],
    correct: 1,
    source: "F 32.01"
  },
  {
    id: "F3Q087",
    theme: 3,
    question: "Le conducteur perçoit une deuxième anomalie de répétition de même nature. Quelle conséquence en tire-t-il pour cette indication ?",
    choices: [
      "Il considère la répétition de l'engin moteur en dérangement pour cette indication.",
      "Il continue à traiter chaque nouvelle occurrence comme une anomalie isolée."
    ],
    correct: 0,
    source: "F 32.01"
  },
  {
    id: "F3Q088",
    theme: 3,
    question: "Après une deuxième anomalie de répétition de même nature, le dispositif n'a pas encore été isolé par le guide de dépannage. Faut-il continuer à acquitter normalement en l'absence d'indication SF ?",
    choices: [
      "Non, tout acquittement doit cesser dès la deuxième anomalie.",
      "Oui."
    ],
    correct: 1,
    source: "F 32.01"
  },
  {
    id: "F3Q089",
    theme: 3,
    question: "Sur un engin équipé de la répétition optique, le « Bip » sonore n'est pas perçu au franchissement d'un signal répété fermé. Comment cette seule situation est-elle classée ?",
    choices: [
      "Elle n'est pas considérée comme une anomalie isolée de la répétition ; elle est signalée au carnet de bord.",
      "Elle constitue immédiatement une première anomalie isolée de répétition."
    ],
    correct: 0,
    source: "F 32.01"
  },

  // ============================================================
  // F33.01 — Plusieurs dispositifs de sécurité
  // ============================================================

  {
    id: "F3Q090",
    theme: 3,
    question: "Sur une ligne à signalisation au sol, le KVB et le DAAT sont tous deux isolés, mais la répétition des signaux reste disponible. Quelle prescription particulière F33.01 impose-t-elle pour la poursuite ?",
    choices: [
      "Limiter la vitesse et se faire assister par un agent.",
      "Poursuivre la marche."
    ],
    correct: 1,
    source: "F 33.01"
  }

];
