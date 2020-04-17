import React, {Component} from 'react';
import './SearchBar.css';
import gql from 'graphql-tag';
import { Query, ApolloProvider } from 'react-apollo';
import { connect } from 'react-redux';
import { addPlayer } from '../../actions/playerActions'
import PlayerStats from '../PlayerStats/PlayerStats';

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
                  <div key={player.id} className="dropdown-item" onClick={() => {
                    dispatch(addPlayer(player));
                    this.setState({
                      search: '',
                      submitted: false
                    });
                  }}>
                    {player.first_name} {player.last_name}: {player.team.full_name}
                  </div>
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