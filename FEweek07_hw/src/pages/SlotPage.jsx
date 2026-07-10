import SlotImage from "../assets/slot.svg";
import Footer from "../components/Footer";
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

        <SlotMachine candidates={candidates} />
      </S.SlotMachineArea>

      <Footer />

      {/* 데이터 확인용 임시 영역 */}
      <S.DebugArea>
        <p>제외 사자: {excludedLion}</p>
        <p>후보: {candidates.join(", ")}</p>
        <p>당첨자: {winner ?? "아직 없음"}</p>

        <button type="button" onClick={drawWinner}>
          임시 추첨
        </button>

        <button type="button" onClick={prepareNextRound}>
          다음 추첨 준비
        </button>
      </S.DebugArea>
    </S.SlotPageContainer>
  );
};

export default SlotPage;