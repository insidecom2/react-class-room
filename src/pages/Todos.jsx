import TodoLists from '../components/Todos/TodoLists'
import { useTodos } from '../components/Todos/hooks/useTodos';
import AddTodoList from '../components/Todos/AddTodoList';

const Todos = () => {
    const { todos, addTodo, deleteTodo } = useTodos();
    return <>
        <h1>Todos</h1>
        <AddTodoList todos={todos} addTodo={addTodo}/>
        <TodoLists todos={todos} deleteTodo={deleteTodo} />
    </>
}


export default Todos;
