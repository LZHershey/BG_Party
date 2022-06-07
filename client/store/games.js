import axios from "axios";

// Action constants
const SET_GAMES = "SET_GAMES";
const DELETE_GAME = "DELETE_GAME";

// Action creators
const setGames = (games) => {
  return {
    type: SET_GAMES,
    games,
  };
};

// Thunk
export const fetchGames = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/games/${userId}`);
      dispatch(setGames(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GAMES:
      return action.games;
    default:
      return state;
  }
};
