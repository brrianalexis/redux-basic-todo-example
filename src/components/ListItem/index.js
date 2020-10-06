import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListItem extends Component {
  render() {
    return (
      <>
        {this.props.tasks.map(task => (
          <li>{task}</li>
        ))}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}

export default connect(mapStateToProps)(ListItem);
