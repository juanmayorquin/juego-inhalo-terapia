import { useEffect, useCallback, useState } from "react";
import { Dustbin } from "./components/dustbin";
import { Item } from "./components/item";
import { questions } from "./data/questions";
import { useSearchParams } from "react-router-dom";

import update from "immutability-helper";
import Confetti from "react-confetti";

export function Level1() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [dustbins, setDustbins] = useState(questions[0].dustbins);
  const [itemsInDustbins, setItemsInDustbins] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemsOutDustbins, setItemsOutDustbins] = useState(questions[0].items);
  const [correctDustbins, setCorrectDustbins] = useState([]);

  const isInDustbin = useCallback(
    (item) => {
      return itemsInDustbins.includes(item);
    },
    [itemsInDustbins]
  );

  const selectItem = (item) => {
    setSelectedItem(item);
  };
  const handleAssignItem = useCallback(
    (dustbinIndex, item) => {
      const itemIsAlreadyDropped = isInDustbin(item);
      const dubstinHasItem = dustbins[dustbinIndex].currentItem;
      if (item === null) return;
      if (!itemIsAlreadyDropped && !dubstinHasItem) {
        setSelectedItem(null);
        setItemsInDustbins([...itemsInDustbins, item]);
        const newDustbins = update(dustbins, {
          [dustbinIndex]: {
            currentItem: {
              $set: item,
            },
          },
        });
        const newItemsOutDustbins = update(itemsOutDustbins, {
          [itemsOutDustbins.indexOf(item)]: {
            $set: null,
          },
        });
        setItemsOutDustbins(newItemsOutDustbins);
        setDustbins(newDustbins);
      }
    },
    [itemsInDustbins, dustbins, isInDustbin, itemsOutDustbins]
  );

  const handleDelete = (dustbinIndex) => {
    setDustbins(
      update(dustbins, {
        [dustbinIndex]: {
          currentItem: {
            $set: null,
          },
        },
      })
    );

    const dustbin = dustbins[dustbinIndex];
    const itemsInDustbinsWithoutDeleted = itemsInDustbins.filter(
      (itemName) => itemName !== dustbin.currentItem
    );
    setItemsOutDustbins([...itemsOutDustbins, dustbin.currentItem]);
    setItemsInDustbins(itemsInDustbinsWithoutDeleted);
  };

  const handleVerify = () => {
    const correctDustbins = dustbins.filter(
      (dustbin) => dustbin.currentItem === dustbin.name
    );
    setCorrectDustbins(correctDustbins);
    setSearchParams({ level: 1, finished: true });
    const correctAnswersLevel1 = document.getElementById(
      "correctAnswersLevel1"
    );
    if (correctAnswersLevel1) {
      correctAnswersLevel1.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const correctAnswersLevel1 = document.getElementById(
      "correctAnswersLevel1"
    );
    if (correctAnswersLevel1) {
      correctAnswersLevel1.scrollIntoView({ behavior: "smooth" });
    } else {
      const section = document.getElementById("level1");

      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchParams]);

  const levelFinished = searchParams.get("finished");

  return (
    <>
      <section id="level1" className="h-screen snap-start flex flex-col justify-center">
        <div className="">
          <div className="flex flex-col items-center justify-center mx-4 font-medium text-center text-xl">
            <h2 className="mb-4">Arrastra el nombre a cada figura!</h2>
          </div>
          <div className="flex flex-shrink-0 p-5 gap-5 snap-x snap-mandatory overflow-x-auto">
            {dustbins.map(({ currentItem, name, img }, index) => (
              <Dustbin
                key={index}
                name={name}
                img={img}
                currentItem={currentItem}
                onDelete={() => handleDelete(index)}
                onAssign={() => handleAssignItem(index, selectedItem)}
              />
            ))}
          </div>
          {questions[0].items.length === itemsInDustbins.length && (
            <div className="flex justify-center">
              <button className="bg-turquoise px-5 py-3 rounded-md font-medium text-white" onClick={handleVerify}>Verificar</button>
            </div>
          )}
          <div className="w-full flex overflow-x-auto gap-2 p-5">
            {itemsOutDustbins.map((name, index) => (
              <Item
                name={name}
                selectedItem={selectedItem}
                selectItem={selectItem}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>

      {levelFinished && questions[0].items.length === itemsInDustbins.length && (
        <section
          id="correctAnswersLevel1"
          className="h-screen snap-start flex flex-col justify-center items-center gap-5"
        >
          {correctDustbins.length >= 1 && <Confetti/>}
          <h2 className="font-medium text-lg pt-5">Tienes <span className="text-turquoise text-xl">{correctDustbins.length}</span> respuestas correctas!</h2>
          <div className="overflow-y-auto flex flex-col gap-5 items-center">
            {correctDustbins.map((dustbin, index) => (
              <div
                key={index}
                className="rounded-lg md:flex-shrink flex-shrink-0 p-5 w-[80%] bg-white flex flex-col items-center justify-center z-10 transition-all"
              >
                <img className="w-1/2 mb-5" src={dustbin.img} alt="" />
                <div className="w-full">
                  <div
                    className="w-full h-9 text-white rounded-md bg-gray-500 relative  mx-auto flex items-center justify-center"
                    data-testid="dustbin"
                  >
                    <p className=" font-medium z-40 flex rounded-md items-center justify-center bg-green-300 w-full h-full text-lg ">
                      {dustbin.currentItem}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="bg-turquoise px-5 py-3 mb-20 rounded-md font-medium text-white" onClick={() => setSearchParams({ level: 2, question: 1 })}>
            Siguiente nivel
          </button>
        </section>
      )}
    </>
  );
}
