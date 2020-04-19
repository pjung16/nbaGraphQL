import initialState from './initialState';

export default function graphReducer(state = initialState.graphOptions, action) {
  switch (action.type) {
    case 'CHANGE_GRAPH_DATATYPE':
      return action.graphDataType
      
    case "UPDATE_GRAPH_OPTIONS":
      console.log(state);
      return {
        series: [
          ...state.series,
          action.options
        ]
      };

    case "DELETE_PLAYER_FROM_SERIES":
      console.log(state);
      const tempState = state.series.filter((cur) => {
        if (cur.name !== action.player) {
          return cur
        }
      })
      return {
        series: [
          ...tempState,
        ]
      };

     default:
       return state;
  }
}