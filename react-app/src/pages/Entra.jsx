import Menu from '../components/Menu/Menu';
import Login from '../components/Login/Login';
<<<<<<< HEAD
import Footer from '../components/Footer/Footer';
=======
import logo from "../pages/micromeros.png";
import { Fundo } from '../components/Cartao/style';

>>>>>>> 437b1bb83cedf886ea59e912a69a209cba4e7bab

function Entra() {
  return (
    <div className="Entra">
      <Fundo>
      
        <Menu />
        <center><img src={logo} className="App-logo" alt="logo" height={100}  zindex= {2}/></center>
        <Login />
      
      </Fundo>
<<<<<<< HEAD
      <Footer></Footer>
=======
      

>>>>>>> 437b1bb83cedf886ea59e912a69a209cba4e7bab
    </div>
  );
}

export default Entra;
