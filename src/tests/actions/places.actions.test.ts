import React from "react";
import {
  placesFetched,
  predictionsCleared,
  predictionSelected,
} from "../../redux/actions/places.actions";
import { PlacesReducerTypes } from "../../redux/reducers/places.reducer";
import { Prediction } from "../../types/Prediction";

describe("Tests on places action creators", () => {
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

  test("placesFetched should return the corresponding action", () => {
    const testPredictions = [testPrediction];
    expect(placesFetched(testPredictions)).toEqual({
      type: PlacesReducerTypes.PredictionsFetched,
      payload: testPredictions,
    });
  });

  test("predictionSelected should return the corresponding action", () => {
    expect(predictionSelected(testPrediction)).toEqual({
      type: PlacesReducerTypes.PredictionSelected,
      payload: testPrediction,
    });
  });

  test("predictionsCleared should return the corresponding action", () => {
    expect(predictionsCleared()).toEqual({
      type: PlacesReducerTypes.PredictionCleared,
    });
  });
});
