import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { ProductAdmin } from "./ProductAdmin";

describe("ProductAdmin", () => {
  it("should render correctly", () => {
    const product = {
      img: "image.jpg",
      name: "Product Name",
      category: "Category",
    };

    const handleDelete = jest.fn();
    const handleUpdate = jest.fn();

    const { container } = render(
      <ProductAdmin
        product={product}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    );

    expect(container).not.toBeNull();
  });

  it("should call handleDelete when delete button is clicked", () => {
    const product = {
      img_name: "image.jpg",
      id: "1",
      img: "image.jpg",
      name: "Product Name",
      category: "Category",
    };

    const handleDelete = jest.fn();
    const handleUpdate = jest.fn();

    render(
      <ProductAdmin
        product={product}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    );

    const button = user.click(button);

    expect(handleDelete).toHaveBeenCalled();
  });
});
