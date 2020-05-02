import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {
  useHistory,
  useParams,
  useLocation,
  Link
} from 'react-router-dom';
import moment from 'moment';
import './PlayerProfile.css';

const STATS_QUERY = gql`
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
        }
      }
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

function PlayerProfile() {

  let location = useLocation();
  let background = location.state && location.state.background;
  let { id } = useParams();
  let history = useHistory();

  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div className="profile-container">
      <Query query={STATS_QUERY} variables = {{ playerId: id }}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) console.log(error);
          console.log(data)
          if (data) {
            data.stats.sort(function(a, b) {
              return (a.game.date > b.game.date) ? -1 : ((a.game.date < b.game.date) ? 1 : 0);
            })
          }
          return (
            <div style={{position: "relative"}}>
              {background ? 
                <div className="close-button" onClick={back}>
                  <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.707107" y1="0.792893" x2="29.799" y2="29.8848" stroke="white" stroke-width="2"/>
                    <line x1="29.8071" y1="0.707107" x2="0.71523" y2="29.799" stroke="white" stroke-width="2"/>
                  </svg> 
                </div> :
                <Link to={{ pathname: `/` }} className="home-button">
                  <svg width="42" height="33" viewBox="0 0 42 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42 16.5H3M3 16.5L19.4458 2M3 16.5L19.4458 31" stroke="white" stroke-width="3"/>
                  </svg>
                  <span style={{marginLeft: "10px"}}>Home</span>
                </Link>
              }
              <div className="player-name">{data.player.first_name} {data.player.last_name}</div>
              <div className="table-title">Season Averages</div>
              <div className="season-average-table-container">
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
              <div className="table-title">Previous Games</div>
              <div className="previous-game-table-container">
                <table>
                  <tr className="previous-game-table-header">
                    <th>Date</th>
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
                  {data.stats.map(game => (
                    <tr>
                      <td>{moment(game.game.date).format("M/D/YY")}</td>
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
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          )
        }}
      </Query>
    </div>
  );
}

export default PlayerProfile;