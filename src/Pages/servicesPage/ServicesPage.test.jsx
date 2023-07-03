import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ServicesPage } from "./ServicesPage";

describe("ServicesPage", () => {
  it("should render ServicesPage", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={[{ pathname: "/usluge" }]}>
        <ServicesPage />
      </MemoryRouter>
    );

    expect(getByText).not.toBeNull();
  });
});
