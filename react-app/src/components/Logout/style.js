import styled from "styled-components";
import foto from "./logout.png";

const Saida= styled.div`
    
    display: flex;
    padding: 1em;
    background: linear-gradient(90deg, #032E6E 30%, #031735 60%);
    z-index: 10;
    width: 30px;
    height: 30px;
    background-image: url(${foto});
    background-repeat: no-repeat;
    background-position: center;
    padding: 0;
    margin: 0;
    position: absolute;
    right: 1%;
    top: 1%;

    .cesar {
        padding: 1em;
        background-color: transparent;
        border: none;
    }

    @media (max-width: 730px) {
        top: 0.5%;
    }

    @media (max-width: 555px) {
        top: 2.2%;
        right: 2%
    }
`;

export { Saida };