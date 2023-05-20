import styled from "styled-components";

const Footer1 = styled.footer`
    position: relative;
    bottom: 0pt;
    padding-top: 12pt;
    background: linear-gradient(90deg, #032E6E 30%, #031735 60%);
    height: 12pc;
    width: 100%;
`;

const Container = styled.div`
    width: 30%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 30pt;
    padding-right: 30pt;

    @media (max-width: 1456px){
        width: 45%;
    }
    @media (max-width: 970px){
        width: 70%;
    }
    @media (max-width: 624px){
        width: 90%;
        column-gap: 20pt;
    }
    @media (max-width: 495px){
        width: 80%;
        column-gap: 30pt;
    }
`;

const Bloco = styled.div`
    margin-top: 0.5pc;
    height: 10pc;
    border-radius: 15px;
    text-align: center;
`;

const Texto = styled.span`
    color: white;
    font-size: 12pt;
`;     

// function mostra_senha() {
//     var senha = document.getElementById("inputSenha");
//     if (senha.type === "password") {
//       senha.type = "text";
//     } else {
//       senha.type = "password";
//     }
// }

export { Footer1, Texto, Bloco, Container };