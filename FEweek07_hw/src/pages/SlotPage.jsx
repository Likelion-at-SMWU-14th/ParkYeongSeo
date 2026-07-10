import { useState } from "react";

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

  const [isSpinning, setIsSpinning] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [isResultOpen, setIsResultOpen] = useState(false);

  const handleSpin = () => {
    if (hasStarted) {
      return;
    }

    const selectedWinner = drawWinner();

    if (!selectedWinner) {
      return;
    }

    setHasStarted(true);

    setTimeout(() => {
      setIsSpinning(false);
      setIsResultOpen(true);
    }, 2000);
  };

  const handleCloseResult = () => {
    // 현재 당첨자를 다음 라운드의 제외 사자로 변경
    prepareNextRound();

    // 결과 화면 닫기
    setIsResultOpen(false);

    // 새 후보 명단으로 다시 회전
    setIsSpinning(true);

    // START 버튼 다시 활성화
    setHasStarted(false);
  };

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
            isSpinning={isSpinning}
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