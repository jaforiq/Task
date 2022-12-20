import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchOptions.css"
import DetailsBar from "./DetailsBar";


function SearchOptions() {
  const [active, setActive] = useState("false");

  return (
    <div className="sc-wrapper">
      <div className="sc-options">
        <form className="input-group">
          <input class="form-control mr" type="text" placeholder="LHR"/>
          <input class="form-control mr" type="text" placeholder="CDG"/>
          <input class="form-control mr" type="date"/>
          <select class="form-select mr" aria-label="Default select example">
            <option selected>Day</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select class="form-select mr" aria-label="Default select example">
            <option selected>Day+</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select class="form-select mr" aria-label="Default select example">
            <option selected>Any Time</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <span className="plus mr">+</span>
          <select class="form-select mr" aria-label="Default select example">
            <option selected>ADT</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select class="form-select mr" aria-label="Default select example">
            <option value="1" selected>1</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <span className="plus mr">+</span>
        </form>
      </div>
      <div className="line"></div>
      <div className="sc-checks">
        <div className="left">
            <form>
                <input id="extra-op" type="checkbox" />
                <label htmlFor="#extra-op">Extra Options</label>
            </form>
        </div>
        <div className="middle">
            <form>
                <label>Environment</label>
                <input id="dummy" name="env" type="radio" />
                <label htmlFor="#dummy">Dummy</label>
                <input id="pdt" name="env" type="radio" />
                <label htmlFor="#pdt">PDT</label>
            </form>
        </div>
        <div className="right">
          <button onClick={() => setActive("true")} className="btn my-btn">Seach</button>
        </div>
      </div>
      <div className="line"></div>
      <div>
        {active === "true" && <DetailsBar />}
      </div>
    </div>
  );
}

export default SearchOptions;