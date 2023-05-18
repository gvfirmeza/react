import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import { Titulo, Fundo } from "./style.js";
import logo from "../pages/micromeros.png";
import Cadastro from "../components/Cadastro/Cadastro";

const Cadastro1 = () => (
  <>  
  <Fundo>
    <Menu />
    <center>
    <center><img src={logo} className="App-logo" alt="logo" height={100}  zindex= {2}/></center>
    <Titulo>Cadastro de novo Usuário</Titulo>
    </center>
      <Cadastro/>
    </Fundo>
    <Footer></Footer>
  </>
);

export default Cadastro1;
