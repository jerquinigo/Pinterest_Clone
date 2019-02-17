import { connect } from "react-redux";
import Home from "./Home";
import { fetchAllPins } from "../Redux/actions/actionPins.js";

const mapStateToProps = state => {
  // debugger;
  return {
    pins: state.pins
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPins: () => dispatch(fetchAllPins())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
