import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { DashboardPage } from "./DashboardPage";

/* const RequireAuth = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/admin" />;
}; */

describe("DashboardPage", () => {
  it("should render DashboardPage", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={[{ pathname: "/admin-dashboard" }]}>
        <DashboardPage />
      </MemoryRouter>
    );

    expect(getByText).not.toBeNull();
  });
});
