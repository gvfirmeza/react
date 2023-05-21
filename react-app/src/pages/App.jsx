import logo from './micromeros.png';
import { Fundo, Titulo, Ancora} from "./style.js";
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <>
    <Fundo>
      <center>
      <br />
      <br />
      <br />
      <header className="App-header">
        <Titulo>Microméros</Titulo>
        <img src={logo} className="App-logo" alt="logo" height={300}  />
        <Ancora href="./Entra"> ENTRAR </Ancora>
      </header>
      </center>
    </Fundo>
    <Footer /> 
    </>

  );
}

export default App;
