import React, { useContext, useState } from 'react';
import { TodoContext } from '../../context/todo/todo-context';

export const TodoItem = ({ todo }) => {
  const [onEdit, setOnEdit] = useState(false)
  const [editValue, setEditValue] = useState(todo.label)
  const { Done, Delete, editTodos } = useContext(TodoContext)

  const handleOnEdit = () => {
    setOnEdit(true)
  }

  const handleOnChange = e => {
    setEditValue(e.target.value)
  }

  const handleOnSave = (id) => {
    setOnEdit(false)

    if(editValue.trim()) {
      editTodos(editValue, id)
    } else {
      setEditValue(todo.label)
    }
  }

  if (onEdit) {
    return(
      <li className="todo-li d-flex">
        <input 
          type="text" 
          className="edit-input"
          value={editValue}
          onChange={ e => handleOnChange(e)}
        />
        <span className="todo-btn">
          <button type='button'
            className='btn btn-outline-success btn-sm change-btn'
            onClick={ () => handleOnSave(todo.id) }
          >
            <i className='fa fa-check'></i>
          </button>
        </span>
      </li>
    )
  } else {
    return(
      <li className="todo-li d-flex">
        <label 
          className={todo.done ? 'label done' : todo.important ? 'label important' : 'label'}
        >
          { todo.label }
        </label>
        <span className="todo-btn">
          <button type='button' 
            className='btn btn-outline-danger btn-sm check-btn'
            onClick={ () => Done(todo.id) }
          >
            <i className='fa fa-check-square-o'></i>
          </button>
          <button type='button'
            className='btn btn-outline-success btn-sm change-btn'
            onClick={ handleOnEdit }
          >
            <i className='fa fa-pencil-square-o'></i>
          </button>
          <button type='button' 
            className='btn btn-outline-danger btn-sm del-btn'
            onClick={ () => Delete(todo.id) }
          >
            <i className='fa fa-trash-o'></i>
          </button>
        </span>
      </li>
    )
  }
}
