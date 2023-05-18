import { Container, Descricao, Momento, Simbolo, Fundo, Setor } from "./style";


const Cartao = (props) => (

    <Container>
        <Simbolo>{props.simb}</Simbolo>
        <Descricao>{props.descricao}</Descricao>
        <Momento>{props.data}</Momento>
        <Setor>{props.setor}</Setor>
    </Container>
    
);

export default Cartao;