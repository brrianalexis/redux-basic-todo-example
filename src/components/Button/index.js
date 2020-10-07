import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../redux/store';

class Button extends Component {
  handleSubmit(description) {
    const { dispatch } = this.props;
    dispatch(addTask(description));
  }

  render() {
    return (
      <button onClick={() => this.handleSubmit(this.props.inputValue)}>
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
