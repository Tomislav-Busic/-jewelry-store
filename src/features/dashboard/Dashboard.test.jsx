import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "store";
import { MemoryRouter } from "react-router-dom";
import { Dashboard } from "./Dashboard";

describe("Dashboard", () => {
  test("should render Dashboard component", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(/Administrator/i)).toBeInTheDocument();
  });
});
