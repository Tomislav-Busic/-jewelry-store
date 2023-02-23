import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../../store/slice/login-slice";
import { goToTopOfPage } from "../../Tools/Tools";
import "./Admin.scss";

export const Admin = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(loginActions.login(user));
        navigate("/admin-dashboard");
        goToTopOfPage();
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };

  const goToDashboard = () => {
    navigate("/admin-dashboard");
    goToTopOfPage();
  };

  const handleBack = () => {
    dispatch(loginActions.logout());
    navigate("/");
    goToTopOfPage();
  };

  return (
    <div className="admin">
      <h1>Administrator</h1>

      <div className="container">
        <h2>
          Ukoliko niste vlasnik stranice molimo Vas da se vratite na početnu
          stranicu! Hvala :)
        </h2>
        <button onClick={handleBack}>Povratak na početnu</button>
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
