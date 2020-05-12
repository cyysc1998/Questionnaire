import React from 'react';
import { Result, Button } from 'antd';

class SuccessfulPage extends React.Component {

    constructor(props) {
        super(props)
      
        this.state = {
        
        }
    }

    handleManage(e) {
        window.location.href = "#/home"
    }

    handleWrite(e) {
        window.location.href = "#/s/" + this.props.match.params.qId
    }

    render() {
        var subTitle = "问卷链接：localhost:3000/#/s/" + this.props.match.params.qId + " （可在问卷管理模块查看）"
        return (
            <Result
                status="success"
                title="创建问卷成功！"
                subTitle= {subTitle}
                extra={[
                <Button type="primary" key="console" onClick={(e)=>this.handleManage(e)}>
                    问卷管理
                </Button>,
                <Button key="buy" onClick={(e)=>this.handleWrite(e)}>填写问卷</Button>,
                ]}
            />
        )
    }
}

export default SuccessfulPage


