import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "store";
import { Home } from "./Home";

describe("Home", () => {
  test("should render Home component", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Provider store={store}>
          <Home />
        </Provider>
      </MemoryRouter>
    );

    const home = screen.getByTestId("home");

    expect(home).toBeInTheDocument();
  });
});
