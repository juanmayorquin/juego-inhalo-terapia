import { Swiper, SwiperSlide } from "swiper/react";
import { Question } from "./Question";
import { questions } from "../data/questions";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useState } from "react";

export const SwiperCarousel = () => {
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
      modules={[Pagination]}
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
        {correctAnswers.map((answer, index) => (
          <div
            key={index}
            className={`rounded-lg p-8 flex flex-col items-center justify-center w-[85%] min-h-[12rem] md:min-h-[30rem] drop-shadow-2xl md:hover:scale-[1.015] transition-all bg-green-300`}
          >
            <img src={answer.img} alt="card image" className="w-1/2" />
            <p className="text-center text-lg mt-4">{answer.text}</p>
          </div>
        ))}
      </SwiperSlide>
    </Swiper>
  );
};
