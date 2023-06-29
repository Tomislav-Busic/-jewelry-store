import React from "react";
import "./adminLoginForm.scss";

export const AdminLoginForm = ({
  handleLogin,
  isLoggedIn,
  goToDashboard,
  setEmail,
  setPassword,
  error,
}) => {
  return (
    <form onSubmit={handleLogin}>
      {isLoggedIn ? (
        <button onClick={goToDashboard}>Admin dashboard</button>
      ) : (
        <>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
          <br />

          {error && <span>Wrong email or password</span>}
        </>
      )}
    </form>
  );
};
