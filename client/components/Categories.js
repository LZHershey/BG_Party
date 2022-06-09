import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTempCat } from "../store/tempCategories";

const Categories = () => {
  const dispatch = useDispatch();

  const [categoryCheck, setCategoryCheck] = useState({
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

  const toggleCat = (evt) => {
    categoryCheck[evt.target.name] = !categoryCheck[evt.target.name];

    let newCats = [];
    for (var category in categoryCheck) {
      if (categoryCheck[category]) {
        newCats.push(category);
      }
    }
    dispatch(setTempCat(newCats));
  };

  return (
    <div>
      <h3 className="form-label">Choose up to 3 game categories:</h3>
      <div className="cat-checks">
        <div className="ind-cat">
          <label htmlFor="area-control">Area Control</label>
          <input
            className="cat-button"
            type="checkbox"
            name="area-control"
            value="area-control"
            onChange={(e) => toggleCat(e)}
          />
        </div>
        <div className="ind-cat">
          <label htmlFor="co-op">Cooperative</label>
          <input
            type="checkbox"
            className="cat-button"
            name="co-op"
            value="co-op"
            onChange={(e) => toggleCat(e)}
          />
        </div>
        <div className="ind-cat">
          <label htmlFor="deck-building"> Deck Building</label>
          <input
            type="checkbox"
            className="cat-button"
            name="deck-building"
            value="deck-building"
            onChange={(e) => toggleCat(e)}
          />
        </div>
        <div className="ind-cat">
          <label htmlFor="drafting">Drafting</label>
          <input
            type="checkbox"
            className="cat-button"
            name="drafting"
            value="drafting"
            onChange={(e) => toggleCat(e)}
          />
        </div>
        <div className="ind-cat">
          <label htmlFor="engine-building">Engine Building</label>
          <input
            type="checkbox"
            className="cat-button"
            name="engine-building"
            value="engine-building"
            onChange={(e) => toggleCat(e)}
          />
        </div>
        <div className="ind-cat">
          <label htmlFor="party">Party</label>
          <input
            type="checkbox"
            className="cat-button"
            name="party"
            value="party"
            onChange={(e) => toggleCat(e)}
          />
        </div>
        <div className="ind-cat">
          <label htmlFor="strategy"> Strategy</label>
          <input
            type="checkbox"
            className="cat-button"
            name="strategy"
            value="strategy"
            onChange={(e) => toggleCat(e)}
          />
        </div>
        <div className="ind-cat">
          <label htmlFor="wargames">War Games</label>
          <input
            type="checkbox"
            className="cat-button"
            name="wargames"
            value="wargames"
            onChange={(e) => toggleCat(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
