import React from "react";
import sunny from "../assets/Sunny.svg"
import rainy from "../assets/Rainy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"
import cloudy from "../assets/Sunny.svg"


function WeatherCard({data}) {
  
  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {sunny} alt="Card image cap" id = "icon"/>
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
export default  WeatherCard