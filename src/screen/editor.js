import React from 'react';
import GSingleBox from '../component/generate/GSingleBox';
import GCheckBox from '../component/generate/GCheckBox';
import GDigitBox from '../component/generate/GDigitBox'
import GFloatBox from '../component/generate/GFloatBox'
import GTextBox from '../component/generate/GTextBox'
import GRateBox from '../component/generate/GRateBox'
import { UserOutlined, LaptopOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, Switch, Input, DatePicker, Modal} from 'antd';
import { Card, message } from 'antd'
import axios from 'axios'
import userService from '../service/userService'

import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;
const { TextArea } = Input;


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
                
            ],
            setting: {
                maxTimes: 1,
                needRegister: 1,
                maxTimesPerDay: 1,
                resistrictTimes: 0,
                finishTime: ""
            },
            metadata: {
                title: "",
                intro: ""
            },
            related: {

            }
        }
    }

    componentDidMount() {
        userService.islogin()
    }

    handlePointMap(selectArray, id) {
        var p = this.state.pointMap
        for(let i=0; i<this.state.question.length + 5; i++) {
            if(p[i] === -id) {
                p[i] = 0
            }
        }

        for(let i=0; i<selectArray.length; i++) {
            p[selectArray[i]] = -id
        }
        
        this.setState({
            pointMap: p,
        })
    }

    handleDelete(id) {
        // var _state = this.state
        
        // _state.question.splice(id-1, 1)

        // for(let i=0; i<this.state.question.length + 5; i++) {
        //     if(_state.pointMap[i] === -id)
        //         _state.pointMap[i] = 0
        // }

        // this.setState({ 
        //     ..._state
        // })
        this.setState({
            related : {},
            pointMap: [],
        })
        

    }

    handleDeleteChoice(qId, cId) {
        console.log(qId, cId)
        var record = this.state.related
        var _record = {}
        
    　　for(var key in record){
            let tId = parseInt(key.substr(0, 1))
            if(tId === qId) {
                let _cId = parseInt(key.substr(2, 1))
                if(cId > _cId) {
                    _record[key] = record[key]
                }
                else if(cId === _cId) {
                }
                else {
                    let t_key = "" + tId + "-" + (_cId-1)
                    _record[t_key] = record[key]
                }
            }
            else {
                _record[key] = record[key]
                _record[key] = record[key]
            }
    　　}
            
        this.setState({
            related: _record
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
    }

    setSingleChoices(id, choices) {
        var p = this.state
        p.question[id-1].q_content.choices = choices
        this.setState({
            ...p
        })
    }

    setCheckIntro(id, intro) {
        var p = this.state
        p.question[id-1].q_content.intro = intro
        this.setState({
            ...p
        })
    }

    setCheckChoices(id, choices) {
        var p = this.state
        p.question[id-1].q_content.choices = choices
        this.setState({
            ...p
        })
    }

    setTextBox(id, intro) {
        var p = this.state
        p.question[id-1].q_content.intro = intro
        this.setState({
            ...p
        })
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

    addRelated(value, u_id, c_id) {
        var p = this.state
        var qc = u_id + "-" + c_id
        p.related[qc] = value
        this.setState({
            ...p
        })
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
                    onDeleteChoice={(qId, cId)=>this.handleDeleteChoice(qId, cId)}
                    setIntro={(id, intro)=>this.setSingleIntro(id, intro)}
                    setChoices={(id, choices)=>this.setSingleChoices(id, choices)}
                    addRelated={(value, u_id, c_id)=>this.addRelated(value, u_id, c_id)}
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

    handleTitle(e) {
        var _state = this.state
        _state.metadata.title = e.target.value
        this.setState({
            ..._state
        })
    }

    handleIntro = ({ target: { value } }) => {
        var _state = this.state
        _state.metadata.intro = value
        this.setState({
            ..._state
        })
    };

    handleMaxTimes(e) {
        var _state = this.state
        _state.setting.resistrictTimes = e.target.value
        this.setState({
            ..._state
        })
    }

    handleSwitchRegister(e) {
        var _state = this.state
        _state.setting.needRegister = e
        this.setState({
            ..._state
        })
    }

    handleSwitchTimes(e) {
        var _state = this.state
        _state.setting.maxTimes = e
        this.setState({
            ..._state
        })
    }

    handleSwitchTimesPerDay(e) {
        var _state = this.state
        _state.setting.maxTimesPerDay = e
        this.setState({
            ..._state
        })
    }

    handleDatePicker(date, dateString) {
        var _state = this.state
        _state.setting.finishTime = dateString
        this.setState({
            ..._state
        })
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
        console.log(this.state)

        if(this.state.setting.resistrictTimes === null || this.state.setting.resistrictTimes === 0) {
            if(this.state.setting.maxTimes === 1 || this.state.setting.maxTimesPerDay === 1 ||this.state.setting.maxTimes === true || this.state.setting.maxTimesPerDay === true ) {
                message.error('请填写最大次数', 1.5)
                return
            }
            else {
                var _state = this.state
                _state.setting.resistrictTimes = '365'
                this.setState({
                    ..._state
                })
            }
        }
        else if(this.state.setting.finishTime === null || this.state.setting.finishTime === "") {
            message.error('请填写截止时间', 1.5)
            return
        }
        else if(this.state.metadata.title === null || this.state.metadata.title === "") {
            message.error('请填写问卷名称', 1.5)
            return
        }
        else if(this.state.metadata.intro === null || this.state.metadata.intro === "") {
            message.error('请填写问卷简介', 1.5)
            return
        }
        else if((this.state.setting.maxTimes === true || this.state.setting.maxTimes === 1) && (this.state.setting.maxTimesPerDay === true || this.state.setting.maxTimesPerDay === 1)) {
            message.error('最大填写次数与每天最大填写次数请仅选择一个', 1.5)
            return
        }
        

        axios({
            method:'post',
            url: '/api/editor',
            data: {
                u_id: 1,
                content: this.state.question,
                metadata: this.state.metadata,
                setting: this.state.setting,
                related: this.state.related,
            },
        })
        .then(function(response) {
            console.log(response.data)
            if(response.data === -1) {
                message.error('标题不能为空', 1.5)
                return
            }
            if(response.data === -2) {
                message.error('问卷简介不能为空', 1.5)
                return
            }
            if(response.data === -3) {
                message.error('注册次数必须大于0', 1.5)
                return
            }
            if(response.data === -4) {
                message.error('请检查问卷标题与问卷简介是否完整', 1.5)
                return
            }
            if(response.data === -6) {
                message.error('问卷起始时间应早于结束时间', 1.5)
                return
            }
            if(response.data + 100000 <= 0) {
                message.error('请检查第' + (response.data + 100000) + 1 + '题是否完整', 1.5)
                return
            }
            window.location.href = "#/success/" + response.data
        })
        .catch(function(error) {
            console.log(error);
        }) 
    };


    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleLogout(e) {
        userService.logOut();
    }

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
                            <Menu.Item key="3"><Button type="link" style={{color:'grey'}} >用户信息</Button></Menu.Item>
                            <Menu.Item key="4"><Button type="link" style={{color:'grey'}} onClick={(e)=>this.handleLogout(e)}>退出</Button></Menu.Item>
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
                            <Card style={{width: '70%', WebkitBoxShadow: '0px 3px 3px #c8c8c8', MozBoxShadow: '0px 3px 3px #c8c8c8', boxShadow: '0px 3px 3px #c8c8c8'}}>
                                <div style={{width: '80%', textAlign: 'left', margin: '0 auto'}}>
                                    <h3 style={{fontWeight: 'bold', color: '#1890FF'}}>问卷标题：</h3>
                                    <Input placeholder="请在此输入问卷标题" style={{ width: '90%'}} onChange={(e)=>this.handleTitle(e)}/>
                                    <br/>
                                    <br/>
                                    <h3 style={{fontWeight: 'bold', color: '#1890FF'}}>问卷简介：</h3>
                                    
                                    <TextArea placeholder="请在此输入问卷简介" style={{ width: '90%'}}
                                        autoSize={{ minRows: 3, maxRows: 6 }}
                                        onChange={(e)=>this.handleIntro(e)}
                                    />

                                    <br/>
                                </div>
                            </Card>
                            <br/>
                            <br/>
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
                        width: (document.body.clientWidth)*0.2, height:'320px', position: 'fixed',
                        right: '50px', top: '85px', backgroundColor: 'white'
                    }}>
                        <div style={{width:'70%', margin: '15px auto'}}>
                            <p><b>设置：</b></p>
                            <span>是否仅注册用户填写：</span>&nbsp;&nbsp;&nbsp;&nbsp;<Switch defaultChecked onChange={(e)=>this.handleSwitchRegister(e)}/> <p/>
                            <span>是否限制填写次数：</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Switch defaultChecked onChange={(e)=>this.handleSwitchTimes(e)}/> <p/>
                            <span>是否限制每日填写次数：</span><Switch defaultChecked onChange={(e)=>this.handleSwitchTimesPerDay(e)}/> <p/>
                            <Input addonBefore="最大填写次数" placeholder="请在此输入" onChange={(e)=>this.handleMaxTimes(e)}/> <p/>
                            
                            <Input.Group compact>
                                <Input style={{ width: '40%' }} defaultValue="截止日期" />
                                <DatePicker style={{ width: '60%' }} onChange={(e, t)=>this.handleDatePicker(e, t)}/>
                            </Input.Group>
                            
                            <div style={{textAlign: 'center', height: '26px'}}>
                            <span style={{fontSize:"12px"}}>本问卷将自动收集地理位置信息</span>
                            </div>
                            
                            <div style={{textAlign: 'center'}}>
                                <Button type="primary" icon={<ArrowUpOutlined />}  onClick={this.showModal} size="medium">
                                    生成问卷
                                </Button>
                                <Modal
                                    title="提示"
                                    visible={this.state.visible}
                                    onOk={(e)=>this.handleOk(e)}
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
                            <Button type="dashed" onClick={(e)=>this.handleRateBox(e)}>评分收集</Button>
                        </div>
                    </div>
                </Layout>
            </Layout>
        )
    }
}

export default EditorPage

