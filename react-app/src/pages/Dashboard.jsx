import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import { Fundo, Titulo } from "./style";
import logo from "../pages/micromeros.png";
import dash from "../pages/dash.png"

const Dashboard = () => (
  <>
    <Fundo>
      <Menu />
      <center><img src={logo} className="App-logo" alt="logo" height={100}  zindex= {2}/>
      <Titulo>Dashboard</Titulo>
       <img src={dash} />
       </center>
    </Fundo>
    <Footer></Footer>
  </>
);

export default Dashboard;
