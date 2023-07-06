import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "./Navbar";

describe("Navbar component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  it("should toggle the navbar when clicking on the hamburger icon", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByTestId("navbar")).not.toHaveClass("resposive_nav");

    fireEvent.click(screen.getByTestId("hamburger_icon"));

    expect(screen.getByTestId("navbar")).toHaveClass("resposive_nav");
  });

  it("should close the navbar when clicking on the close icon", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTestId("hamburger_icon"));

    expect(screen.getByTestId("navbar")).toHaveClass("resposive_nav");

    fireEvent.click(screen.getByTestId("close_icon"));

    expect(screen.getByTestId("navbar")).not.toHaveClass("resposive_nav");
  });
});
