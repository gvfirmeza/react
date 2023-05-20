import { Botao, DivPrincipal, Input } from './style_entra';
import { Titulo } from '../../pages/style';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/Abertura');
  };

  return (
    <>
      <center>
        <Titulo>Fazer o Login</Titulo>
      </center>
      <DivPrincipal>
        <label htmlFor="email">Digite seu E-mail</label>
        <p>
          <Input type="email" placeholder="email" name="email" required />
        </p>
        <label htmlFor="senha">Digite sua Senha</label>
        <p>
          <Input type="password" placeholder="senha" name="senha" required />
        </p>
        <Botao type="button" onClick={handleRedirect}>
          Logar
        </Botao>
      </DivPrincipal>
    </>
  );
};

export default Login;

