import React from "react";
import { render, screen } from "@testing-library/react";
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
});
