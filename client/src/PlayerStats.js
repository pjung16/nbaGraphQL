import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import './PlayerStats.css';

const STATS_QUERY = gql`
  query PlayerQuery($playerId: ID!) {
    season (season: 2018, playerIds: [$playerId]) {
      games_played
      min
      pts
      reb
      ast
      stl
      blk
      fg_pct
      fg3_pct
      ft_pct
      turnover
    }
  }
`;

function PlayerStats({player: {id}}) {
  return (
    <div>
      <Query query={STATS_QUERY} variables = {{"playerId": id}}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log(error);
          return (
            <div>
              <table>
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
                <tr>
                  {data.season.map(player =>(
                    <>
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
                    </>
                  ))}
                </tr>
              </table>
            </div>
          );
        }}
        </Query>
    </div>
  )
} 

export default PlayerStats;