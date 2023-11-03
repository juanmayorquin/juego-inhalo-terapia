import { motion, AnimatePresence } from "framer-motion";
export const Dustbin = ({ currentItem, onAssign, onDelete,img }) => {
  return (
    <div className="rounded-lg md:flex-shrink flex-shrink-0 p-8 bg-white flex flex-col items-center justify-center w-full md:min-h-[30rem] z-10 drop-shadow-2xl md:hover:scale-[1.015] transition-all">
      <div>image</div>
      <div className="w-full">
        <div
          onClick={onAssign}
          className="w-full h-9 text-white rounded-md bg-gray-500 relative  mx-auto flex items-center justify-center"
          data-testid="dustbin"
        >
          <AnimatePresence>
            {currentItem && (
              <>
                <motion.p
                  layoutId={currentItem}
                  className=" font-medium z-40 flex rounded-md items-center justify-center bg-green-500 w-full h-full text-lg "
                >
                  {currentItem}
                  <button onClick={onDelete} className="absolute right-3 z-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-x"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M18 6l-12 12"></path>
                      <path d="M6 6l12 12"></path>
                    </svg>
                  </button>
                </motion.p>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
