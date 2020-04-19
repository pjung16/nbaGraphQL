/*
 * action types
 */

export const ADD_PLAYER = 'ADD_PLAYER'
export const DELETE_PLAYER = 'DELETE_PLAYER'

/*
 * action creators
 */

export function addPlayer(player) {
  return { type: ADD_PLAYER, player }
}


export function deletePlayer(player) {
  return { type: DELETE_PLAYER, player }
}