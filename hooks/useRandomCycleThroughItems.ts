import { useState, useEffect, useRef } from "react";

const getRandomItem = <Item>(arr: Item[]): Item =>
  arr[Math.floor(Math.random() * arr.length)];
function useRandomCycleThroughItems<Item>(items: Item[], milliseconds: number) {
  const [randomItem, setRandomItem] = useState<Item | undefined>();
  const timeoutRef = useRef<ReturnType<typeof window.setInterval>>();
  useEffect(() => {
    setRandomItem(getRandomItem(items));
    timeoutRef.current = setInterval(() => {
      setRandomItem((currentRandomItem) => {
        let newRandomItem = getRandomItem(items);
        while (items.length > 1 && currentRandomItem === newRandomItem) {
          newRandomItem = getRandomItem(items);
        }

        return newRandomItem;
      });
    }, milliseconds);

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [...items, milliseconds]);

  return randomItem;
}

export default useRandomCycleThroughItems;
