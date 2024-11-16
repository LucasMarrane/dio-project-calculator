import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, body {
    margin: 0;
    padding: 0;
  }

  body{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  #root{
    width: inherit;
    height:inherit;
  }
`;
