const QUESTIONS_PARTIE_C1 = [

  // =====================================================
  // C 10.01 — FREIN CONTINU AUTOMATIQUE
  // =====================================================

  {
    id: "C1Q001", theme: 1, type: "qcm", source: "C 10.01",
    question: "La fonction GRAND DÉBIT permet un remplissage rapide de la CG à 5 bars. Quelle conséquence impose de limiter son utilisation dans le temps ?",
    choices: [
      "Elle neutralise l'automaticité du frein.",
      "Elle interdit la modérabilité au serrage."
    ],
    correct: 0
  },

  {
    id: "C1Q002", theme: 1, type: "qcm", source: "C 10.01",
    question: "La fonction SURCHARGE se distingue notamment de GRAND DÉBIT par la pression à laquelle elle alimente la conduite générale. Quelle valeur est indiquée ?",
    choices: ["5 bars.", "5,4 bars."],
    correct: 1
  },

  {
    id: "C1Q003", theme: 1, type: "qcm", source: "C 10.01",
    question: "Lors d'un desserrage gradué, jusqu'où la pression CG peut-elle remonter tout en maintenant un effort de freinage ?",
    choices: [
      "Elle doit rester inférieure de 0,3 bar à la pression initiale existant lors de la première dépression.",
      "Elle doit rester inférieure de 0,5 bar à la pression de régime."
    ],
    correct: 0
  },

  {
    id: "C1Q004", theme: 1, type: "qcm", source: "C 10.01",
    question: "Le pictogramme de détection de fuite CG s'allume lors du desserrage d'un train long. Quelle conduite résulte de C 10.01 ?",
    choices: [
      "Considérer systématiquement qu'une fuite CG anormale est présente.",
      "Ne pas tenir compte de cette indication dans cette situation."
    ],
    correct: 1
  },

  {
    id: "C1Q005", theme: 1, type: "qcm", source: "C 10.01",
    question: "En double traction ou en pousse, l'indicateur de fuite CG apparaît alors que la pression RE est supérieure à la pression CG. Faut-il tenir compte de cette indication ?",
    choices: [
      "Non, cette situation fait partie des cas explicitement exclus.",
      "Oui, sauf pendant un serrage d'urgence."
    ],
    correct: 0
  },

  {
    id: "C1Q006", theme: 1, type: "qcm", source: "C 10.01",
    question: "La fonction SERRAGE À FOND peut-elle être utilisée pour réaliser un serrage d'urgence ?",
    choices: [
      "Oui, dès lors qu'elle provoque une dépression voisine de 2 bars.",
      "Non."
    ],
    correct: 1
  },


  // =====================================================
  // C 10.02 / C 11.01 — IMMOBILISATION ET MISE EN SERVICE
  // =====================================================

  {
    id: "C1Q007", theme: 1, type: "qcm", source: "C 10.02",
    question: "Lors d'un stationnement, que provoque normalement une baisse lente de pression au réservoir auxiliaire sur un engin équipé d'un frein d'immobilisation de stationnement à ressort ?",
    choices: [
      "L'entrée automatique en action du FIS.",
      "La neutralisation automatique du FIS."
    ],
    correct: 0
  },

  {
    id: "C1Q008", theme: 1, type: "qcm", source: "C 10.02",
    question: "Lors de la mise en service du frein automatique, quelle évolution normale concerne le frein d'immobilisation de stationnement à ressort ?",
    choices: [
      "Il reste obligatoirement appliqué jusqu'au premier mouvement.",
      "Il est normalement neutralisé."
    ],
    correct: 1
  },

  {
    id: "C1Q009", theme: 1, type: "qcm", source: "C 11.01",
    question: "Avant la mise en service du frein automatique, quelle condition doit être vérifiée concernant la pression résiduelle à la CG ?",
    choices: [
      "Elle doit être inférieure à 3 bars.",
      "Elle doit être nulle."
    ],
    correct: 0
  },

  {
    id: "C1Q010", theme: 1, type: "qcm", source: "C 11.01",
    question: "À la mise en service du frein automatique, la lampe SURCHARGE clignote. Quelle action est prescrite ?",
    choices: [
      "Maintenir MARCHE jusqu'à extinction de la lampe.",
      "Commander la fonction SURCHARGE."
    ],
    correct: 1
  },


  // =====================================================
  // C 11.02 — ESSAIS DEPUIS UN POSTE DE CONDUITE
  // =====================================================

  {
    id: "C1Q011", theme: 1, type: "qcm", source: "C 11.02",
    question: "Lors de la préparation courante d'une locomotive attelée à une rame dont la CP est alimentée, la vérification de l'étanchéité du réservoir principal doit-elle être effectuée ?",
    choices: [
      "Non.",
      "Oui, comme lorsque la locomotive n'alimente aucune rame."
    ],
    correct: 0
  },

  {
    id: "C1Q012", theme: 1, type: "qcm", source: "C 11.02",
    question: "Avant les vérifications d'étanchéité CP et CG, quel événement permet de considérer le remplissage des équipements de frein comme achevé ?",
    choices: [
      "La CG atteint pour la première fois 5 bars.",
      "L'aiguille du manomètre RP est stabilisée à la pression de régime après atteinte de la limite supérieure de fonctionnement du régulateur."
    ],
    correct: 1
  },

  {
    id: "C1Q013", theme: 1, type: "qcm", source: "C 11.02",
    question: "Lors de la vérification d'étanchéité depuis le poste de conduite, quelle conduite précède l'observation des manomètres CP et CG ?",
    choices: [
      "Commander NEUTRE après remplissage complet et arrêt de la régulation du compresseur.",
      "Maintenir MARCHE pendant toute la vérification."
    ],
    correct: 0
  },

  {
    id: "C1Q014", theme: 1, type: "qcm", source: "C 11.02",
    question: "Sur une voie présentant un risque de dérive, l'essai de fonctionnement du frein automatique est-il réalisé exactement comme dans le cas général ?",
    choices: [
      "Oui, la procédure est identique dès lors que l'engin est initialement immobilisé.",
      "Non, une pression suffisante doit être conservée en permanence aux cylindres de frein."
    ],
    correct: 1
  },

  {
    id: "C1Q015", theme: 1, type: "qcm", source: "C 11.02",
    question: "Lors de l'essai du frein automatique avec risque de dérive, comment est constituée la dépression d'essai de 1 bar ?",
    choices: [
      "Par un premier serrage de 0,5 bar, puis complément de la dépression jusqu'à 1 bar.",
      "Directement par une dépression de 1 bar comme dans le cas général."
    ],
    correct: 0
  },

  {
    id: "C1Q016", theme: 1, type: "qcm", source: "C 11.02",
    question: "Après l'essai avec risque de dérive, comment l'immobilisation est-elle maintenue avant la mise en marche du train ?",
    choices: [
      "Par le frein direct uniquement.",
      "Un nouveau serrage gradué avec une dépression de 1 bar est effectué."
    ],
    correct: 1
  },

  {
    id: "C1Q017", theme: 1, type: "qcm", source: "C 11.02",
    question: "L'essai de la fonction SERRAGE D'URGENCE du manipulateur de frein doit-il être réalisé sur un robinet à commande mécanique ?",
    choices: [
      "Non.",
      "Oui, quelle que soit la technologie du robinet."
    ],
    correct: 0
  },

  {
    id: "C1Q018", theme: 1, type: "qcm", source: "C 11.02",
    question: "À l'issue des vérifications et essais des freins sur l'engin moteur, dans quel ordre l'immobilisation mécanique est-elle supprimée ?",
    choices: [
      "Elle est supprimée avant de serrer le frein automatique.",
      "L'engin est d'abord immobilisé au frein automatique, puis le frein à main est desserré ou les cales retirées."
    ],
    correct: 1
  },


  // =====================================================
  // C 11.03 — ESSAI DU FREIN CONTINU
  // =====================================================

  {
    id: "C1Q019", theme: 1, type: "qcm", source: "C 11.03",
    question: "Au cours de la journée d'utilisation, une rame est réutilisée sans modification de composition. Quel essai du frein du train est nécessaire ?",
    choices: [
      "Aucun essai du frein du train ; le conducteur effectue un essai de fonctionnement de l'équipement de frein.",
      "Un essai de continuité."
    ],
    correct: 0
  },

  {
    id: "C1Q020", theme: 1, type: "qcm", source: "C 11.03",
    question: "Au cours de la journée d'utilisation, plusieurs véhicules sont retirés uniquement en queue d'une rame réutilisée. Quel essai est prévu ?",
    choices: [
      "Un essai de continuité.",
      "Aucun essai du frein du train ; un essai de fonctionnement de l'équipement de frein est effectué."
    ],
    correct: 1
  },

  {
    id: "C1Q021", theme: 1, type: "qcm", source: "C 11.03",
    question: "Des véhicules sont retirés dans le corps du train, et non en tête ou en queue. Quel essai est prévu ?",
    choices: [
      "Un essai de continuité.",
      "Un essai de raccordement."
    ],
    correct: 0
  },

  {
    id: "C1Q022", theme: 1, type: "qcm", source: "C 11.03",
    question: "Une locomotive de pousse attelée est ajoutée à un train. Quel essai est prévu par les règles générales des essais du frein ?",
    choices: [
      "Un essai partiel.",
      "Un essai de continuité."
    ],
    correct: 1
  },

  {
    id: "C1Q023", theme: 1, type: "qcm", source: "C 11.03",
    question: "Plusieurs véhicules placés en tête sont retirés. Quel essai peut être effectué ?",
    choices: [
      "Un essai de raccordement.",
      "Un essai de continuité sur le dernier véhicule freiné."
    ],
    correct: 0
  },

  {
    id: "C1Q024", theme: 1, type: "qcm", source: "C 11.03",
    question: "La locomotive de remorque est échangée dans un temps limité et la CP n'est pas reliée au train. Quel essai peut être effectué ?",
    choices: [
      "Un essai de continuité.",
      "Un essai de raccordement."
    ],
    correct: 1
  },

  {
    id: "C1Q025", theme: 1, type: "qcm", source: "C 11.03",
    question: "La locomotive de remorque est échangée dans un temps limité mais la CP est reliée au train. L'essai de raccordement prévu pour l'échange de locomotive s'applique-t-il ?",
    choices: [
      "Non, ce cas est explicitement excepté.",
      "Oui, la présence de la CP ne modifie pas la nature de l'essai."
    ],
    correct: 0
  },

  {
    id: "C1Q026", theme: 1, type: "qcm", source: "C 11.03",
    question: "Une locomotive de remorque est ajoutée au train en dehors d'un secours et la CP n'est pas reliée au train. Quel essai peut être effectué ?",
    choices: [
      "Un essai complet.",
      "Un essai de raccordement."
    ],
    correct: 1
  },

  {
    id: "C1Q027", theme: 1, type: "qcm", source: "C 11.03",
    question: "Lors d'un essai de raccordement, sur quel véhicule vérifie-t-on le serrage puis le desserrage ?",
    choices: [
      "Le premier véhicule freiné situé en arrière du point de raccordement par rapport à la locomotive de remorque.",
      "Le dernier véhicule freiné du train."
    ],
    correct: 0
  },

  {
    id: "C1Q028", theme: 1, type: "qcm", source: "C 11.03",
    question: "Lors d'un essai de continuité, quel véhicule sert à vérifier le bon fonctionnement au serrage puis au desserrage ?",
    choices: [
      "Le premier véhicule freiné derrière le point de raccordement.",
      "Le dernier véhicule freiné du train."
    ],
    correct: 1
  },

  {
    id: "C1Q029", theme: 1, type: "qcm", source: "C 11.03",
    question: "Un train possède une CP qui n'est reliée que sur une partie de la rame. Faut-il néanmoins vérifier sa continuité au cours de l'essai du frein continu ?",
    choices: [
      "Oui.",
      "Non, l'essai de continuité CP n'est réalisé que lorsqu'elle parcourt toute la rame."
    ],
    correct: 0
  },

  {
    id: "C1Q030", theme: 1, type: "qcm", source: "C 11.03",
    question: "Lors de l'essai du frein continu, peut-on vérifier l'étanchéité de la CG avant élimination complète de la surcharge ?",
    choices: [
      "Non, il faut obligatoirement attendre son élimination complète.",
      "Oui, après suppression de SURCHARGE et une attente minimale de 10 secondes."
    ],
    correct: 1
  },

  {
    id: "C1Q031", theme: 1, type: "qcm", source: "C 11.03",
    question: "À quel moment l'élimination complète de la surcharge est-elle en revanche exigée lors de l'essai réglementaire ?",
    choices: [
      "Avant de réaliser la dépression de serrage.",
      "Avant de vérifier l'étanchéité de la CG."
    ],
    correct: 0
  },

  {
    id: "C1Q032", theme: 1, type: "qcm", source: "C 11.03",
    question: "Lors des essais autres qu'un essai de raccordement, comment l'ordre DESSERREZ peut-il être transmis au conducteur ?",
    choices: [
      "Uniquement verbalement.",
      "Par vidange complète, franche et continue de la CG."
    ],
    correct: 1
  },

  {
    id: "C1Q033", theme: 1, type: "qcm", source: "C 11.03",
    question: "Une vidange CG très brève ou réalisée en deux temps est observée lors de l'essai. De quoi peut-elle être l'indice ?",
    choices: [
      "De la présence de véhicules équipés d'accélérateurs de vidange.",
      "D'une interruption certaine de la CG."
    ],
    correct: 0
  },

  {
    id: "C1Q034", theme: 1, type: "qcm", source: "C 11.03",
    question: "Après un incident, le conducteur est intervenu sur un robinet d'arrêt CG. Avant remise en marche, quelle assurance doit-il obtenir ?",
    choices: [
      "Uniquement la continuité de la CG.",
      "À la fois le fonctionnement des freins au serrage et la continuité de la CG."
    ],
    correct: 1
  },

  {
    id: "C1Q035", theme: 1, type: "qcm", source: "C 11.03",
    question: "Après un incident de frein, aucune anomalie n'est finalement découverte. La VFF peut-elle néanmoins être nécessaire ?",
    choices: [
      "Oui.",
      "Non, elle n'est réalisée que si une intervention matérielle a eu lieu."
    ],
    correct: 0
  },

  {
    id: "C1Q036", theme: 1, type: "qcm", source: "C 11.03",
    question: "Après l'adjonction de l'engin moteur de secours, quelle vérification est explicitement prévue ?",
    choices: [
      "Uniquement un essai de fonctionnement de l'équipement de frein.",
      "Une VFF."
    ],
    correct: 1
  },

  {
    id: "C1Q037", theme: 1, type: "qcm", source: "C 11.03",
    question: "Après un stationnement inopiné compris entre 2 heures et 24 heures, en l'absence avérée d'un agent habilité à la TCS PDT_K, quelle vérification le conducteur peut-il être amené à effectuer ?",
    choices: [
      "Une VFF.",
      "Systématiquement une VFF et une VFD."
    ],
    correct: 0
  },

  {
    id: "C1Q038", theme: 1, type: "qcm", source: "C 11.03",
    question: "Après un stationnement inopiné supérieur à 24 heures dans les conditions prévues par C 11.03, quelle assurance supplémentaire est recherchée par rapport à la seule VFF ?",
    choices: [
      "La continuité de la CP uniquement.",
      "Le bon fonctionnement des freins au desserrage."
    ],
    correct: 1
  },

  {
    id: "C1Q039", theme: 1, type: "qcm", source: "C 11.03",
    question: "Après un stationnement inopiné supérieur à 24 heures dans les conditions prévues, quelles vérifications permettent d'obtenir l'assurance exigée avant remise en marche ?",
    choices: [
      "Une VFF et une VFD.",
      "Une VFF seule, complétée par un essai de fonctionnement depuis la cabine."
    ],
    correct: 0
  },

  {
    id: "C1Q040", theme: 1, type: "qcm", source: "C 11.03",
    question: "Après un stationnement inopiné supérieur à 24 heures dans les conditions prévues, quelle vérification supplémentaire est explicitement demandée en plus de la VFF et de la VFD ?",
    choices: [
      "La position de tous les changements de régime.",
      "La bonne fermeture des crémones."
    ],
    correct: 1
  },


  // =====================================================
  // C 12.01 — UTILISATION DES FREINS EN COURS DE ROUTE
  // =====================================================

  {
    id: "C1Q041", theme: 1, type: "qcm", source: "C 12.01",
    question: "Une locomotive seule circule HLP à la vitesse des ME 120. Le frein direct peut-il être utilisé comme frein normal à la place du frein automatique ?",
    choices: [
      "Non, l'utilisation du frein automatique est obligatoire.",
      "Oui, comme pour une circulation HLP à la vitesse des ME 100."
    ],
    correct: 0
  },

  {
    id: "C1Q042", theme: 1, type: "qcm", source: "C 12.01",
    question: "Une locomotive seule circule HLP à la vitesse des ME 100. Quelle règle le référentiel prévoit-il concernant le frein direct ?",
    choices: [
      "Son utilisation est interdite dès que la circulation est tracée HLP.",
      "Son utilisation est admise, même si le frein automatique est désormais préconisé."
    ],
    correct: 1
  },

  {
    id: "C1Q043", theme: 1, type: "qcm", source: "C 12.01",
    question: "Lors d'une mise en tête, locomotive seule, quel frein doit obligatoirement être utilisé pour effectuer l'accostage ?",
    choices: [
      "Le frein direct.",
      "Le frein automatique."
    ],
    correct: 0
  },

  {
    id: "C1Q044", theme: 1, type: "qcm", source: "C 12.01",
    question: "Lors de la remorque d'un train, l'emploi systématique du frein direct est interdit. Quelle situation constitue néanmoins une exception explicitement prévue ?",
    choices: [
      "Tout arrêt sur voie en impasse.",
      "Terminer l'arrêt d'un train de voyageurs sur une voie en impasse."
    ],
    correct: 1
  },

  {
    id: "C1Q045", theme: 1, type: "qcm", source: "C 12.01",
    question: "Lors d'un freinage avec le frein automatique, dans quelle situation le dispositif de défreinage de la locomotive ne doit-il pas être utilisé ?",
    choices: [
      "Lors d'un freinage électrique combiné.",
      "Lorsque le train comporte peu de véhicules."
    ],
    correct: 0
  },

  {
    id: "C1Q046", theme: 1, type: "qcm", source: "C 12.01",
    question: "Le défreinage de la locomotive pendant le freinage du train reporte l'effort retardateur sur les véhicules. Quand cette réduction d'efficacité devient-elle particulièrement sensible ?",
    choices: [
      "Lorsque le nombre de véhicules est important.",
      "Lorsque le nombre de véhicules est réduit."
    ],
    correct: 1
  },

  {
    id: "C1Q047", theme: 1, type: "qcm", source: "C 12.01",
    question: "Le frein électrique seul peut-il être utilisé pour terminer un arrêt ?",
    choices: [
      "Non.",
      "Oui, sauf sur une voie en impasse."
    ],
    correct: 0
  },

  {
    id: "C1Q048", theme: 1, type: "qcm", source: "C 12.01",
    question: "Sur voies de service, quelle utilisation du frein électrique est explicitement interdite ?",
    choices: [
      "Tout freinage électrique combiné.",
      "Le freinage électrique seul par récupération."
    ],
    correct: 1
  },

  {
    id: "C1Q049", theme: 1, type: "qcm", source: "C 12.01",
    question: "Un train de marchandises aborde une zone d'aiguilles limitée à 30 km/h. Peut-on utiliser le frein électrique seul pour le freiner sur cette zone ?",
    choices: [
      "Non.",
      "Oui, si le frein électrique est combiné par construction."
    ],
    correct: 0
  },

  {
    id: "C1Q050", theme: 1, type: "qcm", source: "C 12.01",
    question: "Le frein dynamique seul s'avère insuffisant pour obtenir le ralentissement recherché. Quelle action est prescrite ?",
    choices: [
      "Attendre que la vitesse diminue avant de solliciter le frein pneumatique.",
      "Superposer immédiatement le frein pneumatique."
    ],
    correct: 1
  },

  {
    id: "C1Q051", theme: 1, type: "qcm", source: "C 12.01",
    question: "Un train de fret vient de quitter un lieu où sa composition a été remaniée. L'essai dynamique du frein doit-il être renouvelé ?",
    choices: [
      "Oui.",
      "Non, s'il avait déjà été réalisé au lieu d'origine."
    ],
    correct: 0
  },

  {
    id: "C1Q052", theme: 1, type: "qcm", source: "C 12.01",
    question: "Un incident de frein s'est produit en ligne puis la circulation reprend. Quelle conséquence concerne l'essai dynamique ?",
    choices: [
      "Il n'est renouvelé que si la composition a changé.",
      "Il doit être effectué après l'incident."
    ],
    correct: 1
  },

  {
    id: "C1Q053", theme: 1, type: "qcm", source: "C 12.01",
    question: "Avant l'emplacement prévu pour l'essai dynamique, les conditions de circulation imposent déjà une utilisation des freins permettant d'en vérifier l'efficacité. Faut-il réaliser ensuite un essai dynamique distinct ?",
    choices: [
      "Non, l'essai dynamique est considéré comme effectué.",
      "Oui, l'essai dynamique doit toujours être une action spécifique."
    ],
    correct: 0
  },

  {
    id: "C1Q054", theme: 1, type: "qcm", source: "C 12.01",
    question: "Quel emplacement doit notamment être évité pour réaliser l'essai dynamique du frein ?",
    choices: [
      "Une section en palier.",
      "Une rampe importante, le passage d'une bifurcation ou un DBC."
    ],
    correct: 1
  },

  {
    id: "C1Q055", theme: 1, type: "qcm", source: "C 12.01",
    question: "Lors de l'essai dynamique d'un train de fret, quelle dépression de service est prescrite dans la CG ?",
    choices: [
      "Entre 0,5 et 0,8 bar.",
      "Au moins 1 bar."
    ],
    correct: 0
  },

  {
    id: "C1Q056", theme: 1, type: "qcm", source: "C 12.01",
    question: "Un train freiné au frein non modérable au desserrage a subi un serrage trop accentué et risque de s'arrêter avant le point normal. Quelle action particulière est admise ?",
    choices: [
      "Réalimenter successivement la CG autant de fois que nécessaire.",
      "Réalimenter légèrement la CG, une fois au maximum, pour obtenir un desserrage partiel."
    ],
    correct: 1
  },

  {
    id: "C1Q057", theme: 1, type: "qcm", source: "C 12.01",
    question: "Avec un frein non modérable au desserrage, des serrages et desserrages successifs sont nécessaires pour réduire la vitesse. Quelle méthode doit être employée ?",
    choices: [
      "Provoquer une chute de vitesse puis un desserrage complet laissant le temps de réalimenter suffisamment les équipements avant un nouveau serrage.",
      "Multiplier de faibles desserrages partiels pour éviter la réalimentation complète."
    ],
    correct: 0
  },

  {
    id: "C1Q058", theme: 1, type: "qcm", source: "C 12.01",
    question: "Lors du desserrage, dans quelle situation la fonction SURCHARGE doit-elle notamment être commandée ?",
    choices: [
      "Après tout serrage supérieur à 1 bar.",
      "Lorsque la surcharge n'était pas totalement éliminée lors du serrage précédent."
    ],
    correct: 1
  },

  {
    id: "C1Q059", theme: 1, type: "qcm", source: "C 12.01",
    question: "Un train circule près de sa vitesse limite et le freinage pour s'arrêter devant un signal d'arrêt ne peut commencer qu'aux abords du signal d'annonce. Quelle dépression minimale est prescrite ?",
    choices: [
      "Au moins 2 bars à la CG.",
      "1 bar à la CG."
    ],
    correct: 0
  },

  {
    id: "C1Q060", theme: 1, type: "qcm", source: "C 12.01",
    question: "Pour terminer normalement l'arrêt d'un train freiné au frein modérable au desserrage, quelle méthode est prévue ?",
    choices: [
      "Maintenir la dépression initiale jusqu'à l'immobilisation.",
      "Remonter progressivement la pression CG par DESSERRAGE GRADUÉ tout en conservant l'effort de freinage requis."
    ],
    correct: 1
  },


  // =====================================================
  // C 12.02 / C 12.03 — PLUSIEURS ENGINS MOTEURS
  // =====================================================

  {
    id: "C1Q061", theme: 1, type: "qcm", source: "C 12.02",
    question: "En double traction ou en pousse attelée, pourquoi le poste en service de l'engin non placé en tête n'est-il pas simplement isolé comme en UM ?",
    choices: [
      "Son conducteur doit pouvoir commander le freinage si nécessaire, tout en ne pouvant pas commander le desserrage.",
      "Il doit pouvoir commander normalement serrage et desserrage en permanence."
    ],
    correct: 0
  },

  {
    id: "C1Q062", theme: 1, type: "qcm", source: "C 12.02",
    question: "En UM, quelle disposition distingue l'engin non occupé de la situation d'un second conducteur en DT ?",
    choices: [
      "Son robinet est placé sur NEUTRE ou DT.",
      "Ses postes de conduite sont isolés."
    ],
    correct: 1
  },

  {
    id: "C1Q063", theme: 1, type: "qcm", source: "C 12.02",
    question: "En double traction avec robinets à commande électrique, quelle fonction doit commander le second conducteur après avoir disposé ses appareils comme en simple traction ?",
    choices: [
      "NEUTRE ou DT.",
      "MARCHE."
    ],
    correct: 0
  },

  {
    id: "C1Q064", theme: 1, type: "qcm", source: "C 12.02",
    question: "En double traction ou pousse attelée, quelle utilisation du frein reste permise au second conducteur lorsque la situation l'exige ?",
    choices: [
      "SERRAGE GRADUÉ.",
      "SERRAGE D'URGENCE."
    ],
    correct: 1
  },

  {
    id: "C1Q065", theme: 1, type: "qcm", source: "C 12.02",
    question: "Une locomotive précédemment acheminée comme véhicule doit être réutilisée. Quelle combinaison d'opérations est prévue concernant son frein ?",
    choices: [
      "Mettre en service un poste, appliquer C 11.01 puis l'essai de fonctionnement du frein automatique de C 11.02.",
      "Réaliser uniquement un essai de fonctionnement depuis le poste déjà laissé en service."
    ],
    correct: 0
  },

  {
    id: "C1Q066", theme: 1, type: "qcm", source: "C 12.03",
    question: "Après retrait de l'engin moteur de tête d'une DT, l'engin restant reprend la commande normale du frein. Avec un robinet électrique, que faut-il notamment faire ?",
    choices: [
      "Maintenir NEUTRE jusqu'à la remise en mouvement.",
      "Supprimer la fonction NEUTRE ou DT."
    ],
    correct: 1
  },

  {
    id: "C1Q067", theme: 1, type: "qcm", source: "C 12.03",
    question: "Avec un robinet H7A, lors de la reprise de la commande normale du frein, quelle séquence est prescrite ?",
    choices: [
      "Dévisser le bouton moleté avant d'ouvrir le robinet RM.",
      "Ouvrir RM avant de dévisser le bouton moleté."
    ],
    correct: 0
  },

  {
    id: "C1Q068", theme: 1, type: "qcm", source: "C 12.03",
    question: "Après retrait d'une locomotive de pousse attelée, son conducteur doit reprendre la commande normale du frein. La procédure diffère-t-elle de celle appliquée après retrait de l'engin moteur de tête ?",
    choices: [
      "Oui, aucun essai de fonctionnement n'est alors nécessaire.",
      "Non, la même situation de reprise de commande normale est appliquée."
    ],
    correct: 1
  },


  // =====================================================
  // C 12.04 / C 12.05 — CHANGEMENT ET MISE EN SERVICE PC
  // =====================================================

  {
    id: "C1Q069", theme: 1, type: "qcm", source: "C 12.04",
    question: "Lors d'un changement de poste, quelle condition concernant la CG doit être obtenue au poste que l'on isole ?",
    choices: [
      "La pression CG doit descendre en dessous de 3 bars.",
      "La CG doit obligatoirement être totalement vidangée."
    ],
    correct: 0
  },

  {
    id: "C1Q070", theme: 1, type: "qcm", source: "C 12.04",
    question: "Après isolement du poste quitté lors d'un changement de poste, comment doit être disposée la poignée du frein direct ?",
    choices: [
      "SERRAGE.",
      "DESSERRAGE."
    ],
    correct: 1
  },

  {
    id: "C1Q071", theme: 1, type: "qcm", source: "C 12.05",
    question: "La mise en service d'un poste est interrompue avant la mise en service du frein et le conducteur n'est plus en mesure d'assurer une surveillance active. Quelle mesure est prescrite ?",
    choices: [
      "Enfoncer un bouton-poussoir d'urgence.",
      "Commander simplement NEUTRE."
    ],
    correct: 0
  },


  // =====================================================
  // C 13.01 À C 14.01 — RÈGLES PARTICULIÈRES
  // =====================================================

  {
    id: "C1Q072", theme: 1, type: "qcm", source: "C 13.01",
    question: "Pour réaliser l'arrêt d'un train sur une voie en impasse, quel frein C 13.01 impose-t-il d'utiliser ?",
    choices: [
      "Le frein direct pour améliorer la précision de l'arrêt.",
      "Le frein automatique."
    ],
    correct: 1
  },

  {
    id: "C1Q073", theme: 1, type: "qcm", source: "C 13.02",
    question: "Un arrêt aussi rapide que possible serait normalement nécessaire, mais le conducteur est informé de la présence d'une boîte chaude dans son train. Quelle particularité est prévue ?",
    choices: [
      "Il est recommandé de ne pas utiliser le freinage d'urgence afin de ne pas soumettre l'essieu à des efforts susceptibles d'entraîner sa rupture.",
      "Le serrage d'urgence reste impératif, mais sans sablage."
    ],
    correct: 0
  },

  {
    id: "C1Q074", theme: 1, type: "qcm", source: "C 13.02",
    question: "Lors d'un serrage d'urgence, à quel moment la fonction NEUTRE doit-elle être commandée ?",
    choices: [
      "Dès le début de la chute de pression CG.",
      "Lorsque la dépression maximale est atteinte, soit au moins 2,5 bars dans la CG."
    ],
    correct: 1
  },

  {
    id: "C1Q075", theme: 1, type: "qcm", source: "C 13.02",
    question: "La nécessité de l'arrêt d'urgence subsiste après obtention de la dépression maximale. Quelle disposition du robinet doit être maintenue jusqu'à l'arrêt ?",
    choices: [
      "NEUTRE.",
      "SERRAGE D'URGENCE."
    ],
    correct: 0
  },

  {
    id: "C1Q076", theme: 1, type: "qcm", source: "C 13.03",
    question: "Des véhicules doivent être retirés en queue. Quelle disposition doit être conservée avant l'éventuel ordre d'appuyer sur le train ?",
    choices: [
      "La CG réalimentée à 5 bars.",
      "Le frein automatique serré."
    ],
    correct: 1
  },

  {
    id: "C1Q077", theme: 1, type: "qcm", source: "C 13.03",
    question: "Pour appuyer sur le train lors d'un retrait de véhicules en queue, que fait le conducteur après en avoir reçu l'ordre si nécessaire ?",
    choices: [
      "Il réalimente la CG à 5 bars puis appuie.",
      "Il appuie en maintenant le frein automatique serré."
    ],
    correct: 0
  },

  {
    id: "C1Q078", theme: 1, type: "qcm", source: "C 13.04",
    question: "Lors d'un relais, quelle disposition le conducteur cédant doit-il laisser concernant le frein ?",
    choices: [
      "CG à 5 bars afin que le prenant puisse immédiatement utiliser le frein.",
      "Frein serré, avec pression CG abaissée à 4 bars si ce n'est déjà fait."
    ],
    correct: 1
  },

  {
    id: "C1Q079", theme: 1, type: "qcm", source: "C 14.01",
    question: "Avant d'abandonner la cabine d'un engin moteur seul, quelle situation de la CG est exigée, hors exception prévue aux documents techniques ?",
    choices: [
      "Après isolement du poste, s'assurer que la pression CG descend en dessous de 3 bars.",
      "Vidanger obligatoirement et complètement la CG."
    ],
    correct: 0
  },

  {
    id: "C1Q080", theme: 1, type: "qcm", source: "C 14.01",
    question: "L'engin moteur est attelé à un train et le conducteur abandonne la cabine. Quelle différence existe par rapport à l'abandon d'un engin moteur seul ?",
    choices: [
      "Il suffit également de vérifier que la CG descend sous 3 bars.",
      "Sauf exceptions prévues à l'égard du train, la CG doit être complètement vidangée puis le poste isolé."
    ],
    correct: 1
  }

];
