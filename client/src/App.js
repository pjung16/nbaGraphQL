import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import ModalSwitch from './components/ModalSwitch/ModalSwitch';
import './App.css';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
// import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <ModalSwitch />
        </Router>
        <header className="App-header">
          <h1>Players</h1>
          {/* <SearchBar />
          <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
