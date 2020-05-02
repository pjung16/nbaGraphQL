const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const path = require('path');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const PlayerAPI = require('./datasources/player');
const TeamAPI = require('./datasources/team');
const GamesAPI = require('./datasources/games');
const StatsAPI = require('./datasources/stats');
const SeasonAPI = require('./datasources/season');

const port = process.env.PORT || 4000;

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

app.use(express.static(path.join(__dirname, './client/build')));

//production mode
if(process.env.NODE_ENV === 'production') {  
  app.use(express.static(path.join(__dirname, './client/build'))); 
  app.get('*', (req, res) => {    
    res.sendfile(path.join(__dirname = './client/build/index.html'));  
  })
}

//build mode
app.get('*', (req, res) => {  
  res.sendFile(path.join(__dirname+'./client/build/index.html'));
})

server.applyMiddleware({ app });

app.listen({ port: port }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);