import React from "react";

const Game = (props) => {
  const game = props.game;

  return (
    <div className="single-game">
      {/* <img src={game.imgUrl} /> */}
      {/* Need to figure out how to access image */}
      <h3 id="game-name">{game.name}</h3>
      <p>
        Players: {game.minPlayers}-{game.maxPlayers}
      </p>
      <p>Duration: {game.duration}</p>
      <p>Category: {game.playStyle.join(", ")}</p>
      <p>Complexity: {game.complexity}</p>
    </div>
  );
};

export default Game;
