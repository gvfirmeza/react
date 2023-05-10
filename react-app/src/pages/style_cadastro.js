import styled from "styled-components";




const DivCadastro = styled.div ` 
    
    flex-direction: column;
    font-size:20px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 2em;
    text-align:center;
    border-radius: 15px;
    width: fit-content;
    background-image: linear-gradient(to left, #0388A6 , #4992BF ,#64D0EA);
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

export {Fundo, DivCadastro};