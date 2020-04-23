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
            this.props.setDigitBox(this.props.id, value, this.props.type)
        }
    }

    render() {

        const data = this.props.data
        
        const intro = <span style={{fontWeight: 'bold', fontSize: '15px'}}>{this.props.id+1}. {data.intro}</span>

        return (
            <div style={{border: '0px solid #1E90FF', width: '100%'}}>
                <div style={{width: '90%', textAlign: 'left', margin: '0 auto'}}>
                    {intro} <p/>
                    <div style={{width: '95%', textAlign: 'left', margin: '0 auto'}}>
                        {
                            this.props.type === 2 ?
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