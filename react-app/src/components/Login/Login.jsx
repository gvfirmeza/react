import { Botao, DivPrincipal, Input, BotaoVerSenha} from './style_entra';
import { Titulo } from '../../pages/style';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/Abertura');
  };

  const mostraSenha = () => {
    var senha = document.getElementById("inputSenha");
    if (senha.type === "password") {
      senha.type = "text";
    } else {
      senha.type = "password";
    }
}

  return (
    <>
      <center>
        <Titulo>Fazer o Login</Titulo>
      </center>
      <DivPrincipal>
        <label htmlFor="email">Digite seu E-mail</label>
        <p>
          <Input type="email" placeholder="email" name="email" id='inputEmail' required />
        </p>
        <label htmlFor="senha">Digite sua Senha</label>

        <p>
          <Input type="password" placeholder="senha" name="senha" id='inputSenha' required />
          <BotaoVerSenha type='button' onClick={mostraSenha}>.</BotaoVerSenha>       
        </p>

        <Botao type="button" onClick={handleRedirect}>
          Logar
        </Botao>
      </DivPrincipal>
    </>
  );
};

export default Login;

