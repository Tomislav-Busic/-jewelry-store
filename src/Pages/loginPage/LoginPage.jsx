import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { loginActions } from "../../store/slice/login-slice";
import { goToTopOfPage } from "../../utilities/tools";
import { AdminLoginForm } from "../../components/adminComponents/adminLoginForm/AdminLoginForm";

import styles from "./login.module.scss";

export const LoginPage = () => {
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
    <div className={styles.loggin}>
      <h1>Administrator</h1>

      <div className={styles.container}>
        <h2>
          Ukoliko niste vlasnik stranice molimo Vas da se vratite na početnu
          stranicu! Hvala :)
        </h2>
        <button onClick={handleBack}>Povratak na početnu</button>
        <AdminLoginForm
          handleLogin={handleLogin}
          isLoggedIn={isLoggedIn}
          goToDashboard={goToDashboard}
          setEmail={setEmail}
          setPassword={setPassword}
          error={error}
        />
      </div>
    </div>
  );
};
