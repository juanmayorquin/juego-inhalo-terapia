import { questions } from "../data/questions";
import Card from "./Card";

export function Question({ pregunta }) {
  return (
    <section className="h-screen mx-auto flex flex-col items-center justify-center snap-start">
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 h-2/3 md:max-w-[90%]">
        <Card imageSrc={pregunta.img1} text={pregunta.text1} />
        <Card imageSrc={pregunta.img2} text={pregunta.text2} />
      </div>
    </section>
  );
}
