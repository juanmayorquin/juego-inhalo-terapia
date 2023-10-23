import { Swiper, SwiperSlide } from "swiper/react";
import { Question } from "./Question";
import { questions } from "../data/questions";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const SwiperCarousel = () => {
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
    >
      {questions.map((pregunta, index) => (
        <SwiperSlide key={index}>
          <Question pregunta={pregunta} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
