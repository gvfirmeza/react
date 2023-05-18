import styled from "styled-components";

const Titulo = styled.h2 `
    color: white;
    font-size: 32px;
    margin-top: 0;
    margin-bottom: 10px;
`;

const Fundo = styled.div `
    background: rgb(167,218,226);
    background: radial-gradient(circle, rgba(167,218,226,1) 6%, rgba(80,87,106,1) 85%);
    height: 100vh;
`;

export {Titulo , Fundo};