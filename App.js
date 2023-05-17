import React from 'react';
// Import data and WeatherCard here
import cities from './data';
import WeatherCard from './components/WeatherCard';
import { useState } from 'react';
import Location from './components/Location';
import Form from './components/Form';

function App() {

    const [location, setLocation] = useState("Rome");

    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                {/* Render components here */}
                < Form location={location} setLocation={setLocation}/>
                < Location location={location} setLocation={setLocation} data={cities}/>
                {cities.map((data) => {
                    return <WeatherCard data={data} />
                })}
                

            </div>
            
        </>
    )
}

export default App;