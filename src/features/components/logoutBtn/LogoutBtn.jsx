import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginActions } from "store/slice/login/login-slice";

import styles from "./logoutBtn.module.scss";

export const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(loginActions.logout());
    navigate("/");
  };

  return (
    <button className={styles.logout_btn} onClick={handleLogout}>
      Odjavi se
    </button>
  );
};
