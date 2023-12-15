const { random_id } = require("../utils/toolkit.js")
const env = require("../.env.json")

let scenari = {
    "sign up": {
        "erroneous email": () => { 
            return {
                "Login": random_id() + '@emailcom',
            }
        },
        "missmatching passwords": () => { 
            return {
                Pseudo: random_id(),
                Login: random_id() + '@email.com',
                Password: random_id(),
                Passwordrepeat: random_id(),
            }
        },
        "existing credentials": () => { 
			let rPassword = random_id()
            return {
				Pseudo: random_id(),
				Login: env.input_signin_active_login,
				Password: rPassword,
				Passwordrepeat: rPassword,
            }
        }
    },
    "sign in": {
        "activated account creadentials": () => { 
            return {
                Login: env.input_signin_active_login,
                Password: env.input_signin_active_password
            }
        },
        "erroneous email": () => { 
            return {
                Login: random_id() + '@emailcom'
            }
        },
        "random credentials": () => { 
            return {
                Password: random_id(),
                Login: random_id() + '@email.com'
            }
        },
        "activated account creadentials but invalid password": () => { 
            return {
                Login: env.input_signin_active_login,
                Password: random_id()
            }
        },
        "inactive account creadentials": () => { 
            return {
                Login: env.input_signin_inactive_login,
                Password: env.input_signin_inactive_password
            }
        },
    },
    "table": {
        "valid inputs": () => { 
            return {
                Name: random_id(),
            }
        },
    },
    "invite": {
        "erroneous email": () => { 
            return {
                Login: random_id() + '@emailcom'
            }
        },
        "missing pseudo": () => { 
            return {
                Login: random_id() + '@email.com'
            }
        },   
        "missing acknowledgement": () => { 
            return {
                Pseudo: random_id(),
                Login: random_id() + '@email.com'
            }
        },
        "valid inputs": () => { 
            return {
                Pseudo: random_id(),
                Login: random_id() + '@email.com',
                Acknowledgement: 'true'
            }
        },
    },
    "game": {
        "valid game inputs": () => { 
            return {
                Contract: "Coop. 10 folds",
                Attack: "",
                Defense: "",
                Outcome: "1",
            }
        },
    }
}

module.exports = { scenari };
