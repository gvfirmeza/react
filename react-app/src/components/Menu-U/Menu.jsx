import { Link } from "react-router-dom";
import { MeuNav } from "./style";

const Menu = () => (

    <MeuNav>

    <Link to="/ChamadoU">

        Chamado

        </Link>

    <Link to= "/AberturaU">
        Abertura
    </Link>

    </MeuNav>
)

export default Menu;
