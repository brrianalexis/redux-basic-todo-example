import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTask } from '../../redux/store';

class ListItem extends Component {
  handleRemove(id) {
    const { dispatch } = this.props;
    dispatch(removeTask(id));
  }

  render() {
    return (
      <>
        {this.props.tasks.map(task => (
          <div style={{ display: 'flex' }}>
            <li key={task.id}>{task.description}</li>
            <button
              style={{ marginLeft: '1rem' }}
              onClick={() => this.handleRemove(task.id)}
            >
              <span role="img" aria-label="red cross mark">
                ❌
              </span>
              Remove todo
            </button>
          </div>
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
