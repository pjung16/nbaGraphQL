import React from 'react';
import PlayerStats from '../PlayerStats/PlayerStats';
import './PlayerStatsBlock.css';

function PlayerStatsBlock({ players }) {
  console.log(players);

  const colors = ['#67DBF9', '#00E680', '#A722E5', '#FF4848', '#FF8413', '#FFEB38'];

  return (
    <div className="player-stats-block">
      {players ? players.map((player, i) => (
        <PlayerStats key={player.player.id} player={player.player} color={colors[i%5]} />
      )) : null}
    </div>
  );
}

export default PlayerStatsBlock;
