import React from 'react';
import { Input, Button, Card } from 'antd';
import { MinusOutlined } from '@ant-design/icons';

const blurStyle = {
    tabIndex: '0',
    hideFocus: 'true',
    border: '0px solid #1E90FF', width: '70%', 
    WebkitBoxShadow: '0px 3px 3px #c8c8c8', MozBoxShadow: '0px 3px 3px #c8c8c8', boxShadow: '0px 3px 3px #c8c8c8'
}

class GFloatBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choices: []
        }
    }


    onIntroChange = (e, index) => {
        this.props.setContent(this.props.id, e.target.value, index);
    }


    render() {
        return (
            <Card style = {blurStyle} title={'问题'+this.props.id+'（小数收集）'}
                extra={
                    <Button
                        type="primary"
                        ghost
                        onClick={() => {
                            this.props.onDelete(this.props.id)
                        }}
                        >
                        <MinusOutlined /> 删除
                    </Button>
                }
            >
               <div style={{width: '80%', textAlign: 'center', margin: '0 auto'}}>
                    <span style={{fontWeight: 'bold'}}>问题：</span>
                    <Input placeholder="请在此输入问题" style={{ width: '65.5%'}} onChange={(e)=>this.onIntroChange(e, 0)}/>
                    <br/>
                    <br/>
                    <span style={{fontWeight: 'bold'}}>设置：</span>
                    <Input placeholder="最小值" style={{ width: '15.2%'}} onChange={(e)=>this.onIntroChange(e, 1)}/> &nbsp;
                    <Input placeholder="最大值" style={{ width: '15.2%'}} onChange={(e)=>this.onIntroChange(e, 2)}/> &nbsp;
                    <Input placeholder="步长" style={{ width: '15.2%'}} onChange={(e)=>this.onIntroChange(e, 3)}/>   &nbsp;
                    <Input placeholder="精度" style={{ width: '15.2%'}} onChange={(e)=>this.onIntroChange(e, 4)}/>   &nbsp;
                    <br/>
                </div>
            </Card>
        );
    }
}

export default GFloatBox