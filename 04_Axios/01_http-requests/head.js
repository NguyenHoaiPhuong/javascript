const axios = require('axios')

var url = 'http://webcode.me'

const makeHEADRequest = async () => {
    let resp = await axios.head(url)
    console.log(`Status: ${resp.status}`)
    console.log(`Server: ${resp.headers.server}`)
    console.log(`Date: ${resp.headers.date}`)
}

makeHEADRequest()