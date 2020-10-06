import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editInput } from '../../redux/store';

class Input extends Component {
  handleChange(value) {
    const { dispatch } = this.props;
    dispatch(editInput(value));
  }

  render() {
    return (
      <input
        type="text"
        value={this.props.inputValue}
        onChange={e => this.handleChange(e.target.value)}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    inputValue: state.input,
  };
}

export default connect(mapStateToProps)(Input);
