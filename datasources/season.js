const { RESTDataSource } = require('apollo-datasource-rest');

class SeasonAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.balldontlie.io/api/v1/season_averages';
  }

  seasonReducer(season) {
    return {
      games_played: season.games_played,
      player_id: season.player_id,
      season: season.season,
      ast: season.ast,
      blk: season.blk,
      dreb: season.dreb,
      fg3_pct: season.fg3_pct,
      fg3a: season.fg3a,
      fg3m: season.fg3m,
      fg_pct: season.fg_pct,
      fga: season.fga,
      fgm: season.fgm,
      ft_pct: season.ft_pct,
      fta: season.fta,
      ftm: season.ftm,
      min: season.min,
      oreb: season.oreb,
      pf: season.pf,
      pts: season.pts,
      reb: season.reb,
      stl: season.stl,
      turnover: season.turnover,
    };
  }

  generateQueryParams(season, playerIds) {
    let queryParams = "?";
    if (season) {
      queryParams += `season=${season}&`
    }
    if (playerIds) {
      playerIds.forEach(id => {
          queryParams += `player_ids[]=${id}&`
      });
    }
    return queryParams;
  }
  
  async getSeasonAverages({ season, playerIds }) {
    const queryParams = this.generateQueryParams(season, playerIds)
    const response = await this.get(queryParams);
    return response.data.map(season => this.seasonReducer(season));
  }
  
}

module.exports = SeasonAPI;