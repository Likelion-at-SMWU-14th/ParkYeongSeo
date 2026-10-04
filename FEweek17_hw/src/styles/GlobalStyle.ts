import { createGlobalStyle } from "styled-components";
import OldLondon from "../assets/fonts/OldLondon.ttf";

export const COLORS = {
  black: "#000000",
  white: "#ffffff",
} as const;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Old London";
    src: url(${OldLondon}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #root {
    width: 100%;
    min-height: 100%;
  }

  body {
    margin: 0;

    background: ${COLORS.white};
    color: ${COLORS.black};

    font-family: "Times New Roman", Times, serif;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  img {
    display: block;
  }
`;

export default GlobalStyle;