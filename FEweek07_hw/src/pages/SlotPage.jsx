import SlotImage from "../assets/slot.svg";
import Footer from "../components/Footer";
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
      </S.SlotMachineArea>

      {/* 데이터 확인용 */}
      <div>
        <p>제외 사자: {excludedLion}</p>
        <p>후보: {candidates.join(", ")}</p>
        <p>당첨자: {winner ?? "아직 없음"}</p>

        <button type="button" onClick={drawWinner}>
          임시 추첨
        </button>

        <button type="button" onClick={prepareNextRound}>
          다음 추첨 준비
        </button>
      </div>

      <Footer />
    </S.SlotPageContainer>
  );
};

export default SlotPage;