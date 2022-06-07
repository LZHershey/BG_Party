import axios from "axios";

// Action constant
const UPDATE_PREF = "UPDATE_PREF";

//Action creator
const updatePref = (user) => ({
  type: UPDATE_PREF,
  user,
});

export const updatePreferences = (
  userId,
  duration,
  complexity,
  categories,
  history
) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/api/users/${userId}`, {
        durationPref: duration,
        playPref: categories,
        complexityPref: complexity,
      });
      dispatch(updatePref(response.data));
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};
