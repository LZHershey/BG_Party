import React, { useState, useEffect } from "react";
import { fetchGames, removeGame, addExistingGame } from "../store/games";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Game from "./Game";
import { findGame, clearGame } from "../store/game";

const GameList = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.id);
  const games = useSelector((state) => state.userGames);
  const game = useSelector((state) => state.game);
  const [searched, setSearched] = useState(false);

  const [gameName, setGameName] = useState("");

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
                onClick={() => dispatch(removeGame(userId, game.id))}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
      {/* <Link to="/addGame"> */}
      <div id="add-friend-game">
        <h2>Add Game</h2>

        <div>
          {searched ? (
            game[1] ? (
              <button
                type="submit"
                onClick={() => {
                  dispatch(addExistingGame(userId, game[1].id, history));
                  dispatch(clearGame());
                  setSearched(false);
                }}
              >
                Add {game[1].name} to Library
              </button>
            ) : (
              <p>
                Game not found.{" "}
                <Link to="add-game">
                  <button>Add yourself</button>
                </Link>
              </p>
            )
          ) : (
            <div id="add-friend-game">
              <div>
                <label htmlFor="addGame">Board game name:</label>
                <input
                  name="addGame"
                  type="text"
                  value={gameName}
                  onChange={(e) => setGameName(e.target.value)}
                />{" "}
              </div>
              <div>
                <button
                  type="submit"
                  onClick={() => {
                    dispatch(findGame(gameName));
                    setSearched(true);
                    setGameName("");
                  }}
                >
                  Search database
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default GameList;
