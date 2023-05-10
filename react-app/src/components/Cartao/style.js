import styled from "styled-components";

const Container = styled.div `
    

    border-radius: 8px;
    border: solid 2px black;
    padding: 1em;
    height: 1.5em;
    
    display: flex;
    flex-direction: row;
    column-gap: 1em;
    color: white;
    width: fit-content;

    margin: auto;
    margin-bottom: 1.5em;
`;

const Simbolo = styled.span `
    padding-left: 0.4em;
    margin-right: 1em;
    font-size: larger;
    font-weight: bolder;
    display: flex;
    align-items: center;
`;

const Descricao = styled.span `
    font-size: 22px;
    font-style: italic;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-bottom: 5em;
`;

const Momento = styled.span `
    
    font-size: 20px;
    font-family: monospace;
    display: flex;
    align-items: center;
    padding-left: 1em;
    
`;
const Fundo = styled.div `
    background-image: url("https://images2.alphacoders.com/851/thumb-1920-85170.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
`;


export { Container , Simbolo , Descricao , Momento, Fundo };