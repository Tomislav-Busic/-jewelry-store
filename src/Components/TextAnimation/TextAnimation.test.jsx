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

  it("component items renders correctly", async () => {
    jest.setTimeout(20000);

    render(
      <MemoryRouter>
        <TextAnimation />
      </MemoryRouter>
    );

    expect(screen.getByText("IZRADA NAKITA PO NARUDŽBI")).toBeInTheDocument();

    await waitFor(() => screen.findByText("POPRAVCI I RESTAURIRANJE NAKITA"), {
      timeout: 7000,
    });
    expect(
      screen.getByText("POPRAVCI I RESTAURIRANJE NAKITA")
    ).toBeInTheDocument();

    await waitFor(() => screen.findByText("KOMISIONA PRODAJA"), {
      timeout: 7000,
    });
    expect(screen.getByText("KOMISIONA PRODAJA")).toBeInTheDocument();

    await waitFor(() => screen.findByText("FRANCUSKI ANTIKVITETI"), {
      timeout: 7000,
    });
    expect(screen.getByText("FRANCUSKI ANTIKVITETI")).toBeInTheDocument();
  }, 20000);
});
