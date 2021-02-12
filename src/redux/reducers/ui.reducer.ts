import { Action } from "redux";

// Action
export enum UIReducerTypes {
  FoodTrucksLoadingStarted = "[UI] Food Trucks Loading Started",
  FoodTrucksLoadingFinished = "[UI] Food Trucks Loading Finished",
}

type UIAction = Action<UIReducerTypes>

// State
type UIReducerState = {
  foodTrucksLoaded: boolean;
};

const initialState: UIReducerState = {
  foodTrucksLoaded: true,
};

// Reducer
export const uiReducer = (
  state: UIReducerState = initialState,
  action: UIAction
) => {
  switch (action.type) {
    case UIReducerTypes.FoodTrucksLoadingStarted:
      return {
        foodTrucksLoaded: false,
      };
    case UIReducerTypes.FoodTrucksLoadingFinished:
      return {
        foodTrucksLoaded: true,
      };
    default:
      return state;
  }
};
