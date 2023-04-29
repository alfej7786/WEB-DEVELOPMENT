//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

var currentTime = new Date().getHours();
var colors = {
  color: ""
};

var greeting;

if (currentTime < 12) {
  greeting = "Good Morning";
  colors.color = "red";
} else if (currentTime > 12 && currentTime < 18) {
  greeting = "Good Afternoon";
  colors.color = "green";
} else {
  greeting = "Good Evening";
  colors.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={colors}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
