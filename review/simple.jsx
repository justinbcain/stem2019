import React from "react";
import { Link } from "react-router-dom";

function Review() {
  return (
    <div>
      <p>Review form goes here</p>
      <Link to="/response">Go to Response</Link>
    </div>
  );
}

export default Review;
