import React from 'react'
import {Table} from 'antd'

const columns = [
    { title: "地理位置", dataIndex: "location", key: "location" },
    { title: "问卷数", dataIndex: "qnumber", key: "qnumber" }
];


class AnalysisLocation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Table
                    columns={columns}
                    dataSource={this.props.data}
                    pagination = {{pageSize: 5}}
                />
                <br/>
            </div>
        )
    }
}

export default AnalysisLocation