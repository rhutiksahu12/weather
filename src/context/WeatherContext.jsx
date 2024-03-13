import { createContext, useContext, useState } from "react";
import { useGetDataForMonth, useGetWeatherData } from "../api/weatherApi";
import { useGeolocated } from "react-geolocated";

const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
    // const [weather, setWeather] = useState(null);
    // const [cordinates, setCordinates] = useState()
    // const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    //     useGeolocated({
    //         positionOptions: {
    //             enableHighAccuracy: false,
    //         },
    //         userDecisionTimeout: 5000,
    //     });



    // const weatherInfo = {
    //     weatherData, weekData
    // }

    return (
        <WeatherContext.Provider>
            {children}
        </WeatherContext.Provider>
    )
}

export const useWeatherData = () => {
    return useContext(WeatherContext);
}