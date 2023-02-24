import React from "react";
import { MdFileUpload } from "react-icons/md";
import "./AdminUpdateProductForm.scss";

export const AdminUpdateProductForm = ({
  data,
  handleSubmit,
  handleData,
  handleBack,
  setFile,
  file,
  perc,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h3>Ažuriraj {data?.name}</h3>
      <input
        value={data?.name || ""}
        type="text"
        id="name"
        placeholder="Novo ime proizvoda"
        onChange={handleData}
      />
      <input
        value={data?.price || ""}
        type="number"
        id="price"
        placeholder="Nova cijena proizvoda"
        onChange={handleData}
      />
      <select value={data?.category || ""} id="category" onChange={handleData}>
        <option value="ostalo">Ostalo (kategorija)</option>
        <option value="satovi">Satovi</option>
        <option value="inventar">Inventar</option>
        <option value="slike">Slike</option>
      </select>
      <textarea
        value={data?.description || ""}
        id="description"
        placeholder="Novi opis proizvoda"
        onChange={handleData}
      />
      <img src={file ? URL.createObjectURL(file) : data?.img} alt="" />
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
        Ažuriraj
      </button>
      <button onClick={handleBack}>Vrati se</button>
    </form>
  );
};