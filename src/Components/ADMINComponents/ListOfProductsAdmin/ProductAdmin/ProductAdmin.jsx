import React from "react";
import "./ProductAdmin.scss";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

export const ProductAdmin = ({
  product,
  index,
  handleDelete,
  handleUpdate,
}) => {
  return (
    <tr key={index}>
      <td>
        <img className="table-img" src={product.img} />
      </td>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td className="table-actions">
        <button onClick={() => handleUpdate(product)}>
          <FaPencilAlt className="icon" />
        </button>
        <button onClick={() => handleDelete(product.img_name, product.id)}>
          <FaTrashAlt className="icon" />
        </button>
      </td>
    </tr>
  );
};
