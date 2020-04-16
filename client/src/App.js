import React from 'react';
import logo from './logo.svg';
import './App.css';
import gql from 'graphql-tag';
import { Query, ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import SearchBar from './SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';

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
          <h1>Players</h1>
          <SearchBar />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
