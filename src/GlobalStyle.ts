import { createGlobalStyle } from "styled-components";
import NunitoSans from "./assets/NunitoSans.ttf";

export const GlobalStyle = createGlobalStyle<{ theme: object }>`
@font-face {
  /* Weights: 300, 600, 800 */
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 300;
  src: url(${NunitoSans}) format("truetype");
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  min-height: 100%;
  font-family: "Nunito Sans", sans-serif;
}

#root {
  height: 100%;
  background-color: ${({ theme }) => theme.bg};
}
`;
