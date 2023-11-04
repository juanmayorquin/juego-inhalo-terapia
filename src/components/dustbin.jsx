import { motion, AnimatePresence } from "framer-motion";
export const Dustbin = ({ currentItem, onAssign, onDelete, img }) => {
  return (
    <div className="snap-center rounded-lg md:flex-shrink flex-shrink-0 p-5 bg-white flex flex-col items-center justify-center w-2/3 h-[50vh] md:min-h-[30rem] z-10 transition-all">
      <img className="mb-5" src={img} alt="" />
      <div className="w-full">
        <div
          onClick={onAssign}
          className="w-full h-16 text-white rounded-md bg-gray-300 relative flex items-center justify-center"
          data-testid="dustbin"
        >
          <AnimatePresence>
            {currentItem && (
              <>
                <motion.p
                  layoutId={currentItem}
                  className=" font-medium z-40 flex rounded-md items-center justify-center p-3 bg-turquoise w-full h-full"
                >
                  <div>
                  {currentItem}
                  </div>
                  <button onClick={onDelete} className="z-50">
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
