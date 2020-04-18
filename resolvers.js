module.exports = {
  Query: {
    allPlayers: (_, __, { dataSources }) =>
      dataSources.playerAPI.getAllPlayers(),
    players: (_, { playerIds }, { dataSources }) =>
      dataSources.playerAPI.getPlayersById({ playerIds: playerIds }),
    player: (_, { id }, { dataSources }) =>
      dataSources.playerAPI.getPlayerById({ playerId: id }),
    playerSearch: (_, { search }, { dataSources }) =>
      dataSources.playerAPI.getPlayerBySearch({ search: search }),
    activePlayerSearch: (_, { search }, { dataSources }) =>
      dataSources.playerAPI.getActivePlayerBySearch({ search: search }),
    playerSearchYear: (_, { search, year }, { dataSources }) =>
      dataSources.playerAPI.getPlayerBySearchYear({ search: search, year: year }),
    teams: (_, __, { dataSources }) =>
      dataSources.teamAPI.getAllTeams(),
    team: (_, { id }, { dataSources }) =>
      dataSources.teamAPI.getTeamById({ teamId: id }),
    games: (_, { dates, seasons, teamIds, postseason, start_date, end_date }, { dataSources }) =>
      dataSources.gamesAPI.getGames({ dates: dates, seasons: seasons, teamIds: teamIds, postseason: postseason, start_date: start_date, end_date: end_date }),
    game: (_, { id }, { dataSources }) =>
      dataSources.gamesAPI.getGameById({ gameId: id }),
    meta: (_, { dates, seasons, teamIds, postseason, start_date, end_date }, { dataSources }) =>
      dataSources.gamesAPI.getMeta({ dates: dates, seasons: seasons, teamIds: teamIds, postseason: postseason, start_date: start_date, end_date: end_date }),
    stats: (_, { dates, seasons, playerIds, gameIds, postseason, start_date, end_date }, { dataSources }) =>
      dataSources.statsAPI.getStats({ dates: dates, seasons: seasons, playerIds: playerIds, gameIds: gameIds, postseason: postseason, start_date: start_date, end_date: end_date }),
    season: (_, { season, playerIds }, { dataSources }) =>
      dataSources.seasonAPI.getSeasonAverages({ season: season, playerIds: playerIds }),
  }
};