import imgDesincarceration from "@/assets/materiel-desincarceration.jpg";
import imgOutils from "@/assets/materiel-outils-divers.jpg";
import imgJonction from "@/assets/materiel-jonction.jpg";
import imgSecours from "@/assets/materiel-secours.jpg";
import imgTenues from "@/assets/materiel-tenues.jpg";
import imgEpi from "@/assets/materiel-epi.jpg";
import imgCcf from "@/assets/engin-ccf.jpg";
import imgEngin from "@/assets/engin-secours.jpg";
import imgAri from "@/assets/materiel-ari.jpg";
import imgLances from "@/assets/materiel-lances.jpg";
import imgTuyaux from "@/assets/materiel-tuyaux.jpg";
import imgEchelles from "@/assets/materiel-echelles.jpg";
import imgEpuisement from "@/assets/materiel-epuisement.jpg";
import imgTronconneuse from "@/assets/materiel-tronconneuse.jpg";
import imgDetecteur from "@/assets/materiel-detecteur.jpg";
import imgCapture from "@/assets/materiel-capture.jpg";
import imgNrbc from "@/assets/materiel-nrbc.jpg";
import imgCordages from "@/assets/materiel-cordages.jpg";
import imgBalisage from "@/assets/materiel-balisage.jpg";
import imgAmbulance from "@/assets/engin-ambulance.jpg";
import imgExtincteurs from "@/assets/materiel-extincteurs.jpg";
import imgOutilsMain from "@/assets/materiel-outils-main.jpg";
import imgAquatique from "@/assets/materiel-aquatique.jpg";
import imgBateau from "@/assets/engin-bateau.jpg";
import imgVentilation from "@/assets/materiel-ventilation.jpg";
import imgEclairage from "@/assets/materiel-eclairage.jpg";
import imgTransmissions from "@/assets/materiel-transmissions.jpg";
import imgDae from "@/assets/materiel-dae.jpg";
import imgMousse from "@/assets/materiel-mousse.jpg";
import imgEchelleAerienne from "@/assets/engin-echelle.jpg";
import imgCalage from "@/assets/materiel-calage.jpg";
import imgVtu from "@/assets/engin-vtu.jpg";

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
  {
    id: "ari",
    name: "ARI — Appareil respiratoire isolant",
    group: "materiel",
    image: imgAri,
    desc: "Protection respiratoire autonome obligatoire en milieu enfumé ou toxique.",
    items: [
      "Bouteille d'air comprimé 6 l / 300 bars",
      "Dossard, harnais et manomètre de contrôle",
      "Masque facial complet à soupape à la demande",
      "Détecteur d'immobilité (clé retirée dès la descente de l'engin)",
      "Contrôle avant emploi : pression, étanchéité, sifflet d'alarme",
    ],
  },
  {
    id: "lances",
    name: "Lances d'incendie (LDV / LDT)",
    group: "materiel",
    image: imgLances,
    desc: "Organes d'attaque permettant de régler débit et forme du jet.",
    items: [
      "Lance à débit variable : jet droit, diffusé d'attaque, diffusé de protection",
      "Potentiel hydraulique de 500 l/min par lance",
      "Lance du dévidoir tournant (LDT) pour attaque rapide",
      "Lance canon alimentée obligatoirement en 110 mm",
      "Lance à mousse pour feux d'hydrocarbures",
    ],
  },
  {
    id: "tuyaux",
    name: "Tuyaux et dévidoirs",
    group: "materiel",
    image: imgTuyaux,
    desc: "Établissements d'alimentation, de manœuvre et d'attaque.",
    items: [
      "DN 45 et DN 70 : établissements d'attaque",
      "DN 110 : établissements de manœuvre et lances canon",
      "Aspiraux pour alimentation en aspiration",
      "Dévidoir mobile et tuyaux pliés en écheveau",
      "Retenue sur BI, clé de PI et coude d'alimentation",
    ],
  },
  {
    id: "echelles",
    name: "Échelles à main",
    group: "materiel",
    image: imgEchelles,
    desc: "Moyens d'accès, de sauvetage et de reconnaissance en étage.",
    items: [
      "Échelle à coulisse à 2 ou 3 plans",
      "Échelle à crochets pour progression en façade",
      "Angle de pose d'environ 75°, pied calé et amarrage",
      "Un seul intervenant par plan lors de la montée",
      "Contrôle des cordes, taquets et patins avant emploi",
    ],
  },
  {
    id: "epuisement",
    name: "Matériel d'épuisement (inondations)",
    group: "materiel",
    image: imgEpuisement,
    desc: "Assèchement de caves, sous-sols et locaux inondés (DIV 1).",
    items: [
      "Motopompe d'épuisement (MPE) et tuyaux d'aspiration/refoulement",
      "Vide-cave électrique et crépine à nettoyer régulièrement",
      "Aspirateur à eau, raclettes et balais",
      "Cuissardes et bottes pour les intervenants",
      "Risques : électrisation, asphyxie (échappement), noyade, effondrement",
    ],
  },
  {
    id: "tronconneuse",
    name: "Tronçonneuse et EPI de tronçonnage",
    group: "materiel",
    image: imgTronconneuse,
    desc: "Découpe de bois et dégagement de voies (chutes d'arbres).",
    items: [
      "Casque avec visière et protection auditive",
      "Pantalon anti-coupure, gants et chaussures de sécurité",
      "Frein de chaîne, contrôle de tension et de graissage",
      "Toujours transporter l'appareil moteur arrêté",
      "Coupe de dégagement puis coupe de séparation",
    ],
  },
  {
    id: "detecteur",
    name: "Détecteurs de gaz et de CO",
    group: "materiel",
    image: imgDetecteur,
    desc: "Mesure d'atmosphère : explosimétrie, oxygène, CO et H2S.",
    items: [
      "Explosimètre : mesure en % de la LIE",
      "Détecteur de CO : port respiratoire indispensable dès 100 ppm",
      "Contrôle du taux d'oxygène (risque d'anoxie)",
      "Étalonnage et mise à l'air libre avant intervention",
      "Mesures à plusieurs hauteurs (gaz lourd / gaz léger)",
    ],
  },
  {
    id: "capture",
    name: "Matériel de capture d'animaux",
    group: "materiel",
    image: imgCapture,
    desc: "Maîtrise et contention des animaux errants ou dangereux (DIV 1).",
    items: [
      "Lasso / perche de capture à boucle réglable",
      "Cage de transport adaptée à l'espèce",
      "Gants épais de contention et muselière",
      "Couverture pour calmer reptiles et félins",
      "Analyse du comportement : agressivité offensive ou défensive",
    ],
  },
  {
    id: "nrbc",
    name: "Tenues et matériel NRBC / HAZMAT",
    group: "materiel",
    image: imgNrbc,
    desc: "Intervention face aux risques chimiques, radiologiques et biologiques.",
    items: [
      "Tenue étanche aux gaz (TEG) portée avec ARI",
      "Combinaison de protection chimique type 3/4",
      "Dosimètre et radiamètre pour le risque radiologique",
      "Kit de prélèvement et papier pH",
      "Chaîne de décontamination avant tout déshabillage",
    ],
  },
  {
    id: "cordages",
    name: "LSPCC et cordages de sauvetage",
    group: "materiel",
    image: imgCordages,
    desc: "Sauvetage et protection contre les chutes en milieu périlleux.",
    items: [
      "Corde de 30 m et sac de transport",
      "Harnais cuissard, triangle d'évacuation",
      "Descendeur, poulies, mousquetons à vis",
      "Anneau de sangle et point d'amarrage vérifié",
      "Contrôle systématique du matériel après chaque usage",
    ],
  },
  {
    id: "balisage",
    name: "Matériel de balisage routier",
    group: "materiel",
    image: imgBalisage,
    desc: "Protection de la zone d'intervention sur voie publique (SR).",
    items: [
      "Cônes de Lubeck et panneaux triflashs",
      "Gilets rétro-réfléchissants portés jour et nuit",
      "Autoroute : balisage de position à 150 m, avancé à 200 m",
      "Balisage réalisé dès l'arrivée, avant l'arrivée des forces de l'ordre",
      "Absorbant pour limiter l'épandage de liquides inflammables",
    ],
  },
  {
    id: "engin-ambulance",
    name: "Ambulance de secours (VSAV)",
    group: "engin",
    image: imgAmbulance,
    desc: "Secours à personne et transport des blessés vers l'hôpital.",
    items: [
      "Équipage : chef d'agrès, conducteur et un binôme",
      "Brancard, plan dur, matelas immobilisateur à dépression",
      "Oxygénothérapie, BAVU, aspirateur de mucosités, DAE",
      "Sac de premiers secours et attelles",
      "Missions : bilan, gestes d'urgence, relevage et transport",
    ],
  },
];


export const getMateriel = (id: string) => materiels.find((m) => m.id === id);
