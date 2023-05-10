import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";
import {  DivAbertura,  Fundo } from "./style_abertura";



const Abertura = () => (
  <>  
  <Fundo>
    <Menu />
    <center>
    <h1>Abertuda de Chamado</h1>
    </center>
    <center>
      <DivAbertura>
        <form>
          <label for="Nome">Digite seu Nome</label>
          <p>
            <input type="text" placeholder="name" name="name" />
          </p>
          <label for="email">Digite seu Email</label>
          <p>
            <input type="email" placeholder="email" name="email" />
          </p>
          <label for="Setor">Selecione o setor</label>
          <p>
            <select>
              <option value="ADM">ADM</option>
              <option value="COMERCIAL">COMERCIAL</option>
              <option value="TECNOLOGIA">TECNOLOGIA</option>
            </select>
          </p>
          <label For="Descricao">Descreva o Problema:</label>
          <p>
            <input type="text" placeholder="descricao" name="descricao" />
            
          </p>
          <label For="Gravidade"> Urgência do Problema:</label>
          <p>
            <select>
              <option value="Pouco urgente">Pouco urgente</option>
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

export default Abertura;
