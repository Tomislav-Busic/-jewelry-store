import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseDB/firebase";
import { loginActions } from "store/slice/login/login-slice";
import { goToTopOfPage } from "utilities/tools";
import { LoginForm } from "./components/LoginForm";

import styles from "./login.module.scss";

export const Login = () => {
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
    <div className={styles.container}>
      <h1>Administrator</h1>
      <h2>
        Ukoliko niste administrator molimo Vas napustite stranicu stranicu!
        Hvala :)
      </h2>
      <button data-testid="button" onClick={handleBack}>
        Povratak na početnu
      </button>
      <LoginForm
        handleLogin={handleLogin}
        isLoggedIn={isLoggedIn}
        goToDashboard={goToDashboard}
        setEmail={setEmail}
        setPassword={setPassword}
        error={error}
      />
    </div>
  );
};
