import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "store";
import { Login } from "./Login";

describe("Login", () => {
  it("should render Login", () => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          {" "}
          <Login />
        </MemoryRouter>
      </Provider>
    );

    expect(getByText).not.toBeNull();
  });
});
