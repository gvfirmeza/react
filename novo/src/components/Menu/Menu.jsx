import { Link } from "react-router-dom";
import { MeuNav } from "./style";

const Menu = () => (
    <MeuNav>
    <Link to="/">Home</Link>
    <Link to="Sobre">Sobre</Link>
    </MeuNav>
)

export default Menu;