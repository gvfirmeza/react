import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import { Fundo, Titulo } from "./style";
import logo from "../pages/micromeros.png";
import Bubu from "../components/MenuBubu/Bubu";
import Darius from "../components/Dashboard/Darius";

function Dashboard () {
  
  return (
  <>
    <Fundo>
      <Menu />
      <Bubu />
      <center>
        <Darius />
      </center>
    </Fundo>
    <Footer></Footer>
  </>
  )

}

export default Dashboard;
