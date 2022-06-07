import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PlayPreferences from "./CategoryPreferences";
import { updatePreferences } from "../store/preferences";

const PrefForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userId = useSelector((state) => state.auth.id);
  const [duration, setDuration] = useState("");
  const [complexity, setComplexity] = useState("");
  const categories = useSelector((state) => state.tempCategories);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(
      updatePreferences(userId, duration, complexity, categories, history)
    );
  };

  return (
    <form id="pref-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="duration">Duration:</label>
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
        <PlayPreferences />
        <label htmlFor="complex">Complexity:</label>
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
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default PrefForm;

// durationPref: {
//   type: Sequelize.ENUM("30-60 min", "1-2 hrs", "2-3 hrs", "3+ hrs"),
// },
// playPref: {
//   type: Sequelize.ARRAY(Sequelize.STRING),
// },
// complexityPref: {
//   type: Sequelize.ENUM("easy", "moderate", "complex"),
// },
