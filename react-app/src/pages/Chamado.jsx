import { Fundo } from "../components/Cartao/style";
import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";
import { Titulo } from "./style";
<<<<<<< HEAD
import Footer from "../components/Footer/Footer";
=======
import logo from "../pages/micromeros.png";
>>>>>>> 437b1bb83cedf886ea59e912a69a209cba4e7bab

const Chamado = () => (
    <>
   <Fundo>
    <Menu />
    <  center><img src={logo} className="App-logo" alt="logo" height={100}  zindex= {2}/></center>
    <center><Titulo>Planilha de Chamados</Titulo></center>
   
    <br />
    
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
    
    <Footer></Footer>

    </>
    
    
);

export default Chamado ;