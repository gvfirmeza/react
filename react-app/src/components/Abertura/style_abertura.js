
import styled from "styled-components";




const DivAbertura = styled.div` 
    
    font-family: Arial, Helvetica, sans-serif;
    padding: 40pt;
    border-radius: 20px;
    background-color: #032E6E;
    display: flex ;
    color: white;
    width: 28rem;
    margin: 0 auto;

    label {
        padding-bottom: 1em;
        font-size: large;
        font-weight: 500;
    }
    
    a {
        text-decoration: none;
    }
    
    input {
        font-size: 12pt;
        color: black;
        background-color: white;
        border: solid #7d92a7 2.2px;
        padding: 0.3em;
        border-radius: 10px;
        margin-bottom: 1em;
        margin-top: 1em;
        width: 25em;
    }

    input::placeholder{
        padding-left: 0.4em;
        font-size: 15px;
        font-weight: 600;
        background: -webkit-linear-gradient(90deg, #032E6E 30%, #031735 60%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        opacity: 0.8;
    }

    button {
        margin-top: 1em;
        font-size: 15px;
        font-weight: 700;
        background-color: white;
        padding: 0.8em;
        border: solid #3a444d 2.2px;
        border-radius: 10px;
        color: #3a444d;
        
    }

    select {
        margin-top: 1em;
        font-weight: 600;
        background-color: white;
        padding: 0.3em;
        margin-bottom: 1em;
        border: solid #7d92a7 2.2px;
        border-radius: 10px;
    }

    option {
        font-weight: 600;
        background: -webkit-linear-gradient(90deg, #032E6E 30%, #031735 60%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-color: white;  
    }

    textarea {
        resize: none;
        font-size: 12pt;
        color: black;
        background-color: white;
        border: solid #7d92a7 2.2px;
        padding: 0.3em;
        border-radius: 10px;
        margin-bottom: 1em;
        margin-top: 1em;
        width: 25em;
    }

    `


    ;
const Fundo = styled.body`
    background: rgb(167,218,226);
    background: radial-gradient(circle, rgba(167,218,226,1) 6%, rgba(80,87,106,1) 85%);
    width: 100%;
`;



export { Fundo, DivAbertura };