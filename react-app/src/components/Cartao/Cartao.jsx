import { Container, Descricao, Momento, Simbolo, Fundo } from "./style";

const Cartao = (props) => (

    <Container>
        <Simbolo>{props.simb}</Simbolo>
        <Descricao>{props.descricao}</Descricao>
        <Momento>{props.data}</Momento>

    </Container>
    
);

export default Cartao;