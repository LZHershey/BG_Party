import React, { useState, useEffect } from "react";
import { fetchGames, deleteGames } from "../store/games";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Game from "./Game";

const GameList = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.id);
  const games = useSelector((state) => state.userGames);

  useEffect(() => {
    dispatch(fetchGames(userId));
  }, []);

  const history = useHistory();

  return (
    <div className="game-library">
      <h1>Board Game Library</h1>

      <div className="game-list">
        {games.map((game) => {
          return (
            <div className="ind-game" key={game.id}>
              <Game game={game} />
              <button
                type="submit"
                className="delete-button"
                onClick={() => dispatch(deleteGame(game.id, history))}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
      {/* <Link to="/addGame"> */}
      <div id="add-game-button">
        <h2>Add Game</h2>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default GameList;
