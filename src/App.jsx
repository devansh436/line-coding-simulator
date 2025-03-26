import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Simulation from './pages/Simulation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex flex-column bg-dark min-vh-100">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}>  </Route>
        <Route path="/simulation" element={<Simulation/>}>  </Route>
      </Routes>
    </Router>
      <Footer/>
    </div>
  )
}

export default App;
