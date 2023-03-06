import React from "react";
import { loginActions } from "../../store/slice/login-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./LogoutBtn.scss";

export const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(loginActions.logout());
    navigate("/");
  };

  return (
    <button className="logout-btn" onClick={handleLogout}>
      Odjavi se
    </button>
  );
};
