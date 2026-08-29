import type { Lesson } from "./types";

export const lessons: Lesson[] = [
  /* ------------------------------ NIVEAU 1 ------------------------------ */
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
    id: "modes-propagation",
    title: "Les modes de propagation de la chaleur",
    level: "niveau-1",
    category: "incendie",
    duration: "7 min",
    summary: "Conduction, convection, rayonnement et déplacement de substances.",
    blocks: [
      {
        type: "list",
        items: [
          "Conduction : transfert dans un solide (poutre métallique traversant un mur).",
          "Convection : montée des gaz chauds dans les cages d'escalier et gaines.",
          "Rayonnement : transfert à distance sans contact, à travers les vitres.",
          "Déplacement de substances : projections, écoulement de liquides enflammés.",
        ],
      },
      {
        type: "p",
        text: "Comprendre la propagation permet d'anticiper l'extension du sinistre et de placer les moyens de barrage avant que le feu n'atteigne les volumes voisins.",
      },
      {
        type: "rule",
        text: "Toujours reconnaître les volumes situés au-dessus et de part et d'autre du foyer, même s'ils paraissent intacts.",
      },
    ],
  },
  {
    id: "extincteurs",
    title: "Les extincteurs portatifs",
    level: "niveau-1",
    category: "materiel",
    duration: "8 min",
    summary: "Types d'extincteurs, mise en œuvre et limites d'emploi.",
    blocks: [
      { type: "h", text: "Les grandes familles" },
      {
        type: "list",
        items: [
          "Eau pulvérisée avec additif : feux de classe A et B naissants.",
          "CO2 : feux électriques et petits feux de liquides, sans résidu.",
          "Poudre ABC : polyvalent, mais très salissant.",
          "Extincteur classe F : friteuses et graisses de cuisson.",
        ],
      },
      { type: "h", text: "Mise en œuvre" },
      {
        type: "list",
        items: [
          "Retirer la goupille de sécurité.",
          "Essai de fonctionnement à distance du foyer.",
          "Attaquer la base des flammes, dos à la sortie.",
          "Progresser par impulsions et surveiller la reprise.",
        ],
      },
      {
        type: "rule",
        text: "Le CO2 provoque des brûlures par le froid : ne jamais tenir le diffuseur ailleurs que par sa poignée isolée.",
      },
    ],
  },
  {
    id: "epi",
    title: "Les équipements de protection individuelle",
    level: "niveau-1",
    category: "materiel",
    duration: "7 min",
    summary: "Tenue de feu, casque, gants, bottes et détecteur d'immobilité.",
    blocks: [
      {
        type: "list",
        items: [
          "Casque F1/F2 avec écran facial et bavolet nuque.",
          "Veste et surpantalon de feu multicouches.",
          "Gants textiles et gants de manœuvre.",
          "Bottes anti-perforation à semelle isolante.",
          "Cagoule anti-particules et ceinturon.",
        ],
      },
      {
        type: "p",
        text: "L'EPI protège de la chaleur convective et radiante, pas d'un contact prolongé avec la flamme. Il doit être complet, propre et ajusté : une tenue souillée d'hydrocarbures perd son pouvoir protecteur.",
      },
      {
        type: "rule",
        text: "Aucun engagement sur intervention sans tenue complète adaptée au risque et sans contrôle du binôme.",
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
    id: "pls",
    title: "Position latérale de sécurité",
    level: "niveau-1",
    category: "secourisme",
    duration: "8 min",
    summary: "Mise sur le côté d'une victime inconsciente qui respire.",
    blocks: [
      {
        type: "p",
        text: "La PLS empêche l'obstruction des voies aériennes par la langue et permet l'écoulement des liquides vers l'extérieur.",
      },
      {
        type: "list",
        items: [
          "Retirer lunettes et objets encombrants, rapprocher les jambes.",
          "Placer le bras du côté du retournement à angle droit, paume vers le haut.",
          "Ramener l'autre main contre la joue et plier la jambe opposée.",
          "Faire rouler la victime en tirant sur le genou, sans à-coups.",
          "Ouvrir la bouche et surveiller la respiration en permanence.",
        ],
      },
      {
        type: "rule",
        text: "Suspicion de traumatisme du rachis : maintien de l'axe tête-cou-tronc pendant tout le retournement.",
      },
    ],
  },
  {
    id: "obstruction-voies-aeriennes",
    title: "Obstruction des voies aériennes",
    level: "niveau-1",
    category: "secourisme",
    duration: "7 min",
    summary: "Obstruction partielle ou totale : claques dans le dos et compressions.",
    blocks: [
      {
        type: "list",
        items: [
          "Obstruction partielle : la victime tousse et parle — on l'encourage à tousser, on n'intervient pas.",
          "Obstruction totale : pas de son, pas de toux, agitation — action immédiate.",
          "Cinq claques dans le dos entre les omoplates avec le talon de la main.",
          "Puis cinq compressions abdominales (Heimlich) ou thoraciques chez la femme enceinte et le nourrisson.",
          "Alterner jusqu'à désobstruction ou perte de connaissance.",
        ],
      },
      {
        type: "rule",
        text: "Toute victime ayant subi des compressions abdominales doit être vue par un médecin.",
      },
    ],
  },
  {
    id: "hygiene-securite",
    title: "Hygiène, sécurité et discipline en intervention",
    level: "niveau-1",
    category: "operations",
    duration: "6 min",
    summary: "Règles de comportement, discipline au feu et prévention des risques.",
    blocks: [
      {
        type: "list",
        items: [
          "Discipline : silence radio, exécution des ordres, compte rendu systématique.",
          "Ne jamais se désolidariser de son binôme.",
          "Décontamination des tenues après un feu (risque cancérogène des suies).",
          "Hydratation et surveillance mutuelle en cas de chaleur.",
        ],
      },
      {
        type: "rule",
        text: "Un sapeur-pompier ne quitte jamais son poste sans en rendre compte à son chef d'agrès.",
      },
    ],
  },

  /* ------------------------------ NIVEAU 2 ------------------------------ */
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
    id: "alimentation-hydraulique",
    title: "Alimentation en eau et hydraulique",
    level: "niveau-2",
    category: "incendie",
    duration: "12 min",
    summary: "Hydrants, aspiration, pertes de charge et pression utile.",
    blocks: [
      { type: "h", text: "Les ressources en eau" },
      {
        type: "list",
        items: [
          "Poteau d'incendie normalisé : 60 m³/h sous 1 bar.",
          "Bouche d'incendie : même débit, sous chaussée.",
          "Point d'eau naturel : aspiration avec crépine et cordage.",
          "Réserve artificielle : citerne, bâche souple.",
        ],
      },
      { type: "h", text: "Hydraulique de base" },
      {
        type: "list",
        items: [
          "Pertes de charge : proportionnelles à la longueur et au débit, inversement au diamètre.",
          "Compter environ 1 bar par 10 m de dénivelé en montée.",
          "Pression à la lance à maintenir : 6 bar environ.",
        ],
      },
      {
        type: "rule",
        text: "Ne jamais couper brutalement une lance en charge : le coup de bélier peut endommager la pompe et les tuyaux.",
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
    id: "echelles-a-main",
    title: "Les échelles à main",
    level: "niveau-2",
    category: "materiel",
    duration: "9 min",
    summary: "Échelle à coulisse, à crochets et règles de dressage.",
    blocks: [
      {
        type: "list",
        items: [
          "Échelle à coulisse : accès aux étages, dressée par deux à quatre servants.",
          "Échelle à crochets : progression de balcon en balcon.",
          "Angle de dressage d'environ 75°, pied assuré sur sol stable.",
          "Dépassement d'un mètre au-dessus du point d'appui.",
        ],
      },
      {
        type: "rule",
        text: "Un seul sapeur à la fois par plan d'échelle, sauf manœuvre de sauvetage encadrée ; échelle toujours tenue au pied.",
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
    id: "accident-circulation",
    title: "Secours routier : sécurisation et désincarcération",
    level: "niveau-2",
    category: "operations",
    duration: "13 min",
    summary: "Balisage, calage, coupure des énergies et abord de la victime.",
    blocks: [
      { type: "h", text: "Les temps de l'intervention" },
      {
        type: "list",
        items: [
          "Sécurisation : balisage large, engin en protection, gilets haute visibilité.",
          "Prévention du risque incendie : lance en attente et extincteur.",
          "Calage et stabilisation du véhicule.",
          "Coupure des énergies : batterie, coupe-circuit des véhicules électriques.",
          "Abord de la victime et maintien de l'axe tête-cou-tronc.",
          "Création d'espace puis désincarcération.",
        ],
      },
      {
        type: "rule",
        text: "Véhicule électrique ou hybride : respecter les zones d'exclusion, ne jamais couper les câbles orange.",
      },
    ],
  },
  {
    id: "risques-electriques-gaz",
    title: "Risques électriques et gaz",
    level: "niveau-2",
    category: "operations",
    duration: "10 min",
    summary: "Distances de sécurité, coupures et fuites de gaz.",
    blocks: [
      { type: "h", text: "Électricité" },
      {
        type: "list",
        items: [
          "Basse tension : coupure au disjoncteur avant toute action.",
          "Haute tension : distance de sécurité de 3 m minimum, 5 m pour les lignes aériennes.",
          "Jet diffusé uniquement, jamais de jet plein vers une installation sous tension.",
        ],
      },
      { type: "h", text: "Gaz" },
      {
        type: "list",
        items: [
          "Périmètre de sécurité et interdiction de toute source d'ignition.",
          "Ne pas actionner d'interrupteur ni de sonnette.",
          "Ventilation naturelle, barrage au niveau du coffret.",
          "Demande du concessionnaire par le CODIS.",
        ],
      },
      {
        type: "rule",
        text: "Fuite de gaz enflammée : on protège les alentours et on laisse brûler jusqu'au barrage de l'alimentation.",
      },
    ],
  },
  {
    id: "brulures",
    title: "Brûlures et détresses thermiques",
    level: "niveau-2",
    category: "secourisme",
    duration: "9 min",
    summary: "Évaluation de la gravité, refroidissement et surveillance.",
    blocks: [
      {
        type: "list",
        items: [
          "1er degré : rougeur simple. 2e degré : phlyctènes. 3e degré : peau cartonnée, indolore.",
          "Refroidir précocement à l'eau tempérée, ruisselante, 5 à 15 minutes.",
          "Retirer vêtements et bijoux non adhérents.",
          "Protéger par un pansement stérile, prévenir l'hypothermie.",
          "Règle des 9 de Wallace pour estimer la surface brûlée.",
        ],
      },
      {
        type: "rule",
        text: "Brûlure électrique ou chimique, brûlure du visage ou des voies aériennes : bilan et médicalisation systématiques.",
      },
    ],
  },
  {
    id: "traumatismes",
    title: "Traumatismes des membres et du rachis",
    level: "niveau-2",
    category: "secourisme",
    duration: "11 min",
    summary: "Immobilisation, relevage et matériels d'immobilisation.",
    blocks: [
      {
        type: "list",
        items: [
          "Ne jamais réduire une déformation : immobiliser dans la position trouvée.",
          "Attelles à dépression pour les membres, matelas immobilisateur pour le rachis.",
          "Collier cervical posé à deux, après maintien tête.",
          "Relevage au plan dur ou à la civière cuillère selon la situation.",
          "Contrôler la coloration, la chaleur et la sensibilité en aval.",
        ],
      },
      {
        type: "rule",
        text: "Tout traumatisé grave est mobilisé d'un seul bloc, sur ordre unique du chef d'équipe placé à la tête.",
      },
    ],
  },
  {
    id: "detresses-vitales",
    title: "Détresses vitales et réanimation cardio-pulmonaire",
    level: "niveau-2",
    category: "secourisme",
    duration: "12 min",
    summary: "RCP adulte et enfant, DAE et relais des compressions.",
    blocks: [
      { type: "h", text: "Arrêt cardiaque de l'adulte" },
      {
        type: "list",
        items: [
          "30 compressions thoraciques pour 2 insufflations.",
          "Fréquence de 100 à 120 par minute, profondeur 5 à 6 cm.",
          "Relâchement thoracique complet entre chaque compression.",
          "Mise en œuvre du DAE dès sa disponibilité, sans interrompre inutilement le massage.",
          "Relais du masseur toutes les 2 minutes.",
        ],
      },
      { type: "h", text: "Enfant et nourrisson" },
      {
        type: "list",
        items: [
          "5 insufflations initiales puis 15 compressions pour 2 insufflations.",
          "Nourrisson : deux doigts ou technique des deux pouces.",
        ],
      },
      {
        type: "rule",
        text: "Personne ne touche la victime pendant l'analyse et le choc du DAE : annoncer clairement « écartez-vous ».",
      },
    ],
  },

  /* --------------------------- NIVEAU AVANCÉ ---------------------------- */
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
    id: "ventilation-operationnelle",
    title: "Ventilation opérationnelle",
    level: "niveau-avance",
    category: "incendie",
    duration: "12 min",
    summary: "Ventilation naturelle, mécanique, tactique et anti-tactique.",
    blocks: [
      {
        type: "list",
        items: [
          "Ventilation naturelle : jeu des ouvrants et du tirage thermique.",
          "Ventilation mécanique par surpression avec ventilateur.",
          "Ventilation d'attaque : réalisée avant l'attaque, sur ordre, avec sortant identifié.",
          "Ventilation de protection : préserver les circulations et les escaliers.",
        ],
      },
      {
        type: "p",
        text: "Toute ventilation apporte de l'air au foyer : elle doit être décidée par le commandant des opérations de secours, coordonnée avec l'équipe d'attaque et réversible.",
      },
      {
        type: "rule",
        text: "Pas de ventilation sans sortant créé et contrôlé, ni sans certitude qu'aucune victime ne se trouve sur le trajet des fumées.",
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
  {
    id: "messages-radio",
    title: "Transmissions et messages opérationnels",
    level: "niveau-avance",
    category: "operations",
    duration: "10 min",
    summary: "Message d'ambiance, de renseignement et demande de moyens.",
    blocks: [
      { type: "h", text: "Les types de messages" },
      {
        type: "list",
        items: [
          "Message de départ et de présentation sur les lieux.",
          "Message d'ambiance : premières impressions, dans les toutes premières minutes.",
          "Message de renseignement : nature, situation, moyens engagés, mesures prises.",
          "Demande de moyens : précise, justifiée, avec point de rassemblement.",
          "Message de rentrée et bilan final.",
        ],
      },
      { type: "h", text: "Règles de phonie" },
      {
        type: "list",
        items: [
          "Écouter avant d'émettre, parler bref et clair.",
          "Utiliser l'alphabet international pour épeler.",
          "Accuser réception de tout ordre reçu.",
        ],
      },
      {
        type: "rule",
        text: "Une demande de moyens n'attend jamais : elle est transmise dès que le doute existe sur la suffisance des effectifs.",
      },
    ],
  },
  {
    id: "risques-technologiques",
    title: "Risques chimiques et radiologiques",
    level: "niveau-avance",
    category: "operations",
    duration: "14 min",
    summary: "Zonage, plaques de danger et conduite réflexe.",
    blocks: [
      { type: "h", text: "Conduite réflexe" },
      {
        type: "list",
        items: [
          "Se placer en amont du vent, en hauteur si possible.",
          "Identifier le produit : code danger et code matière du panneau orange.",
          "Établir un zonage : zone d'exclusion, zone contrôlée, zone de soutien.",
          "Demander les moyens spécialisés (cellule risques chimiques ou radiologiques).",
        ],
      },
      {
        type: "p",
        text: "Le code danger comporte deux ou trois chiffres ; un chiffre doublé indique une intensité accrue, la lettre X interdit tout contact du produit avec l'eau.",
      },
      {
        type: "rule",
        text: "Aucun engagement en zone d'exclusion sans tenue de protection adaptée et sans procédure de décontamination prévue.",
      },
    ],
  },
  {
    id: "feux-de-forets",
    title: "Feux de forêts et d'espaces naturels",
    level: "niveau-avance",
    category: "incendie",
    duration: "13 min",
    summary: "Comportement du feu, tactiques d'attaque et sécurité des personnels.",
    blocks: [
      { type: "h", text: "Facteurs de propagation" },
      {
        type: "list",
        items: [
          "Le vent : facteur principal, oriente et accélère le front.",
          "La pente : le feu remonte deux fois plus vite en montant.",
          "La nature et la sécheresse du combustible.",
        ],
      },
      { type: "h", text: "Tactiques" },
      {
        type: "list",
        items: [
          "Attaque de front sur feu naissant seulement.",
          "Attaque par les flancs pour réduire la largeur du front.",
          "Établissement d'une ligne d'appui et contre-feu, sur ordre uniquement.",
          "Noyade des lisières et surveillance prolongée.",
        ],
      },
      {
        type: "rule",
        text: "Toujours disposer d'une zone refuge et d'un itinéraire de repli identifiés avant l'engagement ; ne jamais se laisser enfermer dans un cul-de-sac.",
      },
    ],
  },
  {
    id: "sauvetage-victimes-fumees",
    title: "Recherche et sauvetage en milieu enfumé",
    level: "niveau-avance",
    category: "incendie",
    duration: "12 min",
    summary: "Techniques de progression, reconnaissance périphérique et extraction.",
    blocks: [
      {
        type: "list",
        items: [
          "Progression accroupie, main courante le long du mur, contact permanent avec le binôme.",
          "Balisage du cheminement par le tuyau ou une ligne guide.",
          "Reconnaissance périphérique puis centrale de chaque volume.",
          "Annonce systématique des volumes reconnus au chef d'agrès.",
          "Extraction par le chemin le plus court et le plus sûr, tête protégée.",
        ],
      },
      {
        type: "rule",
        text: "Le repli s'impose dès la perte de l'eau, la perte du binôme ou l'alarme sonore d'un ARI.",
      },
    ],
  },
];

export const getLesson = (id: string) => lessons.find((l) => l.id === id);
