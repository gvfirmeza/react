import logo from "../../pages/micromeros.png";
import { Footer1, Texto, Container, Bloco } from "./style";

const Footer = () => (

    <Footer1>
        <Container>
            <Bloco>
                <img src={logo} className="App-logo" alt="logo" width={150} />
            </Bloco>
            <Bloco>
                <Texto>
                    <p>Tubarão Doente</p>
                    <p>Todos os direitos reservados ©</p>
                    <p>Tosba Trap</p>
                </Texto>
            </Bloco>
        </Container>
    </Footer1>

);

export default Footer;