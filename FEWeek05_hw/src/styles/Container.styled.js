import styled from "styled-components";
import Noise from "../assets/overlay.gif";

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

  display: flex;
  justify-content: center;
  align-items: center;

  scroll-snap-align: start;
`;

