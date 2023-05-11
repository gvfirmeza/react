import styled from "styled-components";

const Footer1 = styled.footer`
    position: sticky;
    margin-top: 100px;
    text-align: center;
    padding-top: 12pt;
    background: linear-gradient(90deg, #032E6E 30%, #031735 60%);
    border: 2px solid black;
    height: 12pc;
`;

const Texto = styled.span`
    color: white;
    font-size: 25pt;
`;     

const Container = styled.div`
    width: 45%;
    background-color: blue;
    margin: 0 auto;
    padding-right: 30pt;
    display: grid;
    grid-template-columns: 45% 45%;
`;

const Bloco = styled.div`
    margin-top: 0.5pc;
    background-color: gray;
    height: 10pc;
    border: 1px solid black;
`;
export { Footer1, Texto, Bloco, Container };