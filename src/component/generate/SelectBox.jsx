import React from 'react';
import { Input } from 'antd'

const { Select } = Input

class SingleBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <Select mode="tags" id={this.state.choices.indexOf(choice)} style={{ width: '85%' }} placeholder="请选择关联选项" onChange={(e, id)=>this.handleRelation(e, id)}>
                {this.getChildren()}
            </Select>
        )
    }
}