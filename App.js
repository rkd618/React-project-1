import React from "react";
import ReactDom from "react-dom";
const heading = React.createElement("h1", {id: "heading"}, "Hello World From React!");
const Paragraph = React.createElement("h1", {id: "Paragraph"}, "Rendering the wrong World!!");
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(Paragraph)