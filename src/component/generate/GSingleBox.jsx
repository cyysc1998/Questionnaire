import React from 'react';
import { Form, Input, Button, Card, Modal, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined, RightCircleOutlined, MinusOutlined, SettingOutlined } from '@ant-design/icons';
import SelectBox from './SelectBox';

const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: { span: 24, offset: 2 },
        sm: { span: 24, offset: 2 },
    },
};

const blurStyle = {
    tabIndex: '0',
    hideFocus: 'true',
    border: '0px solid #1E90FF', width: '70%', 
    WebkitBoxShadow: '0px 3px 3px #c8c8c8', MozBoxShadow: '0px 3px 3px #c8c8c8', boxShadow: '0px 3px 3px #c8c8c8'
}

const focusStyle = {
    tabIndex: '0',
    hideFocus: 'true',
    borderStyle: 'solid',
    borderColor: '#03a9f4',
    boxShadow: '0 0 15px #03a9f4',
    width: '70%', 
    borderRadius: '5px'
}

var mainStyle = blurStyle;

const { Option } = Select;
var children = []

class GSingleBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            intro: "",
            choices: []
        }
    }

    onFocus() {
        mainStyle = focusStyle
    }

    onBlur() {
        mainStyle = blurStyle
    }

    onIntroChange = (e) => {
        this.props.setIntro(this.props.id, e.target.value)
    }

    onFinish = (values, allValues) => {
        this.props.setChoices(this.props.id, allValues)
        
        var arr = []
        var s = allValues.names
        for (let i in s) {
            arr.push(i); 
        }
        
        this.setState({ 
            choices: arr
        })
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    getChildren() {
        children = []
        for(let i = 0; i < this.props.maxid; i++) {
            let disabled = false; 
            for(var j = 0; j < this.props.pointMap.length; j++)
                if( this.props.pointMap[i + 1] !== -this.props.id && this.props.pointMap[i + 1] < 0)
                    disabled = true
            if(i === this.props.id - 1)
                disabled = true
            children.push(<Option key={i+1} disabled={disabled}>{'问题 ' + (i+1)}</Option>);
        }
        return children
    }

    handleRelation(value, id, c_id) {
        console.log(`selected ${value}`);
        this.props.handlePointMap(value, this.props.id)
        this.props.addRelated(value, id,  c_id);
    }

    render() {
        return (
            <Card style= {mainStyle} title={'问题'+this.props.id+'（单选）'}
                extra={
                    <div>
                        <Button
                            type="primary"
                            ghost
                            onClick={this.showModal}
                        >
                            <SettingOutlined /> 逻辑
                        </Button>
                        <Modal
                            title="请添加跳转逻辑"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            okText="确认"
                            cancelText="取消"
                        >
                            {
                                this.state.choices.map((choice) => (
                                    <div key = {this.state.choices.indexOf(choice)}>
                                        选项{this.state.choices.indexOf(choice) + 1}: &nbsp; &nbsp; &nbsp; &nbsp;
                                        {/* <Select mode="tags" style={{ width: '85%' }} placeholder="请选择关联选项" onChange={(e, choices)=>this.handleRelation(e, choices)}>
                                            {this.getChildren()}
                                        </Select> */}
                                        <SelectBox
                                            addRelated = {(value, u_id, c_id)=>this.handleRelation(value, u_id, c_id)}
                                            q_id = {this.props.id - 1}
                                            c_id = {this.state.choices.indexOf(choice)}
                                            id = {this.props.id}
                                            maxid = {this.props.maxid}
                                            pointMap = {this.props.pointMap}
                                        />
                                        <p/>
                                    </div>
                                ))
                            }
                        </Modal>
                        &nbsp;&nbsp;&nbsp;
                        <Button
                            type="primary"
                            ghost
                            onClick={() => {
                                this.props.onDelete(this.props.id)
                            }}
                            >
                            <MinusOutlined /> 删除
                        </Button>
                    </div>
                }
            >
               <div style={{width: '80%', textAlign: 'center', margin: '0 auto'}}>
                    <span style={{fontWeight: 'bold'}}>问题：</span>
                    <Input placeholder="请在此输入问题" style={{ width: '65.5%'}} onChange={this.onIntroChange}/>
                    <br/>
                    <br/>
                    <Form name="dynamic_form_item" {...formItemLayoutWithOutLabel} onValuesChange={this.onFinish}>
                        <Form.List name="names">
                            {(fields, { add, remove }) => {
                            return (
                                <div>
                                {fields.map((field, index) => (
                                    <Form.Item
                                        {...(formItemLayoutWithOutLabel)}
                                        required={false}
                                        key={field.key}
                                    >
                                        <RightCircleOutlined style={{fontSize: '20px'}}/> &nbsp;&nbsp;
                                        <Form.Item
                                            {...field}
                                            validateTrigger={['onChange', 'onBlur']}
                                            rules={[
                                            {
                                                // required: true,
                                                // whitespace: true,
                                                // message: "请输入该选项",
                                            },
                                            ]}
                                            noStyle
                                        >                        
                                            <Input placeholder={'请添加选项' + (index + 1)} style={{ width: '70%'}}/>
                                            
                                        </Form.Item>
                                        {fields.length > 0 ? (
                                            <MinusCircleOutlined
                                                className="dynamic-delete-button"
                                                style={{ margin: '0 8px' }}
                                                onClick={() => {
                                                    remove(field.name);
                                                }}
                                            />
                                        ) : null}
                                    </Form.Item>
                                    
                                ))}
                                <Form.Item>
                                    <Button
                                    type="dashed"
                                    onClick={() => {
                                        add();
                                    }}
                                    style={{ width: '70%' }}
                                    >
                                    <PlusOutlined /> 添加选项
                                    </Button>
                                </Form.Item>
                                </div>
                            );
                            }}
                        </Form.List>
                    </Form>
                </div>
            </Card>
        );
    }
}

export default GSingleBox