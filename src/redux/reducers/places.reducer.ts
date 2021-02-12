import { Action } from "redux";
import { Prediction } from "../../types/Prediction";

// Action
export enum PlacesReducerTypes {
  PredictionsFetched = "[Places] Predictions Fetched",
  PredictionSelected = "[Places] Prediction Selected",
  PredictionCleared = "[Places] Prediction Cleared",
}

type PlacesAction = Action<PlacesReducerTypes> & { payload?: Prediction[] | Prediction };

// State
export type PlacesReducerState = {
  predictions: Prediction[];
  selectedPrediction: Prediction | null;
};

const initialState: PlacesReducerState = {
  predictions: [],
  selectedPrediction: null,
};

// Reducer
export const placesReducer = (
  state: PlacesReducerState = initialState,
  action: PlacesAction
) => {
  switch (action.type) {
    case PlacesReducerTypes.PredictionsFetched:
      return {
        ...state,
        predictions: action.payload as Prediction[],
      };
    case PlacesReducerTypes.PredictionSelected:
      return {
        ...state,
        selectedPrediction: action.payload as Prediction,
      };
    case PlacesReducerTypes.PredictionCleared:
      return {
        ...state,
        predictions: [],
      };
    default:
      return state;
  }
};
