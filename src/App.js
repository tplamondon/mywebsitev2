import React, { useRef, useState} from 'react';
import './App.scss';
import Intro from './components/intro';

function App() {

  const [article, setArticle] = useState(0);

  const appContainor = useRef(null);

  function toggleIntro(e){
	//at this moment, I can't figure out how to blur the background
	/*if(appContainor.current.classList.contains("blurImage")){
		appContainor.current.classList.remove("blurImage");
	}
	*/
    if(article == 1){
      setArticle(0);
    }
    else{
      setArticle(1);
	  //appContainor.current.classList.add("blurImage");
    }
  }

  return (
    <div id="appContainor" ref={appContainor} >
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
    </div>
  );
}

export default App;
