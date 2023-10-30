import { useSearchParams } from "react-router-dom";
import { Question } from "./components/Question";
import { useEffect, useState } from "react";
import { questions } from "./data/questions";
import Confetti from "react-confetti";
import { motion, AnimatePresence } from "framer-motion";

export function Level3() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentQuestion = searchParams.get("question");
  const [correctAnswers, setCorrectAnswers] = useState([]);
  
  const updateCorrectAnswers = (correctAnswer) => {
    setCorrectAnswers([...correctAnswers, correctAnswer]);
  };
   const clearCorrectAnswers = () => {
    setCorrectAnswers([]);
  };
  useEffect(() => {
    const section = document.getElementById("level3");
    section.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section id="level3">
      {questions.map((question, index) => (
        <AnimatePresence key={question.question}>
          {index === currentQuestion - 1 && <Question clearCorrectAnswers={clearCorrectAnswers} updateCorrectAnswers={updateCorrectAnswers} pregunta={question} />}
        </AnimatePresence>
      ))}
      <AnimatePresence>
        {currentQuestion === "finished" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3 justify-center relative items-center h-[90vh] my-auto py-10 snap-start"
          >
            {correctAnswers.length >= 1 && (
              <Confetti recycle={false} numberOfPieces={400} />
            )}
            <h2 className="text-xl text-center w-[90%]">
              <br /> ¡Has acertado{" "}
              <span className="text-turquoise font-semibold text-2xl">
                {correctAnswers.length}
              </span>{" "}
              de{" "}
              <span className="text-turquoise font-semibold text-2xl">
                {questions.length}
              </span>{" "}
              preguntas!
            </h2>
            {correctAnswers.length != 0 && (
              <>
                <div className="flex flex-col md:flex-row  justify-center items-center gap-2 md:w-[90%] ">
                  {correctAnswers.map((answer, index) => (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, type: "spring" }}
                      key={index}
                      className={`rounded-lg p-4 flex flex-col items-center justify-center w-[85%]  md:min-h-[30rem] drop-shadow-2xl  bg-green-300`}
                    >
                      <img
                        src={answer.img}
                        alt="card image"
                        className="w-1/4"
                      />
                      <p className="text-center text-sm md:text-xl mt-4">
                        {answer.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
            <button
              className={`bg-turquoise text-white flex items-center justify-center w-[85%] p-3 rounded-md md:absolute md:w-auto md:bottom-10 md:right-10 font-medium transition-all`}
            >
              ¡Siguiente nivel!
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
