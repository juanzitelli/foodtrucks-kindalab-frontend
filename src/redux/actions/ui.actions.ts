import { UIReducerTypes } from "../reducers/ui.reducer";

export const foodTrucksLoadedStarted = () => ({
  type: UIReducerTypes.FoodTrucksLoadingStarted,
});
export const foodTrucksLoadedFinished = () => ({
  type: UIReducerTypes.FoodTrucksLoadingFinished,
});
