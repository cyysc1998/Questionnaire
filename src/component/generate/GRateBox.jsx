import React from 'react';
import { Rate } from 'antd';
import { Input, Button, Card } from 'antd';
import { MinusOutlined } from '@ant-design/icons';

const blurStyle = {
    tabIndex: '0',
    hideFocus: 'true',
    border: '0px solid #1E90FF', width: '70%', 
    WebkitBoxShadow: '0px 3px 3px #c8c8c8', MozBoxShadow: '0px 3px 3px #c8c8c8', boxShadow: '0px 3px 3px #c8c8c8'
}

class GrateBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choices: []
        }
    }


    onIntroChange = (e) => {
        console.log(e.target.value);
        this.setState({
            intro: e.target.value
        })
    }

    render() {
        return (
            <Card style = {blurStyle} title={'问题'+this.props.id+'（整数收集）'}
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
                    <Input placeholder="请在此输入问题" style={{ width: '65.5%'}} onChange={this.onIntroChange}/>
                    <br/>
                    <br/>
                    <span style={{fontWeight: 'bold'}}>设置：</span>
                    <Input placeholder="最大等级" style={{ width: '20.5%'}} onChange={this.onIntroChange}/> &nbsp;
                    <span>（请在此处填写评分的最高等级）</span>
                    <Rate allowHalf defaultValue={0} onChange={this.onChange}  value={1.5} count = {3}/>
                    <br/>
                </div>
            </Card>
        );
    }
}

export default GrateBox