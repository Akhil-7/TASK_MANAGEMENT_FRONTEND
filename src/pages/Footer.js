import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const isAuthenticated = !!localStorage.getItem('access');
  const isDashboardPath = location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/tasks');

  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    navigate('/login');
  };

  return (
    <footer className="bg-gray-900 text-white text-center p-4">
      @2025
    </footer>
  );
}

export default Footer;
