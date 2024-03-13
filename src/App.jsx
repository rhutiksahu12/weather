import { useState } from 'react'
import './App.css'
import { useGeolocated } from "react-geolocated";
import { useGetDataForMonth, useGetWeatherData } from './api/weatherApi';
import CurrentCityModal from './components/CurrentCityModal';
import Home from './pages/Home';


function App() {
  const [cordinates, setCordinates] = useState()
  const [isModalOpen, setModalOpen] = useState(true);
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
  useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });
  
  const { weatherData, isLoading } = useGetWeatherData(coords)
  const { data: weekData } = useGetDataForMonth(coords)
  
  console.log(weatherData, "monthdata2")
  
  const closeModal = () => {
    setModalOpen(!isModalOpen)
  }

  if(isLoading){
    return <div>Loading...</div>
  }


  return (
    <>
      <div className='h-screen lg:h-full w-screen'>
        {isModalOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black  flex justify-center items-center'>
            <CurrentCityModal weatherData={weatherData} onClose={closeModal} />
          </div>
        )}
        <Home weekData={weekData} onClose={closeModal} weatherData={weatherData}/>
      </div>
    </>
  )
}

export default App
