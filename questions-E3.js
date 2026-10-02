const QUESTIONS_PARTIE_E3 = [
  {
    id: "E3Q001",
    theme: 3,
    question: "Lors d'une communication avec un opérateur du GI, le conducteur est l'émetteur et connaît son correspondant. Après s'être identifié, quelle étape précède la transmission du message ?",
    choices: [
      "Identifier son correspondant et attendre sa réponse.",
      "Transmettre immédiatement le message puis demander l'identité du correspondant lors du collationnement."
    ],
    correct: 0,
    source: "E 30.01"
  },
  {
    id: "E3Q002",
    theme: 3,
    question: "Lors du collationnement d'un message, le destinataire répète le texte mais l'émetteur constate une erreur. Quelle formulation est prévue ?",
    choices: [
      "L'émetteur annonce « incorrect » et demande au destinataire de recommencer le collationnement.",
      "L'émetteur annonce « je répète » et retransmet le message."
    ],
    correct: 1,
    source: "E 30.01"
  },
  {
    id: "E3Q003",
    theme: 3,
    question: "Une communication de groupe est nécessaire. Quelle particularité doit être prise en compte par rapport à une communication GSM-R « point à point » ?",
    choices: [
      "Elle est perçue par tous les postes radio situés dans la zone d'appel et doit donc être concise, précise et limitée aux seuls besoins du service.",
      "Elle bénéficie de la même confidentialité qu'une communication point à point mais doit être systématiquement collationnée deux fois."
    ],
    correct: 0,
    source: "E 30.01"
  },
  {
    id: "E3Q004",
    theme: 3,
    question: "Lorsque la communication « point à point » par GSM-R est possible avec un opérateur du GI, quelle utilisation le référentiel privilégie-t-il ?",
    choices: [
      "L'appel de groupe, afin que les autres circulations puissent prendre connaissance de l'échange.",
      "La communication point à point."
    ],
    correct: 1,
    source: "E 30.01"
  },
  {
    id: "E3Q005",
    theme: 3,
    question: "Le Régulateur doit transmettre en cours de marche un ordre imposant une vitesse limite entre deux points remarquables. Quelle précaution particulière est prévue ?",
    choices: [
      "L'ordre doit être transmis à une distance raisonnable de son point d'application et en dehors des zones complexes.",
      "L'ordre ne peut jamais être transmis en cours de marche, quelle que soit sa nature."
    ],
    correct: 0,
    source: "E 30.01"
  },
  {
    id: "E3Q006",
    theme: 3,
    question: "Un nombre susceptible d'être à l'origine d'une confusion doit être épelé. Comment doit-il être énoncé ?",
    choices: [
      "Uniquement chiffre par chiffre.",
      "De manière usuelle, puis chiffre par chiffre."
    ],
    correct: 1,
    source: "E 30.01"
  },
  {
    id: "E3Q007",
    theme: 3,
    question: "Une anomalie survient en cours de circulation. Quelle articulation des avis est prévue par E30.01 ?",
    choices: [
      "Aviser l'opérateur du GI selon les prescriptions correspondant à l'anomalie et aviser dès que possible PÔLE TRAIN.",
      "Aviser d'abord PÔLE TRAIN, qui détermine ensuite s'il convient d'informer le GI."
    ],
    correct: 0,
    source: "E 30.01"
  },
  {
    id: "E3Q008",
    theme: 3,
    question: "Avant la circulation, une anomalie entraîne un retard prévisible sur le sillon. À qui le conducteur doit-il en rendre compte dès que possible selon E30.01 ?",
    choices: [
      "Exclusivement à l'agent-circulation de la gare origine.",
      "Au PÔLE TRAIN."
    ],
    correct: 1,
    source: "E 30.01"
  },
  {
    id: "E3Q009",
    theme: 3,
    question: "Après la circulation, une anomalie constatée sur l'engin moteur ne s'oppose pas à sa réutilisation normale. E30.01 impose-t-il, pour ce seul motif, l'avis prévu au PÔLE TRAIN pour une anomalie en aval ?",
    choices: [
      "Non, la disposition visée concerne l'anomalie qui s'oppose à la réutilisation normale de l'engin moteur.",
      "Oui, toute anomalie constatée en aval de la circulation impose cet avis."
    ],
    correct: 0,
    source: "E 30.01"
  },

  {
    id: "E3Q010",
    theme: 3,
    question: "Une dépêche vient d'être transmise. Peut-elle être annulée par une simple communication verbale ultérieure si les deux interlocuteurs sont d'accord ?",
    choices: [
      "Oui, à condition que l'accord soit collationné.",
      "Non. Une dépêche ne peut être annulée que par une autre dépêche."
    ],
    correct: 1,
    source: "E 30.02"
  },
  {
    id: "E3Q011",
    theme: 3,
    question: "Le formulaire utilisé pour une dépêche contient déjà une partie du texte réglementaire. Lors de la transmission, quelle règle s'applique ?",
    choices: [
      "Le texte de la dépêche doit néanmoins être énoncé en entier.",
      "Seules les parties variables doivent être énoncées puisque le destinataire possède le même formulaire."
    ],
    correct: 0,
    source: "E 30.02"
  },
  {
    id: "E3Q012",
    theme: 3,
    question: "Le conducteur doit émettre une dépêche par radio. Peut-il commencer sa transmission alors que le train termine son mouvement d'arrêt ?",
    choices: [
      "Oui, dès lors que la vitesse est suffisamment faible.",
      "Non. L'émission comme la réception d'une dépêche doivent être réalisées à l'arrêt."
    ],
    correct: 1,
    source: "E 30.02"
  },
  {
    id: "E3Q013",
    theme: 3,
    question: "Comment l'émetteur d'une dépêche obtient-il l'assurance que le destinataire l'a correctement reçue ?",
    choices: [
      "En lui faisant répéter la totalité du texte après sa transmission intégrale.",
      "En lui faisant uniquement répéter les éléments variables de la dépêche."
    ],
    correct: 0,
    source: "E 30.02"
  },
  {
    id: "E3Q014",
    theme: 3,
    question: "Une prescription doit être ordonnée ou communiquée mais aucune instruction ni aucun ordre spécifique n'est prévu dans les formulaires existants. Quel support est prévu ?",
    choices: [
      "Le carnet de poche, qui remplace alors tout formulaire.",
      "Le Formulaire Libre FOLI (BC 46)."
    ],
    correct: 1,
    source: "E 30.02"
  },
  {
    id: "E3Q015",
    theme: 3,
    question: "Un ordre est reçu par radio ou téléphone. Le conducteur ne dispose pas du formulaire correspondant. Quel support peut-il utiliser ?",
    choices: [
      "Son carnet de poche.",
      "Il doit obligatoirement attendre qu'un formulaire réglementaire lui soit remis."
    ],
    correct: 0,
    source: "E 30.02"
  },
  {
    id: "E3Q016",
    theme: 3,
    question: "Après réception par radio d'un ordre écrit, le conducteur a correctement noté les instructions et collationné le texte. Quelle vérification reste notamment à effectuer ?",
    choices: [
      "Uniquement vérifier que l'heure de transmission correspond à l'heure théorique du train.",
      "Vérifier la cohérence des informations reçues : date, heure, numéro de train, PK, numéro de PN, etc."
    ],
    correct: 1,
    source: "E 30.02"
  },
  {
    id: "E3Q017",
    theme: 3,
    question: "Un opérateur du SGC remet directement un ordre écrit de la main à la main au conducteur. Quelle procédure s'applique ?",
    choices: [
      "Prendre connaissance de l'ordre et vérifier la cohérence des informations reçues.",
      "Accuser obligatoirement réception par téléphone auprès de l'émetteur mentionné sur l'ordre."
    ],
    correct: 0,
    source: "E 30.02"
  },
  {
    id: "E3Q018",
    theme: 3,
    question: "Un opérateur au sol de NAVILAND CARGO remet de la main à la main un ordre provenant d'un agent-circulation. Quelle particularité s'applique par rapport à une remise directe par le SGC ?",
    choices: [
      "Le conducteur n'a pas à vérifier les informations puisque l'agent au sol les a déjà contrôlées.",
      "L'agent au sol lit l'ordre au conducteur, puis le conducteur accuse réception auprès de l'émetteur mentionné sur l'ordre."
    ],
    correct: 1,
    source: "E 30.02"
  },
  {
    id: "E3Q019",
    theme: 3,
    question: "Lors de l'accusé de réception d'un ordre remis par un opérateur au sol de NAVILAND CARGO, quels éléments le conducteur doit-il notamment rappeler à l'émetteur ?",
    choices: [
      "Le type d'ordre, le numéro de train et les informations mentionnées sur l'ordre.",
      "Uniquement le numéro d'enregistrement de l'ordre."
    ],
    correct: 0,
    source: "E 30.02"
  },
  {
    id: "E3Q020",
    theme: 3,
    question: "Le conducteur reçoit un ordre comportant plusieurs actions successives : traction à zéro, ouverture DJ puis abaissement des pantographes. Quelle méthode est prévue avant la mise en mouvement ?",
    choices: [
      "Mémoriser l'ordre puis le ranger afin de ne pas encombrer le pupitre.",
      "Lister chronologiquement les actions, les associer à des points repérés et les localiser sur un support adapté."
    ],
    correct: 1,
    source: "E 30.02"
  },
  {
    id: "E3Q021",
    theme: 3,
    question: "Lors de la préparation d'un ordre comportant des PK, quelle particularité le référentiel demande-t-il explicitement de prendre en compte ?",
    choices: [
      "La possibilité que l'ordre reprenne des PK décroissants.",
      "La nécessité de convertir systématiquement les PK en distance depuis la gare origine."
    ],
    correct: 0,
    source: "E 30.02"
  },
  {
    id: "E3Q022",
    theme: 3,
    question: "Une fois la planification des actions terminée, que doit faire le conducteur de l'ordre et du projet d'actions associé ?",
    choices: [
      "Les ranger à portée de main pour les consulter uniquement à l'approche de la zone.",
      "Les placer et les fixer dans son champ visuel avant la mise en mouvement."
    ],
    correct: 1,
    source: "E 30.02"
  },
  {
    id: "E3Q023",
    theme: 3,
    question: "En cours d'exécution d'un ordre, le conducteur a un doute sur sa localisation exacte. Quelle réaction est prévue ?",
    choices: [
      "Se mettre immédiatement en situation de respecter l'ordre.",
      "Poursuivre jusqu'au prochain point kilométrique permettant de lever le doute."
    ],
    correct: 0,
    source: "E 30.02"
  },
  {
    id: "E3Q024",
    theme: 3,
    question: "Un ordre prescrit au conducteur de faire part de ses constatations après franchissement d'une zone. À quel moment doit-il les communiquer ?",
    choices: [
      "Dès qu'il effectue la constatation, même avant d'avoir dégagé la zone.",
      "Après avoir dégagé la zone mentionnée sur l'ordre."
    ],
    correct: 1,
    source: "E 30.02"
  },
  {
    id: "E3Q025",
    theme: 3,
    question: "Après avoir dégagé une zone, le conducteur doit transmettre les constatations prescrites par l'ordre mais ne peut pas utiliser la radio. Quelle possibilité est prévue ?",
    choices: [
      "S'arrêter au premier téléphone de voie ou utiliser, à l'arrêt, la téléphonie de pleine voie dématérialisée ; à défaut, utiliser la première gare ou le premier poste rencontré.",
      "Attendre obligatoirement le terminus pour transmettre les constatations."
    ],
    correct: 0,
    source: "E 30.02"
  },
  {
    id: "E3Q026",
    theme: 3,
    question: "Lorsqu'il transmet lui-même une dépêche, que doit noter le conducteur à l'issue de la transmission ?",
    choices: [
      "Uniquement l'heure à laquelle il a commencé la transmission.",
      "La date et l'heure de fin de transmission données au destinataire ainsi que le numéro d'enregistrement donné par le correspondant."
    ],
    correct: 1,
    source: "E 30.02"
  },

  {
    id: "E3Q027",
    theme: 3,
    question: "Un téléphone implanté le long d'une ligne porte à la fois une marque rouge et une marque verte. Quelle particularité cela indique-t-il ?",
    choices: [
      "Il est relié au régulateur et remplit également la fonction de téléphone d'alarme.",
      "Il permet uniquement de joindre alternativement deux gares encadrantes."
    ],
    correct: 0,
    source: "E 31.01"
  },
  {
    id: "E3Q028",
    theme: 3,
    question: "À quel interlocuteur sont normalement reliés les téléphones d'alarme implantés sur les lignes électrifiées ?",
    choices: [
      "Directement à l'agent-circulation de la gare la plus proche.",
      "Au régulateur sous-station."
    ],
    correct: 1,
    source: "E 31.01"
  },
  {
    id: "E3Q029",
    theme: 3,
    question: "Comment un téléphone de pleine voie est-il identifié ?",
    choices: [
      "Par son point kilométrique arrondi à l'hectomètre.",
      "Par le numéro du signal situé immédiatement en amont."
    ],
    correct: 0,
    source: "E 31.01"
  },
  {
    id: "E3Q030",
    theme: 3,
    question: "Un conducteur utilise un téléphone extérieur qui ne comporte pas de voyant d'appel et attend des instructions de son correspondant. Quelle précaution doit-il prendre ?",
    choices: [
      "Quitter le téléphone et rappeler systématiquement cinq minutes plus tard.",
      "S'assurer que son correspondant peut le rappeler ; à défaut, rester à l'écoute ou le rappeler dans un délai fixé par l'interlocuteur."
    ],
    correct: 1,
    source: "E 31.01"
  },
  {
    id: "E3Q031",
    theme: 3,
    question: "Sur une section équipée de téléphonie de pleine voie dématérialisée, quelle conséquence peut concerner les installations physiques ?",
    choices: [
      "La plupart des téléphones de pleine voie peuvent avoir été déposés, y compris des téléphones d'alarme.",
      "Seuls les téléphones de signaux peuvent être déposés ; les téléphones d'alarme doivent toujours subsister."
    ],
    correct: 0,
    source: "E 31.01 / E 31.02"
  },

  {
    id: "E3Q032",
    theme: 3,
    question: "La présence d'un téléphone mobile professionnel modifie-t-elle les procédures de communication et permet-elle de se substituer librement aux autres moyens existants ?",
    choices: [
      "Oui, le téléphone mobile professionnel devient le moyen prioritaire.",
      "Non. La téléphonie mobile ne modifie pas les procédures et ne se substitue pas aux autres moyens lorsqu'ils existent."
    ],
    correct: 1,
    source: "E 31.02"
  },
  {
    id: "E3Q033",
    theme: 3,
    question: "Un téléphone fixe ferroviaire existe mais son accès impose de traverser des voies circulées et expose le conducteur à un risque plus grave. La priorité habituelle du téléphone fixe doit-elle malgré tout être respectée ?",
    choices: [
      "Non. La priorité au téléphone fixe ne s'applique pas lorsqu'elle conduit à une exposition à un risque plus grave ou plus fréquent.",
      "Oui. La téléphonie fixe ferroviaire reste prioritaire dans tous les cas lorsqu'elle existe."
    ],
    correct: 0,
    source: "E 31.02"
  },
  {
    id: "E3Q034",
    theme: 3,
    question: "En mode d'utilisation courante, pendant la préparation de l'engin moteur ou la conduite, comment doit être placé le téléphone mobile professionnel ?",
    choices: [
      "En service dans le champ visuel, avec la sonnerie au minimum.",
      "En mode avion ou silencieux avec vibreur désactivé, et hors du champ visuel."
    ],
    correct: 1,
    source: "E 31.02"
  },
  {
    id: "E3Q035",
    theme: 3,
    question: "En cours de route, un incident immobilise le train. Quelle disposition concernant le téléphone mobile professionnel est prévue en mode d'utilisation courante ?",
    choices: [
      "À l'arrêt, le remettre en fonction afin de pouvoir être contacté, le cas échéant, par PÔLE TRAIN pendant la durée de l'incident.",
      "Le maintenir obligatoirement en mode avion jusqu'à la fin du service."
    ],
    correct: 0,
    source: "E 31.02"
  },
  {
    id: "E3Q036",
    theme: 3,
    question: "Un téléphone personnel est emporté par le conducteur. Les restrictions d'utilisation prévues pour le téléphone professionnel lui sont-elles applicables ?",
    choices: [
      "Non, à condition qu'il ne soit pas utilisé pour des communications de service.",
      "Oui."
    ],
    correct: 1,
    source: "E 31.02"
  },
  {
    id: "E3Q037",
    theme: 3,
    question: "Lors d'un arrêt, une communication privée reçue par le conducteur ne lui permet plus d'assurer sereinement ses fonctions. Quelle conduite est prévue ?",
    choices: [
      "Aviser un agent sédentaire et PÔLE TRAIN puis se concerter pour définir les modalités d'une éventuelle relève.",
      "Reprendre la marche à vitesse réduite jusqu'au prochain établissement permettant une relève."
    ],
    correct: 0,
    source: "E 31.02"
  },
  {
    id: "E3Q038",
    theme: 3,
    question: "Sur une ligne équipée de téléphonie de pleine voie dématérialisée, l'application mobile dédiée conserve-t-elle seulement un rôle complémentaire aux téléphones de voie ?",
    choices: [
      "Oui, elle ne peut être utilisée qu'en cas de dérangement du téléphone fixe.",
      "Non. Son utilisation se substitue à celle des téléphones installés le long des voies pour cette fonction."
    ],
    correct: 1,
    source: "E 31.02"
  },

  {
    id: "E3Q039",
    theme: 3,
    question: "Une ligne est équipée de la radio sol-train. Le conducteur doit-il néanmoins activer le système GSM-GFU ARES ?",
    choices: [
      "Oui. Son activation est obligatoire y compris sur les lignes équipées de la liaison radio sol-train.",
      "Non, la radio sol-train se substitue au GSM-GFU ARES."
    ],
    correct: 0,
    source: "E 31.03"
  },
  {
    id: "E3Q040",
    theme: 3,
    question: "Pendant la marche avec GSM-GFU ARES activé, quelle disposition s'applique au téléphone dédié ?",
    choices: [
      "Il doit être placé hors du champ visuel comme en mode d'utilisation courante.",
      "Il doit être maintenu en service à proximité du poste de conduite et placé dans le champ visuel."
    ],
    correct: 1,
    source: "E 31.03"
  },
  {
    id: "E3Q041",
    theme: 3,
    question: "En mode GSM-GFU ARES, le conducteur souhaite éviter d'être distrait et règle le téléphone sur vibreur seul. Est-ce admis ?",
    choices: [
      "Non. La sonnerie doit être maintenue au niveau maximum et le vibreur seul est interdit.",
      "Oui, si le téléphone reste dans le champ visuel."
    ],
    correct: 0,
    source: "E 31.03"
  },
  {
    id: "E3Q042",
    theme: 3,
    question: "Le conducteur perçoit la sonnerie dédiée « Arrêt d'urgence » du GSM-GFU. Quelle réaction est prévue ?",
    choices: [
      "Il décroche d'abord afin de connaître le motif de l'appel avant d'agir.",
      "Il commande l'arrêt d'urgence de son train et applique les prescriptions réglementaires correspondantes."
    ],
    correct: 1,
    source: "E 31.02 / E 31.03"
  },
  {
    id: "E3Q043",
    theme: 3,
    question: "Pourquoi la vérification du numéro de train saisi lors de l'activation ARES est-elle particulièrement importante ?",
    choices: [
      "Un numéro erroné peut empêcher la réception de l'alerte GSM-GFU émise par le SGC, le numéro de train servant de numéro d'appel.",
      "Un numéro erroné désactive automatiquement la radio sol-train de l'engin moteur."
    ],
    correct: 0,
    source: "E 31.03"
  },
  {
    id: "E3Q044",
    theme: 3,
    question: "Après validation du numéro de train dans ARES, comment le conducteur obtient-il l'assurance de la bonne initialisation ?",
    choices: [
      "Par l'apparition du bouton « Activer » en bleu.",
      "En écoutant le message vocal et en comparant le numéro annoncé avec son document horaire."
    ],
    correct: 1,
    source: "E 31.03"
  },
  {
    id: "E3Q045",
    theme: 3,
    question: "Le système ARES permet l'activation simultanée de deux numéros de train. Dans quel type de situation cette possibilité est-elle notamment prévue ?",
    choices: [
      "Pour gérer les changements de parité, les crochets courts ou certains changements d'extrémité.",
      "Pour permettre à deux conducteurs utilisant le même téléphone d'être simultanément joignables."
    ],
    correct: 0,
    source: "E 31.03"
  },
  {
    id: "E3Q046",
    theme: 3,
    question: "Un changement de parité est prévu en cours de mission. L'activation du second numéro doit-elle nécessairement attendre le changement effectif de numéro ?",
    choices: [
      "Oui, deux numéros correspondant au même conducteur ne peuvent jamais être actifs simultanément.",
      "Non. ARES permet notamment une double activation avant le départ ou lors du dernier arrêt avant d'emprunter la ligne concernée."
    ],
    correct: 1,
    source: "E 31.03"
  },
  {
    id: "E3Q047",
    theme: 3,
    question: "À quel moment le conducteur doit-il normalement désactiver le GSM-GFU ARES ?",
    choices: [
      "À l'arrêt, après l'arrivée au terminus ou lors de la relève.",
      "Dès qu'il quitte la dernière section de ligne équipée de la liaison GSM-GFU."
    ],
    correct: 0,
    source: "E 31.03"
  },
  {
    id: "E3Q048",
    theme: 3,
    question: "Le conducteur oublie de désactiver une association numéro de train / GSM après l'arrivée. Cette association reste-t-elle active sans limite ?",
    choices: [
      "Oui, seule une désactivation manuelle peut la supprimer.",
      "Non. Le système prévoit notamment une désactivation automatique au plus tard 20 heures après sa création."
    ],
    correct: 1,
    source: "E 31.03"
  },
  {
    id: "E3Q049",
    theme: 3,
    question: "Une association numéro de train / GSM est encore active et une nouvelle association est créée pour ce même numéro de train. Que prévoit le système ?",
    choices: [
      "L'ancienne association est désactivée instantanément.",
      "Les deux associations restent actives jusqu'à expiration du délai maximal."
    ],
    correct: 0,
    source: "E 31.03"
  },
  {
    id: "E3Q050",
    theme: 3,
    question: "Avant le départ à l'origine du sillon, le téléphone GSM-GFU est absent ou hors service. Quelle est la première mesure à prendre ?",
    choices: [
      "Déterminer immédiatement si la ligne permet une circulation sans GSM-GFU.",
      "Solliciter un correspondant de l'EF afin d'obtenir un téléphone de remplacement compatible GSM-GFU ARES."
    ],
    correct: 1,
    source: "E 31.03"
  },
  {
    id: "E3Q051",
    theme: 3,
    question: "Aucun téléphone GSM-GFU de remplacement n'est disponible à l'origine du sillon. La ligne est équipée de la radio sol-train. À quelle condition la circulation peut-elle exceptionnellement être autorisée ?",
    choices: [
      "L'équipement radio sol-train du conducteur doit être en état de fonctionnement.",
      "La présence d'une couverture GSM classique suffit."
    ],
    correct: 0,
    source: "E 31.03"
  },
  {
    id: "E3Q052",
    theme: 3,
    question: "Dans la situation précédente, la ligne est équipée de la radio sol-train mais l'équipement radio sol-train ne fonctionne pas. Aucun téléphone GSM-GFU de remplacement n'est disponible. Le départ est-il autorisé ?",
    choices: [
      "Oui, jusqu'au premier établissement où un téléphone pourra être fourni.",
      "Non."
    ],
    correct: 1,
    source: "E 31.03"
  },
  {
    id: "E3Q053",
    theme: 3,
    question: "À l'origine du sillon, aucun téléphone GSM-GFU de remplacement n'est disponible. La ligne est désignée au LILI comme équipée de la liaison avec les trains GSM-GFU mais elle dispose également de la téléphonie de pleine voie dématérialisée. Le départ est-il couvert par l'exception prévue ?",
    choices: [
      "Non. Cette exception vise la ligne GSM-GFU qui n'est pas également équipée de la téléphonie de pleine voie dématérialisée.",
      "Oui, puisque la présence de la téléphonie de pleine voie dématérialisée apporte un moyen de communication supplémentaire."
    ],
    correct: 0,
    source: "E 31.03"
  },
  {
    id: "E3Q054",
    theme: 3,
    question: "Le téléphone GSM-GFU devient indisponible en cours de route et aucun téléphone de remplacement ne peut être fourni. Quelle possibilité le référentiel prévoit-il ?",
    choices: [
      "La circulation doit être arrêtée au premier établissement dans tous les cas.",
      "La circulation est autorisée sur l'ensemble du parcours restant à effectuer jusqu'à la fin du sillon."
    ],
    correct: 1,
    source: "E 31.03"
  },
  {
    id: "E3Q055",
    theme: 3,
    question: "L'absence de fonctionnement du GSM-GFU provient non du téléphone mais d'une indisponibilité du réseau GSM. Quelle règle s'applique ?",
    choices: [
      "Les mêmes dispositions que pour l'absence ou le non-fonctionnement du téléphone.",
      "La circulation est automatiquement interdite, sans possibilité d'appliquer les cas dégradés."
    ],
    correct: 0,
    source: "E 31.03"
  },
  {
    id: "E3Q056",
    theme: 3,
    question: "La couverture GSM est assurée, mais le conducteur ne parvient pas à activer le mode GSM-GFU. Comment cette situation est-elle traitée ?",
    choices: [
      "Comme une simple absence de couverture GSM ne nécessitant aucun signalement particulier.",
      "Comme un dysfonctionnement du système devant être signalé le plus rapidement possible."
    ],
    correct: 1,
    source: "E 31.03"
  },
  {
    id: "E3Q057",
    theme: 3,
    question: "Un dysfonctionnement propre au système GSM-GFU est constaté. À qui doit-il être signalé ?",
    choices: [
      "À un agent du SGC directement et également au représentant de l'EF.",
      "Uniquement au représentant de l'EF, qui se charge ensuite de toutes les transmissions."
    ],
    correct: 0,
    source: "E 31.03"
  },
  {
    id: "E3Q058",
    theme: 3,
    question: "Quel avis est prévu pour signaler un dérangement du système GSM-GFU ?",
    choices: [
      "Le FOLI BC 46.",
      "L'avis AGSM (BC 99)."
    ],
    correct: 1,
    source: "E 31.03"
  },
  {
    id: "E3Q059",
    theme: 3,
    question: "Sur une ligne équipée de la radio sol-train, comment doit être considérée la fonctionnalité GSM-GFU « Arrêt d'urgence » utilisée par le SGC ?",
    choices: [
      "Comme un moyen supplémentaire, notamment utilisable en cas de défaillance de la radio sol-train, et non comme un substitut aux autres moyens d'arrêt.",
      "Comme le moyen prioritaire d'arrêt d'urgence, la radio sol-train devenant un moyen de secours."
    ],
    correct: 0,
    source: "E 31.03"
  },
  {
    id: "E3Q060",
    theme: 3,
    question: "Pourquoi la fonctionnalité GSM-GFU « Arrêt d'urgence » ne peut-elle pas constituer à elle seule le moyen de protection utilisé par le SGC ?",
    choices: [
      "Parce qu'elle ne fonctionne que sur les lignes dépourvues de radio sol-train.",
      "Parce que la couverture GSM peut être incomplète, les relais peuvent être indisponibles et la liaison peut ne pas être assurée en cas de saturation du réseau."
    ],
    correct: 1,
    source: "E 31.03"
  }
];
