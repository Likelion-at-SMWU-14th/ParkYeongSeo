import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const slotStart = () => {
    navigate("/slot");
  };

  return (
    <section className="home-page">
      <h1>오늘의 발표 사자</h1>
      <p>레버를 당겨 오늘 발표할 사자를 뽑아보세요.</p>

      <button onClick={slotStart}>
        뽑기 시작
      </button>
    </section>
  );
};

export default MainPage;