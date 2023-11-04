import { IconChevronRight } from "@tabler/icons-react";
import { useSearchParams } from "react-router-dom";

export function Landing() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleStart = () => {
    setSearchParams({ level: 1 });
    const section = document.getElementById("level1");
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="h-screen snap-start">
      <div className="h-full flex flex-col gap-10 justify-center items-center text-center max-w-[50rem] m-auto relative">
        <div className="flex items-center justify-center">
          <img
            className="object-contain w-28"
            src="./img/landing/pulmones.png"
            alt="Pulmones"
          />
        </div>
        <h1 className="w-[90%] text-3xl text-black">
          Aprendamos jugando sobre{" "}
          <span className="font-semibold text-indigo-500">Inhalo Terapia</span>{" "}
          y{" "}
          <span className="font-semibold text-plum_(web)">
            Crisis Respiratorias
          </span>
        </h1>
        <button
          onClick={handleStart}
          className="w-[80%] md:w-auto md:px-10 text-lg py-4 rounded-md font-medium  bg-turquoise text-white  hover:cursor-pointer hover:scale-105 transition-all"
        >
          Empezar
          <IconChevronRight className="inline-block ml-0" />
        </button>
        <div className="font-medium w-[90%] flex flex-col gap-3">
          <div className="flex items-center justify-center">
            <img
              className="object-contain w-28"
              src="./img/landing/logo.png"
              alt="Pulmones"
            />
          </div>
          <div>
            <h3>
              Práctica profesional III: Infancia y adolescencia
            </h3>
            <p>Programa de Fisioterapia</p>
            <p>2023B</p>
          </div>
        </div>
      </div>
    </header>
  );
}
