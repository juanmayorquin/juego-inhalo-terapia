import { motion, AnimatePresence } from "framer-motion";
export const Item = ({ name, selectItem, selectedItem }) => {
  return (
    <AnimatePresence>
      {name !== null ? (
        <motion.p
          layoutId={name}
          className={`w-[50%] z-50 flex-shrink-0 h-9 text-white  rounded-md  relative  flex items-center justify-center bg-green-500 ${
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
