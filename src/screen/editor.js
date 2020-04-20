import React from 'react';
import GSingleBox from '../component/generate/GSingleBox';
import GCheckBox from '../component/generate/GCheckBox';
import GDigitBox from '../component/generate/GDigitBox'
import GFloatBox from '../component/generate/GFloatBox'
import GTextBox from '../component/generate/GTextBox'
import GRateBox from '../component/generate/GRateBox'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, Card } from 'antd';


const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

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

    handleCheckBox() {
        var p = this.state;
        p.question.push(new addQuestion(p.cur_id, 1))
        this.setState({
            cur_id: p.cur_id + 1,
            question: p.question
        })
        console.log(this.state)
    }

    handleDigitBox() {
        var p = this.state;
        p.question.push(new addQuestion(p.cur_id, 2))
        this.setState({
            cur_id: p.cur_id + 1,
            question: p.question
        })
        console.log(this.state)
    }

    handleFloatBox() {
        var p = this.state;
        p.question.push(new addQuestion(p.cur_id, 3))
        this.setState({
            cur_id: p.cur_id + 1,
            question: p.question
        })
        console.log(this.state)
    }

    handleTextBox() {
        var p = this.state;
        p.question.push(new addQuestion(p.cur_id, 4))
        this.setState({
            cur_id: p.cur_id + 1,
            question: p.question
        })
        console.log(this.state)
    }

    handleRateBox() {
        var p = this.state;
        p.question.push(new addQuestion(p.cur_id, 5))
        this.setState({
            cur_id: p.cur_id + 1,
            question: p.question
        })
        console.log(this.state)
    }

    getComponent(q) {
        if(q.type === 0) {
            return (
                <GSingleBox 
                    id = {this.state.question.indexOf(q) + 1}
                    data={q.questions}
                    onDelete={(e)=>this.handleDelete(e)}
                />
            )
        }
        else if(q.type === 1) {
            return (
                <GCheckBox 
                    id = {this.state.question.indexOf(q) + 1}
                    data={q.questions}
                    onDelete={(e)=>this.handleDelete(e)}
                />  
            )
        }
        else if(q.type === 2) {
            return (
                <GDigitBox 
                    id = {this.state.question.indexOf(q) + 1}
                    data={q.questions}
                    onDelete={(e)=>this.handleDelete(e)}
                />
            )
        }
        else if(q.type === 3) {
            return (
                <GFloatBox 
                    id = {this.state.question.indexOf(q) + 1}
                    data={q.questions}
                    onDelete={(e)=>this.handleDelete(e)}
                />
            )
        }
        else if(q.type === 4) {
            return (
                <GTextBox 
                    id = {this.state.question.indexOf(q) + 1}
                    data={q.questions}
                    onDelete={(e)=>this.handleDelete(e)}
                />
            )
        }
        else if(q.type === 5) {
            return (
                <GRateBox 
                    id = {this.state.question.indexOf(q) + 1}
                    data={q.questions}
                    onDelete={(e)=>this.handleDelete(e)}
                />
            )
        }
    }

    render() {

        return (
            <Layout style={{ minHeight: '97vh'}} breakpoint='xs'>
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
                            defaultOpenKeys={['sub1','sub2','sub3']}
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
                            <Menu.Item key="2"><Button type="link" style={{color:'grey'}} onClick={(e)=>this.handleCheckBox(e)}>多项选择</Button></Menu.Item>
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
                            <Menu.Item key="3"><Button type="link" style={{color:'grey'}} onClick={(e)=>this.handleDigitBox(e)}>数字收集(整数)</Button></Menu.Item>
                            <Menu.Item key="4"><Button type="link" style={{color:'grey'}} onClick={(e)=>this.handleFloatBox(e)}>数字收集(小数)</Button></Menu.Item>
                            <Menu.Item key="5"><Button type="link" style={{color:'grey'}} onClick={(e)=>this.handleTextBox(e)}>文本收集</Button></Menu.Item>
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
                            <Menu.Item key="7"><Button type="link" style={{color:'grey'}} onClick={(e)=>this.handleRateBox(e)}>评分收集</Button></Menu.Item>
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
                                        {
                                            this.getComponent(question)
                                        }
                                        <br/>
                                    </div>
                                ))
                            }
                        </Content>
                    </Layout>
                    <div style={{
                        border: '0px solid #1E90FF',
                        WebkitBoxShadow: '0px 3px 3px #c8c8c8', MozBoxShadow: '0px 3px 3px #c8c8c8', boxShadow: '0px 3px 3px #c8c8c8',
                        width: (document.body.clientWidth)*0.2, height:'660px', position:'fixed',
                        right: '15px', top: '85px', backgroundColor: 'white'
                    }}>
                    </div>
                </Layout>
            </Layout>
        )
    }
}

export default EditorPage

