import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { TextAnimation } from "./TextAnimation";

describe("TextAnimation", () => {
  it("component renders correctly", () => {
    const { container } = render(
      <MemoryRouter>
        <TextAnimation />
      </MemoryRouter>
    );

    expect(container).not.toBeNull();
  });

  it("component items renders correctly", () => {
    render(
      <MemoryRouter>
        <TextAnimation />
      </MemoryRouter>
    );

    expect(screen.getByText("IZRADA NAKITA PO NARUDŽBI")).toBeInTheDocument();
    expect(
      screen.getByText("POPRAVCI I RESTAURIRANJE NAKITA")
    ).toBeInTheDocument();
    expect(screen.getByText("KOMISIONA PRODAJA")).toBeInTheDocument();
    expect(screen.getByText("FRANCUSKI ANTIKVITETI")).toBeInTheDocument();
  });
});
