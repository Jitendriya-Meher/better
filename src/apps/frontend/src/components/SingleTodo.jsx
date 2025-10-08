import React, { useState } from 'react'
import {AiFillDelete} from "react-icons/ai";
import {BiEditAlt} from "react-icons/bi";
import {GrCompliance} from "react-icons/gr";
import toast from 'react-hot-toast';
import { useTodos } from '../context/todoList';

const SingleTodo = ({todo}) => {

    console.log(todo);
    const {toggleComplete,handleEdit,removeTodo} = useTodos();

    const [newTitle, setNewTitle] = useState(todo.text);

    const handleChange = (e) => {

        if( todo.completed === false){
            setNewTitle(e.target.value);
        }
    }

  return (
    <div className=' mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded mx-20'>
      
              <input type="text"  
                onChange={handleChange}
                value={newTitle}
                style={{textDecoration: todo.completed && "line-through"}}
                className=" text-white w-[83%] overflow-auto bg-transparent border-0 outline-0 text-lg"
              />

              <div className=" flex justify-between gap-5">
                <button
                onClick={() => {
                    toggleComplete(todo.id);
                    toast.success("todo updated successfully");
                }}
                className=" text-white bg-green-500 border-0 py-2 px-3 text-lg focus:outline-none hover:bg-green-600 rounded text-md transition-all duration-200 ">
                    <GrCompliance></GrCompliance>
                </button>

                <button  onClick={() => {
                    if( newTitle.length === 0){
                        removeTodo(todo.id);
                        toast.error("todo has been removed");
                        return;
                    }
                    handleEdit(todo.id, newTitle);
                    toast.success("todo edited successfully");
                }}
                className=" text-white bg-yellow-500 border-0 py-2 px-3 text-lg focus:outline-none hover:bg-yellow-600 rounded text-md transition-all duration-200">
                    <BiEditAlt></BiEditAlt>
                </button>

                <button  onClick={() => {
                    removeTodo(todo.id);
                    toast.error("todo has been removed");
                }}
                className=" text-white bg-red-500 border-0 py-2 px-3 text-lg focus:outline-none hover:bg-red-600 rounded text-md transition-all duration-200">
                    <AiFillDelete></AiFillDelete>
                </button>
              </div>
            </div>
  )
}

export default SingleTodo
