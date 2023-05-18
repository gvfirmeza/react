import Menu from "../components/Menu/Menu";
<<<<<<< HEAD
import Cartao from "../components/Cartao/Cartao";
import {  DivAbertura,  Fundo } from "./style_abertura";
import { Titulo } from "./style";
import Footer from "../components/Footer/Footer";

const Dashboard = () => (
  <>
    <Fundo>
      <Menu />
      <Titulo>Dashboard</Titulo>
      <p> OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO </p>
    </Fundo>
    <Footer></Footer>
  </>

  
=======
import { Fundo, Titulo } from "./style";
import logo from "../pages/micromeros.png";

const Dashboard = () => (
  <Fundo>
    <Menu />
    <center><img src={logo} className="App-logo" alt="logo" height={100}  zindex= {2}/></center>
    <Titulo>Dashboard</Titulo>
    <p> OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO </p>
  </Fundo>
>>>>>>> 437b1bb83cedf886ea59e912a69a209cba4e7bab
);

export default Dashboard;
