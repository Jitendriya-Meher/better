import { createContext, useContext, useEffect, useState } from "react";

export const TodoContext = createContext() ;

export const TodoProvider = ({children}) => {

    const [todos, setTodos] = useState([]);

    const addTodos = (text) => {
        const todo = {
            id: Date.now(),
            text: text,
            completed:false
        };
        setTodos((prev) => (
            [...prev,todo]
        ));
        localStorage.setItem("Todos", JSON.stringify([...todos,todo]));
    }

    const toggleComplete = (id) => {
        const newTodos = todos.map((todo) => {
            if(todo.id === id){
                return {
                    ...todo,completed:!todo.completed
                }
            }
            else{
                return todo
            }
        });
        setTodos(newTodos);
        localStorage.setItem("Todos", JSON.stringify(newTodos));
    }

    const handleEdit = (id,NewText) => {
        const newTodos = todos.map((todo) => {
            if(todo.id === id){
                return {
                    ...todo,text:NewText
                }
            }
            else{
                return todo
            }
        });
        console.log("newTodos",newTodos);
        setTodos(newTodos);
        localStorage.setItem("Todos", JSON.stringify(newTodos));
    }

    const removeTodo = (id) => {
        const newTodos = todos.filter( (todo) => {
            return todo.id !== id
        });
        setTodos(newTodos);
        localStorage.setItem("Todos", JSON.stringify(newTodos));
    }

    useEffect(() => {
        const Todos = JSON.parse(localStorage.getItem("Todos")) || [];
        setTodos(Todos);
    },[]);

    return <TodoContext.Provider value={{todos,addTodos,toggleComplete,handleEdit,removeTodo}}>
        {children}
    </TodoContext.Provider>

}

export const useTodos = () => {
    return useContext(TodoContext);
}