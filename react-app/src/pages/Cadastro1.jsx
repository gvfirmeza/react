import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";
import { Fundo } from "../components/Cadastro/style_cadastro";
import { Titulo } from "./style";
import Cadastro from "../components/Cadastro/Cadastro";


const Cadastro1 = () => (
  <>  
  <Fundo>
    <Menu />
    <center>
    <Titulo>Cadastro de novo Usuário</Titulo>
    </center>
    <center>
      <Cadastro/>
    </center>
    </Fundo>
  </>
);

export default Cadastro1;
