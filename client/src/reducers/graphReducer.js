import initialState from './initialState';

export default function graphReducer(state = initialState.graphOptions, action) {
  const colors = ['#67DBF9', '#00E680', '#A722E5', '#FF4848', '#FF8413'];

  switch (action.type) {
    case 'CHANGE_GRAPH_DATATYPE':
      const newState = JSON.parse(JSON.stringify(state))
      newState.graphDataType = action.graph
      return newState

    case 'UPDATE_PLAYERS_DATA':
      const newUpdatedState = JSON.parse(JSON.stringify(state))
      // action.options.data = action.options.data.map(d => d[state.graphDataType]);
      console.log(action.stats)
      newUpdatedState.series = action.stats;
      newUpdatedState.series.forEach((cur, i) => {
        cur.color = colors[i%5];
        cur.data = cur.data.map(d => d[state.graphDataType]);
      })
      return newUpdatedState;
      
    case "ADD_PLAYER_TO_SERIES":
      const newAddedState = JSON.parse(JSON.stringify(state))
      action.options.data = action.options.data.map(d => d[state.graphDataType]);
      newAddedState.series = [
        ...newAddedState.series,
        action.options
      ];
      newAddedState.series.forEach((cur, i) => {
        cur.color = colors[i%5];
      })
      return newAddedState;

    case "DELETE_PLAYER_FROM_SERIES":
      const newRemovedState = {
        series: state.series.filter((cur) => {
          return (cur.name !== action.player)
        })
      }
      newRemovedState.series.forEach((cur, i) => {
        cur['color'] = colors[i%5];
      })
      return newRemovedState;

     default:
       return state;
  }
}