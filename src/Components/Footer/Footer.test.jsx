import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("should render the correct year", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const currentYear = new Date().getFullYear();

    expect(
      screen.getByText(`© 2023 - ${currentYear} CALVI | Designed By`)
    ).toBeInTheDocument();
  });

  it("should render the correct link", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByText("Tomislav Bušić")).toHaveAttribute(
      "href",
      "https://tomislav-busic.web.app/"
    );
  });
});
