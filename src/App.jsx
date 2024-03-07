import { useState } from 'react'
import './App.css'
import { useGeolocated } from "react-geolocated";
import { useGetWeatherData } from './api/weatherApi';


function App() {
  const [cordinates, setCordinates] = useState()
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });
  const { weatherData } = useGetWeatherData(coords)
  console.log(coords)

    // if(isGeolocationAvailable && isGeolocationEnabled){
    //   setCordinates(coords)
    // }else {
    //   alert('Problem fetch your location')
    // }

  return (
    <>  


    </>
  )
}

export default App
