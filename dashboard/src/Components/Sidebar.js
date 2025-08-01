// import React from 'react'
// import { Nav } from 'react-bootstrap'
// import { Link } from 'react-router-dom'


// const Sidebar = () => {
//     return (
//         <div>

//             <div className="bg-primary text-white vh-120 p-3" style={{ width: '250px' }}>
//                 <h3 className=" mb-4 mt-4"> Car Ac Masters Dashboard</h3>
//                 <Nav s className="flex-column">
//                     <Nav.Link as={Link} to="/add-user" className="text-white">Add User</Nav.Link>
//                     <Nav.Link as={Link} to="/show-users" className="text-white">Show Users</Nav.Link>
//                 </Nav>

//                 <Nav className="flex-column">
//   <Nav.Link as={Link} to="/dashboard" className="text-white">Dashboard</Nav.Link>
//   <Nav.Link as={Link} to="/customers" className="text-white">Customers</Nav.Link>
//   <Nav.Link as={Link} to="/bookings" className="text-white">Bookings</Nav.Link>
//   <Nav.Link as={Link} to="/services" className="text-white">Services</Nav.Link>
//   <Nav.Link as={Link} to="/payments" className="text-white">Payments</Nav.Link>
//   <Nav.Link as={Link} to="/testimonials" className="text-white">Testimonials</Nav.Link>
//   <Nav.Link as={Link} to="/contact-messages" className="text-white">Contact Messages</Nav.Link>
//   <Nav.Link as={Link} to="/articles" className="text-white">Blog Articles</Nav.Link>
//   <Nav.Link as={Link} to="/add-admin" className="text-white">Add Admin</Nav.Link>
//   <Nav.Link as={Link} to="/show-admins" className="text-white">Admins List</Nav.Link>
//   {/* <Nav.Link as={Link} to="/profile" className="text-white">My Profile</Nav.Link> */}
//   <Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link>
// </Nav>

//             </div>
//         </div>
//     )
// }

// export default Sidebar




import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div>
            <div style={{ backgroundColor: '#FF9751', color: 'white', height: '120vh', padding: '1rem', width: '250px' }}>
                <h3 className="mb-4 mt-4">Car Ac Masters Dashboard</h3>
                <Nav className="flex-column">
                    <Nav.Link as={Link} to="/add-user" className="text-white">Add User</Nav.Link>
                    <Nav.Link as={Link} to="/show-users" className="text-white">Show Users</Nav.Link>
                    <Nav.Link as={Link} to="/dashboard" className="text-white">Dashboard</Nav.Link>
                    <Nav.Link as={Link} to="/customers" className="text-white">Customers</Nav.Link>
                    <Nav.Link as={Link} to="/bookings" className="text-white">Bookings</Nav.Link>
                    <Nav.Link as={Link} to="/services" className="text-white">Services</Nav.Link>
                    <Nav.Link as={Link} to="/payments" className="text-white">Payments</Nav.Link>
                    <Nav.Link as={Link} to="/testimonials" className="text-white">Testimonials</Nav.Link>
                    <Nav.Link as={Link} to="/contact-messages" className="text-white">Contact Messages</Nav.Link>
                    <Nav.Link as={Link} to="/articles" className="text-white">Blog Articles</Nav.Link>
                    <Nav.Link as={Link} to="/add-admin" className="text-white">Add Admin</Nav.Link>
                    <Nav.Link as={Link} to="/show-admins" className="text-white">Admins List</Nav.Link>
                    {/* <Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link> */}
                </Nav>
            </div>
        </div>
    )
}

export default Sidebar
