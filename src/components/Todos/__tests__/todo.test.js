import { render, screen } from '@testing-library/react';
import TodoLists from '../TodoLists';

it('Todo List', () => {
    const todos = [{
        id: 1,
        content: 'test'
    },
    {
        id: 2,
        content: 'test-3'
    }];

    const deleteTodo = () => {

    }

    render(<TodoLists todos={todos} deleteTodo={deleteTodo} />);
    const element = screen.getByTestId('todo-list')
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('test')
    expect(element).toHaveTextContent('test-3')
    expect(element).toHaveTextContent('delete')
})


