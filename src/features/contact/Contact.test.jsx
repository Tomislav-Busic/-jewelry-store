import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Contact } from "./Contact";

describe("Contact", () => {
  it("should render Contact component", () => {
    render(<Contact />);

    const heading = screen.getByText(/Kontakt/i);
    const form = screen.getByTestId("form");
    const links = screen.getByTestId("links");

    expect(heading).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(links).toBeInTheDocument();
  });

  /*
    it("should trigger sendEmail function on form submit", () => {
    const { getByLabelText } = render(<Contact />);
    const form = getByLabelText("contact-form");
    const preventDefault = jest.fn();
    const mockSendEmail = jest.fn();

    fireEvent.submit(form, { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(mockSendEmail).toHaveBeenCalledTimes(1);
  });
  */
});
