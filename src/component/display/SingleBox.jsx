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
        // console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
        this.props.setSingleRadio(e.target.value)
    };

    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        const data = this.props.data
        
        const intro = <span style={{fontWeight: 'bold', fontSize: '18px'}}>{data.id}. {data.intro}</span>
        const choices = data.choices

        const Radios = choices.map((number)=>
            <Radio style={radioStyle} value={choices.indexOf(number)}>
                {number}
            </Radio>
        )
        
        return (
            <div style={{border: '0px solid #1E90FF', width: '50%', webkitBoxShadow: '0px 3px 3px #c8c8c8',
                mozBoxShadow: '0px 3px 3px #c8c8c8', boxShadow: '0px 3px 3px #c8c8c8'}}>
                <div style={{width: '80%', textAlign: 'left', margin: '0 auto'}}>
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