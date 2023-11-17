export const questions = [
  {
    dustbins: [
      { name: "Inhalocámara", img:"./img/level1/inhalocamara.png", currentItem: null },
      { name: "Cartucho", img:"./img/level1/cartucho.png", currentItem: null },
      { name: "Dispensador de aerosol", img:"./img/level1/dispensador.png", currentItem: null },
      { name: "Contenedor externo", img:"./img/level1/contenedor.png", currentItem: null },
      { name: "Boquilla", img:"./img/level1/boquilla.png", currentItem: null },
      { name: "Tapa de protección", img:"./img/level1/tapa.png", currentItem: null },
    ],
    items: ["Tapa de protección", "Boquilla", "Contenedor externo", "Inhalocámara", "Dispensador de aerosol", "Cartucho"]
  },
  [
    {
      question: "¿Cuál es el primer paso para usar un inhalador?",
      choices: [
        {
          img: "./img/level2/q1_1.png",
          text: "No es necesario retirar la tapa todavía",
        },
        {
          img: "./img/level2/q1_2.png",
          text: "Retira la tapa y verifica que el orificio del aerosol esté limpio",
          isCorrect: true,
        },
      ],
    },
    {
      question: "¿Cuál es el segundo paso para usar un inhalador?",
      choices: [
        {
          img: "./img/level2/q2_1.png",
          text: "Agítalo entre 10 y 30 segundos",
          isCorrect: true,
        },
        {
          img: "./img/level2/q2_2.png",
          text: "No lo agites, altera el producto",
        },
      ],
    },
    {
      question: "¿Cuál es el tercer paso para usar un inhalador?",
      choices: [
        {
          img: "./img/level2/q3_1.png",
          text: "Úsalo directamente en la boca",
          isCorrect: true,
        },
        {
          img: "./img/level2/q3_2.png",
          text: "Mete el inhalador en agua fría",
        },
      ],
    },
  ],
  [
    {
      question: "¿Qué debes hacer si estás teniendo un ataque?",
      choices: [
        {
          img: "./img/level3/q1_1.png",
          text: "Recostarme mirando al techo",
        },
        {
          img: "./img/level3/q1_2.png",
          text: "Sentarme erguido y trata de permanecer en calma",
          isCorrect: true,
        },
      ],
      time: 10,
    },
    {
      question:
        "¿Cuál de las siguientes acciones pueden ayudar a controlar un ataque?",
      choices: [
        {
          img: "./img/level3/q2_1.png",
          text: "Tomar una inhalación de un inhalador de rescate de 30 a 60 segundos con un máximo de 10 inhalaciones",
          isCorrect: true,
        },
        {
          img: "./img/level3/q2_2.png",
          text: "Inhalar y exhalar lo más profundo posible",
        },
      ],
      time: 10,
    },
    {
      question:
        "Qué debes hacer si los síntomas no mejoran o empeoran después de 10 inhalaciones?",
      choices: [
        {
          img: "./img/level3/q3_1.png",
          text: "Buscar atención médica de emergencia",
          isCorrect: true,
        },
        {
          img: "./img/level3/q3_2.png",
          text: "Seguir usando el inhalador hasta encontrar mejoría",
        },
      ],
      time: 10,
    },
  ],
];
