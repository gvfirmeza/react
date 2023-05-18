import { Hamb } from "./style.js";

const Bubu = () => (
    <Hamb>
        <input type="checkbox" id="menu" class="container__botao" />
            <label for="menu">
                <span class="cabeçalho__menu-hamburguer container__imagem"></span>
            </label>
            <ul class="lista-menu"> 
                <li class="lista-menu__item">
                    <a href="./" class="lista-menu__link">Home</a>
                </li>
                <li class="lista-menu__item">
                    <a href="./Chamado" class="lista-menu__link">Chamado</a>
                </li>
                <li class="lista-menu__item">
                    <a href="./Cadastro" class="lista-menu__link">Cadastro</a>
                </li>
                <li class="lista-menu__item">
                    <a href="./Dashboard" class="lista-menu__link">Dashboard</a>
                </li>
            </ul>
    </Hamb>
)

export default Bubu;