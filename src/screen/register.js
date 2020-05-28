import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {
    Form,
    Input,
    Tooltip,
    Checkbox,
    Button,
    message,
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
    height: '480px',
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

    constructor(props) {
        super(props);
        this.state = {
            name: 1,
            email: 1,
            total: 3  // 0 means all invalid, 1 means name invaid, 2 means email invaid, 3 means all valid, 4 means register succeed
        }
    }
    onFinish = values => {
        var _this = this
        delete values.comfirm;
        delete values.aggrement;

        if(_this.state.total !== 3) {
            if(_this.state.total === 0)
                message.error("该用户名、邮箱已被注册")
            else if(_this.state.total === 1)
                message.error("该用户名已被注册")
            else if(_this.state.total === 2)
                message.error("该邮箱已被注册")
            return 
        }

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
            message.success('注册成功', 1.5);
            if(response.data > 0) {
                _this.setState({ 
                    total: 4
                })
                setTimeout(function (){
                    window.location.href = '#/login'
                }, 1000)
            }
        })
        .catch(function(error) {
            console.log(error);
        }) 
    };

    nameCheck(e) {
        var _this = this
        var name = e.target.value
        let param = new URLSearchParams();
        param.append("name", name);
        return axios({
            method:'post',
            url: '/api/register/namecheck',
            data: param
        })
        .then(function(response) {
            _this.setState({
                name: response.data
            })
            var _total 
            if(_this.state.name === 0 && _this.state.email === 0)
                _total = 0
            else if(_this.state.name === 0 && _this.state.email === 1)
                _total = 1
            else if(_this.state.name === 1 && _this.state.email === 0)
                _total = 2
            else
                _total = 3
            _this.setState({
                total: _total
            })

            if(_this.state.total !== 3) {
                if(_this.state.total === 0)
                    message.error("该用户名、邮箱已被注册")
                else if(_this.state.total === 1)
                    message.error("该用户名已被注册")
                else if(_this.state.total === 2)
                    message.error("该邮箱已被注册")
            }

        })
        .catch(function(error) {
            console.log(error);
        })
    }

    emailCheck(e) {
        var _this = this
        var email = e.target.value
        let param = new URLSearchParams();
        param.append("email", email);
        return axios({
            method:'post',
            url: '/api/register/emailcheck',
            data: param
        })
        .then(function(response) {
            _this.setState({
                email: response.data
            })
            var _total 
            if(_this.state.name === 0 && _this.state.email === 0)
                _total = 0
            else if(_this.state.name === 0 && _this.state.email === 1)
                _total = 1
            else if(_this.state.name === 1 && _this.state.email === 0)
                _total = 2
            else
                _total = 3
            _this.setState({
                total: _total
            })

            if(_this.state.total !== 3) {
                if(_this.state.total === 0)
                    message.error("该用户名、邮箱已被注册")
                else if(_this.state.total === 1)
                    message.error("该用户名已被注册")
                else if(_this.state.total === 2)
                    message.error("该邮箱已被注册")
            }
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    mesg = ["该昵称已被注册 该邮箱已被注册", "该昵称已被注册", "该邮箱已被注册", "", ""]

    render() {
        var _this = this
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
                                                else if ((username.length < 5 || username.length > 15) && username.length !== 0) {
                                                    return Promise.reject('昵称长度在5-15位之间');
                                                }
                                                return Promise.resolve();
                                            },
                                        }),
                                    ]}
                                    onBlur = {(e)=>_this.nameCheck(e)}
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
                                    onBlur = {(e)=>_this.emailCheck(e)}
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
                                        我已阅读 <a href="https://www.baidu.com">协议</a>
                                    </Checkbox>
                                </Form.Item>

                                <Form.Item {...tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit" style={{width:"50%"}}>
                                        注册
                                    </Button>
                                </Form.Item>
                                {/* {this.state.pass===3 ? <p/>: <p style={{color:"red", textAlign:"center"}}>{_this.mesg[this.state.total]}</p>} */}
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterPage