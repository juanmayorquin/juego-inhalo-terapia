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
      <div className="h-full flex flex-col gap-20 justify-center items-center text-center max-w-[50rem] m-auto relative">
        <div className="grid grid-cols-2 gap-5 absolute top-16 w-1/2 md:w-1/3">
          <img
            className="object-contain w-full"
            src="./img/landing/pulmones.png"
            alt="Pulmones"
          />
          <img
            className="object-contain w-full"
            src="./img/landing/logo.png"
            alt="Logo"
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
      </div>
    </header>
  );
}
