import { Container, Descricao, Momento, Simbolo, Fundo } from "./style";


const Cartao = ( props ) => (
   
   <Container>
        <Simbolo>{props.simb}</Simbolo>
        <Descricao>
        
            | Nome de quem fez o chamado | Descrição do Chamado | Tempo que o chamado está aberto (00:00) | Status do Chamado ❌ - ⚠️ - ✅ 
        
        
        </Descricao>
        <Momento>{props.data}</Momento>
     
    </Container>
   
);

export default Cartao;