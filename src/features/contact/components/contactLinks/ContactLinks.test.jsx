import React from "react";
import { render, screen } from "@testing-library/react";
import { ContactLinks } from "./ContactLinks";

describe("ContactLinks", () => {
  it("renders the social icons", () => {
    render(<ContactLinks />);
    expect(screen.getByTestId("links")).toBeInTheDocument();
    expect(screen.getByTestId("social-icons")).toBeInTheDocument();
  });
});
