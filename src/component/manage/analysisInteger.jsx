import React from 'react'
import {Table, Statistic, Row, Col} from 'antd'

const columns = [
    { title: "序号", dataIndex: "key", key: "key" },
    { title: "填写者", dataIndex: "user", key: "user" },
    { title: "选项内容", dataIndex: "answer", key: "answer" },
];


class AnalysisInteger extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        var title = <span style={{fontSize: '17px'}}>{this.props.data.key}. {this.props.data.question} (整数收集)</span>
        return (
            <div>
                <Table
                    title={()=>title}
                    columns={columns}
                    dataSource={this.props.data.answerList}
                />
                <div style={{textAlign: 'center'}}>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Statistic title="总和" value={this.props.data.sum} />
                        </Col>
                        <Col span={8}>
                            <Statistic title="最小值" value={this.props.data.min} />
                        </Col>
                        <Col span={8}>
                            <Statistic title="最大值" value={this.props.data.max} />
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Statistic title="平均值" value={this.props.data.average} />
                        </Col>
                        <Col span={8}>
                            <Statistic title="中位数" value={this.props.data.median} />
                        </Col>
                        <Col span={8}>
                            <Statistic title="众数" value={this.props.data.mode} />
                        </Col>
                    </Row>
                </div>
                <br/>
            </div>
        )
    }
}

export default AnalysisInteger