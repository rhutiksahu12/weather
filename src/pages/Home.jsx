import React from 'react'
import { BiMenuAltLeft } from 'react-icons/bi';
import { IoRainyOutline, IoSearchSharp } from "react-icons/io5";
import city from '../assets/city.png'
import { WiCloudy, WiDayCloudy, WiWindy } from "react-icons/wi";
import TemperatureCard from '../components/TemperatureCard';
import { MdOutlineWbSunny } from "react-icons/md";
import MonthChart from '../components/MonthChart';
import moment from 'moment';

// const dailyDetails = [
//     {
//         time: "12:00",
//         icon: <WiCloudy color='white' size={34} />,
//         temperature: 24
//     },
//     {
//         time: "12:00",
//         icon: <IoRainyOutline color='white' size={28} />,
//         temperature: 24
//     },
//     {
//         time: "12:00",
//         icon: <WiDayCloudy color='white' size={34} />,
//         temperature: 24
//     },
//     {
//         time: "12:00",
//         icon: <MdOutlineWbSunny color='white' size={30} />,
//         temperature: 24
//     },
//     {
//         time: "12:00",
//         icon: <WiCloudy color='white' size={34} />,
//         temperature: 24
//     }
// ]

const Home = ({ weekData, weatherData, onClose }) => {
    console.log(weekData, "weekday")
    return (
        <div className='bg-white h-full'>
            <div className=' px-5'>
                <nav className='flex items-center justify-between pb-8 pt-12'>
                    <li className='list-none'><BiMenuAltLeft size={30} /></li>
                    <li className='list-none'><IoSearchSharp size={28} /></li>
                </nav>
            </div>
            <section className=' px-5 h-[18%] lg:h-1/4 '>
                <div className='flex justify-between items-center w-full h-full'>
                    <div className='grid content-between h-full w-[50%] py-1 pb-2'>
                        <span className='text-2xl py-3 font-semibold'>{weatherData?.name}</span>
                        <span className='text-gray-400 font-medium'>{moment.unix(weatherData?.dt).format('MMMM Do YYYY')}</span>
                        <div className='flex items-center'>
                            <span className=' text-blue-500 font-medium'><img src={`http://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`} alt="" /></span>
                            <span className=' text-blue-500 font-medium'>{weatherData?.weather[0].main}</span>
                        </div>
                    </div>
                    <div className='w-[50%] lg:w-1/4 h-full'>
                        <div className='h-full rounded-3xl'>
                            <img src={city} alt="" onClick={onClose} className='float-right w-full object-center h-full rounded-3xl py-3 ' />

                        </div>
                    </div>
                </div>
            </section>

            <section className=' flex items-center px-5 h-[20%] lg:h-[30%] w-full lg:w-[90%]'>
                <div className='grid grid-cols-5 h-[70%]  bg-[#123238] w-full rounded-3xl px-2'>
                    {/* <TemperatureCard /> */}
                    {weekData?.list?.map((item) => {
                        return (
                            <TemperatureCard item={item} />
                        )
                    })}
                </div>

            </section>
            {/* hr line */}
            <hr className='px-5' />

            <section className='px-2 py-4 overflow-hidden'>
                <div className='grid gap-4 text-lg my-4'>
                    <span className='font-medium'>Additional Info</span>
                    <div className='flex justify-between'>
                        <div className='grid gap-3'>
                            <span className='text-sm text-gray-400'>Precipitation</span>
                            <span className='text-base font-semibold'>3%</span>
                        </div>
                        <div className='grid gap-3'>
                            <span className='text-sm text-gray-400'>Humidity</span>
                            <span className='text-base font-semibold'>{weatherData?.main.humidity}</span>
                        </div>
                        <div className='grid gap-3'>
                            <span className='text-sm text-gray-400'>Windy</span>
                            <span className='text-base font-semibold'>{weatherData?.wind.speed} km/h</span>
                        </div>
                    </div>
                </div>
            </section>

            <hr className='px-5 mt-4' />
            {/* <MonthChart weekData={weekData} /> */}
        </div>
    )
}

export default Home