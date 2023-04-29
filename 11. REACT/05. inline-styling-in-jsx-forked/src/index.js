import React from "react";
import ReactDOM from "react-dom";

const customerStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

ReactDOM.render(
  <h1 style={customerStyle}>Hello World!</h1>,
  document.getElementById("root")
);
