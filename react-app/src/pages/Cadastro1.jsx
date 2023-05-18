import Menu from "../components/Menu/Menu";
<<<<<<< HEAD
import Cartao from "../components/Cartao/Cartao";
import {  DivCadastro, Fundo } from "./style_cadastro";
import { Titulo } from "./style";
import Footer from "../components/Footer/Footer";
=======
import { Titulo, Fundo } from "./style.js";
import logo from "../pages/micromeros.png";
import Cadastro from "../components/Cadastro/Cadastro";

>>>>>>> 437b1bb83cedf886ea59e912a69a209cba4e7bab

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
