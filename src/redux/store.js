import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

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
        tasks: [...state.tasks, action.task],
        input: '',
      };
    // case 'REMOVE_TASK':
    //   return {
    //     ...InitialState,
    //     tasks: [...state.tasks.filter()] //? filtras por ID o similar
    //   }
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

export const addTask = description => dispatch => {
  return dispatch({
    type: 'ADD_TASK',
    task: description,
  });
};

export const removeTask = () => dispatch => {
  return dispatch({
    type: 'REMOVE_TASK',
  });
};

export const initializeStore = () => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
