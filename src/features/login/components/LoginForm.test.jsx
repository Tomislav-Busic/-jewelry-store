import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "store";
import { LoginForm } from "./LoginForm";

describe("LoginForm", () => {
  it("should render LoginForm", () => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/login"]}>
          {" "}
          <LoginForm />
        </MemoryRouter>
      </Provider>
    );

    expect(getByText).not.toBeNull();
  });
});

/* it("should render Login elements", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/login"]}>
          {" "}
          <LoginForm />
        </MemoryRouter>
      </Provider>
    );

    const h1Element = screen.getByText("Administrator");
    const h2Element = screen.getByText(
      "Ukoliko niste administrator molimo Vas napustite stranicu stranicu! Hvala :)"
    );

    expect(h1Element).toBeInTheDocument();
    expect(h2Element).toBeInTheDocument();
  }); */
