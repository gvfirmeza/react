import logo from './micromeros.png';
import Menu from '../components/Menu/Menu';
import { Fundo, Titulo, Logo } from "./style.js";
import Footer from '../components/Footer/Footer';


function App() {
  return (
    <Fundo>
      <center>
      <Menu />
      <header className="App-header">
        <Titulo>TUBARÃO DOENTE</Titulo>
        
        <img src={logo} className="App-logo" alt="logo" height={300} />
        
      </header>
      </center>
      <Footer></Footer>
    </Fundo>
  );
}

export default App;
