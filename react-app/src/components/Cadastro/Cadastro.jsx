import { DivCadastro } from "./style_cadastro";

const Cadastro = () => (

<DivCadastro>
    <form>
        <label for="Nome">Nome:</label>
            <input type="text" placeholder="Nome" name="name" />
        <label for="Sobrenomeltimo Nome">Sobrenome:</label>
            <input type="text" placeholder="Sobrenome" name="sobrenome" />
        <br />
        <label for="senha">Senha:</label>
            <input type="password" placeholder="Senha" name="senha" />
        <label for=" Confirme senha">Confirme a Senha:</label>
            <input
                type="password"
                placeholder="Confirme sua Senha"
                name="senha"
            />
        <br />
        <label for="email">Email:</label>
            <input type="email" placeholder="Email" name="email" />
        <br /> 
        <label for="Setor">Selecione o setor:</label>

            <select>
                <option value="ADM">ADM</option>
                <option value="COMERCIAL">COMERCIAL</option>
                <option value="TECNOLOGIA">TECNOLOGIA</option>
            </select>
        <br />
        <button type="submit">CADASTRAR</button>
    </form>
</DivCadastro>

);

export default Cadastro;