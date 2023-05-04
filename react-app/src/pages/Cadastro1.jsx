import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";
import { DivCadastro } from "./style_cadastro";

const Cadastro1 = () => (
  <>
    <Menu />
    <center>
    <h1>Cadastro de novo usuario</h1>
    </center>
    <center>
      <DivCadastro>
        <form>
          <label for="Nome">Digite seu Nome</label>
          <p>
            <input type="text" placeholder="name" name="name" />
          </p>
          <label for="Sobrenomeltimo Nome">Digite seu Sobrenome</label>
          <p>
            <input type="text" placeholder="sobrenome" name="sobrenome" />
          </p>
          <label for="senha">Digite sua Senha</label>
          <p>
            <input type="password" placeholder="senha" name="senha" />
          </p>
          <label for=" Confirme senha">Confirme sua Senha</label>
          <p>
            <input
              type="password"
              placeholder="Confirme sua senha"
              name="senha"
            />
          </p>
          <label for="email">Digite seu Email</label>
          <p>
            <input type="email" placeholder="email" name="email" />
          </p>
          <label for="Setor">Selecione o setor</label>

          <p><select>
            <option value="ADM">ADM</option>
            <option value="COMERCIAL">COMERCIAL</option>
            <option value="TECNOLOGIA">TECNOLOGIA</option>
          </select>
          </p>

          <button type="submit">CADASTRAR</button>
        </form>
      </DivCadastro>
    </center>
  </>
);

export default Cadastro1;
