import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';


var wholeStyle = {
    backgroundImage: 'url(assets/login.jpg)',
    backgroundSize: '100% 100%',
    height: '800px',
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
    // border: '3px solid orange', 
    borderRadius: '10px',
    margin: "150px auto",
    backgroundColor: 'white',
}

var loginpanelStyle = {
    width: '90%',
    margin: '50px auto',
    // border: '2px solid blue',
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
      offset: 6,
      span: 16,
    },
  };

class LoginPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            passwd: "",
            remember: false
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
    }
    render() {
        return (
            <div id="login-panel" style={wholeStyle}>
                <div className="slogan"  style={{marginLeft: "80px", position: "relative", top:"40px"}}>
                    <img src="assets/logo.jpg" alt="logo" width="50px" height="50px" />
                    <img src="assets/logo2.jpg" alt="logo" width="100px" height="30px"/>
                    <Button type="primary" shape="round" style={{position: "fixed", right: '70px'}}>返回主页</Button>
                </div>
                <div className="bodypanel" style={loginStyle}>
                    <div className="center" style={{width: '100%', position: 'relative', top: '20px'}}>
                        <h1 align="center">用户名登录</h1>
                     
                        <hr style={{}}/>
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
                                    <Button type="primary" htmlType="submit" style={{width:"40%"}}>
                                    Submit
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