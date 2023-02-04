import { Menu, Layout } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Header } = Layout;

const HeaderTemplate = () => {
    const items = [
        {
            label: <Link to='/'>Increase</Link>,
            key: 'increase',
            icon: <AppstoreOutlined />,
        },
        {
            label: <Link to='/todos'>Todo Lists</Link>,
            key: 'todo',
            icon: <AppstoreOutlined />,
        },
    ];
    return <>
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items}
            />
        </Header>
    </>
}

export default HeaderTemplate;