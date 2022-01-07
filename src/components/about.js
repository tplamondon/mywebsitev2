import React from "react";
import "../App.scss";

export default function About(props) {
  return (
    <div className="gridLinks3">
      <div className="box"></div>

      <div className="box bgColourGrey">
        <article>
          <h2>About</h2>
          <img src={require("../assets/pic01.jpg")} alt="Picture for article" />
          <div class="leftAlign">
            <p>
              This website was created using react. The repo for this website can be found <a href="https://github.com/tplamondon/mywebsitev2">here</a>
            </p>
            <p>Most images on this website were taken from the game Final Fantasy XIV</p>
          </div>
        </article>
      </div>

      <div className="box"></div>
    </div>
  );
}
