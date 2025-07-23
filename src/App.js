import React from 'react';
import './App.css';
// import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/Herosection';
import Services from './Pages/Services';
import Blogs from './Pages/Blogs';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar />

      <HeroSection />

      <AboutUs />

      <Contact />

      <Services />

      <Blogs />

      <Testimonials />

      <Footer />
    </div>
  );
}

export default App;