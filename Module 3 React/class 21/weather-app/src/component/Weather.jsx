import axios from "axios";
import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null)

  const weatherFetch = async (e) => {
    e.preventDefault();
    console.log(city);
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6264c2af55653a7b45fcff5bd1cabf4e&units=metric`
          );
          console.log(response);
          setError("")
          setWeather(response.data);
          console.log("weather==>", weather);
          setCity('')
    } catch (error) {
        setError('Please Enter a correct city name')
        setWeather(null)
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-400 py-8">
      <div className=" max-w-2xl  bg-blue-300 mx-auto shadow-lg rounded-lg">
        <h1 className="text-center font-bold text-blue-700 py-4 text-2xl">
          Weather App
        </h1>

        <form onSubmit={weatherFetch} className="flex gap-2 p-2 ">
          <input
          value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-grow outline-none p-2 rounded-lg bg-blue-200 mb-8"
            type="text"
            placeholder="Enter a city..."
          />
          <button
            type="submit"
            className="bg-blue-600 rounded-lg px-6 text-white hover:bg-blue-900 mb-8"
          >
            Search
          </button>
        </form>

        {
            error && <p className="text-red-500 text-center font-bold">
                {error}
            </p>
        }

        {weather && (
          <div className="">
            <h1 className="text-center text-2xl font-bold text-blue-100">
              {weather?.name}
            </h1>
            <h1 className="text-center text-2xl font-bold text-blue-100">
              {Math.round(weather.main.temp)}°c
            </h1>
            <div className=" flex justify-center">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt=""
              />
            </div>
            <div className="flex gap-12 justify-center p-4">
              <div className="h-[120px] w-[100px] bg-blue-200 rounded-lg shadow-sm">
                <h1 className="text-xl text-center text-blue-400">humidity</h1>
                <p className="mt-4 text-xl text-center text-blue-400">{weather.main.humidity}</p>
              </div>
              <div className="h-[120px] w-[100px] bg-blue-200 rounded-lg shadow-sm">
                <h1 className="text-xl text-center text-blue-400">Pressure</h1>
                <p className="mt-4 text-xl text-center text-blue-400">{weather.main.sea_level
                }</p>
              </div>
              <div className="h-[120px] w-[100px] bg-blue-200 rounded-lg shadow-sm">
                <h1 className="text-xl text-center text-blue-400">Sea Level</h1>
                <p className="mt-4 text-xl text-center text-blue-400">{weather.main.humidity}</p>
              </div>
            </div>
          </div>
        )}

        {/* {weather ? (
          <div className="h-[200px] border-2 border-red-500">
            <h1 className="text-center text-2xl font-bold text-blue-100">
              {weather?.name}
            </h1>
          </div>
        ) : (
          <></>
        )} */}
      </div>
    </div>
  );
};

export default Weather;
