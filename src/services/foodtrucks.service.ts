import axios, { AxiosResponse } from "axios";
import { FoodTruck } from "../types/FoodTruck";

export const getFoodTrucksByCoordinates = async (
  latitude: number,
  longitude: number,
  limit?: number
) => {
  const {
    data: { list: foodTrucks },
  } = (await axios.get(
    `${
      process.env.REACT_APP_BASE_API_URL
    }/food-trucks?lat=${latitude}&lon=${longitude}${limit ? `&lim=${limit}` : ""}`
  )) as AxiosResponse<{ done: boolean; list: FoodTruck[] }>;

  console.log(foodTrucks);

  return foodTrucks;
};
