import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Form, Input, Button, Checkbox} from 'antd';


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
    height: '390px',
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
            pass: 0, // 0 means succeed, 1 means error password, 2 means no such username
        }
    }

    onFinish(values){
        console.log('Success:', values);
    };
    
    onFinishFailed(errorInfo){
        console.log('Failed:', errorInfo);
    };

    handleChange(values) {
        console.log(values)
        this.setState({
            userName: values.userName,
            passwd: values.password,
            remember: values.remember
        })
        if(values.username !== "yy") {
            this.setState({ 
                pass: 2
            })
        }
        else if(values.password !== "123456") {
            this.setState({ 
                pass: 1
            })
        }
        else {
            this.setState({ 
                pass: 0
            })
        }
    }
    notice = ["登陆成功", "密码错误", "用户名未注册"]
    render() {
        return (
            <div id="login-panel" style={wholeStyle}>
                <div className="slogan"  style={{marginLeft: "80px", position: "relative", top:"40px"}}>
                    <img src="assets/logo4.jpg" alt="logo" width="50px" height="50px"/>
                    <img src="assets/logo2.jpg" alt="logo" width="100px" height="30px"/>
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
                                    remember: true,
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
                                    <Input/>
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
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit" style={{width:"50%"}}>
                                    登录
                                    </Button>
                                </Form.Item>
                                {this.state.pass===0 ? <p/>: <p style={{color:"red", textAlign:"center"}}>{this.notice[this.state.pass]}</p>}
                            </Form>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPanel