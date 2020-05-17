import React from 'react';
import {Card} from 'antd';

const { Meta } = Card;

class QuestionCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Card
                    hoverable
                    style={{ width: 240}}
                    // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    bordered={true}
                    cover={<img alt="example" src="http://pic.51yuansu.com/pic3/cover/03/40/72/5b974bee09465_610.jpg" />}
                    // cover={<img alt="dashboard" src='http://pic.nipic.com/2007-11-13/20071113122037686_2.jpg' />}
                >
                    <Meta title={this.props.title} description={this.props.description} />
                </Card>
            </div>
        )
    }
}

export default QuestionCard