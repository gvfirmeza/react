import styled from "styled-components";
import logo from "./micromeros.png";

const Titulo = styled.h2 `
    color: white;
    font-size: 32px;
`;

const Fundo = styled.div `
    background: rgb(167,218,226);
    background: radial-gradient(circle, rgba(167,218,226,1) 6%, rgba(80,87,106,1) 85%);
    width: 100%;
    height: 100vh;

`;


export {Titulo , Fundo};