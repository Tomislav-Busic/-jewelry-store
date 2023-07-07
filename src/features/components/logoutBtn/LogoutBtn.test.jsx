import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "store";
import { loginActions } from "store/slice/login/login-slice";
import { LogoutBtn } from "./LogoutBtn";

describe("LogoutBtn", () => {
  it("should dispatch logout action when clicked", () => {
    const handleLogout = jest.fn();

    render(
      <MemoryRouter>
        <Provider store={store}>
          <LogoutBtn onClick={handleLogout} />
        </Provider>
      </MemoryRouter>
    );

    const button = screen.getByText("Odjavi se");

    expect(button).toHaveTextContent("Odjavi se");

    fireEvent.click(button);

    expect(handleLogout).toHaveBeenCalled();
  });
});
