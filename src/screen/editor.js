import React from 'react';
import GSingleBox from '../component/generate/GSingleBox';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Button } from 'antd';


const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

function addQuestion(id, type) {
    this.id = id
    this.type = type
    this.questions = []
}

class EditorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cur_id: 1,
            question: [
                
            ]
        }
    }

    handleDelete(id) {
        var _state = this.state
        
        _state.question.splice(id-1, 1)
        this.setState({ 
            ..._state
        })
    }

    handleSingleBox() {
        var p = this.state;
        p.question.push(new addQuestion(p.cur_id, 0))
        this.setState({
            cur_id: p.cur_id + 1,
            question: p.question
        })
        console.log(this.state)
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
                            <Menu.Item key="1"><Button type="link" style={{color:'grey'}} onClick={(e)=>this.handleSingleBox(e)}>单项选择</Button></Menu.Item>
                            <Menu.Item key="2"><Button type="link" style={{color:'grey'}} onDoubleClick={()=>this.handleSingleBox()}>多项选择</Button></Menu.Item>
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
                            <Menu.Item key="3"><Button type="link" style={{color:'grey'}} onDoubleClick={this.handleSingleBox}>数字收集(整数)</Button></Menu.Item>
                            <Menu.Item key="4"><Button type="link" style={{color:'grey'}} onDoubleClick={this.handleSingleBox}>数字收集(小数)</Button></Menu.Item>
                            <Menu.Item key="5"><Button type="link" style={{color:'grey'}} onDoubleClick={this.handleSingleBox}>文本收集</Button></Menu.Item>
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
                            <Menu.Item key="6"><Button type="link" style={{color:'grey'}} onDoubleClick={this.handleSingleBox}>级联问题</Button></Menu.Item>
                            <Menu.Item key="7"><Button type="link" style={{color:'grey'}} onDoubleClick={this.handleSingleBox}>评分收集</Button></Menu.Item>
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
                            {
                                this.state.question.map((question) => (
                                    <div key={question.id}>
                                        <GSingleBox 
                                            id = {this.state.question.indexOf(question) + 1}
                                            data={question.questions}
                                            onDelete={()=>this.handleDelete()}
                                        />
                                        <br />
                                    </div>
                                ))
                            }
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default EditorPage

