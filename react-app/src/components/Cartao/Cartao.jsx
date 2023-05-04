import { Container, Descricao, Momento, Simbolo } from "./style";


const Cartao = ( props ) => (
    <Container>
        <Simbolo>{props.simb}</Simbolo>
        <Descricao>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa nam soluta, accusantium excepturi hic repellat esse dolore voluptatum sunt repellendus. Vero explicabo possimus, voluptatibus reprehenderit fugiat minus labore quis ratione.
        </Descricao>
        <Momento>{props.data}</Momento>
    </Container>
);

export default Cartao;