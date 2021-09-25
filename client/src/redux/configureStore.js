import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from 'redux'
import dogs from './dogReduser'
import breeds from './breedReduser'

export const store = createStore(
  combineReducers({
    dogs,
    breeds
  }),
  composeWithDevTools(applyMiddleware(thunk))
);