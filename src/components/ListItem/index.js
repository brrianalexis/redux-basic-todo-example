import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask } from '../../redux/store';

const ListItem = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  const handleRemove = id => {
    dispatch(removeTask(id));
  };

  return (
    <>
      {tasks.map(task => (
        <div style={{ display: 'flex' }} key={task.id}>
          <li>{task.description}</li>
          <button
            style={{ marginLeft: '1rem' }}
            onClick={() => handleRemove(task.id)}
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
};

export default ListItem;
