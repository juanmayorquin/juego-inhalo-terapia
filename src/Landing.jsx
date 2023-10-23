export function Landing() {
  return (
    <header className="h-screen snap-start">
      <div className="h-full flex flex-col gap-20 justify-center items-center text-center">
        <h1 className="w-[90%] text-3xl text-white font-medium">
          Aprendamos jugando sobre{" "}
          <span className="font-semibold text-lime-400">Inhalo Terapia</span> y{" "}
          <span className="font-semibold text-lime-400">
            Crisis Respiratorias
          </span>
        </h1>
        <a
          href=""
          className="w-[80%] text-lg py-4 rounded-md bg-lime-400 hover:bg-lime-300 transition-all"
        >
          Empezar
        </a>
      </div>
    </header>
  );
}
