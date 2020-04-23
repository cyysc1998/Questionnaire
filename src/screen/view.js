import React from 'react'
import SingleBox from '../component/display/SingleBox'
import CheckBox from '../component/display/CheckBox'
import DigitBox from '../component/display/DigitBox'
import TextBox from '../component/display/TextBox'
import RateBox from '../component/display/RateBox'
import {Button, Modal} from 'antd'

const backStyle = {
    border: '0px solid',
    padding: '0px',
    margin: '0 auto',
    backgroundColor: '#F5F5F5',
    backgroundAttachment: 'scroll',
    width: '100%',
    position: 'absolute',
    top: '0px',
    bottom: '0px',
    left: '0px',
    // marginBottom: '0px',
    overflow:'auto',
}


const headImg = {
    border: '0px solid',
    width: '814px',
    height: '30vh',
    margin: '0 auto',
    position: 'relative',
    marginTop: '60px',
    backgroundColor: '#F5F5F5',
    backgroundImage: 'url(assets/s.jpg)'
}

const mainStyle = {
    border: '0px solid',
    width: '814px',
    margin: '0 auto',
    marginTop: '0px',
    backgroundColor: 'white',
    textAlign: 'center'
}

class View extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            questions: [],
            record: []
        }
    }

    componentDidMount(){
        

        this.setState({
            title: "你是新馆肺炎终结者吗?"
        })
        this.setState({
            questions: [
                {
                    type: 0,
                    intro: "您对新冠疫情的了解来源于哪里？",
                    choices: [
                        "政府", "媒体", "社区", "校园"
                    ]
                },
                {
                    type: 1,
                    intro: "您对新冠疫情的了解来源于哪里？",
                    choices: [
                        "政府", "媒体", "社区", "校园"
                    ]
                },
                {
                    type: 2,
                    intro: "您认为每天应使用几个口罩？",
                    qtype: 0,
                    min: 1,
                    max: 10,
                    step: 1
                },
                {
                    type: 3,
                    intro: "您认为应几天出一次门？",
                    min: 1,
                    max: 10,
                    step: 0.1
                },
                {
                    type: 4,
                    intro: "您对疫情防控有什么建议？",
                },
                {
                    type: 5,
                    intro: "您对本问卷的评价？",
                    max: 6
                },
            ]
        })
    }

    getComponent(question) {
        if(question.type === 0) {
            return (
                <SingleBox id = {this.state.questions.indexOf(question)} data = {question}
                    setSingleBox = {(id, value, type)=>this.getContent(id, value, type)}
                />
            ) 
        }
        else if(question.type === 1) {
            return (
                <CheckBox id = {this.state.questions.indexOf(question)} data = {question}
                    setCheckBox = {(id, value, type)=>this.getContent(id, value, type)}
                />
            )
        }
        else if(question.type === 2 || question.type === 3) {
            return (
                <DigitBox id = {this.state.questions.indexOf(question)} type = {question.type} data = {question}
                    setDigitBox = {(id, value, type)=>this.getContent(id, value, type)}
                />
            )
        }
        else if(question.type === 4) {
            return (
                <TextBox id = {this.state.questions.indexOf(question)} data = {question}
                    setTextBox = {(id, value, type)=>this.getContent(id, value, type)}
                />
            )
        }
        else if(question.type === 5) {
            return (
                <RateBox id = {this.state.questions.indexOf(question)} data = {question}
                    setRateBox = {(id, value, type)=>this.getContent(id, value, type)}
                />
            )
        }
    }

    getContent(id, value, type) {
        if(type <= 5) {
            var _state = this.state
            _state.record[id] = value
            this.setState({
                ..._state
            })
        }
        console.log(this.state.record)
    }

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

    render() {
        return (
            <div style={backStyle}>
                <div style={headImg}>
                </div>
                <div style={mainStyle}>
                    <br/>
                    <span style={{fontWeight: 'bold', fontSize: '20px'}}>{this.state.title}</span> 
                    <br/>
                    <div style={{width:'90%', textAlign:'center', margin: '0 auto'}}>
                        <br/>
                        <hr style={{height:'2px', backgroundColor: '#53A4F4'}}/>
                        <br/>
                        {
                            this.state.questions.map((question) => (
                                <div key={this.state.questions.indexOf(question)}>
                                    {
                                        this.getComponent(question)
                                    }
                                </div>
                            ))   
                        }
                        
                        <Button type="primary" onClick={this.showModal} onClick={this.showModal} size="medium">
                            提交
                        </Button>
                        <Modal
                            title="提示"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            okText="确认"
                            cancelText="取消"
                        >
                            <p>提交后无法修改，确认提交？</p>
                        </Modal>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}

export default View