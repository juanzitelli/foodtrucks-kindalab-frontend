import { getPredictionsByInput } from "../../services/places.service";
import { PlacesReducerTypes } from "../reducers/places.reducer";
import { Prediction } from "./../../types/Prediction";

export const placesFetched = (predictions: Prediction[]) => ({
  type: PlacesReducerTypes.PredictionsFetched,
  payload: predictions,
});

export const startFetchingPlaces = (input: string, limit: number) => async (
  dispatch: any
) => {
  const predictions: Prediction[] = await getPredictionsByInput(input, limit);
  dispatch(placesFetched(predictions));
};

export const predictionSelected = (prediction: Prediction) => ({
  type: PlacesReducerTypes.PredictionSelected,
  payload: prediction,
});

export const predictionsCleared = () => ({
  type: PlacesReducerTypes.PredictionCleared,
});
