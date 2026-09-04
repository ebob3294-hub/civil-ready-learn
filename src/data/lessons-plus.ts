import type { Lesson } from "./types";

export const lessonsPlus: Lesson[] = [
  {
    id: "plus-camera-thermique",
    title: "Caméra thermique : emploi opérationnel",
    level: "niveau-2",
    category: "materiel",
    duration: "9 min",
    summary: "Lire une image thermique pour la reconnaissance et la recherche de victimes.",
    blocks: [
      { type: "h", text: "Rôles principaux" },
      {
        type: "list",
        items: [
          "Recherche de victimes dans un volume enfumé",
          "Localisation du foyer et des points chauds",
          "Suivi de la propagation dans les cloisons et faux plafonds",
          "Contrôle après extinction (reprise de feu)",
          "Aide à l'orientation et au repli du binôme",
        ],
      },
      { type: "h", text: "Limites" },
      {
        type: "list",
        items: [
          "Ne voit pas à travers le verre ni l'eau",
          "Image faussée par les surfaces réfléchissantes",
          "Ne remplace jamais la reconnaissance au contact",
          "Autonomie de batterie limitée : contrôle avant départ",
        ],
      },
      { type: "rule", text: "La caméra est une aide : le binôme progresse toujours au contact et sous ARI." },
    ],
  },
  {
    id: "plus-ventilation-operationnelle",
    title: "Ventilation opérationnelle : principes et techniques",
    level: "niveau-avance",
    category: "incendie",
    duration: "12 min",
    summary: "Ventilation naturelle, mécanique par surpression et anti-fumée.",
    blocks: [
      { type: "h", text: "Objectifs" },
      {
        type: "list",
        items: [
          "Protéger les personnes et les voies d'accès",
          "Améliorer la visibilité des intervenants",
          "Évacuer fumées, chaleur et gaz imbrûlés",
          "Limiter la propagation par les circulations",
        ],
      },
      { type: "h", text: "Techniques" },
      {
        type: "list",
        items: [
          "Ventilation naturelle : jeu d'ouvrants entrant / sortant",
          "Ventilation mécanique par surpression (VPP) avec extracteur",
          "Ventilation par dépression : extraction des fumées",
          "Ventilation d'attaque, de protection ou de désenfumage après extinction",
        ],
      },
      { type: "rule", text: "Aucune ventilation sans ordre du chef d'agrès et sans lance en place." },
    ],
  },
  {
    id: "plus-bilan-victime",
    title: "Bilan de la victime : circonstanciel, primaire, secondaire",
    level: "niveau-1",
    category: "secourisme",
    duration: "11 min",
    summary: "Conduite du bilan et transmission au médecin régulateur.",
    blocks: [
      { type: "h", text: "Les trois temps du bilan" },
      {
        type: "list",
        items: [
          "Bilan circonstanciel : sécurité, nombre de victimes, mécanisme",
          "Bilan primaire (vital) : conscience, ventilation, circulation, hémorragies",
          "Bilan secondaire : plaintes, antécédents, traitements, examen de la tête aux pieds",
          "Surveillance : constantes répétées jusqu'au transfert",
        ],
      },
      { type: "h", text: "Constantes à relever" },
      {
        type: "list",
        items: [
          "Fréquence respiratoire et SpO2",
          "Fréquence cardiaque et pression artérielle",
          "Glycémie capillaire si trouble de conscience",
          "Température et évaluation de la douleur",
        ],
      },
      { type: "rule", text: "Toute détresse vitale constatée interrompt le bilan : on traite d'abord." },
    ],
  },
  {
    id: "plus-oxygenotherapie",
    title: "Oxygénothérapie et ventilation assistée",
    level: "niveau-1",
    category: "secourisme",
    duration: "10 min",
    summary: "Choisir le débit et le dispositif d'administration d'oxygène.",
    blocks: [
      {
        type: "list",
        items: [
          "Masque à haute concentration : 9 à 15 L/min, victime en détresse",
          "Lunettes nasales : 1 à 6 L/min, apport modéré",
          "Insufflateur manuel (BAVU) + réserve : 15 L/min, victime en arrêt respiratoire",
          "Aspirateur de mucosités pour libérer les voies aériennes",
        ],
      },
      { type: "h", text: "Sécurité" },
      {
        type: "list",
        items: [
          "Pas de flamme, de graisse ni d'huile près de l'oxygène",
          "Contrôle de la pression de la bouteille avant départ",
          "Bouteille toujours arrimée",
        ],
      },
      { type: "rule", text: "L'oxygène est un médicament : débit adapté et surveillance de la SpO2." },
    ],
  },
  {
    id: "plus-immobilisation",
    title: "Immobilisation et relevage du traumatisé",
    level: "niveau-2",
    category: "secourisme",
    duration: "12 min",
    summary: "Collier cervical, plan dur, attelles et techniques de relevage à plusieurs.",
    blocks: [
      { type: "h", text: "Matériel" },
      {
        type: "list",
        items: [
          "Collier cervical rigide, taille adaptée",
          "Plan dur avec sangles et cales-tête",
          "Matelas immobilisateur à dépression (MID)",
          "Attelles de membre, attelle de traction",
          "Brancard cuillère, portoir souple",
        ],
      },
      { type: "h", text: "Règles de relevage" },
      {
        type: "list",
        items: [
          "Un seul équipier commande : celui qui tient la tête",
          "Maintien de l'axe tête-cou-tronc en permanence",
          "Mouvements annoncés, comptés et exécutés ensemble",
          "Sangler avant tout déplacement du brancard",
        ],
      },
      { type: "rule", text: "Pas de retrait du collier avant décision médicale." },
    ],
  },
  {
    id: "plus-ouverture-porte",
    title: "Ouverture de porte : méthode graduée",
    level: "niveau-2",
    category: "operations",
    duration: "9 min",
    summary: "Du moins destructif au plus destructif, avec traçabilité de l'intervention.",
    blocks: [
      {
        type: "list",
        items: [
          "Vérifier la légitimité : demande de secours, présence police si besoin",
          "Chercher un accès alternatif (fenêtre, gardien, clé, proche)",
          "Ouverture fine : radio, crochetage, dégondage",
          "Ouverture par force : pied-de-biche, Halligan, vérin de porte",
          "Sécuriser et refermer le logement, rendre compte par écrit",
        ],
      },
      { type: "rule", text: "Toute dégradation doit être proportionnée à l'urgence et consignée." },
    ],
  },
  {
    id: "plus-hymenopteres",
    title: "Destruction d'hyménoptères : procédure",
    level: "niveau-1",
    category: "operations",
    duration: "8 min",
    summary: "Guêpes, frelons et abeilles : évaluation, protection et destruction.",
    blocks: [
      {
        type: "list",
        items: [
          "Identifier l'espèce : abeille protégée, orienter vers un apiculteur",
          "Éloigner et confiner le public, fermer les ouvrants",
          "Tenue de protection intégrale + gants + cagoule",
          "Intervenir de préférence au crépuscule (nid regroupé)",
          "Traitement par poudre ou perche télescopique, décrochage après effet",
        ],
      },
      { type: "rule", text: "Antécédent allergique dans l'équipe = pas d'engagement au contact du nid." },
    ],
  },
  {
    id: "plus-engins",
    title: "Les engins : FPT, VSR, VSAV, CCF, EPA",
    level: "niveau-1",
    category: "materiel",
    duration: "10 min",
    summary: "Reconnaître les engins et leur mission opérationnelle.",
    blocks: [
      {
        type: "list",
        items: [
          "FPT : fourgon pompe-tonne, incendie urbain, ~2000 à 3000 L d'eau",
          "VSR : véhicule de secours routier, désincarcération",
          "VSAV : ambulance de secours à victime, 3 équipiers",
          "CCF : camion-citerne feux de forêt, tout-terrain, autoprotection",
          "EPA / EPS : échelle pivotante, sauvetage et attaque en hauteur",
          "VTU : véhicule tout usage pour opérations diverses",
        ],
      },
      { type: "rule", text: "Vérification quotidienne : eau, carburant, lot de matériel, transmissions." },
    ],
  },
  {
    id: "plus-marche-generale",
    title: "Marche générale des opérations (MGO)",
    level: "niveau-2",
    category: "incendie",
    duration: "10 min",
    summary: "L'enchaînement obligatoire de toute intervention incendie.",
    blocks: [
      {
        type: "list",
        items: [
          "Reconnaissances",
          "Sauvetages et mises en sécurité",
          "Établissements",
          "Attaque et extinction",
          "Protection",
          "Déblai et dégarnissage",
          "Surveillance et rondes",
        ],
      },
      { type: "rule", text: "Les sauvetages primes sur toute autre action." },
    ],
  },
  {
    id: "plus-nrbc-decontamination",
    title: "Décontamination NRBC : chaîne et principes",
    level: "niveau-avance",
    category: "risques",
    duration: "11 min",
    summary: "Zonage, sas et décontamination des victimes et des intervenants.",
    blocks: [
      { type: "h", text: "Zonage" },
      {
        type: "list",
        items: [
          "Zone d'exclusion : accès en tenue de protection uniquement",
          "Zone contrôlée : chaîne de décontamination, sas",
          "Zone de soutien : PC, engins, relève",
        ],
      },
      { type: "h", text: "Principes" },
      {
        type: "list",
        items: [
          "Se protéger avant d'agir, ne jamais entrer seul",
          "Déshabillage précoce : élimine une grande part du contaminant",
          "Décontamination sèche puis humide selon le produit",
          "Aucun retour en zone propre sans contrôle",
        ],
      },
      { type: "rule", text: "Sens du vent et pente : approche toujours en amont." },
    ],
  },
];
