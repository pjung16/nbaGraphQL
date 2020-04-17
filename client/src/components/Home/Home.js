import React from 'react';
import Header from '../Header/Header';
import PlayerStatsBlockContainer from '../PlayerStatsBlockContainer/PlayerStatsBlockContainer';
import Graph from '../Graph/Graph';
import logo from '../../logo.svg';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="blocks-container">
        <PlayerStatsBlockContainer />
        <Graph />
      </div>
    </div>
  );
}

export default Home;
