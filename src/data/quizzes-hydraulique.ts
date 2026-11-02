import type { Quiz } from "./types";

export const quizzesHydraulique: Quiz[] = [
  {
    id: "qcm-hydr-1",
    title: "Pertes de charge et hydraulique — QCM",
    level: "niveau-2",
    category: "incendie",
    questions: [
      {
        question: "La perte de charge dans un tuyau augmente avec :",
        options: ["La longueur et le débit", "Le seul diamètre", "La température de l'air", "La couleur du tuyau"],
        answer: 0,
        explanation: "Perte de charge proportionnelle à la longueur et au débit, inversement liée au diamètre.",
      },
      {
        question: "Au même débit, le DN 100 perd environ combien de fois moins qu'un DN 65 ?",
        options: ["Autant", "2 fois moins", "4 fois moins", "10 fois moins"],
        answer: 2,
        explanation: "Le grand diamètre réduit fortement les frottements : environ 4 fois moins de perte.",
      },
      {
        question: "Quel dénivelé correspond à 1 bar de pression gagnée ou perdue ?",
        options: ["1 m", "10 m", "50 m", "100 m"],
        answer: 1,
        explanation: "1 bar ≈ 10 m de colonne d'eau.",
      },
      {
        question: "La pression visée à la lance pour une attaque efficace est d'environ :",
        options: ["1 bar", "3 bar", "6 bar", "15 bar"],
        answer: 2,
        explanation: "On maintient environ 6 bar à la lance pour une portée utile.",
      },
      {
        question: "Doubler le débit dans une même ligne :",
        options: ["Double la perte de charge", "Triple la perte de charge", "Multiplie presque la perte par 4", "Ne change rien"],
        answer: 2,
        explanation: "La perte varie quasiment avec le carré du débit.",
      },
      {
        question: "Fermer brutalement une lance en charge provoque :",
        options: ["Rien de particulier", "Un coup de bélier dangereux", "Une économie d'eau", "Un refroidissement de la pompe"],
        answer: 1,
        explanation: "Le coup de bélier peut éclater un tuyau ou endommager la pompe : manœuvres progressives.",
      },
      {
        question: "Pour limiter les pertes de charge sur un long établissement, on utilise :",
        options: ["Une grande ligne DN 100", "Plus de coudes", "Un DN 45", "Une division fermée à moitié"],
        answer: 0,
        explanation: "L'alimentation se fait en DN 100 ; les coudes et demi-ouvertures créent des pertes.",
      },
    ],
  },
  {
    id: "qcm-hydr-2",
    title: "Hydrants : poteaux et bouches — QCM",
    level: "niveau-1",
    category: "incendie",
    questions: [
      {
        question: "Le poteau d'incendie possède :",
        options: ["Deux sorties DN 65 et une sortie DN 100", "Une seule sortie DN 100", "Trois sorties DN 45", "Une sortie pneumatique"],
        answer: 0,
        explanation: "Deux vannes DN 65 latérales et une sortie DN 100 au sommet.",
      },
      {
        question: "La bouche d'incendie est :",
        options: ["Un hydrant aérien", "Un hydrant enterré sous plaque", "Un camion-citerne", "Une réserve de mousse"],
        answer: 1,
        explanation: "Hydrant enterré, accessible sous une plaque gravée dans la chaussée.",
      },
      {
        question: "La bouche d'incendie s'ouvre avec :",
        options: ["La clé à bouche", "La pince multiprise", "Le marteau", "La cisaille"],
        answer: 0,
        explanation: "Clé à bouche (griffe) spécifique pour actionner le volant enterré.",
      },
      {
        question: "Le débit normalisé d'un hydrant est d'environ :",
        options: ["60 m³/h sous 1 bar", "600 m³/h sous 5 bar", "6 m³/h sous 0,5 bar", "Illimité"],
        answer: 0,
        explanation: "Environ 60 m³/h (1 000 l/min) sous 1 bar.",
      },
      {
        question: "Après usage d'une bouche d'incendie, il faut :",
        options: ["La laisser ouverte", "La vidanger", "La peindre", "Retirer la plaque"],
        answer: 1,
        explanation: "Vidanger évite le gel et la corrosion de la colonne.",
      },
      {
        question: "Sur la plaque indicatrice, le nombre au-dessus du trait indique :",
        options: ["L'angle en degrés", "La distance en mètres", "Le diamètre", "Le débit"],
        answer: 1,
        explanation: "Distance en mètres vers l'hydrant ; sous le trait, l'angle de décalage.",
      },
      {
        question: "Un hydrant inaccessible à cause d'une voiture :",
        options: ["On casse le pare-brise", "On cherche l'hydrant suivant", "On abandonne", "On tire avec le camion"],
        answer: 1,
        explanation: "Signaler et chercher un autre point d'eau ; l'engin ne détruit pas le véhicule.",
      },
    ],
  },
  {
    id: "qcm-hydr-3",
    title: "Tuyaux et extincteurs — QCM",
    level: "niveau-1",
    category: "incendie",
    questions: [
      {
        question: "La grande ligne d'alimentation se fait en :",
        options: ["DN 45", "DN 65", "DN 100", "DN 25"],
        answer: 2,
        explanation: "Le DN 100 limite les pertes de charge sur les longues distances.",
      },
      {
        question: "Avant de déconnecter un raccord, il faut :",
        options: ["Tirer fort", "Détendre la ligne", "Le frapper", "Le couper"],
        answer: 1,
        explanation: "Jamais de déconnexion sous pression : détendre d'abord la ligne.",
      },
      {
        question: "L'extincteur eau pulvérisée est adapté aux feux de classe :",
        options: ["A (solides)", "B (liquides)", "C (gaz)", "D (métaux)"],
        answer: 0,
        explanation: "Eau pulvérisée : feux de solides (A). Eau + additif : A et B.",
      },
      {
        question: "L'extincteur CO2 (neige carbonique) convient surtout aux :",
        options: ["Feux de papier de bureau", "Feux d'installations électriques", "Feux de gaz en plein air", "Feux de métaux"],
        answer: 1,
        explanation: "CO2, non conducteur : idéal sur les feux électriques et liquides.",
      },
      {
        question: "L'extincteur poudre ABC couvre les feux :",
        options: ["A, B et C", "Uniquement A", "Uniquement C", "D uniquement"],
        answer: 0,
        explanation: "La poudre ABC est polyvalente : solides, liquides et gaz.",
      },
      {
        question: "Sur un feu d'huile de cuisson, on utilise :",
        options: ["Un jet d'eau droit", "Un extincteur eau + additif classe F", "De la poudre ABC en jet plein", "Du CO2 à bout portant"],
        answer: 1,
        explanation: "Classe F : extincteur wet chemical ; jamais d'eau, projection violente.",
      },
      {
        question: "L'extincteur à roues (50 kg) sert à :",
        options: ["Les feux d'habitation courants", "Les feux importants en milieu industriel", "Le transport de produits", "Le reboisement"],
        answer: 1,
        explanation: "Grandes capacités pour risques industriels et carburants.",
      },
    ],
  },
];
