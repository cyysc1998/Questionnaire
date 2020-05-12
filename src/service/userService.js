import axios from 'axios'

class userService {
    islogin() {
        axios({
            method:'post',
            url: '/api/islogin',
            data: {
                
            },
        })
        .then(function(response) {
            console.log(response.data)
            if(response.data === false)
                window.location.href = "#/login"
        })
        .catch(function(error) {
            console.log(error);
        }) 
    }

    needlogin() {
        axios({
            method:'post',
            url: '/api/islogin',
            data: {
                
            },
        })
        .then(function(response) {
            console.log(response.data)
            if(response.data === false)
                window.location.href = "#/login"
            else
                window.location.href = "#/home"
        })
        .catch(function(error) {
            console.log(error);
        }) 
    }
    
    logOut() {
        axios({
            method:'post',
            url: '/api/logout',
            data: {
                
            },
        })
        .then(function(response) {
            console.log(response.data)
            if(response.data === true)
                window.location.href = "#/login"
            else
                window.alert("登出失败")
        })
        .catch(function(error) {
            console.log(error);
        }) 
    }
}



export default new userService()