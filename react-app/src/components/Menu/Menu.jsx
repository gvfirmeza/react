import { Link } from "react-router-dom";
import { MeuNav } from "./style";

const Menu = () => (
    <MeuNav>
        <Link to="/">Home</Link>
        <Link to="/Sobre">Sobre</Link>
        <Link to="/Entra">Entra</Link>
    </MeuNav>
)

export default Menu;
