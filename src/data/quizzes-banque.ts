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
        "question": "L'alimentation peut être réalisée par ?",
        "options": [
          "Liaison personnelle",
          "Bon de prise en charge provisoire de matériel",
          "Perte de charge dans les tuyaux de 70 mm : 0,45 bar pour 60 m",
          "Aspiration (nappe ou cours d'eau)"
        ],
        "answer": 3,
        "explanation": "Aspiration (nappe ou cours d'eau)"
      },
      {
        "question": "L'alimentation peut être réalisée par ?",
        "options": [
          "L'éloignement de la zone émulseur ou l'impossibilité d'accès à cette dernière du CA ou BA impose l'alimentation de la MPVE par une MPT",
          "Relais (engin, motopompe, VEDI…)",
          "Il portera une attention toute particulière à celle-ci pour éviter qu'elle ne se déchausse et prive les deux engins de leur alimentation en eau",
          "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 1 600 mètres"
        ],
        "answer": 1,
        "explanation": "Relais (engin, motopompe, VEDI…)"
      },
      {
        "question": "Le mode d'alimentation de la pompe sur BI ou PI est subordonné à quel paramètre ?",
        "options": [
          "C'est le lieu situé entre le point d'attaque et le point d'eau, où est déposé le matériel jugé nécessaire par le chef de garde",
          "Zone de déploiement initial",
          "ZAT (zone d'attaque) : les lances y sont établies (lances canon et lances à main) ; cette zone peut-être divisée en secteurs d'attaque",
          "Distance entre l'installation"
        ],
        "answer": 3,
        "explanation": "Distance entre l'installation"
      },
      {
        "question": "Le mode d'alimentation de la pompe sur BI ou PI est subordonné à quel paramètre ?",
        "options": [
          "Ils établissent les tuyaux de 45 mm des raccords d'injection vers la MPVE (1 tuyau directement raccordé sur la MPVE avant la division 50x2x50)",
          "Etablissement au moyen du dévidoir",
          "Hydraulique BI-PI et l'engin",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'eau et de l'air"
        ],
        "answer": 2,
        "explanation": "Hydraulique BI-PI et l'engin"
      },
      {
        "question": "Le mode d'alimentation de la pompe sur BI ou PI est subordonné à quel paramètre ?",
        "options": [
          "Ce dispositif permet l'alimentation en solution moussante de 1 à 4 lances 250 l/min., et/ou 1 à 2 lances 500 l/min., et/ou 1 à 2 lances 1 000 l/min",
          "La MPVE peut être mise en aspiration ou alimentée par la citerne d'un engin-pompe dont le moteur doit obligatoirement être à l'arrêt",
          "Zone d'alimentation",
          "Débit de l'installation"
        ],
        "answer": 3,
        "explanation": "Débit de l'installation"
      },
      {
        "question": "Le mode d'alimentation de la pompe sur BI ou PI est subordonné à quel paramètre ?",
        "options": [
          "Ils sont réalisés au moyen des tuyaux de 110 mm pliés en écheveau",
          "L'éloignement de la zone émulseur ou l'impossibilité d'accès à cette dernière du CA ou BA impose l'alimentation de la MPVE par une MPT",
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars pour 40 m",
          "Diamètre de la conduite"
        ],
        "answer": 3,
        "explanation": "Diamètre de la conduite"
      },
      {
        "question": "Après s'être assuré de la présence du 1er PSE sur les lieux de l'intervention, que fait le chef d'agrès ?",
        "options": [
          "Lors de l'établissement de lignes de 110 mm le personnel place, si nécessaire, des dispositifs de franchissement de tuyaux",
          "Lance du dévidoir tournant (LDT)",
          "Le chef d'agrès se rend au point d'eau le plus approprié à la manoeuvre qu'il compte réaliser",
          "2 clés tricoises de 100 mm CA ou BA"
        ],
        "answer": 2,
        "explanation": "Le chef d'agrès se rend au point d'eau le plus approprié à la manoeuvre qu'il compte réaliser"
      },
      {
        "question": "En cas d'utilisation d'une retenue sur BI, que fait le conducteur du 2e engin ?",
        "options": [
          "A partir de la seconde tubulure de la division de la ligne d'attaque (manoeuvre particulière)",
          "Les 1re et 2e équipes participent à l'établissement de la lance canon eau/mousse (FA-CA)",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'air et de l'eau",
          "Il portera une attention toute particulière à celle-ci pour éviter qu'elle ne se déchausse et prive les deux engins de leur alimentation en eau"
        ],
        "answer": 3,
        "explanation": "Il portera une attention toute particulière à celle-ci pour éviter qu'elle ne se déchausse et prive les deux engins de leur alimentation en eau"
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
        "question": "Comment peuvent s'effectuer les manœuvres d'établissement d'attaque ?",
        "options": [
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant",
          "Les haubans ne sont pas fixés",
          "Bon de prise en charge provisoire de matériel",
          "Le débit maximal dans un établissement de diamètre 22 mm est de 150 l/min"
        ],
        "answer": 0,
        "explanation": "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant"
      },
      {
        "question": "Quel potentiel hydraulique doit assurer le conducteur ?",
        "options": [
          "Le chef d'agrès du CA ou BA et le SdL prennent place sur les marchepieds, le 1er à gauche, le SdL à droite",
          "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon",
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance",
          "Les 2 brins de la courroie d'amarre sont passés autour du fût et de la poignée de la lance"
        ],
        "answer": 2,
        "explanation": "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance"
      },
      {
        "question": "Comment doit être le débit de la lance lors d'une phase d'attaque ?",
        "options": [
          "Lors de la phase d'extinction, le débit des lances doit être adapté",
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance",
          "Il se place au point d'attaque indiqué par le chef d'agrès",
          "Liaison personnelle"
        ],
        "answer": 0,
        "explanation": "Lors de la phase d'extinction, le débit des lances doit être adapté"
      },
      {
        "question": "Qu'est-il obligatoire lors d'une attaque pour assurer sa sécurité ?",
        "options": [
          "Il se place au point d'attaque indiqué par le chef d'agrès",
          "Lorsque les établissements de manoeuvre sont réalisés, le CA ou BA regagne la zone émulseur",
          "Ils sont réalisés par le conducteur et éventuellement aidé par un personnel (SDL, sous-officier adjoint, etc.) au moyen de tuyaux de 70 mm, 110 mm ...",
          "Au cours de l'attaque, le port complet des EPI est obligatoire"
        ],
        "answer": 3,
        "explanation": "Au cours de l'attaque, le port complet des EPI est obligatoire"
      },
      {
        "question": "Le nom respect du port complet des EPI entraîne automatiquement la responsabilité de qui ?",
        "options": [
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a...",
          "L'établissement d'alimentation permet d'alimenter la pompe de l'engin",
          "Le non respect de cette directive entraîne automatiquement la responsabilité de l'intéressé et/ou de son chef",
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité"
        ],
        "answer": 2,
        "explanation": "Le non respect de cette directive entraîne automatiquement la responsabilité de l'intéressé et/ou de son chef"
      },
      {
        "question": "Quelles sont les deux types de commandement que peut donner un chef d'agrès lors d'une manœuvre ?",
        "options": [
          "Un commandement initial",
          "2 clés tricoises de 100 mm CA ou BA",
          "Au SdL il désigne l'orifice de refoulement du poteau et l'orifice d'alimentation de la colonne sèche",
          "fût, ajutage de 35 mm"
        ],
        "answer": 0,
        "explanation": "Un commandement initial"
      },
      {
        "question": "Quelles sont les deux types de commandement que peut donner un chef d'agrès lors d'une manœuvre ?",
        "options": [
          "En cas de vent les haubans doivent absolument être fixés afin d'assurer une meilleure stabilité de la structure (consigne du constructeur)",
          "La lance canon est obligatoirement alimentée par deux lignes de 110 mm",
          "La MPVE peut être mise en aspiration ou alimentée par la citerne d'un engin-pompe dont le moteur doit obligatoirement être à l'arrêt",
          "Un commandement d'exécution"
        ],
        "answer": 3,
        "explanation": "Un commandement d'exécution"
      },
      {
        "question": "Qu'indique le commandement initial ?",
        "options": [
          "Un commandement d'exécution",
          "Dans le cas du FA le SOA et le SDL renforcent les équipes au maintien des lances",
          "La lance du dévidoir tournant peut être prolongée par des tuyaux de 45 mm",
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun"
        ],
        "answer": 3,
        "explanation": "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun"
      },
      {
        "question": "Quels établissements peuvent effectuer la première équipe ?",
        "options": [
          "la fonction de porte-lance incombe au chef d'agrès, celle de servant à l'échelier",
          "1re et 2e lance (eau ou mousse)",
          "Diamètre de la conduite",
          "De porter la puissance hydraulique à 1 000 l/min. par l'établissement d'une division50/2x 50"
        ],
        "answer": 1,
        "explanation": "1re et 2e lance (eau ou mousse)"
      },
      {
        "question": "Quels établissements peuvent effectuer la première équipe ?",
        "options": [
          "Relais (engin, motopompe, VEDI…)",
          "Lance du dévidoir tournant (LDT)",
          "Un commandement d'exécution",
          "Il peut exister pour une même intervention plusieurs ZAL, ZE ou ZAT"
        ],
        "answer": 1,
        "explanation": "Lance du dévidoir tournant (LDT)"
      },
      {
        "question": "Quels établissements peuvent effectuer la première équipe ?",
        "options": [
          "Un commandement initial",
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars",
          "Une lance (eau ou mousse) et la LDT",
          "Les raccords d'injection sont montés sur les lignes de 110 mm"
        ],
        "answer": 2,
        "explanation": "Une lance (eau ou mousse) et la LDT"
      },
      {
        "question": "Quels établissements peuvent effectuer la deuxième équipe ?",
        "options": [
          "2 raccords d'injection",
          "3e et 4e lances (eau ou mousse)",
          "La pompe doit absolument être alimentée avant d'autoriser l'établissement d'une seconde lance sur la \"LA\"",
          "Liaison personnelle"
        ],
        "answer": 1,
        "explanation": "3e et 4e lances (eau ou mousse)"
      },
      {
        "question": "Quels établissements peuvent effectuer la deuxième équipe ?",
        "options": [
          "Etablissement au moyen du dévidoir",
          "Lance du dévidoir tournant (LDT)",
          "3e et 4e lances (eau ou mousse)",
          "Cas particuliers (équipe à 3)"
        ],
        "answer": 3,
        "explanation": "Cas particuliers (équipe à 3)"
      },
      {
        "question": "Quels établissements effectuent ensemble la première et la deuxième équipe ?",
        "options": [
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance",
          "Les 1re et 2e équipes participent à l'établissement de la lance canon eau/mousse (FA-CA)",
          "Dans le cas du FA le SOA et le SDL renforcent les équipes au maintien des lances",
          "L'équipe et le chef d'agrès se rendent au niveau du feu"
        ],
        "answer": 1,
        "explanation": "Les 1re et 2e équipes participent à l'établissement de la lance canon eau/mousse (FA-CA)"
      },
      {
        "question": "Matériel de base à emporter par le chef d'agrès ?",
        "options": [
          "avant tout engagement, il remettra la clé, avec la plaque patronymique accrochée, au responsable du TGR",
          "Les lances 1 000 l/min. sont manoeuvrées efficacement par 3 hommes",
          "Liaison personnelle (hormis F)",
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a..."
        ],
        "answer": 2,
        "explanation": "Liaison personnelle (hormis F)"
      },
      {
        "question": "Matériel de base à emporter par le chef d'agrès ?",
        "options": [
          "Le SOA commande \" EN AVANT! \". Le conducteur démarre en direction du point d'eau à la vitesse d'un homme au pas derrière le FA",
          "TGR+sacoche SDL+Lampe portative",
          "Outil de forcement et de déblai",
          "En règle générale, ces établissements se font du point d'attaque au point d'eau"
        ],
        "answer": 2,
        "explanation": "Outil de forcement et de déblai"
      },
      {
        "question": "Matériel de base à emporter par l'homme de liaison?",
        "options": [
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars",
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité",
          "Liaison personnelle",
          "Etablir une ligne de 110 mm de longueur maximale de 400 m, permet de disposer d'un point d'eau avancé (division 100 / 3 x 50)"
        ],
        "answer": 2,
        "explanation": "Liaison personnelle"
      },
      {
        "question": "Matériel de base à emporter par l'homme de liaison?",
        "options": [
          "Le SOA confirme le commandement \" ETABLISSEZ ! \" du chef d'agrès",
          "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 800 mètres",
          "TGR+sacoche SDL+Lampe portative",
          "Le chef de garde ou de détachement détermine l'emplacement du PMP et son contenu en fonction de la manoeuvre qu'il compte entreprendre ou de la mis..."
        ],
        "answer": 2,
        "explanation": "TGR+sacoche SDL+Lampe portative"
      },
      {
        "question": "Matériel de base à emporter par le chef?",
        "options": [
          "L'établissement d'une division au plus près du sinistre",
          "2 clés tricoises de 100 mm CA ou BA",
          "Il pose la division à l'endroit indiqué par le chef d'agrès, dévide son tuyau jusqu'au sapeur de liaison et remonte doubler le chef d'équipe au poi...",
          "Liaison personnelle"
        ],
        "answer": 3,
        "explanation": "Liaison personnelle"
      },
      {
        "question": "Matériel de base à emporter par le servant?",
        "options": [
          "Etablir une ligne de 110 mm de longueur maximale de 400 m, permet de disposer d'un point d'eau avancé (division 100 / 3 x 50)",
          "La coupure de l'alimentation à la division pour remplacer ou prolonger l'établissement",
          "Liaison personnelle",
          "Lors de l'établissement de lignes de 110 mm le personnel place, si nécessaire, des dispositifs de franchissement de tuyaux"
        ],
        "answer": 2,
        "explanation": "Liaison personnelle"
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
        "question": "A quel moment la clé du détecteur d'immobilité est-elle retirée ?",
        "options": [
          "la clé sera systématiquement retirée du détecteur dés la descente de l'engin",
          "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon",
          "tuyaux de 110 mm dans le cas d'établissements de lance canon",
          "Etablissement au moyen de la L.A (Cf. manoeuvre de la ligne d'attaque)"
        ],
        "answer": 0,
        "explanation": "la clé sera systématiquement retirée du détecteur dés la descente de l'engin"
      },
      {
        "question": "Avant tout engagement le porteur de l'ARI doit remettre quoi au responsable du TGR ?",
        "options": [
          "La pression en sortie de pompe doit être de 8,75 bars, soit 9 bars pour un établissement de plain-pied",
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars",
          "avant tout engagement, il remettra la clé, avec la plaque patronymique accrochée, au responsable du TGR",
          "Les haubans ne sont pas fixés"
        ],
        "answer": 2,
        "explanation": "avant tout engagement, il remettra la clé, avec la plaque patronymique accrochée, au responsable du TGR"
      },
      {
        "question": "Que doit contenir la sacoche de l'homme de liaison ?",
        "options": [
          "Bon de prise en charge provisoire de matériel",
          "Etablissement au moyen de la L.A (Cf. manoeuvre de la ligne d'attaque)",
          "Le chef→ 2 tuyaux de 45 x 20 m dont 1 muni d'une lance",
          "L'établissement rapide d'une seconde lance sur la division"
        ],
        "answer": 0,
        "explanation": "Bon de prise en charge provisoire de matériel"
      },
      {
        "question": "Que doit contenir la sacoche de l'homme de liaison ?",
        "options": [
          "lance canon, tromblon et accessoires",
          "2 clés tricoises de 100 mm CA ou BA",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements",
          "Avis de passage des sapeurs pompiers"
        ],
        "answer": 3,
        "explanation": "Avis de passage des sapeurs pompiers"
      },
      {
        "question": "Que doit contenir la sacoche de l'homme de liaison ?",
        "options": [
          "Branchent les raccords d'injection sur les lignes de 110 mm à égale distance de l'engin",
          "Cahier d'observations DSA",
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance",
          "Ils sont destinés à l'alimentation d'une lance canon mousse d'un débit de 2 000 l/min"
        ],
        "answer": 1,
        "explanation": "Cahier d'observations DSA"
      },
      {
        "question": "Que doit contenir la sacoche de l'homme de liaison ?",
        "options": [
          "Bons de mouvement ST 30 bis",
          "La division est alimentée établie par une équipe organique d'un engin-pompe",
          "Les lances 1 000 l/min. sont manoeuvrées efficacement par 3 hommes",
          "matériels sur ordre"
        ],
        "answer": 0,
        "explanation": "Bons de mouvement ST 30 bis"
      },
      {
        "question": "Que permettent les établissements de la ligne d'attaque ?",
        "options": [
          "L'établissement d'une division au plus près du sinistre",
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance",
          "Le conducteur échelier peut reprendre les commandes en prioritaire et dégager le panier afin de le mettre en sécurité",
          "Le débit maximal dans un établissement de diamètre 22 mm est de 150 l/min"
        ],
        "answer": 0,
        "explanation": "L'établissement d'une division au plus près du sinistre"
      },
      {
        "question": "Que permettent les établissements de la ligne d'attaque ?",
        "options": [
          "Liaison personnelle",
          "tuyaux de 110 mm dans le cas d'établissements de lance canon",
          "ZE (zone émulseur) : les moyens émulseurs (CA/BA, BEM, citernes des pétroliers) y sont regroupés et employés",
          "L'établissement rapide d'une seconde lance sur la division"
        ],
        "answer": 3,
        "explanation": "L'établissement rapide d'une seconde lance sur la division"
      },
      {
        "question": "Que permettent les établissements de la ligne d'attaque ?",
        "options": [
          "ZAT (zone d'attaque) : les lances y sont établies (lances canon et lances à main) ; cette zone peut-être divisée en secteurs d'attaque",
          "La coupure de l'alimentation à la division pour remplacer ou prolonger l'établissement",
          "2 clés tricoises de 100 mm CA ou BA",
          "Etablissement au moyen du dévidoir"
        ],
        "answer": 1,
        "explanation": "La coupure de l'alimentation à la division pour remplacer ou prolonger l'établissement"
      },
      {
        "question": "Que permettent les établissements de la ligne d'attaque ?",
        "options": [
          "Ils sont réalisés par le conducteur et éventuellement aidé par un personnel (SDL, sous-officier adjoint, etc.) au moyen de tuyaux de 70 mm, 110 mm ...",
          "L'établissement rapide d'une ligne de 70 mm en cas d'indisponibilité d'une colonne sèche ou humide",
          "Avec l'appui d'autres équipes un \"PMP MOUSSE\" permet d'alimenter de 1 à 8 lances 250 l/min., et/ou 1 à 4 lances 250 l/min., et/ou 1 à 2 lances 1 00...",
          "Ils sont réalisés au moyen des tuyaux de 110 mm pliés en écheveau"
        ],
        "answer": 1,
        "explanation": "L'établissement rapide d'une ligne de 70 mm en cas d'indisponibilité d'une colonne sèche ou humide"
      },
      {
        "question": "Composition de la ligne d'attaque ?",
        "options": [
          "De diminuer les pertes de charges et les \"coups de bélier\"",
          "5 manchons souples, de taille variable, permettent de maintenir en place les tuyaux et de les guider au cours de l'établissement",
          "L'établissement d'une division au plus près du sinistre",
          "La division est alimentée établie par une équipe organique d'un engin-pompe"
        ],
        "answer": 1,
        "explanation": "5 manchons souples, de taille variable, permettent de maintenir en place les tuyaux et de les guider au cours de l'établissement"
      },
      {
        "question": "Composition de la ligne d'attaque ?",
        "options": [
          "Basculer l'écheveau sur le flanc et ramener le demi-raccord qui se trouvait au sol sur le manchon pour l'attacher avec la courroie",
          "3 tuyaux de 70 x 20 m pliés en écheveau (dont un équipé d'une division)",
          "Le chef de garde ou de détachement détermine l'emplacement du PMP et son contenu en fonction de la manoeuvre qu'il compte entreprendre ou de la mis...",
          "Il pose la division à l'endroit indiqué par le chef d'agrès, dévide son tuyau jusqu'au sapeur de liaison et remonte doubler le chef d'équipe au poi..."
        ],
        "answer": 1,
        "explanation": "3 tuyaux de 70 x 20 m pliés en écheveau (dont un équipé d'une division)"
      },
      {
        "question": "Quelle est l'attribution du matériel et des missions du chef d'agrès?",
        "options": [
          "Les 1re et 2e équipes participent à l'établissement de la lance canon eau/mousse (FA-CA)",
          "Hydraulique BI-PI et l'engin",
          "Il faut penser à rajouter 1 bar de pression pour 10 m de dénivelée positive à la pression en sortie de pompe",
          "Il dépose son 70 x 20 m où il le juge nécessaire"
        ],
        "answer": 3,
        "explanation": "Il dépose son 70 x 20 m où il le juge nécessaire"
      },
      {
        "question": "Quelle est l'attribution du matériel et des missions du chef ?",
        "options": [
          "Le chef→ 2 tuyaux de 45 x 20 m dont 1 muni d'une lance",
          "Le chef de garde ou de détachement détermine l'emplacement du PMP et son contenu en fonction de la manoeuvre qu'il compte entreprendre ou de la mis...",
          "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 800 mètres",
          "Les 1re et 2e équipes participent à l'établissement de la lance canon eau/mousse (FA-CA)"
        ],
        "answer": 0,
        "explanation": "Le chef→ 2 tuyaux de 45 x 20 m dont 1 muni d'une lance"
      },
      {
        "question": "Quelle est l'attribution du matériel et des missions du chef ?",
        "options": [
          "Gêne à la progression des engins d'incendie",
          "La MPVE (Motopompe Volumétrique Emulseur)",
          "Il se place au point d'attaque indiqué par le chef d'agrès",
          "la fonction de porte-lance incombe au chef d'agrès, celle de servant à l'échelier"
        ],
        "answer": 2,
        "explanation": "Il se place au point d'attaque indiqué par le chef d'agrès"
      },
      {
        "question": "Quelle est l'attribution du matériel et des missions du servant?",
        "options": [
          "Etablissement au moyen du dévidoir",
          "Le servant→ 1 tuyau de 70 x 20 m avec division",
          "2 cannes plongeuses",
          "Liaison personnelle"
        ],
        "answer": 1,
        "explanation": "Le servant→ 1 tuyau de 70 x 20 m avec division"
      },
      {
        "question": "Quelle est l'attribution du matériel et des missions du servant?",
        "options": [
          "La MPVE peut être mise en aspiration ou alimentée par la citerne d'un engin-pompe dont le moteur doit obligatoirement être à l'arrêt",
          "Etablir une ligne de 110 mm de longueur maximale de 400 m, permet de disposer d'un point d'eau avancé (division 100 / 3 x 50)",
          "La lance doit être utilisée en jet droit avec un débit maximum et une ouverture maximale",
          "Il pose la division à l'endroit indiqué par le chef d'agrès, dévide son tuyau jusqu'au sapeur de liaison et remonte doubler le chef d'équipe au poi..."
        ],
        "answer": 3,
        "explanation": "Il pose la division à l'endroit indiqué par le chef d'agrès, dévide son tuyau jusqu'au sapeur de liaison et remonte doubler le chef d'équipe au point d'attaque"
      },
      {
        "question": "Quelle est l'attribution du matériel et des missions du SDL?",
        "options": [
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre",
          "Fin d'intervention RATP -SNCF",
          "Il assure le dernier tronçon de la ligne, raccorde son tuyau à celui du servant et utilise éventuellement le tuyau laissé sur le trajet par le chef...",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'air et de l'eau"
        ],
        "answer": 2,
        "explanation": "Il assure le dernier tronçon de la ligne, raccorde son tuyau à celui du servant et utilise éventuellement le tuyau laissé sur le trajet par le chef d'agrès"
      },
      {
        "question": "Expliquer le pliage des tuyaux 70 x 20 m ?",
        "options": [
          "Débit de l'installation",
          "La lance canon est obligatoirement alimentée par deux lignes de 110 mm",
          "tuyaux de 110 mm dans le cas d'établissements de lance canon",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'air et de l'eau"
        ],
        "answer": 3,
        "explanation": "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'air et de l'eau"
      },
      {
        "question": "Expliquer le pliage des tuyaux 70 x 20 m ?",
        "options": [
          "Anticiper une évolution défavorable du sinistre qui pourrait se traduire par une détérioration voire une perte de ces matériels",
          "Il n'y a plus de crochet d'amarre sur la structure mais seulement dans le panier",
          "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 800 mètres",
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre"
        ],
        "answer": 3,
        "explanation": "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre"
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
        "question": "Expliquer le pliage des tuyaux 70 x 20 m ?",
        "options": [
          "La lance canon est obligatoirement alimentée par deux lignes de 110 mm",
          "La ligne de 110 mm peut être établie du point d'eau vers le point d'attaque dans certaines circonstances",
          "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon",
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité"
        ],
        "answer": 2,
        "explanation": "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon"
      },
      {
        "question": "Expliquer le pliage des tuyaux 70 x 20 m ?",
        "options": [
          "La lance du dévidoir tournant peut être prolongée par des tuyaux de 45 mm",
          "Les 2 brins de la courroie d'amarre sont passés autour du fût et de la poignée de la lance",
          "3e et 4e lances (eau ou mousse)",
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité"
        ],
        "answer": 3,
        "explanation": "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité"
      },
      {
        "question": "Expliquer le pliage des tuyaux 45 x 20 m ?",
        "options": [
          "Une échelle à coulisses peut être utilisée pour procéder à l'attaque de l'extérieur (ouverture située au 1er ou 2e étage d'un bâtiment, etc.)",
          "Il pose la division à l'endroit indiqué par le chef d'agrès, dévide son tuyau jusqu'au sapeur de liaison et remonte doubler le chef d'équipe au poi...",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'eau et de l'air",
          "L'éloignement de la zone émulseur ou l'impossibilité d'accès à cette dernière du CA ou BA impose l'alimentation de la MPVE par une MPT"
        ],
        "answer": 2,
        "explanation": "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'eau et de l'air"
      },
      {
        "question": "Expliquer le pliage des tuyaux 45 x 20 m ?",
        "options": [
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre",
          "Liaison personnelle",
          "3e et 4e lances (eau ou mousse)",
          "Ils sont destinés à l'alimentation d'une lance canon mousse d'un débit de 2 000 l/min"
        ],
        "answer": 0,
        "explanation": "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre"
      },
      {
        "question": "Expliquer le pliage des tuyaux 45 x 20 m ?",
        "options": [
          "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon",
          "3 tuyaux de 70 x 20 m pliés en écheveau (dont un équipé d'une division)",
          "Il s'agit d'établissement par l'extérieur ou dans une cage d'escalier comportant un jour",
          "Outil de forcement et de déblai"
        ],
        "answer": 0,
        "explanation": "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon"
      },
      {
        "question": "Expliquer le pliage des tuyaux 45 x 20 m ?",
        "options": [
          "avant tout engagement, il remettra la clé, avec la plaque patronymique accrochée, au responsable du TGR",
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité",
          "Il dépose son 70 x 20 m où il le juge nécessaire",
          "Ils établissent les tuyaux de 45 mm des raccords d'injection vers la MPVE (1 tuyau directement raccordé sur la MPVE avant la division 50x2x50)"
        ],
        "answer": 1,
        "explanation": "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité"
      },
      {
        "question": "A partir de quel moment l'emport des tuyaux de 70/20M de la ligne d'attaque ne sont pas tous pris?",
        "options": [
          "Pression à la lance : 6 bars (lance non autorégulée)",
          "La lance est placée au niveau du ceinturon, le tuyau passe sur l'épaule",
          "Le choix de l'hydrant sera fonction du débit et du diamètre de la canalisation d'alimentation",
          "L'emport de l'ensemble des tuyaux de 70 x 20 m de la ligne d'attaque reste à la diligence du chef d'agrès à partir du moment où celui-ci intervient..."
        ],
        "answer": 3,
        "explanation": "L'emport de l'ensemble des tuyaux de 70 x 20 m de la ligne d'attaque reste à la diligence du chef d'agrès à partir du moment où celui-ci intervient en 2e engin-pompe"
      },
      {
        "question": "Que fait le sapeur de liaison en se rendant au point d'attaque sur une colonne sèche hors IGH ?",
        "options": [
          "Le sapeur de liaison vérifie la fermeture des orifices de refoulement de la colonne sèche en se rendant au point d'attaque",
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars",
          "Au cours de l'attaque, le port complet des EPI est obligatoire",
          "Au SdL il désigne l'orifice de refoulement du poteau et l'orifice d'alimentation de la colonne sèche"
        ],
        "answer": 0,
        "explanation": "Le sapeur de liaison vérifie la fermeture des orifices de refoulement de la colonne sèche en se rendant au point d'attaque"
      },
      {
        "question": "Que permet le diamètre d'une colonne sèche de 65mm ?",
        "options": [
          "la fonction de porte-lance incombe au chef d'agrès, celle de servant à l'échelier",
          "Ils permettent d'utiliser un point d'eau hors de portée des dévidoirs mobiles",
          "Le diamètre d'une colonne sèche de 65 mm permet un débit de 1 000 l/min. maxi",
          "A partir de la seconde tubulure de la division de la ligne d'attaque"
        ],
        "answer": 2,
        "explanation": "Le diamètre d'une colonne sèche de 65 mm permet un débit de 1 000 l/min. maxi"
      },
      {
        "question": "Que permet le diamètre d'une colonne sèche de 100mm ?",
        "options": [
          "Le diamètre d'une colonne de 100 mm (alimentée par 2 lignes de 70 mm) permet un débit de 2 000 l/min. au maximum",
          "1re et 2e lance (eau ou mousse)",
          "Le choix de l'hydrant sera fonction du débit et du diamètre de la canalisation d'alimentation",
          "Débit de l'installation"
        ],
        "answer": 0,
        "explanation": "Le diamètre d'une colonne de 100 mm (alimentée par 2 lignes de 70 mm) permet un débit de 2 000 l/min. au maximum"
      },
      {
        "question": "Où se rendent le chef d'agrès et l'équipe liaison lors de l'établissement d'une lance sur une colonne sèche hors IGH ?",
        "options": [
          "Poteau d'incendie (PI)",
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a...",
          "L'équipe et le chef d'agrès se rendent au niveau du feu",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'eau et de l'air"
        ],
        "answer": 2,
        "explanation": "L'équipe et le chef d'agrès se rendent au niveau du feu"
      },
      {
        "question": "Que désigne le chef d'agrès au conducteur lors d'un établissement de lance sur colonne sèche par poteau relais ?",
        "options": [
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité",
          "L'utilisation d'émulseur est toujours suivie d'un abondant rinçage",
          "Le porte-lance monte à l'échelle",
          "Le chef d'agrès désigne au conducteur l'orifice d'alimentation du poteau relais"
        ],
        "answer": 3,
        "explanation": "Le chef d'agrès désigne au conducteur l'orifice d'alimentation du poteau relais"
      },
      {
        "question": "Que désigne le chef d'agrès au SDL lors d'un établissement de lance sur colonne sèche par poteau relais ?",
        "options": [
          "Lors de la phase d'extinction, le débit des lances doit être adapté",
          "Au SdL il désigne l'orifice de refoulement du poteau et l'orifice d'alimentation de la colonne sèche",
          "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon",
          "La lance doit être utilisée en jet droit avec un débit maximum et une ouverture maximale"
        ],
        "answer": 1,
        "explanation": "Au SdL il désigne l'orifice de refoulement du poteau et l'orifice d'alimentation de la colonne sèche"
      },
      {
        "question": "De combien doit être la pression à l'injecteur ?",
        "options": [
          "Le chef d'agrès se rend au point d'eau le plus approprié à la manoeuvre qu'il compte réaliser",
          "La pression à l'injecteur doit être au minimum de 10 bars",
          "Basculer l'écheveau sur le flanc et ramener le demi-raccord qui se trouvait au sol sur le manchon pour l'attacher avec la courroie",
          "Le porte-lance monte à l'échelle"
        ],
        "answer": 1,
        "explanation": "La pression à l'injecteur doit être au minimum de 10 bars"
      },
      {
        "question": "Comment doit être utilisé une lance à mousse ?",
        "options": [
          "La MPVE (Motopompe Volumétrique Emulseur)",
          "La lance doit être utilisée en jet droit avec un débit maximum et une ouverture maximale",
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité",
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance"
        ],
        "answer": 1,
        "explanation": "La lance doit être utilisée en jet droit avec un débit maximum et une ouverture maximale"
      },
      {
        "question": "De combien est votre autonomie avec un bidon de 20l d'émulseur ?",
        "options": [
          "3e et 4e lances (eau ou mousse)",
          "En cas de vent les haubans doivent absolument être fixés afin d'assurer une meilleure stabilité de la structure (consigne du constructeur)",
          "Avec un bidon de 20 l d'émulseur, vous aurez une autonomie de 1 min. 20 s environ avec une seule lance",
          "L'alimentation de la pompe doit être réalisée dès qu'une lance est établie (à l'exception de lances sur colonne humide)"
        ],
        "answer": 2,
        "explanation": "Avec un bidon de 20 l d'émulseur, vous aurez une autonomie de 1 min. 20 s environ avec une seule lance"
      },
      {
        "question": "Par quoi est réalisé l'établissement de la ligne d'attaque ?",
        "options": [
          "lance canon, tromblon et accessoires",
          "L'établissement de la ligne d'attaque (LA) est réalisé avec 3 tuyaux de 70 x 20 m (60 m) et 2 tuyaux de 45 x 20 m (40 m), soit une longueur de 100 m",
          "Les 1re et 2e équipes participent à l'établissement de la lance canon eau/mousse (FA-CA)",
          "Basculer l'écheveau sur le flanc et ramener le demi-raccord qui se trouvait au sol sur le manchon pour l'attacher avec la courroie"
        ],
        "answer": 1,
        "explanation": "L'établissement de la ligne d'attaque (LA) est réalisé avec 3 tuyaux de 70 x 20 m (60 m) et 2 tuyaux de 45 x 20 m (40 m), soit une longueur de 100 m"
      },
      {
        "question": "Quelle est la pression que doit avoir la lance?",
        "options": [
          "avant tout engagement, il remettra la clé, avec la plaque patronymique accrochée, au responsable du TGR",
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a...",
          "Pression à la lance : 6 bars (lance non autorégulée)",
          "1re et 2e lance (eau ou mousse)"
        ],
        "answer": 2,
        "explanation": "Pression à la lance : 6 bars (lance non autorégulée)"
      },
      {
        "question": "Quelle est la perte de charge dans les tuyaux de 70 mm ?",
        "options": [
          "L'équipe et le chef d'agrès se rendent au niveau du feu",
          "Le diamètre d'une colonne de 100 mm (alimentée par 2 lignes de 70 mm) permet un débit de 2 000 l/min. au maximum",
          "Perte de charge dans les tuyaux de 70 mm : 0,45 bar pour 60 m",
          "fût, ajutage de 35 mm ; ARI et tenues d'approche"
        ],
        "answer": 2,
        "explanation": "Perte de charge dans les tuyaux de 70 mm : 0,45 bar pour 60 m"
      },
      {
        "question": "Quelle est la perte de charge dans les tuyaux de 45 mm ?",
        "options": [
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars pour 40 m",
          "Le chef de garde ou de détachement détermine l'emplacement du PMP et son contenu en fonction de la manoeuvre qu'il compte entreprendre ou de la mis...",
          "Lorsqu'elle en reçoit l'ordre, l'équipe du CA ou BA arrête définitivement l'injection d'émulseur",
          "Bons de mouvement ST 30 bis"
        ],
        "answer": 0,
        "explanation": "Perte de charge dans les tuyaux de 45 mm : 2,3 bars pour 40 m"
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
        "question": "De combien doit être la pression à la sortie de la pompe ?",
        "options": [
          "Par le chef d'agrès en fonction du sinistre, des capacités hydrauliques de l'engin et/ou de ses caractéristiques",
          "La pression en sortie de pompe doit être de 8,75 bars, soit 9 bars pour un établissement de plain-pied",
          "Ils sont réalisés par le conducteur et éventuellement aidé par un personnel (SDL, sous-officier adjoint, etc.) au moyen de tuyaux de 70 mm, 110 mm ...",
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre"
        ],
        "answer": 1,
        "explanation": "La pression en sortie de pompe doit être de 8,75 bars, soit 9 bars pour un établissement de plain-pied"
      },
      {
        "question": "Que faut-il penser à rajouter comme pression en sortie de pompe tous les 10m dans un dénivelé positif ?",
        "options": [
          "Il assure le dernier tronçon de la ligne, raccorde son tuyau à celui du servant et utilise éventuellement le tuyau laissé sur le trajet par le chef...",
          "Etablissement au moyen du dévidoir",
          "Le choix de l'hydrant sera fonction du débit et du diamètre de la canalisation d'alimentation",
          "Il faut penser à rajouter 1 bar de pression pour 10 m de dénivelée positive à la pression en sortie de pompe"
        ],
        "answer": 3,
        "explanation": "Il faut penser à rajouter 1 bar de pression pour 10 m de dénivelée positive à la pression en sortie de pompe"
      },
      {
        "question": "Quelle sera la pression aux lances lors d'un établissement d'une seconde lance?",
        "options": [
          "Lorsque les établissements de manoeuvre sont réalisés, le CA ou BA regagne la zone émulseur",
          "Lors de l'établissement de lignes de 110 mm le personnel place, si nécessaire, des dispositifs de franchissement de tuyaux",
          "Le SOA commande \" EN AVANT! \". Le conducteur démarre en direction du point d'eau à la vitesse d'un homme au pas derrière le FA",
          "Pression aux lances : 6 bars (lance non autorégulée)"
        ],
        "answer": 3,
        "explanation": "Pression aux lances : 6 bars (lance non autorégulée)"
      },
      {
        "question": "Quelle sera la perte de charge dans les tuyaux de 70/mm lors d'un établissement d'une seconde lance?",
        "options": [
          "5 manchons souples, de taille variable, permettent de maintenir en place les tuyaux et de les guider au cours de l'établissement",
          "L'établissement rapide d'une seconde lance sur la division",
          "Perte de charge dans les tuyaux de 70 mm : 1,8 bars",
          "Le chef→ 2 tuyaux de 45 x 20 m dont 1 muni d'une lance"
        ],
        "answer": 2,
        "explanation": "Perte de charge dans les tuyaux de 70 mm : 1,8 bars"
      },
      {
        "question": "Quelle sera la perte de charge dans les tuyaux de 70/mm lors d'un établissement d'une seconde lance?",
        "options": [
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars",
          "Les 1re et 2e équipes participent à l'établissement de la lance canon eau/mousse (FA-CA)",
          "Ils sont réalisés par le conducteur et éventuellement aidé par un personnel (SDL, sous-officier adjoint, etc.) au moyen de tuyaux de 70 mm, 110 mm ...",
          "Relais (engin, motopompe, VEDI…)"
        ],
        "answer": 0,
        "explanation": "Perte de charge dans les tuyaux de 45 mm : 2,3 bars"
      },
      {
        "question": "De combien est la capacité de la citerne d'un PST ?",
        "options": [
          "Capacité de la citerne ≥3 000 litres",
          "avant tout engagement, il remettra la clé, avec la plaque patronymique accrochée, au responsable du TGR",
          "Distance entre l'installation",
          "L'équipe de l'échelle réalise l'établissement de la lance jusqu'à la division"
        ],
        "answer": 0,
        "explanation": "Capacité de la citerne ≥3 000 litres"
      },
      {
        "question": "Que peut faire un conducteur avant d'alimenter son PST ?",
        "options": [
          "Limiter la dépose des matériels au strict minimum selon l'urgence de la situation",
          "Le conducteur peut envoyer dans un premier temps, l'eau de la citerne puis, alimenter ensuite la pompe",
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité",
          "L'éloignement de la zone émulseur ou l'impossibilité d'accès à cette dernière du CA ou BA impose l'alimentation de la MPVE par une MPT"
        ],
        "answer": 1,
        "explanation": "Le conducteur peut envoyer dans un premier temps, l'eau de la citerne puis, alimenter ensuite la pompe"
      },
      {
        "question": "Que doit faire le conducteur avant l'établissement d'une seconde lance ?",
        "options": [
          "Bouche d'incendie (BI)",
          "Fiche individuelle de signalement des incidents et agressions",
          "La pompe doit absolument être alimentée avant d'autoriser l'établissement d'une seconde lance sur la \"LA\"",
          "Le mouvement de celle-ci est limité"
        ],
        "answer": 2,
        "explanation": "La pompe doit absolument être alimentée avant d'autoriser l'établissement d'une seconde lance sur la \"LA\""
      },
      {
        "question": "Expliquer les deux façons d'établir la lance du dévidoir tournant ?",
        "options": [
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements",
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a...",
          "Directement à partir du dévidoir tournant et éventuellement prolongée par des tuyaux de 45 mm",
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars"
        ],
        "answer": 2,
        "explanation": "Directement à partir du dévidoir tournant et éventuellement prolongée par des tuyaux de 45 mm"
      },
      {
        "question": "Expliquer les deux façons d'établir la lance du dévidoir tournant ?",
        "options": [
          "L'équipe et le chef d'agrès se rendent au niveau du feu",
          "Il assure le dernier tronçon de la ligne, raccorde son tuyau à celui du servant et utilise éventuellement le tuyau laissé sur le trajet par le chef...",
          "A partir de la seconde tubulure de la division de la ligne d'attaque",
          "la lance du dévidoir tournant"
        ],
        "answer": 2,
        "explanation": "A partir de la seconde tubulure de la division de la ligne d'attaque"
      },
      {
        "question": "Quelles sont les interdictions de la lance du dévidoir tournant ?",
        "options": [
          "L'usage de la lance du dévidoir tournant est interdit, comme premier moyen d'extinction, pour tous feux de contenants quel que soit leur volume",
          "Directement à partir du dévidoir tournant et éventuellement prolongée par des tuyaux de 45 mm",
          "L'établissement de la ligne d'attaque (LA) est réalisé avec 3 tuyaux de 70 x 20 m (60 m) et 2 tuyaux de 45 x 20 m (40 m), soit une longueur de 100 m",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements"
        ],
        "answer": 0,
        "explanation": "L'usage de la lance du dévidoir tournant est interdit, comme premier moyen d'extinction, pour tous feux de contenants quel que soit leur volume"
      },
      {
        "question": "Par quoi la lance du dévidoir tournant peut être prolongée ?",
        "options": [
          "La lance du dévidoir tournant peut être prolongée par des tuyaux de 45 mm",
          "Le chef de garde ou de détachement détermine l'emplacement du PMP et son contenu en fonction de la manoeuvre qu'il compte entreprendre ou de la mis...",
          "La coupure de l'alimentation à la division pour remplacer ou prolonger l'établissement",
          "La MPVE permet d'injecter à une distance comprise entre 20 et 200 mètres au moyen d'établissements de tuyaux de 45 mm (B, D)"
        ],
        "answer": 0,
        "explanation": "La lance du dévidoir tournant peut être prolongée par des tuyaux de 45 mm"
      },
      {
        "question": "Quel manœuvre particulière est fait avec la lance du dévidoir tournant ?",
        "options": [
          "Lors de la phase d'extinction, le débit des lances doit être adapté",
          "Au cours de l'attaque, le port complet des EPI est obligatoire",
          "A partir de la seconde tubulure de la division de la ligne d'attaque (manoeuvre particulière)",
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a..."
        ],
        "answer": 2,
        "explanation": "A partir de la seconde tubulure de la division de la ligne d'attaque (manoeuvre particulière)"
      },
      {
        "question": "Quel est le débit maximal de la lance du dévidoir tournant ?",
        "options": [
          "Ils sont réalisés au moyen des tuyaux de 110 mm pliés en écheveau",
          "La lance du dévidoir tournant peut être prolongée par des tuyaux de 45 mm",
          "Le débit maximal dans un établissement de diamètre 22 mm est de 150 l/min",
          "Le sapeur de liaison vérifie la fermeture des orifices de refoulement de la colonne sèche en se rendant au point d'attaque"
        ],
        "answer": 2,
        "explanation": "Le débit maximal dans un établissement de diamètre 22 mm est de 150 l/min"
      },
      {
        "question": "Expliquer la technique pour amarrer la lance sur l'épaule ?",
        "options": [
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance",
          "La lance est placée au niveau du ceinturon, le tuyau passe sur l'épaule",
          "Etablir deux lignes de 110 mm, permettant de disposer de deux points d'eau avancés (2divisions 100 / 3 x50) jusqu'à 1 000 m",
          "ZDI (zone de déploiement initial) : elle sert à regrouper les moyens"
        ],
        "answer": 1,
        "explanation": "La lance est placée au niveau du ceinturon, le tuyau passe sur l'épaule"
      },
      {
        "question": "Expliquer la technique pour amarrer la lance sur l'épaule ?",
        "options": [
          "Lors de l'établissement de lignes de 110 mm le personnel place, si nécessaire, des dispositifs de franchissement de tuyaux",
          "La lance doit être utilisée en jet droit avec un débit maximum et une ouverture maximale",
          "La courroie d'amarre, pliée en deux est passée dans le ceinturon du bas vers le haut",
          "Liaison personnelle"
        ],
        "answer": 2,
        "explanation": "La courroie d'amarre, pliée en deux est passée dans le ceinturon du bas vers le haut"
      },
      {
        "question": "Expliquer la technique pour amarrer la lance sur l'épaule ?",
        "options": [
          "Le choix de l'hydrant sera fonction du débit et du diamètre de la canalisation d'alimentation",
          "Bouche d'incendie (BI)",
          "fût, ajutage de 35 mm ; ARI et tenues d'approche",
          "La lance est engagée dans la boucle constituée par la courroie d'amarre"
        ],
        "answer": 3,
        "explanation": "La lance est engagée dans la boucle constituée par la courroie d'amarre"
      },
      {
        "question": "Expliquer la technique pour amarrer la lance sur l'épaule ?",
        "options": [
          "Limiter la dépose des matériels au strict minimum selon l'urgence de la situation",
          "Les 2 brins de la courroie d'amarre sont passés autour du fût et de la poignée de la lance",
          "2 tricoises de 100 mm du CA",
          "Etablir deux lignes de 110 mm de longueur maximale de 200 m chacune, permettant de disposer de deux points d'eau avancés (2 divisions 100 / 3 x 50)"
        ],
        "answer": 1,
        "explanation": "Les 2 brins de la courroie d'amarre sont passés autour du fût et de la poignée de la lance"
      },
      {
        "question": "A quoi sert une lance sur échelle à coulisses ?",
        "options": [
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance",
          "Une échelle à coulisses peut être utilisée pour procéder à l'attaque de l'extérieur (ouverture située au 1er ou 2e étage d'un bâtiment, etc.)",
          "Poteau d'incendie (PI)",
          "tuyaux de 110 mm dans le cas d'établissements de lance canon"
        ],
        "answer": 1,
        "explanation": "Une échelle à coulisses peut être utilisée pour procéder à l'attaque de l'extérieur (ouverture située au 1er ou 2e étage d'un bâtiment, etc.)"
      },
      {
        "question": "Jusqu'où l'équipe de l'échelle réalise-t-elle l'établissement de la lance ?",
        "options": [
          "La pompe doit absolument être alimentée avant d'autoriser l'établissement d'une seconde lance sur la \"LA\"",
          "L'équipe de l'échelle réalise l'établissement de la lance jusqu'à la division",
          "Il n'y a plus de crochet d'amarre sur la structure mais seulement dans le panier",
          "Un commandement d'exécution"
        ],
        "answer": 1,
        "explanation": "L'équipe de l'échelle réalise l'établissement de la lance jusqu'à la division"
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
        "question": "Par qui est alimentée la division de l'échelle aérienne ?",
        "options": [
          "fût, ajutage de 35 mm ; ARI et tenues d'approche",
          "La MPVE peut être mise en aspiration ou alimentée par la citerne d'un engin-pompe dont le moteur doit obligatoirement être à l'arrêt",
          "La division est alimentée établie par une équipe organique d'un engin-pompe",
          "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 800 mètres"
        ],
        "answer": 2,
        "explanation": "La division est alimentée établie par une équipe organique d'un engin-pompe"
      },
      {
        "question": "Quelle fonction incombe au chef d'agrès et à l'échelier ?",
        "options": [
          "En cas de vent les haubans doivent absolument être fixés afin d'assurer une meilleure stabilité de la structure (consigne du constructeur)",
          "la fonction de porte-lance incombe au chef d'agrès, celle de servant à l'échelier",
          "Diamètre de la conduite",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements"
        ],
        "answer": 1,
        "explanation": "la fonction de porte-lance incombe au chef d'agrès, celle de servant à l'échelier"
      },
      {
        "question": "Que faut-il faire lorsque l'échelle est dressée développé isolée ?",
        "options": [
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre",
          "Lorsque l'échelle est dressée, développée, isolée, celle-ci doit être OBLIGATOIREMENT haubanée (voir DFT 728)",
          "Etablissement au moyen du dévidoir",
          "Il portera une attention toute particulière à celle-ci pour éviter qu'elle ne se déchausse et prive les deux engins de leur alimentation en eau"
        ],
        "answer": 1,
        "explanation": "Lorsque l'échelle est dressée, développée, isolée, celle-ci doit être OBLIGATOIREMENT haubanée (voir DFT 728)"
      },
      {
        "question": "Quelles mesures sont prises afin de conserver la manoeuvrabilité du panier lors d'établissement de la lance ?",
        "options": [
          "Le mouvement de celle-ci est limité",
          "Il se place au point d'attaque indiqué par le chef d'agrès",
          "Avec l'appui d'autres équipes un \"PMP MOUSSE\" permet d'alimenter de 1 à 8 lances 250 l/min., et/ou 1 à 4 lances 250 l/min., et/ou 1 à 2 lances 1 00...",
          "Les haubans ne sont pas fixés"
        ],
        "answer": 3,
        "explanation": "Les haubans ne sont pas fixés"
      },
      {
        "question": "Quelles mesures sont prises afin de conserver la manoeuvrabilité du panier lors d'établissement de la lance ?",
        "options": [
          "Il n'y a plus de crochet d'amarre sur la structure mais seulement dans le panier",
          "Bouche d'incendie (BI)",
          "Les lances 1 000 l/min. sont manoeuvrées efficacement par 3 hommes",
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a..."
        ],
        "answer": 0,
        "explanation": "Il n'y a plus de crochet d'amarre sur la structure mais seulement dans le panier"
      },
      {
        "question": "Quelles mesures sont prises afin de conserver la manoeuvrabilité du panier lors d'établissement de la lance ?",
        "options": [
          "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon",
          "Avec un bidon de 20 l d'émulseur, vous aurez une autonomie de 1 min. 20 s environ avec une seule lance",
          "En cas de vent les haubans doivent absolument être fixés afin d'assurer une meilleure stabilité de la structure (consigne du constructeur)",
          "Avec l'appui d'autres équipes un \"PMP MOUSSE\" permet d'alimenter de 1 à 8 lances 250 l/min., et/ou 1 à 4 lances 250 l/min., et/ou 1 à 2 lances 1 00..."
        ],
        "answer": 2,
        "explanation": "En cas de vent les haubans doivent absolument être fixés afin d'assurer une meilleure stabilité de la structure (consigne du constructeur)"
      },
      {
        "question": "Que se passe-t-il lorsqu'un établissement du tuyau est réalisé sur la structure de l'échelle ?",
        "options": [
          "Hydraulique BI-PI et l'engin",
          "Ils sont réalisés par le conducteur et éventuellement aidé par un personnel (SDL, sous-officier adjoint, etc.) au moyen de tuyaux de 70 mm, 110 mm ...",
          "Dans le cas du FA le SOA et le SDL renforcent les équipes au maintien des lances",
          "Le mouvement de celle-ci est limité"
        ],
        "answer": 3,
        "explanation": "Le mouvement de celle-ci est limité"
      },
      {
        "question": "Que se passe-t-il si le gradé nacelier se trouve dans l'impossibilité ou dans l'incapacité de déplacer le panier ?",
        "options": [
          "5 manchons souples, de taille variable, permettent de maintenir en place les tuyaux et de les guider au cours de l'établissement",
          "Lorsqu'elle en reçoit l'ordre, l'équipe du CA ou BA arrête définitivement l'injection d'émulseur",
          "Le conducteur échelier peut reprendre les commandes en prioritaire et dégager le panier afin de le mettre en sécurité",
          "Les FA possèdent un indice de pompe de 2 000 l/min. sous 15 bars (cf. DFT 725)"
        ],
        "answer": 2,
        "explanation": "Le conducteur échelier peut reprendre les commandes en prioritaire et dégager le panier afin de le mettre en sécurité"
      },
      {
        "question": "Qu'est-ce qu'un établisse ment vertical ?",
        "options": [
          "Le chef d'agrès du CA ou BA et le SdL prennent place sur les marchepieds, le 1er à gauche, le SdL à droite",
          "Le conducteur échelier peut reprendre les commandes en prioritaire et dégager le panier afin de le mettre en sécurité",
          "Il s'agit d'établissement par l'extérieur ou dans une cage d'escalier comportant un jour",
          "Une lance (eau ou mousse) et la LDT"
        ],
        "answer": 2,
        "explanation": "Il s'agit d'établissement par l'extérieur ou dans une cage d'escalier comportant un jour"
      },
      {
        "question": "Deux cas sont envisageables pour la manœuvre inaccessible au dévidoir ?",
        "options": [
          "Basculer l'écheveau sur le flanc et ramener le demi-raccord qui se trouvait au sol sur le manchon pour l'attacher avec la courroie",
          "Ils permettent d'utiliser un point d'eau hors de portée des dévidoirs mobiles",
          "Etablissement au moyen du dévidoir",
          "Etablissement au moyen de la L.A (Cf. manoeuvre de la ligne d'attaque)"
        ],
        "answer": 3,
        "explanation": "Etablissement au moyen de la L.A (Cf. manoeuvre de la ligne d'attaque)"
      },
      {
        "question": "Deux cas sont envisageables pour la manœuvre inaccessible au dévidoir ?",
        "options": [
          "Etablissement au moyen du dévidoir",
          "De porter la puissance hydraulique à 1 000 l/min. par l'établissement d'une division50/2x 50",
          "Basculer l'écheveau sur le flanc et ramener le demi-raccord qui se trouvait au sol sur le manchon pour l'attacher avec la courroie",
          "L'usage de la lance du dévidoir tournant est interdit, comme premier moyen d'extinction, pour tous feux de contenants quel que soit leur volume"
        ],
        "answer": 0,
        "explanation": "Etablissement au moyen du dévidoir"
      },
      {
        "question": "Combien d'hommes pour manœuvrer une lance 1000l/min ?",
        "options": [
          "Les lances 1 000 l/min. sont manoeuvrées efficacement par 3 hommes",
          "Etablir deux lignes de 110 mm de longueur maximale de 200 m chacune, permettant de disposer de deux points d'eau avancés (2 divisions 100 / 3 x 50)",
          "Liaison personnelle",
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a..."
        ],
        "answer": 0,
        "explanation": "Les lances 1 000 l/min. sont manoeuvrées efficacement par 3 hommes"
      },
      {
        "question": "Dans le cas du FA que font le SOA et le SDL pour l'établissement d'une ou deux lances 1 000l/min En reconnaissance ?",
        "options": [
          "1re et 2e lance (eau ou mousse)",
          "Il se place au point d'attaque indiqué par le chef d'agrès",
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars",
          "Dans le cas du FA le SOA et le SDL renforcent les équipes au maintien des lances"
        ],
        "answer": 3,
        "explanation": "Dans le cas du FA le SOA et le SDL renforcent les équipes au maintien des lances"
      },
      {
        "question": "Qu'un informe le servant au conducteur lors d'un établissement sur division alimentée par une ligne de 110mm lors d'une lance à mousse ?",
        "options": [
          "En règle générale, ces établissements se font du point d'attaque au point d'eau",
          "la clé sera systématiquement retirée du détecteur dés la descente de l'engin",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements",
          "Le servant se rend au point d'eau et avertit le conducteur de la nécessité d'obtenir une pression de 10 bars à l'injecteur"
        ],
        "answer": 3,
        "explanation": "Le servant se rend au point d'eau et avertit le conducteur de la nécessité d'obtenir une pression de 10 bars à l'injecteur"
      },
      {
        "question": "Possibilité hydraulique d'un FA ?",
        "options": [
          "La lance est placée au niveau du ceinturon, le tuyau passe sur l'épaule",
          "Liaison personnelle",
          "Le diamètre d'une colonne sèche de 65 mm permet un débit de 1 000 l/min. maxi",
          "Les FA possèdent un indice de pompe de 2 000 l/min. sous 15 bars (cf. DFT 725)"
        ],
        "answer": 3,
        "explanation": "Les FA possèdent un indice de pompe de 2 000 l/min. sous 15 bars (cf. DFT 725)"
      },
      {
        "question": "Que fait le personnel pour la protection des tuyaux de 110 mm ?",
        "options": [
          "Lors de l'établissement de lignes de 110 mm le personnel place, si nécessaire, des dispositifs de franchissement de tuyaux",
          "Avec un bidon de 20 l d'émulseur, vous aurez une autonomie de 1 min. 20 s environ avec une seule lance",
          "Une lance (eau ou mousse) et la LDT",
          "Le chef d'agrès désigne au conducteur l'orifice d'alimentation du poteau relais"
        ],
        "answer": 0,
        "explanation": "Lors de l'établissement de lignes de 110 mm le personnel place, si nécessaire, des dispositifs de franchissement de tuyaux"
      },
      {
        "question": "Citer la définition du point manœuvre préalable ?",
        "options": [
          "C'est le lieu situé entre le point d'attaque et le point d'eau, où est déposé le matériel jugé nécessaire par le chef de garde",
          "Une lance (eau ou mousse) et la LDT",
          "L'établissement rapide d'une seconde lance sur la division",
          "A partir de la seconde tubulure de la division de la ligne d'attaque (manoeuvre particulière)"
        ],
        "answer": 0,
        "explanation": "C'est le lieu situé entre le point d'attaque et le point d'eau, où est déposé le matériel jugé nécessaire par le chef de garde"
      },
      {
        "question": "Comment le chef de garde ou de détachement détermine l'emplacement du PMP ?",
        "options": [
          "Débit de l'installation",
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre",
          "Le conducteur peut envoyer dans un premier temps, l'eau de la citerne puis, alimenter ensuite la pompe",
          "Le chef de garde ou de détachement détermine l'emplacement du PMP et son contenu en fonction de la manoeuvre qu'il compte entreprendre ou de la mis..."
        ],
        "answer": 3,
        "explanation": "Le chef de garde ou de détachement détermine l'emplacement du PMP et son contenu en fonction de la manoeuvre qu'il compte entreprendre ou de la mission reçue"
      },
      {
        "question": "Que doit s'efforcer le chef de garde ou de détachement pour l'emplacement du PMP ?",
        "options": [
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre",
          "Limiter la dépose des matériels au strict minimum selon l'urgence de la situation",
          "Une échelle à coulisses peut être utilisée pour procéder à l'attaque de l'extérieur (ouverture située au 1er ou 2e étage d'un bâtiment, etc.)",
          "Perte de charge dans les tuyaux de 70 mm : 1,8 bars"
        ],
        "answer": 1,
        "explanation": "Limiter la dépose des matériels au strict minimum selon l'urgence de la situation"
      },
      {
        "question": "Que doit s'efforcer le chef de garde ou de détachement pour l'emplacement du PMP ?",
        "options": [
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a...",
          "Anticiper une évolution défavorable du sinistre qui pourrait se traduire par une détérioration voire une perte de ces matériels",
          "Relais (engin, motopompe, VEDI…)",
          "Branchent les raccords d'injection sur les lignes de 110 mm à égale distance de l'engin"
        ],
        "answer": 1,
        "explanation": "Anticiper une évolution défavorable du sinistre qui pourrait se traduire par une détérioration voire une perte de ces matériels"
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
        "question": "Comment le FA sera systémati quement alimenté lors d'établissement de ligne de 110 mm?",
        "options": [
          "La division est alimentée établie par une équipe organique d'un engin-pompe",
          "Le chef d'agrès désigne au conducteur l'orifice d'alimentation du poteau relais",
          "Le choix de l'hydrant sera fonction du débit et du diamètre de la canalisation d'alimentation",
          "Anticiper une évolution défavorable du sinistre qui pourrait se traduire par une détérioration voire une perte de ces matériels"
        ],
        "answer": 2,
        "explanation": "Le choix de l'hydrant sera fonction du débit et du diamètre de la canalisation d'alimentation"
      },
      {
        "question": "Quel est le but de l'établissement de ligne de 110mm ?",
        "options": [
          "Etablir une ligne de 110 mm de longueur maximale de 400 m, permet de disposer d'un point d'eau avancé (division 100 / 3 x 50)",
          "tuyaux de 110 mm dans le cas d'établissements de lance canon",
          "Le débit maximal dans un établissement de diamètre 22 mm est de 150 l/min",
          "2 tricoises de 100 mm du CA ou BA"
        ],
        "answer": 0,
        "explanation": "Etablir une ligne de 110 mm de longueur maximale de 400 m, permet de disposer d'un point d'eau avancé (division 100 / 3 x 50)"
      },
      {
        "question": "Comment peut être établie les lignes de 110mm dans certaines circonstances ?",
        "options": [
          "Aspiration (nappe ou cours d'eau)",
          "La ligne de 110 mm peut être établie du point d'eau vers le point d'attaque dans certaines circonstances",
          "Il n'y a plus de crochet d'amarre sur la structure mais seulement dans le panier",
          "La lance est engagée dans la boucle constituée par la courroie d'amarre"
        ],
        "answer": 1,
        "explanation": "La ligne de 110 mm peut être établie du point d'eau vers le point d'attaque dans certaines circonstances"
      },
      {
        "question": "Quel est le but de deux lignes de 110mm ?",
        "options": [
          "Le chef d'agrès du CA ou BA et le SdL prennent place sur les marchepieds, le 1er à gauche, le SdL à droite",
          "Etablir deux lignes de 110 mm de longueur maximale de 200 m chacune, permettant de disposer de deux points d'eau avancés (2 divisions 100 / 3 x 50)",
          "Le servant se rend au point d'eau et avertit le conducteur de la nécessité d'obtenir une pression de 10 bars à l'injecteur",
          "Aspiration (nappe ou cours d'eau)"
        ],
        "answer": 1,
        "explanation": "Etablir deux lignes de 110 mm de longueur maximale de 200 m chacune, permettant de disposer de deux points d'eau avancés (2 divisions 100 / 3 x 50)"
      },
      {
        "question": "Quel est le but de deux lignes de 110mm (FA CA ou BA) ?",
        "options": [
          "Les 2 brins de la courroie d'amarre sont passés autour du fût et de la poignée de la lance",
          "Etablir deux lignes de 110 mm, permettant de disposer de deux points d'eau avancés (2divisions 100 / 3 x50) jusqu'à 1 000 m",
          "Perte de charge dans les tuyaux de 70 mm : 0,45 bar pour 60 m",
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité"
        ],
        "answer": 1,
        "explanation": "Etablir deux lignes de 110 mm, permettant de disposer de deux points d'eau avancés (2divisions 100 / 3 x50) jusqu'à 1 000 m"
      },
      {
        "question": "L'établissement de deux lignes 110mm est réalisé dans un premier temps par le CA ou BA jusqu'à combien de mètre?",
        "options": [
          "La lance est placée au niveau du ceinturon, le tuyau passe sur l'épaule",
          "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 800 mètres",
          "La MPVE permet d'injecter à une distance comprise entre 20 et 200 mètres au moyen d'établissements de tuyaux de 45 mm (B, D)",
          "Il pose la division à l'endroit indiqué par le chef d'agrès, dévide son tuyau jusqu'au sapeur de liaison et remonte doubler le chef d'équipe au poi..."
        ],
        "answer": 1,
        "explanation": "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 800 mètres"
      },
      {
        "question": "Sur quoi sont montés les raccords d'injection ?",
        "options": [
          "Les raccords d'injection sont montés sur les lignes de 110 mm",
          "Ils sont destinés à l'alimentation d'une lance canon mousse d'un débit de 2 000 l/min",
          "Une lance (eau ou mousse) et la LDT",
          "Bon de prise en charge provisoire de matériel"
        ],
        "answer": 0,
        "explanation": "Les raccords d'injection sont montés sur les lignes de 110 mm"
      },
      {
        "question": "Expliquer la manœuvre \" Pour l'établis sement de 1 ligne de 110 mm avec CA ou BA, à plus de 1 000 m, PMP (eau ou mousse, tel endroit), avec tel(s)matériel (s), en reconnaissance!\" 1er temps?",
        "options": [
          "Le chef de garde ou de détachement détermine l'emplacement du PMP et son contenu en fonction de la manoeuvre qu'il compte entreprendre ou de la mis...",
          "Le chef d'agrès du CA ou BA et le SdL prennent place sur les marchepieds, le 1er à gauche, le SdL à droite",
          "Le SOA confirme le commandement \" ETABLISSEZ ! \" du chef d'agrès",
          "C'est le lieu situé entre le point d'attaque et le point d'eau, où est déposé le matériel jugé nécessaire par le chef de garde"
        ],
        "answer": 2,
        "explanation": "Le SOA confirme le commandement \" ETABLISSEZ ! \" du chef d'agrès"
      },
      {
        "question": "Expliquer la manœuvre \" Pour l'établis sement de 1 ligne de 110 mm avec CA ou BA, à plus de 1 000 m, PMP (eau ou mousse, tel endroit), avec tel(s)matériel (s), en reconnaissance!\" 1er temps?",
        "options": [
          "Le SOA commande \" EN AVANT! \". Le conducteur démarre en direction du point d'eau à la vitesse d'un homme au pas derrière le FA",
          "Outil de forcement et de déblai",
          "Il n'y a plus de crochet d'amarre sur la structure mais seulement dans le panier",
          "Une échelle à coulisses peut être utilisée pour procéder à l'attaque de l'extérieur (ouverture située au 1er ou 2e étage d'un bâtiment, etc.)"
        ],
        "answer": 0,
        "explanation": "Le SOA commande \" EN AVANT! \". Le conducteur démarre en direction du point d'eau à la vitesse d'un homme au pas derrière le FA"
      },
      {
        "question": "Expliquer la manœuvre \" Pour l'établis sement de 1 ligne de 110 mm avec CA ou BA, à plus de 1 000 m, PMP (eau ou mousse, tel endroit), avec tel(s)matériel (s), en reconnaissance!\" 1er temps?",
        "options": [
          "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 1 600 mètres",
          "Le chef d'agrès du CA ou BA et le SdL prennent place sur les marchepieds, le 1er à gauche, le SdL à droite",
          "Perte de charge dans les tuyaux de 70 mm : 0,45 bar pour 60 m",
          "Cahier d'observations DSA"
        ],
        "answer": 1,
        "explanation": "Le chef d'agrès du CA ou BA et le SdL prennent place sur les marchepieds, le 1er à gauche, le SdL à droite"
      },
      {
        "question": "L'établissement d'une ligne de 110mm a plus de 1000M est réalisé dans un premier temps par le CA ou BA jusqu'à combien de mètre?",
        "options": [
          "A partir de la seconde tubulure de la division de la ligne d'attaque",
          "Etablir deux lignes de 110 mm de longueur maximale de 200 m chacune, permettant de disposer de deux points d'eau avancés (2 divisions 100 / 3 x 50)",
          "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 1 600 mètres",
          "La lance est engagée dans la boucle constituée par la courroie d'amarre"
        ],
        "answer": 2,
        "explanation": "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 1 600 mètres"
      },
      {
        "question": "Par quoi est obligatoirement alimentée une lance canon ?",
        "options": [
          "Pression à la lance : 6 bars (lance non autorégulée)",
          "Hydraulique BI-PI et l'engin",
          "La lance canon est obligatoirement alimentée par deux lignes de 110 mm",
          "C'est le lieu situé entre le point d'attaque et le point d'eau, où est déposé le matériel jugé nécessaire par le chef de garde"
        ],
        "answer": 2,
        "explanation": "La lance canon est obligatoirement alimentée par deux lignes de 110 mm"
      },
      {
        "question": "Que dépose le personnel du FA-CA ou BA au commandement\" Pour l'établissement de l a lance canon eau, PMP (tel endroit), en reconnaissance! \" ?",
        "options": [
          "Etablir deux lignes de 110 mm, permettant de disposer de deux points d'eau avancés (2divisions 100 / 3 x50) jusqu'à 1 000 m",
          "fût, ajutage de 35 mm",
          "Cas particuliers (équipe à 3)",
          "Le chef de garde ou de détachement détermine l'emplacement du PMP et son contenu en fonction de la manoeuvre qu'il compte entreprendre ou de la mis..."
        ],
        "answer": 1,
        "explanation": "fût, ajutage de 35 mm"
      },
      {
        "question": "Que dépose le personnel du FA-CA ou BA au commandement\" Pour l'établissement de l a lance canon eau, PMP (tel endroit), en reconnaissance! \" ?",
        "options": [
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'air et de l'eau",
          "Le débit maximal dans un établissement de diamètre 22 mm est de 150 l/min",
          "A partir de la seconde tubulure de la division de la ligne d'attaque",
          "2 tricoises de 100 mm du CA"
        ],
        "answer": 3,
        "explanation": "2 tricoises de 100 mm du CA"
      },
      {
        "question": "Que dépose le personnel du FA-CA ou BA au commandement\" Pour l'établissement de l a lance canon eau, PMP (tel endroit), en reconnaissance! \" ?",
        "options": [
          "Ils sont réalisés au moyen des tuyaux de 110 mm pliés en écheveau",
          "Cas particuliers (équipe à 3)",
          "la lance du dévidoir tournant",
          "matériels sur ordre"
        ],
        "answer": 3,
        "explanation": "matériels sur ordre"
      },
      {
        "question": "Citer les différentes zones lors des feux d'hydrocarbures ?",
        "options": [
          "Zone d'alimentation",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements",
          "Les FA possèdent un indice de pompe de 2 000 l/min. sous 15 bars (cf. DFT 725)",
          "ZAL (zone d'alimentation) : elle regroupe différents points d'eau"
        ],
        "answer": 0,
        "explanation": "Zone d'alimentation"
      },
      {
        "question": "Citer les différentes zones lors des feux d'hydrocarbures ?",
        "options": [
          "Zone de déploiement initial",
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun",
          "Les haubans ne sont pas fixés",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'air et de l'eau"
        ],
        "answer": 0,
        "explanation": "Zone de déploiement initial"
      },
      {
        "question": "Que veut dire ZDI ?",
        "options": [
          "La MPVE peut être mise en aspiration ou alimentée par la citerne d'un engin-pompe dont le moteur doit obligatoirement être à l'arrêt",
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun",
          "La ligne de 110 mm peut être établie du point d'eau vers le point d'attaque dans certaines circonstances",
          "ZDI (zone de déploiement initial) : elle sert à regrouper les moyens"
        ],
        "answer": 3,
        "explanation": "ZDI (zone de déploiement initial) : elle sert à regrouper les moyens"
      },
      {
        "question": "Que veut dire ZAL ?",
        "options": [
          "ZAL (zone d'alimentation) : elle regroupe différents points d'eau",
          "Cas particuliers (équipe à 3)",
          "Il se place au point d'attaque indiqué par le chef d'agrès",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements"
        ],
        "answer": 0,
        "explanation": "ZAL (zone d'alimentation) : elle regroupe différents points d'eau"
      },
      {
        "question": "Que veux dire ZE ?",
        "options": [
          "fût, ajutage de 35 mm ; ARI et tenues d'approche",
          "Cas particuliers (équipe à 3)",
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre",
          "ZE (zone émulseur) : les moyens émulseurs (CA/BA, BEM, citernes des pétroliers) y sont regroupés et employés"
        ],
        "answer": 3,
        "explanation": "ZE (zone émulseur) : les moyens émulseurs (CA/BA, BEM, citernes des pétroliers) y sont regroupés et employés"
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
        "question": "Que veut dire ZAT ?",
        "options": [
          "Un commandement initial",
          "Le sapeur de liaison vérifie la fermeture des orifices de refoulement de la colonne sèche en se rendant au point d'attaque",
          "ZAT (zone d'attaque) : les lances y sont établies (lances canon et lances à main) ; cette zone peut-être divisée en secteurs d'attaque",
          "Le chef d'agrès se rend au point d'eau le plus approprié à la manoeuvre qu'il compte réaliser"
        ],
        "answer": 2,
        "explanation": "ZAT (zone d'attaque) : les lances y sont établies (lances canon et lances à main) ; cette zone peut-être divisée en secteurs d'attaque"
      },
      {
        "question": "Combien de ZAL - ZE - ZAT peut-il exister sur la même intervention ?",
        "options": [
          "Il dépose son 70 x 20 m où il le juge nécessaire",
          "Il peut exister pour une même intervention plusieurs ZAL, ZE ou ZAT",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements",
          "L'alimentation de la pompe doit être réalisée dès qu'une lance est établie (à l'exception de lances sur colonne humide)"
        ],
        "answer": 1,
        "explanation": "Il peut exister pour une même intervention plusieurs ZAL, ZE ou ZAT"
      },
      {
        "question": "Combien de mètres linéaires sont nécessaires pour la dépose de la berce ?",
        "options": [
          "Ce dispositif permet l'alimentation en solution moussante de 1 à 4 lances 250 l/min., et/ou 1 à 2 lances 500 l/min., et/ou 1 à 2 lances 1 000 l/min",
          "Le chef d'agrès désigne au conducteur l'orifice d'alimentation du poteau relais",
          "Il assure le dernier tronçon de la ligne, raccorde son tuyau à celui du servant et utilise éventuellement le tuyau laissé sur le trajet par le chef...",
          "La BA nécessite 14 m en linéaire pour déposer la berce"
        ],
        "answer": 3,
        "explanation": "La BA nécessite 14 m en linéaire pour déposer la berce"
      },
      {
        "question": "Que dépose le personnel du FA-CA aux ordres \"Emplacement de la zone émulseur (tel endroit, établissez\" ! ?",
        "options": [
          "Le chef d'agrès du CA ou BA et le SdL prennent place sur les marchepieds, le 1er à gauche, le SdL à droite",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'air et de l'eau",
          "tuyaux de 110 mm dans le cas d'établissements de lance canon",
          "La MPVE (Motopompe Volumétrique Emulseur)"
        ],
        "answer": 3,
        "explanation": "La MPVE (Motopompe Volumétrique Emulseur)"
      },
      {
        "question": "Que dépose le personnel du FA-CA aux ordres \"Emplacement de la zone émulseur (tel endroit, établissez\" ! ?",
        "options": [
          "Distance entre l'installation",
          "Ils sont réalisés au moyen des tuyaux de 110 mm pliés en écheveau",
          "L'établissement d'une division au plus près du sinistre",
          "2 clés tricoises de 100 mm CA ou BA"
        ],
        "answer": 3,
        "explanation": "2 clés tricoises de 100 mm CA ou BA"
      },
      {
        "question": "Que dépose le personnel du FA-CA aux ordres \"Emplacement de la zone émulseur (tel endroit, établissez\" ! ?",
        "options": [
          "Le chef→ 2 tuyaux de 45 x 20 m dont 1 muni d'une lance",
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant",
          "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon",
          "2 raccords d'injection"
        ],
        "answer": 3,
        "explanation": "2 raccords d'injection"
      },
      {
        "question": "Que dépose le personnel du FA-CA aux ordres \"Emplacement de la zone émulseur (tel endroit, établissez\" ! ?",
        "options": [
          "Lors de l'établissement de lignes de 110 mm le personnel place, si nécessaire, des dispositifs de franchissement de tuyaux",
          "Pression à la lance : 6 bars (lance non autorégulée)",
          "la lance du dévidoir tournant",
          "2 cannes plongeuses"
        ],
        "answer": 3,
        "explanation": "2 cannes plongeuses"
      },
      {
        "question": "Que permet le dispositif d'injection ?",
        "options": [
          "Basculer l'écheveau sur le flanc et ramener le demi-raccord qui se trouvait au sol sur le manchon pour l'attacher avec la courroie",
          "L'établissement d'alimentation permet d'alimenter la pompe de l'engin",
          "Il permet l'injection d'émulseur dans les lignes d'alimentation (F) de la lance canon, à une pression toujours supérieure à celle des lignes d'eau",
          "L'établissement rapide d'une seconde lance sur la division"
        ],
        "answer": 2,
        "explanation": "Il permet l'injection d'émulseur dans les lignes d'alimentation (F) de la lance canon, à une pression toujours supérieure à celle des lignes d'eau"
      },
      {
        "question": "A quoi sont destinés les raccords d'injection ?",
        "options": [
          "L'établissement d'une division au plus près du sinistre",
          "La coupure de l'alimentation à la division pour remplacer ou prolonger l'établissement",
          "Ils sont destinés à l'alimentation d'une lance canon mousse d'un débit de 2 000 l/min",
          "L'équipe et le chef d'agrès se rendent au niveau du feu"
        ],
        "answer": 2,
        "explanation": "Ils sont destinés à l'alimentation d'une lance canon mousse d'un débit de 2 000 l/min"
      },
      {
        "question": "Que permet le dispositif d'injection ?",
        "options": [
          "L'emport de l'ensemble des tuyaux de 70 x 20 m de la ligne d'attaque reste à la diligence du chef d'agrès à partir du moment où celui-ci intervient...",
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a...",
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun",
          "Ce dispositif permet l'alimentation en solution moussante de 1 à 4 lances 250 l/min., et/ou 1 à 2 lances 500 l/min., et/ou 1 à 2 lances 1 000 l/min"
        ],
        "answer": 3,
        "explanation": "Ce dispositif permet l'alimentation en solution moussante de 1 à 4 lances 250 l/min., et/ou 1 à 2 lances 500 l/min., et/ou 1 à 2 lances 1 000 l/min"
      },
      {
        "question": "Que permet le dispositif d'injection avec l'appui d'autres équipes un \"PMP MOUSSE\" ?",
        "options": [
          "Le servant se rend au point d'eau et avertit le conducteur de la nécessité d'obtenir une pression de 10 bars à l'injecteur",
          "Avec l'appui d'autres équipes un \"PMP MOUSSE\" permet d'alimenter de 1 à 8 lances 250 l/min., et/ou 1 à 4 lances 250 l/min., et/ou 1 à 2 lances 1 00...",
          "Les 2 brins de la courroie d'amarre sont passés autour du fût et de la poignée de la lance",
          "Il dépose son 70 x 20 m où il le juge nécessaire"
        ],
        "answer": 1,
        "explanation": "Avec l'appui d'autres équipes un \"PMP MOUSSE\" permet d'alimenter de 1 à 8 lances 250 l/min., et/ou 1 à 4 lances 250 l/min., et/ou 1 à 2 lances 1 000 l/min"
      },
      {
        "question": "Que permet la MPVE ?",
        "options": [
          "Relais (engin, motopompe, VEDI…)",
          "La MPVE permet d'injecter à une distance comprise entre 20 et 200 mètres au moyen d'établissements de tuyaux de 45 mm (B, D)",
          "De diminuer les pertes de charges et les \"coups de bélier\"",
          "La lance du dévidoir tournant peut être prolongée par des tuyaux de 45 mm"
        ],
        "answer": 1,
        "explanation": "La MPVE permet d'injecter à une distance comprise entre 20 et 200 mètres au moyen d'établissements de tuyaux de 45 mm (B, D)"
      },
      {
        "question": "Que font le CA ou BA lorsque les établissements de manoeuvre sont réalisés ?",
        "options": [
          "Les 2 brins de la courroie d'amarre sont passés autour du fût et de la poignée de la lance",
          "Hydraulique BI-PI et l'engin",
          "Lorsque les établissements de manoeuvre sont réalisés, le CA ou BA regagne la zone émulseur",
          "Relais (engin, motopompe, VEDI…)"
        ],
        "answer": 2,
        "explanation": "Lorsque les établissements de manoeuvre sont réalisés, le CA ou BA regagne la zone émulseur"
      },
      {
        "question": "Que font le CA ou BA lorsque les établissements de manoeuvre sont réalisés ?",
        "options": [
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant",
          "Le chef d'agrès désigne au conducteur l'orifice d'alimentation du poteau relais",
          "Branchent les raccords d'injection sur les lignes de 110 mm à égale distance de l'engin",
          "1re et 2e lance (eau ou mousse)"
        ],
        "answer": 2,
        "explanation": "Branchent les raccords d'injection sur les lignes de 110 mm à égale distance de l'engin"
      },
      {
        "question": "Que font le CA ou BA lorsque les établissements de manoeuvre sont réalisés ?",
        "options": [
          "Etablir deux lignes de 110 mm de longueur maximale de 200 m chacune, permettant de disposer de deux points d'eau avancés (2 divisions 100 / 3 x 50)",
          "La MPVE permet d'injecter à une distance comprise entre 20 et 200 mètres au moyen d'établissements de tuyaux de 45 mm (B, D)",
          "Fiche individuelle de signalement des incidents et agressions",
          "Ils établissent les tuyaux de 45 mm des raccords d'injection vers la MPVE (1 tuyau directement raccordé sur la MPVE avant la division 50x2x50)"
        ],
        "answer": 3,
        "explanation": "Ils établissent les tuyaux de 45 mm des raccords d'injection vers la MPVE (1 tuyau directement raccordé sur la MPVE avant la division 50x2x50)"
      },
      {
        "question": "Qu'impose l'alimentation de la MPVE par une MPT ?",
        "options": [
          "L'éloignement de la zone émulseur ou l'impossibilité d'accès à cette dernière du CA ou BA impose l'alimentation de la MPVE par une MPT",
          "Ils établissent les tuyaux de 45 mm des raccords d'injection vers la MPVE (1 tuyau directement raccordé sur la MPVE avant la division 50x2x50)",
          "La pompe doit absolument être alimentée avant d'autoriser l'établissement d'une seconde lance sur la \"LA\"",
          "Le conducteur peut envoyer dans un premier temps, l'eau de la citerne puis, alimenter ensuite la pompe"
        ],
        "answer": 0,
        "explanation": "L'éloignement de la zone émulseur ou l'impossibilité d'accès à cette dernière du CA ou BA impose l'alimentation de la MPVE par une MPT"
      },
      {
        "question": "Que fait l'équipe du CA ou BA lorsqu'elle reçoit l'ordre de fin de manœuvre ?",
        "options": [
          "Lorsqu'elle en reçoit l'ordre, l'équipe du CA ou BA arrête définitivement l'injection d'émulseur",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements",
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun",
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant"
        ],
        "answer": 0,
        "explanation": "Lorsqu'elle en reçoit l'ordre, l'équipe du CA ou BA arrête définitivement l'injection d'émulseur"
      },
      {
        "question": "Que doit-on faire après l'utilisation d'émulseur ?",
        "options": [
          "La courroie d'amarre est fermée",
          "La lance canon est obligatoirement alimentée par deux lignes de 110 mm",
          "L'utilisation d'émulseur est toujours suivie d'un abondant rinçage",
          "3e et 4e lances (eau ou mousse)"
        ],
        "answer": 2,
        "explanation": "L'utilisation d'émulseur est toujours suivie d'un abondant rinçage"
      },
      {
        "question": "Comment est fait le nettoyage de la MPVE ?",
        "options": [
          "La MPVE peut être mise en aspiration ou alimentée par la citerne d'un engin-pompe dont le moteur doit obligatoirement être à l'arrêt",
          "L'équipe de l'échelle réalise l'établissement de la lance jusqu'à la division",
          "Lors de la phase d'extinction, le débit des lances doit être adapté",
          "L'équipe et le chef d'agrès se rendent au niveau du feu"
        ],
        "answer": 0,
        "explanation": "La MPVE peut être mise en aspiration ou alimentée par la citerne d'un engin-pompe dont le moteur doit obligatoirement être à l'arrêt"
      },
      {
        "question": "Concernant « Préambule », quelle proposition est exacte ?",
        "options": [
          "Gérer le pare brise et les vitrages selon les fiches techniques réalisées Dégarnir les montants",
          "Périmètre de sécurité d'un rayon de 50 m déterminé et délimité",
          "disposer le vide-cave bien à plat sur son embase,",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Préambule."
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
        "question": "Concernant « Préambule », quelle proposition est exacte ?",
        "options": [
          "TGR+sacoche SDL+Lampe portative",
          "Conducteur et passager Calage 4 points minimum + 1 roue",
          "A partir de 50ppm, il nécessaire d'effectuer une évacuation pour une ventilation des lieux",
          "L'établissement d'alimentation permet d'alimenter la pompe de l'engin"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Préambule."
      },
      {
        "question": "Concernant « Préambule », quelle proposition est exacte ?",
        "options": [
          "Evacuation complète",
          "Cahier d'observations DSA",
          "L'établissement d'une division au plus près du sinistre",
          "L'alimentation de la pompe doit être réalisée dès qu'une lance est établie (à l'exception de lances sur colonne humide)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Préambule."
      },
      {
        "question": "Concernant « Préambule », quelle proposition est exacte ?",
        "options": [
          "« Où sont les zones de compression et de tension ? »",
          "Ils sont réalisés par le conducteur et éventuellement aidé par un personnel (SDL, sous-officier adjoint, etc.) au moyen de tuyaux de 70 mm, 110 mm ...",
          "faire descendre le vide-cave avec une commande en évitant les chocs,",
          "La pression en sortie de pompe doit être de 8,75 bars, soit 9 bars pour un établissement de plain-pied"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Préambule."
      },
      {
        "question": "Concernant « Préambule », quelle proposition est exacte ?",
        "options": [
          "ouvre la porte à l'aide de la clé spéciale,",
          "Ils permettent d'utiliser un point d'eau hors de portée des dévidoirs mobiles",
          "L'établissement rapide d'une ligne de 70 mm en cas d'indisponibilité d'une colonne sèche ou humide",
          "2-Forces de compression et de tension"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Préambule."
      },
      {
        "question": "Concernant « Préambule », quelle proposition est exacte ?",
        "options": [
          "Une lance (eau ou mousse) et la LDT",
          "Ils sont réalisés au moyen des tuyaux de 110 mm pliés en écheveau",
          "Aspiration (nappe ou cours d'eau)",
          "ALIMENTATION ET PRESSION A LA POMPE"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Préambule."
      },
      {
        "question": "Concernant « Préambule », quelle proposition est exacte ?",
        "options": [
          "La tronçonneuse doit se tenir fermement à 2 mains pour en assurer le contrôle permanent,",
          "Intervention sur route Accident sur 1 seule voie",
          "Chute de l'intervenant lors de travaux en hauteur Fractures diverses et traumatisme pouvant engager le pronostic vital Utilisation du LSPCC",
          "En règle générale, ces établissements se font du point d'attaque au point d'eau"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Préambule."
      },
      {
        "question": "Concernant « Préambule », quelle proposition est exacte ?",
        "options": [
          "vidanger le corps de pompe et rincer la MPE après chaque utilisation",
          "FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION",
          "Ils sont raccordés directement à l'engin-pompe ou à un établissement de manoeuvre",
          "Diamètre de la conduite"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Préambule."
      },
      {
        "question": "Concernant « Préambule », quelle proposition est exacte ?",
        "options": [
          "se rend à la machinerie",
          "Bouchon du réservoir d'oïl",
          "enregistre la marque de l'ascenseur ainsi que les coordonnées de la société de maintenance,",
          "tuyaux de 110 mm dans le cas d'établissements de lance canon"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Préambule."
      },
      {
        "question": "Concernant « Préambule », quelle proposition est exacte ?",
        "options": [
          "Utiliser le lot de sauvetage si progression en hauteur",
          "la lance du dévidoir tournant",
          "Écrasement dans l'espace vitré",
          "veiller à ce que l'eau d'alimentation soit entre 6 et 8 bars"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Préambule."
      },
      {
        "question": "Concernant « Préambule », quelle proposition est HORS sujet ?",
        "options": [
          "Par le chef d'agrès en fonction du sinistre, des capacités hydrauliques de l'engin et/ou de ses caractéristiques",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements",
          "L'établissement d'alimentation permet d'alimenter la pompe de l'engin",
          "Ils sont raccordés directement à l'engin-pompe ou à un établissement de manoeuvre"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Préambule »."
      },
      {
        "question": "Concernant « Préambule », quelle proposition est HORS sujet ?",
        "options": [
          "Ils permettent d'utiliser un point d'eau hors de portée des dévidoirs mobiles",
          "la lance du dévidoir tournant",
          "Débit de l'installation",
          "L'établissement d'alimentation permet d'alimenter la pompe de l'engin"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Préambule »."
      },
      {
        "question": "Concernant « Préambule », quelle proposition est HORS sujet ?",
        "options": [
          "L'alimentation de la pompe doit être réalisée dès qu'une lance est établie (à l'exception de lances sur colonne humide)",
          "ETABLISSEMENTS D'ATTAQUE SECURITE",
          "En règle générale, ces établissements se font du point d'attaque au point d'eau",
          "Ils sont raccordés directement à l'engin-pompe ou à un établissement de manoeuvre"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Préambule »."
      },
      {
        "question": "Concernant « Préambule », quelle proposition est HORS sujet ?",
        "options": [
          "ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES",
          "Ils sont réalisés par le conducteur et éventuellement aidé par un personnel (SDL, sous-officier adjoint, etc.) au moyen de tuyaux de 70 mm, 110 mm ...",
          "la lance du dévidoir tournant",
          "Ils sont raccordés directement à l'engin-pompe ou à un établissement de manoeuvre"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Préambule »."
      },
      {
        "question": "Concernant « Préambule », quelle proposition est HORS sujet ?",
        "options": [
          "Ils permettent d'utiliser un point d'eau hors de portée des dévidoirs mobiles",
          "la lance du dévidoir tournant",
          "Liaison personnelle (hormis F)",
          "Ils sont réalisés au moyen des tuyaux de 110 mm pliés en écheveau"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Préambule »."
      },
      {
        "question": "Concernant « Préambule », quelle proposition est HORS sujet ?",
        "options": [
          "Cahier d'observations DSA",
          "L'alimentation de la pompe doit être réalisée dès qu'une lance est établie (à l'exception de lances sur colonne humide)",
          "Ils sont réalisés par le conducteur et éventuellement aidé par un personnel (SDL, sous-officier adjoint, etc.) au moyen de tuyaux de 70 mm, 110 mm ...",
          "Ils sont raccordés directement à l'engin-pompe ou à un établissement de manoeuvre"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Préambule »."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est exacte ?",
        "options": [
          "Par le chef d'agrès en fonction du sinistre, des capacités hydrauliques de l'engin et/ou de ses caractéristiques",
          "Une fois brisée, retirer le restant de la vitre. Pour vous aider, il est possible de créer une poignée avec le ruban adhésif utilisé",
          "course verticale limitée à une hauteur entre 15 et 18 m",
          "faire descendre l'hydro-éjecteur avec une commande en évitant les chocs (raccorder la commande au clapet de vidange),"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENT D'ALIMENTATION."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est exacte ?",
        "options": [
          "Poteau d'incendie (PI)",
          "Être toujours en mesure de maîtriser la machine,",
          "Si l'ouverture de porte est rendue difficile par le cadre de la vitre, le découper au moyen de la cisaille",
          "N'utiliser la tronçonneuse que dans des endroits ventilés"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENT D'ALIMENTATION."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est exacte ?",
        "options": [
          "ZAT (zone d'attaque) : les lances y sont établies (lances canon et lances à main) ; cette zone peut-être divisée en secteurs d'attaque",
          "Bouche d'incendie (BI)",
          "Fiche individuelle de signalement des incidents et agressions",
          "Intervention sur route Accident sur 1 seule voie"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENT D'ALIMENTATION."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est exacte ?",
        "options": [
          "Réalisée par un ruban de couleur et tenu par les services de police ou gendarmerie",
          "Aspiration (nappe ou cours d'eau)",
          "Les indemnes : impliqués non décédés et dont l'état ne nécessite aucun soin médical",
          "L'établissement rapide d'une seconde lance sur la division"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENT D'ALIMENTATION."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est exacte ?",
        "options": [
          "faire descendre le vide-cave avec une commande en évitant les chocs,",
          "Relais (engin, motopompe, VEDI…)",
          "surveiller la pression à l'engin: 8 à 10 Bars lors de l'alimentation,",
          "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENT D'ALIMENTATION."
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
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est exacte ?",
        "options": [
          "Distance entre l'installation",
          "illustration: tronçonneuse en utilisation",
          "En règle générale, ces établissements se font du point d'attaque au point d'eau",
          "Les indemnes : impliqués non décédés et dont l'état ne nécessite aucun soin médical"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENT D'ALIMENTATION."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est exacte ?",
        "options": [
          "Fin d'intervention RATP -SNCF",
          "Hydraulique BI-PI et l'engin",
          "Lors d'une inondation, l'eau peut cacher toutes sortes de pièges (trous, outils, ....)",
          "Protection de la population : Mesures d'évacuation et procédures de sensibilisation"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENT D'ALIMENTATION."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENT DE LA LIGNE D'ATTAQUE",
          "Débit de l'installation",
          "faire le moins de coudes possible avec le tuyau de refoulement,",
          "« Comment vont réagir les 2 morceaux ? »"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENT D'ALIMENTATION."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est exacte ?",
        "options": [
          "Périmètre de sécurité d'un rayon de 50 m déterminé et délimité",
          "Diamètre de la conduite",
          "espèces protégées : faune sauvage captive; la détention d'espèces protégées est réglementée",
          "Les Moto-Pompes Flottantes CCC 6000"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENT D'ALIMENTATION."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est exacte ?",
        "options": [
          "Si demi-pavillon avant : couper selon la charte graphique les montants B et C",
          "FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION",
          "Bon de prise en charge provisoire de matériel",
          "Le chef d'agrès se rend au point d'eau le plus approprié à la manoeuvre qu'il compte réaliser"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENT D'ALIMENTATION."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est HORS sujet ?",
        "options": [
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements",
          "Poteau d'incendie (PI)",
          "Il portera une attention toute particulière à celle-ci pour éviter qu'elle ne se déchausse et prive les deux engins de leur alimentation en eau",
          "Hydraulique BI-PI et l'engin"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENT D'ALIMENTATION »."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est HORS sujet ?",
        "options": [
          "Il portera une attention toute particulière à celle-ci pour éviter qu'elle ne se déchausse et prive les deux engins de leur alimentation en eau",
          "Ils sont raccordés directement à l'engin-pompe ou à un établissement de manoeuvre",
          "Bouche d'incendie (BI)",
          "Hydraulique BI-PI et l'engin"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENT D'ALIMENTATION »."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est HORS sujet ?",
        "options": [
          "Au cours de l'attaque, le port complet des EPI est obligatoire",
          "Hydraulique BI-PI et l'engin",
          "Relais (engin, motopompe, VEDI…)",
          "Il portera une attention toute particulière à celle-ci pour éviter qu'elle ne se déchausse et prive les deux engins de leur alimentation en eau"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENT D'ALIMENTATION »."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est HORS sujet ?",
        "options": [
          "Hydraulique BI-PI et l'engin",
          "Distance entre l'installation",
          "1re et 2e lance (eau ou mousse)",
          "Par le chef d'agrès en fonction du sinistre, des capacités hydrauliques de l'engin et/ou de ses caractéristiques"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENT D'ALIMENTATION »."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est HORS sujet ?",
        "options": [
          "Hydraulique BI-PI et l'engin",
          "Aspiration (nappe ou cours d'eau)",
          "Outil de forcement et de déblai",
          "Par le chef d'agrès en fonction du sinistre, des capacités hydrauliques de l'engin et/ou de ses caractéristiques"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENT D'ALIMENTATION »."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est HORS sujet ?",
        "options": [
          "Bons de mouvement ST 30 bis",
          "Poteau d'incendie (PI)",
          "Hydraulique BI-PI et l'engin",
          "Le chef d'agrès se rend au point d'eau le plus approprié à la manoeuvre qu'il compte réaliser"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENT D'ALIMENTATION »."
      },
      {
        "question": "Concernant « GENERALITE », quelle proposition est exacte ?",
        "options": [
          "Le conducteur assure la mise en route de la MPVE",
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant",
          "De porter la puissance hydraulique à 1 000 l/min. par l'établissement d'une division50/2x 50",
          "Distance entre l'installation"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — GENERALITE."
      },
      {
        "question": "Concernant « GENERALITE », quelle proposition est exacte ?",
        "options": [
          "A partir de 50ppm, il nécessaire d'effectuer une évacuation pour une ventilation des lieux",
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance",
          "Etablissement au moyen du dévidoir",
          "GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — GENERALITE."
      },
      {
        "question": "Concernant « GENERALITE », quelle proposition est exacte ?",
        "options": [
          "Lors de la phase d'extinction, le débit des lances doit être adapté",
          "Attention aux véhicules équipés d'airbags latéraux dans les portières",
          "sont utilisés en général pour satisfaire des déplacements relativement courts de l'ordre de 15 à 18 m max",
          "Liberté de mouvement des intervenants"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — GENERALITE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE SECURITE », quelle proposition est exacte ?",
        "options": [
          "Elle est fixe ou semi-stationnaire dans le V.S.R, et peut disposer ou non de 2 dévidoirs équipés de flexibles",
          "ETABLISSEMENTS D'ATTAQUE SECURITE",
          "Interdiction d'accès de la zone au public et aux personnels d'intervention sauf ceux strictement nécessaires",
          "surveiller la pression à l'engin: 8 à 10 Bars lors de l'alimentation,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE SECURITE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE SECURITE », quelle proposition est exacte ?",
        "options": [
          "se renseigner sur l'état des personnes à l'intérieur de la cabine et les rassurer",
          "5 manchons souples, de taille variable, permettent de maintenir en place les tuyaux et de les guider au cours de l'établissement",
          "MARCHE GENERALE DES OPERATIONS",
          "Au cours de l'attaque, le port complet des EPI est obligatoire"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE SECURITE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE SECURITE », quelle proposition est exacte ?",
        "options": [
          "La pulvérisation d'insecticide doit être d'autant plus copieuse que l'ampleur de l'essaim est importante ou appréciée comme telle",
          "faire descendre l'hydro-éjecteur avec une commande en évitant les chocs (raccorder la commande au clapet de vidange),",
          "sécher l'appareil après utilisation",
          "Le non respect de cette directive entraîne automatiquement la responsabilité de l'intéressé et/ou de son chef"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE SECURITE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS », quelle proposition est exacte ?",
        "options": [
          "Bons de mouvement ST 30 bis",
          "Écrasement dans l'espace vitré",
          "ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS",
          "Eloigner les personnes non équipées,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS », quelle proposition est exacte ?",
        "options": [
          "Un commandement initial",
          "Mettre le starter, enfoncer le levier des gaz et le bouton de blocage",
          "MISE EN PLACE D'UN DISPOSITIF D'INJECTION",
          "définir avec précision les moyens nécessaires pour effectuer l'opération (motopompe, longueur et diamètre des tuyaux d'alimentation et de refouleme..."
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS », quelle proposition est exacte ?",
        "options": [
          "fait prendre le matériel,",
          "2 cannes plongeuses",
          "Réactions cutanées au produit Réaction allergique localisée Gant en caoutchouc et lunettes de protection",
          "Un commandement d'exécution"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS."
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
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS », quelle proposition est exacte ?",
        "options": [
          "Les chevaux : livret signalétique et puce électronique (pour les chevaux de course)",
          "Positionner le coupe pare-brise de telle façon que",
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun",
          "pas de souci de pollution"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS », quelle proposition est HORS sujet ?",
        "options": [
          "Un commandement initial",
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements",
          "Un commandement d'exécution"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS »."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS », quelle proposition est HORS sujet ?",
        "options": [
          "ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS",
          "Un commandement initial",
          "Ils sont raccordés directement à l'engin-pompe ou à un établissement de manoeuvre",
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS »."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS », quelle proposition est HORS sujet ?",
        "options": [
          "Un commandement d'exécution",
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun",
          "ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS",
          "Relais (engin, motopompe, VEDI…)"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS »."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS », quelle proposition est HORS sujet ?",
        "options": [
          "Un commandement d'exécution",
          "Un commandement initial",
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant",
          "ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS »."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS », quelle proposition est HORS sujet ?",
        "options": [
          "ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS",
          "1re et 2e lance (eau ou mousse)",
          "Un commandement initial",
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS »."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS », quelle proposition est HORS sujet ?",
        "options": [
          "ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS",
          "Un commandement d'exécution",
          "Outil de forcement et de déblai",
          "Un commandement initial"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS »."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES », quelle proposition est exacte ?",
        "options": [
          "Arrêter le moteur avant de poser l'appareil",
          "couper le courant, etc",
          "Les tués : toute personne qui décède sur le coup ou dans les trente jours qui suivent l'accident",
          "ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES », quelle proposition est exacte ?",
        "options": [
          "Poignée du lanceur",
          "1re et 2e lance (eau ou mousse)",
          "Ces chaînes de traction sont composées de 2 parties, chacune est munie d'un crochet de raccourcissement qui permet d'attraper uniquement la chaîne",
          "une fois la personne dégagée refermer et verrouiller la porte"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES », quelle proposition est exacte ?",
        "options": [
          "utiliser une crépine,",
          "Se méfier des conduits de fumée désaffectés qui peuvent être en mauvais état",
          "Lance du dévidoir tournant (LDT)",
          "Soutien psychologique"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES », quelle proposition est exacte ?",
        "options": [
          "Remise en état des infrastructures",
          "Une lance (eau ou mousse) et la LDT",
          "« Par où est mon chemin de fuite ? »",
          "Périmètre de sécurité d'un rayon de 50 m déterminé et délimité"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES », quelle proposition est exacte ?",
        "options": [
          "3e et 4e lances (eau ou mousse)",
          "Effectuer une coupe de décharge à l'endroit du pliage après dégarnissage",
          "Un accident corporel implique un certain nombre d'usagers. Parmi ceux-ci, on distingue",
          "respecter le périmétre de sécurité"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES », quelle proposition est exacte ?",
        "options": [
          "illustration: tronçonneuse en utilisation",
          "Lecture MX2100 Essence SP GPL Butane Propane Gaz de ville / methane",
          "Cas particuliers (équipe à 3)",
          "Surveillance des victimes intoxiquées par inhalation de gaz toxique"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES », quelle proposition est HORS sujet ?",
        "options": [
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements",
          "Une lance (eau ou mousse) et la LDT",
          "Lance du dévidoir tournant (LDT)",
          "ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES »."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES », quelle proposition est HORS sujet ?",
        "options": [
          "3e et 4e lances (eau ou mousse)",
          "Lance du dévidoir tournant (LDT)",
          "Ils sont raccordés directement à l'engin-pompe ou à un établissement de manoeuvre",
          "Cas particuliers (équipe à 3)"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES »."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES », quelle proposition est HORS sujet ?",
        "options": [
          "Cas particuliers (équipe à 3)",
          "1re et 2e lance (eau ou mousse)",
          "Relais (engin, motopompe, VEDI…)",
          "ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES »."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES », quelle proposition est HORS sujet ?",
        "options": [
          "Lance du dévidoir tournant (LDT)",
          "3e et 4e lances (eau ou mousse)",
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant",
          "Une lance (eau ou mousse) et la LDT"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES »."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES », quelle proposition est HORS sujet ?",
        "options": [
          "3e et 4e lances (eau ou mousse)",
          "Cas particuliers (équipe à 3)",
          "Un commandement initial",
          "1re et 2e lance (eau ou mousse)"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES »."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES », quelle proposition est HORS sujet ?",
        "options": [
          "TGR+sacoche SDL+Lampe portative",
          "3e et 4e lances (eau ou mousse)",
          "ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES",
          "Lance du dévidoir tournant (LDT)"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES »."
      },
      {
        "question": "Concernant « LES MATERIEL DE BASE A EMPORTER », quelle proposition est exacte ?",
        "options": [
          "Les pompes thermiques",
          "Insérer l'écarteur dans la partie arrière de la porte juste à côté du rail coulissant",
          "LES MATERIEL DE BASE A EMPORTER",
          "espèces qui vivent dans la nature et qui ne sont pas habituées au contact avec l'homme"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — LES MATERIEL DE BASE A EMPORTER."
      }
    ]
  },
  {
    "id": "qcm-bsp-serie-12",
    "title": "BSP 200.13 — Établissements — Série 12",
    "level": "niveau-avance",
    "category": "incendie",
    "questions": [
      {
        "question": "Concernant « LES MATERIEL DE BASE A EMPORTER », quelle proposition est exacte ?",
        "options": [
          "Liaison personnelle (hormis F)",
          "Calage d'un véhicule sur ses roues",
          "laver et rincer le mùatériel après usage",
          "Comme il n'a pas d'odeur et qu'il est invisible à l'oeil, seul un appareil de mesures permet de donner l'alarme"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LES MATERIEL DE BASE A EMPORTER."
      },
      {
        "question": "Concernant « LES MATERIEL DE BASE A EMPORTER », quelle proposition est exacte ?",
        "options": [
          "définir avec précision les moyens nécessaires pour effectuer l'opération (motopompe, longueur et diamètre des tuyaux d'alimentation et de refouleme...",
          "Un accident corporel (mortel et non mortel) de la circulation routière est un accident qui",
          "Outil de forcement et de déblai",
          "Prévoir un périmètre de sécurité"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — LES MATERIEL DE BASE A EMPORTER."
      },
      {
        "question": "Concernant « LES MATERIEL DE BASE A EMPORTER », quelle proposition est exacte ?",
        "options": [
          "« Mon périmètre de sécurité est-il suffisant ? »",
          "Ne pas pulvériser loin de l'orifice mais toujours dans l'entrée principale utilisée par les insectes",
          "Liaison personnelle",
          "Ces forces devront être très clairement identifiées avant la coupe, de façon à ne pas être surpris lors de la libération"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — LES MATERIEL DE BASE A EMPORTER."
      },
      {
        "question": "Concernant « LES MATERIEL DE BASE A EMPORTER », quelle proposition est exacte ?",
        "options": [
          "placer le reptile dans un sac",
          "Pincer la porte légèrement au-dessus de la poignée pour se dégager un jour de quelques centimètres",
          "Plastique type polycarbonate : La casse est difficile, il faut le retirer/déboîter à l'aide d'un outil de forcement",
          "TGR+sacoche SDL+Lampe portative"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — LES MATERIEL DE BASE A EMPORTER."
      },
      {
        "question": "Concernant « LES MATERIEL DE BASE A EMPORTER », quelle proposition est HORS sujet ?",
        "options": [
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements",
          "Liaison personnelle",
          "LES MATERIEL DE BASE A EMPORTER",
          "TGR+sacoche SDL+Lampe portative"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LES MATERIEL DE BASE A EMPORTER »."
      },
      {
        "question": "Concernant « LES MATERIEL DE BASE A EMPORTER », quelle proposition est HORS sujet ?",
        "options": [
          "Liaison personnelle (hormis F)",
          "LES MATERIEL DE BASE A EMPORTER",
          "Ils sont raccordés directement à l'engin-pompe ou à un établissement de manoeuvre",
          "TGR+sacoche SDL+Lampe portative"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LES MATERIEL DE BASE A EMPORTER »."
      },
      {
        "question": "Concernant « LES MATERIEL DE BASE A EMPORTER », quelle proposition est HORS sujet ?",
        "options": [
          "Relais (engin, motopompe, VEDI…)",
          "Liaison personnelle",
          "TGR+sacoche SDL+Lampe portative",
          "Liaison personnelle (hormis F)"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LES MATERIEL DE BASE A EMPORTER »."
      },
      {
        "question": "Concernant « LES MATERIEL DE BASE A EMPORTER », quelle proposition est HORS sujet ?",
        "options": [
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant",
          "TGR+sacoche SDL+Lampe portative",
          "Liaison personnelle",
          "LES MATERIEL DE BASE A EMPORTER"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LES MATERIEL DE BASE A EMPORTER »."
      },
      {
        "question": "Concernant « LES MATERIEL DE BASE A EMPORTER », quelle proposition est HORS sujet ?",
        "options": [
          "Liaison personnelle (hormis F)",
          "Un commandement initial",
          "Liaison personnelle",
          "LES MATERIEL DE BASE A EMPORTER"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LES MATERIEL DE BASE A EMPORTER »."
      },
      {
        "question": "Concernant « LES MATERIEL DE BASE A EMPORTER », quelle proposition est HORS sujet ?",
        "options": [
          "LES MATERIEL DE BASE A EMPORTER",
          "Liaison personnelle (hormis F)",
          "3e et 4e lances (eau ou mousse)",
          "Outil de forcement et de déblai"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LES MATERIEL DE BASE A EMPORTER »."
      },
      {
        "question": "Concernant « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION », quelle proposition est exacte ?",
        "options": [
          "LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION",
          "force de compression : sur laquelle on se limitera à une coupe de dégagement, la pression exercée étant capable de bloquer le guide chaîne",
          "Soulever puis basculer le pavillon vers l'avant ou l'arrière",
          "se protéger les mains par des gants"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION."
      },
      {
        "question": "Concernant « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION », quelle proposition est exacte ?",
        "options": [
          "Distance entre l'installation",
          "Le chef d'équipe déposes on matériel au point d'attaque, retourne au dévidoir et répercute l'ordre au servant. Le servant tire le dévidoir et le dé...",
          "Bon de prise en charge provisoire de matériel",
          "Pincer le bas de caisse pour créer une ouverture au niveau de la portière"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION."
      },
      {
        "question": "Concernant « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION », quelle proposition est exacte ?",
        "options": [
          "ne jamais immerger la fiche du câble,",
          "vérifie la fermeture des portes palières à tous les étages,",
          "Avis de passage des sapeurs pompiers",
          "Soutien psychologique"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION."
      },
      {
        "question": "Concernant « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION », quelle proposition est exacte ?",
        "options": [
          "Positionner le vérin contre la cale en bois et le montant",
          "Bouchon du réservoir d'essence",
          "Contrôle entrées/sorties si possible",
          "Cahier d'observations DSA"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION."
      },
      {
        "question": "Concernant « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION », quelle proposition est exacte ?",
        "options": [
          "Bons de mouvement ST 30 bis",
          "engager le minimum de personnel",
          "ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS",
          "LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION."
      },
      {
        "question": "Concernant « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION », quelle proposition est exacte ?",
        "options": [
          "Gêne à la progression des engins d'incendie",
          "Les agents de la Protection Civile ont à leur disposition un certain nombre de matériels d'épuisement",
          "Le porte-lance monte à l'échelle",
          "Déposer ensuite l'ensemble du pare-brise feuilleté"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION."
      },
      {
        "question": "Concernant « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION », quelle proposition est exacte ?",
        "options": [
          "Il peut exister pour une même intervention plusieurs ZAL, ZE ou ZAT",
          "Fiche individuelle de signalement des incidents et agressions",
          "2 clés tricoises de 100 mm CA ou BA",
          "Rétablissement d'éclairage public"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION."
      },
      {
        "question": "Concernant « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENT DE LA LIGNE D'ATTAQUE",
          "Fin d'intervention RATP -SNCF",
          "Les agents de la Protection Civile répondent à un double objectif",
          "ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION."
      },
      {
        "question": "Concernant « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION », quelle proposition est HORS sujet ?",
        "options": [
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements",
          "LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION",
          "Gêne à la progression des engins d'incendie",
          "Bon de prise en charge provisoire de matériel"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION »."
      },
      {
        "question": "Concernant « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION », quelle proposition est HORS sujet ?",
        "options": [
          "Ils sont raccordés directement à l'engin-pompe ou à un établissement de manoeuvre",
          "Cahier d'observations DSA",
          "Fiche individuelle de signalement des incidents et agressions",
          "Bon de prise en charge provisoire de matériel"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION »."
      }
    ]
  },
  {
    "id": "qcm-bsp-serie-13",
    "title": "BSP 200.13 — Établissements — Série 13",
    "level": "niveau-1",
    "category": "incendie",
    "questions": [
      {
        "question": "Concernant « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION », quelle proposition est HORS sujet ?",
        "options": [
          "Bon de prise en charge provisoire de matériel",
          "Bons de mouvement ST 30 bis",
          "LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION",
          "Relais (engin, motopompe, VEDI…)"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION »."
      },
      {
        "question": "Concernant « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION », quelle proposition est HORS sujet ?",
        "options": [
          "Bon de prise en charge provisoire de matériel",
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant",
          "Cahier d'observations DSA",
          "Bons de mouvement ST 30 bis"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION »."
      },
      {
        "question": "Concernant « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION », quelle proposition est HORS sujet ?",
        "options": [
          "Un commandement initial",
          "Bons de mouvement ST 30 bis",
          "LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION",
          "Gêne à la progression des engins d'incendie"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION »."
      },
      {
        "question": "Concernant « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION », quelle proposition est HORS sujet ?",
        "options": [
          "Bons de mouvement ST 30 bis",
          "3e et 4e lances (eau ou mousse)",
          "Fin d'intervention RATP -SNCF",
          "Gêne à la progression des engins d'incendie"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION »."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENT DE LA LIGNE D'ATTAQUE",
          "faire éloigner les curieux",
          "OUVRIR UNE PORTE (METHODE CLASSIQUE)",
          "Zone d'alimentation"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LA LIGNE D'ATTAQUE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est exacte ?",
        "options": [
          "L'établissement d'une division au plus près du sinistre",
          "GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE",
          "Les raclettes: Elles servent à évacuer une fine couche de liquide",
          "Prendre en considération le sens du fil du bois pour les cales"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LA LIGNE D'ATTAQUE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est exacte ?",
        "options": [
          "L'établissement d'alimentation permet d'alimenter la pompe de l'engin",
          "Ce sont les causes et l'importance de l'inondation qui vont déterminer le type de matériel à utiliser",
          "L'établissement rapide d'une seconde lance sur la division",
          "faire éloigner les curieux"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LA LIGNE D'ATTAQUE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est exacte ?",
        "options": [
          "Objectif : Savoir manœuvrer le matériel de désincarcération",
          "La coupure de l'alimentation à la division pour remplacer ou prolonger l'établissement",
          "Noter le numéro du service d'assistance de la marque de l'ascenseur et le donner au chef d'agrès afin d'avertir le technicien de garde",
          "Ils permettent d'utiliser un point d'eau hors de portée des dévidoirs mobiles"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LA LIGNE D'ATTAQUE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est exacte ?",
        "options": [
          "Inviter la (ou les) personne (s) à sortir",
          "Le corps de la cisaille : il supporte les mâchoires et contient le corps du ou des vérins (double effet)",
          "L'établissement rapide d'une ligne de 70 mm en cas d'indisponibilité d'une colonne sèche ou humide",
          "Insérer l'écarteur dans le jour et l'ouvrir afin de faire céder la serrure"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LA LIGNE D'ATTAQUE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est exacte ?",
        "options": [
          "transporter l'appareil debout,",
          "LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI",
          "Réglage facile de la vitesse de déplacement",
          "De porter la puissance hydraulique à 1 000 l/min. par l'établissement d'une division50/2x 50"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LA LIGNE D'ATTAQUE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est exacte ?",
        "options": [
          "De diminuer les pertes de charges et les \"coups de bélier\"",
          "Objectif : Savoir manœuvrer le matériel de désincarcération",
          "Effectuer la découpe de la partie inférieure",
          "ETABLISSEMENT VERTICAL SANS L.A"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LA LIGNE D'ATTAQUE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est exacte ?",
        "options": [
          "Etablir deux lignes de 110 mm, permettant de disposer de deux points d'eau avancés (2divisions 100 / 3 x50) jusqu'à 1 000 m",
          "respecter le périmétre de sécurité",
          "Ne pas allumer de feu pour réaliser la destruction mais pulvériser le produit insecticide à l'intérieur de la cheminée",
          "5 manchons souples, de taille variable, permettent de maintenir en place les tuyaux et de les guider au cours de l'établissement"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LA LIGNE D'ATTAQUE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est exacte ?",
        "options": [
          "La pince à chat permet de saisir le cou du chat et de le serrer grâce à la poignée",
          "Surveillance des victimes intoxiquées par inhalation de gaz toxique",
          "3 tuyaux de 70 x 20 m pliés en écheveau (dont un équipé d'une division)",
          "Au cours de l'attaque, le port complet des EPI est obligatoire"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LA LIGNE D'ATTAQUE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est exacte ?",
        "options": [
          "pointes à couper : permettent l'utilisation d'un écarteur pour le découpage de plaque en métal très fine",
          "La couverture est utilisée pour la contention des lézards, des iguanes. En jetant la couverture sur l'animal, il va se sentir caché et va se calmer",
          "2 tuyaux de 45 x 20 m pliés en écheveau dont l'un est doté d'une lance à double régulation",
          "Astuce(s) : La scie sabre peut être un outil complémentaire pour la césarisation des montants et du pare brise"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LA LIGNE D'ATTAQUE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est HORS sujet ?",
        "options": [
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements",
          "3 tuyaux de 70 x 20 m pliés en écheveau (dont un équipé d'une division)",
          "L'établissement rapide d'une seconde lance sur la division",
          "5 manchons souples, de taille variable, permettent de maintenir en place les tuyaux et de les guider au cours de l'établissement"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENT DE LA LIGNE D'ATTAQUE »."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est HORS sujet ?",
        "options": [
          "Ils sont raccordés directement à l'engin-pompe ou à un établissement de manoeuvre",
          "L'établissement rapide d'une seconde lance sur la division",
          "3 tuyaux de 70 x 20 m pliés en écheveau (dont un équipé d'une division)",
          "5 manchons souples, de taille variable, permettent de maintenir en place les tuyaux et de les guider au cours de l'établissement"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENT DE LA LIGNE D'ATTAQUE »."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est HORS sujet ?",
        "options": [
          "2 tuyaux de 45 x 20 m pliés en écheveau dont l'un est doté d'une lance à double régulation",
          "Relais (engin, motopompe, VEDI…)",
          "5 manchons souples, de taille variable, permettent de maintenir en place les tuyaux et de les guider au cours de l'établissement",
          "L'établissement rapide d'une ligne de 70 mm en cas d'indisponibilité d'une colonne sèche ou humide"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENT DE LA LIGNE D'ATTAQUE »."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est HORS sujet ?",
        "options": [
          "5 manchons souples, de taille variable, permettent de maintenir en place les tuyaux et de les guider au cours de l'établissement",
          "3 tuyaux de 70 x 20 m pliés en écheveau (dont un équipé d'une division)",
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant",
          "La coupure de l'alimentation à la division pour remplacer ou prolonger l'établissement"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENT DE LA LIGNE D'ATTAQUE »."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est HORS sujet ?",
        "options": [
          "2 tuyaux de 45 x 20 m pliés en écheveau dont l'un est doté d'une lance à double régulation",
          "L'établissement rapide d'une seconde lance sur la division",
          "Un commandement initial",
          "La coupure de l'alimentation à la division pour remplacer ou prolonger l'établissement"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENT DE LA LIGNE D'ATTAQUE »."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est HORS sujet ?",
        "options": [
          "De porter la puissance hydraulique à 1 000 l/min. par l'établissement d'une division50/2x 50",
          "L'établissement rapide d'une seconde lance sur la division",
          "3e et 4e lances (eau ou mousse)",
          "La coupure de l'alimentation à la division pour remplacer ou prolonger l'établissement"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENT DE LA LIGNE D'ATTAQUE »."
      }
    ]
  },
  {
    "id": "qcm-bsp-serie-14",
    "title": "BSP 200.13 — Établissements — Série 14",
    "level": "niveau-2",
    "category": "incendie",
    "questions": [
      {
        "question": "Concernant « 43. Expliquer le pliage des tuyaux 45 x 20 m ? », quelle proposition est exacte ?",
        "options": [
          "Zone d'alimentation",
          "laver et rincer le matériel après usage",
          "Hébergements des sinistres",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'eau et de l'air"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 43. Expliquer le pliage des tuyaux 45 x 20 m ?."
      },
      {
        "question": "Concernant « 43. Expliquer le pliage des tuyaux 45 x 20 m ? », quelle proposition est exacte ?",
        "options": [
          "à moteur à attaque directe (couramment appelé \"Gearless\" ou sans treuil),",
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre",
          "course verticale pas vraiment limitée",
          "chien dans une voiture accidentée morsures Faire intervenir un animalier. Attraper l'animal avec un lasso et le faire sortir"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 43. Expliquer le pliage des tuyaux 45 x 20 m ?."
      },
      {
        "question": "Concernant « 43. Expliquer le pliage des tuyaux 45 x 20 m ? », quelle proposition est exacte ?",
        "options": [
          "une pompe électrique doit toujours être dans l'eau lors de son fonctionnement, mais pas complètement immergée,",
          "ZAT (zone d'attaque) : les lances y sont établies (lances canon et lances à main) ; cette zone peut-être divisée en secteurs d'attaque",
          "sont utilisés en général pour satisfaire des déplacements relativement courts de l'ordre de 15 à 18 m max",
          "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 43. Expliquer le pliage des tuyaux 45 x 20 m ?."
      },
      {
        "question": "Concernant « 43. Expliquer le pliage des tuyaux 45 x 20 m ? », quelle proposition est exacte ?",
        "options": [
          "Bouche d'incendie (BI)",
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité",
          "chat perché au sommet d'un arbre. griffure morsure Ce n'est pas une urgence",
          "Les gouttelettes du produit se déposeront sur le nid et à l'entrée"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 43. Expliquer le pliage des tuyaux 45 x 20 m ?."
      },
      {
        "question": "Concernant « 43. Expliquer le pliage des tuyaux 45 x 20 m ? », quelle proposition est exacte ?",
        "options": [
          "cône de balisage Gilets rétro réfléchissants Panneaux triflashs",
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance",
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a...",
          "définir les moyens à mettre en œuvre (matériels et personnels)"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 43. Expliquer le pliage des tuyaux 45 x 20 m ?."
      },
      {
        "question": "Concernant « 43. Expliquer le pliage des tuyaux 45 x 20 m ? », quelle proposition est exacte ?",
        "options": [
          "Prévoir un périmètre de sécurité",
          "La pince à serpent permet de saisir le serpent au plus près de la tête en le maintenant à distance",
          "Ils sont réalisés au moyen des tuyaux de 110 mm pliés en écheveau",
          "Basculer l'écheveau sur le flanc et ramener le demi-raccord qui se trouvait au sol sur le manchon pour l'attacher avec la courroie"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 43. Expliquer le pliage des tuyaux 45 x 20 m ?."
      },
      {
        "question": "Concernant « 43. Expliquer le pliage des tuyaux 45 x 20 m ? », quelle proposition est HORS sujet ?",
        "options": [
          "Basculer l'écheveau sur le flanc et ramener le demi-raccord qui se trouvait au sol sur le manchon pour l'attacher avec la courroie",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'eau et de l'air",
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 43. Expliquer le pliage des tuyaux 45 x 20 m ? »."
      },
      {
        "question": "Concernant « 43. Expliquer le pliage des tuyaux 45 x 20 m ? », quelle proposition est HORS sujet ?",
        "options": [
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'eau et de l'air",
          "Basculer l'écheveau sur le flanc et ramener le demi-raccord qui se trouvait au sol sur le manchon pour l'attacher avec la courroie",
          "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon",
          "Ils sont raccordés directement à l'engin-pompe ou à un établissement de manoeuvre"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 43. Expliquer le pliage des tuyaux 45 x 20 m ? »."
      },
      {
        "question": "Concernant « 43. Expliquer le pliage des tuyaux 45 x 20 m ? », quelle proposition est HORS sujet ?",
        "options": [
          "Basculer l'écheveau sur le flanc et ramener le demi-raccord qui se trouvait au sol sur le manchon pour l'attacher avec la courroie",
          "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon",
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre",
          "Relais (engin, motopompe, VEDI…)"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 43. Expliquer le pliage des tuyaux 45 x 20 m ? »."
      },
      {
        "question": "Concernant « 43. Expliquer le pliage des tuyaux 45 x 20 m ? », quelle proposition est HORS sujet ?",
        "options": [
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'eau et de l'air",
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant",
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité",
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a..."
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 43. Expliquer le pliage des tuyaux 45 x 20 m ? »."
      },
      {
        "question": "Concernant « 43. Expliquer le pliage des tuyaux 45 x 20 m ? », quelle proposition est HORS sujet ?",
        "options": [
          "Un commandement initial",
          "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'eau et de l'air",
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 43. Expliquer le pliage des tuyaux 45 x 20 m ? »."
      },
      {
        "question": "Concernant « 43. Expliquer le pliage des tuyaux 45 x 20 m ? », quelle proposition est HORS sujet ?",
        "options": [
          "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon",
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a...",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'eau et de l'air",
          "3e et 4e lances (eau ou mousse)"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 43. Expliquer le pliage des tuyaux 45 x 20 m ? »."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS », quelle proposition est exacte ?",
        "options": [
          "Calage d'un véhicule sur ses roues",
          "Passer l'écarteur dans le jour de la porte au niveau du bas de caisse Ne pas se positionner entre l'outil et la portière",
          "ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS",
          "Hydraulique BI-PI et l'engin"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS », quelle proposition est exacte ?",
        "options": [
          "faire le moins de coudes possible avec le tuyau de refoulement,",
          "Combinaison étanche aux insectes",
          "Chef d'agrès Chef d'équipe ou 1er chef 2e chef Servant ou 1er servant 2e servant Sapeur de liaison",
          "Les victimes : impliquées non indemnes"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS », quelle proposition est exacte ?",
        "options": [
          "à partir de bouteilles de gaz de 12kgs ou 3kgs",
          "Le chef d'agrès désigne au conducteur l'orifice d'alimentation du poteau relais",
          "5 manchons souples, de taille variable, permettent de maintenir en place les tuyaux et de les guider au cours de l'établissement",
          "N'utiliser la tronçonneuse que dans des endroits ventilés"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS », quelle proposition est exacte ?",
        "options": [
          "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon",
          "Perte de charge dans les tuyaux de 70 mm : 1,8 bars",
          "Aspiration (nappe ou cours d'eau)",
          "Au SdL il désigne l'orifice de refoulement du poteau et l'orifice d'alimentation de la colonne sèche"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS », quelle proposition est HORS sujet ?",
        "options": [
          "Le chef d'agrès désigne au conducteur l'orifice d'alimentation du poteau relais",
          "ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements",
          "Chef d'agrès Chef d'équipe ou 1er chef 2e chef Servant ou 1er servant 2e servant Sapeur de liaison"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS »."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS », quelle proposition est HORS sujet ?",
        "options": [
          "ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS",
          "Chef d'agrès Chef d'équipe ou 1er chef 2e chef Servant ou 1er servant 2e servant Sapeur de liaison",
          "Ils sont raccordés directement à l'engin-pompe ou à un établissement de manoeuvre",
          "Au SdL il désigne l'orifice de refoulement du poteau et l'orifice d'alimentation de la colonne sèche"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS »."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS », quelle proposition est HORS sujet ?",
        "options": [
          "Au SdL il désigne l'orifice de refoulement du poteau et l'orifice d'alimentation de la colonne sèche",
          "Chef d'agrès Chef d'équipe ou 1er chef 2e chef Servant ou 1er servant 2e servant Sapeur de liaison",
          "Le chef d'agrès désigne au conducteur l'orifice d'alimentation du poteau relais",
          "Relais (engin, motopompe, VEDI…)"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS »."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS », quelle proposition est HORS sujet ?",
        "options": [
          "Au SdL il désigne l'orifice de refoulement du poteau et l'orifice d'alimentation de la colonne sèche",
          "Le chef d'agrès désigne au conducteur l'orifice d'alimentation du poteau relais",
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant",
          "Chef d'agrès Chef d'équipe ou 1er chef 2e chef Servant ou 1er servant 2e servant Sapeur de liaison"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS »."
      }
    ]
  },
  {
    "id": "qcm-bsp-serie-15",
    "title": "BSP 200.13 — Établissements — Série 15",
    "level": "niveau-avance",
    "category": "incendie",
    "questions": [
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS », quelle proposition est HORS sujet ?",
        "options": [
          "Chef d'agrès Chef d'équipe ou 1er chef 2e chef Servant ou 1er servant 2e servant Sapeur de liaison",
          "Au SdL il désigne l'orifice de refoulement du poteau et l'orifice d'alimentation de la colonne sèche",
          "Le chef d'agrès désigne au conducteur l'orifice d'alimentation du poteau relais",
          "Un commandement initial"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS »."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS », quelle proposition est HORS sujet ?",
        "options": [
          "Au SdL il désigne l'orifice de refoulement du poteau et l'orifice d'alimentation de la colonne sèche",
          "Le chef d'agrès désigne au conducteur l'orifice d'alimentation du poteau relais",
          "Chef d'agrès Chef d'équipe ou 1er chef 2e chef Servant ou 1er servant 2e servant Sapeur de liaison",
          "3e et 4e lances (eau ou mousse)"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS »."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE », quelle proposition est exacte ?",
        "options": [
          "Assistance aux sinistrés",
          "suivant le type de motorisation précision au niveau de la vitesse et du déplacement",
          "respecter les consignes données au départ",
          "L'établissement de la ligne d'attaque (LA) est réalisé avec 3 tuyaux de 70 x 20 m (60 m) et 2 tuyaux de 45 x 20 m (40 m), soit une longueur de 100 m"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE », quelle proposition est exacte ?",
        "options": [
          "coupe l'alimentation à l'exception de l'éclairage cabine,",
          "Effectuer la découpe de la partie inférieure",
          "Pression à la lance : 6 bars (lance non autorégulée)",
          "Les agents de la Protection Civile répondent à un double objectif"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE », quelle proposition est exacte ?",
        "options": [
          "Perte de charge dans les tuyaux de 70 mm : 0,45 bar pour 60 m",
          "Poteau d'incendie (PI)",
          "débrancher la prise avant toute manipulation,",
          "Pression aux lances : 6 bars (lance non autorégulée)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE », quelle proposition est exacte ?",
        "options": [
          "Objectif : Savoir retrait une vitre",
          "toutes les manipulations se feront HORS-TENSION",
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars pour 40 m",
          "La reconnaissance doit aussi permettre de décider s'il faut"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE », quelle proposition est exacte ?",
        "options": [
          "La pression en sortie de pompe doit être de 8,75 bars, soit 9 bars pour un établissement de plain-pied",
          "Assistance aux sinistrés",
          "Ne jamais frapper sur un tronc d'arbre renferment un essaim de guêpes ou de frelons",
          "faire le moins de coudes possible avec le tuyau de refoulement,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE », quelle proposition est exacte ?",
        "options": [
          "à moteur à attaque directe (couramment appelé \"Gearless\" ou sans treuil),",
          "Soulever le pavillon et l'évacuer vers la zone de dépôt des structures",
          "Le vide-cave est utilisé pour aspirer l'eau des caves, des its, des réservoirs",
          "Il faut penser à rajouter 1 bar de pression pour 10 m de dénivelée positive à la pression en sortie de pompe"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE », quelle proposition est HORS sujet ?",
        "options": [
          "L'établissement de la ligne d'attaque (LA) est réalisé avec 3 tuyaux de 70 x 20 m (60 m) et 2 tuyaux de 45 x 20 m (40 m), soit une longueur de 100 m",
          "La pression en sortie de pompe doit être de 8,75 bars, soit 9 bars pour un établissement de plain-pied",
          "Il faut penser à rajouter 1 bar de pression pour 10 m de dénivelée positive à la pression en sortie de pompe",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENT DE LANCE »."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE », quelle proposition est HORS sujet ?",
        "options": [
          "L'établissement de la ligne d'attaque (LA) est réalisé avec 3 tuyaux de 70 x 20 m (60 m) et 2 tuyaux de 45 x 20 m (40 m), soit une longueur de 100 m",
          "Perte de charge dans les tuyaux de 70 mm : 0,45 bar pour 60 m",
          "La pression en sortie de pompe doit être de 8,75 bars, soit 9 bars pour un établissement de plain-pied",
          "Ils sont raccordés directement à l'engin-pompe ou à un établissement de manoeuvre"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENT DE LANCE »."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE », quelle proposition est HORS sujet ?",
        "options": [
          "L'établissement de la ligne d'attaque (LA) est réalisé avec 3 tuyaux de 70 x 20 m (60 m) et 2 tuyaux de 45 x 20 m (40 m), soit une longueur de 100 m",
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars pour 40 m",
          "La pression en sortie de pompe doit être de 8,75 bars, soit 9 bars pour un établissement de plain-pied",
          "Relais (engin, motopompe, VEDI…)"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENT DE LANCE »."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE », quelle proposition est HORS sujet ?",
        "options": [
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars pour 40 m",
          "Pression à la lance : 6 bars (lance non autorégulée)",
          "Il faut penser à rajouter 1 bar de pression pour 10 m de dénivelée positive à la pression en sortie de pompe",
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENT DE LANCE »."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE », quelle proposition est HORS sujet ?",
        "options": [
          "Pression à la lance : 6 bars (lance non autorégulée)",
          "Perte de charge dans les tuyaux de 70 mm : 0,45 bar pour 60 m",
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars pour 40 m",
          "Un commandement initial"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENT DE LANCE »."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE », quelle proposition est HORS sujet ?",
        "options": [
          "Il faut penser à rajouter 1 bar de pression pour 10 m de dénivelée positive à la pression en sortie de pompe",
          "Perte de charge dans les tuyaux de 70 mm : 0,45 bar pour 60 m",
          "3e et 4e lances (eau ou mousse)",
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars pour 40 m"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENT DE LANCE »."
      },
      {
        "question": "Concernant « ALIMENTATION ET PRESSION A LA POMPE », quelle proposition est exacte ?",
        "options": [
          "ALIMENTATION ET PRESSION A LA POMPE",
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant",
          "Un commandement d'exécution",
          "Bons de mouvement ST 30 bis"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ALIMENTATION ET PRESSION A LA POMPE."
      },
      {
        "question": "Concernant « ALIMENTATION ET PRESSION A LA POMPE », quelle proposition est exacte ?",
        "options": [
          "Objectif : Connaitre la MGO en secours routier",
          "ETABLISSEMENT D'UNE SECONDE LANCE SUR LA DIVISION",
          "Une lance (eau ou mousse) et la LDT",
          "La reconnaissance doit aussi permettre de décider s'il faut"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ALIMENTATION ET PRESSION A LA POMPE."
      },
      {
        "question": "Concernant « ALIMENTATION ET PRESSION A LA POMPE », quelle proposition est exacte ?",
        "options": [
          "Ils établissent les tuyaux de 45 mm des raccords d'injection vers la MPVE (1 tuyau directement raccordé sur la MPVE avant la division 50x2x50)",
          "Dans le cas où une seconde lance (500 l/min.) est établie grâce à la division, la pression en sortie de pompe sera alors de 10 bars",
          "reste au niveau de la porte palière par laquelle sera réalisée l'évacuation,",
          "Etablir une ligne de 110 mm de longueur maximale de 400 m, permet de disposer d'un point d'eau avancé (division 100 / 3 x 50)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ALIMENTATION ET PRESSION A LA POMPE."
      },
      {
        "question": "Concernant « ALIMENTATION ET PRESSION A LA POMPE », quelle proposition est exacte ?",
        "options": [
          "Cale en bois ou balle souple",
          "Pression aux lances : 6 bars (lance non autorégulée)",
          "Si demi-pavillon avant : couper selon la charte graphique les montants B et C",
          "débrancher la prise avant toute manipulation,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ALIMENTATION ET PRESSION A LA POMPE."
      },
      {
        "question": "Concernant « ALIMENTATION ET PRESSION A LA POMPE », quelle proposition est exacte ?",
        "options": [
          "Perte de charge dans les tuyaux de 70 mm : 1,8 bars",
          "Si demi-pavillon avant : couper selon la charte graphique les montants B et C",
          "N'utiliser la tronçonneuse que dans des endroits ventilés",
          "porcin : morsures, tentatives de charge (sanglier)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ALIMENTATION ET PRESSION A LA POMPE."
      },
      {
        "question": "Concernant « ALIMENTATION ET PRESSION A LA POMPE », quelle proposition est HORS sujet ?",
        "options": [
          "Dans le cas où une seconde lance (500 l/min.) est établie grâce à la division, la pression en sortie de pompe sera alors de 10 bars",
          "Pression aux lances : 6 bars (lance non autorégulée)",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements",
          "Perte de charge dans les tuyaux de 70 mm : 1,8 bars"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ALIMENTATION ET PRESSION A LA POMPE »."
      }
    ]
  },
  {
    "id": "qcm-bsp-serie-16",
    "title": "BSP 200.13 — Établissements — Série 16",
    "level": "niveau-1",
    "category": "incendie",
    "questions": [
      {
        "question": "Concernant « ALIMENTATION ET PRESSION A LA POMPE », quelle proposition est HORS sujet ?",
        "options": [
          "Ils sont raccordés directement à l'engin-pompe ou à un établissement de manoeuvre",
          "Pression aux lances : 6 bars (lance non autorégulée)",
          "ETABLISSEMENT D'UNE SECONDE LANCE SUR LA DIVISION",
          "ALIMENTATION ET PRESSION A LA POMPE"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ALIMENTATION ET PRESSION A LA POMPE »."
      },
      {
        "question": "Concernant « ALIMENTATION ET PRESSION A LA POMPE », quelle proposition est HORS sujet ?",
        "options": [
          "Perte de charge dans les tuyaux de 70 mm : 1,8 bars",
          "ETABLISSEMENT D'UNE SECONDE LANCE SUR LA DIVISION",
          "Relais (engin, motopompe, VEDI…)",
          "Dans le cas où une seconde lance (500 l/min.) est établie grâce à la division, la pression en sortie de pompe sera alors de 10 bars"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ALIMENTATION ET PRESSION A LA POMPE »."
      },
      {
        "question": "Concernant « ALIMENTATION ET PRESSION A LA POMPE », quelle proposition est HORS sujet ?",
        "options": [
          "ALIMENTATION ET PRESSION A LA POMPE",
          "Perte de charge dans les tuyaux de 70 mm : 1,8 bars",
          "Pression aux lances : 6 bars (lance non autorégulée)",
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ALIMENTATION ET PRESSION A LA POMPE »."
      },
      {
        "question": "Concernant « ALIMENTATION ET PRESSION A LA POMPE », quelle proposition est HORS sujet ?",
        "options": [
          "Un commandement initial",
          "ETABLISSEMENT D'UNE SECONDE LANCE SUR LA DIVISION",
          "Pression aux lances : 6 bars (lance non autorégulée)",
          "ALIMENTATION ET PRESSION A LA POMPE"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ALIMENTATION ET PRESSION A LA POMPE »."
      },
      {
        "question": "Concernant « ALIMENTATION ET PRESSION A LA POMPE », quelle proposition est HORS sujet ?",
        "options": [
          "ALIMENTATION ET PRESSION A LA POMPE",
          "3e et 4e lances (eau ou mousse)",
          "Perte de charge dans les tuyaux de 70 mm : 1,8 bars",
          "ETABLISSEMENT D'UNE SECONDE LANCE SUR LA DIVISION"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ALIMENTATION ET PRESSION A LA POMPE »."
      },
      {
        "question": "Concernant « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE », quelle proposition est exacte ?",
        "options": [
          "utiliser une crépine,",
          "L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE",
          "Zone d'alimentation",
          "Il existe plusieurs types de matériel, par exemple"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE."
      },
      {
        "question": "Concernant « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE », quelle proposition est exacte ?",
        "options": [
          "Aspiration (nappe ou cours d'eau)",
          "Alarme 1 à 10% de la concentration LIE du méthane",
          "La lance est placée au niveau du ceinturon, le tuyau passe sur l'épaule",
          "Les agents de la Protection Civile répondent à un double objectif"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE."
      },
      {
        "question": "Concernant « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE », quelle proposition est exacte ?",
        "options": [
          "chien : morsures chat : morsures, griffures",
          "La courroie d'amarre, pliée en deux est passée dans le ceinturon du bas vers le haut",
          "vérifier le bon déroulement de l'assèchement (crépine, évacuation),",
          "suivant le type de motorisation précision au niveau de la vitesse et du déplacement"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE."
      },
      {
        "question": "Concernant « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE », quelle proposition est exacte ?",
        "options": [
          "Pointeau ou séccoise",
          "La lance est engagée dans la boucle constituée par la courroie d'amarre",
          "Déposer ensuite l'ensemble du pare-brise feuilleté",
          "La couverture est utilisée pour la contention des lézards, des iguanes. En jetant la couverture sur l'animal, il va se sentir caché et va se calmer"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE."
      },
      {
        "question": "Concernant « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE », quelle proposition est exacte ?",
        "options": [
          "Feuilleté : Se découpe à l'aide du coupe pare-brise ou d'une scie sabre. Protection respiratoire type masque FFP2 obligatoire (pour sauveteurs et v...",
          "2 tricoises de 100 mm du CA ou BA",
          "chien : morsures chat : morsures, griffures",
          "Les 2 brins de la courroie d'amarre sont passés autour du fût et de la poignée de la lance"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE."
      },
      {
        "question": "Concernant « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE », quelle proposition est exacte ?",
        "options": [
          "Maintien de l'ordre",
          "Relais (engin, motopompe, VEDI…)",
          "Réactions cutanées au produit Réaction allergique localisée Gant en caoutchouc et lunettes de protection",
          "La courroie d'amarre est fermée"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE."
      },
      {
        "question": "Concernant « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE », quelle proposition est exacte ?",
        "options": [
          "Le porte-lance monte à l'échelle",
          "le chef d'équipe dépose le matériel du panier. Le servant Maintient le dévidoir",
          "brancher l'appareil dans un autre local que le local inondé, sur une prise reliée à la terre,",
          "Accident sur la voie du milieu"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE."
      },
      {
        "question": "Concernant « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE », quelle proposition est HORS sujet ?",
        "options": [
          "L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE",
          "La courroie d'amarre est fermée",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements",
          "La lance est engagée dans la boucle constituée par la courroie d'amarre"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE »."
      },
      {
        "question": "Concernant « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE », quelle proposition est HORS sujet ?",
        "options": [
          "La lance est placée au niveau du ceinturon, le tuyau passe sur l'épaule",
          "L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE",
          "Le porte-lance monte à l'échelle",
          "Ils sont raccordés directement à l'engin-pompe ou à un établissement de manoeuvre"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE »."
      },
      {
        "question": "Concernant « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE », quelle proposition est HORS sujet ?",
        "options": [
          "Les 2 brins de la courroie d'amarre sont passés autour du fût et de la poignée de la lance",
          "La courroie d'amarre est fermée",
          "La lance est placée au niveau du ceinturon, le tuyau passe sur l'épaule",
          "Relais (engin, motopompe, VEDI…)"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE »."
      },
      {
        "question": "Concernant « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE », quelle proposition est HORS sujet ?",
        "options": [
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant",
          "L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE",
          "Le porte-lance monte à l'échelle",
          "La courroie d'amarre, pliée en deux est passée dans le ceinturon du bas vers le haut"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE »."
      },
      {
        "question": "Concernant « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE », quelle proposition est HORS sujet ?",
        "options": [
          "La courroie d'amarre, pliée en deux est passée dans le ceinturon du bas vers le haut",
          "Les 2 brins de la courroie d'amarre sont passés autour du fût et de la poignée de la lance",
          "La courroie d'amarre est fermée",
          "Un commandement initial"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE »."
      },
      {
        "question": "Concernant « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE », quelle proposition est HORS sujet ?",
        "options": [
          "3e et 4e lances (eau ou mousse)",
          "Le porte-lance monte à l'échelle",
          "La courroie d'amarre est fermée",
          "L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE »."
      },
      {
        "question": "Concernant « LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR », quelle proposition est exacte ?",
        "options": [
          "LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR",
          "Eclairer la zone pour faciliter le travail et renforcer la sécurité des intervenants",
          "Hébergements des sinistres",
          "couper le courant au niveau de l'interrupteur général situé dans le local machinerie sauf éclairage de la cabine,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR."
      },
      {
        "question": "Concernant « LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR », quelle proposition est exacte ?",
        "options": [
          "1er Equipe 2e Equipe Sapeur de liaison",
          "Intervention sur route Accident sur 1 seule voie",
          "Identification du vitrage : repérer visuellement le marquage gravé dans le vitrage pour connaitre le type si présence d'un marquage",
          "se protéger les mains par des gants"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR."
      }
    ]
  },
  {
    "id": "qcm-bsp-serie-17",
    "title": "BSP 200.13 — Établissements — Série 17",
    "level": "niveau-2",
    "category": "incendie",
    "questions": [
      {
        "question": "Concernant « LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR », quelle proposition est exacte ?",
        "options": [
          "garder toujours le contact et agir en concertation",
          "Les chiens : tatouage ou puce, fichier central",
          "Distribution des denrées aux sinistrés",
          "matériel de base+Dévidoir de droite (avec panier) matériels sur ordre matériel de base Dévidoir de droite (avec panier) matériels sur ordre matérie..."
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR."
      },
      {
        "question": "Concernant « LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR », quelle proposition est exacte ?",
        "options": [
          "le chef d'équipe dépose le matériel du panier. Le servant Maintient le dévidoir",
          "1- Identification du tronc à abattre",
          "Finir par la découpe de la partie supérieure",
          "en cas d'intervention payante, remplit le formulaire d'intervention payante,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR."
      },
      {
        "question": "Concernant « LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR », quelle proposition est exacte ?",
        "options": [
          "enregistre la marque de l'ascenseur ainsi que les coordonnées de la société de maintenance,",
          "Distance entre l'installation",
          "ETABLISSEMENT VERTICAL SANS L.A",
          "Secours et sauvetage des personnes"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR."
      },
      {
        "question": "Concernant « LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR », quelle proposition est HORS sujet ?",
        "options": [
          "1er Equipe 2e Equipe Sapeur de liaison",
          "ETABLISSEMENT VERTICAL SANS L.A",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements",
          "le chef d'équipe dépose le matériel du panier. Le servant Maintient le dévidoir"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR »."
      },
      {
        "question": "Concernant « LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR », quelle proposition est HORS sujet ?",
        "options": [
          "Ils sont raccordés directement à l'engin-pompe ou à un établissement de manoeuvre",
          "LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR",
          "le chef d'équipe dépose le matériel du panier. Le servant Maintient le dévidoir",
          "matériel de base+Dévidoir de droite (avec panier) matériels sur ordre matériel de base Dévidoir de droite (avec panier) matériels sur ordre matérie..."
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR »."
      },
      {
        "question": "Concernant « LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR », quelle proposition est HORS sujet ?",
        "options": [
          "matériel de base+Dévidoir de droite (avec panier) matériels sur ordre matériel de base Dévidoir de droite (avec panier) matériels sur ordre matérie...",
          "ETABLISSEMENT VERTICAL SANS L.A",
          "Relais (engin, motopompe, VEDI…)",
          "1er Equipe 2e Equipe Sapeur de liaison"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR »."
      },
      {
        "question": "Concernant « LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR », quelle proposition est HORS sujet ?",
        "options": [
          "LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR",
          "matériel de base+Dévidoir de droite (avec panier) matériels sur ordre matériel de base Dévidoir de droite (avec panier) matériels sur ordre matérie...",
          "ETABLISSEMENT VERTICAL SANS L.A",
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR »."
      },
      {
        "question": "Concernant « LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR », quelle proposition est HORS sujet ?",
        "options": [
          "Un commandement initial",
          "matériel de base+Dévidoir de droite (avec panier) matériels sur ordre matériel de base Dévidoir de droite (avec panier) matériels sur ordre matérie...",
          "ETABLISSEMENT VERTICAL SANS L.A",
          "1er Equipe 2e Equipe Sapeur de liaison"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR »."
      },
      {
        "question": "Concernant « LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR », quelle proposition est HORS sujet ?",
        "options": [
          "3e et 4e lances (eau ou mousse)",
          "matériel de base+Dévidoir de droite (avec panier) matériels sur ordre matériel de base Dévidoir de droite (avec panier) matériels sur ordre matérie...",
          "1er Equipe 2e Equipe Sapeur de liaison",
          "le chef d'équipe dépose le matériel du panier. Le servant Maintient le dévidoir"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR »."
      },
      {
        "question": "Concernant « 117.Deux cas sont envisageables pour la manœuvre inaccessible au dévidoir ? », quelle proposition est exacte ?",
        "options": [
          "1er Equipe 2e Equipe Sapeur de liaison",
          "Etablissement au moyen de la L.A (Cf. manoeuvre de la ligne d'attaque)",
          "Poser une câle en bois, côté opposé au montant à redresser, puis la serrer contre le toit de l'habitacle avec un écarteur",
          "Écarter jusqu'à extraire le dispositif coulissant"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 117.Deux cas sont envisageables pour la manœuvre inaccessible au dévidoir ?."
      },
      {
        "question": "Concernant « 117.Deux cas sont envisageables pour la manœuvre inaccessible au dévidoir ? », quelle proposition est exacte ?",
        "options": [
          "S'équiper des EPI adaptés, toujours en binôme",
          "Feuilleté : Se découpe à l'aide du coupe pare-brise ou d'une scie sabre. Protection respiratoire type masque FFP2 obligatoire (pour sauveteurs et v...",
          "Etablissement au moyen du dévidoir",
          "Attention aux véhicules équipés d'airbags latéraux dans les portières"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 117.Deux cas sont envisageables pour la manœuvre inaccessible au dévidoir ?."
      },
      {
        "question": "Concernant « 117.Deux cas sont envisageables pour la manœuvre inaccessible au dévidoir ? », quelle proposition est exacte ?",
        "options": [
          "Le chef d'équipe déposes on matériel au point d'attaque, retourne au dévidoir et répercute l'ordre au servant. Le servant tire le dévidoir et le dé...",
          "faire descendre le vide-cave avec une commande en évitant les chocs,",
          "Calage d'un véhicule sur ses roues",
          "Les bras de levier d'écartement"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 117.Deux cas sont envisageables pour la manœuvre inaccessible au dévidoir ?."
      },
      {
        "question": "Concernant « UNE LANCE OPTION MOUSSE », quelle proposition est exacte ?",
        "options": [
          "Etablissement au moyen du dévidoir",
          "MPE toujours placée à l'extérieur pour éviter tout risque d'intoxication,",
          "2e équipe fourgon Sapeur de liaison",
          "Réglage facile de la vitesse de déplacement"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — UNE LANCE OPTION MOUSSE."
      },
      {
        "question": "Concernant « UNE LANCE OPTION MOUSSE », quelle proposition est exacte ?",
        "options": [
          "quantifier la hauteur et le volume d'eau à épuiser",
          "Matériel de base Matériel de base",
          "Ne pas pulvériser loin de l'orifice mais toujours dans l'entrée principale utilisée par les insectes",
          "Cale en bois ou balle souple"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — UNE LANCE OPTION MOUSSE."
      },
      {
        "question": "Concernant « UNE LANCE OPTION MOUSSE », quelle proposition est exacte ?",
        "options": [
          "ZDI (zone de déploiement initial) : elle sert à regrouper les moyens",
          "Alarme 1 à 10% de la concentration LIE du méthane",
          "Protection des sauveteurs : tenue de feu et ARI en nombre suffisant,",
          "Dévidoir de droite avec panier + matériels sur ordre 1 tuyau de 70 x 20 m + injecteur + bidons d'émulseur"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — UNE LANCE OPTION MOUSSE."
      },
      {
        "question": "Concernant « UNE LANCE OPTION MOUSSE », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES",
          "débloquer le système de freinage,",
          "Chef d'équipe Servant Sapeur de liaison Conducteur",
          "s'assurer de la fermeture des portes palières,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — UNE LANCE OPTION MOUSSE."
      },
      {
        "question": "Concernant « UNE LANCE OPTION MOUSSE », quelle proposition est HORS sujet ?",
        "options": [
          "2e équipe fourgon Sapeur de liaison",
          "Chef d'équipe Servant Sapeur de liaison Conducteur",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements",
          "Matériel de base Matériel de base"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « UNE LANCE OPTION MOUSSE »."
      },
      {
        "question": "Concernant « UNE LANCE OPTION MOUSSE », quelle proposition est HORS sujet ?",
        "options": [
          "Ils sont raccordés directement à l'engin-pompe ou à un établissement de manoeuvre",
          "2e équipe fourgon Sapeur de liaison",
          "Chef d'équipe Servant Sapeur de liaison Conducteur",
          "Matériel de base Matériel de base"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « UNE LANCE OPTION MOUSSE »."
      },
      {
        "question": "Concernant « UNE LANCE OPTION MOUSSE », quelle proposition est HORS sujet ?",
        "options": [
          "Chef d'équipe Servant Sapeur de liaison Conducteur",
          "2e équipe fourgon Sapeur de liaison",
          "Relais (engin, motopompe, VEDI…)",
          "Matériel de base Matériel de base"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « UNE LANCE OPTION MOUSSE »."
      },
      {
        "question": "Concernant « UNE LANCE OPTION MOUSSE », quelle proposition est HORS sujet ?",
        "options": [
          "Chef d'équipe Servant Sapeur de liaison Conducteur",
          "2e équipe fourgon Sapeur de liaison",
          "Dévidoir de droite avec panier + matériels sur ordre 1 tuyau de 70 x 20 m + injecteur + bidons d'émulseur",
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « UNE LANCE OPTION MOUSSE »."
      }
    ]
  },
  {
    "id": "qcm-bsp-serie-18",
    "title": "BSP 200.13 — Établissements — Série 18",
    "level": "niveau-avance",
    "category": "incendie",
    "questions": [
      {
        "question": "Concernant « UNE LANCE OPTION MOUSSE », quelle proposition est HORS sujet ?",
        "options": [
          "2e équipe fourgon Sapeur de liaison",
          "Matériel de base Matériel de base",
          "Dévidoir de droite avec panier + matériels sur ordre 1 tuyau de 70 x 20 m + injecteur + bidons d'émulseur",
          "Un commandement initial"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « UNE LANCE OPTION MOUSSE »."
      },
      {
        "question": "Concernant « UNE LANCE OPTION MOUSSE », quelle proposition est HORS sujet ?",
        "options": [
          "3e et 4e lances (eau ou mousse)",
          "Matériel de base Matériel de base",
          "Dévidoir de droite avec panier + matériels sur ordre 1 tuyau de 70 x 20 m + injecteur + bidons d'émulseur",
          "2e équipe fourgon Sapeur de liaison"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « UNE LANCE OPTION MOUSSE »."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM », quelle proposition est exacte ?",
        "options": [
          "Outil de dégarnissage Crayon carrosserie Cisailles",
          "Un commandement initial",
          "ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM",
          "Fiche individuelle de signalement des incidents et agressions"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA)",
          "Etablir une ligne de 110 mm de longueur maximale de 400 m, permet de disposer d'un point d'eau avancé (division 100 / 3 x 50)",
          "5 manchons souples, de taille variable, permettent de maintenir en place les tuyaux et de les guider au cours de l'établissement",
          "définir les moyens à mettre en œuvre (matériels et personnels)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM », quelle proposition est exacte ?",
        "options": [
          "à moteur-treuil à vis sans fin,",
          "Zone d'alimentation",
          "se protéger les mains par des gants",
          "La ligne de 110 mm peut être établie du point d'eau vers le point d'attaque dans certaines circonstances"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE DEUX LIGNES DE 110MM (FA SEUL) », quelle proposition est exacte ?",
        "options": [
          "Arrêter le moteur avant de poser l'appareil",
          "ETABLISSEMENTS DE DEUX LIGNES DE 110MM (FA SEUL)",
          "Intoxication par les vapeurs au contact direct du produit Malaises ponctuels Masque de protection niveau 1",
          "MISE EN PLACE D'UN DISPOSITIF D'INJECTION"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE DEUX LIGNES DE 110MM (FA SEUL)."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE DEUX LIGNES DE 110MM (FA SEUL) », quelle proposition est exacte ?",
        "options": [
          "Etablir deux lignes de 110 mm de longueur maximale de 200 m chacune, permettant de disposer de deux points d'eau avancés (2 divisions 100 / 3 x 50)",
          "Organisation des secours",
          "LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI",
          "se protéger les mains par des gants"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE DEUX LIGNES DE 110MM (FA SEUL)."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE DEUX LIGNES DE 110MM (FA SEUL) », quelle proposition est exacte ?",
        "options": [
          "SOA Sapeur de liaison Conducteur",
          "Cas particuliers (équipe à 3)",
          "Matériel de désincarcération comprend une cisaille, un écarteur, et des vérins hydraulique",
          "L'hydro-éjecteur est utilisé pour aspirer un volume d'eau limité et pour pomper à partir d'une nappe d'eau"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE DEUX LIGNES DE 110MM (FA SEUL)."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA) », quelle proposition est exacte ?",
        "options": [
          "le remettre aux forces de l'ordre, au vétérinaire",
          "ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA)",
          "infiltration par remontée des eaux d'égouts ou de plans d'eau",
          "Alarme 2 à 20% de la concentration LIE du méthane"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA)."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA) », quelle proposition est exacte ?",
        "options": [
          "Etablir deux lignes de 110 mm, permettant de disposer de deux points d'eau avancés (2divisions 100 / 3 x50) jusqu'à 1 000 m",
          "Un accident corporel (mortel et non mortel) de la circulation routière est un accident qui",
          "ALIMENTATION ET PRESSION A LA POMPE",
          "suit le chef d'agrès,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA)."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA) », quelle proposition est exacte ?",
        "options": [
          "respecter les consignes données au départ",
          "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 800 mètres",
          "La MPVE (Motopompe Volumétrique Emulseur)",
          "Les agents de la Protection Civile répondent à un double objectif"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA)."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "Effectuer une coupe de décharge à l'endroit du pliage après dégarnissage",
          "utiliser une crépine,",
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE",
          "Les indemnes : impliqués non décédés et dont l'état ne nécessite aucun soin médical"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "Zone d'alimentation",
          "espèces protégées : faune sauvage captive; la détention d'espèces protégées est réglementée",
          "force de compression : sur laquelle on se limitera à une coupe de dégagement, la pression exercée étant capable de bloquer le guide chaîne",
          "ovin, caprin (moutons, chèvres, béliers...) : coups de cornes, coups de tête"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "Zone de déploiement initial",
          "Coupe pare-brise Scie sabre Halligan tool ou outils de forcement",
          "4- Déterminer la direction de la chute",
          "Ascenseur à moteur à attaque directe"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "4/ Rôle du Chef d'agrès et de l'équipier",
          "raccord avec bouchon",
          "ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENT D4UNE LCM (FA-CA ou BA) MANŒUVRE DE LA LANCE CANON MOUSSE",
          "ZDI (zone de déploiement initial) : elle sert à regrouper les moyens"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "Forces de l'ordre : (Police ; Gendarmerie ; Forces auxiliaires)",
          "ZAL (zone d'alimentation) : elle regroupe différents points d'eau",
          "3 tuyaux de 70 x 20 m pliés en écheveau (dont un équipé d'une division)",
          "Cale en bois ou balle souple"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "risque de pollution des sous-sol",
          "Toujours se poser les questions suivantes : « Suis-je en sécurité là où je me trouve ? »",
          "ZE (zone émulseur) : les moyens émulseurs (CA/BA, BEM, citernes des pétroliers) y sont regroupés et employés",
          "MISE EN PLACE D'UN DISPOSITIF D'INJECTION"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "ZAT (zone d'attaque) : les lances y sont établies (lances canon et lances à main) ; cette zone peut-être divisée en secteurs d'attaque",
          "Bouchon du réservoir d'oïl",
          "Bouchon du réservoir d'essence",
          "« Mon périmètre de sécurité est-il suffisant ? »"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est HORS sujet ?",
        "options": [
          "Zone d'alimentation",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements",
          "ZDI (zone de déploiement initial) : elle sert à regrouper les moyens",
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENTS DE MANŒUVRE »."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est HORS sujet ?",
        "options": [
          "ZAT (zone d'attaque) : les lances y sont établies (lances canon et lances à main) ; cette zone peut-être divisée en secteurs d'attaque",
          "ZDI (zone de déploiement initial) : elle sert à regrouper les moyens",
          "Ils sont raccordés directement à l'engin-pompe ou à un établissement de manoeuvre",
          "ZAL (zone d'alimentation) : elle regroupe différents points d'eau"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENTS DE MANŒUVRE »."
      }
    ]
  },
  {
    "id": "qcm-bsp-serie-19",
    "title": "BSP 200.13 — Établissements — Série 19",
    "level": "niveau-1",
    "category": "incendie",
    "questions": [
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est HORS sujet ?",
        "options": [
          "Relais (engin, motopompe, VEDI…)",
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE",
          "ZDI (zone de déploiement initial) : elle sert à regrouper les moyens",
          "ZAT (zone d'attaque) : les lances y sont établies (lances canon et lances à main) ; cette zone peut-être divisée en secteurs d'attaque"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENTS DE MANŒUVRE »."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est HORS sujet ?",
        "options": [
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE",
          "ZDI (zone de déploiement initial) : elle sert à regrouper les moyens",
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant",
          "Zone d'alimentation"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENTS DE MANŒUVRE »."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est HORS sujet ?",
        "options": [
          "Un commandement initial",
          "Zone d'alimentation",
          "ZAL (zone d'alimentation) : elle regroupe différents points d'eau",
          "ZAT (zone d'attaque) : les lances y sont établies (lances canon et lances à main) ; cette zone peut-être divisée en secteurs d'attaque"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENTS DE MANŒUVRE »."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est HORS sujet ?",
        "options": [
          "3e et 4e lances (eau ou mousse)",
          "ZAL (zone d'alimentation) : elle regroupe différents points d'eau",
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE",
          "Zone d'alimentation"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENTS DE MANŒUVRE »."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE",
          "d'un ensemble pistons-cylindres hydrauliques placé sous la cabine de l'ascenseur,",
          "ne pas placer l'appareil sous des écoulements d'eau,",
          "remplir le bloc pompe d'eau,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est exacte ?",
        "options": [
          "Il peut exister pour une même intervention plusieurs ZAL, ZE ou ZAT",
          "Les aspirateurs à eau",
          "Par le chef d'agrès en fonction du sinistre, des capacités hydrauliques de l'engin et/ou de ses caractéristiques",
          "Cabine bloquée à un étage dont la porte palière reste verrouillée"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est exacte ?",
        "options": [
          "De diminuer les pertes de charges et les \"coups de bélier\"",
          "La BA nécessite 14 m en linéaire pour déposer la berce",
          "Insérer l'écarteur dans le jour venant d'être créé",
          "LES RISQUES PRESENTES PAR LE GAZ"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est exacte ?",
        "options": [
          "Les chevaux : livret signalétique et puce électronique (pour les chevaux de course)",
          "Distance entre l'installation",
          "ETABLISSEMENT VERTICAL SANS L.A",
          "ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENT D4UNE LCM (FA-CA ou BA) MANŒUVRE DE LA LANCE CANON MOUSSE"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est exacte ?",
        "options": [
          "surveiller la pression à l'engin: 8 à 10 Bars lors de l'alimentation,",
          "MANŒUVRE DE LA LANCE CANON MOUSSE",
          "Ne jamais travailler en équilibre sur une échelle,",
          "Pointeau ou séccoise"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est exacte ?",
        "options": [
          "Interdiction d'accès de la zone au public et aux personnels d'intervention sauf ceux strictement nécessaires",
          "Une fois brisée, retirer le restant de la vitre. Pour vous aider, il est possible de créer une poignée avec le ruban adhésif utilisé",
          "La MPVE (Motopompe Volumétrique Emulseur)",
          "Ils permettent d'utiliser un point d'eau hors de portée des dévidoirs mobiles"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est exacte ?",
        "options": [
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars pour 40 m",
          "Cale en bois ou balle souple",
          "2 clés tricoises de 100 mm CA ou BA",
          "2e temps : il laisse sa MPVE au ralenti, en circuit fermé et la purge de temps en temps"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est exacte ?",
        "options": [
          "2 raccords d'injection",
          "Chute de l'intervenant lors de travaux en hauteur Fractures diverses et traumatisme pouvant engager le pronostic vital Utilisation du LSPCC",
          "fait noter ou note l'identité des impliqués",
          "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est exacte ?",
        "options": [
          "2 cannes plongeuses",
          "Le non respect de cette directive entraîne automatiquement la responsabilité de l'intéressé et/ou de son chef",
          "Parmi les victimes, on distingue",
          "Si besoin, terminer l'ouverture de porte en insérant l'écarteur dans l'espace créé après déformation"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est exacte ?",
        "options": [
          "Utilisées par les C.C.F dans la lutte contre les feux de forët",
          "162.Que dépose le personnel du FA-CA ou BA au ordre\" Pour l'établissement de la lance canon mousse, PMP (tel endroit), ETABLISSEZ ! \"",
          "matériel de base+Dévidoir de droite (avec panier) matériels sur ordre matériel de base Dévidoir de droite (avec panier) matériels sur ordre matérie...",
          "vérifier la présence d'une fiche de terre"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est HORS sujet ?",
        "options": [
          "2 cannes plongeuses",
          "matériels sur ordre",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements",
          "MANŒUVRE DE LA LANCE CANON MOUSSE"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE »."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est HORS sujet ?",
        "options": [
          "Ils sont raccordés directement à l'engin-pompe ou à un établissement de manoeuvre",
          "ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENT D4UNE LCM (FA-CA ou BA) MANŒUVRE DE LA LANCE CANON MOUSSE",
          "MANŒUVRE DE LA LANCE CANON MOUSSE",
          "fût, ajutage de 35 mm ; ARI et tenues d'approche"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE »."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est HORS sujet ?",
        "options": [
          "fût, ajutage de 35 mm ; ARI et tenues d'approche",
          "ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENT D4UNE LCM (FA-CA ou BA) MANŒUVRE DE LA LANCE CANON MOUSSE",
          "2 cannes plongeuses",
          "Relais (engin, motopompe, VEDI…)"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE »."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est HORS sujet ?",
        "options": [
          "fût, ajutage de 35 mm ; ARI et tenues d'approche",
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant",
          "matériels sur ordre",
          "Il peut exister pour une même intervention plusieurs ZAL, ZE ou ZAT"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE »."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est HORS sujet ?",
        "options": [
          "2 raccords d'injection",
          "Un commandement initial",
          "Il peut exister pour une même intervention plusieurs ZAL, ZE ou ZAT",
          "162.Que dépose le personnel du FA-CA ou BA au ordre\" Pour l'établissement de la lance canon mousse, PMP (tel endroit), ETABLISSEZ ! \""
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE »."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est HORS sujet ?",
        "options": [
          "3e et 4e lances (eau ou mousse)",
          "La BA nécessite 14 m en linéaire pour déposer la berce",
          "Il peut exister pour une même intervention plusieurs ZAL, ZE ou ZAT",
          "2 clés tricoises de 100 mm CA ou BA"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE »."
      }
    ]
  },
  {
    "id": "qcm-bsp-serie-20",
    "title": "BSP 200.13 — Établissements — Série 20",
    "level": "niveau-2",
    "category": "incendie",
    "questions": [
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "Ne jamais frapper sur un tronc d'arbre renferment un essaim de guêpes ou de frelons",
          "MISE EN PLACE D'UN DISPOSITIF D'INJECTION",
          "Objectif : Savoir retrait une vitre",
          "Voici les schémas de balisage de différents types d'accidents"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "LES MATERIEL DE BASE A EMPORTER",
          "Placer une cale dans la poignée de porte",
          "La pince à chat permet de saisir le cou du chat et de le serrer grâce à la poignée",
          "Lorsque les établissements de manoeuvre sont réalisés, le CA ou BA regagne la zone émulseur"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "ne pas rétablir le courant,",
          "En cas de piqûres multiples, demander le médecin",
          "Le chef d'agrès et le conducteur",
          "Ne travailler que sous de bonnes conditions de visibilités,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "En cas de piqûres multiples, demander le médecin",
          "Branchent les raccords d'injection sur les lignes de 110 mm à égale distance de l'engin",
          "coupe l'éclairage et laisse la machine hors service,",
          "GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "Les sangles de levage sont indispensables pour sortir un cheval ou un bovin tombé dans un trou, une piscine,…",
          "Ils établissent les tuyaux de 45 mm des raccords d'injection vers la MPVE (1 tuyau directement raccordé sur la MPVE avant la division 50x2x50)",
          "La tronçonneuse doit se tenir fermement à 2 mains pour en assurer le contrôle permanent,",
          "Proscrire toute manipulation intempestive de circuit électrique (sonnette, éclairage…)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "Ils s'assurent de l'ouverture complète des tubulures de la division",
          "Objectif : Savoir augmenter l'espace de survie en utilisant un vérin",
          "faire descendre l'hydro-éjecteur avec une commande en évitant les chocs (raccorder la commande au clapet de vidange),",
          "L'établissement de la ligne d'attaque (LA) est réalisé avec 3 tuyaux de 70 x 20 m (60 m) et 2 tuyaux de 45 x 20 m (40 m), soit une longueur de 100 m"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "Passer l'écarteur dans le jour de la porte au niveau du bas de caisse Ne pas se positionner entre l'outil et la portière",
          "DANGER : présence d'eau et d'électricité",
          "Le conducteur assure la mise en route de la MPVE",
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "1er temps : il remplit d'émulseur les tuyaux de 45 mm jusqu'aux raccords d'injection (avant même la mise en eau des lignes de 110 mm)",
          "Gêne à la progression des engins d'incendie",
          "TGR+sacoche SDL+Lampe portative",
          "Les blessés hospitalisés : victimes admises comme patients dans un hôpital plus de 24 heures"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "Cas particuliers (équipe à 3)",
          "2e temps : il laisse sa MPVE au ralenti, en circuit fermé et la purge de temps en temps",
          "Soulever le pavillon et l'évacuer vers la zone de dépôt des structures",
          "En règle générale, ces deux types utilisent l'énergie électrique pour déplacer les cabines verticalement (moteur électrique continu ou alternatif)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "faire éloigner les curieux",
          "Le chef d'agrès rend compte de la mise en place du dispositif",
          "Insérer l'Halligan tool (pince coupant) afin de créer un jour de quelques centimètres",
          "Aspiration (nappe ou cours d'eau)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « FIN DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "en version standard, nécessite un cabanon technique en toiture",
          "Matériel Calage (cousine pneumatique, Cales de bois ou pré-formatées Cordage, Tire-fort",
          "Lorsqu'elle en reçoit l'ordre, l'équipe du CA ou BA arrête définitivement l'injection d'émulseur",
          "image: schéma de calage d'un véhicule sur 3 ou 4 points"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — FIN DE MANŒUVRE."
      },
      {
        "question": "Concernant « FIN DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "transporter l'appareil debout,",
          "vérifier le bon déroulement de l'assèchement (crépine, évacuation),",
          "Pincer le bas de caisse pour créer une ouverture au niveau de la portière",
          "L'utilisation d'émulseur est toujours suivie d'un abondant rinçage"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — FIN DE MANŒUVRE."
      },
      {
        "question": "Concernant « FIN DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "Bouche d'incendie (BI)",
          "Identification des victimes",
          "La MPVE peut être mise en aspiration ou alimentée par la citerne d'un engin-pompe dont le moteur doit obligatoirement être à l'arrêt",
          "Prendre au départ des secours deux postes portatifs pour une utilisation en réseau tactique à l'intérieur des locaux"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — FIN DE MANŒUVRE."
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
          "La lacette est une cordelette d'une longueur de 1,20 m. Elle permet de museler tous les animaux à museau pointu",
          "Lames; lames à bord tranchant",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "Gants en caoutchouc renforcé"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES."
      },
      {
        "question": "Concernant « L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES », quelle proposition est exacte ?",
        "options": [
          "infiltration par remontée des eaux d'égouts ou de plans d'eau",
          "Ascenseur à moteur à attaque directe",
          "Astuce(s) : La scie sabre peut être un outil complémentaire pour la césarisation des montants et du pare brise",
          "Soutien psychologique"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES."
      },
      {
        "question": "Concernant « L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES », quelle proposition est exacte ?",
        "options": [
          "Ils établissent les tuyaux de 45 mm des raccords d'injection vers la MPVE (1 tuyau directement raccordé sur la MPVE avant la division 50x2x50)",
          "Cale en bois ou balle souple",
          "veiller à ce que l'eau d'alimentation soit entre 6 et 8 bars",
          "fuite sur canalisation d'alimentation ou d'évacuation"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES."
      },
      {
        "question": "Concernant « L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES », quelle proposition est exacte ?",
        "options": [
          "Écarter les pieds de façon à obtenir une meilleure mobilité,",
          "réaliser les missions et rendre compte",
          "rupture d'une conduite intérieure ou sous trottoir etc",
          "Insérer l'écarteur dans le jour et l'ouvrir afin de faire céder la serrure"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES."
      },
      {
        "question": "Concernant « L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES », quelle proposition est HORS sujet ?",
        "options": [
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "fuite sur canalisation d'alimentation ou d'évacuation",
          "infiltration par remontée des eaux d'égouts ou de plans d'eau",
          "Les agents de la Protection Civile répondent à un double objectif"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES »."
      },
      {
        "question": "Concernant « L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES », quelle proposition est HORS sujet ?",
        "options": [
          "infiltration par remontée des eaux d'égouts ou de plans d'eau",
          "rupture d'une conduite intérieure ou sous trottoir etc",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "quantifier la hauteur et le volume d'eau à épuiser"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES »."
      },
      {
        "question": "Concernant « L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES », quelle proposition est HORS sujet ?",
        "options": [
          "rupture d'une conduite intérieure ou sous trottoir etc",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "fuite sur canalisation d'alimentation ou d'évacuation",
          "Hébergement des sinistrés"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES »."
      },
      {
        "question": "Concernant « L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES », quelle proposition est HORS sujet ?",
        "options": [
          "infiltration par remontée des eaux d'égouts ou de plans d'eau",
          "fuite sur canalisation d'alimentation ou d'évacuation",
          "rupture d'une conduite intérieure ou sous trottoir etc",
          "Préparer des cartes des risques"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES »."
      },
      {
        "question": "Concernant « L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES », quelle proposition est HORS sujet ?",
        "options": [
          "Mise à dispositions des moyens spécifiques",
          "fuite sur canalisation d'alimentation ou d'évacuation",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "infiltration par remontée des eaux d'égouts ou de plans d'eau"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES »."
      },
      {
        "question": "Concernant « L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES », quelle proposition est HORS sujet ?",
        "options": [
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "fuite sur canalisation d'alimentation ou d'évacuation",
          "Ce sont les causes et l'importance de l'inondation qui vont déterminer le type de matériel à utiliser",
          "rupture d'une conduite intérieure ou sous trottoir etc"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES »."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est exacte ?",
        "options": [
          "Prendre en considération le sens du fil du bois pour les cales",
          "Écartement dans l'espace vitré",
          "Le conducteur assure la mise en route de la MPVE",
          "Les agents de la Protection Civile répondent à un double objectif"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — La reconnaissance."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est exacte ?",
        "options": [
          "prendre les précautions nécessaires lors du remplissage de carburant,",
          "Fiche individuelle de signalement des incidents et agressions",
          "De porter la puissance hydraulique à 1 000 l/min. par l'établissement d'une division50/2x 50",
          "déterminer la cause de l'inondation et la supprimer (, Service municipalité , ONEE./Régie ..)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — La reconnaissance."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est exacte ?",
        "options": [
          "Ouvrir l'écarteur pour faire céder la serrure",
          "Placer la pointe du pied droit dans le protège main arrière",
          "Protection de la population : Mesures d'évacuation et procédures de sensibilisation",
          "définir les moyens à mettre en œuvre (matériels et personnels)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — La reconnaissance."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est exacte ?",
        "options": [
          "Effectuer un trait de scie vers le bas de chaque côté du pare-brise",
          "Ascenseur à moteur à attaque directe",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "Feuilleté : Se découpe à l'aide du coupe pare-brise ou d'une scie sabre. Protection respiratoire type masque FFP2 obligatoire (pour sauveteurs et v..."
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — La reconnaissance."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est exacte ?",
        "options": [
          "Liaison personnelle",
          "Le chef d'agrès rend compte de la mise en place du dispositif",
          "couper le courant, etc",
          "ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — La reconnaissance."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est exacte ?",
        "options": [
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a...",
          "Relais (engin, motopompe, VEDI…)",
          "regarder s'il y a un transformateur électrique à l'intérieur des locaux sinistrés",
          "sécher l'appareil après utilisation"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — La reconnaissance."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est exacte ?",
        "options": [
          "engager le minimum de personnel",
          "La tronçonneuse doit se tenir fermement à 2 mains pour en assurer le contrôle permanent,",
          "Liaison personnelle",
          "apprécier la nature et le nombre des locaux inondés ou menacés (étages inférieurs et supérieurs, locaux attenants)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — La reconnaissance."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est exacte ?",
        "options": [
          "quantifier la hauteur et le volume d'eau à épuiser",
          "Insérer l'écarteur dans le jour venant d'être créé",
          "Objectif : Savoir Ouvrir une porte (par utilisation du cadre de vitre)",
          "chien blessé, accidenté ou inanimé morsures Approcher l'animal par l'arrière pour apprécier ses réactions. Museler le chien, le mettre sur un brancard"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — La reconnaissance."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est exacte ?",
        "options": [
          "ne jamais immerger la fiche du câble,",
          "définir avec précision les moyens nécessaires pour effectuer l'opération (motopompe, longueur et diamètre des tuyaux d'alimentation et de refouleme...",
          "coupe l'éclairage et laisse la machine hors service,",
          "Zone de déploiement initial"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — La reconnaissance."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est HORS sujet ?",
        "options": [
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "couper le courant, etc",
          "Les agents de la Protection Civile répondent à un double objectif",
          "apprécier la nature et le nombre des locaux inondés ou menacés (étages inférieurs et supérieurs, locaux attenants)"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « La reconnaissance »."
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
        "question": "Concernant « La reconnaissance », quelle proposition est HORS sujet ?",
        "options": [
          "déterminer la cause de l'inondation et la supprimer (, Service municipalité , ONEE./Régie ..)",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "Evacuations de zones menacées",
          "Les agents de la Protection Civile répondent à un double objectif"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « La reconnaissance »."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est HORS sujet ?",
        "options": [
          "définir les moyens à mettre en œuvre (matériels et personnels)",
          "définir avec précision les moyens nécessaires pour effectuer l'opération (motopompe, longueur et diamètre des tuyaux d'alimentation et de refouleme...",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "Liberté de mouvement des intervenants"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « La reconnaissance »."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est HORS sujet ?",
        "options": [
          "définir avec précision les moyens nécessaires pour effectuer l'opération (motopompe, longueur et diamètre des tuyaux d'alimentation et de refouleme...",
          "déterminer la cause de l'inondation et la supprimer (, Service municipalité , ONEE./Régie ..)",
          "Organisation des secours",
          "définir les moyens à mettre en œuvre (matériels et personnels)"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « La reconnaissance »."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est HORS sujet ?",
        "options": [
          "définir les moyens à mettre en œuvre (matériels et personnels)",
          "définir avec précision les moyens nécessaires pour effectuer l'opération (motopompe, longueur et diamètre des tuyaux d'alimentation et de refouleme...",
          "quantifier la hauteur et le volume d'eau à épuiser",
          "Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « La reconnaissance »."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est HORS sujet ?",
        "options": [
          "Les agents de la Protection Civile répondent à un double objectif",
          "définir les moyens à mettre en œuvre (matériels et personnels)",
          "MPE toujours placée à l'extérieur pour éviter tout risque d'intoxication,",
          "regarder s'il y a un transformateur électrique à l'intérieur des locaux sinistrés"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « La reconnaissance »."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est exacte ?",
        "options": [
          "Les Moto-Pompes Remorquables (M.P.R.)",
          "DIFFERENTS INTERVENANTS ET LEURS MISSIONS",
          "Le lasso permet de maîtriser les chiens ou les chats",
          "effectue la montée ou la descente en respectant les procédures selon le type d'ascenseur,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — DIFFERENTS INTERVENANTS ET LEURS MISSIONS."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est exacte ?",
        "options": [
          "S'assurer de l'état de la ou des personnes à l'intérieur, les rassurer de vive voix (recommander aux passagers de ne pas quitter la cabine)",
          "Matériel d'électrogène",
          "3 tuyaux de 70 x 20 m pliés en écheveau (dont un équipé d'une division)",
          "Secours et sauvetage des personnes"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — DIFFERENTS INTERVENANTS ET LEURS MISSIONS."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA)",
          "disposer le vide-cave bien à plat sur son embase,",
          "Périmètre de sécurité d'un rayon de 50 m déterminé et délimité",
          "Epuisement des eaux"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — DIFFERENTS INTERVENANTS ET LEURS MISSIONS."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est exacte ?",
        "options": [
          "Evacuations de zones menacées",
          "Ne jamais utiliser d'essence pour détruire un nid",
          "mettre éventuellement un panier en osier,",
          "Evacuation complète"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — DIFFERENTS INTERVENANTS ET LEURS MISSIONS."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est exacte ?",
        "options": [
          "Lors de la phase d'extinction, le débit des lances doit être adapté",
          "Assistance aux sinistrés",
          "définir les moyens à mettre en œuvre (matériels et personnels)",
          "Intervention dans un rond point"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — DIFFERENTS INTERVENANTS ET LEURS MISSIONS."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est exacte ?",
        "options": [
          "toujours éteindre le moteur avant de faire le plein d'essence,",
          "Passer l'écarteur dans le jour de la porte au niveau du bas de caisse Ne pas se positionner entre l'outil et la portière",
          "Les gouttelettes du produit se déposeront sur le nid et à l'entrée",
          "Hébergement des sinistrés"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — DIFFERENTS INTERVENANTS ET LEURS MISSIONS."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est exacte ?",
        "options": [
          "Débit de l'installation",
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE",
          "2 cannes plongeuses",
          "Transports ambulatoires"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — DIFFERENTS INTERVENANTS ET LEURS MISSIONS."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est exacte ?",
        "options": [
          "Forces de l'ordre : (Police ; Gendarmerie ; Forces auxiliaires)",
          "Placer la pointe du pied droit dans le protège main arrière",
          "fait noter ou note l'identité des impliqués",
          "coupe l'éclairage et laisse la machine hors service,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — DIFFERENTS INTERVENANTS ET LEURS MISSIONS."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est exacte ?",
        "options": [
          "Maintien de l'ordre",
          "Chiens – Chats ne pas fixer l'animal, ne pas s'approcher trop vite et respecter la «zone de fuite»",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — DIFFERENTS INTERVENANTS ET LEURS MISSIONS."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est exacte ?",
        "options": [
          "Le chef d'équipe déposes on matériel au point d'attaque, retourne au dévidoir et répercute l'ordre au servant. Le servant tire le dévidoir et le dé...",
          "Soulever le pavillon et l'évacuer vers la zone de dépôt des structures",
          "Avis de passage des sapeurs pompiers",
          "Régulation routière"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — DIFFERENTS INTERVENANTS ET LEURS MISSIONS."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est HORS sujet ?",
        "options": [
          "Identification des victimes",
          "Evacuations de zones menacées",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "Soutien psychologique"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « DIFFERENTS INTERVENANTS ET LEURS MISSIONS »."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est HORS sujet ?",
        "options": [
          "Identification des victimes",
          "Distribution des denrées aux sinistrés",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "Régulation routière"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « DIFFERENTS INTERVENANTS ET LEURS MISSIONS »."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est HORS sujet ?",
        "options": [
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "Liberté de mouvement des intervenants",
          "Maintien de l'ordre",
          "DIFFERENTS INTERVENANTS ET LEURS MISSIONS"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « DIFFERENTS INTERVENANTS ET LEURS MISSIONS »."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est HORS sujet ?",
        "options": [
          "Epuisement des eaux",
          "les pompes hydrauliques,",
          "Maintien de l'ordre",
          "Transports ambulatoires"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « DIFFERENTS INTERVENANTS ET LEURS MISSIONS »."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est HORS sujet ?",
        "options": [
          "remplir le bloc pompe d'eau,",
          "Distribution des denrées aux sinistrés",
          "Forces de l'ordre : (Police ; Gendarmerie ; Forces auxiliaires)",
          "Hébergement des sinistrés"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « DIFFERENTS INTERVENANTS ET LEURS MISSIONS »."
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
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est HORS sujet ?",
        "options": [
          "Préparer des cartes des risques",
          "Prévention des inondations ; entretien et nettoyage",
          "Utilisées par les C.C.F dans la lutte contre les feux de forët",
          "Remise en état des infrastructures"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « DIFFERENTS INTERVENANTS ET LEURS MISSIONS »."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "ne pas rétablir le courant,",
          "Le corps de la cisaille : il supporte les bras de levier d'écartement et contient le corps du ou des vérins (double effet)",
          "Jusqu'à 30ppm de CO, il n'y a pas de danger pour la santé des personnes",
          "MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'eau et de l'air",
          "Ne pas pulvériser loin de l'orifice mais toujours dans l'entrée principale utilisée par les insectes",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "Ils établissent les tuyaux de 45 mm des raccords d'injection vers la MPVE (1 tuyau directement raccordé sur la MPVE avant la division 50x2x50)"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "Pour évaluer ce volume, il faut faire le calcul suivant",
          "« Où est mon emplacement le plus sûr après la coupe ? »",
          "Réaliser l'ouverture complète si nécessaire en plaçant l'écarteur au niveau des charnières",
          "illustration: tronçonneuse en utilisation"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) », quelle proposition est exacte ?",
        "options": [
          "Extraire le vitrage en le poussant vers l'extérieur",
          "L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE",
          "Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)",
          "Hébergements des sinistres"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)."
      },
      {
        "question": "Concernant « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) », quelle proposition est exacte ?",
        "options": [
          "4/ Rôle du Chef d'agrès et de l'équipier",
          "La courroie d'amarre est fermée",
          "Les agents de la Protection Civile ont à leur disposition un certain nombre de matériels d'épuisement",
          "amarrer le matériel si l'épuisement se fait à profondeur importante"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)."
      },
      {
        "question": "Concernant « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) », quelle proposition est exacte ?",
        "options": [
          "Couper le contact avant d'effectuer un contrôle sur la chaîne",
          "ne transporter la pompe qu'au moyen de sa poignée",
          "Ce sont les causes et l'importance de l'inondation qui vont déterminer le type de matériel à utiliser",
          "Perforer le pare-brise pour introduire la lame de scie"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)."
      },
      {
        "question": "Concernant « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) », quelle proposition est exacte ?",
        "options": [
          "Ils sont réalisés au moyen des tuyaux de 110 mm pliés en écheveau",
          "faire le moins de coudes possible avec le tuyau de refoulement,",
          "Il existe plusieurs types de matériel, par exemple",
          "s'équipe de son EPI complet,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)."
      },
      {
        "question": "Concernant « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) », quelle proposition est exacte ?",
        "options": [
          "Ces forces devront être très clairement identifiées avant la coupe, de façon à ne pas être surpris lors de la libération",
          "les pompes thermiques,",
          "Le chef d'équipe déposes on matériel au point d'attaque, retourne au dévidoir et répercute l'ordre au servant. Le servant tire le dévidoir et le dé...",
          "La cage est indispensable pour soigner ou transporter le chien ou le chat capturé"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)."
      },
      {
        "question": "Concernant « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) », quelle proposition est exacte ?",
        "options": [
          "les pompes hydrauliques,",
          "une fois la personne dégagée refermer et verrouiller la porte",
          "bovin : coups de cornes, tentatives de charge, coups de pieds (postérieurs)",
          "5- procéder à la coupe d'abattage"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)."
      },
      {
        "question": "Concernant « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE",
          "cône de balisage Gilets rétro réfléchissants Panneaux triflashs",
          "les pompes électriques",
          "Préparer des cartes des risques"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)."
      },
      {
        "question": "Concernant « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) », quelle proposition est HORS sujet ?",
        "options": [
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)",
          "les pompes hydrauliques,",
          "Les agents de la Protection Civile ont à leur disposition un certain nombre de matériels d'épuisement"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) »."
      },
      {
        "question": "Concernant « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) », quelle proposition est HORS sujet ?",
        "options": [
          "Les agents de la Protection Civile ont à leur disposition un certain nombre de matériels d'épuisement",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "les pompes hydrauliques,",
          "les pompes thermiques,"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) »."
      },
      {
        "question": "Concernant « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) », quelle proposition est HORS sujet ?",
        "options": [
          "Il existe plusieurs types de matériel, par exemple",
          "les pompes thermiques,",
          "Secours et sauvetage des personnes",
          "Les agents de la Protection Civile ont à leur disposition un certain nombre de matériels d'épuisement"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) »."
      },
      {
        "question": "Concernant « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) », quelle proposition est HORS sujet ?",
        "options": [
          "les pompes hydrauliques,",
          "Il existe plusieurs types de matériel, par exemple",
          "Maintien de l'ordre",
          "Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) »."
      },
      {
        "question": "Concernant « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) », quelle proposition est HORS sujet ?",
        "options": [
          "les pompes thermiques,",
          "les pompes électriques",
          "Les agents de la Protection Civile ont à leur disposition un certain nombre de matériels d'épuisement",
          "Rétablissement d'éclairage public"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) »."
      },
      {
        "question": "Concernant « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) », quelle proposition est HORS sujet ?",
        "options": [
          "les pompes hydrauliques,",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "Il existe plusieurs types de matériel, par exemple",
          "les pompes thermiques,"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) »."
      },
      {
        "question": "Concernant « Mise en œuvre », quelle proposition est exacte ?",
        "options": [
          "MPE toujours placée à l'extérieur pour éviter tout risque d'intoxication,",
          "La glacière permet de placer le serpent après sa capture. On peut ainsi le transporter en toute sécurité",
          "L'hydro-éjecteur est utilisé pour aspirer un volume d'eau limité et pour pomper à partir d'une nappe d'eau",
          "les pompes électriques"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Mise en œuvre."
      },
      {
        "question": "Concernant « Mise en œuvre », quelle proposition est exacte ?",
        "options": [
          "Distance entre l'installation",
          "Les agents de la Protection Civile ont à leur disposition un certain nombre de matériels d'épuisement",
          "ne jamais l'utiliser en relais,",
          "ou à partir de citernes de stockage, via un réseau simple"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Mise en œuvre."
      },
      {
        "question": "Concernant « Mise en œuvre », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENT VERTICAL SANS L.A",
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE",
          "amarrer la MPE si la surface n'est pas plane,",
          "Comme il n'a pas d'odeur et qu'il est invisible à l'oeil, seul un appareil de mesures permet de donner l'alarme"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Mise en œuvre."
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
        "question": "Concernant « Mise en œuvre », quelle proposition est exacte ?",
        "options": [
          "Bons de mouvement ST 30 bis",
          "2 raccords d'injection",
          "utiliser une crépine,",
          "Lorsqu'elle en reçoit l'ordre, l'équipe du CA ou BA arrête définitivement l'injection d'émulseur"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Mise en œuvre."
      },
      {
        "question": "Concernant « Mise en œuvre », quelle proposition est exacte ?",
        "options": [
          "faire descendre le vide-cave avec une commande en évitant les chocs,",
          "Réaliser l'ouverture complète si nécessaire en plaçant l'écarteur au niveau des charnières",
          "Prendre au départ des secours deux postes portatifs pour une utilisation en réseau tactique à l'intérieur des locaux",
          "avant l'utilisation, vérifier si tous les organes sont bien fixés,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Mise en œuvre."
      },
      {
        "question": "Concernant « Mise en œuvre », quelle proposition est exacte ?",
        "options": [
          "informe le propriétaire ou le gardien de l'immeuble de l'intervention,",
          "remplir le bloc pompe d'eau,",
          "raccord avec bouchon",
          "MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Mise en œuvre."
      },
      {
        "question": "Concernant « Mise en œuvre », quelle proposition est exacte ?",
        "options": [
          "prendre les précautions nécessaires lors du remplissage de carburant,",
          "Ne pas allumer de feu pour réaliser la destruction mais pulvériser le produit insecticide à l'intérieur de la cheminée",
          "Interdiction d'accès de la zone au public et aux personnels d'intervention sauf ceux strictement nécessaires",
          "Couper les montants A et B selon la charte graphique en suivant un ordre judicieux"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Mise en œuvre."
      },
      {
        "question": "Concernant « Mise en œuvre », quelle proposition est exacte ?",
        "options": [
          "Zone d'alimentation",
          "Avis de passage des sapeurs pompiers",
          "vérifier le bon déroulement de l'assèchement (crépine, évacuation),",
          "De porter la puissance hydraulique à 1 000 l/min. par l'établissement d'une division50/2x 50"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Mise en œuvre."
      },
      {
        "question": "Concernant « Mise en œuvre », quelle proposition est exacte ?",
        "options": [
          "sont utilisés en général pour satisfaire des déplacements relativement courts de l'ordre de 15 à 18 m max",
          "Lames; lames à bord tranchant",
          "Ils se composent principalement de",
          "vidanger le corps de pompe et rincer la MPE après chaque utilisation"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Mise en œuvre."
      },
      {
        "question": "Concernant « Mise en œuvre », quelle proposition est HORS sujet ?",
        "options": [
          "MPE toujours placée à l'extérieur pour éviter tout risque d'intoxication,",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "vérifier le bon déroulement de l'assèchement (crépine, évacuation),",
          "vidanger le corps de pompe et rincer la MPE après chaque utilisation"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Mise en œuvre »."
      },
      {
        "question": "Concernant « Mise en œuvre », quelle proposition est HORS sujet ?",
        "options": [
          "amarrer la MPE si la surface n'est pas plane,",
          "avant l'utilisation, vérifier si tous les organes sont bien fixés,",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "utiliser une crépine,"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Mise en œuvre »."
      },
      {
        "question": "Concernant « Mise en œuvre », quelle proposition est HORS sujet ?",
        "options": [
          "vidanger le corps de pompe et rincer la MPE après chaque utilisation",
          "Secours et sauvetage des personnes",
          "amarrer la MPE si la surface n'est pas plane,",
          "prendre les précautions nécessaires lors du remplissage de carburant,"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Mise en œuvre »."
      },
      {
        "question": "Concernant « Mise en œuvre », quelle proposition est HORS sujet ?",
        "options": [
          "Maintien de l'ordre",
          "utiliser une crépine,",
          "prendre les précautions nécessaires lors du remplissage de carburant,",
          "ne jamais l'utiliser en relais,"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Mise en œuvre »."
      },
      {
        "question": "Concernant « Mise en œuvre », quelle proposition est HORS sujet ?",
        "options": [
          "Rétablissement d'éclairage public",
          "MPE toujours placée à l'extérieur pour éviter tout risque d'intoxication,",
          "utiliser une crépine,",
          "vérifier le bon déroulement de l'assèchement (crépine, évacuation),"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Mise en œuvre »."
      },
      {
        "question": "Concernant « Mise en œuvre », quelle proposition est HORS sujet ?",
        "options": [
          "ne jamais l'utiliser en relais,",
          "avant l'utilisation, vérifier si tous les organes sont bien fixés,",
          "utiliser une crépine,",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Mise en œuvre »."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "Les Moto-Pompes Remorquables (M.P.R.)",
          "utiliser une crépine,",
          "ne pas utiliser dans les locaux non ventilés,",
          "Extraire le vitrage en le poussant vers l'extérieur"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "Les Moto-Pompes Flottantes CCC 6000",
          "LES MATERIEL DE BASE A EMPORTER",
          "Protège main avant (Qui déclenche le frein de chaine)",
          "Une fois le vitrage brisé, passez la main à l'intérieur pour déposer le vitrage entier vers l'extérieur"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "Utilisées par les C.C.F dans la lutte contre les feux de forët",
          "FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION",
          "Lorsqu'elle en reçoit l'ordre, l'équipe du CA ou BA arrête définitivement l'injection d'émulseur",
          "s'assurer de la fermeture des portes palières,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "L'hydro-éjecteur est utilisé pour aspirer un volume d'eau limité et pour pomper à partir d'une nappe d'eau",
          "Ne pas allumer de feu pour réaliser la destruction mais pulvériser le produit insecticide à l'intérieur de la cheminée",
          "Mettre le starter, enfoncer le levier des gaz et le bouton de blocage",
          "engager le minimum de personnel"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "Rétablissement d'éclairage public",
          "La ligne de 110 mm peut être établie du point d'eau vers le point d'attaque dans certaines circonstances",
          "faire descendre l'hydro-éjecteur avec une commande en évitant les chocs (raccorder la commande au clapet de vidange),",
          "Préparer des cartes des risques"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "sangler les raccords des tuyaux,",
          "Poser une câle en bois, côté opposé au montant à redresser, puis la serrer contre le toit de l'habitacle avec un écarteur",
          "fait prendre le matériel,",
          "ouvre la porte à l'aide de la clé spéciale,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "surveiller la pression à l'engin: 8 à 10 Bars lors de l'alimentation,",
          "1re et 2e lance (eau ou mousse)",
          "La courroie d'amarre est fermée",
          "reste au niveau de la porte palière par laquelle sera réalisée l'évacuation,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "laver et rincer le matériel après usage",
          "Il faut penser à rajouter 1 bar de pression pour 10 m de dénivelée positive à la pression en sortie de pompe",
          "Ne nécessite pas de cabanon de machinerie",
          "Perforer le pare-brise pour introduire la lame de scie"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
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
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "les pompes électriques",
          "« Comment vont réagir les 2 morceaux ? »",
          "Les aspirateurs à eau",
          "Raccordement Tuyau de 45mm P = 10B"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est HORS sujet ?",
        "options": [
          "mettre éventuellement un panier en osier,",
          "nettoyer de temps en temps la crépine,",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "faire descendre l'hydro-éjecteur avec une commande en évitant les chocs (raccorder la commande au clapet de vidange),"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION »."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est HORS sujet ?",
        "options": [
          "L'hydro-éjecteur est utilisé pour aspirer un volume d'eau limité et pour pomper à partir d'une nappe d'eau",
          "faire descendre l'hydro-éjecteur avec une commande en évitant les chocs (raccorder la commande au clapet de vidange),",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "surveiller la pression à l'engin: 8 à 10 Bars lors de l'alimentation,"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION »."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est HORS sujet ?",
        "options": [
          "Les Moto-Pompes Remorquables (M.P.R.)",
          "veiller à ce que l'eau d'alimentation soit entre 6 et 8 bars",
          "Les Moto-Pompes Flottantes CCC 6000",
          "Secours et sauvetage des personnes"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION »."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est HORS sujet ?",
        "options": [
          "Les Moto-Pompes Remorquables (M.P.R.)",
          "MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION",
          "faire descendre le vide-cave avec une commande en évitant les chocs,",
          "Maintien de l'ordre"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION »."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est HORS sujet ?",
        "options": [
          "laver et rincer le mùatériel après usage",
          "Les Moto-Pompes Flottantes CCC 6000",
          "Les Moto-Pompes Remorquables (M.P.R.)",
          "Rétablissement d'éclairage public"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION »."
      },
      {
        "question": "Concernant « 3/ Les pompes électriques », quelle proposition est exacte ?",
        "options": [
          "ARRET TEMPORAIRE D'INJECTION (CIRCUIT FERME)",
          "Les agents de la Protection Civile répondent à un double objectif",
          "ne jamais immerger la fiche du câble,",
          "Effectuer la découpe de la partie inférieure"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 3/ Les pompes électriques."
      },
      {
        "question": "Concernant « 3/ Les pompes électriques », quelle proposition est exacte ?",
        "options": [
          "Accident sur la voie de sortie",
          "attention à ne pas aggraver la situation par l'apport d'eau,",
          "veiller à ce que la prise de courant soit munie d'une prise de terre,",
          "Coupe ceinture Protections de coupes Cisailles"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 3/ Les pompes électriques."
      },
      {
        "question": "Concernant « 3/ Les pompes électriques », quelle proposition est exacte ?",
        "options": [
          "Objectif : Savoir augmenter l'espace de survie en utilisant un vérin",
          "lance canon, tromblon et accessoires",
          "Ascenseur à moteur à attaque directe",
          "une pompe électrique doit toujours être dans l'eau lors de son fonctionnement, mais pas complètement immergée,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 3/ Les pompes électriques."
      },
      {
        "question": "Concernant « 3/ Les pompes électriques », quelle proposition est exacte ?",
        "options": [
          "laver et rincer le matériel après usage",
          "utiliser un crochet à serpent",
          "ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS",
          "amarrer la pompe au moyen d'une commande,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 3/ Les pompes électriques."
      },
      {
        "question": "Concernant « 3/ Les pompes électriques », quelle proposition est exacte ?",
        "options": [
          "placer le reptile dans un sac",
          "Outil de forcement et de déblai",
          "faire le moins de coudes possible avec le tuyau de refoulement,",
          "sont utilisés en général pour satisfaire des déplacements relativement courts de l'ordre de 15 à 18 m max"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 3/ Les pompes électriques."
      },
      {
        "question": "Concernant « 3/ Les pompes électriques », quelle proposition est exacte ?",
        "options": [
          "Un accident corporel (mortel et non mortel) de la circulation routière est un accident qui",
          "attention à ne pas aggraver la situation par l'apport d'eau,",
          "débrancher la prise avant toute manipulation,",
          "consommation énergétique importante"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 3/ Les pompes électriques."
      },
      {
        "question": "Concernant « 3/ Les pompes électriques », quelle proposition est exacte ?",
        "options": [
          "De diminuer les pertes de charges et les \"coups de bélier\"",
          "Non toxique pour les personnes, non corrosif",
          "Placer une cale dans la poignée de porte",
          "ne transporter la pompe qu'au moyen de sa poignée"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 3/ Les pompes électriques."
      },
      {
        "question": "Concernant « 3/ Les pompes électriques », quelle proposition est HORS sujet ?",
        "options": [
          "faire le moins de coudes possible avec le tuyau de refoulement,",
          "veiller à ce que la prise de courant soit munie d'une prise de terre,",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "ne jamais immerger la fiche du câble,"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 3/ Les pompes électriques »."
      },
      {
        "question": "Concernant « 3/ Les pompes électriques », quelle proposition est HORS sujet ?",
        "options": [
          "débrancher la prise avant toute manipulation,",
          "ne jamais immerger la fiche du câble,",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "veiller à ce que la prise de courant soit munie d'une prise de terre,"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 3/ Les pompes électriques »."
      },
      {
        "question": "Concernant « 3/ Les pompes électriques », quelle proposition est HORS sujet ?",
        "options": [
          "Secours et sauvetage des personnes",
          "veiller à ce que la prise de courant soit munie d'une prise de terre,",
          "amarrer la pompe au moyen d'une commande,",
          "faire le moins de coudes possible avec le tuyau de refoulement,"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 3/ Les pompes électriques »."
      },
      {
        "question": "Concernant « 3/ Les pompes électriques », quelle proposition est HORS sujet ?",
        "options": [
          "faire le moins de coudes possible avec le tuyau de refoulement,",
          "débrancher la prise avant toute manipulation,",
          "ne jamais immerger la fiche du câble,",
          "Maintien de l'ordre"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 3/ Les pompes électriques »."
      },
      {
        "question": "Concernant « 3/ Les pompes électriques », quelle proposition est HORS sujet ?",
        "options": [
          "amarrer la pompe au moyen d'une commande,",
          "Rétablissement d'éclairage public",
          "veiller à ce que la prise de courant soit munie d'une prise de terre,",
          "ne transporter la pompe qu'au moyen de sa poignée"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 3/ Les pompes électriques »."
      },
      {
        "question": "Concernant « 3/ Les pompes électriques », quelle proposition est HORS sujet ?",
        "options": [
          "ne transporter la pompe qu'au moyen de sa poignée",
          "amarrer la pompe au moyen d'une commande,",
          "débrancher la prise avant toute manipulation,",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 3/ Les pompes électriques »."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est exacte ?",
        "options": [
          "MARCHE GENERALE DES OPERATIONS",
          "Couper et déposer l'ensemble du joint",
          "Les aspirateurs à eau",
          "indique par radio au chef d'agrès l'évolution dans le déplacement de la cabine,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — II / Le matériel divers."
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
        "question": "Concernant « II / Le matériel divers », quelle proposition est exacte ?",
        "options": [
          "Action pratiquement instantanée et irréversible par paralysie suivie de mort",
          "utiliser un aspirateur à eau pour une hauteur d'eau ≤ 5 cm,",
          "SOA Sapeur de liaison Conducteur",
          "faire descendre l'hydro-éjecteur avec une commande en évitant les chocs (raccorder la commande au clapet de vidange),"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — II / Le matériel divers."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est exacte ?",
        "options": [
          "respecter le périmétre de sécurité",
          "brancher l'appareil dans un autre local que le local inondé, sur une prise reliée à la terre,",
          "Epuisement des eaux",
          "Matériel d'électrogène"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — II / Le matériel divers."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est exacte ?",
        "options": [
          "ne pas placer l'appareil sous des écoulements d'eau,",
          "toutes les manipulations se feront HORS-TENSION",
          "S'assurer de l'état de la ou des personnes à l'intérieur, les rassurer de vive voix (recommander aux passagers de ne pas quitter la cabine)",
          "fût, ajutage de 35 mm ; ARI et tenues d'approche"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — II / Le matériel divers."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est exacte ?",
        "options": [
          "Liaison personnelle",
          "ne pas déplacer l'aspirateur avec le moteur en marche,",
          "ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS",
          "manœuvrer le volant prévu à cet effet, lorsque la cabine est arrivée à hauteur d'un étage, une marque apparaît sur le câble,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — II / Le matériel divers."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est exacte ?",
        "options": [
          "Risques Effets Moyens de protection",
          "Perte de charge dans les tuyaux de 70 mm : 0,45 bar pour 60 m",
          "ne pas pencher l'aspirateur lorsqu'il fonctionne,",
          "Attention aux véhicules équipés d'airbags latéraux dans les portières"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — II / Le matériel divers."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est exacte ?",
        "options": [
          "MPE toujours placée à l'extérieur pour éviter tout risque d'intoxication,",
          "L'établissement rapide d'une seconde lance sur la division",
          "ouvrir le couvercle uniquement lorsque la prise est débranchée,",
          "Ne travailler que sous de bonnes conditions de visibilités,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — II / Le matériel divers."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est exacte ?",
        "options": [
          "transporter l'appareil debout,",
          "Toujours se poser les questions suivantes : « Suis-je en sécurité là où je me trouve ? »",
          "MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION",
          "Chute de matériaux Blessures au niveau du crane pouvant entrainer des lésions irreversibles Casque à l'intérieur de la tenue de protection"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — II / Le matériel divers."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est exacte ?",
        "options": [
          "ARRET TEMPORAIRE D'INJECTION (CIRCUIT FERME)",
          "Maintien de l'ordre",
          "sécher l'appareil après utilisation",
          "Survient sur une voie ouverte à la circulation publique"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — II / Le matériel divers."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est exacte ?",
        "options": [
          "Ne pas allumer de feu pour réaliser la destruction mais pulvériser le produit insecticide à l'intérieur de la cheminée",
          "Les raclettes: Elles servent à évacuer une fine couche de liquide",
          "Ne jamais travailler en équilibre sur une échelle,",
          "débrancher la prise avant toute manipulation,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — II / Le matériel divers."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est HORS sujet ?",
        "options": [
          "Les cuissardes évitent aux sauveteurs d'avoir les vêtements humides",
          "ouvrir le couvercle uniquement lorsque la prise est débranchée,",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "brancher l'appareil dans un autre local que le local inondé, sur une prise reliée à la terre,"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « II / Le matériel divers »."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est HORS sujet ?",
        "options": [
          "transporter l'appareil debout,",
          "ne pas pencher l'aspirateur lorsqu'il fonctionne,",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "Les aspirateurs à eau"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « II / Le matériel divers »."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est HORS sujet ?",
        "options": [
          "brancher l'appareil dans un autre local que le local inondé, sur une prise reliée à la terre,",
          "Les aspirateurs à eau",
          "utiliser un aspirateur à eau pour une hauteur d'eau ≤ 5 cm,",
          "Secours et sauvetage des personnes"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « II / Le matériel divers »."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est HORS sujet ?",
        "options": [
          "Maintien de l'ordre",
          "ne pas placer l'appareil sous des écoulements d'eau,",
          "ouvrir le couvercle uniquement lorsque la prise est débranchée,",
          "transporter l'appareil debout,"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « II / Le matériel divers »."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est HORS sujet ?",
        "options": [
          "Rétablissement d'éclairage public",
          "sécher l'appareil après utilisation",
          "ne pas déplacer l'aspirateur avec le moteur en marche,",
          "ne pas placer l'appareil sous des écoulements d'eau,"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « II / Le matériel divers »."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est HORS sujet ?",
        "options": [
          "ne pas placer l'appareil sous des écoulements d'eau,",
          "ne pas pencher l'aspirateur lorsqu'il fonctionne,",
          "brancher l'appareil dans un autre local que le local inondé, sur une prise reliée à la terre,",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « II / Le matériel divers »."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est exacte ?",
        "options": [
          "Lors d'une inondation, l'eau peut cacher toutes sortes de pièges (trous, outils, ....)",
          "Hydraulique BI-PI et l'engin",
          "5 manchons souples, de taille variable, permettent de maintenir en place les tuyaux et de les guider au cours de l'établissement",
          "ETABLISSEMENT VERTICAL SANS L.A"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — III/ Les règles de sécurité."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est exacte ?",
        "options": [
          "Maintien de l'ordre",
          "Cas particuliers (équipe à 3)",
          "Les pompes thermiques",
          "Distance appliquée à priori dans un premier temps mais évolutive"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — III/ Les règles de sécurité."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est exacte ?",
        "options": [
          "Le lasso permet de maîtriser les chiens ou les chats",
          "à moteur-treuil planétaire,",
          "Ils se différencient entre eux selon le type de motorisation",
          "toujours éteindre le moteur avant de faire le plein d'essence,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — III/ Les règles de sécurité."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est exacte ?",
        "options": [
          "ne pas utiliser dans les locaux non ventilés,",
          "Pincer le bas de caisse pour créer une ouverture au niveau de la portière",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'eau et de l'air",
          "espèces qui vivent dans la nature et qui ne sont pas habituées au contact avec l'homme"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — III/ Les règles de sécurité."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est exacte ?",
        "options": [
          "Tirer le cordon de lancement jusqu'au déclenchement du premier allumage audible",
          "GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE",
          "Prendre au départ des secours deux postes portatifs pour une utilisation en réseau tactique à l'intérieur des locaux",
          "penser au refroidissement du moteur"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — III/ Les règles de sécurité."
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
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est exacte ?",
        "options": [
          "Les pompes hydrauliques",
          "ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS",
          "Réactions cutanées au produit Réaction allergique localisée Gant en caoutchouc et lunettes de protection",
          "La couverture est utilisée pour la contention des lézards, des iguanes. En jetant la couverture sur l'animal, il va se sentir caché et va se calmer"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — III/ Les règles de sécurité."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est exacte ?",
        "options": [
          "En règle générale, ces établissements se font du point d'attaque au point d'eau",
          "ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS",
          "attention à ne pas aggraver la situation par l'apport d'eau,",
          "Avis de passage des sapeurs pompiers"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — III/ Les règles de sécurité."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est exacte ?",
        "options": [
          "LES MATERIEL DE BASE A EMPORTER",
          "amarrer le matériel si l'épuisement se fait à profondeur importante",
          "laver et rincer le matériel après usage",
          "Liaison personnelle"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — III/ Les règles de sécurité."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est exacte ?",
        "options": [
          "Les pompes électriques",
          "L'établissement rapide d'une seconde lance sur la division",
          "Stationner le véhicule à distance,",
          "TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — III/ Les règles de sécurité."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est exacte ?",
        "options": [
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE",
          "extincteur a poudre et CO2",
          "DANGER : présence d'eau et d'électricité"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — III/ Les règles de sécurité."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est HORS sujet ?",
        "options": [
          "toujours éteindre le moteur avant de faire le plein d'essence,",
          "Les pompes thermiques",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "DANGER : présence d'eau et d'électricité"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « III/ Les règles de sécurité »."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est HORS sujet ?",
        "options": [
          "vérifier la présence d'une fiche de terre",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "penser au refroidissement du moteur",
          "DANGER : présence d'eau et d'électricité"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « III/ Les règles de sécurité »."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est HORS sujet ?",
        "options": [
          "DANGER : présence d'eau et d'électricité",
          "Les pompes thermiques",
          "Secours et sauvetage des personnes",
          "toujours éteindre le moteur avant de faire le plein d'essence,"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « III/ Les règles de sécurité »."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est HORS sujet ?",
        "options": [
          "Les pompes hydrauliques",
          "amarrer le matériel si l'épuisement se fait à profondeur importante",
          "toutes les manipulations se feront HORS-TENSION",
          "Maintien de l'ordre"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « III/ Les règles de sécurité »."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est HORS sujet ?",
        "options": [
          "vérifier, avant toute utilisation, l'état des câbles",
          "Les pompes hydrauliques",
          "Rétablissement d'éclairage public",
          "amarrer le matériel si l'épuisement se fait à profondeur importante"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « III/ Les règles de sécurité »."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est HORS sujet ?",
        "options": [
          "Les pompes électriques",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "toutes les manipulations se feront HORS-TENSION",
          "Lors d'une inondation, l'eau peut cacher toutes sortes de pièges (trous, outils, ....)"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « III/ Les règles de sécurité »."
      },
      {
        "question": "Concernant « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI », quelle proposition est exacte ?",
        "options": [
          "LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI",
          "garder toujours le contact et agir en concertation",
          "Forces de l'ordre : (Police ; Gendarmerie ; Forces auxiliaires)",
          "Interdiction d'accès de la zone au public et aux personnels d'intervention sauf ceux strictement nécessaires"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI."
      },
      {
        "question": "Concernant « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI », quelle proposition est exacte ?",
        "options": [
          "La pince à chat permet de saisir le cou du chat et de le serrer grâce à la poignée",
          "Les bras de levier d'écartement",
          "Protège main avant (Qui déclenche le frein de chaine)",
          "ne pas rétablir le courant,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI."
      },
      {
        "question": "Concernant « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI », quelle proposition est exacte ?",
        "options": [
          "remplir le bloc pompe d'eau,",
          "4- Déterminer la direction de la chute",
          "Poignée du lanceur",
          "faire descendre l'hydro-éjecteur avec une commande en évitant les chocs (raccorder la commande au clapet de vidange),"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI."
      },
      {
        "question": "Concernant « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI », quelle proposition est exacte ?",
        "options": [
          "déterminer la cause de l'inondation et la supprimer (, Service municipalité , ONEE./Régie ..)",
          "Ils sont composés des principaux éléments suivants",
          "Bouton d'arrêt de la manette des gaz",
          "enregistre la marque de l'ascenseur ainsi que les coordonnées de la société de maintenance,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI."
      },
      {
        "question": "Concernant « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI », quelle proposition est exacte ?",
        "options": [
          "Bouchon du réservoir d'oïl",
          "Diamètre de la conduite",
          "Rétablissement d'éclairage public",
          "LES RISQUES PRESENTES PAR LE GAZ"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI."
      },
      {
        "question": "Concernant « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI », quelle proposition est exacte ?",
        "options": [
          "Lance du dévidoir tournant (LDT)",
          "Bouchon du réservoir d'essence",
          "Elle est fixe ou semi-stationnaire dans le V.S.R, et peut disposer ou non de 2 dévidoirs équipés de flexibles",
          "ETABLISSEMENTS DE DEUX LIGNES DE 110MM (FA SEUL)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI."
      },
      {
        "question": "Concernant « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI », quelle proposition est exacte ?",
        "options": [
          "amarrer la MPE si la surface n'est pas plane,",
          "Les pompes thermiques",
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun",
          "Ne jamais travailler seul, une personne doit se trouver à proximité en cas d'urgence"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI."
      },
      {
        "question": "Concernant « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI », quelle proposition est exacte ?",
        "options": [
          "Prévoir un périmètre de sécurité",
          "DIFFERENTS INTERVENANTS ET LEURS MISSIONS",
          "Matériel de désincarcération comprend une cisaille, un écarteur, et des vérins hydraulique",
          "Ne pas pulvériser loin de l'orifice mais toujours dans l'entrée principale utilisée par les insectes"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI."
      },
      {
        "question": "Concernant « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI », quelle proposition est HORS sujet ?",
        "options": [
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "Bouchon du réservoir d'essence",
          "LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI",
          "Ne jamais travailler seul, une personne doit se trouver à proximité en cas d'urgence"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI »."
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
        "question": "Concernant « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI », quelle proposition est HORS sujet ?",
        "options": [
          "Poignée du lanceur",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "Bouton d'arrêt de la manette des gaz",
          "Protège main avant (Qui déclenche le frein de chaine)"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI »."
      },
      {
        "question": "Concernant « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI », quelle proposition est HORS sujet ?",
        "options": [
          "Bouchon du réservoir d'essence",
          "Poignée du lanceur",
          "Secours et sauvetage des personnes",
          "Bouton d'arrêt de la manette des gaz"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI »."
      },
      {
        "question": "Concernant « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI », quelle proposition est HORS sujet ?",
        "options": [
          "LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI",
          "Maintien de l'ordre",
          "Bouchon du réservoir d'oïl",
          "Prévoir un périmètre de sécurité"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI »."
      },
      {
        "question": "Concernant « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI », quelle proposition est HORS sujet ?",
        "options": [
          "LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI",
          "Bouchon du réservoir d'oïl",
          "Poignée du lanceur",
          "Rétablissement d'éclairage public"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI »."
      },
      {
        "question": "Concernant « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI », quelle proposition est HORS sujet ?",
        "options": [
          "Bouton d'arrêt de la manette des gaz",
          "Ne jamais travailler seul, une personne doit se trouver à proximité en cas d'urgence",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "Poignée du lanceur"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI »."
      },
      {
        "question": "Concernant « Démarrage », quelle proposition est exacte ?",
        "options": [
          "Placer la pointe du pied droit dans le protège main arrière",
          "« Où sont les zones de compression et de tension ? »",
          "Placer la poignée parallèle au plafond",
          "laver et rincer le matériel après usage"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Démarrage."
      },
      {
        "question": "Concernant « Démarrage », quelle proposition est exacte ?",
        "options": [
          "Mettre le starter, enfoncer le levier des gaz et le bouton de blocage",
          "Eloigner les personnes non équipées,",
          "Réglage facile de la vitesse de déplacement",
          "5 manchons souples, de taille variable, permettent de maintenir en place les tuyaux et de les guider au cours de l'établissement"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Démarrage."
      },
      {
        "question": "Concernant « Démarrage », quelle proposition est exacte ?",
        "options": [
          "Insérer l'Halligan tool (pince coupant) afin de créer un jour de quelques centimètres",
          "LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION",
          "Tirer le cordon de lancement jusqu'au déclenchement du premier allumage audible",
          "Hébergements des sinistres"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Démarrage."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est exacte ?",
        "options": [
          "Le porte-lance monte à l'échelle",
          "TGR+sacoche SDL+Lampe portative",
          "Port des Equipement de protections individuelles: tenue de feu compléte, +ARI",
          "Ne travailler que sous de bonnes conditions de visibilités,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Précautions."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est exacte ?",
        "options": [
          "Prendre la poignée en pleine main",
          "Placer la pointe du pied droit dans le protège main arrière",
          "Epuisement des eaux",
          "Distribution des denrées aux sinistrés"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Précautions."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est exacte ?",
        "options": [
          "Fiche individuelle de signalement des incidents et agressions",
          "Protection des sauveteurs : tenue de feu et ARI en nombre suffisant,",
          "laver et rincer le matériel après usage",
          "Écarter les pieds de façon à obtenir une meilleure mobilité,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Précautions."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est exacte ?",
        "options": [
          "Toujours travailler avec une chaîne bien affûtée",
          "Utiliser le lot de sauvetage si progression en hauteur",
          "Prévention des inondations ; entretien et nettoyage",
          "Dès 100ppm, la protection respiratoire est indispensable pour les sapeurs-pompiers et l'évacuation des personnes obligatoires"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Précautions."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est exacte ?",
        "options": [
          "Risques Effets Moyens de protection",
          "L'établissement d'une division au plus près du sinistre",
          "N'utiliser la tronçonneuse que dans des endroits ventilés",
          "Surveillance des victimes intoxiquées par inhalation de gaz toxique"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Précautions."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est exacte ?",
        "options": [
          "Couper le contact avant d'effectuer un contrôle sur la chaîne",
          "Le lasso permet de maîtriser les chiens ou les chats",
          "Objectif : Savoir manœuvrer le matériel de désincarcération",
          "placer le reptile dans un sac"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Précautions."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est exacte ?",
        "options": [
          "Faire assurer l'entretien des tronçonneuses dès le retour,",
          "MARCHE GENERALE DES OPERATIONS",
          "On peut classer les espèces animales en 3 catégories",
          "sont utilisés en général pour satisfaire des déplacements relativement courts de l'ordre de 15 à 18 m max"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Précautions."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est exacte ?",
        "options": [
          "Il existe 2 types de pompes hydrauliques : thermique ou électrique",
          "Toujours transporter l'appareil le moteur arrêté",
          "Un commandement initial",
          "Les agents de la Protection Civile répondent à un double objectif"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Précautions."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est exacte ?",
        "options": [
          "Les 2 parties jaunes sur la carrosserie. Cela permet de ne pas passer la main à travers la vitre",
          "L'agent de la Protection Civile doit mesurer le risque et rester attentif, dans le but de maintenir Sa sécurité et celle des autres intervenants",
          "Arrêter le moteur avant de poser l'appareil",
          "Parmi les victimes, on distingue"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Précautions."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est HORS sujet ?",
        "options": [
          "Écarter les pieds de façon à obtenir une meilleure mobilité,",
          "Toujours transporter l'appareil le moteur arrêté",
          "Ne travailler que sous de bonnes conditions de visibilités,",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Précautions »."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est HORS sujet ?",
        "options": [
          "Écarter les pieds de façon à obtenir une meilleure mobilité,",
          "Prendre la poignée en pleine main",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "Ne travailler que sous de bonnes conditions de visibilités,"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Précautions »."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est HORS sujet ?",
        "options": [
          "Couper le contact avant d'effectuer un contrôle sur la chaîne",
          "Arrêter le moteur avant de poser l'appareil",
          "Secours et sauvetage des personnes",
          "Écarter les pieds de façon à obtenir une meilleure mobilité,"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Précautions »."
      }
    ]
  },
  {
    "id": "qcm-div-serie-9",
    "title": "OD — Opérations diverses (DIV 1) — Série 9",
    "level": "niveau-avance",
    "category": "operations",
    "questions": [
      {
        "question": "Concernant « Précautions », quelle proposition est HORS sujet ?",
        "options": [
          "Couper le contact avant d'effectuer un contrôle sur la chaîne",
          "Faire assurer l'entretien des tronçonneuses dès le retour,",
          "Prendre la poignée en pleine main",
          "Maintien de l'ordre"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Précautions »."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est HORS sujet ?",
        "options": [
          "Toujours travailler avec une chaîne bien affûtée",
          "Rétablissement d'éclairage public",
          "Écarter les pieds de façon à obtenir une meilleure mobilité,",
          "Ne travailler que sous de bonnes conditions de visibilités,"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Précautions »."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est HORS sujet ?",
        "options": [
          "Ne travailler que sous de bonnes conditions de visibilités,",
          "Couper le contact avant d'effectuer un contrôle sur la chaîne",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "Prendre la poignée en pleine main"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Précautions »."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est exacte ?",
        "options": [
          "d'un ensemble pistons-cylindres hydrauliques placé sous la cabine de l'ascenseur,",
          "Objectif : Savoir Ouvrir une porte coulissante",
          "raccord avec bouchon",
          "La tronçonneuse doit se tenir fermement à 2 mains pour en assurer le contrôle permanent,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 1-Principe de tronçonnage."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est exacte ?",
        "options": [
          "Être toujours en mesure de maîtriser la machine,",
          "Gérer le pare brise et les vitrages selon les fiches techniques réalisées Dégarnir les montants",
          "Ils se différencient entre eux selon le type de motorisation",
          "Alarme 2 à 20% de la concentration LIE du méthane"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 1-Principe de tronçonnage."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est exacte ?",
        "options": [
          "Ne jamais travailler en équilibre sur une échelle,",
          "Fiche individuelle de signalement des incidents et agressions",
          "Objectif : Savoir manœuvrer le matériel de désincarcération",
          "brancher l'appareil dans un autre local que le local inondé, sur une prise reliée à la terre,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 1-Principe de tronçonnage."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est exacte ?",
        "options": [
          "Ne jamais scier au dessus de la hauteur des épaules,",
          "bovin : coups de cornes, tentatives de charge, coups de pieds (postérieurs)",
          "se rend à la machinerie",
          "Epuisement des eaux"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 1-Principe de tronçonnage."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est exacte ?",
        "options": [
          "Toujours se poser les questions suivantes : « Suis-je en sécurité là où je me trouve ? »",
          "OUVRIR UNE PORTE (PAR UTILISATION DU CADRE DE VITRE)",
          "s'assurer de la fermeture des portes palières,",
          "MPE toujours placée à l'extérieur pour éviter tout risque d'intoxication,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 1-Principe de tronçonnage."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est exacte ?",
        "options": [
          "« Comment vont réagir les 2 morceaux ? »",
          "apprécier la nature et le nombre des locaux inondés ou menacés (étages inférieurs et supérieurs, locaux attenants)",
          "ETABLISSEMENTS D'ATTAQUE SECURITE",
          "espèces protégées : faune sauvage captive; la détention d'espèces protégées est réglementée"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 1-Principe de tronçonnage."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est exacte ?",
        "options": [
          "Astuce(s) : La scie sabre peut être un outil complémentaire pour la césarisation des montants et du pare brise",
          "Les sangles de levage sont indispensables pour sortir un cheval ou un bovin tombé dans un trou, une piscine,…",
          "« Où sont les zones de compression et de tension ? »",
          "Si demi-pavillon avant : couper selon la charte graphique les montants B et C"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1-Principe de tronçonnage."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est exacte ?",
        "options": [
          "2/ Les signes caractéristiques des animaux domestiques",
          "Chef d'équipe Servant Sapeur de liaison Conducteur",
          "« Où est mon emplacement le plus sûr après la coupe ? »",
          "2 raccords d'injection"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1-Principe de tronçonnage."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est exacte ?",
        "options": [
          "Le porte-lance monte à l'échelle",
          "La courroie d'amarre, pliée en deux est passée dans le ceinturon du bas vers le haut",
          "à moteur à attaque directe (couramment appelé \"Gearless\" ou sans treuil),",
          "« Mon périmètre de sécurité est-il suffisant ? »"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 1-Principe de tronçonnage."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est exacte ?",
        "options": [
          "déterminer la cause de l'inondation et la supprimer (, Service municipalité , ONEE./Régie ..)",
          "TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES",
          "« Par où est mon chemin de fuite ? »",
          "Ces chaînes de traction sont composées de 2 parties, chacune est munie d'un crochet de raccourcissement qui permet d'attraper uniquement la chaîne"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1-Principe de tronçonnage."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est HORS sujet ?",
        "options": [
          "illustration: tronçonneuse en utilisation",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "Être toujours en mesure de maîtriser la machine,",
          "Ne jamais scier au dessus de la hauteur des épaules,"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1-Principe de tronçonnage »."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est HORS sujet ?",
        "options": [
          "La tronçonneuse doit se tenir fermement à 2 mains pour en assurer le contrôle permanent,",
          "« Où sont les zones de compression et de tension ? »",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "« Mon périmètre de sécurité est-il suffisant ? »"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1-Principe de tronçonnage »."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est HORS sujet ?",
        "options": [
          "illustration: tronçonneuse en utilisation",
          "« Mon périmètre de sécurité est-il suffisant ? »",
          "« Comment vont réagir les 2 morceaux ? »",
          "Secours et sauvetage des personnes"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1-Principe de tronçonnage »."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est HORS sujet ?",
        "options": [
          "« Où est mon emplacement le plus sûr après la coupe ? »",
          "illustration: tronçonneuse en utilisation",
          "Maintien de l'ordre",
          "« Mon périmètre de sécurité est-il suffisant ? »"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1-Principe de tronçonnage »."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est HORS sujet ?",
        "options": [
          "illustration: tronçonneuse en utilisation",
          "Ne jamais scier au dessus de la hauteur des épaules,",
          "Rétablissement d'éclairage public",
          "« Où sont les zones de compression et de tension ? »"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1-Principe de tronçonnage »."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est HORS sujet ?",
        "options": [
          "« Mon périmètre de sécurité est-il suffisant ? »",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "« Où sont les zones de compression et de tension ? »",
          "Toujours se poser les questions suivantes : « Suis-je en sécurité là où je me trouve ? »"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1-Principe de tronçonnage »."
      },
      {
        "question": "Concernant « 2-Forces de compression et de tension », quelle proposition est exacte ?",
        "options": [
          "Ne jamais utiliser d'essence pour détruire un nid",
          "Ne jamais frapper sur un tronc d'arbre renferment un essaim de guêpes ou de frelons",
          "2-Forces de compression et de tension",
          "Interventions dans un rond point"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 2-Forces de compression et de tension."
      }
    ]
  },
  {
    "id": "qcm-div-serie-10",
    "title": "OD — Opérations diverses (DIV 1) — Série 10",
    "level": "niveau-1",
    "category": "operations",
    "questions": [
      {
        "question": "Concernant « 2-Forces de compression et de tension », quelle proposition est exacte ?",
        "options": [
          "2.1 Ces forces s'exercent lorsque l'arbre est tombé et repose sur un autre plan",
          "garder toujours le contact et agir en concertation",
          "d'un ensemble pistons-cylindres hydrauliques placé sous la cabine de l'ascenseur,",
          "GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 2-Forces de compression et de tension."
      },
      {
        "question": "Concernant « 2-Forces de compression et de tension », quelle proposition est exacte ?",
        "options": [
          "Insérer l'écarteur dans le jour venant d'être créé",
          "OUVRIR UNE PORTE (METHODE CLASSIQUE)",
          "force de compression : sur laquelle on se limitera à une coupe de dégagement, la pression exercée étant capable de bloquer le guide chaîne",
          "signaler la mise hors service de l'ascenseur,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 2-Forces de compression et de tension."
      },
      {
        "question": "Concernant « 2-Forces de compression et de tension », quelle proposition est exacte ?",
        "options": [
          "Ces forces devront être très clairement identifiées avant la coupe, de façon à ne pas être surpris lors de la libération",
          "Pour les ascenseurs électriques",
          "Les blessés hospitalisés : victimes admises comme patients dans un hôpital plus de 24 heures",
          "Les ascenseurs à traction à câbles sont les types d'ascenseurs que l'on rencontre le plus, notamment dans les bâtiments de bureaux"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 2-Forces de compression et de tension."
      },
      {
        "question": "Concernant « 2-Forces de compression et de tension », quelle proposition est exacte ?",
        "options": [
          "De porter la puissance hydraulique à 1 000 l/min. par l'établissement d'une division50/2x 50",
          "Il faut penser à rajouter 1 bar de pression pour 10 m de dénivelée positive à la pression en sortie de pompe",
          "Relais (engin, motopompe, VEDI…)",
          "Tous les moyens de calage et d'arrimage des grosses pièces seront impérativement établis avant le travail de tronçonnage"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 2-Forces de compression et de tension."
      },
      {
        "question": "Concernant « 2-Forces de compression et de tension », quelle proposition est HORS sujet ?",
        "options": [
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "Ces forces devront être très clairement identifiées avant la coupe, de façon à ne pas être surpris lors de la libération",
          "force de compression : sur laquelle on se limitera à une coupe de dégagement, la pression exercée étant capable de bloquer le guide chaîne",
          "2.1 Ces forces s'exercent lorsque l'arbre est tombé et repose sur un autre plan"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 2-Forces de compression et de tension »."
      },
      {
        "question": "Concernant « 2-Forces de compression et de tension », quelle proposition est HORS sujet ?",
        "options": [
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "Ces forces devront être très clairement identifiées avant la coupe, de façon à ne pas être surpris lors de la libération",
          "force de compression : sur laquelle on se limitera à une coupe de dégagement, la pression exercée étant capable de bloquer le guide chaîne",
          "Tous les moyens de calage et d'arrimage des grosses pièces seront impérativement établis avant le travail de tronçonnage"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 2-Forces de compression et de tension »."
      },
      {
        "question": "Concernant « 2-Forces de compression et de tension », quelle proposition est HORS sujet ?",
        "options": [
          "force de compression : sur laquelle on se limitera à une coupe de dégagement, la pression exercée étant capable de bloquer le guide chaîne",
          "Ces forces devront être très clairement identifiées avant la coupe, de façon à ne pas être surpris lors de la libération",
          "2-Forces de compression et de tension",
          "Secours et sauvetage des personnes"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 2-Forces de compression et de tension »."
      },
      {
        "question": "Concernant « 2-Forces de compression et de tension », quelle proposition est HORS sujet ?",
        "options": [
          "2.1 Ces forces s'exercent lorsque l'arbre est tombé et repose sur un autre plan",
          "2-Forces de compression et de tension",
          "Maintien de l'ordre",
          "Tous les moyens de calage et d'arrimage des grosses pièces seront impérativement établis avant le travail de tronçonnage"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 2-Forces de compression et de tension »."
      },
      {
        "question": "Concernant « 2-Forces de compression et de tension », quelle proposition est HORS sujet ?",
        "options": [
          "Tous les moyens de calage et d'arrimage des grosses pièces seront impérativement établis avant le travail de tronçonnage",
          "Rétablissement d'éclairage public",
          "2.1 Ces forces s'exercent lorsque l'arbre est tombé et repose sur un autre plan",
          "force de compression : sur laquelle on se limitera à une coupe de dégagement, la pression exercée étant capable de bloquer le guide chaîne"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 2-Forces de compression et de tension »."
      },
      {
        "question": "Concernant « 2-Forces de compression et de tension », quelle proposition est HORS sujet ?",
        "options": [
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "Tous les moyens de calage et d'arrimage des grosses pièces seront impérativement établis avant le travail de tronçonnage",
          "2.1 Ces forces s'exercent lorsque l'arbre est tombé et repose sur un autre plan",
          "2-Forces de compression et de tension"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 2-Forces de compression et de tension »."
      },
      {
        "question": "Concernant « Abattage d'un arbre », quelle proposition est exacte ?",
        "options": [
          "sangler les raccords des tuyaux,",
          "1- Identification du tronc à abattre",
          "une fois la personne dégagée refermer et verrouiller la porte",
          "Chiens – Chats ne pas fixer l'animal, ne pas s'approcher trop vite et respecter la «zone de fuite»"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Abattage d'un arbre."
      },
      {
        "question": "Concernant « Abattage d'un arbre », quelle proposition est exacte ?",
        "options": [
          "2-détermination des chemins de fuite en fonction du terrain",
          "Ne jamais utiliser d'essence pour détruire un nid",
          "Branchent les raccords d'injection sur les lignes de 110 mm à égale distance de l'engin",
          "Le matériel utilisé pour la destruction est un pulvérisateur à pression préalable contenant un produit insecticide dont les qualités sont les suiva..."
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Abattage d'un arbre."
      },
      {
        "question": "Concernant « Abattage d'un arbre », quelle proposition est exacte ?",
        "options": [
          "toujours éteindre le moteur avant de faire le plein d'essence,",
          "« Par où est mon chemin de fuite ? »",
          "5/ Les mesures à prendre avant de quitter les lieux",
          "4- Déterminer la direction de la chute"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Abattage d'un arbre."
      },
      {
        "question": "Concernant « Abattage d'un arbre », quelle proposition est exacte ?",
        "options": [
          "5- procéder à l'entaille d'abattage",
          "2e temps : il laisse sa MPVE au ralenti, en circuit fermé et la purge de temps en temps",
          "MPE toujours placée à l'extérieur pour éviter tout risque d'intoxication,",
          "Au SdL il désigne l'orifice de refoulement du poteau et l'orifice d'alimentation de la colonne sèche"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Abattage d'un arbre."
      },
      {
        "question": "Concernant « Abattage d'un arbre », quelle proposition est exacte ?",
        "options": [
          "5- procéder à la coupe d'abattage",
          "lance canon, tromblon et accessoires",
          "La ligne de 110 mm peut être établie du point d'eau vers le point d'attaque dans certaines circonstances",
          "Vérifier mutuellement l'étanchéité des combinaisons,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Abattage d'un arbre."
      },
      {
        "question": "Concernant « Abattage d'un arbre », quelle proposition est HORS sujet ?",
        "options": [
          "2-détermination des chemins de fuite en fonction du terrain",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "4- Déterminer la direction de la chute",
          "5- procéder à la coupe d'abattage"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Abattage d'un arbre »."
      },
      {
        "question": "Concernant « Abattage d'un arbre », quelle proposition est HORS sujet ?",
        "options": [
          "4- Déterminer la direction de la chute",
          "5- procéder à l'entaille d'abattage",
          "1- Identification du tronc à abattre",
          "La reconnaissance doit aussi permettre de décider s'il faut"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Abattage d'un arbre »."
      },
      {
        "question": "Concernant « Abattage d'un arbre », quelle proposition est HORS sujet ?",
        "options": [
          "5- procéder à l'entaille d'abattage",
          "5- procéder à la coupe d'abattage",
          "1- Identification du tronc à abattre",
          "Secours et sauvetage des personnes"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Abattage d'un arbre »."
      },
      {
        "question": "Concernant « Abattage d'un arbre », quelle proposition est HORS sujet ?",
        "options": [
          "5- procéder à l'entaille d'abattage",
          "1- Identification du tronc à abattre",
          "2-détermination des chemins de fuite en fonction du terrain",
          "Maintien de l'ordre"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Abattage d'un arbre »."
      },
      {
        "question": "Concernant « Abattage d'un arbre », quelle proposition est HORS sujet ?",
        "options": [
          "Rétablissement d'éclairage public",
          "2-détermination des chemins de fuite en fonction du terrain",
          "1- Identification du tronc à abattre",
          "5- procéder à la coupe d'abattage"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Abattage d'un arbre »."
      }
    ]
  },
  {
    "id": "qcm-div-serie-11",
    "title": "OD — Opérations diverses (DIV 1) — Série 11",
    "level": "niveau-2",
    "category": "operations",
    "questions": [
      {
        "question": "Concernant « Abattage d'un arbre », quelle proposition est HORS sujet ?",
        "options": [
          "5- procéder à l'entaille d'abattage",
          "5- procéder à la coupe d'abattage",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "1- Identification du tronc à abattre"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Abattage d'un arbre »."
      },
      {
        "question": "Concernant « 1 – Types d'ascenseurs », quelle proposition est exacte ?",
        "options": [
          "Parmi les blessés, on distingue",
          "Toujours transporter l'appareil le moteur arrêté",
          "On distingue essentiellement deux types de familles d'ascenseur",
          "L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1 – Types d'ascenseurs."
      },
      {
        "question": "Concernant « 1 – Types d'ascenseurs », quelle proposition est exacte ?",
        "options": [
          "Epuisement des eaux",
          "Poignée du lanceur",
          "GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE",
          "les ascenseurs à traction à câble,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 1 – Types d'ascenseurs."
      },
      {
        "question": "Concernant « 1 – Types d'ascenseurs », quelle proposition est exacte ?",
        "options": [
          "Perforer le pare-brise pour introduire la lame de scie",
          "les ascenseurs hydrauliques",
          "Utilisées par les C.C.F dans la lutte contre les feux de forët",
          "Les indemnes : impliqués non décédés et dont l'état ne nécessite aucun soin médical"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 1 – Types d'ascenseurs."
      },
      {
        "question": "Concernant « 1 – Types d'ascenseurs », quelle proposition est exacte ?",
        "options": [
          "Utilisées par les C.C.F dans la lutte contre les feux de forët",
          "Réaction immédiate, Message d'ambiance complet, Demande de renfort",
          "Astuce(s) : La scie sabre peut être un outil complémentaire pour la césarisation des montants et du pare brise",
          "En règle générale, ces deux types utilisent l'énergie électrique pour déplacer les cabines verticalement (moteur électrique continu ou alternatif)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 1 – Types d'ascenseurs."
      },
      {
        "question": "Concernant « 1 – Types d'ascenseurs », quelle proposition est exacte ?",
        "options": [
          "Ils sont composés des principaux éléments suivants",
          "Etablir une ligne de 110 mm de longueur maximale de 400 m, permet de disposer d'un point d'eau avancé (division 100 / 3 x 50)",
          "vérifier le bon déroulement de l'assèchement (crépine, évacuation),",
          "course verticale limitée à une hauteur entre 15 et 18 m"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 1 – Types d'ascenseurs."
      },
      {
        "question": "Concernant « 1 – Types d'ascenseurs », quelle proposition est HORS sujet ?",
        "options": [
          "Ils sont composés des principaux éléments suivants",
          "On distingue essentiellement deux types de familles d'ascenseur",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "les ascenseurs à traction à câble,"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1 – Types d'ascenseurs »."
      },
      {
        "question": "Concernant « 1 – Types d'ascenseurs », quelle proposition est HORS sujet ?",
        "options": [
          "On distingue essentiellement deux types de familles d'ascenseur",
          "les ascenseurs hydrauliques",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "En règle générale, ces deux types utilisent l'énergie électrique pour déplacer les cabines verticalement (moteur électrique continu ou alternatif)"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1 – Types d'ascenseurs »."
      },
      {
        "question": "Concernant « 1 – Types d'ascenseurs », quelle proposition est HORS sujet ?",
        "options": [
          "Secours et sauvetage des personnes",
          "Ils sont composés des principaux éléments suivants",
          "En règle générale, ces deux types utilisent l'énergie électrique pour déplacer les cabines verticalement (moteur électrique continu ou alternatif)",
          "On distingue essentiellement deux types de familles d'ascenseur"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1 – Types d'ascenseurs »."
      },
      {
        "question": "Concernant « 1 – Types d'ascenseurs », quelle proposition est HORS sujet ?",
        "options": [
          "Ils sont composés des principaux éléments suivants",
          "Maintien de l'ordre",
          "En règle générale, ces deux types utilisent l'énergie électrique pour déplacer les cabines verticalement (moteur électrique continu ou alternatif)",
          "les ascenseurs hydrauliques"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1 – Types d'ascenseurs »."
      },
      {
        "question": "Concernant « 1 – Types d'ascenseurs », quelle proposition est HORS sujet ?",
        "options": [
          "On distingue essentiellement deux types de familles d'ascenseur",
          "Rétablissement d'éclairage public",
          "les ascenseurs à traction à câble,",
          "Ils sont composés des principaux éléments suivants"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1 – Types d'ascenseurs »."
      },
      {
        "question": "Concernant « 1 – Types d'ascenseurs », quelle proposition est HORS sujet ?",
        "options": [
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "les ascenseurs à traction à câble,",
          "Ils sont composés des principaux éléments suivants",
          "les ascenseurs hydrauliques"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1 – Types d'ascenseurs »."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est exacte ?",
        "options": [
          "vidanger le corps de pompe et rincer la MPE après chaque utilisation",
          "sont utilisés en général pour satisfaire des déplacements relativement courts de l'ordre de 15 à 18 m max",
          "Relais (engin, motopompe, VEDI…)",
          "Perforer le pare-brise pour introduire la lame de scie"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 3-Les ascenseurs hydrauliques."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENTS D'ATTAQUE SECURITE",
          "Ils se composent principalement de",
          "Pointeau ou séccoise",
          "Zone de déploiement initial"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 3-Les ascenseurs hydrauliques."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est exacte ?",
        "options": [
          "Lorsqu'elle en reçoit l'ordre, l'équipe du CA ou BA arrête définitivement l'injection d'émulseur",
          "d'un ensemble pistons-cylindres hydrauliques placé sous la cabine de l'ascenseur,",
          "Utilisation des radios",
          "faire éloigner les curieux"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 3-Les ascenseurs hydrauliques."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est exacte ?",
        "options": [
          "d'un réservoir d'huile,",
          "Noter le numéro du service d'assistance de la marque de l'ascenseur et le donner au chef d'agrès afin d'avertir le technicien de garde",
          "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 800 mètres",
          "Survient sur une voie ouverte à la circulation publique"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 3-Les ascenseurs hydrauliques."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est exacte ?",
        "options": [
          "prendre les précautions nécessaires lors du remplissage de carburant,",
          "d'un moteur électrique accouplé à une pompe hydraulique,",
          "1er temps : il remplit d'émulseur les tuyaux de 45 mm jusqu'aux raccords d'injection (avant même la mise en eau des lignes de 110 mm)",
          "« Comment vont réagir les 2 morceaux ? »"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 3-Les ascenseurs hydrauliques."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est exacte ?",
        "options": [
          "Couper et déposer l'ensemble du joint",
          "vérifie la fermeture des portes palières à tous les étages,",
          "Précision au niveau du déplacement",
          "Secours et sauvetage des personnes"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 3-Les ascenseurs hydrauliques."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est exacte ?",
        "options": [
          "course verticale limitée à une hauteur entre 15 et 18 m",
          "Prendre en considération le sens du fil du bois pour les cales",
          "placer le reptile dans un sac",
          "respecter le périmétre de sécurité"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 3-Les ascenseurs hydrauliques."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est exacte ?",
        "options": [
          "Protège main avant (Qui déclenche le frein de chaine)",
          "Interventions dans un rond point",
          "Réglage facile de la vitesse de déplacement",
          "OUVRIR UNE PORTE (METHODE CLASSIQUE)"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 3-Les ascenseurs hydrauliques."
      }
    ]
  },
  {
    "id": "qcm-div-serie-12",
    "title": "OD — Opérations diverses (DIV 1) — Série 12",
    "level": "niveau-avance",
    "category": "operations",
    "questions": [
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est exacte ?",
        "options": [
          "vérifier le bon déroulement de l'assèchement (crépine, évacuation),",
          "Il peut exister pour une même intervention plusieurs ZAL, ZE ou ZAT",
          "risque de pollution des sous-sol",
          "Protection des sauveteurs : tenue de feu et ARI en nombre suffisant,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 3-Les ascenseurs hydrauliques."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est exacte ?",
        "options": [
          "Ne nécessite pas de cabanon de machinerie",
          "faire descendre l'hydro-éjecteur avec une commande en évitant les chocs (raccorder la commande au clapet de vidange),",
          "fût, ajutage de 35 mm ; ARI et tenues d'approche",
          "suivant le type de motorisation précision au niveau de la vitesse et du déplacement"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 3-Les ascenseurs hydrauliques."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est HORS sujet ?",
        "options": [
          "Réglage facile de la vitesse de déplacement",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "nécessiter de renforcer la dalle de sol",
          "d'un moteur électrique accouplé à une pompe hydraulique,"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 3-Les ascenseurs hydrauliques »."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est HORS sujet ?",
        "options": [
          "Implantation facile dans un immeuble existant",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "risque de pollution des sous-sol",
          "d'un ensemble pistons-cylindres hydrauliques placé sous la cabine de l'ascenseur,"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 3-Les ascenseurs hydrauliques »."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est HORS sujet ?",
        "options": [
          "d'un ensemble pistons-cylindres hydrauliques placé sous la cabine de l'ascenseur,",
          "risque de pollution des sous-sol",
          "Secours et sauvetage des personnes",
          "d'un réservoir d'huile,"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 3-Les ascenseurs hydrauliques »."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est HORS sujet ?",
        "options": [
          "course verticale limitée à une hauteur entre 15 et 18 m",
          "Maintien de l'ordre",
          "Précision au niveau du déplacement",
          "d'un ensemble pistons-cylindres hydrauliques placé sous la cabine de l'ascenseur,"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 3-Les ascenseurs hydrauliques »."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est HORS sujet ?",
        "options": [
          "d'un réservoir d'huile,",
          "d'un ensemble pistons-cylindres hydrauliques placé sous la cabine de l'ascenseur,",
          "Rétablissement d'éclairage public",
          "Réglage facile de la vitesse de déplacement"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 3-Les ascenseurs hydrauliques »."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est HORS sujet ?",
        "options": [
          "Ils se composent principalement de",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "course verticale limitée à une hauteur entre 15 et 18 m",
          "consommation énergétique importante"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 3-Les ascenseurs hydrauliques »."
      },
      {
        "question": "Concernant « Description », quelle proposition est exacte ?",
        "options": [
          "Les ascenseurs à traction à câbles sont les types d'ascenseurs que l'on rencontre le plus, notamment dans les bâtiments de bureaux",
          "Travailler dans le sens classique de l'ouverture de la porte",
          "Insérer l'écarteur dans le jour venant d'être créé",
          "ou à partir de citernes de stockage, via un réseau simple"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Description."
      },
      {
        "question": "Concernant « Description », quelle proposition est exacte ?",
        "options": [
          "L'écarteur est un outil qui permet d'écarter, d'écraser ou de tirer des pièces de carrosserie",
          "Hébergement des sinistrés",
          "Ils se différencient entre eux selon le type de motorisation",
          "Cahier d'observations DSA"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Description."
      },
      {
        "question": "Concernant « Description », quelle proposition est exacte ?",
        "options": [
          "Ne pas rentrer dans la «zone critique» pour éviter l'affrontement",
          "Outil de dégarnissage Crayon carrosserie",
          "à moteur-treuil à vis sans fin,",
          "La lacette est une cordelette d'une longueur de 1,20 m. Elle permet de museler tous les animaux à museau pointu"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Description."
      },
      {
        "question": "Concernant « Description », quelle proposition est exacte ?",
        "options": [
          "2/ Les signes caractéristiques des animaux domestiques",
          "à moteur-treuil planétaire,",
          "Accident sur la voie du milieu",
          "Lecture MX2100 Essence SP GPL Butane Propane Gaz de ville / methane"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Description."
      },
      {
        "question": "Concernant « Description », quelle proposition est exacte ?",
        "options": [
          "infiltration par remontée des eaux d'égouts ou de plans d'eau",
          "à moteur à attaque directe (couramment appelé \"Gearless\" ou sans treuil),",
          "ouvre la porte à l'aide de la clé spéciale,",
          "TGR+sacoche SDL+Lampe portative"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Description."
      },
      {
        "question": "Concernant « Description », quelle proposition est exacte ?",
        "options": [
          "vérifier le bon déroulement de l'assèchement (crépine, évacuation),",
          "Ascenseur à moteur à attaque directe",
          "Cabine bloquée à un étage dont la porte palière reste verrouillée",
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Description."
      },
      {
        "question": "Concernant « Description », quelle proposition est exacte ?",
        "options": [
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre",
          "Quel que soit le type, les ascenseurs à traction à câbles comprennent généralement",
          "A ces périodes de la journée tous les insectes ont alors rejoint leur nid",
          "Le non respect de cette directive entraîne automatiquement la responsabilité de l'intéressé et/ou de son chef"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Description."
      },
      {
        "question": "Concernant « Description », quelle proposition est exacte ?",
        "options": [
          "Identifier le pare-brise comme feuilleté",
          "des câbles reliant la cabine au contre-poids,",
          "Les blessés : victimes non tuées",
          "veiller à ce que la prise de courant soit munie d'une prise de terre,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Description."
      },
      {
        "question": "Concernant « Description », quelle proposition est exacte ?",
        "options": [
          "le chef d'équipe dépose le matériel du panier. Le servant Maintient le dévidoir",
          "Matériel d'électrogène",
          "un système de traction au-dessus de la cage de l'ascenseur,",
          "pas de souci de pollution"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Description."
      },
      {
        "question": "Concernant « Description », quelle proposition est HORS sujet ?",
        "options": [
          "un système de traction au-dessus de la cage de l'ascenseur,",
          "Quel que soit le type, les ascenseurs à traction à câbles comprennent généralement",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "Ils se différencient entre eux selon le type de motorisation"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Description »."
      },
      {
        "question": "Concernant « Description », quelle proposition est HORS sujet ?",
        "options": [
          "Ascenseur à moteur à attaque directe",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "Ils se différencient entre eux selon le type de motorisation",
          "à moteur-treuil à vis sans fin,"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Description »."
      },
      {
        "question": "Concernant « Description », quelle proposition est HORS sujet ?",
        "options": [
          "Secours et sauvetage des personnes",
          "Les ascenseurs à traction à câbles sont les types d'ascenseurs que l'on rencontre le plus, notamment dans les bâtiments de bureaux",
          "Ascenseur à moteur à attaque directe",
          "des câbles reliant la cabine au contre-poids,"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Description »."
      }
    ]
  },
  {
    "id": "qcm-div-serie-13",
    "title": "OD — Opérations diverses (DIV 1) — Série 13",
    "level": "niveau-1",
    "category": "operations",
    "questions": [
      {
        "question": "Concernant « Description », quelle proposition est HORS sujet ?",
        "options": [
          "à moteur-treuil à vis sans fin,",
          "Ils se différencient entre eux selon le type de motorisation",
          "à moteur-treuil planétaire,",
          "Maintien de l'ordre"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Description »."
      },
      {
        "question": "Concernant « Description », quelle proposition est HORS sujet ?",
        "options": [
          "Rétablissement d'éclairage public",
          "Ascenseur à moteur à attaque directe",
          "à moteur-treuil planétaire,",
          "des câbles reliant la cabine au contre-poids,"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Description »."
      },
      {
        "question": "Concernant « Description », quelle proposition est HORS sujet ?",
        "options": [
          "un système de traction au-dessus de la cage de l'ascenseur,",
          "Ascenseur à moteur à attaque directe",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "à moteur à attaque directe (couramment appelé \"Gearless\" ou sans treuil),"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Description »."
      },
      {
        "question": "Concernant « Avantages et inconvénients », quelle proposition est exacte ?",
        "options": [
          "course verticale pas vraiment limitée",
          "Soulever puis basculer le pavillon vers l'avant ou l'arrière",
          "« Mon périmètre de sécurité est-il suffisant ? »",
          "prendre les coordonnées de la société de dépannage pour les prévenir"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Avantages et inconvénients."
      },
      {
        "question": "Concernant « Avantages et inconvénients », quelle proposition est exacte ?",
        "options": [
          "Ne jamais travailler seul, une personne doit se trouver à proximité en cas d'urgence",
          "suivant le type de motorisation précision au niveau de la vitesse et du déplacement",
          "Epuisement des eaux",
          "DANGER : présence d'eau et d'électricité"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Avantages et inconvénients."
      },
      {
        "question": "Concernant « Avantages et inconvénients », quelle proposition est exacte ?",
        "options": [
          "débloquer le système de freinage,",
          "Lecture MX2100 Essence SP GPL Butane Propane Gaz de ville / methane",
          "rapidité de déplacement",
          "Les pompes thermiques"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Avantages et inconvénients."
      },
      {
        "question": "Concernant « Avantages et inconvénients », quelle proposition est exacte ?",
        "options": [
          "Insérer l'écarteur dans le jour et l'ouvrir afin de faire céder la serrure",
          "efficacité énergétique importante",
          "1er Equipe 2e Equipe Sapeur de liaison",
          "La MPVE (Motopompe Volumétrique Emulseur)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Avantages et inconvénients."
      },
      {
        "question": "Concernant « Avantages et inconvénients », quelle proposition est exacte ?",
        "options": [
          "pas de souci de pollution",
          "respecter le périmétre de sécurité",
          "Les raclettes: Elles servent à évacuer une fine couche de liquide",
          "Pointeau ou séccoise"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Avantages et inconvénients."
      },
      {
        "question": "Concernant « Avantages et inconvénients », quelle proposition est exacte ?",
        "options": [
          "faire le moins de coudes possible avec le tuyau de refoulement,",
          "1re et 2e lance (eau ou mousse)",
          "en version standard, nécessite un cabanon technique en toiture",
          "Réactions cutanées au produit Réaction allergique localisée Gant en caoutchouc et lunettes de protection"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Avantages et inconvénients."
      },
      {
        "question": "Concernant « Avantages et inconvénients », quelle proposition est exacte ?",
        "options": [
          "LES MATERIEL DE BASE A EMPORTER",
          "exigence très importante sur l'entretien",
          "Pour aborder un chien, l'homme doit se faire considérer comme l'individu dominant, l'animal adoptera alors une attitude de soumission",
          "Cabine bloquée à un étage dont la porte palière reste verrouillée"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Avantages et inconvénients."
      },
      {
        "question": "Concernant « Avantages et inconvénients », quelle proposition est HORS sujet ?",
        "options": [
          "rapidité de déplacement",
          "efficacité énergétique importante",
          "course verticale pas vraiment limitée",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Avantages et inconvénients »."
      },
      {
        "question": "Concernant « Avantages et inconvénients », quelle proposition est HORS sujet ?",
        "options": [
          "en version standard, nécessite un cabanon technique en toiture",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "exigence très importante sur l'entretien",
          "suivant le type de motorisation précision au niveau de la vitesse et du déplacement"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Avantages et inconvénients »."
      },
      {
        "question": "Concernant « Avantages et inconvénients », quelle proposition est HORS sujet ?",
        "options": [
          "suivant le type de motorisation précision au niveau de la vitesse et du déplacement",
          "exigence très importante sur l'entretien",
          "Secours et sauvetage des personnes",
          "en version standard, nécessite un cabanon technique en toiture"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Avantages et inconvénients »."
      },
      {
        "question": "Concernant « Avantages et inconvénients », quelle proposition est HORS sujet ?",
        "options": [
          "Maintien de l'ordre",
          "efficacité énergétique importante",
          "exigence très importante sur l'entretien",
          "course verticale pas vraiment limitée"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Avantages et inconvénients »."
      },
      {
        "question": "Concernant « Avantages et inconvénients », quelle proposition est HORS sujet ?",
        "options": [
          "exigence très importante sur l'entretien",
          "pas de souci de pollution",
          "Rétablissement d'éclairage public",
          "course verticale pas vraiment limitée"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Avantages et inconvénients »."
      },
      {
        "question": "Concernant « Avantages et inconvénients », quelle proposition est HORS sujet ?",
        "options": [
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "rapidité de déplacement",
          "efficacité énergétique importante",
          "exigence très importante sur l'entretien"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Avantages et inconvénients »."
      },
      {
        "question": "Concernant « 1/Les mesures à prendre avant d'intervenir sur la cabine », quelle proposition est exacte ?",
        "options": [
          "poignée de contrôle",
          "Ascenseur à moteur à attaque directe",
          "Positionner le coupe pare-brise de telle façon que",
          "1/Les mesures à prendre avant d'intervenir sur la cabine"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 1/Les mesures à prendre avant d'intervenir sur la cabine."
      },
      {
        "question": "Concernant « 1/Les mesures à prendre avant d'intervenir sur la cabine », quelle proposition est exacte ?",
        "options": [
          "placer le reptile dans un sac",
          "Matériel d'électrogène",
          "reconnaître les lieux (type d'ascenseur, emplacement de la cabine et du local machinerie),",
          "Les Moto-Pompes Remorquables (M.P.R.)"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1/Les mesures à prendre avant d'intervenir sur la cabine."
      },
      {
        "question": "Concernant « 1/Les mesures à prendre avant d'intervenir sur la cabine », quelle proposition est exacte ?",
        "options": [
          "Insérer une cale ou la balle en mousse dans la poignée intérieure de la porte afin de faciliter le déblocage de cette dernière",
          "engager le minimum de personnel",
          "couper le courant au niveau de l'interrupteur général situé dans le local machinerie sauf éclairage de la cabine,",
          "Réaliser l'ouverture complète si nécessaire en plaçant l'écarteur au niveau des charnières"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1/Les mesures à prendre avant d'intervenir sur la cabine."
      },
      {
        "question": "Concernant « 1/Les mesures à prendre avant d'intervenir sur la cabine », quelle proposition est exacte ?",
        "options": [
          "Evacuation complète",
          "Lecture MX2100 Essence SP GPL Butane Propane Gaz de ville / methane",
          "reste au niveau de la porte palière par laquelle sera réalisée l'évacuation,",
          "se renseigner sur l'état des personnes à l'intérieur de la cabine et les rassurer"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 1/Les mesures à prendre avant d'intervenir sur la cabine."
      }
    ]
  },
  {
    "id": "qcm-div-serie-14",
    "title": "OD — Opérations diverses (DIV 1) — Série 14",
    "level": "niveau-2",
    "category": "operations",
    "questions": [
      {
        "question": "Concernant « 1/Les mesures à prendre avant d'intervenir sur la cabine », quelle proposition est HORS sujet ?",
        "options": [
          "couper le courant au niveau de l'interrupteur général situé dans le local machinerie sauf éclairage de la cabine,",
          "se renseigner sur l'état des personnes à l'intérieur de la cabine et les rassurer",
          "1/Les mesures à prendre avant d'intervenir sur la cabine",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1/Les mesures à prendre avant d'intervenir sur la cabine »."
      },
      {
        "question": "Concernant « 1/Les mesures à prendre avant d'intervenir sur la cabine », quelle proposition est HORS sujet ?",
        "options": [
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "couper le courant au niveau de l'interrupteur général situé dans le local machinerie sauf éclairage de la cabine,",
          "reconnaître les lieux (type d'ascenseur, emplacement de la cabine et du local machinerie),",
          "se renseigner sur l'état des personnes à l'intérieur de la cabine et les rassurer"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1/Les mesures à prendre avant d'intervenir sur la cabine »."
      },
      {
        "question": "Concernant « 1/Les mesures à prendre avant d'intervenir sur la cabine », quelle proposition est HORS sujet ?",
        "options": [
          "couper le courant au niveau de l'interrupteur général situé dans le local machinerie sauf éclairage de la cabine,",
          "1/Les mesures à prendre avant d'intervenir sur la cabine",
          "se renseigner sur l'état des personnes à l'intérieur de la cabine et les rassurer",
          "Secours et sauvetage des personnes"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1/Les mesures à prendre avant d'intervenir sur la cabine »."
      },
      {
        "question": "Concernant « 1/Les mesures à prendre avant d'intervenir sur la cabine », quelle proposition est HORS sujet ?",
        "options": [
          "couper le courant au niveau de l'interrupteur général situé dans le local machinerie sauf éclairage de la cabine,",
          "reconnaître les lieux (type d'ascenseur, emplacement de la cabine et du local machinerie),",
          "1/Les mesures à prendre avant d'intervenir sur la cabine",
          "Maintien de l'ordre"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1/Les mesures à prendre avant d'intervenir sur la cabine »."
      },
      {
        "question": "Concernant « 1/Les mesures à prendre avant d'intervenir sur la cabine », quelle proposition est HORS sujet ?",
        "options": [
          "reconnaître les lieux (type d'ascenseur, emplacement de la cabine et du local machinerie),",
          "couper le courant au niveau de l'interrupteur général situé dans le local machinerie sauf éclairage de la cabine,",
          "1/Les mesures à prendre avant d'intervenir sur la cabine",
          "Rétablissement d'éclairage public"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1/Les mesures à prendre avant d'intervenir sur la cabine »."
      },
      {
        "question": "Concernant « 1/Les mesures à prendre avant d'intervenir sur la cabine », quelle proposition est HORS sujet ?",
        "options": [
          "1/Les mesures à prendre avant d'intervenir sur la cabine",
          "se renseigner sur l'état des personnes à l'intérieur de la cabine et les rassurer",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "reconnaître les lieux (type d'ascenseur, emplacement de la cabine et du local machinerie),"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1/Les mesures à prendre avant d'intervenir sur la cabine »."
      },
      {
        "question": "Concernant « Pour les ascenseurs électriques », quelle proposition est exacte ?",
        "options": [
          "De porter la puissance hydraulique à 1 000 l/min. par l'établissement d'une division50/2x 50",
          "Pour les ascenseurs électriques",
          "ETABLISSEMENTS D'ATTAQUE SECURITE",
          "course verticale limitée à une hauteur entre 15 et 18 m"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Pour les ascenseurs électriques."
      },
      {
        "question": "Concernant « Pour les ascenseurs électriques », quelle proposition est exacte ?",
        "options": [
          "Ne pas rentrer dans la «zone critique» pour éviter l'affrontement",
          "Le porte-lance monte à l'échelle",
          "débloquer le système de freinage,",
          "les lames droites permettent la section de métaux de diamètre plus important (montant arrière (C))"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Pour les ascenseurs électriques."
      },
      {
        "question": "Concernant « Pour les ascenseurs électriques », quelle proposition est exacte ?",
        "options": [
          "La lance est engagée dans la boucle constituée par la courroie d'amarre",
          "Cale en bois ou balle souple",
          "manœuvrer le volant prévu à cet effet, lorsque la cabine est arrivée à hauteur d'un étage, une marque apparaît sur le câble,",
          "Ascenseur à moteur à attaque directe"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Pour les ascenseurs électriques."
      },
      {
        "question": "Concernant « Pour les ascenseurs électriques », quelle proposition est exacte ?",
        "options": [
          "Bouchon du réservoir d'oïl",
          "TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES",
          "bloquer le système de freinage",
          "Un accident corporel implique un certain nombre d'usagers. Parmi ceux-ci, on distingue"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Pour les ascenseurs électriques."
      },
      {
        "question": "Concernant « Pour les ascenseurs électriques », quelle proposition est HORS sujet ?",
        "options": [
          "Pour les ascenseurs électriques",
          "bloquer le système de freinage",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "débloquer le système de freinage,"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Pour les ascenseurs électriques »."
      },
      {
        "question": "Concernant « Pour les ascenseurs électriques », quelle proposition est HORS sujet ?",
        "options": [
          "Pour les ascenseurs électriques",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "manœuvrer le volant prévu à cet effet, lorsque la cabine est arrivée à hauteur d'un étage, une marque apparaît sur le câble,",
          "bloquer le système de freinage"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Pour les ascenseurs électriques »."
      },
      {
        "question": "Concernant « Pour les ascenseurs électriques », quelle proposition est HORS sujet ?",
        "options": [
          "manœuvrer le volant prévu à cet effet, lorsque la cabine est arrivée à hauteur d'un étage, une marque apparaît sur le câble,",
          "Pour les ascenseurs électriques",
          "bloquer le système de freinage",
          "Secours et sauvetage des personnes"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Pour les ascenseurs électriques »."
      },
      {
        "question": "Concernant « Pour les ascenseurs électriques », quelle proposition est HORS sujet ?",
        "options": [
          "Pour les ascenseurs électriques",
          "Maintien de l'ordre",
          "manœuvrer le volant prévu à cet effet, lorsque la cabine est arrivée à hauteur d'un étage, une marque apparaît sur le câble,",
          "bloquer le système de freinage"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Pour les ascenseurs électriques »."
      },
      {
        "question": "Concernant « Pour les ascenseurs électriques », quelle proposition est HORS sujet ?",
        "options": [
          "bloquer le système de freinage",
          "Rétablissement d'éclairage public",
          "Pour les ascenseurs électriques",
          "manœuvrer le volant prévu à cet effet, lorsque la cabine est arrivée à hauteur d'un étage, une marque apparaît sur le câble,"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Pour les ascenseurs électriques »."
      },
      {
        "question": "Concernant « Pour les ascenseurs électriques », quelle proposition est HORS sujet ?",
        "options": [
          "débloquer le système de freinage,",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "bloquer le système de freinage",
          "Pour les ascenseurs électriques"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Pour les ascenseurs électriques »."
      },
      {
        "question": "Concernant « Cabine bloquée à un étage dont la porte palière reste verrouillée », quelle proposition est exacte ?",
        "options": [
          "Cabine bloquée à un étage dont la porte palière reste verrouillée",
          "Prendre en considération le sens du fil du bois pour les cales",
          "La pince à serpent permet de saisir le serpent au plus près de la tête en le maintenant à distance",
          "Interdiction d'accès de la zone au public et aux personnels d'intervention sauf ceux strictement nécessaires"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Cabine bloquée à un étage dont la porte palière reste verrouillée."
      },
      {
        "question": "Concernant « Cabine bloquée à un étage dont la porte palière reste verrouillée », quelle proposition est exacte ?",
        "options": [
          "Les raclettes: Elles servent à évacuer une fine couche de liquide",
          "Perte de charge dans les tuyaux de 70 mm : 0,45 bar pour 60 m",
          "procéder à l'ouverture de la porte palière au moyen de la clé adaptée,",
          "Lames; lames à bord tranchant"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Cabine bloquée à un étage dont la porte palière reste verrouillée."
      },
      {
        "question": "Concernant « Cabine bloquée à un étage dont la porte palière reste verrouillée », quelle proposition est exacte ?",
        "options": [
          "Pointeau ou séccoise",
          "à moteur à attaque directe (couramment appelé \"Gearless\" ou sans treuil),",
          "Relais (engin, motopompe, VEDI…)",
          "une fois la personne dégagée refermer et verrouiller la porte"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Cabine bloquée à un étage dont la porte palière reste verrouillée."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est exacte ?",
        "options": [
          "Insérer l'écarteur dans la partie arrière de la porte juste à côté du rail coulissant",
          "Proscrire toute manipulation intempestive de circuit électrique (sonnette, éclairage…)",
          "4/ Rôle du Chef d'agrès et de l'équipier",
          "On distingue essentiellement deux types de familles d'ascenseur"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 4/ Rôle du Chef d'agrès et de l'équipier."
      }
    ]
  },
  {
    "id": "qcm-div-serie-15",
    "title": "OD — Opérations diverses (DIV 1) — Série 15",
    "level": "niveau-avance",
    "category": "operations",
    "questions": [
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est exacte ?",
        "options": [
          "vérifie que chacun porte son EPI complet,",
          "pas de souci de pollution",
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance",
          "Poser une câle en bois, côté opposé au montant à redresser, puis la serrer contre le toit de l'habitacle avec un écarteur"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 4/ Rôle du Chef d'agrès et de l'équipier."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est exacte ?",
        "options": [
          "Le chef d'équipe déposes on matériel au point d'attaque, retourne au dévidoir et répercute l'ordre au servant. Le servant tire le dévidoir et le dé...",
          "fait prendre le matériel,",
          "Pression à la lance : 6 bars (lance non autorégulée)",
          "signaler la mise hors service de l'ascenseur,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 4/ Rôle du Chef d'agrès et de l'équipier."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est exacte ?",
        "options": [
          "Les victimes : impliquées non indemnes",
          "ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES",
          "LES RISQUES PRESENTES PAR LE GAZ",
          "effectue sa reconnaissance,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 4/ Rôle du Chef d'agrès et de l'équipier."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est exacte ?",
        "options": [
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars pour 40 m",
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun",
          "ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA)",
          "se rend à la machinerie"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 4/ Rôle du Chef d'agrès et de l'équipier."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est exacte ?",
        "options": [
          "garder toujours le contact et agir en concertation",
          "Écarter les pieds de façon à obtenir une meilleure mobilité,",
          "On va s'intéresser ici au balisage réalisé avec le matériel du VSR (panneaux triflashs et cônes de Lubeck)",
          "coupe l'alimentation à l'exception de l'éclairage cabine,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 4/ Rôle du Chef d'agrès et de l'équipier."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est exacte ?",
        "options": [
          "Au cours de l'attaque, le port complet des EPI est obligatoire",
          "ne jamais l'utiliser en relais,",
          "effectue la montée ou la descente en respectant les procédures selon le type d'ascenseur,",
          "Réglage facile de la vitesse de déplacement"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 4/ Rôle du Chef d'agrès et de l'équipier."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est exacte ?",
        "options": [
          "Une fois le vitrage brisé, passez la main à l'intérieur pour déposer le vitrage entier vers l'extérieur",
          "coupe l'éclairage et laisse la machine hors service,",
          "2 cannes plongeuses",
          "utiliser un aspirateur à eau pour une hauteur d'eau ≤ 5 cm,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 4/ Rôle du Chef d'agrès et de l'équipier."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est exacte ?",
        "options": [
          "remet le matériel en place (échelle, clé machinerie) et rejoint son équipier,",
          "Chiens – Chats ne pas fixer l'animal, ne pas s'approcher trop vite et respecter la «zone de fuite»",
          "Couper les montants A et B selon la charte graphique en suivant un ordre judicieux",
          "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 800 mètres"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 4/ Rôle du Chef d'agrès et de l'équipier."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est exacte ?",
        "options": [
          "définir avec précision les moyens nécessaires pour effectuer l'opération (motopompe, longueur et diamètre des tuyaux d'alimentation et de refouleme...",
          "vérifie la fermeture des portes palières à tous les étages,",
          "les pompes hydrauliques,",
          "Soulever le pavillon et l'évacuer vers la zone de dépôt des structures"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 4/ Rôle du Chef d'agrès et de l'équipier."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est HORS sujet ?",
        "options": [
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "coupe l'éclairage et laisse la machine hors service,",
          "fait prendre le matériel,",
          "remet le matériel en place (échelle, clé machinerie) et rejoint son équipier,"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 4/ Rôle du Chef d'agrès et de l'équipier »."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est HORS sujet ?",
        "options": [
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "referme la porte palière et s'assure de sa bonne fermeture",
          "vérifie la fermeture des portes palières à tous les étages,",
          "effectue sa reconnaissance,"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 4/ Rôle du Chef d'agrès et de l'équipier »."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est HORS sujet ?",
        "options": [
          "ouvre la porte à l'aide de la clé spéciale,",
          "effectue sa reconnaissance,",
          "referme la porte palière et s'assure de sa bonne fermeture",
          "Secours et sauvetage des personnes"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 4/ Rôle du Chef d'agrès et de l'équipier »."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est HORS sujet ?",
        "options": [
          "quitte les lieux et s'assure du respect de toutes les consignes de sécurité",
          "Maintien de l'ordre",
          "enregistre la marque de l'ascenseur ainsi que les coordonnées de la société de maintenance,",
          "fait noter ou note l'identité des impliqués"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 4/ Rôle du Chef d'agrès et de l'équipier »."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est HORS sujet ?",
        "options": [
          "s'équipe de son EPI complet,",
          "Rétablissement d'éclairage public",
          "suit le chef d'agrès,",
          "en cas d'intervention payante, remplit le formulaire d'intervention payante,"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 4/ Rôle du Chef d'agrès et de l'équipier »."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est HORS sujet ?",
        "options": [
          "évacue les personnes en toute sécurité,",
          "fait prendre le matériel,",
          "fait noter ou note l'identité des impliqués",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 4/ Rôle du Chef d'agrès et de l'équipier »."
      },
      {
        "question": "Concernant « 5/ Les mesures à prendre avant de quitter les lieux », quelle proposition est exacte ?",
        "options": [
          "Feuilleté : Se découpe à l'aide du coupe pare-brise ou d'une scie sabre. Protection respiratoire type masque FFP2 obligatoire (pour sauveteurs et v...",
          "Coupe pare-brise Scie sabre Halligan tool ou outils de forcement",
          "Périmètre de sécurité d'un rayon de 50 m déterminé et délimité",
          "5/ Les mesures à prendre avant de quitter les lieux"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 5/ Les mesures à prendre avant de quitter les lieux."
      },
      {
        "question": "Concernant « 5/ Les mesures à prendre avant de quitter les lieux », quelle proposition est exacte ?",
        "options": [
          "s'assurer de la fermeture des portes palières,",
          "force de compression : sur laquelle on se limitera à une coupe de dégagement, la pression exercée étant capable de bloquer le guide chaîne",
          "Coupe pare-brise Scie sabre Halligan tool ou outils de forcement",
          "espèces domestiques : espèces communes apprivoisées par l'homme"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 5/ Les mesures à prendre avant de quitter les lieux."
      },
      {
        "question": "Concernant « 5/ Les mesures à prendre avant de quitter les lieux », quelle proposition est exacte ?",
        "options": [
          "ne pas rétablir le courant,",
          "« Comment vont réagir les 2 morceaux ? »",
          "Le lasso permet de maîtriser les chiens ou les chats",
          "L'écarteur est un outil qui permet d'écarter, d'écraser ou de tirer des pièces de carrosserie"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 5/ Les mesures à prendre avant de quitter les lieux."
      },
      {
        "question": "Concernant « 5/ Les mesures à prendre avant de quitter les lieux », quelle proposition est exacte ?",
        "options": [
          "2.1 Ces forces s'exercent lorsque l'arbre est tombé et repose sur un autre plan",
          "Les sangles de levage sont indispensables pour sortir un cheval ou un bovin tombé dans un trou, une piscine,…",
          "signaler la mise hors service de l'ascenseur,",
          "Dans le cas où une seconde lance (500 l/min.) est établie grâce à la division, la pression en sortie de pompe sera alors de 10 bars"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 5/ Les mesures à prendre avant de quitter les lieux."
      },
      {
        "question": "Concernant « 5/ Les mesures à prendre avant de quitter les lieux », quelle proposition est exacte ?",
        "options": [
          "à partir de bouteilles de gaz de 12kgs ou 3kgs",
          "Objectif : Savoir ouvrir une porte d'un véhicule sur le toit",
          "prendre les coordonnées de la société de dépannage pour les prévenir",
          "espèces protégées : faune sauvage captive; la détention d'espèces protégées est réglementée"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 5/ Les mesures à prendre avant de quitter les lieux."
      }
    ]
  },
  {
    "id": "qcm-div-serie-16",
    "title": "OD — Opérations diverses (DIV 1) — Série 16",
    "level": "niveau-1",
    "category": "operations",
    "questions": [
      {
        "question": "Concernant « 5/ Les mesures à prendre avant de quitter les lieux », quelle proposition est HORS sujet ?",
        "options": [
          "prendre les coordonnées de la société de dépannage pour les prévenir",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "ne pas rétablir le courant,",
          "5/ Les mesures à prendre avant de quitter les lieux"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 5/ Les mesures à prendre avant de quitter les lieux »."
      },
      {
        "question": "Concernant « 5/ Les mesures à prendre avant de quitter les lieux », quelle proposition est HORS sujet ?",
        "options": [
          "s'assurer de la fermeture des portes palières,",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "ne pas rétablir le courant,",
          "5/ Les mesures à prendre avant de quitter les lieux"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 5/ Les mesures à prendre avant de quitter les lieux »."
      },
      {
        "question": "Concernant « 5/ Les mesures à prendre avant de quitter les lieux », quelle proposition est HORS sujet ?",
        "options": [
          "prendre les coordonnées de la société de dépannage pour les prévenir",
          "Secours et sauvetage des personnes",
          "ne pas rétablir le courant,",
          "signaler la mise hors service de l'ascenseur,"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 5/ Les mesures à prendre avant de quitter les lieux »."
      },
      {
        "question": "Concernant « 5/ Les mesures à prendre avant de quitter les lieux », quelle proposition est HORS sujet ?",
        "options": [
          "signaler la mise hors service de l'ascenseur,",
          "Maintien de l'ordre",
          "prendre les coordonnées de la société de dépannage pour les prévenir",
          "5/ Les mesures à prendre avant de quitter les lieux"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 5/ Les mesures à prendre avant de quitter les lieux »."
      },
      {
        "question": "Concernant « 5/ Les mesures à prendre avant de quitter les lieux », quelle proposition est HORS sujet ?",
        "options": [
          "Rétablissement d'éclairage public",
          "ne pas rétablir le courant,",
          "s'assurer de la fermeture des portes palières,",
          "prendre les coordonnées de la société de dépannage pour les prévenir"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 5/ Les mesures à prendre avant de quitter les lieux »."
      },
      {
        "question": "Concernant « 5/ Les mesures à prendre avant de quitter les lieux », quelle proposition est HORS sujet ?",
        "options": [
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "5/ Les mesures à prendre avant de quitter les lieux",
          "ne pas rétablir le courant,",
          "prendre les coordonnées de la société de dépannage pour les prévenir"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 5/ Les mesures à prendre avant de quitter les lieux »."
      },
      {
        "question": "Concernant « Les actions à accomplir », quelle proposition est exacte ?",
        "options": [
          "Situation : Reconnaître les lieux (type de la machine, emplacement de la cabine et du local de la machinerie)",
          "Gants en caoutchouc renforcé",
          "pointes à écarter : sont les becs traditionnels mis en place sur l'écarteur. Ils sont munis de crantage externe et interne permettant une prise ou ...",
          "MANŒUVRE DE LA LANCE CANON MOUSSE"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Les actions à accomplir."
      },
      {
        "question": "Concernant « Les actions à accomplir », quelle proposition est exacte ?",
        "options": [
          "ne pas utiliser dans les locaux non ventilés,",
          "Écarter les pieds de façon à obtenir une meilleure mobilité,",
          "Le chef d'équipe déposes on matériel au point d'attaque, retourne au dévidoir et répercute l'ordre au servant. Le servant tire le dévidoir et le dé...",
          "S'assurer de l'état de la ou des personnes à l'intérieur, les rassurer de vive voix (recommander aux passagers de ne pas quitter la cabine)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Les actions à accomplir."
      },
      {
        "question": "Concernant « Les actions à accomplir », quelle proposition est exacte ?",
        "options": [
          "A partir de 50ppm, il nécessaire d'effectuer une évacuation pour une ventilation des lieux",
          "Utilisées par les C.C.F dans la lutte contre les feux de forët",
          "Utilisation des radios",
          "ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Les actions à accomplir."
      },
      {
        "question": "Concernant « Les actions à accomplir », quelle proposition est exacte ?",
        "options": [
          "amarrer la pompe au moyen d'une commande,",
          "Une fois le vitrage brisé, passez la main à l'intérieur pour déposer le vitrage entier vers l'extérieur",
          "Prendre au départ des secours deux postes portatifs pour une utilisation en réseau tactique à l'intérieur des locaux",
          "Conducteur et passager Calage 4 points minimum + 1 roue"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Les actions à accomplir."
      },
      {
        "question": "Concernant « Les actions à accomplir », quelle proposition est exacte ?",
        "options": [
          "3e et 4e lances (eau ou mousse)",
          "Inviter la (ou les) personne (s) à sortir",
          "Les victimes : impliquées non indemnes",
          "coupe l'éclairage et laisse la machine hors service,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Les actions à accomplir."
      },
      {
        "question": "Concernant « Les actions à accomplir », quelle proposition est exacte ?",
        "options": [
          "La lacette est une cordelette d'une longueur de 1,20 m. Elle permet de museler tous les animaux à museau pointu",
          "Noter le numéro du service d'assistance de la marque de l'ascenseur et le donner au chef d'agrès afin d'avertir le technicien de garde",
          "fait noter ou note l'identité des impliqués",
          "un système de traction au-dessus de la cage de l'ascenseur,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Les actions à accomplir."
      },
      {
        "question": "Concernant « Les actions à accomplir », quelle proposition est HORS sujet ?",
        "options": [
          "Noter le numéro du service d'assistance de la marque de l'ascenseur et le donner au chef d'agrès afin d'avertir le technicien de garde",
          "Prendre au départ des secours deux postes portatifs pour une utilisation en réseau tactique à l'intérieur des locaux",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "S'assurer de l'état de la ou des personnes à l'intérieur, les rassurer de vive voix (recommander aux passagers de ne pas quitter la cabine)"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Les actions à accomplir »."
      },
      {
        "question": "Concernant « Les actions à accomplir », quelle proposition est HORS sujet ?",
        "options": [
          "Noter le numéro du service d'assistance de la marque de l'ascenseur et le donner au chef d'agrès afin d'avertir le technicien de garde",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "Utilisation des radios",
          "Inviter la (ou les) personne (s) à sortir"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Les actions à accomplir »."
      },
      {
        "question": "Concernant « Les actions à accomplir », quelle proposition est HORS sujet ?",
        "options": [
          "S'assurer de l'état de la ou des personnes à l'intérieur, les rassurer de vive voix (recommander aux passagers de ne pas quitter la cabine)",
          "Utilisation des radios",
          "Situation : Reconnaître les lieux (type de la machine, emplacement de la cabine et du local de la machinerie)",
          "Secours et sauvetage des personnes"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Les actions à accomplir »."
      },
      {
        "question": "Concernant « Les actions à accomplir », quelle proposition est HORS sujet ?",
        "options": [
          "Inviter la (ou les) personne (s) à sortir",
          "Maintien de l'ordre",
          "Noter le numéro du service d'assistance de la marque de l'ascenseur et le donner au chef d'agrès afin d'avertir le technicien de garde",
          "Utilisation des radios"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Les actions à accomplir »."
      },
      {
        "question": "Concernant « Les actions à accomplir », quelle proposition est HORS sujet ?",
        "options": [
          "Utilisation des radios",
          "Rétablissement d'éclairage public",
          "Noter le numéro du service d'assistance de la marque de l'ascenseur et le donner au chef d'agrès afin d'avertir le technicien de garde",
          "Situation : Reconnaître les lieux (type de la machine, emplacement de la cabine et du local de la machinerie)"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Les actions à accomplir »."
      },
      {
        "question": "Concernant « Les actions à accomplir », quelle proposition est HORS sujet ?",
        "options": [
          "Noter le numéro du service d'assistance de la marque de l'ascenseur et le donner au chef d'agrès afin d'avertir le technicien de garde",
          "Situation : Reconnaître les lieux (type de la machine, emplacement de la cabine et du local de la machinerie)",
          "Prendre au départ des secours deux postes portatifs pour une utilisation en réseau tactique à l'intérieur des locaux",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Les actions à accomplir »."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est exacte ?",
        "options": [
          "Basculer l'écheveau sur le flanc et ramener le demi-raccord qui se trouvait au sol sur le manchon pour l'attacher avec la courroie",
          "Prévoir un périmètre de sécurité",
          "Ne nécessite pas de cabanon de machinerie",
          "Le gaz au Maroc est distribué soit"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — GAZ = DANGER."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est exacte ?",
        "options": [
          "MARCHE GENERALE DES OPERATIONS",
          "à partir de bouteilles de gaz de 12kgs ou 3kgs",
          "Liaison personnelle (hormis F)",
          "Le chef d'agrès se rend au point d'eau le plus approprié à la manoeuvre qu'il compte réaliser"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — GAZ = DANGER."
      }
    ]
  },
  {
    "id": "qcm-div-serie-17",
    "title": "OD — Opérations diverses (DIV 1) — Série 17",
    "level": "niveau-2",
    "category": "operations",
    "questions": [
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est exacte ?",
        "options": [
          "ou à partir de citernes de stockage, via un réseau simple",
          "Cale en bois ou balle souple",
          "le chef d'équipe dépose le matériel du panier. Le servant Maintient le dévidoir",
          "signaler la mise hors service de l'ascenseur,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — GAZ = DANGER."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est exacte ?",
        "options": [
          "vérifie la fermeture des portes palières à tous les étages,",
          "La pince à chat permet de saisir le cou du chat et de le serrer grâce à la poignée",
          "Insérer l'Halligan tool (pince coupant) afin de créer un jour de quelques centimètres",
          "LES RISQUES PRESENTES PAR LE GAZ"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — GAZ = DANGER."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est exacte ?",
        "options": [
          "L'agent de la Protection Civile doit mesurer le risque et rester attentif, dans le but de maintenir Sa sécurité et celle des autres intervenants",
          "Tous les moyens de calage et d'arrimage des grosses pièces seront impérativement établis avant le travail de tronçonnage",
          "à moteur-treuil planétaire,",
          "Il assure la surveillance des tuyaux de 45 mm et contrôle régulièrement le niveau d'émulseur et rend compte de la quantité restante"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — GAZ = DANGER."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est exacte ?",
        "options": [
          "Positionner le vérin contre la cale en bois et le montant",
          "L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE",
          "Port des Equipement de protections individuelles: tenue de feu compléte, +ARI",
          "Prendre au départ des secours deux postes portatifs pour une utilisation en réseau tactique à l'intérieur des locaux"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — GAZ = DANGER."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est exacte ?",
        "options": [
          "Proscrire toute manipulation intempestive de circuit électrique (sonnette, éclairage…)",
          "ouvre la porte à l'aide de la clé spéciale,",
          "MPE toujours placée à l'extérieur pour éviter tout risque d'intoxication,",
          "Intervention dans un rond point"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — GAZ = DANGER."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est exacte ?",
        "options": [
          "respecter le périmétre de sécurité",
          "poignée de maintien",
          "Déposer ensuite l'ensemble du pare-brise feuilleté",
          "Voici les schémas de balisage de différents types d'accidents"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — GAZ = DANGER."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est exacte ?",
        "options": [
          "De diminuer les pertes de charges et les \"coups de bélier\"",
          "La lance est engagée dans la boucle constituée par la courroie d'amarre",
          "allumer les projecteurs portatifs à l'extérieur de la zone de danger",
          "évacue les personnes en toute sécurité,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — GAZ = DANGER."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est exacte ?",
        "options": [
          "L'utilisation d'émulseur est toujours suivie d'un abondant rinçage",
          "cône de balisage Gilets rétro réfléchissants Panneaux triflashs",
          "s'équipe de son EPI complet,",
          "garder toujours le contact et agir en concertation"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — GAZ = DANGER."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est HORS sujet ?",
        "options": [
          "respecter le périmétre de sécurité",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "Proscrire toute manipulation intempestive de circuit électrique (sonnette, éclairage…)",
          "ou à partir de citernes de stockage, via un réseau simple"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « GAZ = DANGER »."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est HORS sujet ?",
        "options": [
          "garder toujours le contact et agir en concertation",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "surveiller l'environnement et prévenir le danger",
          "respecter le périmétre de sécurité"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « GAZ = DANGER »."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est HORS sujet ?",
        "options": [
          "Secours et sauvetage des personnes",
          "à partir de bouteilles de gaz de 12kgs ou 3kgs",
          "garder toujours le contact et agir en concertation",
          "Proscrire toute manipulation intempestive de circuit électrique (sonnette, éclairage…)"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « GAZ = DANGER »."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est HORS sujet ?",
        "options": [
          "Maintien de l'ordre",
          "Proscrire toute manipulation intempestive de circuit électrique (sonnette, éclairage…)",
          "réaliser les missions et rendre compte",
          "garder toujours le contact et agir en concertation"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « GAZ = DANGER »."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est HORS sujet ?",
        "options": [
          "réaliser les missions et rendre compte",
          "à partir de bouteilles de gaz de 12kgs ou 3kgs",
          "Rétablissement d'éclairage public",
          "LES RISQUES PRESENTES PAR LE GAZ"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « GAZ = DANGER »."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est HORS sujet ?",
        "options": [
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "Le gaz au Maroc est distribué soit",
          "LES RISQUES PRESENTES PAR LE GAZ",
          "Proscrire toute manipulation intempestive de circuit électrique (sonnette, éclairage…)"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « GAZ = DANGER »."
      },
      {
        "question": "Concernant « Le monoxyde de carbone », quelle proposition est exacte ?",
        "options": [
          "Une fois le vitrage brisé, passez la main à l'intérieur pour déposer le vitrage entier vers l'extérieur",
          "Comme il n'a pas d'odeur et qu'il est invisible à l'oeil, seul un appareil de mesures permet de donner l'alarme",
          "Si demi-pavillon arrière : couper selon la charte graphique les montants A et B",
          "Etablir deux lignes de 110 mm, permettant de disposer de deux points d'eau avancés (2divisions 100 / 3 x50) jusqu'à 1 000 m"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Le monoxyde de carbone."
      },
      {
        "question": "Concernant « Le monoxyde de carbone », quelle proposition est exacte ?",
        "options": [
          "Hébergement des sinistrés",
          "Jusqu'à 30ppm de CO, il n'y a pas de danger pour la santé des personnes",
          "Calage sur 3 points minimum 2 points coté victime + 1 une roue",
          "Matériel Calage (cousine pneumatique, Cales de bois ou pré-formatées Cordage, Tire-fort"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Le monoxyde de carbone."
      },
      {
        "question": "Concernant « Le monoxyde de carbone », quelle proposition est exacte ?",
        "options": [
          "effectue sa reconnaissance,",
          "A partir de 50ppm, il nécessaire d'effectuer une évacuation pour une ventilation des lieux",
          "Insérer l'écarteur dans le jour venant d'être créé",
          "En règle générale, ces deux types utilisent l'énergie électrique pour déplacer les cabines verticalement (moteur électrique continu ou alternatif)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Le monoxyde de carbone."
      },
      {
        "question": "Concernant « Le monoxyde de carbone », quelle proposition est exacte ?",
        "options": [
          "Objectif : Savoir ouvrir une porte d'un véhicule sur le toit",
          "La pression en sortie de pompe doit être de 8,75 bars, soit 9 bars pour un établissement de plain-pied",
          "Dès 100ppm, la protection respiratoire est indispensable pour les sapeurs-pompiers et l'évacuation des personnes obligatoires",
          "Ne jamais travailler seul, une personne doit se trouver à proximité en cas d'urgence"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Le monoxyde de carbone."
      },
      {
        "question": "Concernant « Le monoxyde de carbone », quelle proposition est HORS sujet ?",
        "options": [
          "A partir de 50ppm, il nécessaire d'effectuer une évacuation pour une ventilation des lieux",
          "Comme il n'a pas d'odeur et qu'il est invisible à l'oeil, seul un appareil de mesures permet de donner l'alarme",
          "Dès 100ppm, la protection respiratoire est indispensable pour les sapeurs-pompiers et l'évacuation des personnes obligatoires",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Le monoxyde de carbone »."
      },
      {
        "question": "Concernant « Le monoxyde de carbone », quelle proposition est HORS sujet ?",
        "options": [
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "Dès 100ppm, la protection respiratoire est indispensable pour les sapeurs-pompiers et l'évacuation des personnes obligatoires",
          "Jusqu'à 30ppm de CO, il n'y a pas de danger pour la santé des personnes",
          "Comme il n'a pas d'odeur et qu'il est invisible à l'oeil, seul un appareil de mesures permet de donner l'alarme"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Le monoxyde de carbone »."
      }
    ]
  },
  {
    "id": "qcm-div-serie-18",
    "title": "OD — Opérations diverses (DIV 1) — Série 18",
    "level": "niveau-avance",
    "category": "operations",
    "questions": [
      {
        "question": "Concernant « Le monoxyde de carbone », quelle proposition est HORS sujet ?",
        "options": [
          "Comme il n'a pas d'odeur et qu'il est invisible à l'oeil, seul un appareil de mesures permet de donner l'alarme",
          "A partir de 50ppm, il nécessaire d'effectuer une évacuation pour une ventilation des lieux",
          "Secours et sauvetage des personnes",
          "Dès 100ppm, la protection respiratoire est indispensable pour les sapeurs-pompiers et l'évacuation des personnes obligatoires"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Le monoxyde de carbone »."
      },
      {
        "question": "Concernant « Le monoxyde de carbone », quelle proposition est HORS sujet ?",
        "options": [
          "Comme il n'a pas d'odeur et qu'il est invisible à l'oeil, seul un appareil de mesures permet de donner l'alarme",
          "A partir de 50ppm, il nécessaire d'effectuer une évacuation pour une ventilation des lieux",
          "Jusqu'à 30ppm de CO, il n'y a pas de danger pour la santé des personnes",
          "Maintien de l'ordre"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Le monoxyde de carbone »."
      },
      {
        "question": "Concernant « Le monoxyde de carbone », quelle proposition est HORS sujet ?",
        "options": [
          "Dès 100ppm, la protection respiratoire est indispensable pour les sapeurs-pompiers et l'évacuation des personnes obligatoires",
          "Jusqu'à 30ppm de CO, il n'y a pas de danger pour la santé des personnes",
          "Comme il n'a pas d'odeur et qu'il est invisible à l'oeil, seul un appareil de mesures permet de donner l'alarme",
          "Rétablissement d'éclairage public"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Le monoxyde de carbone »."
      },
      {
        "question": "Concernant « Le monoxyde de carbone », quelle proposition est HORS sujet ?",
        "options": [
          "Dès 100ppm, la protection respiratoire est indispensable pour les sapeurs-pompiers et l'évacuation des personnes obligatoires",
          "Jusqu'à 30ppm de CO, il n'y a pas de danger pour la santé des personnes",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "Comme il n'a pas d'odeur et qu'il est invisible à l'oeil, seul un appareil de mesures permet de donner l'alarme"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Le monoxyde de carbone »."
      },
      {
        "question": "Concernant « Les dangers d'explosion », quelle proposition est exacte ?",
        "options": [
          "Ils s'assurent de l'ouverture complète des tubulures de la division",
          "Alarme 1 à 10% de la concentration LIE du méthane",
          "Stationner le véhicule à distance,",
          "Tous les moyens de calage et d'arrimage des grosses pièces seront impérativement établis avant le travail de tronçonnage"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Les dangers d'explosion."
      },
      {
        "question": "Concernant « Les dangers d'explosion », quelle proposition est exacte ?",
        "options": [
          "La pression en sortie de pompe doit être de 8,75 bars, soit 9 bars pour un établissement de plain-pied",
          "Distance entre l'installation",
          "Alarme 2 à 20% de la concentration LIE du méthane",
          "Hébergements des sinistres"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Les dangers d'explosion."
      },
      {
        "question": "Concernant « Les dangers d'explosion », quelle proposition est exacte ?",
        "options": [
          "Intervention dans un rond point",
          "Lecture MX2100 Essence SP GPL Butane Propane Gaz de ville / methane",
          "Ascenseur à moteur à attaque directe",
          "Hydraulique BI-PI et l'engin"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Les dangers d'explosion."
      },
      {
        "question": "Concernant « LA PROTECTION », quelle proposition est exacte ?",
        "options": [
          "Protection des sauveteurs : tenue de feu et ARI en nombre suffisant,",
          "La porte peut être entièrement déposée en insérant l'écarteur dans les brides supérieures",
          "ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA)",
          "Maintien de l'ordre"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LA PROTECTION."
      },
      {
        "question": "Concernant « LA PROTECTION », quelle proposition est exacte ?",
        "options": [
          "infiltration par remontée des eaux d'égouts ou de plans d'eau",
          "Protection de la population : Mesures d'évacuation et procédures de sensibilisation",
          "Il portera une attention toute particulière à celle-ci pour éviter qu'elle ne se déchausse et prive les deux engins de leur alimentation en eau",
          "Réalisée par un ruban de couleur et tenu par les services de police ou gendarmerie"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — LA PROTECTION."
      },
      {
        "question": "Concernant « LA PROTECTION », quelle proposition est exacte ?",
        "options": [
          "Bouchon du réservoir d'essence",
          "Pour évaluer ce volume, il faut faire le calcul suivant",
          "Ils sont réalisés au moyen des tuyaux de 110 mm pliés en écheveau",
          "Protection des victimes : victimes traitées et évacuées en urgence ,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — LA PROTECTION."
      },
      {
        "question": "Concernant « LA PROTECTION », quelle proposition est exacte ?",
        "options": [
          "La porte peut être entièrement déposée en insérant l'écarteur dans les brides supérieures",
          "Surveillance des victimes intoxiquées par inhalation de gaz toxique",
          "disposer le vide-cave bien à plat sur son embase,",
          "2 tuyaux de 45 x 20 m pliés en écheveau dont l'un est doté d'une lance à double régulation"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — LA PROTECTION."
      },
      {
        "question": "Concernant « LA PROTECTION », quelle proposition est HORS sujet ?",
        "options": [
          "Protection des sauveteurs : tenue de feu et ARI en nombre suffisant,",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "Surveillance des victimes intoxiquées par inhalation de gaz toxique",
          "Protection de la population : Mesures d'évacuation et procédures de sensibilisation"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LA PROTECTION »."
      },
      {
        "question": "Concernant « LA PROTECTION », quelle proposition est HORS sujet ?",
        "options": [
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "Protection de la population : Mesures d'évacuation et procédures de sensibilisation",
          "Protection des victimes : victimes traitées et évacuées en urgence ,",
          "Protection des sauveteurs : tenue de feu et ARI en nombre suffisant,"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LA PROTECTION »."
      },
      {
        "question": "Concernant « LA PROTECTION », quelle proposition est HORS sujet ?",
        "options": [
          "Protection des victimes : victimes traitées et évacuées en urgence ,",
          "Surveillance des victimes intoxiquées par inhalation de gaz toxique",
          "Protection de la population : Mesures d'évacuation et procédures de sensibilisation",
          "Secours et sauvetage des personnes"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LA PROTECTION »."
      },
      {
        "question": "Concernant « LA PROTECTION », quelle proposition est HORS sujet ?",
        "options": [
          "Protection des sauveteurs : tenue de feu et ARI en nombre suffisant,",
          "Protection des victimes : victimes traitées et évacuées en urgence ,",
          "Maintien de l'ordre",
          "Protection de la population : Mesures d'évacuation et procédures de sensibilisation"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LA PROTECTION »."
      },
      {
        "question": "Concernant « LA PROTECTION », quelle proposition est HORS sujet ?",
        "options": [
          "Surveillance des victimes intoxiquées par inhalation de gaz toxique",
          "Protection des victimes : victimes traitées et évacuées en urgence ,",
          "Rétablissement d'éclairage public",
          "Protection des sauveteurs : tenue de feu et ARI en nombre suffisant,"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LA PROTECTION »."
      },
      {
        "question": "Concernant « LA PROTECTION », quelle proposition est HORS sujet ?",
        "options": [
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "Protection des victimes : victimes traitées et évacuées en urgence ,",
          "Protection de la population : Mesures d'évacuation et procédures de sensibilisation",
          "Protection des sauveteurs : tenue de feu et ARI en nombre suffisant,"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LA PROTECTION »."
      },
      {
        "question": "Concernant « Zone d'exclusion », quelle proposition est exacte ?",
        "options": [
          "Un accident corporel (mortel et non mortel) de la circulation routière est un accident qui",
          "Périmètre de sécurité d'un rayon de 50 m déterminé et délimité",
          "Passer l'écarteur dans le jour de la porte au niveau du bas de caisse Ne pas se positionner entre l'outil et la portière",
          "2/ Les signes caractéristiques des animaux domestiques"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Zone d'exclusion."
      },
      {
        "question": "Concernant « Zone d'exclusion », quelle proposition est exacte ?",
        "options": [
          "Etablir deux lignes de 110 mm de longueur maximale de 200 m chacune, permettant de disposer de deux points d'eau avancés (2 divisions 100 / 3 x 50)",
          "On retrouve certains signes: érection des poils du dos, expressions du museau, positions de la queue et des oreilles",
          "Distance appliquée à priori dans un premier temps mais évolutive",
          "matériel de base+Dévidoir de droite (avec panier) matériels sur ordre matériel de base Dévidoir de droite (avec panier) matériels sur ordre matérie..."
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Zone d'exclusion."
      },
      {
        "question": "Concernant « Zone d'exclusion », quelle proposition est exacte ?",
        "options": [
          "Hydraulique BI-PI et l'engin",
          "Réalisée par un ruban de couleur et tenu par les services de police ou gendarmerie",
          "Les blessés légers : victimes ayant fait l'objet de soins médicaux mais n'ayant pas été admises comme patients à l'hôpital plus de 24 heures",
          "Cas particuliers (équipe à 3)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Zone d'exclusion."
      }
    ]
  },
  {
    "id": "qcm-div-serie-19",
    "title": "OD — Opérations diverses (DIV 1) — Série 19",
    "level": "niveau-1",
    "category": "operations",
    "questions": [
      {
        "question": "Concernant « Zone d'exclusion », quelle proposition est exacte ?",
        "options": [
          "garder toujours le contact et agir en concertation",
          "Prévoir un périmètre de sécurité",
          "Evacuation complète",
          "ne pas rétablir le courant,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Zone d'exclusion."
      },
      {
        "question": "Concernant « Zone d'exclusion », quelle proposition est exacte ?",
        "options": [
          "apprécier la nature et le nombre des locaux inondés ou menacés (étages inférieurs et supérieurs, locaux attenants)",
          "effectue la montée ou la descente en respectant les procédures selon le type d'ascenseur,",
          "Interdiction d'accès de la zone au public et aux personnels d'intervention sauf ceux strictement nécessaires",
          "bovin : coups de cornes, tentatives de charge, coups de pieds (postérieurs)"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Zone d'exclusion."
      },
      {
        "question": "Concernant « Zone d'exclusion », quelle proposition est exacte ?",
        "options": [
          "bloquer le système de freinage",
          "Ne pas allumer de feu pour réaliser la destruction mais pulvériser le produit insecticide à l'intérieur de la cheminée",
          "Contrôle entrées/sorties si possible",
          "Ils sont réalisés au moyen des tuyaux de 110 mm pliés en écheveau"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Zone d'exclusion."
      },
      {
        "question": "Concernant « Zone d'exclusion », quelle proposition est HORS sujet ?",
        "options": [
          "Evacuation complète",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "Réalisée par un ruban de couleur et tenu par les services de police ou gendarmerie",
          "Périmètre de sécurité d'un rayon de 50 m déterminé et délimité"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Zone d'exclusion »."
      },
      {
        "question": "Concernant « Zone d'exclusion », quelle proposition est HORS sujet ?",
        "options": [
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "Périmètre de sécurité d'un rayon de 50 m déterminé et délimité",
          "Réalisée par un ruban de couleur et tenu par les services de police ou gendarmerie",
          "Distance appliquée à priori dans un premier temps mais évolutive"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Zone d'exclusion »."
      },
      {
        "question": "Concernant « Zone d'exclusion », quelle proposition est HORS sujet ?",
        "options": [
          "Distance appliquée à priori dans un premier temps mais évolutive",
          "Secours et sauvetage des personnes",
          "Réalisée par un ruban de couleur et tenu par les services de police ou gendarmerie",
          "Contrôle entrées/sorties si possible"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Zone d'exclusion »."
      },
      {
        "question": "Concernant « Zone d'exclusion », quelle proposition est HORS sujet ?",
        "options": [
          "Interdiction d'accès de la zone au public et aux personnels d'intervention sauf ceux strictement nécessaires",
          "Contrôle entrées/sorties si possible",
          "Maintien de l'ordre",
          "Distance appliquée à priori dans un premier temps mais évolutive"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Zone d'exclusion »."
      },
      {
        "question": "Concernant « Zone d'exclusion », quelle proposition est HORS sujet ?",
        "options": [
          "Rétablissement d'éclairage public",
          "Réalisée par un ruban de couleur et tenu par les services de police ou gendarmerie",
          "Périmètre de sécurité d'un rayon de 50 m déterminé et délimité",
          "Evacuation complète"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Zone d'exclusion »."
      },
      {
        "question": "Concernant « Zone d'exclusion », quelle proposition est HORS sujet ?",
        "options": [
          "Distance appliquée à priori dans un premier temps mais évolutive",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "Réalisée par un ruban de couleur et tenu par les services de police ou gendarmerie",
          "Evacuation complète"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Zone d'exclusion »."
      },
      {
        "question": "Concernant « Matériel et produit », quelle proposition est exacte ?",
        "options": [
          "Le matériel utilisé pour la destruction est un pulvérisateur à pression préalable contenant un produit insecticide dont les qualités sont les suiva...",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "vérifier le bon déroulement de l'assèchement (crépine, évacuation),",
          "La pulvérisation d'insecticide doit être d'autant plus copieuse que l'ampleur de l'essaim est importante ou appréciée comme telle"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Matériel et produit."
      },
      {
        "question": "Concernant « Matériel et produit », quelle proposition est exacte ?",
        "options": [
          "Action pratiquement instantanée et irréversible par paralysie suivie de mort",
          "ovin, caprin (moutons, chèvres, béliers...) : coups de cornes, coups de tête",
          "Alarme 2 à 20% de la concentration LIE du méthane",
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Matériel et produit."
      },
      {
        "question": "Concernant « Matériel et produit », quelle proposition est exacte ?",
        "options": [
          "Réaliser le calage de chaque véhicule impliqué où une victime est présente",
          "Couper le contact avant d'effectuer un contrôle sur la chaîne",
          "Tirer le cordon de lancement jusqu'au déclenchement du premier allumage audible",
          "Non toxique pour les personnes, non corrosif"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Matériel et produit."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est exacte ?",
        "options": [
          "Toujours transporter l'appareil le moteur arrêté",
          "amarrer le matériel si l'épuisement se fait à profondeur importante",
          "Zone d'alimentation",
          "TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est exacte ?",
        "options": [
          "Le chef d'agrès et le conducteur",
          "Un accident corporel (mortel et non mortel) de la circulation routière est un accident qui",
          "Risques Effets Moyens de protection",
          "Jusqu'à 30ppm de CO, il n'y a pas de danger pour la santé des personnes"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est exacte ?",
        "options": [
          "Basculer l'écheveau sur le flanc et ramener le demi-raccord qui se trouvait au sol sur le manchon pour l'attacher avec la courroie",
          "laver et rincer le mùatériel après usage",
          "Les bovins : bague sanitaire (services vétérinaires)",
          "Intoxication par les vapeurs au contact direct du produit Malaises ponctuels Masque de protection niveau 1"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est exacte ?",
        "options": [
          "Effectuer la découpe de la partie inférieure",
          "Réactions cutanées au produit Réaction allergique localisée Gant en caoutchouc et lunettes de protection",
          "faire descendre l'hydro-éjecteur avec une commande en évitant les chocs (raccorder la commande au clapet de vidange),",
          "LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est exacte ?",
        "options": [
          "Noter le numéro du service d'assistance de la marque de l'ascenseur et le donner au chef d'agrès afin d'avertir le technicien de garde",
          "Coupe pare-brise Scie sabre Halligan tool ou outils de forcement",
          "FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION",
          "Chute de matériaux Blessures au niveau du crane pouvant entrainer des lésions irreversibles Casque à l'intérieur de la tenue de protection"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est exacte ?",
        "options": [
          "Chute de l'intervenant lors de travaux en hauteur Fractures diverses et traumatisme pouvant engager le pronostic vital Utilisation du LSPCC",
          "2e temps : il laisse sa MPVE au ralenti, en circuit fermé et la purge de temps en temps",
          "L'hydro-éjecteur est utilisé pour aspirer un volume d'eau limité et pour pomper à partir d'une nappe d'eau",
          "Tirer la porte au maximum dans son rail coulissant pour laisser la plus grande ouverture possible"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est exacte ?",
        "options": [
          "S'assurer de l'état de la ou des personnes à l'intérieur, les rassurer de vive voix (recommander aux passagers de ne pas quitter la cabine)",
          "Le chef d'agrès se rend au point d'eau le plus approprié à la manoeuvre qu'il compte réaliser",
          "La destruction doit toujours se dérouler à la tombée de la nuit, ou le matin avant le lever du soleil",
          "Écartement dans l'espace vitré"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est exacte ?",
        "options": [
          "Intervention dans un rond point",
          "A ces périodes de la journée tous les insectes ont alors rejoint leur nid",
          "Les chiens : tatouage ou puce, fichier central",
          "Conducteur et passager Calage 4 points minimum + 1 roue"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES."
      }
    ]
  },
  {
    "id": "qcm-div-serie-20",
    "title": "OD — Opérations diverses (DIV 1) — Série 20",
    "level": "niveau-2",
    "category": "operations",
    "questions": [
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est exacte ?",
        "options": [
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant",
          "toutes les manipulations se feront HORS-TENSION",
          "Il faut s'approcher du nid avec discrétion",
          "referme la porte palière et s'assure de sa bonne fermeture"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est exacte ?",
        "options": [
          "Réaliser le calage de chaque véhicule impliqué où une victime est présente",
          "laver et rincer le mùatériel après usage",
          "La tronçonneuse doit se tenir fermement à 2 mains pour en assurer le contrôle permanent,",
          "Stationner le véhicule à distance,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est HORS sujet ?",
        "options": [
          "Risques Effets Moyens de protection",
          "TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "Eventuellement, répéter l'opération le lendemain"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES »."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est HORS sujet ?",
        "options": [
          "Chute de matériaux Blessures au niveau du crane pouvant entrainer des lésions irreversibles Casque à l'intérieur de la tenue de protection",
          "Utiliser le lot de sauvetage si progression en hauteur",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "Vérifier mutuellement l'étanchéité des combinaisons,"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES »."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est HORS sujet ?",
        "options": [
          "Secours et sauvetage des personnes",
          "Chute de l'intervenant lors de travaux en hauteur Fractures diverses et traumatisme pouvant engager le pronostic vital Utilisation du LSPCC",
          "A ces périodes de la journée tous les insectes ont alors rejoint leur nid",
          "Utiliser le lot de sauvetage si progression en hauteur"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES »."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est HORS sujet ?",
        "options": [
          "Maintien de l'ordre",
          "La destruction doit toujours se dérouler à la tombée de la nuit, ou le matin avant le lever du soleil",
          "Les gouttelettes du produit se déposeront sur le nid et à l'entrée",
          "Intoxication par les vapeurs au contact direct du produit Malaises ponctuels Masque de protection niveau 1"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES »."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est HORS sujet ?",
        "options": [
          "La destruction doit toujours se dérouler à la tombée de la nuit, ou le matin avant le lever du soleil",
          "Chute de matériaux Blessures au niveau du crane pouvant entrainer des lésions irreversibles Casque à l'intérieur de la tenue de protection",
          "Rétablissement d'éclairage public",
          "Stationner le véhicule à distance,"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES »."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est HORS sujet ?",
        "options": [
          "TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "Intoxication par les vapeurs au contact direct du produit Malaises ponctuels Masque de protection niveau 1",
          "Vérifier mutuellement l'étanchéité des combinaisons,"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES »."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est exacte ?",
        "options": [
          "Il existe 2 types de pompes hydrauliques : thermique ou électrique",
          "veiller à ce que l'eau d'alimentation soit entre 6 et 8 bars",
          "Dès 100ppm, la protection respiratoire est indispensable pour les sapeurs-pompiers et l'évacuation des personnes obligatoires",
          "Ne pas pulvériser loin de l'orifice mais toujours dans l'entrée principale utilisée par les insectes"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Conseils."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est exacte ?",
        "options": [
          "vérifie la fermeture des portes palières à tous les étages,",
          "Noter le numéro du service d'assistance de la marque de l'ascenseur et le donner au chef d'agrès afin d'avertir le technicien de garde",
          "S'assurer de l'état de la ou des personnes à l'intérieur, les rassurer de vive voix (recommander aux passagers de ne pas quitter la cabine)",
          "La pulvérisation d'insecticide doit être d'autant plus copieuse que l'ampleur de l'essaim est importante ou appréciée comme telle"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Conseils."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est exacte ?",
        "options": [
          "Ne jamais frapper sur un tronc d'arbre renferment un essaim de guêpes ou de frelons",
          "Les bovins : bague sanitaire (services vétérinaires)",
          "citerne environ 500 litres",
          "garder toujours le contact et agir en concertation"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Conseils."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est exacte ?",
        "options": [
          "Se méfier des conduits de fumée désaffectés qui peuvent être en mauvais état",
          "LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION",
          "ZAL (zone d'alimentation) : elle regroupe différents points d'eau",
          "Pour les ascenseurs électriques"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Conseils."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est exacte ?",
        "options": [
          "à moteur à attaque directe (couramment appelé \"Gearless\" ou sans treuil),",
          "Ne pas allumer de feu pour réaliser la destruction mais pulvériser le produit insecticide à l'intérieur de la cheminée",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "Protection des victimes : victimes traitées et évacuées en urgence ,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Conseils."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est exacte ?",
        "options": [
          "Déposer ensuite l'ensemble du pare-brise feuilleté",
          "MARCHE GENERALE DES OPERATIONS",
          "Les blessés hospitalisés : victimes admises comme patients dans un hôpital plus de 24 heures",
          "Ne jamais utiliser d'essence pour détruire un nid"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Conseils."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est exacte ?",
        "options": [
          "En cas de piqûres multiples, demander le médecin",
          "Périmètre de sécurité d'un rayon de 50 m déterminé et délimité",
          "Déposer ensuite l'ensemble du pare-brise feuilleté",
          "Être toujours en mesure de maîtriser la machine,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Conseils."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est exacte ?",
        "options": [
          "Insérer l'écarteur dans le jour venant d'être créé",
          "Grille de protection du visage",
          "4- Déterminer la direction de la chute",
          "1- Identification du tronc à abattre"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Conseils."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est exacte ?",
        "options": [
          "Combinaison étanche aux insectes",
          "2 raccords d'injection",
          "suivant le type de motorisation précision au niveau de la vitesse et du déplacement",
          "Alarme 1 à 10% de la concentration LIE du méthane"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Conseils."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est exacte ?",
        "options": [
          "Trempé : Se dépose après scotchage à l'aide d'un pointeau choc",
          "Gants en caoutchouc renforcé",
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE",
          "Chute de matériaux Blessures au niveau du crane pouvant entrainer des lésions irreversibles Casque à l'intérieur de la tenue de protection"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Conseils."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est HORS sujet ?",
        "options": [
          "La pulvérisation d'insecticide doit être d'autant plus copieuse que l'ampleur de l'essaim est importante ou appréciée comme telle",
          "Ne pas pulvériser loin de l'orifice mais toujours dans l'entrée principale utilisée par les insectes",
          "En cas de piqûres multiples, demander le médecin",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Conseils »."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est HORS sujet ?",
        "options": [
          "Ne jamais frapper sur un tronc d'arbre renferment un essaim de guêpes ou de frelons",
          "Ne pas allumer de feu pour réaliser la destruction mais pulvériser le produit insecticide à l'intérieur de la cheminée",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "La pulvérisation d'insecticide doit être d'autant plus copieuse que l'ampleur de l'essaim est importante ou appréciée comme telle"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Conseils »."
      }
    ]
  },
  {
    "id": "qcm-div-serie-21",
    "title": "OD — Opérations diverses (DIV 1) — Série 21",
    "level": "niveau-avance",
    "category": "operations",
    "questions": [
      {
        "question": "Concernant « Conseils », quelle proposition est HORS sujet ?",
        "options": [
          "Ne pas allumer de feu pour réaliser la destruction mais pulvériser le produit insecticide à l'intérieur de la cheminée",
          "Secours et sauvetage des personnes",
          "En cas de piqûres multiples, demander le médecin",
          "Combinaison étanche aux insectes"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Conseils »."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est HORS sujet ?",
        "options": [
          "Pulvérisateur projetant de la poudre",
          "Grille de protection du visage",
          "Maintien de l'ordre",
          "Combinaison étanche aux insectes"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Conseils »."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est HORS sujet ?",
        "options": [
          "En cas de piqûres multiples, demander le médecin",
          "La pulvérisation d'insecticide doit être d'autant plus copieuse que l'ampleur de l'essaim est importante ou appréciée comme telle",
          "Rétablissement d'éclairage public",
          "Gants en caoutchouc renforcé"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Conseils »."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est HORS sujet ?",
        "options": [
          "Ne jamais frapper sur un tronc d'arbre renferment un essaim de guêpes ou de frelons",
          "Pulvérisateur projetant de la poudre",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "Ne pas allumer de feu pour réaliser la destruction mais pulvériser le produit insecticide à l'intérieur de la cheminée"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Conseils »."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est exacte ?",
        "options": [
          "On peut classer les espèces animales en 3 catégories",
          "Il faut s'approcher du nid avec discrétion",
          "débrancher la prise avant toute manipulation,",
          "Insérer une cale ou la balle en mousse dans la poignée intérieure de la porte afin de faciliter le déblocage de cette dernière"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — I/ Les espèces animales."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est exacte ?",
        "options": [
          "S'assurer de l'état de la ou des personnes à l'intérieur, les rassurer de vive voix (recommander aux passagers de ne pas quitter la cabine)",
          "regarder s'il y a un transformateur électrique à l'intérieur des locaux sinistrés",
          "ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS",
          "espèces qui vivent dans la nature et qui ne sont pas habituées au contact avec l'homme"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — I/ Les espèces animales."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENTS D'ATTAQUE SECURITE",
          "bloquer le système de freinage",
          "espèces protégées : faune sauvage captive; la détention d'espèces protégées est réglementée",
          "Accident sur la voie de sortie"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — I/ Les espèces animales."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est exacte ?",
        "options": [
          "Soulever le pavillon et l'évacuer vers la zone de dépôt des structures",
          "Zone d'alimentation",
          "s'assurer de la fermeture des portes palières,",
          "espèces domestiques : espèces communes apprivoisées par l'homme"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — I/ Les espèces animales."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est exacte ?",
        "options": [
          "L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE",
          "Pression à la lance : 6 bars (lance non autorégulée)",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'eau et de l'air",
          "2/ Les signes caractéristiques des animaux domestiques"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — I/ Les espèces animales."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est exacte ?",
        "options": [
          "Inviter la (ou les) personne (s) à sortir",
          "La pulvérisation d'insecticide doit être d'autant plus copieuse que l'ampleur de l'essaim est importante ou appréciée comme telle",
          "Les chiens : tatouage ou puce, fichier central",
          "Port des Equipement de protections individuelles: tenue de feu compléte, +ARI"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — I/ Les espèces animales."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est exacte ?",
        "options": [
          "Etablir deux lignes de 110 mm, permettant de disposer de deux points d'eau avancés (2divisions 100 / 3 x50) jusqu'à 1 000 m",
          "2 clés tricoises de 100 mm CA ou BA",
          "brancher l'appareil dans un autre local que le local inondé, sur une prise reliée à la terre,",
          "Les bovins : bague sanitaire (services vétérinaires)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — I/ Les espèces animales."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est exacte ?",
        "options": [
          "1re et 2e lance (eau ou mousse)",
          "Les chevaux : livret signalétique et puce électronique (pour les chevaux de course)",
          "Les 2 parties jaunes sur la carrosserie. Cela permet de ne pas passer la main à travers la vitre",
          "Soulever le pavillon et l'évacuer vers la zone de dépôt des structures"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — I/ Les espèces animales."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est exacte ?",
        "options": [
          "couper le courant au niveau de l'interrupteur général situé dans le local machinerie sauf éclairage de la cabine,",
          "bovin : coups de cornes, tentatives de charge, coups de pieds (postérieurs)",
          "Elle est fixe ou semi-stationnaire dans le V.S.R, et peut disposer ou non de 2 dévidoirs équipés de flexibles",
          "Relais (engin, motopompe, VEDI…)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — I/ Les espèces animales."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est exacte ?",
        "options": [
          "L'établissement de la ligne d'attaque (LA) est réalisé avec 3 tuyaux de 70 x 20 m (60 m) et 2 tuyaux de 45 x 20 m (40 m), soit une longueur de 100 m",
          "Le chef d'équipe déposes on matériel au point d'attaque, retourne au dévidoir et répercute l'ordre au servant. Le servant tire le dévidoir et le dé...",
          "ovin, caprin (moutons, chèvres, béliers...) : coups de cornes, coups de tête",
          "Faire assurer l'entretien des tronçonneuses dès le retour,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — I/ Les espèces animales."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est HORS sujet ?",
        "options": [
          "porcin : morsures, tentatives de charge (sanglier)",
          "chien : morsures chat : morsures, griffures",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "espèces domestiques : espèces communes apprivoisées par l'homme"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « I/ Les espèces animales »."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est HORS sujet ?",
        "options": [
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "2/ Les signes caractéristiques des animaux domestiques",
          "espèces protégées : faune sauvage captive; la détention d'espèces protégées est réglementée",
          "porcin : morsures, tentatives de charge (sanglier)"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « I/ Les espèces animales »."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est HORS sujet ?",
        "options": [
          "On peut classer les espèces animales en 3 catégories",
          "Secours et sauvetage des personnes",
          "porcin : morsures, tentatives de charge (sanglier)",
          "ovin, caprin (moutons, chèvres, béliers...) : coups de cornes, coups de tête"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « I/ Les espèces animales »."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est HORS sujet ?",
        "options": [
          "bovin : coups de cornes, tentatives de charge, coups de pieds (postérieurs)",
          "2/ Les signes caractéristiques des animaux domestiques",
          "Maintien de l'ordre",
          "chien : morsures chat : morsures, griffures"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « I/ Les espèces animales »."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est HORS sujet ?",
        "options": [
          "Rétablissement d'éclairage public",
          "chien : morsures chat : morsures, griffures",
          "espèces protégées : faune sauvage captive; la détention d'espèces protégées est réglementée",
          "espèces qui vivent dans la nature et qui ne sont pas habituées au contact avec l'homme"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « I/ Les espèces animales »."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est HORS sujet ?",
        "options": [
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "2/ Les signes caractéristiques des animaux domestiques",
          "espèces domestiques : espèces communes apprivoisées par l'homme",
          "espèces protégées : faune sauvage captive; la détention d'espèces protégées est réglementée"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « I/ Les espèces animales »."
      }
    ]
  },
  {
    "id": "qcm-div-serie-22",
    "title": "OD — Opérations diverses (DIV 1) — Série 22",
    "level": "niveau-1",
    "category": "operations",
    "questions": [
      {
        "question": "Concernant « 1/Les carnivores/ », quelle proposition est exacte ?",
        "options": [
          "toujours éteindre le moteur avant de faire le plein d'essence,",
          "Le lasso permet de maîtriser les chiens ou les chats",
          "Toujours travailler avec une chaîne bien affûtée",
          "transporter l'appareil debout,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 1/Les carnivores/."
      },
      {
        "question": "Concernant « 1/Les carnivores/ », quelle proposition est exacte ?",
        "options": [
          "Un commandement d'exécution",
          "La lacette est une cordelette d'une longueur de 1,20 m. Elle permet de museler tous les animaux à museau pointu",
          "débrancher la prise avant toute manipulation,",
          "Si besoin, terminer l'ouverture de porte en insérant l'écarteur dans l'espace créé après déformation"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 1/Les carnivores/."
      },
      {
        "question": "Concernant « 1/Les carnivores/ », quelle proposition est exacte ?",
        "options": [
          "image: schéma de calage sur 4 points",
          "La cage est indispensable pour soigner ou transporter le chien ou le chat capturé",
          "ZAL (zone d'alimentation) : elle regroupe différents points d'eau",
          "Stationner le véhicule à distance,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 1/Les carnivores/."
      },
      {
        "question": "Concernant « 1/Les carnivores/ », quelle proposition est exacte ?",
        "options": [
          "Ascenseur à moteur à attaque directe",
          "Ne pas pulvériser loin de l'orifice mais toujours dans l'entrée principale utilisée par les insectes",
          "La pince à chat permet de saisir le cou du chat et de le serrer grâce à la poignée",
          "Eventuellement, répéter l'opération le lendemain"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1/Les carnivores/."
      },
      {
        "question": "Concernant « 1/Les carnivores/ », quelle proposition est exacte ?",
        "options": [
          "Les gouttelettes du produit se déposeront sur le nid et à l'entrée",
          "2.1 Ces forces s'exercent lorsque l'arbre est tombé et repose sur un autre plan",
          "La mouchette est un instrument de contention qui permet de tenir l'animal par le nez",
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1/Les carnivores/."
      },
      {
        "question": "Concernant « 1/Les carnivores/ », quelle proposition est exacte ?",
        "options": [
          "Objectif : Savoir identifier et déposer un pare brise (collé/jointé) en toute sécurité",
          "se rend à la machinerie",
          "Les sangles de levage sont indispensables pour sortir un cheval ou un bovin tombé dans un trou, une piscine,…",
          "les ascenseurs à traction à câble,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1/Les carnivores/."
      },
      {
        "question": "Concernant « 1/Les carnivores/ », quelle proposition est HORS sujet ?",
        "options": [
          "Les sangles de levage sont indispensables pour sortir un cheval ou un bovin tombé dans un trou, une piscine,…",
          "La cage est indispensable pour soigner ou transporter le chien ou le chat capturé",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "La pince à chat permet de saisir le cou du chat et de le serrer grâce à la poignée"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1/Les carnivores/ »."
      },
      {
        "question": "Concernant « 1/Les carnivores/ », quelle proposition est HORS sujet ?",
        "options": [
          "La mouchette est un instrument de contention qui permet de tenir l'animal par le nez",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "Le lasso permet de maîtriser les chiens ou les chats",
          "La pince à chat permet de saisir le cou du chat et de le serrer grâce à la poignée"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1/Les carnivores/ »."
      },
      {
        "question": "Concernant « 1/Les carnivores/ », quelle proposition est HORS sujet ?",
        "options": [
          "Secours et sauvetage des personnes",
          "La lacette est une cordelette d'une longueur de 1,20 m. Elle permet de museler tous les animaux à museau pointu",
          "La mouchette est un instrument de contention qui permet de tenir l'animal par le nez",
          "La pince à chat permet de saisir le cou du chat et de le serrer grâce à la poignée"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1/Les carnivores/ »."
      },
      {
        "question": "Concernant « 1/Les carnivores/ », quelle proposition est HORS sujet ?",
        "options": [
          "La pince à chat permet de saisir le cou du chat et de le serrer grâce à la poignée",
          "La lacette est une cordelette d'une longueur de 1,20 m. Elle permet de museler tous les animaux à museau pointu",
          "Maintien de l'ordre",
          "La mouchette est un instrument de contention qui permet de tenir l'animal par le nez"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1/Les carnivores/ »."
      },
      {
        "question": "Concernant « 1/Les carnivores/ », quelle proposition est HORS sujet ?",
        "options": [
          "Le lasso permet de maîtriser les chiens ou les chats",
          "La pince à chat permet de saisir le cou du chat et de le serrer grâce à la poignée",
          "Rétablissement d'éclairage public",
          "Les sangles de levage sont indispensables pour sortir un cheval ou un bovin tombé dans un trou, une piscine,…"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1/Les carnivores/ »."
      },
      {
        "question": "Concernant « 1/Les carnivores/ », quelle proposition est HORS sujet ?",
        "options": [
          "La cage est indispensable pour soigner ou transporter le chien ou le chat capturé",
          "Les sangles de levage sont indispensables pour sortir un cheval ou un bovin tombé dans un trou, une piscine,…",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "La mouchette est un instrument de contention qui permet de tenir l'animal par le nez"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1/Les carnivores/ »."
      },
      {
        "question": "Concernant « 3/ Les reptiles », quelle proposition est exacte ?",
        "options": [
          "Le crochet à serpent permet de capturer les serpents sans les blesser et sans danger. C'est une tige métallique de 50 cm à 1 m, coudée à son extrémité",
          "L'agent de la Protection Civile doit mesurer le risque et rester attentif, dans le but de maintenir Sa sécurité et celle des autres intervenants",
          "Identification des victimes",
          "Réaliser l'ouverture complète si nécessaire en plaçant l'écarteur au niveau des charnières"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 3/ Les reptiles."
      },
      {
        "question": "Concernant « 3/ Les reptiles », quelle proposition est exacte ?",
        "options": [
          "remet le matériel en place (échelle, clé machinerie) et rejoint son équipier,",
          "4/ Rôle du Chef d'agrès et de l'équipier",
          "La pince à serpent permet de saisir le serpent au plus près de la tête en le maintenant à distance",
          "évacue les personnes en toute sécurité,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 3/ Les reptiles."
      },
      {
        "question": "Concernant « 3/ Les reptiles », quelle proposition est exacte ?",
        "options": [
          "2.1 Ces forces s'exercent lorsque l'arbre est tombé et repose sur un autre plan",
          "Le vide-cave est utilisé pour aspirer l'eau des caves, des its, des réservoirs",
          "La glacière permet de placer le serpent après sa capture. On peut ainsi le transporter en toute sécurité",
          "Les ascenseurs à traction à câbles sont les types d'ascenseurs que l'on rencontre le plus, notamment dans les bâtiments de bureaux"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 3/ Les reptiles."
      },
      {
        "question": "Concernant « 3/ Les reptiles », quelle proposition est exacte ?",
        "options": [
          "La couverture est utilisée pour la contention des lézards, des iguanes. En jetant la couverture sur l'animal, il va se sentir caché et va se calmer",
          "matériel de base+Dévidoir de droite (avec panier) matériels sur ordre matériel de base Dévidoir de droite (avec panier) matériels sur ordre matérie...",
          "L'établissement d'alimentation permet d'alimenter la pompe de l'engin",
          "Ils sont raccordés directement à l'engin-pompe ou à un établissement de manoeuvre"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 3/ Les reptiles."
      },
      {
        "question": "Concernant « 3/ Les reptiles », quelle proposition est HORS sujet ?",
        "options": [
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "La pince à serpent permet de saisir le serpent au plus près de la tête en le maintenant à distance",
          "Le crochet à serpent permet de capturer les serpents sans les blesser et sans danger. C'est une tige métallique de 50 cm à 1 m, coudée à son extrémité",
          "La glacière permet de placer le serpent après sa capture. On peut ainsi le transporter en toute sécurité"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 3/ Les reptiles »."
      },
      {
        "question": "Concernant « 3/ Les reptiles », quelle proposition est HORS sujet ?",
        "options": [
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "Le crochet à serpent permet de capturer les serpents sans les blesser et sans danger. C'est une tige métallique de 50 cm à 1 m, coudée à son extrémité",
          "La couverture est utilisée pour la contention des lézards, des iguanes. En jetant la couverture sur l'animal, il va se sentir caché et va se calmer",
          "La pince à serpent permet de saisir le serpent au plus près de la tête en le maintenant à distance"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 3/ Les reptiles »."
      },
      {
        "question": "Concernant « 3/ Les reptiles », quelle proposition est HORS sujet ?",
        "options": [
          "La glacière permet de placer le serpent après sa capture. On peut ainsi le transporter en toute sécurité",
          "Secours et sauvetage des personnes",
          "Le crochet à serpent permet de capturer les serpents sans les blesser et sans danger. C'est une tige métallique de 50 cm à 1 m, coudée à son extrémité",
          "La couverture est utilisée pour la contention des lézards, des iguanes. En jetant la couverture sur l'animal, il va se sentir caché et va se calmer"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 3/ Les reptiles »."
      },
      {
        "question": "Concernant « 3/ Les reptiles », quelle proposition est HORS sujet ?",
        "options": [
          "La couverture est utilisée pour la contention des lézards, des iguanes. En jetant la couverture sur l'animal, il va se sentir caché et va se calmer",
          "La glacière permet de placer le serpent après sa capture. On peut ainsi le transporter en toute sécurité",
          "Maintien de l'ordre",
          "Le crochet à serpent permet de capturer les serpents sans les blesser et sans danger. C'est une tige métallique de 50 cm à 1 m, coudée à son extrémité"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 3/ Les reptiles »."
      }
    ]
  },
  {
    "id": "qcm-div-serie-23",
    "title": "OD — Opérations diverses (DIV 1) — Série 23",
    "level": "niveau-2",
    "category": "operations",
    "questions": [
      {
        "question": "Concernant « 3/ Les reptiles », quelle proposition est HORS sujet ?",
        "options": [
          "Le crochet à serpent permet de capturer les serpents sans les blesser et sans danger. C'est une tige métallique de 50 cm à 1 m, coudée à son extrémité",
          "Rétablissement d'éclairage public",
          "La glacière permet de placer le serpent après sa capture. On peut ainsi le transporter en toute sécurité",
          "La couverture est utilisée pour la contention des lézards, des iguanes. En jetant la couverture sur l'animal, il va se sentir caché et va se calmer"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 3/ Les reptiles »."
      },
      {
        "question": "Concernant « 3/ Les reptiles », quelle proposition est HORS sujet ?",
        "options": [
          "Le crochet à serpent permet de capturer les serpents sans les blesser et sans danger. C'est une tige métallique de 50 cm à 1 m, coudée à son extrémité",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "La glacière permet de placer le serpent après sa capture. On peut ainsi le transporter en toute sécurité",
          "La pince à serpent permet de saisir le serpent au plus près de la tête en le maintenant à distance"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 3/ Les reptiles »."
      },
      {
        "question": "Concernant « 1/ Situations diverses », quelle proposition est exacte ?",
        "options": [
          "MISSION RISQUES CONDUITE A TENIR",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "utiliser un crochet à serpent",
          "ne jamais immerger la fiche du câble,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 1/ Situations diverses."
      },
      {
        "question": "Concernant « 1/ Situations diverses », quelle proposition est exacte ?",
        "options": [
          "Les pompes électriques",
          "LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR",
          "chien blessé, accidenté ou inanimé morsures Approcher l'animal par l'arrière pour apprécier ses réactions. Museler le chien, le mettre sur un brancard",
          "sont utilisés en général pour satisfaire des déplacements relativement courts de l'ordre de 15 à 18 m max"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1/ Situations diverses."
      },
      {
        "question": "Concernant « 1/ Situations diverses », quelle proposition est exacte ?",
        "options": [
          "Prévoir un périmètre de sécurité",
          "chien dans une voiture accidentée morsures Faire intervenir un animalier. Attraper l'animal avec un lasso et le faire sortir",
          "Travailler dans le sens classique de l'ouverture de la porte",
          "1- Identification du tronc à abattre"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 1/ Situations diverses."
      },
      {
        "question": "Concernant « 1/ Situations diverses », quelle proposition est exacte ?",
        "options": [
          "efficacité énergétique importante",
          "chien méchant menaçant la sécurité morsure Faire intervenir un animalier. Maîtriser l'animal avec un lasso ou un filet. Faire intervenir les forces...",
          "Objectif : Savoir Ouvrir une porte coulissante",
          "Etablir une ligne de 110 mm de longueur maximale de 400 m, permet de disposer d'un point d'eau avancé (division 100 / 3 x 50)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 1/ Situations diverses."
      },
      {
        "question": "Concernant « 1/ Situations diverses », quelle proposition est exacte ?",
        "options": [
          "De diminuer les pertes de charges et les \"coups de bélier\"",
          "ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES",
          "chat perché au sommet d'un arbre. griffure morsure Ce n'est pas une urgence",
          "La MPVE (Motopompe Volumétrique Emulseur)"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1/ Situations diverses."
      },
      {
        "question": "Concernant « 1/ Situations diverses », quelle proposition est HORS sujet ?",
        "options": [
          "chien dans une voiture accidentée morsures Faire intervenir un animalier. Attraper l'animal avec un lasso et le faire sortir",
          "chat perché au sommet d'un arbre. griffure morsure Ce n'est pas une urgence",
          "MISSION RISQUES CONDUITE A TENIR",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1/ Situations diverses »."
      },
      {
        "question": "Concernant « 1/ Situations diverses », quelle proposition est HORS sujet ?",
        "options": [
          "chien dans une voiture accidentée morsures Faire intervenir un animalier. Attraper l'animal avec un lasso et le faire sortir",
          "chien blessé, accidenté ou inanimé morsures Approcher l'animal par l'arrière pour apprécier ses réactions. Museler le chien, le mettre sur un brancard",
          "chat perché au sommet d'un arbre. griffure morsure Ce n'est pas une urgence",
          "La reconnaissance doit aussi permettre de décider s'il faut"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1/ Situations diverses »."
      },
      {
        "question": "Concernant « 1/ Situations diverses », quelle proposition est HORS sujet ?",
        "options": [
          "chien méchant menaçant la sécurité morsure Faire intervenir un animalier. Maîtriser l'animal avec un lasso ou un filet. Faire intervenir les forces...",
          "Secours et sauvetage des personnes",
          "chien blessé, accidenté ou inanimé morsures Approcher l'animal par l'arrière pour apprécier ses réactions. Museler le chien, le mettre sur un brancard",
          "MISSION RISQUES CONDUITE A TENIR"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1/ Situations diverses »."
      },
      {
        "question": "Concernant « 1/ Situations diverses », quelle proposition est HORS sujet ?",
        "options": [
          "chien dans une voiture accidentée morsures Faire intervenir un animalier. Attraper l'animal avec un lasso et le faire sortir",
          "Maintien de l'ordre",
          "chien méchant menaçant la sécurité morsure Faire intervenir un animalier. Maîtriser l'animal avec un lasso ou un filet. Faire intervenir les forces...",
          "chat perché au sommet d'un arbre. griffure morsure Ce n'est pas une urgence"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1/ Situations diverses »."
      },
      {
        "question": "Concernant « 1/ Situations diverses », quelle proposition est HORS sujet ?",
        "options": [
          "chien blessé, accidenté ou inanimé morsures Approcher l'animal par l'arrière pour apprécier ses réactions. Museler le chien, le mettre sur un brancard",
          "chien méchant menaçant la sécurité morsure Faire intervenir un animalier. Maîtriser l'animal avec un lasso ou un filet. Faire intervenir les forces...",
          "Rétablissement d'éclairage public",
          "chien dans une voiture accidentée morsures Faire intervenir un animalier. Attraper l'animal avec un lasso et le faire sortir"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1/ Situations diverses »."
      },
      {
        "question": "Concernant « 1/ Situations diverses », quelle proposition est HORS sujet ?",
        "options": [
          "chien dans une voiture accidentée morsures Faire intervenir un animalier. Attraper l'animal avec un lasso et le faire sortir",
          "chat perché au sommet d'un arbre. griffure morsure Ce n'est pas une urgence",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "MISSION RISQUES CONDUITE A TENIR"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 1/ Situations diverses »."
      },
      {
        "question": "Concernant « Capture de reptile », quelle proposition est exacte ?",
        "options": [
          "Les agents de la Protection Civile ont à leur disposition un certain nombre de matériels d'épuisement",
          "se protéger les mains par des gants",
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant",
          "surveiller l'environnement et prévenir le danger"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Capture de reptile."
      },
      {
        "question": "Concernant « Capture de reptile », quelle proposition est exacte ?",
        "options": [
          "chat perché au sommet d'un arbre. griffure morsure Ce n'est pas une urgence",
          "Fiche individuelle de signalement des incidents et agressions",
          "L'établissement de la ligne d'attaque (LA) est réalisé avec 3 tuyaux de 70 x 20 m (60 m) et 2 tuyaux de 45 x 20 m (40 m), soit une longueur de 100 m",
          "engager le minimum de personnel"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Capture de reptile."
      },
      {
        "question": "Concernant « Capture de reptile », quelle proposition est exacte ?",
        "options": [
          "respecter les consignes données au départ",
          "Tirer le cordon de lancement jusqu'au déclenchement du premier allumage audible",
          "définir avec précision les moyens nécessaires pour effectuer l'opération (motopompe, longueur et diamètre des tuyaux d'alimentation et de refouleme...",
          "faire éloigner les curieux"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Capture de reptile."
      },
      {
        "question": "Concernant « Capture de reptile », quelle proposition est exacte ?",
        "options": [
          "MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION",
          "utiliser un crochet à serpent",
          "en version standard, nécessite un cabanon technique en toiture",
          "course verticale limitée à une hauteur entre 15 et 18 m"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Capture de reptile."
      },
      {
        "question": "Concernant « Capture de reptile », quelle proposition est exacte ?",
        "options": [
          "L'établissement d'alimentation permet d'alimenter la pompe de l'engin",
          "l'équipier assure la protection de son binôme à l'aide d'un bâton",
          "ALIMENTATION ET PRESSION A LA POMPE",
          "Ils établissent les tuyaux de 45 mm des raccords d'injection vers la MPVE (1 tuyau directement raccordé sur la MPVE avant la division 50x2x50)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Capture de reptile."
      },
      {
        "question": "Concernant « Capture de reptile », quelle proposition est exacte ?",
        "options": [
          "Liaison personnelle",
          "placer le reptile dans un sac",
          "Utilisées par les C.C.F dans la lutte contre les feux de forët",
          "exigence très importante sur l'entretien"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Capture de reptile."
      },
      {
        "question": "Concernant « Capture de reptile », quelle proposition est exacte ?",
        "options": [
          "Une lance (eau ou mousse) et la LDT",
          "Soulever le pavillon et l'évacuer vers la zone de dépôt des structures",
          "Les tués : toute personne qui décède sur le coup ou dans les trente jours qui suivent l'accident",
          "le remettre aux forces de l'ordre, au vétérinaire"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Capture de reptile."
      }
    ]
  },
  {
    "id": "qcm-div-serie-24",
    "title": "OD — Opérations diverses (DIV 1) — Série 24",
    "level": "niveau-avance",
    "category": "operations",
    "questions": [
      {
        "question": "Concernant « Capture de reptile », quelle proposition est HORS sujet ?",
        "options": [
          "faire éloigner les curieux",
          "engager le minimum de personnel",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "placer le reptile dans un sac"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Capture de reptile »."
      },
      {
        "question": "Concernant « Capture de reptile », quelle proposition est HORS sujet ?",
        "options": [
          "le remettre aux forces de l'ordre, au vétérinaire",
          "se protéger les mains par des gants",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "faire éloigner les curieux"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Capture de reptile »."
      },
      {
        "question": "Concernant « Capture de reptile », quelle proposition est HORS sujet ?",
        "options": [
          "utiliser un crochet à serpent",
          "l'équipier assure la protection de son binôme à l'aide d'un bâton",
          "Secours et sauvetage des personnes",
          "se protéger les mains par des gants"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Capture de reptile »."
      },
      {
        "question": "Concernant « Capture de reptile », quelle proposition est HORS sujet ?",
        "options": [
          "placer le reptile dans un sac",
          "faire éloigner les curieux",
          "utiliser un crochet à serpent",
          "Maintien de l'ordre"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Capture de reptile »."
      },
      {
        "question": "Concernant « Capture de reptile », quelle proposition est HORS sujet ?",
        "options": [
          "placer le reptile dans un sac",
          "Rétablissement d'éclairage public",
          "l'équipier assure la protection de son binôme à l'aide d'un bâton",
          "utiliser un crochet à serpent"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Capture de reptile »."
      },
      {
        "question": "Concernant « Capture de reptile », quelle proposition est HORS sujet ?",
        "options": [
          "le remettre aux forces de l'ordre, au vétérinaire",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "faire éloigner les curieux",
          "placer le reptile dans un sac"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Capture de reptile »."
      },
      {
        "question": "Concernant « Le chien », quelle proposition est exacte ?",
        "options": [
          "Il assure la surveillance des tuyaux de 45 mm et contrôle régulièrement le niveau d'émulseur et rend compte de la quantité restante",
          "On retrouve certains signes: érection des poils du dos, expressions du museau, positions de la queue et des oreilles",
          "Zone d'alimentation",
          "Réaction immédiate, Message d'ambiance complet, Demande de renfort"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Le chien."
      },
      {
        "question": "Concernant « Le chien », quelle proposition est exacte ?",
        "options": [
          "ne pas rétablir le courant,",
          "s'assurer de la fermeture des portes palières,",
          "Pour aborder un chien, l'homme doit se faire considérer comme l'individu dominant, l'animal adoptera alors une attitude de soumission",
          "De porter la puissance hydraulique à 1 000 l/min. par l'établissement d'une division50/2x 50"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Le chien."
      },
      {
        "question": "Concernant « Le chien », quelle proposition est exacte ?",
        "options": [
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "Les blessés hospitalisés : victimes admises comme patients dans un hôpital plus de 24 heures",
          "Déposer ensuite l'ensemble du pare-brise feuilleté",
          "Chiens – Chats ne pas fixer l'animal, ne pas s'approcher trop vite et respecter la «zone de fuite»"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Le chien."
      },
      {
        "question": "Concernant « Le chien », quelle proposition est exacte ?",
        "options": [
          "2 raccords d'injection",
          "attention à ne pas aggraver la situation par l'apport d'eau,",
          "Ne pas rentrer dans la «zone critique» pour éviter l'affrontement",
          "4/ Rôle du Chef d'agrès et de l'équipier"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Le chien."
      },
      {
        "question": "Concernant « Le chien », quelle proposition est HORS sujet ?",
        "options": [
          "Chiens – Chats ne pas fixer l'animal, ne pas s'approcher trop vite et respecter la «zone de fuite»",
          "Pour aborder un chien, l'homme doit se faire considérer comme l'individu dominant, l'animal adoptera alors une attitude de soumission",
          "On retrouve certains signes: érection des poils du dos, expressions du museau, positions de la queue et des oreilles",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Le chien »."
      },
      {
        "question": "Concernant « Le chien », quelle proposition est HORS sujet ?",
        "options": [
          "On retrouve certains signes: érection des poils du dos, expressions du museau, positions de la queue et des oreilles",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "Ne pas rentrer dans la «zone critique» pour éviter l'affrontement",
          "Pour aborder un chien, l'homme doit se faire considérer comme l'individu dominant, l'animal adoptera alors une attitude de soumission"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Le chien »."
      },
      {
        "question": "Concernant « Le chien », quelle proposition est HORS sujet ?",
        "options": [
          "Pour aborder un chien, l'homme doit se faire considérer comme l'individu dominant, l'animal adoptera alors une attitude de soumission",
          "Secours et sauvetage des personnes",
          "On retrouve certains signes: érection des poils du dos, expressions du museau, positions de la queue et des oreilles",
          "Ne pas rentrer dans la «zone critique» pour éviter l'affrontement"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Le chien »."
      },
      {
        "question": "Concernant « Le chien », quelle proposition est HORS sujet ?",
        "options": [
          "On retrouve certains signes: érection des poils du dos, expressions du museau, positions de la queue et des oreilles",
          "Chiens – Chats ne pas fixer l'animal, ne pas s'approcher trop vite et respecter la «zone de fuite»",
          "Maintien de l'ordre",
          "Pour aborder un chien, l'homme doit se faire considérer comme l'individu dominant, l'animal adoptera alors une attitude de soumission"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Le chien »."
      },
      {
        "question": "Concernant « Le chien », quelle proposition est HORS sujet ?",
        "options": [
          "Rétablissement d'éclairage public",
          "On retrouve certains signes: érection des poils du dos, expressions du museau, positions de la queue et des oreilles",
          "Ne pas rentrer dans la «zone critique» pour éviter l'affrontement",
          "Pour aborder un chien, l'homme doit se faire considérer comme l'individu dominant, l'animal adoptera alors une attitude de soumission"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Le chien »."
      },
      {
        "question": "Concernant « Le chien », quelle proposition est HORS sujet ?",
        "options": [
          "On retrouve certains signes: érection des poils du dos, expressions du museau, positions de la queue et des oreilles",
          "Ne pas rentrer dans la «zone critique» pour éviter l'affrontement",
          "Pour aborder un chien, l'homme doit se faire considérer comme l'individu dominant, l'animal adoptera alors une attitude de soumission",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Le chien »."
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
          "quantifier la hauteur et le volume d'eau à épuiser",
          "ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES",
          "Implantation facile dans un immeuble existant",
          "ZAL (zone d'alimentation) : elle regroupe différents points d'eau"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est exacte ?",
        "options": [
          "Si demi-pavillon avant : couper selon la charte graphique les montants B et C",
          "Cale en bois ou balle souple",
          "Un accident corporel (mortel et non mortel) de la circulation routière est un accident qui",
          "Matériel Calage (cousine pneumatique, Cales de bois ou pré-formatées Cordage, Tire-fort"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est exacte ?",
        "options": [
          "Provoque au moins une victime, c'est-à-dire un usager ayant nécessité des soins médicaux",
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE",
          "Ils s'assurent de l'ouverture complète des tubulures de la division",
          "Gants en caoutchouc renforcé"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est exacte ?",
        "options": [
          "Survient sur une voie ouverte à la circulation publique",
          "La coupure de l'alimentation à la division pour remplacer ou prolonger l'établissement",
          "Perte de charge dans les tuyaux de 70 mm : 1,8 bars",
          "Zone de déploiement initial"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est exacte ?",
        "options": [
          "à moteur-treuil à vis sans fin,",
          "Un accident corporel implique un certain nombre d'usagers. Parmi ceux-ci, on distingue",
          "couper le courant, etc",
          "Le chef d'équipe déposes on matériel au point d'attaque, retourne au dévidoir et répercute l'ordre au servant. Le servant tire le dévidoir et le dé..."
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est exacte ?",
        "options": [
          "Objectif : Savoir Ouvrir une porte coulissante",
          "Couper les montants en prenant garde de ne pas sectionner les vérins du coffre (les gérer au préalable)",
          "débloquer le système de freinage,",
          "Les indemnes : impliqués non décédés et dont l'état ne nécessite aucun soin médical"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est exacte ?",
        "options": [
          "Les victimes : impliquées non indemnes",
          "enregistre la marque de l'ascenseur ainsi que les coordonnées de la société de maintenance,",
          "Fin d'intervention RATP -SNCF",
          "Le chef d'équipe déposes on matériel au point d'attaque, retourne au dévidoir et répercute l'ordre au servant. Le servant tire le dévidoir et le dé..."
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENT D'UNE SECONDE LANCE SUR LA DIVISION",
          "Outil de forcement et de déblai",
          "Etablir deux lignes de 110 mm, permettant de disposer de deux points d'eau avancés (2divisions 100 / 3 x50) jusqu'à 1 000 m",
          "Parmi les victimes, on distingue"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est exacte ?",
        "options": [
          "Outil de forcement et de déblai",
          "Ce sont les causes et l'importance de l'inondation qui vont déterminer le type de matériel à utiliser",
          "Les tués : toute personne qui décède sur le coup ou dans les trente jours qui suivent l'accident",
          "amarrer la MPE si la surface n'est pas plane,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est exacte ?",
        "options": [
          "Les blessés : victimes non tuées",
          "Pression à la lance : 6 bars (lance non autorégulée)",
          "vidanger le corps de pompe et rincer la MPE après chaque utilisation",
          "Le chef d'agrès se rend au point d'eau le plus approprié à la manoeuvre qu'il compte réaliser"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est HORS sujet ?",
        "options": [
          "Provoque au moins une victime, c'est-à-dire un usager ayant nécessité des soins médicaux",
          "Les victimes : impliquées non indemnes",
          "Parmi les victimes, on distingue",
          "citerne environ 500 litres"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES »."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est HORS sujet ?",
        "options": [
          "Les tués : toute personne qui décède sur le coup ou dans les trente jours qui suivent l'accident",
          "Parmi les victimes, on distingue",
          "Voici les schémas de balisage de différents types d'accidents",
          "Un accident corporel implique un certain nombre d'usagers. Parmi ceux-ci, on distingue"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES »."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est HORS sujet ?",
        "options": [
          "image: schéma de calage d'un véhicule sur 3 ou 4 points",
          "Survient sur une voie ouverte à la circulation publique",
          "Provoque au moins une victime, c'est-à-dire un usager ayant nécessité des soins médicaux",
          "Les tués : toute personne qui décède sur le coup ou dans les trente jours qui suivent l'accident"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES »."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est HORS sujet ?",
        "options": [
          "Un accident corporel (mortel et non mortel) de la circulation routière est un accident qui",
          "Les indemnes : impliqués non décédés et dont l'état ne nécessite aucun soin médical",
          "Les victimes : impliquées non indemnes",
          "Réaction immédiate, Message d'ambiance complet, Demande de renfort"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES »."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est HORS sujet ?",
        "options": [
          "Parmi les blessés, on distingue",
          "Les blessés hospitalisés : victimes admises comme patients dans un hôpital plus de 24 heures",
          "Il existe 2 types de pompes hydrauliques : thermique ou électrique",
          "Les victimes : impliquées non indemnes"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES »."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est HORS sujet ?",
        "options": [
          "ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES",
          "Les blessés hospitalisés : victimes admises comme patients dans un hôpital plus de 24 heures",
          "Les blessés légers : victimes ayant fait l'objet de soins médicaux mais n'ayant pas été admises comme patients à l'hôpital plus de 24 heures",
          "Elles peuvent posséder des lames de différentes formes, pour de multiples applications"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES »."
      },
      {
        "question": "Concernant « Matériels », quelle proposition est exacte ?",
        "options": [
          "Distribution des denrées aux sinistrés",
          "citerne environ 500 litres",
          "ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS",
          "à moteur-treuil planétaire,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Matériels."
      },
      {
        "question": "Concernant « Matériels », quelle proposition est exacte ?",
        "options": [
          "Utilisées par les C.C.F dans la lutte contre les feux de forët",
          "Les pompes électriques",
          "extincteur a poudre et CO2",
          "« Mon périmètre de sécurité est-il suffisant ? »"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Matériels."
      },
      {
        "question": "Concernant « Matériels », quelle proposition est exacte ?",
        "options": [
          "2.1 Ces forces s'exercent lorsque l'arbre est tombé et repose sur un autre plan",
          "espèces protégées : faune sauvage captive; la détention d'espèces protégées est réglementée",
          "cône de balisage Gilets rétro réfléchissants Panneaux triflashs",
          "Les chiens : tatouage ou puce, fichier central"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Matériels."
      },
      {
        "question": "Concernant « Matériels », quelle proposition est exacte ?",
        "options": [
          "En règle générale, ces établissements se font du point d'attaque au point d'eau",
          "vidanger le corps de pompe et rincer la MPE après chaque utilisation",
          "Objectif : Connaitre la MGO en secours routier",
          "Matériel d'électrogène"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Matériels."
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
        "question": "Concernant « Matériels », quelle proposition est exacte ?",
        "options": [
          "Matériel de désincarcération comprend une cisaille, un écarteur, et des vérins hydraulique",
          "TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES",
          "attention à ne pas aggraver la situation par l'apport d'eau,",
          "rupture d'une conduite intérieure ou sous trottoir etc"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Matériels."
      },
      {
        "question": "Concernant « Matériels », quelle proposition est exacte ?",
        "options": [
          "referme la porte palière et s'assure de sa bonne fermeture",
          "Matériel Calage (cousine pneumatique, Cales de bois ou pré-formatées Cordage, Tire-fort",
          "Objectif : Savoir gérer les différents vitrages et utiliser les outils adaptés en réduisant au maximum les débris et poussières",
          "Raccordement Tuyau de 45mm P = 10B"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Matériels."
      },
      {
        "question": "Concernant « Matériels », quelle proposition est HORS sujet ?",
        "options": [
          "Matériel d'électrogène",
          "ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES",
          "cône de balisage Gilets rétro réfléchissants Panneaux triflashs",
          "citerne environ 500 litres"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Matériels »."
      },
      {
        "question": "Concernant « Matériels », quelle proposition est HORS sujet ?",
        "options": [
          "Matériel d'électrogène",
          "extincteur a poudre et CO2",
          "cône de balisage Gilets rétro réfléchissants Panneaux triflashs",
          "Parmi les victimes, on distingue"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Matériels »."
      },
      {
        "question": "Concernant « Matériels », quelle proposition est HORS sujet ?",
        "options": [
          "Matériel Calage (cousine pneumatique, Cales de bois ou pré-formatées Cordage, Tire-fort",
          "Voici les schémas de balisage de différents types d'accidents",
          "extincteur a poudre et CO2",
          "citerne environ 500 litres"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Matériels »."
      },
      {
        "question": "Concernant « Matériels », quelle proposition est HORS sujet ?",
        "options": [
          "citerne environ 500 litres",
          "image: schéma de calage d'un véhicule sur 3 ou 4 points",
          "extincteur a poudre et CO2",
          "Matériel d'électrogène"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Matériels »."
      },
      {
        "question": "Concernant « Matériels », quelle proposition est HORS sujet ?",
        "options": [
          "citerne environ 500 litres",
          "extincteur a poudre et CO2",
          "Réaction immédiate, Message d'ambiance complet, Demande de renfort",
          "Matériel de désincarcération comprend une cisaille, un écarteur, et des vérins hydraulique"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Matériels »."
      },
      {
        "question": "Concernant « Matériels », quelle proposition est HORS sujet ?",
        "options": [
          "Matériel d'électrogène",
          "citerne environ 500 litres",
          "Matériel Calage (cousine pneumatique, Cales de bois ou pré-formatées Cordage, Tire-fort",
          "Il existe 2 types de pompes hydrauliques : thermique ou électrique"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Matériels »."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR BALISAGE », quelle proposition est exacte ?",
        "options": [
          "Plastique type polycarbonate : La casse est difficile, il faut le retirer/déboîter à l'aide d'un outil de forcement",
          "Distribution des denrées aux sinistrés",
          "On va s'intéresser ici au balisage réalisé avec le matériel du VSR (panneaux triflashs et cônes de Lubeck)",
          "Gêne à la progression des engins d'incendie"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR BALISAGE."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR BALISAGE », quelle proposition est exacte ?",
        "options": [
          "Lames; lames à bord tranchant",
          "Voici les schémas de balisage de différents types d'accidents",
          "Une fois le vitrage brisé, passez la main à l'intérieur pour déposer le vitrage entier vers l'extérieur",
          "Un commandement initial"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR BALISAGE."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR BALISAGE », quelle proposition est exacte ?",
        "options": [
          "coupe l'alimentation à l'exception de l'éclairage cabine,",
          "Un commandement d'exécution",
          "Intervention sur route Accident sur 1 seule voie",
          "Effectuer un trait de scie vers le bas de chaque côté du pare-brise"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR BALISAGE."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR BALISAGE », quelle proposition est exacte ?",
        "options": [
          "Intervention dans un rond point",
          "Les pompes thermiques",
          "Chef d'agrès Chef d'équipe ou 1er chef 2e chef Servant ou 1er servant 2e servant Sapeur de liaison",
          "Les raclettes: Elles servent à évacuer une fine couche de liquide"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR BALISAGE."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR BALISAGE », quelle proposition est exacte ?",
        "options": [
          "2 cannes plongeuses",
          "1- Identification du tronc à abattre",
          "Toujours transporter l'appareil le moteur arrêté",
          "Accident sur la voie de sortie"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR BALISAGE."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR BALISAGE », quelle proposition est exacte ?",
        "options": [
          "Une lance (eau ou mousse) et la LDT",
          "Interventions dans un rond point",
          "Calage sur 3 points minimum 2 points coté victime + 1 une roue",
          "Avis de passage des sapeurs pompiers"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR BALISAGE."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR BALISAGE », quelle proposition est exacte ?",
        "options": [
          "A ces périodes de la journée tous les insectes ont alors rejoint leur nid",
          "Accident sur la voie du milieu",
          "exigence très importante sur l'entretien",
          "Réaliser l'ouverture complète si nécessaire en plaçant l'écarteur au niveau des charnières"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR BALISAGE."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR BALISAGE », quelle proposition est HORS sujet ?",
        "options": [
          "Intervention dans un rond point",
          "Accident sur la voie du milieu",
          "Interventions dans un rond point",
          "ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « FICHE TECHNIQUE SR BALISAGE »."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR BALISAGE », quelle proposition est HORS sujet ?",
        "options": [
          "Intervention dans un rond point",
          "Parmi les victimes, on distingue",
          "Accident sur la voie du milieu",
          "Accident sur la voie de sortie"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « FICHE TECHNIQUE SR BALISAGE »."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR BALISAGE », quelle proposition est HORS sujet ?",
        "options": [
          "Intervention dans un rond point",
          "Accident sur la voie de sortie",
          "Interventions dans un rond point",
          "extincteur a poudre et CO2"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « FICHE TECHNIQUE SR BALISAGE »."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR BALISAGE », quelle proposition est HORS sujet ?",
        "options": [
          "Interventions dans un rond point",
          "MARCHE GENERALE DES OPERATIONS",
          "Accident sur la voie de sortie",
          "Intervention dans un rond point"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « FICHE TECHNIQUE SR BALISAGE »."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR BALISAGE », quelle proposition est HORS sujet ?",
        "options": [
          "Appareil qui permet de comprimer l'huile hydraulique pour servir les outils de sauvetage",
          "Accident sur la voie de sortie",
          "Interventions dans un rond point",
          "Accident sur la voie du milieu"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « FICHE TECHNIQUE SR BALISAGE »."
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
        "question": "Concernant « Calage d'un véhicule sur ses roues », quelle proposition est exacte ?",
        "options": [
          "Calage d'un véhicule sur ses roues",
          "Le chef d'agrès se rend au point d'eau le plus approprié à la manoeuvre qu'il compte réaliser",
          "nécessiter de renforcer la dalle de sol",
          "FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Calage d'un véhicule sur ses roues."
      },
      {
        "question": "Concernant « Calage d'un véhicule sur ses roues », quelle proposition est exacte ?",
        "options": [
          "Lecture MX2100 Essence SP GPL Butane Propane Gaz de ville / methane",
          "Implantation facile dans un immeuble existant",
          "image: schéma de calage d'un véhicule sur 3 ou 4 points",
          "Liberté de mouvement des intervenants"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Calage d'un véhicule sur ses roues."
      },
      {
        "question": "Concernant « Calage d'un véhicule sur ses roues », quelle proposition est exacte ?",
        "options": [
          "image: schéma de calage sur 3 points",
          "Bouchon du réservoir d'essence",
          "déterminer la cause de l'inondation et la supprimer (, Service municipalité , ONEE./Régie ..)",
          "En cas de présence d'un hayon : le déposer au préalable"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Calage d'un véhicule sur ses roues."
      },
      {
        "question": "Concernant « Calage d'un véhicule sur ses roues », quelle proposition est exacte ?",
        "options": [
          "pas de souci de pollution",
          "matériels sur ordre",
          "La porte peut être entièrement déposée en insérant l'écarteur dans les brides supérieures",
          "Calage sur 3 points minimum 2 points coté victime + 1 une roue"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Calage d'un véhicule sur ses roues."
      },
      {
        "question": "Concernant « Calage d'un véhicule sur ses roues », quelle proposition est exacte ?",
        "options": [
          "Lames; lames à bord tranchant",
          "Conducteur et passager Calage 4 points minimum + 1 roue",
          "Coupe ceinture Protections de coupes",
          "Port des Equipement de protections individuelles: tenue de feu compléte, +ARI"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Calage d'un véhicule sur ses roues."
      },
      {
        "question": "Concernant « Calage d'un véhicule sur ses roues », quelle proposition est exacte ?",
        "options": [
          "Lorsque les établissements de manoeuvre sont réalisés, le CA ou BA regagne la zone émulseur",
          "image: schéma de calage sur 4 points",
          "vérifier, avant toute utilisation, l'état des câbles",
          "définir les moyens à mettre en œuvre (matériels et personnels)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Calage d'un véhicule sur ses roues."
      },
      {
        "question": "Concernant « Calage d'un véhicule sur ses roues », quelle proposition est HORS sujet ?",
        "options": [
          "Conducteur et passager Calage 4 points minimum + 1 roue",
          "image: schéma de calage sur 4 points",
          "image: schéma de calage sur 3 points",
          "ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Calage d'un véhicule sur ses roues »."
      },
      {
        "question": "Concernant « Calage d'un véhicule sur ses roues », quelle proposition est HORS sujet ?",
        "options": [
          "image: schéma de calage sur 4 points",
          "Parmi les victimes, on distingue",
          "Calage d'un véhicule sur ses roues",
          "Calage sur 3 points minimum 2 points coté victime + 1 une roue"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Calage d'un véhicule sur ses roues »."
      },
      {
        "question": "Concernant « Calage d'un véhicule sur ses roues », quelle proposition est HORS sujet ?",
        "options": [
          "image: schéma de calage sur 4 points",
          "Calage d'un véhicule sur ses roues",
          "extincteur a poudre et CO2",
          "image: schéma de calage sur 3 points"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Calage d'un véhicule sur ses roues »."
      },
      {
        "question": "Concernant « Calage d'un véhicule sur ses roues », quelle proposition est HORS sujet ?",
        "options": [
          "Intervention sur route Accident sur 1 seule voie",
          "Conducteur et passager Calage 4 points minimum + 1 roue",
          "image: schéma de calage sur 3 points",
          "image: schéma de calage d'un véhicule sur 3 ou 4 points"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Calage d'un véhicule sur ses roues »."
      },
      {
        "question": "Concernant « Calage d'un véhicule sur ses roues », quelle proposition est HORS sujet ?",
        "options": [
          "image: schéma de calage d'un véhicule sur 3 ou 4 points",
          "Calage d'un véhicule sur ses roues",
          "Calage sur 3 points minimum 2 points coté victime + 1 une roue",
          "Réaction immédiate, Message d'ambiance complet, Demande de renfort"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Calage d'un véhicule sur ses roues »."
      },
      {
        "question": "Concernant « Calage d'un véhicule sur ses roues », quelle proposition est HORS sujet ?",
        "options": [
          "Il existe 2 types de pompes hydrauliques : thermique ou électrique",
          "Conducteur et passager Calage 4 points minimum + 1 roue",
          "image: schéma de calage sur 4 points",
          "image: schéma de calage sur 3 points"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Calage d'un véhicule sur ses roues »."
      },
      {
        "question": "Concernant « MARCHE GENERALE DES OPERATIONS », quelle proposition est exacte ?",
        "options": [
          "surveiller l'environnement et prévenir le danger",
          "MARCHE GENERALE DES OPERATIONS",
          "De diminuer les pertes de charges et les \"coups de bélier\"",
          "Le chef d'agrès et le conducteur"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — MARCHE GENERALE DES OPERATIONS."
      },
      {
        "question": "Concernant « MARCHE GENERALE DES OPERATIONS », quelle proposition est exacte ?",
        "options": [
          "Objectif : Connaitre la MGO en secours routier",
          "Etablissement au moyen du dévidoir",
          "reste au niveau de la porte palière par laquelle sera réalisée l'évacuation,",
          "Le chef d'équipe déposes on matériel au point d'attaque, retourne au dévidoir et répercute l'ordre au servant. Le servant tire le dévidoir et le dé..."
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — MARCHE GENERALE DES OPERATIONS."
      },
      {
        "question": "Concernant « MARCHE GENERALE DES OPERATIONS », quelle proposition est exacte ?",
        "options": [
          "Réaction immédiate, Message d'ambiance complet, Demande de renfort",
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun",
          "Organisation des secours",
          "ETABLISSEMENT VERTICAL SANS L.A"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — MARCHE GENERALE DES OPERATIONS."
      },
      {
        "question": "Concernant « MARCHE GENERALE DES OPERATIONS », quelle proposition est exacte ?",
        "options": [
          "Stationner le véhicule à distance,",
          "Réaliser le calage de chaque véhicule impliqué où une victime est présente",
          "signaler la mise hors service de l'ascenseur,",
          "Chef d'agrès Chef d'équipe ou 1er chef 2e chef Servant ou 1er servant 2e servant Sapeur de liaison"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — MARCHE GENERALE DES OPERATIONS."
      },
      {
        "question": "Concernant « MARCHE GENERALE DES OPERATIONS », quelle proposition est exacte ?",
        "options": [
          "Ces forces devront être très clairement identifiées avant la coupe, de façon à ne pas être surpris lors de la libération",
          "Eclairer la zone pour faciliter le travail et renforcer la sécurité des intervenants",
          "Les chevaux : livret signalétique et puce électronique (pour les chevaux de course)",
          "utiliser une crépine,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — MARCHE GENERALE DES OPERATIONS."
      },
      {
        "question": "Concernant « MARCHE GENERALE DES OPERATIONS », quelle proposition est HORS sujet ?",
        "options": [
          "Eclairer la zone pour faciliter le travail et renforcer la sécurité des intervenants",
          "Réaliser le calage de chaque véhicule impliqué où une victime est présente",
          "MARCHE GENERALE DES OPERATIONS",
          "ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « MARCHE GENERALE DES OPERATIONS »."
      },
      {
        "question": "Concernant « MARCHE GENERALE DES OPERATIONS », quelle proposition est HORS sujet ?",
        "options": [
          "Parmi les victimes, on distingue",
          "Objectif : Connaitre la MGO en secours routier",
          "Réaliser le calage de chaque véhicule impliqué où une victime est présente",
          "MARCHE GENERALE DES OPERATIONS"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « MARCHE GENERALE DES OPERATIONS »."
      },
      {
        "question": "Concernant « MARCHE GENERALE DES OPERATIONS », quelle proposition est HORS sujet ?",
        "options": [
          "extincteur a poudre et CO2",
          "Objectif : Connaitre la MGO en secours routier",
          "Eclairer la zone pour faciliter le travail et renforcer la sécurité des intervenants",
          "Réaliser le calage de chaque véhicule impliqué où une victime est présente"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « MARCHE GENERALE DES OPERATIONS »."
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
        "question": "Concernant « MARCHE GENERALE DES OPERATIONS », quelle proposition est HORS sujet ?",
        "options": [
          "Objectif : Connaitre la MGO en secours routier",
          "MARCHE GENERALE DES OPERATIONS",
          "Réaliser le calage de chaque véhicule impliqué où une victime est présente",
          "Intervention sur route Accident sur 1 seule voie"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « MARCHE GENERALE DES OPERATIONS »."
      },
      {
        "question": "Concernant « MARCHE GENERALE DES OPERATIONS », quelle proposition est HORS sujet ?",
        "options": [
          "Objectif : Connaitre la MGO en secours routier",
          "Eclairer la zone pour faciliter le travail et renforcer la sécurité des intervenants",
          "image: schéma de calage sur 3 points",
          "Réaliser le calage de chaque véhicule impliqué où une victime est présente"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « MARCHE GENERALE DES OPERATIONS »."
      },
      {
        "question": "Concernant « MARCHE GENERALE DES OPERATIONS », quelle proposition est HORS sujet ?",
        "options": [
          "Réaliser le calage de chaque véhicule impliqué où une victime est présente",
          "MARCHE GENERALE DES OPERATIONS",
          "Objectif : Connaitre la MGO en secours routier",
          "Il existe 2 types de pompes hydrauliques : thermique ou électrique"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « MARCHE GENERALE DES OPERATIONS »."
      },
      {
        "question": "Concernant « 1) Pompe hydraulique », quelle proposition est exacte ?",
        "options": [
          "Si besoin, terminer l'ouverture de porte en insérant l'écarteur dans l'espace créé après déformation",
          "La pression en sortie de pompe doit être de 8,75 bars, soit 9 bars pour un établissement de plain-pied",
          "Appareil qui permet de comprimer l'huile hydraulique pour servir les outils de sauvetage",
          "espèces domestiques : espèces communes apprivoisées par l'homme"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1) Pompe hydraulique."
      },
      {
        "question": "Concernant « 1) Pompe hydraulique », quelle proposition est exacte ?",
        "options": [
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre",
          "Elle est fixe ou semi-stationnaire dans le V.S.R, et peut disposer ou non de 2 dévidoirs équipés de flexibles",
          "Dégarni les montants B et C et gérer les vitrages",
          "définir avec précision les moyens nécessaires pour effectuer l'opération (motopompe, longueur et diamètre des tuyaux d'alimentation et de refouleme..."
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 1) Pompe hydraulique."
      },
      {
        "question": "Concernant « 1) Pompe hydraulique », quelle proposition est exacte ?",
        "options": [
          "Positionner le vérin contre la cale en bois et le montant",
          "Réglage facile de la vitesse de déplacement",
          "Il existe 2 types de pompes hydrauliques : thermique ou électrique",
          "définir les moyens à mettre en œuvre (matériels et personnels)"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1) Pompe hydraulique."
      },
      {
        "question": "Concernant « 2) Cisaille », quelle proposition est exacte ?",
        "options": [
          "Lames; lames à bord tranchant",
          "utiliser un aspirateur à eau pour une hauteur d'eau ≤ 5 cm,",
          "Distance appliquée à priori dans un premier temps mais évolutive",
          "les ascenseurs hydrauliques"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 2) Cisaille."
      },
      {
        "question": "Concernant « 2) Cisaille », quelle proposition est exacte ?",
        "options": [
          "Si demi-pavillon arrière : couper selon la charte graphique les montants A et B",
          "poignée de contrôle",
          "Fiche individuelle de signalement des incidents et agressions",
          "Etablissement au moyen du dévidoir"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 2) Cisaille."
      },
      {
        "question": "Concernant « 2) Cisaille », quelle proposition est exacte ?",
        "options": [
          "vérifier le bon déroulement de l'assèchement (crépine, évacuation),",
          "Ne pas rentrer dans la «zone critique» pour éviter l'affrontement",
          "Distance appliquée à priori dans un premier temps mais évolutive",
          "poignée de maintien"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 2) Cisaille."
      },
      {
        "question": "Concernant « 2) Cisaille », quelle proposition est exacte ?",
        "options": [
          "course verticale limitée à une hauteur entre 15 et 18 m",
          "Insérer l'écarteur dans le jour et l'ouvrir afin de faire céder la serrure",
          "raccord avec bouchon",
          "Perforer le pare-brise pour introduire la lame de scie"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 2) Cisaille."
      },
      {
        "question": "Concernant « 2) Cisaille », quelle proposition est HORS sujet ?",
        "options": [
          "Lames; lames à bord tranchant",
          "poignée de maintien",
          "ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES",
          "raccord avec bouchon"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 2) Cisaille »."
      },
      {
        "question": "Concernant « 2) Cisaille », quelle proposition est HORS sujet ?",
        "options": [
          "poignée de contrôle",
          "raccord avec bouchon",
          "Parmi les victimes, on distingue",
          "poignée de maintien"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 2) Cisaille »."
      },
      {
        "question": "Concernant « 2) Cisaille », quelle proposition est HORS sujet ?",
        "options": [
          "Lames; lames à bord tranchant",
          "poignée de contrôle",
          "extincteur a poudre et CO2",
          "poignée de maintien"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 2) Cisaille »."
      },
      {
        "question": "Concernant « 2) Cisaille », quelle proposition est HORS sujet ?",
        "options": [
          "raccord avec bouchon",
          "poignée de contrôle",
          "Lames; lames à bord tranchant",
          "Intervention sur route Accident sur 1 seule voie"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 2) Cisaille »."
      },
      {
        "question": "Concernant « 2) Cisaille », quelle proposition est HORS sujet ?",
        "options": [
          "poignée de maintien",
          "image: schéma de calage sur 3 points",
          "Lames; lames à bord tranchant",
          "poignée de contrôle"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 2) Cisaille »."
      },
      {
        "question": "Concernant « 2) Cisaille », quelle proposition est HORS sujet ?",
        "options": [
          "MARCHE GENERALE DES OPERATIONS",
          "raccord avec bouchon",
          "Lames; lames à bord tranchant",
          "poignée de maintien"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « 2) Cisaille »."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "Alarme 2 à 20% de la concentration LIE du méthane",
          "FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION",
          "ZE (zone émulseur) : les moyens émulseurs (CA/BA, BEM, citernes des pétroliers) y sont regroupés et employés",
          "4/ Rôle du Chef d'agrès et de l'équipier"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "Le conducteur assure la mise en route de la MPVE",
          "Objectif : Savoir manœuvrer le matériel de désincarcération",
          "Insérer l'écarteur dans le jour venant d'être créé",
          "Perte de charge dans les tuyaux de 70 mm : 0,45 bar pour 60 m"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "Elles peuvent posséder des lames de différentes formes, pour de multiples applications",
          "La porte peut être entièrement déposée en insérant l'écarteur dans les brides supérieures",
          "veiller à ce que la prise de courant soit munie d'une prise de terre,",
          "consommation énergétique importante"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "MANŒUVRE DE LA LANCE CANON MOUSSE",
          "les lames courbes permettent la section de métaux aux diamètres inférieurs à celles-ci (montant avant (A) ou milieu (B)),",
          "Un commandement initial",
          "Bons de mouvement ST 30 bis"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      }
    ]
  },
  {
    "id": "qcm-sr-serie-5",
    "title": "SR — Secours routier — Série 5",
    "level": "niveau-2",
    "category": "secourisme",
    "questions": [
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "les lames droites permettent la section de métaux de diamètre plus important (montant arrière (C))",
          "Perforer le pare-brise pour introduire la lame de scie",
          "à moteur-treuil planétaire,",
          "Interdiction d'accès de la zone au public et aux personnels d'intervention sauf ceux strictement nécessaires"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun",
          "Le corps de la cisaille : il supporte les mâchoires et contient le corps du ou des vérins (double effet)",
          "Pointeau ou séccoise",
          "réaliser les missions et rendre compte"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "nettoyer de temps en temps la crépine,",
          "L'écarteur est un outil qui permet d'écarter, d'écraser ou de tirer des pièces de carrosserie",
          "GERER UN PARE-BRISE COLLE / JOINTE",
          "pointes à écarter : sont les becs traditionnels mis en place sur l'écarteur. Ils sont munis de crantage externe et interne permettant une prise ou ..."
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est HORS sujet ?",
        "options": [
          "Objectif : Savoir manœuvrer le matériel de désincarcération",
          "Le corps de la cisaille : il supporte les mâchoires et contient le corps du ou des vérins (double effet)",
          "ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES",
          "les lames courbes permettent la section de métaux aux diamètres inférieurs à celles-ci (montant avant (A) ou milieu (B)),"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION »."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est HORS sujet ?",
        "options": [
          "Objectif : Savoir manœuvrer le matériel de désincarcération",
          "Parmi les victimes, on distingue",
          "les lames courbes permettent la section de métaux aux diamètres inférieurs à celles-ci (montant avant (A) ou milieu (B)),",
          "FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION »."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est HORS sujet ?",
        "options": [
          "FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION",
          "Le corps de la cisaille : il supporte les mâchoires et contient le corps du ou des vérins (double effet)",
          "extincteur a poudre et CO2",
          "les lames courbes permettent la section de métaux aux diamètres inférieurs à celles-ci (montant avant (A) ou milieu (B)),"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION »."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est HORS sujet ?",
        "options": [
          "Intervention sur route Accident sur 1 seule voie",
          "les lames droites permettent la section de métaux de diamètre plus important (montant arrière (C))",
          "Le corps de la cisaille : il supporte les mâchoires et contient le corps du ou des vérins (double effet)",
          "Elles peuvent posséder des lames de différentes formes, pour de multiples applications"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION »."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est HORS sujet ?",
        "options": [
          "image: schéma de calage sur 3 points",
          "Objectif : Savoir manœuvrer le matériel de désincarcération",
          "Le corps de la cisaille : il supporte les mâchoires et contient le corps du ou des vérins (double effet)",
          "Elles peuvent posséder des lames de différentes formes, pour de multiples applications"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION »."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est HORS sujet ?",
        "options": [
          "L'écarteur est un outil qui permet d'écarter, d'écraser ou de tirer des pièces de carrosserie",
          "les lames courbes permettent la section de métaux aux diamètres inférieurs à celles-ci (montant avant (A) ou milieu (B)),",
          "MARCHE GENERALE DES OPERATIONS",
          "Le corps de la cisaille : il supporte les mâchoires et contient le corps du ou des vérins (double effet)"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION »."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "Objectif : Savoir Ouvrir une porte (méthode classique)",
          "Une fois brisée, retirer le restant de la vitre. Pour vous aider, il est possible de créer une poignée avec le ruban adhésif utilisé",
          "Relais (engin, motopompe, VEDI…)",
          "Les bras de levier d'écartement"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "2 tuyaux de 45 x 20 m pliés en écheveau dont l'un est doté d'une lance à double régulation",
          "pointes à écarter : sont les becs traditionnels mis en place sur l'écarteur. Ils sont munis de crantage externe et interne permettant une prise ou ...",
          "Pour aborder un chien, l'homme doit se faire considérer comme l'individu dominant, l'animal adoptera alors une attitude de soumission",
          "Accident sur la voie du milieu"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "ZAT (zone d'attaque) : les lances y sont établies (lances canon et lances à main) ; cette zone peut-être divisée en secteurs d'attaque",
          "Les Moto-Pompes Remorquables (M.P.R.)",
          "pointes à couper : permettent l'utilisation d'un écarteur pour le découpage de plaque en métal très fine",
          "GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "ne pas déplacer l'aspirateur avec le moteur en marche,",
          "Avis de passage des sapeurs pompiers",
          "toutes les manipulations se feront HORS-TENSION",
          "Ces chaînes de traction sont composées de 2 parties, chacune est munie d'un crochet de raccourcissement qui permet d'attraper uniquement la chaîne"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT », quelle proposition est exacte ?",
        "options": [
          "Positionner le coupe pare-brise de telle façon que",
          "FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT",
          "sécher l'appareil après utilisation",
          "Poignée du lanceur"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT », quelle proposition est exacte ?",
        "options": [
          "Objectif : Savoir ouvrir une porte d'un véhicule sur le toit",
          "A partir de 50ppm, il nécessaire d'effectuer une évacuation pour une ventilation des lieux",
          "Les 2 parties jaunes sur la carrosserie. Cela permet de ne pas passer la main à travers la vitre",
          "Jusqu'à 30ppm de CO, il n'y a pas de danger pour la santé des personnes"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT », quelle proposition est exacte ?",
        "options": [
          "Pincer le bas de caisse pour créer une ouverture au niveau de la portière",
          "De diminuer les pertes de charges et les \"coups de bélier\"",
          "poignée de maintien",
          "Utiliser le lot de sauvetage si progression en hauteur"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT », quelle proposition est exacte ?",
        "options": [
          "Contrôle entrées/sorties si possible",
          "Bouton d'arrêt de la manette des gaz",
          "reconnaître les lieux (type d'ascenseur, emplacement de la cabine et du local machinerie),",
          "Passer l'écarteur dans le jour de la porte au niveau du bas de caisse Ne pas se positionner entre l'outil et la portière"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT », quelle proposition est exacte ?",
        "options": [
          "Transports ambulatoires",
          "Combinaison étanche aux insectes",
          "Régulation routière",
          "Réaliser l'ouverture complète si nécessaire en plaçant l'écarteur au niveau des charnières"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT », quelle proposition est exacte ?",
        "options": [
          "matériels sur ordre",
          "Si l'ouverture de porte est rendue difficile par le cadre de la vitre, le découper au moyen de la cisaille",
          "prendre les précautions nécessaires lors du remplissage de carburant,",
          "Situation : Reconnaître les lieux (type de la machine, emplacement de la cabine et du local de la machinerie)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT », quelle proposition est HORS sujet ?",
        "options": [
          "ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES",
          "Si l'ouverture de porte est rendue difficile par le cadre de la vitre, le découper au moyen de la cisaille",
          "Pincer le bas de caisse pour créer une ouverture au niveau de la portière",
          "Passer l'écarteur dans le jour de la porte au niveau du bas de caisse Ne pas se positionner entre l'outil et la portière"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT »."
      }
    ]
  },
  {
    "id": "qcm-sr-serie-6",
    "title": "SR — Secours routier — Série 6",
    "level": "niveau-avance",
    "category": "secourisme",
    "questions": [
      {
        "question": "Concernant « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT », quelle proposition est HORS sujet ?",
        "options": [
          "Si l'ouverture de porte est rendue difficile par le cadre de la vitre, le découper au moyen de la cisaille",
          "Objectif : Savoir ouvrir une porte d'un véhicule sur le toit",
          "Parmi les victimes, on distingue",
          "Passer l'écarteur dans le jour de la porte au niveau du bas de caisse Ne pas se positionner entre l'outil et la portière"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT »."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT », quelle proposition est HORS sujet ?",
        "options": [
          "extincteur a poudre et CO2",
          "Pincer le bas de caisse pour créer une ouverture au niveau de la portière",
          "FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT",
          "Si l'ouverture de porte est rendue difficile par le cadre de la vitre, le découper au moyen de la cisaille"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT »."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT », quelle proposition est HORS sujet ?",
        "options": [
          "Intervention sur route Accident sur 1 seule voie",
          "FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT",
          "Passer l'écarteur dans le jour de la porte au niveau du bas de caisse Ne pas se positionner entre l'outil et la portière",
          "Réaliser l'ouverture complète si nécessaire en plaçant l'écarteur au niveau des charnières"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT »."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT », quelle proposition est HORS sujet ?",
        "options": [
          "FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT",
          "Pincer le bas de caisse pour créer une ouverture au niveau de la portière",
          "image: schéma de calage sur 3 points",
          "Passer l'écarteur dans le jour de la porte au niveau du bas de caisse Ne pas se positionner entre l'outil et la portière"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT »."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT », quelle proposition est HORS sujet ?",
        "options": [
          "Objectif : Savoir ouvrir une porte d'un véhicule sur le toit",
          "MARCHE GENERALE DES OPERATIONS",
          "Passer l'écarteur dans le jour de la porte au niveau du bas de caisse Ne pas se positionner entre l'outil et la portière",
          "Pincer le bas de caisse pour créer une ouverture au niveau de la portière"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT »."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (PAR UTILISATION DU CADRE DE VITRE) », quelle proposition est exacte ?",
        "options": [
          "OUVRIR UNE PORTE (PAR UTILISATION DU CADRE DE VITRE)",
          "veiller à ce que l'eau d'alimentation soit entre 6 et 8 bars",
          "d'un ensemble pistons-cylindres hydrauliques placé sous la cabine de l'ascenseur,",
          "un système de traction au-dessus de la cage de l'ascenseur,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (PAR UTILISATION DU CADRE DE VITRE)."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (PAR UTILISATION DU CADRE DE VITRE) », quelle proposition est exacte ?",
        "options": [
          "les pompes thermiques,",
          "L'établissement rapide d'une seconde lance sur la division",
          "Objectif : Savoir Ouvrir une porte (par utilisation du cadre de vitre)",
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (PAR UTILISATION DU CADRE DE VITRE)."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (PAR UTILISATION DU CADRE DE VITRE) », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE",
          "sangler les raccords des tuyaux,",
          "Cale en bois ou balle souple",
          "Pincer le bas de caisse pour créer une ouverture au niveau de la portière"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (PAR UTILISATION DU CADRE DE VITRE)."
      },
      {
        "question": "Concernant « Écrasement dans l'espace vitré », quelle proposition est exacte ?",
        "options": [
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre",
          "Ne nécessite pas de cabanon de machinerie",
          "Écrasement dans l'espace vitré",
          "course verticale limitée à une hauteur entre 15 et 18 m"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Écrasement dans l'espace vitré."
      },
      {
        "question": "Concernant « Écrasement dans l'espace vitré », quelle proposition est exacte ?",
        "options": [
          "Effectuer un trait de scie vers le bas de chaque côté du pare-brise",
          "L'utilisation d'émulseur est toujours suivie d'un abondant rinçage",
          "course verticale pas vraiment limitée",
          "Pincer la porte légèrement au-dessus de la poignée pour se dégager un jour de quelques centimètres"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Écrasement dans l'espace vitré."
      },
      {
        "question": "Concernant « Écrasement dans l'espace vitré », quelle proposition est exacte ?",
        "options": [
          "Faire assurer l'entretien des tronçonneuses dès le retour,",
          "Voici les schémas de balisage de différents types d'accidents",
          "Attention aux véhicules équipés d'airbags latéraux dans les portières",
          "Arrêter le moteur avant de poser l'appareil"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Écrasement dans l'espace vitré."
      },
      {
        "question": "Concernant « Écrasement dans l'espace vitré », quelle proposition est exacte ?",
        "options": [
          "Finir par la découpe de la partie supérieure",
          "Insérer l'écarteur dans le jour et l'ouvrir afin de faire céder la serrure",
          "toutes les manipulations se feront HORS-TENSION",
          "avant l'utilisation, vérifier si tous les organes sont bien fixés,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Écrasement dans l'espace vitré."
      },
      {
        "question": "Concernant « Écrasement dans l'espace vitré », quelle proposition est HORS sujet ?",
        "options": [
          "Écrasement dans l'espace vitré",
          "Attention aux véhicules équipés d'airbags latéraux dans les portières",
          "ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES",
          "Pincer la porte légèrement au-dessus de la poignée pour se dégager un jour de quelques centimètres"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Écrasement dans l'espace vitré »."
      },
      {
        "question": "Concernant « Écrasement dans l'espace vitré », quelle proposition est HORS sujet ?",
        "options": [
          "Attention aux véhicules équipés d'airbags latéraux dans les portières",
          "Insérer l'écarteur dans le jour et l'ouvrir afin de faire céder la serrure",
          "Parmi les victimes, on distingue",
          "Pincer la porte légèrement au-dessus de la poignée pour se dégager un jour de quelques centimètres"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Écrasement dans l'espace vitré »."
      },
      {
        "question": "Concernant « Écrasement dans l'espace vitré », quelle proposition est HORS sujet ?",
        "options": [
          "Écrasement dans l'espace vitré",
          "Pincer la porte légèrement au-dessus de la poignée pour se dégager un jour de quelques centimètres",
          "extincteur a poudre et CO2",
          "Insérer l'écarteur dans le jour et l'ouvrir afin de faire céder la serrure"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Écrasement dans l'espace vitré »."
      },
      {
        "question": "Concernant « Écrasement dans l'espace vitré », quelle proposition est HORS sujet ?",
        "options": [
          "Écrasement dans l'espace vitré",
          "Intervention sur route Accident sur 1 seule voie",
          "Insérer l'écarteur dans le jour et l'ouvrir afin de faire céder la serrure",
          "Attention aux véhicules équipés d'airbags latéraux dans les portières"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Écrasement dans l'espace vitré »."
      },
      {
        "question": "Concernant « Écrasement dans l'espace vitré », quelle proposition est HORS sujet ?",
        "options": [
          "Attention aux véhicules équipés d'airbags latéraux dans les portières",
          "Insérer l'écarteur dans le jour et l'ouvrir afin de faire céder la serrure",
          "image: schéma de calage sur 3 points",
          "Pincer la porte légèrement au-dessus de la poignée pour se dégager un jour de quelques centimètres"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Écrasement dans l'espace vitré »."
      },
      {
        "question": "Concernant « Écrasement dans l'espace vitré », quelle proposition est HORS sujet ?",
        "options": [
          "MARCHE GENERALE DES OPERATIONS",
          "Insérer l'écarteur dans le jour et l'ouvrir afin de faire céder la serrure",
          "Écrasement dans l'espace vitré",
          "Attention aux véhicules équipés d'airbags latéraux dans les portières"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Écrasement dans l'espace vitré »."
      },
      {
        "question": "Concernant « Écartement dans l'espace vitré », quelle proposition est exacte ?",
        "options": [
          "se rend à la machinerie",
          "Matériel de base Matériel de base",
          "Bon de prise en charge provisoire de matériel",
          "Écartement dans l'espace vitré"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Écartement dans l'espace vitré."
      },
      {
        "question": "Concernant « Écartement dans l'espace vitré », quelle proposition est exacte ?",
        "options": [
          "MISE EN PLACE D'UN DISPOSITIF D'INJECTION",
          "Soulever puis basculer le pavillon vers l'avant ou l'arrière",
          "ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS",
          "Ouvrir l'écarteur afin de déformer la porte et faire céder la serrure"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Écartement dans l'espace vitré."
      }
    ]
  },
  {
    "id": "qcm-sr-serie-7",
    "title": "SR — Secours routier — Série 7",
    "level": "niveau-1",
    "category": "secourisme",
    "questions": [
      {
        "question": "Concernant « Écartement dans l'espace vitré », quelle proposition est exacte ?",
        "options": [
          "L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE",
          "Provoque au moins une victime, c'est-à-dire un usager ayant nécessité des soins médicaux",
          "Si besoin, terminer l'ouverture de porte en insérant l'écarteur dans l'espace créé après déformation",
          "effectue sa reconnaissance,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Écartement dans l'espace vitré."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (METHODE CLASSIQUE) », quelle proposition est exacte ?",
        "options": [
          "3 tuyaux de 70 x 20 m pliés en écheveau (dont un équipé d'une division)",
          "Un accident corporel implique un certain nombre d'usagers. Parmi ceux-ci, on distingue",
          "LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI",
          "OUVRIR UNE PORTE (METHODE CLASSIQUE)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (METHODE CLASSIQUE)."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (METHODE CLASSIQUE) », quelle proposition est exacte ?",
        "options": [
          "ne pas déplacer l'aspirateur avec le moteur en marche,",
          "Maintien de l'ordre",
          "Objectif : Savoir Ouvrir une porte (méthode classique)",
          "Action pratiquement instantanée et irréversible par paralysie suivie de mort"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (METHODE CLASSIQUE)."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (METHODE CLASSIQUE) », quelle proposition est exacte ?",
        "options": [
          "S'équiper des EPI adaptés, toujours en binôme",
          "Distance appliquée à priori dans un premier temps mais évolutive",
          "En cas de présence d'un hayon : le déposer au préalable",
          "Cale en bois ou balle souple"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (METHODE CLASSIQUE)."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (METHODE CLASSIQUE) », quelle proposition est exacte ?",
        "options": [
          "Régulation routière",
          "La lance est engagée dans la boucle constituée par la courroie d'amarre",
          "Insérer l'Halligan tool (pince coupant) afin de créer un jour de quelques centimètres",
          "Combinaison étanche aux insectes"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (METHODE CLASSIQUE)."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (METHODE CLASSIQUE) », quelle proposition est exacte ?",
        "options": [
          "Insérer l'écarteur dans le jour venant d'être créé",
          "nettoyer de temps en temps la crépine,",
          "La pince à chat permet de saisir le cou du chat et de le serrer grâce à la poignée",
          "La pince à serpent permet de saisir le serpent au plus près de la tête en le maintenant à distance"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (METHODE CLASSIQUE)."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (METHODE CLASSIQUE) », quelle proposition est exacte ?",
        "options": [
          "Ouvrir l'écarteur pour faire céder la serrure",
          "Pointeau ou séccoise",
          "Protège main avant (Qui déclenche le frein de chaine)",
          "vérifier la présence d'une fiche de terre"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (METHODE CLASSIQUE)."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (METHODE CLASSIQUE) », quelle proposition est exacte ?",
        "options": [
          "3e et 4e lances (eau ou mousse)",
          "veiller à ce que la prise de courant soit munie d'une prise de terre,",
          "Objectif : Savoir gérer les différents vitrages et utiliser les outils adaptés en réduisant au maximum les débris et poussières",
          "Travailler dans le sens classique de l'ouverture de la porte"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (METHODE CLASSIQUE)."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (METHODE CLASSIQUE) », quelle proposition est exacte ?",
        "options": [
          "Insérer une cale ou la balle en mousse dans la poignée intérieure de la porte afin de faciliter le déblocage de cette dernière",
          "Matériel de base Matériel de base",
          "Survient sur une voie ouverte à la circulation publique",
          "Ces forces devront être très clairement identifiées avant la coupe, de façon à ne pas être surpris lors de la libération"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (METHODE CLASSIQUE)."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (METHODE CLASSIQUE) », quelle proposition est HORS sujet ?",
        "options": [
          "Ouvrir l'écarteur pour faire céder la serrure",
          "ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES",
          "Insérer une cale ou la balle en mousse dans la poignée intérieure de la porte afin de faciliter le déblocage de cette dernière",
          "Travailler dans le sens classique de l'ouverture de la porte"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « OUVRIR UNE PORTE (METHODE CLASSIQUE) »."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (METHODE CLASSIQUE) », quelle proposition est HORS sujet ?",
        "options": [
          "Ouvrir l'écarteur pour faire céder la serrure",
          "Cale en bois ou balle souple",
          "Parmi les victimes, on distingue",
          "Insérer une cale ou la balle en mousse dans la poignée intérieure de la porte afin de faciliter le déblocage de cette dernière"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « OUVRIR UNE PORTE (METHODE CLASSIQUE) »."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (METHODE CLASSIQUE) », quelle proposition est HORS sujet ?",
        "options": [
          "extincteur a poudre et CO2",
          "Travailler dans le sens classique de l'ouverture de la porte",
          "Ouvrir l'écarteur pour faire céder la serrure",
          "Insérer l'Halligan tool (pince coupant) afin de créer un jour de quelques centimètres"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « OUVRIR UNE PORTE (METHODE CLASSIQUE) »."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (METHODE CLASSIQUE) », quelle proposition est HORS sujet ?",
        "options": [
          "Intervention sur route Accident sur 1 seule voie",
          "Insérer l'Halligan tool (pince coupant) afin de créer un jour de quelques centimètres",
          "Objectif : Savoir Ouvrir une porte (méthode classique)",
          "Cale en bois ou balle souple"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « OUVRIR UNE PORTE (METHODE CLASSIQUE) »."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (METHODE CLASSIQUE) », quelle proposition est HORS sujet ?",
        "options": [
          "Cale en bois ou balle souple",
          "Insérer l'écarteur dans le jour venant d'être créé",
          "image: schéma de calage sur 3 points",
          "Ouvrir l'écarteur pour faire céder la serrure"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « OUVRIR UNE PORTE (METHODE CLASSIQUE) »."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (METHODE CLASSIQUE) », quelle proposition est HORS sujet ?",
        "options": [
          "Insérer une cale ou la balle en mousse dans la poignée intérieure de la porte afin de faciliter le déblocage de cette dernière",
          "MARCHE GENERALE DES OPERATIONS",
          "Objectif : Savoir Ouvrir une porte (méthode classique)",
          "Cale en bois ou balle souple"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « OUVRIR UNE PORTE (METHODE CLASSIQUE) »."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE COULISSANTE », quelle proposition est exacte ?",
        "options": [
          "Perte de charge dans les tuyaux de 70 mm : 0,45 bar pour 60 m",
          "Objectif : Savoir Ouvrir une porte coulissante",
          "chien méchant menaçant la sécurité morsure Faire intervenir un animalier. Maîtriser l'animal avec un lasso ou un filet. Faire intervenir les forces...",
          "Pulvérisateur projetant de la poudre"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE COULISSANTE."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE COULISSANTE », quelle proposition est exacte ?",
        "options": [
          "remplir le bloc pompe d'eau,",
          "Placer une cale dans la poignée de porte",
          "La glacière permet de placer le serpent après sa capture. On peut ainsi le transporter en toute sécurité",
          "Positionner le coupe pare-brise de telle façon que"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE COULISSANTE."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE COULISSANTE », quelle proposition est exacte ?",
        "options": [
          "3e et 4e lances (eau ou mousse)",
          "FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT",
          "Insérer l'écarteur dans la partie arrière de la porte juste à côté du rail coulissant",
          "espèces domestiques : espèces communes apprivoisées par l'homme"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE COULISSANTE."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE COULISSANTE », quelle proposition est exacte ?",
        "options": [
          "Diamètre de la conduite",
          "Il assure la surveillance des tuyaux de 45 mm et contrôle régulièrement le niveau d'émulseur et rend compte de la quantité restante",
          "Écarter jusqu'à extraire le dispositif coulissant",
          "Périmètre de sécurité d'un rayon de 50 m déterminé et délimité"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE COULISSANTE."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE COULISSANTE », quelle proposition est exacte ?",
        "options": [
          "Tirer la porte au maximum dans son rail coulissant pour laisser la plus grande ouverture possible",
          "La ligne de 110 mm peut être établie du point d'eau vers le point d'attaque dans certaines circonstances",
          "rapidité de déplacement",
          "Matériel d'électrogène"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE COULISSANTE."
      }
    ]
  },
  {
    "id": "qcm-sr-serie-8",
    "title": "SR — Secours routier — Série 8",
    "level": "niveau-2",
    "category": "secourisme",
    "questions": [
      {
        "question": "Concernant « OUVRIR UNE PORTE COULISSANTE », quelle proposition est exacte ?",
        "options": [
          "Vérifier mutuellement l'étanchéité des combinaisons,",
          "La coupure de l'alimentation à la division pour remplacer ou prolonger l'établissement",
          "La porte peut être entièrement déposée en insérant l'écarteur dans les brides supérieures",
          "Zone de déploiement initial"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE COULISSANTE."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE COULISSANTE », quelle proposition est HORS sujet ?",
        "options": [
          "ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES",
          "Tirer la porte au maximum dans son rail coulissant pour laisser la plus grande ouverture possible",
          "Objectif : Savoir Ouvrir une porte coulissante",
          "Placer une cale dans la poignée de porte"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « OUVRIR UNE PORTE COULISSANTE »."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE COULISSANTE », quelle proposition est HORS sujet ?",
        "options": [
          "Tirer la porte au maximum dans son rail coulissant pour laisser la plus grande ouverture possible",
          "La porte peut être entièrement déposée en insérant l'écarteur dans les brides supérieures",
          "Parmi les victimes, on distingue",
          "Objectif : Savoir Ouvrir une porte coulissante"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « OUVRIR UNE PORTE COULISSANTE »."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE COULISSANTE », quelle proposition est HORS sujet ?",
        "options": [
          "La porte peut être entièrement déposée en insérant l'écarteur dans les brides supérieures",
          "Objectif : Savoir Ouvrir une porte coulissante",
          "extincteur a poudre et CO2",
          "Insérer l'écarteur dans la partie arrière de la porte juste à côté du rail coulissant"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « OUVRIR UNE PORTE COULISSANTE »."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE COULISSANTE », quelle proposition est HORS sujet ?",
        "options": [
          "Intervention sur route Accident sur 1 seule voie",
          "Objectif : Savoir Ouvrir une porte coulissante",
          "Tirer la porte au maximum dans son rail coulissant pour laisser la plus grande ouverture possible",
          "La porte peut être entièrement déposée en insérant l'écarteur dans les brides supérieures"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « OUVRIR UNE PORTE COULISSANTE »."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE COULISSANTE », quelle proposition est HORS sujet ?",
        "options": [
          "La porte peut être entièrement déposée en insérant l'écarteur dans les brides supérieures",
          "Objectif : Savoir Ouvrir une porte coulissante",
          "Tirer la porte au maximum dans son rail coulissant pour laisser la plus grande ouverture possible",
          "image: schéma de calage sur 3 points"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « OUVRIR UNE PORTE COULISSANTE »."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE COULISSANTE », quelle proposition est HORS sujet ?",
        "options": [
          "Écarter jusqu'à extraire le dispositif coulissant",
          "Tirer la porte au maximum dans son rail coulissant pour laisser la plus grande ouverture possible",
          "La porte peut être entièrement déposée en insérant l'écarteur dans les brides supérieures",
          "MARCHE GENERALE DES OPERATIONS"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « OUVRIR UNE PORTE COULISSANTE »."
      },
      {
        "question": "Concernant « AUGMENTER L'ESPACE DE SURVIE », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENT VERTICAL SANS L.A",
          "Le chef d'agrès désigne au conducteur l'orifice d'alimentation du poteau relais",
          "Objectif : Savoir augmenter l'espace de survie en utilisant un vérin",
          "regarder s'il y a un transformateur électrique à l'intérieur des locaux sinistrés"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — AUGMENTER L'ESPACE DE SURVIE."
      },
      {
        "question": "Concernant « AUGMENTER L'ESPACE DE SURVIE », quelle proposition est exacte ?",
        "options": [
          "MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION",
          "« Comment vont réagir les 2 morceaux ? »",
          "Poser une câle en bois, côté opposé au montant à redresser, puis la serrer contre le toit de l'habitacle avec un écarteur",
          "Ils sont réalisés par le conducteur et éventuellement aidé par un personnel (SDL, sous-officier adjoint, etc.) au moyen de tuyaux de 70 mm, 110 mm ..."
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — AUGMENTER L'ESPACE DE SURVIE."
      },
      {
        "question": "Concernant « AUGMENTER L'ESPACE DE SURVIE », quelle proposition est exacte ?",
        "options": [
          "1er Equipe 2e Equipe Sapeur de liaison",
          "rapidité de déplacement",
          "vérifier la présence d'une fiche de terre",
          "Positionner le vérin contre la cale en bois et le montant"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — AUGMENTER L'ESPACE DE SURVIE."
      },
      {
        "question": "Concernant « AUGMENTER L'ESPACE DE SURVIE », quelle proposition est exacte ?",
        "options": [
          "Pousser le montant avec le vérin",
          "Comme il n'a pas d'odeur et qu'il est invisible à l'oeil, seul un appareil de mesures permet de donner l'alarme",
          "Utilisation des radios",
          "image: schéma de calage d'un véhicule sur 3 ou 4 points"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — AUGMENTER L'ESPACE DE SURVIE."
      },
      {
        "question": "Concernant « AUGMENTER L'ESPACE DE SURVIE », quelle proposition est exacte ?",
        "options": [
          "Les aspirateurs à eau",
          "allumer les projecteurs portatifs à l'extérieur de la zone de danger",
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun",
          "Placer la poignée parallèle au plafond"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — AUGMENTER L'ESPACE DE SURVIE."
      },
      {
        "question": "Concernant « AUGMENTER L'ESPACE DE SURVIE », quelle proposition est exacte ?",
        "options": [
          "Prendre en considération le sens du fil du bois pour les cales",
          "suit le chef d'agrès,",
          "Ne nécessite pas de cabanon de machinerie",
          "De porter la puissance hydraulique à 1 000 l/min. par l'établissement d'une division50/2x 50"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — AUGMENTER L'ESPACE DE SURVIE."
      },
      {
        "question": "Concernant « AUGMENTER L'ESPACE DE SURVIE », quelle proposition est HORS sujet ?",
        "options": [
          "Positionner le vérin contre la cale en bois et le montant",
          "ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES",
          "Placer la poignée parallèle au plafond",
          "Objectif : Savoir augmenter l'espace de survie en utilisant un vérin"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « AUGMENTER L'ESPACE DE SURVIE »."
      },
      {
        "question": "Concernant « AUGMENTER L'ESPACE DE SURVIE », quelle proposition est HORS sujet ?",
        "options": [
          "Parmi les victimes, on distingue",
          "Prendre en considération le sens du fil du bois pour les cales",
          "Objectif : Savoir augmenter l'espace de survie en utilisant un vérin",
          "Pousser le montant avec le vérin"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « AUGMENTER L'ESPACE DE SURVIE »."
      },
      {
        "question": "Concernant « AUGMENTER L'ESPACE DE SURVIE », quelle proposition est HORS sujet ?",
        "options": [
          "extincteur a poudre et CO2",
          "Positionner le vérin contre la cale en bois et le montant",
          "Pousser le montant avec le vérin",
          "Objectif : Savoir augmenter l'espace de survie en utilisant un vérin"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « AUGMENTER L'ESPACE DE SURVIE »."
      },
      {
        "question": "Concernant « AUGMENTER L'ESPACE DE SURVIE », quelle proposition est HORS sujet ?",
        "options": [
          "Poser une câle en bois, côté opposé au montant à redresser, puis la serrer contre le toit de l'habitacle avec un écarteur",
          "Placer la poignée parallèle au plafond",
          "Intervention sur route Accident sur 1 seule voie",
          "Prendre en considération le sens du fil du bois pour les cales"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « AUGMENTER L'ESPACE DE SURVIE »."
      },
      {
        "question": "Concernant « AUGMENTER L'ESPACE DE SURVIE », quelle proposition est HORS sujet ?",
        "options": [
          "Poser une câle en bois, côté opposé au montant à redresser, puis la serrer contre le toit de l'habitacle avec un écarteur",
          "Pousser le montant avec le vérin",
          "image: schéma de calage sur 3 points",
          "Prendre en considération le sens du fil du bois pour les cales"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « AUGMENTER L'ESPACE DE SURVIE »."
      },
      {
        "question": "Concernant « AUGMENTER L'ESPACE DE SURVIE », quelle proposition est HORS sujet ?",
        "options": [
          "Poser une câle en bois, côté opposé au montant à redresser, puis la serrer contre le toit de l'habitacle avec un écarteur",
          "MARCHE GENERALE DES OPERATIONS",
          "Positionner le vérin contre la cale en bois et le montant",
          "Placer la poignée parallèle au plafond"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « AUGMENTER L'ESPACE DE SURVIE »."
      },
      {
        "question": "Concernant « PAVILLON COMPLET », quelle proposition est exacte ?",
        "options": [
          "couper le courant, etc",
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant",
          "Objectif : Réalisé l'accée à d'une victime incarcérée en dégageant le pavillon",
          "Arrêter le moteur avant de poser l'appareil"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — PAVILLON COMPLET."
      }
    ]
  },
  {
    "id": "qcm-sr-serie-9",
    "title": "SR — Secours routier — Série 9",
    "level": "niveau-avance",
    "category": "secourisme",
    "questions": [
      {
        "question": "Concernant « PAVILLON COMPLET », quelle proposition est exacte ?",
        "options": [
          "Une lance (eau ou mousse) et la LDT",
          "Se méfier des conduits de fumée désaffectés qui peuvent être en mauvais état",
          "Outil de dégarnissage Crayon carrosserie",
          "referme la porte palière et s'assure de sa bonne fermeture"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — PAVILLON COMPLET."
      },
      {
        "question": "Concernant « PAVILLON COMPLET », quelle proposition est exacte ?",
        "options": [
          "Matériel de désincarcération comprend une cisaille, un écarteur, et des vérins hydraulique",
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars pour 40 m",
          "Effectuer une coupe de décharge à l'endroit du pliage après dégarnissage",
          "Coupe ceinture Protections de coupes Cisailles"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — PAVILLON COMPLET."
      },
      {
        "question": "Concernant « PAVILLON COMPLET », quelle proposition est exacte ?",
        "options": [
          "un système de traction au-dessus de la cage de l'ascenseur,",
          "Se méfier des conduits de fumée désaffectés qui peuvent être en mauvais état",
          "Gérer le pare brise et les vitrages selon les fiches techniques réalisées Dégarnir les montants",
          "le chef d'équipe dépose le matériel du panier. Le servant Maintient le dévidoir"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — PAVILLON COMPLET."
      },
      {
        "question": "Concernant « PAVILLON COMPLET », quelle proposition est exacte ?",
        "options": [
          "Couper les montants A et B selon la charte graphique en suivant un ordre judicieux",
          "Cahier d'observations DSA",
          "engager le minimum de personnel",
          "brancher l'appareil dans un autre local que le local inondé, sur une prise reliée à la terre,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — PAVILLON COMPLET."
      },
      {
        "question": "Concernant « PAVILLON COMPLET », quelle proposition est exacte ?",
        "options": [
          "Les agents de la Protection Civile ont à leur disposition un certain nombre de matériels d'épuisement",
          "OUVRIR UNE PORTE (PAR UTILISATION DU CADRE DE VITRE)",
          "Couper les montants en prenant garde de ne pas sectionner les vérins du coffre (les gérer au préalable)",
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — PAVILLON COMPLET."
      },
      {
        "question": "Concernant « PAVILLON COMPLET », quelle proposition est exacte ?",
        "options": [
          "Soulever le pavillon et l'évacuer vers la zone de dépôt des structures",
          "Le corps de la cisaille : il supporte les mâchoires et contient le corps du ou des vérins (double effet)",
          "Objectif : Savoir ouvrir une porte d'un véhicule sur le toit",
          "engager le minimum de personnel"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — PAVILLON COMPLET."
      },
      {
        "question": "Concernant « PAVILLON COMPLET », quelle proposition est exacte ?",
        "options": [
          "Astuce(s) : La scie sabre peut être un outil complémentaire pour la césarisation des montants et du pare brise",
          "fût, ajutage de 35 mm ; ARI et tenues d'approche",
          "MISE EN PLACE D'UN DISPOSITIF D'INJECTION",
          "Insérer l'écarteur dans la partie arrière de la porte juste à côté du rail coulissant"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — PAVILLON COMPLET."
      },
      {
        "question": "Concernant « PAVILLON COMPLET », quelle proposition est HORS sujet ?",
        "options": [
          "ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES",
          "Coupe ceinture Protections de coupes Cisailles",
          "Couper les montants A et B selon la charte graphique en suivant un ordre judicieux",
          "Objectif : Réalisé l'accée à d'une victime incarcérée en dégageant le pavillon"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « PAVILLON COMPLET »."
      },
      {
        "question": "Concernant « PAVILLON COMPLET », quelle proposition est HORS sujet ?",
        "options": [
          "Gérer le pare brise et les vitrages selon les fiches techniques réalisées Dégarnir les montants",
          "Soulever le pavillon et l'évacuer vers la zone de dépôt des structures",
          "Parmi les victimes, on distingue",
          "Couper les montants en prenant garde de ne pas sectionner les vérins du coffre (les gérer au préalable)"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « PAVILLON COMPLET »."
      },
      {
        "question": "Concernant « PAVILLON COMPLET », quelle proposition est HORS sujet ?",
        "options": [
          "Couper les montants en prenant garde de ne pas sectionner les vérins du coffre (les gérer au préalable)",
          "Astuce(s) : La scie sabre peut être un outil complémentaire pour la césarisation des montants et du pare brise",
          "Outil de dégarnissage Crayon carrosserie",
          "extincteur a poudre et CO2"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « PAVILLON COMPLET »."
      },
      {
        "question": "Concernant « PAVILLON COMPLET », quelle proposition est HORS sujet ?",
        "options": [
          "Gérer le pare brise et les vitrages selon les fiches techniques réalisées Dégarnir les montants",
          "Intervention sur route Accident sur 1 seule voie",
          "Couper les montants en prenant garde de ne pas sectionner les vérins du coffre (les gérer au préalable)",
          "Objectif : Réalisé l'accée à d'une victime incarcérée en dégageant le pavillon"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « PAVILLON COMPLET »."
      },
      {
        "question": "Concernant « PAVILLON COMPLET », quelle proposition est HORS sujet ?",
        "options": [
          "Couper les montants A et B selon la charte graphique en suivant un ordre judicieux",
          "Gérer le pare brise et les vitrages selon les fiches techniques réalisées Dégarnir les montants",
          "Soulever le pavillon et l'évacuer vers la zone de dépôt des structures",
          "image: schéma de calage sur 3 points"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « PAVILLON COMPLET »."
      },
      {
        "question": "Concernant « PAVILLON COMPLET », quelle proposition est HORS sujet ?",
        "options": [
          "Soulever le pavillon et l'évacuer vers la zone de dépôt des structures",
          "Couper les montants A et B selon la charte graphique en suivant un ordre judicieux",
          "MARCHE GENERALE DES OPERATIONS",
          "Astuce(s) : La scie sabre peut être un outil complémentaire pour la césarisation des montants et du pare brise"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « PAVILLON COMPLET »."
      },
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est exacte ?",
        "options": [
          "La mouchette est un instrument de contention qui permet de tenir l'animal par le nez",
          "La courroie d'amarre est fermée",
          "Outil de dégarnissage Crayon carrosserie Cisailles",
          "les lames droites permettent la section de métaux de diamètre plus important (montant arrière (C))"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Matériels nécessaires."
      },
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est exacte ?",
        "options": [
          "Coupe ceinture Protections de coupes",
          "Surveillance des victimes intoxiquées par inhalation de gaz toxique",
          "Une fois le vitrage brisé, passez la main à l'intérieur pour déposer le vitrage entier vers l'extérieur",
          "La lacette est une cordelette d'une longueur de 1,20 m. Elle permet de museler tous les animaux à museau pointu"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Matériels nécessaires."
      },
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est exacte ?",
        "options": [
          "Ascenseur à moteur à attaque directe",
          "Les blessés : victimes non tuées",
          "Dégarni les montants B et C et gérer les vitrages",
          "citerne environ 500 litres"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Matériels nécessaires."
      },
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES",
          "reste au niveau de la porte palière par laquelle sera réalisée l'évacuation,",
          "Si demi-pavillon avant : couper selon la charte graphique les montants B et C",
          "Chef d'agrès Chef d'équipe ou 1er chef 2e chef Servant ou 1er servant 2e servant Sapeur de liaison"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Matériels nécessaires."
      },
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est exacte ?",
        "options": [
          "Si demi-pavillon arrière : couper selon la charte graphique les montants A et B",
          "Hydraulique BI-PI et l'engin",
          "« Comment vont réagir les 2 morceaux ? »",
          "Pression aux lances : 6 bars (lance non autorégulée)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Matériels nécessaires."
      },
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est exacte ?",
        "options": [
          "Toujours travailler avec une chaîne bien affûtée",
          "Intervention dans un rond point",
          "Effectuer une coupe de décharge à l'endroit du pliage après dégarnissage",
          "1/Les mesures à prendre avant d'intervenir sur la cabine"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Matériels nécessaires."
      },
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est exacte ?",
        "options": [
          "Écrasement dans l'espace vitré",
          "Soulever puis basculer le pavillon vers l'avant ou l'arrière",
          "L'établissement d'alimentation permet d'alimenter la pompe de l'engin",
          "laver et rincer le mùatériel après usage"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Matériels nécessaires."
      }
    ]
  },
  {
    "id": "qcm-sr-serie-10",
    "title": "SR — Secours routier — Série 10",
    "level": "niveau-1",
    "category": "secourisme",
    "questions": [
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est exacte ?",
        "options": [
          "poignée de maintien",
          "Hébergement des sinistrés",
          "En cas de présence d'un hayon : le déposer au préalable",
          "Distribution des denrées aux sinistrés"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Matériels nécessaires."
      },
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est exacte ?",
        "options": [
          "Protéger les parties saillantes",
          "Pousser le montant avec le vérin",
          "Coupe pare-brise Scie sabre Halligan tool ou outils de forcement",
          "Écrasement dans l'espace vitré"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Matériels nécessaires."
      },
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est HORS sujet ?",
        "options": [
          "Soulever puis basculer le pavillon vers l'avant ou l'arrière",
          "Protéger les parties saillantes",
          "Dégarni les montants B et C et gérer les vitrages",
          "ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Matériels nécessaires »."
      },
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est HORS sujet ?",
        "options": [
          "Protéger les parties saillantes",
          "Si demi-pavillon arrière : couper selon la charte graphique les montants A et B",
          "En cas de présence d'un hayon : le déposer au préalable",
          "Parmi les victimes, on distingue"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Matériels nécessaires »."
      },
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est HORS sujet ?",
        "options": [
          "Si demi-pavillon avant : couper selon la charte graphique les montants B et C",
          "Soulever puis basculer le pavillon vers l'avant ou l'arrière",
          "Coupe ceinture Protections de coupes",
          "extincteur a poudre et CO2"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Matériels nécessaires »."
      },
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est HORS sujet ?",
        "options": [
          "Soulever puis basculer le pavillon vers l'avant ou l'arrière",
          "Intervention sur route Accident sur 1 seule voie",
          "En cas de présence d'un hayon : le déposer au préalable",
          "Protéger les parties saillantes"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Matériels nécessaires »."
      },
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est HORS sujet ?",
        "options": [
          "En cas de présence d'un hayon : le déposer au préalable",
          "Si demi-pavillon avant : couper selon la charte graphique les montants B et C",
          "image: schéma de calage sur 3 points",
          "Si demi-pavillon arrière : couper selon la charte graphique les montants A et B"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Matériels nécessaires »."
      },
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est HORS sujet ?",
        "options": [
          "Dégarni les montants B et C et gérer les vitrages",
          "Si demi-pavillon arrière : couper selon la charte graphique les montants A et B",
          "MARCHE GENERALE DES OPERATIONS",
          "Effectuer une coupe de décharge à l'endroit du pliage après dégarnissage"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « Matériels nécessaires »."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est exacte ?",
        "options": [
          "le pointeau repose dans un coin de la vitre,",
          "GERER UN PARE-BRISE COLLE / JOINTE",
          "ZAT (zone d'attaque) : les lances y sont établies (lances canon et lances à main) ; cette zone peut-être divisée en secteurs d'attaque",
          "définir les moyens à mettre en œuvre (matériels et personnels)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — GERER UN PARE-BRISE COLLE / JOINTE."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est exacte ?",
        "options": [
          "débloquer le système de freinage,",
          "Réaction immédiate, Message d'ambiance complet, Demande de renfort",
          "Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)",
          "Objectif : Savoir identifier et déposer un pare brise (collé/jointé) en toute sécurité"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — GERER UN PARE-BRISE COLLE / JOINTE."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est exacte ?",
        "options": [
          "En cas de présence d'un hayon : le déposer au préalable",
          "Outil de dégarnissage Crayon carrosserie Cisailles",
          "Coupe pare-brise ou scie sabre",
          "5- procéder à l'entaille d'abattage"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — GERER UN PARE-BRISE COLLE / JOINTE."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est exacte ?",
        "options": [
          "vérifier la présence d'une fiche de terre",
          "L'établissement d'alimentation permet d'alimenter la pompe de l'engin",
          "Mettre le starter, enfoncer le levier des gaz et le bouton de blocage",
          "Identifier le pare-brise comme feuilleté"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — GERER UN PARE-BRISE COLLE / JOINTE."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est exacte ?",
        "options": [
          "Perforer le pare-brise pour introduire la lame de scie",
          "image: schéma de calage d'un véhicule sur 3 ou 4 points",
          "Protection des sauveteurs : tenue de feu et ARI en nombre suffisant,",
          "Le non respect de cette directive entraîne automatiquement la responsabilité de l'intéressé et/ou de son chef"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — GERER UN PARE-BRISE COLLE / JOINTE."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est exacte ?",
        "options": [
          "Pression à la lance : 6 bars (lance non autorégulée)",
          "chien : morsures chat : morsures, griffures",
          "Effectuer un trait de scie vers le bas de chaque côté du pare-brise",
          "Positionner le vérin contre la cale en bois et le montant"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — GERER UN PARE-BRISE COLLE / JOINTE."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est exacte ?",
        "options": [
          "matériels sur ordre",
          "Précision au niveau du déplacement",
          "Effectuer la découpe de la partie inférieure",
          "reconnaître les lieux (type d'ascenseur, emplacement de la cabine et du local machinerie),"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — GERER UN PARE-BRISE COLLE / JOINTE."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est exacte ?",
        "options": [
          "espèces qui vivent dans la nature et qui ne sont pas habituées au contact avec l'homme",
          "La couverture est utilisée pour la contention des lézards, des iguanes. En jetant la couverture sur l'animal, il va se sentir caché et va se calmer",
          "Gérer le pare brise et les vitrages selon les fiches techniques réalisées Dégarnir les montants",
          "Finir par la découpe de la partie supérieure"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — GERER UN PARE-BRISE COLLE / JOINTE."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est exacte ?",
        "options": [
          "Soulever le pavillon et l'évacuer vers la zone de dépôt des structures",
          "Déposer ensuite l'ensemble du pare-brise feuilleté",
          "à moteur à attaque directe (couramment appelé \"Gearless\" ou sans treuil),",
          "Objectif : Savoir gérer les différents vitrages et utiliser les outils adaptés en réduisant au maximum les débris et poussières"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — GERER UN PARE-BRISE COLLE / JOINTE."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est exacte ?",
        "options": [
          "quantifier la hauteur et le volume d'eau à épuiser",
          "Couper et déposer l'ensemble du joint",
          "Liberté de mouvement des intervenants",
          "Comme il n'a pas d'odeur et qu'il est invisible à l'oeil, seul un appareil de mesures permet de donner l'alarme"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — GERER UN PARE-BRISE COLLE / JOINTE."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est HORS sujet ?",
        "options": [
          "GERER UN PARE-BRISE COLLE / JOINTE",
          "ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES",
          "Perforer le pare-brise pour introduire la lame de scie",
          "Finir par la découpe de la partie supérieure"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « GERER UN PARE-BRISE COLLE / JOINTE »."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est HORS sujet ?",
        "options": [
          "Parmi les victimes, on distingue",
          "Déposer ensuite l'ensemble du pare-brise feuilleté",
          "Objectif : Savoir identifier et déposer un pare brise (collé/jointé) en toute sécurité",
          "Extraire le vitrage en le poussant vers l'extérieur"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « GERER UN PARE-BRISE COLLE / JOINTE »."
      }
    ]
  },
  {
    "id": "qcm-sr-serie-11",
    "title": "SR — Secours routier — Série 11",
    "level": "niveau-2",
    "category": "secourisme",
    "questions": [
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est HORS sujet ?",
        "options": [
          "Effectuer un trait de scie vers le bas de chaque côté du pare-brise",
          "Identifier le pare-brise comme feuilleté",
          "extincteur a poudre et CO2",
          "Objectif : Savoir identifier et déposer un pare brise (collé/jointé) en toute sécurité"
        ],
        "answer": 2,
        "explanation": "Cette proposition ne figure pas dans la rubrique « GERER UN PARE-BRISE COLLE / JOINTE »."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est HORS sujet ?",
        "options": [
          "Perforer le pare-brise pour introduire la lame de scie",
          "Effectuer un trait de scie vers le bas de chaque côté du pare-brise",
          "Identifier le pare-brise comme feuilleté",
          "Intervention sur route Accident sur 1 seule voie"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « GERER UN PARE-BRISE COLLE / JOINTE »."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est HORS sujet ?",
        "options": [
          "Effectuer la découpe de la partie inférieure",
          "Couper et déposer l'ensemble du joint",
          "Identifier le pare-brise comme feuilleté",
          "image: schéma de calage sur 3 points"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « GERER UN PARE-BRISE COLLE / JOINTE »."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est HORS sujet ?",
        "options": [
          "MARCHE GENERALE DES OPERATIONS",
          "Coupe pare-brise ou scie sabre",
          "Extraire le vitrage en le poussant vers l'extérieur",
          "Déposer ensuite l'ensemble du pare-brise feuilleté"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « GERER UN PARE-BRISE COLLE / JOINTE »."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est exacte ?",
        "options": [
          "GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE",
          "Ouvrir l'écarteur pour faire céder la serrure",
          "Ils établissent les tuyaux de 45 mm des raccords d'injection vers la MPVE (1 tuyau directement raccordé sur la MPVE avant la division 50x2x50)",
          "ETABLISSEMENT DE LA LIGNE D'ATTAQUE"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est exacte ?",
        "options": [
          "Fin d'intervention RATP -SNCF",
          "Objectif : Savoir gérer les différents vitrages et utiliser les outils adaptés en réduisant au maximum les débris et poussières",
          "s'assure qu'aucun dégât n'a été occasionné,",
          "2.1 Ces forces s'exercent lorsque l'arbre est tombé et repose sur un autre plan"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est exacte ?",
        "options": [
          "ne pas rétablir le courant,",
          "Vérifier mutuellement l'étanchéité des combinaisons,",
          "2 tuyaux de 45 x 20 m pliés en écheveau dont l'un est doté d'une lance à double régulation",
          "Pointeau ou séccoise"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est exacte ?",
        "options": [
          "« Comment vont réagir les 2 morceaux ? »",
          "Les ascenseurs à traction à câbles sont les types d'ascenseurs que l'on rencontre le plus, notamment dans les bâtiments de bureaux",
          "Coupe pare-brise Scie sabre Halligan tool ou outils de forcement",
          "Toujours se poser les questions suivantes : « Suis-je en sécurité là où je me trouve ? »"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est exacte ?",
        "options": [
          "force de compression : sur laquelle on se limitera à une coupe de dégagement, la pression exercée étant capable de bloquer le guide chaîne",
          "se protéger les mains par des gants",
          "1- Identification du tronc à abattre",
          "Identification du vitrage : repérer visuellement le marquage gravé dans le vitrage pour connaitre le type si présence d'un marquage"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est exacte ?",
        "options": [
          "Interdiction d'accès de la zone au public et aux personnels d'intervention sauf ceux strictement nécessaires",
          "veiller à ce que la prise de courant soit munie d'une prise de terre,",
          "Distance entre l'installation",
          "Trempé : Se dépose après scotchage à l'aide d'un pointeau choc"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est exacte ?",
        "options": [
          "Il peut exister pour une même intervention plusieurs ZAL, ZE ou ZAT",
          "La pince à chat permet de saisir le cou du chat et de le serrer grâce à la poignée",
          "Une fois le vitrage brisé, passez la main à l'intérieur pour déposer le vitrage entier vers l'extérieur",
          "Objectif : Savoir Ouvrir une porte (méthode classique)"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est exacte ?",
        "options": [
          "remet le matériel en place (échelle, clé machinerie) et rejoint son équipier,",
          "s'assurer de la fermeture des portes palières,",
          "Feuilleté : Se découpe à l'aide du coupe pare-brise ou d'une scie sabre. Protection respiratoire type masque FFP2 obligatoire (pour sauveteurs et v...",
          "mettre éventuellement un panier en osier,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est exacte ?",
        "options": [
          "Plastique type polycarbonate : La casse est difficile, il faut le retirer/déboîter à l'aide d'un outil de forcement",
          "L'établissement rapide d'une seconde lance sur la division",
          "2 tuyaux de 45 x 20 m pliés en écheveau dont l'un est doté d'une lance à double régulation",
          "espèces protégées : faune sauvage captive; la détention d'espèces protégées est réglementée"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est HORS sujet ?",
        "options": [
          "Coupe pare-brise Scie sabre Halligan tool ou outils de forcement",
          "ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES",
          "Plastique type polycarbonate : La casse est difficile, il faut le retirer/déboîter à l'aide d'un outil de forcement",
          "Feuilleté : Se découpe à l'aide du coupe pare-brise ou d'une scie sabre. Protection respiratoire type masque FFP2 obligatoire (pour sauveteurs et v..."
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE »."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est HORS sujet ?",
        "options": [
          "Pointeau ou séccoise",
          "Parmi les victimes, on distingue",
          "Plastique type polycarbonate : La casse est difficile, il faut le retirer/déboîter à l'aide d'un outil de forcement",
          "Coupe pare-brise Scie sabre Halligan tool ou outils de forcement"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE »."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est HORS sujet ?",
        "options": [
          "Coupe pare-brise Scie sabre Halligan tool ou outils de forcement",
          "Identification du vitrage : repérer visuellement le marquage gravé dans le vitrage pour connaitre le type si présence d'un marquage",
          "Objectif : Savoir gérer les différents vitrages et utiliser les outils adaptés en réduisant au maximum les débris et poussières",
          "extincteur a poudre et CO2"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE »."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est HORS sujet ?",
        "options": [
          "Intervention sur route Accident sur 1 seule voie",
          "Feuilleté : Se découpe à l'aide du coupe pare-brise ou d'une scie sabre. Protection respiratoire type masque FFP2 obligatoire (pour sauveteurs et v...",
          "Une fois le vitrage brisé, passez la main à l'intérieur pour déposer le vitrage entier vers l'extérieur",
          "Coupe pare-brise Scie sabre Halligan tool ou outils de forcement"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE »."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est HORS sujet ?",
        "options": [
          "Coupe pare-brise Scie sabre Halligan tool ou outils de forcement",
          "GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE",
          "Objectif : Savoir gérer les différents vitrages et utiliser les outils adaptés en réduisant au maximum les débris et poussières",
          "image: schéma de calage sur 3 points"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE »."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est HORS sujet ?",
        "options": [
          "Objectif : Savoir gérer les différents vitrages et utiliser les outils adaptés en réduisant au maximum les débris et poussières",
          "GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE",
          "Feuilleté : Se découpe à l'aide du coupe pare-brise ou d'une scie sabre. Protection respiratoire type masque FFP2 obligatoire (pour sauveteurs et v...",
          "MARCHE GENERALE DES OPERATIONS"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE »."
      },
      {
        "question": "Concernant « LE RETRAIT DES VITRES », quelle proposition est exacte ?",
        "options": [
          "Evacuations de zones menacées",
          "Objectif : Savoir retrait une vitre",
          "MANŒUVRE DE LA LANCE CANON MOUSSE",
          "débloquer le système de freinage,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — LE RETRAIT DES VITRES."
      }
    ]
  },
  {
    "id": "qcm-sr-serie-12",
    "title": "SR — Secours routier — Série 12",
    "level": "niveau-avance",
    "category": "secourisme",
    "questions": [
      {
        "question": "Concernant « LE RETRAIT DES VITRES », quelle proposition est exacte ?",
        "options": [
          "Pointeau ou séccoise",
          "MARCHE GENERALE DES OPERATIONS",
          "Identification du vitrage : repérer visuellement le marquage gravé dans le vitrage pour connaitre le type si présence d'un marquage",
          "engager le minimum de personnel"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LE RETRAIT DES VITRES."
      },
      {
        "question": "Concernant « LE RETRAIT DES VITRES », quelle proposition est exacte ?",
        "options": [
          "espèces domestiques : espèces communes apprivoisées par l'homme",
          "Positionner le coupe pare-brise de telle façon que",
          "« Par où est mon chemin de fuite ? »",
          "Débit de l'installation"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — LE RETRAIT DES VITRES."
      },
      {
        "question": "Concernant « LE RETRAIT DES VITRES », quelle proposition est exacte ?",
        "options": [
          "le pointeau repose dans un coin de la vitre,",
          "« Par où est mon chemin de fuite ? »",
          "Il assure la surveillance des tuyaux de 45 mm et contrôle régulièrement le niveau d'émulseur et rend compte de la quantité restante",
          "Les aspirateurs à eau"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LE RETRAIT DES VITRES."
      },
      {
        "question": "Concernant « LE RETRAIT DES VITRES », quelle proposition est exacte ?",
        "options": [
          "se protéger les mains par des gants",
          "Quel que soit le type, les ascenseurs à traction à câbles comprennent généralement",
          "Les 2 parties jaunes sur la carrosserie. Cela permet de ne pas passer la main à travers la vitre",
          "mettre éventuellement un panier en osier,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — LE RETRAIT DES VITRES."
      },
      {
        "question": "Concernant « LE RETRAIT DES VITRES », quelle proposition est exacte ?",
        "options": [
          "Protège main avant (Qui déclenche le frein de chaine)",
          "Comme il n'a pas d'odeur et qu'il est invisible à l'oeil, seul un appareil de mesures permet de donner l'alarme",
          "Une fois brisée, retirer le restant de la vitre. Pour vous aider, il est possible de créer une poignée avec le ruban adhésif utilisé",
          "Elles peuvent posséder des lames de différentes formes, pour de multiples applications"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — LE RETRAIT DES VITRES."
      },
      {
        "question": "Concernant « LE RETRAIT DES VITRES », quelle proposition est HORS sujet ?",
        "options": [
          "Positionner le coupe pare-brise de telle façon que",
          "le pointeau repose dans un coin de la vitre,",
          "Une fois brisée, retirer le restant de la vitre. Pour vous aider, il est possible de créer une poignée avec le ruban adhésif utilisé",
          "ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LE RETRAIT DES VITRES »."
      },
      {
        "question": "Concernant « LE RETRAIT DES VITRES », quelle proposition est HORS sujet ?",
        "options": [
          "Les 2 parties jaunes sur la carrosserie. Cela permet de ne pas passer la main à travers la vitre",
          "Parmi les victimes, on distingue",
          "Positionner le coupe pare-brise de telle façon que",
          "le pointeau repose dans un coin de la vitre,"
        ],
        "answer": 1,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LE RETRAIT DES VITRES »."
      },
      {
        "question": "Concernant « LE RETRAIT DES VITRES », quelle proposition est HORS sujet ?",
        "options": [
          "extincteur a poudre et CO2",
          "Une fois brisée, retirer le restant de la vitre. Pour vous aider, il est possible de créer une poignée avec le ruban adhésif utilisé",
          "Objectif : Savoir retrait une vitre",
          "Pointeau ou séccoise"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LE RETRAIT DES VITRES »."
      },
      {
        "question": "Concernant « LE RETRAIT DES VITRES », quelle proposition est HORS sujet ?",
        "options": [
          "Intervention sur route Accident sur 1 seule voie",
          "le pointeau repose dans un coin de la vitre,",
          "Pointeau ou séccoise",
          "Une fois brisée, retirer le restant de la vitre. Pour vous aider, il est possible de créer une poignée avec le ruban adhésif utilisé"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LE RETRAIT DES VITRES »."
      },
      {
        "question": "Concernant « LE RETRAIT DES VITRES », quelle proposition est HORS sujet ?",
        "options": [
          "image: schéma de calage sur 3 points",
          "Objectif : Savoir retrait une vitre",
          "Une fois brisée, retirer le restant de la vitre. Pour vous aider, il est possible de créer une poignée avec le ruban adhésif utilisé",
          "le pointeau repose dans un coin de la vitre,"
        ],
        "answer": 0,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LE RETRAIT DES VITRES »."
      },
      {
        "question": "Concernant « LE RETRAIT DES VITRES », quelle proposition est HORS sujet ?",
        "options": [
          "Objectif : Savoir retrait une vitre",
          "le pointeau repose dans un coin de la vitre,",
          "Une fois brisée, retirer le restant de la vitre. Pour vous aider, il est possible de créer une poignée avec le ruban adhésif utilisé",
          "MARCHE GENERALE DES OPERATIONS"
        ],
        "answer": 3,
        "explanation": "Cette proposition ne figure pas dans la rubrique « LE RETRAIT DES VITRES »."
      }
    ]
  },
];
