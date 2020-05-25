import React from 'react'
import SingleBox from '../component/display/SingleBox'
import CheckBox from '../component/display/CheckBox'
import DigitBox from '../component/display/DigitBox'
import TextBox from '../component/display/TextBox'
import RateBox from '../component/display/RateBox'
import {Button, Modal, message} from 'antd'
import axios from 'axios'

const backStyle = {
    border: '0px solid',
    padding: '0px',
    margin: '0 auto',
    backgroundColor: '#F5ECFD',
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
    marginTop: '40px',
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
            title: "",
            questions: [],
            record: []
        }
    }

    componentDidMount(){
        
        let _this = this

        var qId = this.props.match.params.qId

        let param = new URLSearchParams();
        param.append("qId", qId);
        axios({
            method:'post',
            url: '/api/resolve',
            data: param
        })
        .then(function(response) {
            console.log(response.data)
            _this.setState({ 
                title: response.data.title,
                intro: response.data.intro,
                questions: response.data.questions
            })
        })
        .catch(function(error) {
            console.log(error);
        }) 
    }

    getComponent(question) {
        if(question.display === false) {
            return (
                <div/>
            )
        }
        if(question.type === 0) {
            return (
                <SingleBox id = {this.state.questions.indexOf(question)} data = {question}
                    setSingleBox = {(id, value, type)=>this.getContent(id, value, type)}
                    setLogic = {(id, choice)=>this.setLogic(id, choice)}
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

    setLogic(id, choice) {
        var p = this.state.questions
        for(let i=0; i<p[id].logic.length; i++) {
            let sk = p[id].logic[i]
            for(let j=0; j<sk.length; j++) {
                if(sk[j] !== -1) {
                    if(i === choice)
                        p[sk[j]].display = true
                    else
                        p[sk[j]].display = false
                }
            }
        }
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

        var answers = {}
        for(let i = 0; i <this.state.record.length; i++) {
            let index = "" + i
            answers[index] = this.state.record[i]
            console.log(this.state.record[i])
        }
        console.log(answers)
        axios({
            method:'post',
            url: '/api/submit',
            data: {
                qId: parseInt(this.props.match.params.qId),
                answer: answers,
                ip: window.cip,
                location: window.cname
                
            },
        })
        .then(function(response) {
            console.log(response.data)
            if(response.data === -1) {
                message.error('问卷已过期', 1.5)
                return
            }
            else if(response.data === -2) {
                message.error('问卷仅注册用户能填写', 1.5)
                window.location.href = "#/register"
            }
            else if(response.data === -3) {
                message.error('以到达问卷最大填写次数', 1.5)
                return
            }
            else if(response.data === -4) {
                message.error('以到达本日问卷最大填写次', 1.5)
                return
            }
            else if(response.data === 1)
                window.location.href = "#/submitsucceed"
        })
        .catch(function(error) {
            console.log(error);
        }) 
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
                    <span style={{fontWeight: 'bold', fontSize: '22px'}}>{this.state.title}</span> 
                    <br/>
                    <br/>
                    <div style={{width: '100%', textAlign:'center'}}>
                        <div style={{width: '80%', margin: '0 auto'}}>
                            <span style={{fontWeight: 'bold', fontSize: '14px'}}>{this.state.intro}</span> 
                        </div>
                    </div>
                    
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
                        
                        <Button type="primary" onClick={this.showModal} size="medium">
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