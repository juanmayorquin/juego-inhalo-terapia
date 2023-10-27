import { Swiper, SwiperSlide } from "swiper/react";
import { Question } from "./Question";
import { questions } from "../data/questions";
import "swiper/css/pagination";
import Confetti from 'react-confetti'
import { useState } from "react";

export const SwiperCarousel = () => {
  const handleScroll = () => {
    const selector = document.getElementById("level3")

    if (selector) {
      selector.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const [correctAnswers, setCorrectAnswers] = useState([]);
  const updateCorrectAnswers = (correctAnswer) => {
    setCorrectAnswers([...correctAnswers, correctAnswer]);
  };
  return (
    <Swiper
      id="slider"
      className="snap-start"
      spaceBetween={0}
      slidesPerView={1}
      mousewheel={false}
      direction="horizontal"
      pagination={{
        clickable: false,
      }}
      allowTouchMove={false}
    >
      {questions.map((pregunta, index) => (
        <SwiperSlide key={index}>
          <Question
            updateCorrectAnswers={updateCorrectAnswers}
            pregunta={pregunta}
          />
        </SwiperSlide>
      ))}
      <SwiperSlide>
        <div className="flex flex-col gap-3 justify-center items-center h-[90vh] my-auto py-10">
          {correctAnswers.length >= 1 && <Confetti />}
          <h2 className="text-xl text-center w-[90%]">
            <br /> ¡Has acertado <span className="text-turquoise font-semibold text-2xl">{correctAnswers.length}</span> de <span className="text-turquoise font-semibold text-2xl">{questions.length}</span> preguntas!
          </h2>
          {correctAnswers.length != 0 && (<>
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:w-[90%]">
              {correctAnswers.map((answer, index) => (
                <div
                  key={index}
                  className={`rounded-lg p-4 flex flex-col items-center justify-center w-[85%]  md:min-h-[30rem] drop-shadow-2xl transition-all bg-green-300`}
                >
                  <img src={answer.img} alt="card image" className="w-1/4" />
                  <p className="text-center text-sm md:text-xl mt-4">{answer.text}</p>
                </div>
              ))}
            </div>
          </>)}
          <button
            onClick={handleScroll}
            className={`bg-turquoise text-white flex items-center justify-center w-[85%] p-3 rounded-md md:absolute md:w-auto md:bottom-10 md:right-10 font-medium transition-all`}>
            ¡Siguiente nivel!
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
