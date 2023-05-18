import React from "react";
import {iconHelper} from './IconHelper'

function Location({data, location, setLocation}) {
  let myLocation = data.find(e => e.city === (location))
  
    return (
        <div className = "card">
            <div className = "img-container">
                <img className="card-img-top" src = {iconHelper(myLocation)} alt="Card image cap" id = "icon"/>
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