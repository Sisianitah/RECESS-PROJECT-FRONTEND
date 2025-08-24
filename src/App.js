import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';
import HeroSection from './Components/Herosection';
import Services from './Pages/Services';
import Blogs from './Pages/Blogs';
// import TeamSection from './Components/Teamsection';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import SignUp from './Pages/SignUp';
import Footer from './Components/Footer';
import Testimonials from './Components/Testimonials';
import Operations from './Components/Operations';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Operations />
            {/* <TeamSection /> */}
            <AboutUs />
            <Contact />
            <Services />
            <SignUp />
            <Blogs />
            <Testimonials />
          </>
        } />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/operations" element={<Operations />} />
        {/* <Route path="/teamsection" element={<TeamSection />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sign Up" element={<SignUp />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;