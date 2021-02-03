import { Action } from "redux";
import { FoodTruck } from "../../types/FoodTruck";

// Action
export enum FoodTruckReducerTypes {
  FoodTrucksFetched = "[Food Trucks] Food Trucks Fetched",
}

type FoodTruckAction = Action<FoodTruckReducerTypes> & { payload: FoodTruck[] };

// State
type FoodTrucksReducerState = {
  foodTrucks: FoodTruck[];
};

const initialState: FoodTrucksReducerState = {
  foodTrucks: [],
};

// Reducer
export const foodTrucksReducer = (
  state: FoodTrucksReducerState = initialState,
  action: FoodTruckAction
) => {
  switch (action.type) {
    case FoodTruckReducerTypes.FoodTrucksFetched:
      return {
        foodTrucks: action.payload,
      };
    default:
      return state;
  }
};
