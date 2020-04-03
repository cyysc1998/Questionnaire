import React from 'react';
import { InputNumber } from 'antd';

class DigitBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    onChange(value) {
        if(value > this.props.data.min && value < this.props.data.max) {
            this.setState({ 
                value: value
            })
            this.props.setDigitBox(value)
        }
    }

    render() {

        const data = this.props.data
        
        const intro = <span style={{fontWeight: 'bold', fontSize: '18px'}}>{data.id}. {data.intro}</span>

        return (
            <div style={{border: '0px solid #1E90FF', width: '50%', webkitBoxShadow: '0px 3px 3px #c8c8c8',
                mozBoxShadow: '0px 3px 3px #c8c8c8', boxShadow: '0px 3px 3px #c8c8c8'}}>
                <div style={{width: '80%', textAlign: 'left', margin: '0 auto'}}>
                    {intro} <br/>
                    <div style={{width: '95%', textAlign: 'left', margin: '0 auto'}}>
                        {
                            data.type === 0 ?
                            <InputNumber min={data.min} max={data.max}
                                onChange={(e)=>this.onChange(e)} 
                                style={{width: '60%'}}
                            />
                                :
                            <InputNumber min={data.min} max={data.max} step={data.step} precision={data.precision} 
                                onChange={(e)=>this.onChange(e)} 
                                style={{width: '60%'}}
                            />
                        }
                    </div> 
                </div>
                <br/>
            </div>
        );
    }
}

export default DigitBox