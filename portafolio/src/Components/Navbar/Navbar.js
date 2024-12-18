import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <button className="navbar-burger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>
      <div className="navbar-logo">
        <h1>Cristofer Villavega</h1>
      </div>
      <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
        <div className="navbar-social">
          <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
        </div>
        <div className="navbar-links">
          <a href="#">HOME</a>
          <a href="#">DASBOARD</a>
          <a href="#">PROYECT</a>
          <a href="#">GALLERY</a>
          <a href="#">GAMES</a>
        </div>
      </div>
      <div className="navbar-actions">
        {searchVisible ? (
          <div className="search-container">
            <input type="text" placeholder="Search..." />
            <button onClick={toggleSearch}><FontAwesomeIcon icon={faTimes} /></button>
          </div>
        ) : (
          <button onClick={toggleSearch}><FontAwesomeIcon icon={faSearch} /></button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
