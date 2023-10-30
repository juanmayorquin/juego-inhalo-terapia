export function NextButton({ onClick, opacity, children }) {
    return (
      <button
        onClick={onClick}
        className={`bg-turquoise flex items-center justify-center w-[90%] p-3 rounded-md md:absolute md:w-auto md:bottom-10 md:right-10 transition-all hover:cursor-pointer hover:scale-105 text-white font-medium hover:bg-turquoise-600 ${opacity}`}
      >
        {children}
      </button>
    );
  }