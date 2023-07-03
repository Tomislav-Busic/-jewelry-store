import React from "react";

import styles from "./login.module.scss";

export const LoginForm = ({
  handleLogin,
  isLoggedIn,
  goToDashboard,
  setEmail,
  setPassword,
  error,
}) => {
  return (
    <form onSubmit={handleLogin} className={styles.form}>
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
          <button data-testid="button-submit" type="submit">
            Submit
          </button>
          <br />

          {error && <span>Wrong email or password</span>}
        </>
      )}
    </form>
  );
};
