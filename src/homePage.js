import React, { Component } from 'react';
import {Button} from 'antd';
import 'antd/dist/antd.css';

var backStyle = {
    backgroundImage: 'url(assets/background.jpg)',
    backgroundSize: '100% 100%',
    height: '800px',
    width: '100%',
    position: 'absolute',
    top: '0px',
    bottom: '0px',
    left: '0px',
    marginBottom: '0px',
}

var headStyle = {
    width: '100%',
    height: '15%',
}

var bodyStyle = {
    width: '100%',
    height: '70%',
    textAlign: 'center',
}

var bottomStyle = {
    width: '100%',
    height: '15%',
}

var sloganStyle = {
    fontFamily:"Microsoft YaHei",
    fontSize: '25px',
    fontWeight: 'bold',
    color: 'white',
    position: 'relative',
    top: '250px'
}

class HomePage extends Component {
    // constructor(props) {
    //     super(props);
    // }
    
    render() {
        
        return(
            <div id="homepage" style={backStyle}>
                <div id="headpart" style={headStyle}>
                    <div id="imgcontainer" style={{marginLeft: "80px", float: "left"}}>
                        <img src="assets/logo.jpg" alt="logo" width="50px" height="50px" />
                        <img src="assets/logo2.jpg" alt="logo" width="100px" height="30px"/>
                    </div>
                    <div id="functions" style={{marginLeft:"80%", position:"relative", top:"10px"}}>
                        <Button type="primary" shape="round">登录</Button>
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <Button type="primary" shape="round" ghost="true">注册</Button>
                    </div>
                </div>
                <div id="bodypart" style={bodyStyle}>
                    <div style={sloganStyle}>
                        <h1 style={{color: 'white'}}>天天问卷，您身边的调查专家</h1>
                        <span style={{color: 'orange'}}>调查问卷、调查报告、市场调研</span>
                    </div>
                    <Button type="primary" size="large" style={{width: "200px", height: "60px", fontSize: "18px", position:'relative', top: "270px"}}> 
                        免费使用
                    </Button>
                </div>
                <div id="bottompart" style={bottomStyle}>

                </div>
            </div>
        )
    }
}
export default HomePage