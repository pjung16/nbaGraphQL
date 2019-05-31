const { RESTDataSource } = require('apollo-datasource-rest');

class GamesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.balldontlie.io/api/v1/games';
  }

  gameReducer(game) {
    return {
        id: game.id,
        date: game.date,
        home_team_score: game.home_team_score,
        visitor_team_score: game.visitor_team_score,
        season: game.season,
        period: game.period,
        status: game.status,
        time: game.time,
        postseason: game.postseason,
        home_team: game.home_team,
        visitor_team: game.visitor_team,
    };
  }

  metaReducer(meta) {
    return {
      total_pages: meta.total_pages,
      current_page: meta.current_page,
      next_page: meta.next_page,
      per_page: meta.per_page,
      total_count: meta.total_count,
    }
  }

  generateQueryParams(dates, seasons, teamIds, postseason, start_date, end_date) {
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
    if (teamIds) {
      teamIds.forEach(id => {
          queryParams += `team_ids[]=${id}&`
      });
    }
    if (start_date) {
      queryParams += `start_date=${start_date}&`
    }
    if (end_date) {
      queryParams += `end_date=${end_date}&`
    }
    postseason ? queryParams += "postseason=true" : "postseason=false"
    return queryParams;
  }
  
  async getGames({ dates, seasons, teamIds, postseason, start_date, end_date }) {
    const queryParams = this.generateQueryParams(dates, seasons, teamIds, postseason, start_date, end_date)
    const response = await this.get(queryParams);
    return response.data.map(game => this.gameReducer(game));
  }

  async getGameById({ gameId }) {
    const response = await this.get(`${gameId}`);
    return this.gameReducer(response);
  }

  async getMeta({ dates, seasons, teamIds, postseason, start_date, end_date }) {
    const queryParams = this.generateQueryParams(dates, seasons, teamIds, postseason, start_date, end_date)
    const response = await this.get(queryParams);
    return this.metaReducer(response.meta);
  }
  
}

module.exports = GamesAPI;