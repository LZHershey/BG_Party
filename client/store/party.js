import axios from "axios";

// Action constants
const ADD_PARTY = "ADD_PARTY";

// Action creators

const _addParty = (newParty) => {
  return {
    type: ADD_PARTY,
    newParty,
  };
};

// Thunks

export const addParty = (userId, username, name, location, date, history) => {
  return async (dispatch) => {
    try {
      console.log(userId);
      const newParty = await axios.post(`/api/parties/`, {
        name,
        location,
        date,
        host: username,
      });
      const { data } = await axios.put(
        `/api/parties/${newParty.data.id}/${userId}`
      );
      dispatch(_addParty(data));
      history.push("/parties");
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PARTY:
      return action.newParty;
    default:
      return state;
  }
};
