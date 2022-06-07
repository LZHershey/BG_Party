import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTempPref } from "../store/tempPref";

const CategoryPreferences = () => {
  const dispatch = useDispatch();

  const [categoryPref, setCategoryPref] = useState({
    "deck-building": false,
    strategy: false,
    party: false,
    drafting: false,
    "engine-building": false,
    "area-control": false,
    campaign: false,
    "co-op": false,
    wargames: false,
  });

  const togglePref = (evt) => {
    categoryPref[evt.target.name] = !categoryPref[evt.target.name];

    let newPrefs = [];
    for (var category in categoryPref) {
      if (categoryPref[category]) {
        newPrefs.push(category);
      }
    }
    dispatch(setTempPref(newPrefs));
  };

  return (
    <div>
      <input
        type="checkbox"
        name="area-control"
        value="area-control"
        onChange={(e) => togglePref(e)}
      />
      <label htmlFor="area-control">Area Control</label>
      <input
        type="checkbox"
        name="co-op"
        value="co-op"
        onChange={(e) => togglePref(e)}
      />
      <label htmlFor="co-op">Cooperative</label>
      <input
        type="checkbox"
        name="deck-building"
        value="deck-building"
        onChange={(e) => togglePref(e)}
      />
      <label htmlFor="deck-building"> Deck Building</label>
      <input
        type="checkbox"
        name="drafting"
        value="drafting"
        onChange={(e) => togglePref(e)}
      />
      <label htmlFor="drafting">Drafting</label>
      <input
        type="checkbox"
        name="engine-building"
        value="engine-building"
        onChange={(e) => togglePref(e)}
      />
      <label htmlFor="engine-building">Engine Building</label>
      <input
        type="checkbox"
        name="party"
        value="party"
        onChange={(e) => togglePref(e)}
      />
      <label htmlFor="party">Party</label>
      <input
        type="checkbox"
        name="strategy"
        value="strategy"
        onChange={(e) => togglePref(e)}
      />
      <label htmlFor="strategy"> Strategy</label>
      <input
        type="checkbox"
        name="wargames"
        value="wargames"
        onChange={(e) => togglePref(e)}
      />
      <label htmlFor="wargames">War Games</label>
    </div>
  );
};

export default CategoryPreferences;
