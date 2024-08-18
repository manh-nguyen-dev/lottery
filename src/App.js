import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Dashboard from "./pages/Dashboard.js";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
