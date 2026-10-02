const QUESTIONS_PARTIE_F2 = [
  // ============================================================
  // F20.01 / F21.01 — Généralités
  // ============================================================

  {
    id: "F2Q001",
    theme: 2,
    question: "Une baisse lente de pression CG peut-elle conduire à un épuisement du frein sans provoquer de serrage ?",
    choices: [
      "Oui, si la fuite reste inférieure au seuil de sensibilité du distributeur.",
      "Non, toute baisse de pression CG provoque nécessairement un serrage."
    ],
    correct: 0,
    source: "F 21.01"
  },
  {
    id: "F2Q002",
    theme: 2,
    question: "Une mise en action intempestive du frein paraît liée à la CG. Peut-elle en réalité avoir pour origine une baisse de pression de la CP ?",
    choices: [
      "Non, les deux conduites sont indépendantes dans cette situation.",
      "Oui. Lorsque la pression CP devient suffisamment faible, la pression CG suit celle de la CP."
    ],
    correct: 1,
    source: "F 21.01"
  },

  // ============================================================
  // F21.02 — Chute de pression CG : mesures immédiates
  // ============================================================

  {
    id: "F2Q003",
    theme: 2,
    question: "Une chute de pression CG correspond au fonctionnement identifié d'un automatisme. Quelle logique prévaut ?",
    choices: [
      "Appliquer les mesures correspondant à l'indice constaté.",
      "Appliquer systématiquement la recherche de fuite CG avant toute autre procédure."
    ],
    correct: 0,
    source: "F 21.02"
  },
  {
    id: "F2Q004",
    theme: 2,
    question: "La lampe FEP est éteinte ou n'existe pas. Une dépression CG non provoquée survient alors que le train se trouve dans un tunnel. Comment le conducteur doit-il considérer la situation ?",
    choices: [
      "Comme une simple fuite CG tant qu'aucun mouvement anormal n'est ressenti.",
      "Comme un déraillement."
    ],
    correct: 1,
    source: "F 21.02"
  },
  {
    id: "F2Q005",
    theme: 2,
    question: "Une dépression CG non provoquée survient juste après le franchissement d'une zone signalisée par TIV à 50 km/h. La lampe FEP est éteinte. Quelle présomption s'impose ?",
    choices: [
      "Le train doit être considéré comme déraillé.",
      "La présomption de déraillement ne s'applique qu'à un TIV inférieur strictement à 50 km/h."
    ],
    correct: 0,
    source: "F 21.02"
  },
  {
    id: "F2Q006",
    theme: 2,
    question: "Une dépression CG non provoquée survient simultanément à une mise hors tension de la caténaire. Quelle particularité s'applique ?",
    choices: [
      "La mise hors tension oriente uniquement vers une anomalie CP.",
      "Le conducteur doit considérer que le train est déraillé."
    ],
    correct: 1,
    source: "F 21.02"
  },
  {
    id: "F2Q007",
    theme: 2,
    question: "Après une chute de pression CG, aucune présomption de déraillement ou de rupture d'attelage n'existe, mais une disjonction s'est produite simultanément. Quelle action précède l'examen de la pression RP ?",
    choices: [
      "Effectuer d'abord le sondage prévu à l'annexe 1 du manuel de conduite.",
      "Réalimenter immédiatement la CG à la pression de régime."
    ],
    correct: 0,
    source: "F 21.02"
  },
  {
    id: "F2Q008",
    theme: 2,
    question: "Après une chute de pression CG, la pression RP ne remonte pas à sa pression de régime. Quelle anomalie doit être présumée ?",
    choices: [
      "Une fermeture intempestive d'un robinet d'arrêt CG.",
      "Une chute de pression CP."
    ],
    correct: 1,
    source: "F 21.02"
  },
  {
    id: "F2Q009",
    theme: 2,
    question: "Après une chute de pression CG, la pression RP remonte à sa pression de régime. L'engin possède un robinet à commande électrique et un manomètre RE. Après suppression de NEUTRE, la pression RE ne remonte pas à 3 bars. Quelle suite est prévue ?",
    choices: [
      "Appliquer le guide de dépannage.",
      "Immobiliser immédiatement le train et rechercher la fuite dans toute la rame."
    ],
    correct: 0,
    source: "F 21.02"
  },
  {
    id: "F2Q010",
    theme: 2,
    question: "Dans la même situation, la pression RE remonte ou reste au moins à 3 bars. Quelle orientation prend alors la recherche ?",
    choices: [
      "Le conducteur conclut à une anomalie de l'engin moteur et demande le secours.",
      "Il immobilise le train et recherche la fuite à partir du robinet."
    ],
    correct: 1,
    source: "F 21.02"
  },
  {
    id: "F2Q011",
    theme: 2,
    question: "Lors de la recherche d'une fuite CG, plusieurs voies contiguës existent. Quelle combinaison est correcte ?",
    choices: [
      "Se munir des agrès de couverture ; la barre de court-circuit n'est pas imposée pour cette visite.",
      "Se munir obligatoirement des agrès de couverture et de la barre de court-circuit."
    ],
    correct: 0,
    source: "F 21.02"
  },
  {
    id: "F2Q012",
    theme: 2,
    question: "Après une chute de pression CG, la pression RP revient normalement mais l'engin à robinet de frein à commande électrique ne possède pas de manomètre RE. Quelle règle s'applique ?",
    choices: [
      "Effectuer systématiquement la visite complète de la rame.",
      "Appliquer l'annexe 2 si le manuel de conduite en comporte une, sinon le guide de dépannage."
    ],
    correct: 1,
    source: "F 21.02"
  },

  // ============================================================
  // F21.03 — Constatations après chute de pression CG
  // ============================================================

  {
    id: "F2Q013",
    theme: 2,
    question: "Lors de la visite consécutive à une chute de pression CG, un désaccouplement d'accouplement de frein est découvert. Quelle est la première action sur la CG ?",
    choices: [
      "Fermer le robinet d'arrêt CG situé immédiatement avant la fuite.",
      "Vidanger intégralement la CG avant toute intervention."
    ],
    correct: 0,
    source: "F 21.03"
  },
  {
    id: "F2Q014",
    theme: 2,
    question: "Un véhicule dont l'accouplement de frein est défectueux possède une CG bifurquée. Quelle possibilité doit être exploitée ?",
    choices: [
      "Le véhicule doit nécessairement être isolé du frein.",
      "Utiliser le second accouplement de frein en disposant convenablement les robinets d'arrêt."
    ],
    correct: 1,
    source: "F 21.03"
  },
  {
    id: "F2Q015",
    theme: 2,
    question: "Après réparation d'un désaccouplement ou d'un éclatement d'accouplement de frein et réouverture du robinet CG, quelle vérification est requise ?",
    choices: [
      "Une vérification du fonctionnement des freins.",
      "Uniquement un contrôle du manomètre CG depuis la cabine."
    ],
    correct: 0,
    source: "F 21.03"
  },
  {
    id: "F2Q016",
    theme: 2,
    question: "Une fuite CG est découverte après le robinet d'isolement de l'équipement de frein. Quelle réponse correspond à F21.03 ?",
    choices: [
      "Couper la CG à l'arrière du véhicule précédent.",
      "Isoler l'équipement de frein concerné puis déterminer la vitesse limite en fonction du freinage réalisé."
    ],
    correct: 1,
    source: "F 21.03"
  },
  {
    id: "F2Q017",
    theme: 2,
    question: "Une fuite CG est située avant le robinet d'isolement d'un véhicule. Où la CG doit-elle être interrompue ?",
    choices: [
      "Au robinet d'arrêt CG situé à l'arrière du véhicule précédant le véhicule avarié.",
      "Au robinet d'arrêt situé immédiatement derrière le véhicule avarié."
    ],
    correct: 0,
    source: "F 21.03"
  },
  {
    id: "F2Q018",
    theme: 2,
    question: "Une fuite CG avant le robinet d'isolement conduit à supprimer l'action du frein continu sur plusieurs véhicules. Faut-il systématiquement purger complètement leurs équipements de frein ?",
    choices: [
      "Oui, y compris si ces véhicules doivent rester en pleine voie.",
      "Non. L'exception concerne les véhicules qui doivent rester en pleine voie."
    ],
    correct: 1,
    source: "F 21.03"
  },
  {
    id: "F2Q019",
    theme: 2,
    question: "À la suite d'une fuite CG avant le robinet d'isolement, le freinage restant ne permet pas d'acheminer la totalité du train. Quelle disposition est prévue ?",
    choices: [
      "Demander le secours pour la deuxième partie du train.",
      "Acheminer obligatoirement le train entier à vitesse réduite."
    ],
    correct: 0,
    source: "F 21.03"
  },
  {
    id: "F2Q020",
    theme: 2,
    question: "Une fermeture intempestive d'un robinet d'arrêt CG est découverte. Après suppression de sa cause et réouverture du robinet, quelle opération est requise ?",
    choices: [
      "Une simple réalimentation de la CG suffit.",
      "Une vérification du fonctionnement des freins doit être effectuée."
    ],
    correct: 1,
    source: "F 21.03"
  },
  {
    id: "F2Q021",
    theme: 2,
    question: "Aucune fuite n'est découverte lors de la visite. Comment commence la localisation par fractionnement de la CG ?",
    choices: [
      "En isolant l'engin moteur du premier véhicule afin de vérifier d'abord l'étanchéité de l'engin moteur seul.",
      "En coupant immédiatement la rame en deux parties sensiblement égales."
    ],
    correct: 0,
    source: "F 21.03"
  },
  {
    id: "F2Q022",
    theme: 2,
    question: "Aucune fuite visible n'est trouvée et l'étanchéité de l'engin moteur seul n'est pas satisfaisante. Le conducteur ne peut pas remédier à l'anomalie. Quelle suite est prévue ?",
    choices: [
      "Poursuivre la localisation dans la rame.",
      "Demander le secours."
    ],
    correct: 1,
    source: "F 21.03"
  },
  {
    id: "F2Q023",
    theme: 2,
    question: "Lors du fractionnement de la CG, l'engin moteur seul est étanche. Après fermeture d'un robinet situé vers le milieu du train, l'étanchéité est satisfaisante. Où se situe la fuite ?",
    choices: [
      "Dans la deuxième demi-rame.",
      "Dans la première demi-rame."
    ],
    correct: 0,
    source: "F 21.03"
  },
  {
    id: "F2Q024",
    theme: 2,
    question: "Lors du même fractionnement, l'étanchéité n'est pas satisfaisante après fermeture du robinet situé vers le milieu du train. Où faut-il poursuivre la recherche ?",
    choices: [
      "Dans la deuxième demi-rame.",
      "Dans la première demi-rame."
    ],
    correct: 1,
    source: "F 21.03"
  },
  {
    id: "F2Q025",
    theme: 2,
    question: "Une fois la demi-rame en cause identifiée, dans quel sens les véhicules doivent-ils être testés pour localiser la fuite ?",
    choices: [
      "En partant de la source d'air jusqu'à découverte de la fuite.",
      "En partant systématiquement de la queue vers l'engin moteur."
    ],
    correct: 0,
    source: "F 21.03"
  },

  // ============================================================
  // F22.01 / F22.02 — Blocage
  // ============================================================

  {
    id: "F2Q026",
    theme: 2,
    question: "Un blocage persiste et un frein d'immobilisation à ressort est trouvé serré sur un engin moteur. Quelle procédure est applicable ?",
    choices: [
      "Le desserrer manuellement comme un frein à main.",
      "Appliquer le guide de dépannage."
    ],
    correct: 1,
    source: "F 22.02"
  },
  {
    id: "F2Q027",
    theme: 2,
    question: "Un blocage persiste et un frein d'immobilisation à ressort est trouvé serré sur un véhicule remorqué. Quelle action est prévue ?",
    choices: [
      "Débloquer le véhicule puis signaler l'incident.",
      "Isoler immédiatement l'équipement de frein sans tenter de débloquer le véhicule."
    ],
    correct: 0,
    source: "F 22.02"
  },
  {
    id: "F2Q028",
    theme: 2,
    question: "Un blocage persiste et un simple frein à main est trouvé serré. Quelle première action différencie ce cas de celui d'un FIS sur engin moteur ?",
    choices: [
      "Appliquer le guide de dépannage.",
      "Desserrer le frein à main."
    ],
    correct: 1,
    source: "F 22.02"
  },
  {
    id: "F2Q029",
    theme: 2,
    question: "Après disparition d'un blocage provoqué par un frein d'immobilisation, quelle vérification reste nécessaire sur le véhicule incriminé ?",
    choices: [
      "Examiner notamment l'état des roues et rechercher les conséquences du blocage.",
      "Aucune si le véhicule roule librement après desserrage."
    ],
    correct: 0,
    source: "F 22.02"
  },
  {
    id: "F2Q030",
    theme: 2,
    question: "Un blocage persiste et un robinet d'arrêt CG est trouvé fermé sans cause apparente. Après ouverture du robinet et contrôle des roues, quelle opération est notamment requise ?",
    choices: [
      "Une VFD.",
      "Une vérification du fonctionnement des freins."
    ],
    correct: 1,
    source: "F 22.02"
  },
  {
    id: "F2Q031",
    theme: 2,
    question: "Un seul véhicule reste bloqué alors que les robinets d'arrêt CG et d'isolement sont ouverts. Quelle action est prévue sur son frein ?",
    choices: [
      "Isoler le frein, puis déterminer la vitesse limite du train compte tenu du freinage réalisé.",
      "Actionner systématiquement la valve de purge pendant environ 10 secondes avant tout isolement."
    ],
    correct: 0,
    source: "F 22.02"
  },
  {
    id: "F2Q032",
    theme: 2,
    question: "Plusieurs véhicules restent bloqués alors que leurs robinets d'arrêt CG et d'isolement sont ouverts. Quelle action distingue ce cas du blocage d'un seul véhicule ?",
    choices: [
      "Isoler immédiatement tous les freins concernés.",
      "Actionner la commande de la valve de purge environ 10 secondes afin de provoquer le desserrage, puis vérifier chaque véhicule."
    ],
    correct: 1,
    source: "F 22.02"
  },
  {
    id: "F2Q033",
    theme: 2,
    question: "Lors du traitement d'un blocage, un incendie provoqué par celui-ci est découvert. Peut-on poursuivre directement la procédure de déblocage ?",
    choices: [
      "Non. Les prescriptions correspondant à l'incendie doivent être appliquées.",
      "Oui, l'incendie n'est traité qu'après remise en état du frein."
    ],
    correct: 0,
    source: "F 22.02"
  },

  // ============================================================
  // F23.01 / F23.02 — Absence ou insuffisance de freinage
  // ============================================================

  {
    id: "F2Q034",
    theme: 2,
    question: "Après un serrage gradué, une dépression CG normale et non suivie d'une réalimentation intempestive s'est produite, mais le freinage est insuffisant. Quelle réaction immédiate est prescrite ?",
    choices: [
      "Commander une dépression supplémentaire graduée.",
      "Freiner d'urgence."
    ],
    correct: 1,
    source: "F 23.02"
  },
  {
    id: "F2Q035",
    theme: 2,
    question: "Dans une situation d'insuffisance de freinage malgré une dépression CG correcte, l'engin possède un frein électrique opérationnel. Comment doit-il être utilisé ?",
    choices: [
      "Commander l'effort de retenue maximum.",
      "Le neutraliser afin de réserver l'adhérence au frein pneumatique."
    ],
    correct: 0,
    source: "F 23.02"
  },
  {
    id: "F2Q036",
    theme: 2,
    question: "Le freinage d'urgence ne suffit pas à arrêter le train lors d'une insuffisance de freinage. Quelle logique prévoit F23.02 ?",
    choices: [
      "Attendre l'action complète du frein automatique avant d'utiliser un autre moyen.",
      "Mettre en œuvre les autres moyens disponibles pour arrêter le train et utiliser les sablières si elles existent."
    ],
    correct: 1,
    source: "F 23.02"
  },
  {
    id: "F2Q037",
    theme: 2,
    question: "Après l'arrêt obtenu à la suite d'une insuffisance de freinage, que devient la fonction SERRAGE D'URGENCE pendant la visite ?",
    choices: [
      "Elle est maintenue.",
      "Elle est supprimée afin de réalimenter la CG avant la visite."
    ],
    correct: 0,
    source: "F 23.02"
  },
  {
    id: "F2Q038",
    theme: 2,
    question: "Lors de la visite après insuffisance de freinage, plusieurs voies contiguës existent. Le conducteur doit-il emporter la barre de court-circuit ?",
    choices: [
      "Oui, en même temps que les agrès de couverture.",
      "Non. Il se munit des agrès de couverture mais n'est pas tenu d'emporter la barre de court-circuit."
    ],
    correct: 1,
    source: "F 23.02"
  },
  {
    id: "F2Q039",
    theme: 2,
    question: "Lors de la visite après insuffisance de freinage, un ou plusieurs robinets d'arrêt CG sont trouvés fermés. Après leur ouverture, quelle vérification est nécessaire ?",
    choices: [
      "La vérification du fonctionnement des freins.",
      "Uniquement une vérification de desserrage."
    ],
    correct: 0,
    source: "F 23.02"
  },
  {
    id: "F2Q040",
    theme: 2,
    question: "Une anomalie mécanique est découverte sur un organe de frein lors de la recherche d'une insuffisance de freinage. Quelle séquence correspond au référentiel ?",
    choices: [
      "Remettre le véhicule en service après réglage sommaire et vérifier le frein à la première gare.",
      "Isoler l'équipement concerné, effectuer la vérification du fonctionnement des freins et déterminer la vitesse limite selon le freinage réalisé."
    ],
    correct: 1,
    source: "F 23.02"
  },
  {
    id: "F2Q041",
    theme: 2,
    question: "Un véhicule ne serre pas alors que son équipement de frein est indiqué en service. Quelle disposition est prévue ?",
    choices: [
      "Isoler son équipement de frein puis procéder à la vérification du fonctionnement des freins.",
      "Le remettre en service après avoir attendu le remplissage des RC."
    ],
    correct: 0,
    source: "F 23.02"
  },
  {
    id: "F2Q042",
    theme: 2,
    question: "Un véhicule ne serre pas et son frein est trouvé isolé. Aucun étiquetage, bulletin de signalement ou fiche rose ne s'oppose à sa remise en service. Quelle conduite est prévue ?",
    choices: [
      "Maintenir l'isolement puisqu'il était déjà présent avant l'incident.",
      "Remettre le frein en service puis procéder à la vérification du fonctionnement des freins."
    ],
    correct: 1,
    source: "F 23.02"
  },
  {
    id: "F2Q043",
    theme: 2,
    question: "Après remise en service d'un frein précédemment isolé lors de la recherche d'une insuffisance de freinage, quelle précaution particulière est prévue lors du remplissage ?",
    choices: [
      "Attendre au moins 5 minutes pour permettre le remplissage des RC.",
      "Effectuer immédiatement une dépression de 1 bar dès que la CG atteint sa pression de régime."
    ],
    correct: 0,
    source: "F 23.02"
  },
  {
    id: "F2Q044",
    theme: 2,
    question: "Une mauvaise position d'un dispositif Marchandises-Voyageurs ou Vide-Chargé est découverte. Quelle suite est prévue ?",
    choices: [
      "Isoler le frein du véhicule.",
      "Remettre le dispositif en bonne position puis effectuer la vérification du fonctionnement des freins."
    ],
    correct: 1,
    source: "F 23.02"
  },
  {
    id: "F2Q045",
    theme: 2,
    question: "Aucune anomalie n'est découverte pendant la visite après insuffisance de freinage. Lors de la VFF, un équipement de frein pourtant en service est trouvé desserré. Quelle mesure est prévue ?",
    choices: [
      "Isoler l'équipement concerné et déterminer la vitesse limite du train.",
      "Recommencer uniquement le serrage depuis la cabine."
    ],
    correct: 0,
    source: "F 23.02"
  },
  {
    id: "F2Q046",
    theme: 2,
    question: "Après une insuffisance de freinage, aucune anomalie n'est finalement constatée, y compris lors de la vérification du fonctionnement des freins. Comment la marche est-elle reprise ?",
    choices: [
      "Normalement, puisque la VFF n'a révélé aucune anomalie.",
      "Après information du régulateur ou de l'agent-circulation, avec les plus grandes précautions jusqu'au point désigné."
    ],
    correct: 1,
    source: "F 23.02"
  },
  {
    id: "F2Q047",
    theme: 2,
    question: "Une absence de freinage apparaît après un serrage gradué qui n'a produit aucune dépression CG. Cette situation est-elle traitée comme une insuffisance malgré une dépression CG correcte ?",
    choices: [
      "Non. Après freinage d'urgence et immobilisation, le guide de dépannage est appliqué.",
      "Oui. Une visite complète du train est obligatoirement effectuée avant le guide de dépannage."
    ],
    correct: 0,
    source: "F 23.02"
  },
  {
    id: "F2Q048",
    theme: 2,
    question: "Un serrage gradué provoque une dépression CG immédiatement suivie d'une réalimentation intempestive et le freinage est insuffisant. Quelle orientation est prévue après l'arrêt ?",
    choices: [
      "Rechercher en priorité un robinet CG fermé dans la rame.",
      "Appliquer le guide de dépannage ; si le cas n'y figure pas, éviter la position incriminée ou éventuellement utiliser le second poste de conduite."
    ],
    correct: 1,
    source: "F 23.02"
  },

  // ============================================================
  // F24.01 — Chute de pression CP
  // ============================================================

  {
    id: "F2Q049",
    theme: 2,
    question: "Une chute de pression CP est constatée et la pression des RP reste au-dessus de 6 bars. Le conducteur doit-il nécessairement s'arrêter immédiatement au point où l'anomalie est détectée ?",
    choices: [
      "Non. Il choisit, si possible d'entente avec le régulateur, le point d'arrêt.",
      "Oui. Toute chute de pression CP impose l'arrêt immédiat."
    ],
    correct: 0,
    source: "F 24.01"
  },
  {
    id: "F2Q050",
    theme: 2,
    question: "Une chute de pression CP est constatée et la pression des RP ne se maintient pas au-dessus de 6 bars. Quelle différence essentielle avec le cas où elle se maintient au-dessus de cette valeur ?",
    choices: [
      "Le conducteur peut choisir le point d'arrêt avec le régulateur.",
      "Le conducteur doit s'arrêter."
    ],
    correct: 1,
    source: "F 24.01"
  },
  {
    id: "F2Q051",
    theme: 2,
    question: "Après une intervention sur la continuité de la CP, la cause de l'anomalie a été entièrement éliminée. La vérification du fonctionnement du frein reste-t-elle obligatoire ?",
    choices: [
      "Oui, qu'il y ait eu ou non élimination de la cause.",
      "Non, si la pression CP est redevenue normale."
    ],
    correct: 0,
    source: "F 24.01"
  },
  {
    id: "F2Q052",
    theme: 2,
    question: "Sur un train remorqué par locomotive, une chute de pression CP est constatée alors que la CP n'est pas accouplée au train. Quelle procédure est prévue ?",
    choices: [
      "Rechercher une fuite CP sur l'ensemble de la rame.",
      "Appliquer le guide de dépannage."
    ],
    correct: 1,
    source: "F 24.01"
  },

  // ============================================================
  // F25.01 — Isolement d'un équipement de frein
  // ============================================================

  {
    id: "F2Q053",
    theme: 2,
    question: "Lorsqu'un isolement de frein est nécessaire, quelle règle doit être privilégiée afin de conserver le maximum de puissance de freinage ?",
    choices: [
      "Réaliser un isolement partiel chaque fois que cela est possible.",
      "Isoler intégralement l'équipement pour éviter toute action résiduelle."
    ],
    correct: 0,
    source: "F 25.01"
  },
  {
    id: "F2Q054",
    theme: 2,
    question: "Sur un véhicule équipé de la CP, quelle conduite doit être interrompue lors de l'isolement du frein ?",
    choices: [
      "Uniquement l'alimentation dérivée de la CG.",
      "L'alimentation du RA par la CG et par la CP, selon l'équipement."
    ],
    correct: 1,
    source: "F 25.01"
  },
  {
    id: "F2Q055",
    theme: 2,
    question: "Après fermeture des robinets nécessaires à l'isolement, jusqu'à quand faut-il actionner la valve de purge ?",
    choices: [
      "Jusqu'à cessation du bruit d'échappement d'air.",
      "Jusqu'au début du desserrage visible des semelles."
    ],
    correct: 0,
    source: "F 25.01"
  },
  {
    id: "F2Q056",
    theme: 2,
    question: "Après les opérations pneumatiques d'isolement, le frein reste serré sur du matériel du parc ordinaire. Quelle logique s'applique à une intervention sur la timonerie ?",
    choices: [
      "Démonter immédiatement la barre de timonerie.",
      "Rechercher d'abord les autres causes ; le démontage de la barre de timonerie n'intervient qu'en dernier lieu."
    ],
    correct: 1,
    source: "F 25.01"
  },
  {
    id: "F2Q057",
    theme: 2,
    question: "Une anomalie réelle ou supposée du frein est rencontrée sur un véhicule remorqué hors présence d'un agent du matériel. Quel signalement est normalement prévu ?",
    choices: [
      "Apposer une étiquette IS.",
      "Apposer systématiquement une étiquette IN."
    ],
    correct: 0,
    source: "F 25.01"
  },
  {
    id: "F2Q058",
    theme: 2,
    question: "Le frein d'un véhicule est isolé uniquement en raison d'une boîte chaude. Une étiquette IS doit-elle être apposée pour cet isolement ?",
    choices: [
      "Oui, tout isolement de frein exige une étiquette IS.",
      "Non, car dans ce cas le fonctionnement du frein n'est pas en cause."
    ],
    correct: 1,
    source: "F 25.01"
  },
  {
    id: "F2Q059",
    theme: 2,
    question: "Après isolement pneumatique, le frein d'un engin moteur ne se desserre pas. Quelle procédure s'applique ?",
    choices: [
      "Appliquer le guide de dépannage.",
      "Intervenir directement sur la timonerie comme pour du matériel du parc ordinaire."
    ],
    correct: 0,
    source: "F 25.01"
  },
  {
    id: "F2Q060",
    theme: 2,
    question: "Le frein isolé d'un véhicule du parc ordinaire reste serré. Parmi les vérifications prévues avant une intervention plus lourde, laquelle est correcte ?",
    choices: [
      "Vérifier uniquement la position du robinet d'arrêt CG.",
      "Vérifier notamment que la tringle de commande actionne effectivement la valve de purge et qu'aucune pièce de timonerie n'est coincée ou désemparée."
    ],
    correct: 1,
    source: "F 25.01"
  },

  // ============================================================
  // F26.01 — VFF
  // ============================================================

  {
    id: "F2Q061",
    theme: 2,
    question: "Après une absence ou une insuffisance de freinage, une VFF est-elle conditionnée à la découverte effective d'une anomalie pendant la visite ?",
    choices: [
      "Non. Elle est imposée à la suite de l'absence ou de l'insuffisance de freinage.",
      "Oui. Si aucune anomalie n'est découverte, la VFF n'est pas nécessaire."
    ],
    correct: 0,
    source: "F 26.01"
  },
  {
    id: "F2Q062",
    theme: 2,
    question: "Un équipement de frein précédemment isolé vient d'être remis en service. Quelle conséquence cela entraîne-t-il avant la remise en marche ?",
    choices: [
      "Une vérification de desserrage uniquement.",
      "Une VFF est imposée."
    ],
    correct: 1,
    source: "F 26.01"
  },
  {
    id: "F2Q063",
    theme: 2,
    question: "Un robinet d'arrêt CG situé dans le corps du train a été manœuvré à l'ouverture. La VFF est-elle requise ?",
    choices: [
      "Oui.",
      "Non, sauf si le robinet était fermé depuis plus de deux heures."
    ],
    correct: 0,
    source: "F 26.01"
  },
  {
    id: "F2Q064",
    theme: 2,
    question: "Plusieurs valves de purge ont été actionnées sans isolement des équipements de frein correspondants. Quelle exception peut dispenser de la VFF pour ce motif ?",
    choices: [
      "Une absence de freinage préalablement constatée.",
      "Le cas d'une fuite CG avant le robinet d'isolement."
    ],
    correct: 1,
    source: "F 26.01"
  },
  {
    id: "F2Q065",
    theme: 2,
    question: "Un engin moteur de secours vient d'être raccordé au train en détresse et aucun agent habilité n'est disponible pour réaliser un essai des freins. Quelle vérification incombe alors au conducteur ?",
    choices: [
      "Une VFF.",
      "Une simple vérification de continuité depuis la cabine."
    ],
    correct: 0,
    source: "F 26.01"
  },
  {
    id: "F2Q066",
    theme: 2,
    question: "Lors d'un stationnement inopiné compris entre 2 heures et 24 heures, dans quelle circonstance le conducteur peut-il être amené à effectuer une VFF ?",
    choices: [
      "Dans tous les cas, indépendamment de la présence d'autres agents.",
      "En cas d'absence avérée d'un agent habilité à la TCS PDT_K."
    ],
    correct: 1,
    source: "F 26.01"
  },
  {
    id: "F2Q067",
    theme: 2,
    question: "Quelle double assurance la VFF doit-elle procurer avant la remise en marche ?",
    choices: [
      "Le fonctionnement des freins au serrage et le maintien de la continuité CG.",
      "Le serrage et le desserrage de tous les freins, sans contrôle de continuité CG."
    ],
    correct: 0,
    source: "F 26.01"
  },
  {
    id: "F2Q068",
    theme: 2,
    question: "La double assurance recherchée par la VFF peut-elle être obtenue après déplacement du train jusqu'à un lieu plus favorable ?",
    choices: [
      "Oui, si la vitesse reste limitée.",
      "Non. La VFF doit être réalisée sur le lieu de l'incident ou du stationnement."
    ],
    correct: 1,
    source: "F 26.01"
  },
  {
    id: "F2Q069",
    theme: 2,
    question: "Au début d'une VFF, l'utilisation de SURCHARGE est-elle systématique ?",
    choices: [
      "Non. Elle est notamment utilisée si l'incident est survenu avant élimination complète d'une surcharge, lors d'une adjonction en cas de secours ou pour l'essai après stationnement inopiné.",
      "Oui. Toute VFF débute obligatoirement par une surcharge."
    ],
    correct: 0,
    source: "F 26.01"
  },
  {
    id: "F2Q070",
    theme: 2,
    question: "Lors d'une VFF, quand la dépression de 1 bar est-elle effectuée ?",
    choices: [
      "Immédiatement après alimentation de la CG, avant remplissage complet.",
      "Après remplissage complet, suppression de SURCHARGE lorsqu'elle est utilisée et élimination de celle-ci."
    ],
    correct: 1,
    source: "F 26.01"
  },
  {
    id: "F2Q071",
    theme: 2,
    question: "Lors de la VFF, un FIEF est utilisé. Quelle disposition est prévue avant la vérification du serrage sur le train ?",
    choices: [
      "Supprimer le FIEF.",
      "Maintenir le FIEF jusqu'au retour en cabine."
    ],
    correct: 0,
    source: "F 26.01"
  },
  {
    id: "F2Q072",
    theme: 2,
    question: "Lors de la VFF, pourquoi le conducteur ouvre-t-il un robinet d'arrêt CG après avoir contrôlé le serrage en se dirigeant vers la queue ?",
    choices: [
      "Pour provoquer le desserrage de la rame.",
      "Pour permettre ensuite de vérifier la continuité de la CG, notamment par sa vidange complète."
    ],
    correct: 1,
    source: "F 26.01"
  },
  {
    id: "F2Q073",
    theme: 2,
    question: "Lors de l'ouverture du robinet d'arrêt CG pendant la VFF, quelle précaution particulière est prescrite ?",
    choices: [
      "Maintenir fermement l'accouplement de frein.",
      "Desserrer préalablement le frein direct de l'engin moteur."
    ],
    correct: 0,
    source: "F 26.01"
  },
  {
    id: "F2Q074",
    theme: 2,
    question: "Une VFF n'est pas satisfaisante sur du matériel du parc ordinaire. Quelle procédure est prévue ?",
    choices: [
      "Appliquer directement le guide de dépannage sans nouvelle visite.",
      "Effectuer la visite jusqu'au véhicule porteur de la signalisation d'arrière puis appliquer F23.02 selon les anomalies découvertes."
    ],
    correct: 1,
    source: "F 26.01"
  },

  // ============================================================
  // F26.02 — Stationnement inopiné > 24 h / VFD
  // ============================================================

  {
    id: "F2Q075",
    theme: 2,
    question: "Après un stationnement inopiné supérieur à 24 heures, en l'absence avérée d'un agent habilité à la TCS PDT_K, quelle vérification peut compléter la VFF ?",
    choices: [
      "La vérification du desserrage de tous les véhicules.",
      "Une nouvelle vérification limitée à la continuité CG."
    ],
    correct: 0,
    source: "F 26.02"
  },
  {
    id: "F2Q076",
    theme: 2,
    question: "Avant de commencer la vérification du desserrage après un stationnement inopiné supérieur à 24 heures, quelle constatation doit notamment être faite au retour en cabine ?",
    choices: [
      "La CG doit déjà être revenue à sa pression de régime.",
      "La vidange complète de la CG doit être vérifiée au manomètre."
    ],
    correct: 1,
    source: "F 26.02"
  },
  {
    id: "F2Q077",
    theme: 2,
    question: "Pour la vérification du desserrage après un stationnement inopiné supérieur à 24 heures, SURCHARGE est-elle utilisée ?",
    choices: [
      "Oui, après alimentation de la CG.",
      "Non, son utilisation est exclue dans cette vérification."
    ],
    correct: 0,
    source: "F 26.02"
  },
  {
    id: "F2Q078",
    theme: 2,
    question: "La vérification du desserrage n'est pas satisfaisante sur un engin moteur ou du matériel spécialisé. Quelle suite est prévue ?",
    choices: [
      "Isoler directement tous les freins restant serrés.",
      "Appliquer le guide de dépannage."
    ],
    correct: 1,
    source: "F 26.02"
  },
  {
    id: "F2Q079",
    theme: 2,
    question: "La vérification du desserrage n'est pas satisfaisante sur du matériel du parc ordinaire. Quelle conduite est prévue ?",
    choices: [
      "Visiter le train jusqu'à la signalisation d'arrière, isoler les équipements concernés, signaler l'incident, procéder à la vérification liée au freinage et déterminer la vitesse limite.",
      "Appliquer uniquement le guide de dépannage de l'engin moteur."
    ],
    correct: 0,
    source: "F 26.02"
  },
  {
    id: "F2Q080",
    theme: 2,
    question: "Après un stationnement inopiné supérieur à 24 heures, la vérification du desserrage est satisfaisante. Quelle séquence précède le retrait des cales antidérive ?",
    choices: [
      "Retirer immédiatement les cales dès constatation du desserrage de tous les essieux.",
      "Réalimenter la CG à la pression de régime, commander SURCHARGE, vérifier son élimination complète puis effectuer une dépression de 1 bar."
    ],
    correct: 1,
    source: "F 26.02"
  }
];
