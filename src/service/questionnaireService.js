import axios from 'axios'

class questionnaireService {

    getQuestionnaire(qId) {
        let param = new URLSearchParams();
        param.append("qId", qId);
        axios({
            method:'get',
            url: '/api/resolve',
            data: param
        })
        .then(function(response) {
            console.log(response.data)
        })
        .catch(function(error) {
            console.log(error);
        }) 
    }

}

export default new questionnaireService()