import styled from "styled-components";

const Container = styled.div `
    background-color: grey;

    border-radius: 8px;
    border: solid 2px black;
    padding: 1em;
    height: 1.5em;
    
    display: flex;
    flex-direction: row;
    column-gap: 1em;
    color: white;

    margin-bottom: 1.5em;
`;

const Simbolo = styled.span `
    padding-left: 0.6em;
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
    margin-right: 1.5em;
    
`;

export {Container , Simbolo , Descricao , Momento };