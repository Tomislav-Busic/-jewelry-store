import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Dashboard } from "./Dashboard";

describe("Dashboard", () => {
  test("should render Dashboard component", () => {
    render(<Dashboard />);

    expect(screen.getByText(/Administrator/i)).toBeInTheDocument();
  });
});
