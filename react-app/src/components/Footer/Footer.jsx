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
                    <p>.</p>
                    <p>Tubarão Doente</p>
                    <p>Todos os direitos reservados ©</p>
                </Texto>
            </Bloco>
        </Container>
    </Footer1>

);

export default Footer;