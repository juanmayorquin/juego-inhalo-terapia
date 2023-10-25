import { useState } from "react";

export function Card({
  choice,
  isCorrect,
  updateCorrectAnswers,
  clicked,
  updateClicked,
}) {
  const [bgColor, setBgColor] = useState("bg-white");
  const { img, text } = choice;

  const checkIfCorrect = () => {
    if (!clicked) {
      if (isCorrect) {
        setBgColor(
          "bg-green-300 scale-[1.025] animate-pulse animate-once animate-duration-150"
        );
        updateCorrectAnswers(choice);
        updateClicked();
      } else {
        setBgColor(
          "bg-red-300 scale-[0.975] animate-shake animate-duration-150"
        );
        updateClicked();
      }
    }
  };

  return (
    <div
      className={`rounded-lg p-8 flex flex-col items-center justify-center w-[85%] min-h-[12rem] md:min-h-[30rem] drop-shadow-2xl md:hover:scale-[1.015] transition-all ${bgColor}`}
      onClick={checkIfCorrect}
    >
      <img src={img} alt="card image" className="w-1/2" />
      <p className="text-center text-lg mt-4">{text}</p>
    </div>
  );
}
