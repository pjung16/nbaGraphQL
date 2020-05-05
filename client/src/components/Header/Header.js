import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';

function Header() {
  return (
    <div className="header">
      <div>NBA GraphQL</div>
      <SearchBar />
    </div>
  );
}

export default Header;
