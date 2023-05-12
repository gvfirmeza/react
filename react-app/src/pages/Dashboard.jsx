import Menu from "../components/Menu/Menu";
import { Fundo, Titulo } from "./style";
import logo from "../pages/micromeros.png";

const Dashboard = () => (
  <Fundo>
    <Menu />
    <center><img src={logo} className="App-logo" alt="logo" height={100}  zindex= {2}/></center>
    <Titulo>Dashboard</Titulo>
    <p> OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO </p>
  </Fundo>
);

export default Dashboard;
