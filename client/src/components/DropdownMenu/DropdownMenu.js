import React, { useState } from 'react';
import './DropdownMenu.css';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import { changeGraphDataType } from '../../actions/graphActions';
import { updatePlayersData } from '../../actions/graphActions';

const STATS_QUERY = gql`
  query PlayerQuery($playerIds: [ID!]) {
    stats (playerIds: $playerIds, seasons: [2019]) {
      pts
      reb
      ast
      stl
      blk
      fg_pct
      fg3_pct
      ft_pct
      turnover
      player {
        first_name
        last_name
        id
      }
      game {
        date
      }
    }
  }
`;

function DropdownMenu(props) {
  const [value, setValue] = useState();
  const { dispatch } = props;

  const organizePlayerStats = (stats) => {
    let playerStats = {};
    stats.forEach((cur) => {
      if (!playerStats[`${cur.player.first_name} ${cur.player.last_name}`]) {
        playerStats[`${cur.player.first_name} ${cur.player.last_name}`] = [cur]
      } else {
        playerStats[`${cur.player.first_name} ${cur.player.last_name}`].push(cur)
      }
    });
    console.log(playerStats)
    return Object.entries(playerStats).map(cur => {
      return {
        id: cur[0],
        stats: cur[1].sort(function(a, b) {
          return (a.game.date < b.game.date) ? -1 : ((a.game.date > b.game.date) ? 1 : 0);
        }).slice(Math.max(cur[1].length - 8, 1))
      }
    })
  }

  let playerRecentStats = []

  return (
    <div>
      <select 
        className="dropdown-menu-container"
        onChange={e => {
          setValue(e.currentTarget.value);
          dispatch(changeGraphDataType(e.currentTarget.value));
          dispatch(updatePlayersData(playerRecentStats))
        }} 
      >
        {props.players.map(player => (
          <Query key={player.player.id} query={STATS_QUERY} variables = {{ playerIds: [player.player.id] }}>
            {({ loading, error, data }) => {
              if (loading) return null;
              if (error) console.log(error);
              if (data) {
                const playerStats = organizePlayerStats(data.stats);
                playerStats.forEach(cur => {
                  let obj = { 
                    name: cur.id,
                    type: 'spline'
                  }
                  obj.data = cur.stats;
                  playerRecentStats.push(obj);
                  console.log(playerRecentStats)
                })
              }
              return null
            }}
          </Query>
        ))}
        {props.items.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}  

export default connect()(DropdownMenu);