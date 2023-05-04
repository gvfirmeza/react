import logo from './tubarao.png';
import Menu from '../components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <h2>TUBARÃO DOENTE</h2>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
