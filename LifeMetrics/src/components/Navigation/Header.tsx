import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo-link">
          <img src="/logo.png" alt="LifeMetrics Logo" className="logo" />
          <span className="brand-name">LifeMetrics</span>
        </Link>
      </div>
      <div className="header-center">
        <nav>
          <Link to="/how-it-works">How it works</Link>
          <p> | </p>
          <Link to="/signup">Sign Up</Link>
          <p> | </p>
          <Link to="/about">About Us</Link>
        </nav>
      </div>
      <div className="header-right">
        <button className="sign-in-button">Sign In</button>
      </div>
    </header>
  );
};

export default Header