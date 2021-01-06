import React, { useReducer } from 'react';
import { TodoContext } from './todo-context';
import { TodoReducer } from './todo-reducer';
import {
  ADD,
  ADD_IMPORTANT,
  DELETE,
  DONE,
  EDIT } from '../types';

const initialState = {
  todos: [
    { id: 1, label: 'Have a lunch', done: false, important: false },
    { id: 2, label: 'Do 8 pomodoro', done: false, important: true },
    { id: 3, label: 'Finish site\'s design', done: false, important: true },
    { id: 4, label: 'Drink 1,5 liter of water', done: false, important: false },
    { id: 5, label: 'Read a book "Hobbit"', done: false, important: false },
    { id: 6, label: 'Have a breakfast', done: false, important: false },
    { id: 7, label: 'Watch a film "Alone at Home 2"', done: false, important: true },
    { id: 8, label: 'Have a dinner', done: false, important: false },
    { id: 9, label: 'Fix bugs in a car', done: false, important: true },
    { id: 10, label: 'Play tennis', done: false, important: false }
  ]
}

export const TodoState = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState)

  const AddImportant = (label) => dispatch({
    type: ADD_IMPORTANT,
    payload: label
  })

  const Add = (label) => dispatch({
    type: ADD,
    payload: label
  })

  const Delete = (id) => {
    dispatch({
      type: DELETE,
      payload: id
    })
  }

  const Done = (id) => dispatch({
    type: DONE,
    payload: id
  })

  const editTodos = (editValue, id) => dispatch({
    type: EDIT,
    payload: {
      id,
      editValue
    }
  })


  const { todos } = state

  return(
    <TodoContext.Provider value={ 
      { Add, todos, Done, Delete, editTodos, AddImportant } 
    }>
      { children }
    </TodoContext.Provider>
  )
}