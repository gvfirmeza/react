import styled from "styled-components";

const Container = styled.div `
    
    background-color: #eefbfd;
    border-radius: 8px;
    border: solid 2px black;
    padding: 1em;
    height: fit-content;
    color: black;
    
    display: flex;
    flex-direction: row;
    column-gap: 1em;
    color: white;
    width: fit-content;

    margin: auto;
    margin-bottom: 1.5em;

    width: fit-content;

    word-wrap: break-word;
    white-space: pre-wrap;
`;

const Simbolo = styled.span `
    font-size: larger;
    font-weight: bolder;
    display: flex;
    align-items: center;
`;

const Descricao = styled.span `
    font-size: 18px;
    font-style: italic;
    color: black;
`;

const Momento = styled.span `
    
    font-size: 20px;
    font-family: monospace;
    display: flex;
    align-items: center;
    padding-left: 1em;
    color: black;
    
`;
const Fundo = styled.div `
    background: rgb(167,218,226);
    background: radial-gradient(circle, rgba(167,218,226,1) 6%, rgba(80,87,106,1) 85%);    
    width: 100%;
    height: 130vh;
`;


export { Container , Simbolo , Descricao , Momento, Fundo };