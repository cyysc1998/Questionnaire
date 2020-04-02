import React from 'react';
import { Checkbox} from 'antd';

class CheckBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: []
        }
    }

    onChange = e => {
        var data = e.target.value
        console.log(data)
        console.log(this.state.value)
        var newValue = this.state.value
        if(this.state.value.indexOf(data) > -1) {
            newValue.splice(newValue.indexOf(data), 1)
            this.setState({ 
                value: newValue
            })
            console.log('this')
        }
        else {
            newValue.push(data)
            this.setState({ 
                value: newValue
            })
        }
        console.log(this.state.value)
        this.props.setCheckBox(this.state.value)
    };

    render() {
        const checkBoxStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
            marginLeft: '0px'
        };
        const data = this.props.data
        // const data = {
        //     id: 1,
        //     intro: '这是什么',
        //     choices: [
        //         '单选框', '多选框', '判断题', '问答题'
        //     ]
        // }
        
        const intro = <span style={{fontWeight: 'bold', fontSize: '18px'}}>{data.id}. {data.intro}</span>
        const choices = data.choices

        const Checkboxs = choices.map((number)=>
            <Checkbox style={checkBoxStyle} value={choices.indexOf(number)} onChange={this.onChange}>
                {number}
            </Checkbox>
        )
        
        return (
            <div style={{border: '0px solid #1E90FF', width: '50%', webkitBoxShadow: '0px 3px 3px #c8c8c8',
                mozBoxShadow: '0px 3px 3px #c8c8c8', boxShadow: '0px 3px 3px #c8c8c8'}}>
                <div style={{width: '60%', textAlign: 'left', margin: '0 auto'}}>
                    {intro} <br/>
                    <div style={{width: '90%', textAlign: 'left', margin: '0 auto'}}>
                        {Checkboxs}
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckBox