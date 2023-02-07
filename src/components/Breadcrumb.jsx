import { Breadcrumb } from 'antd';

const BreadcrumbSection = (props) => {
    const { titlePage } = props;
    return <>
        <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>

            <Breadcrumb.Item>{titlePage}</Breadcrumb.Item>
        </Breadcrumb>
    </>

}

export default BreadcrumbSection;