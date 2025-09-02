import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './api'; // your Axios instance

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutAdmin = async () => {
      try {
        // Call logout API
        await api.post('/auth/logout');

        // Clear any stored token/session info
        localStorage.removeItem('adminToken'); // or whatever key you use

        // Redirect to website home
        navigate('/', { replace: true });
      } catch (err) {
        console.error('Logout failed', err);
        // still redirect even if API fails
        navigate('/', { replace: true });
      }
    };

    logoutAdmin();
  }, [navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Logging out...</h2>
    </div>
  );
}

export default Logout;
