import React from 'react';
import './header.scss'

const Header = () => {
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <header>
      <h1>My React Blog</h1>
      <button onClick={handleClick}>Logout</button>
    </header>
  );
};

export default Header;