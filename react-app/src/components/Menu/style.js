import styled from "styled-components";

const MeuNav = styled.nav ` 
    display: flex;
    justify-content: center;
    flex-direction: row;
    font-size: 20px;
    gap: 1em;
    background: linear-gradient(90deg, #032E6E 30%, #031735 60%);
    
    a {
        text-decoration: none;
        font-weight: 600;
        color: #dfe1ea;
        padding: 0.5em;
        margin: 0;
    }

    a:hover {
        background-color: #444d67;
    }

`;

export { MeuNav };