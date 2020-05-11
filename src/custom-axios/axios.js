import axios from 'axios'


const instance=axios.create({
    baseURL:'http://localhost:8080',
    headers:{
        'Acces-Control-Allow-Origin':'*'
    }
});

export default instance;