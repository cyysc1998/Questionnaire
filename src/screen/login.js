import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Form, Input, Button, Checkbox, message} from 'antd';
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

var loginStyle = {
    width: '450px',
    height: '370px',
    borderRadius: '10px',
    margin: "150px auto",
    backgroundColor: 'white',
}

var loginpanelStyle = {
    width: '90%',
    margin: '50px auto',
}

const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

class LoginPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            passwd: "",
            remember: false,
            pass: 0, // 0 means succeed, -1 means error password, -2 means no such username
        }
        this.handleResponce = this.handleResponce.bind(this)
    }
    
    onFinishFailed(errorInfo){
        console.log('Failed:', errorInfo);
    };

    handleResponce(res) {
        if(res >= 0) {
            window.location.href = "#/home";
        }
        else{
            if(res === -1)
                message.error("密码错误", 1.5)
            else if(res === -2)
                message.error("用户名为注册", 1.5)
        }
    }

    handleChange(values) {
        
        this.setState({
            userName: values.userName,
            passwd: values.password,
            remember: values.remember
        })
        const _this = this;
        delete values.remember
        console.log({...values})
        axios({
            method:'post',
            url: '/api/login',
            data: {
                ...values
            },
        })
        .then(function(response) {
            console.log(response.data)
            _this.handleResponce(response.data)
        })
        .catch(function(error) {
            console.log(error);
        }) 
    }
    notice = ["登陆成功", "密码错误", "用户名未注册"]
    render() {
        return (
            <div id="login-panel" style={wholeStyle}>
                <div className="slogan"  style={{marginLeft: "80px", position: "relative", top:"40px"}}>
                    <Link to="/">
                        <img src="assets/logo4.jpg" alt="logo" width="50px" height="50px"/>
                        <img src="assets/logo2.jpg" alt="logo" width="100px" height="30px"/>
                    </Link>
                    <Link to="/">
                        <Button type="primary" shape="round" style={{position: "fixed", right: '220px'}}>返回主页</Button>
                    </Link>
                    <Link to="/register">
                        <Button type="primary" shape="round" ghost="true" style={{position: "fixed", right: '140px'}}>注册</Button>
                    </Link>
                </div>
                <div className="bodypanel" style={loginStyle}>
                    <div className="center" style={{width: '100%', position: 'relative', top: '20px'}}>
                        <h1 align="center">用户名登录</h1>
                     
                        <hr/>
                        <div className="loginpanel" style={loginpanelStyle}>
                            <Form
                                {...layout}
                                name="basic"
                                initialValues={{
                                    remember: false,
                                }}
                                
                                // onFinish={this.onFinish}
                                // onFinishFailed={this.onFinishFailed}
                                onFinish={e=>this.handleChange(e)}
                            >
                                <Form.Item
                                    label="用户名"
                                    name="username"
                                    rules={[
                                    {
                                        required: true,
                                        message: '请输入用户名',
                                    },
                                    ]}
                                    
                                >
                                    <Input placeholder="请输入用户名"/>
                                </Form.Item>
                                <Form.Item
                                    label="密码"
                                    name="password"
                                    rules={[
                                    {
                                        required: true,
                                        message: '请输入密码',
                                    },
                                    ]}
                                >
                                    <Input.Password placeholder="请输入密码"/>
                                </Form.Item>
                                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit" style={{width:"50%"}}>
                                    登录
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

export default LoginPanel