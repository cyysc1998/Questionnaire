import React from 'react'
import { Input } from 'antd';

const { TextArea } = Input;

class TextBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }
  

    onChange = ({ target: { value } }) => {
        this.setState({ value });
        this.props.setTextBox(value)
        // console.log(this.state.value);
    };

    render() {
        const { value } = this.state;

        const data = this.props.data
        // const data = {
        //     id: 1,
        //     intro: "textArea"
        // }
        const intro = <span style={{fontWeight: 'bold', fontSize: '15px'}}>{this.props.id}. {data.intro}</span>

        return (
            <div style={{border: '0px solid #1E90FF', width: '100%'}}>
                <div style={{width: '90%', textAlign: 'left', margin: '0 auto'}}>
                    {intro} <p/> 
                    <div style={{width: '95%', textAlign: 'left', margin: '0 auto'}}>
                        <TextArea
                            value={value}
                            onChange={this.onChange}
                            placeholder="请在此输入"
                            autoSize={{ minRows: 3, maxRows: 6 }}
                        />
                    </div> 
                </div>
                <br/>
            </div>
        );
    }
}

export default TextBox