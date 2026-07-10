import Button from "../components/Button";
import Footer from "../components/Footer";
import SlotMachine from "../components/SlotMachine";
import useSlot from "../hooks/useSlot";
import * as S from "../styles/SlotPage.styled";

const SlotPage = () => {
  const { candidates, excludedLion } = useSlot();

  const handleSpin = () => {
    console.log("START");
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
          <SlotMachine candidates={candidates} />
        </S.SlotMachineFrame>

        <Button onClick={handleSpin} />
      </S.MachineSection>

      <Footer excludedLion={excludedLion} />
    </S.SlotPageContainer>
  );
};

export default SlotPage;