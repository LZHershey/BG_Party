import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addParty } from "../store/party";

const PartyForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userId = useSelector((state) => state.auth.id);
  const username = useSelector((state) => state.auth.username);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addParty(userId, username, name, location, date, history));
  };

  return (
    <form className="party-form" onSubmit={handleSubmit}>
      <div id="party-form-input">
        <label htmlFor="name">Party Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div id="party-form-input">
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div id="party-form-input">
        <label htmlFor="date">When:</label>
        <input
          type="datetime-local"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default PartyForm;
