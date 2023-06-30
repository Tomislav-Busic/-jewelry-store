import React from "react";

import { MdFileUpload } from "react-icons/md";

import styles from "./updateProductForm.module.scss";

export const UpdateProductForm = ({
  data,
  handleSubmit,
  handleData,
  handleBack,
  setFile,
  file,
  perc,
}) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>Ažuriraj {data?.name}</h3>
      <input
        value={data?.name || ""}
        type="text"
        id="name"
        placeholder="Novo ime proizvoda"
        onChange={handleData}
      />
      <select value={data?.category || ""} id="category" onChange={handleData}>
        <option value="ostalo">Ostalo (kategorija)</option>
        <option value="nakit">Nakit</option>
        <option value="antikviteti">Antikviteti</option>
        <option value="slike">Slike</option>
      </select>
      <img src={file ? URL.createObjectURL(file) : data?.img} alt="" />
      <label htmlFor="file">
        Učitaj sliku: <br />
        <MdFileUpload className={styles.icon} />
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
