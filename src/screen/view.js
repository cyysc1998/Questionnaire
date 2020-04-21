import React from 'react'

const backStyle = {
    border: '0px solid',
    padding: '0px',
    margin: '0 auto',
    backgroundColor: '#F5F5F5',
    width: '100%',
    position: 'absolute',
    top: '0px',
    bottom: '0px',
    left: '0px',
    marginBottom: '0px',
}

const headImg = {
    border: '0px solid',
    width: '814px',
    height: '30vh',
    margin: '0 auto',
    marginTop: '60px',
    backgroundColor: 'white',
    backgroundImage: 'url(assets/s.jpg)'
}

const mainStyle = {
    border: '0px solid',
    width: '814px',
    height: '50vh',
    margin: '0 auto',
    marginTop: '0px',
    backgroundColor: 'white',
    textAlign: 'center'
}

class View extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    componentDidMount(){
        console.log('componentDidMount');

        this.setState({
            title: "你是新馆肺炎终结者吗?"
        })
    }

    render() {
        return (
            <div style={backStyle}>
                <div style={headImg}>
                </div>
                <div style={mainStyle}>
                    <br/>
                    <span style={{fontWeight: 'bold', fontSize: '20px'}}>{this.state.title}</span> 
                    <br/>
                    <div style={{width:'90%', textAlign:'center', margin: '0 auto'}}>
                        <br/>
                        <hr style={{height:'2px', backgroundColor: '#53A4F4'}}/>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default View