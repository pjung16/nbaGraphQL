import initialState from './initialState';

export default function playerReducer(state = initialState.players, action) {
  switch (action.type) {
    case 'ADD_PLAYER':
      let newPlayer = {};
      newPlayer[action.player.id] = action
      return Object.assign({}, state, newPlayer)

    // case 'DELETE_PLAYER':
    //   delete comments[action.id];

     default:
       return state;
  }
}