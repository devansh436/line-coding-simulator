import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Simulation from './pages/Simulation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}>  </Route>
        <Route path="/simulation" element={<Simulation/>}>  </Route>
      </Routes>
    </Router>
  )
}

export default App;
