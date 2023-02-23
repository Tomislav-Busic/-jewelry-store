import React from "react";
import "./ListOfProductsAdmin.scss";
import { deleteDoc, doc } from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { goToTopOfPage } from "../../Tools/Tools";

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
      <table>
        <thead>
          <tr>
            <th>Img</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product, index) => (
            <tr key={index}>
              <td>
                <img
                  src={product.img}
                  alt={product.img_name}
                  style={{ height: "2rem", width: "2.5rem" }}
                />
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td className="table-actions">
                <button onClick={() => handleUpdate(product)}>
                  <FaPencilAlt className="icon" />
                </button>
                <button
                  onClick={() => handleDelete(product.img_name, product.id)}
                >
                  <FaTrashAlt className="icon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
