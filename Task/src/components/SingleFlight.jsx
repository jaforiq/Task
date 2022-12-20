import React from "react";
import './SingleFlight.css';

function SingleFlight({ flight, key }) {
  return (
    <tr>
      <td>
        {flight.itineraries[0].segments.map((segment) => (
          <h6 key={segment.carrierCode + segment.aircraft}>
            {segment.carrierCode} {segment.aircraft}
          </h6>
        ))}
      </td>

      <td>
        {flight.itineraries[0].segments.map((segment) => (
          <h6 key={segment.flightNumber}>{segment.flightNumber}</h6>
        ))}
      </td>
      <td>
        {flight.class[0].map((singleClass) => (
          <h6>{singleClass}</h6>
        ))}
      </td>
      <td>
        {flight.fareBasis[0].map((fare) => (
          <h6>{fare}</h6>
        ))}
      </td>
      <td>
        {flight.itineraries[0].segments.map((segment) => (
          <h6>
            {segment.departure.iataCode} - {segment.arrival.iataCode}
          </h6>
        ))}
      </td>
      <td>
        {flight.itineraries[0].segments.map((segment) => (
          <h6>{segment.departure.at}</h6>
        ))}
      </td>
      <td>
        {flight.itineraries[0].segments.map((segment) => (
          <h6>{segment.arrival.at}</h6>
        ))}
      </td>
      <td>
        <h6>{flight.itineraries[0].duration}</h6>
      </td>
      <td>
        <h6>{flight.price}</h6>
        <button class="btn sc-btn">SELECT</button>
      </td>
    </tr>
  );
}

export default SingleFlight;
