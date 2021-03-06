import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
function App() {
  return (
    <div className="App">
      
      <div className="">
        <header className="App-header">
        
          <div className="presentation">
            <NavBar/>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
