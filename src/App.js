import React, { useState} from 'react';
import './App.scss';
import Intro from './components/intro';

function App() {

  const [article, setArticle] = useState(0);

  function toggleIntro(e){
    if(article == 1){
      setArticle(0);
	  document.getElementById("App").classList.remove("blurImage");
    }
    else{
      setArticle(1);
	  document.getElementById("App").classList.add("blurImage");
    }
  }

  return (
    <div className="App">
      <div className='centreStuff'>
		{article===0 &&
        <div className='whiteBorder'>
          <h1>Thomas Plamondon</h1>
          <p>Welcome to my website, please see below for more information</p>
        </div>
}

        {article == 1 && <Intro />}

        <div className='gridLinks'>
          <div className='box'>
            <span onClick={toggleIntro}>INTRO</span>
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
