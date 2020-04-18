/*
 * action types
 */

export const CHANGE_GRAPH_DATATYPE = 'CHANGE_GRAPH_DATATYPE'
export const UPDATE_GRAPH_OPTIONS = 'UPDATE_GRAPH_OPTIONS'

/*
 * action creators
 */

export function changeGraphDataType(graph) {
  return { type: CHANGE_GRAPH_DATATYPE, graph }
}

export function updateGraphOptions(options) {
  return { type: UPDATE_GRAPH_OPTIONS, options }
}