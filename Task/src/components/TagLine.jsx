import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TagLine.css"

function TagLine() {
  return (
    <div className="tg-wrapper">
      <h2 className='heading'>Master Price</h2>
      <hr />
      <div className="btn-group my-btn-group">
        <button type="button" className="btn">Round Trip</button>
        <button type="button" className="btn my-active">One Way</button>
        <button type="button" className="btn">Multi City</button>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default TagLine;