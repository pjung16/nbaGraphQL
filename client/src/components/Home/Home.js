import React from 'react';
import Header from '../Header/Header';
import logo from '../../logo.svg';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      {/* <header className="App-header">
        <h1>Players</h1>
        <SearchBar />
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
    </div>
  );
}

export default Home;
