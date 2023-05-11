import { Fundo } from "../components/Cartao/style";
import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";
import { Titulo } from "./style";
import logo from './micromeros.png';

const Chamado = () => (
    <>
   <Fundo>
    <Menu />
    <center><Titulo>Planilha de Chamados</Titulo></center>
    
    
    
    <Cartao 
   
        
        simb={"📞"}
        data={"28/02/1884"}
        
    />
    <Cartao 
        simb={"📞"}
        data={"06/12/2021"}
    />
    <Cartao 
        simb={"📞"}
        data={"12/06/1999"}
    />
    <Cartao 
        simb={"📞"}
        data={"22/02/1877"}
    />
    <Cartao 
        simb={"📞"}
        data={"31/06/2001"}
    />
    </Fundo>
    
    </>
    
    
);

export default Chamado ;