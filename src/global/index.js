import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Lato, Sans-Serif;
  }

  body{
    width: 100vw;
    height: 100vh;
  }
`;

export default GlobalStyle;