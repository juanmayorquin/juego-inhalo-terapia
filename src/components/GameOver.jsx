export function GameOver({ reset, clearCorrectAnswers }) {
  return (
    <>
      <div className="z-10 absolute h-screen w-full bg-black opacity-40"></div>
      <div className="z-20 absolute h-screen w-full flex flex-col items-center justify-center">
        <div className="rounded-lg p-8 flex flex-col gap-5 items-center justify-center drop-shadow-2xl transition-all bg-white">
          <h2>¡El tiempo se acabó!</h2>
          <button
            onClick={() => {
              reset();
              clearCorrectAnswers();
            }}
            className="bg-turquoise p-3 rounded-md text-white font-medium md:hover:scale-[1.05] transition-all"
          >
            Volver a intentar
          </button>
        </div>
      </div>
    </>
  );
}
