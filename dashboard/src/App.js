import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import AddUser from './Pages/AddUser';
import ShowUsers from './Pages/ShowUsers';
import ContactMessages from './Pages/ContactMessages';
import Customers from './Pages/Payments';
import Payments from './Pages/Customers';
import Services from './Pages/Services';
import Testimonials from './Pages/Testimonials';
import Dashboard from './Pages/Dashboard';
// import Bookings from './Pages/Bookings';
import Blog from './Pages/Blog';
import Bookings from './Pages/Bookings';
import AddAdmin from './Pages/AddAdmin';
import AdminsList from './Pages/AdminsList';
// import Login from './Pages/Login';
 

function App() {
  return (
    <Router>
      <div className='d-flex'>
        <Sidebar/>

        <div className="flex-grow-1 p-4 bg-light min-vh-100">
          <Routes>
            <Route path="/" element={<Navigate to="/add-user" />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/show-users" element={<ShowUsers />} />
            
            <Route path="/contact-messages" element={<ContactMessages />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            {/* <Route path="/bookings" element={<Bookings/>} /> */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/add-admin" element={<AddAdmin/>} />
             <Route path="/adminslist" element={<AdminsList/>} />
             {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;