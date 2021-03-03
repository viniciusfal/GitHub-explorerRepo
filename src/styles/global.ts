import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-border-box;
    }
    body {
        background: #E5E5E5 url("https://xesque.rocketseat.dev/platform/1587379725719-attachment.svg") no-repeat 70% top;
        -webkit-font-smoothing: antialiased;
    }
    border-style, input, button {
        font-size:16px;
        font-family: 'Roboto', sans-serif;
    }
    #root {
        max-width:960px;
        margin: 0 auto;
        padding: 40px 20px;
    }
    button {
        cursor: pointer;
    }
`;
