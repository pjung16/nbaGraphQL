import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import ModalSwitch from './components/ModalSwitch/ModalSwitch';
import './App.css';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

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
      </div>
    </ApolloProvider>
  );
}

export default App;
