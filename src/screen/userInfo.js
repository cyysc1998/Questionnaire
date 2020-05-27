import React from 'react';
import { UserOutlined, LaptopOutlined} from '@ant-design/icons';
import { Layout, Menu, Button, Divider} from 'antd';
import {Breadcrumb, Input, message} from 'antd';
import userService from '../service/userService'
import { QuestionCircleOutlined } from '@ant-design/icons';
import {
    Form,
    Tooltip,
} from 'antd';
import axios from 'axios'

import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;
const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 4,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 6,
      },
    },
  };

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            info: []
        }
    }

    componentDidMount() {

        userService.islogin()

        let _this = this
        axios({
            method:'post',
            url: '/api/getinfo',
            data: {

            }
        })
        .then(function(response) {
            console.log(response.data)
            _this.setState({ 
                info: response.data
            })
        })
        .catch(function(error) {
            console.log(error);
        }) 
    }

    handleLogout(e) {
        userService.logOut();
    }


    onFinish = values => {
        delete values.comfirm;
        delete values.aggrement;
        console.log(values);
        axios({
            method:'post',
            url: '/api/modifiedpasswd',
            data: {
                ...values
            },
        })
        .then(function(response) {
            console.log(response.data)
            if(response.data > 0) {
                message.success('修改成功', 1.5);
            }
            else {
                message.error('原密码错误', 1.5);
            }
        })
        .catch(function(error) {
            console.log(error);
        }) 
    };

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
                            <Menu.Item key="3"><Button type="link" style={{color:'grey'}} onClick={()=>(window.location.href = '#/user')}>用户信息</Button></Menu.Item>
                            <Menu.Item key="4"><Button type="link" style={{color:'grey'}} onClick={(e)=>this.handleLogout(e)}>退出</Button></Menu.Item>
                        </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>

                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>用户信息</Breadcrumb.Item>
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
                            <Divider orientation="left" plain>用户信息</Divider>
                            <div style={{ width: '30%'}}>

                                <Input value={this.state.info.name} addonBefore="用户昵称" 
                                    style={{ width: '100%'}}
                                    disabled
                                />
                                <p/>

                                <Input value={this.state.info.email} addonBefore="用户邮箱" 
                                    style={{ width: '100%'}}
                                    disabled
                                />
                                <p/>

                                <Input value={this.state.info.date} addonBefore="注册日期" 
                                    style={{ width: '100%'}}
                                    disabled
                                />
                                <p/>

                                <Input value={this.state.info.qnumbers} addonBefore="问卷数量" 
                                    style={{ width: '100%'}}
                                    disabled
                                />
                                <p/>
                            </div>
                            <Divider orientation="left" plain>密码修改</Divider>
                    
                            <div style={{ width: '40%'}}>
                                <Form
                                    {...formItemLayout}
                                    name="register"
                                    onFinish={(e)=>this.onFinish(e)}
                                    scrollToFirstError
                                >
                                    <Form.Item
                                        name="oldPassword"
                                        label="原密码"
                                        dependencies={['password']}
                                        hasFeedback
                                        rules={[
                                        {
                                            required: true,
                                            message: '请输入原密码!',
                                        },
                                        ]}
                                    >
                                        <Input.Password placeholder="请输入原密码"/>
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        label={
                                            <span>
                                                密码&nbsp;
                                                <Tooltip title="5-15位字母、数字组合">
                                                    <QuestionCircleOutlined />
                                                </Tooltip>
                                            </span>
                                            }
                                        rules={[
                                        {
                                            required: true,
                                            message: '请输入您的密码!',
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(rule, value) {
                                                let passwd = getFieldValue('password');
                                                var reg =  /^[0-9a-zA-Z]*$/g;
                                                if(passwd === undefined)
                                                    return Promise.resolve();
                                                else if(!reg.test(passwd))
                                                    return Promise.reject('密码需仅由字母、数字组成');
                                                else if ((passwd.length < 5 || passwd.length > 15) && passwd.length !== 0) {
                                                    return Promise.reject('密码长度在5-15位之间');
                                                }
                                                return Promise.resolve();
                                            },
                                        }),
                                        ]}
                                        hasFeedback
                                    >
                                        <Input.Password placeholder="5-15位数字、字母"/>
                                    </Form.Item>

                                    <Form.Item
                                        name="confirm"
                                        label="确认密码"
                                        dependencies={['password']}
                                        hasFeedback
                                        rules={[
                                        {
                                            required: true,
                                            message: '请确认您的密码!',
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(rule, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject('您两次输入的密码不一致!');
                                            },
                                        }),
                                        ]}
                                    >
                                        <Input.Password placeholder="请再次输入密码"/>
                                    </Form.Item>

                                    <Form.Item {...tailFormItemLayout}>
                                        <Button type="primary" htmlType="submit" style={{width:"30%"}}>
                                            修改
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
                
            </Layout>
        )
    }
}

export default UserInfo

