import Footer from '../components/Footer/Footer';
import { Fundo } from "../components/Cartao/style";
import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";
import { Titulo } from "./style";
import logo from "../pages/micromeros.png";
import dados from "../data/informacoes.json";


const Chamado = () => (
    <>
   <Fundo>
    <Menu />
    <  center><img src={logo} className="App-logo" alt="logo" height={100}  zindex= {2}/></center>
    <center><Titulo>Planilha de Chamados</Titulo></center>
   
    <br />
    
   {
    dados.map(
        (ele, ind) => (
           <Cartao
                key={ind}
                simb={ele.simbolo}
                descricao={ele.descricao}
                setor={ele.setor}
                data={ele.data}
           /> 
        )
    )
}
   
    </Fundo>

    <Footer></Footer>
    
    </>
    
    
);

export default Chamado ;