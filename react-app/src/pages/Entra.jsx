import Menu from '../components/Menu/Menu';
import { DivPrincipal } from './style_entra';

function Entra() {
  return (
    <div className="Entra">
      <Menu />
      <header className="App-header">
        <h1>Faça seu Login</h1>
        <DivPrincipal>
            <label for="email">Digite seu E-mail</label>
            <p><input type="text" placeholder='email' name="email"/></p>
            <label for="senha">Digite sua Senha</label>
            <p><input type="text" placeholder='senha' name="senha"/></p>
        </DivPrincipal>
      </header>
    </div>
  );
}

export default Entra;
