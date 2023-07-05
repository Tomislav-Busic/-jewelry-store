import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { AnimationBtn } from "./AnimationBtn";

describe("AnimationBtn", () => {
  it("should render AnimationBtn", () => {
    const { getByText } = render(
      <MemoryRouter>
        <AnimationBtn name="Test" path="/test" color="red" />
      </MemoryRouter>
    );

    expect(getByText).not.toBeNull();
  });
  it("should render the component correctly", () => {
    render(
      <MemoryRouter>
        <AnimationBtn name="Test" path="/test" color="red" />
      </MemoryRouter>
    );
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
