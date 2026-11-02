import type { Lesson } from "./types";

export const lessonsHydraulique: Lesson[] = [
  {
    id: "perte-de-charge",
    title: "Pertes de charge : comprendre et calculer",
    level: "niveau-2",
    category: "incendie",
    duration: "14 min",
    summary: "La perte de charge d'eau dans les tuyaux : causes, calcul et solutions.",
    blocks: [
      { type: "h", text: "Qu'est-ce que la perte de charge ?" },
      {
        type: "p",
        text: "La perte de charge (PDC) est la baisse de pression que subit l'eau entre la pompe et la lance. Elle est causée par le frottement de l'eau contre la paroi intérieure des tuyaux, par les coudes, les raccords et les divisions.",
      },
      { type: "h", text: "Les trois règles d'or" },
      {
        type: "list",
        items: [
          "La perte de charge augmente avec la longueur : deux fois plus de tuyaux = deux fois plus de perte.",
          "La perte de charge augmente avec le débit : doubler le débit quadruple presque la perte.",
          "La perte de charge diminue avec le diamètre : le DN 100 perd bien moins que le DN 65.",
        ],
      },
      { type: "h", text: "Ordres de grandeur à retenir" },
      {
        type: "list",
        items: [
          "Tuyau DN 65 à 250 l/min : environ 0,3 bar de perte par tuyau de 20 m.",
          "Tuyau DN 65 à 500 l/min : environ 1 bar par tuyau de 20 m.",
          "Tuyau DN 100 : environ 4 fois moins de perte qu'un DN 65 au même débit.",
          "Une division : compter environ 0,3 à 0,5 bar de perte supplémentaire.",
          "Dénivelé : 1 bar de pression gagnée ou perdue par 10 m de hauteur.",
        ],
      },
      { type: "h", text: "Le calcul simple" },
      {
        type: "p",
        text: "Pression à la lance = pression refoulée à la pompe − pertes de charge de la ligne − dénivelé. Pour garantir une lance efficace, il faut environ 6 bar à la lance : si les pertes sont trop fortes, le conducteur augmente la pression ou on établit une grande ligne en DN 100.",
      },
      { type: "h", text: "Comment limiter les pertes de charge" },
      {
        type: "list",
        items: [
          "Utiliser le DN 100 pour l'alimentation (grande ligne) et réserver le DN 65 aux petites lignes.",
          "Éviter les lignes trop longues en petites lignes : préférer l'attaque rapprochée.",
          "Éviter les coudes inutiles et les tuyaux tordus ou écrasés sous les roues.",
          "Fermer complètement, ouvrir à fond : un tuyau à demi-ouvert crée de la turbulence.",
        ],
      },
      {
        type: "rule",
        text: "Le coup de bélier : fermer une lance ou une vanne brutalement crée une surpression qui peut éclater un tuyau ou casser la pompe. Manœuvres toujours progressives.",
      },
    ],
  },
  {
    id: "hydrants",
    title: "Hydrants : poteaux d'incendie et bouches d'incendie",
    level: "niveau-1",
    category: "incendie",
    duration: "10 min",
    summary: "Reconnaître et utiliser les hydrants : poteau, bouche et plaque indicatrice.",
    blocks: [
      { type: "h", text: "Le poteau d'incendie" },
      {
        type: "list",
        items: [
          "Hydrant aérien, peint en rouge, sur le trottoir ou en bord de voie.",
          "Deux sorties DN 65 (vannes de refoulement) et une sortie DN 100 au sommet.",
          "Débit normalisé : environ 60 m³/h sous 1 bar.",
          "Ouvre avec la clé double ; ouvrir à fond et progressivement.",
        ],
      },
      { type: "h", text: "La bouche d'incendie" },
      {
        type: "list",
        items: [
          "Hydrant enterré, sous une plaque carrée gravée dans la chaussée ou le trottoir.",
          "Sortie DN 100 avec demi-raccord ; ouvre avec la clé à bouche.",
          "Sécurité : personne ne doit rester debout au-dessus de l'orifice à l'ouverture.",
          "Vidanger la bouche après usage pour éviter le gel et la corrosion.",
        ],
      },
      { type: "h", text: "La plaque indicatrice" },
      {
        type: "list",
        items: [
          "Indique la position de l'hydrant : le nombre au-dessus du trait est la distance en mètres.",
          "Le nombre sous le trait indique l'angle de décalage par rapport au repère.",
          "Un hydrant inaccessible (voiture) ne bloque pas l'engin : chercher le suivant.",
        ],
      },
      {
        type: "rule",
        text: "Un hydrant gelé, cassé ou à sec : le signaler immédiatement au CODIS et chercher un point d'eau alternatif (réserve, point naturel).",
      },
    ],
  },
  {
    id: "liaisons-tuyaux",
    title: "Tuyaux, liaisons et établissement des lignes",
    level: "niveau-1",
    category: "incendie",
    duration: "11 min",
    summary: "Petites lignes, grandes lignes, liaisons : bien établir les tuyaux.",
    blocks: [
      { type: "h", text: "Les diamètres" },
      {
        type: "list",
        items: [
          "DN 45 : petite ligne d'attaque légère, faible débit.",
          "DN 65 : petite ligne standard d'attaque et de défense.",
          "DN 100 : grande ligne d'alimentation et de liaison, faibles pertes de charge.",
        ],
      },
      { type: "h", text: "Petites lignes et grandes lignes" },
      {
        type: "list",
        items: [
          "Petite ligne : engin → lance directement (soutien de lance).",
          "Grande ligne : établissement long, alimentation d'un engin ou division.",
          "Ligne d'attaque : depuis la division vers la lance, jamais au-delà de 2 à 3 tuyaux.",
        ],
      },
      { type: "h", text: "Règles d'établissement" },
      {
        type: "list",
        items: [
          "Établir les lignes hors de la zone de danger et hors du passage des véhicules.",
          "Franchir les chaussées perpendiculairement, tuyaux protégés (planche de franchissement).",
          "Détendre un tuyau à terre avant de le replier ; jamais de nœuds ni de torsions.",
          "Vérifier le verrouillage de chaque demi-raccord avant la mise en eau.",
          "Un raccord sous pression ne se déconnecte jamais : détendre la ligne d'abord.",
        ],
      },
      {
        type: "rule",
        text: "Toujours annoncer les manœuvres d'eau (« ouverture », « fermeture », « coupure d'eau ») : une surprise dans la ligne met en danger les porteurs de lance.",
      },
    ],
  },
  {
    id: "renfort-eau",
    title: "Renfort en eau : citernes, CCGC et relais",
    level: "niveau-avance",
    category: "incendie",
    duration: "12 min",
    summary: "Alimenter durablement : citerne de l'engin, CCGC, relais pompe et mousses.",
    blocks: [
      { type: "h", text: "La citerne de l'engin" },
      {
        type: "list",
        items: [
          "FPT : environ 2 000 à 3 000 litres d'eau.",
          "Le foyer d'attaque消耗 vite : une lance à 500 l/min vide une citerne en 5 à 6 minutes.",
          "Dès l'arrivée, un équipier prépare l'alimentation pendant que l'équipe attaque.",
        ],
      },
      { type: "h", text: "Le CCGC" },
      {
        type: "list",
        items: [
          "Camion-citerne grande capacité : environ 8 000 à 12 000 litres.",
          "Rôle : relais d'eau entre les hydrants et les engins d'attaque.",
          "Peut alimenter plusieurs engins en parallèle par ses panneaux de refoulement.",
        ],
      },
      { type: "h", text: "Le relais pompe" },
      {
        type: "list",
        items: [
          "Permet d'aller chercher l'eau loin de l'incendie (plusieurs centaines de mètres).",
          "Chaine : hydrant → relais pompe → grande ligne → engin d'attaque.",
          "Coordination par radio : le conducteur du relais annonce sa pression de refoulement.",
        ],
      },
      {
        type: "rule",
        text: "Jamais de soutien de lance sans alimentation assurée : la citerne ne couvre que quelques minutes de lutte.",
      },
    ],
  },
];
