const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const PlayerAPI = require('./datasources/player');
const TeamAPI = require('./datasources/team');
const GamesAPI = require('./datasources/games');
const StatsAPI = require('./datasources/stats');
const SeasonAPI = require('./datasources/season');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      playerAPI: new PlayerAPI(),
      teamAPI: new TeamAPI(),
      gamesAPI: new GamesAPI(),
      statsAPI: new StatsAPI(),
      seasonAPI: new SeasonAPI(),
    })
  });
  

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);