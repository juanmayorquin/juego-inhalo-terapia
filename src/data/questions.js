export const questions = [
  {
    dustbins: [
      { name: "pipa",img:"", currentItem: null },
      { name: "Inhalocamara",img:"", currentItem: null },
      { name: "Cartucho",img:"", currentItem: null },
    ],
    items: ["Cartucho", "Inhalocamara", "pipa"],
  },
  [
    {
      question: "¿Cuál es el primer paso para usar un inhalador?",
      choices: [
        {
          img: "./img/level2/1.png",
          text: "No es necesario retirar la tapa todavía",
        },
        {
          img: "./img/level2/1.png",
          text: "Retira la tapa y verifica que el orificio del aerosol esté limpio",
          isCorrect: true,
        },
      ],
    },
    {
      question: "¿Cuál es el segundo paso para usar un inhalador?",
      choices: [
        {
          img: "./img/level2/1.png",
          text: "Agítalo entre 10 y 30 segundos",
          isCorrect: true,
        },
        {
          img: "./img/level2/1.png",
          text: "No lo agites, altera el producto",
        },
      ],
    },
    {
      question: "¿Cuál es el tercer paso para usar un inhalador?",
      choices: [
        {
          img: "./img/level2/1.png",
          text: "Úsalo directamente en la boca",
        },
        {
          img: "./img/level2/1.png",
          text: "Realiza una o dos descargas del contenido al aire antes de usarlo",
          isCorrect: true,
        },
      ],
    },
  ],
  [
    {
      question: "¿Qué debes hacer si estás teniendo un ataque?",
      choices: [
        {
          img: "./img/level2/1.png",
          text: "Recostarme mirando al techo",
        },
        {
          img: "./img/level2/1.png",
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
          img: "./img/level2/1.png",
          text: "Tomar una inhalación de un analgésico o un inhalador de rescate de 30 a 60 segundos con un máximo de 10 inhalaciones",
          isCorrect: true,
        },
        {
          img: "./img/level2/1.png",
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
          img: "./img/level2/1.png",
          text: "Buscar atención médica de emergencia",
          isCorrect: true,
        },
        {
          img: "./img/level2/1.png",
          text: "Seguir usando el inhalador hasta encontrar mejoría",
        },
      ],
      time: 10,
    },
  ],
];
