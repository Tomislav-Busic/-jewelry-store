import React, { useState, useEffect } from "react";
import "./AdminDashboard.scss";
import { MdFileUpload } from "react-icons/md";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { db, storage } from "../../firebase";

export const AdminDashboard = () => {
  const [data, setData] = useState({});
  const [file, setFile] = useState("");

  useEffect(() => {
    const uploadFile = () => {};
    file && uploadFile();
  }, [file]);

  const handleData = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await addDoc(collection(db, "products"), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      console.log(res.id);
    } catch (err) {
      console.log(err);
    }
  };

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
            placeholder="Cijena proizvoda u €"
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
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
          <button type="submit">Potvrdi</button>
        </form>
      </div>
    </div>
  );
};
