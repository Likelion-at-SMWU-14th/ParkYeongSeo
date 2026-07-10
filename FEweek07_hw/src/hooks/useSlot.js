import { useMemo, useState } from "react";
import lions from "../data/lions";

const useSlot = () => {
  const [excludedLion, setExcludedLion] = useState("이연재");

  const [winner, setWinner] = useState(null);

  const candidates = useMemo(() => {
    return lions.filter((lion) => lion !== excludedLion);
  }, [excludedLion]);

  const drawWinner = () => {
    if (candidates.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * candidates.length);
    const selectedWinner = candidates[randomIndex];

    setWinner(selectedWinner);

    return selectedWinner;
  };

  const prepareNextRound = () => {
    if (!winner) {
      return;
    }

    setExcludedLion(winner);
    setWinner(null);
  };

  return {
    lions,
    candidates,
    excludedLion,
    winner,
    drawWinner,
    prepareNextRound,
  };
};

export default useSlot;