import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "store";
import { Dashboard } from "./Dashboard";

describe("Dashboard", () => {
  test("should render Dashboard component", () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );

    expect(screen.getByText(/Administrator/i)).toBeInTheDocument();
  });
});
