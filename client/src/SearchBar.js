import React, {Component} from 'react';
import gql from 'graphql-tag';
import { Query, ApolloProvider } from 'react-apollo';
import PlayerStats from './PlayerStats';

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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type={'text'}
              value={this.state.search}
              onChange={this.handleSearchChange}
              placeholder={'Search for a player'}
            />
          </label>
          <input 
            type="submit" 
            value="Search" 
          />
        </form>
        {this.state.submitted ? <Query query={PLAYER_QUERY} variables = {{ search: this.state.search }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

            return (
              <div>
                {data.activePlayerSearch.map(player => (
                  <div>
                    {player.id}. {player.first_name} {player.last_name}: {player.team.full_name}
                    <PlayerStats key={player.id} player={player} />
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

export default SearchBar;