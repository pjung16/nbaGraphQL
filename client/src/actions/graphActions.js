/*
 * action types
 */

export const CHANGE_GRAPH_DATATYPE = 'CHANGE_GRAPH_DATATYPE'
export const UPDATE_PLAYERS_DATA = 'UPDATE_PLAYERS_DATA'
export const ADD_PLAYER_TO_SERIES = 'ADD_PLAYER_TO_SERIES'
export const DELETE_PLAYER_FROM_SERIES = 'DELETE_PLAYER_FROM_SERIES'


/*
 * action creators
 */

export function changeGraphDataType(graph) {
  return { type: CHANGE_GRAPH_DATATYPE, graph };
}

export function updatePlayersData(stats) {
  return { type: UPDATE_PLAYERS_DATA, stats };
}

export function addPlayerToSeries(options) {
  return { type: ADD_PLAYER_TO_SERIES, options };
}

export function deletePlayerFromSeries(player) {
  return {type: DELETE_PLAYER_FROM_SERIES, player};
}