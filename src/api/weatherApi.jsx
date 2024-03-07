import axios from "axios";
import weatherApiInstance from "../utils/weatherInstance";
import { useQuery } from "@tanstack/react-query";

const fetchWeatherData = async (coords) => {
    console.log(coords)
    const response = await weatherApiInstance.get(`/onecall?lat=${coords.latitude}&lon=${coords.longitude}&appid=${import.meta.env.VITE_API_KEY}`)
    console.log(response.data)
    return response.data
}

export const useGetWeatherData = (coords) => {
    const { data:weatherData, isError, isLoading, error } = useQuery({
        queryKey :['location', coords],
        queryFn : ()=> fetchWeatherData(coords) 
        
    })
    return { weatherData, isError, isLoading, error }
}