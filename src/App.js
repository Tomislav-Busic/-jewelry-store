import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RequireAuth } from "hooks/RequireAuth";
import { loginActions } from "./store/slice/login/login-slice";
import { getProducts } from "store/slice/data/data-slice";

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
  const dispatch = useDispatch();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user")) || null;
    dispatch(loginActions.login(currentUser));
    dispatch(getProducts());
  }, [dispatch]);

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
