import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';

import Navbar from './Components/Navbar';
import HeroSection from './Components/Herosection';
// import Home from './Pages/Home';
import Services from './Pages/Services';
import Blogs from './Pages/Blogs';
import Teamsection from './Pages/Teamsection';   // ✅ Matches export default Teamsection
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import SignUp from './Pages/SignUp';
import Footer from './Components/Footer';
import Testimonials from './Components/Testimonials';
import Operations from './Components/Operations';
// import ServiceCard from './Components/ServicesCard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              {/* <Home /> */}
              <Operations />
              <Teamsection /> {/* ✅ no mismatch now */}
              <AboutUs />
              <Contact />
              <Services />
              {/* <ServiceCard /> */}
              <SignUp />
              <Blogs />
              <Testimonials />
            </>
          }
        />

        {/* Other pages */}
        <Route path="/home" element={<HeroSection />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/team" element={<Teamsection />} /> {/* ✅ cleaner route */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<SignUp />} /> {/* ❌ fixed 'sign Up' */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
