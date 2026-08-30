import type { Quiz } from "./types";

export const quizzesSpecialites: Quiz[] = [
  {
    id: "qcm-sap-pse1",
    title: "SAP — PSE1 : bilans et gestes d'urgence",
    level: "niveau-1",
    category: "secourisme",
    questions: [
      {
        question: "Quel bilan est réalisé en premier à l'arrivée sur les lieux ?",
        options: [
          "Le bilan complémentaire",
          "Le bilan circonstanciel",
          "Le bilan d'urgence vitale",
          "La surveillance",
        ],
        answer: 1,
        explanation:
          "Le bilan circonstanciel évalue la sécurité, la nature de l'intervention et les moyens nécessaires.",
      },
      {
        question: "Fréquence respiratoire normale chez l'adulte au repos :",
        options: ["4 à 8 / min", "12 à 20 / min", "25 à 35 / min", "40 à 60 / min"],
        answer: 1,
        explanation: "Entre 12 et 20 mouvements respiratoires par minute.",
      },
      {
        question: "Un garrot est posé :",
        options: [
          "Sur l'articulation la plus proche",
          "5 cm au-dessus de la plaie, jamais sur une articulation",
          "Directement sur la plaie",
          "À la racine du membre uniquement",
        ],
        answer: 1,
        explanation: "5 cm au-dessus de la plaie, en évitant toute articulation.",
      },
      {
        question: "Chez l'enfant en arrêt cardiaque, la RCP débute par :",
        options: [
          "30 compressions",
          "5 insufflations initiales",
          "2 insufflations",
          "Une analyse du DAE",
        ],
        answer: 1,
        explanation: "L'arrêt de l'enfant étant souvent d'origine respiratoire, on débute par 5 insufflations.",
      },
      {
        question: "Débit d'oxygène recommandé au BAVU en insufflation :",
        options: ["3 l/min", "6 l/min", "9 l/min", "15 l/min"],
        answer: 3,
        explanation: "15 l/min pour remplir le ballon réserve et obtenir une FiO2 maximale.",
      },
    ],
  },
  {
    id: "qcm-sap-pse2",
    title: "SAP — PSE2 : immobilisations et détresses",
    level: "niveau-2",
    category: "secourisme",
    questions: [
      {
        question: "Une attelle doit immobiliser :",
        options: [
          "Seulement le foyer de fracture",
          "L'articulation sus et sous-jacente",
          "L'ensemble du corps",
          "Uniquement l'articulation supérieure",
        ],
        answer: 1,
        explanation: "L'immobilisation englobe les articulations situées au-dessus et en dessous du foyer.",
      },
      {
        question: "Face à une suspicion d'AVC, l'information capitale à transmettre est :",
        options: [
          "Le poids de la victime",
          "L'heure d'apparition des premiers signes",
          "La couleur des pupilles",
          "Le dernier repas",
        ],
        answer: 1,
        explanation: "L'heure de début conditionne la possibilité de thrombolyse.",
      },
      {
        question: "Le matelas immobilisateur à dépression est utilisé pour :",
        options: [
          "Réchauffer la victime",
          "Immobiliser l'ensemble du corps et du rachis",
          "Relever une victime debout",
          "Comprimer une hémorragie",
        ],
        answer: 1,
        explanation: "Il assure une immobilisation globale, notamment du rachis.",
      },
      {
        question: "Lors d'une désincarcération, l'extraction d'urgence est décidée si :",
        options: [
          "La victime est stressée",
          "Une détresse vitale ou un danger imminent existe",
          "Le véhicule est ancien",
          "La police est absente",
        ],
        answer: 1,
        explanation: "Détresse vitale ou danger imminent justifient l'extraction immédiate.",
      },
      {
        question: "Sur un véhicule accidenté, la première action technique est :",
        options: [
          "La dépose du pavillon",
          "La stabilisation du véhicule et la coupure de la batterie",
          "L'ouverture du capot",
          "La désincarcération",
        ],
        answer: 1,
        explanation: "Stabiliser et supprimer l'énergie électrique avant tout travail sur le véhicule.",
      },
    ],
  },
  {
    id: "qcm-inc-specialite",
    title: "INC — Manœuvres, feux de forêt et ventilation",
    level: "niveau-2",
    category: "incendie",
    questions: [
      {
        question: "Les quatre paramètres de lecture des fumées sont :",
        options: [
          "Volume, vitesse, densité, couleur",
          "Chaleur, bruit, odeur, couleur",
          "Hauteur, largeur, densité, pression",
          "Volume, odeur, couleur, humidité",
        ],
        answer: 0,
        explanation: "Volume, vitesse, densité et couleur guident l'analyse du feu.",
      },
      {
        question: "En feu de forêt, l'attaque directe se mène :",
        options: [
          "Sur la tête du feu face au vent",
          "Sur les flancs en progressant vers la tête",
          "Depuis la queue vers le vide",
          "Uniquement par les moyens aériens",
        ],
        answer: 1,
        explanation: "On attaque les flancs pour resserrer le front vers la tête.",
      },
      {
        question: "La ventilation par surpression exige avant tout :",
        options: [
          "Un sortant créé et contrôlé",
          "Un feu déjà éteint",
          "Toutes les fenêtres ouvertes",
          "Un ventilateur dans le local",
        ],
        answer: 0,
        explanation: "Sans sortant maîtrisé, la surpression alimente le feu et propage les fumées.",
      },
      {
        question: "L'établissement d'alimentation depuis l'hydrant se fait classiquement en :",
        options: ["25 mm", "45 mm", "70 mm", "110 mm"],
        answer: 2,
        explanation: "Le 70 mm alimente l'engin ; le 45 mm sert à l'attaque.",
      },
      {
        question: "Un feu de forêt : facteur de propagation dominant :",
        options: ["Le vent", "L'altitude", "La faune", "La nature du sol"],
        answer: 0,
        explanation: "Le vent oriente et accélère la propagation du front.",
      },
    ],
  },
  {
    id: "qcm-od-specialite",
    title: "OD — Inondations, hyménoptères, animaux, portes",
    level: "niveau-1",
    category: "operations",
    questions: [
      {
        question: "Avant d'épuiser un local inondé, on doit :",
        options: [
          "Ouvrir les fenêtres",
          "Couper l'alimentation électrique",
          "Démarrer la motopompe",
          "Prévenir l'assurance",
        ],
        answer: 1,
        explanation: "Le risque électrique est majeur en présence d'eau.",
      },
      {
        question: "Une hauteur d'eau courante suffisante pour emporter une personne est d'environ :",
        options: ["5 cm", "30 cm", "1 m", "2 m"],
        answer: 1,
        explanation: "30 cm d'eau courante suffisent à déséquilibrer et emporter un adulte.",
      },
      {
        question: "En présence d'un nid d'abeilles, la conduite à tenir privilégiée est :",
        options: [
          "Destruction immédiate à l'insecticide",
          "Faire appel à un apiculteur, espèce protégée",
          "Arrosage à la lance",
          "Enfumage du nid",
        ],
        answer: 1,
        explanation: "Les abeilles sont protégées : on privilégie le recueil par un apiculteur.",
      },
      {
        question: "Pour une ouverture de porte, on commence par :",
        options: [
          "Arracher le cylindre",
          "Rechercher un accès non destructif",
          "Utiliser la disqueuse",
          "Enfoncer la porte",
        ],
        answer: 1,
        explanation: "On procède du moins au plus destructif, sauf urgence vitale.",
      },
    ],
  },
  {
    id: "qcm-rt-hazmat",
    title: "RT / HAZMAT — Matières dangereuses et NRBC",
    level: "niveau-avance",
    category: "risques",
    questions: [
      {
        question: "La plaque orange d'un véhicule de transport indique :",
        options: [
          "Le tonnage du véhicule",
          "Le numéro ONU de la matière et le code danger",
          "Le nom du transporteur",
          "La date de contrôle technique",
        ],
        answer: 1,
        explanation: "Numéro ONU (matière) et code danger permettent l'identification.",
      },
      {
        question: "L'approche d'une fuite de produit toxique se fait :",
        options: [
          "Vent de face, en point bas",
          "Vent dans le dos, en point haut",
          "Par le côté le plus court",
          "Indifféremment",
        ],
        answer: 1,
        explanation: "Vent dans le dos et point haut limitent l'exposition au nuage.",
      },
      {
        question: "Les trois protections contre le risque radiologique sont :",
        options: [
          "Distance, écran, temps",
          "Eau, air, terre",
          "Masque, gants, casque",
          "Dosimètre, sas, douche",
        ],
        answer: 0,
        explanation: "Augmenter la distance, interposer un écran, réduire le temps d'exposition.",
      },
      {
        question: "La zone d'exclusion est :",
        options: [
          "La zone du PC",
          "La zone réservée aux intervenants en tenue adaptée",
          "La zone du public",
          "La zone de stationnement des engins",
        ],
        answer: 1,
        explanation: "Seuls les intervenants protégés y accèdent, via un sas.",
      },
      {
        question: "Une victime contaminée est :",
        options: [
          "Transportée immédiatement sans précaution",
          "Décontaminée avant transport, sauf urgence vitale avec confinement",
          "Laissée sur place",
          "Douchée à l'eau froide sous pression",
        ],
        answer: 1,
        explanation: "La décontamination évite le transfert de contamination aux moyens et aux équipes.",
      },
    ],
  },
  {
    id: "qcm-sde",
    title: "SDE — Sauvetage et déblaiement",
    level: "niveau-avance",
    category: "sauvetage",
    questions: [
      {
        question: "La corde du LSPCC mesure :",
        options: ["15 m", "20 m", "30 m", "50 m"],
        answer: 2,
        explanation: "Le lot de sauvetage comprend une corde de 30 mètres.",
      },
      {
        question: "Une victime suspendue dans un harnais doit être dégagée rapidement à cause :",
        options: [
          "Du risque de chute",
          "Du syndrome du harnais",
          "De l'usure de la corde",
          "Du froid",
        ],
        answer: 1,
        explanation: "Le syndrome du harnais peut être mortel en quelques minutes.",
      },
      {
        question: "Avant tout engagement sous une structure instable, il faut :",
        options: [
          "Étayer la structure",
          "Arroser les gravats",
          "Attendre le jour",
          "Déblayer rapidement",
        ],
        answer: 0,
        explanation: "L'étaiement sécurise la zone de travail avant progression.",
      },
      {
        question: "La recherche de victimes sous décombres utilise notamment :",
        options: [
          "L'appel-silence et la cynotechnie",
          "Le jet de lance",
          "Le ventilateur",
          "Les explosimètres uniquement",
        ],
        answer: 0,
        explanation: "Appel-silence, chiens de recherche, moyens d'écoute et caméras d'exploration.",
      },
      {
        question: "Le dégagement prolongé d'un membre comprimé expose à :",
        options: [
          "Une hypoglycémie",
          "Un syndrome de compression des membres",
          "Une hypothermie isolée",
          "Une crise d'asthme",
        ],
        answer: 1,
        explanation: "Le relargage de toxines impose un dégagement médicalisé.",
      },
    ],
  },
];
