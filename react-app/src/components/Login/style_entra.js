import styled from "styled-components";

const DivPrincipal = styled.div ` 
    /* gap: 1em; */
    color: white;
    font-weight: bolder;
    margin: 0 auto;
    background: blue;
    flex-direction: column;
    padding: 40pt;
    width: 28rem;
    margin-top: 40pt;
    border-radius: 20px;
    background-color: #032E6E;
    display: flex ;
    margin-top: 0;


    a {
        text-decoration: none;
    }

`

;


const Input = styled.input`
    border: 1px solid black;
    border-radius: 25px;
    height: 30px;
    width: 25em;
    padding-left: 15px;
    font-size: 12pt;
    
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



export { DivPrincipal, Input, Botao };