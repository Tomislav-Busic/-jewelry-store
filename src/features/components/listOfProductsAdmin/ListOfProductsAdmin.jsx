import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteDoc, doc } from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { db } from "../../../firebaseDB/firebase";
import { goToTopOfPage } from "utilities/tools";

import { ProductAdmin } from "./productAdmin/ProductAdmin";

import styles from "./listOfProductsAdmin.module.scss";

export const ListOfProductsAdmin = () => {
  const data = useSelector((state) => state.data.dataList);
  const storage = getStorage();
  const navigate = useNavigate();

  const handleDelete = async (name, id) => {
    const desertRef = ref(storage, name);
    try {
      await deleteDoc(doc(db, "products", id));
      deleteObject(desertRef)
        .then(() => {
          console.log("File deleted successfully!");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (product) => {
    localStorage.setItem("data", JSON.stringify(product));
    navigate("/update");
    goToTopOfPage();
  };

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Img</th>
            <th>Name</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        {data.map((product, index) => (
          <tr key={index}>
            <ProductAdmin
              product={product}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          </tr>
        ))}
      </table>
    </div>
  );
};
