import initialState from './initialState';

export default function playerReducer(state = initialState.players, action) {
  switch (action.type) {
    case 'ADD_PLAYER':
      console.log(state)
      return [...state, action]

    case 'DELETE_PLAYER':
      console.log(action)
      return state.filter((cur) => {
        if (cur.player.id !== action.player) {
          return cur
        }
      })

     default:
       return state;
  }
}