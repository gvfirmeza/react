import logo from './tubarao.png';
import Menu from '../components/Menu/Menu';
import { Fundo, Titulo } from "./style.js";
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <Fundo>
      <center>
      <Menu />
      <header className="App-header">
        <Titulo>TUBARÃO DOENTE</Titulo>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      </center>
      <Footer></Footer>
    </Fundo>
  );
}

export default App;
