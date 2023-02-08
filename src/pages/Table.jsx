import Title from "antd/es/typography/Title";
import TableComponent from '@components/Table/Table';
import useFetchTable from '@hooks/useFetchTable';
import BreadcrumbSection from '@components/Breadcrumb';
const TablePage = () => {
    const { tableData } = useFetchTable();

    return <>
        <BreadcrumbSection titlePage='Table datas.' />
        <Title>Table</Title>
        <TableComponent data={tableData} />
    </>
}

export default TablePage;