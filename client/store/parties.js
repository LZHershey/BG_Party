import axios from "axios";

// Action constants
const SET_PARTIES = "SET_PARTIES";

// Action creators
const setParties = (parties) => {
  return {
    type: SET_PARTIES,
    parties,
  };
};

// Thunk
export const fetchParties = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/parties/${userId}`);
      dispatch(setParties(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PARTIES:
      return action.parties;
    default:
      return state;
  }
};
