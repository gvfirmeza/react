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

export { DivCadastro};