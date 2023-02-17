import React, { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../../store/slice/login-slice";
import "./Admin.scss";

export const Admin = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(loginActions.login(user));
        console.log(user);
        navigate("/admin-dashboard");
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };

  const goToDashboard = () => {
    navigate("/admin-dashboard");
  };

  return (
    <div className="admin">
      <h1>Login</h1>
      <div className="container">
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
      </div>
    </div>
  );
};
