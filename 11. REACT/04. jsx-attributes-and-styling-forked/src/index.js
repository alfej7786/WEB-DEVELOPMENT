import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Fav Fruites</h1>
    <div>
      <img src={img} alt="imgs"></img>
    </div>
  </div>,
  document.getElementById("root")
);
