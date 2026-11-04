import * as S from "../styles/Header.styles";

const Header = () => {
  return (
    <S.Header>
      <S.TopRow>
        <S.Line />
        <S.Tagline>Don’t read, just look</S.Tagline>
        <S.Line />
      </S.TopRow>

      <S.Logo>Art Blind Date</S.Logo>

      <S.DoubleLine>
        <span />
        <span />
      </S.DoubleLine>
    </S.Header>
  );
};

export default Header;