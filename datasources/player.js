const { RESTDataSource } = require('apollo-datasource-rest');

class PlayerAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.balldontlie.io/api/v1/';
  }

  playerReducer(player) {
    return {
      id: player.id,
      first_name: player.first_name,
      last_name: player.last_name,
      position: player.position,
      height_feet: player.height_feet,
      height_inches: player.height_inches,
      weight_pounds: player.weight_pounds,
      team: {
        id: player.team.id,
        abbreviation: player.team.abbreviation,
        city: player.team.city,
        conference: player.team.conference,
        division: player.team.division,
        full_name: player.team.full_name,
        name: player.team.name,
      }
    };
  }

  async getAllPlayers() {
    const response = await this.get('players');
    return response.data.map(player => this.playerReducer(player));
  }

  async getPlayerById({ playerId }) {
    const response = await this.get(`players/${playerId}`);
    return this.playerReducer(response);
  }

  async getPlayerData(playerIds) {

  }

  async getPlayersById({ playerIds }) {
    const response = []
    for (const id of playerIds) {
      let res = await this.get(`players/${id}`);
      response.push(res)
    }
    return response.map(player => this.playerReducer(player));
  }

  async getPlayerBySearch({ search }) {
    let players = [];
    let response = await this.get(`players?search=${search}`);
    players = [...players, ...response.data]
    while (response.meta.next_page) {
      response = await this.get(`players?search=${search}&page=${response.meta.next_page}`);
      players = [...players, ...response.data]
    }
    return players.map(player => this.playerReducer(player));
  }

  async getActivePlayerBySearch({ search }) {
    let players = [];
    let playerIds = [];
    let response = await this.get(`players?search=${search}`);
    players = [...response.data]
    players.forEach(player => {
      playerIds.push(player.id);
    });
    while (response.meta.next_page) {
      response = await this.get(`players?search=${search}&page=${response.meta.next_page}`);
      players = [...players, ...response.data];
      players.forEach(player => {
        playerIds.push(player.id);
      });
    }
    let queryParams = "?";
    if (playerIds) {
      playerIds.forEach(id => {
          queryParams += `player_ids[]=${id}&`
      });
    }
    response = await this.get("season_averages"+queryParams);
    players = players.filter(player => this.isActive(player, response));
    return players.map(player => this.playerReducer(player));
  }

  isActive(player, response) {
    return response.data.filter(e => e.player_id === player.id).length > 0 ? true : false;
  }
  
  async getPlayerBySearchYear({ search, year }) {
    let players = [];
    let playerIds = [];
    let response = await this.get(`players?search=${search}`);
    players = [...response.data]
    players.forEach(player => {
      playerIds.push(player.id);
    });
    while (response.meta.next_page) {
      response = await this.get(`players?search=${search}&page=${response.meta.next_page}`);
      players = [...players, ...response.data];
      players.forEach(player => {
        playerIds.push(player.id);
      });
    }
    let queryParams = "?";
    if (playerIds) {
      playerIds.forEach(id => {
          queryParams += `player_ids[]=${id}&`;
      });
      queryParams += `season=${year}`;
    }
    response = await this.get("season_averages"+queryParams);
    players = players.filter(player => this.isActive(player, response));
    return players.map(player => this.playerReducer(player));
  }

  isActive(player, response) {
    return response.data.filter(e => e.player_id === player.id).length > 0 ? true : false;
  }

}

// const a = new PlayerAPI();
// console.log(a.getPlayersById({ playerIds: [237, 355]}))

module.exports = PlayerAPI;