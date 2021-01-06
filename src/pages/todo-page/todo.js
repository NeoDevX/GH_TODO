import React, { useContext, useState }  from 'react';
import { TodoItem } from './todo-item';
import './style.css';
import { TodoContext } from '../../context/todo/todo-context'

export const Todo = () => {
  const { todos, Add, AddImportant } = useContext(TodoContext)
  const [title, setTitle] = useState('')
  const [importantTitle, setImportantTitle] = useState('')

  const handleImportantChange = (e) => {
    setImportantTitle(e.target.value)
  }

  const handleImportantSubmit = (e) => {
    e.preventDefault()
    AddImportant(importantTitle)
    setImportantTitle('')
  }

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    Add(title)
    setTitle('')
  }

  return(
    <>
      <div className="container todo-con">
        <div className="todo todo1">
          <div className="todo-add">
            <h3>Important todos</h3>
            <form className="form" type="submit"
              onSubmit={ handleImportantSubmit }
            >
              <input type="text"
                onChange={ handleImportantChange }
                value={importantTitle}
                required
                placeholder="Add Task..."
              />
              <button className="btn btn-info btn-sm" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="todos">
            <ul>           
              {
                todos.length ? todos.map(todo => todo.important && <TodoItem key={todo.id} todo={todo}/>):
                <span>No Todos!</span>
              }
            </ul>
          </div>
        </div>

        <div className="todo todo1">
          <div className="todo-add">
            <h3>Not important todos</h3>
            <form className="form" type="submit"
              onSubmit={handleSubmit}
            >
              <input type="text"
                onChange={ handleChange }
                value={title}
                required
                placeholder="Add Task..."
              />
              <button className="btn btn-info btn-sm" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="todos">
            <ul>           
              {
                todos.length ? todos.map(todo => !todo.important && <TodoItem key={todo.id} todo={todo}/>):
                <span>No Todos!</span>
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="container add-btn-con">
        <button className="add-btn btn btn-secondary">
          Add your list
        </button>
      </div>
    </>
  )
}