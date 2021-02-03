import { ActionCreator } from "redux";
import { getFoodTrucksByCoordinates } from "../../services/foodtrucks.service";
import { FoodTruck } from "../../types/FoodTruck";
import { FoodTruckReducerTypes } from "./../reducers/foodtrucks.reducer";

const foodTrucksFetched = (foodTrucks: FoodTruck[]) => ({
  type: FoodTruckReducerTypes.FoodTrucksFetched,
  payload: foodTrucks
});

export const startFetchingFoodTrucks = (

  lat: number,
  lon: number,
  limit?: number

) => async (dispatch: any) => {

  const foodTrucks: FoodTruck[] = await getFoodTrucksByCoordinates(lat, lon, limit);
  dispatch(foodTrucksFetched(foodTrucks))
};
