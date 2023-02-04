import { Layout } from 'antd';
import FooterTemplate from './Footer';
import HeaderTemplate from './Header';
const { Content } = Layout;

const Template = (props) => {
    return <>
        <Layout className="layout">
            <HeaderTemplate />
            <Content style={{ padding: ' 15px' }}>
                <div className="site-layout-content" style={{ background: '#eee', padding: '5px 15px' }}>
                    {props.children}
                </div>
            </Content>
            <FooterTemplate />
        </Layout>
    </>
}

export default Template;
