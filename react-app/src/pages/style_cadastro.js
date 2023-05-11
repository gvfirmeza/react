import styled from "styled-components";




const DivCadastro = styled.div ` 
    
    flex-direction: column;
    font-size:22px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 2em;
    text-align:center;
    border-radius: 20px;
    width: fit-content;
    background: linear-gradient(to left, blue ,blue 35%, darkblue 100%);
    background-size: 400% 100%;
    display: flex ;
    align-items: center;
    animation: fade  3s  infinite alternate ;
    color: white;
    
    a {
        text-decoration: none;
    }
    
    input {
        font-size: 15px;
        color: white;
        background-color: transparent;
        border: solid black 2px;
        padding: 0.3em;
        border-radius: 10px;
    }

    input::placeholder{
        font-size: 15px;
        color: #d0f4f9;
        text-align: center;
    }

    button {
        font-size: 15px;
        font-weight: 550;
        color: black;
        background-color: #d0f4f9;
        border: solid black 2px;
        padding: 0.5em;
        border-radius: 10px;
    }

    select {
        font-size: 15px;
        color: #d0f4f9;
        background-color: transparent;
        border: solid black 2px;
        padding: 0.3em;
        border-radius: 10px;
    }

    option {
        background-color: #0388A6;  
    }

@keyframes fade{
        0%{
            background-position-x: 0%;
        }
        100%{
            background-position-x: 100%;
        }
        
    }
    `
   

;
const Fundo = styled.div `
    background: rgb(167,218,226);
    background: radial-gradient(circle, rgba(167,218,226,1) 6%, rgba(80,87,106,1) 85%);
    width: 100%;
    height: 130vh;
`;

export {Fundo, DivCadastro};