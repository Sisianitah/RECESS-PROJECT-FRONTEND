// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import './App.css';

// import Navbar from './Components/Navbar';
// import HeroSection from './Components/Herosection';
// import Services from './Pages/Services';
// import Blogs from './Pages/Blogs';
// import AboutUs from './Pages/AboutUs';
// import Contact from './Pages/Contact';
// import SignUp from './Pages/SignUp';
// import Footer from './Components/Footer';
// import Testimonials from './Components/Testimonials';
// import Operations from './Components/Operations';



// // Importing the LoginPage and AdminLogin components
// import AdminLogin from './Components/admin/AdminLogin';
// import Dashboard from './Components/admin/Dashboard';
// import Bookings from './Components/admin/Bookings';
// import ContactMessages from './Components/admin/ContactMessages';
// import Customers from './Components/admin/Customers';


// function App() {


//   const location = useLocation();
//   const isAdminRoute = location.pathname.startsWith('/admin');


//   return (
//     <>
//     {/* {!isAdminRoute && <Header />} */}

    



//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={
//           <>
//             <HeroSection />
//             <Operations />
//             <AboutUs />
//             <Contact />
//             <Services />
//             <SignUp />
//             <Blogs />
//             <Testimonials />
//           </>
//         } />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/operations" element={<Operations />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/sign Up" element={<SignUp />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/testimonials" element={<Testimonials />} />

//         {/* Admin Routes */}
//         <Route path="/admin/login" element={<AdminLogin />} />
//         <Route path="/admin" element={<Dashboard />} />
//         <Route path="/admin/bookings" element={<Bookings />} />
//         <Route path="/admin/customers" element={<Customers />} />
//         <Route path="/admin/contact-messages" element={<ContactMessages />} />
//       </Routes>
//       <Footer />
//     </Router>

//     {/* {  !isAdminRoute && <Footer />} */}
//     </>
//   );
// }

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import './App.css';

// // Website Components
// import Navbar from './Components/Navbar';
// import HeroSection from './Components/Herosection';
// import Testimonials from './Components/Testimonials';
// import Operations from './Components/Operations';
// import Footer from './Components/Footer';

// // Website Pages
// import Services from './Pages/Services';
// import Blogs from './Pages/Blogs';
// import AboutUs from './Pages/AboutUs';
// import Contact from './Pages/Contact';
// import SignUp from './Pages/SignUp';

// // Admin Components
// import AdminLogin from './Components/admin/AdminLogin';
// import Dashboard from './Components/admin/Dashboard';
// import Bookings from './Components/admin/Bookings';
// import ContactMessages from './Components/admin/ContactMessages';
// import Customers from './Components/admin/Customers';
// import Sidebar  from './Components/admin/Sidebar';
// // Admin Components / Layout
// import AdminLayout from './Components/admin/AdminLayout';
// import Service from './Components/admin/Service';


// // Wrapper component to use hooks like useLocation inside Router
// function AppWrapper() {
//   const location = useLocation();
//   const isAdminRoute = location.pathname.startsWith('/admin');

//   return (
//     <>
//       {!isAdminRoute && <Navbar />}

//       <Routes>
//         {/* Website Routes */}
//         <Route
//           path="/"
//           element={
//             <>
//               <HeroSection />
//               <Operations />
//               <AboutUs />
//               <Contact />
//               <Services />
//               <SignUp />
//               <Blogs />
//               <Testimonials />
//             </>
//           }
//         />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/operations" element={<Operations />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/testimonials" element={<Testimonials />} />

//         {/* Admin Routes */}
//         <Route path="/admin/login" element={<AdminLogin />} />
//         <Route path="/admin" element={<Dashboard />} />
//         <Route path="/admin/bookings" element={<Bookings />} />
//         <Route path="/admin/customers" element={<Customers />} />
//         <Route path="/admin/contact-messages" element={<ContactMessages />} />
//         <Route path="/admin/dashboard" element={<Dashboard />} />
//         <Route path="/admin/service" element={<Service />} />
//         <Route path="/admin/sidebar" element={<Sidebar />} />
//         <Route path="/admin/*" element={<AdminLayout />} />

//       </Routes>

//       {!isAdminRoute && <Footer />}
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AppWrapper />
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Website Components
import Navbar from './Components/Navbar';
import HeroSection from './Components/Herosection';
import Testimonials from './Components/Testimonials';
import Operations from './Components/Operations';
import Footer from './Components/Footer';

// Website Pages
import Services from './Pages/Services';
import Blogs from './Pages/Blogs';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import SignUp from './Pages/SignUp';

// Admin Components
import AdminLogin from './Components/admin/AdminLogin';
import AdminLayout from './Components/admin/AdminLayout';
import Logout from './Components/admin/Logout';
// import AdminDashboard  from  './Components/admin/Dashboard'; // layout handles dashboard, bookings, etc.

// Wrapper component to use hooks like useLocation inside Router
function AppWrapper() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* Website Routes */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Operations />
              <AboutUs />
              <Contact />
              <Services />
              <SignUp />
              <Blogs />
              <Testimonials />
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/testimonials" element={<Testimonials />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/admin/logout" element={<Logout />} />

          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} /> 
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
