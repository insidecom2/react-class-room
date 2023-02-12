import { Table, Skeleton } from 'antd';
import { useState } from 'react';
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        sorter: {
            compare: (a, b) => a.name - b.name,
        },
        width: '20%',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        filters: [
            {
                text: 'Male',
                value: 'male',
            },
            {
                text: 'Female',
                value: 'female',
            },
        ],
        width: '20%',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
];

const TableComponent = (props) => {
    const { data } = props
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 10,
        },
    });

    const handleTableChange = (pagination) => {
        setTableParams({
            pagination,

        });
    }

    const loading = data.length > 0 ? false : true;
    if (loading) {
        return <>
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
        </>
    }
    return <>
        <Table
            columns={columns}
            rowKey={(record) => record.key}
            dataSource={data}
            pagination={tableParams.pagination}
            loading={loading}
            onChange={handleTableChange}
        />
    </>
}

export default TableComponent;