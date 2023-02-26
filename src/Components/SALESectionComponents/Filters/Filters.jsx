import React from "react";
import "./Filters.scss";

export const Filters = () => {
  return (
    <div className="filters">
      <input placeholder="Upiši ime proizvoda" />
      <select name="Filtriraj po cijeni">
        <option>Sortiraj po cijeni</option>
        <option value="lower">Niža cijena</option>
        <option value="higher">Viša cijena</option>
      </select>
    </div>
  );
};
