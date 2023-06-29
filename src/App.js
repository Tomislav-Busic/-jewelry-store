import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "./store/slice/login-slice";
import { firebaseData } from "./firebaseDB/firebaseData";

import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Home } from "./pages/homePage/HomePage";
import { Services } from "./pages/servicesPage/ServicesPage";
import { Admin } from "./pages/loginPage/LoginPage";
import { AdminDashboard } from "./pages/dashboardPage/DashboardPage";
import { AdminUpdateProduct } from "./pages/updateProducts/updateProducts";
import { Sale } from "./pages/productsPage/ProductsPage";
import { ContactPage } from "./pages/contactPage/ContactPage";
import { ContactFooter } from "./components/contactFooter/ContactFooter";

import styles from "./styles/app.module.scss";

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
        <Navbar />
        <Footer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prodaja" element={<Sale />} />
          <Route path="/usluge" element={<Services />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route
            path="/admin-dashboard"
            element={
              <RequireAuth>
                <AdminDashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/update"
            element={
              <RequireAuth>
                <AdminUpdateProduct />
              </RequireAuth>
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
        <ContactFooter />
      </Router>
    </div>
  );
}

export default App;
