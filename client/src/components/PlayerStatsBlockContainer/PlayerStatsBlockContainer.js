import { connect } from 'react-redux';
import PlayerStatsBlock from '../PlayerStatsBlock/PlayerStatsBlock';

const getAllPlayers = (players) => {
  return players
};

const mapStateToProps = state => ({
  players: getAllPlayers(state.players)
});

export default connect(mapStateToProps)(PlayerStatsBlock);