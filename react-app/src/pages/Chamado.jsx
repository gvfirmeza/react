import Footer from '../components/Footer/Footer';
import { Fundo } from "../components/Cartao/style";
import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";
import { Busca, Titulo } from "./style";
import logo from "../pages/micromeros.png";
import dados from "../data/informacoes.json";
import Bubu from "../components/MenuBubu/Bubu";
import Logout from '../components/Logout/Logout';
import { useState } from 'react';



const Chamado = () => {

    const [info, setInfo] = useState(dados)

    const filtra = (entrada) => {
        setInfo(dados.filter((e) => e.setor.toLowerCase().includes(entrada.toLowerCase()) || e.descricao.toLowerCase().includes(entrada.toLowerCase())));
    }

    return (

    <>
   <Fundo>

    <Logout />

    <Menu />
    
    <Bubu/>

    < center><img src={logo} className="App-logo" alt="logo" height={100}  zindex= {2}/></center>
    <center><Titulo>Planilha de Chamados</Titulo></center>
   
    <br />
    
    <center>
    <Busca type='text' onChange={(e) => filtra(e.target.value)}/>
    </center>

   {
    info.map(
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
    
    )
};

export default Chamado ;