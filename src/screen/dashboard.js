import React from 'react';
import { UserOutlined, LaptopOutlined} from '@ant-design/icons';
import { Layout, Menu, Button} from 'antd';
import { Card, Col, Row } from 'antd';
import QuestionCard from '../component/manage/QuestionCard'

import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;


class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        }
    }

    componentDidMount() {
        this.setState({
            questions: [
                {
                    title: "大学生消费观",
                    description: "课程问卷"
                },
                {
                    title: "新冠疫情了解程度调查",
                    description: "科学调查"
                },
                {
                    title: "大学生消费观",
                    description: "课程问卷"
                },
                {
                    title: "新冠疫情了解程度调查",
                    description: "科学调查"
                },
                {
                    title: "大学生消费观",
                    description: "课程问卷"
                },
                {
                    title: "新冠疫情了解程度调查",
                    description: "科学调查"
                },
            ]
        })
    }


    render() {
        return (
            <Layout style={{ minHeight: '97vh'}} breakpoint='xs'>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">管理问卷</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1','sub2','sub3']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                        <SubMenu
                            key="sub1"
                            title={
                            <span>
                                <UserOutlined />
                                <b>问卷处理</b>
                            </span>
                            }
                        >
                            <Menu.Item key="1"><Button type="link" style={{color:'grey'}} onClick={()=>(window.location.href = '#/home')}>管理问卷</Button></Menu.Item>
                            <Menu.Item key="2"><Button type="link" style={{color:'grey'}} onClick={()=>(window.location.href = '#/editor')}>新建问卷</Button></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                            <span>
                                <LaptopOutlined />
                                <b>用户信息</b>
                            </span>
                            }
                        >
                            <Menu.Item key="3"><Button type="link" style={{color:'grey'}} >用户信息</Button></Menu.Item>
                            <Menu.Item key="4"><Button type="link" style={{color:'grey'}} >退出</Button></Menu.Item>
                        </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {/* <div style={{float: "left"}}>
                            {
                                this.state.questions.map(question => (
                                    // <div id = {this.state.questions.indexOf(question)}>
                                        <QuestionCard title={question.title} description={question.description}/>
                                    // </div>
                                ))
                            }
                            </div> */}

                            <div className="site-card-wrapper">
                                <Row gutter={14}>
                                    {
                                        this.state.questions.map(question => (
                                            <Col span={6}>
                                                <QuestionCard title={question.title} description={question.description}/>
                                                <br/>
                                                <br/>
                                            </Col>
                                        ))
                                    }
                                    
                                        
                                    
                                </Row>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
                
            </Layout>
        )
    }
}

export default DashBoard

