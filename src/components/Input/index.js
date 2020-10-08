import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editInput } from '../../redux/store';

const Input = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(state => state.input);

  const handleChange = value => {
    dispatch(editInput(value));
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={e => handleChange(e.target.value)}
    />
  );
};

export default Input;
