import { Card } from "./Card";
import { Timer } from "./Timer";
import { GameOver } from "./GameOver";
import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useQuestion } from "../hooks/useQuestion";
import { NextButton } from "./NextButton";


export function Question({
  pregunta,
  updateCorrectAnswers,
  clearCorrectAnswers,
}) {
  

  const {
    nextQuestion,
    updateClicked,
    updateTimeUp,
    reset,
    clicked,
    time,
    timeUp,
    opacity,
    setTime,
  } = useQuestion(pregunta);



  return (
    <motion.section
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        x: { duration: 0.3 },
        opacity: { duration: 0.6 },
        type: "spring",
      }}
      className={` relative h-screen mx-auto flex flex-col items-center justify-center snap-start`}
    >
      {time && (
        <Timer time={time} setTime={setTime} updateTimeUp={updateTimeUp} />
      )}

      {timeUp && (
        <GameOver clearCorrectAnswers={clearCorrectAnswers} reset={reset} />
      )}
      <h2 className="text-xl text-center mb-5 w-[90%]">{pregunta.question}</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 h-2/3 md:max-w-[90%]">
        {pregunta.choices.map((choice, index) => (
          <Card
            key={index}
            clicked={clicked}
            updateClicked={updateClicked}
            choice={choice}
            isCorrect={choice.isCorrect}
            updateCorrectAnswers={updateCorrectAnswers}
          />
        ))}

        <NextButton onClick={clicked ? nextQuestion : null} opacity={opacity}>
          {pregunta !== questions[questions.length - 1] ? (
            <IconArrowRight
              className="inline-block w-full ml-0"
              size={30}
              color="white"
            />
          ) : (
            "Finalizar"
          )}
        </NextButton>
      </div>
    </motion.section>
  );
}
