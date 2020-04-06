import React from 'react';
import GSingleBox from '../component/generate/GSingleBox';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';


const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

class EditorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: [
                
            ]
        }
    }

    render() {

        return (
            <Layout style={{ minHeight: '97vh' }}>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">问卷编辑</Menu.Item>
                        <Menu.Item key="2">问卷预览</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                        <SubMenu
                            key="sub1"
                            title={
                            <span>
                                <UserOutlined />
                                <b>选择题</b>
                            </span>
                            }
                        >
                            <Menu.Item key="1">单项选择</Menu.Item>
                            <Menu.Item key="2">多项选择</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                            <span>
                                <LaptopOutlined />
                                <b>填空题</b>
                            </span>
                            }
                        >
                            <Menu.Item key="3">数字收集（整数）</Menu.Item>
                            <Menu.Item key="4">数字收集（小数）</Menu.Item>
                            <Menu.Item key="5">文本收集</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub3"
                            title={
                            <span>
                                <NotificationOutlined />
                                <b>其他问题</b>
                            </span>
                            }
                        >
                            <Menu.Item key="6">级联问题</Menu.Item>
                            <Menu.Item key="7">评分收集</Menu.Item>
                        </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <GSingleBox id='1'/>
                            <br/>
                            <GSingleBox id='2'/>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default EditorPage

