import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import { Fundo, Titulo } from "./style";
import logo from "../pages/micromeros.png";
import obra from "../pages/work-in-progress.png"
import Bubu from "../components/MenuBubu/Bubu";

const Dashboard = () => (
  <>
    <Fundo>
      <Menu />
      <Bubu />
      <center><p><img src={logo} className="App-logo" alt="logo" width={100} zindex={2} /></p>
        <Titulo>Dashboard</Titulo>
        <p><img src={obra} width={400} /></p>
      </center>
    </Fundo>
    <Footer></Footer>
  </>
);

export default Dashboard;
