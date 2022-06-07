import React from "react";

const Game = (props) => {
  const game = props.game;

  return (
    <div className="single-game">
      {/* <img src={game.imgUrl} /> */}
      {/* Need to figure out how to access image */}
      <h3>{game.name}</h3>
      <h5>
        Players: {game.minPlayers}-{game.maxPlayers}
      </h5>
      <h5>Duration: {game.duration}</h5>
      <h5>Category: {game.playStyle.join(", ")}</h5>
      <h5>Complexity: {game.complexity}</h5>
    </div>
  );
};

export default Game;
