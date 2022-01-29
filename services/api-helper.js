const axios = require('axios');
const constants = require('../utils/constants');

const getQuestionAPI = async () => {
    // axios.get().then(resp => {
    //     console.log(resp.data);
    //     return resp.data;
    // });
    
    try {
        let res = await axios.get(constants.apiEndpoint)
         if(res.status == 200){
             // test for status you want, etc
             console.log(res.status);
         }    
         // Don't forget to return something   
         return res.data;
     }
     catch (err) {
         console.error(err);
     }
};

module.exports = {getQuestionAPI};