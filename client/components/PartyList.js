import React, { useState, useEffect } from "react";
import { fetchParties } from "../store/parties";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Party from "./Party";

const PartyList = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.id);
  const parties = useSelector((state) => state.userParties);

  useEffect(() => {
    dispatch(fetchParties(userId));
  }, []);

  const history = useHistory();

  return (
    <div className="parties">
      <h1>BG Parties</h1>

      <div className="party-list">
        {parties.map((party) => {
          return (
            <div id="ind-party" key={party.id}>
              <Party party={party} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PartyList;
