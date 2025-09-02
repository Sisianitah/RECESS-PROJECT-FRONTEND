// // src/components/admin/AdminLogin.jsx
// import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// import "./AdminLogin.css";
// import api from "../admin/api" ;

// function AdminLogin({ onLogin }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       console.log(`Sending: Email="${email}", Password="${password}"`); // Debug log

//       const res = await api.post(
//         "/auth/login", // Matches Postman exactly
//         { email: email.trim(), password: password },
//         { headers: { Authorization: "" } } // Force skip token header
//       );

//       console.log("Login success:", res.data);
//       localStorage.setItem("access_token", res.data.access_token);
//       localStorage.setItem("refresh_token", res.data.refresh_token);

//       if (onLogin) onLogin();
//     } catch (err) {
//       console.error(err);
//       setError(err.response?.data?.error || "Login failed");
//     }
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "auto" }}>
//       <h2>Admin Login</h2>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default AdminLogin;


import React, { useState } from "react";
import axios from "axios";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const api = axios.create({
        baseURL: "http://127.0.0.1:5000/api", // ✅ Force requests to Flask backend
        headers: { "Content-Type": "application/json" },
      });

      console.log("Sending login request to:", api.defaults.baseURL + "/auth/login");

      const res = await api.post("/auth/login", { email, password });

      console.log("Login success:", res.data);
      alert("Login successful! Access token: " + res.data.access_token);

    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
