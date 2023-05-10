import logo from './tubarão.gif';
import Menu from '../components/Menu/Menu';
import { Fundo, Titulo } from "./style.js";



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
    </Fundo>
  );
}

export default App;
