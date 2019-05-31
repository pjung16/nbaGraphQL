const { RESTDataSource } = require('apollo-datasource-rest');

class TeamAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.balldontlie.io/api/v1/';
  }
  async getAllTeams() {
    const response = await this.get('teams');
    return response.data.map(team => this.teamReducer(team));
  }

  teamReducer(team) {
    return {
        id: team.id,
        abbreviation: team.abbreviation,
        city: team.city,
        conference: team.conference,
        division: team.division,
        full_name: team.full_name,
        name: team.name,
    };
  }
  async getTeamById({ teamId }) {
    const response = await this.get(`teams/${teamId}`);
    return this.teamReducer(response);
  }
  
}

module.exports = TeamAPI;