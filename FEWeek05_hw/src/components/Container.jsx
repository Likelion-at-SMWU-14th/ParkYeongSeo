import * as S from "../styles/Container.styled.js";

import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4";
import Page5 from "../pages/Page5";

function Container() {
  return (
    <S.ScrollContainer>
      <S.Page>
        <Page1 />
      </S.Page>

      <S.Page>
        <Page2 />
      </S.Page>

      <S.Page>
        <Page3 />
      </S.Page>

      <S.Page>
        <Page4 />
      </S.Page>

      <S.Page>
        <Page5 />
      </S.Page>
    </S.ScrollContainer>
  );
}

export default Container;