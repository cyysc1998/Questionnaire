import React from 'react'
import {Row, Col, Statistic, Table} from 'antd'

const columns = [
    { title: "序号", dataIndex: "key", key: "key" },
    { title: "填写者", dataIndex: "user", key: "user" },
    { title: "评分", dataIndex: "answer", key: "answer" },
];

class analysisRate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        var title = <span style={{fontSize: '17px'}}>{this.props.data.key}. {this.props.data.question} (评分收集)</span>
        var footer = <span style={{fontSize: '15px'}}>满分：{this.props.data.count}</span>
        return (
            <div>
                <Table
                    title={()=>title}
                    footer={()=>footer}
                    columns={columns}
                    dataSource={this.props.data.answerList}
                    pagination = {{pageSize: 5}}
                />
                <div style={{textAlign: 'center'}}>
                    <Row gutter={16}>
                        <Col span={4}>
                            <Statistic title="最小值" value={this.props.data.min} precision={2} />
                        </Col>
                        <Col span={4}>
                            <Statistic title="最大值" value={this.props.data.max} precision={2} />
                        </Col>
                        <Col span={4}>
                            <Statistic title="平均值" value={this.props.data.average} precision={2}/>
                        </Col>
                        <Col span={4}>
                            <Statistic title="中位数" value={this.props.data.median} precision={2} />
                        </Col>
                        <Col span={4}>
                            <Statistic title="众数" value={this.props.data.mode} precision={2} />
                        </Col>
                    </Row>
                </div>
                <br/>
            </div>
        )
    }
}

export default analysisRate