import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useQuestion = (pregunta) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [opacity, setOpacity] = useState("opacity-0");
  const [clicked, setClicked] = useState(false);
  const [time, setTime] = useState(pregunta.time);
  const [timeUp, setTimeUp] = useState(false);
  const currentQuestionIndex = searchParams.get("question") - 1;
  
  const level = searchParams.get("level");

  const nextQuestion = () => {
    if (pregunta !== questions[questions.length - 1]) {
      setSearchParams({ level: level, question: currentQuestionIndex + 2 });
    } else {
      setSearchParams({ level: level, question: "finished" });
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
  };




  return {
    nextQuestion,
    updateClicked,
    updateTimeUp,
    reset,
    clicked,
    time,
    timeUp,
    opacity,
    setTime,
  };
};
