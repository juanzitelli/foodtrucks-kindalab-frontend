import React from "react";

import { placesReducer } from "./../../redux/reducers/places.reducer";
import {
  placesFetched,
  predictionsCleared,
  predictionSelected,
} from "./../../redux/actions/places.actions";
import { Prediction } from "../../types/Prediction";

describe("Tests on the Places reducer function", () => {
  const testPrediction: Prediction = {
    description: "5th Avenue, San Francisco, CA, USA",
    matched_substrings: [
      { length: 10, offset: 0 },
      { length: 13, offset: 12 },
    ],
    place_id:
      "EiI1dGggQXZlbnVlLCBTYW4gRnJhbmNpc2NvLCBDQSwgVVNBIi4qLAoUChIJ72whl0aHhYARqdgkFMIVUKESFAoSCSEAaQBtmoWAEf-tdvBnE1BK",
    reference:
      "EiI1dGggQXZlbnVlLCBTYW4gRnJhbmNpc2NvLCBDQSwgVVNBIi4qLAoUChIJ72whl0aHhYARqdgkFMIVUKESFAoSCSEAaQBtmoWAEf-tdvBnE1BK",
    structured_formatting: {
      main_text: "5th Avenue",
      main_text_matched_substrings: [{ length: 10, offset: 0 }],
      secondary_text: "San Francisco, CA, USA",
    },
    terms: [
      { offset: 0, value: "5th Avenue" },
      { offset: 12, value: "San Francisco" },
      { offset: 27, value: "CA" },
      { offset: 31, value: "USA" },
    ],
    types: ["route", "geocode"],
  };
  const testInitialState = {
    predictions: [],
    selectedPrediction: null,
  };
  const predictions = [testPrediction];
  test("Should set predictions when PredictionsFetched action is dispatched", () => {
    const testAction = placesFetched(predictions);

    const result = placesReducer(testInitialState, testAction);

    expect(result).toEqual({
      predictions,
      selectedPrediction: null,
    });
  });

  test("Should set selectedPrediction when PredictionSelected action is dispatched", () => {
    const testAction = predictionSelected(testPrediction);
    const result = placesReducer(testInitialState, testAction);
    expect(result).toEqual({
      predictions: [],
      selectedPrediction: testPrediction,
    });
  });

  test("Should set predictions to an empty array when PredictionsCleared action is dispatched", () => {
    const testAction = predictionsCleared();
    const result = placesReducer(testInitialState, testAction);
    expect(result).toEqual({
      predictions: [],
      selectedPrediction: null,
    });
  });
});
