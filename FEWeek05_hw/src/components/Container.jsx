import * as S from "../styles/Container.styled";
import { useRef } from "react";

import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4";
import Page5 from "../pages/Page5";

import Header from "./Header";

function Container() {
  const scrollRef = useRef(null);

  const handleWheel = (e) => {
    e.preventDefault();

    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <>
    <Header />
    <S.ScrollContainer ref={scrollRef} onWheel={handleWheel}>
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
    </>
  );
}

export default Container;