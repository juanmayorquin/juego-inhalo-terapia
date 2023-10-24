export const questions = [
    {
        question: "¿Cuál es el primer paso para usar un inhalador?",
        choices: [
            {
                img: "./img/level2/1.png",
                text: "No es necesario retirar la tapa todavía",
            },
            {
                img: "./img/level2/1.png",
                text: "Retira la tapa y verifica que el orificio del aerosol esté limpio"
            }
        ],
        correctAnswer: "Retira la tapa y verifica que el orificio del aerosol esté limpio"
    },
    {
        question: "¿Cuál es el segundo paso para usar un inhalador?",
        choices: [
            {
                img: "./img/level2/1.png",
                text: "Agítalo entre 10 y 30 segundos",
            },
            {
                img: "./img/level2/1.png",
                text: "No lo agites, altera el producto"
            }
        ],
        correctAnswer: "Retira la tapa y verifica que el orificio del aerosol esté limpio"
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
                text: "Realiza una o dos descargas del contenido al aire antes de usarlo"
            }
        ],
        correctAnswer: "Retira la tapa y verifica que el orificio del aerosol esté limpio"
    }    
]

console.log(questions[0].choices[0].text)