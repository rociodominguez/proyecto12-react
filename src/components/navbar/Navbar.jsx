import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
        <Link to="/tres-en-raya" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Tres en Raya</Link>
        <Link to="/ahorcado" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Ahorcado</Link>
      </div>
    </nav>
  );
};

export default NavBar;
