import {MeuP, MinhaDiv} from "./estilo";

const MeuComponente = (props) => (
<MinhaDiv> 
    <MeuP>{props.texto}</MeuP> 
</MinhaDiv>
);

export default MeuComponente;