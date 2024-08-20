import React, { useState, useEffect, useRef } from "react";

// Import all the icons for the weather app
import Search_icon from "../assets/search.png";
import Clear_icon from "../assets/clear.png";
import Cloud_icon from "../assets/cloud.png";
import Snow_icon from "../assets/snow.png";
import Rain_icon from "../assets/rain.png";
import Drizzle_icon from "../assets/drizzle.png";
import Wind_icon from "../assets/wind.png";
import Humidity_icon from "../assets/humidity.png";
import Loading_gif from "../assets/loading.gif"; // Import the loading GIF

const Weather_App = () => {
  const [DataWeather, setDataWeather] = useState(null); // Initialize with null to easily check if data exists
  const [isLoading, setIsLoading] = useState(false); // State to track loading
  const inputRef = useRef();

  const allIcons = {
    "01d": Clear_icon,
    "01n": Clear_icon,
    "02d": Cloud_icon,
    "02n": Cloud_icon,
    "03d": Cloud_icon,
    "03n": Cloud_icon,
    "04d": Drizzle_icon,
    "04n": Drizzle_icon,
    "09d": Rain_icon,
    "09n": Rain_icon,
    "10d": Rain_icon,
    "10n": Rain_icon,
    "13d": Snow_icon,
    "13n": Snow_icon,
  };

  const api_key = "60589b2cd5f1aa6a99f36891a39d0292";

  const searchWeather = async (city) => {
    setIsLoading(true); // Start loading
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
      const response = await fetch(url);
      const data = await response.json();
      
      const temperatureCelsius = Math.floor(data.main.temp - 273.15);
      const icon = allIcons[data.weather[0].icon] || Clear_icon;

      setDataWeather({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: temperatureCelsius,
        location: data.name,
        icons: icon,
      });
    } catch (error) {
      alert("Enter a correct city name  ")
      console.error("Error fetching weather data: ", error);
    }
     finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <>
      <div className="max-w-[350px] md:max-w-[400px] bg-blue-400 rounded-2xl m-auto mt-3 [50px] p-3">
        {/* search box */}
        <div className="flex items-center justify-around pr-2 pt-3">
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter a city"
            className="p-3 px-5 max-w-[80%] md:w-[80%] md:text-[18px] text-[15px] md:p-5 rounded-full outline-none border-none"
          />
          <button
            className="bg-white p-3 rounded-full md:p-5"
            onClick={() => searchWeather(inputRef.current.value)}
          >
            <img src={Search_icon} alt="Search" className="md:w-[25px]" />
          </button>
        </div>

        {/* Loading indicator */}
        {isLoading && (
          <div className="flex justify-center items-center my-5">
            <img src={Loading_gif} alt="Loading..." className="max-w-[100px]"/>
          </div>
        )}

        {/* Weather data display */}
        {DataWeather && !isLoading && (
          <>
            <div className="flex justify-center items-center flex-col">
              <div>
                <img src={DataWeather.icons} alt="Weather Icon" className="w-full"/>
              </div>
              <div className="text-white text-center">
                <h2 className="text-[45px] md:text-[70px] font-bold">{DataWeather.temperature}°C</h2>
                <h3 className="text-[25px]">{DataWeather.location}</h3>
              </div>
            </div>

            <div className="flex justify-between items-center px-5 my-5 text-white">
              <div className="text-center">
                <img src={Humidity_icon} alt="Humidity Icon" className="mx-auto" />
                <h2 className="text-[22px] md:text-[30px] font-bold">Humidity</h2>
                <p className="text-[20px]">{DataWeather.humidity}%</p>
              </div>
              <div className="text-center">
                <img src={Wind_icon} alt="Wind Icon" className="mx-auto" />
                <h2 className="text-[22px] md:text-[30px] font-bold">Wind</h2>
                <p className="text-[20px]">{DataWeather.windSpeed} km/h</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Weather_App;
