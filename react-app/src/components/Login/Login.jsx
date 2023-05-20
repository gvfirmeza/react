import { Botao, DivPrincipal, Input, BotaoVerSenha} from './style_entra';
import { Titulo } from '../../pages/style';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const usuario = 'Gust';
  const senha = "piroca123";
  var chances = 5

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

// function testaLogin(){
//   let user = document.getElementById('inputEmail').value;
//   let password = document.getElementById('inputSenha').value;

//   if(user.toLowerCase() == usuario.toLowerCase() && password == senha){
//     handleRedirect();
//   } else{
//     window.alert('Senha ou Usuário incorretos. Tente Novamente');
//     chances -= 1;
//   }

//   if(chances == 0){
//     document.getElementById('botaoLogin').disabled = true;
//   }

// }

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

        <Botao id='botaoLogin' type="sumbit" onClick={handleRedirect}>
          Logar
        </Botao>
      </DivPrincipal>
    </>
  );
};

export default Login;

