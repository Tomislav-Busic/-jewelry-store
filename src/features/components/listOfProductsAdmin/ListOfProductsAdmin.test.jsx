import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ListOfProductsAdmin } from "./ListOfProductsAdmin";

describe("ListOfProductsAdmin", () => {
  it("should render correctly", () => {
    const { container } = render(<ListOfProductsAdmin />);
    expect(container).toMatchSnapshot();
  });
});
