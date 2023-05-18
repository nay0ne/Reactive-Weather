import React from "react";
import {iconHelper} from './IconHelper'

function WeatherCard({data}) {

  return (
    <div className = "card">
        <div className = "img-container">
          {/* link icon helper function to link icon from prop value city name */}
            <img className="card-img-top" src = {iconHelper(data)} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{data.city}</h3>
            <h5 className="card-text">{data.temperature}</h5>
            <h5 className="card-text">{data.forecast}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard
export default WeatherCard