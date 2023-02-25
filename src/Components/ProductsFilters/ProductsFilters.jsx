import React from "react";

export const ProductsFilters = () => {
  return (
    <div className="filters-container">
      <div className="categories">
        <button>Svi proizvodi</button>
        <button>Nakit</button>
        <button>Inventar</button>
        <button>Slike</button>
        <button>Ostalo</button>
      </div>
      <div className="filters">
        <input />
        <select name="cars" id="cars">
          <option value="lower">Niža cijena</option>
          <option value="higher">Viša cijena</option>
        </select>
      </div>
    </div>
  );
};
