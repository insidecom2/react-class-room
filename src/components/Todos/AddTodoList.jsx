import { useState } from 'react';
import { Button, Form, Input } from 'antd';

const AddTodoList = (props) => {
    const { addTodo } = props;
    const [id, setId] = useState(1);

    const onAddHandel = async (itemAdd) => {
        itemAdd = { ...itemAdd, id: id }
        await addTodo(itemAdd)
        setNewItem();
    }

    const setNewItem = () => {
        const plusId = id + 1;
        setId(plusId)
    }


    return <>
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onAddHandel}
            autoComplete="off"
        >
            <Form.Item
                label="Content"
                name="content"
                rules={[{ required: true, message: 'Please input your content!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Add
                </Button>
            </Form.Item>
        </Form>
    </>
}

export default AddTodoList;