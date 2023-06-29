import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase";
import { goToTopOfPage } from "../../utilities/tools";
import { AdminUpdateProductForm } from "../../components/adminComponents/adminUpdateProductForm/AdminUpdateProductForm";

import styles from "./updateProduct.module.scss";

export const UpdateProducts = () => {
  const [data, setData] = useState({});
  const [file, setFile] = useState("");
  const [perc, setPerc] = useState(null);

  const navigation = useNavigate();

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")));
  }, []);

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, file.name);
      /* const desertRef = ref(storage, data.img_name); */

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
            default:
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
    const productsRef = doc(db, "products", data?.id);

    try {
      await updateDoc(productsRef, {
        ...data,
        timeStamp: serverTimestamp(),
      });
      e.target.reset();
      setFile("");
      navigation(-1);
      goToTopOfPage();
    } catch (err) {
      console.log(err);
    }
  };

  const handleBack = () => {
    navigation("/admin-dashboard");
    goToTopOfPage();
  };

  return (
    <div className={styles.admin_update}>
      <h1>Update Product</h1>
      <div className={styles.container}>
        <AdminUpdateProductForm
          data={data}
          handleSubmit={handleSubmit}
          handleData={handleData}
          handleBack={handleBack}
          setFile={setFile}
          file={file}
          perc={perc}
        />
      </div>
    </div>
  );
};
