import React, {Component} from 'react';
import './SearchBar.css';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import { addPlayer } from '../../actions/playerActions';
import { updateGraphOptions } from '../../actions/graphActions';

const PLAYER_QUERY = gql`
  query PlayerQuery($search: String!) {
    activePlayerSearch (search: $search) {
      id
      first_name
      last_name
      position
      height_feet
      height_inches
      weight_pounds
      team{
        full_name
      }
    }
  }
`;

const STATS_QUERY = gql`
    query PlayerQuery($playerIds: [ID!]) {
      stats (playerIds: $playerIds, seasons: [2019]) {
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

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      search: '',
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.playerClicked = this.playerClicked.bind(this);
  }

  handleSearchChange(event) {
    if (event.target.value.length > 2) {
      this.setState({
        search: event.target.value,
        submitted: true
      });
    }
    else {
      this.setState({
        search: event.target.value,
        submitted: false
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submitted: true
    });
  }

  playerClicked(event) {
    console.log(event.target)
  }

  organizePlayerStats = (stats) => {
    let playerStats = {};
    stats.forEach((cur) => {
      if (!playerStats[cur.player.id]) {
        playerStats[cur.player.id] = [cur]
      } else {
        playerStats[cur.player.id].push(cur)
      }
    });
    return Object.entries(playerStats).map(cur => {
      return {
        id: cur[0],
        stats: cur[1].sort(function(a, b) {
          return (a.game.date < b.game.date) ? -1 : ((a.game.date > b.game.date) ? 1 : 0);
        }).slice(Math.max(cur[1].length - 8, 1))
      }
    })
  }

  render() {
    const { dispatch } = this.props;

    return (
      <div className="searchbar">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type={'text'}
              value={this.state.search}
              onChange={this.handleSearchChange}
              placeholder={'Add a player to compare...'}
              className="search-field"
            />
          </label>
          <input 
            type="submit" 
            value="Search" 
            className="add-button"
          />
        </form>
        {this.state.submitted ? <Query query={PLAYER_QUERY} variables = {{ search: this.state.search }}>
          {({ loading, error, data }) => {
            if (loading) return null;
            if (error) console.log(error);

            return (
              <div className="dropdown">
                {data.activePlayerSearch.map(player => (
                  <Query query={STATS_QUERY} variables = {{ playerIds: [player.id] }}>
                    {({ loading, error, data }) => {
                      if (loading) return null;
                      if (error) console.log(error);
                      let playerRecentStats = {};
                      if (data) {
                        const playerStats = this.organizePlayerStats(data.stats);
                        playerStats.forEach(cur => {
                          let obj = { name: cur.id }
                          obj.data = cur.stats.map(d => d.pts);
                          playerRecentStats = obj
                        })
                      }
                      return (<div key={player.id} className="dropdown-item" onClick={() => {
                        dispatch(addPlayer(player));
                        dispatch(updateGraphOptions(playerRecentStats));
                        this.setState({
                          search: '',
                          submitted: false
                        });
                      }}>
                        {player.first_name} {player.last_name}: {player.team.full_name}
                      </div>)
                    }}
                  </Query>
                ))}
              </div>
            );
          }}
        </Query> : null}
      </div>
    );
  }
}

export default connect()(SearchBar);