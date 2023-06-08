import styled from "styled-components";
import Lupa from "./lupa.png"

const Titulo = styled.h2 `
    color: white;
    font-size: 31px;
    margin-top: 0;
    margin-bottom: 10px;
    text-align: center;

    @media (max-width: 555px) {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0.5em;
    left: 50%;
    transform: translateX(-50%);
    font-size: 23px;
  }

    @media (max-width:425px){
        font-size: 22px;
    }
    @media (max-width:360px){
        font-size: 21px;
    }
`;

const Fundo = styled.div `
    background: rgb(167,218,226);
    background: radial-gradient(circle, rgba(167,218,226,1) 6%, rgba(80,87,106,1) 85%);
    height: 70rem;
    user-select: none;
`;

const Ancora = styled.a `
    display: flex;
    justify-content: center;
    padding: 1em;
    background-color: #032E6E;
    width: 6em;
    border-radius: 7px;
   text-decoration: none;
   color: whitesmoke;
   `;

const Busca = styled.input `
    padding: 0.6em;
    padding-right: 9em;
    border-radius: 6px;
    border: solid black 2px;
    margin-top: 0;
    margin-bottom: 3em;
    color: white;
    background-color: #032E6E;
    background-image: url(${Lupa});
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: 97%;
`

export {Titulo , Fundo, Ancora, Busca};
