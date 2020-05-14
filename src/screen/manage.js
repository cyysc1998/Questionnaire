import React from 'react';
import { UserOutlined, LaptopOutlined} from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Button, Divider} from 'antd';
import {Input, DatePicker} from 'antd'
import userService from '../service/userService'

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
                answer: {

                }
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
                answer: {

                }
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
                            <div>
                                <h2>问卷信息</h2>
                                <Divider orientation="left" plain>问卷信息</Divider>
                                
                                <Input value={this.state.result.metadata.title} addonBefore="问卷标题" 
                                    style={{ width: '48%'}}
                                    onChange={(e)=>this.handleTitleChange(e)}
                                />
                                <br/>
                                <TextArea rows={3} value={this.state.result.metadata.intro} 
                                    style={{ width: '48%', top: '8px'}}
                                />
                                <br/>
                                <div style={{height: "16px"}}> </div>
                               
                                <Input.Group compact>
                                    <Input style={{ width: '7%' }} defaultValue="开始日期" disabled="true"/>
                                    <Input style={{ width: '17%' }} value={this.state.result.metadata.startTime} disabled="true"/>
                                    <Input style={{ width: '7%' }} defaultValue="截止日期" disabled="true"/>
                                    <DatePicker style={{ width: '17%' }} onChange={(e, t)=>this.handleDatePicker(e, t)}/>
                                </Input.Group>

                                <div style={{height: "16px"}}> </div>

                                <Input value={this.state.result.metadata.state} addonBefore="问卷状态" 
                                    style={{ width: '23%'}}
                                    disabled="true"
                                />
                               
                                &nbsp;&nbsp;&nbsp;&nbsp;

                                <Input value={this.state.result.metadata.answerNumber} addonBefore="收集问卷数" 
                                    style={{ width: '24%'}}
                                    disabled="true"
                                />
                                <div style={{height: "16px"}}> </div>
                                <div style={{width: '48%', height: "16px", textAlign: 'center'}}> 
                                    <Button type="primary">保存修改</Button>
                                </div>
                                <br/>
                                <Divider orientation="left" plain>统计结果</Divider>
                            </div>
                            
                        </Content>
                    </Layout>
                </Layout>
                
            </Layout>
        )
    }
}



export default Manage