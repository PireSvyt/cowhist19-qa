const axios = require('axios')
const env = require('../../.env.json')

let apiURL = env.admin_database_url

async function apiAdminDatabaseCommand(action, token) {
    try {
        const res = await axios({
            method: 'post',
            url: apiURL + 'admin/v1/databasecommand',
            data: action,
            headers: {
                Authorization: 'Bearer ' + token,
            },
        })
        return res.data
    } catch (err) {
        return err.response.data
    }
}

module.exports = { apiAdminDatabaseCommand }
