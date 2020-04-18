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

     default:
       return state;
  }
}