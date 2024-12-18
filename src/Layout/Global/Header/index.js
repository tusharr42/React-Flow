import React, { useState } from 'react';
import "./Header.css";
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">ReactFlow</div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`navbar-menu ${isMenuOpen ? 'menu-open' : ''}`}>
          <li className="navbar-item">
            <Link href="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link href="/about" className="navbar-link">About</Link>
          </li>
          <li className="navbar-item">
            <Link href="/services" className="navbar-link">Services</Link>
          </li>
          <li className="navbar-item">
            <Link href="/contact" className="navbar-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
