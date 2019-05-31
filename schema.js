const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        players: [Player]!
        player(id: ID!): Player
        playerSearch(search: String!): [Player]!
        activePlayerSearch(search: String!): [Player]!
        playerSearchYear(search: String!, year: Int!): [Player]!
        teams: [Team]!
        team(id: ID!): Team
        games(dates: [String], seasons: [Int], teamIds: [ID], postseason: Boolean, start_date: String, end_date: String): [Game]!
        meta(dates: [String], seasons: [Int], teamIds: [ID], postseason: Boolean, start_date: String, end_date: String): Meta
        game(id: ID!): Game,
        stats(dates: [String], seasons: [Int], playerIds: [ID], gameIds: [ID], postseason: Boolean, start_date: String, end_date: String): [Stat]!
        season(season: Int, playerIds: [ID]): [SeasonAverage]
    }

    type Player {
        id: ID!
        first_name: String
        last_name: String
        position: String
        height_feet: Int
        height_inches: Int
        weight_pounds: Int
        team: Team
    }

    type PlayerRecap {
        id: ID!
        first_name: String
        last_name: String
        position: String
        team_id: ID!
    }

    type Team {
        id: ID!
        abbreviation: String
        city: String
        conference: String
        division: String
        full_name: String
        name: String
    }

    type Game {
        id: ID!
        date: String
        home_team_score: Int
        visitor_team_score: Int
        season: Int
        period: Int
        status: String
        time: String
        postseason: Boolean
        home_team: Team
        visitor_team: Team
    }

    type GameRecap {
        id: ID!
        date: String
        home_team_id: ID!
        home_team_score: Int
        season: Int
        visitor_team_id: ID!
        visitor_team_score: Int
    }

    type Stat {
        id: ID!
        ast: Int
        blk: Int
        dreb: Int
        fg3_pct: Float
        fg3a: Int
        fg3m: Int
        fg_pct: Float
        fga: Int
        fgm: Int
        ft_pct: Float
        fta: Int
        ftm: Int
        game: GameRecap
        min: String
        oreb: Int
        pf: Int
        player: PlayerRecap
        pts: Int
        reb: Int
        stl: Int
        team: Team
        turnover: Int
    }

    type SeasonAverage {
        games_played: Int
        player_id: ID!
        season: Int
        ast: Float
        blk: Float
        dreb: Float
        fg3_pct: Float
        fg3a: Float
        fg3m: Float
        fg_pct: Float
        fga: Float
        fgm: Float
        ft_pct: Float
        fta: Float
        ftm: Float
        min: String
        oreb: Float
        pf: Float
        pts: Float
        reb: Float
        stl: Float
        turnover: Float
    }

    type Meta {
        total_pages: Int
        current_page: Int
        next_page: Int
        per_page: Int
        total_count: Int
    }
`;

module.exports = typeDefs;