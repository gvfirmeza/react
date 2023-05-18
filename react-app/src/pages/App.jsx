import logo from './micromeros.png';
import Menu from '../components/Menu/Menu';
import { Fundo, Titulo, Ancora} from "./style.js";
import Footer from '../components/Footer/Footer';
import Bubu from '../components/MenuBubu/Bubu.jsx';

function App() {
  return (
    <>
    <Fundo>
      <center>
      <Menu />
      <Bubu />
      <header className="App-header">
        <Titulo>Microméros</Titulo>
        <img src={logo} className="App-logo" alt="logo" height={300}  />
        <Ancora href="http://localhost:3000/Entra"> ENTRAR </Ancora>
      </header>
      </center>
    </Fundo>
    <Footer /> 
    </>

  );
}

export default App;
