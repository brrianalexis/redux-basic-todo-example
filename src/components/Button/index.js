import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../redux/store';

const Button = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(state => state.input);

  const handleSubmit = () => {
    dispatch(addTask());
  };

  return (
    <button onClick={() => inputValue.length >= 2 && handleSubmit()}>
      <span role="img" aria-label="plus sign">
        ➕
      </span>
      Add todo
    </button>
  );
};

export default Button;
