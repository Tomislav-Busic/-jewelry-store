import "./Styles/App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Home } from "./Pages/Home/Home";
import { Work } from "./Pages/Work/Work";
import { Admin } from "./Pages/Admin/Admin";
import { AdminDashboard } from "./Pages/AdminDashboard/AdminDashboard";
import { Update } from "./Pages/Update/Update";
import { WorksOfArt } from "./Pages/WorksOfArt/WorksOfArt";
import { ContactPage } from "./Pages/ContactPage/ContactPage";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/admin" />;
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Footer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/umjetnine" element={<WorksOfArt />} />
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
      </Router>
    </div>
  );
}

export default App;
