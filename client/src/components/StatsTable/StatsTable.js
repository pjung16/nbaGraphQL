import React, { Fragment } from 'react';
import moment from 'moment';
import './StatsTable.css';
import teams from '../../teams.json';

function StatsTable({data, average, allGames}) {
  if (average) {
    return (
      <table>
        <thead>
          <tr>
            <th>GP</th>
            <th>Min</th>
            <th>Pts</th>
            <th>Reb</th>
            <th>Ast</th>
            <th>Stl</th>
            <th>Blk</th>
            <th>FG%</th>
            <th>3FG%</th>
            <th>FT%</th>
            <th>TO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {data.map(player =>(
              <Fragment key={player.games_played}>
                <td>{player.games_played}</td>
                <td>{player.min}</td>
                <td>{player.pts}</td>
                <td>{player.reb}</td>
                <td>{player.ast}</td>
                <td>{player.stl}</td>
                <td>{player.blk}</td>
                <td>{player.fg_pct}</td>
                <td>{player.fg3_pct}</td>
                <td>{player.ft_pct}</td>
                <td>{player.turnover}</td>
              </Fragment>
            ))}
          </tr>
        </tbody>
      </table>
    )
  } else if (allGames) {
    return (
      <table>
        <thead>
          <tr className="previous-game-table-header">
            <th>Date</th>
            <th>Opp</th>
            <th>Min</th>
            <th>Pts</th>
            <th>Reb</th>
            <th>Ast</th>
            <th>Stl</th>
            <th>Blk</th>
            <th>FG%</th>
            <th>3FG%</th>
            <th>FT%</th>
            <th>TO</th>
          </tr>
        </thead>
        <tbody>
        {data.map(game => {
          const opponent = game.player.team_id === game.game.visitor_team_id ? game.game.home_team_id : game.game.visitor_team_id;
          return (<tr key={game.game.date}>
            <td>{moment(game.game.date).format("M/D/YY")}</td>
            <td>{teams[opponent].abbreviation}</td>
            <td>{game.min}</td>
            <td>{game.pts}</td>
            <td>{game.reb}</td>
            <td>{game.ast}</td>
            <td>{game.stl}</td>
            <td>{game.blk}</td>
            <td>{game.fg_pct}</td>
            <td>{game.fg3_pct}</td>
            <td>{game.ft_pct}</td>
            <td>{game.turnover}</td>
          </tr>)
        })}
        </tbody>
      </table>
    )
  }
}

export default StatsTable;