import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ContactLinks } from "./ContactLinks";

describe("ContactLinks", () => {
  it("renders the social icons", () => {
    render(<ContactLinks />);
    expect(screen.getByTestId("contact_links")).toBeInTheDocument();
    expect(screen.getByTestId("social_icons")).toBeInTheDocument();
  });
});
