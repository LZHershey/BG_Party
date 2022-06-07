import React, { useState, useEffect } from "react";
import { fetchFriends, unfriend, addFriend } from "../store/friends";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Friend from "./Friend";

const FriendList = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.id);
  const username = useSelector((state) => state.auth.username);
  const friends = useSelector((state) => state.friends);

  const [friendUsername, setFriendUsername] = useState("");

  useEffect(() => {
    dispatch(fetchFriends(username));
  }, []);

  const history = useHistory();

  return (
    <div className="friends">
      <h1>Friends</h1>

      <div className="friend-list">
        {friends.map((friend) => {
          return (
            <div id="ind-friend" key={friend.id}>
              <Friend friend={friend} />
              <button
                type="submit"
                className="unfriend-button"
                onClick={() =>
                  dispatch(
                    unfriend(
                      userId,
                      username,
                      friend.id,
                      friend.username,
                      history
                    )
                  )
                }
              >
                Unfriend
              </button>
            </div>
          );
        })}
      </div>
      <div id="add-friend">
        <h2>Add Friend</h2>
        <label htmlFor="addUsername">Friend's Username:</label>
        <input
          type="text"
          value={friendUsername}
          onChange={(e) => setFriendUsername(e.target.value)}
        />
        <div>
          <button
            type="submit"
            onClick={() => dispatch(addFriend(userId, friendUsername, history))}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendList;
