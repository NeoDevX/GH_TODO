let newID = 100

const addImportant = (state, action) => {
  const newTask = {id: newID++, label: action.payload, done: false, important: true}
  return {todos: [...state.todos, newTask]} 
}

const add = (state, action) => {
  const newTask = {id: newID++, label: action.payload, done: false, important: false}
  return {todos: [...state.todos, newTask]} 
}
const done = (state, { payload: id }) => {
  const newTodos = [...state.todos]

  newTodos.map(item => {
    if(item.id === id) {
      return item.done = !item.done
    }
  })

  return {todos: [...newTodos]}
}
const remove = (state, { payload: id }) => {
  const newTodos =  state.todos.filter(item => item.id !== id)

  return {todos: [...newTodos]}
}

const edit = (state, { payload: { id, editValue }}) => {
  const newTodos = [...state.todos]

  newTodos.map(todo => {
    if (todo.id === id) {
      return todo.label = editValue
    }
  })

  return {todos: [...newTodos]}
}


export { add, done, remove, edit, addImportant }