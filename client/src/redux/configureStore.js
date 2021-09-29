import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from 'redux'
import dogs from './features/dogReduсer'
import breeds from './features/breedReduсer'

export const store = createStore(
  combineReducers({
    dogs,
    breeds
  }),
  composeWithDevTools(applyMiddleware(thunk))
);