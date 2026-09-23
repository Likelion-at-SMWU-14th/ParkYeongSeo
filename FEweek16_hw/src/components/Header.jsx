import * as S from "../styles/Header.styled.js";
import HeaderLogo from "../assets/Header_Logo.svg";

function Header() {
  return (
    <S.Header>
      <S.HeaderInner>
        <S.LeftMenu>
          <S.Menu>PRODUCT</S.Menu>
          <S.Menu>COLLECTION</S.Menu>
          <S.Menu>BRAND</S.Menu>
          <S.Menu>CURATION</S.Menu>
        </S.LeftMenu>

        <S.Logo src={HeaderLogo} alt="Logo" />

        <S.RightMenu>
          <S.Menu>SEARCH</S.Menu>
          <S.Menu>ACCOUNT</S.Menu>
          <S.Menu>CART</S.Menu>
        </S.RightMenu>
      </S.HeaderInner>
    </S.Header>
  );
}

export default Header;