import { Link } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";

const Sobre = () => (
    <>
    <Menu />
    <h1>Planília de Chamados</h1>
    <Cartao 
        simb={"📞"}
        data={"28/02/1884"}
    />
    <Cartao 
        simb={"📞"}
        data={"06/12/2021"}
    />
    <Cartao 
        simb={"📞"}
        data={"12/06/1999"}
    />
    <Cartao 
        simb={"📞"}
        data={"22/02/1877"}
    />
    <Cartao 
        simb={"📞"}
        data={"31/06/2001"}
    />
    </>
)

export default Sobre ;