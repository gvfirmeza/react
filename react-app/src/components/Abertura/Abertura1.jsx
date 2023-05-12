import { DivAbertura } from "./style_abertura";

const Abertura1 = () => (

<DivAbertura>
        <form>
          <label for="Nome">Digite seu Nome</label>
            <input type="text" placeholder="Nome" name="name" />
          <label for="email">Digite seu Email</label>
            <input type="email" placeholder="Email" name="email" />
          <label for="Setor">Selecione o Setor</label>
          <br />
            <select>
              <option value="ADM">ADM</option>
              <option value="COMERCIAL">COMERCIAL</option>
              <option value="TECNOLOGIA">TECNOLOGIA</option>
            </select>
            <br />
          <label For="Descricao">Descreva o Problema:</label>
          <br />
          <textarea rows="7" col="30"></textarea>
          <br />
          <label For="Gravidade"> Urgência do Problema:</label>
          <br />
            <select>
              <option value="Pouco urgente">Sem Urgencia</option>
              <option value="Normal">Normal</option>
              <option value="Urgente">Urgente</option>
            </select>
            <br />
          <button type="submit">ENVIAR CHAMADO</button>
        </form>
        
      </DivAbertura>

);

export default Abertura1;