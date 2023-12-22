import { createContext, useContext, useEffect, useReducer } from "react";

const TodoContext = createContext();

export const useTodoContext = () => {
  return useContext(TodoContext);
}

const TodoReducer = (state, action) =>{
  switch(action.type){
    case "ADD": {
      return [...state,{id: Date.now(),name: action.payload, done: false}]
    }
    case "REMOVE": {
      return state.filter((todo) => todo.id !== action.payload)
    }
    case "TOGGLE": {
      return state.map((todo) => {
        if(todo.id === action.payload){
          return {...todo, done: !todo.done}
        }
        return todo
      })
    }
    default:
      return state;
  }
}


export const TodoProvider = ({children}) => {
  const localTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, dispatch] = useReducer(TodoReducer,localTodos)

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
  })

  return(
    <TodoContext.Provider value={{todos, dispatch}}>
      {children}
    </TodoContext.Provider>
  )
}
