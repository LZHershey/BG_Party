import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import tempCategories from "./tempCategories";
import userGames from "./games";
import userParties from "./parties";
import friends from "./friends";
import party from "./party";
import game from "./game";

const reducer = combineReducers({
  auth,
  tempCategories,
  userGames,
  userParties,
  friends,
  party,
  game,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = legacy_createStore(reducer, middleware);

export default store;
export * from "./auth";
