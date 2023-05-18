import styled from "styled-components";
import furunculo from "./hamburguer.png"

const Hamb = styled.div`
    
    display: none;

    @media (max-width: 555px) {
        display: flex;
        padding: 1em;
        background: linear-gradient(90deg, #032E6E 30%, #031735 60%);


    .cabeçalho__menu-hamburguer {
        width: 25px;
        height: 25px;
        background-image: url(${furunculo});
        background-repeat: no-repeat;
        background-position: center;
        display: inline-block; 
        padding: 0;
        margin: 0;
    }

    .lista-menu {
        display: none;
        position: absolute;
        width: 34%;
        padding: 0;
        margin-top: 48px;
        background-color: #032E6E;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .container__botao {
        display:none;
    }

    .container__botao:checked ~ .lista-menu {
        display: block;
    }
    
    .lista-menu__item {
        padding: 1em;
        background-color: transparent;
        list-style: none;
        box-shadow: 0px -2px 1px #abbfd6;
    }

    .lista-menu__link {
    text-decoration: none;
    color: white;
    font-weight: 600;
    }

    .container__imagem {
    padding: 0.5em;
    }

    }
`;

export { Hamb };