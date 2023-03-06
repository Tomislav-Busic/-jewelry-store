import React from "react";
import { loginActions } from "../../store/slice/login-slice";
import { useDispatch } from "react-redux";
import { useNavigation } from "react-router-dom";

export const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigation();

  const handleLogout = () => {
    dispatch(loginActions.logout());
    navigate("/");
  };

  return <button onClick={handleLogout}>Odjavi se</button>;
};
