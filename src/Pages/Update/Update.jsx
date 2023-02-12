import React, { useState, useEffect } from "react";
import "./Update.scss";
import { MdFileUpload } from "react-icons/md";
import { serverTimestamp, doc, updateDoc } from "firebase/firestore";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { db, storage } from "../../firebase";
import { useNavigate } from "react-router-dom";

export const Update = () => {
  const [data, setData] = useState({});
  const [oldData, setOldData] = useState({});
  const [file, setFile] = useState("");
  const [perc, setPerc] = useState(null);

  const navigation = useNavigate();

  useEffect(() => {
    setOldData(JSON.parse(localStorage.getItem("data")));
  }, []);

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, file.name);
      const desertRef = ref(storage, oldData.img_name);

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
            deleteObject(desertRef)
              .then(() => {
                console.log("File deleted successfully!");
              })
              .catch((error) => {
                console.log(error);
              });
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

  console.log(data);

  const handleData = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productsRef = doc(db, "products", oldData.id);

    try {
      await updateDoc(productsRef, {
        ...data,
        timeStamp: serverTimestamp(),
      });
      e.target.reset();
      setFile("");
      navigation(-1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="admin-update">
      <h1>Update Product</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder={oldData.name}
            onChange={handleData}
          />
          <input
            value={oldData.price}
            type="number"
            id="price"
            placeholder={oldData.price}
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
            placeholder={oldData.description}
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
          <img src={file ? URL.createObjectURL(file) : oldData.img} alt="" />
          <button disabled={perc !== null && perc < 100} type="submit">
            Ažuriraj
          </button>
        </form>
      </div>
    </div>
  );
};
