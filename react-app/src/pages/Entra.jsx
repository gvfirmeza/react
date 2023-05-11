import Menu from '../components/Menu/Menu';
import { Botao, DivPrincipal, Input } from './style_entra';
import { Titulo, Fundo } from './style';
import Login from '../components/Login/Login';

function Entra() {
  return (
    <div className="Entra">
      <Fundo>
        <Menu />
        <Login />
      </Fundo>

    </div>
  );
}

export default Entra;
