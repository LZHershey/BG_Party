import React from "react";

const Party = (props) => {
  const party = props.party;

  return (
    <div className="single-party">
      <h3>{party.name}</h3>
    </div>
  );
};

export default Party;
