import { connect } from 'react-redux';
import Home from '../components/Home';
import { fetchAllPins } from "../actions/actionPins.js";
const mapStateToProps = state => {
  return {
    state: state.pins
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPins: () => dispatch(fetchAllPins())
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps)(Home);
