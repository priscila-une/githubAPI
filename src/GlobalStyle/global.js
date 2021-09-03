import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
html{
    --color-background: #F0D9FF;
    --color-secondary: #BFA2DB;
    --color-text: #11324D;
}

body {
    box-sizing: border-box;
    margin: 0;
    font-family: roboto,sans-serif;
    background: var(--color-background);
    color: var(--color-text);

    a{
        text-decoration: none;
    }
}

`;