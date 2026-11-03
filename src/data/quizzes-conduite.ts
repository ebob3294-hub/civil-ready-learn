import type { Quiz } from "./types";

// QCM sur les conduites à tenir : interventions ambulatoires et d'incendie
export const quizzesConduite: Quiz[] = [
  {
    id: "qcm-cat-amb-1",
    title: "QCM — Conduite à tenir : interventions ambulatoires (1)",
    level: "niveau-1",
    category: "secourisme",
    questions: [
      {
        question: "Sur une intervention ambulatoire, quelle est la toute première action ?",
        options: ["Faire le bilan de la victime", "Sécuriser et protéger les lieux", "Appeler la famille", "Relever la victime"],
        answer: 1,
        explanation: "Protéger avant de secourir : sécurisation du site, stationnement, balisage, puis bilan.",
      },
      {
        question: "Devant un malaise, que ne faut-il jamais faire ?",
        options: ["Allonger la victime", "Rassurer la victime", "Donner à boire ou un médicament de sa propre initiative", "Demander un avis médical"],
        answer: 2,
        explanation: "Aucune prise de boisson ni de médicament sans ordre du médecin : avis médical systématique pour tout malaise.",
      },
      {
        question: "Quel élément du bilan d'AVC est capital à transmettre ?",
        options: ["L'âge de la victime", "L'heure exacte du début des signes", "Le nom du médecin traitant", "Le poids de la victime"],
        answer: 1,
        explanation: "L'heure de début détermine la possibilité de thrombolyse : c'est une donnée vitale.",
      },
      {
        question: "Face à une hémorragie, quelle est la première manœuvre ?",
        options: ["Poser un garrot systématiquement", "Compression directe de la plaie", "Donner à boire", "Relever la victime debout"],
        answer: 1,
        explanation: "Compression directe d'abord ; le garrot n'intervient que si la compression est impossible ou insuffisante.",
      },
      {
        question: "Un garrot posé doit être…",
        options: ["Desserré toutes les 10 minutes", "Serré jusqu'à l'arrêt du saignement et horodaté", "Posé sous les vêtements", "Desserré dès l'arrivée du SMUR"],
        answer: 1,
        explanation: "On serre jusqu'à l'arrêt du saignement, on note l'heure de pose et on ne le desserre jamais sur le terrain.",
      },
      {
        question: "Devant des convulsions, il faut :",
        options: ["Contenir la victime", "Mettre un objet dans sa bouche", "Protéger la tête et écarter les dangers", "Donner de l'eau après la crise"],
        answer: 2,
        explanation: "Protéger, observer, chronométrer : jamais de contention ni d'objet dans la bouche.",
      },
      {
        question: "Quelle durée de crise convulsionnaire signale un état de mal épileptique ?",
        options: ["Plus de 1 minute", "Plus de 2 minutes", "Plus de 5 minutes", "Plus de 15 minutes"],
        answer: 2,
        explanation: "Une crise de plus de 5 minutes est un état de mal épileptique : urgence absolue.",
      },
    ],
  },
  {
    id: "qcm-cat-amb-2",
    title: "QCM — Conduite à tenir : interventions ambulatoires (2)",
    level: "niveau-2",
    category: "secourisme",
    questions: [
      {
        question: "Une victime de noyade consciente qui semble rétablie : que faire ?",
        options: ["La laisser à domicile", "Transport médicalisé systématique", "Un verre d'eau sucrée", "Rien, elle est rétablie"],
        answer: 1,
        explanation: "L'eau inhalée provoque un œdème pulmonaire retardé : toute victime de submersion part en transport médicalisé.",
      },
      {
        question: "Plusieurs victimes malaises dans le même logement : quelle suspicion ?",
        options: ["Grippe", "Intoxication au monoxyde de carbone (CO)", "Nourriture avariée", "Allergie au pollen"],
        answer: 1,
        explanation: "Plusieurs victimes au même endroit = suspicion de CO : couper la source, ventiler, oxygène et mesure au CO.",
      },
      {
        question: "Devant une intoxication, quels gestes sont interdits ?",
        options: ["Collecter les boîtes de médicaments", "Faire vomir la victime", "Surveiller la conscience", "Appeler le centre antipoison via le médecin"],
        answer: 1,
        explanation: "Jamais de vomissement provoqué, jamais de lait ni de charbon sans ordre médical.",
      },
      {
        question: "Signes d'hypoglycémie chez un diabétique conscient :",
        options: ["Sueurs, tremblements, agitation", "Brûlure d'estomac", "Éruption cutanée", "Fièvre élevée"],
        answer: 0,
        explanation: "Sueurs, tremblements, pâleur, faim, comportement anormal : administration de sucre si la victime peut avaler.",
      },
      {
        question: "Victime inconsciente en hypoglycémie :",
        options: ["Lui donner du sucre dissous", "Rien par la bouche, PLS et avis médical urgent", "La faire marcher", "Attendre que ça passe"],
        answer: 1,
        explanation: "Inconscient = rien par la bouche : PLS, appel urgent, surveillance de la respiration.",
      },
      {
        question: "Sur une brûlure, quels produits sont interdits ?",
        options: ["Eau tempérée", "Beurre, glace ou pommade", "Pansement propre", "Couverture du reste du corps"],
        answer: 1,
        explanation: "Ni glace, ni neige carbonique, ni beurre, ni pommade : refroidissement à l'eau tempérée et pansement propre.",
      },
      {
        question: "Durée du refroidissement d'une brûlure à l'eau tempérée :",
        options: ["1 minute", "5 minutes", "15 à 20 minutes", "1 heure"],
        answer: 2,
        explanation: "Refroidissement 15 à 20 minutes, eau à 15-25 °C, à distance de 10 à 15 cm.",
      },
    ],
  },
  {
    id: "qcm-cat-amb-3",
    title: "QCM — Conduite à tenir : AVP, rachis et urgences spécifiques",
    level: "niveau-2",
    category: "secourisme",
    questions: [
      {
        question: "Sur un AVP d'autoroute, la distance de balisage minimale est :",
        options: ["10 mètres", "30 mètres", "100 mètres minimum", "Le balisage est inutile"],
        answer: 2,
        explanation: "100 m minimum sur autoroute, davantage si vitesse élevée, avec hommes de manœuvre.",
      },
      {
        question: "Sur la scène d'un AVP, le stationnement des engins se fait :",
        options: ["Sur la chaussée de circulation", "En écran pour protéger la zone", "Face à face", "Sur le bas-côté à 500 m"],
        answer: 1,
        explanation: "Stationnement en écran : les engins protègent les sauveteurs et les victimes du trafic.",
      },
      {
        question: "Victime de chute avec fourmillements des jambes : on suspecte :",
        options: ["Une entorse", "Une lésion du rachis", "Une hypoglycémie", "Un malaise vagal"],
        answer: 1,
        explanation: "Fourmillements, perte de sensibilité ou de mobilité après une chute = suspicion rachidienne : immobilisation.",
      },
      {
        question: "Le relevage d'un traumatisé du rachis se fait :",
        options: ["Par un seul secouriste", "Par 3 ou 4 secouristes avec planche et sangles", "En tirant sous les bras", "En attendant qu'il se relève"],
        answer: 1,
        explanation: "Relevage par 3-4 secouristes, technique du pont, planche dur, sangles et têtière.",
      },
      {
        question: "Signes d'anaphylaxie après une piqûre d'insecte :",
        options: ["Gêne respiratoire, gonflement des lèvres, urticaire", "Saignement de nez", "Douleur au dos", "Fièvre légère"],
        answer: 0,
        explanation: "Anaphylaxie : urgence, adrénaline si auto-injecteur disponible, transport médicalisé urgent.",
      },
      {
        question: "Priorité immédiate après la naissance d'un bébé en accouchement inopiné :",
        options: ["Sectionner le cordon", "Sécher et réchauffer le bébé", "Photographier", "Rappeler la famille"],
        answer: 1,
        explanation: "Le nouveau-né perd très vite sa chaleur : séchage, chaleur, évaluation respiratoire d'abord.",
      },
      {
        question: "Une victime hypotherme en arrêt cardiaque :",
        options: ["On arrête la RCP après 5 minutes", "La RCP est poursuivie, on ne déclare pas le décès tant qu'elle est froide", "On la réchauffe d'abord sans RCP", "On la laisse sur place"],
        answer: 1,
        explanation: "Aucune victime hypotherme n'est morte tant qu'elle est froide : RCP prolongée et transport.",
      },
    ],
  },
  {
    id: "qcm-cat-inc-1",
    title: "QCM — Conduite à tenir : interventions d'incendie",
    level: "niveau-2",
    category: "incendie",
    questions: [
      {
        question: "Sur un incendie, quelle est la priorité avant l'extinction ?",
        options: ["Sauver les biens", "Le sauvetage des personnes", "Protéger la voiture du voisin", "Écrire le rapport"],
        answer: 1,
        explanation: "Sauvetage avant extinction : la fumée tue plus vite que les flammes.",
      },
      {
        question: "À l'ouverture d'une porte de logement en feu, la prudence impose :",
        options: ["D'ouvrir brutalement pour aérer", "D'ouvrir progressivement, à couvert, protégé par l'ARI", "D'enfoncer la porte au bélier", "D'attendre la fin du feu"],
        answer: 1,
        explanation: "Un embrasement soudain (backdraft) peut surgir à l'ouverture : ouverture progressive à couvert.",
      },
      {
        question: "Sur un feu de véhicule électrique, quel risque persiste des heures après ?",
        options: ["Aucun", "La reprise de feu de la batterie (thermal runaway)", "La fuite de gaz", "La panne du véhicule"],
        answer: 1,
        explanation: "Les batteries lithium peuvent reprendre des heures plus tard : surveillance et mise en sécurité obligatoires.",
      },
      {
        question: "Sur une flamme de gaz non coupable à la source, il faut :",
        options: ["Éteindre à tout prix", "Laisser brûler et refroidir les bouteilles exposées", "Étouffer avec une bâche", "Fermer la porte et partir"],
        answer: 1,
        explanation: "Éteindre sans couper le gaz crée un nuage explosif : on laisse brûler et on refroidit.",
      },
      {
        question: "Dans un ERP, pourquoi fermer les portes coupe-feu derrière soi ?",
        options: ["Pour éviter les courants d'air", "Le compartimentage protège les occupants et les autres étages", "Pour économiser l'eau", "C'est facultatif"],
        answer: 1,
        explanation: "Une porte coupe-feu maintenue ouverte transforme tout l'étage en foyer.",
      },
      {
        question: "Sur un feu industriel, avant d'attaquer il faut :",
        options: ["Savoir ce qui brûle et refroidir les cuves voisines", "Jeter de l'eau directement sur les flammes", "Envoyer une seule personne", "Attendre que le feu s'éteigne"],
        answer: 0,
        explanation: "La reconnaissance des produits et le refroidissement des cuves précèdent toute attaque ; mousse sur hydrocarbures.",
      },
      {
        question: "Sur un feu de forêt, la première des conduites à tenir pour une équipe est :",
        options: ["Attaquer le front de feu", "Identifier la voie d'échappement et la zone de sécurité", "Arroser les arbres", "Attendre les moyens aériens"],
        answer: 1,
        explanation: "Aucun engagement sans voie de repli identifiée : l'échappement est prioritaire.",
      },
      {
        question: "Un plafond chaud au toucher dans un déblaiement signale :",
        options: ["Un simple chauffage", "Un foyer caché actif à sonder et ouvrir", "Une bonne isolation", "Rien d'important"],
        answer: 1,
        explanation: "Chaleur au toucher = foyer caché : sonder, ouvrir, vérifier avec la caméra thermique avant de déclarer l'extinction.",
      },
    ],
  },
];
