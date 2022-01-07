import React from "react";
import "../App.scss";

export default function Work(props) {
  return (
    <div className="gridLinks3">
      <div className="box"></div>

      <div className="box bgColourGrey">
        <article id="work">
          <h2 class="major">Work</h2>
          <img src={require("../assets/pic02.jpg")} alt="Picture for article" />
          <span>
            My github can be found <a href="https://github.com/tplamondon">here</a>
          </span>
          <div class="leftAlign">
            <h4>2022</h4>
            <ul>
              <li>
                <a href="https://github.com/tplamondon/mywebsitev2">V2 of my website</a>
              </li>
            </ul>
            <h4>2021</h4>
            <ul>
              <li>
                <a href="https://github.com/tplamondon/5e-CR-Adjuster">5E CR scaler/adjuster</a>
              </li>
              <li>
                <a href="https://www.angelanswering.com/">April 2021 - October 2021: Working as an operator at Angel Answering Service</a>
              </li>
              <li>
                <a href="https://github.com/tplamondon/eilacogs">Eilacogs</a>
              </li>
              <li>
                <a href="https://github.com/SFUAnime/Ren">Ren discord bot for SFU anime</a>
              </li>
            </ul>
            <h4>2020</h4>
            <ul>
              <li>
                <a href="https://www.vancouverdatajam.ca/">Vancouver Datajam website 2020</a>
              </li>
            </ul>
            <h4>2019</h4>
            <ul>
              <li>
                <a href="https://github.com/nyhchang/NicoBot">Nico discord.net bot</a>
              </li>
              <li>
                <a href="https://github.com/tplamondon/OJ-Board-Creator">100% Orange Juice Creator</a>
              </li>
            </ul>
          </div>
        </article>
      </div>

      <div className="box"></div>
    </div>
  );
}
