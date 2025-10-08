import React from 'react'
import { useTodos } from '../context/todoList'
import SingleTodo from './SingleTodo';

const Todos = () => {

    const {todos} = useTodos();
    console.log("todos", todos);

    if( todos.length === 0 ){
        return <div className="mt-10 text-center text-2xl text-white">
            You have Completed your all Todos
        </div>
    }

  return (
    <div className=' mb-7'>
      <div className=" list-none mt-10"></div>
      {
        todos.map( (todo) => (
          <SingleTodo key={todo.id} todo={todo}></SingleTodo>
        ))
      }
    </div>
  )
}

export default Todos
