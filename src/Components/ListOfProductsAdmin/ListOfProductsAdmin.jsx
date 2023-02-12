import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { db } from "../../firebase";

export const ListOfProductsAdmin = () => {
  const [data, setData] = useState([]);
  const storage = getStorage();

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

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Desc</th>
            <th>Img</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td>
                <img
                  src={product.img}
                  alt={product.img_name}
                  style={{ height: "2rem", width: "2.5rem" }}
                />
              </td>
              <td>
                <button>+</button>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(product.img_name, product.id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
