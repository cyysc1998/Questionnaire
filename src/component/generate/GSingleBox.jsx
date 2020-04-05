import React from 'react';
import { Form, Input, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined, EditFilled } from '@ant-design/icons';

const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: { span: 24, offset: 2 },
        sm: { span: 24, offset: 2 },
    },
};

class GSingleBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // id: this.props.id,
            intro: "",
            choices: []
        }
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
            <div style={{border: '0px solid #1E90FF', width: '50%', webkitBoxShadow: '0px 3px 3px #c8c8c8',
            mozBoxShadow: '0px 3px 3px #c8c8c8', boxShadow: '0px 3px 3px #c8c8c8'}}>
               <div style={{width: '80%', textAlign: 'center', margin: '0 auto'}}>
                    <br/>
                    <span style={{fontWeight: 'bold'}}>问题：</span>
                    <Input placeholder="请在此输入问题" style={{ width: '65%'}} onChange={this.onIntroChange}/>
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
                                            <Input placeholder='请添加选项' style={{ width: '70%'}}/>
                                            
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
                    <br/> 
                </div>
            </div>
        );
    }
}

export default GSingleBox