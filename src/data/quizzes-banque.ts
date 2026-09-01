import type { Quiz } from "./types";

// Banque de QCM générée à partir des référentiels officiels
// (BSP 200.13 Questions/Réponses, Mémento DIV 1, Mémento Secours Routier).
export const quizzesBanque: Quiz[] = [
  {
    "id": "qcm-bsp-serie-1",
    "title": "BSP 200.13 — Établissements — Série 1",
    "level": "niveau-1",
    "category": "incendie",
    "questions": [
      {
        "question": "Que trouve-t-on en partant du point d'eau vers le point d'attaque?",
        "options": [
          "Liaison personnelle",
          "A partir de la seconde tubulure de la division de la ligne d'attaque (manoeuvre particulière)",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements",
          "La pression à l'injecteur doit être au minimum de 10 bars"
        ],
        "answer": 2,
        "explanation": "On trouve, en partant du point d'eau vers le point d'attaque, les établissements"
      },
      {
        "question": "Que permettent les établissements d'alimentation ?",
        "options": [
          "L'établissement d'alimentation permet d'alimenter la pompe de l'engin",
          "Distance entre l'installation",
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars",
          "ZDI (zone de déploiement initial) : elle sert à regrouper les moyens"
        ],
        "answer": 0,
        "explanation": "L'établissement d'alimentation permet d'alimenter la pompe de l'engin"
      },
      {
        "question": "L'alimentation de la pompe doit être réalisée à quel moment ?",
        "options": [
          "Diamètre de la conduite",
          "L'alimentation de la pompe doit être réalisée dès qu'une lance est établie (à l'exception de lances sur colonne humide)",
          "La division est alimentée établie par une équipe organique d'un engin-pompe",
          "La courroie d'amarre est fermée"
        ],
        "answer": 1,
        "explanation": "L'alimentation de la pompe doit être réalisée dès qu'une lance est établie (à l'exception de lances sur colonne humide)"
      },
      {
        "question": "Par qui est réalisée l'alimentation de pompe ?",
        "options": [
          "Ils sont réalisés par le conducteur et éventuellement aidé par un personnel (SDL, sous-officier adjoint, etc.) au moyen de tuyaux de 70 mm, 110 mm ...",
          "Hydraulique BI-PI et l'engin",
          "3e et 4e lances (eau ou mousse)",
          "fût, ajutage de 35 mm"
        ],
        "answer": 0,
        "explanation": "Ils sont réalisés par le conducteur et éventuellement aidé par un personnel (SDL, sous-officier adjoint, etc.) au moyen de tuyaux de 70 mm, 110 mm et aspiraux"
      },
      {
        "question": "Que permettent les établissements de manœuvre ?",
        "options": [
          "ZDI (zone de déploiement initial) : elle sert à regrouper les moyens",
          "A partir de la seconde tubulure de la division de la ligne d'attaque (manoeuvre particulière)",
          "Ils permettent d'utiliser un point d'eau hors de portée des dévidoirs mobiles",
          "Zone d'alimentation"
        ],
        "answer": 2,
        "explanation": "Ils permettent d'utiliser un point d'eau hors de portée des dévidoirs mobiles"
      },
      {
        "question": "Comment sont réalisés les établissements de manœuvre ?",
        "options": [
          "Liaison personnelle (hormis F)",
          "Basculer l'écheveau sur le flanc et ramener le demi-raccord qui se trouvait au sol sur le manchon pour l'attacher avec la courroie",
          "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 1 600 mètres",
          "Ils sont réalisés au moyen des tuyaux de 110 mm pliés en écheveau"
        ],
        "answer": 3,
        "explanation": "Ils sont réalisés au moyen des tuyaux de 110 mm pliés en écheveau"
      },
      {
        "question": "En règle générale comment se font les établissements de manœuvre ?",
        "options": [
          "En règle générale, ces établissements se font du point d'attaque au point d'eau",
          "La lance canon est obligatoirement alimentée par deux lignes de 110 mm",
          "matériels sur ordre",
          "Le diamètre d'une colonne de 100 mm (alimentée par 2 lignes de 70 mm) permet un débit de 2 000 l/min. au maximum"
        ],
        "answer": 0,
        "explanation": "En règle générale, ces établissements se font du point d'attaque au point d'eau"
      },
      {
        "question": "Par quoi sont réalisés les établissements d'attaque ?",
        "options": [
          "Le non respect de cette directive entraîne automatiquement la responsabilité de l'intéressé et/ou de son chef",
          "tuyaux de 110 mm dans le cas d'établissements de lance canon",
          "Le chef d'agrès du CA ou BA et le SdL prennent place sur les marchepieds, le 1er à gauche, le SdL à droite",
          "Le conducteur peut envoyer dans un premier temps, l'eau de la citerne puis, alimenter ensuite la pompe"
        ],
        "answer": 1,
        "explanation": "tuyaux de 110 mm dans le cas d'établissements de lance canon"
      },
      {
        "question": "Par quoi sont réalisés les établissements d'attaque ?",
        "options": [
          "2 cannes plongeuses",
          "C'est le lieu situé entre le point d'attaque et le point d'eau, où est déposé le matériel jugé nécessaire par le chef de garde",
          "L'établissement rapide d'une ligne de 70 mm en cas d'indisponibilité d'une colonne sèche ou humide",
          "la lance du dévidoir tournant"
        ],
        "answer": 3,
        "explanation": "la lance du dévidoir tournant"
      },
      {
        "question": "Par qui est donné le point d'eau et en fonction de quoi ?",
        "options": [
          "En cas de vent les haubans doivent absolument être fixés afin d'assurer une meilleure stabilité de la structure (consigne du constructeur)",
          "Par le chef d'agrès en fonction du sinistre, des capacités hydrauliques de l'engin et/ou de ses caractéristiques",
          "ZDI (zone de déploiement initial) : elle sert à regrouper les moyens",
          "Perte de charge dans les tuyaux de 70 mm : 1,8 bars"
        ],
        "answer": 1,
        "explanation": "Par le chef d'agrès en fonction du sinistre, des capacités hydrauliques de l'engin et/ou de ses caractéristiques"
      },
      {
        "question": "L'alimentation peut être réalisée par ?",
        "options": [
          "Il assure le dernier tronçon de la ligne, raccorde son tuyau à celui du servant et utilise éventuellement le tuyau laissé sur le trajet par le chef...",
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant",
          "Poteau d'incendie (PI)",
          "Zone d'alimentation"
        ],
        "answer": 2,
        "explanation": "Poteau d'incendie (PI)"
      },
      {
        "question": "L'alimentation peut être réalisée par ?",
        "options": [
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a...",
          "Les haubans ne sont pas fixés",
          "Bouche d'incendie (BI)",
          "Perte de charge dans les tuyaux de 70 mm : 0,45 bar pour 60 m"
        ],
        "answer": 2,
        "explanation": "Bouche d'incendie (BI)"
      },
      {
        "question": "Le mode d'alimentation de la pompe sur BI ou PI est subordonné à quel paramètre ?",
        "options": [
          "Liaison personnelle",
          "Bon de prise en charge provisoire de matériel",
          "Perte de charge dans les tuyaux de 70 mm : 0,45 bar pour 60 m",
          "Distance entre l'installation"
        ],
        "answer": 3,
        "explanation": "Distance entre l'installation"
      },
      {
        "question": "Le mode d'alimentation de la pompe sur BI ou PI est subordonné à quel paramètre ?",
        "options": [
          "L'éloignement de la zone émulseur ou l'impossibilité d'accès à cette dernière du CA ou BA impose l'alimentation de la MPVE par une MPT",
          "Hydraulique BI-PI et l'engin",
          "Il portera une attention toute particulière à celle-ci pour éviter qu'elle ne se déchausse et prive les deux engins de leur alimentation en eau",
          "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 1 600 mètres"
        ],
        "answer": 1,
        "explanation": "Hydraulique BI-PI et l'engin"
      },
      {
        "question": "Après s'être assuré de la présence du 1er PSE sur les lieux de l'intervention, que fait le chef d'agrès ?",
        "options": [
          "C'est le lieu situé entre le point d'attaque et le point d'eau, où est déposé le matériel jugé nécessaire par le chef de garde",
          "Zone de déploiement initial",
          "ZAT (zone d'attaque) : les lances y sont établies (lances canon et lances à main) ; cette zone peut-être divisée en secteurs d'attaque",
          "Le chef d'agrès se rend au point d'eau le plus approprié à la manoeuvre qu'il compte réaliser"
        ],
        "answer": 3,
        "explanation": "Le chef d'agrès se rend au point d'eau le plus approprié à la manoeuvre qu'il compte réaliser"
      },
      {
        "question": "En cas d'utilisation d'une retenue sur BI, que fait le conducteur du 2e engin ?",
        "options": [
          "Ils établissent les tuyaux de 45 mm des raccords d'injection vers la MPVE (1 tuyau directement raccordé sur la MPVE avant la division 50x2x50)",
          "Etablissement au moyen du dévidoir",
          "Il portera une attention toute particulière à celle-ci pour éviter qu'elle ne se déchausse et prive les deux engins de leur alimentation en eau",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'eau et de l'air"
        ],
        "answer": 2,
        "explanation": "Il portera une attention toute particulière à celle-ci pour éviter qu'elle ne se déchausse et prive les deux engins de leur alimentation en eau"
      },
      {
        "question": "Comment peuvent s'effectuer les manœuvres d'établissement d'attaque ?",
        "options": [
          "Ce dispositif permet l'alimentation en solution moussante de 1 à 4 lances 250 l/min., et/ou 1 à 2 lances 500 l/min., et/ou 1 à 2 lances 1 000 l/min",
          "La MPVE peut être mise en aspiration ou alimentée par la citerne d'un engin-pompe dont le moteur doit obligatoirement être à l'arrêt",
          "Zone d'alimentation",
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant"
        ],
        "answer": 3,
        "explanation": "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant"
      },
      {
        "question": "Quel potentiel hydraulique doit assurer le conducteur ?",
        "options": [
          "Ils sont réalisés au moyen des tuyaux de 110 mm pliés en écheveau",
          "L'éloignement de la zone émulseur ou l'impossibilité d'accès à cette dernière du CA ou BA impose l'alimentation de la MPVE par une MPT",
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars pour 40 m",
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance"
        ],
        "answer": 3,
        "explanation": "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance"
      },
      {
        "question": "Comment doit être le débit de la lance lors d'une phase d'attaque ?",
        "options": [
          "Lors de l'établissement de lignes de 110 mm le personnel place, si nécessaire, des dispositifs de franchissement de tuyaux",
          "Lance du dévidoir tournant (LDT)",
          "Lors de la phase d'extinction, le débit des lances doit être adapté",
          "2 clés tricoises de 100 mm CA ou BA"
        ],
        "answer": 2,
        "explanation": "Lors de la phase d'extinction, le débit des lances doit être adapté"
      },
      {
        "question": "Qu'est-il obligatoire lors d'une attaque pour assurer sa sécurité ?",
        "options": [
          "A partir de la seconde tubulure de la division de la ligne d'attaque (manoeuvre particulière)",
          "Les 1re et 2e équipes participent à l'établissement de la lance canon eau/mousse (FA-CA)",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'air et de l'eau",
          "Au cours de l'attaque, le port complet des EPI est obligatoire"
        ],
        "answer": 3,
        "explanation": "Au cours de l'attaque, le port complet des EPI est obligatoire"
      }
    ]
  },
  {
    "id": "qcm-bsp-serie-2",
    "title": "BSP 200.13 — Établissements — Série 2",
    "level": "niveau-2",
    "category": "incendie",
    "questions": [
      {
        "question": "Le nom respect du port complet des EPI entraîne automatiquement la responsabilité de qui ?",
        "options": [
          "Le non respect de cette directive entraîne automatiquement la responsabilité de l'intéressé et/ou de son chef",
          "Les haubans ne sont pas fixés",
          "Bon de prise en charge provisoire de matériel",
          "Le débit maximal dans un établissement de diamètre 22 mm est de 150 l/min"
        ],
        "answer": 0,
        "explanation": "Le non respect de cette directive entraîne automatiquement la responsabilité de l'intéressé et/ou de son chef"
      },
      {
        "question": "Quelles sont les deux types de commandement que peut donner un chef d'agrès lors d'une manœuvre ?",
        "options": [
          "Le chef d'agrès du CA ou BA et le SdL prennent place sur les marchepieds, le 1er à gauche, le SdL à droite",
          "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon",
          "Un commandement initial",
          "Les 2 brins de la courroie d'amarre sont passés autour du fût et de la poignée de la lance"
        ],
        "answer": 2,
        "explanation": "Un commandement initial"
      },
      {
        "question": "Quelles sont les deux types de commandement que peut donner un chef d'agrès lors d'une manœuvre ?",
        "options": [
          "Un commandement d'exécution",
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance",
          "Il se place au point d'attaque indiqué par le chef d'agrès",
          "Liaison personnelle"
        ],
        "answer": 0,
        "explanation": "Un commandement d'exécution"
      },
      {
        "question": "Qu'indique le commandement initial ?",
        "options": [
          "Il se place au point d'attaque indiqué par le chef d'agrès",
          "Lorsque les établissements de manoeuvre sont réalisés, le CA ou BA regagne la zone émulseur",
          "Ils sont réalisés par le conducteur et éventuellement aidé par un personnel (SDL, sous-officier adjoint, etc.) au moyen de tuyaux de 70 mm, 110 mm ...",
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun"
        ],
        "answer": 3,
        "explanation": "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun"
      },
      {
        "question": "Quels établissements peuvent effectuer la première équipe ?",
        "options": [
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a...",
          "L'établissement d'alimentation permet d'alimenter la pompe de l'engin",
          "1re et 2e lance (eau ou mousse)",
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité"
        ],
        "answer": 2,
        "explanation": "1re et 2e lance (eau ou mousse)"
      },
      {
        "question": "Quels établissements peuvent effectuer la première équipe ?",
        "options": [
          "Lance du dévidoir tournant (LDT)",
          "2 clés tricoises de 100 mm CA ou BA",
          "Au SdL il désigne l'orifice de refoulement du poteau et l'orifice d'alimentation de la colonne sèche",
          "fût, ajutage de 35 mm"
        ],
        "answer": 0,
        "explanation": "Lance du dévidoir tournant (LDT)"
      },
      {
        "question": "Quels établissements peuvent effectuer la deuxième équipe ?",
        "options": [
          "En cas de vent les haubans doivent absolument être fixés afin d'assurer une meilleure stabilité de la structure (consigne du constructeur)",
          "La lance canon est obligatoirement alimentée par deux lignes de 110 mm",
          "La MPVE peut être mise en aspiration ou alimentée par la citerne d'un engin-pompe dont le moteur doit obligatoirement être à l'arrêt",
          "3e et 4e lances (eau ou mousse)"
        ],
        "answer": 3,
        "explanation": "3e et 4e lances (eau ou mousse)"
      },
      {
        "question": "Quels établissements peuvent effectuer la deuxième équipe ?",
        "options": [
          "Un commandement d'exécution",
          "Dans le cas du FA le SOA et le SDL renforcent les équipes au maintien des lances",
          "La lance du dévidoir tournant peut être prolongée par des tuyaux de 45 mm",
          "Cas particuliers (équipe à 3)"
        ],
        "answer": 3,
        "explanation": "Cas particuliers (équipe à 3)"
      },
      {
        "question": "Quels établissements effectuent ensemble la première et la deuxième équipe ?",
        "options": [
          "la fonction de porte-lance incombe au chef d'agrès, celle de servant à l'échelier",
          "Les 1re et 2e équipes participent à l'établissement de la lance canon eau/mousse (FA-CA)",
          "Diamètre de la conduite",
          "De porter la puissance hydraulique à 1 000 l/min. par l'établissement d'une division50/2x 50"
        ],
        "answer": 1,
        "explanation": "Les 1re et 2e équipes participent à l'établissement de la lance canon eau/mousse (FA-CA)"
      },
      {
        "question": "Matériel de base à emporter par le chef d'agrès ?",
        "options": [
          "Relais (engin, motopompe, VEDI…)",
          "Liaison personnelle (hormis F)",
          "Un commandement d'exécution",
          "Il peut exister pour une même intervention plusieurs ZAL, ZE ou ZAT"
        ],
        "answer": 1,
        "explanation": "Liaison personnelle (hormis F)"
      },
      {
        "question": "Matériel de base à emporter par le chef d'agrès ?",
        "options": [
          "Un commandement initial",
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars",
          "Outil de forcement et de déblai",
          "Les raccords d'injection sont montés sur les lignes de 110 mm"
        ],
        "answer": 2,
        "explanation": "Outil de forcement et de déblai"
      },
      {
        "question": "Matériel de base à emporter par l'homme de liaison?",
        "options": [
          "2 raccords d'injection",
          "Liaison personnelle",
          "La pompe doit absolument être alimentée avant d'autoriser l'établissement d'une seconde lance sur la \"LA\"",
          "matériels sur ordre"
        ],
        "answer": 1,
        "explanation": "Liaison personnelle"
      },
      {
        "question": "Matériel de base à emporter par l'homme de liaison?",
        "options": [
          "Etablissement au moyen du dévidoir",
          "Lance du dévidoir tournant (LDT)",
          "3e et 4e lances (eau ou mousse)",
          "TGR+sacoche SDL+Lampe portative"
        ],
        "answer": 3,
        "explanation": "TGR+sacoche SDL+Lampe portative"
      },
      {
        "question": "Matériel de base à emporter par le chef?",
        "options": [
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance",
          "Liaison personnelle",
          "Dans le cas du FA le SOA et le SDL renforcent les équipes au maintien des lances",
          "L'équipe et le chef d'agrès se rendent au niveau du feu"
        ],
        "answer": 1,
        "explanation": "Liaison personnelle"
      },
      {
        "question": "Matériel de base à emporter par le servant?",
        "options": [
          "avant tout engagement, il remettra la clé, avec la plaque patronymique accrochée, au responsable du TGR",
          "Les lances 1 000 l/min. sont manoeuvrées efficacement par 3 hommes",
          "Liaison personnelle",
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a..."
        ],
        "answer": 2,
        "explanation": "Liaison personnelle"
      },
      {
        "question": "A quel moment la clé du détecteur d'immobilité est-elle retirée ?",
        "options": [
          "Le SOA commande \" EN AVANT! \". Le conducteur démarre en direction du point d'eau à la vitesse d'un homme au pas derrière le FA",
          "TGR+sacoche SDL+Lampe portative",
          "la clé sera systématiquement retirée du détecteur dés la descente de l'engin",
          "En règle générale, ces établissements se font du point d'attaque au point d'eau"
        ],
        "answer": 2,
        "explanation": "la clé sera systématiquement retirée du détecteur dés la descente de l'engin"
      },
      {
        "question": "Avant tout engagement le porteur de l'ARI doit remettre quoi au responsable du TGR ?",
        "options": [
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars",
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité",
          "avant tout engagement, il remettra la clé, avec la plaque patronymique accrochée, au responsable du TGR",
          "Etablir une ligne de 110 mm de longueur maximale de 400 m, permet de disposer d'un point d'eau avancé (division 100 / 3 x 50)"
        ],
        "answer": 2,
        "explanation": "avant tout engagement, il remettra la clé, avec la plaque patronymique accrochée, au responsable du TGR"
      },
      {
        "question": "Que doit contenir la sacoche de l'homme de liaison ?",
        "options": [
          "Le SOA confirme le commandement \" ETABLISSEZ ! \" du chef d'agrès",
          "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 800 mètres",
          "Bon de prise en charge provisoire de matériel",
          "Le chef de garde ou de détachement détermine l'emplacement du PMP et son contenu en fonction de la manoeuvre qu'il compte entreprendre ou de la mis..."
        ],
        "answer": 2,
        "explanation": "Bon de prise en charge provisoire de matériel"
      },
      {
        "question": "Que doit contenir la sacoche de l'homme de liaison ?",
        "options": [
          "L'établissement d'une division au plus près du sinistre",
          "2 clés tricoises de 100 mm CA ou BA",
          "Il pose la division à l'endroit indiqué par le chef d'agrès, dévide son tuyau jusqu'au sapeur de liaison et remonte doubler le chef d'équipe au poi...",
          "Avis de passage des sapeurs pompiers"
        ],
        "answer": 3,
        "explanation": "Avis de passage des sapeurs pompiers"
      },
      {
        "question": "Que permettent les établissements de la ligne d'attaque ?",
        "options": [
          "Etablir une ligne de 110 mm de longueur maximale de 400 m, permet de disposer d'un point d'eau avancé (division 100 / 3 x 50)",
          "La coupure de l'alimentation à la division pour remplacer ou prolonger l'établissement",
          "L'établissement d'une division au plus près du sinistre",
          "Lors de l'établissement de lignes de 110 mm le personnel place, si nécessaire, des dispositifs de franchissement de tuyaux"
        ],
        "answer": 2,
        "explanation": "L'établissement d'une division au plus près du sinistre"
      }
    ]
  },
  {
    "id": "qcm-bsp-serie-3",
    "title": "BSP 200.13 — Établissements — Série 3",
    "level": "niveau-avance",
    "category": "incendie",
    "questions": [
      {
        "question": "Que permettent les établissements de la ligne d'attaque ?",
        "options": [
          "L'établissement rapide d'une seconde lance sur la division",
          "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon",
          "tuyaux de 110 mm dans le cas d'établissements de lance canon",
          "Etablissement au moyen de la L.A (Cf. manoeuvre de la ligne d'attaque)"
        ],
        "answer": 0,
        "explanation": "L'établissement rapide d'une seconde lance sur la division"
      },
      {
        "question": "Composition de la ligne d'attaque ?",
        "options": [
          "La pression en sortie de pompe doit être de 8,75 bars, soit 9 bars pour un établissement de plain-pied",
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars",
          "5 manchons souples, de taille variable, permettent de maintenir en place les tuyaux et de les guider au cours de l'établissement",
          "Les haubans ne sont pas fixés"
        ],
        "answer": 2,
        "explanation": "5 manchons souples, de taille variable, permettent de maintenir en place les tuyaux et de les guider au cours de l'établissement"
      },
      {
        "question": "Composition de la ligne d'attaque ?",
        "options": [
          "3 tuyaux de 70 x 20 m pliés en écheveau (dont un équipé d'une division)",
          "Etablissement au moyen de la L.A (Cf. manoeuvre de la ligne d'attaque)",
          "Le chef→ 2 tuyaux de 45 x 20 m dont 1 muni d'une lance",
          "L'établissement rapide d'une seconde lance sur la division"
        ],
        "answer": 0,
        "explanation": "3 tuyaux de 70 x 20 m pliés en écheveau (dont un équipé d'une division)"
      },
      {
        "question": "Quelle est l'attribution du matériel et des missions du chef d'agrès?",
        "options": [
          "lance canon, tromblon et accessoires",
          "2 clés tricoises de 100 mm CA ou BA",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements",
          "Il dépose son 70 x 20 m où il le juge nécessaire"
        ],
        "answer": 3,
        "explanation": "Il dépose son 70 x 20 m où il le juge nécessaire"
      },
      {
        "question": "Quelle est l'attribution du matériel et des missions du chef ?",
        "options": [
          "Branchent les raccords d'injection sur les lignes de 110 mm à égale distance de l'engin",
          "Le chef→ 2 tuyaux de 45 x 20 m dont 1 muni d'une lance",
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance",
          "Ils sont destinés à l'alimentation d'une lance canon mousse d'un débit de 2 000 l/min"
        ],
        "answer": 1,
        "explanation": "Le chef→ 2 tuyaux de 45 x 20 m dont 1 muni d'une lance"
      },
      {
        "question": "Quelle est l'attribution du matériel et des missions du chef ?",
        "options": [
          "Il se place au point d'attaque indiqué par le chef d'agrès",
          "Bons de mouvement ST 30 bis",
          "Les lances 1 000 l/min. sont manoeuvrées efficacement par 3 hommes",
          "La division est alimentée établie par une équipe organique d'un engin-pompe"
        ],
        "answer": 0,
        "explanation": "Il se place au point d'attaque indiqué par le chef d'agrès"
      },
      {
        "question": "Quelle est l'attribution du matériel et des missions du servant?",
        "options": [
          "Le servant→ 1 tuyau de 70 x 20 m avec division",
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance",
          "Le conducteur échelier peut reprendre les commandes en prioritaire et dégager le panier afin de le mettre en sécurité",
          "Le débit maximal dans un établissement de diamètre 22 mm est de 150 l/min"
        ],
        "answer": 0,
        "explanation": "Le servant→ 1 tuyau de 70 x 20 m avec division"
      },
      {
        "question": "Quelle est l'attribution du matériel et des missions du servant?",
        "options": [
          "Liaison personnelle",
          "tuyaux de 110 mm dans le cas d'établissements de lance canon",
          "ZE (zone émulseur) : les moyens émulseurs (CA/BA, BEM, citernes des pétroliers) y sont regroupés et employés",
          "Il pose la division à l'endroit indiqué par le chef d'agrès, dévide son tuyau jusqu'au sapeur de liaison et remonte doubler le chef d'équipe au poi..."
        ],
        "answer": 3,
        "explanation": "Il pose la division à l'endroit indiqué par le chef d'agrès, dévide son tuyau jusqu'au sapeur de liaison et remonte doubler le chef d'équipe au point d'attaque"
      },
      {
        "question": "Quelle est l'attribution du matériel et des missions du SDL?",
        "options": [
          "ZAT (zone d'attaque) : les lances y sont établies (lances canon et lances à main) ; cette zone peut-être divisée en secteurs d'attaque",
          "Il assure le dernier tronçon de la ligne, raccorde son tuyau à celui du servant et utilise éventuellement le tuyau laissé sur le trajet par le chef...",
          "2 clés tricoises de 100 mm CA ou BA",
          "Etablissement au moyen du dévidoir"
        ],
        "answer": 1,
        "explanation": "Il assure le dernier tronçon de la ligne, raccorde son tuyau à celui du servant et utilise éventuellement le tuyau laissé sur le trajet par le chef d'agrès"
      },
      {
        "question": "Expliquer le pliage des tuyaux 70 x 20 m ?",
        "options": [
          "Ils sont réalisés par le conducteur et éventuellement aidé par un personnel (SDL, sous-officier adjoint, etc.) au moyen de tuyaux de 70 mm, 110 mm ...",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'air et de l'eau",
          "Avec l'appui d'autres équipes un \"PMP MOUSSE\" permet d'alimenter de 1 à 8 lances 250 l/min., et/ou 1 à 4 lances 250 l/min., et/ou 1 à 2 lances 1 00...",
          "Ils sont réalisés au moyen des tuyaux de 110 mm pliés en écheveau"
        ],
        "answer": 1,
        "explanation": "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'air et de l'eau"
      },
      {
        "question": "Expliquer le pliage des tuyaux 70 x 20 m ?",
        "options": [
          "De diminuer les pertes de charges et les \"coups de bélier\"",
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre",
          "L'établissement d'une division au plus près du sinistre",
          "La division est alimentée établie par une équipe organique d'un engin-pompe"
        ],
        "answer": 1,
        "explanation": "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre"
      },
      {
        "question": "Expliquer le pliage des tuyaux 45 x 20 m ?",
        "options": [
          "Basculer l'écheveau sur le flanc et ramener le demi-raccord qui se trouvait au sol sur le manchon pour l'attacher avec la courroie",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'eau et de l'air",
          "Le chef de garde ou de détachement détermine l'emplacement du PMP et son contenu en fonction de la manoeuvre qu'il compte entreprendre ou de la mis...",
          "Il pose la division à l'endroit indiqué par le chef d'agrès, dévide son tuyau jusqu'au sapeur de liaison et remonte doubler le chef d'équipe au poi..."
        ],
        "answer": 1,
        "explanation": "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'eau et de l'air"
      },
      {
        "question": "Expliquer le pliage des tuyaux 45 x 20 m ?",
        "options": [
          "Les 1re et 2e équipes participent à l'établissement de la lance canon eau/mousse (FA-CA)",
          "Hydraulique BI-PI et l'engin",
          "Il faut penser à rajouter 1 bar de pression pour 10 m de dénivelée positive à la pression en sortie de pompe",
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre"
        ],
        "answer": 3,
        "explanation": "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre"
      },
      {
        "question": "A partir de quel moment l'emport des tuyaux de 70/20M de la ligne d'attaque ne sont pas tous pris?",
        "options": [
          "L'emport de l'ensemble des tuyaux de 70 x 20 m de la ligne d'attaque reste à la diligence du chef d'agrès à partir du moment où celui-ci intervient...",
          "Le chef de garde ou de détachement détermine l'emplacement du PMP et son contenu en fonction de la manoeuvre qu'il compte entreprendre ou de la mis...",
          "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 800 mètres",
          "Les 1re et 2e équipes participent à l'établissement de la lance canon eau/mousse (FA-CA)"
        ],
        "answer": 0,
        "explanation": "L'emport de l'ensemble des tuyaux de 70 x 20 m de la ligne d'attaque reste à la diligence du chef d'agrès à partir du moment où celui-ci intervient en 2e engin-pompe"
      },
      {
        "question": "Que fait le sapeur de liaison en se rendant au point d'attaque sur une colonne sèche hors IGH ?",
        "options": [
          "Gêne à la progression des engins d'incendie",
          "La MPVE (Motopompe Volumétrique Emulseur)",
          "Le sapeur de liaison vérifie la fermeture des orifices de refoulement de la colonne sèche en se rendant au point d'attaque",
          "la fonction de porte-lance incombe au chef d'agrès, celle de servant à l'échelier"
        ],
        "answer": 2,
        "explanation": "Le sapeur de liaison vérifie la fermeture des orifices de refoulement de la colonne sèche en se rendant au point d'attaque"
      },
      {
        "question": "Que permet le diamètre d'une colonne sèche de 65mm ?",
        "options": [
          "Etablissement au moyen du dévidoir",
          "Le diamètre d'une colonne sèche de 65 mm permet un débit de 1 000 l/min. maxi",
          "2 cannes plongeuses",
          "Liaison personnelle"
        ],
        "answer": 1,
        "explanation": "Le diamètre d'une colonne sèche de 65 mm permet un débit de 1 000 l/min. maxi"
      },
      {
        "question": "Que permet le diamètre d'une colonne sèche de 100mm ?",
        "options": [
          "La MPVE peut être mise en aspiration ou alimentée par la citerne d'un engin-pompe dont le moteur doit obligatoirement être à l'arrêt",
          "Etablir une ligne de 110 mm de longueur maximale de 400 m, permet de disposer d'un point d'eau avancé (division 100 / 3 x 50)",
          "La lance doit être utilisée en jet droit avec un débit maximum et une ouverture maximale",
          "Le diamètre d'une colonne de 100 mm (alimentée par 2 lignes de 70 mm) permet un débit de 2 000 l/min. au maximum"
        ],
        "answer": 3,
        "explanation": "Le diamètre d'une colonne de 100 mm (alimentée par 2 lignes de 70 mm) permet un débit de 2 000 l/min. au maximum"
      },
      {
        "question": "Où se rendent le chef d'agrès et l'équipe liaison lors de l'établissement d'une lance sur une colonne sèche hors IGH ?",
        "options": [
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre",
          "Fin d'intervention RATP -SNCF",
          "L'équipe et le chef d'agrès se rendent au niveau du feu",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'air et de l'eau"
        ],
        "answer": 2,
        "explanation": "L'équipe et le chef d'agrès se rendent au niveau du feu"
      },
      {
        "question": "Que désigne le chef d'agrès au conducteur lors d'un établissement de lance sur colonne sèche par poteau relais ?",
        "options": [
          "Débit de l'installation",
          "La lance canon est obligatoirement alimentée par deux lignes de 110 mm",
          "tuyaux de 110 mm dans le cas d'établissements de lance canon",
          "Le chef d'agrès désigne au conducteur l'orifice d'alimentation du poteau relais"
        ],
        "answer": 3,
        "explanation": "Le chef d'agrès désigne au conducteur l'orifice d'alimentation du poteau relais"
      },
      {
        "question": "Que désigne le chef d'agrès au SDL lors d'un établissement de lance sur colonne sèche par poteau relais ?",
        "options": [
          "Il n'y a plus de crochet d'amarre sur la structure mais seulement dans le panier",
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre",
          "Anticiper une évolution défavorable du sinistre qui pourrait se traduire par une détérioration voire une perte de ces matériels",
          "Au SdL il désigne l'orifice de refoulement du poteau et l'orifice d'alimentation de la colonne sèche"
        ],
        "answer": 3,
        "explanation": "Au SdL il désigne l'orifice de refoulement du poteau et l'orifice d'alimentation de la colonne sèche"
      }
    ]
  },
  {
    "id": "qcm-bsp-serie-4",
    "title": "BSP 200.13 — Établissements — Série 4",
    "level": "niveau-1",
    "category": "incendie",
    "questions": [
      {
        "question": "De combien doit être la pression à l'injecteur ?",
        "options": [
          "La lance canon est obligatoirement alimentée par deux lignes de 110 mm",
          "La ligne de 110 mm peut être établie du point d'eau vers le point d'attaque dans certaines circonstances",
          "La pression à l'injecteur doit être au minimum de 10 bars",
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité"
        ],
        "answer": 2,
        "explanation": "La pression à l'injecteur doit être au minimum de 10 bars"
      },
      {
        "question": "Comment doit être utilisé une lance à mousse ?",
        "options": [
          "La lance du dévidoir tournant peut être prolongée par des tuyaux de 45 mm",
          "Les 2 brins de la courroie d'amarre sont passés autour du fût et de la poignée de la lance",
          "3e et 4e lances (eau ou mousse)",
          "La lance doit être utilisée en jet droit avec un débit maximum et une ouverture maximale"
        ],
        "answer": 3,
        "explanation": "La lance doit être utilisée en jet droit avec un débit maximum et une ouverture maximale"
      },
      {
        "question": "De combien est votre autonomie avec un bidon de 20l d'émulseur ?",
        "options": [
          "Une échelle à coulisses peut être utilisée pour procéder à l'attaque de l'extérieur (ouverture située au 1er ou 2e étage d'un bâtiment, etc.)",
          "Il pose la division à l'endroit indiqué par le chef d'agrès, dévide son tuyau jusqu'au sapeur de liaison et remonte doubler le chef d'équipe au poi...",
          "Avec un bidon de 20 l d'émulseur, vous aurez une autonomie de 1 min. 20 s environ avec une seule lance",
          "L'éloignement de la zone émulseur ou l'impossibilité d'accès à cette dernière du CA ou BA impose l'alimentation de la MPVE par une MPT"
        ],
        "answer": 2,
        "explanation": "Avec un bidon de 20 l d'émulseur, vous aurez une autonomie de 1 min. 20 s environ avec une seule lance"
      },
      {
        "question": "Par quoi est réalisé l'établissement de la ligne d'attaque ?",
        "options": [
          "L'établissement de la ligne d'attaque (LA) est réalisé avec 3 tuyaux de 70 x 20 m (60 m) et 2 tuyaux de 45 x 20 m (40 m), soit une longueur de 100 m",
          "Liaison personnelle",
          "3e et 4e lances (eau ou mousse)",
          "Ils sont destinés à l'alimentation d'une lance canon mousse d'un débit de 2 000 l/min"
        ],
        "answer": 0,
        "explanation": "L'établissement de la ligne d'attaque (LA) est réalisé avec 3 tuyaux de 70 x 20 m (60 m) et 2 tuyaux de 45 x 20 m (40 m), soit une longueur de 100 m"
      },
      {
        "question": "Quelle est la pression que doit avoir la lance?",
        "options": [
          "Pression à la lance : 6 bars (lance non autorégulée)",
          "3 tuyaux de 70 x 20 m pliés en écheveau (dont un équipé d'une division)",
          "Il s'agit d'établissement par l'extérieur ou dans une cage d'escalier comportant un jour",
          "Outil de forcement et de déblai"
        ],
        "answer": 0,
        "explanation": "Pression à la lance : 6 bars (lance non autorégulée)"
      },
      {
        "question": "Quelle est la perte de charge dans les tuyaux de 70 mm ?",
        "options": [
          "avant tout engagement, il remettra la clé, avec la plaque patronymique accrochée, au responsable du TGR",
          "Perte de charge dans les tuyaux de 70 mm : 0,45 bar pour 60 m",
          "Il dépose son 70 x 20 m où il le juge nécessaire",
          "Ils établissent les tuyaux de 45 mm des raccords d'injection vers la MPVE (1 tuyau directement raccordé sur la MPVE avant la division 50x2x50)"
        ],
        "answer": 1,
        "explanation": "Perte de charge dans les tuyaux de 70 mm : 0,45 bar pour 60 m"
      },
      {
        "question": "Quelle est la perte de charge dans les tuyaux de 45 mm ?",
        "options": [
          "Pression à la lance : 6 bars (lance non autorégulée)",
          "La lance est placée au niveau du ceinturon, le tuyau passe sur l'épaule",
          "Le choix de l'hydrant sera fonction du débit et du diamètre de la canalisation d'alimentation",
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars pour 40 m"
        ],
        "answer": 3,
        "explanation": "Perte de charge dans les tuyaux de 45 mm : 2,3 bars pour 40 m"
      },
      {
        "question": "De combien doit être la pression à la sortie de la pompe ?",
        "options": [
          "La pression en sortie de pompe doit être de 8,75 bars, soit 9 bars pour un établissement de plain-pied",
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars",
          "Au cours de l'attaque, le port complet des EPI est obligatoire",
          "Au SdL il désigne l'orifice de refoulement du poteau et l'orifice d'alimentation de la colonne sèche"
        ],
        "answer": 0,
        "explanation": "La pression en sortie de pompe doit être de 8,75 bars, soit 9 bars pour un établissement de plain-pied"
      },
      {
        "question": "Que faut-il penser à rajouter comme pression en sortie de pompe tous les 10m dans un dénivelé positif ?",
        "options": [
          "la fonction de porte-lance incombe au chef d'agrès, celle de servant à l'échelier",
          "Ils permettent d'utiliser un point d'eau hors de portée des dévidoirs mobiles",
          "Il faut penser à rajouter 1 bar de pression pour 10 m de dénivelée positive à la pression en sortie de pompe",
          "A partir de la seconde tubulure de la division de la ligne d'attaque"
        ],
        "answer": 2,
        "explanation": "Il faut penser à rajouter 1 bar de pression pour 10 m de dénivelée positive à la pression en sortie de pompe"
      },
      {
        "question": "Quelle sera la pression aux lances lors d'un établissement d'une seconde lance?",
        "options": [
          "Pression aux lances : 6 bars (lance non autorégulée)",
          "1re et 2e lance (eau ou mousse)",
          "Le choix de l'hydrant sera fonction du débit et du diamètre de la canalisation d'alimentation",
          "Débit de l'installation"
        ],
        "answer": 0,
        "explanation": "Pression aux lances : 6 bars (lance non autorégulée)"
      },
      {
        "question": "Quelle sera la perte de charge dans les tuyaux de 70/mm lors d'un établissement d'une seconde lance?",
        "options": [
          "Poteau d'incendie (PI)",
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a...",
          "Perte de charge dans les tuyaux de 70 mm : 1,8 bars",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'eau et de l'air"
        ],
        "answer": 2,
        "explanation": "Perte de charge dans les tuyaux de 70 mm : 1,8 bars"
      },
      {
        "question": "Quelle sera la perte de charge dans les tuyaux de 70/mm lors d'un établissement d'une seconde lance?",
        "options": [
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité",
          "L'utilisation d'émulseur est toujours suivie d'un abondant rinçage",
          "Le porte-lance monte à l'échelle",
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars"
        ],
        "answer": 3,
        "explanation": "Perte de charge dans les tuyaux de 45 mm : 2,3 bars"
      },
      {
        "question": "De combien est la capacité de la citerne d'un PST ?",
        "options": [
          "Lors de la phase d'extinction, le débit des lances doit être adapté",
          "Capacité de la citerne ≥3 000 litres",
          "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon",
          "La lance doit être utilisée en jet droit avec un débit maximum et une ouverture maximale"
        ],
        "answer": 1,
        "explanation": "Capacité de la citerne ≥3 000 litres"
      },
      {
        "question": "Que peut faire un conducteur avant d'alimenter son PST ?",
        "options": [
          "Le chef d'agrès se rend au point d'eau le plus approprié à la manoeuvre qu'il compte réaliser",
          "Le conducteur peut envoyer dans un premier temps, l'eau de la citerne puis, alimenter ensuite la pompe",
          "Basculer l'écheveau sur le flanc et ramener le demi-raccord qui se trouvait au sol sur le manchon pour l'attacher avec la courroie",
          "Le porte-lance monte à l'échelle"
        ],
        "answer": 1,
        "explanation": "Le conducteur peut envoyer dans un premier temps, l'eau de la citerne puis, alimenter ensuite la pompe"
      },
      {
        "question": "Que doit faire le conducteur avant l'établissement d'une seconde lance ?",
        "options": [
          "La MPVE (Motopompe Volumétrique Emulseur)",
          "La pompe doit absolument être alimentée avant d'autoriser l'établissement d'une seconde lance sur la \"LA\"",
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité",
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance"
        ],
        "answer": 1,
        "explanation": "La pompe doit absolument être alimentée avant d'autoriser l'établissement d'une seconde lance sur la \"LA\""
      },
      {
        "question": "Expliquer les deux façons d'établir la lance du dévidoir tournant ?",
        "options": [
          "3e et 4e lances (eau ou mousse)",
          "En cas de vent les haubans doivent absolument être fixés afin d'assurer une meilleure stabilité de la structure (consigne du constructeur)",
          "Directement à partir du dévidoir tournant et éventuellement prolongée par des tuyaux de 45 mm",
          "L'alimentation de la pompe doit être réalisée dès qu'une lance est établie (à l'exception de lances sur colonne humide)"
        ],
        "answer": 2,
        "explanation": "Directement à partir du dévidoir tournant et éventuellement prolongée par des tuyaux de 45 mm"
      },
      {
        "question": "Expliquer les deux façons d'établir la lance du dévidoir tournant ?",
        "options": [
          "lance canon, tromblon et accessoires",
          "A partir de la seconde tubulure de la division de la ligne d'attaque",
          "Les 1re et 2e équipes participent à l'établissement de la lance canon eau/mousse (FA-CA)",
          "Basculer l'écheveau sur le flanc et ramener le demi-raccord qui se trouvait au sol sur le manchon pour l'attacher avec la courroie"
        ],
        "answer": 1,
        "explanation": "A partir de la seconde tubulure de la division de la ligne d'attaque"
      },
      {
        "question": "Quelles sont les interdictions de la lance du dévidoir tournant ?",
        "options": [
          "avant tout engagement, il remettra la clé, avec la plaque patronymique accrochée, au responsable du TGR",
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a...",
          "L'usage de la lance du dévidoir tournant est interdit, comme premier moyen d'extinction, pour tous feux de contenants quel que soit leur volume",
          "1re et 2e lance (eau ou mousse)"
        ],
        "answer": 2,
        "explanation": "L'usage de la lance du dévidoir tournant est interdit, comme premier moyen d'extinction, pour tous feux de contenants quel que soit leur volume"
      },
      {
        "question": "Par quoi la lance du dévidoir tournant peut être prolongée ?",
        "options": [
          "L'équipe et le chef d'agrès se rendent au niveau du feu",
          "Le diamètre d'une colonne de 100 mm (alimentée par 2 lignes de 70 mm) permet un débit de 2 000 l/min. au maximum",
          "La lance du dévidoir tournant peut être prolongée par des tuyaux de 45 mm",
          "fût, ajutage de 35 mm ; ARI et tenues d'approche"
        ],
        "answer": 2,
        "explanation": "La lance du dévidoir tournant peut être prolongée par des tuyaux de 45 mm"
      },
      {
        "question": "Quel manœuvre particulière est fait avec la lance du dévidoir tournant ?",
        "options": [
          "A partir de la seconde tubulure de la division de la ligne d'attaque (manoeuvre particulière)",
          "Le chef de garde ou de détachement détermine l'emplacement du PMP et son contenu en fonction de la manoeuvre qu'il compte entreprendre ou de la mis...",
          "Lorsqu'elle en reçoit l'ordre, l'équipe du CA ou BA arrête définitivement l'injection d'émulseur",
          "Bons de mouvement ST 30 bis"
        ],
        "answer": 0,
        "explanation": "A partir de la seconde tubulure de la division de la ligne d'attaque (manoeuvre particulière)"
      }
    ]
  },
  {
    "id": "qcm-bsp-serie-5",
    "title": "BSP 200.13 — Établissements — Série 5",
    "level": "niveau-2",
    "category": "incendie",
    "questions": [
      {
        "question": "Quel est le débit maximal de la lance du dévidoir tournant ?",
        "options": [
          "Par le chef d'agrès en fonction du sinistre, des capacités hydrauliques de l'engin et/ou de ses caractéristiques",
          "Le débit maximal dans un établissement de diamètre 22 mm est de 150 l/min",
          "Ils sont réalisés par le conducteur et éventuellement aidé par un personnel (SDL, sous-officier adjoint, etc.) au moyen de tuyaux de 70 mm, 110 mm ...",
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre"
        ],
        "answer": 1,
        "explanation": "Le débit maximal dans un établissement de diamètre 22 mm est de 150 l/min"
      },
      {
        "question": "Expliquer la technique pour amarrer la lance sur l'épaule ?",
        "options": [
          "Il assure le dernier tronçon de la ligne, raccorde son tuyau à celui du servant et utilise éventuellement le tuyau laissé sur le trajet par le chef...",
          "Etablissement au moyen du dévidoir",
          "Le choix de l'hydrant sera fonction du débit et du diamètre de la canalisation d'alimentation",
          "La lance est placée au niveau du ceinturon, le tuyau passe sur l'épaule"
        ],
        "answer": 3,
        "explanation": "La lance est placée au niveau du ceinturon, le tuyau passe sur l'épaule"
      },
      {
        "question": "Expliquer la technique pour amarrer la lance sur l'épaule ?",
        "options": [
          "Lorsque les établissements de manoeuvre sont réalisés, le CA ou BA regagne la zone émulseur",
          "Lors de l'établissement de lignes de 110 mm le personnel place, si nécessaire, des dispositifs de franchissement de tuyaux",
          "Le SOA commande \" EN AVANT! \". Le conducteur démarre en direction du point d'eau à la vitesse d'un homme au pas derrière le FA",
          "La courroie d'amarre, pliée en deux est passée dans le ceinturon du bas vers le haut"
        ],
        "answer": 3,
        "explanation": "La courroie d'amarre, pliée en deux est passée dans le ceinturon du bas vers le haut"
      },
      {
        "question": "A quoi sert une lance sur échelle à coulisses ?",
        "options": [
          "Une échelle à coulisses peut être utilisée pour procéder à l'attaque de l'extérieur (ouverture située au 1er ou 2e étage d'un bâtiment, etc.)",
          "5 manchons souples, de taille variable, permettent de maintenir en place les tuyaux et de les guider au cours de l'établissement",
          "Perte de charge dans les tuyaux de 70 mm : 0,45 bar pour 60 m",
          "Le chef→ 2 tuyaux de 45 x 20 m dont 1 muni d'une lance"
        ],
        "answer": 0,
        "explanation": "Une échelle à coulisses peut être utilisée pour procéder à l'attaque de l'extérieur (ouverture située au 1er ou 2e étage d'un bâtiment, etc.)"
      },
      {
        "question": "Jusqu'où l'équipe de l'échelle réalise-t-elle l'établissement de la lance ?",
        "options": [
          "L'équipe de l'échelle réalise l'établissement de la lance jusqu'à la division",
          "Relais (engin, motopompe, VEDI…)",
          "La lance est placée au niveau du ceinturon, le tuyau passe sur l'épaule",
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars pour 40 m"
        ],
        "answer": 0,
        "explanation": "L'équipe de l'échelle réalise l'établissement de la lance jusqu'à la division"
      },
      {
        "question": "Par qui est alimentée la division de l'échelle aérienne ?",
        "options": [
          "La division est alimentée établie par une équipe organique d'un engin-pompe",
          "L'équipe de l'échelle réalise l'établissement de la lance jusqu'à la division",
          "fût, ajutage de 35 mm ; ARI et tenues d'approche",
          "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon"
        ],
        "answer": 0,
        "explanation": "La division est alimentée établie par une équipe organique d'un engin-pompe"
      },
      {
        "question": "Quelle fonction incombe au chef d'agrès et à l'échelier ?",
        "options": [
          "Directement à partir du dévidoir tournant et éventuellement prolongée par des tuyaux de 45 mm",
          "Ils établissent les tuyaux de 45 mm des raccords d'injection vers la MPVE (1 tuyau directement raccordé sur la MPVE avant la division 50x2x50)",
          "la fonction de porte-lance incombe au chef d'agrès, celle de servant à l'échelier",
          "Limiter la dépose des matériels au strict minimum selon l'urgence de la situation"
        ],
        "answer": 2,
        "explanation": "la fonction de porte-lance incombe au chef d'agrès, celle de servant à l'échelier"
      },
      {
        "question": "Que faut-il faire lorsque l'échelle est dressée développé isolée ?",
        "options": [
          "Le mouvement de celle-ci est limité",
          "Lorsque l'échelle est dressée, développée, isolée, celle-ci doit être OBLIGATOIREMENT haubanée (voir DFT 728)",
          "L'emport de l'ensemble des tuyaux de 70 x 20 m de la ligne d'attaque reste à la diligence du chef d'agrès à partir du moment où celui-ci intervient...",
          "Bouche d'incendie (BI)"
        ],
        "answer": 1,
        "explanation": "Lorsque l'échelle est dressée, développée, isolée, celle-ci doit être OBLIGATOIREMENT haubanée (voir DFT 728)"
      },
      {
        "question": "Quelles mesures sont prises afin de conserver la manoeuvrabilité du panier lors d'établissement de la lance ?",
        "options": [
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements",
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a...",
          "Les haubans ne sont pas fixés",
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars"
        ],
        "answer": 2,
        "explanation": "Les haubans ne sont pas fixés"
      },
      {
        "question": "Quelles mesures sont prises afin de conserver la manoeuvrabilité du panier lors d'établissement de la lance ?",
        "options": [
          "L'équipe et le chef d'agrès se rendent au niveau du feu",
          "Il assure le dernier tronçon de la ligne, raccorde son tuyau à celui du servant et utilise éventuellement le tuyau laissé sur le trajet par le chef...",
          "Il n'y a plus de crochet d'amarre sur la structure mais seulement dans le panier",
          "la lance du dévidoir tournant"
        ],
        "answer": 2,
        "explanation": "Il n'y a plus de crochet d'amarre sur la structure mais seulement dans le panier"
      },
      {
        "question": "Que se passe-t-il lorsqu'un établissement du tuyau est réalisé sur la structure de l'échelle ?",
        "options": [
          "Le mouvement de celle-ci est limité",
          "Directement à partir du dévidoir tournant et éventuellement prolongée par des tuyaux de 45 mm",
          "L'établissement de la ligne d'attaque (LA) est réalisé avec 3 tuyaux de 70 x 20 m (60 m) et 2 tuyaux de 45 x 20 m (40 m), soit une longueur de 100 m",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements"
        ],
        "answer": 0,
        "explanation": "Le mouvement de celle-ci est limité"
      },
      {
        "question": "Que se passe-t-il si le gradé nacelier se trouve dans l'impossibilité ou dans l'incapacité de déplacer le panier ?",
        "options": [
          "Le conducteur échelier peut reprendre les commandes en prioritaire et dégager le panier afin de le mettre en sécurité",
          "Le chef de garde ou de détachement détermine l'emplacement du PMP et son contenu en fonction de la manoeuvre qu'il compte entreprendre ou de la mis...",
          "La coupure de l'alimentation à la division pour remplacer ou prolonger l'établissement",
          "La MPVE permet d'injecter à une distance comprise entre 20 et 200 mètres au moyen d'établissements de tuyaux de 45 mm (B, D)"
        ],
        "answer": 0,
        "explanation": "Le conducteur échelier peut reprendre les commandes en prioritaire et dégager le panier afin de le mettre en sécurité"
      },
      {
        "question": "Qu'est-ce qu'un établisse ment vertical ?",
        "options": [
          "Lors de la phase d'extinction, le débit des lances doit être adapté",
          "Au cours de l'attaque, le port complet des EPI est obligatoire",
          "Il s'agit d'établissement par l'extérieur ou dans une cage d'escalier comportant un jour",
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a..."
        ],
        "answer": 2,
        "explanation": "Il s'agit d'établissement par l'extérieur ou dans une cage d'escalier comportant un jour"
      },
      {
        "question": "Deux cas sont envisageables pour la manœuvre inaccessible au dévidoir ?",
        "options": [
          "Ils sont réalisés au moyen des tuyaux de 110 mm pliés en écheveau",
          "La lance du dévidoir tournant peut être prolongée par des tuyaux de 45 mm",
          "Etablissement au moyen de la L.A (Cf. manoeuvre de la ligne d'attaque)",
          "Le sapeur de liaison vérifie la fermeture des orifices de refoulement de la colonne sèche en se rendant au point d'attaque"
        ],
        "answer": 2,
        "explanation": "Etablissement au moyen de la L.A (Cf. manoeuvre de la ligne d'attaque)"
      },
      {
        "question": "Deux cas sont envisageables pour la manœuvre inaccessible au dévidoir ?",
        "options": [
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance",
          "Etablissement au moyen du dévidoir",
          "Etablir deux lignes de 110 mm, permettant de disposer de deux points d'eau avancés (2divisions 100 / 3 x50) jusqu'à 1 000 m",
          "ZDI (zone de déploiement initial) : elle sert à regrouper les moyens"
        ],
        "answer": 1,
        "explanation": "Etablissement au moyen du dévidoir"
      },
      {
        "question": "Combien d'hommes pour manœuvrer une lance 1000l/min ?",
        "options": [
          "Lors de l'établissement de lignes de 110 mm le personnel place, si nécessaire, des dispositifs de franchissement de tuyaux",
          "La lance doit être utilisée en jet droit avec un débit maximum et une ouverture maximale",
          "Les lances 1 000 l/min. sont manoeuvrées efficacement par 3 hommes",
          "Liaison personnelle"
        ],
        "answer": 2,
        "explanation": "Les lances 1 000 l/min. sont manoeuvrées efficacement par 3 hommes"
      },
      {
        "question": "Dans le cas du FA que font le SOA et le SDL pour l'établissement d'une ou deux lances 1 000l/min En reconnaissance ?",
        "options": [
          "Le choix de l'hydrant sera fonction du débit et du diamètre de la canalisation d'alimentation",
          "Bouche d'incendie (BI)",
          "fût, ajutage de 35 mm ; ARI et tenues d'approche",
          "Dans le cas du FA le SOA et le SDL renforcent les équipes au maintien des lances"
        ],
        "answer": 3,
        "explanation": "Dans le cas du FA le SOA et le SDL renforcent les équipes au maintien des lances"
      },
      {
        "question": "Qu'un informe le servant au conducteur lors d'un établissement sur division alimentée par une ligne de 110mm lors d'une lance à mousse ?",
        "options": [
          "Limiter la dépose des matériels au strict minimum selon l'urgence de la situation",
          "Le servant se rend au point d'eau et avertit le conducteur de la nécessité d'obtenir une pression de 10 bars à l'injecteur",
          "2 tricoises de 100 mm du CA",
          "Etablir deux lignes de 110 mm de longueur maximale de 200 m chacune, permettant de disposer de deux points d'eau avancés (2 divisions 100 / 3 x 50)"
        ],
        "answer": 1,
        "explanation": "Le servant se rend au point d'eau et avertit le conducteur de la nécessité d'obtenir une pression de 10 bars à l'injecteur"
      },
      {
        "question": "Possibilité hydraulique d'un FA ?",
        "options": [
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance",
          "Les FA possèdent un indice de pompe de 2 000 l/min. sous 15 bars (cf. DFT 725)",
          "Poteau d'incendie (PI)",
          "tuyaux de 110 mm dans le cas d'établissements de lance canon"
        ],
        "answer": 1,
        "explanation": "Les FA possèdent un indice de pompe de 2 000 l/min. sous 15 bars (cf. DFT 725)"
      },
      {
        "question": "Que fait le personnel pour la protection des tuyaux de 110 mm ?",
        "options": [
          "La pompe doit absolument être alimentée avant d'autoriser l'établissement d'une seconde lance sur la \"LA\"",
          "Lors de l'établissement de lignes de 110 mm le personnel place, si nécessaire, des dispositifs de franchissement de tuyaux",
          "Il n'y a plus de crochet d'amarre sur la structure mais seulement dans le panier",
          "Un commandement d'exécution"
        ],
        "answer": 1,
        "explanation": "Lors de l'établissement de lignes de 110 mm le personnel place, si nécessaire, des dispositifs de franchissement de tuyaux"
      }
    ]
  },
  {
    "id": "qcm-bsp-serie-6",
    "title": "BSP 200.13 — Établissements — Série 6",
    "level": "niveau-avance",
    "category": "incendie",
    "questions": [
      {
        "question": "Citer la définition du point manœuvre préalable ?",
        "options": [
          "fût, ajutage de 35 mm ; ARI et tenues d'approche",
          "La MPVE peut être mise en aspiration ou alimentée par la citerne d'un engin-pompe dont le moteur doit obligatoirement être à l'arrêt",
          "C'est le lieu situé entre le point d'attaque et le point d'eau, où est déposé le matériel jugé nécessaire par le chef de garde",
          "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 800 mètres"
        ],
        "answer": 2,
        "explanation": "C'est le lieu situé entre le point d'attaque et le point d'eau, où est déposé le matériel jugé nécessaire par le chef de garde"
      },
      {
        "question": "Comment le chef de garde ou de détachement détermine l'emplacement du PMP ?",
        "options": [
          "En cas de vent les haubans doivent absolument être fixés afin d'assurer une meilleure stabilité de la structure (consigne du constructeur)",
          "Le chef de garde ou de détachement détermine l'emplacement du PMP et son contenu en fonction de la manoeuvre qu'il compte entreprendre ou de la mis...",
          "Diamètre de la conduite",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements"
        ],
        "answer": 1,
        "explanation": "Le chef de garde ou de détachement détermine l'emplacement du PMP et son contenu en fonction de la manoeuvre qu'il compte entreprendre ou de la mission reçue"
      },
      {
        "question": "Que doit s'efforcer le chef de garde ou de détachement pour l'emplacement du PMP ?",
        "options": [
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre",
          "Limiter la dépose des matériels au strict minimum selon l'urgence de la situation",
          "Etablissement au moyen du dévidoir",
          "Il portera une attention toute particulière à celle-ci pour éviter qu'elle ne se déchausse et prive les deux engins de leur alimentation en eau"
        ],
        "answer": 1,
        "explanation": "Limiter la dépose des matériels au strict minimum selon l'urgence de la situation"
      },
      {
        "question": "Que doit s'efforcer le chef de garde ou de détachement pour l'emplacement du PMP ?",
        "options": [
          "Le mouvement de celle-ci est limité",
          "Il se place au point d'attaque indiqué par le chef d'agrès",
          "Avec l'appui d'autres équipes un \"PMP MOUSSE\" permet d'alimenter de 1 à 8 lances 250 l/min., et/ou 1 à 4 lances 250 l/min., et/ou 1 à 2 lances 1 00...",
          "Anticiper une évolution défavorable du sinistre qui pourrait se traduire par une détérioration voire une perte de ces matériels"
        ],
        "answer": 3,
        "explanation": "Anticiper une évolution défavorable du sinistre qui pourrait se traduire par une détérioration voire une perte de ces matériels"
      },
      {
        "question": "Comment le FA sera systémati quement alimenté lors d'établissement de ligne de 110 mm?",
        "options": [
          "Le choix de l'hydrant sera fonction du débit et du diamètre de la canalisation d'alimentation",
          "Bouche d'incendie (BI)",
          "Les lances 1 000 l/min. sont manoeuvrées efficacement par 3 hommes",
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a..."
        ],
        "answer": 0,
        "explanation": "Le choix de l'hydrant sera fonction du débit et du diamètre de la canalisation d'alimentation"
      },
      {
        "question": "Quel est le but de l'établissement de ligne de 110mm ?",
        "options": [
          "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon",
          "Avec un bidon de 20 l d'émulseur, vous aurez une autonomie de 1 min. 20 s environ avec une seule lance",
          "Etablir une ligne de 110 mm de longueur maximale de 400 m, permet de disposer d'un point d'eau avancé (division 100 / 3 x 50)",
          "Avec l'appui d'autres équipes un \"PMP MOUSSE\" permet d'alimenter de 1 à 8 lances 250 l/min., et/ou 1 à 4 lances 250 l/min., et/ou 1 à 2 lances 1 00..."
        ],
        "answer": 2,
        "explanation": "Etablir une ligne de 110 mm de longueur maximale de 400 m, permet de disposer d'un point d'eau avancé (division 100 / 3 x 50)"
      },
      {
        "question": "Comment peut être établie les lignes de 110mm dans certaines circonstances ?",
        "options": [
          "Hydraulique BI-PI et l'engin",
          "Ils sont réalisés par le conducteur et éventuellement aidé par un personnel (SDL, sous-officier adjoint, etc.) au moyen de tuyaux de 70 mm, 110 mm ...",
          "Dans le cas du FA le SOA et le SDL renforcent les équipes au maintien des lances",
          "La ligne de 110 mm peut être établie du point d'eau vers le point d'attaque dans certaines circonstances"
        ],
        "answer": 3,
        "explanation": "La ligne de 110 mm peut être établie du point d'eau vers le point d'attaque dans certaines circonstances"
      },
      {
        "question": "Quel est le but de deux lignes de 110mm ?",
        "options": [
          "5 manchons souples, de taille variable, permettent de maintenir en place les tuyaux et de les guider au cours de l'établissement",
          "Lorsqu'elle en reçoit l'ordre, l'équipe du CA ou BA arrête définitivement l'injection d'émulseur",
          "Etablir deux lignes de 110 mm de longueur maximale de 200 m chacune, permettant de disposer de deux points d'eau avancés (2 divisions 100 / 3 x 50)",
          "Les FA possèdent un indice de pompe de 2 000 l/min. sous 15 bars (cf. DFT 725)"
        ],
        "answer": 2,
        "explanation": "Etablir deux lignes de 110 mm de longueur maximale de 200 m chacune, permettant de disposer de deux points d'eau avancés (2 divisions 100 / 3 x 50)"
      },
      {
        "question": "Quel est le but de deux lignes de 110mm (FA CA ou BA) ?",
        "options": [
          "Une lance (eau ou mousse) et la LDT",
          "Le conducteur échelier peut reprendre les commandes en prioritaire et dégager le panier afin de le mettre en sécurité",
          "Etablir deux lignes de 110 mm, permettant de disposer de deux points d'eau avancés (2divisions 100 / 3 x50) jusqu'à 1 000 m",
          "Il s'agit d'établissement par l'extérieur ou dans une cage d'escalier comportant un jour"
        ],
        "answer": 2,
        "explanation": "Etablir deux lignes de 110 mm, permettant de disposer de deux points d'eau avancés (2divisions 100 / 3 x50) jusqu'à 1 000 m"
      },
      {
        "question": "L'établissement de deux lignes 110mm est réalisé dans un premier temps par le CA ou BA jusqu'à combien de mètre?",
        "options": [
          "Basculer l'écheveau sur le flanc et ramener le demi-raccord qui se trouvait au sol sur le manchon pour l'attacher avec la courroie",
          "Ils permettent d'utiliser un point d'eau hors de portée des dévidoirs mobiles",
          "Etablissement au moyen du dévidoir",
          "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 800 mètres"
        ],
        "answer": 3,
        "explanation": "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 800 mètres"
      },
      {
        "question": "Sur quoi sont montés les raccords d'injection ?",
        "options": [
          "Les raccords d'injection sont montés sur les lignes de 110 mm",
          "De porter la puissance hydraulique à 1 000 l/min. par l'établissement d'une division50/2x 50",
          "Basculer l'écheveau sur le flanc et ramener le demi-raccord qui se trouvait au sol sur le manchon pour l'attacher avec la courroie",
          "L'usage de la lance du dévidoir tournant est interdit, comme premier moyen d'extinction, pour tous feux de contenants quel que soit leur volume"
        ],
        "answer": 0,
        "explanation": "Les raccords d'injection sont montés sur les lignes de 110 mm"
      },
      {
        "question": "Expliquer la manœuvre \" Pour l'établis sement de 1 ligne de 110 mm avec CA ou BA, à plus de 1 000 m, PMP (eau ou mousse, tel endroit), avec tel(s)matériel (s), en reconnaissance!\" 1er temps?",
        "options": [
          "Le SOA confirme le commandement \" ETABLISSEZ ! \" du chef d'agrès",
          "Etablir deux lignes de 110 mm de longueur maximale de 200 m chacune, permettant de disposer de deux points d'eau avancés (2 divisions 100 / 3 x 50)",
          "Liaison personnelle",
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a..."
        ],
        "answer": 0,
        "explanation": "Le SOA confirme le commandement \" ETABLISSEZ ! \" du chef d'agrès"
      },
      {
        "question": "Expliquer la manœuvre \" Pour l'établis sement de 1 ligne de 110 mm avec CA ou BA, à plus de 1 000 m, PMP (eau ou mousse, tel endroit), avec tel(s)matériel (s), en reconnaissance!\" 1er temps?",
        "options": [
          "1re et 2e lance (eau ou mousse)",
          "Il se place au point d'attaque indiqué par le chef d'agrès",
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars",
          "Le SOA commande \" EN AVANT! \". Le conducteur démarre en direction du point d'eau à la vitesse d'un homme au pas derrière le FA"
        ],
        "answer": 3,
        "explanation": "Le SOA commande \" EN AVANT! \". Le conducteur démarre en direction du point d'eau à la vitesse d'un homme au pas derrière le FA"
      },
      {
        "question": "L'établissement d'une ligne de 110mm a plus de 1000M est réalisé dans un premier temps par le CA ou BA jusqu'à combien de mètre?",
        "options": [
          "La lance est placée au niveau du ceinturon, le tuyau passe sur l'épaule",
          "Liaison personnelle",
          "Le diamètre d'une colonne sèche de 65 mm permet un débit de 1 000 l/min. maxi",
          "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 1 600 mètres"
        ],
        "answer": 3,
        "explanation": "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 1 600 mètres"
      },
      {
        "question": "Par quoi est obligatoirement alimentée une lance canon ?",
        "options": [
          "La lance canon est obligatoirement alimentée par deux lignes de 110 mm",
          "Avec un bidon de 20 l d'émulseur, vous aurez une autonomie de 1 min. 20 s environ avec une seule lance",
          "Une lance (eau ou mousse) et la LDT",
          "Le chef d'agrès désigne au conducteur l'orifice d'alimentation du poteau relais"
        ],
        "answer": 0,
        "explanation": "La lance canon est obligatoirement alimentée par deux lignes de 110 mm"
      },
      {
        "question": "Que dépose le personnel du FA-CA ou BA au commandement\" Pour l'établissement de l a lance canon eau, PMP (tel endroit), en reconnaissance! \" ?",
        "options": [
          "fût, ajutage de 35 mm",
          "Une lance (eau ou mousse) et la LDT",
          "L'établissement rapide d'une seconde lance sur la division",
          "A partir de la seconde tubulure de la division de la ligne d'attaque (manoeuvre particulière)"
        ],
        "answer": 0,
        "explanation": "fût, ajutage de 35 mm"
      },
      {
        "question": "Que dépose le personnel du FA-CA ou BA au commandement\" Pour l'établissement de l a lance canon eau, PMP (tel endroit), en reconnaissance! \" ?",
        "options": [
          "Débit de l'installation",
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre",
          "Le conducteur peut envoyer dans un premier temps, l'eau de la citerne puis, alimenter ensuite la pompe",
          "2 tricoises de 100 mm du CA"
        ],
        "answer": 3,
        "explanation": "2 tricoises de 100 mm du CA"
      },
      {
        "question": "Citer les différentes zones lors des feux d'hydrocarbures ?",
        "options": [
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre",
          "Zone d'alimentation",
          "Une échelle à coulisses peut être utilisée pour procéder à l'attaque de l'extérieur (ouverture située au 1er ou 2e étage d'un bâtiment, etc.)",
          "Perte de charge dans les tuyaux de 70 mm : 1,8 bars"
        ],
        "answer": 1,
        "explanation": "Zone d'alimentation"
      },
      {
        "question": "Citer les différentes zones lors des feux d'hydrocarbures ?",
        "options": [
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a...",
          "Zone de déploiement initial",
          "Relais (engin, motopompe, VEDI…)",
          "Branchent les raccords d'injection sur les lignes de 110 mm à égale distance de l'engin"
        ],
        "answer": 1,
        "explanation": "Zone de déploiement initial"
      },
      {
        "question": "Que veut dire ZDI ?",
        "options": [
          "La division est alimentée établie par une équipe organique d'un engin-pompe",
          "Le chef d'agrès désigne au conducteur l'orifice d'alimentation du poteau relais",
          "ZDI (zone de déploiement initial) : elle sert à regrouper les moyens",
          "Anticiper une évolution défavorable du sinistre qui pourrait se traduire par une détérioration voire une perte de ces matériels"
        ],
        "answer": 2,
        "explanation": "ZDI (zone de déploiement initial) : elle sert à regrouper les moyens"
      }
    ]
  },
  {
    "id": "qcm-bsp-serie-7",
    "title": "BSP 200.13 — Établissements — Série 7",
    "level": "niveau-1",
    "category": "incendie",
    "questions": [
      {
        "question": "Que veut dire ZAL ?",
        "options": [
          "ZAL (zone d'alimentation) : elle regroupe différents points d'eau",
          "tuyaux de 110 mm dans le cas d'établissements de lance canon",
          "Le débit maximal dans un établissement de diamètre 22 mm est de 150 l/min",
          "2 tricoises de 100 mm du CA ou BA"
        ],
        "answer": 0,
        "explanation": "ZAL (zone d'alimentation) : elle regroupe différents points d'eau"
      },
      {
        "question": "Que veux dire ZE ?",
        "options": [
          "Aspiration (nappe ou cours d'eau)",
          "ZE (zone émulseur) : les moyens émulseurs (CA/BA, BEM, citernes des pétroliers) y sont regroupés et employés",
          "Il n'y a plus de crochet d'amarre sur la structure mais seulement dans le panier",
          "La lance est engagée dans la boucle constituée par la courroie d'amarre"
        ],
        "answer": 1,
        "explanation": "ZE (zone émulseur) : les moyens émulseurs (CA/BA, BEM, citernes des pétroliers) y sont regroupés et employés"
      },
      {
        "question": "Que veut dire ZAT ?",
        "options": [
          "Le chef d'agrès du CA ou BA et le SdL prennent place sur les marchepieds, le 1er à gauche, le SdL à droite",
          "ZAT (zone d'attaque) : les lances y sont établies (lances canon et lances à main) ; cette zone peut-être divisée en secteurs d'attaque",
          "Le servant se rend au point d'eau et avertit le conducteur de la nécessité d'obtenir une pression de 10 bars à l'injecteur",
          "Aspiration (nappe ou cours d'eau)"
        ],
        "answer": 1,
        "explanation": "ZAT (zone d'attaque) : les lances y sont établies (lances canon et lances à main) ; cette zone peut-être divisée en secteurs d'attaque"
      },
      {
        "question": "Combien de ZAL - ZE - ZAT peut-il exister sur la même intervention ?",
        "options": [
          "Les 2 brins de la courroie d'amarre sont passés autour du fût et de la poignée de la lance",
          "Il peut exister pour une même intervention plusieurs ZAL, ZE ou ZAT",
          "Perte de charge dans les tuyaux de 70 mm : 0,45 bar pour 60 m",
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité"
        ],
        "answer": 1,
        "explanation": "Il peut exister pour une même intervention plusieurs ZAL, ZE ou ZAT"
      },
      {
        "question": "Combien de mètres linéaires sont nécessaires pour la dépose de la berce ?",
        "options": [
          "La lance est placée au niveau du ceinturon, le tuyau passe sur l'épaule",
          "La BA nécessite 14 m en linéaire pour déposer la berce",
          "La MPVE permet d'injecter à une distance comprise entre 20 et 200 mètres au moyen d'établissements de tuyaux de 45 mm (B, D)",
          "Il pose la division à l'endroit indiqué par le chef d'agrès, dévide son tuyau jusqu'au sapeur de liaison et remonte doubler le chef d'équipe au poi..."
        ],
        "answer": 1,
        "explanation": "La BA nécessite 14 m en linéaire pour déposer la berce"
      },
      {
        "question": "Que dépose le personnel du FA-CA aux ordres \"Emplacement de la zone émulseur (tel endroit, établissez\" ! ?",
        "options": [
          "La MPVE (Motopompe Volumétrique Emulseur)",
          "Ils sont destinés à l'alimentation d'une lance canon mousse d'un débit de 2 000 l/min",
          "Une lance (eau ou mousse) et la LDT",
          "Bon de prise en charge provisoire de matériel"
        ],
        "answer": 0,
        "explanation": "La MPVE (Motopompe Volumétrique Emulseur)"
      },
      {
        "question": "Que dépose le personnel du FA-CA aux ordres \"Emplacement de la zone émulseur (tel endroit, établissez\" ! ?",
        "options": [
          "Le chef de garde ou de détachement détermine l'emplacement du PMP et son contenu en fonction de la manoeuvre qu'il compte entreprendre ou de la mis...",
          "Le chef d'agrès du CA ou BA et le SdL prennent place sur les marchepieds, le 1er à gauche, le SdL à droite",
          "2 clés tricoises de 100 mm CA ou BA",
          "C'est le lieu situé entre le point d'attaque et le point d'eau, où est déposé le matériel jugé nécessaire par le chef de garde"
        ],
        "answer": 2,
        "explanation": "2 clés tricoises de 100 mm CA ou BA"
      },
      {
        "question": "Que permet le dispositif d'injection ?",
        "options": [
          "Il permet l'injection d'émulseur dans les lignes d'alimentation (F) de la lance canon, à une pression toujours supérieure à celle des lignes d'eau",
          "Outil de forcement et de déblai",
          "Il n'y a plus de crochet d'amarre sur la structure mais seulement dans le panier",
          "Une échelle à coulisses peut être utilisée pour procéder à l'attaque de l'extérieur (ouverture située au 1er ou 2e étage d'un bâtiment, etc.)"
        ],
        "answer": 0,
        "explanation": "Il permet l'injection d'émulseur dans les lignes d'alimentation (F) de la lance canon, à une pression toujours supérieure à celle des lignes d'eau"
      },
      {
        "question": "A quoi sont destinés les raccords d'injection ?",
        "options": [
          "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 1 600 mètres",
          "Ils sont destinés à l'alimentation d'une lance canon mousse d'un débit de 2 000 l/min",
          "Perte de charge dans les tuyaux de 70 mm : 0,45 bar pour 60 m",
          "Cahier d'observations DSA"
        ],
        "answer": 1,
        "explanation": "Ils sont destinés à l'alimentation d'une lance canon mousse d'un débit de 2 000 l/min"
      },
      {
        "question": "Que permet le dispositif d'injection ?",
        "options": [
          "2 tricoises de 100 mm du CA",
          "Ce dispositif permet l'alimentation en solution moussante de 1 à 4 lances 250 l/min., et/ou 1 à 2 lances 500 l/min., et/ou 1 à 2 lances 1 000 l/min",
          "Capacité de la citerne ≥3 000 litres",
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité"
        ],
        "answer": 1,
        "explanation": "Ce dispositif permet l'alimentation en solution moussante de 1 à 4 lances 250 l/min., et/ou 1 à 2 lances 500 l/min., et/ou 1 à 2 lances 1 000 l/min"
      },
      {
        "question": "Que permet le dispositif d'injection avec l'appui d'autres équipes un \"PMP MOUSSE\" ?",
        "options": [
          "A partir de la seconde tubulure de la division de la ligne d'attaque",
          "Etablir deux lignes de 110 mm de longueur maximale de 200 m chacune, permettant de disposer de deux points d'eau avancés (2 divisions 100 / 3 x 50)",
          "Avec l'appui d'autres équipes un \"PMP MOUSSE\" permet d'alimenter de 1 à 8 lances 250 l/min., et/ou 1 à 4 lances 250 l/min., et/ou 1 à 2 lances 1 00...",
          "La lance est engagée dans la boucle constituée par la courroie d'amarre"
        ],
        "answer": 2,
        "explanation": "Avec l'appui d'autres équipes un \"PMP MOUSSE\" permet d'alimenter de 1 à 8 lances 250 l/min., et/ou 1 à 4 lances 250 l/min., et/ou 1 à 2 lances 1 000 l/min"
      },
      {
        "question": "Que permet la MPVE ?",
        "options": [
          "Pression à la lance : 6 bars (lance non autorégulée)",
          "Hydraulique BI-PI et l'engin",
          "La MPVE permet d'injecter à une distance comprise entre 20 et 200 mètres au moyen d'établissements de tuyaux de 45 mm (B, D)",
          "C'est le lieu situé entre le point d'attaque et le point d'eau, où est déposé le matériel jugé nécessaire par le chef de garde"
        ],
        "answer": 2,
        "explanation": "La MPVE permet d'injecter à une distance comprise entre 20 et 200 mètres au moyen d'établissements de tuyaux de 45 mm (B, D)"
      },
      {
        "question": "Que font le CA ou BA lorsque les établissements de manoeuvre sont réalisés ?",
        "options": [
          "Etablir deux lignes de 110 mm, permettant de disposer de deux points d'eau avancés (2divisions 100 / 3 x50) jusqu'à 1 000 m",
          "Lorsque les établissements de manoeuvre sont réalisés, le CA ou BA regagne la zone émulseur",
          "Cas particuliers (équipe à 3)",
          "Le chef de garde ou de détachement détermine l'emplacement du PMP et son contenu en fonction de la manoeuvre qu'il compte entreprendre ou de la mis..."
        ],
        "answer": 1,
        "explanation": "Lorsque les établissements de manoeuvre sont réalisés, le CA ou BA regagne la zone émulseur"
      },
      {
        "question": "Que font le CA ou BA lorsque les établissements de manoeuvre sont réalisés ?",
        "options": [
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'air et de l'eau",
          "Le débit maximal dans un établissement de diamètre 22 mm est de 150 l/min",
          "A partir de la seconde tubulure de la division de la ligne d'attaque",
          "Branchent les raccords d'injection sur les lignes de 110 mm à égale distance de l'engin"
        ],
        "answer": 3,
        "explanation": "Branchent les raccords d'injection sur les lignes de 110 mm à égale distance de l'engin"
      },
      {
        "question": "Qu'impose l'alimentation de la MPVE par une MPT ?",
        "options": [
          "Ils sont réalisés au moyen des tuyaux de 110 mm pliés en écheveau",
          "Cas particuliers (équipe à 3)",
          "la lance du dévidoir tournant",
          "L'éloignement de la zone émulseur ou l'impossibilité d'accès à cette dernière du CA ou BA impose l'alimentation de la MPVE par une MPT"
        ],
        "answer": 3,
        "explanation": "L'éloignement de la zone émulseur ou l'impossibilité d'accès à cette dernière du CA ou BA impose l'alimentation de la MPVE par une MPT"
      },
      {
        "question": "Que fait l'équipe du CA ou BA lorsqu'elle reçoit l'ordre de fin de manœuvre ?",
        "options": [
          "Lorsqu'elle en reçoit l'ordre, l'équipe du CA ou BA arrête définitivement l'injection d'émulseur",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements",
          "Les FA possèdent un indice de pompe de 2 000 l/min. sous 15 bars (cf. DFT 725)",
          "ZAL (zone d'alimentation) : elle regroupe différents points d'eau"
        ],
        "answer": 0,
        "explanation": "Lorsqu'elle en reçoit l'ordre, l'équipe du CA ou BA arrête définitivement l'injection d'émulseur"
      },
      {
        "question": "Que doit-on faire après l'utilisation d'émulseur ?",
        "options": [
          "L'utilisation d'émulseur est toujours suivie d'un abondant rinçage",
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun",
          "Les haubans ne sont pas fixés",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'air et de l'eau"
        ],
        "answer": 0,
        "explanation": "L'utilisation d'émulseur est toujours suivie d'un abondant rinçage"
      },
      {
        "question": "Comment est fait le nettoyage de la MPVE ?",
        "options": [
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun",
          "Ce dispositif permet l'alimentation en solution moussante de 1 à 4 lances 250 l/min., et/ou 1 à 2 lances 500 l/min., et/ou 1 à 2 lances 1 000 l/min",
          "La ligne de 110 mm peut être établie du point d'eau vers le point d'attaque dans certaines circonstances",
          "La MPVE peut être mise en aspiration ou alimentée par la citerne d'un engin-pompe dont le moteur doit obligatoirement être à l'arrêt"
        ],
        "answer": 3,
        "explanation": "La MPVE peut être mise en aspiration ou alimentée par la citerne d'un engin-pompe dont le moteur doit obligatoirement être à l'arrêt"
      },
      {
        "question": "Concernant « Préambule », quelle proposition est exacte ?",
        "options": [
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements",
          "2e temps : il laisse sa MPVE au ralenti, en circuit fermé et la purge de temps en temps",
          "Protège main avant (Qui déclenche le frein de chaine)",
          "Poteau d'incendie (PI)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Préambule."
      },
      {
        "question": "Concernant « Préambule », quelle proposition est exacte ?",
        "options": [
          "La tronçonneuse doit se tenir fermement à 2 mains pour en assurer le contrôle permanent,",
          "ARRET TEMPORAIRE D'INJECTION (CIRCUIT FERME)",
          "Placer une cale dans la poignée de porte",
          "L'établissement d'alimentation permet d'alimenter la pompe de l'engin"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Préambule."
      }
    ]
  },
  {
    "id": "qcm-bsp-serie-8",
    "title": "BSP 200.13 — Établissements — Série 8",
    "level": "niveau-2",
    "category": "incendie",
    "questions": [
      {
        "question": "Concernant « Préambule », quelle proposition est exacte ?",
        "options": [
          "Zone de déploiement initial",
          "rapidité de déplacement",
          "L'alimentation de la pompe doit être réalisée dès qu'une lance est établie (à l'exception de lances sur colonne humide)",
          "La lance est placée au niveau du ceinturon, le tuyau passe sur l'épaule"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Préambule."
      },
      {
        "question": "Concernant « Préambule », quelle proposition est exacte ?",
        "options": [
          "Les pompes hydrauliques",
          "Ils sont réalisés par le conducteur et éventuellement aidé par un personnel (SDL, sous-officier adjoint, etc.) au moyen de tuyaux de 70 mm, 110 mm ...",
          "Poteau d'incendie (PI)",
          "Il portera une attention toute particulière à celle-ci pour éviter qu'elle ne se déchausse et prive les deux engins de leur alimentation en eau"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Préambule."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est exacte ?",
        "options": [
          "Par le chef d'agrès en fonction du sinistre, des capacités hydrauliques de l'engin et/ou de ses caractéristiques",
          "vérifie que chacun porte son EPI complet,",
          "MARCHE GENERALE DES OPERATIONS",
          "Prendre la poignée en pleine main"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENT D'ALIMENTATION."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est exacte ?",
        "options": [
          "Les chiens : tatouage ou puce, fichier central",
          "se renseigner sur l'état des personnes à l'intérieur de la cabine et les rassurer",
          "Poteau d'incendie (PI)",
          "Liaison personnelle"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENT D'ALIMENTATION."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est exacte ?",
        "options": [
          "Bouche d'incendie (BI)",
          "La cage est indispensable pour soigner ou transporter le chien ou le chat capturé",
          "Les bras de levier d'écartement",
          "Etablissement au moyen du dévidoir"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENT D'ALIMENTATION."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est exacte ?",
        "options": [
          "Aspiration (nappe ou cours d'eau)",
          "ne jamais immerger la fiche du câble,",
          "les lames droites permettent la section de métaux de diamètre plus important (montant arrière (C))",
          "Surveillance des victimes intoxiquées par inhalation de gaz toxique"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENT D'ALIMENTATION."
      },
      {
        "question": "Concernant « GENERALITE », quelle proposition est exacte ?",
        "options": [
          "Il faut s'approcher du nid avec discrétion",
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant",
          "Les bovins : bague sanitaire (services vétérinaires)",
          "respecter le périmétre de sécurité"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — GENERALITE."
      },
      {
        "question": "Concernant « GENERALITE », quelle proposition est exacte ?",
        "options": [
          "nettoyer de temps en temps la crépine,",
          "Perte de charge dans les tuyaux de 70 mm : 0,45 bar pour 60 m",
          "Objectif : Savoir manœuvrer le matériel de désincarcération",
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — GENERALITE."
      },
      {
        "question": "Concernant « GENERALITE », quelle proposition est exacte ?",
        "options": [
          "Utilisées par les C.C.F dans la lutte contre les feux de forët",
          "extincteur a poudre et CO2",
          "Lors de la phase d'extinction, le débit des lances doit être adapté",
          "attention à ne pas aggraver la situation par l'apport d'eau,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — GENERALITE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE SECURITE », quelle proposition est exacte ?",
        "options": [
          "ZE (zone émulseur) : les moyens émulseurs (CA/BA, BEM, citernes des pétroliers) y sont regroupés et employés",
          "remplir le bloc pompe d'eau,",
          "ETABLISSEMENTS D'ATTAQUE SECURITE",
          "raccord avec bouchon"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE SECURITE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE SECURITE », quelle proposition est exacte ?",
        "options": [
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "Chute de l'intervenant lors de travaux en hauteur Fractures diverses et traumatisme pouvant engager le pronostic vital Utilisation du LSPCC",
          "Au cours de l'attaque, le port complet des EPI est obligatoire",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'eau et de l'air"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE SECURITE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE SECURITE », quelle proposition est exacte ?",
        "options": [
          "De diminuer les pertes de charges et les \"coups de bélier\"",
          "espèces qui vivent dans la nature et qui ne sont pas habituées au contact avec l'homme",
          "Le non respect de cette directive entraîne automatiquement la responsabilité de l'intéressé et/ou de son chef",
          "rupture d'une conduite intérieure ou sous trottoir etc"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE SECURITE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENT D4UNE LCM (FA-CA ou BA) MANŒUVRE DE LA LANCE CANON MOUSSE",
          "se renseigner sur l'état des personnes à l'intérieur de la cabine et les rassurer",
          "ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS",
          "Ne pas rentrer dans la «zone critique» pour éviter l'affrontement"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS », quelle proposition est exacte ?",
        "options": [
          "OUVRIR UNE PORTE (METHODE CLASSIQUE)",
          "avant l'utilisation, vérifier si tous les organes sont bien fixés,",
          "Les Moto-Pompes Remorquables (M.P.R.)",
          "Un commandement initial"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS », quelle proposition est exacte ?",
        "options": [
          "Lecture MX2100 Essence SP GPL Butane Propane Gaz de ville / methane",
          "fait noter ou note l'identité des impliqués",
          "Périmètre de sécurité d'un rayon de 50 m déterminé et délimité",
          "Un commandement d'exécution"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS », quelle proposition est exacte ?",
        "options": [
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun",
          "les ascenseurs hydrauliques",
          "La lance est engagée dans la boucle constituée par la courroie d'amarre",
          "L'alimentation de la pompe doit être réalisée dès qu'une lance est établie (à l'exception de lances sur colonne humide)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES », quelle proposition est exacte ?",
        "options": [
          "Le chef d'agrès et le conducteur",
          "amarrer la pompe au moyen d'une commande,",
          "Coupe pare-brise ou scie sabre",
          "ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES », quelle proposition est exacte ?",
        "options": [
          "De diminuer les pertes de charges et les \"coups de bélier\"",
          "Le chef d'équipe déposes on matériel au point d'attaque, retourne au dévidoir et répercute l'ordre au servant. Le servant tire le dévidoir et le dé...",
          "La couverture est utilisée pour la contention des lézards, des iguanes. En jetant la couverture sur l'animal, il va se sentir caché et va se calmer",
          "1re et 2e lance (eau ou mousse)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES », quelle proposition est exacte ?",
        "options": [
          "Prendre en considération le sens du fil du bois pour les cales",
          "Lance du dévidoir tournant (LDT)",
          "Chiens – Chats ne pas fixer l'animal, ne pas s'approcher trop vite et respecter la «zone de fuite»",
          "faire descendre l'hydro-éjecteur avec une commande en évitant les chocs (raccorder la commande au clapet de vidange),"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES », quelle proposition est exacte ?",
        "options": [
          "Prendre la poignée en pleine main",
          "Pulvérisateur projetant de la poudre",
          "LES MATERIEL DE BASE A EMPORTER",
          "Une lance (eau ou mousse) et la LDT"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES."
      }
    ]
  },
  {
    "id": "qcm-bsp-serie-9",
    "title": "BSP 200.13 — Établissements — Série 9",
    "level": "niveau-avance",
    "category": "incendie",
    "questions": [
      {
        "question": "Concernant « LES MATERIEL DE BASE A EMPORTER », quelle proposition est exacte ?",
        "options": [
          "Au SdL il désigne l'orifice de refoulement du poteau et l'orifice d'alimentation de la colonne sèche",
          "LES MATERIEL DE BASE A EMPORTER",
          "cône de balisage Gilets rétro réfléchissants Panneaux triflashs",
          "3e et 4e lances (eau ou mousse)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — LES MATERIEL DE BASE A EMPORTER."
      },
      {
        "question": "Concernant « LES MATERIEL DE BASE A EMPORTER », quelle proposition est exacte ?",
        "options": [
          "Liaison personnelle (hormis F)",
          "Au SdL il désigne l'orifice de refoulement du poteau et l'orifice d'alimentation de la colonne sèche",
          "indique par radio au chef d'agrès l'évolution dans le déplacement de la cabine,",
          "garder toujours le contact et agir en concertation"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LES MATERIEL DE BASE A EMPORTER."
      },
      {
        "question": "Concernant « LES MATERIEL DE BASE A EMPORTER », quelle proposition est exacte ?",
        "options": [
          "bloquer le système de freinage",
          "Outil de forcement et de déblai",
          "« Où sont les zones de compression et de tension ? »",
          "5- procéder à la coupe d'abattage"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — LES MATERIEL DE BASE A EMPORTER."
      },
      {
        "question": "Concernant « LES MATERIEL DE BASE A EMPORTER », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENTS D'ATTAQUE SECURITE",
          "vérifier la présence d'une fiche de terre",
          "ZE (zone émulseur) : les moyens émulseurs (CA/BA, BEM, citernes des pétroliers) y sont regroupés et employés",
          "Liaison personnelle"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — LES MATERIEL DE BASE A EMPORTER."
      },
      {
        "question": "Concernant « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION », quelle proposition est exacte ?",
        "options": [
          "La couverture est utilisée pour la contention des lézards, des iguanes. En jetant la couverture sur l'animal, il va se sentir caché et va se calmer",
          "Toujours transporter l'appareil le moteur arrêté",
          "Réactions cutanées au produit Réaction allergique localisée Gant en caoutchouc et lunettes de protection",
          "LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION."
      },
      {
        "question": "Concernant « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION », quelle proposition est exacte ?",
        "options": [
          "Bon de prise en charge provisoire de matériel",
          "prendre les précautions nécessaires lors du remplissage de carburant,",
          "efficacité énergétique importante",
          "tuyaux de 110 mm dans le cas d'établissements de lance canon"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION."
      },
      {
        "question": "Concernant « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION », quelle proposition est exacte ?",
        "options": [
          "fait prendre le matériel,",
          "fait noter ou note l'identité des impliqués",
          "Avis de passage des sapeurs pompiers",
          "extincteur a poudre et CO2"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION."
      },
      {
        "question": "Concernant « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION », quelle proposition est exacte ?",
        "options": [
          "Stationner le véhicule à distance,",
          "Cahier d'observations DSA",
          "Objectif : Savoir Ouvrir une porte (par utilisation du cadre de vitre)",
          "disposer le vide-cave bien à plat sur son embase,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENT DE LA LIGNE D'ATTAQUE",
          "Une lance (eau ou mousse) et la LDT",
          "ALIMENTATION ET PRESSION A LA POMPE",
          "Eclairer la zone pour faciliter le travail et renforcer la sécurité des intervenants"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LA LIGNE D'ATTAQUE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est exacte ?",
        "options": [
          "La courroie d'amarre, pliée en deux est passée dans le ceinturon du bas vers le haut",
          "Ces forces devront être très clairement identifiées avant la coupe, de façon à ne pas être surpris lors de la libération",
          "L'établissement d'une division au plus près du sinistre",
          "Il peut exister pour une même intervention plusieurs ZAL, ZE ou ZAT"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LA LIGNE D'ATTAQUE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est exacte ?",
        "options": [
          "L'établissement rapide d'une seconde lance sur la division",
          "Provoque au moins une victime, c'est-à-dire un usager ayant nécessité des soins médicaux",
          "La cage est indispensable pour soigner ou transporter le chien ou le chat capturé",
          "Le corps de la cisaille : il supporte les bras de levier d'écartement et contient le corps du ou des vérins (double effet)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LA LIGNE D'ATTAQUE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est exacte ?",
        "options": [
          "La coupure de l'alimentation à la division pour remplacer ou prolonger l'établissement",
          "Bouton d'arrêt de la manette des gaz",
          "Matériel d'électrogène",
          "ovin, caprin (moutons, chèvres, béliers...) : coups de cornes, coups de tête"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LA LIGNE D'ATTAQUE."
      },
      {
        "question": "Concernant « 43. Expliquer le pliage des tuyaux 45 x 20 m ? », quelle proposition est exacte ?",
        "options": [
          "Ils sont composés des principaux éléments suivants",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'eau et de l'air",
          "Déposer ensuite l'ensemble du pare-brise feuilleté",
          "force de compression : sur laquelle on se limitera à une coupe de dégagement, la pression exercée étant capable de bloquer le guide chaîne"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 43. Expliquer le pliage des tuyaux 45 x 20 m ?."
      },
      {
        "question": "Concernant « 43. Expliquer le pliage des tuyaux 45 x 20 m ? », quelle proposition est exacte ?",
        "options": [
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre",
          "Prendre la poignée en pleine main",
          "faire descendre le vide-cave avec une commande en évitant les chocs,",
          "engager le minimum de personnel"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 43. Expliquer le pliage des tuyaux 45 x 20 m ?."
      },
      {
        "question": "Concernant « 43. Expliquer le pliage des tuyaux 45 x 20 m ? », quelle proposition est exacte ?",
        "options": [
          "Objectif : Savoir retrait une vitre",
          "Hébergement des sinistrés",
          "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon",
          "Ils se composent principalement de"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 43. Expliquer le pliage des tuyaux 45 x 20 m ?."
      },
      {
        "question": "Concernant « 43. Expliquer le pliage des tuyaux 45 x 20 m ? », quelle proposition est exacte ?",
        "options": [
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité",
          "Utiliser le lot de sauvetage si progression en hauteur",
          "Tirer le cordon de lancement jusqu'au déclenchement du premier allumage audible",
          "Couper le contact avant d'effectuer un contrôle sur la chaîne"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 43. Expliquer le pliage des tuyaux 45 x 20 m ?."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS », quelle proposition est exacte ?",
        "options": [
          "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 800 mètres",
          "ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS",
          "LES MATERIEL DE BASE A EMPORTER",
          "extincteur a poudre et CO2"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS », quelle proposition est exacte ?",
        "options": [
          "Lecture MX2100 Essence SP GPL Butane Propane Gaz de ville / methane",
          "Chef d'agrès Chef d'équipe ou 1er chef 2e chef Servant ou 1er servant 2e servant Sapeur de liaison",
          "Chiens – Chats ne pas fixer l'animal, ne pas s'approcher trop vite et respecter la «zone de fuite»",
          "TGR+sacoche SDL+Lampe portative"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS », quelle proposition est exacte ?",
        "options": [
          "le pointeau repose dans un coin de la vitre,",
          "Le chef d'agrès désigne au conducteur l'orifice d'alimentation du poteau relais",
          "L'établissement d'une division au plus près du sinistre",
          "MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS », quelle proposition est exacte ?",
        "options": [
          "les pompes thermiques,",
          "Passer l'écarteur dans le jour de la porte au niveau du bas de caisse Ne pas se positionner entre l'outil et la portière",
          "Au SdL il désigne l'orifice de refoulement du poteau et l'orifice d'alimentation de la colonne sèche",
          "Chiens – Chats ne pas fixer l'animal, ne pas s'approcher trop vite et respecter la «zone de fuite»"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS."
      }
    ]
  },
  {
    "id": "qcm-bsp-serie-10",
    "title": "BSP 200.13 — Établissements — Série 10",
    "level": "niveau-1",
    "category": "incendie",
    "questions": [
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE », quelle proposition est exacte ?",
        "options": [
          "L'établissement de la ligne d'attaque (LA) est réalisé avec 3 tuyaux de 70 x 20 m (60 m) et 2 tuyaux de 45 x 20 m (40 m), soit une longueur de 100 m",
          "ouvrir le couvercle uniquement lorsque la prise est débranchée,",
          "Prendre au départ des secours deux postes portatifs pour une utilisation en réseau tactique à l'intérieur des locaux",
          "ZE (zone émulseur) : les moyens émulseurs (CA/BA, BEM, citernes des pétroliers) y sont regroupés et employés"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE », quelle proposition est exacte ?",
        "options": [
          "Cahier d'observations DSA",
          "Pression à la lance : 6 bars (lance non autorégulée)",
          "déterminer la cause de l'inondation et la supprimer (, Service municipalité , ONEE./Régie ..)",
          "laver et rincer le mùatériel après usage"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE », quelle proposition est exacte ?",
        "options": [
          "Perte de charge dans les tuyaux de 70 mm : 0,45 bar pour 60 m",
          "remet le matériel en place (échelle, clé machinerie) et rejoint son équipier,",
          "Poteau d'incendie (PI)",
          "Combinaison étanche aux insectes"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE », quelle proposition est exacte ?",
        "options": [
          "Les 2 brins de la courroie d'amarre sont passés autour du fût et de la poignée de la lance",
          "laver et rincer le mùatériel après usage",
          "1re et 2e lance (eau ou mousse)",
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars pour 40 m"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE."
      },
      {
        "question": "Concernant « ALIMENTATION ET PRESSION A LA POMPE », quelle proposition est exacte ?",
        "options": [
          "En cas de piqûres multiples, demander le médecin",
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a...",
          "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 800 mètres",
          "ALIMENTATION ET PRESSION A LA POMPE"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ALIMENTATION ET PRESSION A LA POMPE."
      },
      {
        "question": "Concernant « ALIMENTATION ET PRESSION A LA POMPE », quelle proposition est exacte ?",
        "options": [
          "Insérer l'écarteur dans la partie arrière de la porte juste à côté du rail coulissant",
          "Dévidoir de droite avec panier + matériels sur ordre 1 tuyau de 70 x 20 m + injecteur + bidons d'émulseur",
          "Distribution des denrées aux sinistrés",
          "ETABLISSEMENT D'UNE SECONDE LANCE SUR LA DIVISION"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ALIMENTATION ET PRESSION A LA POMPE."
      },
      {
        "question": "Concernant « ALIMENTATION ET PRESSION A LA POMPE », quelle proposition est exacte ?",
        "options": [
          "pas de souci de pollution",
          "d'un ensemble pistons-cylindres hydrauliques placé sous la cabine de l'ascenseur,",
          "Combinaison étanche aux insectes",
          "Dans le cas où une seconde lance (500 l/min.) est établie grâce à la division, la pression en sortie de pompe sera alors de 10 bars"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ALIMENTATION ET PRESSION A LA POMPE."
      },
      {
        "question": "Concernant « ALIMENTATION ET PRESSION A LA POMPE », quelle proposition est exacte ?",
        "options": [
          "espèces protégées : faune sauvage captive; la détention d'espèces protégées est réglementée",
          "LES RISQUES PRESENTES PAR LE GAZ",
          "Finir par la découpe de la partie supérieure",
          "Pression aux lances : 6 bars (lance non autorégulée)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ALIMENTATION ET PRESSION A LA POMPE."
      },
      {
        "question": "Concernant « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE », quelle proposition est exacte ?",
        "options": [
          "Ne jamais utiliser d'essence pour détruire un nid",
          "L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE",
          "Le vide-cave est utilisé pour aspirer l'eau des caves, des its, des réservoirs",
          "A ces périodes de la journée tous les insectes ont alors rejoint leur nid"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE."
      },
      {
        "question": "Concernant « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE », quelle proposition est exacte ?",
        "options": [
          "La lance est placée au niveau du ceinturon, le tuyau passe sur l'épaule",
          "2 raccords d'injection",
          "La lacette est une cordelette d'une longueur de 1,20 m. Elle permet de museler tous les animaux à museau pointu",
          "Régulation routière"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE."
      },
      {
        "question": "Concernant « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE », quelle proposition est exacte ?",
        "options": [
          "Rétablissement d'éclairage public",
          "Il assure la surveillance des tuyaux de 45 mm et contrôle régulièrement le niveau d'émulseur et rend compte de la quantité restante",
          "La courroie d'amarre, pliée en deux est passée dans le ceinturon du bas vers le haut",
          "citerne environ 500 litres"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE."
      },
      {
        "question": "Concernant « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE », quelle proposition est exacte ?",
        "options": [
          "Dévidoir de droite avec panier + matériels sur ordre 1 tuyau de 70 x 20 m + injecteur + bidons d'émulseur",
          "Eloigner les personnes non équipées,",
          "La lance est engagée dans la boucle constituée par la courroie d'amarre",
          "Identification du vitrage : repérer visuellement le marquage gravé dans le vitrage pour connaitre le type si présence d'un marquage"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE."
      },
      {
        "question": "Concernant « LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR », quelle proposition est exacte ?",
        "options": [
          "LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR",
          "regarder s'il y a un transformateur électrique à l'intérieur des locaux sinistrés",
          "d'un ensemble pistons-cylindres hydrauliques placé sous la cabine de l'ascenseur,",
          "Situation : Reconnaître les lieux (type de la machine, emplacement de la cabine et du local de la machinerie)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR."
      },
      {
        "question": "Concernant « LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR », quelle proposition est exacte ?",
        "options": [
          "Le matériel utilisé pour la destruction est un pulvérisateur à pression préalable contenant un produit insecticide dont les qualités sont les suiva...",
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE",
          "Le chef d'agrès désigne au conducteur l'orifice d'alimentation du poteau relais",
          "1er Equipe 2e Equipe Sapeur de liaison"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR."
      },
      {
        "question": "Concernant « LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR », quelle proposition est exacte ?",
        "options": [
          "matériel de base+Dévidoir de droite (avec panier) matériels sur ordre matériel de base Dévidoir de droite (avec panier) matériels sur ordre matérie...",
          "Avis de passage des sapeurs pompiers",
          "Ils établissent les tuyaux de 45 mm des raccords d'injection vers la MPVE (1 tuyau directement raccordé sur la MPVE avant la division 50x2x50)",
          "Réaction immédiate, Message d'ambiance complet, Demande de renfort"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR."
      },
      {
        "question": "Concernant « LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR », quelle proposition est exacte ?",
        "options": [
          "Identification des victimes",
          "Etablissement au moyen de la L.A (Cf. manoeuvre de la ligne d'attaque)",
          "Les cuissardes évitent aux sauveteurs d'avoir les vêtements humides",
          "le chef d'équipe dépose le matériel du panier. Le servant Maintient le dévidoir"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR."
      },
      {
        "question": "Concernant « 117.Deux cas sont envisageables pour la manœuvre inaccessible au dévidoir ? », quelle proposition est exacte ?",
        "options": [
          "Identifier le pare-brise comme feuilleté",
          "Etablissement au moyen de la L.A (Cf. manoeuvre de la ligne d'attaque)",
          "Intervention dans un rond point",
          "ne jamais l'utiliser en relais,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 117.Deux cas sont envisageables pour la manœuvre inaccessible au dévidoir ?."
      },
      {
        "question": "Concernant « 117.Deux cas sont envisageables pour la manœuvre inaccessible au dévidoir ? », quelle proposition est exacte ?",
        "options": [
          "Hébergement des sinistrés",
          "Etablissement au moyen du dévidoir",
          "Cale en bois ou balle souple",
          "Interdiction d'accès de la zone au public et aux personnels d'intervention sauf ceux strictement nécessaires"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 117.Deux cas sont envisageables pour la manœuvre inaccessible au dévidoir ?."
      },
      {
        "question": "Concernant « 117.Deux cas sont envisageables pour la manœuvre inaccessible au dévidoir ? », quelle proposition est exacte ?",
        "options": [
          "Le chef d'équipe déposes on matériel au point d'attaque, retourne au dévidoir et répercute l'ordre au servant. Le servant tire le dévidoir et le dé...",
          "Les Moto-Pompes Flottantes CCC 6000",
          "LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION",
          "Placer la pointe du pied droit dans le protège main arrière"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 117.Deux cas sont envisageables pour la manœuvre inaccessible au dévidoir ?."
      },
      {
        "question": "Concernant « UNE LANCE OPTION MOUSSE », quelle proposition est exacte ?",
        "options": [
          "2 cannes plongeuses",
          "Réactions cutanées au produit Réaction allergique localisée Gant en caoutchouc et lunettes de protection",
          "2e équipe fourgon Sapeur de liaison",
          "Les indemnes : impliqués non décédés et dont l'état ne nécessite aucun soin médical"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — UNE LANCE OPTION MOUSSE."
      }
    ]
  },
  {
    "id": "qcm-bsp-serie-11",
    "title": "BSP 200.13 — Établissements — Série 11",
    "level": "niveau-2",
    "category": "incendie",
    "questions": [
      {
        "question": "Concernant « UNE LANCE OPTION MOUSSE », quelle proposition est exacte ?",
        "options": [
          "pas de souci de pollution",
          "Prendre la poignée en pleine main",
          "Positionner le coupe pare-brise de telle façon que",
          "Matériel de base Matériel de base"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — UNE LANCE OPTION MOUSSE."
      },
      {
        "question": "Concernant « UNE LANCE OPTION MOUSSE », quelle proposition est exacte ?",
        "options": [
          "Dévidoir de droite avec panier + matériels sur ordre 1 tuyau de 70 x 20 m + injecteur + bidons d'émulseur",
          "chien méchant menaçant la sécurité morsure Faire intervenir un animalier. Maîtriser l'animal avec un lasso ou un filet. Faire intervenir les forces...",
          "On retrouve certains signes: érection des poils du dos, expressions du museau, positions de la queue et des oreilles",
          "Objectif : Savoir manœuvrer le matériel de désincarcération"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — UNE LANCE OPTION MOUSSE."
      },
      {
        "question": "Concernant « UNE LANCE OPTION MOUSSE », quelle proposition est exacte ?",
        "options": [
          "Elle est fixe ou semi-stationnaire dans le V.S.R, et peut disposer ou non de 2 dévidoirs équipés de flexibles",
          "cône de balisage Gilets rétro réfléchissants Panneaux triflashs",
          "vérifier la présence d'une fiche de terre",
          "Chef d'équipe Servant Sapeur de liaison Conducteur"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — UNE LANCE OPTION MOUSSE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM », quelle proposition est exacte ?",
        "options": [
          "Intervention dans un rond point",
          "Vérifier mutuellement l'étanchéité des combinaisons,",
          "ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM",
          "les pompes thermiques,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM », quelle proposition est exacte ?",
        "options": [
          "respecter les consignes données au départ",
          "Etablir une ligne de 110 mm de longueur maximale de 400 m, permet de disposer d'un point d'eau avancé (division 100 / 3 x 50)",
          "La mouchette est un instrument de contention qui permet de tenir l'animal par le nez",
          "LES RISQUES PRESENTES PAR LE GAZ"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM », quelle proposition est exacte ?",
        "options": [
          "Le conducteur assure la mise en route de la MPVE",
          "TGR+sacoche SDL+Lampe portative",
          "La ligne de 110 mm peut être établie du point d'eau vers le point d'attaque dans certaines circonstances",
          "La lance est engagée dans la boucle constituée par la courroie d'amarre"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE DEUX LIGNES DE 110MM (FA SEUL) », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENTS DE DEUX LIGNES DE 110MM (FA SEUL)",
          "Protection des victimes : victimes traitées et évacuées en urgence ,",
          "De porter la puissance hydraulique à 1 000 l/min. par l'établissement d'une division50/2x 50",
          "Objectif : Savoir manœuvrer le matériel de désincarcération"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE DEUX LIGNES DE 110MM (FA SEUL)."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE DEUX LIGNES DE 110MM (FA SEUL) », quelle proposition est exacte ?",
        "options": [
          "1er temps : il remplit d'émulseur les tuyaux de 45 mm jusqu'aux raccords d'injection (avant même la mise en eau des lignes de 110 mm)",
          "ZAT (zone d'attaque) : les lances y sont établies (lances canon et lances à main) ; cette zone peut-être divisée en secteurs d'attaque",
          "Utilisées par les C.C.F dans la lutte contre les feux de forët",
          "Etablir deux lignes de 110 mm de longueur maximale de 200 m chacune, permettant de disposer de deux points d'eau avancés (2 divisions 100 / 3 x 50)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE DEUX LIGNES DE 110MM (FA SEUL)."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE DEUX LIGNES DE 110MM (FA SEUL) », quelle proposition est exacte ?",
        "options": [
          "SOA Sapeur de liaison Conducteur",
          "Chef d'agrès Chef d'équipe ou 1er chef 2e chef Servant ou 1er servant 2e servant Sapeur de liaison",
          "transporter l'appareil debout,",
          "S'assurer de l'état de la ou des personnes à l'intérieur, les rassurer de vive voix (recommander aux passagers de ne pas quitter la cabine)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE DEUX LIGNES DE 110MM (FA SEUL)."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA) », quelle proposition est exacte ?",
        "options": [
          "2-détermination des chemins de fuite en fonction du terrain",
          "Les indemnes : impliqués non décédés et dont l'état ne nécessite aucun soin médical",
          "ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA)",
          "déterminer la cause de l'inondation et la supprimer (, Service municipalité , ONEE./Régie ..)"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA)."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA) », quelle proposition est exacte ?",
        "options": [
          "veiller à ce que la prise de courant soit munie d'une prise de terre,",
          "Les bras de levier d'écartement",
          "Etablir deux lignes de 110 mm, permettant de disposer de deux points d'eau avancés (2divisions 100 / 3 x50) jusqu'à 1 000 m",
          "« Comment vont réagir les 2 morceaux ? »"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA)."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA) », quelle proposition est exacte ?",
        "options": [
          "MPE toujours placée à l'extérieur pour éviter tout risque d'intoxication,",
          "laver et rincer le matériel après usage",
          "LES MATERIEL DE BASE A EMPORTER",
          "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 800 mètres"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA)."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "Réalisée par un ruban de couleur et tenu par les services de police ou gendarmerie",
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE",
          "fait noter ou note l'identité des impliqués",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "Zone d'alimentation",
          "En cas de présence d'un hayon : le déposer au préalable",
          "Les victimes : impliquées non indemnes",
          "garder toujours le contact et agir en concertation"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "2.1 Ces forces s'exercent lorsque l'arbre est tombé et repose sur un autre plan",
          "Protection de la population : Mesures d'évacuation et procédures de sensibilisation",
          "Zone de déploiement initial",
          "Distance appliquée à priori dans un premier temps mais évolutive"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "en cas d'intervention payante, remplit le formulaire d'intervention payante,",
          "La courroie d'amarre, pliée en deux est passée dans le ceinturon du bas vers le haut",
          "garder toujours le contact et agir en concertation",
          "ZDI (zone de déploiement initial) : elle sert à regrouper les moyens"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est exacte ?",
        "options": [
          "Fin d'intervention RATP -SNCF",
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE",
          "efficacité énergétique importante",
          "Cale en bois ou balle souple"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est exacte ?",
        "options": [
          "L'établissement d'alimentation permet d'alimenter la pompe de l'engin",
          "Les pompes électriques",
          "Il peut exister pour une même intervention plusieurs ZAL, ZE ou ZAT",
          "Une lance (eau ou mousse) et la LDT"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est exacte ?",
        "options": [
          "Protection des sauveteurs : tenue de feu et ARI en nombre suffisant,",
          "Ouvrir l'écarteur afin de déformer la porte et faire céder la serrure",
          "La BA nécessite 14 m en linéaire pour déposer la berce",
          "La pince à chat permet de saisir le cou du chat et de le serrer grâce à la poignée"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est exacte ?",
        "options": [
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance",
          "Bons de mouvement ST 30 bis",
          "ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENT D4UNE LCM (FA-CA ou BA) MANŒUVRE DE LA LANCE CANON MOUSSE",
          "LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE."
      }
    ]
  },
  {
    "id": "qcm-div-serie-1",
    "title": "OD — Opérations diverses (DIV 1) — Série 1",
    "level": "niveau-1",
    "category": "operations",
    "questions": [
      {
        "question": "Concernant « L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES », quelle proposition est exacte ?",
        "options": [
          "Quel que soit le type, les ascenseurs à traction à câbles comprennent généralement",
          "Le vide-cave est utilisé pour aspirer l'eau des caves, des its, des réservoirs",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "Distance appliquée à priori dans un premier temps mais évolutive"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES."
      },
      {
        "question": "Concernant « L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES », quelle proposition est exacte ?",
        "options": [
          "Etablir deux lignes de 110 mm, permettant de disposer de deux points d'eau avancés (2divisions 100 / 3 x50) jusqu'à 1 000 m",
          "Ils se composent principalement de",
          "ouvre la porte à l'aide de la clé spéciale,",
          "infiltration par remontée des eaux d'égouts ou de plans d'eau"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES."
      },
      {
        "question": "Concernant « L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES », quelle proposition est exacte ?",
        "options": [
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements",
          "Ces chaînes de traction sont composées de 2 parties, chacune est munie d'un crochet de raccourcissement qui permet d'attraper uniquement la chaîne",
          "fuite sur canalisation d'alimentation ou d'évacuation",
          "laver et rincer le mùatériel après usage"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES."
      },
      {
        "question": "Concernant « L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES », quelle proposition est exacte ?",
        "options": [
          "image: schéma de calage sur 3 points",
          "apprécier la nature et le nombre des locaux inondés ou menacés (étages inférieurs et supérieurs, locaux attenants)",
          "Objectif : Savoir augmenter l'espace de survie en utilisant un vérin",
          "rupture d'une conduite intérieure ou sous trottoir etc"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est exacte ?",
        "options": [
          "4/ Rôle du Chef d'agrès et de l'équipier",
          "Les agents de la Protection Civile répondent à un double objectif",
          "ne pas utiliser dans les locaux non ventilés,",
          "Parmi les victimes, on distingue"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — La reconnaissance."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est exacte ?",
        "options": [
          "Périmètre de sécurité d'un rayon de 50 m déterminé et délimité",
          "avant l'utilisation, vérifier si tous les organes sont bien fixés,",
          "déterminer la cause de l'inondation et la supprimer (, Service municipalité , ONEE./Régie ..)",
          "force de compression : sur laquelle on se limitera à une coupe de dégagement, la pression exercée étant capable de bloquer le guide chaîne"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — La reconnaissance."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est exacte ?",
        "options": [
          "Raccordement Tuyau de 45mm P = 10B",
          "Pulvérisateur projetant de la poudre",
          "En cas de présence d'un hayon : le déposer au préalable",
          "définir les moyens à mettre en œuvre (matériels et personnels)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — La reconnaissance."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est exacte ?",
        "options": [
          "Les pompes électriques",
          "garder toujours le contact et agir en concertation",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "faire éloigner les curieux"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — La reconnaissance."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est exacte ?",
        "options": [
          "DIFFERENTS INTERVENANTS ET LEURS MISSIONS",
          "Proscrire toute manipulation intempestive de circuit électrique (sonnette, éclairage…)",
          "A ces périodes de la journée tous les insectes ont alors rejoint leur nid",
          "bloquer le système de freinage"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — DIFFERENTS INTERVENANTS ET LEURS MISSIONS."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est exacte ?",
        "options": [
          "1er Equipe 2e Equipe Sapeur de liaison",
          "LES MATERIEL DE BASE A EMPORTER",
          "S'équiper des EPI adaptés, toujours en binôme",
          "Secours et sauvetage des personnes"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — DIFFERENTS INTERVENANTS ET LEURS MISSIONS."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est exacte ?",
        "options": [
          "Epuisement des eaux",
          "Survient sur une voie ouverte à la circulation publique",
          "avant l'utilisation, vérifier si tous les organes sont bien fixés,",
          "Chute de l'intervenant lors de travaux en hauteur Fractures diverses et traumatisme pouvant engager le pronostic vital Utilisation du LSPCC"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — DIFFERENTS INTERVENANTS ET LEURS MISSIONS."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est exacte ?",
        "options": [
          "Evacuations de zones menacées",
          "remet le matériel en place (échelle, clé machinerie) et rejoint son équipier,",
          "toutes les manipulations se feront HORS-TENSION",
          "Pointeau ou séccoise"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — DIFFERENTS INTERVENANTS ET LEURS MISSIONS."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "Ne travailler que sous de bonnes conditions de visibilités,",
          "MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION",
          "Couper le contact avant d'effectuer un contrôle sur la chaîne",
          "un système de traction au-dessus de la cage de l'ascenseur,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "ne jamais l'utiliser en relais,",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "les ascenseurs hydrauliques",
          "Prévention des inondations ; entretien et nettoyage"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "Pour évaluer ce volume, il faut faire le calcul suivant",
          "prendre les précautions nécessaires lors du remplissage de carburant,",
          "De diminuer les pertes de charges et les \"coups de bélier\"",
          "veiller à ce que la prise de courant soit munie d'une prise de terre,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) », quelle proposition est exacte ?",
        "options": [
          "Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)",
          "Chute de matériaux Blessures au niveau du crane pouvant entrainer des lésions irreversibles Casque à l'intérieur de la tenue de protection",
          "Perte de charge dans les tuyaux de 70 mm : 1,8 bars",
          "Toujours travailler avec une chaîne bien affûtée"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)."
      },
      {
        "question": "Concernant « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) », quelle proposition est exacte ?",
        "options": [
          "Les agents de la Protection Civile ont à leur disposition un certain nombre de matériels d'épuisement",
          "MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "Les pompes électriques"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)."
      },
      {
        "question": "Concernant « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) », quelle proposition est exacte ?",
        "options": [
          "5- procéder à la coupe d'abattage",
          "Ce sont les causes et l'importance de l'inondation qui vont déterminer le type de matériel à utiliser",
          "Bouchon du réservoir d'essence",
          "Situation : Reconnaître les lieux (type de la machine, emplacement de la cabine et du local de la machinerie)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)."
      },
      {
        "question": "Concernant « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) », quelle proposition est exacte ?",
        "options": [
          "MANŒUVRE DE LA LANCE CANON MOUSSE",
          "Il existe plusieurs types de matériel, par exemple",
          "Se méfier des conduits de fumée désaffectés qui peuvent être en mauvais état",
          "Maintien de l'ordre"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)."
      },
      {
        "question": "Concernant « Mise en œuvre », quelle proposition est exacte ?",
        "options": [
          "Débit de l'installation",
          "faire descendre l'hydro-éjecteur avec une commande en évitant les chocs (raccorder la commande au clapet de vidange),",
          "Basculer l'écheveau sur le flanc et ramener le demi-raccord qui se trouvait au sol sur le manchon pour l'attacher avec la courroie",
          "MPE toujours placée à l'extérieur pour éviter tout risque d'intoxication,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Mise en œuvre."
      }
    ]
  },
  {
    "id": "qcm-div-serie-2",
    "title": "OD — Opérations diverses (DIV 1) — Série 2",
    "level": "niveau-2",
    "category": "operations",
    "questions": [
      {
        "question": "Concernant « Mise en œuvre », quelle proposition est exacte ?",
        "options": [
          "ne jamais l'utiliser en relais,",
          "Ils s'assurent de l'ouverture complète des tubulures de la division",
          "Prévention des inondations ; entretien et nettoyage",
          "Zone de déploiement initial"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Mise en œuvre."
      },
      {
        "question": "Concernant « Mise en œuvre », quelle proposition est exacte ?",
        "options": [
          "amarrer la MPE si la surface n'est pas plane,",
          "faire descendre l'hydro-éjecteur avec une commande en évitant les chocs (raccorder la commande au clapet de vidange),",
          "Extraire le vitrage en le poussant vers l'extérieur",
          "Placer la poignée parallèle au plafond"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Mise en œuvre."
      },
      {
        "question": "Concernant « Mise en œuvre », quelle proposition est exacte ?",
        "options": [
          "La couverture est utilisée pour la contention des lézards, des iguanes. En jetant la couverture sur l'animal, il va se sentir caché et va se calmer",
          "manœuvrer le volant prévu à cet effet, lorsque la cabine est arrivée à hauteur d'un étage, une marque apparaît sur le câble,",
          "Plastique type polycarbonate : La casse est difficile, il faut le retirer/déboîter à l'aide d'un outil de forcement",
          "utiliser une crépine,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Mise en œuvre."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "Les bras de levier d'écartement",
          "reste au niveau de la porte palière par laquelle sera réalisée l'évacuation,",
          "Les Moto-Pompes Remorquables (M.P.R.)",
          "Ces chaînes de traction sont composées de 2 parties, chacune est munie d'un crochet de raccourcissement qui permet d'attraper uniquement la chaîne"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "A partir de 50ppm, il nécessaire d'effectuer une évacuation pour une ventilation des lieux",
          "se renseigner sur l'état des personnes à l'intérieur de la cabine et les rassurer",
          "Les Moto-Pompes Flottantes CCC 6000",
          "chat perché au sommet d'un arbre. griffure morsure Ce n'est pas une urgence"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "Utilisées par les C.C.F dans la lutte contre les feux de forët",
          "toutes les manipulations se feront HORS-TENSION",
          "Le corps de la cisaille : il supporte les bras de levier d'écartement et contient le corps du ou des vérins (double effet)",
          "« Mon périmètre de sécurité est-il suffisant ? »"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « 3/ Les pompes électriques », quelle proposition est exacte ?",
        "options": [
          "Bouton d'arrêt de la manette des gaz",
          "L'établissement rapide d'une seconde lance sur la division",
          "Dévidoir de droite avec panier + matériels sur ordre 1 tuyau de 70 x 20 m + injecteur + bidons d'émulseur",
          "ne jamais immerger la fiche du câble,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 3/ Les pompes électriques."
      },
      {
        "question": "Concernant « 3/ Les pompes électriques », quelle proposition est exacte ?",
        "options": [
          "MANŒUVRE DE LA LANCE CANON MOUSSE",
          "Le chef d'agrès désigne au conducteur l'orifice d'alimentation du poteau relais",
          "veiller à ce que la prise de courant soit munie d'une prise de terre,",
          "Préparer des cartes des risques"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 3/ Les pompes électriques."
      },
      {
        "question": "Concernant « 3/ Les pompes électriques », quelle proposition est exacte ?",
        "options": [
          "Les bras de levier d'écartement",
          "lance canon, tromblon et accessoires",
          "une pompe électrique doit toujours être dans l'eau lors de son fonctionnement, mais pas complètement immergée,",
          "Couper les montants en prenant garde de ne pas sectionner les vérins du coffre (les gérer au préalable)"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 3/ Les pompes électriques."
      },
      {
        "question": "Concernant « 3/ Les pompes électriques », quelle proposition est exacte ?",
        "options": [
          "amarrer la pompe au moyen d'une commande,",
          "Écarter jusqu'à extraire le dispositif coulissant",
          "Tous les moyens de calage et d'arrimage des grosses pièces seront impérativement établis avant le travail de tronçonnage",
          "extincteur a poudre et CO2"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 3/ Les pompes électriques."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est exacte ?",
        "options": [
          "Les aspirateurs à eau",
          "course verticale pas vraiment limitée",
          "Insérer l'écarteur dans le jour venant d'être créé",
          "Parmi les victimes, on distingue"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — II / Le matériel divers."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est exacte ?",
        "options": [
          "Il assure la surveillance des tuyaux de 45 mm et contrôle régulièrement le niveau d'émulseur et rend compte de la quantité restante",
          "Distance appliquée à priori dans un premier temps mais évolutive",
          "utiliser un aspirateur à eau pour une hauteur d'eau ≤ 5 cm,",
          "Se méfier des conduits de fumée désaffectés qui peuvent être en mauvais état"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — II / Le matériel divers."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est exacte ?",
        "options": [
          "brancher l'appareil dans un autre local que le local inondé, sur une prise reliée à la terre,",
          "Non toxique pour les personnes, non corrosif",
          "Si l'ouverture de porte est rendue difficile par le cadre de la vitre, le découper au moyen de la cisaille",
          "indique par radio au chef d'agrès l'évolution dans le déplacement de la cabine,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — II / Le matériel divers."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est exacte ?",
        "options": [
          "Stationner le véhicule à distance,",
          "ne pas placer l'appareil sous des écoulements d'eau,",
          "course verticale pas vraiment limitée",
          "Au cours de l'attaque, le port complet des EPI est obligatoire"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — II / Le matériel divers."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est exacte ?",
        "options": [
          "ouvre la porte à l'aide de la clé spéciale,",
          "Combinaison étanche aux insectes",
          "Lors d'une inondation, l'eau peut cacher toutes sortes de pièges (trous, outils, ....)",
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — III/ Les règles de sécurité."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est exacte ?",
        "options": [
          "prendre les coordonnées de la société de dépannage pour les prévenir",
          "un système de traction au-dessus de la cage de l'ascenseur,",
          "Les pompes thermiques",
          "LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — III/ Les règles de sécurité."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est exacte ?",
        "options": [
          "La lacette est une cordelette d'une longueur de 1,20 m. Elle permet de museler tous les animaux à museau pointu",
          "toujours éteindre le moteur avant de faire le plein d'essence,",
          "prendre les coordonnées de la société de dépannage pour les prévenir",
          "Il assure la surveillance des tuyaux de 45 mm et contrôle régulièrement le niveau d'émulseur et rend compte de la quantité restante"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — III/ Les règles de sécurité."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est exacte ?",
        "options": [
          "L'agent de la Protection Civile doit mesurer le risque et rester attentif, dans le but de maintenir Sa sécurité et celle des autres intervenants",
          "ETABLISSEMENT VERTICAL SANS L.A",
          "La glacière permet de placer le serpent après sa capture. On peut ainsi le transporter en toute sécurité",
          "ne pas utiliser dans les locaux non ventilés,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — III/ Les règles de sécurité."
      },
      {
        "question": "Concernant « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI », quelle proposition est exacte ?",
        "options": [
          "LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI",
          "2e équipe fourgon Sapeur de liaison",
          "Ils s'assurent de l'ouverture complète des tubulures de la division",
          "Comme il n'a pas d'odeur et qu'il est invisible à l'oeil, seul un appareil de mesures permet de donner l'alarme"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI."
      },
      {
        "question": "Concernant « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI », quelle proposition est exacte ?",
        "options": [
          "Ne pas pulvériser loin de l'orifice mais toujours dans l'entrée principale utilisée par les insectes",
          "Protège main avant (Qui déclenche le frein de chaine)",
          "La ligne de 110 mm peut être établie du point d'eau vers le point d'attaque dans certaines circonstances",
          "Précision au niveau du déplacement"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI."
      }
    ]
  },
  {
    "id": "qcm-div-serie-3",
    "title": "OD — Opérations diverses (DIV 1) — Série 3",
    "level": "niveau-avance",
    "category": "operations",
    "questions": [
      {
        "question": "Concernant « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI », quelle proposition est exacte ?",
        "options": [
          "Poignée du lanceur",
          "2 tricoises de 100 mm du CA ou BA",
          "ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENT D4UNE LCM (FA-CA ou BA) MANŒUVRE DE LA LANCE CANON MOUSSE",
          "Une fois le vitrage brisé, passez la main à l'intérieur pour déposer le vitrage entier vers l'extérieur"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI."
      },
      {
        "question": "Concernant « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI », quelle proposition est exacte ?",
        "options": [
          "coupe l'alimentation à l'exception de l'éclairage cabine,",
          "Parmi les victimes, on distingue",
          "force de compression : sur laquelle on se limitera à une coupe de dégagement, la pression exercée étant capable de bloquer le guide chaîne",
          "Bouton d'arrêt de la manette des gaz"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI."
      },
      {
        "question": "Concernant « Démarrage », quelle proposition est exacte ?",
        "options": [
          "ZDI (zone de déploiement initial) : elle sert à regrouper les moyens",
          "toutes les manipulations se feront HORS-TENSION",
          "Contrôle entrées/sorties si possible",
          "Placer la pointe du pied droit dans le protège main arrière"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Démarrage."
      },
      {
        "question": "Concernant « Démarrage », quelle proposition est exacte ?",
        "options": [
          "MARCHE GENERALE DES OPERATIONS",
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE",
          "Chute de matériaux Blessures au niveau du crane pouvant entrainer des lésions irreversibles Casque à l'intérieur de la tenue de protection",
          "Mettre le starter, enfoncer le levier des gaz et le bouton de blocage"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Démarrage."
      },
      {
        "question": "Concernant « Démarrage », quelle proposition est exacte ?",
        "options": [
          "Tirer le cordon de lancement jusqu'au déclenchement du premier allumage audible",
          "Diamètre de la conduite",
          "fait prendre le matériel,",
          "Cale en bois ou balle souple"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Démarrage."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est exacte ?",
        "options": [
          "Ne travailler que sous de bonnes conditions de visibilités,",
          "Utiliser le lot de sauvetage si progression en hauteur",
          "Ne jamais travailler seul, une personne doit se trouver à proximité en cas d'urgence",
          "Ce sont les causes et l'importance de l'inondation qui vont déterminer le type de matériel à utiliser"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Précautions."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est exacte ?",
        "options": [
          "Cahier d'observations DSA",
          "Si besoin, terminer l'ouverture de porte en insérant l'écarteur dans l'espace créé après déformation",
          "Protège main avant (Qui déclenche le frein de chaine)",
          "Prendre la poignée en pleine main"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Précautions."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est exacte ?",
        "options": [
          "image: schéma de calage sur 4 points",
          "Cale en bois ou balle souple",
          "Écarter les pieds de façon à obtenir une meilleure mobilité,",
          "Evacuations de zones menacées"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Précautions."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est exacte ?",
        "options": [
          "ou à partir de citernes de stockage, via un réseau simple",
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE",
          "Toujours travailler avec une chaîne bien affûtée",
          "Les blessés hospitalisés : victimes admises comme patients dans un hôpital plus de 24 heures"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Précautions."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est exacte ?",
        "options": [
          "De porter la puissance hydraulique à 1 000 l/min. par l'établissement d'une division50/2x 50",
          "La tronçonneuse doit se tenir fermement à 2 mains pour en assurer le contrôle permanent,",
          "L'hydro-éjecteur est utilisé pour aspirer un volume d'eau limité et pour pomper à partir d'une nappe d'eau",
          "Les gouttelettes du produit se déposeront sur le nid et à l'entrée"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 1-Principe de tronçonnage."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est exacte ?",
        "options": [
          "Raccordement Tuyau de 45mm P = 10B",
          "ne transporter la pompe qu'au moyen de sa poignée",
          "DIFFERENTS INTERVENANTS ET LEURS MISSIONS",
          "Être toujours en mesure de maîtriser la machine,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 1-Principe de tronçonnage."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est exacte ?",
        "options": [
          "On peut classer les espèces animales en 3 catégories",
          "Mettre le starter, enfoncer le levier des gaz et le bouton de blocage",
          "Ne jamais travailler en équilibre sur une échelle,",
          "Alarme 2 à 20% de la concentration LIE du méthane"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1-Principe de tronçonnage."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est exacte ?",
        "options": [
          "Comme il n'a pas d'odeur et qu'il est invisible à l'oeil, seul un appareil de mesures permet de donner l'alarme",
          "ETABLISSEMENT VERTICAL SANS L.A",
          "Placer une cale dans la poignée de porte",
          "Ne jamais scier au dessus de la hauteur des épaules,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 1-Principe de tronçonnage."
      },
      {
        "question": "Concernant « 2-Forces de compression et de tension », quelle proposition est exacte ?",
        "options": [
          "ne jamais immerger la fiche du câble,",
          "illustration: tronçonneuse en utilisation",
          "informe le propriétaire ou le gardien de l'immeuble de l'intervention,",
          "2-Forces de compression et de tension"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 2-Forces de compression et de tension."
      },
      {
        "question": "Concernant « 2-Forces de compression et de tension », quelle proposition est exacte ?",
        "options": [
          "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 800 mètres",
          "course verticale limitée à une hauteur entre 15 et 18 m",
          "Bons de mouvement ST 30 bis",
          "2.1 Ces forces s'exercent lorsque l'arbre est tombé et repose sur un autre plan"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 2-Forces de compression et de tension."
      },
      {
        "question": "Concernant « 2-Forces de compression et de tension », quelle proposition est exacte ?",
        "options": [
          "Voici les schémas de balisage de différents types d'accidents",
          "Fiche individuelle de signalement des incidents et agressions",
          "force de compression : sur laquelle on se limitera à une coupe de dégagement, la pression exercée étant capable de bloquer le guide chaîne",
          "Alarme 2 à 20% de la concentration LIE du méthane"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 2-Forces de compression et de tension."
      },
      {
        "question": "Concernant « 2-Forces de compression et de tension », quelle proposition est exacte ?",
        "options": [
          "coupe l'éclairage et laisse la machine hors service,",
          "La MPVE (Motopompe Volumétrique Emulseur)",
          "Stationner le véhicule à distance,",
          "Ces forces devront être très clairement identifiées avant la coupe, de façon à ne pas être surpris lors de la libération"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 2-Forces de compression et de tension."
      },
      {
        "question": "Concernant « Abattage d'un arbre », quelle proposition est exacte ?",
        "options": [
          "L'établissement d'une division au plus près du sinistre",
          "1- Identification du tronc à abattre",
          "TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES",
          "placer le reptile dans un sac"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Abattage d'un arbre."
      },
      {
        "question": "Concernant « Abattage d'un arbre », quelle proposition est exacte ?",
        "options": [
          "2 raccords d'injection",
          "De diminuer les pertes de charges et les \"coups de bélier\"",
          "2-détermination des chemins de fuite en fonction du terrain",
          "Les cuissardes évitent aux sauveteurs d'avoir les vêtements humides"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Abattage d'un arbre."
      },
      {
        "question": "Concernant « Abattage d'un arbre », quelle proposition est exacte ?",
        "options": [
          "4- Déterminer la direction de la chute",
          "Les cuissardes évitent aux sauveteurs d'avoir les vêtements humides",
          "faire descendre l'hydro-éjecteur avec une commande en évitant les chocs (raccorder la commande au clapet de vidange),",
          "Effectuer un trait de scie vers le bas de chaque côté du pare-brise"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Abattage d'un arbre."
      }
    ]
  },
  {
    "id": "qcm-div-serie-4",
    "title": "OD — Opérations diverses (DIV 1) — Série 4",
    "level": "niveau-1",
    "category": "operations",
    "questions": [
      {
        "question": "Concernant « Abattage d'un arbre », quelle proposition est exacte ?",
        "options": [
          "quantifier la hauteur et le volume d'eau à épuiser",
          "5- procéder à l'entaille d'abattage",
          "le pointeau repose dans un coin de la vitre,",
          "Epuisement des eaux"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Abattage d'un arbre."
      },
      {
        "question": "Concernant « 1 – Types d'ascenseurs », quelle proposition est exacte ?",
        "options": [
          "On distingue essentiellement deux types de familles d'ascenseur",
          "Plastique type polycarbonate : La casse est difficile, il faut le retirer/déboîter à l'aide d'un outil de forcement",
          "La destruction doit toujours se dérouler à la tombée de la nuit, ou le matin avant le lever du soleil",
          "Protège main avant (Qui déclenche le frein de chaine)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 1 – Types d'ascenseurs."
      },
      {
        "question": "Concernant « 1 – Types d'ascenseurs », quelle proposition est exacte ?",
        "options": [
          "Les ascenseurs à traction à câbles sont les types d'ascenseurs que l'on rencontre le plus, notamment dans les bâtiments de bureaux",
          "Provoque au moins une victime, c'est-à-dire un usager ayant nécessité des soins médicaux",
          "les ascenseurs à traction à câble,",
          "Outil de forcement et de déblai"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1 – Types d'ascenseurs."
      },
      {
        "question": "Concernant « 1 – Types d'ascenseurs », quelle proposition est exacte ?",
        "options": [
          "se protéger les mains par des gants",
          "penser au refroidissement du moteur",
          "les ascenseurs hydrauliques",
          "Couper les montants en prenant garde de ne pas sectionner les vérins du coffre (les gérer au préalable)"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1 – Types d'ascenseurs."
      },
      {
        "question": "Concernant « 1 – Types d'ascenseurs », quelle proposition est exacte ?",
        "options": [
          "ne pas placer l'appareil sous des écoulements d'eau,",
          "En règle générale, ces deux types utilisent l'énergie électrique pour déplacer les cabines verticalement (moteur électrique continu ou alternatif)",
          "Ils établissent les tuyaux de 45 mm des raccords d'injection vers la MPVE (1 tuyau directement raccordé sur la MPVE avant la division 50x2x50)",
          "Insérer une cale ou la balle en mousse dans la poignée intérieure de la porte afin de faciliter le déblocage de cette dernière"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 1 – Types d'ascenseurs."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est exacte ?",
        "options": [
          "espèces qui vivent dans la nature et qui ne sont pas habituées au contact avec l'homme",
          "Le matériel utilisé pour la destruction est un pulvérisateur à pression préalable contenant un produit insecticide dont les qualités sont les suiva...",
          "sont utilisés en général pour satisfaire des déplacements relativement courts de l'ordre de 15 à 18 m max",
          "2 clés tricoises de 100 mm CA ou BA"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 3-Les ascenseurs hydrauliques."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est exacte ?",
        "options": [
          "poignée de contrôle",
          "sangler les raccords des tuyaux,",
          "Effectuer un trait de scie vers le bas de chaque côté du pare-brise",
          "Ils se composent principalement de"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 3-Les ascenseurs hydrauliques."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est exacte ?",
        "options": [
          "Pour les ascenseurs électriques",
          "pointes à couper : permettent l'utilisation d'un écarteur pour le découpage de plaque en métal très fine",
          "d'un ensemble pistons-cylindres hydrauliques placé sous la cabine de l'ascenseur,",
          "S'équiper des EPI adaptés, toujours en binôme"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 3-Les ascenseurs hydrauliques."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est exacte ?",
        "options": [
          "image: schéma de calage d'un véhicule sur 3 ou 4 points",
          "d'un réservoir d'huile,",
          "GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE",
          "pointes à écarter : sont les becs traditionnels mis en place sur l'écarteur. Ils sont munis de crantage externe et interne permettant une prise ou ..."
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 3-Les ascenseurs hydrauliques."
      },
      {
        "question": "Concernant « Description », quelle proposition est exacte ?",
        "options": [
          "162.Que dépose le personnel du FA-CA ou BA au ordre\" Pour l'établissement de la lance canon mousse, PMP (tel endroit), ETABLISSEZ ! \"",
          "Les ascenseurs à traction à câbles sont les types d'ascenseurs que l'on rencontre le plus, notamment dans les bâtiments de bureaux",
          "Les aspirateurs à eau",
          "Il peut exister pour une même intervention plusieurs ZAL, ZE ou ZAT"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Description."
      },
      {
        "question": "Concernant « Description », quelle proposition est exacte ?",
        "options": [
          "Ils se différencient entre eux selon le type de motorisation",
          "Maintien de l'ordre",
          "Hébergements des sinistres",
          "amarrer la MPE si la surface n'est pas plane,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Description."
      },
      {
        "question": "Concernant « Description », quelle proposition est exacte ?",
        "options": [
          "Elle est fixe ou semi-stationnaire dans le V.S.R, et peut disposer ou non de 2 dévidoirs équipés de flexibles",
          "à moteur-treuil à vis sans fin,",
          "MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION",
          "Ils sont composés des principaux éléments suivants"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Description."
      },
      {
        "question": "Concernant « Description », quelle proposition est exacte ?",
        "options": [
          "« Où est mon emplacement le plus sûr après la coupe ? »",
          "à moteur-treuil planétaire,",
          "3e et 4e lances (eau ou mousse)",
          "Les pompes électriques"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Description."
      },
      {
        "question": "Concernant « Avantages et inconvénients », quelle proposition est exacte ?",
        "options": [
          "Insérer l'écarteur dans le jour venant d'être créé",
          "course verticale pas vraiment limitée",
          "Effectuer une coupe de décharge à l'endroit du pliage après dégarnissage",
          "Le gaz au Maroc est distribué soit"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Avantages et inconvénients."
      },
      {
        "question": "Concernant « Avantages et inconvénients », quelle proposition est exacte ?",
        "options": [
          "suivant le type de motorisation précision au niveau de la vitesse et du déplacement",
          "Effectuer une coupe de décharge à l'endroit du pliage après dégarnissage",
          "Stationner le véhicule à distance,",
          "ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENT D4UNE LCM (FA-CA ou BA) MANŒUVRE DE LA LANCE CANON MOUSSE"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Avantages et inconvénients."
      },
      {
        "question": "Concernant « Avantages et inconvénients », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENT DE LA LIGNE D'ATTAQUE",
          "Objectif : Savoir manœuvrer le matériel de désincarcération",
          "rapidité de déplacement",
          "ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Avantages et inconvénients."
      },
      {
        "question": "Concernant « Avantages et inconvénients », quelle proposition est exacte ?",
        "options": [
          "prendre les coordonnées de la société de dépannage pour les prévenir",
          "Liaison personnelle",
          "FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT",
          "efficacité énergétique importante"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Avantages et inconvénients."
      },
      {
        "question": "Concernant « 1/Les mesures à prendre avant d'intervenir sur la cabine », quelle proposition est exacte ?",
        "options": [
          "1/Les mesures à prendre avant d'intervenir sur la cabine",
          "enregistre la marque de l'ascenseur ainsi que les coordonnées de la société de maintenance,",
          "engager le minimum de personnel",
          "tuyaux de 110 mm dans le cas d'établissements de lance canon"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 1/Les mesures à prendre avant d'intervenir sur la cabine."
      },
      {
        "question": "Concernant « 1/Les mesures à prendre avant d'intervenir sur la cabine », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENT VERTICAL SANS L.A",
          "les pompes thermiques,",
          "Dégarni les montants B et C et gérer les vitrages",
          "reconnaître les lieux (type d'ascenseur, emplacement de la cabine et du local machinerie),"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 1/Les mesures à prendre avant d'intervenir sur la cabine."
      },
      {
        "question": "Concernant « 1/Les mesures à prendre avant d'intervenir sur la cabine », quelle proposition est exacte ?",
        "options": [
          "faire éloigner les curieux",
          "Mettre le starter, enfoncer le levier des gaz et le bouton de blocage",
          "couper le courant au niveau de l'interrupteur général situé dans le local machinerie sauf éclairage de la cabine,",
          "ETABLISSEMENT VERTICAL SANS L.A"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1/Les mesures à prendre avant d'intervenir sur la cabine."
      }
    ]
  },
  {
    "id": "qcm-div-serie-5",
    "title": "OD — Opérations diverses (DIV 1) — Série 5",
    "level": "niveau-2",
    "category": "operations",
    "questions": [
      {
        "question": "Concernant « 1/Les mesures à prendre avant d'intervenir sur la cabine », quelle proposition est exacte ?",
        "options": [
          "laver et rincer le matériel après usage",
          "Accident sur la voie du milieu",
          "Le corps de la cisaille : il supporte les mâchoires et contient le corps du ou des vérins (double effet)",
          "se renseigner sur l'état des personnes à l'intérieur de la cabine et les rassurer"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 1/Les mesures à prendre avant d'intervenir sur la cabine."
      },
      {
        "question": "Concernant « Pour les ascenseurs électriques », quelle proposition est exacte ?",
        "options": [
          "Noter le numéro du service d'assistance de la marque de l'ascenseur et le donner au chef d'agrès afin d'avertir le technicien de garde",
          "transporter l'appareil debout,",
          "Il existe plusieurs types de matériel, par exemple",
          "Pour les ascenseurs électriques"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Pour les ascenseurs électriques."
      },
      {
        "question": "Concernant « Pour les ascenseurs électriques », quelle proposition est exacte ?",
        "options": [
          "vérifie que chacun porte son EPI complet,",
          "Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)",
          "Protège main avant (Qui déclenche le frein de chaine)",
          "débloquer le système de freinage,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Pour les ascenseurs électriques."
      },
      {
        "question": "Concernant « Pour les ascenseurs électriques », quelle proposition est exacte ?",
        "options": [
          "manœuvrer le volant prévu à cet effet, lorsque la cabine est arrivée à hauteur d'un étage, une marque apparaît sur le câble,",
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre",
          "5- procéder à la coupe d'abattage",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Pour les ascenseurs électriques."
      },
      {
        "question": "Concernant « Pour les ascenseurs électriques », quelle proposition est exacte ?",
        "options": [
          "Par le chef d'agrès en fonction du sinistre, des capacités hydrauliques de l'engin et/ou de ses caractéristiques",
          "bloquer le système de freinage",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "ZAT (zone d'attaque) : les lances y sont établies (lances canon et lances à main) ; cette zone peut-être divisée en secteurs d'attaque"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Pour les ascenseurs électriques."
      },
      {
        "question": "Concernant « Cabine bloquée à un étage dont la porte palière reste verrouillée », quelle proposition est exacte ?",
        "options": [
          "Insérer l'écarteur dans le jour et l'ouvrir afin de faire céder la serrure",
          "Effectuer la découpe de la partie inférieure",
          "Cabine bloquée à un étage dont la porte palière reste verrouillée",
          "Objectif : Savoir manœuvrer le matériel de désincarcération"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Cabine bloquée à un étage dont la porte palière reste verrouillée."
      },
      {
        "question": "Concernant « Cabine bloquée à un étage dont la porte palière reste verrouillée », quelle proposition est exacte ?",
        "options": [
          "Il assure la surveillance des tuyaux de 45 mm et contrôle régulièrement le niveau d'émulseur et rend compte de la quantité restante",
          "Matériel de base Matériel de base",
          "procéder à l'ouverture de la porte palière au moyen de la clé adaptée,",
          "Coupe pare-brise Scie sabre Halligan tool ou outils de forcement"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Cabine bloquée à un étage dont la porte palière reste verrouillée."
      },
      {
        "question": "Concernant « Cabine bloquée à un étage dont la porte palière reste verrouillée », quelle proposition est exacte ?",
        "options": [
          "SOA Sapeur de liaison Conducteur",
          "Interventions dans un rond point",
          "une fois la personne dégagée refermer et verrouiller la porte",
          "Implantation facile dans un immeuble existant"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Cabine bloquée à un étage dont la porte palière reste verrouillée."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est exacte ?",
        "options": [
          "Réglage facile de la vitesse de déplacement",
          "Epuisement des eaux",
          "Alarme 2 à 20% de la concentration LIE du méthane",
          "4/ Rôle du Chef d'agrès et de l'équipier"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 4/ Rôle du Chef d'agrès et de l'équipier."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est exacte ?",
        "options": [
          "Périmètre de sécurité d'un rayon de 50 m déterminé et délimité",
          "toujours éteindre le moteur avant de faire le plein d'essence,",
          "vérifie que chacun porte son EPI complet,",
          "Ne jamais travailler en équilibre sur une échelle,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 4/ Rôle du Chef d'agrès et de l'équipier."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est exacte ?",
        "options": [
          "chien blessé, accidenté ou inanimé morsures Approcher l'animal par l'arrière pour apprécier ses réactions. Museler le chien, le mettre sur un brancard",
          "Hébergement des sinistrés",
          "Ne pas pulvériser loin de l'orifice mais toujours dans l'entrée principale utilisée par les insectes",
          "fait prendre le matériel,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 4/ Rôle du Chef d'agrès et de l'équipier."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est exacte ?",
        "options": [
          "effectue sa reconnaissance,",
          "sont utilisés en général pour satisfaire des déplacements relativement courts de l'ordre de 15 à 18 m max",
          "ETABLISSEMENT D'UNE SECONDE LANCE SUR LA DIVISION",
          "vérifier le bon déroulement de l'assèchement (crépine, évacuation),"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 4/ Rôle du Chef d'agrès et de l'équipier."
      },
      {
        "question": "Concernant « 5/ Les mesures à prendre avant de quitter les lieux », quelle proposition est exacte ?",
        "options": [
          "S'équiper des EPI adaptés, toujours en binôme",
          "MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION",
          "5/ Les mesures à prendre avant de quitter les lieux",
          "Les blessés hospitalisés : victimes admises comme patients dans un hôpital plus de 24 heures"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 5/ Les mesures à prendre avant de quitter les lieux."
      },
      {
        "question": "Concernant « 5/ Les mesures à prendre avant de quitter les lieux », quelle proposition est exacte ?",
        "options": [
          "s'assurer de la fermeture des portes palières,",
          "Epuisement des eaux",
          "ne pas déplacer l'aspirateur avec le moteur en marche,",
          "La courroie d'amarre, pliée en deux est passée dans le ceinturon du bas vers le haut"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 5/ Les mesures à prendre avant de quitter les lieux."
      },
      {
        "question": "Concernant « 5/ Les mesures à prendre avant de quitter les lieux », quelle proposition est exacte ?",
        "options": [
          "Eclairer la zone pour faciliter le travail et renforcer la sécurité des intervenants",
          "laver et rincer le matériel après usage",
          "ne pas rétablir le courant,",
          "tuyaux de 110 mm dans le cas d'établissements de lance canon"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 5/ Les mesures à prendre avant de quitter les lieux."
      },
      {
        "question": "Concernant « 5/ Les mesures à prendre avant de quitter les lieux », quelle proposition est exacte ?",
        "options": [
          "sont utilisés en général pour satisfaire des déplacements relativement courts de l'ordre de 15 à 18 m max",
          "signaler la mise hors service de l'ascenseur,",
          "course verticale pas vraiment limitée",
          "Intervention sur route Accident sur 1 seule voie"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 5/ Les mesures à prendre avant de quitter les lieux."
      },
      {
        "question": "Concernant « Les actions à accomplir », quelle proposition est exacte ?",
        "options": [
          "ZAL (zone d'alimentation) : elle regroupe différents points d'eau",
          "Perte de charge dans les tuyaux de 70 mm : 1,8 bars",
          "Calage sur 3 points minimum 2 points coté victime + 1 une roue",
          "Situation : Reconnaître les lieux (type de la machine, emplacement de la cabine et du local de la machinerie)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Les actions à accomplir."
      },
      {
        "question": "Concernant « Les actions à accomplir », quelle proposition est exacte ?",
        "options": [
          "porcin : morsures, tentatives de charge (sanglier)",
          "chien blessé, accidenté ou inanimé morsures Approcher l'animal par l'arrière pour apprécier ses réactions. Museler le chien, le mettre sur un brancard",
          "S'assurer de l'état de la ou des personnes à l'intérieur, les rassurer de vive voix (recommander aux passagers de ne pas quitter la cabine)",
          "Raccordement Tuyau de 45mm P = 10B"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Les actions à accomplir."
      },
      {
        "question": "Concernant « Les actions à accomplir », quelle proposition est exacte ?",
        "options": [
          "course verticale limitée à une hauteur entre 15 et 18 m",
          "2 cannes plongeuses",
          "Utilisation des radios",
          "L'alimentation de la pompe doit être réalisée dès qu'une lance est établie (à l'exception de lances sur colonne humide)"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Les actions à accomplir."
      },
      {
        "question": "Concernant « Les actions à accomplir », quelle proposition est exacte ?",
        "options": [
          "Surveillance des victimes intoxiquées par inhalation de gaz toxique",
          "Pression à la lance : 6 bars (lance non autorégulée)",
          "Prendre au départ des secours deux postes portatifs pour une utilisation en réseau tactique à l'intérieur des locaux",
          "Survient sur une voie ouverte à la circulation publique"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Les actions à accomplir."
      }
    ]
  },
  {
    "id": "qcm-div-serie-6",
    "title": "OD — Opérations diverses (DIV 1) — Série 6",
    "level": "niveau-avance",
    "category": "operations",
    "questions": [
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est exacte ?",
        "options": [
          "On peut classer les espèces animales en 3 catégories",
          "Les chiens : tatouage ou puce, fichier central",
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance",
          "Le gaz au Maroc est distribué soit"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — GAZ = DANGER."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est exacte ?",
        "options": [
          "chat perché au sommet d'un arbre. griffure morsure Ce n'est pas une urgence",
          "Objectif : Savoir retrait une vitre",
          "à partir de bouteilles de gaz de 12kgs ou 3kgs",
          "les ascenseurs à traction à câble,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — GAZ = DANGER."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est exacte ?",
        "options": [
          "Les cuissardes évitent aux sauveteurs d'avoir les vêtements humides",
          "Fiche individuelle de signalement des incidents et agressions",
          "Prendre en considération le sens du fil du bois pour les cales",
          "ou à partir de citernes de stockage, via un réseau simple"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — GAZ = DANGER."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est exacte ?",
        "options": [
          "faire descendre l'hydro-éjecteur avec une commande en évitant les chocs (raccorder la commande au clapet de vidange),",
          "Le matériel utilisé pour la destruction est un pulvérisateur à pression préalable contenant un produit insecticide dont les qualités sont les suiva...",
          "la lance du dévidoir tournant",
          "LES RISQUES PRESENTES PAR LE GAZ"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — GAZ = DANGER."
      },
      {
        "question": "Concernant « Le monoxyde de carbone », quelle proposition est exacte ?",
        "options": [
          "regarder s'il y a un transformateur électrique à l'intérieur des locaux sinistrés",
          "Stationner le véhicule à distance,",
          "Dans le cas où une seconde lance (500 l/min.) est établie grâce à la division, la pression en sortie de pompe sera alors de 10 bars",
          "Comme il n'a pas d'odeur et qu'il est invisible à l'oeil, seul un appareil de mesures permet de donner l'alarme"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Le monoxyde de carbone."
      },
      {
        "question": "Concernant « Le monoxyde de carbone », quelle proposition est exacte ?",
        "options": [
          "Tirer la porte au maximum dans son rail coulissant pour laisser la plus grande ouverture possible",
          "faire descendre le vide-cave avec une commande en évitant les chocs,",
          "Jusqu'à 30ppm de CO, il n'y a pas de danger pour la santé des personnes",
          "Gêne à la progression des engins d'incendie"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Le monoxyde de carbone."
      },
      {
        "question": "Concernant « Le monoxyde de carbone », quelle proposition est exacte ?",
        "options": [
          "A partir de 50ppm, il nécessaire d'effectuer une évacuation pour une ventilation des lieux",
          "image: schéma de calage d'un véhicule sur 3 ou 4 points",
          "Écartement dans l'espace vitré",
          "Bouche d'incendie (BI)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Le monoxyde de carbone."
      },
      {
        "question": "Concernant « Le monoxyde de carbone », quelle proposition est exacte ?",
        "options": [
          "remet le matériel en place (échelle, clé machinerie) et rejoint son équipier,",
          "Dès 100ppm, la protection respiratoire est indispensable pour les sapeurs-pompiers et l'évacuation des personnes obligatoires",
          "attention à ne pas aggraver la situation par l'apport d'eau,",
          "Cabine bloquée à un étage dont la porte palière reste verrouillée"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Le monoxyde de carbone."
      },
      {
        "question": "Concernant « Les dangers d'explosion », quelle proposition est exacte ?",
        "options": [
          "d'un moteur électrique accouplé à une pompe hydraulique,",
          "Alarme 1 à 10% de la concentration LIE du méthane",
          "Le chef d'équipe déposes on matériel au point d'attaque, retourne au dévidoir et répercute l'ordre au servant. Le servant tire le dévidoir et le dé...",
          "Objectif : Savoir Ouvrir une porte (par utilisation du cadre de vitre)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Les dangers d'explosion."
      },
      {
        "question": "Concernant « Les dangers d'explosion », quelle proposition est exacte ?",
        "options": [
          "Ne jamais travailler seul, une personne doit se trouver à proximité en cas d'urgence",
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité",
          "ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS",
          "Alarme 2 à 20% de la concentration LIE du méthane"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Les dangers d'explosion."
      },
      {
        "question": "Concernant « Les dangers d'explosion », quelle proposition est exacte ?",
        "options": [
          "Prévention des inondations ; entretien et nettoyage",
          "En règle générale, ces établissements se font du point d'attaque au point d'eau",
          "Lecture MX2100 Essence SP GPL Butane Propane Gaz de ville / methane",
          "Cas particuliers (équipe à 3)"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Les dangers d'explosion."
      },
      {
        "question": "Concernant « LA PROTECTION », quelle proposition est exacte ?",
        "options": [
          "MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION",
          "Les pompes électriques",
          "évacue les personnes en toute sécurité,",
          "Protection des sauveteurs : tenue de feu et ARI en nombre suffisant,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — LA PROTECTION."
      },
      {
        "question": "Concernant « LA PROTECTION », quelle proposition est exacte ?",
        "options": [
          "MANŒUVRE DE LA LANCE CANON MOUSSE",
          "Protection de la population : Mesures d'évacuation et procédures de sensibilisation",
          "bovin : coups de cornes, tentatives de charge, coups de pieds (postérieurs)",
          "Ne pas pulvériser loin de l'orifice mais toujours dans l'entrée principale utilisée par les insectes"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — LA PROTECTION."
      },
      {
        "question": "Concernant « LA PROTECTION », quelle proposition est exacte ?",
        "options": [
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun",
          "Protection des victimes : victimes traitées et évacuées en urgence ,",
          "Stationner le véhicule à distance,",
          "Les agents de la Protection Civile ont à leur disposition un certain nombre de matériels d'épuisement"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — LA PROTECTION."
      },
      {
        "question": "Concernant « LA PROTECTION », quelle proposition est exacte ?",
        "options": [
          "Surveillance des victimes intoxiquées par inhalation de gaz toxique",
          "Rétablissement d'éclairage public",
          "vidanger le corps de pompe et rincer la MPE après chaque utilisation",
          "sécher l'appareil après utilisation"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LA PROTECTION."
      },
      {
        "question": "Concernant « Zone d'exclusion », quelle proposition est exacte ?",
        "options": [
          "Appareil qui permet de comprimer l'huile hydraulique pour servir les outils de sauvetage",
          "disposer le vide-cave bien à plat sur son embase,",
          "Parmi les blessés, on distingue",
          "Périmètre de sécurité d'un rayon de 50 m déterminé et délimité"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Zone d'exclusion."
      },
      {
        "question": "Concernant « Zone d'exclusion », quelle proposition est exacte ?",
        "options": [
          "Distance appliquée à priori dans un premier temps mais évolutive",
          "Les gouttelettes du produit se déposeront sur le nid et à l'entrée",
          "Effectuer la découpe de la partie inférieure",
          "Bouche d'incendie (BI)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Zone d'exclusion."
      },
      {
        "question": "Concernant « Zone d'exclusion », quelle proposition est exacte ?",
        "options": [
          "une fois la personne dégagée refermer et verrouiller la porte",
          "LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR",
          "Ces chaînes de traction sont composées de 2 parties, chacune est munie d'un crochet de raccourcissement qui permet d'attraper uniquement la chaîne",
          "Réalisée par un ruban de couleur et tenu par les services de police ou gendarmerie"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Zone d'exclusion."
      },
      {
        "question": "Concernant « Zone d'exclusion », quelle proposition est exacte ?",
        "options": [
          "Evacuation complète",
          "exigence très importante sur l'entretien",
          "Port des Equipement de protections individuelles: tenue de feu compléte, +ARI",
          "Alarme 2 à 20% de la concentration LIE du méthane"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Zone d'exclusion."
      },
      {
        "question": "Concernant « Matériel et produit », quelle proposition est exacte ?",
        "options": [
          "Le matériel utilisé pour la destruction est un pulvérisateur à pression préalable contenant un produit insecticide dont les qualités sont les suiva...",
          "Rétablissement d'éclairage public",
          "Outil de dégarnissage Crayon carrosserie Cisailles",
          "surveiller la pression à l'engin: 8 à 10 Bars lors de l'alimentation,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Matériel et produit."
      }
    ]
  },
  {
    "id": "qcm-div-serie-7",
    "title": "OD — Opérations diverses (DIV 1) — Série 7",
    "level": "niveau-1",
    "category": "operations",
    "questions": [
      {
        "question": "Concernant « Matériel et produit », quelle proposition est exacte ?",
        "options": [
          "Protège main avant (Qui déclenche le frein de chaine)",
          "Action pratiquement instantanée et irréversible par paralysie suivie de mort",
          "L'hydro-éjecteur est utilisé pour aspirer un volume d'eau limité et pour pomper à partir d'une nappe d'eau",
          "sont utilisés en général pour satisfaire des déplacements relativement courts de l'ordre de 15 à 18 m max"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Matériel et produit."
      },
      {
        "question": "Concernant « Matériel et produit », quelle proposition est exacte ?",
        "options": [
          "chat perché au sommet d'un arbre. griffure morsure Ce n'est pas une urgence",
          "Bouchon du réservoir d'essence",
          "Ils établissent les tuyaux de 45 mm des raccords d'injection vers la MPVE (1 tuyau directement raccordé sur la MPVE avant la division 50x2x50)",
          "Non toxique pour les personnes, non corrosif"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Matériel et produit."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est exacte ?",
        "options": [
          "Combinaison étanche aux insectes",
          "TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES",
          "Le chef d'équipe déposes on matériel au point d'attaque, retourne au dévidoir et répercute l'ordre au servant. Le servant tire le dévidoir et le dé...",
          "« Comment vont réagir les 2 morceaux ? »"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est exacte ?",
        "options": [
          "Risques Effets Moyens de protection",
          "rapidité de déplacement",
          "Protection des victimes : victimes traitées et évacuées en urgence ,",
          "Provoque au moins une victime, c'est-à-dire un usager ayant nécessité des soins médicaux"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est exacte ?",
        "options": [
          "Intoxication par les vapeurs au contact direct du produit Malaises ponctuels Masque de protection niveau 1",
          "Pour évaluer ce volume, il faut faire le calcul suivant",
          "Conducteur et passager Calage 4 points minimum + 1 roue",
          "s'assure qu'aucun dégât n'a été occasionné,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est exacte ?",
        "options": [
          "Les tués : toute personne qui décède sur le coup ou dans les trente jours qui suivent l'accident",
          "Réactions cutanées au produit Réaction allergique localisée Gant en caoutchouc et lunettes de protection",
          "On distingue essentiellement deux types de familles d'ascenseur",
          "Dans le cas où une seconde lance (500 l/min.) est établie grâce à la division, la pression en sortie de pompe sera alors de 10 bars"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est exacte ?",
        "options": [
          "Ne pas pulvériser loin de l'orifice mais toujours dans l'entrée principale utilisée par les insectes",
          "Les blessés : victimes non tuées",
          "ne transporter la pompe qu'au moyen de sa poignée",
          "Liaison personnelle (hormis F)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Conseils."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est exacte ?",
        "options": [
          "Basculer l'écheveau sur le flanc et ramener le demi-raccord qui se trouvait au sol sur le manchon pour l'attacher avec la courroie",
          "La pulvérisation d'insecticide doit être d'autant plus copieuse que l'ampleur de l'essaim est importante ou appréciée comme telle",
          "Couper le contact avant d'effectuer un contrôle sur la chaîne",
          "En règle générale, ces deux types utilisent l'énergie électrique pour déplacer les cabines verticalement (moteur électrique continu ou alternatif)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Conseils."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est exacte ?",
        "options": [
          "Protéger les parties saillantes",
          "bloquer le système de freinage",
          "Ne jamais frapper sur un tronc d'arbre renferment un essaim de guêpes ou de frelons",
          "Les tués : toute personne qui décède sur le coup ou dans les trente jours qui suivent l'accident"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Conseils."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est exacte ?",
        "options": [
          "Se méfier des conduits de fumée désaffectés qui peuvent être en mauvais état",
          "ZDI (zone de déploiement initial) : elle sert à regrouper les moyens",
          "espèces qui vivent dans la nature et qui ne sont pas habituées au contact avec l'homme",
          "ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENT D4UNE LCM (FA-CA ou BA) MANŒUVRE DE LA LANCE CANON MOUSSE"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Conseils."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est exacte ?",
        "options": [
          "On peut classer les espèces animales en 3 catégories",
          "Feuilleté : Se découpe à l'aide du coupe pare-brise ou d'une scie sabre. Protection respiratoire type masque FFP2 obligatoire (pour sauveteurs et v...",
          "En cas de piqûres multiples, demander le médecin",
          "le remettre aux forces de l'ordre, au vétérinaire"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — I/ Les espèces animales."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est exacte ?",
        "options": [
          "Débit de l'installation",
          "les lames courbes permettent la section de métaux aux diamètres inférieurs à celles-ci (montant avant (A) ou milieu (B)),",
          "Mettre le starter, enfoncer le levier des gaz et le bouton de blocage",
          "espèces qui vivent dans la nature et qui ne sont pas habituées au contact avec l'homme"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — I/ Les espèces animales."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est exacte ?",
        "options": [
          "Ne nécessite pas de cabanon de machinerie",
          "espèces protégées : faune sauvage captive; la détention d'espèces protégées est réglementée",
          "faire descendre l'hydro-éjecteur avec une commande en évitant les chocs (raccorder la commande au clapet de vidange),",
          "Insérer l'écarteur dans le jour et l'ouvrir afin de faire céder la serrure"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — I/ Les espèces animales."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est exacte ?",
        "options": [
          "chien blessé, accidenté ou inanimé morsures Approcher l'animal par l'arrière pour apprécier ses réactions. Museler le chien, le mettre sur un brancard",
          "Il faut s'approcher du nid avec discrétion",
          "espèces domestiques : espèces communes apprivoisées par l'homme",
          "La tronçonneuse doit se tenir fermement à 2 mains pour en assurer le contrôle permanent,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — I/ Les espèces animales."
      },
      {
        "question": "Concernant « 1/Les carnivores/ », quelle proposition est exacte ?",
        "options": [
          "Le lasso permet de maîtriser les chiens ou les chats",
          "Protection de la population : Mesures d'évacuation et procédures de sensibilisation",
          "Protection des victimes : victimes traitées et évacuées en urgence ,",
          "Vérifier mutuellement l'étanchéité des combinaisons,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 1/Les carnivores/."
      },
      {
        "question": "Concernant « 1/Les carnivores/ », quelle proposition est exacte ?",
        "options": [
          "Ascenseur à moteur à attaque directe",
          "La lacette est une cordelette d'une longueur de 1,20 m. Elle permet de museler tous les animaux à museau pointu",
          "Zone de déploiement initial",
          "faire descendre l'hydro-éjecteur avec une commande en évitant les chocs (raccorder la commande au clapet de vidange),"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 1/Les carnivores/."
      },
      {
        "question": "Concernant « 1/Les carnivores/ », quelle proposition est exacte ?",
        "options": [
          "3e et 4e lances (eau ou mousse)",
          "2e temps : il laisse sa MPVE au ralenti, en circuit fermé et la purge de temps en temps",
          "La cage est indispensable pour soigner ou transporter le chien ou le chat capturé",
          "FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1/Les carnivores/."
      },
      {
        "question": "Concernant « 1/Les carnivores/ », quelle proposition est exacte ?",
        "options": [
          "La pince à chat permet de saisir le cou du chat et de le serrer grâce à la poignée",
          "Insérer l'écarteur dans le jour venant d'être créé",
          "chien : morsures chat : morsures, griffures",
          "fait prendre le matériel,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 1/Les carnivores/."
      },
      {
        "question": "Concernant « 3/ Les reptiles », quelle proposition est exacte ?",
        "options": [
          "Le crochet à serpent permet de capturer les serpents sans les blesser et sans danger. C'est une tige métallique de 50 cm à 1 m, coudée à son extrémité",
          "espèces qui vivent dans la nature et qui ne sont pas habituées au contact avec l'homme",
          "La ligne de 110 mm peut être établie du point d'eau vers le point d'attaque dans certaines circonstances",
          "à partir de bouteilles de gaz de 12kgs ou 3kgs"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 3/ Les reptiles."
      },
      {
        "question": "Concernant « 3/ Les reptiles », quelle proposition est exacte ?",
        "options": [
          "La pince à serpent permet de saisir le serpent au plus près de la tête en le maintenant à distance",
          "Écartement dans l'espace vitré",
          "couper le courant au niveau de l'interrupteur général situé dans le local machinerie sauf éclairage de la cabine,",
          "Comme il n'a pas d'odeur et qu'il est invisible à l'oeil, seul un appareil de mesures permet de donner l'alarme"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 3/ Les reptiles."
      }
    ]
  },
  {
    "id": "qcm-div-serie-8",
    "title": "OD — Opérations diverses (DIV 1) — Série 8",
    "level": "niveau-2",
    "category": "operations",
    "questions": [
      {
        "question": "Concernant « 3/ Les reptiles », quelle proposition est exacte ?",
        "options": [
          "La glacière permet de placer le serpent après sa capture. On peut ainsi le transporter en toute sécurité",
          "Gants en caoutchouc renforcé",
          "Les pompes thermiques",
          "FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 3/ Les reptiles."
      },
      {
        "question": "Concernant « 3/ Les reptiles », quelle proposition est exacte ?",
        "options": [
          "La couverture est utilisée pour la contention des lézards, des iguanes. En jetant la couverture sur l'animal, il va se sentir caché et va se calmer",
          "Ne pas rentrer dans la «zone critique» pour éviter l'affrontement",
          "remet le matériel en place (échelle, clé machinerie) et rejoint son équipier,",
          "Positionner le coupe pare-brise de telle façon que"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 3/ Les reptiles."
      },
      {
        "question": "Concernant « 1/ Situations diverses », quelle proposition est exacte ?",
        "options": [
          "Insérer l'écarteur dans le jour et l'ouvrir afin de faire céder la serrure",
          "MISSION RISQUES CONDUITE A TENIR",
          "La ligne de 110 mm peut être établie du point d'eau vers le point d'attaque dans certaines circonstances",
          "Utilisées par les C.C.F dans la lutte contre les feux de forët"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 1/ Situations diverses."
      },
      {
        "question": "Concernant « 1/ Situations diverses », quelle proposition est exacte ?",
        "options": [
          "Epuisement des eaux",
          "poignée de maintien",
          "penser au refroidissement du moteur",
          "chien blessé, accidenté ou inanimé morsures Approcher l'animal par l'arrière pour apprécier ses réactions. Museler le chien, le mettre sur un brancard"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 1/ Situations diverses."
      },
      {
        "question": "Concernant « 1/ Situations diverses », quelle proposition est exacte ?",
        "options": [
          "Non toxique pour les personnes, non corrosif",
          "chien dans une voiture accidentée morsures Faire intervenir un animalier. Attraper l'animal avec un lasso et le faire sortir",
          "La pulvérisation d'insecticide doit être d'autant plus copieuse que l'ampleur de l'essaim est importante ou appréciée comme telle",
          "fait prendre le matériel,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 1/ Situations diverses."
      },
      {
        "question": "Concernant « 1/ Situations diverses », quelle proposition est exacte ?",
        "options": [
          "Basculer l'écheveau sur le flanc et ramener le demi-raccord qui se trouvait au sol sur le manchon pour l'attacher avec la courroie",
          "Identification du vitrage : repérer visuellement le marquage gravé dans le vitrage pour connaitre le type si présence d'un marquage",
          "chien méchant menaçant la sécurité morsure Faire intervenir un animalier. Maîtriser l'animal avec un lasso ou un filet. Faire intervenir les forces...",
          "Les agents de la Protection Civile répondent à un double objectif"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1/ Situations diverses."
      },
      {
        "question": "Concernant « Capture de reptile », quelle proposition est exacte ?",
        "options": [
          "amarrer la pompe au moyen d'une commande,",
          "Pincer la porte légèrement au-dessus de la poignée pour se dégager un jour de quelques centimètres",
          "se protéger les mains par des gants",
          "Être toujours en mesure de maîtriser la machine,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Capture de reptile."
      },
      {
        "question": "Concernant « Capture de reptile », quelle proposition est exacte ?",
        "options": [
          "Plastique type polycarbonate : La casse est difficile, il faut le retirer/déboîter à l'aide d'un outil de forcement",
          "engager le minimum de personnel",
          "ETABLISSEMENT D'UNE SECONDE LANCE SUR LA DIVISION",
          "Distance entre l'installation"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Capture de reptile."
      },
      {
        "question": "Concernant « Capture de reptile », quelle proposition est exacte ?",
        "options": [
          "La MPVE peut être mise en aspiration ou alimentée par la citerne d'un engin-pompe dont le moteur doit obligatoirement être à l'arrêt",
          "faire éloigner les curieux",
          "Objectif : Savoir Ouvrir une porte (par utilisation du cadre de vitre)",
          "Elles peuvent posséder des lames de différentes formes, pour de multiples applications"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Capture de reptile."
      },
      {
        "question": "Concernant « Capture de reptile », quelle proposition est exacte ?",
        "options": [
          "utiliser un crochet à serpent",
          "Maintien de l'ordre",
          "toujours éteindre le moteur avant de faire le plein d'essence,",
          "Evacuation complète"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Capture de reptile."
      },
      {
        "question": "Concernant « Le chien », quelle proposition est exacte ?",
        "options": [
          "Bouton d'arrêt de la manette des gaz",
          "suivant le type de motorisation précision au niveau de la vitesse et du déplacement",
          "On retrouve certains signes: érection des poils du dos, expressions du museau, positions de la queue et des oreilles",
          "Ils sont réalisés par le conducteur et éventuellement aidé par un personnel (SDL, sous-officier adjoint, etc.) au moyen de tuyaux de 70 mm, 110 mm ..."
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Le chien."
      },
      {
        "question": "Concernant « Le chien », quelle proposition est exacte ?",
        "options": [
          "Pour aborder un chien, l'homme doit se faire considérer comme l'individu dominant, l'animal adoptera alors une attitude de soumission",
          "ne jamais immerger la fiche du câble,",
          "Transports ambulatoires",
          "s'assure qu'aucun dégât n'a été occasionné,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Le chien."
      },
      {
        "question": "Concernant « Le chien », quelle proposition est exacte ?",
        "options": [
          "2e temps : il laisse sa MPVE au ralenti, en circuit fermé et la purge de temps en temps",
          "Chiens – Chats ne pas fixer l'animal, ne pas s'approcher trop vite et respecter la «zone de fuite»",
          "Protection des victimes : victimes traitées et évacuées en urgence ,",
          "Ouvrir l'écarteur afin de déformer la porte et faire céder la serrure"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Le chien."
      },
      {
        "question": "Concernant « Le chien », quelle proposition est exacte ?",
        "options": [
          "Ne pas rentrer dans la «zone critique» pour éviter l'affrontement",
          "Combinaison étanche aux insectes",
          "amarrer la MPE si la surface n'est pas plane,",
          "manœuvrer le volant prévu à cet effet, lorsque la cabine est arrivée à hauteur d'un étage, une marque apparaît sur le câble,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Le chien."
      }
    ]
  },
  {
    "id": "qcm-sr-serie-1",
    "title": "SR — Secours routier — Série 1",
    "level": "niveau-1",
    "category": "secourisme",
    "questions": [
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est exacte ?",
        "options": [
          "Objectif : Savoir gérer les différents vitrages et utiliser les outils adaptés en réduisant au maximum les débris et poussières",
          "Epuisement des eaux",
          "ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES",
          "Lecture MX2100 Essence SP GPL Butane Propane Gaz de ville / methane"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA)",
          "Un accident corporel (mortel et non mortel) de la circulation routière est un accident qui",
          "Relais (engin, motopompe, VEDI…)",
          "espèces qui vivent dans la nature et qui ne sont pas habituées au contact avec l'homme"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est exacte ?",
        "options": [
          "force de compression : sur laquelle on se limitera à une coupe de dégagement, la pression exercée étant capable de bloquer le guide chaîne",
          "LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION",
          "image: schéma de calage sur 4 points",
          "Provoque au moins une victime, c'est-à-dire un usager ayant nécessité des soins médicaux"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est exacte ?",
        "options": [
          "Survient sur une voie ouverte à la circulation publique",
          "2.1 Ces forces s'exercent lorsque l'arbre est tombé et repose sur un autre plan",
          "les lames droites permettent la section de métaux de diamètre plus important (montant arrière (C))",
          "Vérifier mutuellement l'étanchéité des combinaisons,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES."
      },
      {
        "question": "Concernant « Matériels », quelle proposition est exacte ?",
        "options": [
          "illustration: tronçonneuse en utilisation",
          "ZAL (zone d'alimentation) : elle regroupe différents points d'eau",
          "disposer le vide-cave bien à plat sur son embase,",
          "citerne environ 500 litres"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Matériels."
      },
      {
        "question": "Concernant « Matériels », quelle proposition est exacte ?",
        "options": [
          "La cage est indispensable pour soigner ou transporter le chien ou le chat capturé",
          "illustration: tronçonneuse en utilisation",
          "extincteur a poudre et CO2",
          "FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Matériels."
      },
      {
        "question": "Concernant « Matériels », quelle proposition est exacte ?",
        "options": [
          "course verticale limitée à une hauteur entre 15 et 18 m",
          "cône de balisage Gilets rétro réfléchissants Panneaux triflashs",
          "2 clés tricoises de 100 mm CA ou BA",
          "ouvrir le couvercle uniquement lorsque la prise est débranchée,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Matériels."
      },
      {
        "question": "Concernant « Matériels », quelle proposition est exacte ?",
        "options": [
          "Matériel d'électrogène",
          "S'équiper des EPI adaptés, toujours en binôme",
          "3 tuyaux de 70 x 20 m pliés en écheveau (dont un équipé d'une division)",
          "OUVRIR UNE PORTE (METHODE CLASSIQUE)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Matériels."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR BALISAGE », quelle proposition est exacte ?",
        "options": [
          "Comme il n'a pas d'odeur et qu'il est invisible à l'oeil, seul un appareil de mesures permet de donner l'alarme",
          "Etablissement au moyen du dévidoir",
          "On va s'intéresser ici au balisage réalisé avec le matériel du VSR (panneaux triflashs et cônes de Lubeck)",
          "Interventions dans un rond point"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR BALISAGE."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR BALISAGE », quelle proposition est exacte ?",
        "options": [
          "Voici les schémas de balisage de différents types d'accidents",
          "les lames droites permettent la section de métaux de diamètre plus important (montant arrière (C))",
          "poignée de maintien",
          "manœuvrer le volant prévu à cet effet, lorsque la cabine est arrivée à hauteur d'un étage, une marque apparaît sur le câble,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR BALISAGE."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR BALISAGE », quelle proposition est exacte ?",
        "options": [
          "Appareil qui permet de comprimer l'huile hydraulique pour servir les outils de sauvetage",
          "Intervention sur route Accident sur 1 seule voie",
          "Se méfier des conduits de fumée désaffectés qui peuvent être en mauvais état",
          "L'utilisation d'émulseur est toujours suivie d'un abondant rinçage"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR BALISAGE."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR BALISAGE », quelle proposition est exacte ?",
        "options": [
          "à moteur-treuil planétaire,",
          "Intervention dans un rond point",
          "Le matériel utilisé pour la destruction est un pulvérisateur à pression préalable contenant un produit insecticide dont les qualités sont les suiva...",
          "citerne environ 500 litres"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR BALISAGE."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR BALISAGE », quelle proposition est exacte ?",
        "options": [
          "Accident sur la voie de sortie",
          "débrancher la prise avant toute manipulation,",
          "Effectuer la découpe de la partie inférieure",
          "Mise à dispositions des moyens spécifiques"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR BALISAGE."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR BALISAGE », quelle proposition est exacte ?",
        "options": [
          "Le chef d'agrès rend compte de la mise en place du dispositif",
          "Périmètre de sécurité d'un rayon de 50 m déterminé et délimité",
          "Objectif : Savoir augmenter l'espace de survie en utilisant un vérin",
          "Interventions dans un rond point"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR BALISAGE."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR BALISAGE », quelle proposition est exacte ?",
        "options": [
          "course verticale pas vraiment limitée",
          "Protection de la population : Mesures d'évacuation et procédures de sensibilisation",
          "Accident sur la voie du milieu",
          "Une fois le vitrage brisé, passez la main à l'intérieur pour déposer le vitrage entier vers l'extérieur"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR BALISAGE."
      },
      {
        "question": "Concernant « Calage d'un véhicule sur ses roues », quelle proposition est exacte ?",
        "options": [
          "Calage d'un véhicule sur ses roues",
          "l'équipier assure la protection de son binôme à l'aide d'un bâton",
          "fuite sur canalisation d'alimentation ou d'évacuation",
          "Assistance aux sinistrés"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Calage d'un véhicule sur ses roues."
      },
      {
        "question": "Concernant « Calage d'un véhicule sur ses roues », quelle proposition est exacte ?",
        "options": [
          "Pulvérisateur projetant de la poudre",
          "image: schéma de calage d'un véhicule sur 3 ou 4 points",
          "une fois la personne dégagée refermer et verrouiller la porte",
          "Evacuations de zones menacées"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Calage d'un véhicule sur ses roues."
      },
      {
        "question": "Concernant « Calage d'un véhicule sur ses roues », quelle proposition est exacte ?",
        "options": [
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars pour 40 m",
          "espèces qui vivent dans la nature et qui ne sont pas habituées au contact avec l'homme",
          "DANGER : présence d'eau et d'électricité",
          "image: schéma de calage sur 3 points"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Calage d'un véhicule sur ses roues."
      },
      {
        "question": "Concernant « Calage d'un véhicule sur ses roues », quelle proposition est exacte ?",
        "options": [
          "Ce sont les causes et l'importance de l'inondation qui vont déterminer le type de matériel à utiliser",
          "informe le propriétaire ou le gardien de l'immeuble de l'intervention,",
          "Calage sur 3 points minimum 2 points coté victime + 1 une roue",
          "5/ Les mesures à prendre avant de quitter les lieux"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Calage d'un véhicule sur ses roues."
      },
      {
        "question": "Concernant « MARCHE GENERALE DES OPERATIONS », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENT VERTICAL SANS L.A",
          "2 tuyaux de 45 x 20 m pliés en écheveau dont l'un est doté d'une lance à double régulation",
          "Surveillance des victimes intoxiquées par inhalation de gaz toxique",
          "MARCHE GENERALE DES OPERATIONS"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — MARCHE GENERALE DES OPERATIONS."
      }
    ]
  },
  {
    "id": "qcm-sr-serie-2",
    "title": "SR — Secours routier — Série 2",
    "level": "niveau-2",
    "category": "secourisme",
    "questions": [
      {
        "question": "Concernant « MARCHE GENERALE DES OPERATIONS », quelle proposition est exacte ?",
        "options": [
          "Les blessés légers : victimes ayant fait l'objet de soins médicaux mais n'ayant pas été admises comme patients à l'hôpital plus de 24 heures",
          "1re et 2e lance (eau ou mousse)",
          "Objectif : Connaitre la MGO en secours routier",
          "ne pas pencher l'aspirateur lorsqu'il fonctionne,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — MARCHE GENERALE DES OPERATIONS."
      },
      {
        "question": "Concernant « MARCHE GENERALE DES OPERATIONS », quelle proposition est exacte ?",
        "options": [
          "définir avec précision les moyens nécessaires pour effectuer l'opération (motopompe, longueur et diamètre des tuyaux d'alimentation et de refouleme...",
          "ou à partir de citernes de stockage, via un réseau simple",
          "Réaction immédiate, Message d'ambiance complet, Demande de renfort",
          "Lorsqu'elle en reçoit l'ordre, l'équipe du CA ou BA arrête définitivement l'injection d'émulseur"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — MARCHE GENERALE DES OPERATIONS."
      },
      {
        "question": "Concernant « MARCHE GENERALE DES OPERATIONS », quelle proposition est exacte ?",
        "options": [
          "Perforer le pare-brise pour introduire la lame de scie",
          "Matériel de base Matériel de base",
          "Réaliser le calage de chaque véhicule impliqué où une victime est présente",
          "TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — MARCHE GENERALE DES OPERATIONS."
      },
      {
        "question": "Concernant « MARCHE GENERALE DES OPERATIONS », quelle proposition est exacte ?",
        "options": [
          "Par le chef d'agrès en fonction du sinistre, des capacités hydrauliques de l'engin et/ou de ses caractéristiques",
          "ne pas pencher l'aspirateur lorsqu'il fonctionne,",
          "Eclairer la zone pour faciliter le travail et renforcer la sécurité des intervenants",
          "La pression en sortie de pompe doit être de 8,75 bars, soit 9 bars pour un établissement de plain-pied"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — MARCHE GENERALE DES OPERATIONS."
      },
      {
        "question": "Concernant « 1) Pompe hydraulique », quelle proposition est exacte ?",
        "options": [
          "Le chef d'agrès rend compte de la mise en place du dispositif",
          "Objectif : Savoir retrait une vitre",
          "suit le chef d'agrès,",
          "Appareil qui permet de comprimer l'huile hydraulique pour servir les outils de sauvetage"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 1) Pompe hydraulique."
      },
      {
        "question": "Concernant « 1) Pompe hydraulique », quelle proposition est exacte ?",
        "options": [
          "Elle est fixe ou semi-stationnaire dans le V.S.R, et peut disposer ou non de 2 dévidoirs équipés de flexibles",
          "Chiens – Chats ne pas fixer l'animal, ne pas s'approcher trop vite et respecter la «zone de fuite»",
          "On peut classer les espèces animales en 3 catégories",
          "2-détermination des chemins de fuite en fonction du terrain"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 1) Pompe hydraulique."
      },
      {
        "question": "Concernant « 1) Pompe hydraulique », quelle proposition est exacte ?",
        "options": [
          "Débit de l'installation",
          "MISSION RISQUES CONDUITE A TENIR",
          "Il existe 2 types de pompes hydrauliques : thermique ou électrique",
          "En règle générale, ces deux types utilisent l'énergie électrique pour déplacer les cabines verticalement (moteur électrique continu ou alternatif)"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1) Pompe hydraulique."
      },
      {
        "question": "Concernant « 2) Cisaille », quelle proposition est exacte ?",
        "options": [
          "Ne jamais travailler seul, une personne doit se trouver à proximité en cas d'urgence",
          "manœuvrer le volant prévu à cet effet, lorsque la cabine est arrivée à hauteur d'un étage, une marque apparaît sur le câble,",
          "Lames; lames à bord tranchant",
          "4/ Rôle du Chef d'agrès et de l'équipier"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 2) Cisaille."
      },
      {
        "question": "Concernant « 2) Cisaille », quelle proposition est exacte ?",
        "options": [
          "Transports ambulatoires",
          "ne pas déplacer l'aspirateur avec le moteur en marche,",
          "Toujours transporter l'appareil le moteur arrêté",
          "poignée de contrôle"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 2) Cisaille."
      },
      {
        "question": "Concernant « 2) Cisaille », quelle proposition est exacte ?",
        "options": [
          "Prévoir un périmètre de sécurité",
          "Les victimes : impliquées non indemnes",
          "garder toujours le contact et agir en concertation",
          "poignée de maintien"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 2) Cisaille."
      },
      {
        "question": "Concernant « 2) Cisaille », quelle proposition est exacte ?",
        "options": [
          "Les gouttelettes du produit se déposeront sur le nid et à l'entrée",
          "Prévention des inondations ; entretien et nettoyage",
          "Aspiration (nappe ou cours d'eau)",
          "raccord avec bouchon"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 2) Cisaille."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "Gérer le pare brise et les vitrages selon les fiches techniques réalisées Dégarnir les montants",
          "Etablir deux lignes de 110 mm, permettant de disposer de deux points d'eau avancés (2divisions 100 / 3 x50) jusqu'à 1 000 m",
          "FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION",
          "Le vide-cave est utilisé pour aspirer l'eau des caves, des its, des réservoirs"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "Pression aux lances : 6 bars (lance non autorégulée)",
          "Les ascenseurs à traction à câbles sont les types d'ascenseurs que l'on rencontre le plus, notamment dans les bâtiments de bureaux",
          "Objectif : Savoir manœuvrer le matériel de désincarcération",
          "faire descendre l'hydro-éjecteur avec une commande en évitant les chocs (raccorder la commande au clapet de vidange),"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "Le chef d'agrès et le conducteur",
          "La couverture est utilisée pour la contention des lézards, des iguanes. En jetant la couverture sur l'animal, il va se sentir caché et va se calmer",
          "Elles peuvent posséder des lames de différentes formes, pour de multiples applications",
          "réaliser les missions et rendre compte"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "Ne jamais utiliser d'essence pour détruire un nid",
          "Non toxique pour les personnes, non corrosif",
          "rapidité de déplacement",
          "les lames courbes permettent la section de métaux aux diamètres inférieurs à celles-ci (montant avant (A) ou milieu (B)),"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "Les sangles de levage sont indispensables pour sortir un cheval ou un bovin tombé dans un trou, une piscine,…",
          "ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS",
          "Le corps de la cisaille : il supporte les bras de levier d'écartement et contient le corps du ou des vérins (double effet)",
          "utiliser un crochet à serpent"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "ne transporter la pompe qu'au moyen de sa poignée",
          "en version standard, nécessite un cabanon technique en toiture",
          "Les bras de levier d'écartement",
          "Ces forces devront être très clairement identifiées avant la coupe, de façon à ne pas être surpris lors de la libération"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT », quelle proposition est exacte ?",
        "options": [
          "DANGER : présence d'eau et d'électricité",
          "utiliser une crépine,",
          "FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT",
          "Travailler dans le sens classique de l'ouverture de la porte"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT », quelle proposition est exacte ?",
        "options": [
          "Liberté de mouvement des intervenants",
          "Effectuer la découpe de la partie inférieure",
          "amarrer la pompe au moyen d'une commande,",
          "Objectif : Savoir ouvrir une porte d'un véhicule sur le toit"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT », quelle proposition est exacte ?",
        "options": [
          "Pincer le bas de caisse pour créer une ouverture au niveau de la portière",
          "Réactions cutanées au produit Réaction allergique localisée Gant en caoutchouc et lunettes de protection",
          "Surveillance des victimes intoxiquées par inhalation de gaz toxique",
          "Hébergement des sinistrés"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT."
      }
    ]
  },
  {
    "id": "qcm-sr-serie-3",
    "title": "SR — Secours routier — Série 3",
    "level": "niveau-avance",
    "category": "secourisme",
    "questions": [
      {
        "question": "Concernant « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT », quelle proposition est exacte ?",
        "options": [
          "Objectif : Savoir Ouvrir une porte (par utilisation du cadre de vitre)",
          "Passer l'écarteur dans le jour de la porte au niveau du bas de caisse Ne pas se positionner entre l'outil et la portière",
          "La coupure de l'alimentation à la division pour remplacer ou prolonger l'établissement",
          "les ascenseurs à traction à câble,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (PAR UTILISATION DU CADRE DE VITRE) », quelle proposition est exacte ?",
        "options": [
          "Parmi les blessés, on distingue",
          "5- procéder à l'entaille d'abattage",
          "OUVRIR UNE PORTE (PAR UTILISATION DU CADRE DE VITRE)",
          "Provoque au moins une victime, c'est-à-dire un usager ayant nécessité des soins médicaux"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (PAR UTILISATION DU CADRE DE VITRE)."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (PAR UTILISATION DU CADRE DE VITRE) », quelle proposition est exacte ?",
        "options": [
          "« Comment vont réagir les 2 morceaux ? »",
          "Objectif : Savoir Ouvrir une porte (par utilisation du cadre de vitre)",
          "Outil de dégarnissage Crayon carrosserie Cisailles",
          "Prévention des inondations ; entretien et nettoyage"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (PAR UTILISATION DU CADRE DE VITRE)."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (PAR UTILISATION DU CADRE DE VITRE) », quelle proposition est exacte ?",
        "options": [
          "Avis de passage des sapeurs pompiers",
          "ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS",
          "Cale en bois ou balle souple",
          "respecter le périmétre de sécurité"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (PAR UTILISATION DU CADRE DE VITRE)."
      },
      {
        "question": "Concernant « Écrasement dans l'espace vitré », quelle proposition est exacte ?",
        "options": [
          "Le chef d'agrès désigne au conducteur l'orifice d'alimentation du poteau relais",
          "4- Déterminer la direction de la chute",
          "Écrasement dans l'espace vitré",
          "chat perché au sommet d'un arbre. griffure morsure Ce n'est pas une urgence"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Écrasement dans l'espace vitré."
      },
      {
        "question": "Concernant « Écrasement dans l'espace vitré », quelle proposition est exacte ?",
        "options": [
          "Lecture MX2100 Essence SP GPL Butane Propane Gaz de ville / methane",
          "GERER UN PARE-BRISE COLLE / JOINTE",
          "Pincer la porte légèrement au-dessus de la poignée pour se dégager un jour de quelques centimètres",
          "Interdiction d'accès de la zone au public et aux personnels d'intervention sauf ceux strictement nécessaires"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Écrasement dans l'espace vitré."
      },
      {
        "question": "Concernant « Écrasement dans l'espace vitré », quelle proposition est exacte ?",
        "options": [
          "Outil de forcement et de déblai",
          "TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES",
          "Le gaz au Maroc est distribué soit",
          "Attention aux véhicules équipés d'airbags latéraux dans les portières"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Écrasement dans l'espace vitré."
      },
      {
        "question": "Concernant « Écrasement dans l'espace vitré », quelle proposition est exacte ?",
        "options": [
          "Les blessés légers : victimes ayant fait l'objet de soins médicaux mais n'ayant pas été admises comme patients à l'hôpital plus de 24 heures",
          "Insérer l'écarteur dans le jour et l'ouvrir afin de faire céder la serrure",
          "Passer l'écarteur dans le jour de la porte au niveau du bas de caisse Ne pas se positionner entre l'outil et la portière",
          "utiliser un crochet à serpent"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Écrasement dans l'espace vitré."
      },
      {
        "question": "Concernant « Écartement dans l'espace vitré », quelle proposition est exacte ?",
        "options": [
          "LES MATERIEL DE BASE A EMPORTER",
          "Écartement dans l'espace vitré",
          "infiltration par remontée des eaux d'égouts ou de plans d'eau",
          "ne pas déplacer l'aspirateur avec le moteur en marche,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Écartement dans l'espace vitré."
      },
      {
        "question": "Concernant « Écartement dans l'espace vitré », quelle proposition est exacte ?",
        "options": [
          "le remettre aux forces de l'ordre, au vétérinaire",
          "ne transporter la pompe qu'au moyen de sa poignée",
          "Ouvrir l'écarteur afin de déformer la porte et faire céder la serrure",
          "Réaliser l'ouverture complète si nécessaire en plaçant l'écarteur au niveau des charnières"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Écartement dans l'espace vitré."
      },
      {
        "question": "Concernant « Écartement dans l'espace vitré », quelle proposition est exacte ?",
        "options": [
          "Le corps de la cisaille : il supporte les bras de levier d'écartement et contient le corps du ou des vérins (double effet)",
          "Voici les schémas de balisage de différents types d'accidents",
          "1er Equipe 2e Equipe Sapeur de liaison",
          "Si besoin, terminer l'ouverture de porte en insérant l'écarteur dans l'espace créé après déformation"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Écartement dans l'espace vitré."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (METHODE CLASSIQUE) », quelle proposition est exacte ?",
        "options": [
          "OUVRIR UNE PORTE (METHODE CLASSIQUE)",
          "ZE (zone émulseur) : les moyens émulseurs (CA/BA, BEM, citernes des pétroliers) y sont regroupés et employés",
          "en version standard, nécessite un cabanon technique en toiture",
          "Le corps de la cisaille : il supporte les bras de levier d'écartement et contient le corps du ou des vérins (double effet)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (METHODE CLASSIQUE)."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (METHODE CLASSIQUE) », quelle proposition est exacte ?",
        "options": [
          "Objectif : Savoir Ouvrir une porte (méthode classique)",
          "utiliser une crépine,",
          "Gêne à la progression des engins d'incendie",
          "Lance du dévidoir tournant (LDT)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (METHODE CLASSIQUE)."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (METHODE CLASSIQUE) », quelle proposition est exacte ?",
        "options": [
          "respecter les consignes données au départ",
          "2 tricoises de 100 mm du CA ou BA",
          "Cale en bois ou balle souple",
          "Précision au niveau du déplacement"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (METHODE CLASSIQUE)."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (METHODE CLASSIQUE) », quelle proposition est exacte ?",
        "options": [
          "2e équipe fourgon Sapeur de liaison",
          "sont utilisés en général pour satisfaire des déplacements relativement courts de l'ordre de 15 à 18 m max",
          "les pompes thermiques,",
          "Insérer l'Halligan tool (pince coupant) afin de créer un jour de quelques centimètres"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (METHODE CLASSIQUE)."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE COULISSANTE », quelle proposition est exacte ?",
        "options": [
          "Prendre en considération le sens du fil du bois pour les cales",
          "Objectif : Savoir Ouvrir une porte coulissante",
          "Intervention dans un rond point",
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE COULISSANTE."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE COULISSANTE », quelle proposition est exacte ?",
        "options": [
          "Placer la pointe du pied droit dans le protège main arrière",
          "Placer une cale dans la poignée de porte",
          "3 tuyaux de 70 x 20 m pliés en écheveau (dont un équipé d'une division)",
          "Parmi les victimes, on distingue"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE COULISSANTE."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE COULISSANTE », quelle proposition est exacte ?",
        "options": [
          "Extraire le vitrage en le poussant vers l'extérieur",
          "Eloigner les personnes non équipées,",
          "disposer le vide-cave bien à plat sur son embase,",
          "Insérer l'écarteur dans la partie arrière de la porte juste à côté du rail coulissant"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE COULISSANTE."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE COULISSANTE », quelle proposition est exacte ?",
        "options": [
          "Plastique type polycarbonate : La casse est difficile, il faut le retirer/déboîter à l'aide d'un outil de forcement",
          "Objectif : Savoir Ouvrir une porte (par utilisation du cadre de vitre)",
          "Écarter jusqu'à extraire le dispositif coulissant",
          "course verticale limitée à une hauteur entre 15 et 18 m"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE COULISSANTE."
      },
      {
        "question": "Concernant « AUGMENTER L'ESPACE DE SURVIE », quelle proposition est exacte ?",
        "options": [
          "Objectif : Savoir augmenter l'espace de survie en utilisant un vérin",
          "Couper le contact avant d'effectuer un contrôle sur la chaîne",
          "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon",
          "enregistre la marque de l'ascenseur ainsi que les coordonnées de la société de maintenance,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — AUGMENTER L'ESPACE DE SURVIE."
      }
    ]
  },
  {
    "id": "qcm-sr-serie-4",
    "title": "SR — Secours routier — Série 4",
    "level": "niveau-1",
    "category": "secourisme",
    "questions": [
      {
        "question": "Concernant « AUGMENTER L'ESPACE DE SURVIE », quelle proposition est exacte ?",
        "options": [
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "Poser une câle en bois, côté opposé au montant à redresser, puis la serrer contre le toit de l'habitacle avec un écarteur",
          "MARCHE GENERALE DES OPERATIONS",
          "des câbles reliant la cabine au contre-poids,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — AUGMENTER L'ESPACE DE SURVIE."
      },
      {
        "question": "Concernant « AUGMENTER L'ESPACE DE SURVIE », quelle proposition est exacte ?",
        "options": [
          "Couper les montants A et B selon la charte graphique en suivant un ordre judicieux",
          "ZE (zone émulseur) : les moyens émulseurs (CA/BA, BEM, citernes des pétroliers) y sont regroupés et employés",
          "Positionner le vérin contre la cale en bois et le montant",
          "Une fois brisée, retirer le restant de la vitre. Pour vous aider, il est possible de créer une poignée avec le ruban adhésif utilisé"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — AUGMENTER L'ESPACE DE SURVIE."
      },
      {
        "question": "Concernant « AUGMENTER L'ESPACE DE SURVIE », quelle proposition est exacte ?",
        "options": [
          "enregistre la marque de l'ascenseur ainsi que les coordonnées de la société de maintenance,",
          "Pousser le montant avec le vérin",
          "bovin : coups de cornes, tentatives de charge, coups de pieds (postérieurs)",
          "en version standard, nécessite un cabanon technique en toiture"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — AUGMENTER L'ESPACE DE SURVIE."
      },
      {
        "question": "Concernant « PAVILLON COMPLET », quelle proposition est exacte ?",
        "options": [
          "matériel de base+Dévidoir de droite (avec panier) matériels sur ordre matériel de base Dévidoir de droite (avec panier) matériels sur ordre matérie...",
          "sécher l'appareil après utilisation",
          "1- Identification du tronc à abattre",
          "Objectif : Réalisé l'accée à d'une victime incarcérée en dégageant le pavillon"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — PAVILLON COMPLET."
      },
      {
        "question": "Concernant « PAVILLON COMPLET », quelle proposition est exacte ?",
        "options": [
          "Alarme 2 à 20% de la concentration LIE du méthane",
          "Outil de dégarnissage Crayon carrosserie",
          "Rétablissement d'éclairage public",
          "5/ Les mesures à prendre avant de quitter les lieux"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — PAVILLON COMPLET."
      },
      {
        "question": "Concernant « PAVILLON COMPLET », quelle proposition est exacte ?",
        "options": [
          "Le conducteur assure la mise en route de la MPVE",
          "Ils sont réalisés par le conducteur et éventuellement aidé par un personnel (SDL, sous-officier adjoint, etc.) au moyen de tuyaux de 70 mm, 110 mm ...",
          "Coupe ceinture Protections de coupes Cisailles",
          "pas de souci de pollution"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — PAVILLON COMPLET."
      },
      {
        "question": "Concernant « PAVILLON COMPLET », quelle proposition est exacte ?",
        "options": [
          "Gérer le pare brise et les vitrages selon les fiches techniques réalisées Dégarnir les montants",
          "La courroie d'amarre est fermée",
          "Tous les moyens de calage et d'arrimage des grosses pièces seront impérativement établis avant le travail de tronçonnage",
          "Périmètre de sécurité d'un rayon de 50 m déterminé et délimité"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — PAVILLON COMPLET."
      },
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est exacte ?",
        "options": [
          "infiltration par remontée des eaux d'égouts ou de plans d'eau",
          "Outil de dégarnissage Crayon carrosserie Cisailles",
          "Faire assurer l'entretien des tronçonneuses dès le retour,",
          "Gants en caoutchouc renforcé"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Matériels nécessaires."
      },
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est exacte ?",
        "options": [
          "cône de balisage Gilets rétro réfléchissants Panneaux triflashs",
          "Coupe ceinture Protections de coupes",
          "Ne jamais travailler en équilibre sur une échelle,",
          "les pompes électriques"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Matériels nécessaires."
      },
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est exacte ?",
        "options": [
          "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon",
          "MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION",
          "Dégarni les montants B et C et gérer les vitrages",
          "Etablir deux lignes de 110 mm, permettant de disposer de deux points d'eau avancés (2divisions 100 / 3 x50) jusqu'à 1 000 m"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Matériels nécessaires."
      },
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est exacte ?",
        "options": [
          "Si demi-pavillon avant : couper selon la charte graphique les montants B et C",
          "Hébergements des sinistres",
          "Chef d'agrès Chef d'équipe ou 1er chef 2e chef Servant ou 1er servant 2e servant Sapeur de liaison",
          "A partir de 50ppm, il nécessaire d'effectuer une évacuation pour une ventilation des lieux"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Matériels nécessaires."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est exacte ?",
        "options": [
          "Objectif : Savoir augmenter l'espace de survie en utilisant un vérin",
          "GERER UN PARE-BRISE COLLE / JOINTE",
          "Régulation routière",
          "ETABLISSEMENTS DE DEUX LIGNES DE 110MM (FA SEUL)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — GERER UN PARE-BRISE COLLE / JOINTE."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est exacte ?",
        "options": [
          "ne pas utiliser dans les locaux non ventilés,",
          "Evacuations de zones menacées",
          "4- Déterminer la direction de la chute",
          "Objectif : Savoir identifier et déposer un pare brise (collé/jointé) en toute sécurité"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — GERER UN PARE-BRISE COLLE / JOINTE."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est exacte ?",
        "options": [
          "apprécier la nature et le nombre des locaux inondés ou menacés (étages inférieurs et supérieurs, locaux attenants)",
          "L'établissement rapide d'une seconde lance sur la division",
          "Coupe pare-brise ou scie sabre",
          "Conducteur et passager Calage 4 points minimum + 1 roue"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — GERER UN PARE-BRISE COLLE / JOINTE."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est exacte ?",
        "options": [
          "Ils se composent principalement de",
          "enregistre la marque de l'ascenseur ainsi que les coordonnées de la société de maintenance,",
          "Identifier le pare-brise comme feuilleté",
          "Accident sur la voie du milieu"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — GERER UN PARE-BRISE COLLE / JOINTE."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est exacte ?",
        "options": [
          "Identification des victimes",
          "GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE",
          "5 manchons souples, de taille variable, permettent de maintenir en place les tuyaux et de les guider au cours de l'établissement",
          "Couper les montants A et B selon la charte graphique en suivant un ordre judicieux"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est exacte ?",
        "options": [
          "Elle est fixe ou semi-stationnaire dans le V.S.R, et peut disposer ou non de 2 dévidoirs équipés de flexibles",
          "Il existe 2 types de pompes hydrauliques : thermique ou électrique",
          "Objectif : Savoir gérer les différents vitrages et utiliser les outils adaptés en réduisant au maximum les débris et poussières",
          "4- Déterminer la direction de la chute"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est exacte ?",
        "options": [
          "Pointeau ou séccoise",
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun",
          "Écarter les pieds de façon à obtenir une meilleure mobilité,",
          "Pour évaluer ce volume, il faut faire le calcul suivant"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est exacte ?",
        "options": [
          "L'établissement rapide d'une ligne de 70 mm en cas d'indisponibilité d'une colonne sèche ou humide",
          "MISSION RISQUES CONDUITE A TENIR",
          "Etablir deux lignes de 110 mm de longueur maximale de 200 m chacune, permettant de disposer de deux points d'eau avancés (2 divisions 100 / 3 x 50)",
          "Coupe pare-brise Scie sabre Halligan tool ou outils de forcement"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE."
      },
      {
        "question": "Concernant « LE RETRAIT DES VITRES », quelle proposition est exacte ?",
        "options": [
          "ne pas placer l'appareil sous des écoulements d'eau,",
          "utiliser un crochet à serpent",
          "Objectif : Savoir retrait une vitre",
          "des câbles reliant la cabine au contre-poids,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — LE RETRAIT DES VITRES."
      }
    ]
  },
];
