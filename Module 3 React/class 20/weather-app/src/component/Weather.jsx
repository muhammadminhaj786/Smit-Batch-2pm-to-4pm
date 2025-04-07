import axios from 'axios'
import React, { useState } from 'react'

const Weather = () => {

    const API_key = "6264c2af55653a7b45fcff5bd1cabf4e"

    const [city, setCity] = useState()
    const [weather, setWeather] = useState(null)




    const weatherFetch = async (e) => {

        e.preventDefault()
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ API_key}`)
        setWeather(response.data)
        console.log(weather)
    }


    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-100 to-blue-400 py-8'>
            <div className=' max-w-2xl  bg-blue-300 mx-auto shadow-lg rounded-lg'>
                <h1 className='text-center font-bold text-blue-700 py-4 text-2xl'>
                    Weather App
                </h1>

                <form onSubmit={weatherFetch} className='flex gap-2 p-2 '>
                    <input onChange={(e) => setCity(e.target.value)} className='flex-grow outline-none p-2 rounded-lg bg-blue-200 mb-8' type="text" placeholder='Enter a city...' />
                    <button type='submit' className='bg-blue-600 rounded-lg px-6 text-white hover:bg-blue-900 mb-8'>Search</button>
                </form>

                {
                    weather && (
                        <div>
                            Box
                        </div>

                    )
                }
            </div>
        </div>
    )
}

export default Weather