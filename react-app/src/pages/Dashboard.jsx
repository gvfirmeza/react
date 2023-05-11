import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";
import {  DivAbertura,  Fundo } from "./style_abertura";
import { Titulo } from "./style";



const Dashboard = () => (
  <>  
  <Fundo>
    <Menu />
    <center>
    <Titulo>Abertura de Chamado</Titulo>
    </center>
    <center>
      <DivAbertura>
        <form>
          <label for="Nome">Digite seu Nome</label>
          <p>
            <input type="text" placeholder="Nome" name="name" />
          </p>
          <label for="email">Digite seu Email</label>
          <p>
            <input type="email" placeholder="Email" name="email" />
          </p>
          <label for="Setor">Selecione o Setor</label>
          <p>
            <select>
              <option value="ADM">ADM</option>
              <option value="COMERCIAL">COMERCIAL</option>
              <option value="TECNOLOGIA">TECNOLOGIA</option>
            </select>
          </p>
          <label For="Descricao">Descreva o Problema:</label>
          <p>
            <textarea name="descricao" cols="20" rows="9" placeholder="Descrição do problema"></textarea>
          </p>
          <label For="Gravidade"> Urgência do Problema:</label>
          <p>
            <select>
              <option value="Pouco urgente">Sem Urgencia</option>
              <option value="Normal">Normal</option>
              <option value="Urgente">Urgente</option>
            </select>
          </p>
          <button type="submit">ENVIAR CHAMADO</button>
        </form>
        
      </DivAbertura>
    </center>
    </Fundo>
  </>
);

export default Dashboard;
