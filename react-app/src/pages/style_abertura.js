import styled from "styled-components";




const DivAbertura = styled.div ` 
    color:white;
    flex-direction: column;
    font-size:22px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 2em;
    text-align:center;
    border-radius: 25px;
    width: fit-content;
    background: linear-gradient(to left, blue ,blue 35%, darkblue 100%);
    background-size: 400% 100%;
    display: flex ;
    align-items: center;
    animation: fade  3s  infinite alternate ;
    
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

    textarea {
        font-size: 15px;
        color: white;
        background-color: transparent;
        border: solid black 2px;
        padding: 0.3em;
        border-radius: 10px;
    }

    textarea::placeholder {
        font-size: 15px;
        color: white;
        text-align: center;
        font-family: sans-serif;
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
    background-image: url("https://images2.alphacoders.com/851/thumb-1920-85170.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 190vh;
`;

export {Fundo, DivAbertura};