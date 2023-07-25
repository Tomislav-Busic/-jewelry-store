import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ContactLinks } from "./ContactLinks";

describe("ContactLinks", () => {
  it("renders the social icons", () => {
    render(<ContactLinks />);
    expect(screen.getByTestId("contact_links")).toBeInTheDocument();
    expect(screen.getByTestId("social_icons")).toBeInTheDocument();
  });

  it("renders the contact information", () => {
    render(<ContactLinks />);
    expect(screen.getByText("anita@calviantique.hr")).toBeInTheDocument();
    expect(screen.getByText("anita@calviantique.hr")).toHaveAttribute(
      "href",
      "mailto:anita@calviantique.hr"
    );

    expect(screen.getByText("Anita")).toBeInTheDocument();
    expect(screen.getByText("+385992882894")).toBeInTheDocument();
    expect(screen.getByText("+385992882894")).toHaveAttribute(
      "href",
      "tel:+385992882894"
    );

    expect(screen.getByText("Ivica")).toBeInTheDocument();
    expect(screen.getByText("+38598229078")).toBeInTheDocument();
    expect(screen.getByText("+38598229078")).toHaveAttribute(
      "href",
      "tel:+38598229078"
    );

    expect(screen.getByText("Praška 10, Zagreb")).toBeInTheDocument();
  });
});
