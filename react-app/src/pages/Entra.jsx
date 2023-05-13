import Menu from '../components/Menu/Menu';
import Login from '../components/Login/Login';
import logo from "../pages/micromeros.png";
import { Fundo } from '../components/Cartao/style';


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
