import React from "react";

const Friend = (props) => {
  const friend = props.friend;

  return (
    <div className="single-friend">
      {/* Need to figure out how to access image */}
      <h3>{friend.displayName}</h3>
      <h5>Username: {friend.username}</h5>
    </div>
  );
};

export default Friend;
