import { 
  DELETE,
  ADD,
  DONE,
  EDIT,
  ADD_IMPORTANT } from '../types';
import { add, done, remove, edit, addImportant } from './actions'

export const TodoReducer = (state, action) => {
  switch(action.type) {
    case ADD: 
      return add(state, action)
    case DONE: 
      return done(state, action)
    case DELETE:
      return remove(state, action)
    case EDIT:
      return edit(state, action)
    case ADD_IMPORTANT:
      return addImportant(state, action)
    default:
      return state
  }
}

// const handlers = {
//   DEFAULT: state => state = {...state},
//   [DELETE]: (state, {payload}) => {
//     const newArr = payload.todos.filter(item => {
//       console.log(item.id)
//       return item.id !== payload.id
//     })
//     console.log(newArr)
//     payload.todos = newArr
//   },
//   [ADD]: (state, {payload}) => { 
//     console.log(payload)
//     return [...state.todos, {id: newID++, label: payload, done: false}]
//   },
//   [DONE]: (state, { payload }) => {
//     console.log(payload)
//     return payload.done = !payload.done
//   }
// }

// export const TodoReducer = (state, action) => {
//   const handler = handlers[action.type] || handlers.DEFAULT
//   return handler(state, action)
// }