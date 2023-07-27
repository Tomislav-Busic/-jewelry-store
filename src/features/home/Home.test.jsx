import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "store";
import { MemoryRouter } from "react-router-dom";
import { Home } from "./Home";

describe("Home", () => {
  test("should render Home component", () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </MemoryRouter>
    );

    expect(container).toBeInTheDocument();
  });
});
