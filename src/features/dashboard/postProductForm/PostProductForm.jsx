import React from "react";

import { MdFileUpload } from "react-icons/md";

import styles from "./postProductForm.module.scss";

export const PostProductForm = ({
  handleSubmit,
  handleData,
  setFile,
  file,
  perc,
}) => {
  const handleChange = (e) => {
    const { id, value } = e.target;
    handleData({ target: { id, value } });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>Unesite novi proizvod</h3>
      <input
        type="text"
        id="name"
        placeholder="Ime proizvoda"
        onChange={handleChange}
      />
      <select id="category" onChange={handleChange}>
        <option value="ostalo">Odaberite kategoriju </option>
        <option value="ostalo">Ostalo </option>
        <option value="nakit">Nakit</option>
        <option value="antikviteti">Antikviteti</option>
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
        Učitaj sliku:
        <br />
        <MdFileUpload className={styles.icon} />
      </label>
      <input
        type="file"
        id="file"
        onChange={(e) => setFile(e.target.files[0])}
        style={{ display: "none" }}
        data-testid="file_upload"
      />
      <button disabled={perc !== null && perc < 100} type="submit">
        Potvrdi
      </button>
    </form>
  );
};
