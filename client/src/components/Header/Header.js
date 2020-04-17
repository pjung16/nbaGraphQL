import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';

function Header() {
  return (
    <div className="header">
      <div>NBA Stats</div>
      <SearchBar />
    </div>
  );
}

export default Header;
