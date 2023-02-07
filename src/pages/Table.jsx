import Title from "antd/es/typography/Title";
import TableComponent from '@components/Table/Table';
import useFetchTable from '@hooks/useFetchTable';

const TablePage = () => {
    const { tableData } = useFetchTable();

    return <>
        <Title>Table</Title>
        <TableComponent data={tableData} />
    </>
}

export default TablePage;