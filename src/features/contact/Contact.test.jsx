import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Contact } from "./Contact";

jest.mock("emailjs-com", () => ({
  sendForm: jest.fn().mockResolvedValueOnce({}),
}));

describe("Contact", () => {
  test("should send an email", async () => {
    render(<Contact />);

    fireEvent.click(screen.getByTestId("button"));

    await waitFor(() =>
      expect(screen.findByTestId("email-response")).toBeInTheDocument()
    );
  });
});
