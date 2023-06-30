import { Login } from "features/login/Login";

import styles from "./loginPage.module.scss";

export const LoginPage = () => {
  return (
    <div className={styles.loggin}>
      <Login />
    </div>
  );
};
