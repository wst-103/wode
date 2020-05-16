import axios from 'axios'

export function request(config,success,failure){
    const getData = axios.create({
        baseURL:"url",
        timeout:5000,
    })
    
    getData(config)
    .then(re =>{
        success(res);
    })
    .catch(err =>{
        failure(err)
    })
}