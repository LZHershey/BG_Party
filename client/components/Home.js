import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Home = () => {
  const name = useSelector((state) => state.auth.displayName);

  return (
    <div>
      <h3 id="welcome-message">Welcome back, {name}</h3>
      <div className="home-link-list">
        <div className="home-link-div">
          <Link to="/parties">
            <div id="home-link">
              <i className="flaticon-confetti"></i>
              <h3>Parties</h3>
            </div>
          </Link>
        </div>
        <div className="home-link-div">
          <Link to="/new-party">
            <div id="home-link">
              <i className="flaticon-flags"></i>
              <h3>Host New Party</h3>
            </div>
          </Link>
        </div>

        <div className="home-link-div">
          <Link to="/game-library">
            <div id="home-link">
              <i className="flaticon-board-game"></i>
              <h3>Game Library</h3>
            </div>
          </Link>
        </div>
        <div className="home-link-div">
          <Link to="/friends">
            <div id="home-link">
              <i className="flaticon-friends"></i>
              <h3>Friends</h3>
            </div>
          </Link>
        </div>
        <div className="home-link-div">
          <Link to="/update-preferences">
            <div id="home-link">
              <i className="flaticon-settings"></i>
              <h3>Game Preferences</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
