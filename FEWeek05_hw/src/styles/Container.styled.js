import styled from "styled-components";

export const ScrollContainer = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;

  overflow-x: auto;
  overflow-y: hidden;

  scroll-snap-type: x mandatory;
`;

export const Page = styled.section`
  min-width: 100vw;
  height: 100vh;

  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  scroll-snap-align: start;
`;