import moment from 'moment'
import React from 'react'
import { WiCloudy, WiDayCloudy } from 'react-icons/wi'



const TemperatureCard = ({item}) => {
    return (
        <div className='grid gap-0 justify-center py-3 my-2 items-center text-white hover:bg-gradient-to-b hover:from-[#123238] hover:to-[#25454b] rounded-3xl'>
            <span className='text-center font-medium'>
                {item.time}
                {moment(item.dt_txt).format('HH:mm')}
            </span>
            <span className='flex font-bold justify-center'>
                {/* <WiCloudy color='white' size={34} /> */}
                <img src={`http://openweathermap.org/img/w/${item?.weather[0].icon}.png`} alt="" />
                
            </span>
            <span className='font-medium text-center'>
                {/* 24 */}
                {item?.main.temp}
            </span>
        </div>
    )
}

export default TemperatureCard