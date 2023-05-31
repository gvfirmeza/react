import styled from "styled-components";

const Titulo = styled.h2 `
    color: white;
    font-size: 32px;
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
    height: 140vh;
    user-select: none;
    
    @media (max-width: 650px){
        height: 150vh;
    }

    @media (max-width: 380px){
        height: 160vh;
    }
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

export {Titulo , Fundo, Ancora};
