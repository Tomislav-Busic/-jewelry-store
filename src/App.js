import "./Styles/App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginActions } from "./store/slice/login-slice";
import { firebaseData } from "./DataFirebase/firebaseData";

import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Home } from "./Pages/Home/Home";
import { Work } from "./Pages/Work/Work";
import { Admin } from "./Pages/Admin/Admin";
import { AdminDashboard } from "./Pages/AdminDashboard/AdminDashboard";
import { Update } from "./Pages/Update/Update";
import { WorksOfArt } from "./Pages/WorksOfArt/WorksOfArt";
import { ContactPage } from "./Pages/ContactPage/ContactPage";
import { ContactFooter } from "./Components/ContactFooter/ContactFooter";

function App() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user")) || null;
    dispatch(loginActions.login(currentUser));

    firebaseData(dispatch);
  }, []);

  const RequireAuth = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/admin" />;
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Footer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prodaja" element={<WorksOfArt />} />
          <Route path="/usluge" element={<Work />} />
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
                <Update />
              </RequireAuth>
            }
          />
        </Routes>
        <ContactFooter />
      </Router>
    </div>
  );
}

export default App;
