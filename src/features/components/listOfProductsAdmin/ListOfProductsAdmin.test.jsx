import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "store";
import { ListOfProductsAdmin } from "./ListOfProductsAdmin";

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
});
