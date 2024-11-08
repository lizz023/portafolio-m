import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    color: #fff;
    font-family: 'Roboto', 'Sans serif';
    margin: 0 auto;
    max-width: 1366px;
    padding: 0;
    text-decoration: none;
    
    }
    .roboto-light {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-style: normal;
    }

    .roboto-regular {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    }

    .roboto-bold {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-style: normal;
    }

`

export default GlobalStyle;