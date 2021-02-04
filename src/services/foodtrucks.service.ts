import axios, { AxiosResponse } from "axios";
import { FoodTruck } from "../types/FoodTruck";

export const getFoodTrucksByCoordinates = async (
  latitude: number,
  longitude: number,
  limit?: number
) => {
  const baseURL = `http://localhost:3000/food-trucks`;
  const {
    data: { list: foodTrucks },
  } = (await axios.get(`${baseURL}?lat=${latitude}&lon=${longitude}${limit ? `&lim=${limit}` : ""}`)) as AxiosResponse<{ done: boolean; list: FoodTruck[] }>;
  
  console.log(foodTrucks);
  
  return foodTrucks;
};
