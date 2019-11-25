const axios = require('axios')

async function makePostRequest() {
    let url = 'http://localhost:3000/users'
    let user = {
        id: 6,
        first_name: 'Fred',
        last_name: 'Blair',
        email: 'freddyb34@gmail.com'
    }
    
    let res = await axios.post(url, user)

    console.log(res.data)
}

makePostRequest()