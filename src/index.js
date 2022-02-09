import React from "react";
import ReactDOM from "react-dom";

//custom style to be used outide tag
const customStyle = {
  color: "green",
  fontSize: "5rem",
  border: "3px solid black"
};
//custom style can change with js
customStyle.color = "blue";

ReactDOM.render(
  <div>
    {/* inline css in tag */}
    <h1 style={{ color: "red" }}>Hello World!</h1>
    {/* inline css outside tag */}
    <h1 style={customStyle}>Hello World!</h1>
  </div>,
  document.getElementById("root")
);
