import React from 'react';
import PlayerStats from '../PlayerStats/PlayerStats';
import './PlayerStatsBlock.css';

function PlayerStatsBlock({ players }) {
  console.log(players);
  return (
    <div className="player-stats-block">
      {players ? players.map(player => (
        <PlayerStats key={player.player.id} player={player.player} />
      )) : null}
    </div>
  );
}

export default PlayerStatsBlock;
