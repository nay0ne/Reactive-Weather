import React from 'react';
// Import data and WeatherCard here
import cities from './data';
import WeatherCard from './components/WeatherCard';

function App() {
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                {/* Render components here */}
                {cities.map((data) => {
                    return <WeatherCard data={data} />
                })}


            </div>
            
        </>
    )
}

export default App;