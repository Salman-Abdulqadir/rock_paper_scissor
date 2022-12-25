import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    img{
        max-width: 100%;
        display: block;
    }
    body{
        font-family: 'Barlow Semi Condensed', sans-serif;
        background-color: hsl(214, 47%, 23%);
    }
    .flex, .flex-col{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1.5rem;
    }
    .flex-col{
        flex-direction: column;
    }
    .App{
        align-items: center;
    }
`;