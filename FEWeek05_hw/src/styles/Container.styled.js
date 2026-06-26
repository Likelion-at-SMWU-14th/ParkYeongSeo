import styled from "styled-components";

export const ScrollContainer = styled.main`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;

  width: 100vw;
  height: 100vh;

  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
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