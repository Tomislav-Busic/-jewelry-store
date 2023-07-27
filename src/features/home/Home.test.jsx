import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "store";
import { MemoryRouter } from "react-router-dom";
import { Home } from "./Home";

describe("Dashboard", () => {
  test("should render Dashboard component", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </MemoryRouter>
    );
  });
});
