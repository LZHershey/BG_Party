import React from "react";
import { deleteParty } from "../store/parties";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Party = (props) => {
  const party = props.party;
  const dispatch = useDispatch();
  const history = useHistory();

  const dateObj = new Date(party.date);
  const username = useSelector((state) => state.auth.username);
  let partyGoers = [];

  if (party.users) {
    partyGoers = party.users.map((user) => user.displayName);
  }

  return (
    <div className="party-text">
      <h3>{party.name}</h3>
      <h5>Where: {party.location}</h5>
      <h5>When: {dateObj.toLocaleString("en-US")}</h5>
      <h5>Who's Playing: {partyGoers ? partyGoers.join(", ") : <p />}</h5>
      <h5>Who's Hosting: {party.host} </h5>
      {party.host === username ? (
        <button onClick={() => dispatch(deleteParty(party.id, history))}>
          Delete Party
        </button>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Party;
