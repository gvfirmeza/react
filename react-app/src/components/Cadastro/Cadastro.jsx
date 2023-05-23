import { DivCadastro } from "./style_cadastro";

const Cadastro = () => (

    <DivCadastro>
        <form>
            <label for="Nome">Nome Completo:</label>
            <br />
            <input type="text" placeholder="Nome" name="name" />
            <br />
            <label for="email">Email:</label>
            <br />
            <input type="email" placeholder="Email" name="email" />
            <br /> <br />

            <label for="Setor">Selecione o setor:</label>
            <br />

            <select>
                <option value="ADM">ADM</option>
                <option value="COMERCIAL">COMERCIAL</option>
                <option value="TECNOLOGIA">TECNOLOGIA</option>
            </select>

            <br /> <br />

            <label for="senha">Senha:</label>
            <br />
            <input type="password" placeholder="Senha" name="senha" />
            <br />
            <label for=" Confirme senha">Confirmar Senha:</label>
            <br />
            <input
                type="password"
                placeholder="Confirme sua Senha"
                name="senha"
            />
            <br /> <br />

            <center>
                <button type="submit">CADASTRAR</button>
            </center>

        </form>
    </DivCadastro>

);

export default Cadastro;