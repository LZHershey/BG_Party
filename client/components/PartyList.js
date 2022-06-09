import React, { useEffect } from "react";
import { fetchParties } from "../store/parties";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
      <h1 className="section-header">Your Parties</h1>

      <div className="party-list">
        {parties.map((party) => {
          return (
            <div className="single-party" key={party.id}>
              <Link to={`/party/${party.id}`} party={party}>
                <Party party={party} key={party.id} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PartyList;
