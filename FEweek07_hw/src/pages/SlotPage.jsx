import { useState } from "react";

import Button from "../components/Button";
import Footer from "../components/Footer";
import SlotMachine from "../components/SlotMachine";
import useSlot from "../hooks/useSlot";
import * as S from "../styles/SlotPage.styled";

const SlotPage = () => {
  const { candidates, excludedLion, winner, drawWinner } = useSlot();

  // 페이지 진입 시 슬롯은 회전 중
  const [isSpinning, setIsSpinning] = useState(true);

  // START 버튼을 이미 눌렀는지 확인
  const [hasStarted, setHasStarted] = useState(false);

  const handleSpin = () => {
    // 여러 번 클릭되는 것을 방지
    if (hasStarted) {
      return;
    }

    setHasStarted(true);

    // 후보 중 한 명을 당첨자로 선정
    drawWinner();

    // 2초 동안 더 회전한 뒤 정지
    setTimeout(() => {
      setIsSpinning(false);
    }, 2000);
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
    </S.SlotPageContainer>
  );
};

export default SlotPage;