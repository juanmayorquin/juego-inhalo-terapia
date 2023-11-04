import { motion, AnimatePresence } from "framer-motion";
export const Item = ({ name, selectItem, selectedItem }) => {
  return (
    <AnimatePresence>
      {name !== null ? (
        <motion.p
          layoutId={name}
          className={`z-50 flex-shrink-0 text-white px-2 py-1 rounded-md  relative  flex items-center justify-center bg-turquoise ${
            selectedItem === name &&
            `outline outline-2 outline-offset-2 outline-indigo-500 `
          }`}
          onClick={() => selectItem(name)}
        >
          {name}
        </motion.p>
      ) : null}
    </AnimatePresence>
  );
};
