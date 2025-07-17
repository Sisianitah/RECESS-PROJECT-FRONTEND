import React from 'react';
import './App.css';
// import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/Herosection';
import Services from './Pages/Services';
import Blogs from './Pages/Blogs';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <div className="App">
      <Navbar />

      <HeroSection />

      <AboutUs />

      <Services />

      <Blogs />
    </div>
  );
}

export default App;