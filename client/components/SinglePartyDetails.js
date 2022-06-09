import React, { useEffect } from "react";
import { fetchParty } from "../store/party";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Party from "./Party";
import { gameRecommender } from "../gameRecommender.js";

const SinglePartyDetails = (props) => {
  const partyId = props.match.params.partyId;
  const party = useSelector((state) => state.party);
  let partyGames = [];
  let gameNames = [];
  let recommendedGames = [];

  if (party.users) {
    for (let i = 0; i < party.users.length; i++) {
      let currUser = party.users[i];
      for (let j = 0; j < currUser.games.length; j++) {
        partyGames.push(currUser.games[j]);
      }
    }
    gameNames = partyGames.map((game) => game.name);
    recommendedGames = gameRecommender(party.users, partyGames);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchParty(partyId));
  }, []);

  return (
    <div id="party-details">
      <div className="single-party-details" id="gradient-border">
        <Party party={party} />
      </div>
      {recommendedGames.length > 0 ? (
        <div className="recommendations">
          <h3>TOP GAME RECOMMENDATIONS: </h3>
          <h1>
            1: {recommendedGames[0][0]}, {recommendedGames[0][1]} pts
          </h1>
          {recommendedGames.length > 1 ? (
            <h2>
              2: {recommendedGames[1][0]}, {recommendedGames[1][1]} pts
            </h2>
          ) : (
            <p />
          )}
          {recommendedGames.length > 2 ? (
            <h3>
              3: {recommendedGames[2][0]}, {recommendedGames[2][1]} pts
            </h3>
          ) : (
            <p />
          )}
        </div>
      ) : (
        <h3>
          No recommendations suitable for this party... Time to find some new
          games!
        </h3>
      )}
      <h4>Games in players' libraries: {gameNames.sort().join(", ")} </h4>
    </div>
  );
};

export default SinglePartyDetails;
