import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { DarkModeProvider } from './contexts/DarkModeContext';
import BlackHoleEntrance from './components/BlackHoleEntrance';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Leadership from './pages/Leadership';
import Skills from './pages/Skills';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Component to handle scroll reset on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Black hole simulation as the default route */}
          <Route path="/" element={<BlackHoleEntrance />} />
          
          {/* Main site routes with navigation */}
          <Route path="/home" element={
            <div className="App min-h-screen retro-bg">
              <Navigation />
              <Home />
            </div>
          } />
          <Route path="/about" element={
            <div className="App min-h-screen retro-bg">
              <Navigation />
              <About />
            </div>
          } />
          <Route path="/academics" element={
            <div className="App min-h-screen retro-bg">
              <Navigation />
              <Academics />
            </div>
          } />
          <Route path="/experience" element={
            <div className="App min-h-screen retro-bg">
              <Navigation />
              <Experience />
            </div>
          } />
          <Route path="/projects" element={
            <div className="App min-h-screen retro-bg">
              <Navigation />
              <Projects />
            </div>
          } />
          <Route path="/leadership" element={
            <div className="App min-h-screen retro-bg">
              <Navigation />
              <Leadership />
            </div>
          } />
          <Route path="/skills" element={
            <div className="App min-h-screen retro-bg">
              <Navigation />
              <Skills />
            </div>
          } />
          <Route path="/gallery" element={
            <div className="App min-h-screen retro-bg">
              <Navigation />
              <Gallery />
            </div>
          } />
          <Route path="/contact" element={
            <div className="App min-h-screen retro-bg">
              <Navigation />
              <Contact />
            </div>
          } />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;