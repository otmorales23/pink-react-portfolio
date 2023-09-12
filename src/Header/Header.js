import React from 'react';
import { Link } from 'react-router-dom'
import './header.css'; 

function Header() {
  return (
    <header className="header">
      <div className="name">Ollie Terry-Morales</div>
      <div className="nav">
        <nav>
          <Link to="/About">About</Link>
          <Link to="/Examples">Examples</Link>
          <Link to="/Contact">Contact Me</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;