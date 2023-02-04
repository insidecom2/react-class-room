import { useState } from 'react';

const AddTodoList = (props) => {
    const { addTodo } = props;
    const [id, setId] = useState(1);
    const [item, setItem] = useState(
        {
            id: id,
            content: ''
        }
    );

    const onChangeHandel = (e) => {
        const content = e.target.value;
        setItem({ ...item, content: content })
    }

    const onAddHandel = async (itemAdd) => {
        await addTodo(itemAdd)
        setNewItem();
    }

    const setNewItem = () => {
        const plusId = id + 1;
        setItem({
            id: plusId,
            content: ''
        })
        setId(plusId)
    }


    return <>
        Content :  <input type='text' value={item.content} onChange={(e) => onChangeHandel(e)} />
        <button type='button' onClick={() => onAddHandel(item)}>Add</button>
    </>
}

export default AddTodoList;