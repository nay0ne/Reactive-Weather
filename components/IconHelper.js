import React from 'react';
import Sunny from "../assets/Sunny.svg"
import Rainy from "../assets/Rainy.svg"
import PartlyCloudy from "../assets/PartlyCloudy.svg"
import Cloudy from "../assets/Sunny.svg"

export function iconHelper(i) {
    let item;
  if (i.forecast === "Sunny") {
    item = Sunny;
  } else if (i.forecast === "Rainy") {
    item = Rainy;
    } else if (i.forecast === 'Partly cloudy') {
      item = PartlyCloudy;
    } else if (i.forecast === "Cloudy") {
      item = Cloudy
    } else {
      item = null
    };
    return item;
  }