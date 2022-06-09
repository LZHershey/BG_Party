import axios from "axios";

// Action constants
const FOUND_GAME = "FOUND_GAME";
const UNFOUND_GAME = "UNFOUND_GAME";
const CLEAR_GAME = "CLEAR_GAME";

// Action creators
const foundGame = (game) => {
  return {
    type: FOUND_GAME,
    game,
  };
};

const unfoundGame = () => {
  return {
    type: UNFOUND_GAME,
    game: {},
  };
};
export const clearGame = () => {
  return {
    type: CLEAR_GAME,
    game: {},
  };
};

// Thunk
export const findGame = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/games");
      const gameFound = data.filter((game) => game.name === name);
      if (gameFound) {
        dispatch(foundGame(gameFound[0]));
      } else {
        dispatch(unfoundGame());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FOUND_GAME:
      return [action.type, action.game];
    case UNFOUND_GAME:
      return [];
    case CLEAR_GAME:
      return [];
    default:
      return state;
  }
};
