import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";
import {  DivCadastro, Fundo } from "./style_cadastro";
import { Titulo } from "./style";


const Cadastro1 = () => (
  <>  
  <Fundo>
    <Menu />
    <center>
    <Titulo>Cadastro de novo Usuário</Titulo>
    </center>
    <center>
      <DivCadastro>
        <form>
          
          <label for="Nome">Nome:</label>
            <input type="text" placeholder="Nome" name="name" />
          
          <label for="Sobrenomeltimo Nome">Sobrenome:</label>
            <input type="text" placeholder="Sobrenome" name="sobrenome" />
          <br />
          <label for="senha">Senha:</label>
          <input type="password" placeholder="Senha" name="senha" />
          
          <label for=" Confirme senha">Confirmar Senha:</label>
            <input
              type="password"
              placeholder="Confirme sua Senha"
              name="senha"
            />
          <br />
          <label for="email">Email:</label>
            <input type="email" placeholder="Email" name="email" />
          <label for="email">Confirmar Email:</label>
            <input type="email" placeholder="Confirmar Email" name="email" />
          <br />
          <label for="Setor">Setor:</label>
            <select>
              <option value="ADM">ADM</option>
              <option value="COMERCIAL">COMERCIAL</option>
              <option value="TECNOLOGIA">TECNOLOGIA</option>
            </select>
          
          <br />
          <button type="submit">CADASTRAR</button>
        </form>
        
      </DivCadastro>
    </center>
    </Fundo>
  </>
);

export default Cadastro1;
