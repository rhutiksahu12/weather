import React, { useState } from 'react'
import { LineChart } from '@mui/x-charts/LineChart';

const MonthChart = ({ weekData }) => {
  const [ temperature, setTemperature] = useState()
  const [ day, setday] = useState()
  // const temperatureData = weekData?.list.map((item, index) =>item.main.temp)
  // const daysdata = weekData?.list.

  // console.log(temperatureData, "format")
  // console.log(weekData, "format")



  return (
    <>
      <div className='flex justify-between px-5 mt-5'>
        <div className='text-lg font-semibold'>
          Temperature
        </div>
        <div>
          <select name="" id="" className='border-2 rounded-lg border-black py-2 px-1 text-xs'>
            <option value="" className='text-sm'> Last Month</option>
            <option value="" className='text-sm'> Next Month</option>
          </select>
        </div>
      </div>

      {/* chart */}
      {/* <div className=' px-5'> */}
      <div className='w-full h-auto bg-black'>
        {/* <LineChart
          xAxis={[{ data: temperatureData?.day }]}
          series={[
            {
              data: temperatureData?.temperature,
              area: true,
            },
          ]}
          width={500}
          height={300}
        /> */}

      </div>

      {/* </div> */}

    </>
  )
}

export default MonthChart