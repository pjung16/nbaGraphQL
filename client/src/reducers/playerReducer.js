import initialState from './initialState';

export default function playerReducer(state = initialState.players, action) {
  switch (action.type) {
    case 'ADD_PLAYER':
      return [...state, action]

    // case 'DELETE_PLAYER':
    //   delete comments[action.id];

     default:
       return state;
  }
}