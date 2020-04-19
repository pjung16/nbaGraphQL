/*
 * action types
 */

export const CHANGE_GRAPH_DATATYPE = 'CHANGE_GRAPH_DATATYPE'
export const UPDATE_GRAPH_OPTIONS = 'UPDATE_GRAPH_OPTIONS'
export const DELETE_PLAYER_FROM_SERIES = 'DELETE_PLAYER_FROM_SERIES'


/*
 * action creators
 */

export function changeGraphDataType(graph) {
  return { type: CHANGE_GRAPH_DATATYPE, graph };
}

export function updateGraphOptions(options) {
  return { type: UPDATE_GRAPH_OPTIONS, options };
}

export function deletePlayerFromSeries(player) {
  return {type: DELETE_PLAYER_FROM_SERIES, player};
}