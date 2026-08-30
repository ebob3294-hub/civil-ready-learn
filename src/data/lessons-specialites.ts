import type { Lesson } from "./types";

/**
 * Leçons des spécialités opérationnelles :
 * SAP (secours à personnes), INC (incendie), OD (opérations diverses),
 * RT/HAZMAT (risques technologiques), SDE (sauvetage & déblaiement).
 */
export const lessonsSpecialites: Lesson[] = [
  /* ------------------------------- SAP / PSE ------------------------------- */
  {
    id: "pse1-bilans",
    title: "PSE1 — Les bilans du secouriste",
    level: "niveau-1",
    category: "secourisme",
    duration: "12 min",
    summary: "Bilan circonstanciel, bilan d'urgence vitale, bilan complémentaire et surveillance.",
    blocks: [
      {
        type: "p",
        text: "Le bilan est la démarche méthodique qui permet d'identifier une détresse, d'engager les gestes de secours et de transmettre une demande de renfort adaptée.",
      },
      { type: "h", text: "Les quatre temps" },
      {
        type: "list",
        items: [
          "Bilan circonstanciel : sécurité, nature de l'intervention, nombre de victimes, moyens nécessaires.",
          "Bilan d'urgence vitale : conscience, ventilation, circulation, hémorragies.",
          "Bilan complémentaire : plaintes, antécédents, traitements, allergies, paramètres vitaux.",
          "Surveillance : réévaluation continue jusqu'au transfert à l'équipe médicale.",
        ],
      },
      { type: "h", text: "Paramètres à mesurer" },
      {
        type: "list",
        items: [
          "Fréquence respiratoire (adulte : 12 à 20 / min).",
          "Fréquence cardiaque (adulte : 60 à 100 / min).",
          "Pression artérielle, SpO2, glycémie capillaire si protocole.",
          "Température, coloration et chaleur cutanée, temps de recoloration.",
        ],
      },
      {
        type: "rule",
        text: "Toute détresse vitale identifiée interrompt le bilan : on agit immédiatement puis on transmet.",
      },
    ],
  },
  {
    id: "pse1-rcp-dae",
    title: "PSE1 — Arrêt cardiaque : RCP et DAE",
    level: "niveau-1",
    category: "secourisme",
    duration: "10 min",
    summary: "Chaîne de survie, réanimation cardio-pulmonaire en équipe et défibrillation.",
    blocks: [
      { type: "h", text: "Chaîne de survie" },
      {
        type: "list",
        items: [
          "Reconnaissance immédiate et alerte.",
          "RCP précoce de qualité.",
          "Défibrillation la plus rapide possible.",
          "Réanimation spécialisée et soins post-arrêt.",
        ],
      },
      { type: "h", text: "Technique adulte" },
      {
        type: "list",
        items: [
          "30 compressions / 2 insufflations, 100 à 120 compressions par minute.",
          "Dépression thoracique de 5 à 6 cm, relâchement complet.",
          "Relais du masseur toutes les 2 minutes.",
          "Insufflations au BAVU avec oxygène à 15 l/min.",
        ],
      },
      { type: "h", text: "Enfant et nourrisson" },
      {
        type: "list",
        items: [
          "5 insufflations initiales puis 15 compressions / 2 insufflations.",
          "Nourrisson : deux doigts ou deux pouces encerclants, dépression d'un tiers du thorax.",
        ],
      },
      {
        type: "rule",
        text: "Aucun contact avec la victime pendant l'analyse et le choc du DAE : on annonce « écartez-vous ».",
      },
    ],
  },
  {
    id: "pse1-hemorragies",
    title: "PSE1 — Hémorragies et garrot",
    level: "niveau-1",
    category: "secourisme",
    duration: "8 min",
    summary: "Compression directe, pansement compressif, garrot tactique et surveillance du choc.",
    blocks: [
      {
        type: "list",
        items: [
          "Compression manuelle directe immédiate, gantée.",
          "Relais par un pansement compressif maintenu.",
          "Garrot si compression inefficace, membre sectionné, victime multiple ou zone inaccessible.",
          "Garrot posé 5 cm au-dessus de la plaie, jamais sur une articulation.",
          "Noter l'heure de pose et la transmettre ; ne jamais desserrer.",
        ],
      },
      { type: "h", text: "Signes de choc hémorragique" },
      {
        type: "list",
        items: [
          "Pâleur, sueurs, marbrures, extrémités froides.",
          "Pouls rapide et filant, soif intense, agitation puis somnolence.",
        ],
      },
      { type: "rule", text: "Allonger la victime, protéger de l'hypothermie, oxygéner, alerter en urgence." },
    ],
  },
  {
    id: "pse2-immobilisations",
    title: "PSE2 — Relevage et immobilisations",
    level: "niveau-2",
    category: "secourisme",
    duration: "14 min",
    summary: "Collier cervical, plan dur, matelas immobilisateur, attelles et techniques de relevage.",
    blocks: [
      { type: "h", text: "Rachis" },
      {
        type: "list",
        items: [
          "Maintien tête en position neutre dès la suspicion de traumatisme du rachis.",
          "Collier cervical adapté à la taille, sans compression des voies aériennes.",
          "Transfert par pont néerlandais, cuillère ou retournement à trois équipiers.",
          "Immobilisation définitive sur matelas immobilisateur à dépression.",
        ],
      },
      { type: "h", text: "Membres" },
      {
        type: "list",
        items: [
          "Attelle immobilisant l'articulation sus et sous-jacente.",
          "Contrôle du pouls, de la chaleur et de la motricité avant et après pose.",
          "Membre déformé immobilisé dans la position trouvée.",
        ],
      },
      {
        type: "rule",
        text: "Tout mouvement se fait sur ordre unique du chef d'équipe, en commandement préalable annoncé.",
      },
    ],
  },
  {
    id: "pse2-detresses",
    title: "PSE2 — Détresses vitales et soins d'urgence",
    level: "niveau-2",
    category: "secourisme",
    duration: "13 min",
    summary: "Détresses neurologique, respiratoire et circulatoire : reconnaissance et conduite à tenir.",
    blocks: [
      { type: "h", text: "Détresse neurologique" },
      {
        type: "list",
        items: [
          "Convulsions : protéger, ne rien introduire en bouche, PLS après la crise.",
          "AVC : déficit brutal, asymétrie du visage, troubles de la parole — noter l'heure de début.",
          "Hypoglycémie : sucre par voie orale si la victime est consciente et déglutit.",
        ],
      },
      { type: "h", text: "Détresse respiratoire" },
      {
        type: "list",
        items: [
          "Position assise ou demi-assise, oxygénothérapie selon protocole.",
          "Crise d'asthme : aide à la prise du traitement personnel.",
          "Œdème, urticaire, hypotension : suspicion d'anaphylaxie, alerte médicale immédiate.",
        ],
      },
      { type: "h", text: "Détresse circulatoire" },
      {
        type: "list",
        items: [
          "Douleur thoracique : repos strict, aucune mobilisation inutile, DAE à proximité.",
          "Choc : allongement, réchauffement, surveillance rapprochée.",
        ],
      },
      { type: "rule", text: "Une détresse vitale impose un bilan transmis sans délai et une surveillance continue." },
    ],
  },
  {
    id: "sap-desincarceration",
    title: "SAP — Secours routier et désincarcération",
    level: "niveau-avance",
    category: "secourisme",
    duration: "15 min",
    summary: "Sécurisation, abord victime, techniques de création d'espace et extraction.",
    blocks: [
      { type: "h", text: "Marche générale" },
      {
        type: "list",
        items: [
          "Sécurisation, balisage, protection incendie par une lance en attente.",
          "Stabilisation du véhicule (cales, coussins), coupure de la batterie.",
          "Abord de la victime et maintien tête par un équipier dédié.",
          "Création d'espace : dépose de portière, de custode, de pavillon.",
          "Chemin de dégagement puis extraction sur plan dur ou attelle cervico-thoracique.",
        ],
      },
      { type: "h", text: "Cinétique de l'extraction" },
      {
        type: "list",
        items: [
          "Extraction d'urgence si détresse vitale ou danger imminent.",
          "Extraction programmée dans les autres cas, en coordination avec l'équipe médicale.",
        ],
      },
      {
        type: "rule",
        text: "Airbags non déclenchés, véhicules électriques et GPL : respecter les zones à risque et ne jamais couper un câble orange.",
      },
    ],
  },

  /* --------------------------------- INC --------------------------------- */
  {
    id: "inc-manoeuvres-extinction",
    title: "INC — Manœuvres d'extinction et établissements",
    level: "niveau-1",
    category: "incendie",
    duration: "12 min",
    summary: "Établissements de tuyaux, binôme d'attaque, techniques de jet et gestion de l'eau.",
    blocks: [
      { type: "h", text: "Établissements" },
      {
        type: "list",
        items: [
          "Alimentation en 70 mm depuis l'hydrant vers l'engin.",
          "Attaque en 45 mm, division alimentée puis lance progressée.",
          "Établissement en écheveaux, sur commande, ou par la cage d'escalier.",
          "Réserve de tuyau au pied de l'attaque pour la progression.",
        ],
      },
      { type: "h", text: "Techniques de jet" },
      {
        type: "list",
        items: [
          "Jet diffusé d'attaque pour le refroidissement des fumées (impulsions courtes).",
          "Jet diffusé de protection pour l'écran thermique.",
          "Jet droit pour l'attaque à distance et le foyer.",
        ],
      },
      {
        type: "rule",
        text: "Ouvrir et fermer la lance à l'eau contrôlée : l'excès d'eau produit de la vapeur et brûle le binôme.",
      },
    ],
  },
  {
    id: "inc-feux-urbanisme",
    title: "INC — Feux d'habitation et d'urbanisme",
    level: "niveau-2",
    category: "incendie",
    duration: "14 min",
    summary: "Lecture du feu, attaque en volume clos, propagation en façade et gaines techniques.",
    blocks: [
      { type: "h", text: "Lecture du feu" },
      {
        type: "list",
        items: [
          "Volume des fumées : quantité de combustible en cause.",
          "Vitesse : puissance du foyer et niveau de pression.",
          "Densité : opacité et charge en imbrûlés.",
          "Couleur : nature des matériaux et stade du feu.",
        ],
      },
      {
        type: "list",
        items: [
          "Signes d'un feu sous-ventilé : pulsations, fumées sous pression, sifflement.",
          "Signes annonciateurs d'embrasement : rollover, chaleur intense, fumées descendantes.",
        ],
      },
      { type: "h", text: "Conduite de l'attaque" },
      {
        type: "list",
        items: [
          "Reconnaissance de la porte (test main gantée, ouverture contrôlée).",
          "Refroidissement des fumées avant progression, porte maîtrisée par un équipier.",
          "Surveillance des propagations : gaines, faux plafonds, façades, combles.",
          "Déblai et dégarnissage pour extinction définitive, puis levée de doute thermique.",
        ],
      },
      {
        type: "rule",
        text: "Une reconnaissance des niveaux supérieurs est systématique : les fumées tuent avant les flammes.",
      },
    ],
  },
  {
    id: "inc-feux-foret",
    title: "INC — Feux de forêt et d'espaces naturels",
    level: "niveau-2",
    category: "incendie",
    duration: "13 min",
    summary: "Propagation, tactiques d'attaque, autoprotection et manœuvres de groupe.",
    blocks: [
      { type: "h", text: "Facteurs de propagation" },
      {
        type: "list",
        items: [
          "Vent : direction et vitesse, facteur dominant.",
          "Relief : la pente accélère la montée du front.",
          "Combustible : type, continuité, hygrométrie.",
        ],
      },
      { type: "h", text: "Vocabulaire et tactiques" },
      {
        type: "list",
        items: [
          "Tête, flancs, queue du feu ; sautes de feu en avant du front.",
          "Attaque directe sur les flancs vers la tête, attaque indirecte par pare-feu.",
          "Établissements courts, engin toujours orienté vers la sortie, moteur en marche.",
        ],
      },
      { type: "h", text: "Autoprotection" },
      {
        type: "list",
        items: [
          "Rester dans l'engin, vitres fermées, rideaux d'eau d'autoprotection activés.",
          "Zone de repli identifiée avant tout engagement, réserve d'eau préservée.",
        ],
      },
      { type: "rule", text: "Ne jamais s'engager dans une zone sans issue de repli reconnue." },
    ],
  },
  {
    id: "inc-ventilation",
    title: "INC — Techniques de ventilation opérationnelle",
    level: "niveau-avance",
    category: "incendie",
    duration: "12 min",
    summary: "Ventilation naturelle, mécanique, d'attaque et de désenfumage : principes et pièges.",
    blocks: [
      { type: "h", text: "Types de ventilation" },
      {
        type: "list",
        items: [
          "Naturelle : ouvertures créées, tirage thermique.",
          "Mécanique par surpression : ventilateur placé en entrant.",
          "Mécanique par dépression : extraction des fumées.",
        ],
      },
      { type: "h", text: "Conditions de mise en œuvre" },
      {
        type: "list",
        items: [
          "Un sortant créé, contrôlé et dimensionné avant toute mise en surpression.",
          "Localisation du foyer connue et binôme d'attaque en place.",
          "Coordination stricte entre le chef d'agrès, le porte-lance et l'équipier ventilation.",
          "Surveillance des propagations par les ouvertures créées.",
        ],
      },
      {
        type: "rule",
        text: "Ventiler sans sortant maîtrisé alimente le feu en air et met en danger le binôme engagé.",
      },
    ],
  },

  /* ---------------------------------- OD ---------------------------------- */
  {
    id: "od-inondations",
    title: "OD — Inondations et épuisements",
    level: "niveau-1",
    category: "operations",
    duration: "10 min",
    summary: "Pompage, épuisement de locaux, risques électriques et sauvetages en eaux vives.",
    blocks: [
      {
        type: "list",
        items: [
          "Couper l'électricité du local avant toute mise en œuvre.",
          "Choix de la motopompe ou de l'aspirateur à eau selon le volume et la hauteur.",
          "Crépine posée sur un support pour éviter le colmatage, refoulement vers un exutoire.",
          "Protection des biens en hauteur, information des occupants.",
        ],
      },
      { type: "h", text: "Risques" },
      {
        type: "list",
        items: [
          "Eaux polluées (hydrocarbures, eaux usées) : port des EPI, hygiène après intervention.",
          "Regards et fosses masqués par l'eau : progression sondée.",
          "30 cm d'eau courante suffisent à emporter une personne.",
        ],
      },
      { type: "rule", text: "Aucun engagement à pied ou en engin dans une eau courante non reconnue." },
    ],
  },
  {
    id: "od-hymenopteres",
    title: "OD — Destruction d'hyménoptères",
    level: "niveau-1",
    category: "operations",
    duration: "8 min",
    summary: "Identification, tenue de protection, procédés de destruction et risque anaphylactique.",
    blocks: [
      { type: "h", text: "Identification" },
      {
        type: "list",
        items: [
          "Guêpes et frelons : nids en cavité, sous toiture, agressifs à proximité.",
          "Frelon asiatique : nid volumineux en hauteur, périmètre de sécurité élargi.",
          "Abeilles : espèce protégée, faire appel à un apiculteur quand c'est possible.",
        ],
      },
      { type: "h", text: "Mise en œuvre" },
      {
        type: "list",
        items: [
          "Tenue de protection intégrale, gants et cagoule, contrôle de l'étanchéité.",
          "Intervention préférentiellement en fin de journée, activité réduite.",
          "Éloignement des tiers, fermeture des ouvrants, produit adapté puis obturation.",
          "Compte rendu et information sur la chute du nid.",
        ],
      },
      {
        type: "rule",
        text: "Toute réaction généralisée après piqûre (urticaire, gêne respiratoire) est une urgence vitale.",
      },
    ],
  },
  {
    id: "od-animaux-portes",
    title: "OD — Captures d'animaux et ouvertures de portes",
    level: "niveau-2",
    category: "operations",
    duration: "11 min",
    summary: "Techniques de capture, contention, et ouverture de porte du moins au plus destructif.",
    blocks: [
      { type: "h", text: "Animaux" },
      {
        type: "list",
        items: [
          "Évaluer l'espèce, l'état et le comportement avant tout contact.",
          "Matériel : lasso, cage, capture-perche, muselière, gants de contention.",
          "Grands animaux : sanglage, levage avec précaution, appui du vétérinaire.",
          "Animal sauvage ou dangereux : demander les services compétents.",
        ],
      },
      { type: "h", text: "Ouvertures de portes" },
      {
        type: "list",
        items: [
          "Vérifier l'accès par une autre voie (fenêtre, balcon, clé chez un voisin).",
          "Techniques non destructives : radiographie, ouverture par carte, crochetage si formé.",
          "Techniques destructives : cylindre arraché, coup de pied, écarteur, disqueuse.",
          "Réquisition ou demande du requérant tracée, remise en sécurité de la porte.",
        ],
      },
      {
        type: "rule",
        text: "En cas de levée de doute pour personne en détresse, l'urgence primait toujours sur la préservation du bien.",
      },
    ],
  },

  /* -------------------------------- RT / HAZMAT --------------------------- */
  {
    id: "rt-marche-generale",
    title: "RT — Matières dangereuses : marche générale",
    level: "niveau-2",
    category: "risques",
    duration: "14 min",
    summary: "Identification, zonage, protection et confinement lors d'une intervention MATDAN.",
    blocks: [
      { type: "h", text: "Identification" },
      {
        type: "list",
        items: [
          "Plaque orange : numéro ONU (matière) et code danger.",
          "Pictogrammes de danger, étiquetage, documents de transport.",
          "Renseignement auprès du conducteur, de l'exploitant, du CODIS et des cellules risques.",
        ],
      },
      { type: "h", text: "Zonage" },
      {
        type: "list",
        items: [
          "Zone d'exclusion : accès aux seuls intervenants en tenue adaptée.",
          "Zone contrôlée : soutien, sas de décontamination.",
          "Zone de soutien : PC, moyens en attente, public à l'écart.",
          "Approche par le vent dans le dos, en point haut, à distance de sécurité.",
        ],
      },
      { type: "h", text: "Actions" },
      {
        type: "list",
        items: [
          "Sauvetages et mise à l'abri, périmètre de sécurité.",
          "Lutte contre le sur-accident : suppression des sources d'ignition.",
          "Colmatage, obturation, rétention et récupération des écoulements.",
          "Décontamination des intervenants, des victimes et du matériel.",
        ],
      },
      {
        type: "rule",
        text: "Aucun engagement sans identification du produit et sans tenue de protection adaptée.",
      },
    ],
  },
  {
    id: "rt-nrbc",
    title: "RT — Risques chimique, radiologique et biologique",
    level: "niveau-avance",
    category: "risques",
    duration: "15 min",
    summary: "Spécificités NRBC, dosimétrie, décontamination et protection des intervenants.",
    blocks: [
      { type: "h", text: "Chimique" },
      {
        type: "list",
        items: [
          "Voies de contamination : inhalation, contact cutané, ingestion.",
          "Tenues : TLD étanche pour les toxiques, ARI systématique.",
          "Détection : explosimètre, détecteur multigaz, papiers réactifs.",
        ],
      },
      { type: "h", text: "Radiologique" },
      {
        type: "list",
        items: [
          "Trois protections : distance, écran, temps d'exposition.",
          "Dosimétrie individuelle opérationnelle portée et relevée.",
          "Différencier irradiation (exposition) et contamination (dépôt de matière).",
        ],
      },
      { type: "h", text: "Biologique" },
      {
        type: "list",
        items: [
          "Protection respiratoire et cutanée intégrale, aucun geste à mains nues.",
          "Conditionnement des déchets, traçabilité des intervenants exposés.",
        ],
      },
      {
        type: "rule",
        text: "Toute victime contaminée est décontaminée avant transport, sauf urgence vitale absolue avec confinement.",
      },
    ],
  },

  /* ---------------------------------- SDE --------------------------------- */
  {
    id: "sde-milieu-perilleux",
    title: "SDE — Sauvetage en milieu périlleux",
    level: "niveau-2",
    category: "sauvetage",
    duration: "12 min",
    summary: "LSPCC, amarrages, sauvetage par l'extérieur et travail sur corde.",
    blocks: [
      { type: "h", text: "LSPCC" },
      {
        type: "list",
        items: [
          "Corde de 30 m, harnais, triangle d'évacuation, mousquetons, poulie, anneaux.",
          "Trois manœuvres : sauvetage par l'extérieur, descente dans un plan incliné, protection contre les chutes.",
          "Amarrage principal et contre-amarrage sur point sûr et testé.",
          "Commandements clairs et confirmés entre le porteur et l'équipier.",
        ],
      },
      { type: "h", text: "Sécurité" },
      {
        type: "list",
        items: [
          "Contrôle croisé des EPI et des connexions avant tout engagement.",
          "Protection de la corde des arêtes vives.",
          "Matériel ayant subi une chute mis au rebut.",
          "Surveillance du syndrome du harnais : dégagement rapide de la victime suspendue.",
        ],
      },
      { type: "rule", text: "Jamais d'engagement en hauteur sans double sécurité et sans amarrage contrôlé." },
    ],
  },
  {
    id: "sde-structures-effondrees",
    title: "SDE — Structures effondrées et étaiement",
    level: "niveau-avance",
    category: "sauvetage",
    duration: "15 min",
    summary: "Reconnaissance des effondrements, recherche de victimes, étaiement et déblaiement.",
    blocks: [
      { type: "h", text: "Types d'effondrement" },
      {
        type: "list",
        items: [
          "En crêpe, en V, en A, en porte-à-faux, en tas de gravats.",
          "Chaque configuration crée des vides sanitaires où survivent les victimes.",
        ],
      },
      { type: "h", text: "Marche opérationnelle" },
      {
        type: "list",
        items: [
          "Sécurisation, coupure des énergies, évaluation de la stabilité.",
          "Recherche : appel-silence, cynotechnie, moyens d'écoute et caméras.",
          "Balisage et marquage des zones reconnues.",
          "Étaiement des structures avant tout engagement sous décombres.",
          "Percement, sciage et déblaiement progressif jusqu'à la victime.",
          "Dégagement médicalisé : risque de syndrome de compression des membres.",
        ],
      },
      {
        type: "rule",
        text: "Aucun travail sous une structure instable avant étaiement validé ; surveillance permanente par un guetteur.",
      },
    ],
  },
];
