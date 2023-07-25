import { render, screen, fireEvent } from "@testing-library/react";
import { ContactForm } from "./ContactForm";

describe("ContactForm", () => {
  test("submitting the contact form should call sendEmail", () => {
    const sendEmailMock = jest.fn();

    render(<ContactForm sendEmail={sendEmailMock} />);

    const form = screen.getByTestId("form");

    fireEvent.change(screen.getByPlaceholderText("Vaše ime"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Vaša email adresa"), {
      target: { value: "johndoe@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Poruka..."), {
      target: { value: "Hello, I'd like to contact you." },
    });

    fireEvent.submit(form);

    expect(sendEmailMock).toHaveBeenCalled();
  });
});
