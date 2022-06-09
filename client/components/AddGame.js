import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Categories from "./Categories";
import { createNewGame } from "../store/games";

const PrefForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userId = useSelector((state) => state.auth.id);
  const [name, setGameName] = useState("");
  const [minPlayers, setMinPlayers] = useState("");
  const [maxPlayers, setMaxPlayers] = useState("");
  const [duration, setDuration] = useState("");
  const [complexity, setComplexity] = useState("");
  const categories = useSelector((state) => state.tempCategories);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(
      createNewGame(
        userId,
        name,
        minPlayers,
        maxPlayers,
        duration,
        complexity,
        categories,
        history
      )
    );
  };

  return (
    <form id="pref-form" onSubmit={handleSubmit}>
      <h1>Input New Game</h1>
      <div>
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setGameName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="minPlayers" className="form-label">
          Min players:
        </label>
        <input
          type="number"
          name="minPlayers"
          value={minPlayers}
          onChange={(e) => setMinPlayers(e.target.value)}
        />
        <label htmlFor="maxPlayers" className="form-label">
          Max players:
        </label>
        <input
          type="number"
          name="maxPlayers"
          value={maxPlayers}
          onChange={(e) => setMaxPlayers(e.target.value)}
        />
      </div>
      <div>
        <label className="form-label" htmlFor="duration">
          Duration:
        </label>
        <select
          name="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        >
          <option value="30-60 min">30-60 minutes</option>
          <option value="1-2 hrs">1-2 hours</option>
          <option value="2-3 hrs">2-3 hours</option>
          <option value="3+ hrs">3+ hours</option>
        </select>
      </div>
      <div>
        <Categories />
      </div>
      <div>
        <label className="form-label" htmlFor="complex">
          Complexity:
        </label>
        <div className="complexity-levels">
          <input
            type="radio"
            name="complex"
            value="easy"
            onChange={() => setComplexity("easy")}
          />{" "}
          Easy <br />
          <input
            type="radio"
            name="complex"
            value="moderate"
            onChange={() => setComplexity("moderate")}
          />{" "}
          Moderate <br />
          <input
            type="radio"
            name="complex"
            value="complex"
            onChange={() => setComplexity("complex")}
          />{" "}
          Complex <br />
        </div>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default PrefForm;
