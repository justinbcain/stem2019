import React from "react";
import { Link } from "react-router-dom";

function Response() {
  return (
    <div>
      <p>Response form goes here</p>
      <Link to="/review">Go to Review</Link>
    </div>
  );
}

export default Response;
