import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Home = () => {
  const name = useSelector((state) => state.auth.displayName);

  return (
    <div>
      <h3 id="welcome-message">Welcome back, {name}</h3>
      <Link to="/parties">Parties</Link> <br />
      <Link to="/new-party">Host New Party</Link> <br />
      <Link to="/update-preferences">Game Preferences</Link> <br />
      <Link to="/game-library">Game Library</Link> <br />
      <Link to="/friends">Friends</Link>
      <br />
    </div>
  );
};

export default Home;
