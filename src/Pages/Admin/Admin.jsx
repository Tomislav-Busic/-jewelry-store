import React from "react";

export const Admin = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
