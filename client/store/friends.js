import axios from "axios";

// Action constants
const SET_FRIENDS = "SET_FRIENDS";
const ADD_FRIEND = "ADD_FRIEND";
const UNFRIEND = "UNFRIEND";

// Action creators
const setFriends = (friends) => {
  return {
    type: SET_FRIENDS,
    friends,
  };
};

const _addFriend = (friends) => {
  return {
    type: ADD_FRIENDS,
    friends,
  };
};

const _unfriend = (friends) => {
  return {
    type: UNFRIEND,
    friends,
  };
};

// Thunks
export const fetchFriends = (username) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users/${username}/friends`);
      dispatch(setFriends(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const unfriend = (
  userId,
  username,
  friendId,
  friendUsername,
  history
) => {
  return async (dispatch) => {
    try {
      //Fetch both users
      const primaryUser = await axios.get(`/api/users/${userId}`);
      const unfriendedUser = await axios.get(`/api/users/${friendId}`);

      // Remove each other from existing friendlist
      const remainingPrimaryFriends = primaryUser.data.friendUsernames.filter(
        (userName) => userName !== friendUsername
      );
      const remainingUnfriendedFriends =
        unfriendedUser.data.friendUsernames.filter(
          (userName) => userName !== username
        );

      // Update friendlist for both users
      await axios.put(`/api/users/${userId}`, {
        friendUsernames: remainingPrimaryFriends,
      });
      await axios.put(`/api/users/${friendId}`, {
        friendUsernames: remainingUnfriendedFriends,
      });

      // Return updated friend objects
      const updatedPrimaryFriends = await axios.get(
        `/api/users/${username}/friends`
      );

      dispatch(_unfriend(updatedPrimaryFriends.data));
      history.push("/friends");
    } catch (error) {
      console.log(error);
    }
  };
};

export const addFriend = (userId, username, history) => {
  return async (dispatch) => {
    try {
      //Fetch both users
      const primaryUser = await axios.get(`/api/users/${userId}`);
      const newFriendUser = await axios.get(`/api/users/username/${username}`);

      // Add each other to  friendlist
      primaryUser.data.friendUsernames.push(username);
      newFriendUser.data.friendUsernames.push(primaryUser.data.username);

      // Update friendlist for both users
      await axios.put(`/api/users/${userId}`, {
        friendUsernames: primaryUser.data.friendUsernames,
      });
      await axios.put(`/api/users/${newFriendUser.data.id}`, {
        friendUsernames: newFriendUser.data.friendUsernames,
      });

      // Return updated friend objects
      const updatedPrimaryFriends = await axios.get(
        `/api/users/${primaryUser.data.username}/friends`
      );

      dispatch(_unfriend(updatedPrimaryFriends.data));
      history.push("/");
      history.push("/friends");
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIENDS:
      return action.friends;
    case UNFRIEND:
      return action.friends;
    case ADD_FRIEND:
      return action.friends;
    default:
      return state;
  }
};
