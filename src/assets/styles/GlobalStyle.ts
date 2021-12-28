import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        overflow-x: hidden;
        background-color: #f1efe5;
    }
    *, *::after, *::before {
        box-sizing: inherit;
    }
    body {
        font-family: 'Poppins', sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    a, button {
        font-family: 'Poppins', sans-serif
    }
`;

export default GlobalStyle;
