import styled from "styled-components";
import olho from "./olho-aberto.png";

const DivPrincipal = styled.div ` 
    /* gap: 1em; */
    color: white;
    font-weight: bolder;
    margin: 0 auto;
    background: blue;
    flex-direction: column;
    padding: 40pt;
    width: 25%;
    margin-top: 40pt;
    border-radius: 20px;
    background-color: #032E6E;
    display: flex ;
    margin-top: 0;

    .chato {
        margin-top: 0;
        margin-bottom: 2em;
        font-size: 32px;
    }

    a {
        text-decoration: none;
    }

    @media (max-width: 1577px){
        width: 30%;
    }
    @media (max-width: 1287px){
        width: 40%;
    }
    @media (max-width: 905px){
        width: 50%;
    }
    @media (max-width: 703px){
        width: 60%;
    }

`;

const Input = styled.input`
    border: 1px solid black;
    border-radius: 25px;
    height: 35px;
    width: 90%;
    padding-left: 15px;
    font-size: 12pt;
    margin: 10pt;

    @media (max-width: 1287px){
        padding-left: 12px;
        margin: 6pt;
    }
    @media (max-width: 400px){
        padding-left: 9px;
        margin: 2pt;
    }
`;

const Botao = styled.button`
    margin-top: 3em;
    height: 40px;
    width: 12em;
    background: black;
    color: white;
    border: 1px solid white;
    border-radius: 40px;
`;

const BotaoVerSenha = styled.button`
    background-image: url(${olho});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: transparent;
    border: 0px;
    height: 35px;
    width: 35px;
    color: transparent;
    margin-left: -15%;
    
    :hover{
        background-size: 95%;
    }

    @media (max-width: 605px){
        margin-left: -22%;
    }
    @media (max-width: 400px){
        margin-left: -27%;
    }
    @media (max-width: 364px){
        margin-left: -32%;
    }
`;

export { DivPrincipal, Input, Botao, BotaoVerSenha };