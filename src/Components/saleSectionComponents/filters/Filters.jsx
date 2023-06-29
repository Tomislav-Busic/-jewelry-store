import React from "react";
import "./filters.scss";
import { useDispatch } from "react-redux";
import { dataActions } from "../../../store/slice/data-slice";

export const Filters = () => {
  const dispatch = useDispatch();

  const handleSearchByName = (name) => {
    dispatch(dataActions.filterByName(name));
  };

  /* const handleSortByPrice = (value) => {
    dispatch(dataActions.sortByPrice(value));
  }; */

  return (
    <div className="filters">
      <input
        placeholder="Upiši ime proizvoda"
        onChange={(e) => handleSearchByName(e.target.value)}
      />
      {/* <select
        name="Filtriraj po cijeni"
        onChange={(e) => handleSortByPrice(e.target.value)}
      >
        <option>Sortiraj po cijeni</option>
        <option value="lower">Niža cijena</option>
        <option value="higher">Viša cijena</option>
      </select> */}
    </div>
  );
};
