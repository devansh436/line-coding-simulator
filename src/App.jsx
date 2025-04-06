import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Simulation from "./pages/Simulation";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column bg-dark min-vh-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simulation" element={<Simulation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
