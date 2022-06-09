//Global state to hold category types

const SET_TEMP_CAT = "SET_TEMP_CAT";

export const setTempCat = (categories) => {
  return {
    type: SET_TEMP_CAT,
    categories,
  };
};

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TEMP_CAT:
      return action.categories;
    default:
      return state;
  }
};
