import type { Lesson } from "./types";

export const lessonsMateriel: Lesson[] = [
  {
    id: "mat-extincteurs",
    title: "Les extincteurs : classes de feux et emploi",
    level: "niveau-1",
    category: "materiel",
    duration: "10 min",
    summary: "Choisir et utiliser le bon extincteur selon la classe de feu.",
    blocks: [
      { type: "h", text: "Classes de feux" },
      {
        type: "list",
        items: [
          "Classe A : solides (bois, papier, textiles) — eau + additif",
          "Classe B : liquides inflammables — mousse, poudre, CO2",
          "Classe C : gaz — poudre, après coupure du gaz",
          "Classe D : métaux — poudre spéciale D",
          "Classe F : huiles et graisses de cuisine — extincteur classe F",
        ],
      },
      { type: "h", text: "Mise en œuvre" },
      {
        type: "list",
        items: [
          "Dégoupiller l'extincteur et faire un essai court",
          "S'approcher dos au vent, à 1 à 3 m du foyer",
          "Viser la base des flammes et balayer",
          "Ne jamais tourner le dos au foyer éteint",
        ],
      },
      { type: "rule", text: "Feu d'origine électrique : CO2, jamais d'eau en jet plein." },
    ],
  },
  {
    id: "mat-outils-main",
    title: "Outils à main : hache, pelle, pioche, Halligan",
    level: "niveau-1",
    category: "materiel",
    duration: "8 min",
    summary: "Outillage manuel de déblai, d'ouverture et de dégagement.",
    blocks: [
      {
        type: "list",
        items: [
          "Hache de pompier : déblai, ouverture, dégagement de toiture",
          "Hache-pioche et pioche : tranchée, coupure de combustible",
          "Pelle : déblai, extinction par étouffement en végétation",
          "Barre Halligan et pied-de-biche : ouverture de porte",
          "Batte à feu et râteau : feux d'espaces naturels",
        ],
      },
      { type: "rule", text: "Outil transporté lame vers le bas, jamais à l'épaule." },
    ],
  },
  {
    id: "mat-ari-controle",
    title: "ARI : contrôle et règles d'emploi",
    level: "niveau-2",
    category: "materiel",
    duration: "12 min",
    summary: "Appareil respiratoire isolant : contrôles avant emploi et discipline du binôme.",
    blocks: [
      { type: "h", text: "Contrôles avant emploi" },
      {
        type: "list",
        items: [
          "Pression de la bouteille : au minimum 280 bars pour un 300 bars",
          "Étanchéité du masque (essai à la main sur le raccord)",
          "Fonctionnement du sifflet d'alarme de fin d'autonomie",
          "Détecteur d'immobilité activé à la descente de l'engin",
          "Harnais et sangles ajustés, manomètre lisible",
        ],
      },
      { type: "h", text: "En progression" },
      {
        type: "list",
        items: [
          "Binôme inséparable, contact visuel ou physique",
          "Annonce des pressions au chef d'agrès",
          "Repli dès le déclenchement du sifflet",
          "Ligne guide obligatoire en milieu vaste ou labyrinthique",
        ],
      },
      { type: "rule", text: "On ne retire jamais son masque en zone enfumée." },
    ],
  },
  {
    id: "mat-mousse",
    title: "Mousse et émulseur : feux d'hydrocarbures",
    level: "niveau-2",
    category: "incendie",
    duration: "10 min",
    summary: "Produire et appliquer un tapis de mousse pour étouffer un feu de liquide.",
    blocks: [
      {
        type: "list",
        items: [
          "Émulseur AFFF dosé de 3 % à 6 % selon le produit",
          "Bas foisonnement : portée, feux de nappe extérieurs",
          "Moyen et haut foisonnement : locaux, caves, rétentions",
          "Application douce (paroi ou sol), jamais en jet plongeant",
          "Maintenir le tapis, surveiller la reprise de feu",
        ],
      },
      { type: "rule", text: "Extinction par étouffement : l'eau seule est inefficace et dangereuse." },
    ],
  },
  {
    id: "mat-ventilation-op",
    title: "Ventilation opérationnelle",
    level: "niveau-2",
    category: "incendie",
    duration: "10 min",
    summary: "Utiliser le ventilateur pour maîtriser fumées et chaleur.",
    blocks: [
      {
        type: "list",
        items: [
          "Ventilation d'attaque : faciliter la progression du binôme",
          "Ventilation de protection : préserver les circulations et escaliers",
          "Ventilation de désenfumage : après extinction",
          "Sortie de fumée créée AVANT la mise en route du ventilateur",
          "Coordination obligatoire avec le binôme d'attaque",
        ],
      },
      { type: "rule", text: "Sans sortie, la ventilation aggrave le feu et met le binôme en danger." },
    ],
  },
  {
    id: "mat-aquatique",
    title: "Sauvetage aquatique et embarcation",
    level: "niveau-avance",
    category: "sauvetage",
    duration: "12 min",
    summary: "Sauver en milieu aquatique avec le matériel adapté et sans se mettre en danger.",
    blocks: [
      { type: "h", text: "Ordre des techniques" },
      {
        type: "list",
        items: [
          "Parler à la victime et la guider",
          "Tendre un objet (gaffe, perche)",
          "Lancer une bouée ou un sac à corde",
          "Utiliser une embarcation",
          "En dernier recours : entrée à l'eau par un sauveteur formé (SAV)",
        ],
      },
      { type: "h", text: "Sécurité" },
      {
        type: "list",
        items: [
          "Gilet de sauvetage / VFI obligatoire à bord et en berge",
          "Sécurité amont et aval en eau vive",
          "Reconnaissance des courants et obstacles immergés",
          "Comptage des victimes évacuées et bilan systématique",
        ],
      },
      { type: "rule", text: "Un sauveteur qui se noie double le nombre de victimes." },
    ],
  },
  {
    id: "mat-transmissions",
    title: "Transmissions et messages opérationnels",
    level: "niveau-1",
    category: "operations",
    duration: "8 min",
    summary: "Discipline radio et messages types à destination du CTA-CODIS.",
    blocks: [
      {
        type: "list",
        items: [
          "Message de départ : engin et effectif",
          "Message de présentation : arrivée sur les lieux",
          "Message d'ambiance : première impression, risques",
          "Message de renseignement : nature, victimes, moyens engagés",
          "Demande de moyens puis message de rentrée",
        ],
      },
      { type: "rule", text: "Un bon message est bref, clair, précis et sans jargon inutile." },
    ],
  },
  {
    id: "mat-calage",
    title: "Calage et stabilisation d'un véhicule",
    level: "niveau-2",
    category: "secourisme",
    duration: "10 min",
    summary: "Stabiliser avant toute désincarcération pour protéger victime et intervenants.",
    blocks: [
      {
        type: "list",
        items: [
          "Balisage et sécurisation avant toute action",
          "Coupure du contact et de la batterie si possible",
          "Cales escalier, coins et blocs : 3 points d'appui minimum",
          "Coussins haute pression et étais pour véhicule sur le flanc",
          "Contrôle du calage à chaque étape de la désincarcération",
        ],
      },
      { type: "rule", text: "Attention aux airbags non déclenchés et aux véhicules électriques." },
    ],
  },
];
