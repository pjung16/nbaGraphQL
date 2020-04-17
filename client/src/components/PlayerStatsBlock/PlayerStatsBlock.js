import React from 'react';
import PlayerStats from '../PlayerStats/PlayerStats';
import './PlayerStatsBlock.css';

function PlayerStatsBlock({ players }) {
  return (
    <div className="player-stats-block">
      {players ? Object.values(players).map(player => (
        <PlayerStats key={player.player.id} player={player.player} />
      )) : null}
    </div>
  );
}

export default PlayerStatsBlock;
