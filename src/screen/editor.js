import React from 'react';
import GSingleBox from '../component/generate/GSingleBox';
import GCheckBox from '../component/generate/GCheckBox';
import GDigitBox from '../component/generate/GDigitBox'
import GFloatBox from '../component/generate/GFloatBox'
import GTextBox from '../component/generate/GTextBox'
import GRateBox from '../component/generate/GRateBox'
import { UserOutlined, LaptopOutlined, NotificationOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, Switch, Input, DatePicker, Modal} from 'antd';

import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;



function addQuestion(id, type) {
    this.id = id
    this.type = type
    this.q_content = {}
}

class EditorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cur_id: 1,
            question: [
                
            ],
            pointMap: [

            ]
        }
    }

    handlePointMap(selectArray, id) {
        console.log("selectArray: " + selectArray)
        console.log("before :" + this.state.pointMap)
        var _pointMap = this.state.pointMap
        var p = this.state.pointMap[id]
        for(var i=0; i<=selectArray.length; i++) {
            p[selectArray[i]] = 1
        }
        _pointMap[id] = p
        this.setState({
            pointMap: _pointMap
        })
        
        console.log("after: " + this.state.pointMap)
    }

    handleDelete(id) {
        var _state = this.state
        
        _state.question.splice(id-1, 1)
        // _state.cur_id = Math.max(..._state.question.map(x => x.id));
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
    }

    handleCheckBox() {
        var p = this.state;
        p.question.push(new addQuestion(p.cur_id, 1))
        this.setState({
            cur_id: p.cur_id + 1,
            question: p.question
        })
    }

    handleDigitBox() {
        var p = this.state;
        p.question.push(new addQuestion(p.cur_id, 2))
        this.setState({
            cur_id: p.cur_id + 1,
            question: p.question
        })
    }

    handleFloatBox() {
        var p = this.state;
        p.question.push(new addQuestion(p.cur_id, 3))
        this.setState({
            cur_id: p.cur_id + 1,
            question: p.question
        })
    }

    handleTextBox() {
        var p = this.state;
        p.question.push(new addQuestion(p.cur_id, 4))
        this.setState({
            cur_id: p.cur_id + 1,
            question: p.question
        })
    }

    handleRateBox() {
        var p = this.state;
        p.question.push(new addQuestion(p.cur_id, 5))
        this.setState({
            cur_id: p.cur_id + 1,
            question: p.question
        })
    }

    setSingleIntro(id, intro) {
        var p = this.state
        p.question[id-1].q_content.intro = intro
        this.setState({
            ...p
        })
        console.log(this.state)
    }

    setSingleChoices(id, choices) {
        var p = this.state
        p.question[id-1].q_content.choices = choices
        this.setState({
            ...p
        })
        console.log(this.state)
    }

    setCheckIntro(id, intro) {
        var p = this.state
        p.question[id-1].q_content.intro = intro
        this.setState({
            ...p
        })
        console.log(this.state)
    }

    setCheckChoices(id, choices) {
        var p = this.state
        p.question[id-1].q_content.choices = choices
        this.setState({
            ...p
        })
        console.log(this.state)
    }

    setTextBox(id, intro) {
        var p = this.state
        p.question[id-1].q_content.intro = intro
        this.setState({
            ...p
        })
        console.log(this.state)
    }

    setDigitBox(id, content, index) {
        var p = this.state
        if(index === 0)
            p.question[id-1].q_content.intro = content
        else if(index === 1)
            p.question[id-1].q_content.min = content
        else if(index === 2)
            p.question[id-1].q_content.max = content
        else if(index === 3)
            p.question[id-1].q_content.step = content
        this.setState({
            ...p
        })
        console.log(this.state)
    }

    setFloatBox(id, content, index) {
        var p = this.state
        if(index === 0)
            p.question[id-1].q_content.intro = content
        else if(index === 1)
            p.question[id-1].q_content.min = content
        else if(index === 2)
            p.question[id-1].q_content.max = content
        else if(index === 3)
            p.question[id-1].q_content.step = content
        else if(index === 4)
            p.question[id-1].q_content.precious = content
        this.setState({
            ...p
        })
        console.log(this.state)
    }

    setRateBox(id, content, index) {
        var p = this.state
        if(index === 0)
            p.question[id-1].q_content.intro = content
        else if(index === 1)
            p.question[id-1].q_content.max = content
        this.setState({
            ...p
        })
        console.log(this.state)
    }

    getComponent(q) {
        if(q.type === 0) {
            return (
                <GSingleBox 
                    id = {this.state.question.indexOf(q) + 1}
                    maxid = {this.state.question.length}
                    pointMap = {this.state.pointMap}
                    handlePointMap = {(selectArray, id)=>this.handlePointMap(selectArray, id)}
                    data={q.q_content}
                    onDelete={(e)=>this.handleDelete(e)}
                    setIntro={(id, intro)=>this.setSingleIntro(id, intro)}
                    setChoices={(id, choices)=>this.setSingleChoices(id, choices)}
                />
            )
        }
        else if(q.type === 1) {
            return (
                <GCheckBox 
                    id = {this.state.question.indexOf(q) + 1}
                    data={q.q_content}
                    onDelete={(e)=>this.handleDelete(e)}
                    setIntro={(id, intro)=>this.setCheckIntro(id, intro)}
                    setChoices={(id, choices)=>this.setCheckChoices(id, choices)}
                />  
            )
        }
        else if(q.type === 2) {
            return (
                <GDigitBox 
                    id = {this.state.question.indexOf(q) + 1}
                    data={q.q_content}
                    onDelete={(e)=>this.handleDelete(e)}
                    setContent={(id, content, index)=>this.setDigitBox(id, content, index)}
                />
            )
        }
        else if(q.type === 3) {
            return (
                <GFloatBox 
                    id = {this.state.question.indexOf(q) + 1}
                    data={q.q_content}
                    onDelete={(e)=>this.handleDelete(e)}
                    setContent={(id, content, index, precious)=>this.setFloatBox(id, content, index, precious)}
                />
            )
        }
        else if(q.type === 4) {
            return (
                <GTextBox 
                    id = {this.state.question.indexOf(q) + 1}
                    data={q.q_content}
                    onDelete={(e)=>this.handleDelete(e)}
                    setContent={(id, intro)=>this.setTextBox(id, intro)}
                />
            )
        }
        else if(q.type === 5) {
            return (
                <GRateBox 
                    id = {this.state.question.indexOf(q) + 1}
                    data={q.q_content}
                    onDelete={(e)=>this.handleDelete(e)}
                    setContent={(id, intro, index)=>this.setRateBox(id, intro, index)}
                />
            )
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {

        return (
            <Layout style={{ minHeight: '97vh'}} breakpoint='xs'>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">问卷编辑</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['2']}
                            defaultOpenKeys={['sub1','sub2','sub3']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                        <SubMenu
                            key="sub1"
                            title={
                            <span>
                                <UserOutlined />
                                <b>问卷处理</b>
                            </span>
                            }
                        >
                            <Menu.Item key="1"><Button type="link" style={{color:'grey'}} onClick={()=>(window.location.href = '#/home')}>管理问卷</Button></Menu.Item>
                            <Menu.Item key="2"><Button type="link" style={{color:'grey'}} onClick={()=>(window.location.href = '#/editor')}>新建问卷</Button></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                            <span>
                                <LaptopOutlined />
                                <b>用户信息</b>
                            </span>
                            }
                        >
                            <Menu.Item key="3"><Button type="link" style={{color:'grey'}} onClick={(e)=>this.handleDigitBox(e)}>用户信息</Button></Menu.Item>
                            <Menu.Item key="4"><Button type="link" style={{color:'grey'}} onClick={(e)=>this.handleFloatBox(e)}>退出</Button></Menu.Item>
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
                        border: '1.5px dashed #1E90FF',
                        width: (document.body.clientWidth)*0.2, height:'310px', position: 'fixed',
                        right: '50px', top: '85px', backgroundColor: 'white'
                    }}>
                        <div style={{width:'70%', margin: '15px auto'}}>
                            <p><b>设置：</b></p>
                            <span>允许非注册用户填写：</span>&nbsp;&nbsp;&nbsp;&nbsp;<Switch defaultChecked/> <p/>
                            <span>是否限制填写次数：</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Switch defaultChecked/> <p/>
                            <span>是否限制每日填写次数：</span><Switch defaultChecked/> <p/>
                            <Input addonBefore="最大填写次数" placeholder="请在此输入" /> <p/>
                        
                            <Input.Group compact>
                                <Input style={{ width: '40%' }} defaultValue="截止日期" />
                                <DatePicker style={{ width: '60%' }} />
                            </Input.Group>
                            
                            <p/>
                            <div style={{textAlign: 'center'}}>
                                <Button type="primary" icon={<ArrowUpOutlined />}  onClick={this.showModal} size="medium">
                                    生成问卷
                                </Button>
                                <Modal
                                    title="提示"
                                    visible={this.state.visible}
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}
                                    okText="确认"
                                    cancelText="取消"
                                >
                                    <p>确认生成问卷？</p>
                                </Modal>
        
                            </div>
                        </div>
                    </div>
                    <div style={{
                        border: '1.5px dashed #1E90FF',
                        width: (document.body.clientWidth)*0.2, height:'310px', position:'fixed',
                        right: '50px', top: '425px', backgroundColor: 'white'
                    }}>
                        <div style={{width:'70%', margin: '15px auto'}}>
                            <p><b>选择题</b></p>
                            <Button type="dashed" onClick={(e)=>this.handleSingleBox(e)}>单选问题</Button> &nbsp;
                            <Button type="dashed" onClick={(e)=>this.handleCheckBox(e)}>多选问题</Button>
                        </div>
                        <div style={{width:'70%', margin: '10px auto'}}>
                            <p><b>填空题</b></p>
                            <Button type="dashed" onClick={(e)=>this.handleDigitBox(e)}>整数填空</Button> &nbsp;
                            <Button type="dashed" onClick={(e)=>this.handleFloatBox(e)}>小数填空</Button> <p/>
                            <Button type="dashed" onClick={(e)=>this.handleTextBox(e)}>文本收集</Button>
                        </div>
                        <div style={{width:'70%', margin: '10px auto'}}>
                            <p><b>其他问题</b></p>
                            <Button type="dashed" onClick={(e)=>this.handleSingleBox(e)}>级联问题</Button> &nbsp;
                            <Button type="dashed" onClick={(e)=>this.handleRateBox(e)}>评分收集</Button>
                        </div>
                    </div>
                </Layout>
            </Layout>
        )
    }
}

export default EditorPage

