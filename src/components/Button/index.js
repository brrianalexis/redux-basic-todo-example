import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../redux/store';

class Button extends Component {
  handleSubmit() {
    const { dispatch } = this.props;
    dispatch(addTask());
  }

  render() {
    return (
      <button
        onClick={() => this.props.inputValue.length >= 2 && this.handleSubmit()}
      >
        <span role="img" aria-label="plus sign">
          ➕
        </span>
        Add todo
      </button>
    );
  }
}

function mapStateToProps(state) {
  return {
    inputValue: state.input,
  };
}

export default connect(mapStateToProps)(Button);
