import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { ContactEndOfPage } from "./ContactEndOfPage";

describe("ContactEndOfPage", () => {
  it("should render the component correctly", () => {
    render(
      <MemoryRouter>
        <ContactEndOfPage />
      </MemoryRouter>
    );

    expect(screen.getByTestId("footer_contact")).toBeInTheDocument();
    expect(screen.getByTestId("footer_contact_container")).toBeInTheDocument();
    expect(screen.getByTestId("f_con_item")).toBeInTheDocument();
    expect(screen.getByTestId("map")).toBeInTheDocument();
  });

  it("should render the logo correctly", () => {
    render(<ContactEndOfPage />);

    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });

  it("should render the social icons correctly", () => {
    render(<ContactEndOfPage />);

    expect(screen.getByTestId("social_icons")).toBeInTheDocument();
  });
});
