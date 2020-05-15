import React from 'react';
import { UserOutlined, LaptopOutlined} from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Button, Divider} from 'antd';
import {Input, DatePicker} from 'antd'
import userService from '../service/userService'
import AnalysisSingle from '../component/manage/analysisSingle'
import AnalysisMulti from '../component/manage/analysisMulti'
import AnalysisInteger from '../component/manage/analysisInteger'
import AnalysisFloat from '../component/manage/analysisFloat'
import AnalysisText from '../component/manage/analysisText'
import AnalysisRate from '../component/manage/analysisRate'

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;
const { TextArea } = Input;

class Manage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: {
                metadata: { 
                    title: "",
                    intro: "",
                    finishTime: ""
                },
                answer: []
            }
        }
    }

    componentDidMount() {
        this.setState({
            result: {
                metadata: { 
                    title: "问卷标题",
                    intro: "问卷介绍",
                    startTime: "2020-5-20",
                    finishTime: "2020-6-20",
                    state: "未截止",
                    answerNumber: 10
                },
                answer: [
                    {
                        type: 0,
                        key: 1,
                        question: "单项选择",
                        choices: [
                            {
                                key: 1,
                                order: "选项一",
                                answer: "jkfsjflds",
                                userNumber: 2,
                                percent: "50%",
                                userList: "李四, 王五"
                                
                            },
                            {
                                key: 2,
                                order: "选项二",
                                answer: "选项二",
                                userNumber: 2,
                                percent: "50%",
                                userList: "李四, 王五"
                            },
                        ]
                    },
                    {
                        type: 1,
                        key: 2,
                        question: "多项选择",
                        choices: [
                            {
                                key: 1,
                                order: "选项一",
                                answer: "jkfsjflds",
                                userNumber: 2,
                                percent: "50%",
                                userList: "李四, 王五"
                                
                            },
                            {
                                key: 2,
                                order: "选项二",
                                answer: "选项二",
                                userNumber: 2,
                                percent: "50%",
                                userList: "李四, 王五"
                            },
                        ]
                    },
                    {
                        type: 2,
                        key: 3,
                        question: "整数填写",
                        answerList: [
                            {
                                key: 1,
                                answer : "10",
                                user: '李四'
                            },
                            {
                                key: 2,
                                answer: "20",
                                user: '张三'
                            },
                        ],
                        sum: 30,
                        average: 15,
                        min: 10,
                        max: 20,
                        median: 10,
                        mode: 10
                    },
                    {
                        type: 3,
                        key: 4,
                        question: "小数填写",
                        answerList: [
                            {
                                key: 1,
                                answer : "10",
                                user: '李四'
                            },
                            {
                                key: 2,
                                answer: "11",
                                user: '张三'
                            },
                        ],
                        sum: 12,
                        average: 15,
                        min: 10,
                        max: 20,
                        median: 10,
                        mode: 10
                    },
                    {
                        type: 4,
                        key: 5,
                        question: "文本填写",
                        answerList: [
                            {
                                key: 1,
                                answer : "10",
                                user: "张三"
                            },
                            {
                                key: 2,
                                answer : "10",
                                user: "李四"
                            },
                        ],
                    },
                    {
                        type: 5,
                        key: 5,
                        question: "评分填写",
                        answerList: [
                            {
                                key: 1,
                                answer : "5.5/8",
                                user: '李四'
                            },
                            {
                                key: 2,
                                answer: "6.5/8",
                                user: '张三'
                            },
                        ],
                        count: 8,
                        average: 15,
                        min: 10,
                        max: 20,
                        median: 10,
                        mode: 10
                    },
                ]
            }
        })
    }


    handleLogout(e) {
        userService.logOut();
    }

    handleTitleChange(e) {
        var _state = this.state
        _state.result.metadata.title = e.target.value;
        this.setState({
            ..._state
        })
    }

    handleIntroChange(e) {
        var _state = this.state
        _state.result.metadata.intro = e.target.value;
        this.setState({
            ..._state
        })
    }

    getComponent(answer) {
        if(answer.type === 0) 
            return <AnalysisSingle data = {answer}/>
        else if(answer.type === 1)
            return <AnalysisMulti data = {answer}/>
        else if(answer.type === 2)
            return <AnalysisInteger data = {answer}/>
        else if(answer.type === 3)
            return <AnalysisFloat data = {answer}/>
        else if(answer.type === 4)
            return <AnalysisText data = {answer}/>
        else if(answer.type === 5)
            return <AnalysisRate data = {answer}/>
    }


    render() {
        return (
            <Layout style={{ minHeight: '97vh'}} breakpoint='xs'>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">管理问卷</Menu.Item>
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
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>我的问卷</Breadcrumb.Item>
                            <Breadcrumb.Item>{this.state.result.metadata.title}</Breadcrumb.Item>
                        </Breadcrumb>
                        
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                                background: '#fff'
                            }}
                        >
                            <h2>问卷统计</h2>
                            <Divider orientation="left" plain>问卷信息</Divider>
                            <div style={{ width: '70%'}}>
                                
                                
                                <Input value={this.state.result.metadata.title} addonBefore="问卷标题" 
                                    style={{ width: '100%'}}
                                    onChange={(e)=>this.handleTitleChange(e)}
                                />
                                <br/>
                                <TextArea rows={4} value={this.state.result.metadata.intro} 
                                    style={{ width: '100%', top: '8px'}}
                                    onChange={(e)=>this.handleIntroChange(e)}
                                />
                                <br/>
                                <div style={{height: "16px"}}> </div>
                               
                                <Input.Group compact>
                                    <Input style={{ width: '15%' }} defaultValue="开始日期" disabled="true"/>
                                    <Input style={{ width: '35%' }} value={this.state.result.metadata.startTime} disabled="true"/>
                                    <Input style={{ width: '15%' }} defaultValue="截止日期" disabled="true"/>
                                    <DatePicker style={{ width: '35%' }} onChange={(e, t)=>this.handleDatePicker(e, t)}/>
                                </Input.Group>

                                <div style={{height: "8px"}}> </div>

                                <Input value={this.state.result.metadata.state} addonBefore="问卷状态" 
                                    style={{ width: '50%'}}
                                    disabled="true"
                                />

                                <Input value={this.state.result.metadata.answerNumber} addonBefore="收集问卷数" 
                                    style={{ width: '50%'}}
                                    disabled="true"
                                />
                                <div style={{height: "16px"}}> </div>
                                <div style={{width: '100%', height: "16px", textAlign: 'center'}}> 
                                    <Button type="primary">保存修改</Button>
                                </div>
                                <br/>
                            </div>
                            <Divider orientation="left" plain>统计结果</Divider>
                            
                                <div style={{width: "70%"}}>
                                    {
                                        this.state.result.answer.map((answer) =>(
                                            <div key={answer.key}>
                                                {
                                                    this.getComponent(answer)
                                                }
                                            <Divider />
                                            </div>
                                        ))
                                    } 
                                </div>
            
                        </Content>
                    </Layout>
                </Layout>
                
            </Layout>
        )
    }
}



export default Manage