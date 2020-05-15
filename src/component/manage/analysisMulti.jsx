import React from 'react'
import {Table} from 'antd'

const columns = [
    { title: "选项", dataIndex: "order", key: "order" },
    { title: "选项内容", dataIndex: "answer", key: "answer" },
    { title: "人数", dataIndex: "userNumber", key: "userNumber" },
    { title: "百分比", dataIndex: "percent", key: "percent" },
];


class AnalysisMulti extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        var title = <span style={{fontSize: '17px'}}>{this.props.data.key}. {this.props.data.question} (多项选择， 点击 + 查看具体用户)</span>
        return (
            <Table
                title={()=>title}
                columns={columns}
                expandable={{
                expandedRowRender: record => (
                    <div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ margin: 0}}>该选项填写者:</span>
                        &nbsp;&nbsp;
                        <span style={{ margin: 0 }}>{record.userList}</span>
                    </div>
                ),
                rowExpandable: record => record.userNumber !== 0
                }}
                dataSource={this.props.data.choices}
            />
        )
    }
}

export default AnalysisMulti