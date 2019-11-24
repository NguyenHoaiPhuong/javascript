const axios = require('axios')

const makeRequest = async () => {
    const config = {
        method: 'get',
        url: 'http://webcode.me'
    }

    let resp = await axios(config)

    console.log(resp.data)
}

makeRequest()