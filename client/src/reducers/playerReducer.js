import initialState from './initialState';

export default function playerReducer(state = initialState.players, action) {
  switch (action.type) {
    case 'ADD_PLAYER':
      // console.log([...state, action])
      return [...state, action]

    case 'DELETE_PLAYER':
      let removeIndex = 0
      state.forEach((cur,i) => {
        if (cur.player.id === action.player) {
          removeIndex = i;
        }
      })
      return [
        ...state.slice(0, removeIndex),
        ...state.slice(removeIndex + 1)
      ]

     default:
       return state;
  }
}