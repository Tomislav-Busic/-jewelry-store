import React, { useState, useEffect } from "react";
import "./AdminDashboard.scss";
import { MdFileUpload } from "react-icons/md";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { ListOfProductsAdmin } from "../../Components/ADMINComponents/ListOfProductsAdmin/ListOfProductsAdmin";

import { db, storage } from "../../firebase";

export const AdminDashboard = () => {
  const [data, setData] = useState({});
  const [file, setFile] = useState("");
  const [perc, setPerc] = useState(null);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({
              ...prev,
              img: downloadURL,
              img_name: file.name,
            }));
          });
        }
      );
    };
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
      await addDoc(collection(db, "products"), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      e.target.reset();
      setFile("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Administrator</h1>
      <div className="container">
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
            <option value="satovi">Satovi</option>
            <option value="inventar">Inventar</option>
            <option value="slike">Slike</option>
          </select>
          <textarea
            id="description"
            placeholder="Opis proizvoda"
            onChange={handleData}
          />
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
      </div>
      <ListOfProductsAdmin />
    </div>
  );
};
