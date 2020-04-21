import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import { MinusCircleOutlined, PlusOutlined, EditFilled, MinusOutlined } from '@ant-design/icons';

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

class GCheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
    };

    render() {
        return (
            <Card style= {mainStyle} title={'问题'+this.props.id+'（多选）'}
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
                                        <EditFilled style={{fontSize: '20px'}}/> &nbsp;&nbsp;
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
                    {/* <br/>  */}
                </div>
            </Card>
        );
    }
}

export default GCheckBox