import Menu from '../components/Menu/Menu';
import Login from '../components/Login/Login';
import Footer from '../components/Footer/Footer';
import logo from "../pages/micromeros.png";
import { Fundo } from '../components/Cartao/style';
import Bubu from '../components/MenuBubu/Bubu';

function Entra() {
  return (
    <div className="Entra">
      <Fundo>
      
        <Menu />
        <Bubu />
        <center><img src={logo} className="App-logo" alt="logo" height={100}  zindex= {2}/></center>
        <Login />
      
      </Fundo>
      <Footer></Footer>
    </div>
  );
}

export default Entra;
