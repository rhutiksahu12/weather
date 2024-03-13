import React from 'react'
import city from '../assets/city.png'
import { RxCross1 } from "react-icons/rx";
import { IoLocationSharp } from "react-icons/io5";

const CurrentCityModal = ({weatherData, onClose}) => {
    console.log(weatherData, "weather")
    return (
        <>
            <div className='w-full h-full bg-center bg-cover' style={{ backgroundImage: `url(${city})` }} >
                <nav className='flex items-center justify-between px-10 py-10'>
                    <div className='font-thin'><button onClick={onClose}><RxCross1 color='white' size={36}/></button></div>
                    <div className='bg-red-600 flex items-center rounded-md text-white px-4 py-0.5'>Live</div>
                </nav>
                <div className='relative w-full h-1/2 px-10 py-10'>
                    <div className='flex pt-16 px-2 items-center'>
                    <IoLocationSharp color='white' size={24} /> <span className='text-sm text-white'>CURRENT LOCATION</span>
                    </div>
                    <div className='flex flex-col gap-4 text-white font-semibold text-4xl pt-10 font-mono'>
                        <span>{weatherData?.name}</span>
                        <span>{weatherData?.sys.country}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CurrentCityModal