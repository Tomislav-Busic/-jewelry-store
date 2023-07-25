import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import emailjs from "emailjs-com";
import { Contact } from "./Contact";

jest.mock("emailjs-com", () => ({
  sendForm: jest.fn().mockResolvedValueOnce("success"),
}));

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

  /* it("should trigger sendEmail function on form submit and render response component", async () => {
    render(<Contact />);

    const form = screen.getByTestId("form");
    fireEvent.submit(form);

    await waitFor(() => {
      expect(emailjs.sendForm).toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(screen.getByTestId("email-response")).toBeInTheDocument();
    });
  }); */
});
