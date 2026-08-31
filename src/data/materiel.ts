import imgDesincarceration from "@/assets/materiel-desincarceration.jpg";
import imgOutils from "@/assets/materiel-outils-divers.jpg";
import imgJonction from "@/assets/materiel-jonction.jpg";
import imgSecours from "@/assets/materiel-secours.jpg";
import imgTenues from "@/assets/materiel-tenues.jpg";
import imgEpi from "@/assets/materiel-epi.jpg";
import imgCcf from "@/assets/engin-ccf.jpg";
import imgEngin from "@/assets/engin-secours.jpg";

export type MaterielItem = {
  id: string;
  name: string;
  group: "materiel" | "engin";
  image: string;
  desc: string;
  items: string[];
};

export const materiels: MaterielItem[] = [
  {
    id: "desincarceration",
    name: "Matériel de désincarcération",
    group: "materiel",
    image: imgDesincarceration,
    desc: "Outils hydrauliques utilisés pour libérer une victime coincée dans un véhicule.",
    items: [
      "Écarteur hydraulique : ouvrir les portes et créer des points d'accès",
      "Cisaille : couper montants, pédales et pare-brise",
      "Vérin (ram) : repousser le tableau de bord ou le pavillon",
      "Groupe hydraulique et flexibles haute pression",
      "Coussins de calage, cales et protections d'arêtes vives",
    ],
  },
  {
    id: "outils",
    name: "Outils divers",
    group: "materiel",
    image: imgOutils,
    desc: "Outillage de force et de percement présent sur tous les engins.",
    items: [
      "Hache de pompier et hache-pioche",
      "Pied-de-biche / barre Halligan pour ouverture de porte",
      "Coupe-boulons et pince multiprise",
      "Masse, burin, scie à métaux",
      "Éclairage portatif et projecteur d'ambiance",
    ],
  },
  {
    id: "jonction",
    name: "Matériel de jonction",
    group: "materiel",
    image: imgJonction,
    desc: "Pièces d'établissement et de raccordement des tuyaux d'incendie.",
    items: [
      "Raccords symétriques (type Storz) DN 45 / DN 70 / DN 100",
      "Division mixte : alimenter plusieurs lances depuis une seule ligne",
      "Réduction et augmentation de diamètre",
      "Clé de raccord et clé de poteau/bouche d'incendie",
      "Coude d'alimentation, collecteur et vanne d'arrêt",
    ],
  },
  {
    id: "secours",
    name: "Matériel de secours",
    group: "materiel",
    image: imgSecours,
    desc: "Lot de secours à personne pour relevage, immobilisation et oxygénothérapie.",
    items: [
      "Brancard cuillère et plan dur avec sangles",
      "Collier cervical réglable et immobilisateur de tête",
      "Attelles à dépression et attelles de traction",
      "Bouteille d'oxygène, masque à haute concentration, BAVU",
      "Sac de premiers secours, DAE, aspirateur de mucosités",
    ],
  },
  {
    id: "tenues",
    name: "Tenues d'intervention",
    group: "materiel",
    image: imgTenues,
    desc: "Tenues adaptées au type d'intervention (feu, SAP, feux de forêt).",
    items: [
      "Veste et surpantalon de feu textile ignifugé",
      "Cagoule anti-feu et gants de feu",
      "Rangers ou bottes de sécurité à coquille",
      "Tenue F1 de service et tenue SAP",
      "Bandes rétroréfléchissantes obligatoires sur voie publique",
    ],
  },
  {
    id: "epi",
    name: "Équipements de protection individuelle (EPI)",
    group: "materiel",
    image: imgEpi,
    desc: "Protections portées par l'intervenant, contrôlées avant chaque départ.",
    items: [
      "Casque F1/F2 avec écran facial et bavolet",
      "ARI : appareil respiratoire isolant + masque",
      "Ceinture de maintien et harnais d'assurance",
      "Gants adaptés (feu, SAP, manutention)",
      "Détecteur de gaz, lampe individuelle, protections auditives",
    ],
  },
  {
    id: "ccf",
    name: "Camion-Citerne Feux de forêt (CCF)",
    group: "engin",
    image: imgCcf,
    desc: "Engin tout-terrain d'attaque des feux d'espaces naturels.",
    items: [
      "Citerne de 2 000 à 4 000 litres d'eau",
      "Pompe permettant l'attaque en roulant (auto-protection)",
      "Lance de 500 l/min, tuyaux souples, battes à feu",
      "4x4 avec garde au sol renforcée et rideau d'eau",
      "Équipage : chef d'agrès, conducteur, binôme d'attaque",
    ],
  },
  {
    id: "engin-secours",
    name: "Engin de secours et de lutte (FPT / VSR)",
    group: "engin",
    image: imgEngin,
    desc: "Fourgon-pompe polyvalent d'attaque incendie et de secours routier.",
    items: [
      "Pompe centrifuge et citerne de 2 000 à 3 000 litres",
      "Dévidoir mobile, tuyaux DN 45 et DN 70, lances",
      "Coffres à matériel : désincarcération, calage, épuisement",
      "Échelle à coulisse, LSPCC, ventilateur",
      "Extincteurs eau + additif et poudre",
    ],
  },
];

export const getMateriel = (id: string) => materiels.find((m) => m.id === id);
