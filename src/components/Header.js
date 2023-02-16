import React from 'react';
import './header.scss'

const Header = () => {
  const handleClick = () => {
    localStorage.removeItem('emailData');
    localStorage.removeItem('passwordData');
    window.location.reload();
  }

  return (
    <header>
      <h1>My React Blog</h1>
      <button className="logout-btn" onClick={handleClick}>Logout</button>
    </header>
  );
};

export default Header;