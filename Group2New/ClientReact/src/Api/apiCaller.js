//CartResult LogIn
import axios from 'axios';

export default function callAPI(endpoint,method = "POST",body) {
    return axios({
        method:method,
        url:`http://localhost:58564/api/${endpoint}`,
        data:body
    }).catch(err=>{
        console.log(err);
    });
};