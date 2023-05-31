import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import { Fundo, Titulo } from "./style";
import logo from "../pages/micromeros.png";
import Bubu from "../components/MenuBubu/Bubu";
import Darius from "../components/Dashboard/Darius";
import DariusR from "../components/Dashboard-r/DariusR";


function Dashboard () {
  
  return (
  <>
    <Fundo>
      <Menu />
      <Bubu />
      <center><img src={logo} className="App-logo" alt="logo" height={100}  zindex= {2}/></center>
      <Titulo>Dashboard</Titulo>
      <center>
        <Darius />
        <DariusR />
      </center>
    </Fundo>
    <Footer></Footer>
  </>
  )

}

export default Dashboard;
