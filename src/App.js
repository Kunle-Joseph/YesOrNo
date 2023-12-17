import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState, button, text } from "react";

function App() {
  const [saidYes, setSaidYes] = useState(false);
  const [headerText, setHeaderText] = useState(
    "Do you wanna go out with me hehe"
  );
  const [imgLink, setImgLink] = useState(
    "https://media.giphy.com/media/LnKonfpQ44fNvuGLkA/giphy.gif"
  );

  function onClick() {
    setSaidYes(true);
    setHeaderText("Yippie!!!!");
    setImgLink(
      "https://media3.giphy.com/media/dyiaslUpT2homZbw7W/giphy.gif?cid=ecf05e470uiylfoulh451kzzzi3nusu2z1lvovbytdmv6ixn&ep=v1_gifs_related&rid=giphy.gif&ct=s"
    );
  }

  function moveButton() {
    var x =
      Math.random() *
      (window.innerWidth - document.getElementById("noButton").offsetWidth);
    var y =
      Math.random() *
      (window.innerHeight - document.getElementById("noButton").offsetHeight);
    document.getElementById("noButton").style.left = `${x}px`;
    document.getElementById("noButton").style.top = `${y}px`;
  }

  return (
    <div className="App">
      <div>
        <h1 className="header_text">{headerText}</h1>
      </div>
      <div className="gif_container">
        <img className="gif" src={imgLink} alt="Cute animated illustration" />
      </div>
      <div className="buttons">
        <button className="btn" id="yesButton" onClick={onClick}>
          Yes
        </button>
        <button
          className="btn"
          id="noButton"
          onMouseOver={moveButton}
          onClick={moveButton}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default App;
