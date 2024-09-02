import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App">
        <Navbar/>
      </header>
      <body>
      <img src={logo} className="App-logo" alt="logo" />
      </body>
    </div>
  );
}

export default App;
