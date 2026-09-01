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
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est exacte ?",
        "options": [
          "Par le chef d'agrès en fonction du sinistre, des capacités hydrauliques de l'engin et/ou de ses caractéristiques",
          "Cahier d'observations DSA",
          "ETABLISSEMENT D'UNE SECONDE LANCE SUR LA DIVISION",
          "Appareil qui permet de comprimer l'huile hydraulique pour servir les outils de sauvetage"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENT D'ALIMENTATION."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est exacte ?",
        "options": [
          "La lance est engagée dans la boucle constituée par la courroie d'amarre",
          "Tous les moyens de calage et d'arrimage des grosses pièces seront impérativement établis avant le travail de tronçonnage",
          "Poteau d'incendie (PI)",
          "La BA nécessite 14 m en linéaire pour déposer la berce"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENT D'ALIMENTATION."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est exacte ?",
        "options": [
          "Bouche d'incendie (BI)",
          "Survient sur une voie ouverte à la circulation publique",
          "La pince à chat permet de saisir le cou du chat et de le serrer grâce à la poignée",
          "Les bras de levier d'écartement"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENT D'ALIMENTATION."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est exacte ?",
        "options": [
          "Aspiration (nappe ou cours d'eau)",
          "Bouchon du réservoir d'oïl",
          "Matériel de désincarcération comprend une cisaille, un écarteur, et des vérins hydraulique",
          "porcin : morsures, tentatives de charge (sanglier)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENT D'ALIMENTATION."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est exacte ?",
        "options": [
          "d'un moteur électrique accouplé à une pompe hydraulique,",
          "Relais (engin, motopompe, VEDI…)",
          "Pointeau ou séccoise",
          "4- Déterminer la direction de la chute"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENT D'ALIMENTATION."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est exacte ?",
        "options": [
          "Distance entre l'installation",
          "Faire assurer l'entretien des tronçonneuses dès le retour,",
          "laver et rincer le mùatériel après usage",
          "le remettre aux forces de l'ordre, au vétérinaire"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENT D'ALIMENTATION."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est exacte ?",
        "options": [
          "Une fois brisée, retirer le restant de la vitre. Pour vous aider, il est possible de créer une poignée avec le ruban adhésif utilisé",
          "Liberté de mouvement des intervenants",
          "Hydraulique BI-PI et l'engin",
          "course verticale limitée à une hauteur entre 15 et 18 m"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENT D'ALIMENTATION."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est exacte ?",
        "options": [
          "Débit de l'installation",
          "Ne pas pulvériser loin de l'orifice mais toujours dans l'entrée principale utilisée par les insectes",
          "N'utiliser la tronçonneuse que dans des endroits ventilés",
          "Être toujours en mesure de maîtriser la machine,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENT D'ALIMENTATION."
      },
      {
        "question": "Concernant « ETABLISSEMENT D'ALIMENTATION », quelle proposition est exacte ?",
        "options": [
          "ZAT (zone d'attaque) : les lances y sont établies (lances canon et lances à main) ; cette zone peut-être divisée en secteurs d'attaque",
          "Diamètre de la conduite",
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
          "Le chef d'agrès se rend au point d'eau le plus approprié à la manoeuvre qu'il compte réaliser",
          "Les indemnes : impliqués non décédés et dont l'état ne nécessite aucun soin médical",
          "L'établissement rapide d'une seconde lance sur la division"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENT D'ALIMENTATION."
      },
      {
        "question": "Concernant « GENERALITE », quelle proposition est exacte ?",
        "options": [
          "Positionner le coupe pare-brise de telle façon que",
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant",
          "L'établissement rapide d'une ligne de 70 mm en cas d'indisponibilité d'une colonne sèche ou humide",
          "vidanger le corps de pompe et rincer la MPE après chaque utilisation"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — GENERALITE."
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
        "question": "Concernant « GENERALITE », quelle proposition est exacte ?",
        "options": [
          "Il existe plusieurs types de matériel, par exemple",
          "Pincer le bas de caisse pour créer une ouverture au niveau de la portière",
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance",
          "Pour aborder un chien, l'homme doit se faire considérer comme l'individu dominant, l'animal adoptera alors une attitude de soumission"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — GENERALITE."
      },
      {
        "question": "Concernant « GENERALITE », quelle proposition est exacte ?",
        "options": [
          "Lors de la phase d'extinction, le débit des lances doit être adapté",
          "ne pas placer l'appareil sous des écoulements d'eau,",
          "Situation : Reconnaître les lieux (type de la machine, emplacement de la cabine et du local de la machinerie)",
          "Zone de déploiement initial"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — GENERALITE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE SECURITE », quelle proposition est exacte ?",
        "options": [
          "Fiche individuelle de signalement des incidents et agressions",
          "ETABLISSEMENTS D'ATTAQUE SECURITE",
          "fuite sur canalisation d'alimentation ou d'évacuation",
          "mettre éventuellement un panier en osier,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE SECURITE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE SECURITE », quelle proposition est exacte ?",
        "options": [
          "Au cours de l'attaque, le port complet des EPI est obligatoire",
          "coupe l'alimentation à l'exception de l'éclairage cabine,",
          "Poteau d'incendie (PI)",
          "Ne jamais utiliser d'essence pour détruire un nid"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE SECURITE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE SECURITE », quelle proposition est exacte ?",
        "options": [
          "La lance est placée au niveau du ceinturon, le tuyau passe sur l'épaule",
          "mettre éventuellement un panier en osier,",
          "3e et 4e lances (eau ou mousse)",
          "Le non respect de cette directive entraîne automatiquement la responsabilité de l'intéressé et/ou de son chef"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE SECURITE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS », quelle proposition est exacte ?",
        "options": [
          "Ne jamais utiliser d'essence pour détruire un nid",
          "Le chef d'agrès désigne au conducteur l'orifice d'alimentation du poteau relais",
          "Etablir deux lignes de 110 mm, permettant de disposer de deux points d'eau avancés (2divisions 100 / 3 x50) jusqu'à 1 000 m",
          "ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS », quelle proposition est exacte ?",
        "options": [
          "Placer une cale dans la poignée de porte",
          "Matériel de base Matériel de base",
          "Soutien psychologique",
          "Un commandement initial"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS », quelle proposition est exacte ?",
        "options": [
          "efficacité énergétique importante",
          "Ils se composent principalement de",
          "Grille de protection du visage",
          "Un commandement d'exécution"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS », quelle proposition est exacte ?",
        "options": [
          "espèces qui vivent dans la nature et qui ne sont pas habituées au contact avec l'homme",
          "ou à partir de citernes de stockage, via un réseau simple",
          "Effectuer la découpe de la partie inférieure",
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES », quelle proposition est exacte ?",
        "options": [
          "Ne pas allumer de feu pour réaliser la destruction mais pulvériser le produit insecticide à l'intérieur de la cheminée",
          "ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES",
          "Raccordement Tuyau de 45mm P = 10B",
          "La destruction doit toujours se dérouler à la tombée de la nuit, ou le matin avant le lever du soleil"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES », quelle proposition est exacte ?",
        "options": [
          "1re et 2e lance (eau ou mousse)",
          "2 clés tricoises de 100 mm CA ou BA",
          "Le lasso permet de maîtriser les chiens ou les chats",
          "Maintien de l'ordre"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES », quelle proposition est exacte ?",
        "options": [
          "Distribution des denrées aux sinistrés",
          "Le chef d'agrès rend compte de la mise en place du dispositif",
          "Lance du dévidoir tournant (LDT)",
          "Les blessés légers : victimes ayant fait l'objet de soins médicaux mais n'ayant pas été admises comme patients à l'hôpital plus de 24 heures"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES », quelle proposition est exacte ?",
        "options": [
          "Matériel de base Matériel de base",
          "Vérifier mutuellement l'étanchéité des combinaisons,",
          "Une lance (eau ou mousse) et la LDT",
          "Coupe pare-brise Scie sabre Halligan tool ou outils de forcement"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES », quelle proposition est exacte ?",
        "options": [
          "3e et 4e lances (eau ou mousse)",
          "apprécier la nature et le nombre des locaux inondés ou menacés (étages inférieurs et supérieurs, locaux attenants)",
          "d'un réservoir d'huile,",
          "S'assurer de l'état de la ou des personnes à l'intérieur, les rassurer de vive voix (recommander aux passagers de ne pas quitter la cabine)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES."
      },
      {
        "question": "Concernant « ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES », quelle proposition est exacte ?",
        "options": [
          "Action pratiquement instantanée et irréversible par paralysie suivie de mort",
          "Il peut exister pour une même intervention plusieurs ZAL, ZE ou ZAT",
          "La pression en sortie de pompe doit être de 8,75 bars, soit 9 bars pour un établissement de plain-pied",
          "Cas particuliers (équipe à 3)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES."
      },
      {
        "question": "Concernant « LES MATERIEL DE BASE A EMPORTER », quelle proposition est exacte ?",
        "options": [
          "LES MATERIEL DE BASE A EMPORTER",
          "Fin d'intervention RATP -SNCF",
          "Ils établissent les tuyaux de 45 mm des raccords d'injection vers la MPVE (1 tuyau directement raccordé sur la MPVE avant la division 50x2x50)",
          "Réaction immédiate, Message d'ambiance complet, Demande de renfort"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LES MATERIEL DE BASE A EMPORTER."
      },
      {
        "question": "Concernant « LES MATERIEL DE BASE A EMPORTER », quelle proposition est exacte ?",
        "options": [
          "Identification des victimes",
          "Etablissement au moyen de la L.A (Cf. manoeuvre de la ligne d'attaque)",
          "Les cuissardes évitent aux sauveteurs d'avoir les vêtements humides",
          "Liaison personnelle (hormis F)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — LES MATERIEL DE BASE A EMPORTER."
      },
      {
        "question": "Concernant « LES MATERIEL DE BASE A EMPORTER », quelle proposition est exacte ?",
        "options": [
          "Effectuer un trait de scie vers le bas de chaque côté du pare-brise",
          "Outil de forcement et de déblai",
          "Interventions dans un rond point",
          "utiliser une crépine,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — LES MATERIEL DE BASE A EMPORTER."
      },
      {
        "question": "Concernant « LES MATERIEL DE BASE A EMPORTER », quelle proposition est exacte ?",
        "options": [
          "Forces de l'ordre : (Police ; Gendarmerie ; Forces auxiliaires)",
          "Liaison personnelle",
          "Pincer la porte légèrement au-dessus de la poignée pour se dégager un jour de quelques centimètres",
          "Le matériel utilisé pour la destruction est un pulvérisateur à pression préalable contenant un produit insecticide dont les qualités sont les suiva..."
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — LES MATERIEL DE BASE A EMPORTER."
      },
      {
        "question": "Concernant « LES MATERIEL DE BASE A EMPORTER », quelle proposition est exacte ?",
        "options": [
          "TGR+sacoche SDL+Lampe portative",
          "L'hydro-éjecteur est utilisé pour aspirer un volume d'eau limité et pour pomper à partir d'une nappe d'eau",
          "Gêne à la progression des engins d'incendie",
          "Tirer le cordon de lancement jusqu'au déclenchement du premier allumage audible"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LES MATERIEL DE BASE A EMPORTER."
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
        "question": "Concernant « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION », quelle proposition est exacte ?",
        "options": [
          "2 tricoises de 100 mm du CA ou BA",
          "A ces périodes de la journée tous les insectes ont alors rejoint leur nid",
          "LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION",
          "Les blessés : victimes non tuées"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION."
      },
      {
        "question": "Concernant « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION », quelle proposition est exacte ?",
        "options": [
          "reconnaître les lieux (type d'ascenseur, emplacement de la cabine et du local machinerie),",
          "Couper le contact avant d'effectuer un contrôle sur la chaîne",
          "La mouchette est un instrument de contention qui permet de tenir l'animal par le nez",
          "Bon de prise en charge provisoire de matériel"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION."
      },
      {
        "question": "Concernant « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION », quelle proposition est exacte ?",
        "options": [
          "Avis de passage des sapeurs pompiers",
          "faire éloigner les curieux",
          "ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES",
          "pointes à couper : permettent l'utilisation d'un écarteur pour le découpage de plaque en métal très fine"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION."
      },
      {
        "question": "Concernant « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION », quelle proposition est exacte ?",
        "options": [
          "poignée de maintien",
          "On va s'intéresser ici au balisage réalisé avec le matériel du VSR (panneaux triflashs et cônes de Lubeck)",
          "Protège main avant (Qui déclenche le frein de chaine)",
          "Cahier d'observations DSA"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION."
      },
      {
        "question": "Concernant « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION », quelle proposition est exacte ?",
        "options": [
          "image: schéma de calage d'un véhicule sur 3 ou 4 points",
          "La pulvérisation d'insecticide doit être d'autant plus copieuse que l'ampleur de l'essaim est importante ou appréciée comme telle",
          "Bons de mouvement ST 30 bis",
          "amarrer la MPE si la surface n'est pas plane,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION."
      },
      {
        "question": "Concernant « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION », quelle proposition est exacte ?",
        "options": [
          "A partir de 50ppm, il nécessaire d'effectuer une évacuation pour une ventilation des lieux",
          "Gêne à la progression des engins d'incendie",
          "La couverture est utilisée pour la contention des lézards, des iguanes. En jetant la couverture sur l'animal, il va se sentir caché et va se calmer",
          "allumer les projecteurs portatifs à l'extérieur de la zone de danger"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION."
      },
      {
        "question": "Concernant « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION », quelle proposition est exacte ?",
        "options": [
          "ARRET TEMPORAIRE D'INJECTION (CIRCUIT FERME)",
          "TGR+sacoche SDL+Lampe portative",
          "Fiche individuelle de signalement des incidents et agressions",
          "ETABLISSEMENT VERTICAL SANS L.A"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION."
      },
      {
        "question": "Concernant « LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION », quelle proposition est exacte ?",
        "options": [
          "Fin d'intervention RATP -SNCF",
          "Evacuation complète",
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité",
          "Ces chaînes de traction sont composées de 2 parties, chacune est munie d'un crochet de raccourcissement qui permet d'attraper uniquement la chaîne"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est exacte ?",
        "options": [
          "La MPVE peut être mise en aspiration ou alimentée par la citerne d'un engin-pompe dont le moteur doit obligatoirement être à l'arrêt",
          "2 clés tricoises de 100 mm CA ou BA",
          "Le vide-cave est utilisé pour aspirer l'eau des caves, des its, des réservoirs",
          "ETABLISSEMENT DE LA LIGNE D'ATTAQUE"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LA LIGNE D'ATTAQUE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est exacte ?",
        "options": [
          "L'établissement d'une division au plus près du sinistre",
          "ETABLISSEMENT D'UNE SECONDE LANCE SUR LA DIVISION",
          "ne pas utiliser dans les locaux non ventilés,",
          "ou à partir de citernes de stockage, via un réseau simple"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LA LIGNE D'ATTAQUE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est exacte ?",
        "options": [
          "En règle générale, ces deux types utilisent l'énergie électrique pour déplacer les cabines verticalement (moteur électrique continu ou alternatif)",
          "Les blessés légers : victimes ayant fait l'objet de soins médicaux mais n'ayant pas été admises comme patients à l'hôpital plus de 24 heures",
          "L'établissement rapide d'une seconde lance sur la division",
          "définir avec précision les moyens nécessaires pour effectuer l'opération (motopompe, longueur et diamètre des tuyaux d'alimentation et de refouleme..."
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LA LIGNE D'ATTAQUE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est exacte ?",
        "options": [
          "utiliser un aspirateur à eau pour une hauteur d'eau ≤ 5 cm,",
          "Passer l'écarteur dans le jour de la porte au niveau du bas de caisse Ne pas se positionner entre l'outil et la portière",
          "La coupure de l'alimentation à la division pour remplacer ou prolonger l'établissement",
          "2.1 Ces forces s'exercent lorsque l'arbre est tombé et repose sur un autre plan"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LA LIGNE D'ATTAQUE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est exacte ?",
        "options": [
          "vérifier le bon déroulement de l'assèchement (crépine, évacuation),",
          "nettoyer de temps en temps la crépine,",
          "LES MATERIEL DE BASE A EMPORTER",
          "L'établissement rapide d'une ligne de 70 mm en cas d'indisponibilité d'une colonne sèche ou humide"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LA LIGNE D'ATTAQUE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est exacte ?",
        "options": [
          "Interdiction d'accès de la zone au public et aux personnels d'intervention sauf ceux strictement nécessaires",
          "De porter la puissance hydraulique à 1 000 l/min. par l'établissement d'une division50/2x 50",
          "enregistre la marque de l'ascenseur ainsi que les coordonnées de la société de maintenance,",
          "Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LA LIGNE D'ATTAQUE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est exacte ?",
        "options": [
          "De diminuer les pertes de charges et les \"coups de bélier\"",
          "GERER UN PARE-BRISE COLLE / JOINTE",
          "Les tués : toute personne qui décède sur le coup ou dans les trente jours qui suivent l'accident",
          "surveiller l'environnement et prévenir le danger"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LA LIGNE D'ATTAQUE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est exacte ?",
        "options": [
          "Ces forces devront être très clairement identifiées avant la coupe, de façon à ne pas être surpris lors de la libération",
          "Surveillance des victimes intoxiquées par inhalation de gaz toxique",
          "5 manchons souples, de taille variable, permettent de maintenir en place les tuyaux et de les guider au cours de l'établissement",
          "Evacuation complète"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LA LIGNE D'ATTAQUE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est exacte ?",
        "options": [
          "quitte les lieux et s'assure du respect de toutes les consignes de sécurité",
          "Etablissement au moyen de la L.A (Cf. manoeuvre de la ligne d'attaque)",
          "surveiller l'environnement et prévenir le danger",
          "3 tuyaux de 70 x 20 m pliés en écheveau (dont un équipé d'une division)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LA LIGNE D'ATTAQUE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LA LIGNE D'ATTAQUE », quelle proposition est exacte ?",
        "options": [
          "Fin d'intervention RATP -SNCF",
          "2 tuyaux de 45 x 20 m pliés en écheveau dont l'un est doté d'une lance à double régulation",
          "des câbles reliant la cabine au contre-poids,",
          "Écartement dans l'espace vitré"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LA LIGNE D'ATTAQUE."
      },
      {
        "question": "Concernant « 43. Expliquer le pliage des tuyaux 45 x 20 m ? », quelle proposition est exacte ?",
        "options": [
          "L'établissement d'alimentation permet d'alimenter la pompe de l'engin",
          "Les cuissardes évitent aux sauveteurs d'avoir les vêtements humides",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'eau et de l'air",
          "Une lance (eau ou mousse) et la LDT"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 43. Expliquer le pliage des tuyaux 45 x 20 m ?."
      },
      {
        "question": "Concernant « 43. Expliquer le pliage des tuyaux 45 x 20 m ? », quelle proposition est exacte ?",
        "options": [
          "surveiller l'environnement et prévenir le danger",
          "Si l'ouverture de porte est rendue difficile par le cadre de la vitre, le découper au moyen de la cisaille",
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre",
          "Les bovins : bague sanitaire (services vétérinaires)"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 43. Expliquer le pliage des tuyaux 45 x 20 m ?."
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
        "question": "Concernant « 43. Expliquer le pliage des tuyaux 45 x 20 m ? », quelle proposition est exacte ?",
        "options": [
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance",
          "Bons de mouvement ST 30 bis",
          "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon",
          "Les pompes hydrauliques"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 43. Expliquer le pliage des tuyaux 45 x 20 m ?."
      },
      {
        "question": "Concernant « 43. Expliquer le pliage des tuyaux 45 x 20 m ? », quelle proposition est exacte ?",
        "options": [
          "ZE (zone émulseur) : les moyens émulseurs (CA/BA, BEM, citernes des pétroliers) y sont regroupés et employés",
          "rapidité de déplacement",
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité",
          "OUVRIR UNE PORTE (METHODE CLASSIQUE)"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 43. Expliquer le pliage des tuyaux 45 x 20 m ?."
      },
      {
        "question": "Concernant « 43. Expliquer le pliage des tuyaux 45 x 20 m ? », quelle proposition est exacte ?",
        "options": [
          "un système de traction au-dessus de la cage de l'ascenseur,",
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a...",
          "espèces protégées : faune sauvage captive; la détention d'espèces protégées est réglementée",
          "Une fois brisée, retirer le restant de la vitre. Pour vous aider, il est possible de créer une poignée avec le ruban adhésif utilisé"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 43. Expliquer le pliage des tuyaux 45 x 20 m ?."
      },
      {
        "question": "Concernant « 43. Expliquer le pliage des tuyaux 45 x 20 m ? », quelle proposition est exacte ?",
        "options": [
          "Liberté de mouvement des intervenants",
          "L'utilisation d'émulseur est toujours suivie d'un abondant rinçage",
          "Basculer l'écheveau sur le flanc et ramener le demi-raccord qui se trouvait au sol sur le manchon pour l'attacher avec la courroie",
          "image: schéma de calage d'un véhicule sur 3 ou 4 points"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 43. Expliquer le pliage des tuyaux 45 x 20 m ?."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS », quelle proposition est exacte ?",
        "options": [
          "ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES",
          "ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS",
          "Basculer l'écheveau sur le flanc et ramener le demi-raccord qui se trouvait au sol sur le manchon pour l'attacher avec la courroie",
          "La ligne de 110 mm peut être établie du point d'eau vers le point d'attaque dans certaines circonstances"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS », quelle proposition est exacte ?",
        "options": [
          "Chef d'agrès Chef d'équipe ou 1er chef 2e chef Servant ou 1er servant 2e servant Sapeur de liaison",
          "« Où est mon emplacement le plus sûr après la coupe ? »",
          "Poteau d'incendie (PI)",
          "Eventuellement, répéter l'opération le lendemain"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS », quelle proposition est exacte ?",
        "options": [
          "l'équipier assure la protection de son binôme à l'aide d'un bâton",
          "Écrasement dans l'espace vitré",
          "Feuilleté : Se découpe à l'aide du coupe pare-brise ou d'une scie sabre. Protection respiratoire type masque FFP2 obligatoire (pour sauveteurs et v...",
          "Le chef d'agrès désigne au conducteur l'orifice d'alimentation du poteau relais"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS », quelle proposition est exacte ?",
        "options": [
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité",
          "Au SdL il désigne l'orifice de refoulement du poteau et l'orifice d'alimentation de la colonne sèche",
          "Cahier d'observations DSA",
          "On trouve, en partant du point d'eau vers le point d'attaque, les établissements"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE », quelle proposition est exacte ?",
        "options": [
          "Identification des victimes",
          "2 tuyaux de 45 x 20 m pliés en écheveau dont l'un est doté d'une lance à double régulation",
          "L'établissement de la ligne d'attaque (LA) est réalisé avec 3 tuyaux de 70 x 20 m (60 m) et 2 tuyaux de 45 x 20 m (40 m), soit une longueur de 100 m",
          "Poignée du lanceur"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE », quelle proposition est exacte ?",
        "options": [
          "espèces protégées : faune sauvage captive; la détention d'espèces protégées est réglementée",
          "définir les moyens à mettre en œuvre (matériels et personnels)",
          "disposer le vide-cave bien à plat sur son embase,",
          "Pression à la lance : 6 bars (lance non autorégulée)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE », quelle proposition est exacte ?",
        "options": [
          "1/Les mesures à prendre avant d'intervenir sur la cabine",
          "Objectif : Savoir ouvrir une porte d'un véhicule sur le toit",
          "Perte de charge dans les tuyaux de 70 mm : 0,45 bar pour 60 m",
          "Basculer l'écheveau sur le flanc et ramener le demi-raccord qui se trouvait au sol sur le manchon pour l'attacher avec la courroie"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE », quelle proposition est exacte ?",
        "options": [
          "Conducteur et passager Calage 4 points minimum + 1 roue",
          "En règle générale, ces établissements se font du point d'attaque au point d'eau",
          "Positionner le vérin contre la cale en bois et le montant",
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars pour 40 m"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE », quelle proposition est exacte ?",
        "options": [
          "Il existe plusieurs types de matériel, par exemple",
          "La pression en sortie de pompe doit être de 8,75 bars, soit 9 bars pour un établissement de plain-pied",
          "LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR",
          "Un accident corporel implique un certain nombre d'usagers. Parmi ceux-ci, on distingue"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE."
      },
      {
        "question": "Concernant « ETABLISSEMENT DE LANCE », quelle proposition est exacte ?",
        "options": [
          "ne jamais immerger la fiche du câble,",
          "Outil de forcement et de déblai",
          "Il faut penser à rajouter 1 bar de pression pour 10 m de dénivelée positive à la pression en sortie de pompe",
          "Le chef d'agrès et le conducteur"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENT DE LANCE."
      },
      {
        "question": "Concernant « ALIMENTATION ET PRESSION A LA POMPE », quelle proposition est exacte ?",
        "options": [
          "La coupure de l'alimentation à la division pour remplacer ou prolonger l'établissement",
          "illustration: tronçonneuse en utilisation",
          "Si demi-pavillon avant : couper selon la charte graphique les montants B et C",
          "ALIMENTATION ET PRESSION A LA POMPE"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ALIMENTATION ET PRESSION A LA POMPE."
      },
      {
        "question": "Concernant « ALIMENTATION ET PRESSION A LA POMPE », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENT VERTICAL SANS L.A",
          "ne pas pencher l'aspirateur lorsqu'il fonctionne,",
          "ETABLISSEMENT D'UNE SECONDE LANCE SUR LA DIVISION",
          "Ils se différencient entre eux selon le type de motorisation"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ALIMENTATION ET PRESSION A LA POMPE."
      },
      {
        "question": "Concernant « ALIMENTATION ET PRESSION A LA POMPE », quelle proposition est exacte ?",
        "options": [
          "Dans le cas où une seconde lance (500 l/min.) est établie grâce à la division, la pression en sortie de pompe sera alors de 10 bars",
          "veiller à ce que l'eau d'alimentation soit entre 6 et 8 bars",
          "vérifier, avant toute utilisation, l'état des câbles",
          "Liberté de mouvement des intervenants"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ALIMENTATION ET PRESSION A LA POMPE."
      },
      {
        "question": "Concernant « ALIMENTATION ET PRESSION A LA POMPE », quelle proposition est exacte ?",
        "options": [
          "Réalisée par un ruban de couleur et tenu par les services de police ou gendarmerie",
          "remet le matériel en place (échelle, clé machinerie) et rejoint son équipier,",
          "Poignée du lanceur",
          "Pression aux lances : 6 bars (lance non autorégulée)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ALIMENTATION ET PRESSION A LA POMPE."
      },
      {
        "question": "Concernant « ALIMENTATION ET PRESSION A LA POMPE », quelle proposition est exacte ?",
        "options": [
          "Perte de charge dans les tuyaux de 70 mm : 1,8 bars",
          "chien méchant menaçant la sécurité morsure Faire intervenir un animalier. Maîtriser l'animal avec un lasso ou un filet. Faire intervenir les forces...",
          "ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS",
          "vérifier la présence d'une fiche de terre"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ALIMENTATION ET PRESSION A LA POMPE."
      },
      {
        "question": "Concernant « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE », quelle proposition est exacte ?",
        "options": [
          "L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE",
          "Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)",
          "Pression aux lances : 6 bars (lance non autorégulée)",
          "Finir par la découpe de la partie supérieure"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE."
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
        "question": "Concernant « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE",
          "La lance est placée au niveau du ceinturon, le tuyau passe sur l'épaule",
          "La MPVE (Motopompe Volumétrique Emulseur)",
          "Distribution des denrées aux sinistrés"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE."
      },
      {
        "question": "Concernant « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE », quelle proposition est exacte ?",
        "options": [
          "LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION",
          "La courroie d'amarre, pliée en deux est passée dans le ceinturon du bas vers le haut",
          "rupture d'une conduite intérieure ou sous trottoir etc",
          "ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE."
      },
      {
        "question": "Concernant « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE », quelle proposition est exacte ?",
        "options": [
          "La lance est engagée dans la boucle constituée par la courroie d'amarre",
          "Gêne à la progression des engins d'incendie",
          "réaliser les missions et rendre compte",
          "Chef d'agrès Chef d'équipe ou 1er chef 2e chef Servant ou 1er servant 2e servant Sapeur de liaison"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE."
      },
      {
        "question": "Concernant « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE », quelle proposition est exacte ?",
        "options": [
          "Les 2 brins de la courroie d'amarre sont passés autour du fût et de la poignée de la lance",
          "Prendre la poignée en pleine main",
          "TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES",
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE."
      },
      {
        "question": "Concernant « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE », quelle proposition est exacte ?",
        "options": [
          "La courroie d'amarre est fermée",
          "Une lance (eau ou mousse) et la LDT",
          "3e et 4e lances (eau ou mousse)",
          "2e équipe fourgon Sapeur de liaison"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE."
      },
      {
        "question": "Concernant « L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE », quelle proposition est exacte ?",
        "options": [
          "Lorsqu'elle en reçoit l'ordre, l'équipe du CA ou BA arrête définitivement l'injection d'émulseur",
          "Le porte-lance monte à l'échelle",
          "Etablir deux lignes de 110 mm, permettant de disposer de deux points d'eau avancés (2divisions 100 / 3 x50) jusqu'à 1 000 m",
          "veiller à ce que la prise de courant soit munie d'une prise de terre,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE."
      },
      {
        "question": "Concernant « LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR », quelle proposition est exacte ?",
        "options": [
          "chien : morsures chat : morsures, griffures",
          "LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR",
          "« Comment vont réagir les 2 morceaux ? »",
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR."
      },
      {
        "question": "Concernant « LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR », quelle proposition est exacte ?",
        "options": [
          "4/ Rôle du Chef d'agrès et de l'équipier",
          "Fin d'intervention RATP -SNCF",
          "Jusqu'à 30ppm de CO, il n'y a pas de danger pour la santé des personnes",
          "1er Equipe 2e Equipe Sapeur de liaison"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR."
      },
      {
        "question": "Concernant « LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR », quelle proposition est exacte ?",
        "options": [
          "matériel de base+Dévidoir de droite (avec panier) matériels sur ordre matériel de base Dévidoir de droite (avec panier) matériels sur ordre matérie...",
          "chien dans une voiture accidentée morsures Faire intervenir un animalier. Attraper l'animal avec un lasso et le faire sortir",
          "ETABLISSEMENTS D'ATTAQUE ETABLISSEMENT S REALISABLE AR DES EQUIPES",
          "On peut classer les espèces animales en 3 catégories"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR."
      },
      {
        "question": "Concernant « LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR », quelle proposition est exacte ?",
        "options": [
          "le chef d'équipe dépose le matériel du panier. Le servant Maintient le dévidoir",
          "Fin d'intervention RATP -SNCF",
          "Effectuer la découpe de la partie inférieure",
          "Objectif : Savoir augmenter l'espace de survie en utilisant un vérin"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR."
      },
      {
        "question": "Concernant « LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR », quelle proposition est exacte ?",
        "options": [
          "course verticale limitée à une hauteur entre 15 et 18 m",
          "MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION",
          "Identification du vitrage : repérer visuellement le marquage gravé dans le vitrage pour connaitre le type si présence d'un marquage",
          "ETABLISSEMENT VERTICAL SANS L.A"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR."
      },
      {
        "question": "Concernant « 117.Deux cas sont envisageables pour la manœuvre inaccessible au dévidoir ? », quelle proposition est exacte ?",
        "options": [
          "Etablissement au moyen de la L.A (Cf. manoeuvre de la ligne d'attaque)",
          "Précision au niveau du déplacement",
          "De porter la puissance hydraulique à 1 000 l/min. par l'établissement d'une division50/2x 50",
          "Ils permettent d'utiliser un point d'eau hors de portée des dévidoirs mobiles"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 117.Deux cas sont envisageables pour la manœuvre inaccessible au dévidoir ?."
      },
      {
        "question": "Concernant « 117.Deux cas sont envisageables pour la manœuvre inaccessible au dévidoir ? », quelle proposition est exacte ?",
        "options": [
          "Il existe 2 types de pompes hydrauliques : thermique ou électrique",
          "amarrer la MPE si la surface n'est pas plane,",
          "Etablissement au moyen du dévidoir",
          "poignée de maintien"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 117.Deux cas sont envisageables pour la manœuvre inaccessible au dévidoir ?."
      },
      {
        "question": "Concernant « 117.Deux cas sont envisageables pour la manœuvre inaccessible au dévidoir ? », quelle proposition est exacte ?",
        "options": [
          "Le chef d'équipe déposes on matériel au point d'attaque, retourne au dévidoir et répercute l'ordre au servant. Le servant tire le dévidoir et le dé...",
          "Trempé : Se dépose après scotchage à l'aide d'un pointeau choc",
          "sont utilisés en général pour satisfaire des déplacements relativement courts de l'ordre de 15 à 18 m max",
          "Forces de l'ordre : (Police ; Gendarmerie ; Forces auxiliaires)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 117.Deux cas sont envisageables pour la manœuvre inaccessible au dévidoir ?."
      },
      {
        "question": "Concernant « UNE LANCE OPTION MOUSSE », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE",
          "2e équipe fourgon Sapeur de liaison",
          "Rétablissement d'éclairage public",
          "les lames courbes permettent la section de métaux aux diamètres inférieurs à celles-ci (montant avant (A) ou milieu (B)),"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — UNE LANCE OPTION MOUSSE."
      },
      {
        "question": "Concernant « UNE LANCE OPTION MOUSSE », quelle proposition est exacte ?",
        "options": [
          "Etablir une ligne de 110 mm de longueur maximale de 400 m, permet de disposer d'un point d'eau avancé (division 100 / 3 x 50)",
          "coupe l'alimentation à l'exception de l'éclairage cabine,",
          "à partir de bouteilles de gaz de 12kgs ou 3kgs",
          "Matériel de base Matériel de base"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — UNE LANCE OPTION MOUSSE."
      },
      {
        "question": "Concernant « UNE LANCE OPTION MOUSSE », quelle proposition est exacte ?",
        "options": [
          "ovin, caprin (moutons, chèvres, béliers...) : coups de cornes, coups de tête",
          "Alarme 1 à 10% de la concentration LIE du méthane",
          "Dévidoir de droite avec panier + matériels sur ordre 1 tuyau de 70 x 20 m + injecteur + bidons d'émulseur",
          "Au cours de l'attaque, le port complet des EPI est obligatoire"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — UNE LANCE OPTION MOUSSE."
      },
      {
        "question": "Concernant « UNE LANCE OPTION MOUSSE », quelle proposition est exacte ?",
        "options": [
          "L'écarteur est un outil qui permet d'écarter, d'écraser ou de tirer des pièces de carrosserie",
          "La pince à chat permet de saisir le cou du chat et de le serrer grâce à la poignée",
          "Chef d'équipe Servant Sapeur de liaison Conducteur",
          "Outil de dégarnissage Crayon carrosserie"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — UNE LANCE OPTION MOUSSE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM",
          "Travailler dans le sens classique de l'ouverture de la porte",
          "Le chef d'agrès et le conducteur",
          "Les blessés : victimes non tuées"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM », quelle proposition est exacte ?",
        "options": [
          "Etablir une ligne de 110 mm de longueur maximale de 400 m, permet de disposer d'un point d'eau avancé (division 100 / 3 x 50)",
          "Assistance aux sinistrés",
          "Insérer l'écarteur dans le jour et l'ouvrir afin de faire céder la serrure",
          "Ne pas rentrer dans la «zone critique» pour éviter l'affrontement"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM."
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
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM », quelle proposition est exacte ?",
        "options": [
          "Feuilleté : Se découpe à l'aide du coupe pare-brise ou d'une scie sabre. Protection respiratoire type masque FFP2 obligatoire (pour sauveteurs et v...",
          "La ligne de 110 mm peut être établie du point d'eau vers le point d'attaque dans certaines circonstances",
          "chien méchant menaçant la sécurité morsure Faire intervenir un animalier. Maîtriser l'animal avec un lasso ou un filet. Faire intervenir les forces...",
          "Arrêter le moteur avant de poser l'appareil"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE DEUX LIGNES DE 110MM (FA SEUL) », quelle proposition est exacte ?",
        "options": [
          "Les blessés hospitalisés : victimes admises comme patients dans un hôpital plus de 24 heures",
          "pointes à écarter : sont les becs traditionnels mis en place sur l'écarteur. Ils sont munis de crantage externe et interne permettant une prise ou ...",
          "ETABLISSEMENTS DE DEUX LIGNES DE 110MM (FA SEUL)",
          "vérifier, avant toute utilisation, l'état des câbles"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE DEUX LIGNES DE 110MM (FA SEUL)."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE DEUX LIGNES DE 110MM (FA SEUL) », quelle proposition est exacte ?",
        "options": [
          "Evacuations de zones menacées",
          "Assistance aux sinistrés",
          "Etablir deux lignes de 110 mm de longueur maximale de 200 m chacune, permettant de disposer de deux points d'eau avancés (2 divisions 100 / 3 x 50)",
          "Mettre le starter, enfoncer le levier des gaz et le bouton de blocage"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE DEUX LIGNES DE 110MM (FA SEUL)."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE DEUX LIGNES DE 110MM (FA SEUL) », quelle proposition est exacte ?",
        "options": [
          "coupe l'alimentation à l'exception de l'éclairage cabine,",
          "Régulation routière",
          "SOA Sapeur de liaison Conducteur",
          "vérifier la présence d'une fiche de terre"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE DEUX LIGNES DE 110MM (FA SEUL)."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA) », quelle proposition est exacte ?",
        "options": [
          "Etablir deux lignes de 110 mm de longueur maximale de 200 m chacune, permettant de disposer de deux points d'eau avancés (2 divisions 100 / 3 x 50)",
          "faire descendre l'hydro-éjecteur avec une commande en évitant les chocs (raccorder la commande au clapet de vidange),",
          "Soutien psychologique",
          "ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA)."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA) », quelle proposition est exacte ?",
        "options": [
          "Ils se différencient entre eux selon le type de motorisation",
          "Etablir deux lignes de 110 mm, permettant de disposer de deux points d'eau avancés (2divisions 100 / 3 x50) jusqu'à 1 000 m",
          "Quel que soit le type, les ascenseurs à traction à câbles comprennent généralement",
          "La couverture est utilisée pour la contention des lézards, des iguanes. En jetant la couverture sur l'animal, il va se sentir caché et va se calmer"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA)."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA) », quelle proposition est exacte ?",
        "options": [
          "laver et rincer le mùatériel après usage",
          "ZDI (zone de déploiement initial) : elle sert à regrouper les moyens",
          "les ascenseurs hydrauliques",
          "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 800 mètres"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA)."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "Bouche d'incendie (BI)",
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE",
          "engager le minimum de personnel",
          "Ne pas pulvériser loin de l'orifice mais toujours dans l'entrée principale utilisée par les insectes"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "Matériel de désincarcération comprend une cisaille, un écarteur, et des vérins hydraulique",
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance",
          "Zone d'alimentation",
          "couper le courant, etc"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "Mettre le starter, enfoncer le levier des gaz et le bouton de blocage",
          "La couverture est utilisée pour la contention des lézards, des iguanes. En jetant la couverture sur l'animal, il va se sentir caché et va se calmer",
          "Ils sont réalisés au moyen des tuyaux de 110 mm pliés en écheveau",
          "Zone de déploiement initial"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "avant l'utilisation, vérifier si tous les organes sont bien fixés,",
          "Parmi les victimes, on distingue",
          "Ils s'assurent de l'ouverture complète des tubulures de la division",
          "ZDI (zone de déploiement initial) : elle sert à regrouper les moyens"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "porcin : morsures, tentatives de charge (sanglier)",
          "ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM",
          "Mettre le starter, enfoncer le levier des gaz et le bouton de blocage",
          "ZAL (zone d'alimentation) : elle regroupe différents points d'eau"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "Réaliser le calage de chaque véhicule impliqué où une victime est présente",
          "La cage est indispensable pour soigner ou transporter le chien ou le chat capturé",
          "Faire assurer l'entretien des tronçonneuses dès le retour,",
          "ZE (zone émulseur) : les moyens émulseurs (CA/BA, BEM, citernes des pétroliers) y sont regroupés et employés"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "ZAT (zone d'attaque) : les lances y sont établies (lances canon et lances à main) ; cette zone peut-être divisée en secteurs d'attaque",
          "fait noter ou note l'identité des impliqués",
          "prendre les précautions nécessaires lors du remplissage de carburant,",
          "Écartement dans l'espace vitré"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE",
          "« Comment vont réagir les 2 morceaux ? »",
          "L'établissement est réalisé dans un premier temps par le CA ou BA jusqu'à 800 mètres",
          "Outil de forcement et de déblai"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est exacte ?",
        "options": [
          "L'agent de la Protection Civile doit mesurer le risque et rester attentif, dans le but de maintenir Sa sécurité et celle des autres intervenants",
          "Ouvrir l'écarteur pour faire céder la serrure",
          "ETABLISSEMENTS DE DEUX LIGNES DE 110MM (FA SEUL)",
          "Il peut exister pour une même intervention plusieurs ZAL, ZE ou ZAT"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est exacte ?",
        "options": [
          "Réaliser le calage de chaque véhicule impliqué où une victime est présente",
          "Ouvrir l'écarteur afin de déformer la porte et faire céder la serrure",
          "La BA nécessite 14 m en linéaire pour déposer la berce",
          "Hydraulique BI-PI et l'engin"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est exacte ?",
        "options": [
          "sécher l'appareil après utilisation",
          "bovin : coups de cornes, tentatives de charge, coups de pieds (postérieurs)",
          "ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENT D4UNE LCM (FA-CA ou BA) MANŒUVRE DE LA LANCE CANON MOUSSE",
          "Matériel de désincarcération comprend une cisaille, un écarteur, et des vérins hydraulique"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est exacte ?",
        "options": [
          "réaliser les missions et rendre compte",
          "MANŒUVRE DE LA LANCE CANON MOUSSE",
          "5 manchons souples, de taille variable, permettent de maintenir en place les tuyaux et de les guider au cours de l'établissement",
          "« Où sont les zones de compression et de tension ? »"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est exacte ?",
        "options": [
          "Mesurer deux fois la longueur du manchon, puis le faire glisser sous le tuyau, de façon à ce que ce dernier soit positionné au centre du manchon",
          "ALIMENTATION ET PRESSION A LA POMPE",
          "Aspiration (nappe ou cours d'eau)",
          "La MPVE (Motopompe Volumétrique Emulseur)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE."
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
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est exacte ?",
        "options": [
          "5- procéder à l'entaille d'abattage",
          "ZDI (zone de déploiement initial) : elle sert à regrouper les moyens",
          "2 clés tricoises de 100 mm CA ou BA",
          "vérifier la présence d'une fiche de terre"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est exacte ?",
        "options": [
          "attention à ne pas aggraver la situation par l'apport d'eau,",
          "Ne pas pulvériser loin de l'orifice mais toujours dans l'entrée principale utilisée par les insectes",
          "La porte peut être entièrement déposée en insérant l'écarteur dans les brides supérieures",
          "2 raccords d'injection"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est exacte ?",
        "options": [
          "L'établissement de la ligne d'attaque (LA) est réalisé avec 3 tuyaux de 70 x 20 m (60 m) et 2 tuyaux de 45 x 20 m (40 m), soit une longueur de 100 m",
          "fuite sur canalisation d'alimentation ou d'évacuation",
          "veiller à ce que l'eau d'alimentation soit entre 6 et 8 bars",
          "2 cannes plongeuses"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE », quelle proposition est exacte ?",
        "options": [
          "chien : morsures chat : morsures, griffures",
          "Transports ambulatoires",
          "garder toujours le contact et agir en concertation",
          "162.Que dépose le personnel du FA-CA ou BA au ordre\" Pour l'établissement de la lance canon mousse, PMP (tel endroit), ETABLISSEZ ! \""
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "image: schéma de calage d'un véhicule sur 3 ou 4 points",
          "allumer les projecteurs portatifs à l'extérieur de la zone de danger",
          "MISE EN PLACE D'UN DISPOSITIF D'INJECTION",
          "LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "L'hydro-éjecteur est utilisé pour aspirer un volume d'eau limité et pour pomper à partir d'une nappe d'eau",
          "La couverture est utilisée pour la contention des lézards, des iguanes. En jetant la couverture sur l'animal, il va se sentir caché et va se calmer",
          "Toujours se poser les questions suivantes : « Suis-je en sécurité là où je me trouve ? »",
          "Lorsque les établissements de manoeuvre sont réalisés, le CA ou BA regagne la zone émulseur"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "surveiller l'environnement et prévenir le danger",
          "Le chef d'agrès et le conducteur",
          "N'utiliser la tronçonneuse que dans des endroits ventilés",
          "exigence très importante sur l'entretien"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "chien blessé, accidenté ou inanimé morsures Approcher l'animal par l'arrière pour apprécier ses réactions. Museler le chien, le mettre sur un brancard",
          "Dès 100ppm, la protection respiratoire est indispensable pour les sapeurs-pompiers et l'évacuation des personnes obligatoires",
          "Branchent les raccords d'injection sur les lignes de 110 mm à égale distance de l'engin",
          "Le porte-lance monte à l'échelle"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "Ils établissent les tuyaux de 45 mm des raccords d'injection vers la MPVE (1 tuyau directement raccordé sur la MPVE avant la division 50x2x50)",
          "Le porte-lance monte à l'échelle",
          "3 tuyaux de 70 x 20 m pliés en écheveau (dont un équipé d'une division)",
          "Objectif : Savoir gérer les différents vitrages et utiliser les outils adaptés en réduisant au maximum les débris et poussières"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "Ils s'assurent de l'ouverture complète des tubulures de la division",
          "Poteau d'incendie (PI)",
          "ne pas déplacer l'aspirateur avec le moteur en marche,",
          "Distance entre l'installation"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "DIFFERENTS INTERVENANTS ET LEURS MISSIONS",
          "Le conducteur assure la mise en route de la MPVE",
          "Être toujours en mesure de maîtriser la machine,",
          "ETABLISSEMENTS DE DEUX LIGNES DE 110MM (FA SEUL)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "Liberté de mouvement des intervenants",
          "Noter le numéro du service d'assistance de la marque de l'ascenseur et le donner au chef d'agrès afin d'avertir le technicien de garde",
          "ne pas placer l'appareil sous des écoulements d'eau,",
          "1er temps : il remplit d'émulseur les tuyaux de 45 mm jusqu'aux raccords d'injection (avant même la mise en eau des lignes de 110 mm)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "suivant le type de motorisation précision au niveau de la vitesse et du déplacement",
          "ETABLISSEMENT VERTICAL SANS L.A",
          "2e temps : il laisse sa MPVE au ralenti, en circuit fermé et la purge de temps en temps",
          "Si demi-pavillon arrière : couper selon la charte graphique les montants A et B"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « ETABLISSEMENTS DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "Perte de charge dans les tuyaux de 70 mm : 1,8 bars",
          "Le chef d'agrès rend compte de la mise en place du dispositif",
          "On retrouve certains signes: érection des poils du dos, expressions du museau, positions de la queue et des oreilles",
          "Objectif : Savoir augmenter l'espace de survie en utilisant un vérin"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ETABLISSEMENTS DE MANŒUVRE."
      },
      {
        "question": "Concernant « FIN DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "« Où sont les zones de compression et de tension ? »",
          "DANGER : présence d'eau et d'électricité",
          "Lorsqu'elle en reçoit l'ordre, l'équipe du CA ou BA arrête définitivement l'injection d'émulseur",
          "Les chiens : tatouage ou puce, fichier central"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — FIN DE MANŒUVRE."
      },
      {
        "question": "Concernant « FIN DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "Objectif : Connaitre la MGO en secours routier",
          "2 tuyaux de 45 x 20 m pliés en écheveau dont l'un est doté d'une lance à double régulation",
          "Si demi-pavillon arrière : couper selon la charte graphique les montants A et B",
          "L'utilisation d'émulseur est toujours suivie d'un abondant rinçage"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — FIN DE MANŒUVRE."
      },
      {
        "question": "Concernant « FIN DE MANŒUVRE », quelle proposition est exacte ?",
        "options": [
          "Soutien psychologique",
          "Elles peuvent posséder des lames de différentes formes, pour de multiples applications",
          "La MPVE peut être mise en aspiration ou alimentée par la citerne d'un engin-pompe dont le moteur doit obligatoirement être à l'arrêt",
          "Placer la pointe du pied droit dans le protège main arrière"
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
          "Matériel Calage (cousine pneumatique, Cales de bois ou pré-formatées Cordage, Tire-fort",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "Coupe pare-brise ou scie sabre",
          "Elles peuvent posséder des lames de différentes formes, pour de multiples applications"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES."
      },
      {
        "question": "Concernant « L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES », quelle proposition est exacte ?",
        "options": [
          "MANŒUVRE DE LA LANCE CANON MOUSSE",
          "infiltration par remontée des eaux d'égouts ou de plans d'eau",
          "ne pas déplacer l'aspirateur avec le moteur en marche,",
          "ZDI (zone de déploiement initial) : elle sert à regrouper les moyens"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES."
      },
      {
        "question": "Concernant « L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES », quelle proposition est exacte ?",
        "options": [
          "fuite sur canalisation d'alimentation ou d'évacuation",
          "Préparer des cartes des risques",
          "Remise en état des infrastructures",
          "prendre les précautions nécessaires lors du remplissage de carburant,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES."
      },
      {
        "question": "Concernant « L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES », quelle proposition est exacte ?",
        "options": [
          "MARCHE GENERALE DES OPERATIONS",
          "rupture d'une conduite intérieure ou sous trottoir etc",
          "Les agents de la Protection Civile ont à leur disposition un certain nombre de matériels d'épuisement",
          "d'un réservoir d'huile,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est exacte ?",
        "options": [
          "1- Identification du tronc à abattre",
          "Les agents de la Protection Civile répondent à un double objectif",
          "3e et 4e lances (eau ou mousse)",
          "Bouton d'arrêt de la manette des gaz"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — La reconnaissance."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est exacte ?",
        "options": [
          "Travailler dans le sens classique de l'ouverture de la porte",
          "déterminer la cause de l'inondation et la supprimer (, Service municipalité , ONEE./Régie ..)",
          "En cas de présence d'un hayon : le déposer au préalable",
          "ou à partir de citernes de stockage, via un réseau simple"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — La reconnaissance."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est exacte ?",
        "options": [
          "définir les moyens à mettre en œuvre (matériels et personnels)",
          "En cas de présence d'un hayon : le déposer au préalable",
          "Utiliser le lot de sauvetage si progression en hauteur",
          "La MPVE (Motopompe Volumétrique Emulseur)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — La reconnaissance."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est exacte ?",
        "options": [
          "L'établissement rapide d'une seconde lance sur la division",
          "les lames courbes permettent la section de métaux aux diamètres inférieurs à celles-ci (montant avant (A) ou milieu (B)),",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "La ligne de 110 mm peut être établie du point d'eau vers le point d'attaque dans certaines circonstances"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — La reconnaissance."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est exacte ?",
        "options": [
          "S'assurer de l'état de la ou des personnes à l'intérieur, les rassurer de vive voix (recommander aux passagers de ne pas quitter la cabine)",
          "LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION",
          "Pincer le bas de caisse pour créer une ouverture au niveau de la portière",
          "couper le courant, etc"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — La reconnaissance."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est exacte ?",
        "options": [
          "regarder s'il y a un transformateur électrique à l'intérieur des locaux sinistrés",
          "suit le chef d'agrès,",
          "le remettre aux forces de l'ordre, au vétérinaire",
          "Aspiration (nappe ou cours d'eau)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — La reconnaissance."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est exacte ?",
        "options": [
          "Matériel de base Matériel de base",
          "prendre les précautions nécessaires lors du remplissage de carburant,",
          "En cas de présence d'un hayon : le déposer au préalable",
          "apprécier la nature et le nombre des locaux inondés ou menacés (étages inférieurs et supérieurs, locaux attenants)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — La reconnaissance."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est exacte ?",
        "options": [
          "On retrouve certains signes: érection des poils du dos, expressions du museau, positions de la queue et des oreilles",
          "Toujours transporter l'appareil le moteur arrêté",
          "quantifier la hauteur et le volume d'eau à épuiser",
          "Matériel de base Matériel de base"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — La reconnaissance."
      },
      {
        "question": "Concernant « La reconnaissance », quelle proposition est exacte ?",
        "options": [
          "ne jamais immerger la fiche du câble,",
          "Conducteur et passager Calage 4 points minimum + 1 roue",
          "Les bras de levier d'écartement",
          "définir avec précision les moyens nécessaires pour effectuer l'opération (motopompe, longueur et diamètre des tuyaux d'alimentation et de refouleme..."
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — La reconnaissance."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est exacte ?",
        "options": [
          "Dès 100ppm, la protection respiratoire est indispensable pour les sapeurs-pompiers et l'évacuation des personnes obligatoires",
          "Bouton d'arrêt de la manette des gaz",
          "laver et rincer le matériel après usage",
          "DIFFERENTS INTERVENANTS ET LEURS MISSIONS"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — DIFFERENTS INTERVENANTS ET LEURS MISSIONS."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est exacte ?",
        "options": [
          "reste au niveau de la porte palière par laquelle sera réalisée l'évacuation,",
          "faire descendre l'hydro-éjecteur avec une commande en évitant les chocs (raccorder la commande au clapet de vidange),",
          "Ne jamais travailler en équilibre sur une échelle,",
          "Secours et sauvetage des personnes"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — DIFFERENTS INTERVENANTS ET LEURS MISSIONS."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est exacte ?",
        "options": [
          "Epuisement des eaux",
          "Dans le cas où une seconde lance (500 l/min.) est établie grâce à la division, la pression en sortie de pompe sera alors de 10 bars",
          "à moteur-treuil à vis sans fin,",
          "Débit de l'installation"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — DIFFERENTS INTERVENANTS ET LEURS MISSIONS."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS",
          "Evacuations de zones menacées",
          "Utilisées par les C.C.F dans la lutte contre les feux de forët",
          "Le chef d'agrès et le conducteur"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — DIFFERENTS INTERVENANTS ET LEURS MISSIONS."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est exacte ?",
        "options": [
          "Objectif : Savoir augmenter l'espace de survie en utilisant un vérin",
          "Les 2 parties jaunes sur la carrosserie. Cela permet de ne pas passer la main à travers la vitre",
          "Assistance aux sinistrés",
          "Si l'ouverture de porte est rendue difficile par le cadre de la vitre, le découper au moyen de la cisaille"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — DIFFERENTS INTERVENANTS ET LEURS MISSIONS."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est exacte ?",
        "options": [
          "Hébergement des sinistrés",
          "citerne environ 500 litres",
          "Les pompes thermiques",
          "ZAT (zone d'attaque) : les lances y sont établies (lances canon et lances à main) ; cette zone peut-être divisée en secteurs d'attaque"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — DIFFERENTS INTERVENANTS ET LEURS MISSIONS."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est exacte ?",
        "options": [
          "2 raccords d'injection",
          "Lames; lames à bord tranchant",
          "Transports ambulatoires",
          "se renseigner sur l'état des personnes à l'intérieur de la cabine et les rassurer"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — DIFFERENTS INTERVENANTS ET LEURS MISSIONS."
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
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est exacte ?",
        "options": [
          "exigence très importante sur l'entretien",
          "Pour évaluer ce volume, il faut faire le calcul suivant",
          "Dès 100ppm, la protection respiratoire est indispensable pour les sapeurs-pompiers et l'évacuation des personnes obligatoires",
          "Forces de l'ordre : (Police ; Gendarmerie ; Forces auxiliaires)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — DIFFERENTS INTERVENANTS ET LEURS MISSIONS."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est exacte ?",
        "options": [
          "Protection des victimes : victimes traitées et évacuées en urgence ,",
          "Mettre le starter, enfoncer le levier des gaz et le bouton de blocage",
          "Maintien de l'ordre",
          "les ascenseurs hydrauliques"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — DIFFERENTS INTERVENANTS ET LEURS MISSIONS."
      },
      {
        "question": "Concernant « DIFFERENTS INTERVENANTS ET LEURS MISSIONS », quelle proposition est exacte ?",
        "options": [
          "Une fois brisée, retirer le restant de la vitre. Pour vous aider, il est possible de créer une poignée avec le ruban adhésif utilisé",
          "Ce sont les causes et l'importance de l'inondation qui vont déterminer le type de matériel à utiliser",
          "Régulation routière",
          "La couverture est utilisée pour la contention des lézards, des iguanes. En jetant la couverture sur l'animal, il va se sentir caché et va se calmer"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — DIFFERENTS INTERVENANTS ET LEURS MISSIONS."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION",
          "d'un moteur électrique accouplé à une pompe hydraulique,",
          "3 tuyaux de 70 x 20 m pliés en écheveau (dont un équipé d'une division)",
          "Les Moto-Pompes Flottantes CCC 6000"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "Stationner le véhicule à distance,",
          "L'hydro-éjecteur est utilisé pour aspirer un volume d'eau limité et pour pomper à partir d'une nappe d'eau",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "Parmi les blessés, on distingue"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "Pour évaluer ce volume, il faut faire le calcul suivant",
          "Epuisement des eaux",
          "sécher l'appareil après utilisation",
          "La lance est placée au niveau du ceinturon, le tuyau passe sur l'épaule"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) », quelle proposition est exacte ?",
        "options": [
          "Elle est fixe ou semi-stationnaire dans le V.S.R, et peut disposer ou non de 2 dévidoirs équipés de flexibles",
          "nettoyer de temps en temps la crépine,",
          "Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)",
          "Par le chef d'agrès en fonction du sinistre, des capacités hydrauliques de l'engin et/ou de ses caractéristiques"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)."
      },
      {
        "question": "Concernant « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) », quelle proposition est exacte ?",
        "options": [
          "Réglage facile de la vitesse de déplacement",
          "Les agents de la Protection Civile ont à leur disposition un certain nombre de matériels d'épuisement",
          "1/Les mesures à prendre avant d'intervenir sur la cabine",
          "Accident sur la voie de sortie"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)."
      },
      {
        "question": "Concernant « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) », quelle proposition est exacte ?",
        "options": [
          "ZE (zone émulseur) : les moyens émulseurs (CA/BA, BEM, citernes des pétroliers) y sont regroupés et employés",
          "L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE",
          "Conducteur et passager Calage 4 points minimum + 1 roue",
          "Ce sont les causes et l'importance de l'inondation qui vont déterminer le type de matériel à utiliser"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)."
      },
      {
        "question": "Concernant « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) », quelle proposition est exacte ?",
        "options": [
          "chien : morsures chat : morsures, griffures",
          "chien dans une voiture accidentée morsures Faire intervenir un animalier. Attraper l'animal avec un lasso et le faire sortir",
          "Il existe plusieurs types de matériel, par exemple",
          "laver et rincer le mùatériel après usage"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)."
      },
      {
        "question": "Concernant « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) », quelle proposition est exacte ?",
        "options": [
          "Les ascenseurs à traction à câbles sont les types d'ascenseurs que l'on rencontre le plus, notamment dans les bâtiments de bureaux",
          "162.Que dépose le personnel du FA-CA ou BA au ordre\" Pour l'établissement de la lance canon mousse, PMP (tel endroit), ETABLISSEZ ! \"",
          "les pompes thermiques,",
          "Ils sont réalisés par le conducteur et éventuellement aidé par un personnel (SDL, sous-officier adjoint, etc.) au moyen de tuyaux de 70 mm, 110 mm ..."
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)."
      },
      {
        "question": "Concernant « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) », quelle proposition est exacte ?",
        "options": [
          "Périmètre de sécurité d'un rayon de 50 m déterminé et délimité",
          "Perte de charge dans les tuyaux de 70 mm : 0,45 bar pour 60 m",
          "les pompes hydrauliques,",
          "Un accident corporel implique un certain nombre d'usagers. Parmi ceux-ci, on distingue"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)."
      },
      {
        "question": "Concernant « Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3) », quelle proposition est exacte ?",
        "options": [
          "Ne jamais utiliser d'essence pour détruire un nid",
          "Pulvérisateur projetant de la poudre",
          "Hydraulique BI-PI et l'engin",
          "les pompes électriques"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)."
      },
      {
        "question": "Concernant « Mise en œuvre », quelle proposition est exacte ?",
        "options": [
          "MISSION RISQUES CONDUITE A TENIR",
          "Trempé : Se dépose après scotchage à l'aide d'un pointeau choc",
          "MPE toujours placée à l'extérieur pour éviter tout risque d'intoxication,",
          "Précision au niveau du déplacement"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Mise en œuvre."
      },
      {
        "question": "Concernant « Mise en œuvre », quelle proposition est exacte ?",
        "options": [
          "Les pompes électriques",
          "Avis de passage des sapeurs pompiers",
          "Poser une câle en bois, côté opposé au montant à redresser, puis la serrer contre le toit de l'habitacle avec un écarteur",
          "ne jamais l'utiliser en relais,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Mise en œuvre."
      },
      {
        "question": "Concernant « Mise en œuvre », quelle proposition est exacte ?",
        "options": [
          "veiller à ce que l'eau d'alimentation soit entre 6 et 8 bars",
          "Réalisée par un ruban de couleur et tenu par les services de police ou gendarmerie",
          "Ils sont réalisés au moyen des tuyaux de 110 mm pliés en écheveau",
          "amarrer la MPE si la surface n'est pas plane,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Mise en œuvre."
      },
      {
        "question": "Concernant « Mise en œuvre », quelle proposition est exacte ?",
        "options": [
          "regarder s'il y a un transformateur électrique à l'intérieur des locaux sinistrés",
          "Les gouttelettes du produit se déposeront sur le nid et à l'entrée",
          "La courroie d'amarre, pliée en deux est passée dans le ceinturon du bas vers le haut",
          "utiliser une crépine,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Mise en œuvre."
      },
      {
        "question": "Concernant « Mise en œuvre », quelle proposition est exacte ?",
        "options": [
          "Pousser le montant avec le vérin",
          "amarrer la pompe au moyen d'une commande,",
          "avant l'utilisation, vérifier si tous les organes sont bien fixés,",
          "L'établissement rapide d'une seconde lance sur la division"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Mise en œuvre."
      },
      {
        "question": "Concernant « Mise en œuvre », quelle proposition est exacte ?",
        "options": [
          "remplir le bloc pompe d'eau,",
          "MARCHE GENERALE DES OPERATIONS",
          "Cale en bois ou balle souple",
          "Débit de l'installation"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Mise en œuvre."
      },
      {
        "question": "Concernant « Mise en œuvre », quelle proposition est exacte ?",
        "options": [
          "suit le chef d'agrès,",
          "prendre les précautions nécessaires lors du remplissage de carburant,",
          "Protège main avant (Qui déclenche le frein de chaine)",
          "effectue la montée ou la descente en respectant les procédures selon le type d'ascenseur,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Mise en œuvre."
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
        "question": "Concernant « Mise en œuvre », quelle proposition est exacte ?",
        "options": [
          "Les ascenseurs à traction à câbles sont les types d'ascenseurs que l'on rencontre le plus, notamment dans les bâtiments de bureaux",
          "vérifier le bon déroulement de l'assèchement (crépine, évacuation),",
          "Etablir une ligne de 110 mm de longueur maximale de 400 m, permet de disposer d'un point d'eau avancé (division 100 / 3 x 50)",
          "Écartement dans l'espace vitré"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Mise en œuvre."
      },
      {
        "question": "Concernant « Mise en œuvre », quelle proposition est exacte ?",
        "options": [
          "N'utiliser la tronçonneuse que dans des endroits ventilés",
          "Au SdL il désigne l'orifice de refoulement du poteau et l'orifice d'alimentation de la colonne sèche",
          "Perte de charge dans les tuyaux de 70 mm : 0,45 bar pour 60 m",
          "vidanger le corps de pompe et rincer la MPE après chaque utilisation"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Mise en œuvre."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "Prendre la poignée en pleine main",
          "Port des Equipement de protections individuelles: tenue de feu compléte, +ARI",
          "Les Moto-Pompes Remorquables (M.P.R.)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "Ils établissent les tuyaux de 45 mm des raccords d'injection vers la MPVE (1 tuyau directement raccordé sur la MPVE avant la division 50x2x50)",
          "Les Moto-Pompes Flottantes CCC 6000",
          "MISSION RISQUES CONDUITE A TENIR",
          "espèces domestiques : espèces communes apprivoisées par l'homme"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "Avis de passage des sapeurs pompiers",
          "Utilisées par les C.C.F dans la lutte contre les feux de forët",
          "Grille de protection du visage",
          "Ce sont les causes et l'importance de l'inondation qui vont déterminer le type de matériel à utiliser"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "L'hydro-éjecteur est utilisé pour aspirer un volume d'eau limité et pour pomper à partir d'une nappe d'eau",
          "Rétablissement d'éclairage public",
          "ne jamais immerger la fiche du câble,",
          "Protège main avant (Qui déclenche le frein de chaine)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "Le corps de la cisaille : il supporte les mâchoires et contient le corps du ou des vérins (double effet)",
          "ouvrir le couvercle uniquement lorsque la prise est débranchée,",
          "Intervention dans un rond point",
          "faire descendre l'hydro-éjecteur avec une commande en évitant les chocs (raccorder la commande au clapet de vidange),"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "sangler les raccords des tuyaux,",
          "Pulvérisateur projetant de la poudre",
          "Feuilleté : Se découpe à l'aide du coupe pare-brise ou d'une scie sabre. Protection respiratoire type masque FFP2 obligatoire (pour sauveteurs et v...",
          "ETABLISSEMENTS D'ATTAQUE SECURITE"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "suit le chef d'agrès,",
          "ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM",
          "Attention aux véhicules équipés d'airbags latéraux dans les portières",
          "surveiller la pression à l'engin: 8 à 10 Bars lors de l'alimentation,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "laver et rincer le matériel après usage",
          "effectue la montée ou la descente en respectant les procédures selon le type d'ascenseur,",
          "Surveillance des victimes intoxiquées par inhalation de gaz toxique",
          "Réactions cutanées au produit Réaction allergique localisée Gant en caoutchouc et lunettes de protection"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION », quelle proposition est exacte ?",
        "options": [
          "Raccordement Tuyau de 45mm P = 10B",
          "Rétablissement d'éclairage public",
          "Effectuer la découpe de la partie inférieure",
          "utiliser un aspirateur à eau pour une hauteur d'eau ≤ 5 cm,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION."
      },
      {
        "question": "Concernant « 3/ Les pompes électriques », quelle proposition est exacte ?",
        "options": [
          "Mettre le starter, enfoncer le levier des gaz et le bouton de blocage",
          "ne jamais immerger la fiche du câble,",
          "L'hydro-éjecteur est utilisé pour aspirer un volume d'eau limité et pour pomper à partir d'une nappe d'eau",
          "risque de pollution des sous-sol"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 3/ Les pompes électriques."
      },
      {
        "question": "Concernant « 3/ Les pompes électriques », quelle proposition est exacte ?",
        "options": [
          "l'équipier assure la protection de son binôme à l'aide d'un bâton",
          "Écarter les pieds de façon à obtenir une meilleure mobilité,",
          "Le chef d'agrès rend compte de la mise en place du dispositif",
          "veiller à ce que la prise de courant soit munie d'une prise de terre,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 3/ Les pompes électriques."
      },
      {
        "question": "Concernant « 3/ Les pompes électriques », quelle proposition est exacte ?",
        "options": [
          "Ne pas pulvériser loin de l'orifice mais toujours dans l'entrée principale utilisée par les insectes",
          "une pompe électrique doit toujours être dans l'eau lors de son fonctionnement, mais pas complètement immergée,",
          "Le porte-lance monte à l'échelle",
          "force de compression : sur laquelle on se limitera à une coupe de dégagement, la pression exercée étant capable de bloquer le guide chaîne"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 3/ Les pompes électriques."
      },
      {
        "question": "Concernant « 3/ Les pompes électriques », quelle proposition est exacte ?",
        "options": [
          "amarrer la pompe au moyen d'une commande,",
          "se renseigner sur l'état des personnes à l'intérieur de la cabine et les rassurer",
          "Le matériel utilisé pour la destruction est un pulvérisateur à pression préalable contenant un produit insecticide dont les qualités sont les suiva...",
          "Le chef d'agrès rend compte de la mise en place du dispositif"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 3/ Les pompes électriques."
      },
      {
        "question": "Concernant « 3/ Les pompes électriques », quelle proposition est exacte ?",
        "options": [
          "faire le moins de coudes possible avec le tuyau de refoulement,",
          "Pour évaluer ce volume, il faut faire le calcul suivant",
          "Intervention dans un rond point",
          "indique par radio au chef d'agrès l'évolution dans le déplacement de la cabine,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 3/ Les pompes électriques."
      },
      {
        "question": "Concernant « 3/ Les pompes électriques », quelle proposition est exacte ?",
        "options": [
          "ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES",
          "débrancher la prise avant toute manipulation,",
          "d'un réservoir d'huile,",
          "L'établissement de la ligne d'attaque (LA) est réalisé avec 3 tuyaux de 70 x 20 m (60 m) et 2 tuyaux de 45 x 20 m (40 m), soit une longueur de 100 m"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 3/ Les pompes électriques."
      },
      {
        "question": "Concernant « 3/ Les pompes électriques », quelle proposition est exacte ?",
        "options": [
          "ne transporter la pompe qu'au moyen de sa poignée",
          "Les victimes : impliquées non indemnes",
          "ouvrir le couvercle uniquement lorsque la prise est débranchée,",
          "3e et 4e lances (eau ou mousse)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 3/ Les pompes électriques."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est exacte ?",
        "options": [
          "Basculer l'écheveau sur le flanc et ramener le demi-raccord qui se trouvait au sol sur le manchon pour l'attacher avec la courroie",
          "Les aspirateurs à eau",
          "« Où est mon emplacement le plus sûr après la coupe ? »",
          "Ne nécessite pas de cabanon de machinerie"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — II / Le matériel divers."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est exacte ?",
        "options": [
          "Protéger les parties saillantes",
          "coupe l'éclairage et laisse la machine hors service,",
          "utiliser un aspirateur à eau pour une hauteur d'eau ≤ 5 cm,",
          "Les tués : toute personne qui décède sur le coup ou dans les trente jours qui suivent l'accident"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — II / Le matériel divers."
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
        "question": "Concernant « II / Le matériel divers », quelle proposition est exacte ?",
        "options": [
          "brancher l'appareil dans un autre local que le local inondé, sur une prise reliée à la terre,",
          "ZDI (zone de déploiement initial) : elle sert à regrouper les moyens",
          "espèces qui vivent dans la nature et qui ne sont pas habituées au contact avec l'homme",
          "ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENT D4UNE LCM (FA-CA ou BA) MANŒUVRE DE LA LANCE CANON MOUSSE"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — II / Le matériel divers."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est exacte ?",
        "options": [
          "ne pas placer l'appareil sous des écoulements d'eau,",
          "Une fois le vitrage brisé, passez la main à l'intérieur pour déposer le vitrage entier vers l'extérieur",
          "Les bovins : bague sanitaire (services vétérinaires)",
          "placer le reptile dans un sac"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — II / Le matériel divers."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est exacte ?",
        "options": [
          "Hydraulique BI-PI et l'engin",
          "Elles peuvent posséder des lames de différentes formes, pour de multiples applications",
          "La tronçonneuse doit se tenir fermement à 2 mains pour en assurer le contrôle permanent,",
          "ne pas déplacer l'aspirateur avec le moteur en marche,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — II / Le matériel divers."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est exacte ?",
        "options": [
          "des câbles reliant la cabine au contre-poids,",
          "ne pas pencher l'aspirateur lorsqu'il fonctionne,",
          "faire descendre l'hydro-éjecteur avec une commande en évitant les chocs (raccorder la commande au clapet de vidange),",
          "Attention aux véhicules équipés d'airbags latéraux dans les portières"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — II / Le matériel divers."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est exacte ?",
        "options": [
          "MISSION RISQUES CONDUITE A TENIR",
          "Se méfier des conduits de fumée désaffectés qui peuvent être en mauvais état",
          "ouvrir le couvercle uniquement lorsque la prise est débranchée,",
          "2-Forces de compression et de tension"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — II / Le matériel divers."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est exacte ?",
        "options": [
          "transporter l'appareil debout,",
          "Non toxique pour les personnes, non corrosif",
          "TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES",
          "Grille de protection du visage"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — II / Le matériel divers."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est exacte ?",
        "options": [
          "1/Les mesures à prendre avant d'intervenir sur la cabine",
          "sécher l'appareil après utilisation",
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE",
          "faire descendre l'hydro-éjecteur avec une commande en évitant les chocs (raccorder la commande au clapet de vidange),"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — II / Le matériel divers."
      },
      {
        "question": "Concernant « II / Le matériel divers », quelle proposition est exacte ?",
        "options": [
          "Liaison personnelle",
          "L'utilisation d'émulseur est toujours suivie d'un abondant rinçage",
          "Les raclettes: Elles servent à évacuer une fine couche de liquide",
          "Si l'ouverture de porte est rendue difficile par le cadre de la vitre, le découper au moyen de la cisaille"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — II / Le matériel divers."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est exacte ?",
        "options": [
          "Lors d'une inondation, l'eau peut cacher toutes sortes de pièges (trous, outils, ....)",
          "La porte peut être entièrement déposée en insérant l'écarteur dans les brides supérieures",
          "chat perché au sommet d'un arbre. griffure morsure Ce n'est pas une urgence",
          "suit le chef d'agrès,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — III/ Les règles de sécurité."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est exacte ?",
        "options": [
          "Les pompes thermiques",
          "La mouchette est un instrument de contention qui permet de tenir l'animal par le nez",
          "ZAL (zone d'alimentation) : elle regroupe différents points d'eau",
          "Dès 100ppm, la protection respiratoire est indispensable pour les sapeurs-pompiers et l'évacuation des personnes obligatoires"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — III/ Les règles de sécurité."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est exacte ?",
        "options": [
          "toujours éteindre le moteur avant de faire le plein d'essence,",
          "Objectif : Savoir Ouvrir une porte coulissante",
          "effectue la montée ou la descente en respectant les procédures selon le type d'ascenseur,",
          "Interdiction d'accès de la zone au public et aux personnels d'intervention sauf ceux strictement nécessaires"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — III/ Les règles de sécurité."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est exacte ?",
        "options": [
          "ne pas utiliser dans les locaux non ventilés,",
          "La lacette est une cordelette d'une longueur de 1,20 m. Elle permet de museler tous les animaux à museau pointu",
          "Poignée du lanceur",
          "pointes à écarter : sont les becs traditionnels mis en place sur l'écarteur. Ils sont munis de crantage externe et interne permettant une prise ou ..."
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — III/ Les règles de sécurité."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est exacte ?",
        "options": [
          "Le gaz au Maroc est distribué soit",
          "Par le chef d'agrès en fonction du sinistre, des capacités hydrauliques de l'engin et/ou de ses caractéristiques",
          "penser au refroidissement du moteur",
          "5/ Les mesures à prendre avant de quitter les lieux"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — III/ Les règles de sécurité."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est exacte ?",
        "options": [
          "Utilisées par les C.C.F dans la lutte contre les feux de forët",
          "Les pompes hydrauliques",
          "Insérer l'écarteur dans le jour venant d'être créé",
          "ETABLISSEMENT DE LA LIGNE D'ATTAQUE"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — III/ Les règles de sécurité."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est exacte ?",
        "options": [
          "ZE (zone émulseur) : les moyens émulseurs (CA/BA, BEM, citernes des pétroliers) y sont regroupés et employés",
          "Epuisement des eaux",
          "Bouchon du réservoir d'essence",
          "attention à ne pas aggraver la situation par l'apport d'eau,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — III/ Les règles de sécurité."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est exacte ?",
        "options": [
          "suit le chef d'agrès,",
          "amarrer le matériel si l'épuisement se fait à profondeur importante",
          "Les gouttelettes du produit se déposeront sur le nid et à l'entrée",
          "Pointeau ou séccoise"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — III/ Les règles de sécurité."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est exacte ?",
        "options": [
          "Il faut penser à rajouter 1 bar de pression pour 10 m de dénivelée positive à la pression en sortie de pompe",
          "Une fois brisée, retirer le restant de la vitre. Pour vous aider, il est possible de créer une poignée avec le ruban adhésif utilisé",
          "Les pompes électriques",
          "Les agents de la Protection Civile répondent à un double objectif"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — III/ Les règles de sécurité."
      },
      {
        "question": "Concernant « III/ Les règles de sécurité », quelle proposition est exacte ?",
        "options": [
          "faire le moins de coudes possible avec le tuyau de refoulement,",
          "Cale en bois ou balle souple",
          "DANGER : présence d'eau et d'électricité",
          "1- Identification du tronc à abattre"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — III/ Les règles de sécurité."
      },
      {
        "question": "Concernant « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI », quelle proposition est exacte ?",
        "options": [
          "Objectif : Savoir retrait une vitre",
          "LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI",
          "Dans le cas où une seconde lance (500 l/min.) est établie grâce à la division, la pression en sortie de pompe sera alors de 10 bars",
          "Hydraulique BI-PI et l'engin"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI."
      },
      {
        "question": "Concernant « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI », quelle proposition est exacte ?",
        "options": [
          "ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES",
          "Protège main avant (Qui déclenche le frein de chaine)",
          "Cale en bois ou balle souple",
          "les lames courbes permettent la section de métaux aux diamètres inférieurs à celles-ci (montant avant (A) ou milieu (B)),"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI."
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
        "question": "Concernant « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI », quelle proposition est exacte ?",
        "options": [
          "Poignée du lanceur",
          "Maintien de l'ordre",
          "toujours éteindre le moteur avant de faire le plein d'essence,",
          "Intoxication par les vapeurs au contact direct du produit Malaises ponctuels Masque de protection niveau 1"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI."
      },
      {
        "question": "Concernant « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI », quelle proposition est exacte ?",
        "options": [
          "Ne travailler que sous de bonnes conditions de visibilités,",
          "couper le courant au niveau de l'interrupteur général situé dans le local machinerie sauf éclairage de la cabine,",
          "Bouton d'arrêt de la manette des gaz",
          "Ils sont raccordés directement à l'engin-pompe ou à un établissement de manoeuvre"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI."
      },
      {
        "question": "Concernant « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI », quelle proposition est exacte ?",
        "options": [
          "Bouchon du réservoir d'oïl",
          "ne jamais immerger la fiche du câble,",
          "Transports ambulatoires",
          "indique par radio au chef d'agrès l'évolution dans le déplacement de la cabine,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI."
      },
      {
        "question": "Concernant « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI », quelle proposition est exacte ?",
        "options": [
          "Lorsqu'elle en reçoit l'ordre, l'équipe du CA ou BA arrête définitivement l'injection d'émulseur",
          "Bouchon du réservoir d'essence",
          "Le matériel utilisé pour la destruction est un pulvérisateur à pression préalable contenant un produit insecticide dont les qualités sont les suiva...",
          "Cale en bois ou balle souple"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI."
      },
      {
        "question": "Concernant « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI », quelle proposition est exacte ?",
        "options": [
          "Ne jamais travailler seul, une personne doit se trouver à proximité en cas d'urgence",
          "Les chiens : tatouage ou puce, fichier central",
          "amarrer la MPE si la surface n'est pas plane,",
          "effectue sa reconnaissance,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI."
      },
      {
        "question": "Concernant « LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI », quelle proposition est exacte ?",
        "options": [
          "Toujours transporter l'appareil le moteur arrêté",
          "Le lasso permet de maîtriser les chiens ou les chats",
          "Prévoir un périmètre de sécurité",
          "Le corps de la cisaille : il supporte les bras de levier d'écartement et contient le corps du ou des vérins (double effet)"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI."
      },
      {
        "question": "Concernant « Démarrage », quelle proposition est exacte ?",
        "options": [
          "Comme il n'a pas d'odeur et qu'il est invisible à l'oeil, seul un appareil de mesures permet de donner l'alarme",
          "Placer la pointe du pied droit dans le protège main arrière",
          "On distingue essentiellement deux types de familles d'ascenseur",
          "Positionner le vérin contre la cale en bois et le montant"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Démarrage."
      },
      {
        "question": "Concernant « Démarrage », quelle proposition est exacte ?",
        "options": [
          "1er Equipe 2e Equipe Sapeur de liaison",
          "suivant le type de motorisation précision au niveau de la vitesse et du déplacement",
          "Hébergement des sinistrés",
          "Mettre le starter, enfoncer le levier des gaz et le bouton de blocage"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Démarrage."
      },
      {
        "question": "Concernant « Démarrage », quelle proposition est exacte ?",
        "options": [
          "Tirer le cordon de lancement jusqu'au déclenchement du premier allumage audible",
          "LANCE SUR DIVISION ALIMENTEE AU MOYEN D'UN DEVIDOIR",
          "Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)",
          "OUVRIR UNE PORTE (METHODE CLASSIQUE)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Démarrage."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est exacte ?",
        "options": [
          "Chef d'équipe Servant Sapeur de liaison Conducteur",
          "TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES",
          "1re et 2e lance (eau ou mousse)",
          "Ne travailler que sous de bonnes conditions de visibilités,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Précautions."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est exacte ?",
        "options": [
          "Effectuer un trait de scie vers le bas de chaque côté du pare-brise",
          "Chef d'équipe Servant Sapeur de liaison Conducteur",
          "Prendre la poignée en pleine main",
          "Les Moto-Pompes Remorquables (M.P.R.)"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Précautions."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est exacte ?",
        "options": [
          "La MPVE (Motopompe Volumétrique Emulseur)",
          "Écarter les pieds de façon à obtenir une meilleure mobilité,",
          "Stationner le véhicule à distance,",
          "ETABLISSEMENT DE LA LIGNE D'ATTAQUE"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Précautions."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est exacte ?",
        "options": [
          "Toujours travailler avec une chaîne bien affûtée",
          "Écarter jusqu'à extraire le dispositif coulissant",
          "enregistre la marque de l'ascenseur ainsi que les coordonnées de la société de maintenance,",
          "ne jamais immerger la fiche du câble,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Précautions."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est exacte ?",
        "options": [
          "FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT",
          "Alarme 1 à 10% de la concentration LIE du méthane",
          "N'utiliser la tronçonneuse que dans des endroits ventilés",
          "Maintien de l'ordre"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Précautions."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est exacte ?",
        "options": [
          "Couper le contact avant d'effectuer un contrôle sur la chaîne",
          "utiliser une crépine,",
          "les pompes thermiques,",
          "Les tués : toute personne qui décède sur le coup ou dans les trente jours qui suivent l'accident"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Précautions."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est exacte ?",
        "options": [
          "Pour évaluer ce volume, il faut faire le calcul suivant",
          "Faire assurer l'entretien des tronçonneuses dès le retour,",
          "Gérer le pare brise et les vitrages selon les fiches techniques réalisées Dégarnir les montants",
          "Les bovins : bague sanitaire (services vétérinaires)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Précautions."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est exacte ?",
        "options": [
          "Branchent les raccords d'injection sur les lignes de 110 mm à égale distance de l'engin",
          "Toujours transporter l'appareil le moteur arrêté",
          "OUVRIR UNE PORTE (METHODE CLASSIQUE)",
          "DIFFERENTS INTERVENANTS ET LEURS MISSIONS"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Précautions."
      },
      {
        "question": "Concernant « Précautions », quelle proposition est exacte ?",
        "options": [
          "Arrêter le moteur avant de poser l'appareil",
          "Avis de passage des sapeurs pompiers",
          "Ne jamais travailler en équilibre sur une échelle,",
          "L'établissement d'alimentation permet d'alimenter la pompe de l'engin"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Précautions."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est exacte ?",
        "options": [
          "espèces domestiques : espèces communes apprivoisées par l'homme",
          "Insérer l'écarteur dans le jour et l'ouvrir afin de faire céder la serrure",
          "Les raclettes: Elles servent à évacuer une fine couche de liquide",
          "La tronçonneuse doit se tenir fermement à 2 mains pour en assurer le contrôle permanent,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 1-Principe de tronçonnage."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est exacte ?",
        "options": [
          "ARRET TEMPORAIRE D'INJECTION (CIRCUIT FERME)",
          "Écrasement dans l'espace vitré",
          "Être toujours en mesure de maîtriser la machine,",
          "Tous les moyens de calage et d'arrimage des grosses pièces seront impérativement établis avant le travail de tronçonnage"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1-Principe de tronçonnage."
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
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est exacte ?",
        "options": [
          "Ne jamais travailler en équilibre sur une échelle,",
          "Les 2 parties jaunes sur la carrosserie. Cela permet de ne pas passer la main à travers la vitre",
          "ovin, caprin (moutons, chèvres, béliers...) : coups de cornes, coups de tête",
          "chien dans une voiture accidentée morsures Faire intervenir un animalier. Attraper l'animal avec un lasso et le faire sortir"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 1-Principe de tronçonnage."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est exacte ?",
        "options": [
          "Coupe ceinture Protections de coupes",
          "Ne jamais scier au dessus de la hauteur des épaules,",
          "Les blessés hospitalisés : victimes admises comme patients dans un hôpital plus de 24 heures",
          "chien blessé, accidenté ou inanimé morsures Approcher l'animal par l'arrière pour apprécier ses réactions. Museler le chien, le mettre sur un brancard"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 1-Principe de tronçonnage."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est exacte ?",
        "options": [
          "S'assurer de l'état de la ou des personnes à l'intérieur, les rassurer de vive voix (recommander aux passagers de ne pas quitter la cabine)",
          "Si demi-pavillon avant : couper selon la charte graphique les montants B et C",
          "ETABLISSEMENT DE LANCE SUR COLONNE SECHE ALIMENTE PAR POTEAU RELAIS",
          "Toujours se poser les questions suivantes : « Suis-je en sécurité là où je me trouve ? »"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 1-Principe de tronçonnage."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est exacte ?",
        "options": [
          "tuyaux de 110 mm dans le cas d'établissements de lance canon",
          "Calage d'un véhicule sur ses roues",
          "« Comment vont réagir les 2 morceaux ? »",
          "MARCHE GENERALE DES OPERATIONS"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1-Principe de tronçonnage."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est exacte ?",
        "options": [
          "A partir de 50ppm, il nécessaire d'effectuer une évacuation pour une ventilation des lieux",
          "s'équipe de son EPI complet,",
          "Pincer la porte légèrement au-dessus de la poignée pour se dégager un jour de quelques centimètres",
          "« Où sont les zones de compression et de tension ? »"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 1-Principe de tronçonnage."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est exacte ?",
        "options": [
          "définir avec précision les moyens nécessaires pour effectuer l'opération (motopompe, longueur et diamètre des tuyaux d'alimentation et de refouleme...",
          "1/Les mesures à prendre avant d'intervenir sur la cabine",
          "« Où est mon emplacement le plus sûr après la coupe ? »",
          "L'établissement rapide d'une seconde lance sur la division"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1-Principe de tronçonnage."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est exacte ?",
        "options": [
          "La glacière permet de placer le serpent après sa capture. On peut ainsi le transporter en toute sécurité",
          "les lames courbes permettent la section de métaux aux diamètres inférieurs à celles-ci (montant avant (A) ou milieu (B)),",
          "« Mon périmètre de sécurité est-il suffisant ? »",
          "Les chiens : tatouage ou puce, fichier central"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1-Principe de tronçonnage."
      },
      {
        "question": "Concernant « 1-Principe de tronçonnage », quelle proposition est exacte ?",
        "options": [
          "« Par où est mon chemin de fuite ? »",
          "efficacité énergétique importante",
          "Soulever puis basculer le pavillon vers l'avant ou l'arrière",
          "Régulation routière"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 1-Principe de tronçonnage."
      },
      {
        "question": "Concernant « 2-Forces de compression et de tension », quelle proposition est exacte ?",
        "options": [
          "Ils s'assurent de l'ouverture complète des tubulures de la division",
          "Écrasement dans l'espace vitré",
          "Le vide-cave est utilisé pour aspirer l'eau des caves, des its, des réservoirs",
          "2-Forces de compression et de tension"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 2-Forces de compression et de tension."
      },
      {
        "question": "Concernant « 2-Forces de compression et de tension », quelle proposition est exacte ?",
        "options": [
          "Mettre le starter, enfoncer le levier des gaz et le bouton de blocage",
          "Comme il n'a pas d'odeur et qu'il est invisible à l'oeil, seul un appareil de mesures permet de donner l'alarme",
          "2.1 Ces forces s'exercent lorsque l'arbre est tombé et repose sur un autre plan",
          "Écartement dans l'espace vitré"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 2-Forces de compression et de tension."
      },
      {
        "question": "Concernant « 2-Forces de compression et de tension », quelle proposition est exacte ?",
        "options": [
          "sont utilisés en général pour satisfaire des déplacements relativement courts de l'ordre de 15 à 18 m max",
          "Cahier d'observations DSA",
          "force de compression : sur laquelle on se limitera à une coupe de dégagement, la pression exercée étant capable de bloquer le guide chaîne",
          "s'assurer de la fermeture des portes palières,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 2-Forces de compression et de tension."
      },
      {
        "question": "Concernant « 2-Forces de compression et de tension », quelle proposition est exacte ?",
        "options": [
          "Gants en caoutchouc renforcé",
          "« Mon périmètre de sécurité est-il suffisant ? »",
          "Calage d'un véhicule sur ses roues",
          "Ces forces devront être très clairement identifiées avant la coupe, de façon à ne pas être surpris lors de la libération"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 2-Forces de compression et de tension."
      },
      {
        "question": "Concernant « 2-Forces de compression et de tension », quelle proposition est exacte ?",
        "options": [
          "Toujours transporter l'appareil le moteur arrêté",
          "SOA Sapeur de liaison Conducteur",
          "Astuce(s) : La scie sabre peut être un outil complémentaire pour la césarisation des montants et du pare brise",
          "Tous les moyens de calage et d'arrimage des grosses pièces seront impérativement établis avant le travail de tronçonnage"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 2-Forces de compression et de tension."
      },
      {
        "question": "Concernant « Abattage d'un arbre », quelle proposition est exacte ?",
        "options": [
          "ZDI (zone de déploiement initial) : elle sert à regrouper les moyens",
          "Ne travailler que sous de bonnes conditions de visibilités,",
          "ovin, caprin (moutons, chèvres, béliers...) : coups de cornes, coups de tête",
          "1- Identification du tronc à abattre"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Abattage d'un arbre."
      },
      {
        "question": "Concernant « Abattage d'un arbre », quelle proposition est exacte ?",
        "options": [
          "Les sangles de levage sont indispensables pour sortir un cheval ou un bovin tombé dans un trou, une piscine,…",
          "2-détermination des chemins de fuite en fonction du terrain",
          "Bons de mouvement ST 30 bis",
          "MISSION RISQUES CONDUITE A TENIR"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Abattage d'un arbre."
      },
      {
        "question": "Concernant « Abattage d'un arbre », quelle proposition est exacte ?",
        "options": [
          "Relais (engin, motopompe, VEDI…)",
          "Le corps de la cisaille : il supporte les mâchoires et contient le corps du ou des vérins (double effet)",
          "définir les moyens à mettre en œuvre (matériels et personnels)",
          "4- Déterminer la direction de la chute"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Abattage d'un arbre."
      },
      {
        "question": "Concernant « Abattage d'un arbre », quelle proposition est exacte ?",
        "options": [
          "coupe l'alimentation à l'exception de l'éclairage cabine,",
          "On retrouve certains signes: érection des poils du dos, expressions du museau, positions de la queue et des oreilles",
          "5- procéder à l'entaille d'abattage",
          "La porte peut être entièrement déposée en insérant l'écarteur dans les brides supérieures"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Abattage d'un arbre."
      },
      {
        "question": "Concernant « Abattage d'un arbre », quelle proposition est exacte ?",
        "options": [
          "5- procéder à la coupe d'abattage",
          "Positionner le coupe pare-brise de telle façon que",
          "Protection des sauveteurs : tenue de feu et ARI en nombre suffisant,",
          "toujours éteindre le moteur avant de faire le plein d'essence,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Abattage d'un arbre."
      },
      {
        "question": "Concernant « 1 – Types d'ascenseurs », quelle proposition est exacte ?",
        "options": [
          "signaler la mise hors service de l'ascenseur,",
          "La MPVE (Motopompe Volumétrique Emulseur)",
          "On distingue essentiellement deux types de familles d'ascenseur",
          "Diamètre de la conduite"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1 – Types d'ascenseurs."
      },
      {
        "question": "Concernant « 1 – Types d'ascenseurs », quelle proposition est exacte ?",
        "options": [
          "Vérifier mutuellement l'étanchéité des combinaisons,",
          "Effectuer un trait de scie vers le bas de chaque côté du pare-brise",
          "les ascenseurs à traction à câble,",
          "les lames courbes permettent la section de métaux aux diamètres inférieurs à celles-ci (montant avant (A) ou milieu (B)),"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1 – Types d'ascenseurs."
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
        "question": "Concernant « 1 – Types d'ascenseurs », quelle proposition est exacte ?",
        "options": [
          "Poser une câle en bois, côté opposé au montant à redresser, puis la serrer contre le toit de l'habitacle avec un écarteur",
          "Écrasement dans l'espace vitré",
          "Le chef d'agrès et le conducteur",
          "les ascenseurs hydrauliques"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 1 – Types d'ascenseurs."
      },
      {
        "question": "Concernant « 1 – Types d'ascenseurs », quelle proposition est exacte ?",
        "options": [
          "les pompes thermiques,",
          "Avis de passage des sapeurs pompiers",
          "L'établissement d'une division au plus près du sinistre",
          "En règle générale, ces deux types utilisent l'énergie électrique pour déplacer les cabines verticalement (moteur électrique continu ou alternatif)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 1 – Types d'ascenseurs."
      },
      {
        "question": "Concernant « 1 – Types d'ascenseurs », quelle proposition est exacte ?",
        "options": [
          "Objectif : Savoir Ouvrir une porte (méthode classique)",
          "vérifier, avant toute utilisation, l'état des câbles",
          "Alarme 1 à 10% de la concentration LIE du méthane",
          "Ils sont composés des principaux éléments suivants"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 1 – Types d'ascenseurs."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est exacte ?",
        "options": [
          "Couper et déposer l'ensemble du joint",
          "course verticale pas vraiment limitée",
          "sont utilisés en général pour satisfaire des déplacements relativement courts de l'ordre de 15 à 18 m max",
          "Positionner le coupe pare-brise de telle façon que"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 3-Les ascenseurs hydrauliques."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est exacte ?",
        "options": [
          "Avis de passage des sapeurs pompiers",
          "L'utilisation d'émulseur est toujours suivie d'un abondant rinçage",
          "Ils se composent principalement de",
          "Etablir deux lignes de 110 mm de longueur maximale de 200 m chacune, permettant de disposer de deux points d'eau avancés (2 divisions 100 / 3 x 50)"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 3-Les ascenseurs hydrauliques."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est exacte ?",
        "options": [
          "Le chef d'agrès désigne au conducteur l'orifice d'alimentation du poteau relais",
          "Diamètre de la conduite",
          "d'un ensemble pistons-cylindres hydrauliques placé sous la cabine de l'ascenseur,",
          "ne transporter la pompe qu'au moyen de sa poignée"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 3-Les ascenseurs hydrauliques."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est exacte ?",
        "options": [
          "placer le reptile dans un sac",
          "Ne travailler que sous de bonnes conditions de visibilités,",
          "Avis de passage des sapeurs pompiers",
          "d'un réservoir d'huile,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 3-Les ascenseurs hydrauliques."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est exacte ?",
        "options": [
          "d'un moteur électrique accouplé à une pompe hydraulique,",
          "Objectif : Savoir Ouvrir une porte coulissante",
          "Attention aux véhicules équipés d'airbags latéraux dans les portières",
          "se protéger les mains par des gants"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 3-Les ascenseurs hydrauliques."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est exacte ?",
        "options": [
          "laver et rincer le matériel après usage",
          "Précision au niveau du déplacement",
          "s'assure qu'aucun dégât n'a été occasionné,",
          "ZAT (zone d'attaque) : les lances y sont établies (lances canon et lances à main) ; cette zone peut-être divisée en secteurs d'attaque"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 3-Les ascenseurs hydrauliques."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est exacte ?",
        "options": [
          "apprécier la nature et le nombre des locaux inondés ou menacés (étages inférieurs et supérieurs, locaux attenants)",
          "ZE (zone émulseur) : les moyens émulseurs (CA/BA, BEM, citernes des pétroliers) y sont regroupés et employés",
          "course verticale limitée à une hauteur entre 15 et 18 m",
          "fuite sur canalisation d'alimentation ou d'évacuation"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 3-Les ascenseurs hydrauliques."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM",
          "Réglage facile de la vitesse de déplacement",
          "toutes les manipulations se feront HORS-TENSION",
          "Ils permettent d'utiliser un point d'eau hors de portée des dévidoirs mobiles"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 3-Les ascenseurs hydrauliques."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est exacte ?",
        "options": [
          "se rend à la machinerie",
          "signaler la mise hors service de l'ascenseur,",
          "risque de pollution des sous-sol",
          "pointes à écarter : sont les becs traditionnels mis en place sur l'écarteur. Ils sont munis de crantage externe et interne permettant une prise ou ..."
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 3-Les ascenseurs hydrauliques."
      },
      {
        "question": "Concernant « 3-Les ascenseurs hydrauliques », quelle proposition est exacte ?",
        "options": [
          "Situation : Reconnaître les lieux (type de la machine, emplacement de la cabine et du local de la machinerie)",
          "ZAL (zone d'alimentation) : elle regroupe différents points d'eau",
          "Ne nécessite pas de cabanon de machinerie",
          "le pointeau repose dans un coin de la vitre,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 3-Les ascenseurs hydrauliques."
      },
      {
        "question": "Concernant « Description », quelle proposition est exacte ?",
        "options": [
          "Si l'ouverture de porte est rendue difficile par le cadre de la vitre, le découper au moyen de la cisaille",
          "Prévoir un périmètre de sécurité",
          "Les ascenseurs à traction à câbles sont les types d'ascenseurs que l'on rencontre le plus, notamment dans les bâtiments de bureaux",
          "Ouvrir l'écarteur afin de déformer la porte et faire céder la serrure"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Description."
      },
      {
        "question": "Concernant « Description », quelle proposition est exacte ?",
        "options": [
          "manœuvrer le volant prévu à cet effet, lorsque la cabine est arrivée à hauteur d'un étage, une marque apparaît sur le câble,",
          "Insérer l'Halligan tool (pince coupant) afin de créer un jour de quelques centimètres",
          "FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION",
          "Ils se différencient entre eux selon le type de motorisation"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Description."
      },
      {
        "question": "Concernant « Description », quelle proposition est exacte ?",
        "options": [
          "définir avec précision les moyens nécessaires pour effectuer l'opération (motopompe, longueur et diamètre des tuyaux d'alimentation et de refouleme...",
          "à moteur-treuil à vis sans fin,",
          "Le vide-cave est utilisé pour aspirer l'eau des caves, des its, des réservoirs",
          "le pointeau repose dans un coin de la vitre,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Description."
      },
      {
        "question": "Concernant « Description », quelle proposition est exacte ?",
        "options": [
          "débloquer le système de freinage,",
          "à moteur-treuil planétaire,",
          "ovin, caprin (moutons, chèvres, béliers...) : coups de cornes, coups de tête",
          "L'établissement d'une division au plus près du sinistre"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Description."
      },
      {
        "question": "Concernant « Description », quelle proposition est exacte ?",
        "options": [
          "faire descendre le vide-cave avec une commande en évitant les chocs,",
          "Bons de mouvement ST 30 bis",
          "suit le chef d'agrès,",
          "à moteur à attaque directe (couramment appelé \"Gearless\" ou sans treuil),"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Description."
      },
      {
        "question": "Concernant « Description », quelle proposition est exacte ?",
        "options": [
          "Les Moto-Pompes Flottantes CCC 6000",
          "Forces de l'ordre : (Police ; Gendarmerie ; Forces auxiliaires)",
          "réaliser les missions et rendre compte",
          "Ascenseur à moteur à attaque directe"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Description."
      },
      {
        "question": "Concernant « Description », quelle proposition est exacte ?",
        "options": [
          "Quel que soit le type, les ascenseurs à traction à câbles comprennent généralement",
          "Action pratiquement instantanée et irréversible par paralysie suivie de mort",
          "Le chef d'agrès rend compte de la mise en place du dispositif",
          "Les Moto-Pompes Flottantes CCC 6000"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Description."
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
        "question": "Concernant « Description », quelle proposition est exacte ?",
        "options": [
          "des câbles reliant la cabine au contre-poids,",
          "Poteau d'incendie (PI)",
          "procéder à l'ouverture de la porte palière au moyen de la clé adaptée,",
          "rapidité de déplacement"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Description."
      },
      {
        "question": "Concernant « Description », quelle proposition est exacte ?",
        "options": [
          "Le corps de la cisaille : il supporte les mâchoires et contient le corps du ou des vérins (double effet)",
          "Vérifier mutuellement l'étanchéité des combinaisons,",
          "un système de traction au-dessus de la cage de l'ascenseur,",
          "Il peut exister pour une même intervention plusieurs ZAL, ZE ou ZAT"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Description."
      },
      {
        "question": "Concernant « Avantages et inconvénients », quelle proposition est exacte ?",
        "options": [
          "surveiller l'environnement et prévenir le danger",
          "Zone d'alimentation",
          "Ils sont réalisés par le conducteur et éventuellement aidé par un personnel (SDL, sous-officier adjoint, etc.) au moyen de tuyaux de 70 mm, 110 mm ...",
          "course verticale pas vraiment limitée"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Avantages et inconvénients."
      },
      {
        "question": "Concernant « Avantages et inconvénients », quelle proposition est exacte ?",
        "options": [
          "Les pompes thermiques",
          "suivant le type de motorisation précision au niveau de la vitesse et du déplacement",
          "Régulation routière",
          "Risques Effets Moyens de protection"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Avantages et inconvénients."
      },
      {
        "question": "Concernant « Avantages et inconvénients », quelle proposition est exacte ?",
        "options": [
          "Il faut penser à rajouter 1 bar de pression pour 10 m de dénivelée positive à la pression en sortie de pompe",
          "rapidité de déplacement",
          "fait noter ou note l'identité des impliqués",
          "La reconnaissance doit aussi permettre de décider s'il faut"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Avantages et inconvénients."
      },
      {
        "question": "Concernant « Avantages et inconvénients », quelle proposition est exacte ?",
        "options": [
          "N'utiliser la tronçonneuse que dans des endroits ventilés",
          "Tirer la porte au maximum dans son rail coulissant pour laisser la plus grande ouverture possible",
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun",
          "efficacité énergétique importante"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Avantages et inconvénients."
      },
      {
        "question": "Concernant « Avantages et inconvénients », quelle proposition est exacte ?",
        "options": [
          "Toujours se poser les questions suivantes : « Suis-je en sécurité là où je me trouve ? »",
          "veiller à ce que l'eau d'alimentation soit entre 6 et 8 bars",
          "pas de souci de pollution",
          "ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENT D4UNE LCM (FA-CA ou BA) MANŒUVRE DE LA LANCE CANON MOUSSE"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Avantages et inconvénients."
      },
      {
        "question": "Concernant « Avantages et inconvénients », quelle proposition est exacte ?",
        "options": [
          "en version standard, nécessite un cabanon technique en toiture",
          "La courroie d'amarre, pliée en deux est passée dans le ceinturon du bas vers le haut",
          "informe le propriétaire ou le gardien de l'immeuble de l'intervention,",
          "Voici les schémas de balisage de différents types d'accidents"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Avantages et inconvénients."
      },
      {
        "question": "Concernant « Avantages et inconvénients », quelle proposition est exacte ?",
        "options": [
          "porcin : morsures, tentatives de charge (sanglier)",
          "exigence très importante sur l'entretien",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "Branchent les raccords d'injection sur les lignes de 110 mm à égale distance de l'engin"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Avantages et inconvénients."
      },
      {
        "question": "Concernant « 1/Les mesures à prendre avant d'intervenir sur la cabine », quelle proposition est exacte ?",
        "options": [
          "attention à ne pas aggraver la situation par l'apport d'eau,",
          "Contrôle entrées/sorties si possible",
          "1/Les mesures à prendre avant d'intervenir sur la cabine",
          "illustration: tronçonneuse en utilisation"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1/Les mesures à prendre avant d'intervenir sur la cabine."
      },
      {
        "question": "Concernant « 1/Les mesures à prendre avant d'intervenir sur la cabine », quelle proposition est exacte ?",
        "options": [
          "Matériel de désincarcération comprend une cisaille, un écarteur, et des vérins hydraulique",
          "reconnaître les lieux (type d'ascenseur, emplacement de la cabine et du local machinerie),",
          "Si demi-pavillon avant : couper selon la charte graphique les montants B et C",
          "1er temps : il remplit d'émulseur les tuyaux de 45 mm jusqu'aux raccords d'injection (avant même la mise en eau des lignes de 110 mm)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 1/Les mesures à prendre avant d'intervenir sur la cabine."
      },
      {
        "question": "Concernant « 1/Les mesures à prendre avant d'intervenir sur la cabine », quelle proposition est exacte ?",
        "options": [
          "LES RISQUES PRESENTES PAR LE GAZ",
          "Cahier d'observations DSA",
          "Dévidoir de droite avec panier + matériels sur ordre 1 tuyau de 70 x 20 m + injecteur + bidons d'émulseur",
          "couper le courant au niveau de l'interrupteur général situé dans le local machinerie sauf éclairage de la cabine,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 1/Les mesures à prendre avant d'intervenir sur la cabine."
      },
      {
        "question": "Concernant « 1/Les mesures à prendre avant d'intervenir sur la cabine », quelle proposition est exacte ?",
        "options": [
          "Le corps de la cisaille : il supporte les bras de levier d'écartement et contient le corps du ou des vérins (double effet)",
          "se renseigner sur l'état des personnes à l'intérieur de la cabine et les rassurer",
          "chat perché au sommet d'un arbre. griffure morsure Ce n'est pas une urgence",
          "Calage d'un véhicule sur ses roues"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 1/Les mesures à prendre avant d'intervenir sur la cabine."
      },
      {
        "question": "Concernant « Pour les ascenseurs électriques », quelle proposition est exacte ?",
        "options": [
          "Ne pas pulvériser loin de l'orifice mais toujours dans l'entrée principale utilisée par les insectes",
          "2.1 Ces forces s'exercent lorsque l'arbre est tombé et repose sur un autre plan",
          "Pour les ascenseurs électriques",
          "Ils établissent les tuyaux de 45 mm des raccords d'injection vers la MPVE (1 tuyau directement raccordé sur la MPVE avant la division 50x2x50)"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Pour les ascenseurs électriques."
      },
      {
        "question": "Concernant « Pour les ascenseurs électriques », quelle proposition est exacte ?",
        "options": [
          "débloquer le système de freinage,",
          "Noter le numéro du service d'assistance de la marque de l'ascenseur et le donner au chef d'agrès afin d'avertir le technicien de garde",
          "Matériel de base Matériel de base",
          "Objectif : Savoir ouvrir une porte d'un véhicule sur le toit"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Pour les ascenseurs électriques."
      },
      {
        "question": "Concernant « Pour les ascenseurs électriques », quelle proposition est exacte ?",
        "options": [
          "Gants en caoutchouc renforcé",
          "manœuvrer le volant prévu à cet effet, lorsque la cabine est arrivée à hauteur d'un étage, une marque apparaît sur le câble,",
          "Dans le cas où une seconde lance (500 l/min.) est établie grâce à la division, la pression en sortie de pompe sera alors de 10 bars",
          "Placer la poignée parallèle au plafond"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Pour les ascenseurs électriques."
      },
      {
        "question": "Concernant « Pour les ascenseurs électriques », quelle proposition est exacte ?",
        "options": [
          "Epuisement des eaux",
          "bloquer le système de freinage",
          "La courroie d'amarre, pliée en deux est passée dans le ceinturon du bas vers le haut",
          "L'alimentation de la pompe doit être réalisée dès qu'une lance est établie (à l'exception de lances sur colonne humide)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Pour les ascenseurs électriques."
      },
      {
        "question": "Concernant « Cabine bloquée à un étage dont la porte palière reste verrouillée », quelle proposition est exacte ?",
        "options": [
          "coupe l'éclairage et laisse la machine hors service,",
          "Poteau d'incendie (PI)",
          "Cabine bloquée à un étage dont la porte palière reste verrouillée",
          "Alarme 2 à 20% de la concentration LIE du méthane"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Cabine bloquée à un étage dont la porte palière reste verrouillée."
      },
      {
        "question": "Concernant « Cabine bloquée à un étage dont la porte palière reste verrouillée », quelle proposition est exacte ?",
        "options": [
          "procéder à l'ouverture de la porte palière au moyen de la clé adaptée,",
          "chien méchant menaçant la sécurité morsure Faire intervenir un animalier. Maîtriser l'animal avec un lasso ou un filet. Faire intervenir les forces...",
          "enregistre la marque de l'ascenseur ainsi que les coordonnées de la société de maintenance,",
          "les lames droites permettent la section de métaux de diamètre plus important (montant arrière (C))"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Cabine bloquée à un étage dont la porte palière reste verrouillée."
      },
      {
        "question": "Concernant « Cabine bloquée à un étage dont la porte palière reste verrouillée », quelle proposition est exacte ?",
        "options": [
          "toujours éteindre le moteur avant de faire le plein d'essence,",
          "une fois la personne dégagée refermer et verrouiller la porte",
          "La mouchette est un instrument de contention qui permet de tenir l'animal par le nez",
          "réaliser les missions et rendre compte"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Cabine bloquée à un étage dont la porte palière reste verrouillée."
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
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est exacte ?",
        "options": [
          "Chef d'agrès Chef d'équipe ou 1er chef 2e chef Servant ou 1er servant 2e servant Sapeur de liaison",
          "utiliser un crochet à serpent",
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE",
          "4/ Rôle du Chef d'agrès et de l'équipier"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 4/ Rôle du Chef d'agrès et de l'équipier."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est exacte ?",
        "options": [
          "chien dans une voiture accidentée morsures Faire intervenir un animalier. Attraper l'animal avec un lasso et le faire sortir",
          "se renseigner sur l'état des personnes à l'intérieur de la cabine et les rassurer",
          "vérifie que chacun porte son EPI complet,",
          "Organisation des secours"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 4/ Rôle du Chef d'agrès et de l'équipier."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est exacte ?",
        "options": [
          "162.Que dépose le personnel du FA-CA ou BA au ordre\" Pour l'établissement de la lance canon mousse, PMP (tel endroit), ETABLISSEZ ! \"",
          "image: schéma de calage sur 4 points",
          "fait prendre le matériel,",
          "Préparer des cartes des risques"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 4/ Rôle du Chef d'agrès et de l'équipier."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est exacte ?",
        "options": [
          "L'établissement d'alimentation permet d'alimenter la pompe de l'engin",
          "effectue sa reconnaissance,",
          "procéder à l'ouverture de la porte palière au moyen de la clé adaptée,",
          "toutes les manipulations se feront HORS-TENSION"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 4/ Rôle du Chef d'agrès et de l'équipier."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est exacte ?",
        "options": [
          "Il existe plusieurs types de matériel, par exemple",
          "les pompes thermiques,",
          "se rend à la machinerie",
          "Il peut exister pour une même intervention plusieurs ZAL, ZE ou ZAT"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 4/ Rôle du Chef d'agrès et de l'équipier."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est exacte ?",
        "options": [
          "coupe l'alimentation à l'exception de l'éclairage cabine,",
          "Implantation facile dans un immeuble existant",
          "ETABLISSEMENT VERTICAL SANS L.A",
          "Aspiration (nappe ou cours d'eau)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 4/ Rôle du Chef d'agrès et de l'équipier."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est exacte ?",
        "options": [
          "manœuvrer le volant prévu à cet effet, lorsque la cabine est arrivée à hauteur d'un étage, une marque apparaît sur le câble,",
          "le pointeau repose dans un coin de la vitre,",
          "Risques Effets Moyens de protection",
          "effectue la montée ou la descente en respectant les procédures selon le type d'ascenseur,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 4/ Rôle du Chef d'agrès et de l'équipier."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est exacte ?",
        "options": [
          "coupe l'éclairage et laisse la machine hors service,",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'eau et de l'air",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES",
          "Survient sur une voie ouverte à la circulation publique"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 4/ Rôle du Chef d'agrès et de l'équipier."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est exacte ?",
        "options": [
          "Ne jamais frapper sur un tronc d'arbre renferment un essaim de guêpes ou de frelons",
          "avant l'utilisation, vérifier si tous les organes sont bien fixés,",
          "remet le matériel en place (échelle, clé machinerie) et rejoint son équipier,",
          "les pompes électriques"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 4/ Rôle du Chef d'agrès et de l'équipier."
      },
      {
        "question": "Concernant « 4/ Rôle du Chef d'agrès et de l'équipier », quelle proposition est exacte ?",
        "options": [
          "Dès 100ppm, la protection respiratoire est indispensable pour les sapeurs-pompiers et l'évacuation des personnes obligatoires",
          "De diminuer les pertes de charges et les \"coups de bélier\"",
          "Lors d'une inondation, l'eau peut cacher toutes sortes de pièges (trous, outils, ....)",
          "vérifie la fermeture des portes palières à tous les étages,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 4/ Rôle du Chef d'agrès et de l'équipier."
      },
      {
        "question": "Concernant « 5/ Les mesures à prendre avant de quitter les lieux », quelle proposition est exacte ?",
        "options": [
          "5/ Les mesures à prendre avant de quitter les lieux",
          "Insérer l'Halligan tool (pince coupant) afin de créer un jour de quelques centimètres",
          "porcin : morsures, tentatives de charge (sanglier)",
          "garder toujours le contact et agir en concertation"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 5/ Les mesures à prendre avant de quitter les lieux."
      },
      {
        "question": "Concernant « 5/ Les mesures à prendre avant de quitter les lieux », quelle proposition est exacte ?",
        "options": [
          "Lance du dévidoir tournant (LDT)",
          "2e temps : il laisse sa MPVE au ralenti, en circuit fermé et la purge de temps en temps",
          "Le corps de la cisaille : il supporte les bras de levier d'écartement et contient le corps du ou des vérins (double effet)",
          "s'assurer de la fermeture des portes palières,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 5/ Les mesures à prendre avant de quitter les lieux."
      },
      {
        "question": "Concernant « 5/ Les mesures à prendre avant de quitter les lieux », quelle proposition est exacte ?",
        "options": [
          "Réaliser l'ouverture complète si nécessaire en plaçant l'écarteur au niveau des charnières",
          "referme la porte palière et s'assure de sa bonne fermeture",
          "ne pas rétablir le courant,",
          "2 raccords d'injection"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 5/ Les mesures à prendre avant de quitter les lieux."
      },
      {
        "question": "Concernant « 5/ Les mesures à prendre avant de quitter les lieux », quelle proposition est exacte ?",
        "options": [
          "signaler la mise hors service de l'ascenseur,",
          "MPE toujours placée à l'extérieur pour éviter tout risque d'intoxication,",
          "La pulvérisation d'insecticide doit être d'autant plus copieuse que l'ampleur de l'essaim est importante ou appréciée comme telle",
          "Protéger les parties saillantes"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 5/ Les mesures à prendre avant de quitter les lieux."
      },
      {
        "question": "Concernant « 5/ Les mesures à prendre avant de quitter les lieux », quelle proposition est exacte ?",
        "options": [
          "prendre les coordonnées de la société de dépannage pour les prévenir",
          "Ne pas pulvériser loin de l'orifice mais toujours dans l'entrée principale utilisée par les insectes",
          "Périmètre de sécurité d'un rayon de 50 m déterminé et délimité",
          "Objectif : Réalisé l'accée à d'une victime incarcérée en dégageant le pavillon"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 5/ Les mesures à prendre avant de quitter les lieux."
      },
      {
        "question": "Concernant « Les actions à accomplir », quelle proposition est exacte ?",
        "options": [
          "Etablir deux lignes de 110 mm, permettant de disposer de deux points d'eau avancés (2divisions 100 / 3 x50) jusqu'à 1 000 m",
          "TGR+sacoche SDL+Lampe portative",
          "Situation : Reconnaître les lieux (type de la machine, emplacement de la cabine et du local de la machinerie)",
          "L'établissement rapide d'une seconde lance sur la division"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Les actions à accomplir."
      },
      {
        "question": "Concernant « Les actions à accomplir », quelle proposition est exacte ?",
        "options": [
          "2-détermination des chemins de fuite en fonction du terrain",
          "Appareil qui permet de comprimer l'huile hydraulique pour servir les outils de sauvetage",
          "4- Déterminer la direction de la chute",
          "S'assurer de l'état de la ou des personnes à l'intérieur, les rassurer de vive voix (recommander aux passagers de ne pas quitter la cabine)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Les actions à accomplir."
      },
      {
        "question": "Concernant « Les actions à accomplir », quelle proposition est exacte ?",
        "options": [
          "définir les moyens à mettre en œuvre (matériels et personnels)",
          "Utilisation des radios",
          "ARRET TEMPORAIRE D'INJECTION (CIRCUIT FERME)",
          "Cale en bois ou balle souple"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Les actions à accomplir."
      },
      {
        "question": "Concernant « Les actions à accomplir », quelle proposition est exacte ?",
        "options": [
          "les ascenseurs hydrauliques",
          "utiliser un crochet à serpent",
          "Prendre au départ des secours deux postes portatifs pour une utilisation en réseau tactique à l'intérieur des locaux",
          "Ces forces devront être très clairement identifiées avant la coupe, de façon à ne pas être surpris lors de la libération"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Les actions à accomplir."
      },
      {
        "question": "Concernant « Les actions à accomplir », quelle proposition est exacte ?",
        "options": [
          "Soulever le pavillon et l'évacuer vers la zone de dépôt des structures",
          "Inviter la (ou les) personne (s) à sortir",
          "efficacité énergétique importante",
          "MANŒUVRE DE LA LANCE CANON MOUSSE"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Les actions à accomplir."
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
        "question": "Concernant « Les actions à accomplir », quelle proposition est exacte ?",
        "options": [
          "Noter le numéro du service d'assistance de la marque de l'ascenseur et le donner au chef d'agrès afin d'avertir le technicien de garde",
          "5/ Les mesures à prendre avant de quitter les lieux",
          "Etablir une ligne de 110 mm de longueur maximale de 400 m, permet de disposer d'un point d'eau avancé (division 100 / 3 x 50)",
          "N'utiliser la tronçonneuse que dans des endroits ventilés"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Les actions à accomplir."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est exacte ?",
        "options": [
          "Le gaz au Maroc est distribué soit",
          "MPE toujours placée à l'extérieur pour éviter tout risque d'intoxication,",
          "5/ Les mesures à prendre avant de quitter les lieux",
          "FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — GAZ = DANGER."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est exacte ?",
        "options": [
          "Ne travailler que sous de bonnes conditions de visibilités,",
          "la lance du dévidoir tournant",
          "en cas d'intervention payante, remplit le formulaire d'intervention payante,",
          "à partir de bouteilles de gaz de 12kgs ou 3kgs"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — GAZ = DANGER."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est exacte ?",
        "options": [
          "ou à partir de citernes de stockage, via un réseau simple",
          "Au cours de l'attaque, le port complet des EPI est obligatoire",
          "Survient sur une voie ouverte à la circulation publique",
          "image: schéma de calage d'un véhicule sur 3 ou 4 points"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — GAZ = DANGER."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est exacte ?",
        "options": [
          "LES RISQUES PRESENTES PAR LE GAZ",
          "amarrer la MPE si la surface n'est pas plane,",
          "amarrer la pompe au moyen d'une commande,",
          "Effectuer un trait de scie vers le bas de chaque côté du pare-brise"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — GAZ = DANGER."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est exacte ?",
        "options": [
          "L'agent de la Protection Civile doit mesurer le risque et rester attentif, dans le but de maintenir Sa sécurité et celle des autres intervenants",
          "1re et 2e lance (eau ou mousse)",
          "sécher l'appareil après utilisation",
          "Objectif : Savoir gérer les différents vitrages et utiliser les outils adaptés en réduisant au maximum les débris et poussières"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — GAZ = DANGER."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est exacte ?",
        "options": [
          "Port des Equipement de protections individuelles: tenue de feu compléte, +ARI",
          "Elles peuvent posséder des lames de différentes formes, pour de multiples applications",
          "1er temps : il remplit d'émulseur les tuyaux de 45 mm jusqu'aux raccords d'injection (avant même la mise en eau des lignes de 110 mm)",
          "effectue la montée ou la descente en respectant les procédures selon le type d'ascenseur,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — GAZ = DANGER."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est exacte ?",
        "options": [
          "Proscrire toute manipulation intempestive de circuit électrique (sonnette, éclairage…)",
          "Eventuellement, répéter l'opération le lendemain",
          "Les pompes hydrauliques",
          "chien blessé, accidenté ou inanimé morsures Approcher l'animal par l'arrière pour apprécier ses réactions. Museler le chien, le mettre sur un brancard"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — GAZ = DANGER."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est exacte ?",
        "options": [
          "Rétablissement d'éclairage public",
          "Matériel de base Matériel de base",
          "respecter le périmétre de sécurité",
          "Préparer des cartes des risques"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — GAZ = DANGER."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est exacte ?",
        "options": [
          "allumer les projecteurs portatifs à l'extérieur de la zone de danger",
          "Insérer l'écarteur dans la partie arrière de la porte juste à côté du rail coulissant",
          "rapidité de déplacement",
          "fait prendre le matériel,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — GAZ = DANGER."
      },
      {
        "question": "Concernant « GAZ = DANGER », quelle proposition est exacte ?",
        "options": [
          "garder toujours le contact et agir en concertation",
          "ETABLISSEMENTS D'ATTAQUE COMMANDEMENTS",
          "L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE",
          "4/ Rôle du Chef d'agrès et de l'équipier"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — GAZ = DANGER."
      },
      {
        "question": "Concernant « Le monoxyde de carbone », quelle proposition est exacte ?",
        "options": [
          "Comme il n'a pas d'odeur et qu'il est invisible à l'oeil, seul un appareil de mesures permet de donner l'alarme",
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre",
          "2-détermination des chemins de fuite en fonction du terrain",
          "Astuce(s) : La scie sabre peut être un outil complémentaire pour la césarisation des montants et du pare brise"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Le monoxyde de carbone."
      },
      {
        "question": "Concernant « Le monoxyde de carbone », quelle proposition est exacte ?",
        "options": [
          "les pompes hydrauliques,",
          "Prévoir un périmètre de sécurité",
          "sangler les raccords des tuyaux,",
          "Jusqu'à 30ppm de CO, il n'y a pas de danger pour la santé des personnes"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Le monoxyde de carbone."
      },
      {
        "question": "Concernant « Le monoxyde de carbone », quelle proposition est exacte ?",
        "options": [
          "les lames droites permettent la section de métaux de diamètre plus important (montant arrière (C))",
          "raccord avec bouchon",
          "A partir de 50ppm, il nécessaire d'effectuer une évacuation pour une ventilation des lieux",
          "Il peut exister pour une même intervention plusieurs ZAL, ZE ou ZAT"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Le monoxyde de carbone."
      },
      {
        "question": "Concernant « Le monoxyde de carbone », quelle proposition est exacte ?",
        "options": [
          "les ascenseurs hydrauliques",
          "Quel que soit le type, les ascenseurs à traction à câbles comprennent généralement",
          "Dès 100ppm, la protection respiratoire est indispensable pour les sapeurs-pompiers et l'évacuation des personnes obligatoires",
          "respecter les consignes données au départ"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Le monoxyde de carbone."
      },
      {
        "question": "Concernant « Les dangers d'explosion », quelle proposition est exacte ?",
        "options": [
          "Il existe plusieurs types de matériel, par exemple",
          "Branchent les raccords d'injection sur les lignes de 110 mm à égale distance de l'engin",
          "ne pas utiliser dans les locaux non ventilés,",
          "Alarme 1 à 10% de la concentration LIE du méthane"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Les dangers d'explosion."
      },
      {
        "question": "Concernant « Les dangers d'explosion », quelle proposition est exacte ?",
        "options": [
          "Mise à dispositions des moyens spécifiques",
          "fuite sur canalisation d'alimentation ou d'évacuation",
          "Plier le dernier écheveau de manière à ce que le demi-raccord se positionne à l'extrémité opposée de celui posé au sol,puis fermer le manchon à l'a...",
          "Alarme 2 à 20% de la concentration LIE du méthane"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Les dangers d'explosion."
      },
      {
        "question": "Concernant « Les dangers d'explosion », quelle proposition est exacte ?",
        "options": [
          "Réaliser l'ouverture complète si nécessaire en plaçant l'écarteur au niveau des charnières",
          "amarrer la pompe au moyen d'une commande,",
          "Utilisées par les C.C.F dans la lutte contre les feux de forët",
          "Lecture MX2100 Essence SP GPL Butane Propane Gaz de ville / methane"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Les dangers d'explosion."
      },
      {
        "question": "Concernant « LA PROTECTION », quelle proposition est exacte ?",
        "options": [
          "Branchent les raccords d'injection sur les lignes de 110 mm à égale distance de l'engin",
          "se renseigner sur l'état des personnes à l'intérieur de la cabine et les rassurer",
          "Protection des sauveteurs : tenue de feu et ARI en nombre suffisant,",
          "regarder s'il y a un transformateur électrique à l'intérieur des locaux sinistrés"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — LA PROTECTION."
      },
      {
        "question": "Concernant « LA PROTECTION », quelle proposition est exacte ?",
        "options": [
          "1er temps : il remplit d'émulseur les tuyaux de 45 mm jusqu'aux raccords d'injection (avant même la mise en eau des lignes de 110 mm)",
          "Les agents de la Protection Civile répondent à un double objectif",
          "Protection de la population : Mesures d'évacuation et procédures de sensibilisation",
          "Coupe pare-brise ou scie sabre"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — LA PROTECTION."
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
        "question": "Concernant « LA PROTECTION », quelle proposition est exacte ?",
        "options": [
          "On va s'intéresser ici au balisage réalisé avec le matériel du VSR (panneaux triflashs et cônes de Lubeck)",
          "Les cuissardes évitent aux sauveteurs d'avoir les vêtements humides",
          "Protection des victimes : victimes traitées et évacuées en urgence ,",
          "Placer la poignée parallèle au plafond"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — LA PROTECTION."
      },
      {
        "question": "Concernant « LA PROTECTION », quelle proposition est exacte ?",
        "options": [
          "Insérer l'écarteur dans la partie arrière de la porte juste à côté du rail coulissant",
          "2 clés tricoises de 100 mm CA ou BA",
          "consommation énergétique importante",
          "Surveillance des victimes intoxiquées par inhalation de gaz toxique"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — LA PROTECTION."
      },
      {
        "question": "Concernant « Zone d'exclusion », quelle proposition est exacte ?",
        "options": [
          "laver et rincer le matériel après usage",
          "engager le minimum de personnel",
          "Au cours de l'attaque, le port complet des EPI est obligatoire",
          "Périmètre de sécurité d'un rayon de 50 m déterminé et délimité"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Zone d'exclusion."
      },
      {
        "question": "Concernant « Zone d'exclusion », quelle proposition est exacte ?",
        "options": [
          "utiliser un crochet à serpent",
          "LES MATERIEL DE BASE A EMPORTER",
          "Distance appliquée à priori dans un premier temps mais évolutive",
          "4- Déterminer la direction de la chute"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Zone d'exclusion."
      },
      {
        "question": "Concernant « Zone d'exclusion », quelle proposition est exacte ?",
        "options": [
          "La MPVE peut être mise en aspiration ou alimentée par la citerne d'un engin-pompe dont le moteur doit obligatoirement être à l'arrêt",
          "Les cuissardes évitent aux sauveteurs d'avoir les vêtements humides",
          "Réalisée par un ruban de couleur et tenu par les services de police ou gendarmerie",
          "d'un ensemble pistons-cylindres hydrauliques placé sous la cabine de l'ascenseur,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Zone d'exclusion."
      },
      {
        "question": "Concernant « Zone d'exclusion », quelle proposition est exacte ?",
        "options": [
          "L'établissement rapide d'une ligne de 70 mm en cas d'indisponibilité d'une colonne sèche ou humide",
          "Le matériel utilisé pour la destruction est un pulvérisateur à pression préalable contenant un produit insecticide dont les qualités sont les suiva...",
          "Insérer une cale ou la balle en mousse dans la poignée intérieure de la porte afin de faciliter le déblocage de cette dernière",
          "Evacuation complète"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Zone d'exclusion."
      },
      {
        "question": "Concernant « Zone d'exclusion », quelle proposition est exacte ?",
        "options": [
          "Interdiction d'accès de la zone au public et aux personnels d'intervention sauf ceux strictement nécessaires",
          "Toujours travailler avec une chaîne bien affûtée",
          "bloquer le système de freinage",
          "respecter les consignes données au départ"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Zone d'exclusion."
      },
      {
        "question": "Concernant « Zone d'exclusion », quelle proposition est exacte ?",
        "options": [
          "L'agent de la Protection Civile doit mesurer le risque et rester attentif, dans le but de maintenir Sa sécurité et celle des autres intervenants",
          "Contrôle entrées/sorties si possible",
          "DANGER : présence d'eau et d'électricité",
          "S'équiper des EPI adaptés, toujours en binôme"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Zone d'exclusion."
      },
      {
        "question": "Concernant « Matériel et produit », quelle proposition est exacte ?",
        "options": [
          "respecter les consignes données au départ",
          "Coupe ceinture Protections de coupes",
          "Appareil qui permet de comprimer l'huile hydraulique pour servir les outils de sauvetage",
          "Le matériel utilisé pour la destruction est un pulvérisateur à pression préalable contenant un produit insecticide dont les qualités sont les suiva..."
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Matériel et produit."
      },
      {
        "question": "Concernant « Matériel et produit », quelle proposition est exacte ?",
        "options": [
          "Effectuer un trait de scie vers le bas de chaque côté du pare-brise",
          "Passer l'écarteur dans le jour de la porte au niveau du bas de caisse Ne pas se positionner entre l'outil et la portière",
          "ne pas pencher l'aspirateur lorsqu'il fonctionne,",
          "Action pratiquement instantanée et irréversible par paralysie suivie de mort"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Matériel et produit."
      },
      {
        "question": "Concernant « Matériel et produit », quelle proposition est exacte ?",
        "options": [
          "Tous les moyens de calage et d'arrimage des grosses pièces seront impérativement établis avant le travail de tronçonnage",
          "Non toxique pour les personnes, non corrosif",
          "FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION",
          "Branchent les raccords d'injection sur les lignes de 110 mm à égale distance de l'engin"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Matériel et produit."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est exacte ?",
        "options": [
          "Si demi-pavillon arrière : couper selon la charte graphique les montants A et B",
          "TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES",
          "Intervention dans un rond point",
          "Matériel de base Matériel de base"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est exacte ?",
        "options": [
          "Dans le cas où une seconde lance (500 l/min.) est établie grâce à la division, la pression en sortie de pompe sera alors de 10 bars",
          "Risques Effets Moyens de protection",
          "4- Déterminer la direction de la chute",
          "amarrer le matériel si l'épuisement se fait à profondeur importante"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENT D'UNE SECONDE LANCE SUR LA DIVISION",
          "Intoxication par les vapeurs au contact direct du produit Malaises ponctuels Masque de protection niveau 1",
          "les pompes hydrauliques,",
          "avant l'utilisation, vérifier si tous les organes sont bien fixés,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est exacte ?",
        "options": [
          "Être toujours en mesure de maîtriser la machine,",
          "Intervention sur route Accident sur 1 seule voie",
          "Réactions cutanées au produit Réaction allergique localisée Gant en caoutchouc et lunettes de protection",
          "Ils sont réalisés par le conducteur et éventuellement aidé par un personnel (SDL, sous-officier adjoint, etc.) au moyen de tuyaux de 70 mm, 110 mm ..."
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est exacte ?",
        "options": [
          "Chute de matériaux Blessures au niveau du crane pouvant entrainer des lésions irreversibles Casque à l'intérieur de la tenue de protection",
          "Coupe pare-brise Scie sabre Halligan tool ou outils de forcement",
          "reste au niveau de la porte palière par laquelle sera réalisée l'évacuation,",
          "N'utiliser la tronçonneuse que dans des endroits ventilés"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est exacte ?",
        "options": [
          "En cas de piqûres multiples, demander le médecin",
          "quantifier la hauteur et le volume d'eau à épuiser",
          "Chute de l'intervenant lors de travaux en hauteur Fractures diverses et traumatisme pouvant engager le pronostic vital Utilisation du LSPCC",
          "Cahier d'observations DSA"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est exacte ?",
        "options": [
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre",
          "Tirer la porte au maximum dans son rail coulissant pour laisser la plus grande ouverture possible",
          "OUVRIR UNE PORTE (METHODE CLASSIQUE)",
          "La destruction doit toujours se dérouler à la tombée de la nuit, ou le matin avant le lever du soleil"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est exacte ?",
        "options": [
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'eau et de l'air",
          "LES TRONÇONNEUSES ET PRÉCAUTIONS D'EMPLOI",
          "A ces périodes de la journée tous les insectes ont alors rejoint leur nid",
          "GERER UN PARE-BRISE COLLE / JOINTE"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES."
      },
      {
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est exacte ?",
        "options": [
          "Il faut s'approcher du nid avec discrétion",
          "Réalisée par un ruban de couleur et tenu par les services de police ou gendarmerie",
          "MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION",
          "Ne jamais utiliser d'essence pour détruire un nid"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES."
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
        "question": "Concernant « TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES », quelle proposition est exacte ?",
        "options": [
          "Toujours travailler avec une chaîne bien affûtée",
          "Stationner le véhicule à distance,",
          "Un accident corporel (mortel et non mortel) de la circulation routière est un accident qui",
          "Maintien de l'ordre"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est exacte ?",
        "options": [
          "débrancher la prise avant toute manipulation,",
          "Ne pas pulvériser loin de l'orifice mais toujours dans l'entrée principale utilisée par les insectes",
          "vérifie que chacun porte son EPI complet,",
          "Stationner le véhicule à distance,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Conseils."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est exacte ?",
        "options": [
          "La pulvérisation d'insecticide doit être d'autant plus copieuse que l'ampleur de l'essaim est importante ou appréciée comme telle",
          "Perte de charge dans les tuyaux de 70 mm : 1,8 bars",
          "Ils sont composés des principaux éléments suivants",
          "Risques Effets Moyens de protection"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Conseils."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est exacte ?",
        "options": [
          "Préparer des cartes des risques",
          "TGR+sacoche SDL+Lampe portative",
          "course verticale limitée à une hauteur entre 15 et 18 m",
          "Ne jamais frapper sur un tronc d'arbre renferment un essaim de guêpes ou de frelons"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Conseils."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est exacte ?",
        "options": [
          "Mise à dispositions des moyens spécifiques",
          "Se méfier des conduits de fumée désaffectés qui peuvent être en mauvais état",
          "ne transporter la pompe qu'au moyen de sa poignée",
          "Pour évaluer ce volume, il faut faire le calcul suivant"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Conseils."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est exacte ?",
        "options": [
          "Ils se différencient entre eux selon le type de motorisation",
          "Les indemnes : impliqués non décédés et dont l'état ne nécessite aucun soin médical",
          "Objectif : Connaitre la MGO en secours routier",
          "Ne pas allumer de feu pour réaliser la destruction mais pulvériser le produit insecticide à l'intérieur de la cheminée"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Conseils."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est exacte ?",
        "options": [
          "Insérer l'écarteur dans la partie arrière de la porte juste à côté du rail coulissant",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'eau et de l'air",
          "Ne jamais utiliser d'essence pour détruire un nid",
          "Un commandement initial"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Conseils."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est exacte ?",
        "options": [
          "MPE toujours placée à l'extérieur pour éviter tout risque d'intoxication,",
          "Situation : Reconnaître les lieux (type de la machine, emplacement de la cabine et du local de la machinerie)",
          "En cas de piqûres multiples, demander le médecin",
          "efficacité énergétique importante"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Conseils."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est exacte ?",
        "options": [
          "Le commandement initial indique au personnel la manoeuvre à réaliser et le matériel à emporter par chacun",
          "Accident sur la voie du milieu",
          "le pointeau repose dans un coin de la vitre,",
          "Grille de protection du visage"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Conseils."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est exacte ?",
        "options": [
          "Une lance (eau ou mousse) et la LDT",
          "Combinaison étanche aux insectes",
          "définir les moyens à mettre en œuvre (matériels et personnels)",
          "Il existe 2 types de pompes hydrauliques : thermique ou électrique"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Conseils."
      },
      {
        "question": "Concernant « Conseils », quelle proposition est exacte ?",
        "options": [
          "Gants en caoutchouc renforcé",
          "Non toxique pour les personnes, non corrosif",
          "amarrer la MPE si la surface n'est pas plane,",
          "Matériel d'électrogène"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Conseils."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est exacte ?",
        "options": [
          "On peut classer les espèces animales en 3 catégories",
          "Combinaison étanche aux insectes",
          "Les 2 brins de la courroie d'amarre sont passés autour du fût et de la poignée de la lance",
          "disposer le vide-cave bien à plat sur son embase,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — I/ Les espèces animales."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est exacte ?",
        "options": [
          "DANGER : présence d'eau et d'électricité",
          "MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION",
          "espèces qui vivent dans la nature et qui ne sont pas habituées au contact avec l'homme",
          "Déposer ensuite l'ensemble du pare-brise feuilleté"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — I/ Les espèces animales."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est exacte ?",
        "options": [
          "espèces protégées : faune sauvage captive; la détention d'espèces protégées est réglementée",
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité",
          "Protection de la population : Mesures d'évacuation et procédures de sensibilisation",
          "Le crochet à serpent permet de capturer les serpents sans les blesser et sans danger. C'est une tige métallique de 50 cm à 1 m, coudée à son extrémité"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — I/ Les espèces animales."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est exacte ?",
        "options": [
          "Ils sont réalisés par le conducteur et éventuellement aidé par un personnel (SDL, sous-officier adjoint, etc.) au moyen de tuyaux de 70 mm, 110 mm ...",
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité",
          "espèces domestiques : espèces communes apprivoisées par l'homme",
          "TGR+sacoche SDL+Lampe portative"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — I/ Les espèces animales."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est exacte ?",
        "options": [
          "Une lance (eau ou mousse) et la LDT",
          "2/ Les signes caractéristiques des animaux domestiques",
          "laver et rincer le matériel après usage",
          "LES MATERIEL DE BASE A EMPORTER"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — I/ Les espèces animales."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est exacte ?",
        "options": [
          "Les chiens : tatouage ou puce, fichier central",
          "Fin d'intervention RATP -SNCF",
          "Evacuation complète",
          "Alarme 2 à 20% de la concentration LIE du méthane"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — I/ Les espèces animales."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est exacte ?",
        "options": [
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "ETABLISSEMENTS DE MANŒUVRE DEUX LIGNES DE 110MM (FA - CA ou BA)",
          "Les blessés hospitalisés : victimes admises comme patients dans un hôpital plus de 24 heures",
          "Les bovins : bague sanitaire (services vétérinaires)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — I/ Les espèces animales."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est exacte ?",
        "options": [
          "rapidité de déplacement",
          "veiller à ce que l'eau d'alimentation soit entre 6 et 8 bars",
          "Les chevaux : livret signalétique et puce électronique (pour les chevaux de course)",
          "Ils sont composés des principaux éléments suivants"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — I/ Les espèces animales."
      },
      {
        "question": "Concernant « I/ Les espèces animales », quelle proposition est exacte ?",
        "options": [
          "Plastique type polycarbonate : La casse est difficile, il faut le retirer/déboîter à l'aide d'un outil de forcement",
          "bovin : coups de cornes, tentatives de charge, coups de pieds (postérieurs)",
          "Réactions cutanées au produit Réaction allergique localisée Gant en caoutchouc et lunettes de protection",
          "En cas de présence d'un hayon : le déposer au préalable"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — I/ Les espèces animales."
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
        "question": "Concernant « I/ Les espèces animales », quelle proposition est exacte ?",
        "options": [
          "ne pas déplacer l'aspirateur avec le moteur en marche,",
          "ovin, caprin (moutons, chèvres, béliers...) : coups de cornes, coups de tête",
          "manœuvrer le volant prévu à cet effet, lorsque la cabine est arrivée à hauteur d'un étage, une marque apparaît sur le câble,",
          "Ils sont réalisés par le conducteur et éventuellement aidé par un personnel (SDL, sous-officier adjoint, etc.) au moyen de tuyaux de 70 mm, 110 mm ..."
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — I/ Les espèces animales."
      },
      {
        "question": "Concernant « 1/Les carnivores/ », quelle proposition est exacte ?",
        "options": [
          "Le lasso permet de maîtriser les chiens ou les chats",
          "laver et rincer le mùatériel après usage",
          "2 cannes plongeuses",
          "Réaliser le calage de chaque véhicule impliqué où une victime est présente"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 1/Les carnivores/."
      },
      {
        "question": "Concernant « 1/Les carnivores/ », quelle proposition est exacte ?",
        "options": [
          "Il faut s'approcher du nid avec discrétion",
          "La lacette est une cordelette d'une longueur de 1,20 m. Elle permet de museler tous les animaux à museau pointu",
          "Liberté de mouvement des intervenants",
          "Couper les montants A et B selon la charte graphique en suivant un ordre judicieux"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 1/Les carnivores/."
      },
      {
        "question": "Concernant « 1/Les carnivores/ », quelle proposition est exacte ?",
        "options": [
          "La cage est indispensable pour soigner ou transporter le chien ou le chat capturé",
          "à partir de bouteilles de gaz de 12kgs ou 3kgs",
          "Forces de l'ordre : (Police ; Gendarmerie ; Forces auxiliaires)",
          "Protection des sauveteurs : tenue de feu et ARI en nombre suffisant,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 1/Les carnivores/."
      },
      {
        "question": "Concernant « 1/Les carnivores/ », quelle proposition est exacte ?",
        "options": [
          "Les chevaux : livret signalétique et puce électronique (pour les chevaux de course)",
          "Objectif : Savoir manœuvrer le matériel de désincarcération",
          "La pince à chat permet de saisir le cou du chat et de le serrer grâce à la poignée",
          "suit le chef d'agrès,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1/Les carnivores/."
      },
      {
        "question": "Concernant « 1/Les carnivores/ », quelle proposition est exacte ?",
        "options": [
          "remplir le bloc pompe d'eau,",
          "illustration: tronçonneuse en utilisation",
          "La mouchette est un instrument de contention qui permet de tenir l'animal par le nez",
          "faire descendre l'hydro-éjecteur avec une commande en évitant les chocs (raccorder la commande au clapet de vidange),"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1/Les carnivores/."
      },
      {
        "question": "Concernant « 1/Les carnivores/ », quelle proposition est exacte ?",
        "options": [
          "déterminer la cause de l'inondation et la supprimer (, Service municipalité , ONEE./Régie ..)",
          "2-détermination des chemins de fuite en fonction du terrain",
          "Les sangles de levage sont indispensables pour sortir un cheval ou un bovin tombé dans un trou, une piscine,…",
          "se rend à la machinerie"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — 1/Les carnivores/."
      },
      {
        "question": "Concernant « 3/ Les reptiles », quelle proposition est exacte ?",
        "options": [
          "Le crochet à serpent permet de capturer les serpents sans les blesser et sans danger. C'est une tige métallique de 50 cm à 1 m, coudée à son extrémité",
          "Relais (engin, motopompe, VEDI…)",
          "Rétablissement d'éclairage public",
          "S'assurer de l'état de la ou des personnes à l'intérieur, les rassurer de vive voix (recommander aux passagers de ne pas quitter la cabine)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 3/ Les reptiles."
      },
      {
        "question": "Concernant « 3/ Les reptiles », quelle proposition est exacte ?",
        "options": [
          "Un commandement d'exécution",
          "La pince à serpent permet de saisir le serpent au plus près de la tête en le maintenant à distance",
          "Objectif : Connaitre la MGO en secours routier",
          "Chef d'équipe Servant Sapeur de liaison Conducteur"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 3/ Les reptiles."
      },
      {
        "question": "Concernant « 3/ Les reptiles », quelle proposition est exacte ?",
        "options": [
          "amarrer la MPE si la surface n'est pas plane,",
          "Les pompes thermiques",
          "Le non respect de cette directive entraîne automatiquement la responsabilité de l'intéressé et/ou de son chef",
          "La glacière permet de placer le serpent après sa capture. On peut ainsi le transporter en toute sécurité"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 3/ Les reptiles."
      },
      {
        "question": "Concernant « 3/ Les reptiles », quelle proposition est exacte ?",
        "options": [
          "La couverture est utilisée pour la contention des lézards, des iguanes. En jetant la couverture sur l'animal, il va se sentir caché et va se calmer",
          "DIFFERENTS INTERVENANTS ET LEURS MISSIONS",
          "citerne environ 500 litres",
          "Il faut s'approcher du nid avec discrétion"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 3/ Les reptiles."
      },
      {
        "question": "Concernant « 1/ Situations diverses », quelle proposition est exacte ?",
        "options": [
          "MISSION RISQUES CONDUITE A TENIR",
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance",
          "L'hydro-éjecteur est utilisé pour aspirer un volume d'eau limité et pour pomper à partir d'une nappe d'eau",
          "Zone d'alimentation"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 1/ Situations diverses."
      },
      {
        "question": "Concernant « 1/ Situations diverses », quelle proposition est exacte ?",
        "options": [
          "chien blessé, accidenté ou inanimé morsures Approcher l'animal par l'arrière pour apprécier ses réactions. Museler le chien, le mettre sur un brancard",
          "En règle générale, ces deux types utilisent l'énergie électrique pour déplacer les cabines verticalement (moteur électrique continu ou alternatif)",
          "prendre les coordonnées de la société de dépannage pour les prévenir",
          "Implantation facile dans un immeuble existant"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 1/ Situations diverses."
      },
      {
        "question": "Concernant « 1/ Situations diverses », quelle proposition est exacte ?",
        "options": [
          "La BA nécessite 14 m en linéaire pour déposer la berce",
          "chien dans une voiture accidentée morsures Faire intervenir un animalier. Attraper l'animal avec un lasso et le faire sortir",
          "Poser une câle en bois, côté opposé au montant à redresser, puis la serrer contre le toit de l'habitacle avec un écarteur",
          "LES MATERIEL DE BASE A EMPORTER"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 1/ Situations diverses."
      },
      {
        "question": "Concernant « 1/ Situations diverses », quelle proposition est exacte ?",
        "options": [
          "chien méchant menaçant la sécurité morsure Faire intervenir un animalier. Maîtriser l'animal avec un lasso ou un filet. Faire intervenir les forces...",
          "Stationner le véhicule à distance,",
          "Calage sur 3 points minimum 2 points coté victime + 1 une roue",
          "Comme il n'a pas d'odeur et qu'il est invisible à l'oeil, seul un appareil de mesures permet de donner l'alarme"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 1/ Situations diverses."
      },
      {
        "question": "Concernant « 1/ Situations diverses », quelle proposition est exacte ?",
        "options": [
          "Soulever le pavillon et l'évacuer vers la zone de dépôt des structures",
          "chat perché au sommet d'un arbre. griffure morsure Ce n'est pas une urgence",
          "Un accident corporel implique un certain nombre d'usagers. Parmi ceux-ci, on distingue",
          "Protéger les parties saillantes"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 1/ Situations diverses."
      },
      {
        "question": "Concernant « Capture de reptile », quelle proposition est exacte ?",
        "options": [
          "regarder s'il y a un transformateur électrique à l'intérieur des locaux sinistrés",
          "Réactions cutanées au produit Réaction allergique localisée Gant en caoutchouc et lunettes de protection",
          "force de compression : sur laquelle on se limitera à une coupe de dégagement, la pression exercée étant capable de bloquer le guide chaîne",
          "se protéger les mains par des gants"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Capture de reptile."
      },
      {
        "question": "Concernant « Capture de reptile », quelle proposition est exacte ?",
        "options": [
          "surveiller l'environnement et prévenir le danger",
          "Matériel de base Matériel de base",
          "engager le minimum de personnel",
          "course verticale limitée à une hauteur entre 15 et 18 m"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Capture de reptile."
      },
      {
        "question": "Concernant « Capture de reptile », quelle proposition est exacte ?",
        "options": [
          "faire éloigner les curieux",
          "Ne jamais scier au dessus de la hauteur des épaules,",
          "Coupe ceinture Protections de coupes Cisailles",
          "laver et rincer le matériel après usage"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Capture de reptile."
      },
      {
        "question": "Concernant « Capture de reptile », quelle proposition est exacte ?",
        "options": [
          "utiliser un crochet à serpent",
          "S'équiper des EPI adaptés, toujours en binôme",
          "d'un moteur électrique accouplé à une pompe hydraulique,",
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Capture de reptile."
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
          "ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES",
          "S'assurer de l'état de la ou des personnes à l'intérieur, les rassurer de vive voix (recommander aux passagers de ne pas quitter la cabine)",
          "fuite sur canalisation d'alimentation ou d'évacuation",
          "Aspiration (nappe ou cours d'eau)"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est exacte ?",
        "options": [
          "L'agent de la Protection Civile doit mesurer le risque et rester attentif, dans le but de maintenir Sa sécurité et celle des autres intervenants",
          "Un accident corporel (mortel et non mortel) de la circulation routière est un accident qui",
          "nettoyer de temps en temps la crépine,",
          "Matériel de désincarcération comprend une cisaille, un écarteur, et des vérins hydraulique"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est exacte ?",
        "options": [
          "se rend à la machinerie",
          "Provoque au moins une victime, c'est-à-dire un usager ayant nécessité des soins médicaux",
          "OUVRIR UNE PORTE (PAR UTILISATION DU CADRE DE VITRE)",
          "le chef d'équipe dépose le matériel du panier. Le servant Maintient le dévidoir"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est exacte ?",
        "options": [
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'eau et de l'air",
          "reconnaître les lieux (type d'ascenseur, emplacement de la cabine et du local machinerie),",
          "FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT",
          "Survient sur une voie ouverte à la circulation publique"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est exacte ?",
        "options": [
          "Un commandement d'exécution",
          "Coupe pare-brise Scie sabre Halligan tool ou outils de forcement",
          "Un accident corporel implique un certain nombre d'usagers. Parmi ceux-ci, on distingue",
          "Eclairer la zone pour faciliter le travail et renforcer la sécurité des intervenants"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est exacte ?",
        "options": [
          "Les pompes thermiques",
          "Protection de la population : Mesures d'évacuation et procédures de sensibilisation",
          "Les indemnes : impliqués non décédés et dont l'état ne nécessite aucun soin médical",
          "Un commandement initial"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est exacte ?",
        "options": [
          "force de compression : sur laquelle on se limitera à une coupe de dégagement, la pression exercée étant capable de bloquer le guide chaîne",
          "Coupe ceinture Protections de coupes",
          "Les victimes : impliquées non indemnes",
          "Précision au niveau du déplacement"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est exacte ?",
        "options": [
          "Parmi les victimes, on distingue",
          "une pompe électrique doit toujours être dans l'eau lors de son fonctionnement, mais pas complètement immergée,",
          "ZE (zone émulseur) : les moyens émulseurs (CA/BA, BEM, citernes des pétroliers) y sont regroupés et employés",
          "FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est exacte ?",
        "options": [
          "Le corps de la cisaille : il supporte les mâchoires et contient le corps du ou des vérins (double effet)",
          "Les tués : toute personne qui décède sur le coup ou dans les trente jours qui suivent l'accident",
          "Surveillance des victimes intoxiquées par inhalation de gaz toxique",
          "Bouche d'incendie (BI)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES."
      },
      {
        "question": "Concernant « ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES », quelle proposition est exacte ?",
        "options": [
          "Objectif : Connaitre la MGO en secours routier",
          "Les blessés : victimes non tuées",
          "Finir par la découpe de la partie supérieure",
          "Pincer le bas de caisse pour créer une ouverture au niveau de la portière"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES."
      },
      {
        "question": "Concernant « Matériels », quelle proposition est exacte ?",
        "options": [
          "Noter le numéro du service d'assistance de la marque de l'ascenseur et le donner au chef d'agrès afin d'avertir le technicien de garde",
          "En règle générale, ces établissements se font du point d'attaque au point d'eau",
          "Trempé : Se dépose après scotchage à l'aide d'un pointeau choc",
          "citerne environ 500 litres"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Matériels."
      },
      {
        "question": "Concernant « Matériels », quelle proposition est exacte ?",
        "options": [
          "extincteur a poudre et CO2",
          "Ne pas allumer de feu pour réaliser la destruction mais pulvériser le produit insecticide à l'intérieur de la cheminée",
          "Diamètre de la conduite",
          "2e équipe fourgon Sapeur de liaison"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Matériels."
      },
      {
        "question": "Concernant « Matériels », quelle proposition est exacte ?",
        "options": [
          "cône de balisage Gilets rétro réfléchissants Panneaux triflashs",
          "brancher l'appareil dans un autre local que le local inondé, sur une prise reliée à la terre,",
          "allumer les projecteurs portatifs à l'extérieur de la zone de danger",
          "Placer une cale dans la poignée de porte"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Matériels."
      },
      {
        "question": "Concernant « Matériels », quelle proposition est exacte ?",
        "options": [
          "Matériel d'électrogène",
          "infiltration par remontée des eaux d'égouts ou de plans d'eau",
          "Fiche individuelle de signalement des incidents et agressions",
          "Intervention sur route Accident sur 1 seule voie"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Matériels."
      },
      {
        "question": "Concernant « Matériels », quelle proposition est exacte ?",
        "options": [
          "Matériel de désincarcération comprend une cisaille, un écarteur, et des vérins hydraulique",
          "Protection des sauveteurs : tenue de feu et ARI en nombre suffisant,",
          "Le chef d'agrès désigne au conducteur l'orifice d'alimentation du poteau relais",
          "les lames droites permettent la section de métaux de diamètre plus important (montant arrière (C))"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Matériels."
      },
      {
        "question": "Concernant « Matériels », quelle proposition est exacte ?",
        "options": [
          "Matériel Calage (cousine pneumatique, Cales de bois ou pré-formatées Cordage, Tire-fort",
          "Parmi les blessés, on distingue",
          "Les Moto-Pompes Flottantes CCC 6000",
          "Il assure la surveillance des tuyaux de 45 mm et contrôle régulièrement le niveau d'émulseur et rend compte de la quantité restante"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Matériels."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR BALISAGE », quelle proposition est exacte ?",
        "options": [
          "Ne jamais utiliser d'essence pour détruire un nid",
          "La reconnaissance doit aussi permettre de décider s'il faut",
          "On va s'intéresser ici au balisage réalisé avec le matériel du VSR (panneaux triflashs et cônes de Lubeck)",
          "Gants en caoutchouc renforcé"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR BALISAGE."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR BALISAGE », quelle proposition est exacte ?",
        "options": [
          "Le chef d'agrès rend compte de la mise en place du dispositif",
          "« Comment vont réagir les 2 morceaux ? »",
          "Voici les schémas de balisage de différents types d'accidents",
          "d'un réservoir d'huile,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR BALISAGE."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR BALISAGE », quelle proposition est exacte ?",
        "options": [
          "Écarter les pieds de façon à obtenir une meilleure mobilité,",
          "Mettre le starter, enfoncer le levier des gaz et le bouton de blocage",
          "Diamètre de la conduite",
          "Intervention sur route Accident sur 1 seule voie"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR BALISAGE."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR BALISAGE », quelle proposition est exacte ?",
        "options": [
          "Les indemnes : impliqués non décédés et dont l'état ne nécessite aucun soin médical",
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE",
          "Intervention dans un rond point",
          "surveiller l'environnement et prévenir le danger"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR BALISAGE."
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
        "question": "Concernant « FICHE TECHNIQUE SR BALISAGE », quelle proposition est exacte ?",
        "options": [
          "Le chef d'agrès désigne au conducteur l'orifice d'alimentation du poteau relais",
          "Accident sur la voie de sortie",
          "Couper et déposer l'ensemble du joint",
          "Zone de déploiement initial"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR BALISAGE."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR BALISAGE », quelle proposition est exacte ?",
        "options": [
          "Objectif : Savoir manœuvrer le matériel de désincarcération",
          "force de compression : sur laquelle on se limitera à une coupe de dégagement, la pression exercée étant capable de bloquer le guide chaîne",
          "Interventions dans un rond point",
          "ovin, caprin (moutons, chèvres, béliers...) : coups de cornes, coups de tête"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR BALISAGE."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR BALISAGE », quelle proposition est exacte ?",
        "options": [
          "Accident sur la voie du milieu",
          "procéder à l'ouverture de la porte palière au moyen de la clé adaptée,",
          "les pompes électriques",
          "On peut classer les espèces animales en 3 catégories"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR BALISAGE."
      },
      {
        "question": "Concernant « Calage d'un véhicule sur ses roues », quelle proposition est exacte ?",
        "options": [
          "Pulvérisateur projetant de la poudre",
          "une pompe électrique doit toujours être dans l'eau lors de son fonctionnement, mais pas complètement immergée,",
          "Protection des victimes : victimes traitées et évacuées en urgence ,",
          "Calage d'un véhicule sur ses roues"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Calage d'un véhicule sur ses roues."
      },
      {
        "question": "Concernant « Calage d'un véhicule sur ses roues », quelle proposition est exacte ?",
        "options": [
          "sécher l'appareil après utilisation",
          "Attention aux véhicules équipés d'airbags latéraux dans les portières",
          "image: schéma de calage d'un véhicule sur 3 ou 4 points",
          "Ne jamais travailler en équilibre sur une échelle,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Calage d'un véhicule sur ses roues."
      },
      {
        "question": "Concernant « Calage d'un véhicule sur ses roues », quelle proposition est exacte ?",
        "options": [
          "Insérer l'Halligan tool (pince coupant) afin de créer un jour de quelques centimètres",
          "image: schéma de calage sur 3 points",
          "Grille de protection du visage",
          "Le chef d'équipe déposes on matériel au point d'attaque, retourne au dévidoir et répercute l'ordre au servant. Le servant tire le dévidoir et le dé..."
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Calage d'un véhicule sur ses roues."
      },
      {
        "question": "Concernant « Calage d'un véhicule sur ses roues », quelle proposition est exacte ?",
        "options": [
          "Calage sur 3 points minimum 2 points coté victime + 1 une roue",
          "referme la porte palière et s'assure de sa bonne fermeture",
          "utiliser un aspirateur à eau pour une hauteur d'eau ≤ 5 cm,",
          "Risques Effets Moyens de protection"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Calage d'un véhicule sur ses roues."
      },
      {
        "question": "Concernant « Calage d'un véhicule sur ses roues », quelle proposition est exacte ?",
        "options": [
          "Conducteur et passager Calage 4 points minimum + 1 roue",
          "Il faut s'approcher du nid avec discrétion",
          "Réactions cutanées au produit Réaction allergique localisée Gant en caoutchouc et lunettes de protection",
          "attention à ne pas aggraver la situation par l'apport d'eau,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Calage d'un véhicule sur ses roues."
      },
      {
        "question": "Concernant « Calage d'un véhicule sur ses roues », quelle proposition est exacte ?",
        "options": [
          "Les pompes électriques",
          "image: schéma de calage sur 4 points",
          "Bon de prise en charge provisoire de matériel",
          "Zone de déploiement initial"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Calage d'un véhicule sur ses roues."
      },
      {
        "question": "Concernant « MARCHE GENERALE DES OPERATIONS », quelle proposition est exacte ?",
        "options": [
          "Gêne à la progression des engins d'incendie",
          "prendre les précautions nécessaires lors du remplissage de carburant,",
          "les lames courbes permettent la section de métaux aux diamètres inférieurs à celles-ci (montant avant (A) ou milieu (B)),",
          "MARCHE GENERALE DES OPERATIONS"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — MARCHE GENERALE DES OPERATIONS."
      },
      {
        "question": "Concernant « MARCHE GENERALE DES OPERATIONS », quelle proposition est exacte ?",
        "options": [
          "Objectif : Connaitre la MGO en secours routier",
          "Une fois le vitrage brisé, passez la main à l'intérieur pour déposer le vitrage entier vers l'extérieur",
          "4- Déterminer la direction de la chute",
          "Lors de la phase d'extinction, le débit des lances doit être adapté"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — MARCHE GENERALE DES OPERATIONS."
      },
      {
        "question": "Concernant « MARCHE GENERALE DES OPERATIONS », quelle proposition est exacte ?",
        "options": [
          "Réaction immédiate, Message d'ambiance complet, Demande de renfort",
          "attention à ne pas aggraver la situation par l'apport d'eau,",
          "Les raclettes: Elles servent à évacuer une fine couche de liquide",
          "Risques Effets Moyens de protection"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — MARCHE GENERALE DES OPERATIONS."
      },
      {
        "question": "Concernant « MARCHE GENERALE DES OPERATIONS », quelle proposition est exacte ?",
        "options": [
          "DANGER : présence d'eau et d'électricité",
          "Réaliser le calage de chaque véhicule impliqué où une victime est présente",
          "TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES",
          "Le gaz au Maroc est distribué soit"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — MARCHE GENERALE DES OPERATIONS."
      },
      {
        "question": "Concernant « MARCHE GENERALE DES OPERATIONS », quelle proposition est exacte ?",
        "options": [
          "ne jamais immerger la fiche du câble,",
          "Eclairer la zone pour faciliter le travail et renforcer la sécurité des intervenants",
          "Intoxication par les vapeurs au contact direct du produit Malaises ponctuels Masque de protection niveau 1",
          "Tirer le cordon de lancement jusqu'au déclenchement du premier allumage audible"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — MARCHE GENERALE DES OPERATIONS."
      },
      {
        "question": "Concernant « 1) Pompe hydraulique », quelle proposition est exacte ?",
        "options": [
          "La couverture est utilisée pour la contention des lézards, des iguanes. En jetant la couverture sur l'animal, il va se sentir caché et va se calmer",
          "Appareil qui permet de comprimer l'huile hydraulique pour servir les outils de sauvetage",
          "matériels sur ordre",
          "ACCIDENT DE LA ROUTE IMPLIQUANT DES VICTIMES"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 1) Pompe hydraulique."
      },
      {
        "question": "Concernant « 1) Pompe hydraulique », quelle proposition est exacte ?",
        "options": [
          "Elle est fixe ou semi-stationnaire dans le V.S.R, et peut disposer ou non de 2 dévidoirs équipés de flexibles",
          "Mise à dispositions des moyens spécifiques",
          "Ne jamais utiliser d'essence pour détruire un nid",
          "L'INTERVENTION D'ÉPUISEMENT : DÉFINITION ET MESURES PRÉVENTIVES"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 1) Pompe hydraulique."
      },
      {
        "question": "Concernant « 1) Pompe hydraulique », quelle proposition est exacte ?",
        "options": [
          "Quel que soit le type, les ascenseurs à traction à câbles comprennent généralement",
          "Objectif : Réalisé l'accée à d'une victime incarcérée en dégageant le pavillon",
          "Ils s'assurent de l'ouverture complète des tubulures de la division",
          "Il existe 2 types de pompes hydrauliques : thermique ou électrique"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 1) Pompe hydraulique."
      },
      {
        "question": "Concernant « 2) Cisaille », quelle proposition est exacte ?",
        "options": [
          "Lames; lames à bord tranchant",
          "Précision au niveau du déplacement",
          "Positionner le coupe pare-brise de telle façon que",
          "Assistance aux sinistrés"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — 2) Cisaille."
      },
      {
        "question": "Concernant « 2) Cisaille », quelle proposition est exacte ?",
        "options": [
          "Poignée du lanceur",
          "poignée de contrôle",
          "amarrer le matériel si l'épuisement se fait à profondeur importante",
          "FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 2) Cisaille."
      },
      {
        "question": "Concernant « 2) Cisaille », quelle proposition est exacte ?",
        "options": [
          "ne pas placer l'appareil sous des écoulements d'eau,",
          "fût, ajutage de 35 mm ; ARI et tenues d'approche",
          "ETABLISSEMENTS DE LANCES A MOUSSE AU MOYEN DU (FA-CA ou BA) MANŒUVRES DE LANCE CANON MOUSSE",
          "poignée de maintien"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — 2) Cisaille."
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
        "question": "Concernant « 2) Cisaille », quelle proposition est exacte ?",
        "options": [
          "placer le reptile dans un sac",
          "raccord avec bouchon",
          "vérifier, avant toute utilisation, l'état des câbles",
          "Positionner le manchon à hauteur du demi-raccord face extérieure contre terre"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — 2) Cisaille."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "Raccordement Tuyau de 45mm P = 10B",
          "Objectif : Savoir augmenter l'espace de survie en utilisant un vérin",
          "Ouvrir l'écarteur pour faire céder la serrure",
          "FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "surveiller l'environnement et prévenir le danger",
          "Ils se composent principalement de",
          "Objectif : Savoir manœuvrer le matériel de désincarcération",
          "Il faut s'approcher du nid avec discrétion"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "suivant le type de motorisation précision au niveau de la vitesse et du déplacement",
          "Ils se composent principalement de",
          "fait noter ou note l'identité des impliqués",
          "Elles peuvent posséder des lames de différentes formes, pour de multiples applications"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "les lames courbes permettent la section de métaux aux diamètres inférieurs à celles-ci (montant avant (A) ou milieu (B)),",
          "en version standard, nécessite un cabanon technique en toiture",
          "Proscrire toute manipulation intempestive de circuit électrique (sonnette, éclairage…)",
          "illustration: tronçonneuse en utilisation"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "les lames droites permettent la section de métaux de diamètre plus important (montant arrière (C))",
          "Il faut penser à rajouter 1 bar de pression pour 10 m de dénivelée positive à la pression en sortie de pompe",
          "Ces forces devront être très clairement identifiées avant la coupe, de façon à ne pas être surpris lors de la libération",
          "Etablir deux lignes de 110 mm, permettant de disposer de deux points d'eau avancés (2divisions 100 / 3 x50) jusqu'à 1 000 m"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "Le vide-cave est utilisé pour aspirer l'eau des caves, des its, des réservoirs",
          "Arrêter le moteur avant de poser l'appareil",
          "porcin : morsures, tentatives de charge (sanglier)",
          "Le corps de la cisaille : il supporte les mâchoires et contient le corps du ou des vérins (double effet)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "se protéger les mains par des gants",
          "Écarter jusqu'à extraire le dispositif coulissant",
          "L'écarteur est un outil qui permet d'écarter, d'écraser ou de tirer des pièces de carrosserie",
          "2e équipe fourgon Sapeur de liaison"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "TECHNIQUES DE DESTRUCTION DE NIDS DE GUEPES",
          "Les victimes : impliquées non indemnes",
          "Les bras de levier d'écartement",
          "Dérouler entièrement le tuyau afin de faciliter l'évacuation de l'eau et de l'air"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "Outil de dégarnissage Crayon carrosserie",
          "ne jamais l'utiliser en relais,",
          "pointes à écarter : sont les becs traditionnels mis en place sur l'écarteur. Ils sont munis de crantage externe et interne permettant une prise ou ...",
          "N'utiliser la tronçonneuse que dans des endroits ventilés"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "« Où est mon emplacement le plus sûr après la coupe ? »",
          "Le lasso permet de maîtriser les chiens ou les chats",
          "Réalisée par un ruban de couleur et tenu par les services de police ou gendarmerie",
          "pointes à couper : permettent l'utilisation d'un écarteur pour le découpage de plaque en métal très fine"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION », quelle proposition est exacte ?",
        "options": [
          "Ce sont les causes et l'importance de l'inondation qui vont déterminer le type de matériel à utiliser",
          "2 cannes plongeuses",
          "Pour évaluer ce volume, il faut faire le calcul suivant",
          "Ces chaînes de traction sont composées de 2 parties, chacune est munie d'un crochet de raccourcissement qui permet d'attraper uniquement la chaîne"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR MATÉRIEL DE DÉSINCARCÉRATION."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT », quelle proposition est exacte ?",
        "options": [
          "L'établissement d'alimentation permet d'alimenter la pompe de l'engin",
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars pour 40 m",
          "FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT",
          "MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT », quelle proposition est exacte ?",
        "options": [
          "vérifie la fermeture des portes palières à tous les étages,",
          "Ne pas rentrer dans la «zone critique» pour éviter l'affrontement",
          "Objectif : Savoir ouvrir une porte d'un véhicule sur le toit",
          "Le gaz au Maroc est distribué soit"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT », quelle proposition est exacte ?",
        "options": [
          "Pincer le bas de caisse pour créer une ouverture au niveau de la portière",
          "vérifie que chacun porte son EPI complet,",
          "ovin, caprin (moutons, chèvres, béliers...) : coups de cornes, coups de tête",
          "Perte de charge dans les tuyaux de 70 mm : 0,45 bar pour 60 m"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT », quelle proposition est exacte ?",
        "options": [
          "Les tués : toute personne qui décède sur le coup ou dans les trente jours qui suivent l'accident",
          "Vérifier mutuellement l'étanchéité des combinaisons,",
          "Si besoin, terminer l'ouverture de porte en insérant l'écarteur dans l'espace créé après déformation",
          "Passer l'écarteur dans le jour de la porte au niveau du bas de caisse Ne pas se positionner entre l'outil et la portière"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT », quelle proposition est exacte ?",
        "options": [
          "le chef d'équipe dépose le matériel du panier. Le servant Maintient le dévidoir",
          "Objectif : Connaitre la MGO en secours routier",
          "fuite sur canalisation d'alimentation ou d'évacuation",
          "Réaliser l'ouverture complète si nécessaire en plaçant l'écarteur au niveau des charnières"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT."
      },
      {
        "question": "Concernant « FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT », quelle proposition est exacte ?",
        "options": [
          "une fois la personne dégagée refermer et verrouiller la porte",
          "Tous les moyens de calage et d'arrimage des grosses pièces seront impérativement établis avant le travail de tronçonnage",
          "L'ETABLISSEMENT D'ATTAQUE SUR ECHELLES LANCE SUR ECHELLE",
          "Si l'ouverture de porte est rendue difficile par le cadre de la vitre, le découper au moyen de la cisaille"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — FICHE TECHNIQUE SR OUVERTURE DE PORTE D'UN VEHICULE SUR LE TOIT."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (PAR UTILISATION DU CADRE DE VITRE) », quelle proposition est exacte ?",
        "options": [
          "Fin d'intervention RATP -SNCF",
          "à moteur-treuil planétaire,",
          "OUVRIR UNE PORTE (PAR UTILISATION DU CADRE DE VITRE)",
          "Ces chaînes de traction sont composées de 2 parties, chacune est munie d'un crochet de raccourcissement qui permet d'attraper uniquement la chaîne"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (PAR UTILISATION DU CADRE DE VITRE)."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (PAR UTILISATION DU CADRE DE VITRE) », quelle proposition est exacte ?",
        "options": [
          "respecter le périmétre de sécurité",
          "Objectif : Savoir Ouvrir une porte (par utilisation du cadre de vitre)",
          "Fin d'intervention RATP -SNCF",
          "OUVRIR UNE PORTE (METHODE CLASSIQUE)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (PAR UTILISATION DU CADRE DE VITRE)."
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
        "question": "Concernant « OUVRIR UNE PORTE (PAR UTILISATION DU CADRE DE VITRE) », quelle proposition est exacte ?",
        "options": [
          "Cale en bois ou balle souple",
          "allumer les projecteurs portatifs à l'extérieur de la zone de danger",
          "Maintien de l'ordre",
          "le chef d'équipe dépose le matériel du panier. Le servant Maintient le dévidoir"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (PAR UTILISATION DU CADRE DE VITRE)."
      },
      {
        "question": "Concernant « Écrasement dans l'espace vitré », quelle proposition est exacte ?",
        "options": [
          "Réalisée par un ruban de couleur et tenu par les services de police ou gendarmerie",
          "Écrasement dans l'espace vitré",
          "ALIMENTATION ET PRESSION A LA POMPE",
          "Relais (engin, motopompe, VEDI…)"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Écrasement dans l'espace vitré."
      },
      {
        "question": "Concernant « Écrasement dans l'espace vitré », quelle proposition est exacte ?",
        "options": [
          "Le corps de la cisaille : il supporte les mâchoires et contient le corps du ou des vérins (double effet)",
          "Outil de dégarnissage Crayon carrosserie",
          "Pression à la lance : 6 bars (lance non autorégulée)",
          "Pincer la porte légèrement au-dessus de la poignée pour se dégager un jour de quelques centimètres"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Écrasement dans l'espace vitré."
      },
      {
        "question": "Concernant « Écrasement dans l'espace vitré », quelle proposition est exacte ?",
        "options": [
          "course verticale limitée à une hauteur entre 15 et 18 m",
          "Attention aux véhicules équipés d'airbags latéraux dans les portières",
          "Lors de la phase d'extinction, le débit des lances doit être adapté",
          "efficacité énergétique importante"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Écrasement dans l'espace vitré."
      },
      {
        "question": "Concernant « Écrasement dans l'espace vitré », quelle proposition est exacte ?",
        "options": [
          "Insérer l'écarteur dans le jour et l'ouvrir afin de faire céder la serrure",
          "Un commandement initial",
          "Lames; lames à bord tranchant",
          "1/Les mesures à prendre avant d'intervenir sur la cabine"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Écrasement dans l'espace vitré."
      },
      {
        "question": "Concernant « Écartement dans l'espace vitré », quelle proposition est exacte ?",
        "options": [
          "Écartement dans l'espace vitré",
          "chien : morsures chat : morsures, griffures",
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Écartement dans l'espace vitré."
      },
      {
        "question": "Concernant « Écartement dans l'espace vitré », quelle proposition est exacte ?",
        "options": [
          "Ouvrir l'écarteur afin de déformer la porte et faire céder la serrure",
          "Faire assurer l'entretien des tronçonneuses dès le retour,",
          "ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENTS DE LIGNES DE 110MM",
          "Le chef d'agrès se rend au point d'eau le plus approprié à la manoeuvre qu'il compte réaliser"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Écartement dans l'espace vitré."
      },
      {
        "question": "Concernant « Écartement dans l'espace vitré », quelle proposition est exacte ?",
        "options": [
          "ETABLISSEMENT VERTICAL SANS L.A",
          "Assistance aux sinistrés",
          "Si besoin, terminer l'ouverture de porte en insérant l'écarteur dans l'espace créé après déformation",
          "Lors de la phase d'extinction, le débit des lances doit être adapté"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Écartement dans l'espace vitré."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (METHODE CLASSIQUE) », quelle proposition est exacte ?",
        "options": [
          "Le conducteur doit pouvoir assurer un potentiel hydraulique de 500 l/min par lance",
          "3 tuyaux de 70 x 20 m pliés en écheveau (dont un équipé d'une division)",
          "OUVRIR UNE PORTE (METHODE CLASSIQUE)",
          "à moteur à attaque directe (couramment appelé \"Gearless\" ou sans treuil),"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (METHODE CLASSIQUE)."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (METHODE CLASSIQUE) », quelle proposition est exacte ?",
        "options": [
          "Appareil qui permet de comprimer l'huile hydraulique pour servir les outils de sauvetage",
          "Objectif : Savoir Ouvrir une porte (méthode classique)",
          "sécher l'appareil après utilisation",
          "Pointeau ou séccoise"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (METHODE CLASSIQUE)."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (METHODE CLASSIQUE) », quelle proposition est exacte ?",
        "options": [
          "La destruction doit toujours se dérouler à la tombée de la nuit, ou le matin avant le lever du soleil",
          "Cale en bois ou balle souple",
          "Il faut s'approcher du nid avec discrétion",
          "Si besoin, terminer l'ouverture de porte en insérant l'écarteur dans l'espace créé après déformation"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (METHODE CLASSIQUE)."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (METHODE CLASSIQUE) », quelle proposition est exacte ?",
        "options": [
          "Matériel Calage (cousine pneumatique, Cales de bois ou pré-formatées Cordage, Tire-fort",
          "Outil de dégarnissage Crayon carrosserie Cisailles",
          "Insérer l'Halligan tool (pince coupant) afin de créer un jour de quelques centimètres",
          "surveiller l'environnement et prévenir le danger"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (METHODE CLASSIQUE)."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (METHODE CLASSIQUE) », quelle proposition est exacte ?",
        "options": [
          "Gérer le pare brise et les vitrages selon les fiches techniques réalisées Dégarnir les montants",
          "Insérer l'écarteur dans le jour venant d'être créé",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "Grille de protection du visage"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (METHODE CLASSIQUE)."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (METHODE CLASSIQUE) », quelle proposition est exacte ?",
        "options": [
          "La ligne de 110 mm peut être établie du point d'eau vers le point d'attaque dans certaines circonstances",
          "Ouvrir l'écarteur pour faire céder la serrure",
          "fuite sur canalisation d'alimentation ou d'évacuation",
          "Pour aborder un chien, l'homme doit se faire considérer comme l'individu dominant, l'animal adoptera alors une attitude de soumission"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (METHODE CLASSIQUE)."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (METHODE CLASSIQUE) », quelle proposition est exacte ?",
        "options": [
          "Un accident corporel (mortel et non mortel) de la circulation routière est un accident qui",
          "Travailler dans le sens classique de l'ouverture de la porte",
          "Au SdL il désigne l'orifice de refoulement du poteau et l'orifice d'alimentation de la colonne sèche",
          "Les aspirateurs à eau"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (METHODE CLASSIQUE)."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE (METHODE CLASSIQUE) », quelle proposition est exacte ?",
        "options": [
          "Le corps de la cisaille : il supporte les mâchoires et contient le corps du ou des vérins (double effet)",
          "Insérer une cale ou la balle en mousse dans la poignée intérieure de la porte afin de faciliter le déblocage de cette dernière",
          "Bons de mouvement ST 30 bis",
          "mettre éventuellement un panier en osier,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE (METHODE CLASSIQUE)."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE COULISSANTE », quelle proposition est exacte ?",
        "options": [
          "attention à ne pas aggraver la situation par l'apport d'eau,",
          "Objectif : Savoir Ouvrir une porte coulissante",
          "MANŒUVRE DE LA LANCE CANON MOUSSE",
          "sangler les raccords des tuyaux,"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE COULISSANTE."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE COULISSANTE », quelle proposition est exacte ?",
        "options": [
          "Le lasso permet de maîtriser les chiens ou les chats",
          "Placer une cale dans la poignée de porte",
          "une fois la personne dégagée refermer et verrouiller la porte",
          "Attention aux véhicules équipés d'airbags latéraux dans les portières"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE COULISSANTE."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE COULISSANTE », quelle proposition est exacte ?",
        "options": [
          "Ne jamais travailler en équilibre sur une échelle,",
          "effectue la montée ou la descente en respectant les procédures selon le type d'ascenseur,",
          "Insérer l'écarteur dans la partie arrière de la porte juste à côté du rail coulissant",
          "1re et 2e lance (eau ou mousse)"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE COULISSANTE."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE COULISSANTE », quelle proposition est exacte ?",
        "options": [
          "le remettre aux forces de l'ordre, au vétérinaire",
          "Distance appliquée à priori dans un premier temps mais évolutive",
          "Coupe ceinture Protections de coupes",
          "Écarter jusqu'à extraire le dispositif coulissant"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE COULISSANTE."
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
        "question": "Concernant « OUVRIR UNE PORTE COULISSANTE », quelle proposition est exacte ?",
        "options": [
          "ouvrir le couvercle uniquement lorsque la prise est débranchée,",
          "Tirer la porte au maximum dans son rail coulissant pour laisser la plus grande ouverture possible",
          "l'équipier assure la protection de son binôme à l'aide d'un bâton",
          "Ils sont composés des principaux éléments suivants"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE COULISSANTE."
      },
      {
        "question": "Concernant « OUVRIR UNE PORTE COULISSANTE », quelle proposition est exacte ?",
        "options": [
          "La porte peut être entièrement déposée en insérant l'écarteur dans les brides supérieures",
          "Liaison personnelle",
          "toujours éteindre le moteur avant de faire le plein d'essence,",
          "Coupe ceinture Protections de coupes Cisailles"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — OUVRIR UNE PORTE COULISSANTE."
      },
      {
        "question": "Concernant « AUGMENTER L'ESPACE DE SURVIE », quelle proposition est exacte ?",
        "options": [
          "Le chef d'agrès se rend au point d'eau le plus approprié à la manoeuvre qu'il compte réaliser",
          "Ils établissent les tuyaux de 45 mm des raccords d'injection vers la MPVE (1 tuyau directement raccordé sur la MPVE avant la division 50x2x50)",
          "Objectif : Savoir augmenter l'espace de survie en utilisant un vérin",
          "Mise à dispositions des moyens spécifiques"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — AUGMENTER L'ESPACE DE SURVIE."
      },
      {
        "question": "Concernant « AUGMENTER L'ESPACE DE SURVIE », quelle proposition est exacte ?",
        "options": [
          "Lors de la phase d'extinction, le débit des lances doit être adapté",
          "Objectif : Savoir gérer les différents vitrages et utiliser les outils adaptés en réduisant au maximum les débris et poussières",
          "Poser une câle en bois, côté opposé au montant à redresser, puis la serrer contre le toit de l'habitacle avec un écarteur",
          "allumer les projecteurs portatifs à l'extérieur de la zone de danger"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — AUGMENTER L'ESPACE DE SURVIE."
      },
      {
        "question": "Concernant « AUGMENTER L'ESPACE DE SURVIE », quelle proposition est exacte ?",
        "options": [
          "Positionner le vérin contre la cale en bois et le montant",
          "Les Moto-Pompes Remorquables (M.P.R.)",
          "La BA nécessite 14 m en linéaire pour déposer la berce",
          "en cas d'intervention payante, remplit le formulaire d'intervention payante,"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — AUGMENTER L'ESPACE DE SURVIE."
      },
      {
        "question": "Concernant « AUGMENTER L'ESPACE DE SURVIE », quelle proposition est exacte ?",
        "options": [
          "Alarme 2 à 20% de la concentration LIE du méthane",
          "DANGER : présence d'eau et d'électricité",
          "Pousser le montant avec le vérin",
          "matériels sur ordre"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — AUGMENTER L'ESPACE DE SURVIE."
      },
      {
        "question": "Concernant « AUGMENTER L'ESPACE DE SURVIE », quelle proposition est exacte ?",
        "options": [
          "Placer la poignée parallèle au plafond",
          "bovin : coups de cornes, tentatives de charge, coups de pieds (postérieurs)",
          "le pointeau repose dans un coin de la vitre,",
          "Il faut penser à rajouter 1 bar de pression pour 10 m de dénivelée positive à la pression en sortie de pompe"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — AUGMENTER L'ESPACE DE SURVIE."
      },
      {
        "question": "Concernant « AUGMENTER L'ESPACE DE SURVIE », quelle proposition est exacte ?",
        "options": [
          "Objectif : Savoir identifier et déposer un pare brise (collé/jointé) en toute sécurité",
          "Prendre en considération le sens du fil du bois pour les cales",
          "cône de balisage Gilets rétro réfléchissants Panneaux triflashs",
          "Astuce(s) : La scie sabre peut être un outil complémentaire pour la césarisation des montants et du pare brise"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — AUGMENTER L'ESPACE DE SURVIE."
      },
      {
        "question": "Concernant « PAVILLON COMPLET », quelle proposition est exacte ?",
        "options": [
          "Avis de passage des sapeurs pompiers",
          "ETABLISSEMENTS DE DEUX LIGNES DE 110MM (FA SEUL)",
          "Objectif : Réalisé l'accée à d'une victime incarcérée en dégageant le pavillon",
          "La porte peut être entièrement déposée en insérant l'écarteur dans les brides supérieures"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — PAVILLON COMPLET."
      },
      {
        "question": "Concernant « PAVILLON COMPLET », quelle proposition est exacte ?",
        "options": [
          "Non toxique pour les personnes, non corrosif",
          "Outil de dégarnissage Crayon carrosserie",
          "Toujours se poser les questions suivantes : « Suis-je en sécurité là où je me trouve ? »",
          "consommation énergétique importante"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — PAVILLON COMPLET."
      },
      {
        "question": "Concernant « PAVILLON COMPLET », quelle proposition est exacte ?",
        "options": [
          "Coupe ceinture Protections de coupes Cisailles",
          "le chef d'équipe dépose le matériel du panier. Le servant Maintient le dévidoir",
          "Insérer l'écarteur dans la partie arrière de la porte juste à côté du rail coulissant",
          "On retrouve certains signes: érection des poils du dos, expressions du museau, positions de la queue et des oreilles"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — PAVILLON COMPLET."
      },
      {
        "question": "Concernant « PAVILLON COMPLET », quelle proposition est exacte ?",
        "options": [
          "Ouvrir l'écarteur afin de déformer la porte et faire céder la serrure",
          "laver et rincer le mùatériel après usage",
          "Gérer le pare brise et les vitrages selon les fiches techniques réalisées Dégarnir les montants",
          "MANŒUVRE DE LA LANCE CANON MOUSSE"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — PAVILLON COMPLET."
      },
      {
        "question": "Concernant « PAVILLON COMPLET », quelle proposition est exacte ?",
        "options": [
          "faire le moins de coudes possible avec le tuyau de refoulement,",
          "Couper les montants A et B selon la charte graphique en suivant un ordre judicieux",
          "MISE EN ŒUVRE DU MATÉRIEL D'EPUISEMENT ET LES PRÉCAUTIONS A PRENDRE EN INTERVENTION",
          "Gêne à la progression des engins d'incendie"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — PAVILLON COMPLET."
      },
      {
        "question": "Concernant « PAVILLON COMPLET », quelle proposition est exacte ?",
        "options": [
          "remplir le bloc pompe d'eau,",
          "les ascenseurs hydrauliques",
          "Les blessés hospitalisés : victimes admises comme patients dans un hôpital plus de 24 heures",
          "Couper les montants en prenant garde de ne pas sectionner les vérins du coffre (les gérer au préalable)"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — PAVILLON COMPLET."
      },
      {
        "question": "Concernant « PAVILLON COMPLET », quelle proposition est exacte ?",
        "options": [
          "Distance appliquée à priori dans un premier temps mais évolutive",
          "Soulever le pavillon et l'évacuer vers la zone de dépôt des structures",
          "ETABLISSEMENTS DE MANŒUVRE ETABLISSEMENT D4UNE LCM (FA-CA ou BA) MANŒUVRE DE LA LANCE CANON MOUSSE",
          "Il portera une attention toute particulière à celle-ci pour éviter qu'elle ne se déchausse et prive les deux engins de leur alimentation en eau"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — PAVILLON COMPLET."
      },
      {
        "question": "Concernant « PAVILLON COMPLET », quelle proposition est exacte ?",
        "options": [
          "Bouche d'incendie (BI)",
          "Astuce(s) : La scie sabre peut être un outil complémentaire pour la césarisation des montants et du pare brise",
          "Pression à la lance : 6 bars (lance non autorégulée)",
          "ETABLISSEMENT D'UNE SECONDE LANCE SUR LA DIVISION"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — PAVILLON COMPLET."
      },
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est exacte ?",
        "options": [
          "Outil de dégarnissage Crayon carrosserie Cisailles",
          "Situation : Reconnaître les lieux (type de la machine, emplacement de la cabine et du local de la machinerie)",
          "Provoque au moins une victime, c'est-à-dire un usager ayant nécessité des soins médicaux",
          "Cale en bois ou balle souple"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Matériels nécessaires."
      },
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est exacte ?",
        "options": [
          "Coupe ceinture Protections de coupes",
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars pour 40 m",
          "Réaliser l'ouverture complète si nécessaire en plaçant l'écarteur au niveau des charnières",
          "Pincer la porte légèrement au-dessus de la poignée pour se dégager un jour de quelques centimètres"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Matériels nécessaires."
      },
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est exacte ?",
        "options": [
          "Placer la poignée parallèle au plafond",
          "ne pas pencher l'aspirateur lorsqu'il fonctionne,",
          "Cas particuliers (équipe à 3)",
          "Dégarni les montants B et C et gérer les vitrages"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — Matériels nécessaires."
      },
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est exacte ?",
        "options": [
          "Si demi-pavillon avant : couper selon la charte graphique les montants B et C",
          "Ils s'assurent de l'ouverture complète des tubulures de la division",
          "Dans les opérations d'épuisement des eux il est indispensable d'estimer le volume d'eau à évacuer, car il va déterminer le matériel à utiliser",
          "tuyaux de 110 mm dans le cas d'établissements de lance canon"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Matériels nécessaires."
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
        "question": "Concernant « Matériels nécessaires », quelle proposition est exacte ?",
        "options": [
          "course verticale pas vraiment limitée",
          "Liaison personnelle (hormis F)",
          "Si demi-pavillon arrière : couper selon la charte graphique les montants A et B",
          "Toujours transporter l'appareil le moteur arrêté"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Matériels nécessaires."
      },
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est exacte ?",
        "options": [
          "Etablir deux lignes de 110 mm, permettant de disposer de deux points d'eau avancés (2divisions 100 / 3 x50) jusqu'à 1 000 m",
          "Effectuer une coupe de décharge à l'endroit du pliage après dégarnissage",
          "Écrasement dans l'espace vitré",
          "2 tricoises de 100 mm du CA ou BA"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — Matériels nécessaires."
      },
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est exacte ?",
        "options": [
          "Soulever puis basculer le pavillon vers l'avant ou l'arrière",
          "respecter le périmétre de sécurité",
          "ZDI (zone de déploiement initial) : elle sert à regrouper les moyens",
          "Le crochet à serpent permet de capturer les serpents sans les blesser et sans danger. C'est une tige métallique de 50 cm à 1 m, coudée à son extrémité"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Matériels nécessaires."
      },
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est exacte ?",
        "options": [
          "4- Déterminer la direction de la chute",
          "Ne travailler que sous de bonnes conditions de visibilités,",
          "En cas de présence d'un hayon : le déposer au préalable",
          "débrancher la prise avant toute manipulation,"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — Matériels nécessaires."
      },
      {
        "question": "Concernant « Matériels nécessaires », quelle proposition est exacte ?",
        "options": [
          "Protéger les parties saillantes",
          "Les ascenseurs à traction à câbles sont les types d'ascenseurs que l'on rencontre le plus, notamment dans les bâtiments de bureaux",
          "Longueur (en m) X largeur (en m) X Hauteur (en m) = VOLUME (en m3)",
          "Un accident corporel implique un certain nombre d'usagers. Parmi ceux-ci, on distingue"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — Matériels nécessaires."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est exacte ?",
        "options": [
          "GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE",
          "ne pas rétablir le courant,",
          "Réglage facile de la vitesse de déplacement",
          "GERER UN PARE-BRISE COLLE / JOINTE"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — GERER UN PARE-BRISE COLLE / JOINTE."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est exacte ?",
        "options": [
          "ne jamais immerger la fiche du câble,",
          "Objectif : Savoir identifier et déposer un pare brise (collé/jointé) en toute sécurité",
          "coupe l'éclairage et laisse la machine hors service,",
          "Toutes ces manoeuvres peuvent s'effectuer, selon la configuration des lieux, sous la forme d'établissement horizontal, vertical ou rampant"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — GERER UN PARE-BRISE COLLE / JOINTE."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est exacte ?",
        "options": [
          "Coupe pare-brise ou scie sabre",
          "« Mon périmètre de sécurité est-il suffisant ? »",
          "s'équipe de son EPI complet,",
          "Objectif : Connaitre la MGO en secours routier"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — GERER UN PARE-BRISE COLLE / JOINTE."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est exacte ?",
        "options": [
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité",
          "Les agents de la Protection Civile répondent à un double objectif",
          "couper le courant au niveau de l'interrupteur général situé dans le local machinerie sauf éclairage de la cabine,",
          "Identifier le pare-brise comme feuilleté"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — GERER UN PARE-BRISE COLLE / JOINTE."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est exacte ?",
        "options": [
          "Lames; lames à bord tranchant",
          "Etablissement au moyen de la L.A (Cf. manoeuvre de la ligne d'attaque)",
          "Pointeau ou séccoise",
          "Perforer le pare-brise pour introduire la lame de scie"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — GERER UN PARE-BRISE COLLE / JOINTE."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est exacte ?",
        "options": [
          "veiller à ce que l'eau d'alimentation soit entre 6 et 8 bars",
          "Effectuer un trait de scie vers le bas de chaque côté du pare-brise",
          "Les agents de la Protection Civile répondent à un double objectif",
          "Le non respect de cette directive entraîne automatiquement la responsabilité de l'intéressé et/ou de son chef"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — GERER UN PARE-BRISE COLLE / JOINTE."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est exacte ?",
        "options": [
          "les pompes hydrauliques,",
          "Les raclettes: Elles servent à évacuer une fine couche de liquide",
          "« Mon périmètre de sécurité est-il suffisant ? »",
          "Effectuer la découpe de la partie inférieure"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — GERER UN PARE-BRISE COLLE / JOINTE."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est exacte ?",
        "options": [
          "« Comment vont réagir les 2 morceaux ? »",
          "Utiliser le lot de sauvetage si progression en hauteur",
          "Finir par la découpe de la partie supérieure",
          "Liaison personnelle (hormis F)"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — GERER UN PARE-BRISE COLLE / JOINTE."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est exacte ?",
        "options": [
          "Dégarni les montants B et C et gérer les vitrages",
          "2 raccords d'injection",
          "Déposer ensuite l'ensemble du pare-brise feuilleté",
          "se rend à la machinerie"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — GERER UN PARE-BRISE COLLE / JOINTE."
      },
      {
        "question": "Concernant « GERER UN PARE-BRISE COLLE / JOINTE », quelle proposition est exacte ?",
        "options": [
          "Action pratiquement instantanée et irréversible par paralysie suivie de mort",
          "porcin : morsures, tentatives de charge (sanglier)",
          "Astuce(s) : La scie sabre peut être un outil complémentaire pour la césarisation des montants et du pare brise",
          "Couper et déposer l'ensemble du joint"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — GERER UN PARE-BRISE COLLE / JOINTE."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est exacte ?",
        "options": [
          "d'un moteur électrique accouplé à une pompe hydraulique,",
          "GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE",
          "Objectif : Savoir Ouvrir une porte (méthode classique)",
          "Le matériel utilisé pour la destruction est un pulvérisateur à pression préalable contenant un produit insecticide dont les qualités sont les suiva..."
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est exacte ?",
        "options": [
          "Les pompes électriques",
          "Rétablissement d'éclairage public",
          "Les agents de la Protection Civile ont à leur disposition un certain nombre de matériels d'épuisement",
          "Objectif : Savoir gérer les différents vitrages et utiliser les outils adaptés en réduisant au maximum les débris et poussières"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est exacte ?",
        "options": [
          "garder toujours le contact et agir en concertation",
          "ne jamais immerger la fiche du câble,",
          "Pointeau ou séccoise",
          "Jusqu'à 30ppm de CO, il n'y a pas de danger pour la santé des personnes"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est exacte ?",
        "options": [
          "Tirer le cordon de lancement jusqu'au déclenchement du premier allumage audible",
          "La cage est indispensable pour soigner ou transporter le chien ou le chat capturé",
          "Coupe pare-brise Scie sabre Halligan tool ou outils de forcement",
          "bloquer le système de freinage"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est exacte ?",
        "options": [
          "MARCHE GENERALE DES OPERATIONS",
          "sangler les raccords des tuyaux,",
          "coupe l'éclairage et laisse la machine hors service,",
          "Identification du vitrage : repérer visuellement le marquage gravé dans le vitrage pour connaitre le type si présence d'un marquage"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE."
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
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est exacte ?",
        "options": [
          "Débuter le pliage en prenant soin de réaliser des écheveaux d'égale longueur à chaque extrémité",
          "Trempé : Se dépose après scotchage à l'aide d'un pointeau choc",
          "Diamètre de la conduite",
          "rupture d'une conduite intérieure ou sous trottoir etc"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est exacte ?",
        "options": [
          "Une fois le vitrage brisé, passez la main à l'intérieur pour déposer le vitrage entier vers l'extérieur",
          "Identification des victimes",
          "La BA nécessite 14 m en linéaire pour déposer la berce",
          "DIFFERENTS INTERVENANTS ET LEURS MISSIONS"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est exacte ?",
        "options": [
          "Insérer l'écarteur dans la partie arrière de la porte juste à côté du rail coulissant",
          "Écarter les pieds de façon à obtenir une meilleure mobilité,",
          "Feuilleté : Se découpe à l'aide du coupe pare-brise ou d'une scie sabre. Protection respiratoire type masque FFP2 obligatoire (pour sauveteurs et v...",
          "allumer les projecteurs portatifs à l'extérieur de la zone de danger"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE."
      },
      {
        "question": "Concernant « GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE », quelle proposition est exacte ?",
        "options": [
          "placer le reptile dans un sac",
          "Cas particuliers (équipe à 3)",
          "L'hydro-éjecteur est utilisé pour aspirer un volume d'eau limité et pour pomper à partir d'une nappe d'eau",
          "Plastique type polycarbonate : La casse est difficile, il faut le retirer/déboîter à l'aide d'un outil de forcement"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — GERER UN VITRAGE TREMPE / FEUILLETE / POLYCARBONATE."
      },
      {
        "question": "Concernant « LE RETRAIT DES VITRES », quelle proposition est exacte ?",
        "options": [
          "Contrôle entrées/sorties si possible",
          "Perte de charge dans les tuyaux de 45 mm : 2,3 bars pour 40 m",
          "Objectif : Savoir retrait une vitre",
          "Poteau d'incendie (PI)"
        ],
        "answer": 2,
        "explanation": "Extrait du référentiel — LE RETRAIT DES VITRES."
      },
      {
        "question": "Concernant « LE RETRAIT DES VITRES », quelle proposition est exacte ?",
        "options": [
          "Pointeau ou séccoise",
          "LES INDIPENSABLES DE LA SACOCHE DU SAPEUR DE LIAION",
          "les pompes hydrauliques,",
          "Risques Effets Moyens de protection"
        ],
        "answer": 0,
        "explanation": "Extrait du référentiel — LE RETRAIT DES VITRES."
      },
      {
        "question": "Concernant « LE RETRAIT DES VITRES », quelle proposition est exacte ?",
        "options": [
          "Écarter les pieds de façon à obtenir une meilleure mobilité,",
          "Positionner le coupe pare-brise de telle façon que",
          "ne pas utiliser dans les locaux non ventilés,",
          "2 tuyaux de 45 x 20 m pliés en écheveau dont l'un est doté d'une lance à double régulation"
        ],
        "answer": 1,
        "explanation": "Extrait du référentiel — LE RETRAIT DES VITRES."
      },
      {
        "question": "Concernant « LE RETRAIT DES VITRES », quelle proposition est exacte ?",
        "options": [
          "suivant le type de motorisation précision au niveau de la vitesse et du déplacement",
          "vérifier le bon déroulement de l'assèchement (crépine, évacuation),",
          "L'établissement de la ligne d'attaque (LA) est réalisé avec 3 tuyaux de 70 x 20 m (60 m) et 2 tuyaux de 45 x 20 m (40 m), soit une longueur de 100 m",
          "le pointeau repose dans un coin de la vitre,"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — LE RETRAIT DES VITRES."
      },
      {
        "question": "Concernant « LE RETRAIT DES VITRES », quelle proposition est exacte ?",
        "options": [
          "Les pompes hydrauliques",
          "prendre les précautions nécessaires lors du remplissage de carburant,",
          "Toujours se poser les questions suivantes : « Suis-je en sécurité là où je me trouve ? »",
          "Les 2 parties jaunes sur la carrosserie. Cela permet de ne pas passer la main à travers la vitre"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — LE RETRAIT DES VITRES."
      },
      {
        "question": "Concernant « LE RETRAIT DES VITRES », quelle proposition est exacte ?",
        "options": [
          "ALIMENTATION ET PRESSION A LA POMPE",
          "Coupe pare-brise ou scie sabre",
          "bloquer le système de freinage",
          "Une fois brisée, retirer le restant de la vitre. Pour vous aider, il est possible de créer une poignée avec le ruban adhésif utilisé"
        ],
        "answer": 3,
        "explanation": "Extrait du référentiel — LE RETRAIT DES VITRES."
      }
    ]
  },
];
