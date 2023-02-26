import React from "react";
import "./AdminPostProductForm.scss";
import { MdFileUpload } from "react-icons/md";

export const AdminPostProductForm = ({
  handleSubmit,
  handleData,
  setFile,
  file,
  perc,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h3>Unesite novi proizvod</h3>
      <input
        type="text"
        id="name"
        placeholder="Ime proizvoda"
        onChange={handleData}
      />
      <input
        type="number"
        id="price"
        placeholder="Cijena proizvoda u €"
        onChange={handleData}
      />
      <select id="category" onChange={handleData}>
        <option value="ostalo">Odaberite kategoriju </option>
        <option value="ostalo">Ostalo </option>
        <option value="nakit">Satovi</option>
        <option value="inventar">Inventar</option>
        <option value="slike">Slike</option>
      </select>
      <img
        src={
          file
            ? URL.createObjectURL(file)
            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
        }
        alt=""
      />
      <label htmlFor="file">
        Učitaj sliku: <br />
        <MdFileUpload className="icon" />
      </label>
      <input
        type="file"
        id="file"
        onChange={(e) => setFile(e.target.files[0])}
        style={{ display: "none" }}
      />
      <button disabled={perc !== null && perc < 100} type="submit">
        Potvrdi
      </button>
    </form>
  );
};
