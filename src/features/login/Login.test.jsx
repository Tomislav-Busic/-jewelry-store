import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "store";
import { Login } from "./Login";

describe("Login", () => {
  it("should render Login", () => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/admin"]}>
          {" "}
          <Login />
        </MemoryRouter>
      </Provider>
    );

    expect(getByText).not.toBeNull();
  });

  it("should render Login elements", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/admin"]}>
          {" "}
          <Login />
        </MemoryRouter>
      </Provider>
    );

    const h1Element = screen.getByText("Administrator");
    const h2Element = screen.getByText(
      "Ukoliko niste administrator molimo Vas napustite stranicu stranicu! Hvala :)"
    );

    expect(h1Element).toBeInTheDocument();
    expect(h2Element).toBeInTheDocument();
  });

  it("the Back to Home button from the admin page", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/admin"]}>
          {" "}
          <Login />
        </MemoryRouter>
      </Provider>
    );

    const button = screen.getByTestId("button");

    user.click(button);

    expect(window.location.pathname).toBe("/");
  });
});
