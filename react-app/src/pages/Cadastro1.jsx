import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";
import { Fundo } from "../components/Cadastro/style_cadastro";
import { Titulo } from "./style";
<<<<<<< HEAD
import logo from "../pages/micromeros.png";
=======
import Cadastro from "../components/Cadastro/Cadastro";

>>>>>>> 2721ac0855bdd0761602efc8cbf328e98666d64f

const Cadastro1 = () => (
  <>  
  <Fundo>
    <Menu />
    <center>
    <center><img src={logo} className="App-logo" alt="logo" height={100}  zindex= {2}/></center>
    <Titulo>Cadastro de novo Usuário</Titulo>
    </center>
    <center>
      <Cadastro/>
    </center>
    </Fundo>
  </>
);

export default Cadastro1;
