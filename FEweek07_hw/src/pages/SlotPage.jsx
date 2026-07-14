import { useEffect, useRef, useState } from "react";

import Button from "../components/Button";
import Footer from "../components/Footer";
import ResultModal from "../components/ResultModal";
import SlotMachine from "../components/SlotMachine";
import useSlot from "../hooks/useSlot";
import * as S from "../styles/SlotPage.styled";

const SlotPage = () => {
  const {
    candidates,
    excludedLion,
    winner,
    drawWinner,
    prepareNextRound,
  } = useSlot();

  // 0: 모두 회전
  // 1: 첫 번째 릴 정지
  // 2: 두 번째 릴까지 정지
  // 3: 모든 릴 정지
  const [stoppedReels, setStoppedReels] = useState(0);

  const [hasStarted, setHasStarted] = useState(false);
  const [isResultOpen, setIsResultOpen] = useState(false);

  const timersRef = useRef([]);

  const clearTimers = () => {
    timersRef.current.forEach((timer) => clearTimeout(timer));
    timersRef.current = [];
  };

  const handleSpin = () => {
    if (hasStarted) {
      return;
    }

    const selectedWinner = drawWinner();

    if (!selectedWinner) {
      return;
    }

    setHasStarted(true);
    setStoppedReels(0);

    clearTimers();

    // 1초 후 첫 번째 릴 정지
    timersRef.current.push(
      setTimeout(() => {
        setStoppedReels(1);
      }, 500),
    );

    // 2초 후 두 번째 릴 정지
    timersRef.current.push(
      setTimeout(() => {
        setStoppedReels(2);
      }, 800),
    );

    // 3초 후 세 번째 릴 정지
    timersRef.current.push(
      setTimeout(() => {
        setStoppedReels(3);
      }, 1100),
    );

    // 모든 릴이 멈춘 지 1초 후 결과 모달 표시
    timersRef.current.push(
      setTimeout(() => {
        setIsResultOpen(true);
      }, 1400),
    );
  };

  const handleCloseResult = () => {
    // 현재 당첨자가 다음 라운드의 제외 사자가 됨
    prepareNextRound();

    setIsResultOpen(false);
    setStoppedReels(0);
    setHasStarted(false);
  };

  useEffect(() => {
    return () => {
      clearTimers();
    };
  }, []);

  return (
    <S.SlotPageContainer>
      <S.SlotTitle>
        <span>오늘의 </span>
        <strong>발표 사자</strong>
        <span>는?</span>
      </S.SlotTitle>

      <S.MachineSection>
        <S.SlotMachineFrame>
          <SlotMachine
            candidates={candidates}
            winner={winner}
            stoppedReels={stoppedReels}
          />
        </S.SlotMachineFrame>

        <Button
          onClick={handleSpin}
          disabled={hasStarted}
        />
      </S.MachineSection>

      <Footer excludedLion={excludedLion} />

      {isResultOpen && (
        <ResultModal
          winner={winner}
          onClose={handleCloseResult}
        />
      )}
    </S.SlotPageContainer>
  );
};

export default SlotPage;