// src/pages/Header.js
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
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
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
      <div className="text-xl font-semibold">Task Manager</div>
      <nav className="flex gap-6 items-center">
        {!isAuthenticated ? (
          <>
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/login" className="hover:text-blue-400 transition">Login</Link>
            <Link to="/register" className="hover:text-blue-400 transition">Register</Link>
          </>
        ) : (
          <>
            {isDashboardPath && (
              <>
                <Link to="/dashboard" className="hover:text-blue-400 transition">Dashboard</Link>
                <Link to="/tasks" className="hover:text-blue-400 transition">Tasks</Link>
                <Link to="/tasks/add" className="hover:text-blue-400 transition">Add Task</Link>
              </>
            )}
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
            >
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
