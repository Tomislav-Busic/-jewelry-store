import React, { useState, useEffect } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase";
import { ListOfProductsAdmin } from "components/adminComponents/listOfProductsAdmin/ListOfProductsAdmin";
import { PostProductForm } from "components/adminComponents/postProductForm/PostProductForm";
import { LogoutBtn } from "components/logoutBtn/LogoutBtn";

import styles from "./dashboard.module.scss";

export const Dashboard = () => {
  const [data, setData] = useState({});
  const [file, setFile] = useState("");
  const [perc, setPerc] = useState(null);

  useEffect(() => {
    const uploadFile = () => {
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
    <div className={styles.container}>
      <LogoutBtn />
      <h1>Administrator</h1>
      <div>
        <PostProductForm
          handleSubmit={handleSubmit}
          handleData={handleData}
          setFile={setFile}
          file={file}
          perc={perc}
        />
      </div>
      <ListOfProductsAdmin />
    </div>
  );
};
