import { Card } from "./Card";
import { useState } from "react";
import { useSwiper } from "swiper/react";

import { IconArrowRight } from "@tabler/icons-react";
import { questions } from "../data/questions";

export function Question({ pregunta, updateCorrectAnswers }) {
  const [clicked, setClicked] = useState(false);
  const updateClicked = () => {
    setClicked(true);
  };
  const swiper = useSwiper();

  return (
    <section className="relative h-screen mx-auto flex flex-col items-center justify-center snap-start ">
      <h2 className="text-white text-xl text-center pb-10 w-[90%]">
        {pregunta.question}
      </h2>
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
        {clicked && (
          <>
            {pregunta !== questions[questions.length - 1] ? (
              <button
                onClick={() => swiper.slideNext()}
                className="bg-lime-400 flex items-center justify-center w-[90%] p-3 rounded-md md:absolute md:w-auto md:bottom-10 md:right-10 transition-all hover:cursor-pointer hover:scale-105 hover:bg-lime-300 opacity-100"
              >
                <IconArrowRight
                  className="inline-block w-full ml-0"
                  size={30}
                />
              </button>
            ) : (
              <button 
              onClick={() => swiper.slideNext()}
              className="bg-lime-400 flex items-center justify-center w-[90%] p-3 rounded-md md:absolute md:w-auto md:bottom-10 md:right-10 font-medium transition-all hover:cursor-pointer hover:scale-105 hover:bg-lime-300">
                Finalizar
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
}
