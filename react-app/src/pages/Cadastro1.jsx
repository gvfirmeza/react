import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";
import {  DivCadastro, Fundo } from "./style_cadastro";



const Cadastro1 = () => (
  <>  
  <Fundo>
    <Menu />
    <center>
    <h1>Cadastro de novo Usuário</h1>
    </center>
    <center>
      <DivCadastro>
        <form>
          <label for="Nome">Digite seu Nome</label>
          <p>
            <input type="text" placeholder="Nome" name="name" />
          </p>
          <label for="Sobrenomeltimo Nome">Digite seu Sobrenome</label>
          <p>
            <input type="text" placeholder="Sobrenome" name="sobrenome" />
          </p>
          <label for="senha">Digite sua Senha</label>
          <p>
            <input type="password" placeholder="Senha" name="senha" />
          </p>
          <label for=" Confirme senha">Confirme sua Senha</label>
          <p>
            <input
              type="password"
              placeholder="Confirme sua Senha"
              name="senha"
            />
          </p>
          <label for="email">Digite seu Email</label>
          <p>
            <input type="email" placeholder="Email" name="email" />
          </p>
          <label for="Setor">Selecione o setor</label>

          <p>
            <select>
              <option value="ADM">ADM</option>
              <option value="COMERCIAL">COMERCIAL</option>
              <option value="TECNOLOGIA">TECNOLOGIA</option>
            </select>
          </p>
          

          <button type="submit">CADASTRAR</button>
        </form>
        
      </DivCadastro>
    </center>
    </Fundo>
  </>
);

export default Cadastro1;
