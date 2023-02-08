import "./Styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { Work } from "./Pages/Work/Work";
import { Admin } from "./Pages/Admin/Admin";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
