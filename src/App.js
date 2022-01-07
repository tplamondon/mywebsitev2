import React, { useRef, useState } from "react"
import "./App.scss"
import Intro from "./components/intro"
import Work from "./components/work"
import About from "./components/about"
import Contact from "./components/contact"

function App() {
  const [article, setArticle] = useState(0)

  const appContainor = useRef(null)

  function toggleArticle(e, articleToShow) {
    //at this moment, I can't figure out how to blur the background
    /*if(appContainor.current.classList.contains("blurImage")){
		appContainor.current.classList.remove("blurImage");
	}
	*/
    if (articleToShow == 0) {
      setArticle(0)
    }
    if (articleToShow === 1) {
      setArticle(1)
      //appContainor.current.classList.add("blurImage");
    } else if (articleToShow === 2) {
      setArticle(2)
    } else if (articleToShow === 3) {
      setArticle(3)
    } else if (articleToShow === 4) {
      setArticle(4)
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
            <span onClick={(event) => toggleArticle(event, 1)}>INTRO</span>
          </div>
          <div className="box">
            <span onClick={(event) => toggleArticle(event, 2)}>WORK</span>
          </div>
          <div className="box">
            <span onClick={(event) => toggleArticle(event, 3)}>ABOUT</span>
          </div>
          <div className="box">
            <span onClick={(event) => toggleArticle(event, 4)}>CONTACT</span>
          </div>
          {article != 0 && (
            <div>
              <span onClick={(event) => toggleArticle(event, 0)}>Home</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
