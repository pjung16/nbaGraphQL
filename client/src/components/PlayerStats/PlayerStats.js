import React from 'react';
import {
  Link,
  useLocation,
} from "react-router-dom";
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import { deletePlayer } from '../../actions/playerActions';
import { deletePlayerFromSeries } from '../../actions/graphActions';
import './PlayerStats.css';

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

function PlayerStats({player: {id}, color, dispatch}) {
  const location = useLocation();

  return (
    <div>
      <Query query={STATS_QUERY} variables = {{"playerId": id}}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) console.log(error);
          const stats = data.season[0]
          const player = data.player
          console.log(color)
          return (
            <div className="player-stat-block" style={{borderColor: color}}>
              <div className="player-stat-head" style={{borderColor: color}}>
                <div>{`${player.first_name} ${player.last_name}`}</div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <div>
                    <Link
                      key={id}
                      to={{
                        pathname: `/player/${id}`,
                        // This is the trick! This link sets
                        // the `background` in location state.
                        state: { background: location }
                      }}
                    >
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.00001 24C5.00001 24.5523 5.44772 25 6.00001 25H15C15.5523 25 16 24.5523 16 24C16 23.4477 15.5523 23 15 23H7.00001V15C7.00001 14.4477 6.55229 14 6.00001 14C5.44772 14 5.00001 14.4477 5.00001 15V24ZM13.4747 15.1111L5.2929 23.2929L6.70711 24.7071L14.8889 16.5253L13.4747 15.1111Z" fill="white"/>
                        <path d="M25 6.00001C25 5.44772 24.5523 5.00001 24 5.00001H15C14.4477 5.00001 14 5.44772 14 6.00001C14 6.55229 14.4477 7.00001 15 7.00001H23V15C23 15.5523 23.4477 16 24 16C24.5523 16 25 15.5523 25 15V6.00001ZM16.5253 14.8889L24.7071 6.70711L23.2929 5.2929L15.1111 13.4747L16.5253 14.8889Z" fill="white"/>
                      </svg>
                    </Link>
                  </div>
                  <div style={{marginLeft: '10px'}} onClick={() => {
                    dispatch(deletePlayer(id));
                    dispatch(deletePlayerFromSeries(`${player.first_name} ${player.last_name}`));
                  }}>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="0.707107" y1="0.792893" x2="19.799" y2="19.8848" stroke="white" stroke-width="2"/>
                      <line x1="19.8071" y1="0.707107" x2="0.71523" y2="19.799" stroke="white" stroke-width="2"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="player-stat-row">
                <div className="w-1/3" style={{borderColor: color}}>
                  <div className="stat-name">Pts</div>
                  <div className="stat-num">{stats.pts}</div>
                </div>
                <div className="w-1/3" style={{borderColor: color}}>
                  <div className="stat-name">Reb</div>
                  <div className="stat-num">{stats.reb}</div>
                </div>
                <div className="w-1/3" style={{borderColor: color}}>
                  <div className="stat-name">Ast</div>
                  <div className="stat-num">{stats.ast}</div>
                </div>
              </div>
              <div className="player-stat-row">
                <div className="w-23" style={{borderColor: color}}>
                  <div className="stat-name">Stl</div>
                  <div className="stat-num">{stats.stl}</div>
                </div>
                <div className="w-23" style={{borderColor: color}}>
                  <div className="stat-name">Blk</div>
                  <div className="stat-num">{stats.blk}</div>
                </div>
                <div className="w-23" style={{borderColor: color}}>
                  <div className="stat-name">GP</div>
                  <div className="stat-num">{stats.games_played}</div>
                </div>
                <div className="w-3/10" style={{borderColor: color}}>
                  <div className="stat-name">Mins</div>
                  <div className="stat-num">{stats.min}</div>
                </div>
              </div>
              <div className="player-stat-row">
                <div className="w-27" style={{borderColor: color}}>
                  <div className="stat-name">FG%</div>
                  <div className="stat-num">{stats.fg_pct*100}</div>
                </div>
                <div className="w-27" style={{borderColor: color}}>
                  <div className="stat-name">3FG%</div>
                  <div className="stat-num">{stats.fg3_pct*100}</div>
                </div>
                <div className="w-27" style={{borderColor: color}}>
                  <div className="stat-name">FT%</div>
                  <div className="stat-num">{stats.ft_pct}</div>
                </div>
                <div className="w-19" style={{borderColor: color}}>
                  <div className="stat-name">TO</div>
                  <div className="stat-num">{stats.turnover}</div>
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    </div>
  )
} 

export default connect()(PlayerStats);