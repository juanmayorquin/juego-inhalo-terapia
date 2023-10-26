import { IconChevronRight } from '@tabler/icons-react';
export function Landing() {
  const handleScroll = () => {
    const selector = document.getElementById("level1")

    if (selector) {
      selector.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <header className="h-screen snap-start">
      <div className="h-full flex flex-col gap-20 justify-center items-center text-center max-w-[50rem] m-auto">
        <h1 className="w-[90%] text-3xl text-white font-medium">
          Aprendamos jugando sobre{" "}
          <span className="font-semibold text-lime-400">Inhalo Terapia</span> y{" "}
          <span className="font-semibold text-lime-400">
            Crisis Respiratorias
          </span>
        </h1>
        <a onClick={handleScroll} className="w-[80%] md:w-auto md:px-10 text-lg py-4 rounded-md font-medium bg-lime-400 hover:bg-lime-300 hover:cursor-pointer hover:scale-105 transition-all">
          Empezar
          <IconChevronRight className="inline-block ml-0" />
        </a>
      </div>
    </header>
  );
}
