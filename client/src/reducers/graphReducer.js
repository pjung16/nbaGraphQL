import initialState from './initialState';
import teams from '../teams.json';

export default function graphReducer(state = initialState.graphOptions, action) {
  const colors = ['#67DBF9', '#00E680', '#A722E5', '#FF4848', '#FF8413', '#FFEB38'];
  const dataTypeToLabel = {
    'pts': 'Points',
    'reb': 'Rebounds',
    'ast': 'Assists',
    'stl': 'Steals',
    'blk': 'Blocks',
    'fg_pct': 'Field Goal Percentage',
    'fg3_pct': 'Three Point Field Goal Percentage',
    'ft_pct': 'Free Throw Percentage',
    'turnover': 'Turnovers',
  };

  switch (action.type) {
    case 'CHANGE_GRAPH_DATATYPE':
      const newState = JSON.parse(JSON.stringify(state));
      newState.graphDataType = action.graph;
      console.log(action.graph)
      newState.yAxis.title.text = dataTypeToLabel[action.graph];
      return newState;

    case 'UPDATE_PLAYERS_DATA':
      const newUpdatedState = JSON.parse(JSON.stringify(state));
      newUpdatedState.series = action.stats;
      newUpdatedState.series.forEach((cur, i) => {
        cur.color = colors[i%6];
        cur.data = cur.data.map(d => {
          let date = new Date(d.game.date);
          let opponent = d.player.team_id !== d.game.visitor_team_id ? d.game.visitor_team_id : d.game.home_team_id;
          return {
            y: d[state.graphDataType],
            gameData: `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()} vs ${teams[opponent].name}`,
            playerName: `${d.player.first_name} ${d.player.last_name}`,
          }
        });
      })
      return newUpdatedState;
      
    case "ADD_PLAYER_TO_SERIES":
      const newAddedState = JSON.parse(JSON.stringify(state));
      action.options.data = action.options.data.map(d => {
        let date = new Date(d.game.date);
        console.log(d)
        let opponent = d.player.team_id === d.game.visitor_team_id ? d.game.home_team_id : d.game.visitor_team_id;
        return {
          y: d[state.graphDataType],
          gameData: `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()} vs ${teams[opponent].name}`,
          playerName: `${d.player.first_name} ${d.player.last_name}`,
        }
      });
      newAddedState.series = [
        ...newAddedState.series,
        action.options
      ];
      newAddedState.series.forEach((cur, i) => {
        cur.color = colors[i%6];
      });
      return newAddedState;

    case "DELETE_PLAYER_FROM_SERIES":
      const newRemovedState = JSON.parse(JSON.stringify(state));
      newRemovedState.series = state.series.filter((cur) => {
        return (cur.name !== action.player)
      });
      newRemovedState.series.forEach((cur, i) => {
        cur['color'] = colors[i%6];
      });
      return newRemovedState;

     default:
       return state;
  }
}