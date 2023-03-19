import React from "react";
import ReactDOM from "react-dom";

const fname = "Alfej";
const sname = "Savaya";
const num = 7;

ReactDOM.render(
  <div>
    <h1>Hello {`${fname} ${sname}`}!</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}!</p>
  </div>,
  document.getElementById("root")
);
