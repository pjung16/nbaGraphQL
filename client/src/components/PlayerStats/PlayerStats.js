import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import './PlayerStats.css';
import Table from 'react-bootstrap/Table';

const STATS_QUERY = gql`
  query SeasonAverageQuery($playerId: ID!) {
    season (season: 2019, playerIds: [$playerId]) {
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
    player (id: $playerId) {
      first_name
      last_name
      position
      team {
        full_name
      }
    }
  }
`;

const STAT_QUERY = gql`
  query PlayerQuery($playerId: ID!) {
    stats (playerIds: [$playerId], seasons: [2019]) {
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
      game {
        date
        season
      }
    }
  }
`;

function PlayerStats({player: {id}}) {
  return (
    <div>
      <Query query={STATS_QUERY} variables = {{"playerId": id}}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) console.log(error);
          const stats = data.season[0]
          const player = data.player
          return (
            <div className="player-stat-block">
              <div className="player-stat-head">
                {`${player.first_name} ${player.last_name}`}
              </div>
              <div className="player-stat-row">
                <div className="w-1/3">
                  <div className="stat-name">Pts</div>
                  <div className="stat-num">{stats.pts}</div>
                </div>
                <div className="w-1/3">
                  <div className="stat-name">Reb</div>
                  <div className="stat-num">{stats.reb}</div>
                </div>
                <div className="w-1/3">
                  <div className="stat-name">Ast</div>
                  <div className="stat-num">{stats.ast}</div>
                </div>
              </div>
              <div className="player-stat-row">
                <div className="w-23">
                  <div className="stat-name">Stl</div>
                  <div className="stat-num">{stats.stl}</div>
                </div>
                <div className="w-23">
                  <div className="stat-name">Blk</div>
                  <div className="stat-num">{stats.blk}</div>
                </div>
                <div className="w-23">
                  <div className="stat-name">GP</div>
                  <div className="stat-num">{stats.games_played}</div>
                </div>
                <div className="w-3/10">
                  <div className="stat-name">Mins</div>
                  <div className="stat-num">{stats.min}</div>
                </div>
              </div>
              <div className="player-stat-row">
                <div className="w-27">
                  <div className="stat-name">FG%</div>
                  <div className="stat-num">{stats.fg_pct*100}</div>
                </div>
                <div className="w-27">
                  <div className="stat-name">3FG%</div>
                  <div className="stat-num">{stats.fg3_pct*100}</div>
                </div>
                <div className="w-27">
                  <div className="stat-name">FT%</div>
                  <div className="stat-num">{stats.ft_pct}</div>
                </div>
                <div className="w-19">
                  <div className="stat-name">TO</div>
                  <div className="stat-num">{stats.turnover}</div>
                </div>
              </div>
            </div>
          );
        }}
        </Query>
        <Query query={STAT_QUERY} variables = {{"playerId": id}}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log(error);
          console.log(data.stats.sort(function(a, b) {
            return (a.game.date > b.game.date) ? -1 : ((a.game.date < b.game.date) ? 1 : 0);
        }))
          return null
        }}
        </Query>
    </div>
  )
} 

export default PlayerStats;