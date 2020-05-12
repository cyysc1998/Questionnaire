import React from 'react';
import { Radio} from 'antd';

class SingleBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: -1
        }
    }

    onChange = e => {
        this.setState({
            value: e.target.value,
        });
        this.props.setSingleBox(this.props.id, e.target.value, 0)
        this.props.setLogic(this.props.id, e.target.value)
    };

    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        const data = this.props.data
        
        const intro = <span style={{fontWeight: 'bold', fontSize: '15px'}}>{this.props.id+1}. {data.intro}</span>
        const choices = data.choices

        const Radios = choices.map((number)=>
            <Radio style={radioStyle} key={choices.indexOf(number)} value={choices.indexOf(number)}>
                {number}
            </Radio>
        )
        console.log(choices)
        return (
            <div style={{border: '0px solid #1E90FF', width: '100%'}}>
                <div style={{width: '90%', textAlign: 'left', margin: '0 auto'}}>
                    {intro} <br/>
                    <div style={{width: '90%', textAlign: 'left', margin: '0 auto'}}>
                        <Radio.Group onChange={this.onChange} value={this.state.value}>
                            {Radios}
                        </Radio.Group>
                    </div>
                    <br/>
                </div>
            </div>
        )
    }
}

export default SingleBox