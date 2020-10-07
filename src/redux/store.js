import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  tasks: [],
  input: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_INPUT':
      return {
        ...state,
        input: action.inputValue,
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, { description: state.input, id: uuidv4() }],
        input: '',
      };
    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: [...state.tasks.filter(task => task.id !== action.id)],
      };
    default:
      return state;
  }
};

export const editInput = value => dispatch => {
  return dispatch({
    type: 'EDIT_INPUT',
    inputValue: value,
  });
};

export const addTask = () => dispatch => {
  return dispatch({
    type: 'ADD_TASK',
  });
};

export const removeTask = id => dispatch => {
  return dispatch({
    type: 'REMOVE_TASK',
    id: id,
  });
};

export const initializeStore = () => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
