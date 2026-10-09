import type { Quiz } from "./types";

export const quizzesV3: Quiz[] = [
 {
  "id": "qcm-v2-31",
  "title": "Feux de véhicules — QCM",
  "level": "niveau-1",
  "category": "incendie",
  "questions": [
   {
    "question": "On aborde un véhicule en feu de préférence :",
    "options": [
     "Par l'arrière",
     "Par l'avant, en biais à 45°",
     "Par le dessous",
     "Par le toit"
    ],
    "answer": 1,
    "explanation": "L'approche à 45° évite l'axe des vérins et pare-chocs."
   },
   {
    "question": "Une batterie lithium de véhicule électrique en feu nécessite :",
    "options": [
     "Peu d'eau",
     "De grandes quantités d'eau et une surveillance",
     "De la poudre seulement",
     "Aucune action"
    ],
    "answer": 1,
    "explanation": "Le risque de reprise impose arrosage massif et surveillance."
   },
   {
    "question": "Un sifflement d'une soupape GPL signifie :",
    "options": [
     "Fin du risque",
     "Montée en pression : reculer",
     "Feu éteint",
     "Batterie vide"
    ],
    "answer": 1,
    "explanation": "La soupape s'ouvre sous pression : risque de jet enflammé."
   },
   {
    "question": "Avant d'agir sur un véhicule, on doit :",
    "options": [
     "Le caler",
     "Le pousser",
     "Ouvrir le capot",
     "Démarrer le moteur"
    ],
    "answer": 0,
    "explanation": "Le calage empêche tout mouvement intempestif."
   },
   {
    "question": "Les vérins de hayon chauffés peuvent :",
    "options": [
     "Fondre sans danger",
     "Être projetés",
     "S'éteindre",
     "Refroidir le feu"
    ],
    "answer": 1,
    "explanation": "Les vérins sous pression deviennent des projectiles."
   },
   {
    "question": "Le diamètre de lance adapté pour un feu de voiture est :",
    "options": [
     "Lance de 45 mm",
     "Lance de 110 mm",
     "Extincteur de 1 kg",
     "Seau"
    ],
    "answer": 0,
    "explanation": "Une lance de 45 mm en jet diffusé d'attaque suffit."
   }
  ]
 },
 {
  "id": "qcm-v2-32",
  "title": "Feux de cheminée — QCM",
  "level": "niveau-1",
  "category": "incendie",
  "questions": [
   {
    "question": "Dans un feu de cheminée on évite :",
    "options": [
     "De jeter de l'eau dans le conduit",
     "De fermer l'arrivée d'air",
     "De reconnaître les combles",
     "D'utiliser la caméra thermique"
    ],
    "answer": 0,
    "explanation": "Le choc thermique fissure le conduit."
   },
   {
    "question": "La cause principale d'un feu de cheminée est :",
    "options": [
     "Un ramonage insuffisant",
     "La pluie",
     "Le vent",
     "Un mauvais éclairage"
    ],
    "answer": 0,
    "explanation": "Le dépôt de suie (bistre) s'enflamme."
   },
   {
    "question": "La reconnaissance doit couvrir :",
    "options": [
     "Le foyer seulement",
     "Toute la hauteur du conduit",
     "La rue",
     "Le garage"
    ],
    "answer": 1,
    "explanation": "Le feu peut se propager à chaque étage traversé."
   },
   {
    "question": "Pour étouffer le foyer on peut fermer :",
    "options": [
     "Les arrivées d'air",
     "Les volets de la rue",
     "Le compteur d'eau",
     "La porte d'entrée"
    ],
    "answer": 0,
    "explanation": "Priver le feu d'air réduit la combustion."
   },
   {
    "question": "L'outil utile pour détecter un point chaud dans un mur est :",
    "options": [
     "La caméra thermique",
     "Le marteau",
     "Le tuyau de 70",
     "La corde"
    ],
    "answer": 0,
    "explanation": "Elle visualise les températures anormales."
   },
   {
    "question": "Le dépôt combustible dans un conduit s'appelle :",
    "options": [
     "Le bistre",
     "Le calcaire",
     "La rouille",
     "Le plâtre"
    ],
    "answer": 0,
    "explanation": "Le bistre est un goudron très inflammable."
   }
  ]
 },
 {
  "id": "qcm-v2-33",
  "title": "Feux de parkings souterrains — QCM",
  "level": "niveau-avance",
  "category": "incendie",
  "questions": [
   {
    "question": "En parking souterrain, l'engagement se fait :",
    "options": [
     "Sans ARI",
     "Sous ARI avec ligne guide",
     "Seul",
     "À pied sans lance"
    ],
    "answer": 1,
    "explanation": "Fumées denses : ARI et repérage obligatoires."
   },
   {
    "question": "Le principal danger structurel est :",
    "options": [
     "L'écaillage du béton",
     "La pluie",
     "Le vent",
     "La neige"
    ],
    "answer": 0,
    "explanation": "La chaleur fait éclater le béton (écaillage)."
   },
   {
    "question": "La propagation se fait souvent :",
    "options": [
     "De véhicule à véhicule",
     "Par les arbres",
     "Par l'eau",
     "Par les fenêtres"
    ],
    "answer": 0,
    "explanation": "Les véhicules garés côte à côte s'enflamment successivement."
   },
   {
    "question": "Le désenfumage mécanique doit être :",
    "options": [
     "Coordonné avec l'attaque",
     "Ignoré",
     "Arrêté toujours",
     "Mis au maximum sans réflexion"
    ],
    "answer": 0,
    "explanation": "Une ventilation mal coordonnée pousse les fumées vers les équipes."
   },
   {
    "question": "La relève des binômes est prévue car :",
    "options": [
     "Le volume est grand et pénible",
     "C'est la règle de couleur",
     "Le feu est petit",
     "Il n'y a pas d'ARI"
    ],
    "answer": 0,
    "explanation": "Distances et chaleur épuisent vite l'autonomie."
   },
   {
    "question": "La colonne sèche sert à :",
    "options": [
     "Alimenter en eau les niveaux",
     "Évacuer les fumées",
     "Éclairer",
     "Communiquer"
    ],
    "answer": 0,
    "explanation": "Elle évite d'établir de longs tuyaux."
   }
  ]
 },
 {
  "id": "qcm-v2-34",
  "title": "Feux de forêt : sécurité des équipes — QCM",
  "level": "niveau-2",
  "category": "incendie",
  "questions": [
   {
    "question": "Un engin en feu de forêt se positionne :",
    "options": [
     "Cabine tournée vers l'issue",
     "Au cœur du feu",
     "Dans un fossé",
     "Moteur éteint loin de l'équipe"
    ],
    "answer": 0,
    "explanation": "Permet un départ rapide."
   },
   {
    "question": "La saute de feu est :",
    "options": [
     "Un brandon qui allume un nouveau foyer en avant",
     "Un tuyau qui saute",
     "Un saut d'engin",
     "Une extinction"
    ],
    "answer": 0,
    "explanation": "Les brandons créent des foyers secondaires."
   },
   {
    "question": "Avant l'engagement on définit :",
    "options": [
     "Une zone de repli",
     "La couleur du tuyau",
     "L'heure du repas",
     "Rien"
    ],
    "answer": 0,
    "explanation": "Indispensable à la sécurité."
   },
   {
    "question": "Le facteur le plus dangereux est :",
    "options": [
     "La bascule du vent",
     "La pluie fine",
     "La nuit claire",
     "Le sol mouillé"
    ],
    "answer": 0,
    "explanation": "Un changement de vent peut encercler l'équipe."
   },
   {
    "question": "La protection individuelle comprend :",
    "options": [
     "Tenue feux de forêt, lunettes, cagoule",
     "Tenue de plage",
     "Tenue de ville",
     "Rien de spécial"
    ],
    "answer": 0,
    "explanation": "EPI adaptés au rayonnement et aux fumées."
   },
   {
    "question": "L'auto-protection de l'engin utilise :",
    "options": [
     "Les rampes d'arrosage",
     "Le klaxon",
     "Les phares",
     "La radio"
    ],
    "answer": 0,
    "explanation": "Le rideau d'eau protège en cas d'encerclement."
   }
  ]
 },
 {
  "id": "qcm-v2-35",
  "title": "Arrêt cardiaque et DAE — QCM",
  "level": "niveau-1",
  "category": "secourisme",
  "questions": [
   {
    "question": "La profondeur des compressions chez l'adulte est de :",
    "options": [
     "1-2 cm",
     "5-6 cm",
     "10 cm",
     "15 cm"
    ],
    "answer": 1,
    "explanation": "5 à 6 cm sont recommandés."
   },
   {
    "question": "Le DAE est posé :",
    "options": [
     "Dès son arrivée",
     "Après 30 minutes",
     "Jamais",
     "Seulement par un médecin"
    ],
    "answer": 0,
    "explanation": "Chaque minute sans défibrillation réduit la survie."
   },
   {
    "question": "Pendant l'analyse du DAE :",
    "options": [
     "On ne touche pas la victime",
     "On continue de masser",
     "On donne à boire",
     "On la déplace"
    ],
    "answer": 0,
    "explanation": "Le mouvement fausse l'analyse."
   },
   {
    "question": "Le premier maillon de la chaîne de survie est :",
    "options": [
     "L'alerte précoce",
     "Le transport",
     "L'hôpital",
     "Le choc"
    ],
    "answer": 0,
    "explanation": "Reconnaître et alerter."
   },
   {
    "question": "Les électrodes sont placées :",
    "options": [
     "Sous la clavicule droite et sous l'aisselle gauche",
     "Sur les bras",
     "Sur le ventre",
     "Dans le dos uniquement"
    ],
    "answer": 0,
    "explanation": "Position antéro-latérale standard."
   },
   {
    "question": "Après un choc, on reprend :",
    "options": [
     "Immédiatement la RCP",
     "Une pause de 2 min",
     "La PLS",
     "Rien"
    ],
    "answer": 0,
    "explanation": "La RCP reprend sans délai."
   }
  ]
 },
 {
  "id": "qcm-v2-36",
  "title": "Malaises et AVC — QCM",
  "level": "niveau-2",
  "category": "secourisme",
  "questions": [
   {
    "question": "Le F de FAST signifie :",
    "options": [
     "Face (visage asymétrique)",
     "Feu",
     "Fièvre",
     "Fracture"
    ],
    "answer": 0,
    "explanation": "Asymétrie du visage."
   },
   {
    "question": "L'information capitale pour un AVC est :",
    "options": [
     "L'heure de début des signes",
     "La couleur des vêtements",
     "Le repas",
     "Le nom du médecin"
    ],
    "answer": 0,
    "explanation": "Elle conditionne la thrombolyse."
   },
   {
    "question": "Un malaise hypoglycémique chez un diabétique conscient :",
    "options": [
     "Donner du sucre",
     "Donner de l'insuline",
     "Rien",
     "Faire marcher"
    ],
    "answer": 0,
    "explanation": "Le sucre corrige l'hypoglycémie si la victime peut avaler."
   },
   {
    "question": "On ne donne rien à boire si :",
    "options": [
     "Trouble de déglutition ou conscience",
     "La victime a soif",
     "Il fait chaud",
     "Elle le demande"
    ],
    "answer": 0,
    "explanation": "Risque d'inhalation."
   },
   {
    "question": "Le bilan du malaise comporte la question :",
    "options": [
     "Antécédents et traitements",
     "Couleur préférée",
     "Adresse du travail",
     "Marque de voiture"
    ],
    "answer": 0,
    "explanation": "Utile au médecin régulateur."
   },
   {
    "question": "Un trouble de la parole brutal évoque :",
    "options": [
     "Un AVC",
     "Une entorse",
     "Une piqûre",
     "Un rhume"
    ],
    "answer": 0,
    "explanation": "Signe majeur d'AVC."
   }
  ]
 },
 {
  "id": "qcm-v2-37",
  "title": "Brûlures graves — QCM",
  "level": "niveau-2",
  "category": "secourisme",
  "questions": [
   {
    "question": "La paume de la main de la victime représente :",
    "options": [
     "1 % de la surface corporelle",
     "10 %",
     "5 %",
     "20 %"
    ],
    "answer": 0,
    "explanation": "Règle de la paume."
   },
   {
    "question": "Sur une brûlure on n'applique pas :",
    "options": [
     "De corps gras",
     "D'eau tempérée",
     "De champ stérile",
     "De couverture"
    ],
    "answer": 0,
    "explanation": "Les corps gras retiennent la chaleur."
   },
   {
    "question": "Les cloques doivent être :",
    "options": [
     "Laissées intactes",
     "Percées",
     "Arrachées",
     "Brûlées"
    ],
    "answer": 0,
    "explanation": "Elles protègent de l'infection."
   },
   {
    "question": "Une brûlure chimique se rince :",
    "options": [
     "Abondamment à l'eau",
     "Avec du vinaigre",
     "Avec de l'huile",
     "Pas du tout"
    ],
    "answer": 0,
    "explanation": "Rinçage prolongé."
   },
   {
    "question": "Le risque général d'un grand brûlé est :",
    "options": [
     "L'hypothermie et le choc",
     "La fièvre seule",
     "Le rhume",
     "Aucun"
    ],
    "answer": 0,
    "explanation": "Perte de liquides et de chaleur."
   },
   {
    "question": "Les bijoux sont retirés car :",
    "options": [
     "L'œdème peut garroter",
     "Ils sont lourds",
     "Pour l'hygiène",
     "Pour l'identifier"
    ],
    "answer": 0,
    "explanation": "Le gonflement les rend constrictifs."
   }
  ]
 },
 {
  "id": "qcm-v2-38",
  "title": "Accouchement inopiné — QCM",
  "level": "niveau-avance",
  "category": "secourisme",
  "questions": [
   {
    "question": "Pendant l'expulsion le secouriste :",
    "options": [
     "Accompagne sans tirer",
     "Tire sur la tête",
     "Pousse sur le ventre",
     "Coupe le cordon immédiatement"
    ],
    "answer": 0,
    "explanation": "On soutient sans traction."
   },
   {
    "question": "Le risque principal pour le nouveau-né est :",
    "options": [
     "L'hypothermie",
     "La soif",
     "La faim",
     "Le bruit"
    ],
    "answer": 0,
    "explanation": "Sécher et couvrir."
   },
   {
    "question": "On place le nouveau-né :",
    "options": [
     "Peau contre peau sur la mère",
     "Sur le sol",
     "Dans l'eau froide",
     "Debout"
    ],
    "answer": 0,
    "explanation": "Le peau à peau le réchauffe."
   },
   {
    "question": "On note :",
    "options": [
     "L'heure de naissance",
     "Le poids exact",
     "Le prénom",
     "La météo"
    ],
    "answer": 0,
    "explanation": "Information médico-légale."
   },
   {
    "question": "La première démarche est :",
    "options": [
     "Contacter le médecin régulateur",
     "Partir sans attendre",
     "Faire marcher la mère",
     "Donner à manger"
    ],
    "answer": 0,
    "explanation": "Le médecin guide la conduite."
   },
   {
    "question": "Le placenta :",
    "options": [
     "Est conservé pour examen",
     "Est jeté",
     "Est tiré",
     "Est ignoré"
    ],
    "answer": 0,
    "explanation": "Il doit être examiné."
   }
  ]
 },
 {
  "id": "qcm-v2-39",
  "title": "Inondations et crues — QCM",
  "level": "niveau-2",
  "category": "operations",
  "questions": [
   {
    "question": "Près de l'eau, l'équipier porte :",
    "options": [
     "Un gilet de sauvetage",
     "Une tenue de feu seule",
     "Rien",
     "Un ARI"
    ],
    "answer": 0,
    "explanation": "Protection contre la noyade."
   },
   {
    "question": "Une hauteur d'eau courante pouvant emporter un véhicule :",
    "options": [
     "30 cm",
     "2 m",
     "5 m",
     "10 m"
    ],
    "answer": 0,
    "explanation": "Seulement 30 cm."
   },
   {
    "question": "Avant l'épuisement d'une cave on :",
    "options": [
     "Coupe l'électricité",
     "Allume la lumière",
     "Ouvre le gaz",
     "Rien"
    ],
    "answer": 0,
    "explanation": "Risque d'électrocution."
   },
   {
    "question": "Pour progresser dans l'eau trouble on :",
    "options": [
     "Sonde le sol",
     "Court",
     "Plonge",
     "Ferme les yeux"
    ],
    "answer": 0,
    "explanation": "Les regards ouverts sont invisibles."
   },
   {
    "question": "L'engin d'épuisement courant est :",
    "options": [
     "Une motopompe",
     "Un ventilateur",
     "Une échelle",
     "Un groupe électrogène seul"
    ],
    "answer": 0,
    "explanation": "Elle évacue l'eau."
   },
   {
    "question": "L'eau de crue est souvent :",
    "options": [
     "Polluée",
     "Potable",
     "Stérile",
     "Chaude"
    ],
    "answer": 0,
    "explanation": "Hygiène et décontamination après."
   }
  ]
 },
 {
  "id": "qcm-v2-40",
  "title": "Ouvertures de portes et personnes en difficulté — QCM",
  "level": "niveau-1",
  "category": "operations",
  "questions": [
   {
    "question": "Avant de forcer une porte on :",
    "options": [
     "Cherche une ouverture existante",
     "Casse la fenêtre",
     "Appelle un taxi",
     "Attend"
    ],
    "answer": 0,
    "explanation": "Moins de dégâts."
   },
   {
    "question": "La présence recommandée lors d'une ouverture est :",
    "options": [
     "Forces de l'ordre ou témoin",
     "Journaliste",
     "Personne",
     "Voisin seul"
    ],
    "answer": 0,
    "explanation": "Responsabilité et biens."
   },
   {
    "question": "Après l'intervention, le local doit être :",
    "options": [
     "Sécurisé / refermé",
     "Laissé ouvert",
     "Vidé",
     "Abandonné"
    ],
    "answer": 0,
    "explanation": "Protection des biens."
   },
   {
    "question": "Une odeur suspecte derrière la porte impose :",
    "options": [
     "Prudence et détection gaz",
     "D'allumer un briquet",
     "De sonner",
     "De partir"
    ],
    "answer": 0,
    "explanation": "Risque d'atmosphère explosive."
   },
   {
    "question": "L'outil fréquent d'ouverture est :",
    "options": [
     "Le kit d'ouverture de porte",
     "La lance",
     "Le DAE",
     "La couverture"
    ],
    "answer": 0,
    "explanation": "Matériel dédié."
   },
   {
    "question": "Le motif fréquent est :",
    "options": [
     "Personne ne répondant pas aux appels",
     "Feu de forêt",
     "Inondation",
     "Pollution"
    ],
    "answer": 0,
    "explanation": "Personne potentiellement en détresse."
   }
  ]
 },
 {
  "id": "qcm-v2-41",
  "title": "Nids d'insectes et hyménoptères — QCM",
  "level": "niveau-1",
  "category": "operations",
  "questions": [
   {
    "question": "Un essaim d'abeilles est confié :",
    "options": [
     "À un apiculteur",
     "Au boulanger",
     "À personne",
     "Au maire uniquement"
    ],
    "answer": 0,
    "explanation": "Espèce protégée."
   },
   {
    "question": "La réaction allergique grave s'appelle :",
    "options": [
     "Choc anaphylactique",
     "Entorse",
     "Insolation",
     "Crampe"
    ],
    "answer": 0,
    "explanation": "Urgence vitale."
   },
   {
    "question": "L'EPI spécifique est :",
    "options": [
     "Tenue anti-hyménoptères",
     "ARI",
     "Gilet de sauvetage",
     "Baudrier"
    ],
    "answer": 0,
    "explanation": "Protection totale."
   },
   {
    "question": "Une piqûre dans la gorge risque de :",
    "options": [
     "Boucher les voies aériennes",
     "Rien",
     "Donner faim",
     "Endormir"
    ],
    "answer": 0,
    "explanation": "Œdème."
   },
   {
    "question": "Le frelon asiatique fait souvent son nid :",
    "options": [
     "En hauteur dans les arbres",
     "Sous l'eau",
     "Dans le sable",
     "Dans les voitures"
    ],
    "answer": 0,
    "explanation": "Nids haut perchés."
   },
   {
    "question": "On retire un dard d'abeille :",
    "options": [
     "En le grattant",
     "En le pressant",
     "En le mordant",
     "Jamais"
    ],
    "answer": 0,
    "explanation": "Presser injecte le venin."
   }
  ]
 },
 {
  "id": "qcm-v2-42",
  "title": "Pollutions et hydrocarbures — QCM",
  "level": "niveau-2",
  "category": "operations",
  "questions": [
   {
    "question": "La priorité sur une fuite d'hydrocarbure est :",
    "options": [
     "Protéger les égouts",
     "La laver au jet",
     "L'allumer",
     "L'ignorer"
    ],
    "answer": 0,
    "explanation": "Éviter la pollution."
   },
   {
    "question": "On absorbe avec :",
    "options": [
     "Absorbants spécifiques",
     "De l'eau",
     "Du papier journal seul",
     "Du sucre"
    ],
    "answer": 0,
    "explanation": "Matériaux adaptés."
   },
   {
    "question": "Le boudin sert à :",
    "options": [
     "Endiguer",
     "Éclairer",
     "Couper",
     "Alimenter"
    ],
    "answer": 0,
    "explanation": "Contenir l'épanchement."
   },
   {
    "question": "Les déchets d'absorbants sont :",
    "options": [
     "Traités comme déchets dangereux",
     "Jetés à la poubelle",
     "Brûlés sur place",
     "Enterrés"
    ],
    "answer": 0,
    "explanation": "Filière spécialisée."
   },
   {
    "question": "Sur un épandage d'essence on interdit :",
    "options": [
     "Toute source d'ignition",
     "Le balisage",
     "Les absorbants",
     "Le recul"
    ],
    "answer": 0,
    "explanation": "Vapeurs inflammables."
   },
   {
    "question": "En cours d'eau on utilise :",
    "options": [
     "Un barrage flottant",
     "Une échelle",
     "Un DAE",
     "Un ventilateur"
    ],
    "answer": 0,
    "explanation": "Confine la nappe."
   }
  ]
 },
 {
  "id": "qcm-v2-43",
  "title": "Équipements de protection respiratoire — QCM",
  "level": "niveau-2",
  "category": "materiel",
  "questions": [
   {
    "question": "L'étanchéité du masque se vérifie :",
    "options": [
     "Avant chaque engagement",
     "Une fois par an",
     "Jamais",
     "Après l'intervention"
    ],
    "answer": 0,
    "explanation": "Contrôle systématique."
   },
   {
    "question": "La pression nominale d'une bouteille courante est :",
    "options": [
     "300 bar",
     "30 bar",
     "3 bar",
     "3000 bar"
    ],
    "answer": 0,
    "explanation": "Bouteilles composites 300 bar."
   },
   {
    "question": "L'autonomie diminue avec :",
    "options": [
     "L'effort physique",
     "Le froid seul",
     "La couleur",
     "Le casque"
    ],
    "answer": 0,
    "explanation": "Consommation d'air accrue."
   },
   {
    "question": "Le contrôleur à l'entrée note :",
    "options": [
     "Noms et heures d'engagement",
     "La météo",
     "Les repas",
     "Rien"
    ],
    "answer": 0,
    "explanation": "Suivi des binômes."
   },
   {
    "question": "L'ARI protège contre :",
    "options": [
     "Les fumées et gaz toxiques",
     "Le feu direct",
     "Les chutes",
     "La chaleur totalement"
    ],
    "answer": 0,
    "explanation": "Protection respiratoire."
   },
   {
    "question": "Après usage, l'ARI est :",
    "options": [
     "Nettoyé, contrôlé et rechargé",
     "Rangé tel quel",
     "Jeté",
     "Prêté"
    ],
    "answer": 0,
    "explanation": "Remise en état."
   }
  ]
 },
 {
  "id": "qcm-v2-44",
  "title": "Groupes électrogènes et éclairage — QCM",
  "level": "niveau-1",
  "category": "materiel",
  "questions": [
   {
    "question": "Un groupe électrogène s'installe :",
    "options": [
     "À l'extérieur",
     "Dans une cave",
     "Dans un placard",
     "Sous l'engin"
    ],
    "answer": 0,
    "explanation": "Gaz d'échappement."
   },
   {
    "question": "Le danger d'un groupe en local clos :",
    "options": [
     "Intoxication au CO",
     "Inondation",
     "Gel",
     "Bruit seul"
    ],
    "answer": 0,
    "explanation": "Monoxyde de carbone."
   },
   {
    "question": "Les câbles sont :",
    "options": [
     "Protégés et balisés",
     "Laissés dans l'eau",
     "Tendus en travers sans protection",
     "Coupés"
    ],
    "answer": 0,
    "explanation": "Éviter chutes et chocs électriques."
   },
   {
    "question": "L'éclairage doit :",
    "options": [
     "Éviter d'éblouir",
     "Viser les yeux",
     "Être éteint",
     "Clignoter"
    ],
    "answer": 0,
    "explanation": "Sécurité des équipes."
   },
   {
    "question": "Avant le plein du groupe :",
    "options": [
     "Arrêter le moteur",
     "Laisser tourner",
     "Fumer",
     "Rien"
    ],
    "answer": 0,
    "explanation": "Risque d'incendie."
   },
   {
    "question": "Les prolongateurs utilisés doivent être :",
    "options": [
     "Étanches et adaptés",
     "Domestiques",
     "Abîmés",
     "Quelconques"
    ],
    "answer": 0,
    "explanation": "Usage extérieur."
   }
  ]
 },
 {
  "id": "qcm-v2-45",
  "title": "Matériel de balisage et signalisation — QCM",
  "level": "niveau-1",
  "category": "materiel",
  "questions": [
   {
    "question": "Le gilet haute visibilité est :",
    "options": [
     "Obligatoire sur la route",
     "Facultatif",
     "Interdit",
     "Pour la nuit seulement"
    ],
    "answer": 0,
    "explanation": "Être vu."
   },
   {
    "question": "Les cônes se posent :",
    "options": [
     "En amont, en fonction de la vitesse",
     "Après l'accident seulement",
     "Au hasard",
     "Jamais"
    ],
    "answer": 0,
    "explanation": "Ralentir les usagers."
   },
   {
    "question": "L'engin se place :",
    "options": [
     "En protection en amont",
     "Devant l'accident",
     "Sur le bas-côté opposé",
     "Loin"
    ],
    "answer": 0,
    "explanation": "Bouclier."
   },
   {
    "question": "Le sur-accident est :",
    "options": [
     "Un nouvel accident sur la zone",
     "Une panne",
     "Un bilan",
     "Un feu"
    ],
    "answer": 0,
    "explanation": "Risque majeur."
   },
   {
    "question": "Le balisage se retire :",
    "options": [
     "Du dernier posé au premier",
     "Au hasard",
     "En premier",
     "Jamais"
    ],
    "answer": 0,
    "explanation": "Ordre inverse pour la sécurité."
   },
   {
    "question": "La nuit on renforce avec :",
    "options": [
     "Feux lumineux",
     "Rien",
     "Couverture",
     "Corde"
    ],
    "answer": 0,
    "explanation": "Visibilité."
   }
  ]
 },
 {
  "id": "qcm-v2-46",
  "title": "Fuites de matières dangereuses : périmètres — QCM",
  "level": "niveau-avance",
  "category": "risques",
  "questions": [
   {
    "question": "On aborde un sinistre chimique :",
    "options": [
     "Dos au vent",
     "Face au vent",
     "Dans le nuage",
     "Au plus près"
    ],
    "answer": 0,
    "explanation": "Éviter l'exposition."
   },
   {
    "question": "Le numéro ONU identifie :",
    "options": [
     "La matière",
     "Le danger",
     "Le chauffeur",
     "Le camion"
    ],
    "answer": 0,
    "explanation": "Code matière."
   },
   {
    "question": "Le code danger figure :",
    "options": [
     "En haut de la plaque orange",
     "En bas",
     "Sur la roue",
     "Nulle part"
    ],
    "answer": 0,
    "explanation": "Haut = danger, bas = ONU."
   },
   {
    "question": "Un X devant le code danger signifie :",
    "options": [
     "Réagit dangereusement avec l'eau",
     "Rien",
     "Produit inoffensif",
     "Liquide"
    ],
    "answer": 0,
    "explanation": "Pas d'eau."
   },
   {
    "question": "La zone d'exclusion est :",
    "options": [
     "Réservée aux équipes protégées",
     "Ouverte au public",
     "Le parking",
     "Le PC"
    ],
    "answer": 0,
    "explanation": "Accès restreint."
   },
   {
    "question": "Les populations peuvent être :",
    "options": [
     "Confinées ou évacuées",
     "Ignorées",
     "Invitées",
     "Déplacées vers le nuage"
    ],
    "answer": 0,
    "explanation": "Selon le danger."
   }
  ]
 },
 {
  "id": "qcm-v2-47",
  "title": "Risques électriques — QCM",
  "level": "niveau-2",
  "category": "risques",
  "questions": [
   {
    "question": "Sur une victime électrisée :",
    "options": [
     "Couper le courant avant contact",
     "La saisir immédiatement",
     "L'arroser",
     "La tirer par la main"
    ],
    "answer": 0,
    "explanation": "Risque de s'électriser."
   },
   {
    "question": "La coupure HT est réalisée par :",
    "options": [
     "L'exploitant",
     "Le voisin",
     "Le témoin",
     "N'importe qui"
    ],
    "answer": 0,
    "explanation": "Personnel habilité."
   },
   {
    "question": "Près d'un câble tombé au sol :",
    "options": [
     "On s'éloigne et on balise",
     "On le déplace",
     "On le touche",
     "On l'arrose"
    ],
    "answer": 0,
    "explanation": "Tension de pas."
   },
   {
    "question": "La tension de pas est :",
    "options": [
     "Une différence de potentiel au sol",
     "Un pas rapide",
     "Une marche",
     "Une formule"
    ],
    "answer": 0,
    "explanation": "Se déplacer à petits pas joints."
   },
   {
    "question": "Sur un transformateur en feu on préfère :",
    "options": [
     "Les extincteurs CO2/poudre",
     "Le jet plein",
     "Le seau",
     "Rien"
    ],
    "answer": 0,
    "explanation": "Agents non conducteurs."
   },
   {
    "question": "L'électrisation peut provoquer :",
    "options": [
     "Un arrêt cardiaque",
     "Un rhume",
     "La faim",
     "Rien"
    ],
    "answer": 0,
    "explanation": "Fibrillation possible."
   }
  ]
 },
 {
  "id": "qcm-v2-48",
  "title": "Risques biologiques — QCM",
  "level": "niveau-avance",
  "category": "risques",
  "questions": [
   {
    "question": "La protection respiratoire de base est :",
    "options": [
     "Masque FFP2",
     "Foulard",
     "Rien",
     "Casque"
    ],
    "answer": 0,
    "explanation": "Filtration des particules."
   },
   {
    "question": "Une piqûre accidentelle par aiguille impose :",
    "options": [
     "Lavage et déclaration immédiate",
     "Rien",
     "Un pansement seul",
     "D'attendre"
    ],
    "answer": 0,
    "explanation": "Protocole AES."
   },
   {
    "question": "Le nombre d'intervenants est :",
    "options": [
     "Limité",
     "Maximal",
     "Indifférent",
     "Doublé"
    ],
    "answer": 0,
    "explanation": "Réduire l'exposition."
   },
   {
    "question": "Le matériel contaminé est :",
    "options": [
     "Décontaminé ou éliminé",
     "Réutilisé tel quel",
     "Donné",
     "Caché"
    ],
    "answer": 0,
    "explanation": "Évite la transmission."
   },
   {
    "question": "Le lavage des mains se fait :",
    "options": [
     "Après chaque intervention",
     "Une fois par semaine",
     "Jamais",
     "Avant seulement"
    ],
    "answer": 0,
    "explanation": "Hygiène de base."
   },
   {
    "question": "AES signifie :",
    "options": [
     "Accident d'exposition au sang",
     "Alerte en secours",
     "Arrêt en soins",
     "Aide externe sanitaire"
    ],
    "answer": 0,
    "explanation": "Terminologie."
   }
  ]
 },
 {
  "id": "qcm-v2-49",
  "title": "Sauvetage en excavation et tranchée — QCM",
  "level": "niveau-avance",
  "category": "sauvetage",
  "questions": [
   {
    "question": "Avant de descendre dans une tranchée on :",
    "options": [
     "Blinde les parois",
     "Saute",
     "Court",
     "Creuse en dessous"
    ],
    "answer": 0,
    "explanation": "Prévenir un nouvel effondrement."
   },
   {
    "question": "Près de la victime le dégagement est :",
    "options": [
     "Manuel",
     "À la pelleteuse",
     "À l'explosif",
     "Au jet"
    ],
    "answer": 0,
    "explanation": "Éviter de blesser."
   },
   {
    "question": "Le poids des engins doit être :",
    "options": [
     "Éloigné des bords",
     "Sur le bord",
     "Sur la victime",
     "Indifférent"
    ],
    "answer": 0,
    "explanation": "Surcharge = effondrement."
   },
   {
    "question": "La victime ensevelie risque :",
    "options": [
     "L'asphyxie et l'écrasement",
     "Le rhume",
     "La chute",
     "Rien"
    ],
    "answer": 0,
    "explanation": "Compression thoracique."
   },
   {
    "question": "Les vibrations (moteurs) doivent être :",
    "options": [
     "Réduites",
     "Augmentées",
     "Ignorées",
     "Rythmées"
    ],
    "answer": 0,
    "explanation": "Elles fragilisent le sol."
   },
   {
    "question": "Le premier geste de sécurité est :",
    "options": [
     "Périmètre et arrêt des engins",
     "Creuser vite",
     "Appeler la presse",
     "Tirer la victime"
    ],
    "answer": 0,
    "explanation": "Sécuriser."
   }
  ]
 },
 {
  "id": "qcm-v2-50",
  "title": "Recherche cynotechnique et techniques de localisation — QCM",
  "level": "niveau-2",
  "category": "sauvetage",
  "questions": [
   {
    "question": "Pendant la phase d'écoute :",
    "options": [
     "Silence complet sur le chantier",
     "On continue les engins",
     "On crie",
     "On scie"
    ],
    "answer": 0,
    "explanation": "Détecter les signes de vie."
   },
   {
    "question": "Les zones fouillées sont :",
    "options": [
     "Marquées",
     "Oubliées",
     "Remblayées",
     "Inondées"
    ],
    "answer": 0,
    "explanation": "Éviter les doublons."
   },
   {
    "question": "Le chien de recherche détecte :",
    "options": [
     "L'odeur humaine",
     "Le métal",
     "Le gaz",
     "L'eau"
    ],
    "answer": 0,
    "explanation": "Flair."
   },
   {
    "question": "Un capteur acoustique détecte :",
    "options": [
     "Bruits et vibrations",
     "Couleurs",
     "Température",
     "Odeurs"
    ],
    "answer": 0,
    "explanation": "Écoute électronique."
   },
   {
    "question": "La caméra endoscopique sert à :",
    "options": [
     "Voir dans les cavités",
     "Éteindre le feu",
     "Mesurer le vent",
     "Couper"
    ],
    "answer": 0,
    "explanation": "Inspection des vides."
   },
   {
    "question": "Une victime localisée est :",
    "options": [
     "Signalée et dégagée méthodiquement",
     "Laissée",
     "Tirée de force",
     "Oubliée"
    ],
    "answer": 0,
    "explanation": "Dégagement contrôlé."
   }
  ]
 }
];
