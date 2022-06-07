import React from "react";

const Party = (props) => {
  const party = props.party;
  console.log(party);
  return (
    <div className="single-party">
      <h3>{party.name}</h3>
      <h5>Where: {party.location}</h5>
      <h5>When: {party.date}</h5>
    </div>
  );
};

export default Party;
