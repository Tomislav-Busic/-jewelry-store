import React from "react";
import { render, screen } from "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

import { AnimationBtn } from "./animationBtn";

it("renders the component correctly", () => {
  render(<AnimationBtn name="Test" path="/test" color="red" />);

  const link = screen.getByTestId("link");
  expect(link.innerHTML).toBe("Test");
  expect(link.getAttribute("href")).toBe("/test");
});

it("calls goToTopOfPage when clicked", () => {
  const goToTopOfPage = jest.fn();

  render(
    <AnimationBtn
      name="Test"
      path="/test"
      color="red"
      goToTopOfPage={goToTopOfPage}
    />
  );

  const link = screen.getByTestId("link");

  act(() => {
    link.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(goToTopOfPage).toHaveBeenCalledTimes(1);
});
