import * as S from "../styles/Page1.styled.js";
import Background from "../assets/Page1.jpeg";
import Logo from "../assets/Page1-1.png";

function Page1() {
  return (
    <S.Wrapper>
      <S.Background src={Background} alt="Background" />
      <S.Logo src={Logo} alt="Logo"/>
      <S.Text>
        “소장하고 싶은 아름다움, 전시하고 싶은 감각.” 무지개맨션이 제안하는 ‘오브제 코스메틱’을 지금 만나보세요
        <br />
        Beauty you'll want to own. Aesthetic you'll want to display. Discover Objet Cosmetics by MUZIGAE MANSION.
      </S.Text>
    </S.Wrapper>
  );
}

export default Page1;