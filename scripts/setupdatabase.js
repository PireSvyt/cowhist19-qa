const bcrypt = require('bcrypt')
const env = require('../.env.json')
// APIs
const { apiAdminDatabaseCommand } = require('./api/admin.api.js')
const { apiAuthSignIn } = require('./api/auth.api.js')
// Service
const { random_id, random_string } = require('../utils/toolkit.js')

let database = {}
setDatabaseUsers()
setDatabaseTables()

async function script() {
    try {
        // Login as admin
        const adminSigninResponse = await apiAuthSignIn({
            login: env.admin_signin_login,
            password: env.admin_signin_password,
            encryption: false,
        })
        console.log('signin \t', adminSigninResponse.type)

        if (adminSigninResponse.type === 'auth.signin.success') {
            // Cleanup

            // Delete users
            deleteUsersResponse = await apiAdminDatabaseCommand(
                {
                    action: {
                        type: 'delete',
                        collection: 'users',
                        match: {
                            userid: { $ne: adminSigninResponse.data.userid },
                        },
                    },
                },
                adminSigninResponse.data.token
            )
            console.log('users \t', deleteUsersResponse.type)

            // Delete tables
            deleteTablesResponse = await apiAdminDatabaseCommand(
                {
                    action: {
                        type: 'delete',
                        collection: 'tables',
                        match: {},
                    },
                },
                adminSigninResponse.data.token
            )
            console.log('tables \t', deleteTablesResponse.type)

            // Delete games
            deleteGamesResponse = await apiAdminDatabaseCommand(
                {
                    action: {
                        type: 'delete',
                        collection: 'games',
                        match: {},
                    },
                },
                adminSigninResponse.data.token
            )
            console.log('games \t', deleteGamesResponse.type)

            // Populate database

            // Users
            populateUsersResponse = await apiAdminDatabaseCommand(
                {
                    action: {
                        type: 'insertmany',
                        collection: 'users',
                        items: database.users,
                    },
                },
                adminSigninResponse.data.token
            )
            console.log('users \t', populateUsersResponse.type)

            // Tables
            populateTablesResponse = await apiAdminDatabaseCommand(
                {
                    action: {
                        type: 'insertmany',
                        collection: 'tables',
                        items: database.tables,
                    },
                },
                adminSigninResponse.data.token
            )
            console.log('tables \t', populateTablesResponse.type)
        }
    } catch (error) {
        console.error(error)
    }
}

script()

function setDatabaseUsers() {
    let users = []

    do {
        users.push(getUser('activated'))
    } while (users.length < 2)

    // Testing user
    let testingUserid = random_string()
    users.push({
        userid: testingUserid,
        login: env.input_signin_active_login,
        password: bcrypt.hashSync(env.input_signin_active_password, 10),
        pseudo: 'Testing user',
        status: 'activated',
        priviledges: ['none'],
    })

    // Inactive user
    let inactiveUserid = random_string()
    users.push({
        userid: inactiveUserid,
        login: env.input_signin_inactive_login,
        password: bcrypt.hashSync(env.input_signin_inactive_password, 10),
        pseudo: 'Inactive user',
        status: 'signedup',
        priviledges: ['none'],
    })

    database.users = users
    return
    //

    function getUser(status) {
        let rid = random_id(16)
        let rstring = random_string()
        return {
            userid: rstring,
            login: rid + '@yopmail.com',
            password: bcrypt.hashSync(rid, 10),
            pseudo: rid,
            status: status,
            priviledges: ['none'],
        }
    }
}
function setDatabaseTables() {
    let tables = []

    // First table
    let firstTableid = random_string()
    tables.push({
        tableid: firstTableid,
        name: 'Table without guest',
        guests: 0,
        userids: database.users.map((user) => {
            return user.userid
        }),
    })

    // Second table
    let secondTableid = random_string()
    tables.push({
        tableid: secondTableid,
        name: 'Table with guest',
        guests: 1,
        userids: database.users.map((user) => {
            return user.userid
        }),
    })

    database.tables = tables
}
