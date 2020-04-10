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
    webkitBoxShadow: '0px 3px 3px #c8c8c8', mozBoxShadow: '0px 3px 3px #c8c8c8', boxShadow: '0px 3px 3px #c8c8c8'
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

class GSingleBox extends React.Component {
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
        console.log(e.target.value);
        this.setState({
            intro: e.target.value
        })
    }

    onFinish = (values, allValues) => {
        console.log(values)
        console.log(allValues);
    };

    render() {
        return (
            <Card style= {mainStyle} title={'问题'+this.props.id+'（单选）'}
                // onClick={()=>this.onFocus()}
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

export default GSingleBox