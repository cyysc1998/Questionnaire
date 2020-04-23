import React from 'react'
import { Rate } from 'antd';


class RateBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    onChange = value => {
        this.setState({ 
            value: value 
        });
        this.props.setRateBox(this.props.id, value, 5)
    };

    render() {
        const { value } = this.state;

        const data = this.props.data
        const intro = <span style={{fontWeight: 'bold', fontSize: '15px'}}>{this.props.id+1}. {data.intro}</span>

        return (
            <div style={{border: '0px solid #1E90FF', width: '100%'}}>
                <div style={{width: '90%', textAlign: 'left', margin: '0 auto'}}>
                    {intro} <br/>
                    <div style={{width: '90%', textAlign: 'left', margin: '0 auto'}}>
                        <Rate allowHalf defaultValue={0} onChange={this.onChange}  value={value} count = {data.count}/>
                    </div>
                </div>
                <br/>
            </div>
        );
    }
}

export default RateBox