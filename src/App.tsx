import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OurWork from './components/OurWork';
import BeggarAssistance from './components/BeggarAssistance';
import Impact from './components/Impact';
import PastEvents from './components/PastEvents';
import Gallery from './components/Gallery';
import GetInvolved from './components/GetInvolved';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';
import Policies from './components/Policies';
import './index.css';

function App() {
  useEffect(() => {
    document.title = 'Heaven on Earth Foundation - Catalyst for Sustainable Change';
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/policies/:policyType" element={<Policies />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/" element={
          <div>
            <Navbar />
            <Hero />
            <About />
            <OurWork />
            <BeggarAssistance />
            <Impact />
            <PastEvents />
            <Gallery />
            <GetInvolved />
            <Contact />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;