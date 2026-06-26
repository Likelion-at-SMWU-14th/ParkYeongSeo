import styled from "styled-components";
import Noise from "../assets/overlay.gif";

export const ScrollContainer = styled.main`
  display: flex;

  width: 100vw;
  height: 100vh;

  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  &::before {
    content: "";
    position: fixed;
    inset: 0;

    background: url(${Noise}) repeat;
    background-size: 250px;
    opacity: 0.1;

    pointer-events: none;
    z-index: 999;
  }
`;

export const Page = styled.section`
  min-width: 100vw;
  height: 100vh;

  flex-shrink: 0;
`;