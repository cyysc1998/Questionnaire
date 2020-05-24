import React from 'react';
import { Result, Button } from 'antd';

class FailPage extends React.Component {

    constructor(props) {
        super(props)
      
        this.state = {
        
        }
    }

    handleManage(e) {
        window.location.href = "#/register"
    }

    handleWrite(e) {
        window.location.href = "#/login"
    }

    render() {
        var subTitle = "请注册后填写"
        return (
            <Result
                status="warning"
                title="请求问卷错误"
                subTitle= {subTitle}
                extra={[
                <Button type="primary" key="console" onClick={(e)=>this.handleManage(e)}>
                    前往注册
                </Button>,
                <Button key="buy" onClick={(e)=>this.handleWrite(e)}>前往登录</Button>,
                ]}
            />
        )
    }
}

export default FailPage


