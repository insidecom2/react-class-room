import { useState } from 'react';
export const useTodos = () => {
    const [todos, setTodos] = useState([]);


    const addTodo = (item) => {
        setTodos([...todos, item]);
    }

    const deleteTodo = (id) => {
        const todoItem = todos.filter((todo) => todo.id !== id);
        setTodos(todoItem);
    }

    return {
        todos,
        addTodo,
        deleteTodo
    }
}

