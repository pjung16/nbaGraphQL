const { RESTDataSource } = require('apollo-datasource-rest');

class StatsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.balldontlie.io/api/v1/stats';
  }

  statsReducer(stat) {
    return {
      id: stat.id,
      ast: stat.ast,
      blk: stat.blk,
      dreb: stat.dreb,
      fg3_pct: stat.fg3_pct,
      fg3a: stat.fg3a,
      fg3m: stat.fg3m,
      fg_pct: stat.fg_pct,
      fga: stat.fga,
      fgm: stat.fgm,
      ft_pct: stat.ft_pct,
      fta: stat.fta,
      ftm: stat.ftm,
      game: stat.game,
      min: stat.min,
      oreb: stat.oreb,
      pf: stat.pf,
      player: stat.player,
      pts: stat.pts,
      reb: stat.reb,
      stl: stat.stl,
      team: stat.team,
      turnover: stat.turnover,
    };
  }

  generateQueryParams(dates, seasons, playerIds, gameIds, postseason, start_date, end_date) {
    let queryParams = "?";
    if (dates) {
      dates.forEach(date => {
          queryParams += `dates[]=${date}&`
      });
    }
    if (seasons) {
      seasons.forEach(season => {
          queryParams += `seasons[]=${season}&`
      });
    }
    if (playerIds) {
      playerIds.forEach(id => {
          queryParams += `player_ids[]=${id}&`
      });
    }
    if (gameIds) {
      gameIds.forEach(id => {
          queryParams += `game_ids[]=${id}&`
      });
    }
    if (start_date) {
      queryParams += `start_date=${start_date}&`
    }
    if (end_date) {
      queryParams += `end_date=${end_date}&`
    }
    queryParams += `per_page=100&`
    postseason ? queryParams += "postseason=true" : "postseason=false"
    return queryParams;
  }
  
  async getStats({ dates, seasons, playerIds, gameIds, postseason, start_date, end_date }) {
    let stats = [];
    const queryParams = this.generateQueryParams(dates, seasons, playerIds, gameIds, postseason, start_date, end_date)
    let response = await this.get(queryParams);
    stats = [...response.data];
    while (response.meta.next_page) {
      response = await this.get(`${queryParams}&page=${response.meta.next_page}`);
      stats = [...stats, ...response.data];
    }
    stats = stats.map(game => this.statsReducer(game));
    return stats;
  }
  
}

module.exports = StatsAPI;