import React from "react";
import Sunny from "../assets/Sunny.svg"
import Rainy from "../assets/Rainy.svg"
import PartlyCloudy from "../assets/PartlyCloudy.svg"
import Cloudy from "../assets/Sunny.svg"

function Location({data, location, setLocation}) {
  let myLocation = data.find(e => e.city === (location))
  let item;
  if (myLocation.forecast === "Sunny") {
    item = Sunny;
  } else if (myLocation.forecast === "Rainy") {
    item = Rainy;
    } else if (myLocation.forecast === 'Partly cloudy') {
      item = PartlyCloudy;
    } else if (myLocation.forecast === "Cloudy") {
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
                <h3 className="card-title">{myLocation.city}</h3>
                <h5 className="card-text">{myLocation.temperature}</h5>
                <h5 className="card-text">{myLocation.forecast}</h5>
            </div>
        </div>
      );
}

export default Location