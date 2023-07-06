import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
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

    expect(container).not.toBeNull();
  });

  it("should navigate to the home page when clicking on the logo", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Navbar />
      </MemoryRouter>
    );

    user.click(screen.getByTestId("nav_header"));

    expect(window.location.pathname).toBe("/");
  });

  it("should navigate to the prodaja page when clicking on the prodaja link", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Navbar />
      </MemoryRouter>
    );

    user.click(screen.getByText("PRODAJA"));

    await waitFor(() => expect(window.location.pathname).toBe("/prodaja"));
  });

  it("should navigate to the usluge page when clicking on the usluge link", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    user.click(screen.getByTestId("USLUGE"));

    expect(window.location.pathname).toBe("/usluge");
  });

  it("should navigate to the kontakt page when clicking on the kontakt link", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    user.click(screen.getByTestId("KONTAKT"));

    expect(window.location.pathname).toBe("/kontakt");
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
