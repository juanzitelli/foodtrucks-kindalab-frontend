import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { foodTrucksReducer } from "../reducers/foodtrucks.reducer";
import { placesReducer } from "../reducers/places.reducer";
import { uiReducer } from "../reducers/ui.reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  foodTrucks: foodTrucksReducer,
  places: placesReducer,
  ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
