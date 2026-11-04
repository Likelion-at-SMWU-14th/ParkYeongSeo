import styled from "styled-components";
import Noise from "../assets/overlay.gif";

export const ScrollContainer = styled.main`
  position: relative;

  display: flex;

  width: auto;
  height: 100vh;

  overflow-x: auto;
  overflow-y: hidden;

  &::after {
    content: "";
    position: fixed;
    inset: 0;

    background: url(${Noise}) repeat;
    background-size: 250px;
    opacity: 0.1;

    pointer-events: none;
    z-index: 20;
  }
`;

export const Page = styled.section`
  width: auto;
  height: 100vh;

  flex-shrink: 0;
  position: relative;
  z-index: 0;
`;
