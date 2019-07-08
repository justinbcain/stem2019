import React from "react";
import { render } from "react-dom";
import Routes from "./config/Routes";

function Stem2019() {
  return <Routes />;
}

render(<Stem2019 />, document.getElementById("index"));
