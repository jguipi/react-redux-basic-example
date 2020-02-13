import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as counterActions from "../redux/counterData/counterDataActions";

class CounterPage extends React.Component {
  render() {
    const { counterData, incrementCounter, reduceCounter } = this.props;
    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <button onClick={reduceCounter}>-</button>
        {counterData.counter}
        <button onClick={incrementCounter}>+</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counterData: state.counterDataReducers
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(counterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);
