import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='centreStuff'>
        <div className='whiteBorder'>
          <h1>Thomas Plamondon</h1>
          <p>Welcome to my website, please see below for more information</p>
        </div>

        <div className='gridLinks'>
          <div className='box'>
            INTRO
          </div>
          <div className='box'>
            WORK
          </div>
          <div className='box'>
            ABOUT
          </div>
          <div className='box'>
            CONTACT
          </div>
        </div>
      </div>
      

      {/* 
      <header className="App-header">
        <h1>Welcome to my website</h1>
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
      </header>
      */}
    </div>
  );
}

export default App;
