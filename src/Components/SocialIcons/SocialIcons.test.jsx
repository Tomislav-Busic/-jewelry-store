import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { SocialIcons } from "./SocialIcons";

describe("SocialIcons", () => {
  it("component renders correctly", () => {
    render(
      <MemoryRouter>
        <SocialIcons />
      </MemoryRouter>
    );

    expect(screen.getByTestId("social_icons")).toBeInTheDocument();
  });
});
