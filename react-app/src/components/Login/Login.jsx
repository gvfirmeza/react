import { Botao, DivPrincipal, Input, BotaoVerSenha } from './style_entra';
import { Titulo } from '../../pages/style';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const adm = 'ADM';
  const senhaadm = "123";
  const func = "USER";
  const senha = "123";

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/Abertura');
  };

  const handleRedirectFunc = () => {
    navigate('/AberturaU');
  };

  const mostraSenha = () => {
    var senha = document.getElementById("inputSenha");
    if (senha.type === "password") {
      senha.type = "text";
    } else {
      senha.type = "password";
    }
  }

  function testaLogin() {
    let user = document.getElementById('inputEmail').value;
    let password = document.getElementById('inputSenha').value;

    // LOGIN ADM
    if (user.toLowerCase() == adm.toLowerCase() && password == senhaadm) {
      handleRedirect();
    }

    // LOGIN FUNCIONÁRIOS

    if (user.toLowerCase() == func.toLowerCase() && password == senha) {
      handleRedirectFunc();
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

        <Botao id='botaoLogin' type="sumbit" onClick={testaLogin}>
          Logar
        </Botao>
      </DivPrincipal>
    </>
  );
};

export default Login;

