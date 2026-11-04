import { useNavigate } from "react-router-dom";
import * as S from "../styles/MainPage.styled";

const MainPage = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/slot");
  };

  return (
    <S.MainContainer>
      <S.MainTitle>
        <span>오늘의 </span>
        <strong>발표 사자</strong>
        <span>는?</span>
      </S.MainTitle>
      <S.StartButton type="button" onClick={handleStartClick}>
        시작하기
      </S.StartButton>
    </S.MainContainer>
  );
};

export default MainPage;