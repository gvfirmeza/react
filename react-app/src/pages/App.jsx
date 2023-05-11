import logo from './micromeros.png';
import Menu from '../components/Menu/Menu';
import { Fundo, Titulo} from "./style.js";



function App() {
  return (
    <Fundo>
      <center>
      <Menu />
      <header className="App-header">
        <Titulo>Mircromeros </Titulo>
        
        <img src={logo} className="App-logo" alt="logo" height={300} />
        
      </header>
      </center>
    </Fundo>
  );
}

export default App;
