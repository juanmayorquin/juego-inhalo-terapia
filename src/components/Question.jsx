import { Card } from "./Card";
import { useState } from "react";
import { Timer } from "./Timer";
import { GameOver } from "./GameOver";
import { IconArrowRight } from "@tabler/icons-react";
import { questions } from "../data/questions";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
export function Question({
  pregunta,
  updateCorrectAnswers,
  clearCorrectAnswers,
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [opacity, setOpacity] = useState("opacity-0");
  const [clicked, setClicked] = useState(false);
  const [time, setTime] = useState(pregunta.time);
  const [timeUp, setTimeUp] = useState(false);
  const currentQuestionIndex = searchParams.get("question") - 1;
  const nextQuestion = () => {
    if (pregunta !== questions[questions.length - 1]) {
      setSearchParams({ level: 3, question: currentQuestionIndex + 2 });
    } else {
      setSearchParams({ level: 3, question: "finished" });
    }
    setClicked(false);
    setTime(pregunta.time);
    setOpacity("opacity-0");
  };

  const updateClicked = () => {
    setClicked(true);
    setOpacity("opacity-100");
  };

  const updateTimeUp = () => {
    setTimeUp(true);
  };
  const reset = () => {
    setSearchParams({ level: 3, question: 1 });
    setClicked(false);
    setTimeUp(false);
    setTime(pregunta.time);
    clearCorrectAnswers();
  };
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
        <Timer
          time={time}
          setTime={setTime}
          nextQuestion={nextQuestion}
          updateTimeUp={updateTimeUp}
        />
      )}

      {timeUp && <GameOver reset={reset} />}
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
        {pregunta !== questions[questions.length - 1] ? (
          <button
            onClick={clicked ? nextQuestion : null}
            className={`bg-turquoise flex items-center justify-center w-[90%] p-3 rounded-md md:absolute md:w-auto md:bottom-10 md:right-10 transition-all hover:cursor-pointer hover:scale-105 hover:bg-turquoise-600 ${opacity}`}
          >
            <IconArrowRight
              className="inline-block w-full ml-0"
              size={30}
              color="white"
            />
          </button>
        ) : (
          <button
            onClick={clicked ? nextQuestion : null}
            className={`bg-turquoise text-white flex items-center justify-center w-[90%] p-3 rounded-md md:absolute md:w-auto md:bottom-10 md:right-10 font-medium transition-all hover:cursor-pointer hover:scale-105 hover:bg-turquoise-600 ${opacity}`}
          >
            Finalizar
          </button>
        )}
      </div>
    </motion.section>
  );
}
