import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import tempCategories from "./tempPref";
import userGames from "./games";
import userParties from "./parties";
import friends from "./friends";
import newParty from "./party";

const reducer = combineReducers({
  auth,
  tempCategories,
  userGames,
  userParties,
  friends,
  newParty,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = legacy_createStore(reducer, middleware);

export default store;
export * from "./auth";
