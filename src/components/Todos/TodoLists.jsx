const TodoLists = (props) => {
    const { todos, deleteTodo } = props;
    const todoLists = todos.map( (item, key) =>
        <li key={key}>{item.content} | <button onClick={() => deleteTodo(item.id)}>delete</button></li>
    )
    const showTodo = todoLists !== '' ? <ul>{todoLists}</ul>: '';

    return <>  
        {showTodo}
    </> 
    
}

export default TodoLists;