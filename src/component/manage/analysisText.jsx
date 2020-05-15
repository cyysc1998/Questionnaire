import React from 'react'
import {Table} from 'antd'

const columns = [
    { title: "序号", dataIndex: "key", key: "key" },
    { title: "填写者", dataIndex: "user", key: "user" },
    { title: "选项内容", dataIndex: "answer", key: "answer" },
];


class AnalysisText extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        var title = <span style={{fontSize: '17px'}}>{this.props.data.key}. {this.props.data.question} (文本收集)</span>
        return (
            <div>
                <Table
                    title={()=>title}
                    columns={columns}
                    dataSource={this.props.data.answerList}
                />
            </div>
        )
    }
}

export default AnalysisText