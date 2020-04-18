import { connect } from 'react-redux';
import Graph from '../Graph/Graph';

const mapStateToProps = state => ({
  graphOptions: state.graphs
});

export default connect(mapStateToProps)(Graph);