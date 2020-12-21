import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        top: 0;
        left: 0;
        box-sizing: border-box;
        
    }
    html {
        &::-webkit-scrollbar {
            width: .5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgray;
        }
    }
    body  {
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        color: #333;
    }
    h2 {
        font-size: 2.75rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #333;
    }
    h3 {
        font-size: 1.3rem;
        padding: .5rem 0rem;
        color: #333;
    }
    p {
        font-size: 1.2rem;
        line-height: 200%;
        color: #333;
    }
    a {
        text-decoration: none;
    }
    img {
        display: block;
    }
    input {
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
    }
`;

export default GlobalStyle;