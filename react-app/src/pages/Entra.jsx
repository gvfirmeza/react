import Menu from '../components/Menu/Menu';
import { Botao, DivPrincipal,  Input } from './style_entra';
import { Titulo,Fundo  } from './style';
import Login from '../components/Login/Login';
import logo from "../pages/micromeros.png";

function Entra() {
  return (
    <div className="Entra">
      <Fundo>
        <Menu />
        <center><img src={logo} className="App-logo" alt="logo" height={100}  zindex= {2}/></center>
        <Login />
      </Fundo>
      

    </div>
  );
}

export default Entra;
