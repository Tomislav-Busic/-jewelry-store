import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Login } from "./Login";

describe("Login", () => {
  it("should render Login", () => {
    const { getByText } = render(<Login />);

    expect(getByText).not.toBeNull();
  });
});
