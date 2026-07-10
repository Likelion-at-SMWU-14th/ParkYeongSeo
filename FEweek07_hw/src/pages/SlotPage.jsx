import SlotImage from "../assets/slot.svg";
import * as S from "../styles/SlotPage.styled";

const SlotPage = () => {
  return (
    <S.SlotPageContainer>
      <S.SlotTitle>
        <span>오늘의 </span>
        <strong>발표 사자</strong>
        <span>는?</span>
      </S.SlotTitle>

      <S.SlotMachineArea>
        <S.SlotBackground
          src={SlotImage}
          alt="발표자 추첨 슬롯머신"
        />
      </S.SlotMachineArea>
    </S.SlotPageContainer>
  );
};

export default SlotPage;