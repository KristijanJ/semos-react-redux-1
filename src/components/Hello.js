import React, { Component } from 'react';
import { connect } from "react-redux";
import { sayHello } from "../actions/sayHelloAction";

class Hello extends Component {
  componentDidMount() {
    this.props.sayHello();
  }

  render() {
    return (
      <div>
        <h2>Kaj si be {this.props.name}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.sayHelloReducer.name
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sayHello: () => {
      dispatch(sayHello());
    }
  };
};

export default Hello = connect(mapStateToProps, mapDispatchToProps)(Hello);