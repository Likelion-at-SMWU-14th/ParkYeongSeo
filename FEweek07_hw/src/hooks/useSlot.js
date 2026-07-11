import { useMemo, useState } from "react";
import lions from "../data/lions";

const STORAGE_KEY = "excludedLion";

const getInitialExcludedLion = () => {
  const savedLion = localStorage.getItem(STORAGE_KEY);

  if (savedLion && lions.includes(savedLion)) {
    return savedLion;
  }

  return "이연재";
};

const useSlot = () => {
  const [excludedLion, setExcludedLion] = useState(
    getInitialExcludedLion,
  );

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
    
    localStorage.setItem(STORAGE_KEY, winner);

    setExcludedLion(winner);
    setWinner(null);
  };

  return {
    candidates,
    excludedLion,
    winner,
    drawWinner,
    prepareNextRound,
  };
};

export default useSlot;