import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("should render the correct year", () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();

    expect(
      screen.getByText(`© 2023 - ${currentYear} CALVI`)
    ).toBeInTheDocument();
  });

  it("should render the correct link", () => {
    render(<Footer />);

    expect(screen.getByText("Tomislav Bušić")).toHaveAttribute(
      "href",
      "https://tomislav-busic.web.app/"
    );
  });
});
