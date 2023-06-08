import Footer from "../components/Footer/Footer";
import { Fundo, Titulo } from "./style";
import logo from "../pages/micromeros.png";
import Abertura1 from "../components/Abertura/Abertura1";
import Bubu from "../components/MenuBubu-U/Bubu";
import Menu from "../components/Menu-U/Menu";
import Logout from "../components/Logout/Logout";

const AberturaU = () => (
  <>  
  <Fundo>
    <Menu />
    <Bubu />
    <Logout />
    <center>
    <center><img src={logo} className="App-logo" alt="logo" height={100}  zindex= {2}/></center>
    <Titulo>Abertura de Chamado</Titulo>
    </center>
      <Abertura1/>
    </Fundo>
    <Footer></Footer>
  </>
);

export default AberturaU;
