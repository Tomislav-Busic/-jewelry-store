import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "./store/slice/login/login-slice";
import { firebaseData } from "./firebaseDB/firebaseData";

import { Layouts } from "layouts/Layouts";
import { HomePage } from "./pages/homePage/HomePage";
import { ServicesPage } from "./pages/servicesPage/ServicesPage";
import { LoginPage } from "./pages/loginPage/LoginPage";
import { DashboardPage } from "./pages/dashboardPage/DashboardPage";
import { UpdateProductsPage } from "./pages/updateProductsPage/UpdateProductsPage";
import { ProductsPage } from "./pages/productsPage/ProductsPage";
import { ContactPage } from "./pages/contactPage/ContactPage";
import { ContactEndOfPage } from "./components/contactEndOfPage/ContactEndOfPage";

import styles from "./assets/styles/app.module.scss";

function App() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user")) || null;
    dispatch(loginActions.login(currentUser));

    firebaseData(dispatch);
  }, [dispatch]);

  const RequireAuth = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/admin" />;
  };

  return (
    <div className={styles.app}>
      <Router>
        <Layouts />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prodaja" element={<ProductsPage />} />
          <Route path="/usluge" element={<ServicesPage />} />
          <Route path="/admin" element={<LoginPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route
            path="/admin-dashboard"
            element={
              <RequireAuth>
                <DashboardPage />
              </RequireAuth>
            }
          />
          <Route
            path="/update"
            element={
              <RequireAuth>
                <UpdateProductsPage />
              </RequireAuth>
            }
          />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <ContactEndOfPage />
      </Router>
    </div>
  );
}

export default App;
