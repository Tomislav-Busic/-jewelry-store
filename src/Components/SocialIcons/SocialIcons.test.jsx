import React from "react";
import { render, screen } from "@testing-library/react";
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

  it("SocialIcons component links open in new tab", () => {
    render(
      <MemoryRouter>
        <SocialIcons />
      </MemoryRouter>
    );

    const facebookLink = screen.getByTestId("social_icon_fb");
    const instagramLink = screen.getByTestId("social_icon_in");
    const linkedinLink = screen.getByTestId("social_icon_li");

    expect(facebookLink.getAttribute("target")).toBe("_blank");
    expect(instagramLink.getAttribute("target")).toBe("_blank");
    expect(linkedinLink.getAttribute("target")).toBe("_blank");
  });
});
