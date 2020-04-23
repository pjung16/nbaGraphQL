import { connect } from 'react-redux';
import Graph from '../Graph/Graph';

const getAllPlayers = (players) => {
  return players
};

const mapStateToProps = state => ({
  graphOptions: state.graphs,
  players: getAllPlayers(state.players)
});

export default connect(mapStateToProps)(Graph);