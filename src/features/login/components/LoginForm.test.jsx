import { screen, render, fireEvent, waitFor } from "@testing-library/react";
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

  it("should render the button if logged in", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/login"]}>
          {" "}
          <LoginForm isLoggedIn={true} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId("buttonIfItsLoggedIn")).not.toBeNull();
    expect(screen.queryByTestId("form")).not.toBeInTheDocument();
  });

  it("should call goToDashboard when button is clicked", async () => {
    const goToDashboardMock = jest.fn();

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/login"]}>
          {" "}
          <LoginForm isLoggedIn={true} goToDashboard={goToDashboardMock} />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByTestId("buttonIfItsLoggedIn"));

    await waitFor(() => expect(goToDashboardMock).toHaveBeenCalled());
  });

  it("should call setEmail when email input is changed", () => {
    const setEmailMock = jest.fn();

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/login"]}>
          {" "}
          <LoginForm setEmail={setEmailMock} />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText("email"), {
      target: { value: "test@test.com" },
    });

    expect(setEmailMock).toHaveBeenCalledWith("test@test.com");
  });

  it("should call setPassword when password input is changed", () => {
    const setPasswordMock = jest.fn();

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/login"]}>
          {" "}
          <LoginForm setPassword={setPasswordMock} />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText("password"), {
      target: { value: "password" },
    });

    expect(setPasswordMock).toHaveBeenCalledWith("password");
  });

  it("should call handleLogin when form is submitted", async () => {
    const handleLoginMock = jest.fn();

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/login"]}>
          {" "}
          <LoginForm handleLogin={handleLoginMock} />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.submit(screen.getByTestId("form"));

    await waitFor(() => expect(handleLoginMock).toHaveBeenCalled());
  });

  it("should render error message if error is true", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/login"]}>
          {" "}
          <LoginForm error={true} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Wrong email or password")).not.toBeNull();
  });
});
