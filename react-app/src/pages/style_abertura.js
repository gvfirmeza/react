import styled from "styled-components";




const DivAbertura = styled.div ` 
    
    flex-direction: column;
    font-size:22px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 2em;
    text-align:center;
    border-radius: 25px;
    width: fit-content;
    background-image: linear-gradient(to left, #0388A6 , #4992BF ,#64D0EA);
    background-size: 400% 100%;
    display: flex ;
    align-items: center;
    animation: fade  3s  infinite alternate ;
    
    a {
        text-decoration: none;
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
    height: 100vh;
`;

export {Fundo, DivAbertura};