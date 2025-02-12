import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import ErrorPage from "./pages/ErrorPage";
import { useState } from "react";
import Intro from "./components/Intro";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <Router>
       <div className="font-inter">
        {showIntro ? (
          <Intro onFinish={() => setShowIntro(false)} />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
