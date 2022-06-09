import axios from "axios";

// Action constants
const SET_GAMES = "SET_GAMES";
const ADD_GAME_TO_USER = "ADD_GAME_TO_USER";
const REMOVE_GAME = "REMOVE_GAME";
const CREATE_GAME = "CREATE_GAME";

// Action creators
const setGames = (games) => {
  return {
    type: SET_GAMES,
    games,
  };
};

const addGameToUser = (games) => {
  return {
    type: ADD_GAME_TO_USER,
    games,
  };
};

const removeGameFromUser = (games) => {
  return {
    type: REMOVE_GAME,
    games,
  };
};

const createGame = (games) => {
  return {
    type: CREATE_GAME,
    games,
  };
};

// Thunks
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

export const addExistingGame = (userId, gameId, history) => {
  return async (dispatch) => {
    try {
      await axios.put(`/api/games/add/${userId}/${gameId}`);
      const { data: updatedGames } = await axios.get(`/api/games/${userId}`);
      dispatch(addGameToUser(updatedGames));
      history.push("/game-library");
    } catch (error) {
      console.log(error);
    }
  };
};

export const createNewGame = (
  userId,
  name,
  minPlayers,
  maxPlayers,
  duration,
  complexity,
  categories,
  history
) => {
  return async (dispatch) => {
    try {
      const { data: newGame } = await axios.post(
        `/api/games/addGame/${userId}/`,
        {
          name,
          minPlayers,
          maxPlayers,
          duration,
          playStyle: categories,
          complexity,
        }
      );
      const { data: updatedGames } = await axios.get(`/api/games/${userId}`);
      dispatch(addGameToUser(updatedGames));
      history.push("/");
      history.push("/game-library");
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeGame = (userId, gameId) => {
  return async (dispatch) => {
    try {
      await axios.put(`/api/games/remove/${userId}/${gameId}`);
      const { data: updatedGames } = await axios.get(`/api/games/${userId}`);
      dispatch(removeGameFromUser(updatedGames));
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
    case ADD_GAME_TO_USER:
      return action.games;
    case REMOVE_GAME:
      return action.games;
    default:
      return state;
  }
};
