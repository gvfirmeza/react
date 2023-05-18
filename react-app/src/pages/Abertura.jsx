import Menu from "../components/Menu/Menu";
<<<<<<< HEAD
import Cartao from "../components/Cartao/Cartao";
import {  DivAbertura,  Fundo } from "./style_abertura";
import { Titulo } from "./style";
import Footer from "../components/Footer/Footer";
=======
import { Fundo, Titulo } from "./style";
import logo from "../pages/micromeros.png";
import Abertura1 from "../components/Abertura/Abertura1";


>>>>>>> 437b1bb83cedf886ea59e912a69a209cba4e7bab

const Abertura = () => (
  <>  
  <Fundo>
    <Menu />
    <center>
    <center><img src={logo} className="App-logo" alt="logo" height={100}  zindex= {2}/></center>
    <Titulo>Abertura de Chamado</Titulo>
    </center>
      <Abertura1/>
    </Fundo>
    <Footer></Footer>
  </>
);

export default Abertura;
