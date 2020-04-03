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
        // this.props.setTextBox(value)
        console.log(value);
    };

    render() {
        const { value } = this.state;

        // const data = this.props.data
        const data = {
            id: 1,
            intro: "RateBox",
            count: 5
        }
        const intro = <span style={{fontWeight: 'bold', fontSize: '18px'}}>{data.id}. {data.intro}</span>

        return (
            <div style={{border: '0px solid #1E90FF', width: '50%', webkitBoxShadow: '0px 3px 3px #c8c8c8',
                mozBoxShadow: '0px 3px 3px #c8c8c8', boxShadow: '0px 3px 3px #c8c8c8'}}>
                <div style={{width: '80%', textAlign: 'left', margin: '0 auto'}}>
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