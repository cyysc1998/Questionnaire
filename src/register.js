import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {
    Form,
    Input,
    Tooltip,
    Checkbox,
    Button,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import axios from 'axios'

var wholeStyle = {
    backgroundImage: 'url(assets/register.jpg)',
    backgroundSize: '100% 100%',
    width: '100%',
    position: 'absolute',
    top: '0px',
    bottom: '0px',
    left: '0px',
    marginBottom: '0px',
}

var registerStyle = {
    width: '450px',
    height: '470px',
    borderRadius: '10px',
    position: 'relative', 
    top: "150px",
    margin: "0 auto",
    backgroundColor: 'white',
}

var registerpanelStyle = {
    width: '90%',
    margin: '50px auto',
}


const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 15,
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
        offset: 8,
      },
    },
  };


class RegisterPage extends Component {
    
    onFinish = values => {
        delete values.comfirm;
        delete values.aggrement;
        console.log(values);
        axios({
            method:'post',
            url: '/api/register',
            data: {
                ...values
            },
        })
        .then(function(response) {
            console.log(response.data)
        })
        .catch(function(error) {
            console.log(error);
        }) 
    };
    render() {
        return (
            <div id="register-panel" style={wholeStyle}>
                <div className="slogan"  style={{marginLeft: "80px", position: "relative", top:"40px"}}>
                    <Link to="/">
                        <img src="assets/logo4.jpg" alt="logo" width="50px" height="50px"/>
                        <img src="assets/logo2.jpg" alt="logo" width="100px" height="30px"/>
                    </Link>
                    <Link to="/login">
                        <Button type="primary" shape="round" ghost="true" style={{position: "fixed", right: '140px'}}>登录</Button>
                    </Link>
                    <Link to="/">
                        <Button type="primary" shape="round" style={{position: "fixed", right: '220px'}}>返回主页</Button>
                    </Link>
                </div>
                <div className="bodypanel" style={registerStyle}>
                    <div className="center" style={{width: '100%', position: 'relative', top: '20px'}}>
                        <h1 align="center">邮箱注册</h1>
                     
                        <hr/>
                        <div className="registerpanel" style={registerpanelStyle}>
                            <Form
                                {...formItemLayout}
                                name="register"
                                onFinish={(e)=>this.onFinish(e)}
                                scrollToFirstError
                            >
                                <Form.Item
                                    name="name"
                                    label={
                                    <span>
                                        昵称&nbsp;
                                        <Tooltip title="您对其他人展示的姓名，5-15位字母、数字组合">
                                            <QuestionCircleOutlined />
                                        </Tooltip>
                                    </span>
                                    }
                                    rules={[
                                        {
                                            required: true,
                                            message: '请输入您的昵称！',
                                            whitespace: true,
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(rule, value) {
                                                let username = getFieldValue('name');
                                                var reg =  /^[0-9a-zA-Z]*$/g;
                                                if(username === undefined)
                                                    return Promise.resolve();
                                                else if(!reg.test(username))
                                                    return Promise.reject('昵称需仅由字母、数字组成');
                                                else if (username.length < 5 || username.length > 15) {
                                                    return Promise.reject('昵称长度在5-15位之间');
                                                }
                                                return Promise.resolve();
                                            },
                                        }),
                                    ]}
                                >
                                    <Input placeholder="5-15位数字、字母"/>
                                </Form.Item>

                                <Form.Item
                                    name="email"
                                    label="电子邮件"
                                    rules={[
                                    {
                                        type: 'email',
                                        message: '输入的电子邮箱地址不存在!',
                                    },
                                    {
                                        required: true,
                                        message: '请输入您的电子邮件!',
                                    },
                                    ]}
                                >
                                    <Input placeholder="请输入您的电子邮箱地址"/>
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
                                            else if (passwd.length < 5 || passwd.length > 15) {
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

                                <Form.Item
                                    name="agreement"
                                    valuePropName="checked"
                                    rules={[
                                    {
                                        validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject('请阅读协议'),
                                    },
                                    ]}
                                    {...tailFormItemLayout}
                                >
                                    <Checkbox>
                                        我已阅读 <a href="www.baidu.com">协议</a>
                                    </Checkbox>
                                </Form.Item>

                                <Form.Item {...tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit" style={{width:"50%"}}>
                                        注册
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterPage