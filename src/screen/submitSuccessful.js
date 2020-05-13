import React from 'react';
import { Result, Button } from 'antd';

class SubmitSuccessful extends React.Component {

    constructor(props) {
        super(props)
      
        this.state = {
        
        }
    }

    handleManage(e) {
        window.location.href = "#/"
    }

    handleWrite(e) {
        window.location.href = "#/home"
    }

    render() {
        return (
            <Result
                status="success"
                title="提交成功！"
                subTitle= "感谢填写本问卷"
                extra={[
                <Button type="primary" key="console" onClick={(e)=>this.handleManage(e)}>
                    回到主页
                </Button>,
                <Button key="buy" onClick={(e)=>this.handleWrite(e)}>个人中心</Button>,
                ]}
            />
        )
    }
}

export default SubmitSuccessful


