import { getFoodTrucksByCoordinates } from "../../services/foodtrucks.service";
import { FoodTruck } from "../../types/FoodTruck";
import { FoodTruckReducerTypes } from "./../reducers/foodtrucks.reducer";
import {
  foodTrucksLoadedFinished,
  foodTrucksLoadedStarted,
} from "./ui.actions";

export const foodTrucksFetched = (foodTrucks: FoodTruck[]) => ({
  type: FoodTruckReducerTypes.FoodTrucksFetched,
  payload: foodTrucks,
});

export const startFetchingFoodTrucks = (
  lat: number,
  lon: number,
  limit?: number
) => async (dispatch: any) => {
  dispatch(foodTrucksLoadedStarted());
  const foodTrucks: FoodTruck[] = await getFoodTrucksByCoordinates(
    lat,
    lon,
    limit
  );
  dispatch(foodTrucksFetched(foodTrucks));
  dispatch(foodTrucksLoadedFinished());
};
