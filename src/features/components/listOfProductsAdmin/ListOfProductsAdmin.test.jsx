import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "store";
import { ListOfProductsAdmin } from "./ListOfProductsAdmin";
import { ProductAdmin } from "./productAdmin/ProductAdmin";

describe("ListOfProductsAdmin", () => {
  it("should render correctly", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/admin-dashboard"]}>
        <Provider store={store}>
          <ListOfProductsAdmin />
        </Provider>
      </MemoryRouter>
    );
    expect(container).not.toBeNull();
  });

  it("should render the table with the correct data", () => {
    const mockData = [
      { name: "Product 1", category: "Category 1" },
      { name: "Product 2", category: "Category 2" },
    ];
    const view = render(
      <MemoryRouter initialEntries={["/admin-dashboard"]}>
        <Provider store={store}>
          <ListOfProductsAdmin data={mockData} />
        </Provider>
      </MemoryRouter>
    );

    expect(view.find("table").length).toBe(1);
    expect(view.find("tr").length).toBe(3);
  });
});
