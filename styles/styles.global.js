import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        width: 100%;
        background: #f8f9fa;
        color: #444;
        justify-content: center;
        font-family: "Poppins", sans-serif;
    }
    a, p, h1, h2, h3, button {
        color: #444;
        font-family: "Poppins", sans-serif;
    }
`;
