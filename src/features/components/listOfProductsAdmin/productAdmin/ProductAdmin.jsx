import React from "react";

import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

import styles from "./productAdmin.module.scss";

export const ProductAdmin = ({ product, handleDelete, handleUpdate }) => {
  return (
    <tr>
      <td>
        <img className={styles.table_img} src={product.img} alt="table" />
      </td>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td className={styles.table_actions}>
        <button onClick={() => handleUpdate(product)}>
          <FaPencilAlt className={styles.icon} />
        </button>
        <button onClick={() => handleDelete(product.img_name, product.id)}>
          <FaTrashAlt className={styles.icon} />
        </button>
      </td>
    </tr>
  );
};
