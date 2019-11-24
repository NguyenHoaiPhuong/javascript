// import axios from 'axios';
const axios = require('axios');

var url = 'http://webcode.me'

const makeGETRequest = () => {
    axios.get(url).then((response) => {
        console.log(response)
        console.log(response.data)
    });
}

const makeGETRequestWithAsync = async () => {
    let resp = await axios.get(url)
    let data = resp.data
    console.log(data)
}

// makeGETRequest()
makeGETRequestWithAsync()
