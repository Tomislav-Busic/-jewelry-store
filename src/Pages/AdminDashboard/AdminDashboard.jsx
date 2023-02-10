import React from "react";
import "./AdminDashboard.scss";

export const AdminDashboard = () => {
  const handleSubmit = () => {};

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input type="text" id="name" placeholder="Ime proizvoda" />
          <input type="number" id="price" placeholder="Cijena proizvoda" />
          <select id="category">
            <option value="ostalo">Ostalo (kategorija)</option>
            <option value="satovi">Satovi</option>
            <option value="inventar">Inventar</option>
            <option value="slike">Slike</option>
          </select>
          <label>Opis proizvoda</label>
          <textarea id="description" placeholder="Opis proizvoda" />
          <button type="submit">Potvrdi</button>
        </form>
      </div>
    </div>
  );
};
