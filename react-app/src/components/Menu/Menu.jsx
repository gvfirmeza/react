import { Link } from "react-router-dom";
import { MeuNav } from "./style";

const Menu = () => (

    <MeuNav>

    <Link to="/Chamado">

        Chamado

        </Link>
    <Link to="/Cadastro">

            Cadastro

        </Link>
    <Link to= "/Abertura">
        Abertura
    </Link>
    <Link to= "/Dashboard">
        Dashboard
    </Link>

    </MeuNav>
)

export default Menu;
