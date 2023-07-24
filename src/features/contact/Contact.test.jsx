import { render, screen, fireEvent } from "@testing-library/react";
import { Contact } from "./Contact";

describe("Contact", () => {
  it("should render Contact component", () => {
    render(<Contact />);
    const heading = screen.getByText("Kontakt");
    const form = screen.getByTestId("form");
    const links = screen.getByTestId("form");

    expect(heading).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(links).toBeInTheDocument();
  });
});
