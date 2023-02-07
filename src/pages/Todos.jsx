import TodoLists from '../components/Todos/TodoLists'
import { useTodos } from '../components/Todos/hooks/useTodos';
import AddTodoList from '../components/Todos/AddTodoList';
import BreadcrumbSection from '../components/Breadcrumb';
const Todos = () => {
    const { todos, addTodo, deleteTodo } = useTodos();
    return <>
        <BreadcrumbSection titlePage='Todos' />
        <h1>Todos</h1>
        <AddTodoList todos={todos} addTodo={addTodo} />
        <TodoLists todos={todos} deleteTodo={deleteTodo} />
    </>
}


export default Todos;
