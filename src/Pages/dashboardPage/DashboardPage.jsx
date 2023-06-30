import { Dashboard } from "features/dashboard/Dashboard";

import styles from "./dashboardPage.module.scss";

export const DashboardPage = () => {
  return (
    <div className={styles.admin_dashboard}>
      <Dashboard />
    </div>
  );
};
