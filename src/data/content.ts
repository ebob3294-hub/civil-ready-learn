export type CategoryId = "incendie" | "secourisme" | "operations" | "materiel";

export const categories: { id: CategoryId; label: string; icon: string }[] = [
  { id: "incendie", label: "Incendie", icon: "flame" },
  { id: "secourisme", label: "Secourisme", icon: "heart" },
  { id: "operations", label: "Opérations Diverses", icon: "siren" },
  { id: "materiel", label: "Matériel", icon: "wrench" },
];

export type LevelId = "niveau-1" | "niveau-2" | "niveau-avance";

export const levels: { id: LevelId; label: string; subtitle: string }[] = [
  { id: "niveau-1", label: "Niveau 1", subtitle: "Bases du sapeur-pompier" },
  { id: "niveau-2", label: "Niveau 2", subtitle: "Équipier confirmé" },
  { id: "niveau-avance", label: "Niveau Avancé", subtitle: "Chef d'agrès & manœuvres" },
];

export type LessonBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "list"; items: string[] }
  | { type: "rule"; text: string };

export type Lesson = {
  id: string;
  title: string;
  level: LevelId;
  category: CategoryId;
  duration: string;
  summary: string;
  blocks: LessonBlock[];
};

export const lessons: Lesson[] = [
  {
    id: "triangle-du-feu",
    title: "Le triangle du feu",
    level: "niveau-1",
    category: "incendie",
    duration: "8 min",
    summary: "Comprendre les trois éléments indispensables à toute combustion.",
    blocks: [
      {
        type: "p",
        text: "La combustion est une réaction chimique d'oxydation d'un combustible par un comburant, déclenchée par une énergie d'activation. Supprimer un seul de ces éléments suffit à éteindre le feu.",
      },
      { type: "h", text: "Les trois côtés du triangle" },
      {
        type: "list",
        items: [
          "Le combustible : bois, hydrocarbures, gaz, métaux.",
          "Le comburant : l'oxygène de l'air (environ 21 %).",
          "L'énergie d'activation : flamme, étincelle, point chaud.",
        ],
      },
      { type: "h", text: "Les procédés d'extinction" },
      {
        type: "list",
        items: [
          "Refroidissement : abaisser la température (eau).",
          "Étouffement : priver le foyer d'oxygène (mousse, couverture).",
          "Inhibition : casser la réaction chimique (poudre).",
          "Isolement : retirer le combustible.",
        ],
      },
      {
        type: "rule",
        text: "Ne jamais utiliser d'eau en jet plein sur un feu d'hydrocarbures : risque de projection et d'extension du foyer.",
      },
    ],
  },
  {
    id: "classes-de-feux",
    title: "Les classes de feux et agents extincteurs",
    level: "niveau-1",
    category: "incendie",
    duration: "10 min",
    summary: "Classes A à F et choix de l'agent extincteur adapté.",
    blocks: [
      { type: "h", text: "Classification" },
      {
        type: "list",
        items: [
          "Classe A : feux secs (bois, papier, textile) — eau.",
          "Classe B : feux gras (hydrocarbures, solvants) — mousse, poudre.",
          "Classe C : feux de gaz — couper l'alimentation, poudre.",
          "Classe D : feux de métaux — poudre spéciale, sable sec.",
          "Classe F : huiles et graisses de cuisson — extincteur classe F.",
        ],
      },
      {
        type: "rule",
        text: "Feu de gaz : on ne coupe jamais la flamme avant d'avoir barré l'alimentation, sous peine de créer une atmosphère explosive.",
      },
      {
        type: "p",
        text: "Les feux d'origine électrique ne constituent pas une classe : on coupe le courant puis on traite selon le combustible en jeu, avec un agent non conducteur.",
      },
    ],
  },
  {
    id: "bilan-victime",
    title: "Bilan d'une victime : approche et alerte",
    level: "niveau-1",
    category: "secourisme",
    duration: "12 min",
    summary: "Protéger, examiner, alerter, secourir : la chaîne des gestes.",
    blocks: [
      { type: "h", text: "La conduite à tenir" },
      {
        type: "list",
        items: [
          "Sécuriser les lieux et se protéger (EPI, balisage).",
          "Apprécier l'état de conscience : question simple, ordre simple.",
          "Libérer les voies aériennes et rechercher la respiration 10 secondes.",
          "Passer le message d'alerte au CTA/CODIS.",
          "Réaliser les gestes de survie adaptés.",
        ],
      },
      { type: "h", text: "Le bilan circonstanciel puis vital" },
      {
        type: "p",
        text: "Le bilan circonstanciel décrit la situation, les risques persistants et le nombre de victimes. Le bilan vital évalue conscience, respiration et circulation, dans cet ordre.",
      },
      {
        type: "rule",
        text: "Un secouriste ne se met jamais en danger : une victime de plus, c'est un sauveteur de moins.",
      },
    ],
  },
  {
    id: "hemorragies",
    title: "Hémorragies externes",
    level: "niveau-1",
    category: "secourisme",
    duration: "9 min",
    summary: "Compression, pansement compressif et garrot tactique.",
    blocks: [
      {
        type: "p",
        text: "Une hémorragie externe est un saignement abondant qui imbibe un mouchoir en quelques secondes. Elle constitue une urgence vitale absolue.",
      },
      {
        type: "list",
        items: [
          "Compression manuelle directe immédiate, protégée par des gants.",
          "Relais par un pansement compressif.",
          "Garrot si compression impossible ou inefficace, ou en cas de damage control.",
          "Noter l'heure de pose du garrot et surveiller la victime.",
        ],
      },
      { type: "rule", text: "Un garrot posé n'est jamais desserré par le secouriste." },
    ],
  },
  {
    id: "etablissements-tuyaux",
    title: "Établissements de tuyaux",
    level: "niveau-2",
    category: "incendie",
    duration: "14 min",
    summary: "Établissements sur division, en écheveaux et par l'extérieur.",
    blocks: [
      { type: "h", text: "Principes" },
      {
        type: "list",
        items: [
          "L'établissement se fait du point d'attaque vers l'engin quand la situation l'exige.",
          "Prévoir du mou au niveau de la lance pour la progression.",
          "Protéger les tuyaux des arêtes vives et des passages de véhicules.",
          "Le porte-lance annonce « en avant » puis « halte » au chef d'équipe.",
        ],
      },
      { type: "h", text: "Débits usuels" },
      {
        type: "list",
        items: [
          "Lance à main de 500 l/min sous 6 bar en attaque intérieure.",
          "Lance de 1000 l/min pour un feu développé.",
          "Tuyaux de 45 mm pour l'attaque, 70 mm pour l'alimentation.",
        ],
      },
      {
        type: "rule",
        text: "Aucune progression en volume clos sans binôme, ARI en fonction et lance en eau.",
      },
    ],
  },
  {
    id: "ari",
    title: "Appareil respiratoire isolant (ARI)",
    level: "niveau-2",
    category: "materiel",
    duration: "11 min",
    summary: "Contrôles, autonomie et règles d'engagement sous ARI.",
    blocks: [
      { type: "h", text: "Contrôles avant engagement" },
      {
        type: "list",
        items: [
          "Pression bouteille supérieure à 90 % de la charge nominale.",
          "Test d'étanchéité du masque et du harnais.",
          "Vérification du signal sonore de fin d'autonomie.",
          "Contrôle croisé entre binômes.",
        ],
      },
      {
        type: "p",
        text: "L'autonomie dépend de la consommation individuelle, de l'effort et de la température. Elle se calcule et s'annonce toujours au chef d'agrès.",
      },
      {
        type: "rule",
        text: "Le binôme reste en contact visuel ou physique permanent et se replie ensemble au premier signal sonore.",
      },
    ],
  },
  {
    id: "sauvetage-deblaiement",
    title: "Opérations diverses : épuisement et bâchage",
    level: "niveau-2",
    category: "operations",
    duration: "7 min",
    summary: "Interventions pour fuites d'eau, dégâts et mise en sécurité.",
    blocks: [
      {
        type: "p",
        text: "Les opérations diverses regroupent les interventions sans notion d'urgence vitale : fuite d'eau, animal, ouverture de porte, bâchage de toiture.",
      },
      {
        type: "list",
        items: [
          "Rechercher l'origine et couper les énergies concernées.",
          "Protéger les biens avant de traiter le sinistre.",
          "Utiliser une motopompe ou un aspirateur à eau selon le volume.",
          "Rendre compte et faire signer la reconnaissance d'intervention.",
        ],
      },
      {
        type: "rule",
        text: "Toute intervention en hauteur impose un point d'ancrage et un harnais contrôlé.",
      },
    ],
  },
  {
    id: "lot-de-sauvetage",
    title: "Lot de sauvetage et de protection contre les chutes",
    level: "niveau-avance",
    category: "materiel",
    duration: "13 min",
    summary: "Composition du LSPCC et techniques de descente.",
    blocks: [
      { type: "h", text: "Composition" },
      {
        type: "list",
        items: [
          "Corde de 30 m avec sac de transport.",
          "Deux triangles d'évacuation (adulte et enfant).",
          "Descendeur, anneaux de sangle et mousquetons à vis.",
          "Commandes de manœuvre et poulies.",
        ],
      },
      { type: "h", text: "Trois manœuvres de référence" },
      {
        type: "list",
        items: [
          "Sauvetage par l'extérieur.",
          "Sauvetage en excavation.",
          "Protection contre les chutes de hauteur.",
        ],
      },
      {
        type: "rule",
        text: "Le matériel est mis au rebut immédiatement après une chute, même sans dommage apparent.",
      },
    ],
  },
  {
    id: "phenomenes-thermiques",
    title: "Phénomènes thermiques en volume clos",
    level: "niveau-avance",
    category: "incendie",
    duration: "15 min",
    summary: "Flashover, backdraft, rollover : lecture du feu et signes précurseurs.",
    blocks: [
      { type: "h", text: "Lecture du feu" },
      {
        type: "list",
        items: [
          "Suies grasses et vitres noircies : feu sous-ventilé.",
          "Fumées sous pression pulsant aux ouvertures : risque de backdraft.",
          "Langues de flammes au plafond (rollover) : embrasement imminent.",
          "Chaleur intense obligeant à s'abaisser : signe d'alerte.",
        ],
      },
      { type: "h", text: "Actions" },
      {
        type: "list",
        items: [
          "Refroidir les fumées par impulsions courtes.",
          "Maîtriser la ventilation avant d'ouvrir.",
          "Se placer hors de l'axe de la porte et à genou.",
        ],
      },
      {
        type: "rule",
        text: "Jamais d'ouverture d'un volume clos sans lance en eau, ligne de repli identifiée et binôme prêt.",
      },
    ],
  },
  {
    id: "commandement",
    title: "Marche générale des opérations",
    level: "niveau-avance",
    category: "operations",
    duration: "12 min",
    summary: "Reconnaissance, sauvetages, attaque et protection.",
    blocks: [
      {
        type: "list",
        items: [
          "Reconnaissance : explorer tous les volumes et rechercher les victimes.",
          "Sauvetages et mises en sécurité.",
          "Établissements et attaque du sinistre.",
          "Protection des biens, déblai et surveillance.",
        ],
      },
      {
        type: "p",
        text: "Le chef d'agrès rend compte dès son arrivée, demande les moyens nécessaires et actualise ses messages à chaque évolution significative.",
      },
      {
        type: "rule",
        text: "Une reconnaissance n'est terminée que lorsque tous les volumes ont été explorés et annoncés.",
      },
    ],
  },
];

export type Question = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type Quiz = {
  id: string;
  title: string;
  level: LevelId;
  category: CategoryId;
  questions: Question[];
};

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
        explanation: "L'eau absorbe l'énergie et abaisse la température sous le point d'inflammation.",
      },
      {
        question: "Quel diamètre de tuyau est classiquement utilisé pour l'attaque ?",
        options: ["25 mm", "45 mm", "70 mm", "110 mm"],
        answer: 1,
        explanation: "Le 45 mm sert à l'attaque, le 70 mm à l'alimentation.",
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
    ],
  },
];

export const getLesson = (id: string) => lessons.find((l) => l.id === id);
export const getQuiz = (id: string) => quizzes.find((q) => q.id === id);
