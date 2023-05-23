import { DivAbertura} from "./style_abertura";
import React from "react";



const Abertura1 = () => (
  
 
  <DivAbertura>
        <form>
          {/* nome*/} 
          <label for="Nome">Digite seu Nome</label>
          <br />
            <input type="text" placeholder="Nome" name="name" />
            <br />
          {/* email*/} 
          <label for="email">Digite seu Email</label>
          <br />
            <input type="email" placeholder="Email" name="email" />
            <br />
            {/* setor*/} 
          <label for="Setor">Selecione o Setor</label>
          <br />
            <select>
              <option value="ADM">ADM</option>
              <option value="COMERCIAL">COMERCIAL</option>
              <option value="TECNOLOGIA">TECNOLOGIA</option>
            </select>
            <br />
           {/* setor*/} 
          <label For="Descricao">Descreva o Problema:</label>
          <br />
          <textarea rows="7" col="30"></textarea>
          <br />
          {/* gravidade*/}  
          <label For="Gravidade"> Urgência do Problema:</label>
          <br />
            <select>
              <option value="Pouco urgente">Sem Urgencia</option>
              <option value="Normal">Normal</option>
              <option value="Urgente">Urgente</option>
            </select>
            <br />
            {/* botao*/} 
          <button  id="nc" type="submit" >ENVIAR CHAMADO</button>

        </form>
        
      </DivAbertura>

);
;
export default Abertura1;