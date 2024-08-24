// src/components/Header.js
import React, { useState } from 'react';
import './header.css'; // Make sure to create or update this CSS file

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>My Portfolio</h1>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
}

export default Header;
