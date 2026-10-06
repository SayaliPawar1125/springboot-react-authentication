import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ user, onLogout }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold text-info" to="/">AuthApp</Link>
        <div className="d-flex align-items-center">
          <Link className="nav-link text-white me-3" to="/">Home</Link>
          {user ? (
            <div className="d-flex align-items-center gap-3">
              <span className="text-info fw-semibold">Hello, {user.firstName}</span>
              <button onClick={handleLogoutClick} className="btn btn-danger btn-sm">
                Logout
              </button>
            </div>
          ) : (
            <div className="d-flex gap-2">
              <Link className="btn btn-outline-info btn-sm" to="/login">Login</Link>
              <Link className="btn btn-info btn-sm text-dark fw-semibold" to="/register">Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
