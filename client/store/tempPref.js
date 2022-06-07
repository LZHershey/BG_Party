//Global state to hold category preferences, as it is separate from the rest of the preferences form

const SET_TEMP_PREF = "SET_TEMP_PREF";

export const setTempPref = (playPref) => {
  return {
    type: SET_TEMP_PREF,
    playPref,
  };
};

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TEMP_PREF:
      return action.playPref;
    default:
      return state;
  }
};
