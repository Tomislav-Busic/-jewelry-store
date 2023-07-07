import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "store";
import { loginActions } from "store/slice/login/login-slice";
import { LogoutBtn } from "./LogoutBtn";

describe("LogoutBtn", () => {
  it("should dispatch logout action when clicked", async () => {
    const mockDispatch = jest.fn();
    const mockNavigate = jest.fn();

    React.useDispatch = jest.fn(() => mockDispatch);
    React.useNavigate = jest.fn(() => mockNavigate);

    render(
      <MemoryRouter>
        <Provider store={store}>
          <LogoutBtn />
        </Provider>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Odjavi se"));

    expect(mockDispatch).toHaveBeenCalledWith(loginActions.logout());
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
