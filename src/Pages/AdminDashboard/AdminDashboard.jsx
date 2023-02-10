import React, { useState } from "react";
import "./AdminDashboard.scss";

export const AdminDashboard = () => {
  const [data, setData] = useState({});

  const handleData = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  console.log(data);

  const handleSubmit = () => {};

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder="Ime proizvoda"
            onChange={handleData}
          />
          <input
            type="number"
            id="price"
            placeholder="Cijena proizvoda"
            onChange={handleData}
          />
          <select id="category" onChange={handleData}>
            <option value="ostalo">Ostalo (kategorija)</option>
            <option value="satovi">Satovi</option>
            <option value="inventar">Inventar</option>
            <option value="slike">Slike</option>
          </select>
          <textarea
            id="description"
            placeholder="Opis proizvoda"
            onChange={handleData}
          />
          <button type="submit">Potvrdi</button>
        </form>
      </div>
    </div>
  );
};
