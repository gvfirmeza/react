import { Hamb } from "./style.js";

const Bubu = () => (
    <Hamb>
        <input type="checkbox" id="menu" class="container__botao" />
            <label for="menu">
                <span class="cabeçalho__menu-hamburguer container__imagem"></span>
            </label>
            <ul class="lista-menu">
                <li class="lista-menu__item">
                    <a href="./AberturaU" class="lista-menu__link">Abertura</a>
                </li>
                <li class="lista-menu__item">
                    <a href="./ChamadoU" class="lista-menu__link">Chamado</a>
                </li>
            </ul>
    </Hamb>
)

export default Bubu;