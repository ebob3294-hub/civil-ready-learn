import type { Quiz } from "./types";

export const quizzes: Quiz[] = [
  {
    id: "qcm-incendie-1",
    title: "Incendie — Fondamentaux",
    level: "niveau-1",
    category: "incendie",
    questions: [
      {
        question: "Quels sont les trois éléments du triangle du feu ?",
        options: [
          "Combustible, comburant, énergie d'activation",
          "Chaleur, fumée, flamme",
          "Oxygène, eau, mousse",
          "Combustible, fumée, pression",
        ],
        answer: 0,
        explanation:
          "Le triangle du feu associe un combustible, un comburant et une énergie d'activation.",
      },
      {
        question: "À quelle classe appartient un feu de solvant ?",
        options: ["Classe A", "Classe B", "Classe D", "Classe F"],
        answer: 1,
        explanation: "Les feux de liquides inflammables (feux gras) sont de classe B.",
      },
      {
        question: "Sur un feu de gaz enflammé, quelle est la première action ?",
        options: [
          "Éteindre la flamme à la poudre",
          "Arroser en jet plein",
          "Barrer l'alimentation en gaz",
          "Ventiler le local",
        ],
        answer: 2,
        explanation:
          "Couper l'alimentation évite la formation d'une atmosphère explosive après extinction.",
      },
      {
        question: "Le refroidissement d'un foyer agit sur :",
        options: [
          "Le comburant",
          "La température",
          "Le combustible",
          "La réaction en chaîne uniquement",
        ],
        answer: 1,
        explanation:
          "L'eau absorbe l'énergie et abaisse la température sous le point d'inflammation.",
      },
      {
        question: "Quel diamètre de tuyau est classiquement utilisé pour l'attaque ?",
        options: ["25 mm", "45 mm", "70 mm", "110 mm"],
        answer: 1,
        explanation: "Le 45 mm sert à l'attaque, le 70 mm à l'alimentation.",
      },
      {
        question: "La convection propage la chaleur principalement :",
        options: [
          "Par contact entre solides",
          "Par les gaz chauds qui montent",
          "À distance sans support",
          "Par écoulement de liquides",
        ],
        answer: 1,
        explanation: "La convection est le transport de chaleur par les gaz chauds en mouvement.",
      },
    ],
  },
  {
    id: "qcm-secourisme-1",
    title: "Secourisme — Gestes qui sauvent",
    level: "niveau-1",
    category: "secourisme",
    questions: [
      {
        question: "Combien de temps recherche-t-on la respiration d'une victime inconsciente ?",
        options: ["3 secondes", "10 secondes", "30 secondes", "1 minute"],
        answer: 1,
        explanation: "La recherche de respiration dure au maximum 10 secondes.",
      },
      {
        question: "Face à une hémorragie externe, on réalise d'abord :",
        options: [
          "Un garrot",
          "Une compression manuelle directe",
          "Un pansement simple",
          "Une position latérale de sécurité",
        ],
        answer: 1,
        explanation: "La compression manuelle directe est le geste immédiat.",
      },
      {
        question: "Un garrot posé par le secouriste doit être :",
        options: [
          "Desserré toutes les 10 minutes",
          "Retiré à l'arrivée du médecin par le secouriste",
          "Maintenu, avec l'heure de pose notée",
          "Recouvert d'un pansement",
        ],
        answer: 2,
        explanation: "On ne desserre jamais un garrot ; l'heure de pose est indispensable.",
      },
      {
        question: "Quel est l'ordre du bilan vital ?",
        options: [
          "Circulation, respiration, conscience",
          "Conscience, respiration, circulation",
          "Respiration, conscience, circulation",
          "Conscience, circulation, respiration",
        ],
        answer: 1,
        explanation: "Conscience, puis respiration, puis circulation.",
      },
      {
        question: "Face à une obstruction totale des voies aériennes, on réalise d'abord :",
        options: [
          "Cinq compressions abdominales",
          "Cinq claques dans le dos",
          "Une PLS",
          "Deux insufflations",
        ],
        answer: 1,
        explanation: "Cinq claques dans le dos, puis cinq compressions si nécessaire.",
      },
    ],
  },
  {
    id: "qcm-materiel",
    title: "Matériel & Engins",
    level: "niveau-2",
    category: "materiel",
    questions: [
      {
        question: "Avant engagement, la pression de la bouteille d'ARI doit être :",
        options: ["> 50 %", "> 70 %", "> 90 % de la charge nominale", "Indifférente"],
        answer: 2,
        explanation: "On s'engage avec une bouteille à plus de 90 % de sa charge nominale.",
      },
      {
        question: "Une lance à main d'attaque intérieure débite couramment :",
        options: ["150 l/min", "250 l/min", "500 l/min", "2000 l/min"],
        answer: 2,
        explanation: "500 l/min sous 6 bar est le réglage courant en attaque intérieure.",
      },
      {
        question: "Après une chute, le matériel du LSPCC est :",
        options: [
          "Réutilisable après contrôle visuel",
          "Mis au rebut immédiatement",
          "Lavé puis remis en service",
          "Utilisé en formation seulement",
        ],
        answer: 1,
        explanation: "Tout matériel ayant subi une chute est mis au rebut.",
      },
      {
        question: "Quel extincteur est adapté à un feu de friteuse ?",
        options: ["Eau pulvérisée", "CO2", "Poudre ABC", "Extincteur classe F"],
        answer: 3,
        explanation: "Les huiles et graisses de cuisson relèvent de la classe F.",
      },
      {
        question: "L'angle de dressage d'une échelle à coulisse est d'environ :",
        options: ["45°", "60°", "75°", "90°"],
        answer: 2,
        explanation: "Environ 75°, avec un dépassement d'un mètre au-dessus du point d'appui.",
      },
    ],
  },
  {
    id: "qcm-operations-2",
    title: "Opérations diverses & secours routier",
    level: "niveau-2",
    category: "operations",
    questions: [
      {
        question: "Sur un accident de la route, la première action est :",
        options: [
          "L'abord de la victime",
          "La sécurisation et le balisage",
          "La désincarcération",
          "La coupure des batteries",
        ],
        answer: 1,
        explanation: "La sécurisation des lieux protège les intervenants et les victimes.",
      },
      {
        question: "Sur un véhicule électrique accidenté, les câbles orange :",
        options: [
          "Sont coupés en priorité",
          "Ne doivent jamais être coupés",
          "Sont mis à la terre",
          "Sont arrosés",
        ],
        answer: 1,
        explanation: "Les câbles orange sont sous haute tension : on ne les touche jamais.",
      },
      {
        question: "Distance de sécurité minimale vis-à-vis d'une ligne haute tension aérienne :",
        options: ["1 m", "3 m", "5 m", "10 m"],
        answer: 2,
        explanation: "5 mètres pour les lignes aériennes haute tension.",
      },
      {
        question: "En présence d'une fuite de gaz dans un local, on doit :",
        options: [
          "Allumer la lumière pour voir",
          "Sonner à toutes les portes",
          "Ventiler et ne créer aucune source d'ignition",
          "Utiliser un ventilateur électrique",
        ],
        answer: 2,
        explanation: "Toute source d'ignition, même un interrupteur, peut provoquer l'explosion.",
      },
    ],
  },
  {
    id: "qcm-secourisme-2",
    title: "Secourisme — Détresses vitales",
    level: "niveau-2",
    category: "secourisme",
    questions: [
      {
        question: "Le rythme de la RCP chez l'adulte est de :",
        options: [
          "15 compressions / 2 insufflations",
          "30 compressions / 2 insufflations",
          "5 compressions / 1 insufflation",
          "Compressions continues sans insufflation",
        ],
        answer: 1,
        explanation: "30 compressions pour 2 insufflations chez l'adulte.",
      },
      {
        question: "La fréquence des compressions thoraciques est de :",
        options: ["60 à 80/min", "80 à 100/min", "100 à 120/min", "140 à 160/min"],
        answer: 2,
        explanation: "Entre 100 et 120 compressions par minute.",
      },
      {
        question: "Un brûlé doit être refroidi :",
        options: [
          "À l'eau glacée pendant 1 minute",
          "À l'eau tempérée, ruisselante, 5 à 15 minutes",
          "Avec de la glace directement",
          "Pas de refroidissement",
        ],
        answer: 1,
        explanation: "Eau tempérée et ruisselante, en évitant l'hypothermie.",
      },
      {
        question: "Un membre déformé après traumatisme doit être :",
        options: [
          "Remis dans l'axe",
          "Immobilisé dans la position trouvée",
          "Massé",
          "Mobilisé pour tester la douleur",
        ],
        answer: 1,
        explanation: "On n'effectue jamais de réduction : immobilisation en position trouvée.",
      },
      {
        question: "Le relais du masseur pendant une RCP se fait toutes les :",
        options: ["30 secondes", "2 minutes", "5 minutes", "10 minutes"],
        answer: 1,
        explanation: "Toutes les 2 minutes pour maintenir des compressions efficaces.",
      },
    ],
  },
  {
    id: "qcm-reconnaissance",
    title: "Reconnaissance & Commandement",
    level: "niveau-avance",
    category: "operations",
    questions: [
      {
        question: "Quel est le premier temps de la marche générale des opérations ?",
        options: ["L'attaque", "La reconnaissance", "La protection", "Le déblai"],
        answer: 1,
        explanation: "La reconnaissance précède toujours les autres phases.",
      },
      {
        question: "Des fumées pulsant sous pression à une ouverture évoquent :",
        options: ["Un feu ventilé", "Un risque de backdraft", "Un feu éteint", "Une fuite de gaz"],
        answer: 1,
        explanation: "Les pulsations traduisent un feu sous-ventilé et un risque de backdraft.",
      },
      {
        question: "Une reconnaissance est terminée quand :",
        options: [
          "Le feu est éteint",
          "Tous les volumes ont été explorés et annoncés",
          "Le chef d'agrès quitte les lieux",
          "Les victimes sont évacuées",
        ],
        answer: 1,
        explanation: "Tous les volumes doivent être explorés et le compte rendu transmis.",
      },
      {
        question: "Sous ARI, le binôme se replie :",
        options: [
          "Au premier signal sonore de fin d'autonomie",
          "À la moitié de la bouteille",
          "Sur ordre du porte-lance",
          "Après extinction complète",
        ],
        answer: 0,
        explanation: "Le signal sonore impose un repli immédiat et conjoint du binôme.",
      },
      {
        question: "Le LSPCC comprend une corde de :",
        options: ["15 m", "20 m", "30 m", "50 m"],
        answer: 2,
        explanation: "La corde du lot de sauvetage mesure 30 mètres.",
      },
      {
        question: "Le message d'ambiance est transmis :",
        options: [
          "En fin d'intervention",
          "Dans les premières minutes suivant l'arrivée",
          "Uniquement sur demande du CODIS",
          "Avec le bilan des victimes",
        ],
        answer: 1,
        explanation: "Il livre les premières impressions dès l'arrivée sur les lieux.",
      },
    ],
  },
  {
    id: "qcm-avance-incendie",
    title: "Incendie — Niveau avancé",
    level: "niveau-avance",
    category: "incendie",
    questions: [
      {
        question: "La ventilation d'attaque nécessite avant tout :",
        options: [
          "Un sortant créé et contrôlé",
          "Un ventilateur à l'intérieur du local",
          "L'extinction préalable du foyer",
          "L'ouverture de toutes les fenêtres",
        ],
        answer: 0,
        explanation: "Sans sortant maîtrisé, la ventilation alimente le feu et propage les fumées.",
      },
      {
        question: "En feu de forêt, le facteur principal de propagation est :",
        options: ["L'hygrométrie", "Le vent", "L'altitude", "L'heure de la journée"],
        answer: 1,
        explanation: "Le vent oriente et accélère le front de flammes.",
      },
      {
        question: "Le rollover se manifeste par :",
        options: [
          "Une explosion de fumées à l'ouverture",
          "Des langues de flammes courant au plafond",
          "Un effondrement de structure",
          "Une baisse de la température",
        ],
        answer: 1,
        explanation: "Le rollover précède souvent l'embrasement généralisé éclair.",
      },
      {
        question: "Le repli d'un binôme s'impose notamment en cas de :",
        options: [
          "Perte de l'eau à la lance",
          "Fumées grises",
          "Ordre d'un tiers",
          "Fin de la reconnaissance périphérique",
        ],
        answer: 0,
        explanation: "Perte d'eau, perte du binôme ou alarme ARI imposent le repli immédiat.",
      },
    ],
  },
];

export const getQuiz = (id: string) => quizzes.find((q) => q.id === id);
