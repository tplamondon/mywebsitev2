import React, { useRef, useState } from "react";
import "./App.scss";
import Intro from "./components/intro";
import Work from "./components/work";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  const [article, setArticle] = useState(0);

  const appContainor = useRef(null);
  const introButton = useRef(null);
  const workButton = useRef(null);
  const aboutButton = useRef(null);
  const contactButton = useRef(null);
  const homeButton = useRef(null);

  function addBlueText(e, articleButton) {
    //at this moment, I can't figure out how to blur the background
    /*if(appContainor.current.classList.contains("blurImage")){
		appContainor.current.classList.remove("blurImage");
	}
	*/
    if (articleButton == 0) {
      homeButton.current.classList.add("blueText");
    }
    if (articleButton === 1) {
      introButton.current.classList.add("blueText");
    } else if (articleButton === 2) {
      workButton.current.classList.add("blueText");
    } else if (articleButton === 3) {
      aboutButton.current.classList.add("blueText");
    } else if (articleButton === 4) {
      contactButton.current.classList.add("blueText");
    }
  }

  function removeBlueText(e, articleButton) {
    //at this moment, I can't figure out how to blur the background
    /*if(appContainor.current.classList.contains("blurImage")){
		appContainor.current.classList.remove("blurImage");
	}
	*/
    if (articleButton == 0) {
      homeButton.current.classList.remove("blueText");
    }
    if (articleButton === 1) {
      introButton.current.classList.remove("blueText");
    } else if (articleButton === 2) {
      workButton.current.classList.remove("blueText");
    } else if (articleButton === 3) {
      aboutButton.current.classList.remove("blueText");
    } else if (articleButton === 4) {
      contactButton.current.classList.remove("blueText");
    }
  }
  function toggleArticle(e, articleToShow) {
    //at this moment, I can't figure out how to blur the background
    /*if(appContainor.current.classList.contains("blurImage")){
		appContainor.current.classList.remove("blurImage");
	}
	*/
    if (articleToShow == 0) {
      setArticle(0);
    }
    if (articleToShow === 1) {
      setArticle(1);
      //appContainor.current.classList.add("blurImage");
    } else if (articleToShow === 2) {
      setArticle(2);
    } else if (articleToShow === 3) {
      setArticle(3);
    } else if (articleToShow === 4) {
      setArticle(4);
    }
  }

  return (
    <div id="appContainor" ref={appContainor}>
      <div className="centreStuff">
        {article === 0 && (
          <div className="whiteBorder">
            <h1>Thomas Plamondon</h1>
            <p>Welcome to my website, please see below for more information</p>
          </div>
        )}

        {article == 1 && <Intro />}
        {article == 2 && <Work />}
        {article == 3 && <About />}
        {article == 4 && <Contact />}

        <div className="gridLinks">
          <div className="box">
            <span ref={introButton} onClick={(event) => toggleArticle(event, 1)} onMouseOver={(event) => addBlueText(event, 1)} onMouseOut={(event) => removeBlueText(event, 1)}>
              INTRO
            </span>
          </div>
          <div className="box">
            <span ref={workButton} onClick={(event) => toggleArticle(event, 2)} onMouseOver={(event) => addBlueText(event, 2)} onMouseOut={(event) => removeBlueText(event, 2)}>
              WORK
            </span>
          </div>
          <div className="box">
            <span ref={aboutButton} onClick={(event) => toggleArticle(event, 3)} onMouseOver={(event) => addBlueText(event, 3)} onMouseOut={(event) => removeBlueText(event, 3)}>
              ABOUT
            </span>
          </div>
          <div className="box">
            <span ref={contactButton} onClick={(event) => toggleArticle(event, 4)} onMouseOver={(event) => addBlueText(event, 4)} onMouseOut={(event) => removeBlueText(event, 4)}>
              CONTACT
            </span>
          </div>
          {article != 0 && (
            <div className="box boxTake2">
              <span ref={homeButton} onClick={(event) => toggleArticle(event, 0)} onMouseOver={(event) => addBlueText(event, 0)} onMouseOut={(event) => removeBlueText(event, 0)}>
                HOME
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
