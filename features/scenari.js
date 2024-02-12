const { random_id } = require('../utils/toolkit.js')
const env = require('./env.json')

let scenari = {
    paths: {
        root: 'http://localhost:3000/',
        home: '',
        help: '/help',
        about: '/about',
    },
    timeout: (scope) => {
        switch (scope) {
            case 'home':
                return 5
            case 'help':
                return 5
            case 'table':
                return 5
            case 'reducers':
                return 10
            default:
                return 5
        }
    },
    'sign up': {
        'erroneous email': () => {
            let rPassword = random_id()
            return {
                inputs: {
                    Pseudo: random_id(),
                    Login: random_id() + '@emailcom',
                    Password: rPassword,
                    Passwordrepeat: rPassword,
                },
            }
        },
        'missmatching passwords': () => {
            return {
                inputs: {
                    Pseudo: random_id(),
                    Login: random_id() + '@email.com',
                    Password: random_id(),
                    Passwordrepeat: random_id(),
                },
            }
        },
        'existing credentials': () => {
            let rPassword = random_id()
            return {
                inputs: {
                    Pseudo: random_id(),
                    Login: env.input_signin_active_login,
                    Password: rPassword,
                    Passwordrepeat: rPassword,
                },
            }
        },
    },
    'sign in': {
        'activated account creadentials': () => {
            return {
                inputs: {
                    Login: env.input_signin_active_login,
                    Password: env.input_signin_active_password,
                },
            }
        },
        'erroneous email': () => {
            return {
                inputs: {
                    Login: random_id() + '@emailcom',
                },
            }
        },
        'random credentials': () => {
            return {
                inputs: {
                    Password: random_id(),
                    Login: random_id() + '@email.com',
                },
            }
        },
        'activated account creadentials but invalid password': () => {
            return {
                inputs: {
                    Login: env.input_signin_active_login,
                    Password: random_id(),
                },
            }
        },
        'inactive account creadentials': () => {
            return {
                inputs: {
                    Login: env.input_signin_inactive_login,
                    Password: env.input_signin_inactive_password,
                },
            }
        },
    },
    table: {
        'valid inputs': () => {
            return {
                inputs: {
                    Name: random_id(),
                },
            }
        },
        'an empty name': () => {
            return {
                inputs: {
                    Name: '',
                },
            }
        },
        'an existing name': () => {
            return {
                inputs: {
                    Name: 'aaannn existing name',
                },
            }
        },
        'a brand new name': () => {
            return {
                inputs: {
                    Name: 'A brand new table',
                },
            }
        },
        'intention to test game capabilities': () => {
            return {
                inputs: {
                    Name: 'Game capabilities',
                },
            }
        },
    },
    invite: {
        'erroneous email': () => {
            return {
                inputs: {
                    Login: random_id() + '@emailcom',
                },
                checkboxes: {
                    Acknowledgement: false,
                },
            }
        },
        'missing pseudo': () => {
            return {
                inputs: {
                    Login: random_id() + '@email.com',
                },
                checkboxes: {
                    Acknowledgement: false,
                },
            }
        },
        'missing acknowledgement': () => {
            return {
                inputs: {
                    Pseudo: random_id(),
                    Login: random_id() + '@email.com',
                },
                checkboxes: {
                    Acknowledgement: false,
                },
            }
        },
        'valid inputs': () => {
            return {
                inputs: {
                    Pseudo: random_id(),
                    Login: random_id() + '@email.com',
                },
                checkboxes: {
                    Acknowledgement: true,
                },
            }
        },
        'Games.Player 1': () => {
            return {
                inputs: {
                    Pseudo: 'Games.Player 1',
                    Login: 'player1@email.com',
                },
                checkboxes: {
                    Acknowledgement: true,
                },
            }
        },
    },
    game: {
        'valid game inputs': () => {
            return {
                dropdowns: {
                    Contract: 'Coop. 10 folds',
                    Attack: '',
                    Defense: '',
                },
                sliders: {
                    Outcome: '1',
                },
            }
        },
    },
}

module.exports = { scenari }
