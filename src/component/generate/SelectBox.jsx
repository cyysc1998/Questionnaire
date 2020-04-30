import React from 'react';
import { Select } from 'antd';

var children = []
const { Option } = Select

class SelectBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    handleChange(values) {
        this.props.addRelated(values, this.props.u_id, this.props.c_id)
    }

    getChildren() {
        children = []
        for(let i = 0; i < this.props.maxid; i++) {
            let disabled = false; 
            for(var j = 0; j < this.props.pointMap.length; j++)
                if( this.props.pointMap[i + 1] !== -this.props.id && this.props.pointMap[i + 1] < 0)
                    disabled = true
            if(i === this.props.id - 1)
                disabled = true
            children.push(<Option key={i+1} disabled={disabled}>{'问题 ' + (i+1)}</Option>);
        }
        return children
    }

    render() {
        return (
            <Select mode="tags" style={{ width: '85%' }} placeholder="请选择关联选项" onChange={(e)=>this.handleChange(e)}>
                {this.getChildren()}
            </Select>
        )
    }
}

export default SelectBox