import logo from './tubarao.png';
import Menu from '../components/Menu/Menu';
import { Titulo } from "./style.js";

function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <Titulo>TUBARÃO DOENTE</Titulo>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
