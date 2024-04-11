import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
