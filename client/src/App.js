import React from 'react';
import logo from './logo.svg';
import './App.css';
import gql from 'graphql-tag';
import { Query, ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import SearchBar from './SearchBar';

const client = new ApolloClient({
  uri: '/graphql'
});

const PLAYER_QUERY = gql`
  query PlayerQuery {
    activePlayerSearch (search: "james") {
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

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <SearchBar />
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Players</h1>
          {/* <Query query={PLAYER_QUERY}>
              {({ loading, error, data }) => {
                if (loading) return <h4>Loading...</h4>;
                if (error) console.log(error);

                return (
                  <div>
                    {data.activePlayerSearch.map(player => (
                      <div>{player.first_name} {player.last_name}: {player.team.full_name}</div>
                    ))}
                  </div>
                );
              }}
          </Query> */}
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
