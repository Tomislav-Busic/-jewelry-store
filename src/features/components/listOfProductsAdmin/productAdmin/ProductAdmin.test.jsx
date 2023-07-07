import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "store";
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

    const tbody = document.createElement("tbody");

    const { container } = render(
      <ProductAdmin
        product={product}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />,
      {
        container: document.body.appendChild(tbody),
      }
    );

    expect(container).toBeTruthy();
  });

  it("should call handleDelete when delete button is clicked", async () => {
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
      <MemoryRouter initialEntries={["/admin-dashboard"]}>
        <Provider store={store}>
          <ProductAdmin
            product={product}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        </Provider>
      </MemoryRouter>
    );

    const button = await waitFor(() =>
      screen.findByTestId("update_product_btn")
    );

    fireEvent.click(button);

    expect(handleUpdate).toHaveBeenCalledWith(product);
  });

  it("should call handleUpdate when delete button is clicked", async () => {
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
      <MemoryRouter initialEntries={["/admin-dashboard"]}>
        <Provider store={store}>
          <ProductAdmin
            product={product}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        </Provider>
      </MemoryRouter>
    );

    const button = await waitFor(() =>
      screen.findByTestId("delete_product_btn")
    );

    fireEvent.click(button);

    expect(handleDelete).toHaveBeenCalledWith(product.img_name, product.id);
  });
});
