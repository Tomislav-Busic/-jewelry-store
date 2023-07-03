import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ContactPage } from "./ContactPage";

describe("ContactPage", () => {
  it("should render ContactPage", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={[{ pathname: "/kontakt" }]}>
        <ContactPage />
      </MemoryRouter>
    );

    expect(getByText).not.toBeNull();
  });
});
