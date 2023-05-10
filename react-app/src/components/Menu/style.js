import styled from "styled-components";

const MeuNav = styled.nav ` 
    display: flex;
    justify-content: center;
    flex-direction: row;
    font-size: 19px;
    gap: 1em;
    background-color: #60ACE8;
    
    a {
        text-decoration: none;
        font-weight: 400;
        color: black;
        padding: 0.5em;
        margin: 0;
    }

    a:hover {
        background-color : #228bdf;
    }

`;

export { MeuNav };