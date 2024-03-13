import axios from "axios";
import weatherApiInstance from "../utils/weatherInstance";
import { useQuery } from "@tanstack/react-query";

const fetchWeatherData = async (coords) => {
    console.log(coords)
    const response = await weatherApiInstance.get(`/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&appid=${import.meta.env.VITE_API_KEY}`)
    console.log(response.data)
    return response.data
}

export const useGetWeatherData = (coords) => {
    const { data: weatherData, isError, isLoading, error, isFetching } = useQuery({
        queryKey: ['location'],
        queryFn : () => fetchWeatherData(coords), 
        enabled: !!coords
        // refetchOnWindowFocus:false

    })
    return { weatherData, isError, isLoading, error }
}



const monthData = async (coords) => {
    const res = await weatherApiInstance.get(`/forecast?lat=${coords.latitude}&lon=${coords.longitude}&cnt=5&units=metric&appid=${import.meta.env.VITE_API_KEY}`)
    // console.log(res.data)
    //
    return res.data

}

export const useGetDataForMonth = (coords) => {
    const { data, isError, isLoading, error } = useQuery({
        queryKey: ['month', coords],
        queryFn: () => monthData(coords),
        // enabled: !!coords
        refetchOnWindowFocus:false

    })
    return { data, isError, isLoading, error }
}