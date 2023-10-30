export function GameOver() {
  return (
    <>
    <div className="z-10 absolute h-screen w-full bg-black opacity-40"></div>
      <div className="z-20 absolute h-screen w-full flex flex-col items-center justify-center">
        <div className="rounded-lg p-8 flex flex-col items-center justify-center w-[85%] md:min-h-[30rem] drop-shadow-2xl md:hover:scale-[1.015] transition-all bg-white">
          <h2>¡El tiempo se acabó!</h2>
          <button className="bg-turquoise">Volver a intentar</button>
        </div>
      </div>
    </>
  );
}
