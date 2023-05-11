import styled from "styled-components";

const MeuNav = styled.nav ` 
    display: flex;
    justify-content: center;
    flex-direction: row;
    font-size: 19px;
    gap: 1em;
    background-color: #232835;
    
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