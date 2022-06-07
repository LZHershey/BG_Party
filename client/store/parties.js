import axios from "axios";

// Action constants
const SET_PARTIES = "SET_PARTIES";
// const ADD_PARTY = "ADD_PARTY";

// Action creators
const setParties = (parties) => {
  return {
    type: SET_PARTIES,
    parties,
  };
};

// const addAParty = (parties) => {
//   return {
//     type: ADD_PARTY,
//     parties,
//   };
// };

// Thunks
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

// export const addParty = (userId, username, name, location, date, history) => {
//   return async (dispatch) => {
//     try {
//       console.log(userId);
//       const newParty = await axios.post(`/api/parties/`, {
//         name,
//         location,
//         date,
//         host: username,
//       });
//       console.log(newParty);
//       await axios.put(`/api/parties/${newParty.data.id}/${userId}`);
//       dispatch(addAParty(data));
//       history.push("/parties");
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PARTIES:
      return action.parties;
    // case ADD_PARTY:
    //   return action.parties;
    default:
      return state;
  }
};
