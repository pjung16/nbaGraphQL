import React from 'react';
import Header from '../Header/Header';
import PlayerStatsBlockContainer from '../PlayerStatsBlockContainer/PlayerStatsBlockContainer';
import GraphContainer from '../GraphContainer/GraphContainer';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="blocks-container">
        <PlayerStatsBlockContainer />
        <GraphContainer />
      </div>
    </div>
  );
}

export default Home;
