import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Contact } from "./Contact";

jest.mock("emailjs-com", () => ({
  sendForm: jest.fn().mockResolvedValueOnce({}),
}));

describe("Contact", () => {
  test("should send an email", async () => {
    render(<Contact />);

    fireEvent.submit(screen.getByTestId("form"));

    const response = await waitFor(() => screen.findByTestId("email-response"));

    expect(response).toBeInTheDocument();
  });
});
