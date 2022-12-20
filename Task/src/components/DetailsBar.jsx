import React, { useState } from "react";
import flightOffer from "../data/data.json";
import SingleFlight from "./SingleFlight";

function DetailsBar(props) {
  const [flights, setFlights] = useState(flightOffer.flightOffer);
  // console.log(flights)
  return (
    <div>
      <h4>Data parsed successfully</h4>
      <table Class="table table-striped table-hover">
        <thead>
          <tr>
            <th>FLIGHT</th>
            <th>AIRCRAFT</th>
            <th>CLASS</th>
            <th>FARE</th>
            <th>ROUTE</th>
            <th>DEPARTURE</th>
            <th>ARRIVAL</th>
            <th>DURATION</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, index) => (
            <SingleFlight flight={flight} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DetailsBar;
