import React from "react";
import Sunny from "../assets/Sunny.svg"
import Rainy from "../assets/Rainy.svg"
import PartlyCloudy from "../assets/PartlyCloudy.svg"
import Cloudy from "../assets/Sunny.svg"




function WeatherCard({data}) {
  let item;
  if (data.forecast === "Sunny") {
    item = Sunny;
  } else if (data.forecast === "Rainy") {
    item = Rainy;
    } else if (data.forecast === 'Partly cloudy') {
      item = PartlyCloudy;
    } else if (data.forecast === "Cloudy") {
      item = Cloudy
    } else {
      item = null
    };
  

  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {item} alt="Card image cap" id = "icon"/>
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