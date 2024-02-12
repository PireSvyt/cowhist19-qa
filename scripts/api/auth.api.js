const axios = require('axios')
const env = require('../../.env.json')

let apiURL = env.admin_database_url

async function apiAuthSignIn(signInInputs) {
    try {
        const res = await axios({
            method: 'post',
            url: apiURL + 'auth/v1/signin',
            data: signInInputs,
        })
        return res.data
    } catch (err) {
        return err.response.data
    }
}

module.exports = { apiAuthSignIn }
