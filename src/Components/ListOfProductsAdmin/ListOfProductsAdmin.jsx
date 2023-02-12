import React, { useEffect, useState } from "react";
import "./ListOfProductsAdmin.scss";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

export const ListOfProductsAdmin = () => {
  const [data, setData] = useState([]);
  const storage = getStorage();
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "products"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

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
            <th>Desc</th>
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
              <td>{product.name.substring(0, 10)}...</td>
              <td>{product.price}</td>
              <td>{product.category.substring(0, 3)}...</td>
              <td>{product.description.substring(0, 5)}...</td>
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
